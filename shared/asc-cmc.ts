import type { Level } from "./schema";

export const ascCmcLevel: Level = {
  id: "asc_cmc",
  module: "asc",
  name: "Clinical Medical Care",
  description: "AAAHC v44 CMC - clinical records, patient assessment, care planning, discharge planning, and coordination of care standards.",
  icon: "FileText",
  color: "hsl(160, 55%, 38%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "CMC: Clinical Medical Care",
    plainLanguageSummary:
      "The CMC category establishes standards for the clinical care process at ambulatory surgery centers - from patient assessment through discharge and follow-up. Standards address clinical record content and management, diagnostic testing, care planning, discharge instructions, and coordination of care. The clinical record must be accurate, timely, complete, and serve as the primary communication tool among all members of the care team.",
    keyOperationalExpectations: [
      "Each patient has a clinical record that contains all required elements including H&P, consents, anesthesia record, operative note, and discharge documentation.",
      "Clinical records are completed in a timely manner per organizational policy.",
      "Discharge instructions are provided in writing and appropriate to the patient's condition and procedure.",
      "Follow-up care is arranged before or at the time of discharge.",
      "Care is coordinated among all providers involved in the patient's care.",
      "Diagnostic testing is ordered, performed, and results reviewed prior to planned procedures when clinically indicated.",
    ],
    commonRiskPoints: [
      "Operative notes are dictated but not signed or finalized - an unsigned note is not a complete record.",
      "Discharge instructions are generic and not tailored to the specific procedure or patient.",
      "Follow-up appointment is not arranged before the patient leaves the facility.",
      "Abnormal pre-operative lab results are not reviewed before the procedure proceeds.",
    ],
    aaahcStandards: ["CMC.100", "CMC.110", "CMC.120", "CMC.130", "CMC.140", "CMC.190"],
  },
  studyMaterial: [
    {
      title: "CMC.100 - Clinical Record Requirements",
      content:
        "Each patient must have a clinical record that serves as the primary documentation of care provided. Required elements include: patient identification; relevant medical history; physical examination findings; diagnostic test orders and results; diagnoses; evidence of informed consent; anesthesia record (where applicable); operative or procedure note; medication orders and administration records; nursing assessments and notes; discharge instructions; and documentation of follow-up arrangements. Records must be legible, complete, accurate, and authenticated (signed) by the responsible health care professional.",
      keyPoint:
        "Authentication matters: an unsigned or unauthenticated record is not complete. Timely completion of operative notes and discharge documentation is a specific compliance requirement.",
    },
    {
      title: "CMC.110 - Diagnostic Testing and Pre-Operative Evaluation",
      content:
        "Diagnostic testing ordered in preparation for a procedure must be clinically indicated, ordered by an appropriate provider, and results must be reviewed before the procedure. Abnormal results must be addressed - either resolved, evaluated for clinical significance, or the procedure decision must reflect the known abnormality. Routine pre-operative testing without clinical indication is not required by AAAHC standards and may not be appropriate. The clinical record must document the ordering provider's review of test results relevant to the planned procedure.",
      keyPoint:
        "Testing should be clinically driven - not reflexively ordered. When results are abnormal, there must be documented evidence that the provider reviewed and addressed the finding before proceeding.",
    },
    {
      title: "CMC.120 - Care Planning and Goal Setting",
      content:
        "The plan of care must be based on the patient's individual assessment findings. Care planning in the ambulatory surgery context includes: the plan for the procedure (technique, anesthesia type), anticipated post-operative management, patient education plan, and discharge planning. In settings where ongoing care is required (e.g., wound management, medication changes post-procedure), documented care goals and instructions must be communicated to the patient and any other providers involved in follow-up care.",
      keyPoint:
        "Care planning is not just the operative plan - it includes post-operative management goals, patient education, and transition/follow-up planning. All must be documented.",
    },
    {
      title: "CMC.130 - Discharge Planning and Instructions",
      content:
        "Written discharge instructions must be provided to the patient before or at the time of discharge. Instructions must be appropriate to the patient's procedure and condition and must address: activity restrictions, diet instructions, wound care (if applicable), medications prescribed (with instructions for use), signs and symptoms requiring immediate medical attention, and follow-up appointment information. Instructions must be in a language and literacy level the patient can understand (PRR.440). Instructions must be documented in the clinical record.",
      xpReward: 15,
      keyPoint:
        "Written discharge instructions - not verbal - are required and must be documented in the clinical record. Generic instructions that don't reflect the specific procedure and patient needs fail CMC.130.",
    },
    {
      title: "CMC.140 / CMC.190 - Coordination of Care",
      content:
        "When a patient's care involves multiple health care providers (referring physician, specialist, primary care provider), coordination must be documented. This includes: communication of relevant clinical findings to the referring or primary care provider; documentation of referrals sent and received; follow-up arrangements confirmed before the patient leaves; and - when the patient requires transfer to a higher level of care - documentation of the clinical status, receiving facility, and communication with the accepting provider. Coordination of care is particularly important for patients with complex comorbidities or when post-operative complications occur.",
      keyPoint:
        "Coordination of care is a clinical record requirement, not just a professional courtesy. The record must document what information was communicated to which providers, when, and how.",
    },
  ],
  questions: [
    {
      id: "asc_cmc_01",
      question:
        "A surgeon dictates an operative note but does not sign it for six weeks. The clinical record is reviewed by a surveyor two weeks after the procedure. What is the compliance finding?",
      options: [
        "Dictated but unsigned notes are acceptable for up to 90 days",
        "An unsigned operative note is not authenticated - the clinical record is incomplete until authenticated",
        "Authentication is only required for records that will be sent to other providers",
        "The dictated text satisfies the requirement - signature is a formality",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires that clinical records are authenticated (signed) by the responsible health care professional. A dictated but unsigned operative note is not a complete, authenticated record. Timeliness of completion is a separate requirement - organizations define their own completion timelines in policy.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Authentication is a fundamental medical record requirement - it identifies who is responsible for the documented care and attests to its accuracy. An unauthenticated record cannot be relied upon as a valid legal or clinical document.",
        whyWrong: {
          A: "There is no 90-day authentication window in CMC standards - organizations define their own timelines.",
          C: "Authentication is required for all operative notes - not only those sent externally.",
          D: "Signature (or electronic authentication) transforms a dictated note into a legally valid clinical record entry.",
        },
        operationalContext:
          "Set a policy for operative note completion - typically within 24 hours of the procedure. Monitor completion rates monthly. Flag any unsigned notes older than the policy-defined window and escalate to the medical director.",
      },
    },
    {
      id: "asc_cmc_02",
      question:
        "A patient has a pre-operative potassium level of 2.8 mEq/L (low). The lab report is filed in the chart but the surgeon does not note reviewing it. The case proceeds. What CMC requirement was not met?",
      options: [
        "Lab results are the anesthesiologist's responsibility - not the surgeon's",
        "The ordering provider must review pre-operative test results - especially abnormal ones - and document their clinical decision relative to those results before proceeding",
        "Pre-operative labs are optional - proceeding without review is acceptable if the patient appears well",
        "Lab values outside the normal range require an automatic procedure cancellation",
      ],
      correctIndex: 1,
      explanation:
        "CMC.110 requires that pre-operative test results are reviewed before the procedure. An uncorrected potassium of 2.8 mEq/L is a clinically significant abnormality that could affect anesthesia management (arrhythmia risk). The provider's review and clinical decision must be documented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Pre-operative labs are ordered for clinical decision-making purposes. If a provider orders a lab but then does not review the result, the ordering was meaningless from a patient safety standpoint. Abnormal results require documented clinical response - not necessarily cancellation, but documented review and disposition.",
        whyWrong: {
          A: "Both the ordering surgeon and the anesthesiologist have a responsibility to review relevant pre-operative lab results.",
          C: "The visual appearance of a patient does not substitute for reviewing ordered diagnostic tests.",
          D: "Automatic cancellation is not required - clinical judgment and documented decision-making based on the result are what CMC.110 requires.",
        },
        operationalContext:
          "Create a pre-operative lab review checklist. Require the ordering provider to document 'results reviewed - no action required' or 'results reviewed - [specific action taken]' for each ordered pre-op test. Flag abnormal results for mandatory provider notation in the chart.",
      },
    },
    {
      id: "asc_cmc_03",
      question:
        "A patient is discharged after a laparoscopic cholecystectomy with only a handwritten list of wound care steps. No information about warning signs, diet restrictions, activity limitations, or follow-up is included. What is the compliance issue?",
      options: [
        "The instructions are adequate - wound care is the primary concern after this procedure",
        "CMC.130 requires comprehensive written discharge instructions covering all relevant aspects: activity, diet, wound care, medications, warning signs, and follow-up",
        "Verbal instructions are sufficient if they cover all topics",
        "Discharge instructions are required only for patients receiving general anesthesia",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires written discharge instructions appropriate to the patient's procedure and condition. After a cholecystectomy, instructions must address activity restrictions, diet progression, wound care, prescribed medications, signs and symptoms of complications (bile leak, infection, hernia), and the follow-up appointment - not just wound care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Incomplete discharge instructions leave patients unequipped to recognize complications - the most common cause of preventable post-operative adverse events managed in emergency departments.",
        whyWrong: {
          A: "Wound care alone is incomplete - all relevant post-operative topics must be addressed.",
          C: "Written instructions are specifically required under CMC.130 - verbal instructions are not sufficient as the sole instruction method.",
          D: "Discharge instructions are required after all procedures - not limited to general anesthesia cases.",
        },
        operationalContext:
          "Create procedure-specific discharge instruction templates covering all CMC.130 elements. Have each template reviewed by the respective specialty surgeon. Require nursing to review instructions with the patient before discharge and document that review in the clinical record.",
      },
    },
    {
      id: "asc_cmc_04",
      question:
        "Under CMC.140, when a patient is transferred from the ASC to a hospital due to a post-operative complication, what must be documented?",
      options: [
        "Only the patient's name and the receiving hospital's name",
        "The patient's clinical status at transfer, the receiving facility, and documentation of communication with the accepting provider",
        "A signed transfer agreement form from the hospital only",
        "Transfer documentation is the receiving hospital's responsibility - the ASC has no documentation obligation",
      ],
      correctIndex: 1,
      explanation:
        "CMC.140 requires documentation of coordination of care including transfers. This includes: the patient's clinical status at the time of transfer, the receiving facility, and evidence of communication with the accepting provider. A transfer summary or note must accompany the patient.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Transfer documentation ensures continuity of care at the receiving facility. The accepting provider needs the patient's clinical status, the procedure performed, complications, medications given, and the ASC's contact information for follow-up.",
        whyWrong: {
          A: "Patient name and receiving facility alone are insufficient - clinical status and provider communication must be documented.",
          C: "A signed hospital transfer agreement is a contractual/operational document, not the clinical transfer documentation required.",
          D: "The ASC bears documentation responsibility for actions it takes - including communicating with and transferring patients to a receiving facility.",
        },
        operationalContext:
          "Create a transfer summary template: patient demographics, procedure performed, complication description, clinical status at transfer, vital signs, medications given, provider who accepted transfer, time and method of communication, and transport method.",
      },
    },
    {
      id: "asc_cmc_05",
      question:
        "A patient is to be discharged after cataract surgery. No follow-up appointment has been arranged. Under CMC.130, what must happen before the patient leaves?",
      options: [
        "The patient is responsible for scheduling their own follow-up - the ASC has no obligation",
        "Follow-up appointment information must be provided in the discharge instructions before or at the time of discharge",
        "Follow-up is only required for patients who had complications during their procedure",
        "A written referral to a provider is sufficient - the appointment does not need to be arranged before discharge",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires that follow-up appointment information is included in discharge instructions provided before or at the time of discharge. Arrangements for follow-up must be made or clearly communicated - not deferred to the patient to figure out on their own.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-operative follow-up is clinically essential - it allows the surgeon to assess healing, remove sutures, adjust medications, and catch early complications. Discharging a patient without this arrangement increases the risk of complications going undetected.",
        whyWrong: {
          A: "The ASC has a CMC obligation to facilitate follow-up arrangements - it cannot delegate this entirely to the patient.",
          C: "Follow-up is required for all patients - not just those with intraoperative complications.",
          D: "A referral without a confirmed appointment may not actually result in follow-up, particularly for patients with limited health literacy or access.",
        },
        operationalContext:
          "Ensure each procedure type has a standard follow-up appointment window (e.g., cataract surgery: 1-day post-op with ophthalmologist). Pre-schedule or document appointment arrangements in the discharge instructions. Note who scheduled the appointment and the date/time confirmed.",
      },
    },
    {
      id: "asc_cmc_06",
      question:
        "A clinical record is reviewed and the nursing pre-op assessment is present but the anesthesia pre-operative evaluation is missing. What does CMC.100 require?",
      options: [
        "The nursing assessment is sufficient documentation for pre-operative evaluation",
        "Both a nursing pre-operative assessment and a separate anesthesia pre-operative evaluation are required elements of the clinical record",
        "Anesthesia evaluation is only required if the procedure uses general anesthesia",
        "The anesthesia evaluation may be replaced by a verbal discussion between the nurse and anesthesiologist",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires the clinical record to contain all required elements for the care provided. For procedures involving anesthesia or sedation, a separate anesthesia pre-operative evaluation is a required clinical record element documenting airway assessment, anesthesia plan, and pertinent history - distinct from the nursing assessment.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The nursing pre-op assessment and the anesthesia evaluation serve different clinical purposes. The anesthesia evaluation documents airway classification, anesthetic risk (ASA physical status), anesthesia plan, and discussion of risks with the patient - elements that are not captured in the nursing assessment.",
        whyWrong: {
          A: "The nursing assessment captures vital signs, medication reconciliation, and patient preparation - not the anesthesia-specific elements required.",
          C: "Anesthesia evaluation is required for all levels of anesthesia/sedation - not only general anesthesia.",
          D: "Verbal discussions between providers cannot substitute for required clinical record documentation.",
        },
        operationalContext:
          "Create a pre-anesthesia assessment template (separate from the nursing form) that captures: ASA physical status, airway classification, allergies/reactions, current medications, prior anesthesia history, anesthesia plan, and risks discussed with patient. Require CRNA or anesthesiologist signature.",
      },
    },
    {
      id: "asc_cmc_07",
      question:
        "A patient has been prescribed a new blood thinner as part of their treatment plan. At discharge, the nurse verbally explains the medication. CMC.130 requires what additional step?",
      options: [
        "Verbal explanation is sufficient - written medication instructions are optional",
        "Written discharge instructions including medication name, dose, frequency, purpose, and instructions for use must be provided",
        "The prescription alone serves as the discharge medication instruction",
        "Only controlled substances require written discharge instructions",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires written discharge instructions that include information about medications prescribed - including how and when to take them. Written instructions allow the patient to reference them at home when the verbal explanation may be forgotten or misremembered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication instructions at discharge are a safety-critical communication - especially for anticoagulants where dose errors can cause bleeding or clotting complications. Written instructions create a lasting reference for the patient and documentation of what was communicated.",
        whyWrong: {
          A: "Written instructions are specifically required - verbal-only instruction is not compliant with CMC.130.",
          C: "A prescription lists the drug, dose, and frequency but typically lacks the contextual instructions needed for patient understanding.",
          D: "CMC.130 discharge instruction requirements apply to all medications prescribed at discharge.",
        },
        operationalContext:
          "Create a discharge medication instruction template that includes: medication name (generic and brand), dose, frequency, timing (with or without food), purpose, common side effects, and signs of adverse reaction requiring immediate attention. File a copy in the clinical record.",
      },
    },
    {
      id: "asc_cmc_08",
      question:
        "Under CMC, what is the significance of the diagnosis documented in the clinical record at discharge?",
      options: [
        "It is only relevant for billing purposes",
        "The documented diagnosis must be consistent with the clinical findings and procedures performed - it drives care coordination, follow-up, and continuity of care with other providers",
        "Diagnosis documentation is optional if the procedure was elective",
        "Only the primary surgical diagnosis is required - secondary diagnoses are optional",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires that diagnoses be documented in the clinical record. The documented diagnosis must be consistent with the clinical findings and interventions. It is a critical communication element for referring and primary care providers who will manage the patient's ongoing care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The documented diagnosis in the clinical record drives follow-up care, medication management, and specialist referrals. An absent, incomplete, or inaccurate diagnosis creates care continuity gaps that can harm patients.",
        whyWrong: {
          A: "Diagnosis documentation serves clinical and coordination purposes beyond billing.",
          C: "Diagnosis documentation is required regardless of whether the procedure was elective.",
          D: "All relevant diagnoses - including comorbidities affecting care - should be documented.",
        },
        operationalContext:
          "Require providers to document both the primary procedure diagnosis and any relevant secondary diagnoses at the time of discharge. Include the diagnoses in the discharge summary sent to the referring/primary care provider.",
      },
    },
    {
      id: "asc_cmc_09",
      question:
        "CMC.140 requires that clinical records are maintained for a defined retention period. What is the primary AAAHC requirement for records retention?",
      options: [
        "Records must be maintained for two years minimum",
        "Records must be maintained in accordance with applicable state and federal law and regulations",
        "Records may be destroyed when the patient is no longer active",
        "Electronic records do not have retention requirements under AAAHC",
      ],
      correctIndex: 1,
      explanation:
        "CMC.140 requires that clinical records are maintained in accordance with applicable state and federal laws and regulations regarding retention periods. State laws vary widely - from 7 to 25 years for adult records, with longer requirements for minors. The AAAHC defers to applicable law for the specific retention period.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "AAAHC does not specify a single retention period - state law governs. Organizations must know their state's requirements and comply with the most stringent applicable period (which may be set by Medicare, state law, or other regulation).",
        whyWrong: {
          A: "Two years is far shorter than most state record retention requirements - and potentially shorter than federal Medicare requirements.",
          C: "'Active patient' status is not the retention trigger - the regulatory timeframe from last service date governs.",
          D: "Electronic records are subject to the same retention requirements as paper records.",
        },
        operationalContext:
          "Document your state's medical record retention requirements in your records management policy. Set EHR archive protocols to retain records beyond the minimum required period. For minor patients, calculate retention from the date of majority, not the date of service.",
      },
    },
    {
      id: "asc_cmc_10",
      question:
        "An ASC performs ophthalmology procedures. After cataract surgery, when must the operative note be entered or dictated into the clinical record?",
      options: [
        "Within 30 days of the procedure",
        "According to the organization's defined timeline for clinical record completion - typically immediately or within 24 hours",
        "The operative note is optional if the procedure was uncomplicated",
        "Within the same calendar year as the procedure",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires that clinical records are completed in a timely manner per the organization's defined policy. Most ASC policies and best practices require operative notes to be entered or dictated immediately following the procedure or within 24 hours - ensuring continuity of care if a complication arises in the recovery period.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The operative note documents what was done, any complications, and any specific post-operative instructions for the care team. If a complication arises in PACU, nursing and anesthesia need access to the operative note immediately - a 30-day completion window does not meet this clinical need.",
        whyWrong: {
          A: "30 days is far too long for an operative note - it must be available to the care team in the immediate post-operative period.",
          C: "Operative notes are required for all procedures - complications are not a prerequisite.",
          D: "Same calendar year is a meaningless standard for clinical continuity.",
        },
        operationalContext:
          "Require all operative notes to be dictated or entered within 24 hours of the procedure. Set a monitoring metric: track percentage of operative notes completed within 24 hours each month. Flag delinquent notes for follow-up by the medical director.",
      },
    },
    {
      id: "asc_cmc_11",
      question:
        "A patient is discharged after a colonoscopy with a prescription for iron supplementation and instructions to follow up with their gastroenterologist. The discharge summary is given only in English - the patient's primary language is Spanish. What CMC/PRR requirement is not being met?",
      options: [
        "English-only discharge instructions are acceptable if the patient signed the instructions",
        "CMC.130 and PRR.440 together require that discharge instructions be provided in a language the patient can understand",
        "Translation of discharge instructions is only required if the patient is a Medicare beneficiary",
        "The gastroenterologist will provide translated instructions at the follow-up appointment",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires written discharge instructions, and PRR.440 requires communication in a manner the patient can understand - including language access. Providing only English instructions to a Spanish-speaking patient fails both standards.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Discharge instructions are only effective if the patient can read, understand, and act on them. Language-appropriate instructions are a combined CMC and PRR obligation.",
        whyWrong: {
          A: "A patient signature on instructions they cannot read does not constitute meaningful informed discharge - and may represent coerced consent.",
          C: "Language access is required for all patients regardless of payer status.",
          D: "Delaying translated instructions to the follow-up visit creates a dangerous gap during the immediate post-procedure recovery period.",
        },
        operationalContext:
          "Identify each patient's preferred language at registration. Translate standard discharge instruction templates into the languages most common in your patient population. For less common languages, use a translation service to create individualized discharge instructions.",
      },
    },
    {
      id: "asc_cmc_12",
      question:
        "What does the AAAHC v44 guidance for CMC require regarding 'clinically indicated' diagnostic testing?",
      options: [
        "All patients must have a complete metabolic panel and CBC prior to surgery",
        "Diagnostic testing is ordered based on the patient's clinical condition, history, and the planned procedure - not reflexively for all surgical patients",
        "No pre-operative testing is required for procedures under two hours",
        "Only patients over 65 require pre-operative laboratory testing",
      ],
      correctIndex: 1,
      explanation:
        "CMC.110 and its guidance emphasize that pre-operative testing should be clinically indicated - based on the patient's history, comorbidities, and the nature of the procedure. Routine blanket pre-op testing without clinical indication is not required and may represent unnecessary testing.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Evidence-based pre-operative testing reduces unnecessary tests and patient burden while ensuring clinically relevant results are available. Age alone (without clinical indication) is not a valid basis for ordering tests, per major medical guidelines.",
        whyWrong: {
          A: "Blanket testing for all surgical patients is not required - clinical indication drives testing decisions.",
          C: "Procedure duration alone does not determine testing requirements.",
          D: "Age alone is not a valid testing indication under evidence-based medicine principles that the AAAHC guidance reflects.",
        },
        operationalContext:
          "Develop pre-operative testing guidelines aligned with major medical evidence (ACC/AHA, ASA). Guidelines should specify which tests are indicated for which patient populations and procedure types - and should explicitly state that testing is not required solely based on age.",
      },
    },
    {
      id: "asc_cmc_13",
      question:
        "An ASC performs skin procedures under local anesthesia. The clinical record contains: patient demographics, the procedure note, and the billing documentation. What critical clinical record element is most likely missing?",
      options: [
        "Patient satisfaction survey",
        "Medical history, physical examination findings, and diagnosis - which form the clinical basis for the procedure",
        "Insurance pre-authorization documentation",
        "The surgeon's educational credentials",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires clinical records to contain the medical history, physical examination findings, and diagnosis that establish the clinical basis for the procedure. Without these elements, the record does not document the clinical rationale for the care provided.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Even for minor procedures under local anesthesia, the clinical record must document: who the patient is, why the procedure was performed (diagnosis/indication), and the patient's relevant medical history. A procedure note alone does not make a complete medical record.",
        whyWrong: {
          A: "Patient satisfaction surveys are a quality improvement tool - not a required clinical record element.",
          C: "Insurance pre-authorization is a billing/access documentation - not a CMC clinical record requirement.",
          D: "Surgeon credentials belong in the credentialing file - not the patient's clinical record.",
        },
        operationalContext:
          "For minor procedure records, use a structured template that requires: chief complaint/indication, brief relevant medical history, relevant medications and allergies, physical examination findings, diagnosis, procedure performed, and plan. Even a one-page note serves this purpose.",
      },
    },
    {
      id: "asc_cmc_14",
      question:
        "When a patient with diabetes is discharged after a surgical procedure, what specific discharge instruction content is especially important?",
      options: [
        "General wound care instructions - diabetes management is not part of surgical discharge",
        "Instructions about managing blood glucose during recovery - including medication adjustments if NPO status or reduced oral intake continues, and when to monitor glucose",
        "Only the standard discharge checklist - diabetes management is the primary care doctor's responsibility",
        "A referral to an endocrinologist before discharge",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires discharge instructions appropriate to the patient's condition. For a diabetic patient, this includes specific guidance about glucose monitoring during recovery, how to manage diabetes medications (especially if NPO or with reduced intake), and warning signs of hyperglycemia or hypoglycemia to monitor.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-operative blood glucose management is a patient safety priority for diabetic patients - both hyperglycemia and hypoglycemia affect wound healing and recovery. Discharge instructions must address the patient's individual condition, not just the procedure.",
        whyWrong: {
          A: "Diabetes management during recovery is a perioperative safety issue - it must be addressed in discharge instructions.",
          C: "While the primary care provider manages long-term diabetes care, the ASC must provide instructions for the immediate recovery period.",
          D: "An endocrinology referral may be appropriate in some cases but is not what CMC.130 requires in discharge instructions.",
        },
        operationalContext:
          "Create a diabetes-specific discharge addendum that covers: when to resume diabetes medications, glucose monitoring frequency during recovery, target glucose ranges, what to do if glucose is out of range, and who to call with concerns. Attach to the standard post-operative instructions.",
      },
    },
    {
      id: "asc_cmc_15",
      question:
        "A physician requests a patient's clinical record for legal proceedings. Under CMC, what must the ASC consider before releasing the record?",
      options: [
        "Records may always be released to physicians who request them",
        "Records may be released only in accordance with applicable state and federal privacy laws (HIPAA) and the organization's record release policies",
        "Legal proceedings automatically grant access to all clinical records",
        "The patient's verbal consent is sufficient for record release",
      ],
      correctIndex: 1,
      explanation:
        "CMC.140 requires that clinical records are maintained and managed in accordance with applicable state and federal laws. Record release in response to legal proceedings must follow HIPAA requirements: a valid authorization from the patient, a HIPAA-compliant subpoena or court order, or a specific legal exception.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Clinical records are protected health information. Legal proceedings do not automatically override patient privacy rights - a valid HIPAA authorization, court order, or other legal process must be present before records are released.",
        whyWrong: {
          A: "Physician identity alone does not create a right to access a patient's records without patient authorization.",
          C: "Legal proceedings must follow HIPAA-compliant pathways - a request from an attorney or court does not automatically waive privacy protections.",
          D: "Verbal consent is not sufficient for record release - written authorization is required under HIPAA.",
        },
        operationalContext:
          "Develop a record release policy specifying: required documentation for each release scenario (patient authorization, court order, HIPAA-compliant subpoena), who may authorize releases, and required documentation of all releases in the release log.",
      },
    },
    {
      id: "asc_cmc_16",
      question:
        "An ASC that has begun providing telehealth pre-operative assessments must ensure that clinical records from these encounters include what?",
      options: [
        "Telehealth records are not subject to CMC requirements",
        "The same required clinical record elements as in-person assessments - including the nature of the encounter (telehealth), the provider's identity, and appropriate assessment documentation",
        "Only the date of the encounter and the patient's name",
        "Telehealth records are maintained separately from the ASC's main clinical records system",
      ],
      correctIndex: 1,
      explanation:
        "The AAAHC v44 guidance for CMC.100 explicitly notes that if telehealth/telemedicine services are offered, the standard applies. Telehealth encounter records must contain the same required elements as in-person encounters, plus notation that the encounter was conducted via telehealth and the technology used.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Telehealth encounters are clinical encounters that generate clinical records. AAAHC CMC standards apply to all patient care encounters regardless of delivery modality.",
        whyWrong: {
          A: "CMC explicitly applies to telehealth encounters per AAAHC v44 guidance.",
          C: "Minimal documentation is not sufficient - full required elements must be present.",
          D: "Telehealth records must be integrated into the patient's overall clinical record, not maintained as a separate system.",
        },
        operationalContext:
          "Configure your EHR to capture telehealth encounters with the same required documentation fields as in-person encounters. Add a 'Telehealth Encounter' field indicating the platform used, connectivity assessment, and any limitations identified.",
      },
    },
    {
      id: "asc_cmc_17",
      question:
        "Which CMC.100 clinical record element documents the patient's agreement to the planned procedure?",
      options: [
        "The patient demographics section",
        "The evidence of informed consent",
        "The discharge instructions",
        "The operative note",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires evidence of informed consent as a required clinical record element. This is also required under PRR.240 (consent for anesthesia) and PRR.250 (consent for procedure). The consent must be signed by the patient or their representative before the procedure begins.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The signed consent form is the clinical record's documentation that the patient was informed and agreed to the procedure. CMC.100 and PRR together require that this documentation is present in the record before the procedure.",
        whyWrong: {
          A: "Demographics identify who the patient is - not their agreement to treatment.",
          C: "Discharge instructions are provided after the procedure - they do not document pre-procedure consent.",
          D: "The operative note documents what was done - it does not document pre-procedure patient consent.",
        },
        operationalContext:
          "Ensure the consent form is placed in the chart before the patient enters the OR. Include in the pre-procedure checklist: 'Consent form present and signed - YES/NO.' Do not proceed if the consent form is missing.",
      },
    },
    {
      id: "asc_cmc_18",
      question:
        "CMC.130 requires documentation of a patient's condition and clinical status at the time of discharge. Why is this documentation important?",
      options: [
        "It is required for billing verification purposes only",
        "It establishes the baseline for post-operative monitoring, provides a reference if complications arise after discharge, and supports coordination with follow-up providers",
        "Discharge condition documentation is optional if the patient meets discharge criteria",
        "It is only required for patients who received general anesthesia",
      ],
      correctIndex: 1,
      explanation:
        "CMC.130 requires documentation of the patient's condition at discharge. This clinical snapshot establishes the baseline for post-discharge care: if a complication arises after discharge, the documented condition at discharge helps determine when the problem began and guides subsequent management.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-discharge condition documentation serves three clinical purposes: (1) it proves discharge criteria were met; (2) it creates a baseline for comparison if complications arise; and (3) it communicates the patient's status to follow-up providers.",
        whyWrong: {
          A: "While billing uses clinical documentation, the purpose of discharge condition documentation is clinical continuity and safety.",
          C: "Documentation of discharge condition is required regardless of whether specific criteria were formally assessed.",
          D: "Documentation requirements apply to all procedure types regardless of anesthesia level.",
        },
        operationalContext:
          "Include a discharge condition assessment in the PACU flowsheet or discharge checklist: vital signs at discharge, pain score, wound condition, mobility status, discharge instructions reviewed and understood (yes/no), and responsible adult present for transport.",
      },
    },
    {
      id: "asc_cmc_19",
      question:
        "Under CMC standards, what is the role of medication reconciliation in the clinical record?",
      options: [
        "Medication reconciliation is a pharmacy function - it is not a clinical record requirement",
        "Current medications must be documented in the clinical record as part of the pre-operative assessment, and medications prescribed at discharge must be reconciled with existing medications to prevent dangerous interactions",
        "Only new medications prescribed at discharge require documentation",
        "Medication reconciliation is required only for patients with chronic conditions",
      ],
      correctIndex: 1,
      explanation:
        "CMC.100 requires documentation of current medications as part of the pre-operative history. Discharge medication reconciliation (comparing newly prescribed medications with the patient's existing medication list to identify duplications or interactions) is a patient safety requirement that must be documented in the clinical record.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication errors at care transitions (including discharge from an ASC) are a leading cause of preventable patient harm. Reconciliation documentation ensures new prescriptions are appropriate in the context of the patient's full medication regimen.",
        whyWrong: {
          A: "Clinical staff conduct medication reconciliation - it is both a clinical and a clinical record requirement.",
          C: "Reconciliation must address the full medication list - not only new prescriptions.",
          D: "Reconciliation applies to all patients - chronic conditions increase risk but are not the threshold.",
        },
        operationalContext:
          "Include a 'Medication Reconciliation' section in the discharge assessment: current medications documented pre-op, new medications prescribed at discharge, and a note confirming review for duplications and interactions. Require the discharging provider to sign this section.",
      },
    },
    {
      id: "asc_cmc_20",
      question:
        "A patient declines the recommended follow-up appointment after their procedure. What must the clinical record document?",
      options: [
        "Nothing - the patient's refusal eliminates the organization's documentation obligation",
        "The clinical record must document that follow-up was recommended, the patient declined, the reason given if provided, and any patient education provided about the importance of follow-up",
        "The patient must be prevented from leaving until they agree to a follow-up appointment",
        "Only the surgeon's note about the recommendation is required - patient refusal is a personal decision",
      ],
      correctIndex: 1,
      explanation:
        "When a patient declines recommended follow-up, the clinical record must document: the recommendation was made, the patient declined, any explanation provided, and the education given about the risks of not following up. This protects both the patient (documents they were informed) and the organization (documents it fulfilled its clinical obligation).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documenting a patient's informed refusal is both a clinical and legal obligation. It demonstrates that the organization fulfilled its duty to provide the recommended care - and that the patient made an autonomous, informed decision to decline.",
        whyWrong: {
          A: "Patient refusal does not eliminate the documentation obligation - it creates a specific documentation requirement.",
          C: "Patient autonomy includes the right to decline recommended follow-up - detention is not permissible.",
          D: "The surgeon's note alone is not sufficient - the patient's specific refusal and the education provided must also be documented.",
        },
        operationalContext:
          "Create a 'Patient Refusal of Follow-Up' documentation template: recommendation made (yes), patient declined (yes), reason documented (if provided), patient education provided (what was said), and patient's acknowledgment of understanding. Have the patient sign or note that they declined to sign.",
      },
    },
  ],
};
