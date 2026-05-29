import type { HandbookChapter } from "./schema";

// AAAHC v44 chapter structure for ASC users.
// Source: AAAHC Accreditation Handbook for Ambulatory Health Care, v44 (©2025 AAAHC).
// Chapter titles, standard identifiers, and category names match the published handbook exactly.

export type AscHandbookCategory = "Universal Standards" | "Selective Standards";

export type AscHandbookChapter = HandbookChapter & {
  chapterNumber: number;
  category: AscHandbookCategory;
  quizLevelId?: string;
  surveyRiskCount?: number;
  surveyRiskLabel?: string;
};

const QUIZ_MAP: Record<string, string> = {
  asc_hb_adm: "asc_adm",
  asc_hb_asg: "asc_asg",
  asc_hb_beh: "asc_beh",
  asc_hb_cmc: "asc_cmc",
  asc_hb_cpv: "asc_cpv",
  asc_hb_crd: "asc_crd",
  asc_hb_emg: "asc_emg",
  asc_hb_fac: "asc_fac",
  asc_hb_gov: "asc_gov",
  asc_hb_ipc: "asc_ipc",
  asc_hb_lrd: "asc_lrd",
  asc_hb_med: "asc_med",
  asc_hb_ocs: "asc_ocs",
  asc_hb_prr: "asc_prr",
  asc_hb_qua: "asc_qua",
  asc_hb_saf: "asc_saf",
  asc_hb_val: "asc_val",
};

export const ASC_HANDBOOK_CATEGORY_ORDER: AscHandbookCategory[] = [
  "Universal Standards",
  "Selective Standards",
];

