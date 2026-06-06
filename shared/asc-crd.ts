import type { Level } from "./schema";

export const ascCrdLevel: Level = {
  id: "asc_crd",
  module: "asc",
  name: "Clinical Records",
  description: "AAAHC v44 CRD - clinical records system, written policies, record content requirements, confidentiality, allergy documentation, informed consent, and continuity of care documentation.",
  icon: "FileText",
  color: "hsl(200, 65%, 42%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "CRD: Clinical Records",
    plainLanguageSummary:
      "The CRD category establishes requirements for maintaining complete, accurate, and secure patient clinical records. A designated person must oversee the clinical records system, and written policies must govern how records are collected, stored, protected, and released. Every patient must have an individual record with consistent, legible entries that document the reason for the visit, findings, care provided, medications, and the treating provider's signature. Allergy and sensitivity information must be recorded prominently and verified at every encounter. Clinical records must support continuity of care and maintain strict confidentiality.",
    keyOperationalExpectations: [
      "A designated person is in charge of clinical records and the health information system.",
      "Written policies address record security, release, protection from damage or loss, unauthorized access, retention, and retirement.",
      "Clinical records are maintained in a consistent format that is legible, organized, and accessible to authorized personnel whenever the organization is open.",
      "An individual clinical record is established for each patient and includes name, ID number, date of birth, gender, and responsible party.",
      "Each visit entry documents the date, chief complaint, clinical findings, care rendered, medication changes, discharge diagnosis, and provider signature.",
      "Allergy and sensitivity information is recorded in a prominent, consistent location in every record and verified at each encounter.",
    ],
    commonRiskPoints: [
      "Clinical records are not consistently organized - different practitioners use different formats making record navigation unreliable.",
      "Allergy documentation is missing from some records or recorded in varying locations rather than a prominent, consistent location.",
      "Patients are not asked about allergies and sensitivities at each encounter - only at initial registration.",
      "Provider authentication (signature or electronic equivalent) is absent from some visit entries.",
    ],
    aaahcStandards: ["CRD.120", "CRD.130", "CRD.140", "CRD.160", "CRD.180", "CRD.190", "CRD.210", "CRD.220", "CRD.230", "CRD.250"],
  },
  studyMaterial: [
    {
      title: "Who is responsible for managing patient records at the facility?",
      content:
        "The facility must designate a specific person to oversee the clinical records system and a separate person responsible for the health information technology system. The records system must have written policies and procedures, and someone must actively monitor that those policies are being followed. Just having a system in place is not enough.",
      keyPoint:
        "Two designated roles are required: one for clinical records oversight and one for the health information system. Both must be formally assigned.",
    },
    {
      title: "What written policies must cover how patient records are managed?",
      content:
        "Written policies must address how records are secured, how they are released with patient authorization, how they are protected from damage or loss including backup systems for electronic records, how unauthorized access is prevented, how long records are kept, and when inactive records are retired. All of these areas must be covered in writing.",
      keyPoint:
        "Multiple specific topics must be in the written records policies. Electronic backup systems are explicitly required for facilities using electronic health records.",
    },
    {
      title: "What makes a patient record easy and safe to use?",
      content:
        "Records must be organized in a consistent format so that anyone can find information quickly. Every entry must be legible, including any documents that have been scanned in. All relevant records must be available to authorized staff any time the facility is open to patients.",
      keyPoint:
        "Records must be consistent, legible, and accessible during all hours of operation. A scanned document that cannot be read is just as non-compliant as illegible handwriting.",
    },
    {
      title: "What does strict confidentiality of patient records mean for your daily work?",
      content:
        "All patient information must be kept confidential, whether it is in paper form, in an electronic system, or in a conversation. Policies must require confidentiality, but observed staff behavior must also demonstrate it. Talking about a patient in a hallway where others can hear is a confidentiality failure even if all the written policies are in place.",
      keyPoint:
        "Confidentiality applies to all formats of patient information. Written policies must be backed up by actual staff behavior.",
    },
    {
      title: "What must be documented in every patient visit entry in the chart?",
      content:
        "Each visit entry must include the date, the reason the patient came in, clinical findings, any tests ordered, what care was provided, any medication changes, the discharge diagnosis or plan, and the provider's signature. All of these elements must be consistent across records and present for every encounter.",
      keyPoint:
        "Multiple elements are required in every visit entry, ending with the provider's signature. An unsigned entry is not complete.",
    },
    {
      title: "What are the rules for documenting allergies in a patient chart?",
      content:
        "Every patient must be asked about allergies and sensitivities at every visit, not just at the time they first registered. If a patient reports an allergy, staff must ask what reaction they had, not just the name of the substance. Allergy information must be recorded in the same prominent location in every chart and updated whenever changes are reported.",
      keyPoint:
        "Allergy documentation requires asking at every visit, recording the reaction, using a consistent location in the chart, and updating at every encounter.",
    },
    {
      title: "What must be documented when patients are told about their procedure?",
      content:
        "The chart must show that the provider discussed the need for the procedure and any available alternatives with the patient. A signed consent form alone is not enough. There must also be a note documenting that the discussion actually happened. A signature is not the same as documented evidence of a conversation.",
      keyPoint:
        "The consent discussion must be documented separately from the consent form itself. The chart must show that a conversation happened, not just that a form was signed.",
    },
    {
      title: "What must the chart show to support continuity of care?",
      content:
        "If a patient misses or cancels an appointment, that must be documented. If a provider gives medical advice by phone, text, or email, the content of that advice must be written in the chart, not just a note that a call happened. For patients who have been seen three or more times or who have a complex history, a summary of past diagnoses and procedures must be in the record.",
      keyPoint:
        "Continuity documentation requires recording missed appointments, documenting the content of all remote medical advice, and maintaining a problem summary for patients with complex or repeated care.",
    },
  ],
  questions: [
    {
      id: "asc_crd_01",
      question:
        "An ASC uses an electronic health record (EHR) system. Under CRD.130, what written policy element must specifically address the EHR?",
      options: [
        "An annual review policy for the EHR vendor contract",
        "A backup system policy to protect records from damage or loss - explicitly including backup systems for electronic records",
        "A policy designating the EHR as the legal medical record",
        "A policy requiring paper copies of all electronic records",
      ],
      correctIndex: 1,
      explanation:
        "CRD.130 explicitly requires written policies addressing the protection of records from damage or loss, including backup systems for electronic records. Organizations using EHRs must have a documented backup and recovery procedure as part of their clinical records policies.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Electronic records are particularly vulnerable to data loss from hardware failure, ransomware, or system crashes. CRD.130 specifically calls out backup systems for electronic records because this is a known high-risk area for healthcare organizations.",
        whyWrong: {
          A: "Vendor contract review is a governance matter - not a CRD.130 required policy element.",
          C: "Designation of the legal medical record is a health information management practice but not a specific CRD.130 requirement.",
          D: "CRD.130 does not require paper copies of electronic records - it requires backup systems for electronic records.",
        },
        operationalContext:
          "Document your EHR backup frequency, backup storage location (offsite or cloud), recovery time objective, and who is responsible for verifying backup integrity. Test your recovery process at least annually and document the results.",
      },
    },
    {
      id: "asc_crd_02",
      question:
        "During an AAAHC survey, a surveyor reviews ten clinical records and finds that allergy information is recorded in different locations in each record - some in a front-page header, some in a free-text nursing note, and some in the medication history section. What CRD standard does this violate?",
      options: [
        "CRD.120 - the clinical records system is not adequately monitored",
        "CRD.210 - allergy information must be recorded in a prominent and consistently defined location in all records",
        "CRD.140 - records must be organized in a consistent format",
        "CRD.160 - confidentiality of allergy information is not maintained",
      ],
      correctIndex: 1,
      explanation:
        "CRD.210 specifically requires that allergy and sensitivity information be recorded in a prominent AND consistently defined location across all records. Variation in where allergies are recorded creates patient safety risk - a provider looking for allergy information in the expected location will miss it if it was recorded elsewhere.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'prominent and consistently defined location' requirement exists for patient safety - in an emergency, a clinician must be able to find allergy information immediately and reliably. Inconsistent placement defeats this safety purpose.",
        whyWrong: {
          A: "CRD.120 addresses the overall records system - the specific allergy location requirement is CRD.210.",
          C: "CRD.140 addresses overall record organization and format consistency - CRD.210 is the specific standard for allergy documentation.",
          D: "Allergy information is not inherently confidential in the same way as diagnostic or social history - the issue here is safety and consistency.",
        },
        operationalContext:
          "Designate a specific, prominent field or section in your record/EHR for allergy documentation - for example, a mandatory allergy banner at the top of the record. Configure the EHR to require allergy documentation in this field, not in free-text notes.",
      },
    },
    {
      id: "asc_crd_03",
      question:
        "A patient reports a penicillin allergy at registration. Under CRD.210, what additional information must be documented beyond the name of the allergen?",
      options: [
        "The year the allergy was first identified",
        "The patient's specific reaction to penicillin (e.g., rash, hives, anaphylaxis, GI symptoms)",
        "Whether the patient has taken penicillin within the past two years",
        "The name of the prescribing physician who gave penicillin to the patient",
      ],
      correctIndex: 1,
      explanation:
        "CRD.210 requires that patients reporting allergies and sensitivities describe their reaction. The nature of the reaction - whether it was a mild rash, severe anaphylaxis, GI intolerance, or other type - is clinically important for prescribing decisions. A documented 'penicillin allergy: rash' is very different from 'penicillin allergy: anaphylaxis' in terms of clinical management.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documenting only the allergen name ('penicillin allergy') without the reaction type is insufficient under CRD.210 and clinically problematic. A provider cannot make informed prescribing decisions without knowing the severity and nature of the reaction.",
        whyWrong: {
          A: "The year the allergy was identified is not a CRD.210 required element.",
          C: "Recent exposure history is clinically relevant but not the specific CRD.210 requirement being tested here.",
          D: "The prescribing physician's name is not a required element of allergy documentation under CRD.210.",
        },
        operationalContext:
          "Design your allergy documentation template to include fields for: allergen name, type of reaction (rash, hives, anaphylaxis, GI, etc.), and severity. Do not allow staff to save an allergy entry without a reaction description.",
      },
    },
    {
      id: "asc_crd_04",
      question:
        "A patient who has been coming to the ASC for annual colonoscopies for the past five years was not asked about allergies at their most recent visit because staff assumed the allergy information was already in the chart. Under CRD.210, is this acceptable?",
      options: [
        "Yes - if allergy information is already documented, re-asking at each visit is redundant",
        "No - CRD.210 requires patients to be asked about allergies and sensitivities at each encounter, and the information must be verified and updated at each encounter",
        "Yes - for established patients with multiple prior visits, annual allergy verification is sufficient",
        "Only if the existing allergy documentation was verified at the previous visit",
      ],
      correctIndex: 1,
      explanation:
        "CRD.210 requires that patients are asked about allergies at each encounter and that the information is verified and updated at each encounter. Patients may develop new allergies, may report a reaction to a medication given at the last visit, or may have new food or environmental sensitivities - any of which could be missed if staff assume prior documentation is still current.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'at each encounter' requirement exists because allergies change over time. A patient who received contrast dye at their last imaging study may have developed a new contrast allergy. Assuming prior information is current is a patient safety risk and a CRD.210 violation.",
        whyWrong: {
          A: "Even with documented allergy information, CRD.210 requires verification at each encounter.",
          C: "Annual verification does not satisfy the 'each encounter' requirement for a patient who is seen more frequently.",
          D: "Even if the last visit included allergy verification, the current visit still requires its own verification.",
        },
        operationalContext:
          "Build allergy verification into your pre-procedure nursing workflow as a required step. In an EHR, configure allergy verification as a required field that must be acknowledged (confirmed or updated) at each visit before the encounter can be completed.",
      },
    },
    {
      id: "asc_crd_05",
      question:
        "A surgeon performs a laparoscopic cholecystectomy and dictates an operative report. The operative report is transcribed and available the next day. Under CRD.220, what must happen before the report is placed in the patient's record?",
      options: [
        "The report may be filed as received - no additional action is required",
        "The report must be reviewed by the ordering or performing provider before incorporation, with evidence that the review occurred",
        "The report must be reviewed by the medical records director",
        "The report must be co-signed by the anesthesiologist before filing",
      ],
      correctIndex: 1,
      explanation:
        "CRD.220 requires that reports, including operative reports, are reviewed and incorporated into the record as required by organizational policy - with evidence that such items were reviewed prior to incorporation. A transcription error in an operative report that was filed without review could result in inaccurate documentation driving future clinical decisions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The review requirement ensures accuracy of transcribed and external reports before they become a permanent part of the record. A surgeon who reviews and authenticates their own operative report confirms that the transcription accurately reflects what occurred.",
        whyWrong: {
          A: "Simply filing reports without evidence of review violates CRD.220.",
          C: "CRD.220 requires review by the ordering or performing provider - not the medical records director.",
          D: "The anesthesiologist's co-signature is not required for a surgical operative report.",
        },
        operationalContext:
          "Establish a policy requiring providers to review and authenticate dictated reports (with signature or electronic authentication) within a defined timeframe - for example, 72 hours. Track unauthenticated reports as a quality monitoring indicator.",
      },
    },
    {
      id: "asc_crd_06",
      question:
        "Under CRD.190, which of the following is a required element in a visit entry for every patient encounter?",
      options: [
        "The patient's insurance authorization number",
        "The signature or authentication by the healthcare professional",
        "The time the patient arrived and was discharged",
        "The patient's vital signs from the prior visit",
      ],
      correctIndex: 1,
      explanation:
        "CRD.190 requires that entries for each visit include, among other elements, the signature or authentication by the healthcare professional. Provider authentication confirms who documented the entry and takes professional responsibility for its content. This is a non-negotiable documentation standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Provider authentication connects each clinical entry to a specific accountable professional. An unauthenticated note cannot be attributed to a specific provider and creates legal and clinical accountability gaps.",
        whyWrong: {
          A: "Insurance authorization numbers are administrative records - not a required CRD.190 clinical entry element.",
          C: "Exact arrival and discharge times are not specified as required CRD.190 entry elements (though they may be required by other standards for recovery documentation).",
          D: "CRD.190 requires current visit entries - prior vital signs are historical data, not required entry content for the current visit.",
        },
        operationalContext:
          "Audit your records regularly for unauthenticated entries. In an EHR, configure workflows to require provider signature/authentication before an encounter note can be finalized. Paper records should require a wet-ink signature before filing.",
      },
    },
    {
      id: "asc_crd_07",
      question:
        "An ASC nurse gives a patient post-operative discharge instructions by phone because the patient left before the nurse could provide them in person. Under CRD.250, what must be documented?",
      options: [
        "Only that a call was made - the content of instructions given by phone is not a documentation requirement",
        "The medical advice given by telephone must be documented in the patient's clinical record",
        "Phone calls to patients are documented in the nurse's personal call log, not the clinical record",
        "Telephone medical advice is only documented if the patient calls back with a complaint",
      ],
      correctIndex: 1,
      explanation:
        "CRD.250 requires documentation of medical advice given to a patient by telephone (as well as text or email). The advice itself - not just the fact that a call was made - must be documented in the clinical record. This ensures continuity of care if the patient presents to another provider who needs to know what instructions were given.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-operative instructions given by phone are clinical communications that affect patient care. Another provider treating complications needs to know what the patient was told - this information belongs in the clinical record.",
        whyWrong: {
          A: "The content of the advice, not just the occurrence of a call, must be documented under CRD.250.",
          C: "Personal call logs are not clinical records and do not satisfy the CRD.250 documentation requirement.",
          D: "CRD.250 requires documentation of telephone medical advice regardless of whether the patient subsequently reports problems.",
        },
        operationalContext:
          "Train staff to document telephone medical advice in the patient's chart with: the date and time of the call, the advice or instructions given, the name of the staff member who gave the advice, and any patient response or concerns noted during the call.",
      },
    },
    {
      id: "asc_crd_08",
      question:
        "A patient cancels their follow-up appointment two days after a minor procedure without rescheduling. Under CRD.250, what documentation is required?",
      options: [
        "No documentation is required for patient-initiated cancellations",
        "The missed or canceled appointment must be documented in the clinical record",
        "Only no-shows (not cancellations) require documentation under CRD.250",
        "Documentation of canceled appointments is required only for patients with known medical complications",
      ],
      correctIndex: 1,
      explanation:
        "CRD.250 requires documentation of missed and canceled appointments in the clinical record. This allows the organization to identify patients who may need follow-up outreach and ensures that if a patient later presents with a complication, the record shows the follow-up was offered and the patient did not attend.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documenting missed and canceled appointments is both a continuity of care requirement and a medicolegal protection. If a patient later claims they were not followed up appropriately, the documentation of their cancellation demonstrates the organization's attempt to provide follow-up care.",
        whyWrong: {
          A: "CRD.250 requires documentation of both missed and canceled appointments.",
          C: "No-shows and patient-initiated cancellations are both covered by CRD.250.",
          D: "The documentation requirement applies to all canceled appointments, not only those involving patients with known complications.",
        },
        operationalContext:
          "Configure your scheduling system or EHR to require a note entry whenever an appointment is canceled or missed. Include in the note: date of canceled appointment, reason for cancellation (if known), whether the patient was contacted or rescheduled, and any clinical guidance provided.",
      },
    },
    {
      id: "asc_crd_09",
      question:
        "A patient's clinical record at the ASC is reviewed during survey. The patient has had eight visits over three years for a complex chronic condition managed with multiple medications and prior procedures. Under CRD.250, what must be present in this record?",
      options: [
        "A copy of every visit note from all prior treating providers",
        "A summary of past and current diagnoses, problems, and past procedures to facilitate continuity of care",
        "An independent second opinion from a specialist",
        "A medication reconciliation form signed by a pharmacist",
      ],
      correctIndex: 1,
      explanation:
        "CRD.250 requires that for patients with three or more visits or admissions - or with complex, lengthy records - a summary of past and current diagnoses or problems, including past procedures, must be present in the record to facilitate continuity of care. A patient with eight visits over three years clearly meets this threshold.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "For complex patients seen repeatedly, a provider encountering the patient for the first time (or after a gap) cannot safely and efficiently review years of visit notes. The problem summary serves as a navigational tool that enables safe, informed care.",
        whyWrong: {
          A: "CRD.250 requires a summary - not copies of all prior notes from all providers. External records may be incorporated per CRD.220 but a complete external note collection is not the requirement.",
          C: "Independent second opinions are not a CRD.250 requirement.",
          D: "Pharmacist medication reconciliation is a clinical practice recommendation but not a specific CRD.250 required element.",
        },
        operationalContext:
          "Create a policy requiring that a problem list or cumulative summary be initiated after a patient's third visit and updated at each subsequent visit. In an EHR, use the problem list, medication list, and diagnosis history features as your summary - ensure they are actively maintained.",
      },
    },
    {
      id: "asc_crd_10",
      question:
        "A patient requests a copy of their clinical record. Under CRD.130, what written policy must address this request?",
      options: [
        "Only HIPAA governs patient record release - a separate organizational policy is not required",
        "CRD.130 requires written policies addressing the release of patient records, including patient authorization requirements",
        "Record release is governed only by CRD.140's patient approval requirement - a separate written policy is not needed",
        "Only records from the past two years must be released upon patient request",
      ],
      correctIndex: 1,
      explanation:
        "CRD.130 specifically requires written policies addressing the release of patient records as one of its seven required policy topics. This organizational policy must be consistent with HIPAA and applicable state law, and must specify the process for authorizing and fulfilling record release requests.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "HIPAA establishes the federal floor for patient privacy rights - but CRD.130 additionally requires the organization to have its own written policies addressing record release. The written policy operationalizes HIPAA requirements in the organization's specific context.",
        whyWrong: {
          A: "HIPAA establishes legal requirements, but CRD.130 requires a written organizational policy - which should incorporate HIPAA compliance.",
          C: "CRD.130 specifically enumerates record release as one of seven required policy topics - it is not covered by CRD.140 alone.",
          D: "No time limitation on the records to be released is specified by CRD.130.",
        },
        operationalContext:
          "Your record release policy should specify: required patient authorization elements, identity verification requirements, timeframes for responding to requests (HIPAA allows up to 30 days), fees (if any, per state law), format options (paper, electronic), and procedures for denying requests with the required notice of denial rights.",
      },
    },
    {
      id: "asc_crd_11",
      question:
        "Under CRD.140, a clinical record entry that was scanned into the electronic health record is illegible. What standard does this violate?",
      options: [
        "No standard - legibility requirements only apply to handwritten entries, not scanned documents",
        "CRD.140 - clinical records must be legible, including items scanned into an electronic record",
        "CRD.220 - reports must be reviewed before incorporation, and a legible copy should have been obtained",
        "CRD.180 - the individual record must be complete",
      ],
      correctIndex: 1,
      explanation:
        "CRD.140 explicitly states that clinical record entries must be legible, 'including items that are scanned into an electronic record.' An illegible scan - whether from poor image quality, a rotated document, or other issues - violates CRD.140 regardless of whether it was originally a paper document.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC specifically added 'including items scanned into an electronic record' to address the common practice of scanning poor-quality paper documents. A record entry that cannot be read provides no clinical value and creates patient safety risk.",
        whyWrong: {
          A: "CRD.140 explicitly covers scanned items - legibility requirements apply to all entry types.",
          C: "CRD.220 review is relevant, but the legibility deficiency is specifically addressed by CRD.140.",
          D: "CRD.180 addresses required patient identifier elements - legibility of entries is CRD.140.",
        },
        operationalContext:
          "When scanning paper documents, use quality settings that ensure legibility. Review each scanned document immediately after scanning. Reject and rescan any document that is not clearly legible. Train scanning staff on quality standards.",
      },
    },
    {
      id: "asc_crd_12",
      question:
        "A staff member in the front office is overheard discussing a patient's diagnosis and procedure with another staff member in the waiting room where other patients can hear. What CRD standard does this violate?",
      options: [
        "No CRD standard - verbal discussions are not covered by clinical records standards",
        "CRD.160 - any record containing patient data must be treated as strictly confidential, and observed practice must confirm confidential handling",
        "CRD.130 - written policies addressing security of information were not followed",
        "CRD.140 - patient data must be accessible only to authorized personnel",
      ],
      correctIndex: 1,
      explanation:
        "CRD.160 requires that records containing clinical, social, financial, or other patient data are treated as strictly confidential. Critically, surveyors verify this through 'interviews and observation' - meaning observed practice, not just written policies, is evaluated. Discussing patient information in a public area is a CRD.160 violation discovered through observed practice.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CRD.160 is unique among the CRD standards in explicitly requiring that compliance be verified through observation and interviews - not just through written policies. A perfect confidentiality policy does not satisfy CRD.160 if staff behavior violates confidentiality in practice.",
        whyWrong: {
          A: "CRD.160 covers all patient data in all forms - including verbal discussions - not only written records.",
          C: "CRD.130 addresses written security policies. The observed behavior violation is specifically captured by CRD.160's observation requirement.",
          D: "CRD.140 addresses accessibility within the clinical record - confidentiality of verbal communications is CRD.160.",
        },
        operationalContext:
          "Train all staff - clinical and administrative - on HIPAA minimum necessary standards and the prohibition on discussing patient information in public areas. Include observation of staff behavior during internal compliance rounds to catch CRD.160 issues before survey.",
      },
    },
    {
      id: "asc_crd_13",
      question:
        "Under CRD.180, which of the following is a required element in every individual clinical record?",
      options: [
        "The patient's emergency contact phone number",
        "Patient date of birth",
        "The patient's insurance group number",
        "The patient's primary care physician's name",
      ],
      correctIndex: 1,
      explanation:
        "CRD.180 requires each individual clinical record to include the patient's name, identification number (if used), date of birth, gender, and responsible party. Date of birth is an explicit required element. Emergency contact, insurance information, and PCP name are important administrative elements but are not the specific CRD.180 required clinical record identifiers.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CRD.180 specifies five required record identifiers: name, ID number, date of birth, gender, and responsible party. Date of birth also functions as a patient identifier for safety purposes - used to confirm correct patient identity before procedures.",
        whyWrong: {
          A: "Emergency contact is not among the five required CRD.180 elements.",
          C: "Insurance information is administrative data not specified in CRD.180.",
          D: "PCP name is not a required CRD.180 element.",
        },
        operationalContext:
          "Audit a sample of records to confirm all five CRD.180 elements are present in every record: name, ID, DOB, gender, and responsible party. EHR systems typically capture these at registration - ensure they are mandatory fields.",
      },
    },
    {
      id: "asc_crd_14",
      question:
        "A surgeon discusses treatment alternatives for a patient's knee condition, recommending arthroscopic surgery but also explaining that physical therapy is an option. Under CRD.230, what must the clinical record contain?",
      options: [
        "A signed surgical consent form is sufficient documentation of the discussion",
        "Documentation of the discussion of treatment alternatives (in this case, physical therapy as an alternative to surgery) in the clinical record",
        "Documentation is only required if the patient chooses the alternative treatment",
        "The discussion of alternatives is only required to be documented in the informed consent form, not the clinical record",
      ],
      correctIndex: 1,
      explanation:
        "CRD.230 requires that clinical records document discussions with the patient concerning the necessity, appropriateness, and risks of proposed care - as well as discussions of treatment alternatives, as applicable. A signed consent form confirms consent was obtained but does not typically capture the substance of alternative treatment discussions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documenting the discussion of alternatives in the record creates a contemporaneous record of shared decision-making. This protects both the patient (confirming their options were presented) and the organization (demonstrating that informed decision-making occurred).",
        whyWrong: {
          A: "A signed consent form confirms consent was given but typically does not document the specific alternatives discussed.",
          C: "CRD.230 requires documentation of the discussion regardless of which treatment the patient chooses.",
          D: "CRD.230 requires documentation in the clinical record - the consent form alone does not satisfy this requirement if it does not capture the alternatives discussion.",
        },
        operationalContext:
          "Add a dedicated section to your pre-procedure note template for documenting patient education and alternatives discussed. Include: what alternatives were presented, the patient's response/preference, and any questions asked by the patient.",
      },
    },
    {
      id: "asc_crd_15",
      question:
        "The CRD.120 standard requires a designated person in charge of clinical records and a designated person in charge of the health information system. At a small ASC, may the same person serve in both roles?",
      options: [
        "No - CRD.120 requires two separate individuals",
        "Yes - the same person may fill both roles as long as the dual responsibility is documented",
        "Only if the person is a licensed health information manager (RHIA or RHIT)",
        "Only for ASCs with fewer than 500 patient encounters per year",
      ],
      correctIndex: 1,
      explanation:
        "CRD.120 designates two roles - clinical records oversight and health information system oversight - but does not prohibit one person from fulfilling both roles. At small ASCs, the same administrator or health information manager often serves both functions. What matters is that the responsibility is designated and documented, not that it is filled by separate individuals.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The designation requirement in CRD.120 ensures accountability - someone is formally responsible for each function. In small organizations, role consolidation is common and acceptable as long as the designations are documented and the functions are being performed.",
        whyWrong: {
          A: "CRD.120 does not require two separate individuals - it requires two designated roles.",
          C: "While RHIA/RHIT certification is valuable, CRD.120 does not specify a required credential for these designees.",
          D: "No volume threshold is specified for role separation in CRD.120.",
        },
        operationalContext:
          "Document role designations in your organizational policies or job descriptions. Even if one person fills both roles, the responsibilities of each role should be clearly described so the person knows what both functions require and can demonstrate those functions during a survey.",
      },
    },
  ],
};
