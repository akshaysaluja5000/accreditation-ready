import type { ModuleId } from "./schema";

export type RoleScope = "DEPT" | "DEPT_PLUS_ALL" | "FULL";
export type ReportingScope = "own_department" | "own_plus_all" | "enterprise";
export type FacilityType = ModuleId;

export interface RoleConfig {
  id: string;
  facilityType: FacilityType;
  department: string;
  title: string;
  description: string;
  scope: RoleScope;
  destinationRoute: string;
  firstModuleId: string;
  reportingScope: ReportingScope;
  chapters: string[];
  restricted?: boolean;
}

const DNV_ALL_CHAPTERS = [
  "dnv_qm",
  "dnv_gov",
  "dnv_ms",
  "dnv_ns",
  "dnv_mm",
  "dnv_ss",
  "dnv_pc",
  "dnv_es",
  "dnv_pr",
  "dnv_ic",
  "dnv_pe",
];

const ASC_ALL_CHAPTERS = [
  "asc_adm",
  "asc_asg",
  "asc_beh",
  "asc_cmc",
  "asc_cpv",
  "asc_crd",
  "asc_emg",
  "asc_fac",
  "asc_gov",
  "asc_ipc",
  "asc_lrd",
  "asc_med",
  "asc_ocs",
  "asc_prr",
  "asc_qua",
  "asc_saf",
  "asc_val",
];

