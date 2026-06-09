import type { RemediationPlan } from "@/pages/corrective-action-page";
import { REMEDIATION_LIBRARY } from "@/data/remediationLibrary";

// ── Demo Remediation Plans ─────────────────────────────────────────────────
// All 6 records are synthetic learner remediation examples only.
// Steps are drawn directly from the REMEDIATION_LIBRARY.
// Assignment logic (final test only):
//   60–69% → 1 step
//   50–59% → 2 steps
//   < 50%  → 2 steps + reassessmentRequired: true

const lib = REMEDIATION_LIBRARY;

export const DEMO_REMEDIATION_PLANS: RemediationPlan[] = [
  // ── Hospital examples ────────────────────────────────────────────────────
  {
    id: "demo-rem-001",
    learner: "Learner A",
    facilityType: "Hospital",
    category: "Instrument Integrity",
    assessmentType: "final",
    quizScore: 58,
    passingThreshold: 75,
    // 58% → 50–59% → 2 steps
    remediationSteps: [
      lib["Instrument Integrity"][0],
      lib["Instrument Integrity"][1],
    ],
    reassessmentRequired: false,
    status: "Assigned",
    assignedDate: "2026-04-18",
    dueDate: "2026-05-20",
    facilityId: "demo",
    facilityName: "Sample Facility",
    assignedBy: "Educator",
    isDemo: true,
  },
  {
    id: "demo-rem-002",
    learner: "Learner B",
    facilityType: "Hospital",
    category: "Sterile Storage",
    assessmentType: "final",
    quizScore: 64,
    passingThreshold: 75,
    // 64% → 60–69% → 1 step
    remediationSteps: [
      lib["Sterile Storage"][0],
    ],
    reassessmentRequired: false,
    status: "In Progress",
    assignedDate: "2026-04-22",
    dueDate: "2026-05-15",
    facilityId: "demo",
    facilityName: "Sample Facility",
    assignedBy: "Educator",
    isDemo: true,
  },
  {
    id: "demo-rem-003",
    learner: "Learner C",
    facilityType: "Hospital",
    category: "EOC & Safety Compliance",
    assessmentType: "final",
    quizScore: 49,
    passingThreshold: 75,
    // 49% → below 50% → 2 steps + reassessmentRequired
    remediationSteps: [
      lib["EOC & Safety Compliance"][0],
      lib["EOC & Safety Compliance"][1],
    ],
    reassessmentRequired: true,
    status: "Completed",
    assignedDate: "2026-04-05",
    dueDate: "2026-06-15",
    facilityId: "demo",
    facilityName: "Sample Facility",
    assignedBy: "Educator",
    verifiedBy: "Supervisor",
    notes: "Learner completed all required steps. Supervisor sign-off obtained before marking Completed.",
    isDemo: true,
  },
  // ── ASC examples ──────────────────────────────────────────────────────────
  {
    id: "demo-rem-004",
    learner: "ASC Staff A",
    facilityType: "ASC",
    category: "Infection Prevention and Control and Safety",
    assessmentType: "final",
    quizScore: 61,
    passingThreshold: 75,
    // 61% → 60–69% → 1 step
    remediationSteps: [
      lib["ASC: Infection Prevention and Control and Safety"][0],
    ],
    reassessmentRequired: false,
    status: "Assigned",
    assignedDate: "2026-04-20",
    dueDate: "2026-05-25",
    facilityId: "demo",
    facilityName: "Sample ASC Facility",
    assignedBy: "Clinical Educator",
    isDemo: true,
  },
  {
    id: "demo-rem-005",
    learner: "ASC Staff B",
    facilityType: "ASC",
    category: "Governance",
    assessmentType: "final",
    quizScore: 54,
    passingThreshold: 75,
    // 54% → 50–59% → 2 steps
    remediationSteps: [
      lib["ASC: Governance"][0],
      lib["ASC: Governance"][1],
    ],
    reassessmentRequired: false,
    status: "In Progress",
    assignedDate: "2026-04-14",
    dueDate: "2026-05-10",
    facilityId: "demo",
    facilityName: "Sample ASC Facility",
    assignedBy: "Clinical Educator",
    isDemo: true,
  },
  {
    id: "demo-rem-006",
    learner: "ASC Staff C",
    facilityType: "ASC",
    category: "Surgical and Related Services",
    assessmentType: "final",
    quizScore: 66,
    passingThreshold: 75,
    // 66% → 60–69% → 1 step
    remediationSteps: [
      lib["ASC: Surgical and Related Services"][0],
    ],
    reassessmentRequired: false,
    status: "Verified",
    assignedDate: "2026-03-20",
    dueDate: "2026-06-01",
    facilityId: "demo",
    facilityName: "Sample ASC Facility",
    assignedBy: "Clinical Educator",
    verifiedBy: "Clinical Supervisor",
    notes: "Learner completed review and retest. Score improved to 78%. Plan verified.",
    isDemo: true,
  },
];
