// ── Remediation Library ────────────────────────────────────────────────────
//
// STRUCTURE:
//   REMEDIATION_LIBRARY  - category name → array of 3 preset plans
//   LEVEL_TO_CATEGORY    - levelId → category name (one-to-one)
//   getRemediationPlan() - levelId + score % → assigned steps + reassessment flag
//
// SCORE THRESHOLDS (final/post-test only):
//   ≥ 70%     : no remediation
//   60 – 69%  : 1 plan assigned (primary review)
//   50 – 59%  : 2 plans assigned (review + reinforcement)
//   < 50%     : 2 plans assigned + reassessmentRequired flag
//
// LANGUAGE POLICY:
//   Supportive educational wording only.
//   Do not use incident-based or operational corrective action language.

export interface LibraryStep {
  title: string;
  description: string;
}

export interface RemediationResult {
  category: string;
  steps: LibraryStep[];
  reassessmentRequired: boolean;
}

// ── Category → 3 preset plans ─────────────────────────────────────────────

export const REMEDIATION_LIBRARY: Record<string, [LibraryStep, LibraryStep, LibraryStep]> = {

  "Instrument Integrity": [
    {
      title: "Targeted Review of Instrument Inspection Concepts",
      description:
        "Work through the study cards for Instrument Integrity at your own pace. Focus on the rules for functional testing, tip condition, and documentation requirements before your next quiz attempt.",
    },
    {
      title: "Guided Instrument Inspection Walkthrough",
      description:
        "Ask a preceptor or lead tech to walk through a real instrument set with you step by step. Observe the inspection process, ask questions, and take notes on any steps that were unclear.",
    },
    {
      title: "Return Demonstration: Instrument Check Before Use",
      description:
        "Demonstrate the full instrument pre-use inspection process to your supervisor or preceptor. Explain each step as you perform it, then discuss any areas where you felt uncertain.",
    },
  ],

  "Facilities & Equipment": [
    {
      title: "Focused Review of Equipment Safety Standards",
      description:
        "Review the study cards covering equipment maintenance cycles, PM sticker requirements, and documentation standards. Pay close attention to the rules around equipment readiness and reporting.",
    },
    {
      title: "Unit-Based Equipment Safety Observation",
      description:
        "Walk your unit with a supervisor or charge staff member. Identify equipment items together and discuss what a surveyor would look for regarding maintenance records, labels, and storage conditions.",
    },
    {
      title: "Equipment Compliance Reinforcement Quiz",
      description:
        "Retake the Facilities & Equipment quiz after your review. If you score 70% or higher, you are ready to move on. If not, schedule a brief check-in with your manager before your next attempt.",
    },
  ],

  "SPD & Decontamination": [
    {
      title: "Decontamination Workflow Review",
      description:
        "Go back through the SPD & Decontamination study cards and focus on the sequence of the decontamination process, PPE requirements, and sink usage standards. Understanding the 'why' behind each step will help it stick.",
    },
    {
      title: "Checklist Walkthrough with Preceptor",
      description:
        "Complete a decontamination area walkthrough with an experienced SPD team member. Use your facility's standard checklist and ask your preceptor to highlight any commonly missed compliance points.",
    },
    {
      title: "Scenario Review + Reassessment",
      description:
        "Review two or three common decontamination scenarios from the study material, particularly around PPE breaches and instrument flow. Once confident, schedule a reassessment with your supervisor.",
    },
  ],

  "OR & Sterile Technique": [
    {
      title: "Sterile Field and Attire Review",
      description:
        "Review the study concepts covering gown and glove technique, sterile field boundaries, and what constitutes a break in sterility. The key rules are specific; read each one carefully before retesting.",
    },
    {
      title: "Observed Sterile Technique Reinforcement",
      description:
        "Ask a circulator, scrub tech, or OR educator to observe you setting up or assisting with a sterile field. Request feedback after the case on anything that could be improved from a compliance standpoint.",
    },
    {
      title: "Teach-Back on Breaks in Sterility",
      description:
        "Explain to your supervisor or educator what constitutes a break in the sterile field and what the correct response is. Teaching the concept back in your own words is one of the most effective ways to confirm understanding.",
    },
  ],

  "Transport of Instruments": [
    {
      title: "Instrument Transport Process Review",
      description:
        "Review the study cards for Transport of Instruments, focusing on point-of-use cleaning, containment requirements, and the flow from the OR or procedure room to the decontamination area.",
    },
    {
      title: "Workflow Observation: Point of Use to Decontam",
      description:
        "Follow a transport cycle from point of use through delivery to SPD with an experienced staff member. Observe proper containment, labeling, and handoff steps, and ask about any steps that were unclear in your review.",
    },
    {
      title: "Transport Compliance Retest",
      description:
        "After completing your review and observation, retake the quiz. Aim for 70% or above to confirm readiness. If needed, consult the study cards one more time before your attempt.",
    },
  ],

  "Environment & Surfaces": [
    {
      title: "Environmental Infection Prevention Review",
      description:
        "Go through the study cards for Environment & Surfaces, paying close attention to terminal cleaning standards, high-touch surface protocols, and what surveyors typically evaluate in patient care areas.",
    },
    {
      title: "Area Walkthrough with Supervisor",
      description:
        "Walk a patient care area or clinical space with your supervisor. Discuss what you observe from a cleanliness and compliance standpoint, looking at surfaces, waste containers, and environmental conditions together.",
    },
    {
      title: "Scenario-Based Surface Safety Review",
      description:
        "Work through the scenario-type study cards in this category. These are designed to help you apply the standards to real situations. Discuss any tricky scenarios with your supervisor or infection prevention contact.",
    },
  ],

  "Clean vs. Dirty": [
    {
      title: "Segregation Principles Review",
      description:
        "Review the clean/dirty separation study cards. Focus on the rules for physical separation, airflow considerations, and how surveyors evaluate segregation compliance in your environment.",
    },
    {
      title: "Verbal Workflow Walkthrough",
      description:
        "Verbally walk your supervisor or preceptor through the clean-to-dirty workflow in your area. Describe the separation points, the flow of instruments, and how contamination is prevented at each step.",
    },
    {
      title: "Teach-Back on Contamination Prevention",
      description:
        "Explain to your educator or supervisor what can go wrong when clean and dirty items are not properly separated, and what the correct prevention steps are. Identifying the 'why' helps reinforce the standard.",
    },
  ],

  "Sterile Storage": [
    {
      title: "Sterile Storage Standards Review",
      description:
        "Review the study cards covering sterile storage: shelf height requirements, event-related vs. time-related expiration, humidity and temperature ranges, and what to look for on packaging integrity.",
    },
    {
      title: "Storage Area Guided Review",
      description:
        "Walk your sterile storage area with a supervisor or sterile processing lead. Identify together any items or conditions that might not meet Joint Commission expectations, and discuss the applicable standards.",
    },
    {
      title: "Storage Decision Scenarios",
      description:
        "Work through the scenario-type study cards in the Sterile Storage category. These focus on edge cases such as damaged packaging, borderline shelf heights, and expiration decisions that often appear on surveys.",
    },
  ],

  "Surgical Safety & Consent": [
    {
      title: "Universal Protocol Review",
      description:
        "Review the study cards for Surgical Safety & Consent, with a focus on the three components of Universal Protocol: pre-procedure verification, site marking, and the time-out. Understand the required participants and documentation.",
    },
    {
      title: "Pre-Procedure Safety Walkthrough",
      description:
        "Walk through a pre-procedure verification process with an OR educator, charge nurse, or physician. Discuss what is required at each step, who owns each component, and what a surveyor would look for.",
    },
    {
      title: "Teach-Back: Time-Out and Consent",
      description:
        "Explain to your supervisor or educator how the time-out is conducted, what must be confirmed, and how consent is documented in your facility. If any part of the explanation is uncertain, review that section of the study cards before retesting.",
    },
  ],

  "Patient Care & Documentation": [
    {
      title: "Documentation and Care Standards Review",
      description:
        "Review the Patient Care & Documentation study cards. Focus on the rules for care planning, patient education, medication reconciliation, and how records are expected to reflect care delivered.",
    },
    {
      title: "Case-Based Documentation Practice",
      description:
        "Work through the scenario-type cards in this category. These present common documentation gaps and ask you to identify what is missing or incorrect. Discuss any scenarios that were unclear with your supervisor.",
    },
    {
      title: "Focused Reassessment",
      description:
        "After completing your review and scenario practice, schedule a brief reassessment with your educator or manager. The goal is to confirm that the core documentation and care standards are clear before your next quiz attempt.",
    },
  ],

  "EOC & Safety Compliance": [
    {
      title: "Environment of Care Review",
      description:
        "Work through the EOC & Safety Compliance study cards. Focus on fire safety requirements, utility system responsibilities, hazardous materials management, and what each category of the Environment of Care program covers.",
    },
    {
      title: "Safety Checklist Walkthrough",
      description:
        "Complete a safety-focused walkthrough of your department or unit with your supervisor. Use a standard EOC checklist and identify together any conditions that could be cited in a survey.",
    },
    {
      title: "Safety Readiness Reassessment",
      description:
        "After your review and walkthrough, take the quiz again. If specific EOC standards are still unclear, ask your safety officer or manager to clarify before your next attempt.",
    },
  ],

  // ── ASC Categories (AAAHC v44) ──────────────────────────────────────────────
  // Pattern per chapter: Review + Retest | Guided Review + Teach-Back | Checklist/Workflow + Verification

  "ASC: Patient Rights and Responsibilities": [
    {
      title: "Patient Rights Review + Retest",
      description:
        "Review the Patient Rights and Responsibilities study cards, focusing on the patient's right to information, privacy, informed consent, and how to handle complaints or grievances. Once you feel confident, retake the quiz.",
    },
    {
      title: "Guided Review + Teach-Back on Patient Rights",
      description:
        "Sit with a supervisor or educator and walk through the key patient rights standards together. Explain in your own words what each right means and how it is applied in your ASC setting. Ask your educator to clarify anything that was unclear.",
    },
    {
      title: "Patient Communication Workflow Review",
      description:
        "Review your ASC's process for communicating patient rights at intake and throughout care. Discuss with a supervisor how your facility documents acknowledgment and how surveyors evaluate this workflow.",
    },
  ],

  "ASC: Governance": [
    {
      title: "Governance Concepts Review",
      description:
        "Review the Governance study cards, paying close attention to the responsibilities of the governing body, medical staff oversight, credentialing authority, and how policies are approved and reviewed.",
    },
    {
      title: "Guided Review + Teach-Back on Oversight Roles",
      description:
        "With a supervisor or administrator, walk through the key governance roles in your ASC: who is on the governing body, what they are responsible for, and how that accountability is documented. Teach the structure back in your own words.",
    },
    {
      title: "Governance Readiness Verification",
      description:
        "Review your ASC's governance meeting documentation, policy approval records, and organizational chart. Discuss with your administrator what a surveyor would review and where you feel confident vs. uncertain.",
    },
  ],

  "ASC: Administration": [
    {
      title: "Administration Standards Review",
      description:
        "Review the Administration study cards with a focus on operational requirements: staffing, leadership, policies, emergency preparedness, and the administrative documentation that AAAHC evaluates.",
    },
    {
      title: "Guided Review + Teach-Back on Administrative Processes",
      description:
        "Walk through your ASC's administrative workflows with a supervisor or manager. Explain what each core administrative process looks like in your facility, then ask for feedback on anything that was unclear.",
    },
    {
      title: "Administrative Workflow Verification",
      description:
        "Using your facility's administrative checklist or policy index, verify that you understand how key documents are maintained, updated, and made accessible. Discuss with your administrator how this would be evaluated during an AAAHC survey.",
    },
  ],

  "ASC: Quality of Care Provided": [
    {
      title: "Quality of Care Review + Retest",
      description:
        "Review the Quality of Care study cards with attention to patient assessment requirements, care planning, discharge criteria, and post-procedure follow-up expectations. Retake the quiz after your review.",
    },
    {
      title: "Case-Based Guided Review",
      description:
        "Work through the scenario-type cards in this chapter with your supervisor or clinical educator. Focus on identifying where care standards are met or missed in each case, and discuss what documentation would be expected.",
    },
    {
      title: "Quality Standards Teach-Back",
      description:
        "Explain to your supervisor or educator the key quality-of-care requirements for your ASC: what must be assessed, documented, and followed up on. Teaching the concept back helps confirm your understanding before retesting.",
    },
  ],

  "ASC: Quality Management and Improvement": [
    {
      title: "Quality Improvement Concepts Review",
      description:
        "Review the Quality Management study cards. Focus on the QAPI framework: how performance improvement activities are identified, measured, acted on, and documented in an ASC setting.",
    },
    {
      title: "Guided Review + Teach-Back on Improvement Process",
      description:
        "Ask your quality coordinator or administrator to walk through your ASC's current quality improvement activities with you. Explain the QAPI cycle back in your own words, then discuss how your facility's work maps to AAAHC expectations.",
    },
    {
      title: "Quality Review Checklist Verification",
      description:
        "Review your ASC's QAPI meeting minutes, improvement project logs, and outcome tracking records. With your supervisor, identify what is working well and what a surveyor might ask about during a quality management review.",
    },
  ],

  "ASC: Clinical Records and Health Information": [
    {
      title: "Clinical Records Review + Retest",
      description:
        "Review the Clinical Records study cards, focusing on what must be included in the health record, retention requirements, access and confidentiality standards, and how records are authenticated.",
    },
    {
      title: "Documentation Scenario Review",
      description:
        "Work through the scenario-based cards in this chapter. Each scenario presents a documentation gap; practice identifying what is missing and what the correct action is. Discuss tricky scenarios with your supervisor.",
    },
    {
      title: "Documentation Teach-Back + Verification",
      description:
        "Explain to your supervisor or HIM contact what must be in a complete clinical record for your ASC, how long records are retained, and how access is controlled. Then verify your understanding against your facility's actual record policy.",
    },
  ],

  "ASC: Infection Prevention and Control and Safety": [
    {
      title: "Infection Prevention Review + Retest",
      description:
        "Review the Infection Prevention and Control study cards with attention to hand hygiene, high-level disinfection and sterilization, PPE requirements, environmental cleaning, and how your ASC's infection prevention program is structured.",
    },
    {
      title: "Guided Safety and Infection Review",
      description:
        "Walk through your ASC's infection prevention policies and procedures with your infection preventionist or supervisor. Focus on the standards most likely to be evaluated during an AAAHC survey and discuss anything you found unclear in the study cards.",
    },
    {
      title: "Infection Control Checklist Verification",
      description:
        "Use your facility's infection prevention checklist or audit tool to review compliance in a patient care area or procedure room. With your supervisor, identify any areas where documentation, supplies, or practice could be strengthened.",
    },
  ],

  "ASC: Facilities and Environment": [
    {
      title: "Facilities and Environment Review",
      description:
        "Review the Facilities and Environment study cards. Focus on physical plant requirements, utility management, emergency and safety systems, and the environmental standards AAAHC expects for an ASC.",
    },
    {
      title: "Guided Environment Walkthrough Review",
      description:
        "Walk through your ASC's clinical and support spaces with a supervisor or facilities contact. Identify together what a surveyor would evaluate: emergency exits, medical gas storage, equipment condition, and environmental cleanliness.",
    },
    {
      title: "Facilities Readiness Verification",
      description:
        "Review your ASC's utility management logs, preventive maintenance records, and safety inspection documentation. Discuss with your facilities or safety coordinator what is current and what may need attention before your next accreditation review.",
    },
  ],

  "ASC: Anesthesia and Surgical Services": [
    {
      title: "Anesthesia & Surgical Services Review + Retest",
      description:
        "Review the combined Anesthesia and Surgical Services study cards. Cover pre-anesthesia evaluation requirements, intraoperative monitoring standards, post-anesthesia assessment, and the surgical safety elements including Universal Protocol and site marking.",
    },
    {
      title: "Guided Review + Teach-Back on Anesthesia and Surgical Safety",
      description:
        "Work through the key anesthesia and surgical workflow requirements with your clinical educator, CRNA, or supervisor. Teach back the pre-, intra-, and post-procedure expectations in your own words. Discuss anything that was unclear in the study cards.",
    },
    {
      title: "Anesthesia and Surgical Workflow Verification",
      description:
        "Review your ASC's anesthesia records, surgical checklists, and Universal Protocol documentation. With your clinical supervisor, identify what the record demonstrates and how it would be evaluated during an AAAHC survey.",
    },
  ],

  "ASC: Surgical and Related Services": [
    {
      title: "Surgical and Related Services Review + Retest",
      description:
        "Review the Surgical Services study cards, focusing on patient preparation requirements, surgical site protocols, instrument and implant documentation, specimen handling, and post-procedure care standards specific to your ASC setting.",
    },
    {
      title: "Guided Review + Teach-Back on Surgical Standards",
      description:
        "Walk through your ASC's surgical workflow with your charge nurse or OR supervisor. Explain the key compliance requirements for surgical care in your own words, then ask for feedback on anything that was unclear in the study cards.",
    },
    {
      title: "Surgical Workflow Verification",
      description:
        "Using your facility's surgical services checklist or policy index, review the documentation requirements for a typical procedure. With your supervisor, identify what a surveyor would evaluate and confirm that records and practices meet AAAHC expectations.",
    },
  ],

  "ASC: Pharmaceutical Services": [
    {
      title: "Pharmaceutical Services Review + Retest",
      description:
        "Review the Pharmaceutical Services study cards. Focus on medication storage requirements, controlled substance handling, pharmacy oversight, labeling standards, and how your ASC's pharmacy program is structured.",
    },
    {
      title: "Guided Medication Safety Review",
      description:
        "Walk through your ASC's medication management policies with your pharmacist, pharmacy consultant, or clinical supervisor. Discuss storage conditions, controlled substance logs, and how expired medications are managed and documented.",
    },
    {
      title: "Medication Workflow Verification",
      description:
        "Review your medication storage areas and controlled substance records with your supervisor or pharmacy contact. Identify anything that would require attention in a survey and discuss how your facility addresses each requirement.",
    },
  ],

  "ASC: Pathology and Medical Laboratory Services": [
    {
      title: "Lab Services Review + Retest",
      description:
        "Review the Pathology and Laboratory Services study cards. Focus on specimen handling, CLIA waiver requirements, point-of-care testing documentation, and how lab services are contracted or overseen in your ASC.",
    },
    {
      title: "Guided Review + Teach-Back on Lab-Related Standards",
      description:
        "Discuss your ASC's laboratory and pathology arrangements with your administrator or lab contact. Explain the key compliance requirements in your own words, then ask your educator to confirm your understanding.",
    },
    {
      title: "Lab Workflow Verification",
      description:
        "Review your ASC's CLIA certificate, specimen handling logs, and any contracted lab agreements. With your supervisor, verify that documentation and processes align with what AAAHC would evaluate during an accreditation survey.",
    },
  ],

  "ASC: Diagnostic and Other Imaging Services": [
    {
      title: "Imaging Services Review + Retest",
      description:
        "Review the Diagnostic and Imaging Services study cards. Focus on equipment maintenance requirements, radiation safety, contrast media management, and how imaging services are supervised or contracted in your ASC.",
    },
    {
      title: "Guided Review + Teach-Back on Imaging Readiness",
      description:
        "Discuss your ASC's imaging setup with your radiology contact, equipment supervisor, or administrator. Explain the key compliance standards back in your own words and ask for feedback on any areas that were unclear.",
    },
    {
      title: "Imaging Workflow Verification",
      description:
        "Review your imaging equipment maintenance logs, radiation safety documentation, and any imaging-related policies. With your supervisor, identify what a surveyor would evaluate and confirm that records are current and accessible.",
    },
  ],

  "ASC: Behavioral Health Services": [
    {
      title: "Behavioral Health Standards Review + Retest",
      description:
        "Review the Behavioral Health Services study cards. Focus on therapeutic setting requirements, individualized treatment planning, 42 CFR Part 2 confidentiality rules for SUD records, and staff qualification requirements for licensed counselors and clinical social workers.",
    },
    {
      title: "Guided Review + Teach-Back on Behavioral Health Compliance",
      description:
        "Walk through your behavioral health program's compliance elements with your clinical director or compliance contact. Explain the key requirements for treatment planning, patient privacy, and staff supervision in your own words, then ask for feedback.",
    },
    {
      title: "Behavioral Health Workflow Verification",
      description:
        "Review sample treatment plans, staff credential files, and privacy policies with your supervisor. Identify what an AAAHC surveyor would examine in each area and confirm that documentation reflects current practice.",
    },
  ],

  "ASC: Care Management and Coordination": [
    {
      title: "Care Management Standards Review + Retest",
      description:
        "Review the Care Management and Coordination study cards. Focus on clinical record completeness requirements, pre-operative diagnostic testing standards, written discharge instruction elements, and provider-to-provider communication documentation.",
    },
    {
      title: "Guided Documentation Review",
      description:
        "Walk through a sample patient record with your charge nurse or clinical supervisor. Together identify whether all required CMC elements are present, from the pre-op assessment through the discharge instructions, and note any gaps.",
    },
    {
      title: "Clinical Record Audit Verification",
      description:
        "Using your facility's record completeness audit tool, review several recent charts for CMC compliance. With your supervisor, discuss what a surveyor would cite and how to strengthen documentation practices across your team.",
    },
  ],

  "ASC: Credentialing and Privileging": [
    {
      title: "Privileging Concepts Review + Retest",
      description:
        "Review the Credentialing and Privileging study cards. Focus on the difference between a license and a clinical privilege, the delineation of privileges (DOP) requirements, how temporary privileges must be granted, and NPDB reporting thresholds.",
    },
    {
      title: "Guided Review + Teach-Back on the Privileging Process",
      description:
        "Walk through your ASC's credentialing and privileging process with your medical staff coordinator or administrator. Explain the DOP requirements and the difference between blanket specialty privileges and procedure-specific privilege lists.",
    },
    {
      title: "Privilege File Verification",
      description:
        "Review several practitioner privilege files with your credentialing contact. Confirm that each file contains a procedure-specific DOP, current credential documentation, and evidence of competency assessment. Discuss any gaps with your supervisor.",
    },
  ],

  "ASC: Emergency Management": [
    {
      title: "Emergency Management Review + Retest",
      description:
        "Review the Emergency Management study cards. Focus on the hazard vulnerability analysis (HVA) process, required emergency plan elements, drill documentation requirements, ACLS and malignant hyperthermia protocol requirements, and community coordination responsibilities.",
    },
    {
      title: "Guided Review + Teach-Back on Emergency Readiness",
      description:
        "Walk through your ASC's emergency and disaster preparedness plan with your safety officer or administrator. Explain your role during each type of emergency covered by the plan. Ask your contact to clarify any scenarios that were unclear in the study cards.",
    },
    {
      title: "Drill Documentation Review",
      description:
        "Review your last three emergency drill records with your safety officer. Confirm each drill has documented debriefing findings and corrective actions. Discuss what AAAHC would evaluate and identify any gaps in your current drill program.",
    },
  ],

  "ASC: Laboratory and Radiology": [
    {
      title: "Lab and Radiology Standards Review + Retest",
      description:
        "Review the Laboratory and Radiology study cards. Focus on CLIA certification requirements for all testing including point-of-care tests, quality control documentation requirements, radiology personnel qualifications, and critical value notification protocols.",
    },
    {
      title: "Guided Review + Teach-Back on Diagnostic Service Compliance",
      description:
        "Walk through your ASC's laboratory and imaging arrangements with your lab director, radiology contact, or administrator. Explain what CLIA compliance requires in your own words and discuss how critical values are communicated and documented.",
    },
    {
      title: "Lab and Imaging Compliance Verification",
      description:
        "Review your CLIA certificate, QC logs, and radiology personnel credential files with your supervisor. Confirm that QC documentation includes all required elements and that imaging interpretation is performed only by appropriately privileged physicians.",
    },
  ],

  "ASC: Medication Management": [
    {
      title: "Medication Management Review + Retest",
      description:
        "Review the Medication Management study cards. Focus on high-alert medication requirements (including antidote co-stocking), LASA medication lists, five required labeling elements for medications removed from their original container, and vaccine storage protocols.",
    },
    {
      title: "Guided Medication Safety Review",
      description:
        "Walk through your ASC's medication management policies with your pharmacist, pharmacy consultant, or clinical supervisor. Focus on high-alert and LASA medication protocols, controlled substance security, and how expired medications are removed and documented.",
    },
    {
      title: "Medication Storage Verification",
      description:
        "Review your medication storage areas, controlled substance logs, and current high-alert and LASA medication lists with your supervisor. Confirm antidotes are co-stocked with corresponding high-alert medications and that labeling practices meet the five-element standard.",
    },
  ],

  "ASC: Other Clinical Services": [
    {
      title: "Specialty Clinical Services Review + Retest",
      description:
        "Review the Other Clinical Services study cards for the specialty services your ASC provides. Focus on the specific safety requirements for chemotherapy (BSC, PPE, spill kit), dental record requirements, IVF embryo identification systems, or reproductive health non-directive counseling as applicable.",
    },
    {
      title: "Guided Review + Teach-Back on Specialty Compliance",
      description:
        "Walk through your specialty clinical service's compliance requirements with the relevant department lead or clinical director. Explain the specific safety protocols, personnel qualifications, and quality monitoring expectations in your own words.",
    },
    {
      title: "Specialty Service Compliance Verification",
      description:
        "Review your specialty service's written protocols, staff credential files, and quality monitoring data with your supervisor. Identify what an AAAHC surveyor would evaluate in your specialty area and confirm that documentation supports full compliance.",
    },
  ],

  "ASC: Safety": [
    {
      title: "Safety Program Review + Retest",
      description:
        "Review the Safety study cards. Focus on the five required elements of the written safety program, the formal definitions of 'incident' and 'adverse event,' the product recall policy requirements, expiration date monitoring, and the bloodborne pathogen program including hepatitis B vaccination documentation.",
    },
    {
      title: "Guided Review + Teach-Back on Risk and Safety Management",
      description:
        "Walk through your ASC's safety and risk management programs with your safety officer or administrator. Explain the incident reporting process, how adverse events are defined and reviewed, and how product recalls are handled. Ask for feedback on your understanding.",
    },
    {
      title: "Safety Program Documentation Review",
      description:
        "Review your incident log, safety drill records, product recall policy, and employee hepatitis B documentation with your supervisor. Confirm that all five safety program elements are represented in written policies and that incident and adverse event definitions are formally documented.",
    },
  ],

  "ASC: Validation": [
    {
      title: "Validation Standards Review + Retest",
      description:
        "Review the Validation study cards. Focus on the AAAHC profile accuracy requirement, California-specific adverse event and death reporting timelines (5 days, 15 days), New York Public Health Law 230-d requirements, and the consequences of material profile inaccuracies discovered during survey.",
    },
    {
      title: "Guided Review + Teach-Back on State-Specific Reporting",
      description:
        "Walk through your state's specific reporting obligations with your administrator or compliance contact. For California: explain which events trigger Medical Board reporting and within what timeframe. For New York: explain the profile accuracy requirements under PHL 230-d.",
    },
    {
      title: "Profile and Reporting Compliance Verification",
      description:
        "Review your current AAAHC profile with your administrator and confirm it accurately reflects your current services, anesthesia levels, billing structure, and physical location. Identify any recent operational changes that may need to be reflected in a profile update.",
    },
  ],

}; // end REMEDIATION_LIBRARY

