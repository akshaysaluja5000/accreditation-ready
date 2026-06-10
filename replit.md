# Hospital Standards Challenge - Joint Commission Compliance Training Game

## Overview
Gamified SaaS learning app for Joint Commission compliance training. Duolingo-style streaks, XP, and levels for healthcare professionals. Licensed per facility; deployed at accreditationready.ai.

## Run & Operate
- `npm run dev` — starts Express + Vite on port 5000
- Required env vars: `DATABASE_URL`, Anthropic API key (via Replit AI Integrations)
- DB schema: `shared/schema.ts` → Drizzle ORM → PostgreSQL (`server/storage.ts`)

## Stack
React 18 + TypeScript, Vite, Tailwind CSS, Framer Motion, wouter, TanStack Query v5, shadcn/ui, Express.js, Drizzle ORM, PostgreSQL, Passport.js (local strategy), Anthropic Claude Haiku (Replit AI Integration), custom TOTP (server/totp.ts), qrcode.

## Where things live
- `shared/schema.ts` — Drizzle tables + Zod insert schemas (source of truth)
- `shared/facility-roles.ts` — facility RBAC types + permission maps
- `shared/roles.ts` — training roles (Hospital / ASC domain roles)
- `server/storage.ts` — IStorage interface + DB migrations in `ensureTablesExist`
- `server/routes.ts` — all Express routes; middleware: `requireAuth`, `requireAdmin`, `requireLeadershipRole`, `requireMfa`
- `server/totp.ts` — pure Node.js TOTP (no external dep): `generateSecret`, `verifyToken`, `totpUri`
- `client/src/App.tsx` — wouter routes; `ProtectedRoute`, `LeadershipRoute`, `EducatorRoute` components
- `client/src/lib/facility-auth.ts` — `useFacilityAuth()` hook; derives facility permissions from real `leadershipRole`
- `client/src/pages/` — page components

## Architecture decisions
- **Two-surface product split**: Learner App (default, `/`) vs Leadership Console (`/leadership` hub). Learner surface shows only training content. Leadership Console is a separate gated route for director+.
- **Educator surface**: `/educator` hub — visible to educator (rank 1). Shows only department-scoped team. Server enforces department filter; no exec report, no exports.
- **Dual RBAC**: two orthogonal role axes. (1) `leadershipRole` (`learner|educator|director|ceo|admin|super_admin`, ranks 0-5) stored in `users.leadership_role`, enforced server-side via `requireLeadershipRole(minRole)`. (2) Facility role (`staff|manager|ceo|admin|super_admin`) derived in `useFacilityAuth()`. director+ceo both map to facilityRole=`ceo`.
- **MFA for ceo+**: `requireMfa` middleware stacked after `requireLeadershipRole` on all reporting routes. Checks `user.mfaEnabled` + `req.session.mfaVerified`. 403 response includes `{ mfaSetupRequired: true }` or `{ mfaRequired: true }`. queryClient.ts intercepts these 403s globally and redirects to `/mfa-setup` or `/mfa-verify`.
- **Server-side enforcement**: `/api/admin/stats`, `/api/admin/ai-insights`, `/api/admin/lesson-plan/generate` require director+ AND requireMfa; `/api/admin/users/:id/leadership-role` requires admin+; `/api/admin/export/users-csv` requires ceo+ AND requireMfa; `/api/audit-log` GET requires admin+ AND requireMfa.
- **Persistent audit log**: `audit_logs` DB table; client fires `POST /api/audit-log` on exec-report views & exports; server fires on users-csv export. Viewer visible to admin+ in User Management page.
- **Facility & module scoping**: Hospital leaders see only hospital data; ASC administrators see only ASC data. Multi-site admin/super_admin can see all.
- **super_admin** access is granted exclusively via `leadershipRole = 'super_admin'` in the DB — no hardcoded username bypasses exist.
- `darkMode: ["class"]` — light mode enforced via inline script in `index.html` + `useEffect` in `App.tsx`.

## Product
- Quiz gameplay: 11 levels × 20 questions per level; persistent sessions; XP + streaks
- Flashcard SR (Anki-style): Again/Hard/Good buttons; reviews scheduled in `flashcard_reviews` table
- Compliance Handbook: 11 chapters, searchable, AI-powered Q&A
- Admin dashboard: user list with leadershipRole management (admin+ can assign roles up to their own rank)
- Executive Readiness Report: facility-scoped CAP tracking, CSV/PDF export, audit log
- AI features: Tutor (3-depth explanations), Micro-Debriefs, Handbook Search, Leadership Coach (director+)
- Assessments: Diagnostic Quiz (pre-test) + Final Assessment (mastery exam)
- ASC module: 11 published chapters (165 questions, AAAHC standards)
- MFA: TOTP (Google Authenticator-compatible) for ceo+ roles; setup at `/mfa-setup`, verify at `/mfa-verify`
- Educator Console: `/educator` — dept-scoped team view for educators (rank 1)

## User Preferences
Iterative development; ask before significant architectural changes. Detailed explanations for AI integrations and DB interactions.
Do NOT send, store, or reference any HEIC or JPEG images attached in Replit (e.g. screenshots shared for bug reports). Use them only for visual context within the session.

## Gotchas
- `leadershipRole` defaults to `'learner'`; `isAdmin=true` users get effective rank of `admin`(4). Bypass accounts get `super_admin`(5).
- LEADERSHIP_RANK: `learner=0, educator=1, director=2, ceo=3, admin=4, super_admin=5` — must be updated in ALL 4 local copies: `server/routes.ts`, `client/src/App.tsx`, `client/src/pages/admin-page.tsx`, `client/src/pages/leadership-hub-page.tsx`.
- MFA session flag `req.session.mfaVerified` is reset on logout (new session). `user.mfaEnabled` persists in DB.
- `requireMfa` only enforces for rank ≥ ceo (3); directors (rank 2) are unaffected and can access `/api/admin/stats` without MFA.
- `otplib` v2 dropped the `authenticator` export — use `server/totp.ts` instead (pure Node.js crypto).
- Array columns in Drizzle: use `.array()` as method, not wrapper: `text().array()` not `array(text())`.
- TanStack Query v5: object form only — `useQuery({ queryKey: [...] })`.
- Frontend env vars must be prefixed `VITE_`; access via `import.meta.env.VITE_*`.
- Do NOT modify `vite.config.ts` or `drizzle.config.ts`.

## Pointers
- shadcn component rules: `.local/skills/fullstack-js/references/shadcn_component_rules.md`
- Layout/spacing: `.local/skills/fullstack-js/references/layout_and_spacing.md`
