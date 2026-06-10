import type { Level } from "./schema";

export const ascIpcLevel: Level = {
  id: "asc_ipc",
  module: "asc",
  name: "Infection Prevention & Control",
  description: "AAAHC v44 IPC - written program, hand hygiene, sterilization, sharps safety, surgical environment, and cross-infection prevention.",
  icon: "ShieldCheck",
  color: "hsl(150, 60%, 38%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "IPC: Infection Prevention and Control",
    plainLanguageSummary:
      "The IPC category requires ASCs to maintain a comprehensive, governing-body-approved infection prevention and control program based on nationally recognized guidelines. The program must integrate with quality improvement, comply with OSHA and applicable laws, and be led by a designated qualified professional. Key operational areas include hand hygiene surveillance, safe injection practices, instrument sterilization, sharps injury prevention, cross-infection safeguards, and environmental cleaning.",
    keyOperationalExpectations: [
      "A written IPC program is approved by the governing body and updated by annual risk assessment.",
      "The program is directed by a qualified health care professional with documented IPC training and competence.",
      "Active surveillance of hand hygiene and safe injection practices is required per CDC/WHO guidelines.",
      "Cleaning, decontamination, high-level disinfection, and sterilization follow nationally recognized guidelines and manufacturer instructions.",
      "A written sharps injury prevention program governs disposal, container placement and replacement, and regulated waste handling.",
      "The surgical environment has written policies for attire, aseptic technique, and environmental controls.",
    ],
    commonRiskPoints: [
      "Active surveillance of hand hygiene or safe injection practices is absent or not documented.",
      "Biological indicators are missing from sterilization cycles - only external/internal indicators are used.",
      "Sharps containers are overfilled beyond the fill line, or placed in locations where they cannot be secured from tampering.",
      "Environmental controls (temperature, humidity, air pressure in ORs) are not monitored or documented against nationally recognized guidelines.",
    ],
    aaahcStandards: ["IPC.100", "IPC.130", "IPC.150", "IPC.170", "IPC.180", "IPC.190", "IPC.200", "IPC.210", "IPC.220", "IPC.230"],
  },
  studyMaterial: [
    {
      title: "What makes up a good infection prevention program?",
      content:
        "The facility must have a written infection prevention program that is approved by leadership. The program must be updated every year based on a formal review of what infection risks actually exist at your site. It must follow nationally recognized guidelines from sources like the CDC.",
      keyPoint:
        "A written program is not enough on its own. It must be reviewed and updated every year to stay relevant.",
    },
    {
      title: "How do you prove that hand hygiene is actually being done correctly?",
      content:
        "Someone must observe and record how well staff follow hand hygiene steps on an ongoing basis. The same goes for safe injection practices. Watching what actually happens and writing it down is required. Assuming that staff wash their hands does not count as surveillance.",
      keyPoint:
        "Active observation and documentation of hand hygiene are required. Assuming compliance does not count.",
    },
    {
      title: "What three indicators are required every time instruments are sterilized?",
      content:
        "Every sterilization load must have an external indicator on the outside of the pack, a chemical indicator placed inside the pack, and a biological indicator that confirms living organisms were actually killed. All three are required. Using only two out of three is a deficiency.",
      keyPoint:
        "External, internal chemical, and biological indicators are all required for sterilization. Skipping any one of the three is a problem.",
    },
    {
      title: "When should you replace a sharps container?",
      content:
        "A sharps container must be replaced when the fill line on the container is reached. Waiting until the container is overflowing increases the risk of a needlestick injury. Containers must also be secured so that patients cannot reach into them.",
      keyPoint:
        "Replace sharps containers at the fill line, not when they are packed full.",
    },
    {
      title: "What rules apply to staff entering the operating room?",
      content:
        "Anyone entering the OR must follow written attire rules, like wearing a surgical cap, mask, and shoe covers. Staff must use the proper hand scrub technique before procedures. The OR temperature, humidity, and airflow must also be monitored and kept within the ranges required by national guidelines.",
      keyPoint:
        "OR attire requirements, surgical hand scrub, and environmental controls like temperature and airflow must all be in policy and followed consistently.",
    },
  ],
  questions: [
    {
      id: "asc_ipc_01",
      question:
        "IPC.100 requires the IPC program to be relevant to the organization as demonstrated by what specific annual activity?",
      options: [
        "A staff survey about hand hygiene habits",
        "A formal, documented infection prevention risk assessment completed annually",
        "An annual audit of sterilization logs by an external contractor",
        "Submission of infection rates to the CDC's National Healthcare Safety Network"
      ],
      correctIndex: 1,
      explanation:
        "IPC.100.20 specifically requires that relevance of the IPC program is demonstrated by a formal, documented infection prevention risk assessment completed annually. This risk assessment drives the program's priorities and is the foundation for its content.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The annual risk assessment is the mechanism by which the IPC program stays current and relevant to the organization's actual infection risks. Without it, the program may address risks that don't apply while missing those that do.",
        whyWrong: {
          A: "Staff surveys may inform IPC training but are not the required annual relevance-validation mechanism.",
          C: "External audits may be used but are not the specifically required annual activity under IPC.100.20.",
          D: "NHSN reporting may be required for some facilities but is not what IPC.100.20 mandates as the annual relevance demonstration.",
        },
        operationalContext:
          "Conduct the annual IPC risk assessment every fall using a structured tool (APIC provides templates). Document findings and use them to update the IPC plan priorities for the coming year.",
      },
    },
    {
      id: "asc_ipc_02",
      question:
        "Under IPC.150, who must direct the infection prevention and control program?",
      options: [
        "The governing body chair",
        "A designated qualified health care professional with training and current competence in IPC",
        "An outside consultant hired only for accreditation surveys",
        "The facility's medical director by default"
      ],
      correctIndex: 1,
      explanation:
        "IPC.150 requires that the IPC program be directed by a designated and qualified health care professional who has documented training in infection prevention and control AND demonstrates current competence in IPC.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "IPC.150 has two distinct requirements: (1) the governing body or designee must formally assign a qualified health care professional, and (2) that person must have documented training and current competence - not just a clinical background generally.",
        whyWrong: {
          A: "The governing body chair is a governance function, not necessarily a qualified IPC professional.",
          C: "Survey-only consultants do not satisfy the 'designated and qualified' ongoing director requirement.",
          D: "The medical director may serve in this role but must have specific IPC training and demonstrated competence - the role is not automatic.",
        },
        operationalContext:
          "Designate an IPC officer in writing (by job title or name), verify their IPC training (CIC certification or equivalent training documentation), and maintain a file of their IPC competency evidence.",
      },
    },
    {
      id: "asc_ipc_03",
      question:
        "During a survey, the IPC officer states that hand hygiene compliance is assumed to be good because 'staff know to wash their hands.' What IPC.130 requirement is not met?",
      options: [
        "The IPC program must include annual hand hygiene retraining",
        "Active surveillance of hand hygiene must be conducted and documented - assumption is not surveillance",
        "Hand hygiene compliance only needs to be measured if there is an outbreak",
        "IPC.130 only requires a hand hygiene policy, not active observation"
      ],
      correctIndex: 1,
      explanation:
        "IPC.130.30 requires active surveillance of hand hygiene consistent with nationally recognized guidelines. Active surveillance means documented observation and measurement of actual compliance - not assumption or self-reporting.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Active surveillance is the key term. It requires systematic, documented observation of hand hygiene moments and compliance rates. The IPC officer's assumption - however well-intentioned - is not surveillance.",
        whyWrong: {
          A: "Annual retraining may be good practice but is not specifically what IPC.130.30 requires.",
          C: "Surveillance must be ongoing, not triggered by outbreaks.",
          D: "IPC.130.30 goes beyond the policy level - it requires active (documented, observational) surveillance.",
        },
        operationalContext:
          "Implement a monthly hand hygiene observation log where IPC staff or designees conduct and document direct observations at defined 'hand hygiene moments' (before patient contact, before aseptic task, after body fluid exposure, after patient contact). Report rates to QI committee.",
      },
    },
    {
      id: "asc_ipc_04",
      question:
        "A sterilization load at an ASC uses external chemical indicator tape and internal chemical integrators but no biological indicators. What does IPC.170.30 require?",
      options: [
        "Two types of indicators are sufficient - biological indicators are optional for low-risk loads",
        "IPC.170.30 requires internal AND external indicators including biological indicators - all three types are required for items undergoing sterilization",
        "Biological indicators are only required for implants, not for general surgical instrument sets",
        "External indicators alone are sufficient for Class 4 chemical indicators"
      ],
      correctIndex: 1,
      explanation:
        "IPC.170.30 explicitly requires that internal AND external indicators, including biological indicators, are used with items undergoing sterilization. All three types are required, not optional.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Biological indicators (spore tests) are the gold standard for sterilization assurance because they test the actual killing of living organisms. External and internal chemical indicators confirm exposure to sterilization conditions but cannot confirm organism death the way biological indicators can.",
        whyWrong: {
          A: "There is no 'low-risk load' exemption in IPC.170.30 - all items undergoing sterilization require all three indicator types.",
          C: "The standard does not limit biological indicator use to implants alone.",
          D: "Class 4 or higher chemical indicators are not a substitute for biological indicators under IPC.170.30.",
        },
        operationalContext:
          "Run biological indicators with every sterilization cycle per your sterilizer manufacturer's instructions and nationally recognized guidelines (AAMI ST79). Document results in a sterilization log and quarantine loads pending biological indicator results when required.",
      },
    },
    {
      id: "asc_ipc_05",
      question:
        "An ASC's sharps containers in procedure rooms are three-quarters full. A staff member says they wait until the container is completely full before replacing it. What IPC.180 requirement is violated?",
      options: [
        "IPC.180 allows containers to be filled completely before replacement",
        "IPC.180.30 requires replacement when the fill line is reached, not when the container is completely full",
        "Sharps containers must be replaced daily regardless of fill level",
        "Sharps containers only need to be replaced when a needlestick injury occurs"
      ],
      correctIndex: 1,
      explanation:
        "IPC.180.30 specifically requires that sharps containers be replaced when the fill line is reached. Overfilled containers greatly increase needlestick injury risk when staff attempt to deposit additional sharps.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The fill line exists precisely to prevent overfilling. When a container is filled past the line, the top of the container is no longer a safe deposit zone - sharps can be pushed back out during deposit, causing injury.",
        whyWrong: {
          A: "Filling to the top exceeds the safe fill line and violates IPC.180.30.",
          C: "Daily replacement is not the standard - replacement at the fill line is.",
          D: "Replacement based on injury occurrence is reactive; the standard requires proactive fill-level management.",
        },
        operationalContext:
          "Train all staff to replace sharps containers when the manufacturer's fill-line indicator is reached - not when overfull. Include fill-line monitoring in daily environmental rounds.",
      },
    },
    {
      id: "asc_ipc_06",
      question:
        "IPC.190.20 requires written policies that mandate public health authority notification. When is this required?",
      options: [
        "Only when a patient dies from a healthcare-associated infection",
        "When reportable conditions are identified among patients or staff",
        "When the IPC risk assessment identifies a new infection risk",
        "Only for respiratory diseases with pandemic potential"
      ],
      correctIndex: 1,
      explanation:
        "IPC.190.20 requires written policies and procedures mandating that public health authorities are notified of reportable conditions. Reportable conditions vary by jurisdiction but typically include specific communicable diseases and outbreak clusters.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Reportable conditions requirements vary by state but the organization must have a written policy that addresses when and how to notify public health - and must actually make those notifications as required.",
        whyWrong: {
          A: "Patient deaths may trigger reports but are not the only trigger for public health notification.",
          C: "Risk assessment findings trigger internal IPC program changes, not necessarily public health reporting.",
          D: "Reportable conditions extend well beyond respiratory pandemic diseases - they include enteric diseases, sexually transmitted infections, and many others depending on the jurisdiction.",
        },
        operationalContext:
          "Download your state's list of reportable conditions and build a reference card for the IPC officer and relevant clinical staff. Include a reporting flowchart in the IPC policy.",
      },
    },
    {
      id: "asc_ipc_07",
      question:
        "What does IPC.200 require when assessing whether an ASC can safely protect patients and others from cross-infection?",
      options: [
        "Only personnel numbers matter - equipment and supplies are secondary",
        "Space, equipment, supplies, AND personnel must all be assessed as sufficient",
        "Cross-infection protection is assessed only during outbreak investigations",
        "IPC.200 only applies to facilities that perform invasive procedures"
      ],
      correctIndex: 1,
      explanation:
        "IPC.200 requires that all four resources are assessed as sufficient: space (IPC.200.10), equipment (IPC.200.20), supplies (IPC.200.30), and personnel (IPC.200.40). All four must be adequate to protect against cross-infection.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "IPC.200 takes a whole-system view of infection prevention resources. An ASC with excellent policies but insufficient PPE supply or overcrowded procedure rooms cannot adequately protect patients from cross-infection.",
        whyWrong: {
          A: "Personnel alone are not sufficient - all four resource categories must be assessed.",
          C: "IPC.200 is an ongoing requirement, not limited to outbreak situations.",
          D: "IPC.200 applies to all ambulatory health care organizations.",
        },
        operationalContext:
          "Include an IPC resources assessment in your annual risk assessment: are procedure areas sufficiently separated? Is PPE stock always adequate? Are supplies available at point of care? Are there enough IPC-trained staff?",
      },
    },
    {
      id: "asc_ipc_08",
      question:
        "IPC.210 requires written policies for cleaning patient treatment and care areas. Which timing element is explicitly required?",
      options: [
        "Daily end-of-day terminal cleaning only",
        "Cleaning before use, between patients, and terminal cleaning frequency based on use of the area",
        "Monthly deep cleaning by a certified environmental services contractor",
        "Cleaning is required only after procedures involving blood or body fluids"
      ],
      correctIndex: 1,
      explanation:
        "IPC.210 requires written policies addressing cleaning before use (IPC.210.10), cleaning between patients (IPC.210.20), and terminal cleaning frequency based on use of the area (IPC.210.30). All three timing elements must be covered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "IPC.210 establishes three distinct cleaning timeframes: pre-use, between-patient, and terminal (end-of-session or end-of-day). Each requires specific policy guidance because the depth and products used may differ.",
        whyWrong: {
          A: "End-of-day terminal cleaning alone does not address pre-use or between-patient cleaning requirements.",
          C: "Monthly deep cleaning is supplemental - it does not satisfy the daily operational cleaning requirements.",
          D: "Cleaning is required as a routine infection prevention measure, not only after visible contamination events.",
        },
        operationalContext:
          "Develop separate cleaning checklists for: (1) pre-procedure area setup, (2) between-patient room turnover, and (3) end-of-session terminal cleaning. Require staff signatures confirming each checklist was completed.",
      },
    },
    {
      id: "asc_ipc_09",
      question:
        "Under IPC.220, when a multi-patient-use device is processed between patients, what governs the processing standard?",
      options: [
        "The organization's preference based on historical practice",
        "The manufacturer's instructions or nationally recognized guidelines, whichever are more stringent",
        "Only the manufacturer's instructions apply - guidelines are advisory",
        "Only nationally recognized guidelines apply - manufacturer instructions are secondary"
      ],
      correctIndex: 1,
      explanation:
        "IPC.220 requires that multi-patient-use devices be processed between patients according to manufacturer's instructions or nationally recognized guidelines, whichever are more stringent. The most protective standard takes precedence.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "When there is a gap between manufacturer instructions and nationally recognized guidelines, the more stringent standard must be applied. This protects patients even when manufacturers have not updated their instructions to reflect the latest evidence.",
        whyWrong: {
          A: "Historical practice is not a valid compliance standard under IPC.220.",
          C: "Neither manufacturer instructions nor guidelines alone govern - the more stringent of the two applies.",
          D: "Neither source takes automatic precedence - the more stringent standard applies.",
        },
        operationalContext:
          "For each type of reusable device, document the manufacturer's IFU (instructions for use) and compare with current AAMI/CDC/SGNA guidelines. Apply whichever is more stringent and document your rationale.",
      },
    },
    {
      id: "asc_ipc_10",
      question:
        "IPC.230 requires written policies for the surgical environment. Which of the following is one of the environmental control elements required by this standard?",
      options: [
        "Written policies requiring patients to shower the morning of surgery",
        "Environmental controls for temperature, humidity, and air pressure in OR/procedure areas following nationally recognized guidelines",
        "A minimum of six air exchanges per hour regardless of room type",
        "Negative pressure rooms for all surgical procedures"
      ],
      correctIndex: 1,
      explanation:
        "IPC.230.70 requires that environmental controls for temperature, humidity, and air pressure are adopted following nationally recognized guidelines. The specific parameters are determined by those guidelines (e.g., ASHRAE 170 or AORN standards).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Environmental controls in ORs and procedure rooms are critical for preventing airborne contamination. AAAHC requires policies that adopt nationally recognized guidelines for these parameters - not just 'comfortable' conditions.",
        whyWrong: {
          A: "Patient pre-op bathing is a surgical site infection prevention practice, not an IPC.230 environmental control.",
          C: "Six air exchanges is one parameter found in some guidelines, but the standard requires alignment with specific nationally recognized guidelines - not a single arbitrary number.",
          D: "Negative pressure rooms are appropriate for airborne infection isolation, not standard OR environmental control.",
        },
        operationalContext:
          "Reference ASHRAE 170 (Ventilation of Health Care Facilities) and AORN Guidelines for OR environmental standards. Establish policies specifying your OR's target temperature, humidity, and air pressure differentials. Monitor and document these parameters.",
      },
    },
    {
      id: "asc_ipc_11",
      question:
        "An ASC uses a contract laundry service for OR attire contaminated with blood or body fluids. What does IPC.240 require?",
      options: [
        "Contracted laundry is prohibited - all contaminated attire must be laundered on-site",
        "The laundry must adhere to nationally recognized guidelines AND be approved by the organization",
        "Only the laundry's state license needs to be verified",
        "Contaminated attire can be laundered at a commercial laundromat if cost-effective"
      ],
      correctIndex: 1,
      explanation:
        "IPC.240 requires that attire contaminated with blood or body fluids is laundered by an approved laundry that adheres to nationally recognized guidelines. Both elements - compliance with guidelines AND organizational approval of the laundry - are required.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "IPC.240 protects against the risk of improperly laundered attire being returned to use in patient care areas. The organization must vet and formally approve the laundry service, not just contract with whoever is cheapest.",
        whyWrong: {
          A: "On-site laundering is not required - contracted services are permitted if they meet IPC.240 requirements.",
          C: "State licensing alone is not sufficient - national guideline compliance must also be verified.",
          D: "Commercial laundromats are not equipped to handle regulated medical attire per bloodborne pathogen standards.",
        },
        operationalContext:
          "Document formal approval of your laundry contractor in a signed agreement specifying: compliance with OSHA bloodborne pathogen standards and AORN/CDC guidelines, verification of their processes, and periodic performance review.",
      },
    },
    {
      id: "asc_ipc_12",
      question:
        "The IPC program at an ASC was adopted two years ago and has not been updated since. The governing body approved it initially but has not reviewed it since. What IPC.100 requirement is at risk?",
      options: [
        "IPC programs do not require annual review once initially approved",
        "The annual infection prevention risk assessment has not been conducted, and the program has not been maintained based on current risks",
        "The governing body only needs to review the IPC program every three years",
        "IPC program updates are triggered only by infection outbreaks, not by routine annual review"
      ],
      correctIndex: 1,
      explanation:
        "IPC.100.20 requires that the IPC program remain relevant as demonstrated by a formal, documented annual infection prevention risk assessment. A two-year-old program without updates or annual risk assessment review is not meeting this standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The annual risk assessment is the mechanism by which the program stays current. Without it, the organization cannot demonstrate that its IPC program addresses current, relevant risks - which is the core requirement of IPC.100.20.",
        whyWrong: {
          A: "Annual review is required - the standard explicitly requires the annual risk assessment as evidence of relevance.",
          C: "There is no three-year review cycle in IPC.100 - it requires annual review.",
          D: "The risk assessment requirement is proactive and ongoing, not outbreak-triggered.",
        },
        operationalContext:
          "Schedule the annual IPC risk assessment as a recurring calendar item, ideally aligned with the governing body's annual program review (GOV.240). Present risk assessment findings to the governing body and document the review in board minutes.",
      },
    },
    {
      id: "asc_ipc_13",
      question:
        "What does IPC.130.20 require regarding hand hygiene products?",
      options: [
        "Only alcohol-based hand rubs are compliant - soap and water is insufficient",
        "A written hand hygiene policy must address appropriate products and their use according to the manufacturer's instructions for use",
        "Hand hygiene products must be approved by the FDA before use",
        "Soap and water must be used between all patients; hand rubs are supplementary only"
      ],
      correctIndex: 1,
      explanation:
        "IPC.130.20 requires a written policy outlining appropriate hand hygiene using products according to the product manufacturer's instructions for use. The standard does not prescribe a specific product type but requires following manufacturer IFU.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Different hand hygiene situations call for different products (e.g., soap and water for C. diff, ABHR for most routine situations). The policy must define when each product is used and per manufacturer instructions for proper application.",
        whyWrong: {
          A: "Soap and water is the appropriate choice for specific pathogens (e.g., Clostridioides difficile) where alcohol-based hand rubs are less effective.",
          C: "FDA approval of the product itself is separate from the organizational policy requirement - IPC.130.20 focuses on having a policy about proper use.",
          D: "Alcohol-based hand rubs are the primary product recommended for most situations per CDC/WHO guidelines - soap and water is specifically indicated for visibly soiled hands and certain pathogens.",
        },
        operationalContext:
          "Develop a hand hygiene policy that specifies product types, when each is used (per WHO 5 moments), duration and technique, and references the product manufacturer's IFU for application instructions.",
      },
    },
    {
      id: "asc_ipc_14",
      question:
        "A sterilization load's biological indicator (spore test) comes back POSITIVE (organism growth detected). What should happen under IPC.170?",
      options: [
        "The load may still be released if the external and internal chemical indicators passed",
        "Items from the load must be recalled and re-sterilized, and the sterilizer must be taken out of service and inspected",
        "Positive biological indicators are expected occasionally and do not require action",
        "The load may be released after 48 hours to allow re-test confirmation"
      ],
      correctIndex: 1,
      explanation:
        "A positive biological indicator means sterilization conditions were not achieved. Per nationally recognized guidelines (AAMI ST79) and IPC.170, items must be recalled and re-processed, and the sterilizer must be taken out of service until the failure is investigated and corrected.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A positive spore test is a sterilization failure. All items in the load must be considered unsterile and cannot be used. The sterilizer must be inspected before returning to service. This is a patient safety emergency, not a documentation issue.",
        whyWrong: {
          A: "Chemical indicators confirm cycle parameters were achieved but do not prove sterilization - biological indicators are the definitive test.",
          C: "Occasional positive results are NOT expected and always require action.",
          D: "Waiting 48 hours is dangerous - items must be immediately recalled, not used while awaiting re-testing.",
        },
        operationalContext:
          "Post a sterilizer failure response protocol in the SPD area: (1) immediately quarantine all items from the failed load, (2) attempt to recall any distributed items, (3) take sterilizer out of service, (4) notify IPC officer and risk manager, (5) inspect and test before returning to service, (6) document the event.",
      },
    },
    {
      id: "asc_ipc_15",
      question:
        "IPC.230.50 requires written policies for surgical hand antisepsis. What are the two acceptable methods listed?",
      options: [
        "Betadine scrub and chlorhexidine rinse",
        "Antimicrobial soap (traditional scrub) or alcohol-based hand rub, according to product manufacturer's recommended guidelines",
        "Any hand hygiene product for 2 minutes minimum",
        "Only traditional brush-and-soap scrub meets surgical hand antisepsis standards"
      ],
      correctIndex: 1,
      explanation:
        "IPC.230.50 specifies surgical hand antisepsis using either an antimicrobial soap (traditional scrub method) or an alcohol-based hand rub, according to the product manufacturer's recommended guidelines.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Both methods are recognized as effective in nationally recognized guidelines (AORN, WHO). Alcohol-based surgical hand rubs have become increasingly common as they provide equivalent or superior antisepsis with less skin damage.",
        whyWrong: {
          A: "Betadine (povidone-iodine) and chlorhexidine are active ingredients in some surgical hand antiseptic products, but IPC.230.50 describes the method types (soap vs. ABHR), not specific active ingredients.",
          C: "Duration is determined by the product manufacturer's instructions, not a blanket 2-minute requirement.",
          D: "Alcohol-based hand rubs are an equally valid alternative to traditional scrub per IPC.230.50.",
        },
        operationalContext:
          "Post the manufacturer's IFU for your chosen surgical hand antiseptic product in the scrub sink area. Include required technique and duration. Train all surgical personnel on the correct method for each product type.",
      },
    },
    {
      id: "asc_ipc_16",
      question:
        "An ASC's IPC program includes surveillance of healthcare-associated infections but does not explicitly integrate with the quality improvement program. What IPC.100 sub-element is missing?",
      options: [
        "IPC programs do not need to be linked to QI programs",
        "IPC.100.40 requires the IPC program to be an integral part of the organization's quality improvement program",
        "IPC and QI integration is only required for hospitals with more than 200 beds",
        "Integration with QI is optional if the organization has a low infection rate"
      ],
      correctIndex: 1,
      explanation:
        "IPC.100.40 requires that the infection prevention and control program is an integral part of the organization's quality improvement program, as demonstrated by applicable policies and procedures and by surveillance and monitoring activities.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "IPC data (infection rates, compliance with hand hygiene and sterilization) must flow into the QI program so that trends can be identified, analyzed, and used to drive improvement. Isolated surveillance without QI integration misses the improvement purpose.",
        whyWrong: {
          A: "IPC.100.40 explicitly requires QI integration.",
          C: "The requirement applies to all ambulatory health care organizations.",
          D: "Low infection rates do not exempt an organization from the QI integration requirement.",
        },
        operationalContext:
          "Ensure IPC surveillance data is included as a regular standing item in the QI committee agenda. When IPC metrics fall below targets, the QI committee should initiate a formal improvement project.",
      },
    },
    {
      id: "asc_ipc_17",
      question:
        "IPC.170.40 requires a written policy addressing what circumstance related to high-level disinfection or sterilization?",
      options: [
        "How to dispose of single-use items that have been accidentally contaminated",
        "The identification and processing of medical equipment and instruments that fail to meet high-level disinfection or sterilization parameters",
        "How to handle equipment returned from repair by an outside vendor",
        "The process for ordering replacement equipment when current equipment is too old"
      ],
      correctIndex: 1,
      explanation:
        "IPC.170.40 requires a written policy addressing the identification and processing (recall/reprocessing) of medical equipment and instruments that fail to meet high-level disinfection or sterilization parameters - defining the failure response process.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "When a disinfection or sterilization failure occurs, the organization must have a documented response plan: how to identify affected items, quarantine them, determine if patients were exposed, and reprocess or discard appropriately.",
        whyWrong: {
          A: "Contaminated single-use item disposal is governed by waste management policies.",
          C: "Returned equipment is covered under the vendor reprocessing standard (SAF.190).",
          D: "Equipment replacement decisions are operational/financial matters, not an IPC.170.40 requirement.",
        },
        operationalContext:
          "Develop a sterilization/HLD failure policy that includes: quarantine procedure for affected items, patient impact assessment, exposure determination protocol, incident reporting, and corrective action steps.",
      },
    },
    {
      id: "asc_ipc_18",
      question:
        "When must the IPC program specifically address safe injection practices per IPC.130.40?",
      options: [
        "Only in facilities that have had previous injection-related infection events",
        "Active surveillance of safe injection practices consistent with CDC or other nationally recognized guidelines must be ongoing",
        "Safe injection surveillance is only required for facilities offering IV sedation",
        "IPC.130.40 only applies when multi-dose vials are used"
      ],
      correctIndex: 1,
      explanation:
        "IPC.130.40 requires active surveillance of safe injection practices consistent with CDC or other nationally recognized guidelines. This applies to all organizations that administer injections - it is not limited by anesthesia type or vial type.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Safe injection practice failures (sharing syringes, multi-dose vial contamination) have caused large-scale patient hepatitis C outbreaks in ambulatory settings. CDC's One and Only Campaign guidelines are the reference standard for this surveillance.",
        whyWrong: {
          A: "Active surveillance is proactive and required regardless of prior events.",
          C: "Safe injection surveillance applies to all injection practices, not just IV sedation.",
          D: "Multi-dose vials are one area of concern, but the standard covers all injection practices.",
        },
        operationalContext:
          "Incorporate safe injection practice observations into IPC surveillance rounds. Use CDC's One and Only Campaign checklist as your observation tool. Document results monthly and report to the QI committee.",
      },
    },
    {
      id: "asc_ipc_19",
      question:
        "IPC.190.40 requires written policies identifying people authorized to be in patient care areas. Why is this an IPC requirement?",
      options: [
        "It is a security measure only, not related to infection prevention",
        "Unauthorized personnel in patient care areas are an infection prevention and cross-contamination risk",
        "IPC.190.40 only applies to facilities caring for immunocompromised patients",
        "The requirement is administrative only and has no clinical significance"
      ],
      correctIndex: 1,
      explanation:
        "Unauthorized personnel - vendors, students, visitors, repair technicians - in patient care areas introduce potential contamination risks if they are not trained in IPC practices (hand hygiene, attire, etc.). IPC.190.40 requires written policies defining who is authorized to be in care areas.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "From an IPC perspective, unauthorized personnel may track in environmental contamination, fail to follow hand hygiene protocols, or enter restricted areas without appropriate attire - all of which can contribute to patient-to-patient cross-infection.",
        whyWrong: {
          A: "Security and IPC overlap in this policy - access control protects both patient safety and privacy.",
          C: "The requirement applies to all ambulatory facilities, not just those with immunocompromised populations.",
          D: "The clinical significance is infection risk from uncontrolled access - it is both an IPC and a patient rights (privacy) requirement.",
        },
        operationalContext:
          "Establish a visitor and vendor management policy that defines: who may enter patient care areas, what IPC training or escort is required, and how access is documented (sign-in log, badge).",
      },
    },
    {
      id: "asc_ipc_20",
      question:
        "A sterile pack returned from the CSSD has a package integrity breach (torn wrapper). Under IPC.170, what must happen?",
      options: [
        "The pack may be used if the internal chemical indicator passed",
        "The sterility of the pack cannot be assumed - it must be reprocessed before use",
        "The pack may be used if the breach is less than 1 cm in size",
        "A torn wrapper is a minor defect - the surgeon decides whether to use the item"
      ],
      correctIndex: 1,
      explanation:
        "IPC.170.60 requires that sterile packs are handled and stored to maintain their sterility. A breach in package integrity means sterility can no longer be assumed - the item must be reprocessed regardless of indicator results.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Sterile packaging maintains the sterile barrier. Once that barrier is compromised - regardless of the size of the breach - the sterility of the contents is in question and the item must be reprocessed.",
        whyWrong: {
          A: "Chemical indicators confirm cycle parameters, not ongoing sterility after a packaging breach.",
          C: "There is no acceptable size of breach in a sterile package - any integrity failure requires reprocessing.",
          D: "Sterility determination is an objective standard based on packaging integrity - not a clinical judgment call.",
        },
        operationalContext:
          "Train OR and sterile processing staff to inspect packages before opening: check for wet packaging, visible breaches, expired dates, and proper sealing. Any failure = reprocess. Document rejected packs in the sterilization log.",
      },
    },
  ],
};
