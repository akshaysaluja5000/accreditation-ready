---
name: Yes/No question balance rule
description: Yes/No format questions must have exactly 2 "Yes." and 2 "No." options — never 3+1
---

## Rule
Every question where options use Yes/No format MUST have **exactly 2 options starting with "Yes."** and **exactly 2 options starting with "No."** — never 3 of one and 1 of the other.

## Why
Users immediately see the imbalance as a tell: if there are 3 "No." options and 1 "Yes.", the correct answer is obviously "Yes." The question provides no challenge. This has been flagged multiple times.

## How to apply
- All Claude prompts for distractor generation/rewriting must include this rule explicitly.
- The rule is already in `scripts/rewrite-all-distractors.ts` prompt (RULES block).
- `scripts/fix-yesno-balance.ts` scans all DB question tables and fixes imbalanced Yes/No questions; rerun it whenever a large batch of questions is generated.
- Correct answers that start with "Yes per JC." or "Concerning." (non-standard) must be normalized to "Yes." or "No." before applying the 2+2 rule.
- Detection regex: `/^(Yes|No)\./i` — options where ≥2 matches exist but yes_count ≠ 2 or no_count ≠ 2 are imbalanced.