export const ROLE_CONFIGS: RoleConfig[] = [
  // ==========================================================================
  // HOSPITAL ROLES (Joint Commission / hospital module)
  // ==========================================================================
  {
    id: "or_circulating_nurse",
    facilityType: "hospital",
    department: "Operating Room",
    title: "OR Circulating Nurse",
    description: "OR safety, time-outs, patient care documentation",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "facilities", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "or_manager",
    facilityType: "hospital",
    department: "Operating Room",
    title: "OR Manager / Charge Nurse",
    description: "OR operations leadership across all chapters",
    scope: "DEPT_PLUS_ALL",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_plus_all",
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "scrub_tech",
    facilityType: "hospital",
    department: "Operating Room",
    title: "Scrub Tech / Surgical Tech",
    description: "Sterile field, instruments, OR protocol",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["transport", "or_sterile_field", "instruments", "universal_protocol", "spd_decontam", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "surgical_ortho_assistant",
    facilityType: "hospital",
    department: "Operating Room",
    title: "Surgical/Orthopedic Assistant",
    description: "Patient positioning, room flow, instruments, perioperative support",
    scope: "DEPT",
    destinationRoute: "/play/or_sterile_field",
    firstModuleId: "or_sterile_field",
    reportingScope: "own_department",
    chapters: ["or_sterile_field", "universal_protocol", "instruments", "patient_care_docs", "eoc_safety", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "anesthesia_assistant",
    facilityType: "hospital",
    department: "Operating Room",
    title: "Anesthesia Assistant / CRNA",
    description: "Anesthesia services, sedation levels, monitoring, regional techniques, perioperative assessment",
    scope: "DEPT",
    destinationRoute: "/play/anesthesia_sedation",
    firstModuleId: "anesthesia_sedation",
    reportingScope: "own_department",
    chapters: ["anesthesia_sedation", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "spd_tech",
    facilityType: "hospital",
    department: "Sterile Processing",
    title: "SPD Technician",
    description: "Decontamination, sterilization, instrument processing",
    scope: "DEPT",
    destinationRoute: "/play/spd_decontam",
    firstModuleId: "spd_decontam",
    reportingScope: "own_department",
    chapters: ["transport", "spd_decontam", "segregation", "sterile_storage", "instruments", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "pacu_nurse",
    facilityType: "hospital",
    department: "PACU, Pre-Op & Floor",
    title: "PACU / Floor Nurse",
    description: "Recovery care, monitoring, patient documentation",
    scope: "DEPT",
    destinationRoute: "/play/patient_care_docs",
    firstModuleId: "patient_care_docs",
    reportingScope: "own_department",
    chapters: ["patient_care_docs", "eoc_safety", "universal_protocol", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "preadmission_nurse",
    facilityType: "hospital",
    department: "PACU, Pre-Op & Floor",
    title: "Preadmission Testing Nurse",
    description: "Pre-surgical assessment, anesthesia prep, medication reconciliation, patient education",
    scope: "DEPT",
    destinationRoute: "/play/patient_care_docs",
    firstModuleId: "patient_care_docs",
    reportingScope: "own_department",
    chapters: ["patient_care_docs", "anesthesia_sedation", "medication_management", "universal_protocol", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "evs",
    facilityType: "hospital",
    department: "Environmental Services",
    title: "Environmental Services",
    description: "Environmental cleaning, waste segregation, EOC safety",
    scope: "DEPT",
    destinationRoute: "/play/environment",
    firstModuleId: "environment",
    reportingScope: "own_department",
    chapters: ["environment", "segregation", "eoc_safety", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "facilities_maint",
    facilityType: "hospital",
    department: "Facilities & Maintenance",
    title: "Facilities / Maintenance",
    description: "Building systems, life safety, environment of care",
    scope: "DEPT",
    destinationRoute: "/play/facilities",
    firstModuleId: "facilities",
    reportingScope: "own_department",
    chapters: ["facilities", "eoc_safety", "environment", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "compliance_officer",
    facilityType: "hospital",
    department: "Leadership & Compliance",
    title: "Compliance Officer / CNO",
    description: "Full survey readiness across every standard",
    scope: "FULL",
    destinationRoute: "/diagnostic",
    firstModuleId: "diagnostic",
    reportingScope: "enterprise",
    restricted: true,
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },
  {
    id: "nurse_educator",
    facilityType: "hospital",
    department: "Leadership & Compliance",
    title: "Nurse Educator / Staff Development",
    description: "Staff training and competency across all areas",
    scope: "DEPT_PLUS_ALL",
    destinationRoute: "/diagnostic",
    firstModuleId: "diagnostic",
    reportingScope: "own_plus_all",
    restricted: true,
    chapters: ["transport", "environment", "segregation", "sterile_storage", "instruments", "facilities", "spd_decontam", "or_sterile_field", "universal_protocol", "patient_care_docs", "eoc_safety", "anesthesia_sedation", "medication_management", "npsg", "infection_control", "patient_rights", "life_safety", "emergency_management"],
  },

  // ==========================================================================
  // DNV NIAHO ROLES (NIAHO 25-1 / Hospital DNV module)
  // One role per published chapter. Follows ASC pattern - chapter-scoped tracks.
  // ==========================================================================
  {
    id: "dnv_qm_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Quality Management System (QM)",
    description: "ISO 9001-based QMS, management review, corrective action, patient safety system, internal audits",
    scope: "DEPT",
    destinationRoute: "/play/dnv_qm",
    firstModuleId: "dnv_qm",
    reportingScope: "own_department",
    chapters: ["dnv_qm"],
  },
  {
    id: "dnv_gov_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Governance & Leadership (GB + CE)",
    description: "Governing body legal responsibility, institutional planning, contracted services, CEO qualifications",
    scope: "DEPT",
    destinationRoute: "/play/dnv_gov",
    firstModuleId: "dnv_gov",
    reportingScope: "own_department",
    chapters: ["dnv_gov"],
  },
  {
    id: "dnv_ms_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Medical Staff (MS)",
    description: "Credentialing, privileging, FPPE/OPPE, telemedicine credentialing, H&P timing, corrective action",
    scope: "DEPT",
    destinationRoute: "/play/dnv_ms",
    firstModuleId: "dnv_ms",
    reportingScope: "own_department",
    chapters: ["dnv_ms"],
  },
  {
    id: "dnv_ns_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Nursing & Staffing Management (NS + SM)",
    description: "Nurse Executive, individualized care planning, ongoing assessment, acuity-based staffing, competency",
    scope: "DEPT",
    destinationRoute: "/play/dnv_ns",
    firstModuleId: "dnv_ns",
    reportingScope: "own_department",
    chapters: ["dnv_ns"],
  },
  {
    id: "dnv_mm_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Medication Management (MM)",
    description: "Formulary, complete orders, 24-hour pharmacy access, controlled substances, antimicrobial stewardship",
    scope: "DEPT",
    destinationRoute: "/play/dnv_mm",
    firstModuleId: "dnv_mm",
    reportingScope: "own_department",
    chapters: ["dnv_mm"],
  },
  {
    id: "dnv_ss_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Surgical & Anesthesia Services (SS + AS)",
    description: "Informed consent, operative reports, OR register, PACU criteria, pre-anesthesia evaluation, instrument reprocessing",
    scope: "DEPT",
    destinationRoute: "/play/dnv_ss",
    firstModuleId: "dnv_ss",
    reportingScope: "own_department",
    chapters: ["dnv_ss"],
  },
  {
    id: "dnv_pc_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Patient Care Services (OB, LS, RC, MI, NM, RS)",
    description: "Obstetrics, lab blood safety, respiratory care orders, radiation protection, nuclear medicine, rehabilitation",
    scope: "DEPT",
    destinationRoute: "/play/dnv_pc",
    firstModuleId: "dnv_pc",
    reportingScope: "own_department",
    chapters: ["dnv_pc"],
  },
  {
    id: "dnv_es_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Emergency, Outpatient & Dietary Services (ES + OS + DS)",
    description: "ED organization, non-provided emergency transfer protocols, outpatient services, diet manual, therapeutic diets",
    scope: "DEPT",
    destinationRoute: "/play/dnv_es",
    firstModuleId: "dnv_es",
    reportingScope: "own_department",
    chapters: ["dnv_es"],
  },
  {
    id: "dnv_pr_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Patient Rights (PR)",
    description: "Nondiscrimination, advance directives, language access, informed consent, grievance process, restraint and seclusion",
    scope: "DEPT",
    destinationRoute: "/play/dnv_pr",
    firstModuleId: "dnv_pr",
    reportingScope: "own_department",
    chapters: ["dnv_pr"],
  },
  {
    id: "dnv_ic_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Infection Control & Medical Records (IC + MR + DC + UR)",
    description: "IPC program, antibiotic stewardship integration, complete medical records, discharge planning, utilization review",
    scope: "DEPT",
    destinationRoute: "/play/dnv_ic",
    firstModuleId: "dnv_ic",
    reportingScope: "own_department",
    chapters: ["dnv_ic"],
  },
  {
    id: "dnv_pe_track",
    facilityType: "dnv",
    department: "DNV NIAHO Standards",
    title: "Physical Environment & Emergency Preparedness (PE + TO)",
    description: "Life safety, AEM program, emergency preparedness HVA and exercises, utility systems, organ procurement",
    scope: "DEPT",
    destinationRoute: "/play/dnv_pe",
    firstModuleId: "dnv_pe",
    reportingScope: "own_department",
    chapters: ["dnv_pe"],
  },

  // ==========================================================================
  // ASC ROLES (AAAHC v44 / Ambulatory Surgery Center module)
  // One role per published chapter. Users can pick a single chapter focus or
  // use "Select all roles" to unlock the full standards set.
  // ==========================================================================
  {
    id: "asc_adm_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Administration (ADM)",
    description: "Organizational structure, staffing, personnel records, policies and procedures",
    scope: "DEPT",
    destinationRoute: "/play/asc_adm",
    firstModuleId: "asc_adm",
    reportingScope: "own_department",
    chapters: ["asc_adm"],
  },
  {
    id: "asc_asg_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Anesthesia & Surgical Services (ASG)",
    description: "Pre-op assessment, time-out, site marking, anesthesia monitoring, discharge criteria",
    scope: "DEPT",
    destinationRoute: "/play/asc_asg",
    firstModuleId: "asc_asg",
    reportingScope: "own_department",
    chapters: ["asc_asg"],
  },
  {
    id: "asc_beh_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Behavioral Health Services (BEH)",
    description: "Therapeutic settings, treatment planning, SUD confidentiality, staff qualifications",
    scope: "DEPT",
    destinationRoute: "/play/asc_beh",
    firstModuleId: "asc_beh",
    reportingScope: "own_department",
    chapters: ["asc_beh"],
  },
  {
    id: "asc_cmc_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Care Management & Coordination (CMC)",
    description: "Clinical record requirements, diagnostic testing, discharge instructions, care coordination",
    scope: "DEPT",
    destinationRoute: "/play/asc_cmc",
    firstModuleId: "asc_cmc",
    reportingScope: "own_department",
    chapters: ["asc_cmc"],
  },
  {
    id: "asc_cpv_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Credentialing & Privileging (CPV)",
    description: "Delineation of privileges, competency-based privileging, temporary privileges, NPDB",
    scope: "DEPT",
    destinationRoute: "/play/asc_cpv",
    firstModuleId: "asc_cpv",
    reportingScope: "own_department",
    chapters: ["asc_cpv"],
  },
  {
    id: "asc_crd_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Clinical Records (CRD)",
    description: "Record retention, security, HIPAA compliance, authentication, release of information",
    scope: "DEPT",
    destinationRoute: "/play/asc_crd",
    firstModuleId: "asc_crd",
    reportingScope: "own_department",
    chapters: ["asc_crd"],
  },
  {
    id: "asc_emg_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Emergency Management (EMG)",
    description: "Hazard vulnerability analysis, emergency plan, drills with debriefs, ACLS requirements",
    scope: "DEPT",
    destinationRoute: "/play/asc_emg",
    firstModuleId: "asc_emg",
    reportingScope: "own_department",
    chapters: ["asc_emg"],
  },
  {
    id: "asc_fac_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Facilities & Equipment (FAC)",
    description: "Physical environment safety, decontamination area, OR environmental controls, equipment maintenance",
    scope: "DEPT",
    destinationRoute: "/play/asc_fac",
    firstModuleId: "asc_fac",
    reportingScope: "own_department",
    chapters: ["asc_fac"],
  },
  {
    id: "asc_gov_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Governance (GOV)",
    description: "Governing body responsibilities, scope of services, annual review, contract oversight",
    scope: "DEPT",
    destinationRoute: "/play/asc_gov",
    firstModuleId: "asc_gov",
    reportingScope: "own_department",
    chapters: ["asc_gov"],
  },
  {
    id: "asc_ipc_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Infection Prevention & Control (IPC)",
    description: "Hand hygiene surveillance, sterilization indicators, sharps program, surgical environment controls",
    scope: "DEPT",
    destinationRoute: "/play/asc_ipc",
    firstModuleId: "asc_ipc",
    reportingScope: "own_department",
    chapters: ["asc_ipc"],
  },
  {
    id: "asc_lrd_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Laboratory & Radiology (LRD)",
    description: "CLIA compliance, quality control, radiology personnel, critical value reporting",
    scope: "DEPT",
    destinationRoute: "/play/asc_lrd",
    firstModuleId: "asc_lrd",
    reportingScope: "own_department",
    chapters: ["asc_lrd"],
  },
  {
    id: "asc_med_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Medication Management (MED)",
    description: "High-alert medications, LASA lists, drug security, labeling requirements, vaccine storage",
    scope: "DEPT",
    destinationRoute: "/play/asc_med",
    firstModuleId: "asc_med",
    reportingScope: "own_department",
    chapters: ["asc_med"],
  },
  {
    id: "asc_ocs_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Other Clinical Services (OCS)",
    description: "Dental, chemotherapy safety, reproductive health, IVF, specialty quality monitoring",
    scope: "DEPT",
    destinationRoute: "/play/asc_ocs",
    firstModuleId: "asc_ocs",
    reportingScope: "own_department",
    chapters: ["asc_ocs"],
  },
  {
    id: "asc_prr_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Patient Rights & Responsibilities (PRR)",
    description: "Dignity and privacy, rights before care, informed consent, grievance process, language access",
    scope: "DEPT",
    destinationRoute: "/play/asc_prr",
    firstModuleId: "asc_prr",
    reportingScope: "own_department",
    chapters: ["asc_prr"],
  },
  {
    id: "asc_qua_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Quality (QUA)",
    description: "Peer review structure, ongoing monitoring, QI studies, governing body reporting",
    scope: "DEPT",
    destinationRoute: "/play/asc_qua",
    firstModuleId: "asc_qua",
    reportingScope: "own_department",
    chapters: ["asc_qua"],
  },
  {
    id: "asc_saf_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Safety (SAF)",
    description: "Risk management program, incident definitions, safety program elements, product recall",
    scope: "DEPT",
    destinationRoute: "/play/asc_saf",
    firstModuleId: "asc_saf",
    reportingScope: "own_department",
    chapters: ["asc_saf"],
  },
  {
    id: "asc_val_track",
    facilityType: "asc",
    department: "AAAHC Standards",
    title: "Validation (VAL)",
    description: "AAAHC profile accuracy, California reporting requirements, New York OBS standards",
    scope: "DEPT",
    destinationRoute: "/play/asc_val",
    firstModuleId: "asc_val",
    reportingScope: "own_department",
    chapters: ["asc_val"],
  },

];

export const DEPARTMENT_ORDER_BY_FACILITY: Record<FacilityType, string[]> = {
  hospital: [
    "Operating Room",
    "Sterile Processing",
    "PACU, Pre-Op & Floor",
    "Environmental Services",
    "Facilities & Maintenance",
    "Leadership & Compliance",
  ],
  asc: [
    "AAAHC Standards",
  ],
  dnv: [
    "DNV NIAHO Standards",
  ],
};

// Backwards-compat: legacy export still used by older callers; reflects hospital order.
export const DEPARTMENT_ORDER = DEPARTMENT_ORDER_BY_FACILITY.hospital;

export const SCOPE_CHIP_LABELS: Record<RoleScope, string> = {
  DEPT: "DEPT. ACCESS",
  DEPT_PLUS_ALL: "DEPT + ALL",
  FULL: "FULL ACCESS",
};

export const SCOPE_CHIP_TOOLTIPS: Record<RoleScope, string> = {
  DEPT: "You'll see training and reporting for your department only.",
  DEPT_PLUS_ALL: "You'll see your department plus a view across all departments.",
  FULL: "You'll see training and reporting for the entire organization.",
};

export function getRoleConfig(id: string | null | undefined): RoleConfig | undefined {
  if (!id) return undefined;
  return ROLE_CONFIGS.find((r) => r.id === id);
}

export function rolesForFacility(facilityType: FacilityType | null | undefined): RoleConfig[] {
  if (!facilityType) return ROLE_CONFIGS;
  return ROLE_CONFIGS.filter((r) => r.facilityType === facilityType);
}

export function rolesByDepartment(facilityType?: FacilityType | null): Record<string, RoleConfig[]> {
  const source = facilityType ? rolesForFacility(facilityType) : ROLE_CONFIGS;
  const out: Record<string, RoleConfig[]> = {};
  for (const r of source) {
    (out[r.department] = out[r.department] || []).push(r);
  }
  return out;
}

export function reportingScopeFor(roleId: string | null | undefined): ReportingScope {
  return getRoleConfig(roleId)?.reportingScope ?? "own_department";
}
