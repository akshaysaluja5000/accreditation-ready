import { pool } from "./storage.js";
export { pool };
import type { FacilityFeatures, FacilityRoleVisibility } from "@shared/schema";

export const DEFAULT_FEATURES: FacilityFeatures = {
  education: false,
  compliance: false,
  survey_readiness_agent: false,
  content_intelligence_agent: false,
  compliance_task_manager: false,
  executive_readiness_agent: false,
  wall_chart_tracker: false,
  regulatory_watch_agent: false,
  show_teams: false,
  show_hospital_dashboard: true,
  show_asc_dashboard: false,
  show_staff_learning_agent: false,
};

export const DEFAULT_ROLE_VISIBILITY: FacilityRoleVisibility = {
  or_circulating_nurse: true,
  or_manager_charge_nurse: true,
  scrub_tech_surgical_tech: true,
  surgical_orthopedic_assistant: true,
  anesthesia_assistant_crna: true,
  spd_technician: true,
  pacu_floor_nurse: true,
  preadmission_testing_nurse: true,
  environmental_services: true,
  facilities_maintenance: false,
  compliance_officer_cno: true,
  nurse_educator_staff_dev: true,
};

export interface FacilityFlagsResult {
  features: FacilityFeatures;
  roleVisibility: FacilityRoleVisibility;
}

export async function getFacilityFeatures(facilityId: number | null): Promise<FacilityFlagsResult> {
  if (facilityId !== null) {
    const { rows } = await pool.query<{ features: Partial<FacilityFeatures> | null; role_visibility: Partial<FacilityRoleVisibility> | null }>(
      "SELECT features, role_visibility FROM facilities WHERE id = $1",
      [facilityId],
    );
    if (rows.length) {
      const { features, role_visibility } = rows[0];
      return {
        features: { ...DEFAULT_FEATURES, ...(features ?? {}) },
        roleVisibility: { ...DEFAULT_ROLE_VISIBILITY, ...(role_visibility ?? {}) },
      };
    }
  }
  // No facility or facility not found — return safe defaults
  return { features: { ...DEFAULT_FEATURES }, roleVisibility: { ...DEFAULT_ROLE_VISIBILITY } };
}

export async function isFeatureEnabled(facilityId: number | null, featureKey: keyof FacilityFeatures): Promise<boolean> {
  const { features } = await getFacilityFeatures(facilityId);
  return features[featureKey] === true;
}

export async function isRoleVisible(facilityId: number | null, roleKey: keyof FacilityRoleVisibility): Promise<boolean> {
  const { roleVisibility } = await getFacilityFeatures(facilityId);
  return roleVisibility[roleKey] === true;
}

export async function getVisibleRoles(facilityId: number | null): Promise<(keyof FacilityRoleVisibility)[]> {
  const { roleVisibility } = await getFacilityFeatures(facilityId);
  return (Object.entries(roleVisibility) as [keyof FacilityRoleVisibility, boolean][])
    .filter(([, visible]) => visible === true)
    .map(([roleKey]) => roleKey);
}
