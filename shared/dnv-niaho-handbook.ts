import type { HandbookChapter } from "./schema";

export const dnvHandbook: HandbookChapter[] = [
  {
    levelId: "dnv_qm",
    title: "Quality Management System (QM)",
    overview: "DNV NIAHO is unique among hospital accreditation bodies in explicitly requiring an ISO 9001-based Quality Management System. This is not a bolt-on compliance exercise - it is the organizational backbone of how the hospital plans, monitors, improves, and accounts for quality. The governing body holds ultimate accountability; the CEO is responsible for implementation; and a designated Management Representative coordinates QMS activities and reports upward. Hospitals must have a written Quality Outline/Plan, conduct internal audits, perform management reviews at planned intervals, execute corrective and preventive action with verified effectiveness, and operate a Patient Safety System that captures both adverse events and near misses in a non-punitive environment.",
    sections: [
      {
        heading: "ISO 9001 as the Foundation",
        content: "Unlike Joint Commission's standards-based approach or AAAHC's policy-driven framework, DNV NIAHO explicitly grounds its QMS in ISO 9001 - an internationally recognized quality management framework used across industries. ISO 9001 brings seven quality management principles: customer focus (in healthcare, patient focus), leadership, engagement of people, process approach, improvement, evidence-based decision making, and relationship management. For hospitals, 'customer focus' translates directly to patient-centered care. The process approach means managing care delivery as interconnected processes rather than isolated departmental functions. Evidence-based decision making requires data - not assumption - to drive quality improvement.",
        criticalValues: [
          { label: "ISO 9001 core principle in healthcare", value: "Customer focus = patient focus" },
          { label: "Process approach", value: "Manage care as interconnected processes" },
          { label: "Required output", value: "Evidence-based decisions from collected data" },
        ],
        thinkAboutIt: "Your hospital has been collecting quality data for years but decisions are still made based on 'that's how we've always done it.' How does the ISO 9001 evidence-based decision making principle change this, and what would compliance actually look like?",
      },
      {
        heading: "Governance Accountability Structure",
        content: "QM.1 establishes a clear three-tier accountability structure. The Governing Body holds overall accountability for the QMS - it cannot delegate this ultimate responsibility. The CEO is responsible for implementing the QMS throughout the organization - not just supporting it but actively driving implementation. The Management Representative (QM.4) is formally designated to coordinate QMS activities, serve as the operational liaison between departments and leadership, and report on QMS performance. All three tiers must be actively engaged - a passive governing body, an uninvolved CEO, or an unsupported Management Representative creates accountability gaps that surveyors specifically probe.",
        criticalValues: [
          { label: "Governing Body", value: "Ultimate accountability - cannot delegate" },
          { label: "CEO", value: "Implementation responsibility across the organization" },
          { label: "Management Representative", value: "Coordination and upward reporting" },
        ],
      },
      {
        heading: "Corrective and Preventive Action (QM.5)",
        content: "Corrective action (CA) addresses the root cause of an existing nonconformance - something that went wrong and must be fixed at its source to prevent recurrence. Preventive action (PA) addresses the potential cause of a nonconformance before it occurs - proactive identification and elimination of risk. Both require: (1) identification of the problem or potential problem, (2) root cause analysis, (3) development and implementation of action, (4) follow-up verification that the action was effective. A corrective action closed without effectiveness verification is incomplete. This is a common survey finding.",
        criticalValues: [
          { label: "Corrective Action", value: "Fix root cause of existing problem; verify effectiveness" },
          { label: "Preventive Action", value: "Eliminate cause of potential problem before it occurs" },
          { label: "Both require", value: "Root cause analysis + action + effectiveness verification" },
        ],
        thinkAboutIt: "A corrective action was implemented six months ago for a medication error process. The team closed it as 'complete' after implementing the new process but never checked whether the error rate actually changed. What is missing, and what should happen?",
      },
      {
        heading: "Patient Safety System (QM.8)",
        content: "The Patient Safety System must capture adverse events - things that caused patient harm - AND near misses - things that could have caused harm but didn't. Near-miss reporting is often more valuable than adverse event reporting because it reveals systemic vulnerabilities before harm occurs. The system requires a non-punitive culture: staff must be able to report without fear of punishment. Leadership is responsible for modeling and fostering this culture visibly. A 'Just Culture' approach distinguishes between human error (no blame), at-risk behavior (coaching), and reckless behavior (disciplinary action). Analysis of safety events must drive system improvement, not just document individual incidents.",
        criticalValues: [
          { label: "Must capture", value: "Adverse events AND near misses" },
          { label: "Culture requirement", value: "Non-punitive - staff must feel safe reporting" },
          { label: "Leadership role", value: "Visibly model safety culture; support reporting" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_gov",
    title: "Governance & Leadership (GB + CE)",
    overview: "The governing body is the legal entity responsible for the hospital - this is not a formality. Under NIAHO GB.2, the governing body exercises active oversight of patient care quality, credentialing decisions, bylaws, institutional planning, and contracted services. The CEO is charged with day-to-day implementation of governing body policies. Both roles require active engagement: a passive board or a CEO who treats the governing body as a nuisance represents a governance failure. Contracted services receive particular attention - the hospital cannot outsource legal accountability to a vendor.",
    sections: [
      {
        heading: "Legal Responsibility of the Governing Body",
        content: "GB.2 places legal responsibility for hospital operations with the governing body - not CMS, not the state, not the medical staff. This means the board must actively oversee quality, approve policies and bylaws, review credentialing recommendations, and hold leadership accountable for organizational performance. 'Active oversight' means the governing body engages substantively - it reviews data, asks questions, challenges assumptions, and makes independent decisions. A board that consistently approves all executive recommendations without independent review is not exercising genuine oversight and is non-compliant with GB.2.",
        criticalValues: [
          { label: "Legal responsibility holder", value: "The Governing Body" },
          { label: "Active oversight requires", value: "Independent review, substantive engagement, accountability" },
          { label: "Non-compliant pattern", value: "Rubber-stamping all executive recommendations" },
        ],
      },
      {
        heading: "Contracted Services: Accountability Stays with the Hospital",
        content: "GB.4 is one of the most practically significant standards in the governance chapter. Many hospitals contract out dietary, laboratory, pharmacy, radiology, respiratory therapy, hospitalist, and other services. Under GB.4, doing so does not transfer accountability. The hospital must: (1) have written agreements defining scope of service, quality expectations, and reporting requirements; (2) monitor contractor performance against those expectations; and (3) report contractor quality performance to the governing body. If a contracted lab has persistent quality issues and the governing body is never informed, that is a GB.4 compliance failure.",
        criticalValues: [
          { label: "Requirement", value: "Written agreement for each contracted clinical service" },
          { label: "Must include", value: "Scope, performance expectations, reporting requirements" },
          { label: "Accountability", value: "Hospital retains it - contracting does not transfer it" },
        ],
        thinkAboutIt: "A contracted housekeeping service is responsible for cleaning patient rooms. Three infection-related events in one month may be linked to cleaning frequency. Under GB.4, what is the hospital's obligation, and who needs to know?",
      },
      {
        heading: "CEO Role and Qualifications",
        content: "CE.1 requires CEO qualifications - education and experience - appropriate to the hospital's size and complexity. A 25-bed critical access hospital and a 600-bed academic medical center have very different complexity profiles; their CEO qualification requirements differ accordingly. CE.2 defines the CEO's function: implementing governing body policies, managing day-to-day operations, and ensuring organizational resources support the hospital's mission. The CEO is the executive bridge between the governing body's strategic direction and the organization's operational reality.",
        criticalValues: [
          { label: "CE.1", value: "Qualifications must match hospital's size and complexity" },
          { label: "CE.2", value: "Implement governing body policies; manage daily operations" },
          { label: "Key distinction", value: "CEO manages; governing body governs - neither should do the other's job" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_ms",
    title: "Medical Staff (MS.1–MS.15)",
    overview: "The Medical Staff chapter governs how physicians, advanced practice providers, and other credentialed practitioners are organized, credentialed, privileged, monitored, and held accountable. DNV NIAHO follows Focused Professional Practice Evaluation (FPPE) for new privileges and Ongoing Professional Practice Evaluation (OPPE) for existing practitioners - both of which must be data-driven, not relationship-based. Corrective action processes must provide due process. Telemedicine practitioners have specific credentialing options including credentialing by proxy from an accredited distant site. History and physical requirements have precise timing rules.",
    sections: [
      {
        heading: "FPPE and OPPE: Performance Evaluation Framework",
        content: "FPPE (Focused Professional Practice Evaluation) is required for all newly granted clinical privileges. It is a structured, time-limited evaluation to confirm competence - typically proctoring, chart review, or simulation depending on the procedure type. Once FPPE is successfully completed, the practitioner transitions to OPPE (Ongoing Professional Practice Evaluation) - continuous data-based monitoring through case volumes, outcomes, peer review findings, complications, and patient feedback. OPPE data must be collected and reviewed on an ongoing basis, not just compiled at reappointment. Concerning OPPE trends should trigger early intervention, not be ignored until the reappointment cycle.",
        criticalValues: [
          { label: "FPPE", value: "All new privileges; time-limited; confirms competence before independent practice" },
          { label: "OPPE", value: "Ongoing for all practitioners; data-driven; informs reappointment" },
          { label: "Key rule", value: "OPPE must be continuous - not just compiled at reappointment" },
        ],
        thinkAboutIt: "A surgeon's OPPE data shows their complication rate is trending upward over six months compared to peers. The reappointment cycle is in eight months. What should happen now, and why?",
      },
      {
        heading: "H&P Timing: The 30/24 Hour Rules",
        content: "MS.13 establishes two key timing rules for History and Physical examinations. Rule 1 (30-day rule): An H&P may be completed up to 30 days before an inpatient admission or surgical procedure. Rule 2 (24-hour update rule): If the H&P was completed more than 24 hours before admission, an update must be documented within 24 hours of admission addressing any interim changes in the patient's condition. Critical point: If the patient's condition has changed since the H&P, the update must reflect those changes before any procedure is performed. And if the H&P is more than 30 days old, a new H&P is required - not just an update.",
        criticalValues: [
          { label: "Maximum look-back", value: "30 days before admission" },
          { label: "Update required", value: "Within 24 hours of admission if H&P was done >24 hours ago" },
          { label: "New H&P required", value: "When H&P is >30 days old OR condition has significantly changed" },
        ],
      },
      {
        heading: "Telemedicine Credentialing Options",
        content: "MS.15 provides two pathways for credentialing telemedicine practitioners at the originating site (where the patient is). Pathway 1 (Full credentialing): The originating hospital independently credentials the telemedicine practitioner the same way it credentials on-site practitioners. Pathway 2 (Credentialing by proxy): The originating hospital may rely on the credentialing performed by the distant-site hospital if (a) the distant-site hospital is accredited by DNV, TJC, or another recognized accrediting body AND (b) a written agreement exists between the hospitals defining the arrangement. Credentialing by proxy significantly reduces duplication - a radiologist credentialed at an accredited hospital can provide teleradiology to multiple hospitals without each independently credentialing them.",
        criticalValues: [
          { label: "Pathway 1", value: "Full independent credentialing at originating site" },
          { label: "Pathway 2", value: "Credentialing by proxy - distant site must be accredited; written agreement required" },
          { label: "Key condition", value: "Written agreement between hospitals is mandatory for proxy credentialing" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_ns",
    title: "Nursing & Staffing Management (NS + SM)",
    overview: "Nursing services must be organized, adequately staffed around the clock, and led by a qualified Nurse Executive with genuine organizational authority. Every patient requires an individualized care plan based on thorough assessment - and that assessment must be ongoing, not a one-time admission event. Staffing must be determined based on patient acuity and needs - not just fixed schedules or budget constraints. All staff must be licensed, oriented, competency-assessed, and operating within their professional scope. Job descriptions must exist for every position.",
    sections: [
      {
        heading: "Individualized Care Planning (NS.3)",
        content: "NS.3 requires an individualized plan of care for every patient. 'Individualized' means the plan is specific to this patient's unique needs, conditions, preferences, cultural background, and goals - not a generic template applied by diagnosis. A care plan for 'pneumonia, 65M' cannot be identical to the care plan for 'pneumonia, 30F, immunocompromised, lives alone' even if the diagnosis is the same. Goals must be specific, measurable, and meaningful to the patient. The interdisciplinary team - nurses, physicians, therapists, social work - contributes to the plan based on their assessments. The plan must be updated when the patient's condition changes.",
        criticalValues: [
          { label: "Individualized means", value: "Specific to this patient - not a generic diagnosis template" },
          { label: "Goals must be", value: "Specific, measurable, and meaningful - not vague ('will improve')" },
          { label: "Update trigger", value: "Any significant change in patient condition" },
        ],
        thinkAboutIt: "A nursing unit uses a standardized care plan template for all patients with hip fracture. Every patient gets the same goals and interventions. Under NS.3, what is wrong with this approach even if the template is clinically sound?",
      },
      {
        heading: "Staffing Based on Patient Needs (SM.4)",
        content: "SM.4 requires staffing to be determined AND modified based on patient acuity, census, and care needs. This distinguishes NIAHO from approaches that rely solely on fixed nurse-to-patient ratios. While state law may establish minimum ratios as a floor, NIAHO requires that staffing flex upward when patient acuity or census increases. A unit running at the state minimum when acuity is high is not compliant if that minimum is insufficient for safe care. Charge nurses and nursing leaders must actively assess staffing needs throughout each shift and have authority to request adjustments.",
        criticalValues: [
          { label: "Staffing basis", value: "Patient acuity AND census AND care needs" },
          { label: "Must be modified", value: "When patient conditions or census change" },
          { label: "State minimums", value: "A floor, not a ceiling - NIAHO may require more" },
        ],
      },
      {
        heading: "Orientation vs. Competency Assessment",
        content: "These are two distinct requirements that are sometimes conflated. SM.6 (Orientation and Continuing Education): Introduces the staff member to the organization, their specific unit, role expectations, equipment, policies, safety practices, and reporting structures. It is the foundation for safe practice in this environment. SM.7 (Competency Assessment and Performance Appraisal): Verifies that the staff member can actually perform the required tasks to an acceptable standard. A new ICU nurse may complete orientation and still not be competent to manage a complex ECMO patient - competency assessment distinguishes between knowing what to do and being able to do it. Both must be documented.",
        criticalValues: [
          { label: "Orientation (SM.6)", value: "Introduces environment, role, equipment, policies" },
          { label: "Competency (SM.7)", value: "Verifies ability to perform tasks to standard" },
          { label: "Both", value: "Required for all staff, including travel and agency staff" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_mm",
    title: "Medication Management (MM.1–MM.9)",
    overview: "NIAHO's Medication Management standards cover the full medication use cycle: formulary management, ordering, dispensing, administration, monitoring, and controlled substance handling. A Pharmacy and Therapeutics committee (or equivalent oversight group) must oversee the formulary and drug use. After-hours pharmacy access must be continuously available. The antimicrobial stewardship program must actually influence prescribing - not just generate reports. High-alert medications require enhanced safeguards throughout the use cycle.",
    sections: [
      {
        heading: "Complete Medication Orders (MM.4)",
        content: "A complete medication order must include: patient identification, medication name (generic preferred to avoid LASA confusion), dose, route of administration, frequency/timing, and prescriber signature. The route and frequency are required - not optional. 'Tylenol 500mg' without route or frequency is an incomplete order. Verbal and telephone orders must be confirmed by read-back and documented immediately, with the prescriber authenticating within the hospital's defined timeframe. Standing orders and pre-printed order sets must also meet completeness requirements - blanks left unfilled in a pre-printed set are a compliance finding.",
        criticalValues: [
          { label: "Required elements", value: "Patient ID + drug name + dose + route + frequency + prescriber signature" },
          { label: "Verbal orders", value: "Read-back required; authenticate within hospital-defined timeframe" },
          { label: "Standing orders", value: "Must also be complete - no unfilled blanks" },
        ],
      },
      {
        heading: "After-Hours Pharmacy Access (MM.5)",
        content: "24-hour pharmacy access is not optional - MM.5 requires it. 'Access' means a licensed pharmacist is available to review orders, answer clinical questions, and authorize dispensing. Common mechanisms include: on-site overnight pharmacist, on-call pharmacist with a defined response time, or automated dispensing cabinets with remote pharmacist review. The last option requires that a pharmacist actually reviewed and authorized the medications stored in the cabinet - it is not a license for nurses to access any medication in the ADC without pharmacist oversight. The defined mechanism must be documented in pharmacy policy.",
        criticalValues: [
          { label: "Requirement", value: "Pharmacist accessible 24 hours a day" },
          { label: "ADC requirement", value: "Pharmacist must have authorized medications in cabinet; must be reachable" },
          { label: "Document it", value: "After-hours mechanism must be defined in pharmacy policy" },
        ],
      },
      {
        heading: "Antimicrobial Stewardship Program (MM.8)",
        content: "MM.8 requires a functioning antimicrobial stewardship program - not just a document that says one exists. Core elements: leadership support (resources, authority), defined program leadership (physician champion and/or pharmacist), tracking of antibiotic prescribing patterns, intervention capability (ability to recommend changes), and outcomes measurement. The program should demonstrate impact: reduced unnecessary prescribing, appropriate de-escalation, improved outcomes. A program that generates monthly reports but has never changed a single prescribing pattern is not functioning as intended. MM.8 connects closely to IC.2 - stewardship data should inform infection prevention strategy.",
        criticalValues: [
          { label: "Must demonstrate", value: "Actual influence on antibiotic prescribing - not just data collection" },
          { label: "Core elements", value: "Leadership support, defined leadership, tracking, intervention capability, outcomes" },
          { label: "Connection", value: "Stewardship (MM.8) links to antibiotic stewardship in IPC (IC.2)" },
        ],
        thinkAboutIt: "A hospital's stewardship committee meets monthly, reviews prescribing data, and writes a report - but physicians routinely disregard stewardship recommendations and there is no mechanism to escalate concerns. Is this a functioning stewardship program under MM.8? Why or why not?",
      },
    ],
  },
  {
    levelId: "dnv_ss",
    title: "Surgical & Anesthesia Services (SS + AS)",
    overview: "Surgical services under NIAHO require organized, privilege-based, documented care from pre-operative assessment through post-operative recovery. Informed consent must be obtained before sedation, by the operating surgeon, with full discussion of risks, alternatives, and the right to refuse. The operative report must be written or dictated immediately. Anesthesia requires a physician director, pre-case evaluation, intraoperative monitoring per defined standards, and a post-anesthesia assessment before PACU discharge. Instrument reprocessing must follow manufacturer instructions - the foundation of SSI prevention.",
    sections: [
      {
        heading: "Surgical Informed Consent (SS.9)",
        content: "Informed consent is a process - not a signature on a form. The consent discussion must occur while the patient is competent (before sedation). The surgeon performing the procedure must personally conduct the discussion - this cannot be fully delegated to a resident, PA, or nurse. Required elements: (1) what procedure will be performed, (2) why it is recommended, (3) material risks (those that a reasonable patient would consider significant in making their decision), (4) available alternatives including doing nothing, and (5) the patient's right to refuse. The signed consent form documents that this discussion occurred - it is evidence of the process, not a substitute for it.",
        criticalValues: [
          { label: "Timing", value: "Before sedation - patient must be competent" },
          { label: "Who obtains it", value: "The surgeon performing the procedure" },
          { label: "Required elements", value: "Procedure, rationale, material risks, alternatives, right to refuse" },
        ],
        thinkAboutIt: "A patient signs the consent form in pre-op holding after receiving 2mg IV midazolam. The surgeon stopped by briefly but the surgical PA reviewed the risks and obtained the signature. How many compliance issues do you see in this scenario?",
      },
      {
        heading: "Operative Report Requirements (SS.8)",
        content: "The operative report must be dictated or written immediately after the surgical procedure is completed. 'Immediately' means before the patient leaves the operating suite or immediately upon arrival in the PACU. If dictation will be delayed - perhaps due to another urgent case - a brief operative note must be placed in the chart before the patient is transferred. This brief note must include at minimum: the pre- and post-operative diagnosis, the procedure performed, the name of the operating surgeon, and any immediate complications. The complete operative report must subsequently be dictated and include all required elements.",
        criticalValues: [
          { label: "Timing", value: "Immediately after surgery - before patient leaves OR" },
          { label: "If delayed", value: "Brief operative note in chart before transfer; complete report to follow" },
          { label: "Complete report must include", value: "Diagnoses, procedure, findings, specimens, surgeon name, complications" },
        ],
      },
      {
        heading: "PACU Discharge Criteria (SS.7)",
        content: "Patients in the PACU must be discharged when defined criteria are met - not based on time elapsed, surgeon convenience, or bed availability. The criteria must be established in hospital policy and typically include: adequate respiratory function and oxygenation, stable cardiovascular status, adequate level of consciousness, pain within acceptable parameters, and absence of significant bleeding or other complications. PACU nurses must formally assess and document that each criterion has been met before the patient is transferred. A PACU nurse who transfers a patient because 'it's been an hour' without documenting criteria is non-compliant with SS.7.",
        criticalValues: [
          { label: "Discharge based on", value: "Defined criteria being met - not time elapsed" },
          { label: "Assessed by", value: "PACU nursing staff - formally and documented" },
          { label: "Common criteria", value: "Respiratory, cardiovascular, consciousness, pain, bleeding" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_pc",
    title: "Patient Care Services (OB, LS, RC, MI, NM, RS)",
    overview: "NIAHO governs multiple specialized ancillary services with specific requirements for each. Obstetrics must have emergency protocols for hemorrhage and eclampsia. The laboratory must implement blood safety programs and notify patients of potentially infectious transfusions. Respiratory therapy requires physician orders for every treatment. Medical imaging requires a radiation protection program. Nuclear medicine requires NRC-compliant radioactive material handling. Rehabilitation services must have physician-ordered treatment plans.",
    sections: [
      {
        heading: "Laboratory Blood Safety and Lookback (LS.2–LS.4)",
        content: "When a blood product donor is subsequently found to have a transfusion-transmissible infection (HIV, hepatitis, etc.), the hospital must conduct a lookback process. LS.2 covers 'potentially infectious' products: if the product has not yet been transfused, it must be quarantined immediately. LS.3 covers the notification obligation: if the product has already been transfused, the hospital must notify the recipient promptly and arrange appropriate follow-up testing and care. LS.4 (General Blood Safety) requires a comprehensive transfusion safety program including compatibility testing, transfusion reaction reporting and investigation, and documentation of all transfusions.",
        criticalValues: [
          { label: "Not transfused yet", value: "Quarantine the product immediately" },
          { label: "Already transfused", value: "Notify the patient; arrange follow-up testing and care" },
          { label: "LS.4 requirement", value: "Comprehensive program: compatibility + reaction reporting + documentation" },
        ],
      },
      {
        heading: "Radiation Protection Program (MI.2)",
        content: "Every hospital that operates ionizing radiation imaging equipment (X-ray, CT, fluoroscopy, nuclear medicine) must have a radiation protection program. The program must: (1) minimize unnecessary radiation exposure to patients, staff, and visitors; (2) include radiation dosimetry monitoring for staff (dose badges); (3) require appropriate shielding in imaging areas; (4) include protocols for minimizing patient dose particularly for vulnerable populations (pregnant patients, children, patients requiring frequent imaging); and (5) ensure equipment is regularly inspected and maintained. The program should be led or supported by a qualified medical physicist.",
        criticalValues: [
          { label: "ALARA principle", value: "As Low As Reasonably Achievable - minimize all unnecessary exposure" },
          { label: "Staff requirement", value: "Dosimetry monitoring (dose badges) for all radiation workers" },
          { label: "Vulnerable populations", value: "Special protocols for pregnant patients and pediatric patients" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_es",
    title: "Emergency, Outpatient & Dietary Services (ES + OS + DS)",
    overview: "Emergency services must be available around the clock with appropriate staffing and protocols. Critically, when the hospital cannot provide a specific emergency service, it must have written transfer protocols - ES.4 closes the gap between 'we don't do that' and 'here is what we will do when a patient needs that.' Outpatient services carry the same quality standards as inpatient. Dietary services require a qualified dietitian, individualized therapeutic diets, and a current, accessible diet manual.",
    sections: [
      {
        heading: "Emergency Services Not Provided (ES.4)",
        content: "ES.4 is a frequently cited standard. No hospital can provide every possible emergency service - neurosurgery, burn care, hyperbaric medicine, cardiac catheterization, etc. For every emergency service the hospital cannot provide, there must be a written transfer protocol that defines: (1) how patients needing that service will be identified and stabilized, (2) the receiving facility (or facilities) with which a transfer agreement exists, (3) the process for arranging transfer, and (4) what information must accompany the patient. The standard ensures that a gap in services never becomes a gap in the patient's safety.",
        criticalValues: [
          { label: "Required for", value: "Every emergency service the hospital cannot provide" },
          { label: "Protocol must define", value: "Identification, stabilization, receiving facility, transfer process, documentation" },
          { label: "Common gaps", value: "Neurosurgery, pediatric surgery, cardiac cath, burn care, hyperbaric" },
        ],
        thinkAboutIt: "A community hospital begins seeing more stroke patients due to a new highway exchange nearby. They do not have tPA administration protocols or interventional stroke care. Under ES.4, what must they have in place - and ES.3?",
      },
      {
        heading: "The Diet Manual (DS.3)",
        content: "DS.3 requires the hospital to maintain a current diet manual that serves as the clinical reference for all therapeutic diets. The manual must be approved by both the dietary service and the medical staff - ensuring it is clinically sound and operationally correct. Critically, the manual must be accessible to all staff who order or implement therapeutic diets - not locked in the dietary department. If a nurse or physician cannot quickly reference how to order a 2g sodium diet or a renal diet, the manual is failing its purpose. The manual must be kept current with evolving nutritional science and medical guidelines.",
        criticalValues: [
          { label: "Approved by", value: "Dietary service AND medical staff - both required" },
          { label: "Accessible to", value: "All staff who order or implement therapeutic diets" },
          { label: "Must be", value: "Current - updated as clinical guidelines change" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_pr",
    title: "Patient Rights (PR.1–PR.10)",
    overview: "NIAHO's Patient Rights chapter is among the most surveyed sections of the standard. Restraint and seclusion requirements are particularly detailed - with specific time limits, monitoring requirements, training mandates, and reporting obligations for restraint-associated deaths. The grievance process must be formal and functional. Language access must be professional and free. Informed consent is a process, not just a signature. Patients at risk of self-harm must receive care in a safe environment.",
    sections: [
      {
        heading: "Restraint and Seclusion: Core Rules (PR.7)",
        content: "Restraints and seclusion may only be used when clinically justified for patient safety - never for punishment, staff convenience, or discipline. Every use requires an individual physician order (no standing orders). Orders for restraints used to manage violent or self-destructive behavior are time-limited: 4 hours for adults, 2 hours for adolescents (9-17), 1 hour for children (under 9). These orders must be reauthorized by a licensed independent practitioner before they expire - the practitioner must reassess in person or via telehealth. Patients in restraints require continuous monitoring of physical and psychological status. Bed rails alone are generally not considered restraints under most circumstances, but restraint-like devices applied to restrict movement are.",
        criticalValues: [
          { label: "Adult restraint order limit", value: "4 hours - then requires in-person reassessment and reorder" },
          { label: "Adolescent limit", value: "2 hours" },
          { label: "Child limit", value: "1 hour" },
          { label: "Monitoring", value: "Continuous - not periodic checks" },
        ],
        thinkAboutIt: "A confused elderly patient on night shift keeps trying to get out of bed. The charge nurse applies wrist restraints per a standing physician order from three days ago. How many compliance violations are present in this scenario?",
      },
      {
        heading: "Restraint-Associated Death Reporting (PR.9)",
        content: "PR.9 establishes one of the most specific and time-sensitive reporting requirements in all of NIAHO. When a patient dies while in restraints, within 24 hours of being restrained, or within one week if the restraint may have contributed to the death, the hospital must report to CMS within one business day. This is a hard federal deadline - not 'as soon as possible' or 'at the next reporting cycle.' The hospital must have a process for ensuring this reporting occurs reliably even on weekends or holidays, since 'one business day' means the next business day if the death occurs on a weekend.",
        criticalValues: [
          { label: "Reporting deadline", value: "1 business day to CMS - non-negotiable" },
          { label: "Trigger definition", value: "Death while restrained; within 24 hours after removal; within 1 week if restraints contributed" },
          { label: "Weekend deaths", value: "Must have a reliable process - 'next business day' means the next day the CMS office is open" },
        ],
      },
      {
        heading: "Grievance Process (PR.6)",
        content: "A 'grievance' is any formal or informal written or verbal complaint made by a patient or their representative about their care, treatment, or the hospital itself. The hospital must: (1) inform patients of the grievance process at admission, (2) acknowledge receipt of each grievance, (3) investigate promptly and thoroughly, (4) respond in writing with the name of the hospital contact person, what steps were taken, and the outcome. The written response requirement is firm - a verbal explanation does not satisfy PR.6. Surveyors will ask patients about the grievance process and whether they were informed of it.",
        criticalValues: [
          { label: "What triggers it", value: "Any formal or informal written or verbal complaint" },
          { label: "Written response must include", value: "Contact name, steps taken, outcome" },
          { label: "Patient must be informed", value: "Of the process at admission - not just if they complain" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_ic",
    title: "Infection Control & Medical Records (IC + MR + DC + UR)",
    overview: "A functioning infection prevention and control program with leadership accountability is required - not just a binder of policies. Medical records must be complete, timely, confidential, and contain all required elements. Discharge planning must begin early for all patients - not just long-stayers - and must be individualized. Utilization review must include formal processes for admission, continued stay, and professional services review.",
    sections: [
      {
        heading: "Infection Prevention and Control Program (IC.1–IC.3)",
        content: "IC.1 requires a comprehensive, active IPC program - not just a collection of policies. Core components: (1) Designated infection preventionist with appropriate training, (2) Active surveillance to detect and measure infections (HAIs, SSIs, CLABSI, CAUTI, VAP, C. diff, etc.), (3) Investigation of clusters and outbreaks, (4) Evidence-based prevention strategies, (5) Reporting to appropriate internal and external bodies, and (6) Leadership accountability (IC.3 - leadership must support and resource the program). The program must be integrated with antibiotic stewardship (IC.2). Multi-hospital systems must have a unified and integrated program across facilities (IC.4).",
        criticalValues: [
          { label: "Active surveillance", value: "Ongoing detection and measurement of infection rates by type" },
          { label: "Evidence-based strategies", value: "Bundles, checklists, and practices validated to prevent specific HAIs" },
          { label: "Leadership requirement", value: "Authority and resources must come from leadership (IC.3)" },
        ],
      },
      {
        heading: "Complete Medical Record Requirements (MR.1–MR.6)",
        content: "A complete medical record under MR.2 must include: patient identification data, admitting diagnosis, medical history and physical examination, physician orders, nursing and therapy documentation, medication administration records, informed consent documents, operative reports (when applicable), progress notes, laboratory and imaging results, consultation reports, and a discharge summary. All entries must be dated, timed (MR.5), and authenticated by the author. The discharge summary (MR.6) must be present for every admission - there is no exception for short stays. Records must be retained per applicable state and federal law (MR.3) and kept confidential (MR.4).",
        criticalValues: [
          { label: "Every entry", value: "Must be dated, timed, and authenticated" },
          { label: "Discharge summary", value: "Required for ALL admissions - no short-stay exception" },
          { label: "Retention", value: "Per applicable state law - typically minimum 5-10 years" },
        ],
      },
      {
        heading: "Discharge Planning (DC.1–DC.6)",
        content: "Discharge planning must begin at or near the time of admission - not when the physician mentions discharge. DC.3 requires that a discharge planning evaluation be performed for every patient to identify post-discharge needs: clinical, functional, social, and environmental. The plan must be individualized and revised as the patient's situation changes. For patients being transferred or going to post-acute care, the hospital must use written transfer protocols (DC.2) and communicate essential clinical information to the receiving provider. Patients and families must be involved in discharge planning and educated about the plan (DC.4).",
        criticalValues: [
          { label: "When to start", value: "At or near admission - for every patient" },
          { label: "Individualized", value: "Based on clinical, functional, social, and environmental needs" },
          { label: "Transfer requirements", value: "Written protocols + clinical information communicated to receiving provider" },
        ],
      },
    ],
  },
  {
    levelId: "dnv_pe",
    title: "Physical Environment & Emergency Preparedness (PE + TO)",
    overview: "NIAHO's Physical Environment chapter encompasses the full environment of care - from Life Safety Code compliance and safety management through the detailed emergency preparedness requirements and the specific rules for the Alternate Equipment Management (AEM) program. Emergency preparedness has extensive documentation, training, and testing requirements. The AEM program allows modified maintenance schedules for medical equipment but requires documented risk assessment, particularly for critical equipment where failure could cause patient harm. Organ procurement requires OPO agreements and defined referral processes.",
    sections: [
      {
        heading: "Alternate Equipment Management (AEM) Program (PE.7)",
        content: "PE.7 allows hospitals to maintain medical equipment on schedules that differ from manufacturer recommendations - but only through a formal, documented AEM program. Requirements: (1) Based on nationally recognized standards (ANSI/AAMI EQ56 or equivalent), (2) Documented risk assessment for each device in the program, (3) Special focus on 'critical equipment' - devices where failure could cause serious injury or death, (4) Managed by qualified personnel (biomedical engineers or equivalent), (5) Documentation of the hospital's rationale for each AEM decision. Certain equipment CANNOT be in an AEM program: imaging/radiologic equipment (governed by 42 CFR 482.26(b)(2) and must follow manufacturer recommendations) and equipment subject to NFPA Life Safety Code specific maintenance provisions.",
        criticalValues: [
          { label: "AEM allowed for", value: "Most medical equipment with documented risk assessment" },
          { label: "NOT eligible for AEM", value: "Imaging/radiologic equipment; LSC-governed equipment" },
          { label: "Critical equipment", value: "Highest scrutiny - devices where failure = serious harm" },
          { label: "Must be managed by", value: "Qualified personnel (biomedical engineer or technician)" },
        ],
        thinkAboutIt: "Your hospital wants to extend the PM interval for infusion pumps from 6 months (manufacturer recommendation) to 12 months to reduce biomedical costs. What documentation is required, and what risk analysis must be performed before this change can be implemented?",
      },
      {
        heading: "Emergency Preparedness Program (PE.6)",
        content: "The emergency preparedness program must be comprehensive, risk-based, and actively maintained. Required components: (1) Emergency plan based on a Hazard Vulnerability Analysis (HVA) - identifying and prioritizing hazards by likelihood and impact, (2) Policies and procedures for each identified hazard, (3) Communication plan with backup methods for when primary systems fail, (4) Training program for all relevant staff, (5) Testing program with at least two exercises per year - at least one must be a community-based exercise involving external agencies, (6) After-action review following exercises and actual emergencies with documented improvements. For multi-hospital systems, transplant programs must be specifically integrated into the emergency preparedness program.",
        criticalValues: [
          { label: "Foundation", value: "Hazard Vulnerability Analysis (HVA)" },
          { label: "Minimum exercises", value: "2 per year - at least 1 community-based" },
          { label: "After every exercise", value: "After-action review with documented improvements" },
          { label: "Communication plan", value: "Must include backup methods for primary system failures" },
        ],
      },
      {
        heading: "Organ, Tissue, and Eye Procurement (TO.1–TO.7)",
        content: "Every NIAHO hospital must have a written agreement with a designated OPO (Organ Procurement Organization) authorized by HRSA under the National Organ Transplant Act. The agreement must define each party's responsibilities. Key hospital obligations: (1) Report ALL deaths and imminent deaths (patients on ventilators meeting clinical criteria) to the OPO in a timely manner - not just patients with donor cards, (2) Coordinate with the OPO for family approach and discussion, (3) Not make the determination of donor suitability - that is exclusively the OPO's role. Patient rights must be respected (TO.4): donation is always voluntary. If the hospital performs transplantation, additional requirements apply under TO.6.",
        criticalValues: [
          { label: "Required", value: "Written OPO agreement for all NIAHO hospitals" },
          { label: "Refer to OPO", value: "All deaths and imminent deaths - regardless of donor card status" },
          { label: "Hospital role", value: "Identify and refer; OPO evaluates suitability" },
          { label: "Never", value: "Hospital pre-screens patients to decide who to refer" },
        ],
      },
    ],
  },
];
