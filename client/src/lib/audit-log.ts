// ── Audit Log ──────────────────────────────────────────────────────────────
// Records sensitive access events (report views, exports, plan changes).
// Writes to the DB via POST /api/audit-log (authenticated).

import { apiRequest } from "./queryClient";

export type AuditAction =
  | "executive_report_viewed"
  | "executive_report_csv_export"
  | "executive_report_pdf_export"
  | "remediation_plan_viewed"
  | "remediation_plan_created"
  | "remediation_plan_status_changed"
  | "user_management_viewed"
  | "leadership_coach_viewed";

export interface AuditEntry {
  userId: string | number | null;
  leadershipRole: string;
  facilityId: string | null;
  facilityName: string | null;
  action: AuditAction;
  timestamp: string;
  meta?: Record<string, unknown>;
}

export function auditLog(entry: Omit<AuditEntry, "timestamp">) {
  const full: AuditEntry = { ...entry, timestamp: new Date().toISOString() };
  // Fire-and-forget - never block the UI
  apiRequest("POST", "/api/audit-log", {
    leadershipRole: full.leadershipRole,
    facilityId: full.facilityId,
    facilityName: full.facilityName,
    action: full.action,
    meta: full.meta ?? null,
  }).catch(() => {
    // Silently ignore network failures - audit is best-effort from client
    console.warn("[AUDIT] failed to persist:", full.action);
  });
}