export const ascHandbook: AscHandbookChapter[] = [
  {
    levelId: "asc_hb_adm",
    chapterNumber: 1,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_adm"],
    surveyRiskCount: 5,
    surveyRiskLabel: "incomplete personnel files, outdated policies, staffing gaps",
    title: "ADM: Administration",
    overview:
      "The Administration category establishes the structural and operational foundation for an accreditable ambulatory surgery center. An accreditable organization maintains a defined administrative structure, ensures personnel are sufficient in number and qualifications, documents staff competencies, and maintains current policies and procedures. The governing body is ultimately accountable for administrative systems that support safe patient care.",
    sections: [
      {
        heading: "ADM.100 - Organizational Structure and Administrative Authority",
        content:
          "The organization must have a defined administrative structure that clearly establishes reporting relationships and lines of authority, typically documented as an organizational chart reviewed and approved by the governing body. The administrator or equivalent must have clearly delineated authority and responsibility for day-to-day operations, distinct from the governing body's oversight role. When authority is delegated, the delegation must be documented in writing.",
      },
      {
        heading: "ADM.110 - Personnel Sufficiency in Number and Qualifications",
        content:
          "The organization must have sufficient personnel - in number and qualifications - to provide its full scope of services safely and competently. Staffing assessments must account for patient volume, case complexity, and any regulatory requirements for staff-to-patient ratios. On-call coverage arrangements and emergency staffing plans must be documented. Contracted personnel are included in staffing assessments.",
      },
      {
        heading: "ADM.120 - Personnel Records",
        content:
          "Personnel files must contain documentation of: current licensure and/or certification with expiration date tracking, orientation and initial training records, ongoing competency assessments, annual performance evaluations, and relevant health screening records. For licensed professionals, primary source verification of licensure is expected. Records must be maintained for all personnel - employed, contracted, and volunteer.",
      },
      {
        heading: "ADM.130 - Orientation and Training Requirements",
        content:
          "All personnel must receive orientation to the organization, their specific job duties, and applicable policies and procedures before providing services independently. Orientation must include emergency procedures, infection prevention practices, patient rights, and safety protocols. Ongoing training must be provided when new equipment, procedures, or policies are introduced. Training records must document content, date, trainer, and employee acknowledgment.",
      },
      {
        heading: "ADM.140 - Competency Assessment",
        content:
          "The organization must assess and document the competency of all personnel at defined intervals. Competency assessments must be specific to the employee's role and the services they provide. For clinical staff, competency must be demonstrated - not merely attested - through skills check-offs, case reviews, or direct observation. New skills required by new services or equipment must be assessed before clinical implementation.",
      },
      {
        heading: "ADM.150 - Policies and Procedures Management",
        content:
          "The organization must maintain written policies and procedures covering all aspects of clinical and administrative operations. Policies must be current, reviewed at the interval defined by the organization's policy management system (typically annually), accessible to all relevant staff, and revised promptly when regulations, standards, or practices change. All policies must be approved by the appropriate authority before implementation.",
      },
      {
        heading: "ADM.160 - Performance Evaluation",
        content:
          "Annual or defined-interval performance evaluations must be conducted for all personnel. Evaluations must be documented in the personnel file and must assess performance against the employee's job description and competency expectations. Evaluations provide a mechanism for identifying development needs, recognizing performance, and documenting improvement plans when needed.",
      },
    ],
    quickReference: [
      { fact: "ADM.100", detail: "Organizational chart and administrative authority must be documented in writing." },
      { fact: "ADM.110", detail: "Staffing must be adequate in number AND qualifications for services provided." },
      { fact: "ADM.120", detail: "Personnel files: license, orientation, competency, evaluation, health screening." },
      { fact: "ADM.130", detail: "Orientation before independent practice; training records must document content and date." },
      { fact: "ADM.140", detail: "Competency must be demonstrated, not just attested. Document at defined intervals." },
      { fact: "ADM.150", detail: "Policies must be current, reviewed per defined cycle, and governing-body-approved." },
      { fact: "ADM.160", detail: "Annual performance evaluations must be documented in personnel files." },
    ],
  },
  {
    levelId: "asc_hb_asg",
    chapterNumber: 2,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_asg"],
    surveyRiskCount: 6,
    surveyRiskLabel: "time-out gaps, site marking by wrong person, incomplete anesthesia records",
    title: "ASG: Anesthesia and Surgical Services",
    overview:
      "The Anesthesia and Surgical Services category establishes requirements for every phase of the surgical episode - from pre-operative assessment through post-operative discharge. Standards address patient identification, surgical site marking, the mandatory pre-procedural pause, anesthesia monitoring, complications management, and discharge criteria. The ASG standards reflect a systems approach to preventing surgical and anesthesia adverse events and align with nationally recognized surgical safety guidelines.",
    sections: [
      {
        heading: "ASG.100 / ASG.110 - Pre-Operative Assessment and Informed Consent",
        content:
          "Before any surgical or procedural intervention, the patient must receive a complete pre-operative assessment including: medical history and physical examination (H&P), review of prior anesthesia records, assessment of the airway, review of current medications, and identification of conditions that may affect anesthesia or surgical outcome. The H&P must be completed within the organization's defined timeframe before the procedure. Informed consent for both the procedure (PRR.250) and anesthesia (PRR.240) must be documented in the clinical record before the procedure begins.",
      },
      {
        heading: "ASG.120 / ASG.130 - Two-Identifier Verification and Surgical Site Marking",
        content:
          "Two patient identifiers (name + date of birth, or name + medical record number) must be used to verify patient identity before any procedure, medication administration, or specimen collection. For procedures involving laterality, level, or a specific site among multiple possible sites, the surgical site must be marked - by the operating practitioner performing the procedure - with patient or representative involvement whenever possible. Marking exceptions (e.g., oral procedures, single-site procedures per organizational policy) must be defined in policy.",
      },
      {
        heading: "ASG.140 - The Pre-Procedural Time-Out",
        content:
          "A formal pre-procedural time-out must be conducted immediately before the incision or procedure begins, with all members of the procedural team actively participating. The time-out must verify: correct patient identity, correct procedure, correct surgical site and laterality, correct patient positioning, and any relevant implants, special equipment, or special requirements. The time-out must be documented in the clinical record. A time-out conducted before all team members are present does not meet this standard.",
      },
      {
        heading: "ASG.150 / ASG.160 - Anesthesia Monitoring and Documentation",
        content:
          "During any procedure where sedation or anesthesia is administered, continuous physiologic monitoring must meet nationally recognized guidelines. Standard anesthesia monitoring includes: pulse oximetry, end-tidal CO2 (for general anesthesia and deep sedation), continuous ECG, blood pressure at defined intervals, and temperature monitoring when indicated. The anesthesia record must document continuous monitoring data, medications administered (agent, dose, time, route), complications, and patient condition throughout the procedure.",
      },
      {
        heading: "ASG.170 / ASG.180 - Post-Anesthesia Recovery and Discharge Criteria",
        content:
          "After anesthesia, patients must be continuously monitored in a designated post-anesthesia care area until they meet written discharge criteria approved by the governing body. Recovery monitoring includes: vital signs, level of consciousness, pain assessment, nausea and vomiting, bleeding, and complications. Discharge criteria must be consistently applied and documented as met for each patient before discharge from recovery. The Modified Aldrete Score or equivalent criteria must be defined in policy.",
      },
      {
        heading: "ASG - Management of Complications and Transfers",
        content:
          "The organization must have written procedures for managing anesthesia and surgical complications - including protocols for malignant hyperthermia, respiratory depression, cardiac arrest, and failed airway management. When patients require transfer to a higher level of care, the clinical record must document the patient's condition, communication with the receiving facility, and the mode of transfer consistent with the patient's medical status. Qualified personnel must accompany the patient during transfer.",
      },
    ],
    quickReference: [
      { fact: "ASG.100/110", detail: "Complete pre-op assessment (H&P, airway, meds, prior anesthesia) and informed consent documented before procedure." },
      { fact: "ASG.120/130", detail: "Two identifiers before every procedure; site marking by the operating practitioner." },
      { fact: "ASG.140", detail: "Time-out immediately before incision, all team members active, documented in record." },
      { fact: "ASG.150/160", detail: "Continuous anesthesia monitoring per national guidelines; complete anesthesia record required." },
      { fact: "ASG.170/180", detail: "Post-anesthesia recovery monitoring; governing-body-approved discharge criteria applied and documented." },
      { fact: "Transfer", detail: "Written transfer protocols required; qualified personnel and appropriate transport for all higher-level-of-care transfers." },
    ],
  },
  {
    levelId: "asc_hb_beh",
    chapterNumber: 3,
    category: "Selective Standards",
    quizLevelId: QUIZ_MAP["asc_hb_beh"],
    surveyRiskCount: 4,
    surveyRiskLabel: "generic treatment plans, privacy gaps in group therapy, unverified counselor credentials",
    title: "BEH: Behavioral Health Services",
    overview:
      "The Behavioral Health Services category applies to ambulatory organizations that provide mental health evaluation and treatment, substance use disorder (SUD) treatment, or both. Standards address therapeutic settings, behavioral health-specific patient rights (including restraint and seclusion restrictions), individualized treatment planning, continuity of care, staff qualifications, and telehealth delivery requirements. BEH standards supplement - not replace - the core clinical standards in CMC and PRR.",
    sections: [
      {
        heading: "BEH.100 - Therapeutic Settings and Environment",
        content:
          "Behavioral health services must be provided in settings appropriate for the type and intensity of services offered. Settings must ensure: auditory and visual privacy during individual therapy sessions; appropriate group therapy spaces that maintain confidentiality from non-participants; safe physical environments that do not pose ligature or self-harm risks for at-risk populations; and access to emergency support appropriate to the behavioral health conditions treated. For telehealth delivery, the platform must be HIPAA-compliant, staff must be in a private location, and patients must be informed of and encouraged to secure their own privacy.",
      },
      {
        heading: "BEH.110 - Patient Rights in Behavioral Health",
        content:
          "Patients receiving behavioral health services retain all rights in the PRR category plus additional rights specific to behavioral health: freedom from inappropriate use of restraint or seclusion; the right to participate in treatment planning; the right to refuse specific treatments (with informed refusal documentation); and specific protections under 42 CFR Part 2 for substance use disorder records. SUD records under 42 CFR Part 2 require explicit patient consent for most disclosures - even to other treating providers - which is stricter than standard HIPAA.",
        criticalValues: [
          { label: "Regulatory Reference", value: "42 CFR Part 2 (SUD confidentiality)" },
        ],
      },
      {
        heading: "BEH.120 - Assessment and Individualized Treatment Planning",
        content:
          "Each behavioral health patient must receive a comprehensive assessment appropriate to the presenting condition. The individualized treatment plan based on that assessment must include: presenting problems and diagnoses (using current DSM criteria); measurable treatment goals with target timelines; specific interventions planned; the disciplines and providers involved; a discharge or transition planning component; and documentation of patient involvement in treatment planning. Treatment plans must be reviewed and updated at defined intervals based on patient progress.",
      },
      {
        heading: "BEH.130 - Staff Qualifications in Behavioral Health",
        content:
          "Staff providing behavioral health services must hold the qualifications required by state law for their scope of practice: licensure as appropriate (licensed professional counselor, licensed clinical social worker, psychologist, psychiatrist, certified alcohol and drug counselor, etc.). The organization must verify credentials through primary source verification. Supervision requirements for associate-licensed or license-eligible staff must be formally documented with the supervising clinician's credentials on file.",
      },
      {
        heading: "BEH.150 - Continuity of Care and Discharge Planning",
        content:
          "Continuity of care is critical in behavioral health where abrupt treatment interruption can cause serious harm. The organization must have processes for: referring patients to appropriate levels of care using established criteria (e.g., ASAM criteria for SUD); ensuring warm handoffs during care transitions; communicating clinical information to receiving providers; and following up with patients who disengage from treatment prematurely. Discharge planning begins at admission and is updated throughout treatment.",
      },
    ],
    quickReference: [
      { fact: "BEH.100", detail: "Auditory AND visual privacy required in therapy settings; HIPAA-compliant telehealth platform required." },
      { fact: "BEH.110", detail: "42 CFR Part 2: SUD records need explicit consent for disclosure - stricter than HIPAA." },
      { fact: "BEH.120", detail: "Individualized treatment plan: DSM diagnosis, measurable goals, specific interventions, patient involvement." },
      { fact: "BEH.130", detail: "Scope-specific licensure verified by primary source; supervision for associate-licensed staff documented." },
      { fact: "BEH.150", detail: "Discharge planning starts at admission; ASAM criteria guide SUD level-of-care transitions." },
    ],
  },
  {
    levelId: "asc_hb_cmc",
    chapterNumber: 4,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_cmc"],
    surveyRiskCount: 5,
    surveyRiskLabel: "unsigned operative notes, generic discharge instructions, unreviewed abnormal pre-op results",
    title: "CMC: Care Management and Coordination",
    overview:
      "The Care Management and Coordination category addresses the full clinical care process - from patient assessment through discharge and follow-up. Standards require complete and authenticated clinical records, clinically driven diagnostic testing, individualized care planning, written discharge instructions appropriate to the procedure, and documented coordination among all providers involved in patient care. The clinical record is the primary communication tool for the care team and the primary evidence of compliance.",
    sections: [
      {
        heading: "CMC.100 - Clinical Record Requirements",
        content:
          "Each patient must have a clinical record containing all required elements: patient identification, relevant medical history, physical examination findings, diagnostic test orders and results, diagnoses, evidence of informed consent, anesthesia record (where applicable), operative or procedure note, medication orders and administration records, nursing assessments and notes, discharge instructions, and documentation of follow-up arrangements. Records must be legible, complete, accurate, and authenticated (signed) by the responsible health care professional before the record is considered complete.",
      },
      {
        heading: "CMC.110 - Diagnostic Testing and Pre-Operative Evaluation",
        content:
          "Diagnostic testing ordered in preparation for a procedure must be clinically indicated, ordered by an appropriate provider, and results must be reviewed and documented before the procedure begins. Abnormal results must be addressed - either resolved, evaluated for clinical significance, or reflected in the procedure decision. Routine pre-operative testing without clinical indication is not required by AAAHC standards. The clinical record must show the ordering provider's documented review of results.",
      },
      {
        heading: "CMC.120 - Care Planning and Goal Setting",
        content:
          "The plan of care must be based on the patient's individual assessment findings. Care planning in the ambulatory surgery context includes: the procedural plan (technique, anesthesia type), anticipated post-operative management, patient education plan, and discharge and follow-up planning. When ongoing care is required post-procedure, care goals and instructions must be communicated in writing to the patient and to other involved providers.",
      },
      {
        heading: "CMC.130 - Discharge Planning and Written Instructions",
        content:
          "Written discharge instructions must be provided to the patient at or before discharge. Instructions must be specific to the patient's procedure and condition and must address: activity restrictions, diet, wound care (if applicable), medications prescribed with administration instructions, signs and symptoms requiring immediate attention, and follow-up appointment information. Instructions must be communicated in a language and at a literacy level the patient can understand (PRR.440), and must be documented in the clinical record.",
      },
      {
        heading: "CMC.160 - Coordination of Care Among Providers",
        content:
          "When a patient's care involves multiple health care providers - referring physician, specialist, primary care provider - coordination must be documented. This includes: communication of relevant clinical findings to the referring or primary care provider; documentation of referrals sent and received; confirmation of follow-up arrangements before patient discharge; and - when the patient requires transfer to a higher level of care - documentation of clinical status, receiving facility, and communication with the accepting provider.",
      },
    ],
    quickReference: [
      { fact: "CMC.100", detail: "Complete, authenticated record required - unsigned operative notes are incomplete records." },
      { fact: "CMC.110", detail: "Clinically indicated testing; abnormal results must be documented as reviewed before procedure." },
      { fact: "CMC.120", detail: "Care plan includes procedural plan, post-op management, patient education, and follow-up." },
      { fact: "CMC.130", detail: "Written discharge instructions: activity, diet, wound care, meds, warning signs, follow-up." },
      { fact: "CMC.160", detail: "Care coordination documented: what was communicated, to whom, when, and how." },
    ],
  },
  {
    levelId: "asc_hb_cpv",
    chapterNumber: 5,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_cpv"],
    surveyRiskCount: 5,
    surveyRiskLabel: "hospital privileges accepted without independent verification, NPDB skipped at reappointment, peer review data not incorporated into reappointment decision",
    title: "CPV: Credentialing and Privileging",
    overview:
      "The Credentialing and Privileging category establishes requirements for how an ASC verifies the qualifications of its medical and dental staff and grants clinical privileges. The governing body is ultimately responsible for an independent credentialing and privileging process. Every practitioner must submit a formal application, submit to primary source verification, and be formally appointed by the governing body. Reappointment is required at least every three years. Ongoing monitoring of date-sensitive credentials keeps the credential file current between reappointments.",
    sections: [
      {
        heading: "CPV.100 - Governing Body Accountability for Credentialing and Privileging",
        content:
          "The governing body is ultimately responsible for credentialing and privileging at the ASC. It must have defined criteria for appointment and reappointment applied uniformly to all applicants. The ASC's credentialing process must be independent - privileges may not be approved solely because another organization (such as a hospital) has approved them. The other institution's status may be considered but does not substitute for independent ASC verification.",
      },
      {
        heading: "CPV.130 / CPV.140 - Approved Written Processes for All Phases",
        content:
          "CPV.130 requires governing body-approved written processes covering: initial credentialing, appointment, reappointment, granting of privileges, suspension or termination of privileges, and the appeal process. CPV.140 requires the initial application to capture: training, experience, and current documented competence; peer references documenting current competence; current state license; NPDB information; and DEA registration (if applicable). All five categories must be addressed on every initial application.",
      },
      {
        heading: "CPV.150 / CPV.160 - Written Attestation and Completed Application",
        content:
          "The application must include written attestation covering seven categories: liability claims history; licensure actions; adverse professional society reports; privilege denial, suspension, or nonrenewal at any facility; federal sanctions; criminal history (other than minor traffic violations); and health conditions affecting care. The application must also include a liability release, an accuracy attestation, and the applicant's dated signature before processing may begin.",
        criticalValues: [
          { label: "Attestation Categories", value: "7 required: liability, licensure, society actions, prior privilege actions, federal sanctions, criminal, health status" },
        ],
      },
      {
        heading: "CPV.170 - Primary Source Verification",
        content:
          "Upon receipt of a completed and signed application, primary or secondary source verification of credentials must be conducted. Primary source verification means confirming credentials directly with the issuing authority - not by accepting copies from the applicant. Accredited CVOs may conduct primary source verification on the organization's behalf. The same elements required on the application must be primary source verified before privileges are granted.",
      },
      {
        heading: "CPV.180 / CPV.190 / CPV.200 / CPV.210 - Reappointment and Ongoing Monitoring",
        content:
          "Reappointment is required at least every three years (CPV.180/190). The reappointment application must include updated information, completed attestation, and a dated signature, followed by re-verification. CPV.200 requires peer review results to be incorporated into reappointment decisions. CPV.210 requires ongoing monitoring of date-sensitive credentials - licensure, DEA registration, and board certifications - between reappointment cycles so that expirations are caught when they occur, not at the next three-year review.",
      },
    ],
    quickReference: [
      { fact: "CPV.100", detail: "Governing body is responsible. Hospital privileges do not substitute for the ASC's own independent process." },
      { fact: "CPV.140", detail: "Initial application: training/competence, peer references, current license, NPDB, DEA. All five required." },
      { fact: "CPV.150/160", detail: "7-category attestation + liability release + accuracy attestation + dated signature = complete application." },
      { fact: "CPV.170", detail: "Primary source verification required upon receipt of completed, signed application." },
      { fact: "CPV.180/190", detail: "Reappointment at least every three years with re-verification and attestation." },
      { fact: "CPV.200", detail: "Peer review results must be incorporated into reappointment decisions." },
      { fact: "CPV.210", detail: "Ongoing monitoring of license, DEA, and board certification between reappointment cycles." },
    ],
  },
  {
    levelId: "asc_hb_crd",
    chapterNumber: 6,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_crd"],
    surveyRiskCount: 5,
    surveyRiskLabel: "allergy not asked at each encounter, unsigned visit entries, telephone advice not documented, no problem summary for multi-visit patients",
    title: "CRD: Clinical Records",
    overview:
      "The Clinical Records category establishes requirements for maintaining complete, accurate, and secure patient clinical records. A designated person must oversee the clinical records system, and written policies must govern how records are collected, stored, protected, and released. Every patient must have an individual record with consistent, legible entries. Allergy information must be recorded prominently, verified at every encounter, and must include a description of the patient's reaction. Clinical records must support continuity of care.",
    sections: [
      {
        heading: "CRD.120 - Clinical Records System: Collection, Processing, and Maintenance",
        content:
          "CRD.120 requires the organization to maintain a monitored system for collecting, processing, maintaining, storing, retrieving, and distributing clinical records. A designated person must be in charge of clinical records overall, and a designated person must be in charge of the health information system (the same individual may fill both roles in small organizations). The system must have written procedures and must be actively monitored.",
      },
      {
        heading: "CRD.130 / CRD.140 - Written Policies and Records Maintained to Facilitate Safe Care",
        content:
          "CRD.130 requires written policies addressing seven areas: security of information; release of patient records; protection from damage or loss (including backup systems for electronic records); methods to deter unauthorized access; timely access for authorized personnel; retention of active records; and retirement of inactive records. CRD.140 requires records to be in a consistent format (legible, organized, accessible) and available to authorized personnel any time the organization is open - including items scanned into electronic records, which must be legible.",
      },
      {
        heading: "CRD.160 / CRD.180 / CRD.190 - Confidentiality, Individual Record, and Visit Entry Requirements",
        content:
          "CRD.160 requires strict confidentiality of all patient data - clinical, social, and financial - in all formats. Surveyor observations and interviews are used to verify actual confidential practice, not just written policies. CRD.180 requires individual records with: name, ID number, date of birth, gender, and responsible party. CRD.190 requires each visit entry to include: date, chief complaint/history, clinical findings, care rendered, medication changes, discharge diagnosis/disposition, and provider authentication.",
        criticalValues: [
          { label: "CRD.190 Required Entry Elements", value: "7: date, complaint/history, findings, care, medication changes, diagnosis/disposition, provider signature" },
        ],
      },
      {
        heading: "CRD.210 - Allergy and Sensitivity Documentation",
        content:
          "Allergy documentation is a Tier 1 patient safety requirement with four specific elements: (1) patients are asked about allergies at each encounter - not just at initial registration; (2) patients reporting allergies describe their specific reaction (anaphylaxis, rash, GI, etc.) - not just the allergen name; (3) information is recorded in a prominent, consistently defined location across all records; (4) information is verified and updated at each encounter. Missing any one of these four elements is a deficiency.",
      },
      {
        heading: "CRD.220 / CRD.230 / CRD.250 - Reports, Informed Consent Discussion, and Continuity",
        content:
          "CRD.220 requires that reports (labs, imaging, operative notes) are reviewed and incorporated with evidence of provider review. CRD.230 requires documentation of discussions with patients about the necessity, risks, and alternatives of proposed care - a consent form alone does not satisfy this. CRD.250 requires documentation of: missed/canceled appointments; telephone, text, or email medical advice (including content); and a problem summary for patients with three or more visits or complex records.",
      },
    ],
    quickReference: [
      { fact: "CRD.120", detail: "Designated person(s) for records oversight. Monitored system with written procedures." },
      { fact: "CRD.130", detail: "7 written policy topics: security, release, damage protection, unauthorized access, access, retention, retirement." },
      { fact: "CRD.140", detail: "Consistent format, legible entries (including scanned documents), accessible, available during all operating hours." },
      { fact: "CRD.160", detail: "Strict confidentiality of all patient data - verified by surveyor observation, not just written policy." },
      { fact: "CRD.190", detail: "7 required visit entry elements including provider authentication on every entry." },
      { fact: "CRD.210", detail: "Allergy: ask each encounter, document reaction type, prominent consistent location, verify and update each encounter." },
      { fact: "CRD.250", detail: "Document missed appointments, telephone advice (content), and problem summary for 3+ visit patients." },
    ],
  },
  {
    levelId: "asc_hb_emg",
    chapterNumber: 7,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_emg"],
    surveyRiskCount: 5,
    surveyRiskLabel: "no HVA, drills without debriefs, outdated community coordination contacts",
    title: "EMG: Emergency Management",
    overview:
      "The Emergency Management category requires ASCs to develop, maintain, and regularly test a comprehensive emergency and disaster preparedness plan. The plan must be based on a hazard vulnerability analysis, address both internal and external emergencies, provide for community coordination, and be exercised through documented drills. Staff must demonstrate knowledge of emergency procedures through training and drill participation.",
    sections: [
      {
        heading: "EMG.100 - Medical Emergency and Unplanned Transfer Procedures",
        content:
          "EMG.100 requires written procedures for managing medical emergencies and unplanned outcomes requiring transfer to a higher level of care. Required elements: who has authority to order a transfer; the transfer process including hospital destination and transport; care of the patient while awaiting transfer; and documentation that accompanies the patient. Staff must be trained on these procedures and training must be documented.",
      },
      {
        heading: "EMG.140 - BLS-Trained Personnel and Emergency Equipment Training",
        content:
          "EMG.140 requires that personnel trained in BLS and in the use of cardiac and all other emergency equipment and supplies are present whenever patients are in the facility. Three documentation requirements: (1) current BLS certifications in personnel files; (2) documentation of training on emergency equipment; and (3) a written policy requiring trained personnel on-site whenever patients are present. All three must be satisfied.",
      },
      {
        heading: "EMG.160 - Comprehensive Written Emergency and Disaster Preparedness Plan",
        content:
          "EMG.160 requires a comprehensive written plan addressing both internal emergencies (fire, medical crisis, utility failure, security) and external disasters (natural disasters, mass casualty events). The plan must include provisions for safe evacuation - with special attention to individuals at greater risk (sedated patients, those with mobility limitations) - and participation in community health emergency preparedness where applicable.",
      },
      {
        heading: "EMG.170 - Scenario-Based Drills: Quarterly Frequency and Written Evaluation",
        content:
          "EMG.170 requires scenario-based drills with specific frequency requirements: at least one drill per calendar quarter (minimum 4 per year); at least one CPR technique drill annually; and at least one drill based on the full emergency/disaster plan annually. Each drill requires a written evaluation and prompt implementation of any corrections identified.",
        criticalValues: [
          { label: "Minimum Drill Frequency", value: "1 per calendar quarter (4/year minimum)" },
          { label: "Annual Requirements", value: "1 CPR technique drill + 1 full plan drill, annually" },
        ],
      },
      {
        heading: "EMG.180 - Emergency Equipment Maintained and Readily Accessible",
        content:
          "EMG.180 requires appropriate emergency equipment and supplies to be maintained and readily accessible to all areas of each patient care service site. 'Maintained' means regularly checked, functional, stocked, and not expired. 'Readily accessible' means in defined, known locations - not locked away or requiring a search. Documentation of equipment checks must be present.",
      },
    ],
    quickReference: [
      { fact: "EMG.100", detail: "Written procedures for medical emergency/transfer: who decides, how it happens, care during transfer, documentation sent." },
      { fact: "EMG.140", detail: "BLS-certified personnel on-site whenever patients are present. BLS certs + equipment training + written policy = 3 requirements." },
      { fact: "EMG.160", detail: "Comprehensive plan: internal + external emergencies, evacuation provisions for at-risk patients, community coordination." },
      { fact: "EMG.170", detail: "Drills: 1/quarter minimum; CPR drill annually; full plan drill annually. Each drill requires written evaluation." },
      { fact: "EMG.180", detail: "Emergency equipment maintained (checked, stocked, not expired) and readily accessible (known locations)." },
    ],
  },
  {
    levelId: "asc_hb_fac",
    chapterNumber: 8,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_fac"],
    surveyRiskCount: 5,
    surveyRiskLabel: "decontamination area not separated, equipment maintenance gaps, untested backup power",
    title: "FAC: Facilities and Equipment",
    overview:
      "The Facilities and Equipment category addresses the physical environment and equipment of the ambulatory surgery center. Standards cover the safety of the physical environment, adequate space for services, instrument decontamination area requirements, environmental controls in procedure rooms, medical equipment maintenance and calibration, and alternate power requirements for facilities administering sedation or anesthesia.",
    sections: [
      {
        heading: "FAC.100 - Safe Physical Environment",
        content:
          "FAC.100 is a Universal/Tier 1 standard requiring that the physical environment is safe for patients, staff, and visitors. This encompasses: compliance with applicable life safety codes (fire safety, egress), elimination or control of identified hazards, compliance with building codes for healthcare facilities, and maintenance of the facility in a clean and organized manner. Documentation of compliance with applicable building codes and regulations (occupancy permit, fire authority letter, building inspection) must be present.",
      },
      {
        heading: "FAC.110 - Facility Operated in a Safe and Secure Manner",
        content:
          "FAC.110 requires that the facility is operated safely and securely. Written policies must address safety and security practices, and observation and staff interviews must confirm security practices are actually followed. This includes controlled access to patient care areas, visitor management, and after-hours security protocols.",
      },
      {
        heading: "FAC.120 / FAC.130 / FAC.140 - Patient Comfort, Cleanliness, and No Visible Hazards",
        content:
          "FAC.120 requires that the physical environment supports patient comfort and privacy: appropriate reception areas and restrooms, privacy during exams and consultations, smoking prohibition, disability accommodation, adequate lighting and ventilation, and sufficient space for activities performed. FAC.130 requires clean and properly maintained facilities (no dust, soil, mold, rust, or damaged surfaces). FAC.140 requires that no visible hazards exist that could cause slipping, falling, electrical shock, burns, or other trauma.",
      },
      {
        heading: "FAC.150 / FAC.160 - Fire Protection and Safe Exiting",
        content:
          "FAC.150 requires fire extinguishers at visually obvious locations (within 75 feet of any location), with monthly inspection documentation and annual maintenance. FAC.160 requires prominently displayed illuminated exit signs with emergency power capability at all exits. Stairwells that are part of required exit paths must be enclosed in fire walls with fire-rated doors.",
        criticalValues: [
          { label: "Fire Extinguisher Placement", value: "Within 75 feet of any location; monthly inspection documented" },
        ],
      },
      {
        heading: "FAC.250 - Medical Equipment Maintenance",
        content:
          "Medical equipment must be maintained through: written policies and procedures for equipment maintenance; standardized equipment use per manufacturer instructions; periodic calibration per manufacturer specifications (with documented calibration records); and periodic preventive maintenance per manufacturer specifications (with documented maintenance logs). Equipment requiring calibration must have current calibration documentation; equipment requiring preventive maintenance must have current maintenance records.",
      },
      {
        heading: "FAC.260 - Alternate Power for Operative and Recovery Areas",
        content:
          "Organizations that administer moderate sedation, regional anesthesia, deep sedation, or general anesthesia must have alternate power (generator or battery backup) available in operative and recovery areas, adequate for the types of procedures performed. The alternate power system must be tested to confirm adequacy, and test results must be documented. An untested generator or one with insufficient capacity for OR equipment does not meet FAC.260.",
      },
    ],
    quickReference: [
      { fact: "FAC.100", detail: "Highest-weight standard: safe physical environment per life safety codes and building standards." },
      { fact: "FAC.120/130/140", detail: "Patient privacy + smoking prohibition + clean/maintained + no visible hazards - all verified by observation." },
      { fact: "FAC.150/160", detail: "Fire extinguishers within 75 ft + monthly inspection. Illuminated exit signs with emergency power at all exits." },
      { fact: "FAC.250", detail: "Medical equipment: calibration records AND preventive maintenance records, both current per manufacturer specs." },
      { fact: "FAC.260", detail: "Backup power required if sedation/anesthesia used; must be present, adequate, and tested." },
    ],
  },
  {
    levelId: "asc_hb_gov",
    chapterNumber: 9,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_gov"],
    surveyRiskCount: 5,
    surveyRiskLabel: "incomplete annual board review, scope of services gaps, unapproved anesthesia techniques",
    title: "GOV: Governance",
    overview:
      "The Governance category establishes expectations for the governing body's legal and ethical responsibility for all organizational operations - clinical and administrative. The governing body must define the organization's mission, establish the scope of services, adopt bylaws and policies, oversee clinical quality, approve contracts, ensure regulatory compliance, and review accreditation requirements at least annually. Specific selective standards address governing body oversight of anesthesia techniques, surgical procedures, and energy-emitting devices.",
    sections: [
      {
        heading: "GOV.140 / GOV.150 - Legal Constitution and State Licensure",
        content:
          "The organization must be a legally constituted entity (or an organized sub-unit of one) as evidenced by articles of incorporation, partnership agreement, operating agreement, or equivalent documentation. The organization must comply with applicable state licensure requirements. AAAHC must be notified in writing within 15 calendar days of significant organizational, ownership, operational, or quality of care events.",
      },
      {
        heading: "GOV.160 / GOV.170 - Strategic Direction and Operational Accountability",
        content:
          "GOV.160 requires the governing body to set strategic direction: determining the mission, goals, and objectives, and formulating long-range plans. Under GOV.170, the governing body bears full legal responsibility for organizational operations - directly or through professional delegation - including: establishing organizational structure, adopting bylaws, implementing financial management, ensuring compliance with all applicable laws (ADA, HIPAA, fraud and abuse, NPDB reporting), and overseeing AAAHC Standards compliance.",
      },
      {
        heading: "GOV.180 - Defining the Scope of Services",
        content:
          "The governing body must formally define the scope of services - documenting the treatments and procedures the organization provides, the patient population served, and the hours of operation. Telehealth or telemedicine services offered must be referenced, defined, and approved in the scope of services. The scope must be reviewed at least annually (GOV.240.60) and revised as needed.",
      },
      {
        heading: "GOV.200 - Contract and Arrangement Oversight",
        content:
          "The governing body must approve and monitor compliance with all major contracts affecting clinical care - including external service contracts (radiology, pathology, lab, housekeeping), education contracts for students, after-hours telephone triage contracts, and delegated activity arrangements. GOV.200.50 requires ongoing compliance monitoring, not just initial contract approval. Signed contracts without documented performance monitoring do not satisfy this standard.",
      },
      {
        heading: "GOV.230 / GOV.240 - Meeting Frequency and Annual Review Requirements",
        content:
          "The governing body must meet at least annually, with minutes or records kept for each meeting (GOV.230). GOV.240 requires at least annual governing body review of: patient rights and responsibilities, delegated administrative responsibilities, the QI program, the IPC program, the safety program, the emergency/disaster preparedness plan, the risk management program, organizational policies and procedures, appointment/reappointment processes, and the scope of services. Revisions must be made as needed.",
      },
      {
        heading: "GOV.270 / GOV.290 - Oversight of Anesthesia and Surgical Procedures",
        content:
          "Anesthesia techniques used must be limited to those approved by the governing body upon the recommendation of qualified professional personnel (GOV.270). Surgical procedures must be limited to those approved by the governing body upon the recommendation of qualified medical staff (GOV.290). For energy-emitting devices (lasers, light-based technologies), each provider must have governing body-granted privileges specific to each device they use (GOV.310).",
      },
    ],
    quickReference: [
      { fact: "GOV.140", detail: "Legally constituted entity documentation: articles of incorporation, partnership agreement, or equivalent." },
      { fact: "GOV.150", detail: "Notify AAAHC in writing within 15 days of significant organizational, ownership, or quality events." },
      { fact: "GOV.180", detail: "Scope of services = what you do + who you serve + when you are open. All three required." },
      { fact: "GOV.200", detail: "Major contracts require governing body approval AND documented ongoing compliance monitoring." },
      { fact: "GOV.240", detail: "Annual review of 10 required items; must be evidenced in governing body meeting minutes." },
      { fact: "GOV.270/290", detail: "Approved anesthesia techniques and surgical procedures must be in writing; energy devices require device-specific privileges." },
    ],
  },
  {
    levelId: "asc_hb_ipc",
    chapterNumber: 10,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_ipc"],
    surveyRiskCount: 6,
    surveyRiskLabel: "no biological indicators, overfilled sharps containers, absent hand hygiene surveillance",
    title: "IPC: Infection Prevention and Control",
    overview:
      "The Infection Prevention and Control category requires ASCs to maintain a comprehensive, governing-body-approved IPC program based on nationally recognized guidelines. The program must be integrated with quality improvement, comply with OSHA and applicable laws, and be led by a designated qualified professional. Core operational requirements include documented surveillance of hand hygiene and safe injection practices, sterilization with biological indicators, a written sharps injury prevention program, and appropriate surgical environment controls.",
    sections: [
      {
        heading: "IPC.100 - The Written IPC Program",
        content:
          "Standard IPC.100 requires a written infection prevention and control program that is: (1) approved by the governing body, (2) validated by an annual formal infection prevention risk assessment, (3) based on nationally recognized guidelines selected by the governing body (CDC, WHO, APIC, AORN, etc.), (4) integrated into the quality improvement program, and (5) compliant with all applicable state, federal, and OSHA requirements. The program must be updated annually based on the risk assessment findings.",
      },
      {
        heading: "IPC.130 - Hand Hygiene and Safe Injection Practice Surveillance",
        content:
          "The written IPC program must require active surveillance of hand hygiene consistent with WHO, CDC, or other nationally recognized guidelines (IPC.130.30), and active surveillance of safe injection practices consistent with CDC guidelines (IPC.130.40). Active surveillance means ongoing, documented observation - not just a policy statement. A written hand hygiene policy (IPC.130.20) must specify appropriate products per manufacturer's instructions for use.",
        criticalValues: [
          { label: "Key Distinction", value: "Active surveillance = documented observation, not just a policy." },
        ],
      },
      {
        heading: "IPC.170 - Sterilization: The Three-Indicator Requirement",
        content:
          "IPC.170 governs cleaning, decontamination, high-level disinfection, and sterilization of instruments, equipment, supplies, and implants. IPC.170.30 requires that internal AND external indicators, including biological indicators (spore tests), are used with items undergoing sterilization. External indicators (autoclave tape) change color to show exposure; internal indicators confirm conditions reached inside the pack; biological indicators confirm that spores are killed - providing the highest level of sterilization assurance. All three types are required.",
        criticalValues: [
          { label: "Three Required Indicators", value: "External + Internal (chemical integrator) + Biological (spore test)" },
        ],
      },
      {
        heading: "IPC.180 - Sharps Injury Prevention Program",
        content:
          "IPC.180 requires a written sharps injury prevention program covering: (1) disposal of intact needles and syringes into appropriate puncture-resistant sharps containers; (2) placement of containers in care areas, secured from patient or unauthorized tampering; (3) replacement of containers when the fill line is reached (not when overfull); and (4) compliant handling, storage, and disposal of filled containers per applicable regulations. Overfilling containers past the marked fill line is a specific, frequently cited deficiency.",
      },
      {
        heading: "IPC.190 / IPC.200 / IPC.210 - Cross-Infection Prevention and Safe Practices",
        content:
          "IPC.190 requires written policies addressing methods to prevent cross-infection - including single-patient-use items, sterilization/disinfection requirements, and controls for patients with transmissible conditions. IPC.200 requires policies on sanitary conditions for patient care activities including medication preparation. IPC.210 addresses regulated medical waste: a written policy for the handling, storage, and disposal of infectious waste per applicable state and federal regulations.",
      },
      {
        heading: "IPC.230 - Surgical Environment Safeguards",
        content:
          "IPC.230 applies to facilities with operating or procedure rooms and requires written policies for: proper surgical attire for all persons entering ORs or procedure rooms; acceptable aseptic techniques; requirement that patient clothing be removed or covered before OR entry; freshly laundered attire donned inside the facility before entering restricted areas; surgical hand antisepsis using antimicrobial soap or alcohol-based hand rub; pre-procedure skin site antisepsis; and environmental controls (temperature, humidity, air pressure differentials) following nationally recognized guidelines.",
      },
    ],
    quickReference: [
      { fact: "IPC.100", detail: "Five elements: governing body approval, annual risk assessment, national guidelines, QI integration, OSHA compliance." },
      { fact: "IPC.130", detail: "Active surveillance of hand hygiene AND safe injection practices - documented observations required." },
      { fact: "IPC.170", detail: "Three indicators required: external + internal chemical integrator + biological spore test." },
      { fact: "IPC.180", detail: "Sharps containers: correct placement, secured from tampering, replaced at fill line." },
      { fact: "IPC.230", detail: "Seven surgical environment elements including attire, antisepsis, and ASHRAE-based environmental controls." },
    ],
  },
  {
    levelId: "asc_hb_lrd",
    chapterNumber: 11,
    category: "Selective Standards",
    quizLevelId: QUIZ_MAP["asc_hb_lrd"],
    surveyRiskCount: 4,
    surveyRiskLabel: "POCT without CLIA waiver, absent QC logs, imaging interpreted without privileges",
    title: "LRD: Laboratory and Radiology",
    overview:
      "The Laboratory and Radiology category applies when an ASC provides laboratory testing or imaging services, either directly or through contracted arrangements. Standards require appropriate CLIA certification for laboratory testing (including point-of-care testing), a qualified laboratory director, documented quality control, licensed radiologic technologists for imaging procedures, qualified physician interpreters with specific imaging privileges, and timely communication of critical diagnostic results.",
    sections: [
      {
        heading: "LRD.100 - Laboratory Services: CLIA Compliance",
        content:
          "All laboratory testing performed at an ASC must comply with the Clinical Laboratory Improvement Amendments (CLIA). This includes point-of-care testing such as blood glucose monitoring, urine dipstick testing, and rapid antigen tests. The CLIA certificate appropriate to the complexity of tests performed (CLIA waiver for waived tests; moderate or high complexity certificate for non-waived tests) must be current, on site, and posted in the laboratory area. Testing not covered by the certificate's scope is non-compliant.",
        criticalValues: [
          { label: "Regulatory Reference", value: "Clinical Laboratory Improvement Amendments (CLIA)" },
        ],
      },
      {
        heading: "LRD.120 - Laboratory Director Requirements",
        content:
          "Laboratory services must be directed by a qualified laboratory director whose credentials meet CLIA requirements for the complexity category of tests performed. For CLIA-waived testing, director qualification requirements are minimal. For moderate and high complexity testing, CLIA specifies detailed educational and experience requirements. The director is responsible for: overall laboratory operations quality, establishing quality control procedures, reviewing quality control data, and ensuring personnel qualifications.",
      },
      {
        heading: "LRD.130 - Quality Control in the Laboratory",
        content:
          "Quality control (QC) is required for all laboratory testing. For waived tests, QC must be performed per manufacturer instructions - typically with control materials at each new reagent lot and when results appear suspect. For non-waived tests, CLIA specifies minimum QC frequency and required control types. QC documentation must include: date, test or device, control lot number, control result, acceptable range, and pass/fail determination. QC failures require investigation and resolution before patient testing resumes.",
      },
      {
        heading: "LRD.140 - Radiology Services: Qualified Personnel",
        content:
          "Radiologic procedures must be performed by personnel licensed or certified as required by applicable state law - typically state licensure and/or ARRT credentialing for radiologic technologists. Fluoroscopy, mammography, and radiation therapy have additional qualification requirements. Radiology services must be directed by a qualified physician trained in radiology who is privileged at the organization for the specific imaging modalities used.",
      },
      {
        heading: "LRD.160 - Timely Reporting of Diagnostic Results",
        content:
          "Both laboratory and radiology results must be communicated to the ordering provider in a timely manner. A written policy must define expected reporting timeframes for routine, urgent/stat, and critical/panic value results. Critical values must have an immediate notification protocol documenting who was notified, when, and what action was taken. Timeliness of critical value notification must be monitored as part of the quality improvement program.",
      },
    ],
    quickReference: [
      { fact: "LRD.100", detail: "ALL laboratory testing - including POCT - requires current CLIA certification posted on site." },
      { fact: "LRD.120", detail: "Laboratory director credentials must meet CLIA requirements for the complexity of tests performed." },
      { fact: "LRD.130", detail: "QC logs required: date, device, lot, result, range, pass/fail. Failures require investigation before resuming patient testing." },
      { fact: "LRD.140", detail: "Radiologic procedures performed only by licensed/ARRT-credentialed staff; interpreting physician must hold imaging privileges." },
      { fact: "LRD.160", detail: "Critical value policy: immediate notification, documentation of who/when/action, timeliness monitored in QI." },
    ],
  },
  {
    levelId: "asc_hb_med",
    chapterNumber: 12,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_med"],
    surveyRiskCount: 6,
    surveyRiskLabel: "incomplete medication labels, antidotes not co-stocked, vaccine temp logs missing",
    title: "MED: Medication Management",
    overview:
      "The Medication Management category applies to all ASCs that use drugs, biologicals, pharmaceutical supplies, or samples - regardless of whether an on-site pharmacy is present. Standards address pharmaceutical oversight, high-alert and look-alike/sound-alike (LASA) medication management, drug security and diversion prevention, medication storage and labeling, patient medication education, vaccine storage protocols, and disposal of expired or recalled medications.",
    sections: [
      {
        heading: "MED.100 - Pharmaceutical Services Oversight",
        content:
          "Pharmaceutical services must be provided in accordance with standards of care and prevailing laws. Specific requirements include: a written policy defining safe handling and administration per nationally recognized guidelines; current DEA certification maintained on site when controlled substances are present; staff demonstration of knowledge of prevailing pharmaceutical laws; and direct access to current drug information and decision support resources for all relevant staff. Telehealth organizations must meet the same standard.",
      },
      {
        heading: "MED.140 / MED.150 / MED.160 - High-Alert and LASA Medications",
        content:
          "MED.140 requires monitoring medication inventory for high-alert medications and look-alike/sound-alike (LASA) medications, with a written policy, documented staff training, and monitoring documentation. MED.150 requires a list of currently stocked high-alert medications, error-prevention processes per nationally recognized guidelines, and - critically - co-stocking antidotes, rescue agents, or reversal agents in the same area as the high-alert medication. MED.160 requires a LASA list and processes to prevent LASA administration errors.",
        criticalValues: [
          { label: "Frequent Finding", value: "MED.150.30: antidotes/reversal agents must be co-stocked with the high-alert medication" },
        ],
      },
      {
        heading: "MED.170 / MED.180 - Drug Security and Storage",
        content:
          "MED.170 addresses drug security: pre-signed and post-dated prescriptions are prohibited by written policy (a hard prohibition, not a recommendation); prescription pads and electronic prescribing systems must be controlled and secured. MED.180 requires drug storage conditions that maintain safety: medications must be segregated into organized, labeled storage areas designed to minimize selection errors, and stored per manufacturer requirements, state guidelines, and CDC guidelines.",
      },
      {
        heading: "MED.200 - Medication Labeling Outside the Original Container",
        content:
          "When a medication is removed from its original container and not immediately administered, it must be labeled with: drug name(s), drug strength(s), amount or volume if not apparent from the container, expiration date and time, and the name or initials of the person who prepared the drug. 'Immediate administration' means the preparer administers the medication completely without any break in the process. Any gap between preparation and administration triggers the full labeling requirement.",
        criticalValues: [
          { label: "Five Required Elements", value: "Name, strength, amount/volume, expiration date/time, preparer's ID" },
        ],
      },
      {
        heading: "MED.240 - Vaccine Storage and Handling",
        content:
          "Nationally recognized guidelines for vaccine storage and handling (e.g., CDC Vaccine Storage and Handling Toolkit) must be adopted by the governing body and followed. Written policies must address both routine and emergency (equipment failure, power outage) storage and handling. Staff who receive, handle, or administer vaccines must be trained on these policies. Vaccine storage units must have a calibrated temperature monitoring device. Staff must demonstrate knowledge of procedures when vaccines are exposed to temperature excursions.",
      },
    ],
    quickReference: [
      { fact: "MED.100", detail: "DEA certification on site; staff must demonstrate knowledge of pharma laws; current drug references accessible." },
      { fact: "MED.150", detail: "High-alert list + error-prevention processes + antidote co-stocked in same area as high-alert med." },
      { fact: "MED.160", detail: "LASA list maintained with documented processes to prevent mix-ups." },
      { fact: "MED.170", detail: "Pre-signed and post-dated prescriptions: hard prohibition by written policy." },
      { fact: "MED.200", detail: "Five label elements: name, strength, amount/volume, expiration date/time, preparer's ID." },
      { fact: "MED.240", detail: "Six elements: governing body adoption of guidelines, routine policy, emergency policy, staff training, temp monitor, excursion response." },
    ],
  },
  {
    levelId: "asc_hb_ocs",
    chapterNumber: 13,
    category: "Selective Standards",
    quizLevelId: QUIZ_MAP["asc_hb_ocs"],
    surveyRiskCount: 4,
    surveyRiskLabel: "chemotherapy without BSC/PPE, dental staff credentialing gaps, IVF embryo identification failures",
    title: "OCS: Other Clinical Services",
    overview:
      "The Other Clinical Services category addresses specialty clinical services that may be provided in ambulatory settings: dental care, medical oncology and chemotherapy, reproductive health services, in vitro fertilization, women's health, and other specialty ambulatory care. Each specialty area has specific requirements for qualified personnel, safety protocols, patient selection, and quality monitoring. OCS standards supplement - not replace - the core clinical standards in CMC, ASG, and MED.",
    sections: [
      {
        heading: "OCS.100 - Dental Services",
        content:
          "Dental services must be directed by a qualified dental director. All dentists and dental hygienists must hold current state licensure verified through primary source verification. Dental radiography must be performed by appropriately licensed or certified personnel. Dental records must include: dental and medical history, examination findings, dental charting, treatment plans, informed consent, and procedure notes. Infection prevention practices specific to dentistry - instrument sterilization, dental unit water line management - must be addressed in the IPC program.",
      },
      {
        heading: "OCS.110 - Medical Oncology / Chemotherapy",
        content:
          "Organizations providing chemotherapy must follow specific hazardous drug safety protocols: chemotherapy agents must be prepared in a biological safety cabinet (BSC) in a negative pressure room; staff must use appropriate personal protective equipment (chemotherapy gloves, gowns, eye protection); spill kits must be immediately available; and waste must be disposed of as hazardous waste. Administration protocols must define patient eligibility criteria, independent double-check dose verification, pre-medication requirements, monitoring during infusion, and management of adverse reactions.",
        criticalValues: [
          { label: "Critical Safety Requirement", value: "BSC in negative pressure room + PPE + spill kit + hazardous waste disposal" },
        ],
      },
      {
        heading: "OCS.120 - Reproductive Health Services",
        content:
          "Reproductive health services must comply with applicable state and federal laws. Non-directive counseling must be available - patients must receive information about all options and make autonomous decisions without coercion. Comprehensive informed consent must address all options, risks, and alternatives. Confidentiality protections are particularly important, especially for minors whose rights to confidential services vary by state and type of service.",
      },
      {
        heading: "OCS.130 - In Vitro Fertilization (IVF) Services",
        content:
          "IVF facilities must meet specific requirements: laboratory standards for embryo culture and storage; robust gamete and embryo tracking and identification systems to prevent mix-ups at every step; cryopreservation protocols and emergency backup for stored materials; patient disclosure of cumulative success rates (not just per-cycle rates); counseling on disposition of surplus embryos; and qualified embryologists and reproductive endocrinologists. Embryo identification and mix-up prevention is the highest-priority patient safety concern in IVF.",
      },
      {
        heading: "OCS.150 - Quality Monitoring in Specialty Services",
        content:
          "Each specialty clinical service must be included in the organization's quality improvement program with specialty-specific quality metrics. For chemotherapy: adverse reaction rates, dose calculation errors, extravasation events. For dental: post-procedure infection rates, retreatment rates. For IVF: clinical pregnancy rates, multiple gestation rates, cryopreservation success rates. Specialty-specific incidents must be reviewed through both the quality and peer review programs. Benchmarking against national specialty-specific data is important where local volume is insufficient for statistical analysis.",
      },
    ],
    quickReference: [
      { fact: "OCS.100", detail: "Dental: qualified director, PSV licensure for all dental staff, dental-specific records and IPC protocols." },
      { fact: "OCS.110", detail: "Chemotherapy: BSC + negative pressure room + PPE + spill kit + hazardous waste + independent double-check." },
      { fact: "OCS.120", detail: "Reproductive health: non-directive counseling, comprehensive consent, heightened confidentiality especially for minors." },
      { fact: "OCS.130", detail: "IVF: embryo ID system at every step; cumulative (not just per-cycle) success rates disclosed to patients." },
      { fact: "OCS.150", detail: "Specialty-specific QI metrics required; benchmark against national specialty databases." },
    ],
  },
  {
    levelId: "asc_hb_prr",
    chapterNumber: 14,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_prr"],
    surveyRiskCount: 4,
    surveyRiskLabel: "rights notice given after gowning, verbal grievance resolution with no documentation, consent signed without discussion",
    title: "PRR: Patient Rights, Responsibilities and Protections",
    overview:
      "The Patient Rights, Responsibilities and Protections category establishes expectations for recognizing every patient's legal and ethical entitlements throughout their episode of care. Patients must be treated with respect and dignity, informed of their rights and responsibilities before care begins, given access to organizational information, and provided a meaningful grievance pathway. Informed consent must be documented in the clinical record. Communication must occur in a language and manner the patient and caregiver can understand.",
    sections: [
      {
        heading: "PRR.100 - Dignity, Privacy, and Shared Decision-Making",
        content:
          "Patients must be treated in a manner respectful of personal, cultural, and religious beliefs. Patients have the right to personal privacy at check-in and in evaluation and treatment areas. Patients must be given the opportunity to participate in decisions involving their health care unless medically contraindicated. In telehealth settings, staff must ensure visual, auditory, and electronic privacy on the clinical side and should encourage patients to secure privacy on their end.",
      },
      {
        heading: "PRR.180 / PRR.190 - Communicating Rights and Responsibilities Before Care",
        content:
          "Before care begins, both patients and staff must be informed of patient rights - including how to voice grievances, how to provide feedback, the right to change providers if alternatives are available, and advance directive rights as required by law. Separately, patients must be informed of their responsibilities: providing complete and accurate health information, following the agreed-upon treatment plan, arranging transportation, accepting financial responsibility for uncovered charges, and behaving respectfully toward health care professionals.",
      },
      {
        heading: "PRR.200 - Organizational Information Accessible to Patients",
        content:
          "Information about the organization must be available to patients without them having to ask: services provided, provisions for after-hours and emergency care, fees for services, payment policies, the credentials of health care professionals, and - if applicable - the absence of malpractice coverage. This is an availability standard, not an 'on request' standard. For telehealth organizations, an accurate fee schedule must be accessible and after-hours emergency access information must include how to reach clinicians remotely.",
      },
      {
        heading: "PRR.240 / PRR.250 - Informed Consent for Anesthesia and Procedures",
        content:
          "Before a procedural or surgical intervention, the clinical record must demonstrate that: (1) the necessity or appropriateness of the proposed procedure and available alternative treatment techniques were discussed with the patient; and (2) the patient's written consent (or that of their representative) is present in the clinical record before the procedure is performed. A separate PRR.240 requires documented consent for anesthesia. One consent form may satisfy both standards if it addresses both elements.",
        criticalValues: [
          { label: "Two Required Elements", value: "Discussion documented + written consent signed BEFORE the procedure" },
        ],
      },
      {
        heading: "PRR.440 - Communication in a Language and Manner the Patient Understands",
        content:
          "Providers and staff must communicate in a manner that the patient and/or caregiver understands. This requires: interpretive services available for language differences; services available for patients with hearing or visual impairments; and information provided in a plain and easy-to-understand manner. Family members are not a substitute for professional interpretive services. Telephone and video interpretation services qualify. Organizations should assume patients may have difficulty comprehending health information and communicate proactively at an appropriate literacy level.",
      },
    ],
    quickReference: [
      { fact: "PRR.100", detail: "Dignity, privacy at check-in and in care areas, shared decision-making - three non-negotiable pillars." },
      { fact: "PRR.180", detail: "Rights notice BEFORE care; staff must also be informed of patient rights and the grievance process." },
      { fact: "PRR.190", detail: "Patient responsibilities BEFORE care: accurate history, treatment adherence, transportation, financial responsibility, respectful behavior." },
      { fact: "PRR.200", detail: "Organizational info available without the patient having to ask - an availability standard, not 'on request.'" },
      { fact: "PRR.250", detail: "Two elements documented: discussion of necessity/alternatives + written consent signed before the procedure." },
      { fact: "PRR.440", detail: "Professional interpretive services required; family members are not a compliant substitute." },
    ],
  },
  {
    levelId: "asc_hb_qua",
    chapterNumber: 15,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_qua"],
    surveyRiskCount: 5,
    surveyRiskLabel: "peer review not covering all providers, QI studies without re-measurement, peer review results not reported to governing body",
    title: "QUA: Quality",
    overview:
      "The Quality category requires ASCs to maintain a multidimensional, multidisciplinary quality management and improvement program integrating peer review, ongoing performance monitoring, infection prevention data, safety, and risk management. Peer review must be structured, ongoing, and cover all privileged health care professionals. Quality improvement activities must use data to identify trends, drive action, and improve outcomes. Results must be reported to the governing body at least annually and must inform privilege continuation decisions.",
    sections: [
      {
        heading: "QUA.100 / QUA.110 / QUA.120 - Peer Review Structure and Participation",
        content:
          "QUA.100 requires each physician, dentist, or health care professional to be reviewed by at least one similarly privileged and/or similarly licensed peer. For solo practitioners, an outside peer must provide the review (QUA.110). QUA.120 requires structured peer review: privileged professionals participate in developing and applying review criteria; clinical care is selected for ongoing review covering all similarly privileged professionals; all clinical incidents are reviewed; and each provider is reviewed at least annually.",
      },
      {
        heading: "QUA.130 - Ongoing Monitoring: Collect → Evaluate → Act",
        content:
          "QUA.130 requires three sequential steps: (1) data are collected in an ongoing manner; (2) data are periodically evaluated to identify trends or occurrences that affect patient outcomes; and (3) when data analysis identifies a problem or improvement opportunity, action is taken. The AAAHC guidance notes that benchmarking against external norms is part of this process. Documentation must show all three steps - data collection alone does not satisfy QUA.130.",
        criticalValues: [
          { label: "Three Required Steps", value: "Collect → Evaluate for trends → Act when problems identified" },
        ],
      },
      {
        heading: "QUA.140 / QUA.150 - Governing Body Reporting and Privileging Connection",
        content:
          "The results of peer review activities must be reported to the governing body at least annually (QUA.140). QUA.150 requires that peer review results are used as part of the process for granting continuation of clinical privileges - closing the loop between quality data and credentialing decisions. Organizations that maintain peer review and credentialing as completely separate systems without any data flow between them have a structural QUA deficiency.",
      },
      {
        heading: "QUA.160 - Quality Improvement Studies",
        content:
          "The quality improvement program must include studies that systematically assess, improve, and document the quality of clinical care. A compliant QI study must include: a clinically relevant topic; a measurable goal; baseline data collection; an intervention designed to improve performance; re-measurement after the intervention; and documentation of outcomes. Studies that collect data without a baseline, measurable goal, intervention, or re-measurement phase are not compliant QI studies.",
      },
      {
        heading: "QUA.220 - Integrating QI, IPC, Safety, and Risk Management",
        content:
          "QUA.220 requires that the quality management program links peer review, quality improvement activities, infection prevention and control, safety, and risk management in an organized, systematic way. IPC surveillance data, safety event reports, and risk management findings must all feed into the QI program, and the governing body must receive an integrated view of organizational performance - not siloed reports from disconnected programs.",
      },
    ],
    quickReference: [
      { fact: "QUA.100/110", detail: "All providers reviewed by similarly privileged peers; solo practitioners require outside peer review." },
      { fact: "QUA.120", detail: "Peer review: professionals develop criteria; all providers reviewed; all incidents reviewed; minimum annually." },
      { fact: "QUA.130", detail: "Ongoing monitoring is a three-step sequence: Collect → Evaluate → Act. Document all three." },
      { fact: "QUA.140/150", detail: "Peer review results → governing body AND → privilege continuation decisions. Two separate linkages required." },
      { fact: "QUA.160", detail: "QI study requires: topic, baseline, measurable goal, intervention, re-measurement." },
      { fact: "QUA.220", detail: "QI, IPC, safety, and risk management must be integrated - not siloed." },
    ],
  },
  {
    levelId: "asc_hb_saf",
    chapterNumber: 16,
    category: "Universal Standards",
    quizLevelId: QUIZ_MAP["asc_hb_saf"],
    surveyRiskCount: 5,
    surveyRiskLabel: "incidents logged but not analyzed, no product recall policy, incomplete bloodborne pathogen records",
    title: "SAF: Safety",
    overview:
      "The Safety category requires ASCs to implement a comprehensive safety program preventing injury, managing hazards, protecting patients and staff, and meeting all applicable safety requirements. Key components include a written risk management program with formally defined incident and adverse event terminology, a system for reviewing and acting on all incidents, environmental hazard controls, product recall procedures, expiration date monitoring, hazardous waste management, bloodborne pathogen protections, and fire prevention.",
    sections: [
      {
        heading: "SAF.100 / SAF.110 - Risk Management Program: Written Policies Required",
        content:
          "The risk management program must include written policies addressing (SAF.100): methods for dismissing or refusing care to patients; managing incapacitated health care professionals during procedures; addressing impaired health care professionals; after-hours coverage responsibility documentation; after-hours clinical advice documentation; and restrictions on observers in patient care areas. SAF.110 adds: near-miss reporting encouragement, reportable event communication, periodic litigation review, patient complaint review with defined response times, liability carrier notification for adverse events, and periodic clinical record review.",
      },
      {
        heading: "SAF.120 / SAF.130 - Defining and Acting on Incidents and Adverse Events",
        content:
          "SAF.120 requires formal written definitions for 'incident' (any clinical or non-clinical occurrence not consistent with routine care, including near-miss events) and 'adverse event' (unexpected occurrences causing death or serious injury, process variations with risk of serious adverse outcome, breaches in medical or administrative care, and drug or material reactions). SAF.130 requires that all incidents and adverse events are reviewed, acted upon when appropriate, analyzed to identify underlying causes, and that improvements are implemented when indicated.",
      },
      {
        heading: "SAF.140 - The Written Safety Program",
        content:
          "The written safety program must meet or exceed local, state, and federal safety requirements and must include processes for: (1) managing identified hazards and near misses; (2) reducing and avoiding medication errors; (3) preventing falls and other physical injuries; (4) preventing skin and tissue injury from chemicals, cleaning solutions, and hazardous exposure; and (5) ensuring food and drink for patient use is handled per applicable guidelines (NA if not applicable). All five elements must be present in the written program.",
        criticalValues: [
          { label: "Five Required Elements", value: "Hazard management, medication errors, falls, chemical injury, food safety" },
        ],
      },
      {
        heading: "SAF.150 / SAF.160 - Product Recall and Expiration Date Programs",
        content:
          "SAF.150 requires a written recall policy covering: sources of recall information (FDA, CDC, manufacturers); staff notification process; how the organization determines if a recalled product is present or was administered to patients; response procedures; product disposition and return; and patient notification as appropriate. SAF.160 requires a written policy for monitoring and disposing of products with manufacturer expiration dates - for all products, reagents, medications, and supplies - with documented monitoring activities.",
      },
      {
        heading: "SAF.250 / SAF.260 - Occupational Health and Bloodborne Pathogen Protections",
        content:
          "SAF.250 requires: governing-body-approved occupational health and safety policies; an annually updated written exposure control plan; an immunization program covering agents of risk to staff and patients per the IPC risk assessment; and a TB detection and protection plan following applicable regulatory requirements or nationally recognized guidelines. SAF.260 specifically requires: a hepatitis B immunization program with documentation of acceptance or declination by each employee; post-exposure evaluation and treatment; appropriate bloodborne pathogen training; and proper recordkeeping.",
      },
    ],
    quickReference: [
      { fact: "SAF.100/110", detail: "Risk management: written policies for provider impairment, after-hours coverage, near-miss reporting, litigation review, complaint response." },
      { fact: "SAF.120", detail: "Formally define 'incident' and 'adverse event' in writing - definitions drive the review program." },
      { fact: "SAF.130", detail: "All incidents reviewed; near-misses analyzed for systemic factors; improvements implemented and tracked." },
      { fact: "SAF.140", detail: "Five safety program elements: hazards, medication errors, falls, chemical injury, food safety." },
      { fact: "SAF.150/160", detail: "Recall: 6 policy elements. Expiration monitoring: written policy + documented monitoring activities." },
      { fact: "SAF.260", detail: "Bloodborne pathogen: hep B program with documented acceptance/declination by each employee." },
    ],
  },
  {
    levelId: "asc_hb_val",
    chapterNumber: 17,
    category: "Selective Standards",
    quizLevelId: QUIZ_MAP["asc_hb_val"],
    surveyRiskCount: 4,
    surveyRiskLabel: "outdated AAAHC profile, California reporting deadlines missed, New York billing structure not reflected",
    title: "VAL: Validation",
    overview:
      "The Validation category validates profile and application information submitted to AAAHC for accuracy and completeness, and assesses compliance with state-specific requirements for outpatient surgery settings - primarily California Business and Professions Code and Health and Safety Code provisions, and New York Public Health Law provisions for office-based surgery centers. All VAL standards are selective; they apply when the organization has self-identified certain characteristics in its AAAHC profile.",
    sections: [
      {
        heading: "VAL Overview - Profile Accuracy as the Core Obligation",
        content:
          "VAL.180 (the parent standard for the Validation category) requires that the information in the AAAHC application and profile is accurate and current. When operational changes occur - new services, new locations, change in anesthesia level offered, change in billing structure, addition or departure of key personnel - the AAAHC profile must be updated promptly. Profile inaccuracies discovered during survey result in VAL findings and may affect accreditation status if material.",
      },
      {
        heading: "California VAL Standards - Outpatient Surgery Anesthesia Requirements",
        content:
          "California Business and Professions Code §2216 prohibits physicians from performing procedures using anesthesia (beyond local/peripheral nerve block) in doses creating risk of loss of protective reflexes - unless the setting meets specific requirements and is accredited. VAL.190 verifies that if the organization performs such procedures, this is accurately reflected in the AAAHC profile. VAL.200 verifies that the organization meets California Health and Safety Code §1248's definition of an 'outpatient setting.'",
        criticalValues: [
          { label: "California Law Reference", value: "Business and Professions Code §2216; Health and Safety Code §1248" },
        ],
      },
      {
        heading: "California Adverse Event and Death Reporting Requirements",
        content:
          "For California outpatient surgery settings providing anesthesia at loss-of-protective-reflex levels, four distinct reporting requirements apply: (1) VAL.430 - adverse events per HSC §1279.1 must be reported to the Medical Board of California within five days, or 24 hours for ongoing urgent threats, per BPC §2216.3; (2) VAL.440 - deaths or transfers per BPC §2240 must be reported using required forms; (3) VAL.450 - patient deaths require the Outpatient Surgery Patient Death Reporting Form submitted within 15 days; (4) VAL.460 - transfers exceeding 24 hours require Parts A&B filed in the patient's medical record and Part B submitted to OSHPD within 15 days.",
        criticalValues: [
          { label: "Four Distinct Reports", value: "Adverse event (5 days), death/transfer form, death report (15 days), extended transfer (15 days)" },
        ],
      },
      {
        heading: "New York Office-Based Surgery VAL Standards",
        content:
          "New York Public Health Law 230-d establishes requirements for office-based surgery centers. The VAL standards for New York verify that the AAAHC profile accurately reflects: types of healthcare professionals employed (VAL.210); whether the practice has a separate billing entity (VAL.220); whether a billing and collection service is used (VAL.230); ownership and financial interest structure (VAL.240–250); physical address and state certification (VAL.260, VAL.280); procedural record maintenance (VAL.290); infection control plan and required incident reporting (VAL.300, VAL.310); and NYSDOH certificate of need requirements (VAL.320).",
      },
      {
        heading: "Florida Physician Office Surgery Requirements",
        content:
          "Florida statutes and administrative rules establish requirements for physician office surgery organizations performing office surgery level II and III procedures. The VAL standards verify that organizations performing these levels of procedures are registered or exempt from registration as required by applicable Florida law, and that the AAAHC profile accurately reflects the procedures performed and their corresponding anesthesia level.",
      },
    ],
    quickReference: [
      { fact: "VAL.180", detail: "Update AAAHC profile promptly when services, location, personnel, or structure changes. Material inaccuracies = VAL findings." },
      { fact: "VAL.190/200", detail: "California: loss-of-protective-reflex anesthesia must be accurately reflected in profile; must meet HSC §1248 definition." },
      { fact: "VAL.430", detail: "California: adverse events reported to Medical Board within 5 days (24 hours if ongoing urgent threat)." },
      { fact: "VAL.450/460", detail: "California: death report within 15 days; extended transfer (>24 hr) reported to OSHPD within 15 days." },
      { fact: "New York", detail: "VAL.210–320: profile must accurately reflect billing structure, ownership, certifications, and NYS PHL 230-d compliance." },
    ],
  },
];
