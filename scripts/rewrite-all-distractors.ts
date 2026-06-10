#!/usr/bin/env npx tsx
/**
 * Rewrites all question distractors using Claude Haiku.
 * Updates DB immediately; source files updated sequentially after each phase.
 *
 * Usage: npx tsx scripts/rewrite-all-distractors.ts [phase]
 * Phases: hospital | asc | dnv | dd | assessments | all (default: all)
 */

import Anthropic from "@anthropic-ai/sdk";
import pg from "pg";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;

const apiKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY || "";
const baseURL = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;
const anthropic = new Anthropic({ apiKey, ...(baseURL ? { baseURL } : {}) });
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const BATCH_SIZE = 12;
const CONCURRENCY = 8;
const MODEL = "claude-haiku-4-5";

// ── Types ──────────────────────────────────────────────────────────────────

interface QItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceFile: string;
  sourceFieldName: "options" | "baseOptions";
  dbTable: string;
  dbField: string;
  isDdFollowUp?: boolean;
  ddParentId?: string;
  ddFollowUpIdx?: number;
}

interface FileUpdate {
  id: string;
  newOptions: string[];
  fieldName: "options" | "baseOptions";
}

// ── Claude call ────────────────────────────────────────────────────────────

async function rewriteBatch(items: QItem[]): Promise<string[][]> {
  const questionsBlock = items.map((item, i) => {
    const wrong = item.options
      .map((o, idx) => (idx !== item.correctIndex ? `"${o.replace(/"/g, '\\"')}"` : null))
      .filter(Boolean)
      .join(", ");
    return `[${i}]
Q: "${item.question.replace(/"/g, '\\"').slice(0, 200)}"
Correct (index ${item.correctIndex}): "${item.options[item.correctIndex]?.replace(/"/g, '\\"') ?? ""}"
Wrong options: ${wrong}
Context: ${item.explanation.replace(/"/g, '\\"').slice(0, 180)}`;
  }).join("\n\n");

  const prompt = `You are improving healthcare compliance quiz distractors for Joint Commission, AAAHC, and DNV accreditation training.

RULES:
- Keep the CORRECT answer EXACTLY as written (word-for-word, same index)
- Each wrong answer must be a plausible clinical misconception a trained professional might hold
- Wrong answers = misapplied policies, wrong numbers/timeframes, confused requirements, incomplete procedures
- NEVER write obviously absurd answers (e.g., "terminate the staff", "add a disclaimer", "ignore it", "call police")
- Each wrong answer tests a DIFFERENT knowledge gap — no near-duplicates
- LENGTH RULE (critical): Wrong answers must be SIMILAR in length to the correct answer. The correct answer must NOT be the longest option. If the correct answer is long, write long wrong answers. If short, write short wrong answers. A test-taker must not be able to guess the correct answer simply by picking the longest option.
- YES/NO FORMAT RULE: If the correct answer starts with "Yes." or "No.", ALL four options must start with either "Yes." or "No." — and there must be EXACTLY 2 "Yes." options and 2 "No." options. Never make 3 of one and 1 of the other.

${questionsBlock}

Return ONLY a JSON array of ${items.length} arrays with exactly 4 strings each. Correct answer unchanged at its original index:
[[opt0,opt1,opt2,opt3], ...]`;

  const res = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const rawText = (res.content[0] as { type: string; text: string }).text.trim();
  const firstBracket = rawText.indexOf("[");
  const lastBracket = rawText.lastIndexOf("]");
  if (firstBracket === -1 || lastBracket === -1)
    throw new Error("No JSON array found: " + rawText.slice(0, 150));
  const parsed = JSON.parse(rawText.slice(firstBracket, lastBracket + 1)) as string[][];
  if (parsed.length !== items.length) throw new Error(`Expected ${items.length}, got ${parsed.length}`);
  return parsed;
}

// ── Source file update (safe, sequential only) ─────────────────────────────

