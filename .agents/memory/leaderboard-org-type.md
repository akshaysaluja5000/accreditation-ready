---
name: Leaderboard org-type exclusion
description: Why org type must not be a leaderboard filter, and how the data repair works
---

## The rule
Do NOT apply `getOrganizationTypeFilter` in the `/api/game/leaderboard` endpoint. The facility filter (`getFacilityFilter`) is the only required scope for the leaderboard.

**Why:** The registration form exposes an "Organization Type" dropdown. Employees at a hospital facility (e.g. SITE486045) can accidentally pick "Ambulatory Surgery Center" or "DNV NIAHO". That gives them `organization_type = 'asc'` or `'dnv'`, and the old org-type filter silently excluded them from their teammates' leaderboard view.

**How to apply:**
- Leaderboard filter: `facilityFilter(u) && !LEADERBOARD_EXCLUDED.has(u.username)` — no org type check.
- On registration: after resolving `facilityId`, query the dominant org type for existing facility members and use that instead of the user-submitted value (auto-correction in the `/api/auth/register` route using `featPool`).
- On startup (`ensureTablesExist` in `storage.ts`): a `WITH facility_majority` CTE normalizes org type outliers in each facility to the majority, repairing any already-broken rows on every boot.
