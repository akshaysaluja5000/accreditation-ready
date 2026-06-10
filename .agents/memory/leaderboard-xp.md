---
name: Leaderboard XP source
description: points_ledger is the single source of truth for XP/points on ALL surfaces — leaderboard, leadership console, profile, admin stats
---

## Rule
Use `points_ledger.points_awarded` (summed per user) as the XP source everywhere. Never use `daily_activity.xp_earned` for user-facing point totals.

## Why: daily_activity is unreliable for XP totals
1. `daily_activity.xp_earned` is populated from client-submitted `xpEarned` values (from the quiz frontend's `xpReward` field, typically 15 pts/question).
2. `points_ledger` is written server-side for every event — `POINT_VALUES.question_correct = 20` per correct answer, flashcard reviews, badge events, etc.
3. The two systems use **different point scales** (15 vs 20) so they can never agree.
4. `daily_activity` has **incomplete historical coverage** — users who played before daily_activity was reliably written appear with near-zero XP despite having real history in points_ledger.
5. The Leadership Console (Staff Engagement widget) already uses `points_ledger`. Using the same source on the learner leaderboard makes both surfaces consistent.

## How to apply
- **Leaderboard** (`/api/leaderboard`): query `SELECT user_id, SUM(points_awarded) FROM points_ledger WHERE created_at >= $periodStart GROUP BY user_id`. This is now the active implementation.
- **Startup sync** (`ensureTablesExist`): `UPDATE user_streaks SET total_xp = (SELECT COALESCE(SUM(points_awarded),0) FROM points_ledger WHERE user_id=user_streaks.user_id)`.
- **Live sync** (`upsertDailyActivity`): same atomic subquery from points_ledger, not daily_activity. Keeps `user_streaks.total_xp` current between restarts so admin stats / educator views (which read `streak?.totalXp`) also stay consistent.
- `daily_activity` is still written (for streak tracking, today's activity widget) — just not used for leaderboard point totals.
- `computeUserActivityStats` for questionsAnswered/levelsCompleted/accuracy uses `user_progress` — that is correct and unchanged.

## Gotcha: prior wrong guidance
Earlier memory said daily_activity was the authoritative source and points_ledger was "badges only." This was WRONG. points_ledger receives one `question_correct` event per correct quiz answer (POINT_VALUES.question_correct = 20), making it the complete, reliable record.
