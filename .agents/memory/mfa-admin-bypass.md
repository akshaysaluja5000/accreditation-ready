---
name: requireMfa admin bypass
description: admin+ roles must bypass MFA checks, consistent with requireWallChartAccess
---

## Rule
`requireMfa` enforces MFA only for ranks ceo (3) and director (2) — i.e., `rank >= ceo && rank < admin`. Admin (4) and super_admin (5) bypass it entirely.

## Why
Admin and super_admin are app administrators who manage MFA for others. Without this bypass they are locked out of all MFA-gated routes (hospital dashboard, stats, AI insights, CSV export, audit log) if they haven't set up TOTP — which is the common case for fresh deployments. `requireWallChartAccess` already had this pattern; `requireMfa` was missing it.

## How to apply
Pattern in routes.ts:
```ts
if (rank >= LEADERSHIP_RANK["ceo"] && rank < LEADERSHIP_RANK["admin"]) {
  // enforce MFA
}
// admin+ fall through to next()
```
