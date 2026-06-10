#!/usr/bin/env npx tsx
/**
 * Finds and fixes all Yes/No-format questions that don't have exactly 2 Yes + 2 No options.
 * Rule: Yes/No questions MUST have exactly 2 "Yes." options and 2 "No." options.
 *
 * Usage: npx tsx scripts/fix-yesno-balance.ts
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

const BATCH_SIZE = 10;
const CONCURRENCY = 6;
const MODEL = "claude-haiku-4-5";

// ── Helpers ─────────────────────────────────────────────────────────────────

function isYesNoOptions(options: string[]): boolean {
  const hits = options.filter(o => /^(Yes|No)\./i.test(o.trim())).length;
  return hits >= 2;
}

function countYes(options: string[]): number {
  return options.filter(o => /^Yes\./i.test(o.trim())).length;
}
function countNo(options: string[]): number {
  return options.filter(o => /^No\./i.test(o.trim())).length;
}

function isImbalanced(options: string[]): boolean {
  if (!isYesNoOptions(options)) return false;
  return countYes(options) !== 2 || countNo(options) !== 2;
}

// ── Types ───────────────────────────────────────────────────────────────────

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

async function rewriteYesNoBatch(items: QItem[]): Promise<string[][]> {
  const questionsBlock = items.map((item, i) => {
    const yesCount = countYes(item.options);
    const noCount = countNo(item.options);
    const correctText = item.options[item.correctIndex] ?? "";
    const wrongOptions = item.options
      .map((o, idx) => idx !== item.correctIndex ? `  [${idx}] "${o}"` : null)
      .filter(Boolean)
      .join("\n");
    return `[${i}]
Q: "${item.question.replace(/"/g, '\\"').slice(0, 220)}"
Correct answer (index ${item.correctIndex}, DO NOT CHANGE): "${correctText.replace(/"/g, '\\"')}"
Current wrong options:\n${wrongOptions}
Current balance: ${yesCount} Yes / ${noCount} No — NEEDS to be 2 Yes / 2 No
Explanation context: ${item.explanation.replace(/"/g, '\\"').slice(0, 160)}`;
  }).join("\n\n");

  const prompt = `You are fixing healthcare compliance quiz questions that use Yes/No answer format.

CRITICAL RULE: Every Yes/No question MUST have EXACTLY 2 options starting with "Yes." and 2 options starting with "No." (4 total).

For each question below:
- The CORRECT answer is marked — copy it EXACTLY, do NOT change a single word
- Rewrite only the WRONG options so the total is exactly 2 "Yes." and 2 "No." options
- Each wrong answer must start with "Yes." or "No." followed by a plausible but incorrect clinical reason
- Wrong "Yes." answers: believable misconceptions why something would be acceptable/required
- Wrong "No." answers: believable misconceptions why something would not be acceptable/required
- Do NOT write absurd, sarcastic, or obviously wrong answers
- Match the length and clinical tone of the correct answer

${questionsBlock}

Return ONLY a JSON array of ${items.length} arrays, each with exactly 4 strings.
Correct answer must be at its original index, word-for-word unchanged.
Format: [[opt0, opt1, opt2, opt3], ...]`;

  const res = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 4000,
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

// ── Source file patching ─────────────────────────────────────────────────────

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

function patchOptionsInFile(filePath: string, questionId: string, newOptions: string[], fieldName: "options" | "baseOptions"): boolean {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, "utf8");

  // Find the question block by id
  const idPattern = new RegExp(`id:\\s*["'\`]${questionId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'\`]`);
  const idMatch = idPattern.exec(content);
  if (!idMatch) return false;

  const searchStr = `${fieldName}:`;
  let searchPos = idMatch.index;
  // Look for the field within the next 3000 chars of the question block
  const chunk = content.slice(idMatch.index, idMatch.index + 3000);
  const fieldOffset = chunk.indexOf(searchStr);
  if (fieldOffset === -1) return false;
  searchPos = idMatch.index + fieldOffset;

  const afterColon = content.indexOf("[", searchPos);
  if (afterColon === -1) return false;
  const closePos = findArrayClose(content, afterColon);
  if (closePos === -1) return false;

  const formatted = JSON.stringify(newOptions)
    .slice(1, -1)
    .split('","')
    .map((s, i, arr) => {
      const val = i === 0 ? s.replace(/^\["?/, '"') : '"' + s;
      const end = i === arr.length - 1 ? val.replace(/"?]$/, '"') : val;
      return "          " + end;
    })
    .join(",\n");

  const replacement = `[\n${formatted},\n        ]`;
  content = content.slice(0, afterColon) + replacement + content.slice(closePos + 1);
  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

// ── DB helpers ───────────────────────────────────────────────────────────────

async function getDbOptions(table: string, id: string): Promise<string[] | null> {
  const { rows } = await pool.query(`SELECT options FROM ${table} WHERE id = $1`, [id]);
  if (!rows.length) return null;
  const raw = rows[0].options;
  if (Array.isArray(raw)) return raw;
  try { return JSON.parse(raw); } catch { return null; }
}

async function updateDbOptions(table: string, id: string, newOpts: string[]): Promise<void> {
  // Pass the JS array directly — options is a native text[] column, not jsonb
  await pool.query(`UPDATE ${table} SET options = $1 WHERE id = $2`, [newOpts, id]);
}

// DD follow-ups are stored as JSON in the follow_ups column
const ddBuffer = new Map<string, { followUps: any[]; dirty: boolean }>();

async function loadDdRow(parentId: string) {
  if (ddBuffer.has(parentId)) return;
  const { rows } = await pool.query(
    "SELECT follow_ups FROM content_deep_dive_questions WHERE id = $1", [parentId]
  );
  const followUps = rows[0]?.follow_ups ?? [];
  ddBuffer.set(parentId, { followUps, dirty: false });
}

async function flushDdBuffer(): Promise<void> {
  for (const [parentId, entry] of ddBuffer.entries()) {
    if (!entry.dirty) continue;
    await pool.query(
      "UPDATE content_deep_dive_questions SET follow_ups = $1 WHERE id = $2",
      [JSON.stringify(entry.followUps), parentId]
    );
  }
}

// ── Collectors ───────────────────────────────────────────────────────────────

async function collectImbalancedFromTable(table: string): Promise<QItem[]> {
  const shared = path.resolve(__dirname, "..", "shared");

  // Map table to source files
  let sourceMap: Record<string, string> = {};
  if (table === "content_questions") {
    // Query with level_id to map to source file
    const { rows } = await pool.query(
      `SELECT id, question, options, correct_index, explanation, level_id FROM ${table}`
    );
    const items: QItem[] = [];
    for (const r of rows) {
      const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
      if (!isImbalanced(opts)) continue;
      // Determine source file from level_id prefix
      const lid: string = r.level_id ?? "";
      let srcFile = path.join(shared, "questions.ts");
      if (lid.startsWith("asc-")) {
        const parts = lid.split("-");
        const module = parts.slice(0, 2).join("-");
        srcFile = path.join(shared, `${module}.ts`);
      } else if (lid.startsWith("dnv-")) {
        srcFile = path.join(shared, "dnv-niaho-questions.ts");
      }
      items.push({
        id: r.id,
        question: r.question ?? "",
        options: opts,
        correctIndex: r.correct_index ?? 0,
        explanation: r.explanation ?? "",
        sourceFile: srcFile,
        dbTable: table,
      });
    }
    return items;
  }

  if (table === "content_assessment_questions") {
    const { rows } = await pool.query(
      `SELECT id, question, options, correct_index, explanation, assessment_type FROM ${table}`
    );
    const items: QItem[] = [];
    for (const r of rows) {
      const opts = Array.isArray(r.options) ? r.options : JSON.parse(r.options ?? "[]");
      if (!isImbalanced(opts)) continue;
      const atype: string = r.assessment_type ?? "";
      let srcFile = path.join(shared, "diagnostic-questions.ts");
      if (atype === "mastery") srcFile = path.join(shared, "mastery-questions.ts");
      else if (atype === "asc-pre") srcFile = path.join(shared, "asc-pretest.ts");
      else if (atype === "asc-post") srcFile = path.join(shared, "asc-posttest.ts");
      else if (atype === "dnv-pre") srcFile = path.join(shared, "dnv-pretest.ts");
      else if (atype === "dnv-post") srcFile = path.join(shared, "dnv-posttest.ts");
      items.push({
        id: r.id,
        question: r.question ?? "",
        options: opts,
        correctIndex: r.correct_index ?? 0,
        explanation: r.explanation ?? "",
        sourceFile: srcFile,
        dbTable: table,
      });
    }
    return items;
  }

  if (table === "content_deep_dive_questions") {
    const { rows } = await pool.query(
      `SELECT id, base_options, base_correct_index, base_question, base_explanation, follow_ups, level_id FROM ${table}`
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

      // Base question
      const baseOpts = Array.isArray(r.base_options) ? r.base_options : JSON.parse(r.base_options ?? "[]");
      if (baseOpts.length && isImbalanced(baseOpts)) {
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

      // Follow-ups
      const followUps: any[] = Array.isArray(r.follow_ups) ? r.follow_ups : JSON.parse(r.follow_ups ?? "[]");
      for (let fi = 0; fi < followUps.length; fi++) {
        const fu = followUps[fi];
        const fuOpts: string[] = Array.isArray(fu.options) ? fu.options : [];
        if (!fuOpts.length || !isImbalanced(fuOpts)) continue;
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
    return items;
  }

  return [];
}

// ── Main fixer ───────────────────────────────────────────────────────────────

async function fixBatch(items: QItem[]): Promise<number> {
  let fixed = 0;
  let results: string[][];
  try {
    results = await rewriteYesNoBatch(items);
  } catch (e: any) {
    process.stdout.write(`\n  Claude error: ${e.message}`);
    return 0;
  }

  for (let j = 0; j < items.length; j++) {
    const item = items[j];
    const newOpts = results[j];
    if (!Array.isArray(newOpts) || newOpts.length !== 4) {
      process.stdout.write(`\n  Bad result for ${item.id}`);
      continue;
    }

    // Preserve correct answer exactly
    if (newOpts[item.correctIndex] !== item.options[item.correctIndex]) {
      newOpts[item.correctIndex] = item.options[item.correctIndex];
    }

    // Validate the fix actually achieved 2+2
    if (countYes(newOpts) !== 2 || countNo(newOpts) !== 2) {
      process.stdout.write(`\n  Still imbalanced after fix for ${item.id} (${countYes(newOpts)}Y/${countNo(newOpts)}N) — skipping`);
      continue;
    }

    // DB update
    try {
      if (item.isDdFollowUp && item.ddParentId !== undefined && item.ddFollowUpIdx !== undefined) {
        await loadDdRow(item.ddParentId);
        const entry = ddBuffer.get(item.ddParentId)!;
        if (entry.followUps[item.ddFollowUpIdx]) {
          entry.followUps[item.ddFollowUpIdx] = { ...entry.followUps[item.ddFollowUpIdx], options: newOpts };
          entry.dirty = true;
        }
      } else {
        await updateDbOptions(item.dbTable, item.id, newOpts);
      }
    } catch (e: any) {
      process.stdout.write(`\n  DB error ${item.id}: ${e.message}`);
      continue;
    }

    // Source file update
    const fieldName = item.isDdFollowUp ? "options" : (item.dbTable === "content_deep_dive_questions" ? "baseOptions" : "options");
    const realId = item.ddParentId ? `${item.ddParentId}-fu${item.ddFollowUpIdx}` : item.id;
    const lookupId = item.ddParentId ?? item.id;
    patchOptionsInFile(item.sourceFile, lookupId, newOpts, fieldName as "options" | "baseOptions");

    fixed++;
  }
  return fixed;
}

async function main() {
  const shared = path.resolve(__dirname, "..", "shared");
  console.log("\n=== Yes/No Balance Fixer ===\n");
  console.log("Rule: every Yes/No question must have exactly 2 'Yes.' and 2 'No.' options.\n");

  let totalFound = 0;
  let totalFixed = 0;

  for (const table of ["content_questions", "content_assessment_questions", "content_deep_dive_questions"]) {
    process.stdout.write(`Scanning ${table}...`);
    const items = await collectImbalancedFromTable(table);
    process.stdout.write(` ${items.length} imbalanced\n`);
    if (items.length === 0) continue;
    totalFound += items.length;

    // Print summary of what we found
    for (const item of items.slice(0, 5)) {
      console.log(`  ${item.id}: ${countYes(item.options)}Y/${countNo(item.options)}N — "${item.question.slice(0, 80)}"`);
    }
    if (items.length > 5) console.log(`  ... and ${items.length - 5} more`);

    // Run in batches with concurrency
    const batches: QItem[][] = [];
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      batches.push(items.slice(i, i + BATCH_SIZE));
    }

    let done = 0;
    for (let i = 0; i < batches.length; i += CONCURRENCY) {
      const chunk = batches.slice(i, i + CONCURRENCY);
      const chunkFixed = await Promise.all(chunk.map(b => fixBatch(b)));
      const sum = chunkFixed.reduce((a, b) => a + b, 0);
      done += chunk.reduce((a, b) => a + b.length, 0);
      totalFixed += sum;
      process.stdout.write(`\r  ${done}/${items.length} processed — ${totalFixed} fixed so far  `);
    }
    process.stdout.write("\n");
  }

  await flushDdBuffer();

  console.log(`\n✓ Done. Found ${totalFound} imbalanced Yes/No questions, fixed ${totalFixed}.\n`);
  await pool.end();
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
