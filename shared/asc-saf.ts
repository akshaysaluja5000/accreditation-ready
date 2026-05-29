import type { Level } from "./schema";

export const ascSafLevel: Level = {
  id: "asc_saf",
  module: "asc",
  name: "Safety",
  description: "AAAHC v44 SAF - risk management program, incident/adverse event definitions, hazard management, workplace safety, and fire protection.",
  icon: "ShieldAlert",
  color: "hsl(0, 70%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "SAF: Safety",
    plainLanguageSummary:
      "The SAF category requires ASCs to implement a comprehensive safety program that prevents injury, manages hazards, protects patients and staff, and meets all applicable local, state, and federal safety requirements. Key components include a written risk management program with defined incident and adverse event definitions, a system for reviewing and acting on incidents, environmental hazard controls, product recall procedures, expiration date monitoring, hazardous waste management, bloodborne pathogen protections, occupational chemical exposure reduction, and fire prevention.",
    keyOperationalExpectations: [
      "A written risk management program includes policies addressing impaired providers, after-hours coverage, and patient dismissal.",
      "Incidents and adverse events are formally defined, and all are reviewed with corrective actions documented.",
      "Written safety program addresses medication error prevention, fall prevention, skin/tissue injury prevention, and food safety.",
      "A product recall policy identifies sources, staff notification, patient impact determination, and response procedures.",
      "All products with expiration dates are monitored and disposed of per policy and manufacturer guidelines.",
      "Bloodborne pathogen procedures include hepatitis B program, post-exposure protocols, and appropriate recordkeeping.",
    ],
    commonRiskPoints: [
      "Incidents are logged but never analyzed to identify root causes or systemic improvements.",
      "Product recall policy exists but staff cannot describe how they are notified of recalled items.",
      "Expiration date monitoring is informal - no systematic tracking or documentation of monitoring activities.",
      "Fire safety training records do not cover all staff, or drills have not occurred within the past year.",
    ],
    aaahcStandards: ["SAF.100", "SAF.110", "SAF.120", "SAF.130", "SAF.140", "SAF.150", "SAF.160", "SAF.170", "SAF.240", "SAF.250", "SAF.260", "SAF.270"],
  },
  studyMaterial: [
    {
      title: "SAF.100 / SAF.110 - Risk Management Program: Written Policies Required",
      content:
        "The risk management program must include written policies addressing: methods for dismissing or refusing care to patients, managing incapacitated health care professionals during procedures, addressing impaired health care professionals, documentation of after-hours coverage responsibility, documentation of after-hours clinical advice provided, and restrictions on observers in patient care areas (with consent requirements). Additionally, policies must address: near-miss reporting encouragement, reportable event communication, periodic litigation review, patient complaint review with defined response times, notification to the liability carrier of adverse events, and periodic clinical record review.",
      keyPoint:
        "SAF.100 and SAF.110 together require written risk management policies covering both patient safety and organizational risk topics. Six elements in SAF.100, seven in SAF.110.",
    },
    {
      title: "SAF.120 / SAF.130 - Defining and Acting on Incidents and Adverse Events",
      content:
        "SAF.120 requires the risk management program to formally define 'incident' and 'adverse event.' An incident includes any clinical or non-clinical occurrence not consistent with routine care, including near-miss events. An adverse event includes unexpected occurrences causing death or serious injury not related to the patient's natural disease course, process variations with risk of serious adverse outcome, breaches in medical/administrative care, and drug/material reactions. SAF.130 requires that all incidents and adverse events are reviewed, acted upon when appropriate, analyzed to identify underlying causes, and that improvements are implemented when indicated.",
      keyPoint:
        "SAF.120 = definitions; SAF.130 = action. All incidents must be reviewed, near-misses must be analyzed for systemic factors, and improvements must be implemented when root cause analysis indicates they are needed.",
    },
    {
      title: "SAF.140 - The Written Safety Program",
      content:
        "SAF.140 requires a written safety program that addresses the environment of care and meets or exceeds local, state, and federal safety requirements. The program must include processes for: managing identified hazards and near misses (SAF.140.10); reducing and avoiding medication errors (SAF.140.20); preventing falls and other physical injuries (SAF.140.30); preventing skin and tissue injury from chemicals, cleaning solutions, and hazardous exposure (SAF.140.40); and ensuring food and drink for patient use is handled in compliance with local, state, and federal guidelines (SAF.140.50, NA if not applicable).",
      keyPoint:
        "SAF.140's five program elements span hazard management, medication errors, falls, chemical injury, and food safety. All five must be present in the written safety program.",
    },
    {
      title: "SAF.150 / SAF.160 - Product Recall and Expiration Date Programs",
      content:
        "SAF.150 requires a written recall policy covering: sources of recall information (FDA, CDC, manufacturers); how staff are notified; how the organization determines if a recalled product is present or was given to patients; response to recalled products; disposition/return; and patient notification as appropriate. SAF.160 requires a written policy for monitoring and disposing of products with manufacturer expiration dates - covering all products, reagents, medications, and supplies - with a process for ensuring currency and compliant disposal of expired items.",
      keyPoint:
        "Recalls require six policy elements (source, staff notification, product search, response, disposition, patient notification). Expiration monitoring requires a written policy AND documented monitoring activities.",
    },
    {
      title: "SAF.250 / SAF.260 - Protecting Healthcare Workers from Biologic Hazards",
      content:
        "SAF.250 requires governing-body-approved occupational health and safety policies, an annually updated written exposure control plan, an immunization program covering agents of risk to staff and patients per the IPC risk assessment, and a TB detection and protection plan following applicable regulatory requirements or nationally recognized guidelines. SAF.260 specifically addresses bloodborne pathogen procedures: a hepatitis B immunization program; post-exposure evaluation and treatment; appropriate training on hazards; and appropriate recordkeeping. Personnel health records must document acceptance or declination of the hepatitis B vaccination.",
      keyPoint:
        "SAF.250 = biologic hazard framework (exposure control plan, immunizations, TB program); SAF.260 = bloodborne pathogen specifics (hep B program, post-exposure, training, recordkeeping). Both are Universal/Tier 2 standards.",
    },
  ],
  questions: [
    {
      id: "asc_saf_01",
      question:
        "SAF.100.20 requires a written policy addressing what situation involving a health care professional?",
      options: [
        "Situations where a health care professional requests additional training",
        "Managing a situation where a health care professional becomes incapacitated during a medical or surgical procedure",
        "Health care professional scheduling conflicts on weekends",
        "When a health care professional is absent for more than three consecutive days",
      ],
      correctIndex: 1,
      explanation:
        "SAF.100.20 specifically requires written policies addressing the management of situations where a health care professional becomes incapacitated during a medical or surgical procedure. This is a patient safety emergency scenario that requires a pre-defined response.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Incapacitation of a provider during an active procedure (cardiac event, syncope) requires an immediate, practiced response. The written policy ensures staff know exactly what steps to take - not improvise under pressure.",
        whyWrong: {
          A: "Training requests are an administrative HR matter, not a SAF.100.20 policy requirement.",
          C: "Scheduling conflicts are operational management matters.",
          D: "Extended absences are covered by HR and ADM policies, not SAF.100.20.",
        },
        operationalContext:
          "Develop a 'Provider Emergency During Procedure' protocol: who calls 911, who continues monitoring the patient, who retrieves the crash cart, who notifies the administrator. Practice this scenario in annual emergency drills.",
      },
    },
    {
      id: "asc_saf_02",
      question:
        "SAF.120 defines an 'adverse event.' Which of the following meets the SAF.120 definition?",
      options: [
        "A patient who arrives late for their scheduled procedure",
        "An unexpected death during a health care encounter not related to the patient's natural disease course",
        "A scheduling error that requires rescheduling the patient's procedure",
        "A staff member calling in sick on a busy surgery day",
      ],
      correctIndex: 1,
      explanation:
        "SAF.120.20.1 defines an adverse event as including an unexpected occurrence during a health care encounter involving patient death or serious physical or psychological injury, not related to the natural course of the patient's illness or underlying condition.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The key elements of the adverse event definition are: unexpected occurrence, during a health care encounter, involving death or serious injury, AND not attributable to the patient's underlying disease course.",
        whyWrong: {
          A: "Patient tardiness is an access/scheduling issue, not an adverse event.",
          C: "Scheduling errors are administrative incidents, not clinical adverse events.",
          D: "Staff illness is an operational event, not a patient adverse event.",
        },
        operationalContext:
          "Post the SAF.120 adverse event definition in the risk management policy and include it in staff training. All staff must be able to recognize what constitutes an adverse event requiring reporting.",
      },
    },
    {
      id: "asc_saf_03",
      question:
        "SAF.130 requires that when adverse events and near-miss events are analyzed, what specifically must be identified?",
      options: [
        "The staff member most responsible for the event",
        "Underlying basic or causal factors and potential improvements in processes or systems",
        "The patient's financial responsibility for any resulting complications",
        "Whether the event meets the legal definition of malpractice",
      ],
      correctIndex: 1,
      explanation:
        "SAF.130.30 requires that adverse events and near-miss events are analyzed to identify the underlying basic or causal factors and potential improvements in processes or systems that would reduce the likelihood of future events.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "SAF.130 takes a systems approach to adverse event analysis - the goal is identifying systemic process failures that can be improved, not assigning blame to individuals. This is the root cause analysis (RCA) model of safety improvement.",
        whyWrong: {
          A: "Identifying a responsible individual is not the SAF.130 purpose - systemic factors are the target.",
          C: "Patient financial responsibility is a billing/risk management issue, not a SAF.130 analysis requirement.",
          D: "Malpractice determination is a legal function separate from the SAF.130 internal improvement analysis.",
        },
        operationalContext:
          "Implement a structured event analysis process using a Root Cause Analysis (RCA) framework. Document contributing factors in process, equipment, training, and environment categories. Assign corrective actions to address each identified factor.",
      },
    },
    {
      id: "asc_saf_04",
      question:
        "SAF.140.20 requires the safety program to include processes to reduce and avoid what specific type of safety event?",
      options: [
        "Fire events",
        "Medication errors",
        "Workplace violence",
        "Equipment theft",
      ],
      correctIndex: 1,
      explanation:
        "SAF.140.20 specifically requires the safety program to include processes to reduce and avoid medication errors. This is one of five required safety program elements under SAF.140.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication errors are a primary patient safety concern in ASC settings. The safety program must include concrete processes - not just a general commitment - to reduce medication error risk.",
        whyWrong: {
          A: "Fire protection is addressed in SAF.240 - it is a separate safety program element.",
          C: "Workplace violence/external threats are mentioned in SAF.140 guidance notes but not as the specific SAF.140.20 element.",
          D: "Equipment theft is a security matter, not a SAF.140.20 safety program element.",
        },
        operationalContext:
          "Document medication error reduction processes in the written safety program: high-alert medication lists, LASA drug precautions, medication labeling policy, pharmacist review, and reconciliation processes.",
      },
    },
    {
      id: "asc_saf_05",
      question:
        "SAF.150 requires a product recall policy. Which of the following is one of the required elements of that policy?",
      options: [
        "A list of all recalled products in the past five years",
        "How the organization determines if a recalled product is present or has been given or administered to patients",
        "The governing body's personal liability for recalled product injuries",
        "A contract with a recall monitoring service",
      ],
      correctIndex: 1,
      explanation:
        "SAF.150.30 specifically requires that the recall policy addresses how the organization determines if a recalled product is present or has been given or administered to patients. This patient exposure determination step is critical for triggering appropriate response.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Determining patient exposure is the most critical step in a recall response - it determines whether patient notification is needed (SAF.150.60). Without this step, the organization cannot protect affected patients.",
        whyWrong: {
          A: "Historical recall lists may be useful but are not one of the six required policy elements.",
          C: "Governing body liability is a legal matter, not a SAF.150 policy element.",
          D: "Recall monitoring contracts may be used but are not specifically required by SAF.150.",
        },
        operationalContext:
          "Build a recall response checklist: (1) receive recall notice; (2) search current inventory and supply records; (3) search patient administration records for the affected lot number; (4) determine patient exposure; (5) implement response and patient notification as indicated; (6) document all steps.",
      },
    },
    {
      id: "asc_saf_06",
      question:
        "SAF.160 requires monitoring of products with expiration dates. Which statement best describes the documentation requirement?",
      options: [
        "Verbal confirmation from staff that they checked dates is sufficient",
        "A written policy must describe the monitoring process AND monitoring activities must be documented",
        "Expiration monitoring is documented only when expired products are found",
        "Expiration monitoring applies only to medications, not to reagents, solutions, or supplies",
      ],
      correctIndex: 1,
      explanation:
        "SAF.160 requires both a written policy (SAF.160.10) describing the monitoring process and actual documentation that monitoring activities are occurring (SAF.160.20). Finding no expired products is acceptable only when there is evidence that monitoring happened.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The monitoring must be documented - not just performed. Without documentation, a surveyor cannot determine whether monitoring occurred or products were simply not checked.",
        whyWrong: {
          A: "Verbal confirmation is not documented evidence of monitoring.",
          C: "Documentation must occur regardless of whether expired products are found - the finding of 'no expired products' is the documentation.",
          D: "SAF.160 applies to all products with manufacturer expiration dates: medications, reagents, solutions, supplies, and food products.",
        },
        operationalContext:
          "Establish a monthly 'expiration date check' log for each storage area (medication room, supply carts, procedure rooms, clean utility rooms). Have staff initial and date the log when the check is complete, and document any expired items found and removed.",
      },
    },
    {
      id: "asc_saf_07",
      question:
        "Under SAF.170, what must be in place for hazardous materials and wastes?",
      options: [
        "A verbal safety briefing for new employees about chemical hazards",
        "A system for proper identification, management, handling, transport, and disposal of hazardous materials and wastes, with staff demonstrating knowledge of applicable laws",
        "A list of hazardous chemicals posted only in the storage area",
        "Hazardous waste management is delegated entirely to the contracted waste disposal company",
      ],
      correctIndex: 1,
      explanation:
        "SAF.170 requires a comprehensive system: proper labeling of hazardous materials and waste (SAF.170.10), management and disposal in accordance with prevailing laws and regulations (SAF.170.20), and staff responsible for hazardous waste management demonstrating knowledge of applicable laws (SAF.170.30).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "SAF.170 has three elements: labeling, compliant management/disposal, and demonstrated staff knowledge. All three must be present and documented.",
        whyWrong: {
          A: "A verbal briefing is not a documented system.",
          C: "A chemical list in one location does not constitute a management system for identification, handling, and disposal.",
          D: "Delegation to a contractor does not eliminate the organization's responsibility for labeling and staff knowledge requirements.",
        },
        operationalContext:
          "Maintain a current Safety Data Sheet (SDS) binder accessible to all staff. Train all relevant staff on hazardous waste handling per OSHA standards. Document contractor credentials and manifests for regulated medical waste disposal.",
      },
    },
    {
      id: "asc_saf_08",
      question:
        "SAF.240 addresses fire prevention. What are the two main program elements explicitly required?",
      options: [
        "Monthly fire extinguisher inspections and quarterly fire drills",
        "Policies to educate staff in fire prevention and fire hazard reduction, AND requiring fire safety in safety surveillance activities",
        "Annual fire marshal inspections and a posted evacuation map",
        "Automatic sprinkler systems and smoke detectors in all rooms",
      ],
      correctIndex: 1,
      explanation:
        "SAF.240.10 requires policies to educate medical staff, employees, volunteers, and other personnel in fire prevention and fire hazard reduction. SAF.240.20 requires that fire safety, fire prevention, and fire drills are included in the surveillance activities of safety and risk management personnel.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "SAF.240 requires two elements: (1) education policies for fire prevention, and (2) inclusion of fire safety in surveillance activities. Documentation of both - training records and surveillance reports - is needed.",
        whyWrong: {
          A: "Extinguisher inspections and fire drills are good practices but not specifically what SAF.240 requires as its two main elements.",
          C: "Fire marshal inspections and evacuation maps are useful but are not the specific SAF.240 requirements.",
          D: "Building infrastructure requirements (sprinklers, detectors) are life safety code matters - not the SAF.240 policy requirements.",
        },
        operationalContext:
          "Create a fire safety training curriculum for all staff covering RACE (Rescue, Alarm, Confine, Extinguish/Evacuate). Document annual training completion. Include fire drill debriefs in safety surveillance reports.",
      },
    },
    {
      id: "asc_saf_09",
      question:
        "SAF.110.10 requires that risk management policies address what near-miss practice?",
      options: [
        "Penalizing staff who cause near-miss events to deter future occurrences",
        "Encouraging the reporting of near-miss events",
        "Reporting all near-miss events to the state health department within 24 hours",
        "Near-miss events are confidential and should not be documented",
      ],
      correctIndex: 1,
      explanation:
        "SAF.110.10 requires that risk management policies address encouraging the reporting of near-miss events. A just culture that encourages reporting (rather than punishing it) enables the organization to learn from near-misses before they become adverse events.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Near-miss reporting is a leading indicator of system vulnerability. Organizations that encourage and act on near-miss reports can prevent adverse events before they harm patients. A blame-based culture suppresses reporting and eliminates this learning opportunity.",
        whyWrong: {
          A: "Penalizing near-miss reporters suppresses the very information needed to prevent adverse events - this violates just culture principles.",
          C: "State reporting requirements vary by jurisdiction but SAF.110.10 focuses on internal reporting encouragement, not mandatory external reporting of near-misses.",
          D: "Near-miss documentation is essential - it is the organizational evidence of proactive risk management.",
        },
        operationalContext:
          "Implement a non-punitive, anonymous near-miss reporting system. Publicly recognize teams that identify and report near-misses as safety champions. Present near-miss trends to the safety committee to drive proactive improvement.",
      },
    },
    {
      id: "asc_saf_10",
      question:
        "SAF.250.20 requires that the exposure control plan be reviewed and updated at what interval?",
      options: [
        "Every three years or when a significant change occurs",
        "At least annually, including an evaluation of safer medical devices and technology changes",
        "Only after a documented bloodborne pathogen exposure incident",
        "When OSHA issues new bloodborne pathogen standards",
      ],
      correctIndex: 1,
      explanation:
        "SAF.250.20 requires that the written exposure control plan is reviewed and updated at least annually, including evaluation of the availability of safer medical devices and changes in technology.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Annual review of the exposure control plan - and specifically evaluation of safer devices - is an OSHA Bloodborne Pathogens Standard (29 CFR 1910.1030) requirement incorporated into AAAHC SAF.250. Technology evaluation must be documented, not just assumed.",
        whyWrong: {
          A: "Three-year intervals do not meet the annual review requirement.",
          C: "Annual review is required regardless of exposure incidents.",
          D: "Review is required annually, not only when OSHA issues new regulations.",
        },
        operationalContext:
          "Conduct the annual exposure control plan review in the fall, document evaluation of safer sharps devices (safety syringes, needleless IV connectors), and obtain front-line worker input. Document the review and any updates in a signed, dated revision history.",
      },
    },
    {
      id: "asc_saf_11",
      question:
        "SAF.260 requires bloodborne pathogen procedures including a hepatitis B immunization program. What must personnel health records document about hepatitis B vaccination?",
      options: [
        "Only the date of the first dose of the vaccine series",
        "Evidence of employee acceptance or declination of the immunization program",
        "Only documentation if the employee declined vaccination",
        "The specific lot number of each hepatitis B vaccine administered",
      ],
      correctIndex: 1,
      explanation:
        "SAF.260 guidance and SAF.250 require that personnel health records contain evidence of each employee's acceptance or declination of the hepatitis B immunization program. Both acceptance and declination must be documented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "OSHA requires documentation of both acceptance (with vaccination dates) and declination (with signed declination form) for hepatitis B vaccination. The absence of documentation - in either direction - is a compliance gap.",
        whyWrong: {
          A: "A single date is not sufficient - the full series and titer results (if obtained) should be documented, or a formal declination if refused.",
          C: "Both acceptance and declination must be documented - not just declinations.",
          D: "Lot numbers may appear in medication administration records but are not specifically required in the personnel file documentation of immunization acceptance/declination.",
        },
        operationalContext:
          "For each employee, include in the health record: (1) hepatitis B vaccination documentation including dates and titer result, or (2) signed OSHA-formatted declination statement. Review completeness during annual personnel file audits.",
      },
    },
    {
      id: "asc_saf_12",
      question:
        "SAF.270 requires a program to assess and reduce risks from occupational chemical exposures. What is one required program element?",
      options: [
        "Monthly chemical purchasing audits",
        "An annual hazard assessment of chemicals used in the workplace, conducted at least annually and as new products are added",
        "Elimination of all cleaning chemicals from the facility",
        "Chemical safety is governed only by OSHA - no organizational policy is needed",
      ],
      correctIndex: 1,
      explanation:
        "SAF.270.10 requires a program including a hazard assessment of chemicals used in the workplace, conducted at least annually and as new products are added. This assessment identifies chemical risks and drives the protective measures implemented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The annual hazard assessment is the foundation of the chemical safety program. When new products are introduced, an interim assessment must be conducted - not waited for until the annual review.",
        whyWrong: {
          A: "Monthly purchasing audits are operational procurement matters, not SAF.270 requirements.",
          C: "Eliminating cleaning chemicals is impractical and not the standard - the standard requires assessment and control measures.",
          D: "OSHA regulations establish minimum requirements; organizations must implement programs to meet them - the policy is required.",
        },
        operationalContext:
          "Use an annual OSHA chemical hazard assessment tool. Review all chemicals on your SDS list, identify exposure risks, document engineering controls (ventilation, fume hoods), PPE requirements, and training completed.",
      },
    },
    {
      id: "asc_saf_13",
      question:
        "SAF.280 requires that work injuries and illnesses are appropriately documented. Which regulatory framework governs the recordkeeping requirements?",
      options: [
        "JCAHO recordkeeping standards",
        "State and federal reporting requirements including OSHA",
        "The organization's internal HR policy alone",
        "Workers' compensation insurance requirements alone",
      ],
      correctIndex: 1,
      explanation:
        "SAF.280 requires that work injury and illness records are documented and maintained in accordance with state and federal reporting requirements and any other insurance requirements - including OSHA recordkeeping (e.g., OSHA 300 log).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "OSHA requires specific work injury and illness recordkeeping for covered employers (OSHA 300 Log, 300A Annual Summary, 301 Incident Report). SAF.280 aligns with these regulatory requirements.",
        whyWrong: {
          A: "JCAHO is a different accreditation body - AAAHC standards reference OSHA and state/federal law.",
          C: "Internal HR policy alone is insufficient - OSHA and state requirements must be met.",
          D: "Workers' compensation is one aspect - OSHA recordkeeping requirements are separate and may apply independently.",
        },
        operationalContext:
          "Maintain the OSHA 300 Log, complete a 301 Incident Report for each work injury/illness, and post the 300A Annual Summary each February 1 through April 30. Store records for five years.",
      },
    },
    {
      id: "asc_saf_14",
      question:
        "SAF.290 requires a proactive risk assessment before beginning construction, demolition, or renovation in an occupied facility. What must this assessment identify?",
      options: [
        "Only the cost of the renovation project",
        "Potential risks to occupant health and safety, actions to eliminate/mitigate those risks, and provisions for ongoing monitoring",
        "The architectural firm's license number",
        "Risk assessment for construction is the responsibility of the contractor, not the facility",
      ],
      correctIndex: 1,
      explanation:
        "SAF.290 requires a proactive risk assessment that identifies: potential risks to occupant health and/or safety (SAF.290.10), actions necessary to eliminate or adequately mitigate those risks (SAF.290.20), and provisions for monitoring and mitigating risks throughout the process (SAF.290.30).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Construction in occupied healthcare facilities introduces significant patient safety risks: dust, mold, noise, vibration, airborne particles, and pathway disruptions. AAAHC requires a documented, pre-construction risk assessment addressing all three elements.",
        whyWrong: {
          A: "Cost estimation is a project management function, not the SAF.290 risk assessment content.",
          C: "Contractor licensing may be verified but is not the risk assessment content.",
          D: "The facility bears responsibility for patient safety even during contractor-managed construction - the risk assessment cannot be delegated.",
        },
        operationalContext:
          "Use an Infection Control Risk Assessment (ICRA) tool for any construction or renovation project. Complete it before work begins, obtain IPC officer review, establish monitoring checkpoints, and document that monitoring occurred throughout the project.",
      },
    },
    {
      id: "asc_saf_15",
      question:
        "SAF.140.30 requires the safety program to include processes to prevent falls and other physical injuries. What must accompany these fall prevention processes?",
      options: [
        "A no-fall guarantee for all patients",
        "Processes to ensure the accurate and timely reporting of fall events",
        "A dedicated fall coordinator position for all facilities",
        "Electronic fall risk assessment tools for all patient encounters",
      ],
      correctIndex: 1,
      explanation:
        "SAF.140.30 specifically requires processes to prevent falls AND to ensure the accurate and timely reporting of such events. Prevention and reporting are both required elements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Fall prevention without a reporting mechanism leaves the organization unable to learn from fall events and improve prevention. SAF.140.30 requires both sides of the safety loop: prevention and reporting.",
        whyWrong: {
          A: "No-fall guarantees are not realistic or required.",
          C: "A dedicated coordinator is not required - the responsibility can be assigned to existing staff.",
          D: "Electronic tools are useful but are not specifically required by SAF.140.30.",
        },
        operationalContext:
          "Implement a fall risk assessment on all patients at check-in. Include fall events in the incident reporting system. Review fall events monthly in the quality/safety committee and track trends.",
      },
    },
    {
      id: "asc_saf_16",
      question:
        "SAF.100.60 and SAF.100.70 address observers in patient care areas. What is required?",
      options: [
        "Observers are never permitted in patient care areas under any circumstances",
        "Written policies define restrictions on observers AND require patient consent for non-authorized persons in patient care areas",
        "Only family members who are medical professionals may observe procedures",
        "Observer consent is required only from the provider, not the patient",
      ],
      correctIndex: 1,
      explanation:
        "SAF.100.60 requires written policies defining restrictions on observers in patient care areas. SAF.100.70 requires written policies that include requirements for evidence of patient consent for all non-authorized personnel permitted in patient care areas.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patient privacy and safety are both protected by observer policies. Patients have a right to know who is in the room and to consent to non-authorized individuals - such as students, vendor representatives, or media.",
        whyWrong: {
          A: "Observers may be permitted with appropriate policies and patient consent - a blanket ban is not required.",
          C: "The type of observer (family, student, vendor) does not exempt the requirement for restrictions and consent.",
          D: "Patient consent - not just provider consent - is required for non-authorized persons in care areas.",
        },
        operationalContext:
          "Develop a written observer policy: define who is considered 'authorized,' specify when patient consent is required and how it is obtained and documented, and list any restrictions on observer presence during specific procedures.",
      },
    },
    {
      id: "asc_saf_17",
      question:
        "SAF.130.40 requires that improvements reducing the likelihood of future adverse events are implemented. What qualifier does this standard include?",
      options: [
        "All improvements must be implemented within 30 days of the adverse event",
        "Improvements must be implemented 'when indicated' by the analysis",
        "Improvements are required only for adverse events resulting in patient death",
        "The governing body must approve every improvement before implementation",
      ],
      correctIndex: 1,
      explanation:
        "SAF.130.40 requires that improvements reducing future adverse events are implemented 'when indicated.' The qualifier 'when indicated' means the analysis determines whether systemic improvements are warranted - not every event requires a policy change.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'when indicated' qualifier reflects proportionality. A one-time human error in an otherwise sound system may not warrant systemic process change. But a recurring pattern or a systemic gap identified by root cause analysis requires action.",
        whyWrong: {
          A: "No 30-day deadline is specified in SAF.130.40.",
          C: "All adverse events - not just deaths - require analysis and implementation of improvements when indicated.",
          D: "Operational improvements do not all require governing body approval - the appropriate level of authority is determined by the nature of the improvement.",
        },
        operationalContext:
          "For each adverse event, complete a root cause analysis and document whether systemic improvements are indicated. If not, document the rationale. If yes, assign an owner, set a deadline, and verify completion.",
      },
    },
    {
      id: "asc_saf_18",
      question:
        "SAF.250.30 requires an immunization program offered to all staff. What determines which vaccines are included?",
      options: [
        "A standard list of required vaccines defined by AAAHC",
        "Vaccinations for infectious agents of risk to staff and patients as indicated by the infection prevention risk assessment",
        "Only hepatitis B and influenza - all other vaccines are optional",
        "The state health department's employee immunization requirements",
      ],
      correctIndex: 1,
      explanation:
        "SAF.250.30 requires that the immunization program includes vaccinations for infectious agents of risk to staff and patients as indicated by the infection prevention risk assessment. The annual IPC risk assessment drives the specific vaccines offered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The immunization program is risk-driven - the annual IPC risk assessment identifies which pathogens pose a risk in the organization's specific clinical environment, and the immunization program addresses those specific risks.",
        whyWrong: {
          A: "AAAHC does not publish a fixed vaccine list - the IPC risk assessment determines the list.",
          C: "Hepatitis B and influenza are commonly required, but the list is determined by the risk assessment - it could include COVID-19, Tdap, varicella, and others.",
          D: "State requirements set the legal floor; the risk assessment-driven immunization program may exceed state minimums.",
        },
        operationalContext:
          "Include vaccine risk assessment as a component of the annual IPC risk assessment. Use CDC recommendations for healthcare personnel as a baseline, and add or remove vaccines based on the organization's specific patient population and clinical services.",
      },
    },
    {
      id: "asc_saf_19",
      question:
        "SAF.220 requires documentation when medical devices are provided to patients. What must be documented?",
      options: [
        "The device's purchase price and warranty information",
        "Instructions to patients regarding use of the devices",
        "The device's FDA 510(k) clearance number",
        "The technician's name who prepared the device for the patient",
      ],
      correctIndex: 1,
      explanation:
        "SAF.220 requires that when medical devices are provided to patients, instructions to the patients regarding use of the devices are documented. This ensures patients know how to safely use the device they are taking home.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patient education on device use is a safety requirement - an improperly used device (crutches, wound VAC, insulin pump) can cause serious injury. Documentation proves the education occurred.",
        whyWrong: {
          A: "Device financial information is a billing matter, not the SAF.220 documentation requirement.",
          C: "FDA clearance number documentation is relevant to device compliance (SAF.200) but not the SAF.220 patient instruction requirement.",
          D: "The technician's name may be relevant to liability but is not the specific SAF.220 requirement.",
        },
        operationalContext:
          "When providing a durable medical device to a patient at discharge, document in the clinical record: device type, instructions given (verbal and written), and patient demonstration of understanding. Use a device-specific teaching checklist.",
      },
    },
    {
      id: "asc_saf_20",
      question:
        "SAF.110.40 requires that risk management policies address patient complaints and grievances. What two specific elements must these policies include?",
      options: [
        "Designated complaint reviewer and annual complaint summary report",
        "Ongoing review of patient complaints and grievances, AND defined response times as required by law and regulation",
        "Monthly complaint meetings and external ombudsman involvement",
        "Only written complaints require defined response times - verbal complaints are exempt",
      ],
      correctIndex: 1,
      explanation:
        "SAF.110.40 requires policies that address the ongoing review of patient complaints and grievances AND define response times as required by law and regulation. Both elements - ongoing review and defined timelines - must be present.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Response times for grievances are legally required in most jurisdictions and by CMS Conditions of Participation. Policies must specify the timeframe - and the response must be documented as meeting that timeframe.",
        whyWrong: {
          A: "Designated reviewers and annual summaries may be part of the process but are not the specifically named SAF.110.40 elements.",
          C: "Monthly meetings and ombudsman involvement are not specifically required by SAF.110.40.",
          D: "Both verbal and written complaints require defined response processes - there is no verbal-complaint exemption.",
        },
        operationalContext:
          "Define specific response timeframes in the complaint/grievance policy (e.g., complaint acknowledged within 2 business days, written response within 30 days). Track compliance with these timelines in the grievance log.",
      },
    },
  ],
};
