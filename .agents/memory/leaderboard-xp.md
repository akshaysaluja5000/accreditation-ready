---
name: Leaderboard XP source
description: daily_activity is the authoritative XP source; streak.totalXp gets reset by startup migration and must NOT be used for leaderboard
---

## Rule
Use `daily_activity.xp_earned` aggregated by user as the XP source for ALL leaderboard periods (including all-time). Never use `streak.totalXp` directly on the leaderboard.

## Why: two-part trap
1. `quiz_sessions` rows are deleted when a level is completed — summing `quiz_sessions.xp_earned` returns 0 for completed levels.
2. `user_streaks.total_xp` looks like the right all-time accumulator, BUT the startup migration in `ensureTablesExist()` overwrites it on every server restart from `points_ledger` — which only contains badge/event XP, NOT quiz XP. So every deploy resets all users' quiz XP to zero (or to badge-only totals).

`daily_activity` is written on every quiz answer, accumulates correctly, and is never wiped.

## How to apply
- All leaderboard periods: use `getDailyActivitySince(startDate)` with `startDate = "2000-01-01"` for all-time.
- Startup sync (`ensureTablesExist`): recompute `user_streaks.total_xp` from `daily_activity` sums, NOT `points_ledger`.
- `upsertDailyActivity`: after each update, re-sync `user_streaks.total_xp` via atomic subquery `(SELECT COALESCE(SUM(xp_earned),0) FROM daily_activity WHERE user_id=...)` so total_xp stays accurate between restarts.
- `computeUserActivityStats` for questionsAnswered/levelsCompleted is fine — uses `user_progress` (persistent, never deleted).
