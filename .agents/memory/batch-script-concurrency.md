---
name: Batch script concurrency
description: Race condition fix for scripts/rewrite-all-distractors.ts; Claude JSON parsing; bracket-counting for single-line arrays
---

## Rule 1: Never write source files inside concurrent Promise.all batches

**Why:** Node.js async code yields at every `await`. With `Promise.all([...])` running N concurrent API calls, all N continuations can interleave between each other at each `await updateDbOptions(...)`. If two continuations both read then write the same file, the second read sees stale state and the write can truncate the file to near-zero bytes.

**How to apply:** Collect file updates in a `Map<filePath, updates[]>` during concurrent batches. After `Promise.all` resolves, apply all file updates sequentially in a single pass (read once → apply all updates → write once).

## Rule 2: Claude sometimes wraps JSON in markdown fences

**Why:** Even with clear instructions to return raw JSON, Claude Haiku sometimes returns ` ```json\n[...]\n``` `. A regex like `/\[\s*\[[\s\S]*\]\s*\]/` may fail to match through a markdown fence.

**How to apply:** Use `rawText.indexOf("[")` and `rawText.lastIndexOf("]")` to slice the JSON, then `JSON.parse(rawText.slice(first, last+1))`. This is immune to any surrounding prose or fences.

## Rule 3: Use a string-aware bracket counter for options arrays

**Why:** `\n(\s*)\]` to find the closing `]` only works if options are multi-line. Many assessment files (diagnostic-questions.ts, mastery-questions.ts, dnv-pretest.ts, dnv-posttest.ts) use single-line format: `options: ["A", "B", "C", "D"]`. The regex skips to the outer array's `]`, truncating the file to ~18 lines.

**How to apply:** Use `findArrayClose(content, openPos)` — a char-by-char loop that tracks `inString` and `escape` state, ignoring `[`/`]` inside quoted strings. Also detect `isMultiLine` to preserve the original formatting style when writing the replacement.

## Rule 4: Per-file single-phase targeting prevents timeouts

**Why:** Long phases (ASC = 17 files, dd = 15 files) hit the 115s bash timeout before completing. The CONCURRENCY and BATCH_SIZE tradeoff: larger batches cause Claude to truncate JSON; higher concurrency risks rate limits.

**How to apply:** Keep BATCH_SIZE=12, CONCURRENCY=8 (proven safe). Add `--offset N` arg to skip already-processed items, and single-file targeting (`asc-qua`, `dd-part1`) to process individual files without running the whole phase. Use `git show HEAD:file > file` to restore any accidentally-emptied source files.