/** String-aware bracket counter: finds the position of the matching ] for the [ at openPos */
function findArrayClose(content: string, openPos: number): number {
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = openPos; i < content.length; i++) {
    const ch = content[i];
    if (escape) { escape = false; continue; }
    if (ch === "\\" && inString) { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === "[") depth++;
    else if (ch === "]") { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function updateOptionsInContent(
  content: string,
  questionId: string,
  newOptions: string[],
  fieldName: "options" | "baseOptions"
): { content: string; success: boolean } {
  const idStr = `id: "${questionId}"`;
  const idPos = content.indexOf(idStr);
  if (idPos === -1) return { content, success: false };

  const searchWindow = content.slice(idPos, idPos + 3000);
  const fieldMatch = new RegExp(`${fieldName}:\\s*\\[`).exec(searchWindow);
  if (!fieldMatch || fieldMatch.index === undefined) return { content, success: false };

  const fieldStart = idPos + fieldMatch.index;
  const arrayOpen = content.indexOf("[", fieldStart);
  if (arrayOpen === -1) return { content, success: false };

  // Use string-aware bracket counter to find matching ] (works for both single-line and multi-line)
  const arrayClose = findArrayClose(content, arrayOpen);
  if (arrayClose === -1) return { content, success: false };

  const innerContent = content.slice(arrayOpen + 1, arrayClose);
  const isMultiLine = innerContent.includes("\n");

  let newInner: string;
  if (isMultiLine) {
    // Preserve multi-line format with detected indentation
    const itemIndentMatch = /\n(\s+)"/.exec(innerContent);
    const itemIndent = itemIndentMatch ? itemIndentMatch[1] : "          ";
    const closeIndentMatch = /\n(\s*)$/.exec(innerContent);
    const closeIndent = closeIndentMatch ? closeIndentMatch[1] : "        ";
    newInner =
      "\n" +
      newOptions.map((o) => `${itemIndent}"${o.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`).join(",\n") +
      "\n" + closeIndent;
  } else {
    // Single-line format: keep inline
    newInner = newOptions.map((o) => `"${o.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`).join(", ");
  }

  return {
    content: content.slice(0, arrayOpen + 1) + newInner + content.slice(arrayClose),
    success: true,
  };
}

function applyFileUpdates(fileQueue: Map<string, FileUpdate[]>): void {
  for (const [filePath, updates] of fileQueue.entries()) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let changed = 0;
      for (const { id, newOptions, fieldName } of updates) {
        const result = updateOptionsInContent(content, id, newOptions, fieldName);
        if (result.success) {
          content = result.content;
          changed++;
        }
      }
      if (changed > 0) {
        fs.writeFileSync(filePath, content, "utf8");
      }
    } catch (e: any) {
      console.error(`  File update error for ${path.basename(filePath)}: ${e.message}`);
    }
  }
}

// ── DB update ──────────────────────────────────────────────────────────────

async function updateDbOptions(table: string, field: string, id: string, opts: string[]): Promise<void> {
  await pool.query(`UPDATE ${table} SET ${field} = $1 WHERE id = $2`, [opts, id]);
}

const ddFollowUpBuffer = new Map<string, { followUps: any[]; dirty: boolean }>();

async function loadDdFollowUps(parentId: string): Promise<any[]> {
  if (ddFollowUpBuffer.has(parentId)) return ddFollowUpBuffer.get(parentId)!.followUps;
  const { rows } = await pool.query(
    "SELECT follow_ups FROM content_deep_dive_questions WHERE id = $1",
    [parentId]
  );
  const followUps = rows[0]?.follow_ups ?? [];
  ddFollowUpBuffer.set(parentId, { followUps, dirty: false });
  return followUps;
}

function patchDdFollowUp(parentId: string, idx: number, newOpts: string[]): void {
  const entry = ddFollowUpBuffer.get(parentId);
  if (!entry) return;
  if (entry.followUps[idx]) {
    entry.followUps[idx] = { ...entry.followUps[idx], options: newOpts };
    entry.dirty = true;
  }
}

async function flushDdFollowUps(): Promise<void> {
  for (const [parentId, entry] of ddFollowUpBuffer.entries()) {
    if (!entry.dirty) continue;
    await pool.query(
      "UPDATE content_deep_dive_questions SET follow_ups = $1 WHERE id = $2",
      [JSON.stringify(entry.followUps), parentId]
    );
  }
}

// ── Batch runner ───────────────────────────────────────────────────────────

