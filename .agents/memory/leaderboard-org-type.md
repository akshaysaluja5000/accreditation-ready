---
name: Leaderboard org-type filter
description: Leaderboard correctly filters by org_type; normalization was removed because it corrupted data
---

## The rule
The leaderboard `/api/game/leaderboard` MUST filter by both facility AND org_type. Hospital users see only hospital teammates; ASC users see only ASC teammates.

**Why:** These are separate training populations (JCAHO vs AAAHC). Mixing them on the leaderboard would be confusing and incorrect.

**How to apply:**
```ts
(u.organizationType || "hospital") === currentOrgType
```
This line must stay in the leaderboard user filter in `routes.ts`.

## What was removed — startup org-type normalization
A `WITH facility_majority` CTE that ran on every boot was removed. It overwrote each user's `organization_type` with the majority type at their facility (e.g. at a mixed MOSH facility with 30 hospital + 5 ASC users, it silently changed the 5 ASC users to "hospital"). This caused ASC users to disappear from the ASC leaderboard and appear in the hospital one.

## Recovery migration (runs on every boot)
After removing the normalization, a targeted recovery was added: any user whose assigned role has `department = 'AAAHC Standards'` gets `organization_type = 'asc'` restored. This undoes existing damage without touching hospital or DNV users. The role-to-department mapping is reliable because roles are never changed by normalization — only `organization_type` was.
