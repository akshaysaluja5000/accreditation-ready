import type { Level } from "./schema";

export const ascValLevel: Level = {
  id: "asc_val",
  module: "asc",
  name: "Validation",
  description: "AAAHC v44 VAL - validation of application profile information, California outpatient surgery standards, and New York office-based surgery requirements.",
  icon: "CheckCircle",
  color: "hsl(140, 60%, 38%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "VAL: Validation",
    plainLanguageSummary:
      "The VAL category validates profile/application information submitted to AAAHC for accuracy and completeness. These selective standards assess compliance with state-specific requirements for outpatient surgery settings - primarily California Business and Professions Code and Health and Safety Code provisions for outpatient surgery, and New York Public Health Law provisions for office-based surgery centers. The standards verify that organizations accurately report their services, entity structure, personnel, and other profile information.",
    keyOperationalExpectations: [
      "The organization's AAAHC application and profile accurately reflect the services, personnel, and organizational structure.",
      "California: Anesthesia level (beyond local/peripheral nerve block) is accurately reported if it creates loss of protective reflexes.",
      "California: The organization meets the 'outpatient setting' definition under California Health and Safety Code §1248.",
      "California: Adverse events per HSC §1279.1 are reported to the Medical Board of California within required timeframes.",
      "New York: Healthcare professionals employed by the practice are accurately recorded in the organization's profile.",
      "New York: Billing entity structure (separate billing entity, billing and collection service) is accurately reflected.",
    ],
    commonRiskPoints: [
      "The AAAHC application was completed at initial accreditation and has not been updated as services expanded.",
      "California: Adverse event reports required under Business and Professions Code §2216.3 have not been submitted within the required five-day or 24-hour timeframes.",
      "California: Patient deaths or transfers over 24 hours have not been reported using the required California forms.",
      "New York: The practice billing structure changed but the profile was not updated to reflect the change.",
    ],
    aaahcStandards: ["VAL.190", "VAL.200", "VAL.210", "VAL.220", "VAL.230", "VAL.240", "VAL.250", "VAL.260", "VAL.280", "VAL.290", "VAL.300", "VAL.310", "VAL.320", "VAL.330", "VAL.340", "VAL.360", "VAL.370", "VAL.380", "VAL.390", "VAL.400", "VAL.410", "VAL.420", "VAL.430", "VAL.440", "VAL.450", "VAL.460"],
  },
  studyMaterial: [
    {
      title: "What is the purpose of the Validation category in accreditation?",
      content:
        "The Validation standards are different from other accreditation standards. They check whether the information your facility provided on its accreditation application is accurate and matches what actually happens in practice. If your services or structure have changed, your application must be updated.",
      keyPoint:
        "Validation findings happen when the application says one thing but the facility does something different. Keeping the application current is the main obligation.",
    },
    {
      title: "When do California anesthesia requirements apply to your facility?",
      content:
        "In California, special requirements apply when a facility uses anesthesia beyond a simple numbing injection at a level that could cause a patient to lose protective reflexes, such as the ability to swallow or cough. If your facility uses moderate sedation, deep sedation, or general anesthesia, this must be accurately reported on your accreditation profile.",
      keyPoint:
        "California requirements apply when sedation or anesthesia puts the patient at risk for losing protective reflexes. This must be accurately reflected in the accreditation profile.",
    },
    {
      title: "What reporting is required for California outpatient surgery settings?",
      content:
        "California facilities that use deeper levels of anesthesia must report certain adverse events to the Medical Board of California within five days, or within 24 hours if there is an ongoing risk. Patient deaths must be reported using a specific state form within 15 days. Transfers that last more than 24 hours must also be filed with the state health department within 15 days.",
      keyPoint:
        "California has four separate reporting requirements for adverse events, deaths, and transfers, each with its own form, recipient, and deadline.",
    },
    {
      title: "What does New York require for office-based surgery centers to report?",
      content:
        "New York office-based surgery centers must have accurate information on file about the types of healthcare providers employed, billing arrangements, ownership interests, and the physical address of the facility. These details must match what is reported on the accreditation profile. Changes to any of these must be updated promptly.",
      keyPoint:
        "New York standards check that the accreditation profile accurately reflects billing structure, ownership, staff types, and facility address.",
    },
    {
      title: "What is the main obligation every facility has under Validation standards?",
      content:
        "Every facility must keep its accreditation application and profile accurate and current. If services change, if ownership changes, if new staff are added, or if the billing structure changes, the accreditation profile must be updated right away. Waiting until the next accreditation cycle to report a major change is a compliance failure.",
      keyPoint:
        "A facility is responsible for keeping its accreditation profile up to date. Changes must be reported promptly, not just at renewal.",
    },
  ],
  questions: [
    {
      id: "asc_val_01",
      question:
        "What is the primary purpose of the AAAHC Validation (VAL) category?",
      options: [
        "To assess the clinical quality of care provided by the organization",
        "To verify that the information in the organization's AAAHC application and profile is accurate and complete",
        "To validate that the organization has passed all Universal standards",
        "To review the organization's financial statements for accuracy"
      ],
      correctIndex: 1,
      explanation:
        "The VAL category validates organizational profile/application information. It ensures that the services, structure, and characteristics the organization reported to AAAHC accurately reflect actual operations. It does not assess clinical care quality - that is the purpose of other standards categories.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "VAL is distinctive: it looks at the meta-question of whether what you told AAAHC about your organization is true. This is important because organizations are placed in the appropriate accreditation track and assessed against the appropriate selective standards based on their profile information.",
        whyWrong: {
          A: "Clinical quality is assessed through Universal and clinical Selective standards - not VAL.",
          C: "Universal standard compliance is tracked through the survey findings - VAL assesses profile accuracy.",
          D: "Financial statements are not the subject of VAL standards.",
        },
        operationalContext:
          "Assign responsibility for maintaining the AAAHC profile to a specific role (typically the administrator). Establish a process for reviewing the profile annually and after any material operational change (new services, new location, change in ownership or personnel).",
      },
    },
    {
      id: "asc_val_02",
      question:
        "Under VAL.190, when do California outpatient surgery anesthesia requirements apply?",
      options: [
        "For all outpatient procedures regardless of anesthesia type",
        "When anesthesia (beyond local/peripheral nerve block) is used in doses that have the probability of placing patients at risk for loss of protective reflexes",
        "Only for procedures requiring intubation",
        "Only for facilities billing under a physician's name"
      ],
      correctIndex: 1,
      explanation:
        "VAL.190 is triggered by California BPC §2216, which applies when procedures are performed using anesthesia beyond local anesthesia or peripheral nerve blocks in doses that create the probability of placing a patient at risk for loss of protective reflexes. This threshold typically includes moderate to deep sedation and general anesthesia.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The California standard focuses on the risk to protective reflexes - not on the specific drug used. Moderate sedation with benzodiazepines, opioids, or propofol that impairs airway protection reflexes triggers the California regulatory requirements.",
        whyWrong: {
          A: "Procedures under local anesthesia alone (without sedation creating reflex impairment) are excluded from California VAL.190.",
          C: "Intubation is one method of airway management - the trigger is reflex impairment risk, not intubation itself.",
          D: "The trigger is the anesthesia type - not the billing structure.",
        },
        operationalContext:
          "If you practice in California, review your anesthesia types and document whether any create loss-of-protective-reflex risk. If they do, ensure your AAAHC profile accurately reflects this, that your facility is appropriately certified, and that all California reporting requirements are in place.",
      },
    },
    {
      id: "asc_val_03",
      question:
        "A California outpatient surgery center has an adverse event as defined in HSC §1279.1. Under VAL.430 and California BPC §2216.3, within what timeframe must this be reported to the Medical Board of California?",
      options: [
        "Within 30 days of detection",
        "Within five days of detection - or within 24 hours if the event is an ongoing urgent threat to the welfare, health, or safety of patients, personnel, or visitors",
        "Within 15 days of detection",
        "At the annual quality report submission"
      ],
      correctIndex: 1,
      explanation:
        "California BPC §2216.3 requires adverse events to be reported to the Medical Board of California no later than five days after the adverse event has been detected - or, if the event is an ongoing urgent or emergent threat, no later than 24 hours after detection.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "California has two reporting timeframes depending on the urgency: five days for standard adverse events, 24 hours for ongoing urgent/emergent threats. Organizations must assess each adverse event against both timeframes and file accordingly.",
        whyWrong: {
          A: "30 days is far too long - California requires five days for standard adverse events.",
          C: "15 days is the timeframe for patient death and transfer reporting - not general adverse event reporting under BPC §2216.3.",
          D: "Annual reporting does not satisfy the specific adverse event reporting requirement.",
        },
        operationalContext:
          "Post the California adverse event reporting flowchart in the risk management office: (1) Did an adverse event occur? (2) Is it an ongoing urgent/emergent threat? → If yes, 24-hour report to Medical Board. If no, five-day report. Assign the risk manager as the responsible reporter with escalation to the medical director.",
      },
    },
    {
      id: "asc_val_04",
      question:
        "A California outpatient surgery patient dies in the facility. Under VAL.450 and California BPC §2240, what form must be submitted and to whom?",
      options: [
        "A standard death certificate submitted to the county recorder",
        "The Outpatient Surgery Patient Death Reporting Form submitted by the physician to the Medical Board of California, Central Complaint Unit, within 15 days of the occurrence",
        "A hospital incident report submitted to the state Department of Health",
        "No specific form is required - the death is documented in the medical record only"
      ],
      correctIndex: 1,
      explanation:
        "California BPC §2240 requires that when a patient dies during or as a result of a scheduled procedure in an outpatient setting, the physician must complete the Outpatient Surgery Patient Death Reporting Form and submit it to the Medical Board of California, Central Complaint Unit, within 15 days.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "California's outpatient surgery death reporting is physician-specific (the physician completes the form) and goes to the Medical Board's Central Complaint Unit - not the Department of Health or any other agency.",
        whyWrong: {
          A: "Death certificates are a separate requirement - the specific outpatient surgery death form is required in addition.",
          C: "The Medical Board of California is the reporting recipient - not the state Department of Health.",
          D: "A specific form and timely submission are required - medical record documentation alone is insufficient.",
        },
        operationalContext:
          "Ensure every surgeon at your California outpatient surgery center knows about BPC §2240 and where to obtain the patient death reporting form (available from the Medical Board of California). Designate a risk manager to track each event and ensure the form is submitted within 15 days.",
      },
    },
    {
      id: "asc_val_05",
      question:
        "A California outpatient surgery center has a patient who requires hospital transfer with a stay exceeding 24 hours. Under VAL.460 and California BPC §2240, what reporting is required?",
      options: [
        "Verbal notification to the receiving hospital is sufficient",
        "Parts A and B of the Patient Transfer Reporting Form must be filed in the patient's medical record, AND Part B must be submitted to the Office of Statewide Health Planning and Development (OSHPD) within 15 days",
        "The transfer is reported to the Medical Board of California using the death reporting form",
        "Only the admitting diagnosis at the receiving hospital needs to be documented"
      ],
      correctIndex: 1,
      explanation:
        "California BPC §2240 requires that when a patient is transferred to a hospital for a stay exceeding 24 hours, Parts A and B of the Patient Transfer Reporting Form are filed in the patient's medical record, and Part B must be submitted by the physician to the Office of Statewide Health Planning and Development (OSHPD) within 15 days.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "California requires both internal documentation (Parts A&B in the medical record) AND external reporting (Part B to OSHPD) for transfers exceeding 24 hours. Both actions are required within 15 days of the transfer.",
        whyWrong: {
          A: "Verbal notification alone is not the required reporting mechanism.",
          C: "The death reporting form applies to deaths - the transfer reporting form applies to transfers.",
          D: "The receiving hospital's admitting documentation does not satisfy the ASC's independent reporting obligation.",
        },
        operationalContext:
          "Obtain the California Patient Transfer Reporting Form from the Medical Board of California website. When a transfer exceeding 24 hours occurs, the physician must complete both parts within 15 days. File Parts A&B in the patient's chart and submit Part B to OSHPD. Track submissions in the risk management log.",
      },
    },
    {
      id: "asc_val_06",
      question:
        "Under VAL.200, what California definition must a California outpatient surgery setting meet?",
      options: [
        "The definition of a 'hospital' under California Health and Safety Code §1250",
        "The definition of an 'outpatient setting' under California Health and Safety Code §1248(b)",
        "The definition of a 'clinic' under California BPC §2216",
        "No specific California statutory definition applies to AAAHC accreditation"
      ],
      correctIndex: 1,
      explanation:
        "VAL.200 verifies that the organization meets the definition of 'outpatient setting' under California HSC §1248(b) - any facility, clinic, center, office, or other setting not part of a general acute care facility where anesthesia creating loss-of-protective-reflex risk is used, or where IVF services are offered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "California's definition of 'outpatient setting' determines which facilities must comply with the California outpatient surgery accreditation requirements. Meeting this definition triggers all California VAL standards and the requirement for accreditation by an approved agency.",
        whyWrong: {
          A: "General acute care hospital definition applies to hospitals - California outpatient surgery settings are specifically excluded from the hospital definition.",
          C: "BPC §2216 addresses physician obligations - HSC §1248 defines the 'outpatient setting.'",
          D: "The California statutory definitions are directly applicable and are validated by VAL.200.",
        },
        operationalContext:
          "California facilities should review HSC §1248(b) annually to confirm they continue to meet the outpatient setting definition. If services change (e.g., stopping procedures with loss-of-reflex-level anesthesia), update the AAAHC profile accordingly.",
      },
    },
    {
      id: "asc_val_07",
      question:
        "A New York office-based surgery practice changes its billing structure - previously billing directly under the physician's NPI, it now uses a separate practice management company for all billing. What VAL.220 obligation is triggered?",
      options: [
        "No action is needed - billing changes are administrative, not clinical",
        "The AAAHC profile must be updated to accurately reflect that the practice now has a separate entity for billing purposes, as required by NYS PHL 230-d(1)(a)",
        "A new accreditation application must be filed",
        "The state DOH must approve the billing change before it can be reflected in the AAAHC profile"
      ],
      correctIndex: 1,
      explanation:
        "VAL.220 requires that if the practice has a separate entity for billing purposes, this is accurately reflected in the AAAHC profile. New York PHL 230-d(1)(a) includes billing structure among the required practice information elements. A change in billing structure must be promptly updated in the profile.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "VAL.220 specifically validates billing entity structure for New York office-based surgery centers. A profile that inaccurately states 'no separate billing entity' when one exists is a VAL.220 finding.",
        whyWrong: {
          A: "Billing structure is specifically identified as a required profile element under NYS PHL 230-d - it is not merely administrative.",
          C: "A profile update does not trigger a new application - it is a profile maintenance obligation.",
          D: "State DOH approval of billing changes is a separate regulatory matter - the AAAHC profile update is the organization's own reporting obligation.",
        },
        operationalContext:
          "Any time there is a material operational change (billing entity, ownership, services, key personnel, physical location), trigger a profile review. Use an internal change management checklist that includes 'update AAAHC profile within 30 days' as a required step.",
      },
    },
    {
      id: "asc_val_08",
      question:
        "The VAL category describes standards with ratings of FC, NC, and NA. What does a rating of 'NA' mean for a VAL standard?",
      options: [
        "Not Applicable - the standard does not apply to this organization based on its profile information or characteristics",
        "Non-Adherent - the organization has failed to meet the standard",
        "Not Available - the required documentation was not provided",
        "Near Adherence - the organization has minor gaps in compliance"
      ],
      correctIndex: 0,
      explanation:
        "In the AAAHC rating system, NA (Not Applicable) means the standard does not apply to this specific organization based on its characteristics, services, or location. Many VAL standards are state-specific or service-specific - they receive an NA rating for organizations that do not fall within the standard's scope.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "VAL standards are primarily selective - they apply to specific types of organizations. A non-California ASC would receive NA for all California-specific VAL standards (VAL.190-VAL.460). An organization that does not use a billing collection service would receive NA for VAL.230.",
        whyWrong: {
          B: "NC (Non-Compliant) indicates failure to meet an applicable standard.",
          C: "Documentation unavailability is scored as NC - not NA.",
          D: "Near adherence is not an AAAHC rating category.",
        },
        operationalContext:
          "When preparing for an AAAHC survey, review each VAL standard and determine whether it is applicable to your organization. Document the basis for any NA determinations - the surveyor may ask why a standard was rated NA.",
      },
    },
    {
      id: "asc_val_09",
      question:
        "Under VAL.210, a New York office-based surgery practice must accurately record what information in its AAAHC profile?",
      options: [
        "The practice's malpractice insurance carrier names",
        "The types of health care professionals employed by the practice",
        "The surgical procedures performed in the past 12 months",
        "The practice's annual revenue"
      ],
      correctIndex: 1,
      explanation:
        "VAL.210 requires that the types of health care professionals employed by the practice are accurately recorded in the AAAHC application/profile, per NYS PHL 230-d(1)(a). This includes the categories of licensed professionals (physicians, nurses, PAs, etc.) who work at the practice.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "New York requires specific profile information about the professional composition of office-based surgery practices. VAL.210 validates that this information is accurately reflected in the AAAHC profile used to determine applicable accreditation standards.",
        whyWrong: {
          A: "Malpractice carrier information may be relevant to credentialing but is not the VAL.210 requirement.",
          C: "Procedure types are part of the scope of services - not the specific VAL.210 requirement about personnel.",
          D: "Revenue information is not an AAAHC profile or VAL requirement.",
        },
        operationalContext:
          "Review the AAAHC profile for your New York OBS practice and verify that all current personnel categories (physicians, APRNs, PAs, RNs, etc.) are accurately listed. Update the profile when new provider types are added or when the composition of the practice changes.",
      },
    },
    {
      id: "asc_val_10",
      question:
        "An ASC that has been AAAHC-accredited for three years recently added laparoscopic bariatric surgery to its service line. What VAL obligation arises from this addition?",
      options: [
        "No VAL obligation - services can be expanded without notifying AAAHC until the next survey",
        "The AAAHC profile must be updated to accurately reflect the new services provided - the profile must remain current",
        "A new accreditation application must be submitted for bariatric services",
        "Bariatric services do not require profile updates because they fall under 'surgical services' already listed"
      ],
      correctIndex: 1,
      explanation:
        "The VAL category's core obligation is that the AAAHC profile is accurate and current. Adding a significant new service line - especially one with specific safety, credentialing, and quality requirements like bariatric surgery - is a material change that must be reflected in the profile. Profile accuracy is a continuous obligation, not just a survey-time exercise.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Profile accuracy must be maintained continuously. AAAHC uses profile information to determine applicable standards and prepare surveyors. A profile that doesn't reflect actual services means the survey won't accurately assess compliance with all applicable standards.",
        whyWrong: {
          A: "Waiting until the next survey is not compliant - profile updates should occur promptly when material changes happen.",
          C: "Profile updates are the appropriate mechanism - a new application is not required for service line additions.",
          D: "Bariatric surgery has specific credentialing, safety, and quality requirements that distinguish it from general surgical services - the profile update enables appropriate survey preparation.",
        },
        operationalContext:
          "Develop an internal service expansion checklist that includes: (1) update AAAHC profile, (2) verify applicable selective standards for the new service, (3) ensure credentials and privileges for new services are in place, (4) update scope of services in the governing body-approved document.",
      },
    },
    {
      id: "asc_val_11",
      question:
        "VAL.440 requires documentation that California forms for deaths or transfers per BPC §2240 were available. What does 'documentation was reviewed' mean in the context of this VAL standard?",
      options: [
        "The AAAHC surveyor reviewed the forms during the survey",
        "The organization reviewed its own compliance with the reporting requirement and has documentation available to demonstrate that required forms were available and used when applicable events occurred",
        "The Medical Board of California reviewed and confirmed receipt of the forms",
        "Documentation review is not part of the VAL standard - only form availability is assessed"
      ],
      correctIndex: 1,
      explanation:
        "VAL.440 requires that the required forms were available AND that the documentation was reviewed - meaning the organization has a record of its compliance with the reporting requirement. If a reportable event occurred, the completed form and submission documentation should be in the risk management records.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Having the forms available is the minimum - demonstrating that they were used correctly when required events occurred is what the 'documentation was reviewed' element addresses. The organization must show it actively tracked and complied with reporting requirements, not just that it had blank forms on file.",
        whyWrong: {
          A: "The surveyor's review of documents is the survey activity - but VAL.440 requires the organization to have the documentation, not just to present it at survey.",
          C: "Medical Board confirmation may provide some evidence, but the organization's own records of reporting compliance are the primary documentation.",
          D: "Both form availability and documentation of compliance are required elements of VAL.440.",
        },
        operationalContext:
          "Maintain a California reporting compliance log: list each reportable event, the date detected, the date reported, the form used, and the submission confirmation. This log serves as the 'documentation was reviewed' evidence for VAL.440 and related standards.",
      },
    },
    {
      id: "asc_val_12",
      question:
        "Under VAL.230, what must a New York office-based surgery practice accurately reflect in its AAAHC profile regarding billing?",
      options: [
        "The name and contact information of its largest insurance payer",
        "Whether the practice uses a billing and collection service for all accounts receivable",
        "The percentage of revenue from each payer type",
        "Whether the practice offers self-pay options"
      ],
      correctIndex: 1,
      explanation:
        "VAL.230 requires that if the practice uses a billing and collection service for all accounts receivable, this is accurately reflected in the organization's AAAHC application/profile, per NYS PHL 230-d(1)(a).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "New York PHL 230-d(1)(a) requires specific practice profile information including billing structure. Using a billing and collection service is one of the specific practice characteristics that must be accurately reported.",
        whyWrong: {
          A: "Payer contact information is not what VAL.230 addresses.",
          C: "Revenue breakdown by payer type is not the VAL.230 requirement.",
          D: "Self-pay options are not specifically addressed by VAL.230.",
        },
        operationalContext:
          "Review your AAAHC profile to confirm it accurately reflects your billing arrangement. If you use an outside billing company for all accounts receivable, ensure VAL.230 is marked accordingly in the profile.",
      },
    },
    {
      id: "asc_val_13",
      question:
        "What is the relationship between the VAL standards and the other AAAHC standard categories (GOV, CMC, IPC, etc.)?",
      options: [
        "VAL standards override other AAAHC standards when conflicts exist",
        "VAL standards are supplementary - they validate profile information and state-specific requirements without replacing the Universal and clinical Selective standards that all organizations must meet",
        "Organizations that meet all VAL standards are exempt from inspection under other standard categories",
        "VAL is the first category assessed - organizations with VAL deficiencies are not assessed on other standards"
      ],
      correctIndex: 1,
      explanation:
        "VAL standards are supplementary - they verify that organizational profile information is accurate and assess state-specific regulatory compliance. They exist alongside, not instead of, the Universal and clinical Selective standards. An organization must meet both VAL requirements and all applicable Universal/Selective standards.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "VAL and other standards serve different functions. Universal and Selective standards assess quality of care and operations; VAL validates profile accuracy and state compliance. Both must be met for full accreditation compliance.",
        whyWrong: {
          A: "VAL standards do not override clinical standards - they serve a different verification function.",
          C: "VAL compliance does not exempt organizations from assessment under other categories.",
          D: "Survey assessment encompasses all applicable standards - VAL findings do not stop assessment of other categories.",
        },
        operationalContext:
          "In pre-survey preparation, review both the applicable VAL standards (based on your profile characteristics and state) and the Universal/Selective standards applicable to your services. Create a comprehensive preparation checklist that addresses all applicable standards.",
      },
    },
    {
      id: "asc_val_14",
      question:
        "A California outpatient surgery facility experiences a death but does not file the Outpatient Surgery Patient Death Reporting Form within 15 days, instead relying on its standard incident report process. What VAL.450 finding results?",
      options: [
        "No finding - incident reports are equivalent to California-required forms",
        "NC (Non-Compliant) - the California-required reporting form was not submitted within 15 days as required by BPC §2240",
        "PC (Partial Compliance) - the incident report partially satisfies the California requirement",
        "The finding depends on whether the patient's family was notified"
      ],
      correctIndex: 1,
      explanation:
        "VAL.450 requires that the California-required Outpatient Surgery Patient Death Reporting Form is submitted to the Medical Board of California within 15 days. Internal incident reports do not satisfy this external reporting requirement. Failure to file the required form within 15 days results in a non-compliant (NC) finding.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "California's external reporting requirements are independent of internal incident reporting processes. VAL.450 specifically assesses whether the required external reports were completed and submitted - internal documentation alone does not satisfy the state reporting obligation.",
        whyWrong: {
          A: "Internal incident reports and California-required external reports serve different purposes and different recipients - they are not equivalent.",
          C: "Partial compliance with an external reporting requirement does not occur - either the required form was submitted on time or it was not.",
          D: "The finding is based on the reporting requirement - it is not dependent on family notification.",
        },
        operationalContext:
          "Establish a California reporting compliance procedure: immediately upon any patient death or hospital transfer exceeding 24 hours, the risk manager initiates the applicable California reporting forms, assigns the responsible physician to complete them, and tracks the 15-day submission deadline.",
      },
    },
    {
      id: "asc_val_15",
      question:
        "An ASC realizes during survey preparation that its AAAHC profile still lists a physician who retired 18 months ago. What does this represent from a VAL perspective?",
      options: [
        "A minor administrative error with no compliance implications",
        "An inaccuracy in the AAAHC profile that must be corrected - ongoing profile accuracy is a VAL obligation",
        "Only a credentialing concern - not a VAL issue",
        "The profile may list retired physicians as long as they are marked as inactive"
      ],
      correctIndex: 1,
      explanation:
        "VAL requires that the AAAHC profile accurately reflects the organization's current operational status - including personnel. A profile listing a retired physician as a current provider is an inaccuracy that should have been corrected when the physician retired. This is a VAL profile accuracy finding.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Profile accuracy is a continuous obligation - not just a survey-time exercise. Material changes (personnel departures, new services, location changes) must be reported to AAAHC promptly, not accumulated until the next survey.",
        whyWrong: {
          A: "Profile inaccuracies are VAL findings - they affect the credibility of the organization's self-reporting.",
          C: "While credentialing records also need to reflect the retirement, the AAAHC profile inaccuracy is specifically a VAL concern.",
          D: "The profile must reflect current operational reality - inactive listings of departed practitioners are still inaccurate representations.",
        },
        operationalContext:
          "When any physician, clinical director, or key personnel change occurs, initiate a profile review as part of the offboarding process. Update the AAAHC profile within 30 days of any material change.",
      },
    },
    {
      id: "asc_val_16",
      question:
        "Under California HSC §1248, which types of settings are EXCLUDED from the definition of 'outpatient setting' that triggers California VAL requirements?",
      options: [
        "Ambulatory surgery centers with fewer than five ORs",
        "Settings where anxiolytics and analgesics are administered in doses that do not place the patient at risk for loss of protective reflexes",
        "Solo physician offices performing any surgical procedures",
        "All settings that are not part of a general acute care hospital"
      ],
      correctIndex: 1,
      explanation:
        "California HSC §1248(b) specifically excludes from the 'outpatient setting' definition: settings where anxiolytics and analgesics are administered in compliance with community standards in doses that do not have the probability of placing the patient at risk for loss of protective reflexes. Minimal sedation settings are excluded from the California outpatient surgery regulatory framework.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The protective reflex risk threshold is the dividing line. Minimal sedation - low-dose anxiolytics or analgesics that don't impair reflexes - does not trigger California's outpatient surgery regulatory requirements. Only anesthesia that risks reflex loss triggers VAL.190 and VAL.200.",
        whyWrong: {
          A: "OR count is not a criterion in the California outpatient setting definition.",
          C: "Solo physician offices performing procedures with reflex-impairing anesthesia do trigger California requirements - the exclusion is based on anesthesia type, not practice size.",
          D: "Not all non-hospital settings trigger California requirements - the anesthesia type and reflex-loss risk determine applicability.",
        },
        operationalContext:
          "Document the anesthesia levels used at your California facility. If only local anesthesia, peripheral nerve blocks, or minimal sedation (without reflex loss risk) is used, your facility may not meet the California 'outpatient setting' definition - and California VAL standards may be marked NA. Consult legal counsel if this determination is uncertain.",
      },
    },
    {
      id: "asc_val_17",
      question:
        "What is the reporting timeframe under California BPC §2216.3 for an adverse event that represents an ONGOING URGENT OR EMERGENT THREAT to patient welfare?",
      options: [
        "Within five days of detection",
        "Within 24 hours of detection",
        "Within 15 days of detection",
        "Before the end of the business day on which the event was detected"
      ],
      correctIndex: 1,
      explanation:
        "California BPC §2216.3 establishes a 24-hour reporting timeframe specifically for adverse events that represent an ongoing urgent or emergent threat to the welfare, health, or safety of patients, personnel, or visitors. Standard adverse events have a five-day reporting window.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 24-hour timeframe for ongoing threats reflects the urgency of protecting current and future patients from a continuing risk. Standard five-day reporting is insufficient when an active threat remains in place.",
        whyWrong: {
          A: "Five days applies to standard adverse events - ongoing threats require 24-hour reporting.",
          C: "15 days is the timeframe for death and transfer-related reporting - not adverse event reporting.",
          D: "Before end of business day is not the statutory standard - 24 hours is the specific requirement.",
        },
        operationalContext:
          "Train risk management staff to immediately classify adverse events: Is this an ongoing threat? Examples: an unsterilized instrument that has been used across multiple cases (ongoing exposure risk), a medication error pattern that may affect future patients, a facility condition creating ongoing patient hazard. If yes → 24-hour reporting to Medical Board.",
      },
    },
    {
      id: "asc_val_18",
      question:
        "VAL.400 (California) requires written policies for emergency transfer of patients to a hospital. What must these policies ensure?",
      options: [
        "A financial agreement with the receiving hospital must be in place",
        "Patients can be transferred safely and without delay to a hospital capable of treating the patient's condition - with clear protocols for initiating the transfer",
        "Only patients with government insurance require transfer protocols",
        "Transfer policies are optional if the ASC has a physician on duty at all times"
      ],
      correctIndex: 1,
      explanation:
        "VAL.400 (California) requires written emergency transfer policies ensuring that patients can be safely and promptly transferred to a hospital capable of providing the needed care. These policies must address: criteria for transfer, how transfer is initiated, what information accompanies the patient, and the receiving facility relationship.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergency transfer capability is a patient safety requirement. California outpatient surgery settings must have documented, tested transfer protocols because complications requiring hospital-level care are an inherent risk of surgery and anesthesia.",
        whyWrong: {
          A: "A financial agreement is a helpful operational tool but is not what VAL.400 specifically requires - the clinical transfer protocol is the requirement.",
          C: "Transfer protocols apply to all patients regardless of payer status.",
          D: "Physician presence does not substitute for a documented transfer protocol - even with a physician present, a written protocol ensures consistent, appropriate transfer activation.",
        },
        operationalContext:
          "Develop a written emergency transfer protocol: (1) criteria for transfer activation, (2) calling 911 and the receiving hospital simultaneously, (3) patient stabilization while awaiting transport, (4) preparation of transfer documents (clinical summary), (5) escort of patient to the ambulance, (6) communication with receiving ED physician. Test annually as part of emergency drills.",
      },
    },
    {
      id: "asc_val_19",
      question:
        "Under VAL.370 (California), what must the organization document regarding emergency equipment?",
      options: [
        "Emergency equipment must be available at all times and inspected per the organization's written inspection schedule",
        "Emergency equipment is only required if the facility has an ICU",
        "Emergency equipment must be new - equipment purchased more than five years ago must be replaced",
        "Emergency equipment documentation is maintained by the anesthesiologist only"
      ],
      correctIndex: 0,
      explanation:
        "VAL.370 (California) requires that appropriate emergency equipment is available at all times and that the organization maintains a written inspection schedule - and documentation of inspections - to ensure the equipment is functional when needed.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Availability alone is not sufficient - emergency equipment must be verified as functional through regular inspection. A crash cart that has never been checked may have expired medications or depleted battery defibrillator pads.",
        whyWrong: {
          B: "Emergency equipment requirements apply to all outpatient surgery settings - not only those with ICUs.",
          C: "Equipment age alone is not the standard - current functionality, verified through inspection, is what matters.",
          D: "Equipment inspection documentation is an organizational responsibility that should not be limited to any single role.",
        },
        operationalContext:
          "Create a monthly emergency equipment inspection log for each crash cart, defibrillator, and emergency medication kit. Include: inspection date, inspector initials, medication expiration dates checked, defibrillator test result, and any corrective actions. File completed logs in the safety program records.",
      },
    },
    {
      id: "asc_val_20",
      question:
        "An ASC operating in both California and New York must comply with VAL standards for both states. How should the organization approach this dual-state compliance?",
      options: [
        "Only California standards apply - New York standards are less stringent",
        "The organization must comply with all applicable VAL standards from both states - each state's requirements apply to operations in that state",
        "The organization may choose which state's standards to follow",
        "Multi-state ASC operators are automatically exempt from VAL requirements"
      ],
      correctIndex: 1,
      explanation:
        "VAL standards apply based on the state in which the facility operates. A multi-state organization must comply with the applicable VAL standards for each state - California standards for California operations and New York standards for New York operations. There is no exemption or standard-selection option.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "State regulatory requirements apply based on the jurisdiction - operating in multiple states means complying with multiple sets of state-specific requirements. AAAHC surveys assess compliance with all applicable VAL standards based on the specific facility's location.",
        whyWrong: {
          A: "Both states have applicable VAL standards - one cannot override the other.",
          C: "Organizations cannot choose which applicable laws to follow - all applicable requirements must be met.",
          D: "Multi-state operation does not create any VAL exemption.",
        },
        operationalContext:
          "For multi-state organizations, create a compliance matrix: list each state in which facilities operate, and map the applicable VAL standards for each state. Assign state-specific compliance officers responsible for tracking and meeting each jurisdiction's requirements.",
      },
    },
  ],
};