async function runBatches(items: QItem[]): Promise<Map<string, FileUpdate[]>> {
  const batches: QItem[][] = [];
  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    batches.push(items.slice(i, i + BATCH_SIZE));
  }

  // fileQueue collects updates to apply after all batches — avoids concurrent file writes
  const fileQueue = new Map<string, FileUpdate[]>();
  let dbUpdated = 0;
  let dbErrors = 0;

  for (let i = 0; i < batches.length; i += CONCURRENCY) {
    const chunk = batches.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (batch) => {
        let results: string[][];
        try {
          results = await rewriteBatch(batch);
        } catch (e: any) {
          process.stdout.write(`\n  Claude error: ${e.message}`);
          return;
        }

        for (let j = 0; j < batch.length; j++) {
          const item = batch[j];
          const newOpts = results[j];
          if (!Array.isArray(newOpts) || newOpts.length < 2) continue;

          // Always preserve correct answer exactly
          if (newOpts[item.correctIndex] !== item.options[item.correctIndex]) {
            newOpts[item.correctIndex] = item.options[item.correctIndex];
          }

          // DB update
          try {
            if (item.isDdFollowUp && item.ddParentId !== undefined && item.ddFollowUpIdx !== undefined) {
              await loadDdFollowUps(item.ddParentId);
              patchDdFollowUp(item.ddParentId, item.ddFollowUpIdx, newOpts);
            } else {
              await updateDbOptions(item.dbTable, item.dbField, item.id, newOpts);
            }
            dbUpdated++;
          } catch (e: any) {
            dbErrors++;
            process.stdout.write(`\n  DB error ${item.id}: ${e.message}`);
          }

          // Queue file update (applied sequentially after all batches)
          const existing = fileQueue.get(item.sourceFile) ?? [];
          existing.push({ id: item.id, newOptions: newOpts, fieldName: item.sourceFieldName });
          fileQueue.set(item.sourceFile, existing);
        }
      })
    );

    const done = Math.min((i + CONCURRENCY) * BATCH_SIZE, items.length);
    const pct = Math.round((done / items.length) * 100);
    process.stdout.write(`\r  ${done}/${items.length} (${pct}%) — DB ok:${dbUpdated} err:${dbErrors}  `);
  }
  process.stdout.write("\n");
  return fileQueue;
}

// ── Question collectors ────────────────────────────────────────────────────

function collectFromLevels(levels: any[], sourceFile: string): QItem[] {
  const items: QItem[] = [];
  for (const level of levels) {
    for (const q of level.questions ?? []) {
      if (!q.id || !Array.isArray(q.options) || q.correctIndex === undefined) continue;
      items.push({
        id: q.id,
        question: q.question ?? "",
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation ?? "",
        sourceFile,
        sourceFieldName: "options",
        dbTable: "content_questions",
        dbField: "options",
      });
    }
  }
  return items;
}

function collectDeepDive(levels: any[], sourceFile: string): QItem[] {
  const items: QItem[] = [];
  for (const level of levels) {
    for (const q of level.questions ?? []) {
      if (!q.id) continue;
      if (Array.isArray(q.baseOptions) && q.baseCorrectIndex !== undefined) {
        items.push({
          id: q.id,
          question: q.baseQuestion ?? "",
          options: q.baseOptions,
          correctIndex: q.baseCorrectIndex,
          explanation: q.baseExplanation ?? "",
          sourceFile,
          sourceFieldName: "baseOptions",
          dbTable: "content_deep_dive_questions",
          dbField: "base_options",
        });
      }
      for (let fi = 0; fi < (q.followUps ?? []).length; fi++) {
        const fu = q.followUps[fi];
        if (!Array.isArray(fu.options) || fu.correctIndex === undefined) continue;
        items.push({
          id: `${q.id}-fu${fi}`,
          question: fu.question ?? "",
          options: fu.options,
          correctIndex: fu.correctIndex,
          explanation: fu.explanation ?? "",
          sourceFile,
          sourceFieldName: "options",
          dbTable: "content_deep_dive_questions",
          dbField: "follow_ups",
          isDdFollowUp: true,
          ddParentId: q.id,
          ddFollowUpIdx: fi,
        });
      }
    }
  }
  return items;
}

function collectAssessments(questions: any[], sourceFile: string): QItem[] {
  return questions
    .filter((q) => q.id && Array.isArray(q.options) && q.correctIndex !== undefined)
    .map((q) => ({
      id: q.id,
      question: q.question ?? "",
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? "",
      sourceFile,
      sourceFieldName: "options" as const,
      dbTable: "content_assessment_questions",
      dbField: "options",
    }));
}

// ── Phase runner ───────────────────────────────────────────────────────────

