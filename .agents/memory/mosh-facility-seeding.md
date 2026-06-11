---
name: MOSH facility code & seeding
description: MOSH (facility ID=1) registration code is 482601; the seeder runs on every boot and will re-create the old code if not updated in all four locations
---

## Rule
MOSH (Midwest Orthopedic Specialty Hospital, DB facility ID=1) registration code is **482601**.

All four locations must use the same code or the seeder will create a duplicate facility row on the next restart:

1. `server/storage.ts` — `KNOWN_FACILITIES` array: `code: "482601"`
2. `server/storage.ts` — `LEADERSHIP_CODES_BY_FACILITY`: key `"482601"`
3. `server/storage.ts` — orphan-user adoption query: `f.code = '482601'`
4. `server/routes.ts` — startup `getFacilityByCode("482601")` check

**Why:** `seedFacilities()` runs on every boot (`ensureTablesExist`). It does `SELECT WHERE code = $1` — if the code in code doesn't match the DB, it INSERT a brand-new facility row with the old code, creating a duplicate.

**How to apply:** Any time the MOSH facility code changes, update all four locations before restarting. If a duplicate facility is created, check for users before deleting it.

## Current codes
- MOSH facility registration code: **482601** (facility_id=1)
- MOSH leadership codes (leadership_role_codes table, facility_id=1): MOSH-J7KP-X4NR, MOSH-B2WQ-T9FV, MOSH-C6LD-Y3HZ
- TSC (The Surgery Center, facility_id=27) registration code: TSC001