// ── Level ID → Category mapping ────────────────────────────────────────────
// HOSPITAL levels map to hospital categories.
// ASC levels map to ASC categories (prefixed "ASC: ").
// The getRemediationPlan() function works for both - no separate function needed.

export const LEVEL_TO_CATEGORY: Record<string, string> = {
  // ── Hospital (Joint Commission) ───────────────────────────────────────────
  transport:          "Transport of Instruments",
  environment:        "Environment & Surfaces",
  segregation:        "Clean vs. Dirty",
  sterile_storage:    "Sterile Storage",
  instruments:        "Instrument Integrity",
  facilities:         "Facilities & Equipment",
  spd_decontam:       "SPD & Decontamination",
  or_sterile_field:   "OR & Sterile Technique",
  universal_protocol: "Surgical Safety & Consent",
  patient_care_docs:  "Patient Care & Documentation",
  eoc_safety:         "EOC & Safety Compliance",

  // ── ASC (AAAHC v44) ───────────────────────────────────────────────────────
  asc_adm: "ASC: Administration",
  asc_asg: "ASC: Anesthesia and Surgical Services",
  asc_beh: "ASC: Behavioral Health Services",
  asc_cmc: "ASC: Care Management and Coordination",
  asc_cpv: "ASC: Credentialing and Privileging",
  asc_crd: "ASC: Clinical Records and Health Information",
  asc_emg: "ASC: Emergency Management",
  asc_fac: "ASC: Facilities and Environment",
  asc_gov: "ASC: Governance",
  asc_ipc: "ASC: Infection Prevention and Control and Safety",
  asc_lrd: "ASC: Laboratory and Radiology",
  asc_med: "ASC: Medication Management",
  asc_ocs: "ASC: Other Clinical Services",
  asc_prr: "ASC: Patient Rights and Responsibilities",
  asc_qua: "ASC: Quality Management and Improvement",
  asc_saf: "ASC: Safety",
  asc_val: "ASC: Validation",
};

// ── Assignment function ────────────────────────────────────────────────────
//
// Returns null if no remediation is warranted (score ≥ 70%).
// Otherwise returns the category label, the assigned plan steps,
// and a flag indicating whether a supervisor reassessment is required.
// This function applies ONLY to final/post-test scores.

export function getRemediationPlan(
  levelId: string,
  percentage: number
): RemediationResult | null {
  if (percentage >= 70) return null;

  const category = LEVEL_TO_CATEGORY[levelId];
  if (!category) return null;

  const plans = REMEDIATION_LIBRARY[category];
  if (!plans) return null;

  // 60–69%: 1 step - targeted review only
  if (percentage >= 60) {
    return {
      category,
      steps: [plans[0]],
      reassessmentRequired: false,
    };
  }

  // 50–59%: 2 steps - review + reinforcement activity
  if (percentage >= 50) {
    return {
      category,
      steps: [plans[0], plans[1]],
      reassessmentRequired: false,
    };
  }

  // < 50%: 2 steps + reassessment required before completion
  return {
    category,
    steps: [plans[0], plans[1]],
    reassessmentRequired: true,
  };
}