async function runPhase(label: string, items: QItem[], startOffset = 0): Promise<void> {
  const slice = startOffset > 0 ? items.slice(startOffset) : items;
  const tag = startOffset > 0 ? ` (offset ${startOffset})` : "";
  console.log(`▶  ${label}${tag} — ${slice.length} questions`);
  const fileQueue = await runBatches(slice);
  await flushDdFollowUps();
  console.log(`   Updating source files...`);
  applyFileUpdates(fileQueue);
  console.log(`   ✓ Done\n`);
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const phase = process.argv[2] || "all";
  const offset = parseInt(process.argv[3] || "0", 10);
  const shared = path.resolve(__dirname, "..", "shared");

  console.log(`\n=== Distractor Rewriter — phase: ${phase} ===\n`);

  try {
    if (phase === "all" || phase === "hospital") {
      const { hospitalLevels } = await import("../shared/questions");
      await runPhase("Hospital quiz", collectFromLevels(hospitalLevels, path.join(shared, "questions.ts")));
    }

    const allAscFiles = [
      "asc-adm", "asc-asg", "asc-beh", "asc-cmc", "asc-cpv", "asc-crd",
      "asc-emg", "asc-fac", "asc-gov", "asc-ipc", "asc-lrd", "asc-med",
      "asc-ocs", "asc-prr", "asc-qua", "asc-saf", "asc-val",
    ];
    if (phase === "all" || phase === "asc" || allAscFiles.includes(phase)) {
      const ascFiles = phase === "all" || phase === "asc" ? allAscFiles : [phase];
      for (const fname of ascFiles) {
        const mod = await import(`../shared/${fname}` as string);
        const levelKey = Object.keys(mod).find((k) => k.endsWith("Level") || k.endsWith("level"));
        if (!levelKey) continue;
        const level = mod[levelKey];
        const items = collectFromLevels([level], path.join(shared, `${fname}.ts`));
        if (items.length > 0) await runPhase(`ASC ${fname}`, items);
      }
    }

    if (phase === "all" || phase === "dnv") {
      const { dnvLevels } = await import("../shared/dnv-niaho-questions");
      await runPhase("DNV quiz", collectFromLevels(dnvLevels as any[], path.join(shared, "dnv-niaho-questions.ts")));
    }

    if (phase === "all" || phase === "dd" || phase.startsWith("dd-")) {
      const allDdFiles = [
        "deep-dive-questions-transport",
        "deep-dive-questions-part1",
        "deep-dive-questions-part2",
        "deep-dive-questions-part3a",
        "deep-dive-questions-part3b",
        "deep-dive-questions-part3c",
        "deep-dive-questions-part3d",
        "deep-dive-questions-sterile",
        "deep-dive-questions-ic",
        "deep-dive-questions-anesthesia",
        "deep-dive-questions-medication",
        "deep-dive-questions-rights",
        "deep-dive-questions-life-safety",
        "deep-dive-questions-npsg",
        "deep-dive-questions-dnv",
      ];
      // Support single-file targeting: dd-part1 → deep-dive-questions-part1
      const ddFiles = phase.startsWith("dd-")
        ? allDdFiles.filter(f => f.includes(phase.slice(3)))
        : allDdFiles;
      for (const fname of ddFiles) {
        const mod = await import(`../shared/${fname}` as string);
        const exportKey = Object.keys(mod).find((k) => k !== "default");
        if (!exportKey) continue;
        const val = mod[exportKey];
        const levels = Array.isArray(val) ? val : [val];
        const items = collectDeepDive(levels, path.join(shared, `${fname}.ts`));
        if (items.length > 0) await runPhase(`DD ${fname}`, items, phase.startsWith("dd-") ? offset : 0);
      }
    }

    if (phase === "all" || phase === "assessments") {
      const aFiles = [
        { file: "diagnostic-questions", key: "diagnosticQuestions" },
        { file: "mastery-questions", key: "masteryQuestions" },
        { file: "asc-pretest", key: "ascPretestQuestions" },
        { file: "asc-posttest", key: "ascPosttestQuestions" },
        { file: "dnv-pretest", key: null },
        { file: "dnv-posttest", key: null },
      ];
      for (const { file, key } of aFiles) {
        try {
          const mod = await import(`../shared/${file}` as string);
          const exportKey = key ?? Object.keys(mod).find((k) => k !== "default");
          if (!exportKey || !Array.isArray(mod[exportKey])) continue;
          const items = collectAssessments(mod[exportKey], path.join(shared, `${file}.ts`));
          if (items.length > 0) await runPhase(`Assessment ${file}`, items);
        } catch {
          /* file may not exist */
        }
      }
    }

    console.log("✓ All phases complete.\n");
  } finally {
    await pool.end();
  }
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
