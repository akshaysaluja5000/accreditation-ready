# AccreditationReady

**Live Platform:** [https://accreditationready.ai](https://accreditationready.ai)

AccreditationReady is a gamified compliance training platform for hospital and ambulatory surgery center staff. It turns dense accreditation standards into scenario-based challenges, spaced-repetition flashcards, and AI-assisted debriefs — so staff are genuinely prepared for survey, not just checkbox-compliant.

---

## Accreditation Modules

### Hospital — Joint Commission
Standards-based training across 11+ clinical chapters including sterile technique, medication management, infection control, emergency management, patient rights, life safety, and the NPSG.

### Ambulatory Surgery Center — AAAHC
17-chapter coverage mapped to the AAAHC Accreditation Handbook for Medicare Deemed Status: administration, anesthesia and surgical services, behavioral health, care management, clinical privileges, credentialing, emergency management, facilities, governance, infection prevention, laboratory and radiology, medication management, patient rights, quality assessment, and more.

### Hospital — DNV NIAHO
Training aligned to DNV GL's NIAHO hospital accreditation standards across quality management, governance, medical staff, nursing services, medication management, surgical services, patient care, environment of care, patient rights, infection control, and physical environment.

---

## Learning Pathways

- **Quiz Levels** — Scenario-based multiple-choice questions with XP rewards and streak tracking
- **Deep Dive** — Two-stage questions (base + expert follow-up) for high-acuity topics
- **Diagnostic Assessment** — Pre-training gap analysis across all chapters
- **Mastery Test** — Post-training comprehensive assessment
- **ASC Pre/Post-test** — Module-specific baseline and outcome measurement
- **Flashcard Review** — Spaced-repetition study cards with SM-2 scheduling
- **AI Tutor** — Three-depth explanation engine for wrong answers (powered by Claude)
- **AI Handbook Search** — Natural language search across the full accreditation handbook
- **Leaderboard** — Facility-scoped rankings by levels completed, questions answered, and accuracy

---

## Role-Based Learning

Staff are assigned a job role (OR Nurse, Scrub Tech, PACU Nurse, Compliance Officer, and 30+ others) that scopes their chapter curriculum. Leadership roles (Educator, Director, CEO, Admin, Super Admin) unlock facility-wide analytics, team management, and compliance dashboards. MFA is enforced for CEO-level access and above.

---

## Compliance Tracking (Survey Readiness)

A structured compliance layer allows facility administrators to:

- Log completion of recurring standards items (daily, weekly, monthly, quarterly, annually)
- Upload and tag policy documents against specific standards codes
- Generate AI-assisted training modules from uploaded documents
- Track open tasks, expiring documents, and overdue items
- Monitor staff training alerts by role and department
- Receive regulatory watch summaries for new CMS, Joint Commission, and AAAHC findings
- Generate weekly executive briefs with readiness scores and trend direction

---

## Technical Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL (Render managed) |
| ORM | Drizzle ORM |
| Auth | Passport.js (local strategy), express-session, TOTP/MFA |
| AI | Anthropic Claude (claude-haiku-4-5 for tutoring, claude-sonnet for compliance analysis) |
| File parsing | pdf-parse, mammoth (Word docs) |
| Build | Vite (client), esbuild (server) |
| Session store | connect-pg-simple (PostgreSQL-backed) |

---

## Infrastructure

| Component | Service |
|---|---|
| Hosting | [Render Web Service](https://render.com) |
| Database | Render PostgreSQL |
| DNS | Cloudflare (accreditationready.ai) |
| Media | Render persistent disk |

---

## Privacy & Compliance

This repository is **private**. It contains proprietary training content mapped to Joint Commission, AAAHC, and DNV NIAHO accreditation standards. Content is not to be reproduced or distributed outside of licensed facility agreements.
