---
name: Leaderboard XP source
description: Why quiz_sessions.xp_earned is wrong for all-time XP on the leaderboard
---

## Rule
Use `streak.totalXp` (from `user_streaks.total_xp`) for all-time XP on the leaderboard, NOT `quiz_sessions.xp_earned`.

## Why
`quiz_sessions` rows are deleted when a level is completed (`deleteQuizSession` called in two places in routes.ts). So summing `quiz_sessions.xp_earned` returns 0 for any user who has completed levels — only in-progress sessions survive. `streak.totalXp` is incremented per correct answer and never deleted, making it the correct accumulator.

## How to apply
- Leaderboard "all time" period: `const allTimeXp = streak?.totalXp ?? 0`
- Time-based periods (weekly/monthly/daily): already correct — use `daily_activity.xp_earned` aggregates via `getDailyActivitySince`
- `computeUserActivityStats` correctly derives questionsAnswered/levelsCompleted from `user_progress` (also persistent) — that part is fine
