#!/usr/bin/env npx tsx
/**
 * Finds and fixes questions where the correct answer is noticeably longer
 * than the wrong answers (a dead giveaway for test-takers).
 *
 * Rule: No option should be more than 40% longer than the average of the others.
 *       Wrong answers must be padded to match the correct answer length.
 *
 * Usage: npx tsx scripts/fix-answer-lengths.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import pg from "pg";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY || "";
const baseURL = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;
const anthropic = new Anthropic({ apiKey, ...(baseURL ? { baseURL } : {}) });
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const BATCH_SIZE = 12;
const CONCURRENCY = 8;
const MODEL = "claude-haiku-4-5";

// Threshold: correct answer is flagged if it's longer than avgWrongLen * RATIO
const LENGTH_RATIO = 1.40;

// ── Detection helpers ────────────────────────────────────────────────────────

function isLengthImbalanced(options: string[], correctIndex: number): boolean {
  if (!options || options.length < 2) return false;
  const correctLen = (options[correctIndex] ?? "").length;
  const wrongs = options.filter((_, i) => i !== correctIndex);
  const avgWrongLen = wrongs.reduce((s, o) => s + o.length, 0) / wrongs.length;
  return correctLen > avgWrongLen * LENGTH_RATIO;
}

// ── Types ────────────────────────────────────────────────────────────────────

interface QItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceFile: string;
  dbTable: string;
  isDdFollowUp?: boolean;
  ddParentId?: string;
  ddFollowUpIdx?: number;
}

// ── Claude rewrite ───────────────────────────────────────────────────────────

async function rewriteLengthBatch(items: QItem[]): Promise<string[][]> {
  const questionsBlock = items.map((item, i) => {
    const correctText = item.options[item.correctIndex] ?? "";
    const wrongs = item.options
      .map((o, idx) => idx !== item.correctIndex ? `  [${idx}] (${o.length} chars) "${o}"` : null)
      .filter(Boolean)
      .join("\n");
    const avgWrong = Math.round(
      item.options.filter((_, idx) => idx !== item.correctIndex)
        .reduce((s, o) => s + o.length, 0) /
      (item.options.length - 1)
    );
    return `[${i}]
Q: "${item.question.replace(/"/g, '\\"').slice(0, 220)}"
Correct answer (index ${item.correctIndex}, ${correctText.length} chars, DO NOT CHANGE):
  "${correctText.replace(/"/g, '\\"')}"
Wrong answers (avg ${avgWrong} chars — must be rewritten to match ~${correctText.length} chars each):
${wrongs}
Context: ${item.explanation.replace(/"/g, '\\"').slice(0, 160)}`;
  }).join("\n\n");

  const prompt = `You are improving healthcare compliance quiz answer choices for Joint Commission, AAAHC, and DNV accreditation training.

CRITICAL PROBLEM: The correct answers are longer than the wrong answers. Test-takers can guess the correct answer just by picking the longest option. You must fix this.

RULES:
- Keep the CORRECT answer EXACTLY as written — same words, same index, zero changes
- Rewrite ONLY the wrong answers to make them SIMILAR in length to the correct answer (within ~15%)
- Each wrong answer must remain a plausible clinical misconception a trained professional might hold
- Wrong answers = misapplied policies, wrong numbers/timeframes, confused requirements, incomplete procedures
- NEVER write obviously absurd answers
- Each wrong answer tests a DIFFERENT knowledge gap — no near-duplicates
- If the correct answer starts with "Yes." or "No.", maintain the 2 Yes / 2 No rule
- The goal: a test-taker reading all four options must NOT be able to identify the correct one by its length

${questionsBlock}

Return ONLY a JSON array of ${items.length} arrays with exactly 4 strings each.
Correct answer at its original index, word-for-word unchanged.
Format: [[opt0, opt1, opt2, opt3], ...]`;

  const res = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 5000,
    messages: [{ role: "user", content: prompt }],
  });

  const rawText = (res.content[0] as { type: string; text: string }).text.trim();
  const firstBracket = rawText.indexOf("[");
  const lastBracket = rawText.lastIndexOf("]");
  if (firstBracket === -1 || lastBracket === -1)
    throw new Error("No JSON array found: " + rawText.slice(0, 200));
  const parsed = JSON.parse(rawText.slice(firstBracket, lastBracket + 1)) as string[][];
  if (parsed.length !== items.length)
    throw new Error(`Expected ${items.length}, got ${parsed.length}`);
  return parsed;
}

// ── Source file patching (reused from fix-yesno-balance) ────────────────────

function findArrayClose(content: string, openPos: number): number {
  let depth = 0, inString = false, escape = false;
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

function patchOptionsInFile(
  filePath: string,
  questionId: string,
  newOptions: string[],
  fieldName: "options" | "baseOptions",
): boolean {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, "utf8");
  const idPattern = new RegExp(
    `id:\\s*["'\`]${questionId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'\`]`,
  );
  const idMatch = idPattern.exec(content);
  if (!idMatch) return false;
  const chunk = content.slice(idMatch.index, idMatch.index + 3000);
  const fieldOffset = chunk.indexOf(`${fieldName}:`);
  if (fieldOffset === -1) return false;
  const searchPos = idMatch.index + fieldOffset;
  const afterColon = content.indexOf("[", searchPos);
  if (afterColon === -1) return false;
  const closePos = findArrayClose(content, afterColon);
  if (closePos === -1) return false;
  const lines = newOptions
    .map((o) => `          ${JSON.stringify(o)},`)
    .join("\n");
  const replacement = `[\n${lines}\n        ]`;
  content = content.slice(0, afterColon) + replacement + content.slice(closePos + 1);
  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

// ── DB helpers ───────────────────────────────────────────────────────────────

async function updateDbOptions(table: string, id: string, newOpts: string[]): Promise<void> {
  await pool.query(`UPDATE ${table} SET options = $1 WHERE id = $2`, [newOpts, id]);
}

const ddBuffer = new Map<string, { followUps: any[]; dirty: boolean }>();

async function loadDdRow(parentId: string) {
  if (ddBuffer.has(parentId)) return;
  const { rows } = await pool.query(
    "SELECT follow_ups FROM content_deep_dive_questions WHERE id = $1",
    [parentId],
  );
  ddBuffer.set(parentId, { followUps: rows[0]?.follow_ups ?? [], dirty: false });
}

async function flushDdBuffer(): Promise<void> {
  for (const [parentId, entry] of ddBuffer.entries()) {
    if (!entry.dirty) continue;
    await pool.query(
      "UPDATE content_deep_dive_questions SET follow_ups = $1 WHERE id = $2",
      [JSON.stringify(entry.followUps), parentId],
    );
  }
}

// ── Collectors ───────────────────────────────────────────────────────────────

async function collectFromTable(table: string): Promise<QItem[]> {
  const shared = path.resolve(__dirname, "..", "shared");

  if (table === "content_questions") {
    const { rows } = await pool.query(
      `SELECT id, question, options, correct_index, explanation, level_id FROM ${table}`,
    );
    return rows
      .filter((r) => {
        const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
        return isLengthImbalanced(opts, r.correct_index ?? 0);
      })
      .map((r) => {
        const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
        const lid: string = r.level_id ?? "";
        let srcFile = path.join(shared, "questions.ts");
        if (lid.startsWith("asc-")) {
          srcFile = path.join(shared, `${lid.split("-").slice(0, 2).join("-")}.ts`);
        } else if (lid.startsWith("dnv-")) {
          srcFile = path.join(shared, "dnv-niaho-questions.ts");
        }
        return {
          id: r.id,
          question: r.question ?? "",
          options: opts,
          correctIndex: r.correct_index ?? 0,
          explanation: r.explanation ?? "",
          sourceFile: srcFile,
          dbTable: table,
        };
      });
  }

  if (table === "content_assessment_questions") {
    const { rows } = await pool.query(
      `SELECT id, question, options, correct_index, explanation, assessment_type FROM ${table}`,
    );
    return rows
      .filter((r) => {
        const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
        return isLengthImbalanced(opts, r.correct_index ?? 0);
      })
      .map((r) => {
        const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
        const atype: string = r.assessment_type ?? "";
        let srcFile = path.join(shared, "diagnostic-questions.ts");
        if (atype === "mastery") srcFile = path.join(shared, "mastery-questions.ts");
        else if (atype === "asc-pre") srcFile = path.join(shared, "asc-pretest.ts");
        else if (atype === "asc-post") srcFile = path.join(shared, "asc-posttest.ts");
        else if (atype === "dnv-pre") srcFile = path.join(shared, "dnv-pretest.ts");
        else if (atype === "dnv-post") srcFile = path.join(shared, "dnv-posttest.ts");
        return {
          id: r.id,
          question: r.question ?? "",
          options: opts,
          correctIndex: r.correct_index ?? 0,
          explanation: r.explanation ?? "",
          sourceFile: srcFile,
          dbTable: table,
        };
      });
  }

  if (table === "content_deep_dive_questions") {
    const { rows } = await pool.query(
      `SELECT id, base_options, base_correct_index, base_question, base_explanation, follow_ups, level_id FROM ${table}`,
    );
    const items: QItem[] = [];
    for (const r of rows) {
      const lid: string = r.level_id ?? "";
      let srcFile = path.join(shared, "deep-dive-questions-part1.ts");
      if (lid.includes("transport")) srcFile = path.join(shared, "deep-dive-questions-transport.ts");
      else if (lid.includes("sterile")) srcFile = path.join(shared, "deep-dive-questions-sterile.ts");
      else if (lid.includes("ic") || lid.includes("infection")) srcFile = path.join(shared, "deep-dive-questions-ic.ts");
      else if (lid.includes("anesthesia")) srcFile = path.join(shared, "deep-dive-questions-anesthesia.ts");
      else if (lid.includes("medication") || lid.includes("med")) srcFile = path.join(shared, "deep-dive-questions-medication.ts");
      else if (lid.includes("rights")) srcFile = path.join(shared, "deep-dive-questions-rights.ts");
      else if (lid.includes("life") || lid.includes("safety")) srcFile = path.join(shared, "deep-dive-questions-life-safety.ts");
      else if (lid.includes("npsg")) srcFile = path.join(shared, "deep-dive-questions-npsg.ts");
      else if (lid.includes("dnv")) srcFile = path.join(shared, "deep-dive-questions-dnv.ts");
      else if (lid.includes("part2")) srcFile = path.join(shared, "deep-dive-questions-part2.ts");
      else if (lid.includes("part3a")) srcFile = path.join(shared, "deep-dive-questions-part3a.ts");
      else if (lid.includes("part3b")) srcFile = path.join(shared, "deep-dive-questions-part3b.ts");
      else if (lid.includes("part3c")) srcFile = path.join(shared, "deep-dive-questions-part3c.ts");
      else if (lid.includes("part3d")) srcFile = path.join(shared, "deep-dive-questions-part3d.ts");

      const baseOpts = Array.isArray(r.base_options) ? r.base_options : JSON.parse(r.base_options ?? "[]");
      if (baseOpts.length && isLengthImbalanced(baseOpts, r.base_correct_index ?? 0)) {
        items.push({
          id: r.id,
          question: r.base_question ?? "",
          options: baseOpts,
          correctIndex: r.base_correct_index ?? 0,
          explanation: r.base_explanation ?? "",
          sourceFile: srcFile,
          dbTable: table,
        });
      }
      const followUps: any[] = Array.isArray(r.follow_ups) ? r.follow_ups : JSON.parse(r.follow_ups ?? "[]");
      for (let fi = 0; fi < followUps.length; fi++) {
        const fu = followUps[fi];
        const fuOpts: string[] = Array.isArray(fu.options) ? fu.options : [];
        if (fuOpts.length && isLengthImbalanced(fuOpts, fu.correctIndex ?? 0)) {
          items.push({
            id: `${r.id}-fu${fi}`,
            question: fu.question ?? "",
            options: fuOpts,
            correctIndex: fu.correctIndex ?? 0,
            explanation: fu.explanation ?? "",
            sourceFile: srcFile,
            dbTable: table,
            isDdFollowUp: true,
            ddParentId: r.id,
            ddFollowUpIdx: fi,
          });
        }
      }
    }
    return items;
  }

  return [];
}

// ── Batch fixer ──────────────────────────────────────────────────────────────

async function fixBatch(items: QItem[]): Promise<number> {
  let fixed = 0;
  let results: string[][];
  try {
    results = await rewriteLengthBatch(items);
  } catch (e: any) {
    process.stdout.write(`\n  Claude error: ${e.message}`);
    return 0;
  }

  for (let j = 0; j < items.length; j++) {
    const item = items[j];
    const newOpts = results[j];
    if (!Array.isArray(newOpts) || newOpts.length !== 4) continue;

    // Preserve correct answer exactly
    if (newOpts[item.correctIndex] !== item.options[item.correctIndex]) {
      newOpts[item.correctIndex] = item.options[item.correctIndex];
    }

    // Check it actually helped (correct no longer the longest by a wide margin)
    const correctLen = newOpts[item.correctIndex].length;
    const wrongs = newOpts.filter((_, i) => i !== item.correctIndex);
    const avgWrong = wrongs.reduce((s, o) => s + o.length, 0) / wrongs.length;
    if (correctLen > avgWrong * 1.5) {
      // Still bad but softer threshold — accept if improvement was made
      const origAvg = item.options.filter((_, i) => i !== item.correctIndex)
        .reduce((s, o) => s + o.length, 0) / (item.options.length - 1);
      if (correctLen > origAvg * 1.1) {
        // No meaningful improvement, skip
        continue;
      }
    }

    // DB update
    try {
      if (item.isDdFollowUp && item.ddParentId !== undefined && item.ddFollowUpIdx !== undefined) {
        // Follow-ups stored in follow_ups JSONB column — use buffer flush
        await loadDdRow(item.ddParentId);
        const entry = ddBuffer.get(item.ddParentId)!;
        if (entry.followUps[item.ddFollowUpIdx]) {
          entry.followUps[item.ddFollowUpIdx] = { ...entry.followUps[item.ddFollowUpIdx], options: newOpts };
          entry.dirty = true;
        }
      } else if (item.dbTable === "content_deep_dive_questions") {
        // Base questions use base_options column, not options
        await pool.query(
          `UPDATE content_deep_dive_questions SET base_options = $1 WHERE id = $2`,
          [newOpts, item.id],
        );
      } else {
        await updateDbOptions(item.dbTable, item.id, newOpts);
      }
    } catch (e: any) {
      process.stdout.write(`\n  DB error ${item.id}: ${e.message}`);
      continue;
    }

    // Source file update
    const lookupId = item.ddParentId ?? item.id;
    const fieldName = (item.dbTable === "content_deep_dive_questions" && !item.isDdFollowUp)
      ? "baseOptions" : "options";
    patchOptionsInFile(item.sourceFile, lookupId, newOpts, fieldName as "options" | "baseOptions");
    fixed++;
  }
  return fixed;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n=== Answer Length Balance Fixer ===");
  console.log(`Rule: correct answer must not be >${Math.round((LENGTH_RATIO - 1) * 100)}% longer than avg wrong answer.\n`);

  let totalFound = 0;
  let totalFixed = 0;

  for (const table of ["content_questions", "content_assessment_questions", "content_deep_dive_questions"]) {
    process.stdout.write(`Scanning ${table}...`);
    const items = await collectFromTable(table);
    process.stdout.write(` ${items.length} flagged\n`);
    if (items.length === 0) continue;
    totalFound += items.length;

    // Sample
    for (const item of items.slice(0, 3)) {
      const correctLen = item.options[item.correctIndex].length;
      const avgWrong = Math.round(
        item.options.filter((_, i) => i !== item.correctIndex)
          .reduce((s, o) => s + o.length, 0) / (item.options.length - 1),
      );
      console.log(`  ${item.id}: correct=${correctLen}ch avg_wrong=${avgWrong}ch — "${item.question.slice(0, 70)}"`);
    }
    if (items.length > 3) console.log(`  ... and ${items.length - 3} more`);

    const batches: QItem[][] = [];
    for (let i = 0; i < items.length; i += BATCH_SIZE) batches.push(items.slice(i, i + BATCH_SIZE));

    let done = 0;
    for (let i = 0; i < batches.length; i += CONCURRENCY) {
      const chunk = batches.slice(i, i + CONCURRENCY);
      const chunkFixed = await Promise.all(chunk.map((b) => fixBatch(b)));
      totalFixed += chunkFixed.reduce((a, b) => a + b, 0);
      done += chunk.reduce((a, b) => a + b.length, 0);
      // Flush ddBuffer after every chunk so timeouts don't lose follow-up fixes
      await flushDdBuffer();
      process.stdout.write(`\r  ${done}/${items.length} processed, ${totalFixed} fixed so far   `);
    }
    process.stdout.write("\n");
  }

  await flushDdBuffer();
  console.log(`\n✓ Done. Found ${totalFound} length-imbalanced questions, fixed ${totalFixed}.\n`);
  await pool.end();
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
