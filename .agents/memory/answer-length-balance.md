---
name: Answer length balance rule
description: Correct answer must not be the longest option — wrong answers must match correct answer length
---

## Rule
Wrong answer options must be similar in length to the correct answer. A test-taker must not be able to identify the correct answer simply by picking the longest option.

## Detection threshold
Flag when: `correctLen > avgWrongLen * 1.40` (correct is ≥40% longer than average wrong answer).

## Why
When the correct answer is the longest option, learners can guess correctly without understanding the content. This has been flagged multiple times.

## How to apply
- All Claude distractor prompts must include: "The correct answer must NOT be the longest option. Wrong answers must match the correct answer length."
- Rule is already in `scripts/rewrite-all-distractors.ts` (RULES block).
- Run `scripts/fix-answer-lengths.ts` after any large batch of question generation; may require multiple passes to converge.
- Quiz questions (`content_questions`) are the highest priority — these are what users see during gameplay.
- Assessment questions and deep-dive flashcards are lower priority.
- Some questions with very long correct answers (300+ chars with multiple required elements) may require 4-6 passes to converge; a few truly stubborn ones (380-530 char correct answers) may not fully converge — acceptable as they require understanding specific clinical detail regardless of length cue.
