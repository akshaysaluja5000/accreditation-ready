import type { Level } from "./schema";

export const ascOcsLevel: Level = {
  id: "asc_ocs",
  module: "asc",
  name: "Other Clinical Services",
  description: "AAAHC v44 OCS - specialty clinical services including dental, oncology, reproductive health, women's health, and other ambulatory specialty care standards.",
  icon: "Layers",
  color: "hsl(320, 55%, 48%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "OCS: Other Clinical Services",
    plainLanguageSummary:
      "The OCS category addresses specialty clinical services that may be provided in ambulatory settings. Standards apply to dental care, medical oncology/chemotherapy, reproductive health services, in vitro fertilization, women's health, and other specialty ambulatory care. Each specialty area has specific requirements for qualified personnel, safety protocols, patient selection, and quality monitoring. OCS standards supplement the core clinical standards (CMC, ASG, MED) with specialty-specific requirements.",
    keyOperationalExpectations: [
      "Dental services are provided by appropriately licensed dentists and dental staff with verified credentials.",
      "Chemotherapy administration follows established safety protocols for hazardous drug handling and administration.",
      "Reproductive health services maintain specific privacy and counseling standards.",
      "In vitro fertilization facilities meet specific laboratory and clinical standards.",
      "Specialty services are governed by a qualified physician director with appropriate specialty expertise.",
      "Patient selection criteria for each specialty service are defined and applied consistently.",
    ],
    commonRiskPoints: [
      "Chemotherapy agents are prepared or handled without appropriate hazardous drug safety protocols (PPE, biological safety cabinet).",
      "Dental radiography is performed by staff without state-required radiology credentials.",
      "Specialty service governing physician does not have verified credentials in the specialty.",
      "Patient selection criteria for specialty services are not defined or not consistently applied.",
    ],
    aaahcStandards: ["OCS.100", "OCS.110", "OCS.120", "OCS.130", "OCS.140", "OCS.150"],
  },
  studyMaterial: [
    {
      title: "OCS.100 - Dental Services",
      content:
        "When dental services are provided, they must be directed by a qualified dental director. All dentists and dental hygienists must hold current state licensure verified through primary source verification. Dental radiography must be performed by appropriately licensed/certified personnel. Dental records must include: dental/medical history, examination findings, dental charting, treatment plans, informed consent, and procedure notes. Infection prevention practices specific to dentistry (instrument sterilization, dental unit water line management) must be addressed in the IPC program.",
      keyPoint:
        "Dental services require a dental director, licensed dentists and hygienists, licensed dental radiographers, dental-specific clinical records, and dental infection prevention protocols - all verified and documented separately from general medical credentialing.",
    },
    {
      title: "OCS.110 - Medical Oncology / Chemotherapy",
      content:
        "Organizations providing chemotherapy must have specific safety protocols for hazardous drug handling: chemotherapy agents must be prepared in a biological safety cabinet (BSC) in a negative pressure room; staff handling chemotherapy must use appropriate personal protective equipment (chemotherapy gloves, gowns, eye protection); spill kits must be immediately available; waste must be disposed of as hazardous waste. Chemotherapy administration protocols must define: patient eligibility criteria, dose verification (independent double-check), pre-medication requirements, monitoring during infusion, and management of adverse reactions.",
      keyPoint:
        "Chemotherapy is a high-alert medication with unique hazardous drug handling requirements: BSC preparation, negative pressure room, PPE, spill kits, hazardous waste disposal - all must be documented. Dose verification requires an independent double-check process.",
    },
    {
      title: "OCS.120 - Reproductive Health Services",
      content:
        "Reproductive health services (including abortion services, sterilization, contraception) must comply with applicable state and federal laws. Non-directive counseling must be available - patients must receive information about all options and make autonomous decisions without coercion. Informed consent must be comprehensive and include all relevant options, risks, and alternatives. Confidentiality protections are particularly important in reproductive health - minors' rights to confidential services vary by state and type of service. Staff must be educated on applicable legal requirements.",
      keyPoint:
        "Reproductive health services require non-directive counseling, comprehensive informed consent addressing all options, state/federal legal compliance, and heightened confidentiality protections - especially for minors.",
    },
    {
      title: "OCS.130 - In Vitro Fertilization (IVF) Services",
      content:
        "IVF facilities must meet specific requirements: laboratory standards for embryo culture and storage; gamete and embryo tracking and identification systems to prevent mix-ups; cryopreservation protocols and emergency backup for stored materials; patient disclosure of cumulative success rates; counseling on the disposition of surplus embryos; and qualified embryologists and reproductive endocrinologists. The laboratory director must have specific qualifications in reproductive endocrinology or clinical embryology. Embryo mix-up prevention is the highest-priority patient safety concern in IVF.",
      keyPoint:
        "IVF safety centers on gamete and embryo identification - preventing mix-ups requires a robust verification system at every step of the process. Cumulative success rate disclosure (not just per-cycle rates) is required.",
    },
    {
      title: "OCS.150 - Quality Monitoring in Specialty Services",
      content:
        "Each specialty clinical service must be included in the organization's quality improvement program. Specialty-specific quality metrics must be monitored - for example, chemotherapy: adverse reaction rates, dose calculation errors, extravasation events; for dental: post-procedure infection rates, retreatment rates; for IVF: clinical pregnancy rates, multiple gestation rates, cryopreservation success rates. Specialty-specific incidents must be reviewed through both the quality and peer review programs. Benchmarking against national or specialty-specific data is particularly important in specialty services where local volume may be insufficient for statistical analysis.",
      keyPoint:
        "Specialty services are not exempt from QI requirements - they require service-specific metrics, benchmarking against specialty databases, and inclusion in the peer review program.",
    },
  ],
  questions: [
    {
      id: "asc_ocs_01",
      question:
        "An ambulatory oncology center prepares chemotherapy agents at a medication preparation counter in the main medication room without a biological safety cabinet (BSC). What OCS requirement is violated?",
      options: [
        "Chemotherapy may be prepared anywhere with appropriate gloves",
        "Chemotherapy agents must be prepared in a biological safety cabinet in a negative pressure area to protect both staff and the environment from hazardous drug exposure",
        "BSC use is required only for intravenous chemotherapy - not oral agents",
        "A BSC is required only if the facility dispenses more than 100 doses per day",
      ],
      correctIndex: 1,
      explanation:
        "OCS and NIOSH/USP 800 standards require that hazardous drugs (including chemotherapy) be prepared in a biological safety cabinet within a negative pressure room. Preparation outside a BSC exposes staff to carcinogenic, mutagenic, or teratogenic agents and is a serious safety violation.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "BSC preparation protects both the preparer (prevents inhalation/skin contact) and the product (prevents contamination). Negative pressure in the preparation room prevents hazardous drug vapors from escaping into adjacent areas.",
        whyWrong: {
          A: "Gloves alone are insufficient - inhalation exposure is the primary risk during preparation, requiring BSC containment.",
          C: "NIOSH and USP 800 hazardous drug handling requirements apply to all hazardous drugs regardless of route - including oral agents during crushing or compounding.",
          D: "Volume thresholds do not determine BSC requirements - the hazardous nature of the drug does.",
        },
        operationalContext:
          "Reference USP 800 for comprehensive hazardous drug handling requirements. Ensure your facility has a properly functioning BSC and negative pressure room for chemotherapy preparation. Test negative pressure and BSC function on a regular schedule and document.",
      },
    },
    {
      id: "asc_ocs_02",
      question:
        "An IVF facility transfers an embryo to the wrong patient due to a labeling error. What OCS.130 safety system failure does this represent?",
      options: [
        "A documentation error only - IVF is inherently unpredictable",
        "Failure of the gamete/embryo identification and verification system - a double-identification verification process at every step of the IVF procedure is required to prevent such events",
        "IVF mix-up prevention is the patient's responsibility - patients should verify their own embryo labels",
        "This is a CLIA issue, not an OCS issue",
      ],
      correctIndex: 1,
      explanation:
        "OCS.130 requires robust gamete and embryo identification systems to prevent mix-ups. An embryo transfer to the wrong patient represents a catastrophic identification system failure - requiring double-verification at retrieval, fertilization, culture, and transfer steps.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Embryo mix-ups in IVF are sentinel events with profound ethical, legal, and emotional consequences for all parties. The identification system must include redundant checks at each step of the IVF process - no single point of failure should be possible.",
        whyWrong: {
          A: "A labeling error is a preventable system failure - it is not inherent to IVF.",
          C: "Identification verification is the organization's clinical responsibility - not the patient's.",
          D: "While CLIA applies to IVF laboratory testing, OCS.130 specifically addresses gamete and embryo identification - both standards apply.",
        },
        operationalContext:
          "Implement a mandatory two-person identification verification at each IVF step: gamete collection, fertilization, culture, cryopreservation, and embryo transfer. Use a standardized verbal verification with independent labeling confirmation. Never hand off specimens without documented verification.",
      },
    },
    {
      id: "asc_ocs_03",
      question:
        "Under OCS.110, an independent double-check process is required for chemotherapy dosing. What does this mean?",
      options: [
        "The pharmacist prepares the dose and the nurse verifies it verbally before administration",
        "Two qualified, independent clinicians separately verify the chemotherapy dose calculation, patient identification, and drug against the order - without sharing their calculation with each other before comparison",
        "The oncologist enters the dose and the pharmacist fills it - this constitutes a double-check",
        "Double-checks are only required for pediatric chemotherapy doses",
      ],
      correctIndex: 1,
      explanation:
        "An independent double-check requires two separate clinicians to independently calculate and verify the chemotherapy dose against the patient's BSA or weight, the protocol, and the order - without seeing each other's calculation first. A true independent check means the second checker cannot be influenced by the first checker's work.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Chemotherapy dose errors can be lethal - 10-fold dosing errors have killed patients. The independent double-check is specifically designed to catch calculation errors before administration. If the second checker sees the first checker's work, they are influenced (anchoring bias) and the 'independence' is lost.",
        whyWrong: {
          A: "Verbal verification after the fact is not an independent check - it allows anchoring bias.",
          C: "Order entry and dispensing are sequential steps in the process but do not constitute an independent verification of dose calculation.",
          D: "Independent double-checks apply to all high-alert chemotherapy agents regardless of patient population.",
        },
        operationalContext:
          "Define your chemotherapy double-check policy: specify which drugs require it, who is qualified to perform the second check, how the check is documented (both checkers sign independently), and what happens if the two checks disagree (both recalculate independently, then consult the pharmacist).",
      },
    },
    {
      id: "asc_ocs_04",
      question:
        "A patient receiving in vitro fertilization asks about success rates at the facility. Under OCS.130, what type of success rate information must be disclosed?",
      options: [
        "Only the most recent cycle success rate for the patient's specific diagnosis",
        "Cumulative success rate information - not just per-cycle rates - must be disclosed to patients",
        "Success rates are proprietary and need not be disclosed",
        "Only the national average success rates need be discussed - facility-specific rates are optional",
      ],
      correctIndex: 1,
      explanation:
        "OCS.130 requires that patients receive information about cumulative success rates - the probability of achieving a pregnancy through a complete IVF treatment course (which typically involves multiple cycles). Per-cycle rates can be misleading if presented in isolation.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Cumulative success rates provide a more clinically meaningful picture of IVF effectiveness than single-cycle rates. A facility with a 35% per-cycle rate and a 75% cumulative rate over three cycles provides different information than per-cycle rates alone suggest.",
        whyWrong: {
          A: "Per-cycle rates alone are insufficient - cumulative rates are required.",
          C: "Success rate disclosure is required - it is part of the informed consent and patient rights framework for IVF.",
          D: "Facility-specific rates are important - patients deserve information about the specific facility's outcomes, not just national averages.",
        },
        operationalContext:
          "Provide patients with your facility's cumulative live birth rate data (stratified by age group if volume allows) at consultation. Reference SART (Society for Assisted Reproductive Technology) or CDC ART reporting databases for benchmarking. Ensure the disclosure document is reviewed and signed by the patient.",
      },
    },
    {
      id: "asc_ocs_05",
      question:
        "A dental ASC employs dental hygienists who perform oral health assessments and prophylaxis. What OCS.100 credential verification must be completed?",
      options: [
        "Only the supervising dentist's credentials need to be verified - dental hygienist licensing is assumed from employment",
        "Each dental hygienist's state dental hygienist license must be verified through primary source verification before they provide patient care",
        "Dental hygienists are not credentialed - they work under the dentist's license",
        "Credential verification for dental hygienists is conducted by the state dental board, not the organization",
      ],
      correctIndex: 1,
      explanation:
        "OCS.100 requires that all dental staff providing services have their credentials verified. Dental hygienists hold independent state licenses and must be separately credentialed through primary source verification - their license is not 'covered' by the supervising dentist's license.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Dental hygienists are licensed independently by state dental boards. Their license defines their scope of practice (what they may do independently vs. under dentist supervision). The organization must verify each hygienist's current, active license through the state dental board.",
        whyWrong: {
          A: "Independent verification of each clinical staff member's license is required - the dentist's license does not cover the hygienist's credentials.",
          C: "Dental hygienists are independently licensed professionals - they do not practice under the dentist's license.",
          D: "State boards issue licenses; organizations must independently verify them through primary source verification.",
        },
        operationalContext:
          "Add dental hygienists to the credentialing tracking system. Verify each hygienist's state license through the state dental board's online license lookup. Document the verification date and print the verification result for the personnel file.",
      },
    },
    {
      id: "asc_ocs_06",
      question:
        "Under OCS.120, reproductive health services must include what type of counseling approach?",
      options: [
        "Directive counseling that advises patients on the best option for their situation",
        "Non-directive counseling that provides information about all options without influencing the patient's decision",
        "Counseling is optional - informed consent forms satisfy the counseling requirement",
        "Counseling must be conducted by a licensed social worker or psychologist only",
      ],
      correctIndex: 1,
      explanation:
        "OCS.120 requires that non-directive counseling is available for reproductive health services - counseling that presents all options objectively and supports the patient in making their own autonomous decision, without steering them toward a particular choice. This respects patient autonomy and self-determination.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Non-directive counseling is a fundamental principle in reproductive health - patients have the right to make their own reproductive decisions without coercion or directed advice from clinical staff. The counselor's role is to inform, not to guide toward a predetermined conclusion.",
        whyWrong: {
          A: "Directive counseling that steers patients toward particular options violates the autonomy principle central to reproductive health care.",
          C: "Counseling is a distinct clinical service - informed consent forms document that information was provided but do not substitute for counseling.",
          D: "The counseling discipline (social work, psychology, nursing) is not prescribed - the required quality is non-directiveness, not the counselor's license type.",
        },
        operationalContext:
          "Train all staff providing reproductive health counseling in non-directive communication techniques. Standardize counseling content to ensure all options are presented objectively. Include a 'counseling provided' checkbox and the options discussed in the clinical record.",
      },
    },
    {
      id: "asc_ocs_07",
      question:
        "A chemotherapy infusion patient develops extravasation (chemotherapy agent leaking into surrounding tissue) during infusion. What OCS and MED standard elements must be in place to manage this event?",
      options: [
        "The nurse should stop the infusion and call 911",
        "A written extravasation management protocol must exist, including the specific antidote or management steps for each chemotherapy agent used, along with an immediately accessible extravasation kit",
        "Extravasation is documented in the chart but no specific protocol is required",
        "Extravasation is managed the same way for all chemotherapy agents - one protocol is sufficient",
      ],
      correctIndex: 1,
      explanation:
        "OCS.110 requires specific adverse reaction management protocols for chemotherapy, including extravasation. The protocol must specify: immediate steps (stop infusion, aspirate residual drug, apply antidote if applicable), agent-specific management (vesicant vs. non-vesicant protocols differ), and documentation requirements. MED.150 requires antidotes to be co-stocked with high-alert medications.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Extravasation management is agent-specific - vesicant chemotherapy agents (anthracyclines, vinca alkaloids) cause tissue necrosis and may require specific antidotes (e.g., dexrazoxane for anthracyclines). A generic 'stop infusion and call for help' protocol is insufficient.",
        whyWrong: {
          A: "911 is not the first step - immediate local management (stopping infusion, antidote administration) takes priority before emergency transfer.",
          C: "A written, agent-specific protocol is a required safety element - extravasation without a protocol creates an emergency without a response plan.",
          D: "Different chemotherapy agents require different extravasation management - a single protocol does not apply to all agents.",
        },
        operationalContext:
          "Create agent-specific extravasation management cards for each chemotherapy agent in your formulary: classification (vesicant/irritant/non-vesicant), immediate management steps, antidote (if applicable), antidote storage location, physician notification steps, and documentation requirements. Keep extravasation kits at every infusion station.",
      },
    },
    {
      id: "asc_ocs_08",
      question:
        "Under OCS.130, what must an IVF facility address regarding the disposition of cryopreserved embryos that are not used?",
      options: [
        "Unused embryos are automatically donated to research when storage fees lapse",
        "Patients must receive counseling about and provide documented consent for the disposition of unused/surplus cryopreserved embryos",
        "Embryo disposition decisions are made by the IVF facility without patient input",
        "Cryopreservation agreements automatically determine embryo disposition - no additional counseling is required",
      ],
      correctIndex: 1,
      explanation:
        "OCS.130 requires that patients are counseled about and provide documented informed consent for the disposition of surplus cryopreserved embryos. Options typically include: continued storage, donation to another couple, donation to research, or discarding. This is a complex ethical decision requiring thorough counseling.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Embryo disposition is one of the most ethically complex decisions in reproductive medicine. Patients must understand all options, their personal values, and the legal implications before making this decision. The decision may change over time (divorce, death, change of mind) - consent documents should address these scenarios.",
        whyWrong: {
          A: "Automatic research donation upon fee lapse without patient consent is not ethically permissible.",
          C: "Patient autonomy governs embryo disposition - the facility cannot make this decision unilaterally.",
          D: "Cryopreservation agreements are contracts - they must be preceded by informed counseling about the options they address.",
        },
        operationalContext:
          "Include embryo disposition counseling as a required component of IVF informed consent. Use a structured disposition consent form with all options clearly explained. Address what happens in the event of patient death, divorce, or incapacity. Review and update disposition preferences at each storage renewal.",
      },
    },
    {
      id: "asc_ocs_09",
      question:
        "A women's health center offers mammography services. Under OCS standards, what additional federal certification is required?",
      options: [
        "No additional certification beyond AAAHC accreditation is required",
        "FDA certification under the Mammography Quality Standards Act (MQSA) is required for facilities that perform mammography",
        "Joint Commission certification for women's services is required",
        "State health department mammography certification supersedes federal requirements",
      ],
      correctIndex: 1,
      explanation:
        "The Mammography Quality Standards Act (MQSA) requires that all facilities performing mammography be certified by the FDA. MQSA certification involves equipment standards, radiologist qualifications, technologist training, and quality assurance programs. AAAHC accreditation supplements but does not replace MQSA certification.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "MQSA is a federal law that creates a specific certification and quality assurance framework for mammography facilities. AAAHC OCS standards incorporate MQSA compliance as a requirement for facilities offering mammography.",
        whyWrong: {
          A: "AAAHC accreditation alone is insufficient - MQSA federal certification is separately required.",
          C: "Joint Commission certification is for a different accrediting body - AAAHC incorporates MQSA compliance, not TJC certification.",
          D: "MQSA is federal law - state requirements supplement but do not supersede it.",
        },
        operationalContext:
          "Verify current MQSA certification status for any mammography facility. Display the MQSA certificate as required. Ensure annual MQSA equipment testing, radiologist qualification maintenance, and medical audit activities are completed and documented per MQSA requirements.",
      },
    },
    {
      id: "asc_ocs_10",
      question:
        "Under OCS.150, what is required for quality monitoring of specialty clinical services?",
      options: [
        "Specialty services are exempt from QI monitoring as long as they meet national licensing standards",
        "Specialty-specific quality metrics must be defined, monitored, and benchmarked against specialty-specific databases - and included in the overall QI and peer review programs",
        "General quality metrics (patient satisfaction, wait times) are sufficient for all specialty services",
        "Quality monitoring for specialty services is the responsibility of the national specialty board, not the ASC",
      ],
      correctIndex: 1,
      explanation:
        "OCS.150 requires specialty-specific quality monitoring as part of the overall QI program. This includes specialty-appropriate metrics, benchmarking against national specialty databases, inclusion of specialty services in peer review, and review of specialty-specific adverse events.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "General quality metrics (patient satisfaction, wait time) do not measure the clinical quality of specialty care. A mammography facility needs to monitor cancer detection rates; a chemotherapy center needs to monitor toxicity rates and dose calculation errors; an IVF facility needs to monitor clinical pregnancy rates.",
        whyWrong: {
          A: "Specialty services are not exempt from QI - they require additional specialty-specific metrics.",
          C: "General metrics alone are insufficient for specialty service quality assessment.",
          D: "National specialty boards may set standards, but facility-level QI monitoring is the organization's own responsibility.",
        },
        operationalContext:
          "For each specialty service, identify 3-5 clinical outcome metrics from national specialty databases (SART for IVF, NCDR for cardiology, ACS NSQIP for surgery). Track these metrics quarterly, benchmark against national data, and report to the QI committee. Include specialty service peer review in the annual QI report.",
      },
    },
    {
      id: "asc_ocs_11",
      question:
        "A dental clinic in an ASC uses a dental unit waterline (DUWL) for handpieces and syringes. What OCS/IPC requirement applies to dental unit water quality?",
      options: [
        "Dental waterlines use municipal water - no additional treatment is required",
        "Dental unit water quality must meet potable water standards (≤500 CFU/mL), and the IPC program must include written policies for DUWL monitoring and treatment",
        "DUWL contamination is a patient comfort issue - it has no infection control significance",
        "Water quality testing is required only if a patient reports taste concerns",
      ],
      correctIndex: 1,
      explanation:
        "Dental unit waterlines are known to harbor biofilm including Legionella and other opportunistic pathogens. AAAHC OCS and IPC standards require that dental water quality meets potable water standards (≤500 CFU/mL) and that a written policy for DUWL monitoring and treatment (flushing, anti-retraction valves, chemical treatment) is in place.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Untreated dental unit waterlines have been associated with patient infections including Legionella outbreaks and opportunistic infections in immunocompromised patients. DUWL management is a specific dental infection control requirement.",
        whyWrong: {
          A: "Municipal water is not as clean as dental water standards require - municipal water may meet drinking water standards (≤500 CFU/mL) but dental biofilm can grow within the unit water system itself.",
          C: "DUWL contamination is a significant infection control concern - Legionella and other pathogens have caused patient infections.",
          D: "Water quality testing must be routine and proactive - not triggered by patient complaints.",
        },
        operationalContext:
          "Implement a DUWL management protocol: daily flushing (2 minutes at start of day, 20-30 seconds between patients), weekly or monthly shock treatment per manufacturer instructions, quarterly or semi-annual water quality testing (culture to confirm ≤500 CFU/mL), and documented results.",
      },
    },
    {
      id: "asc_ocs_12",
      question:
        "Under OCS.110, what must be included in the patient selection criteria for chemotherapy administration?",
      options: [
        "Patient selection is entirely at the oncologist's discretion - written criteria are not required",
        "Written criteria defining patient eligibility for each chemotherapy protocol - including performance status, organ function thresholds, and contraindications",
        "Only the tumor type and stage are required as selection criteria",
        "Selection criteria only apply to clinical trial patients, not standard-of-care patients",
      ],
      correctIndex: 1,
      explanation:
        "OCS.110 requires that written patient selection criteria be established for chemotherapy administration. These criteria define which patients are eligible: performance status requirements (e.g., ECOG 0-2), organ function thresholds (renal/hepatic function required before certain agents), and contraindications (prior hypersensitivity, drug interactions, pregnancy).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patient selection criteria are a safety framework - administering chemotherapy to a patient with inadequate renal function, impaired hepatic clearance, or borderline performance status can result in severe, potentially fatal toxicity. Written criteria prevent individual variation in safety standards.",
        whyWrong: {
          A: "Written selection criteria are specifically required - clinician discretion alone is insufficient.",
          C: "Tumor type and stage determine the protocol - selection criteria determine whether a patient's organ function and status allow safe administration of that protocol.",
          D: "Selection criteria apply to all chemotherapy patients - clinical trial patients have additional criteria beyond standard protocols.",
        },
        operationalContext:
          "For each chemotherapy protocol in your formulary, document: minimum performance status (ECOG or Karnofsky), required baseline labs (ANC, platelets, creatinine, LFTs), contraindications, and required pre-medications. Review patients against these criteria at each cycle before administration.",
      },
    },
    {
      id: "asc_ocs_13",
      question:
        "What OCS documentation is required when a dental procedure unexpectedly leads to a patient being transferred to the hospital?",
      options: [
        "Only the treatment note from the dental procedure",
        "A transfer documentation note including: patient clinical status at transfer, reason for transfer, receiving facility and provider, information communicated to the receiving provider, and the transport method",
        "The transfer is documented in the billing system only - clinical documentation is the hospital's responsibility",
        "A dental transfer requires the state dental board to be notified within 24 hours",
      ],
      correctIndex: 1,
      explanation:
        "Unexpected transfers from any clinical setting (dental or other) require comprehensive transfer documentation per CMC.160 and OCS standards. The transfer note must include: the patient's clinical status at transfer, reason for transfer, receiving facility and provider, what was communicated to the receiving provider, and the method of transport.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergency transfer documentation ensures continuity of care at the receiving facility. Without it, the hospital emergency team cannot understand what dental procedure was performed, what went wrong, what medications were given, or the patient's baseline status.",
        whyWrong: {
          A: "The treatment note alone is insufficient - transfer-specific documentation is also required.",
          C: "The transferring facility bears documentation responsibility - this cannot be deferred to the receiving hospital.",
          D: "State dental board notification requirements vary by state and by the nature of the event - transfer documentation is required regardless of board notification obligations.",
        },
        operationalContext:
          "Create a dental emergency transfer documentation template: procedure performed, complication description, clinical status at transfer, vital signs, medications given, IV access status, person at receiving facility contacted, time of contact, and transport method. Accompany the patient with a copy.",
      },
    },
    {
      id: "asc_ocs_14",
      question:
        "An ambulatory women's health center begins offering bone density (DEXA) scanning. What OCS requirement applies to the interpretation of DEXA results?",
      options: [
        "Bone density results are self-interpreting - T-scores require no professional interpretation",
        "DEXA results must be interpreted by a qualified physician who has been granted radiology interpretation privileges for bone density scanning at the organization",
        "Any clinician may interpret DEXA results without specific privileges",
        "DEXA scanning is exempt from radiology interpretation requirements because it is a quantitative measurement",
      ],
      correctIndex: 1,
      explanation:
        "DEXA scanning is a radiology service - interpretation of DEXA results requires a qualified physician with specific interpretation privileges at the organization. While T-scores are quantitative, proper interpretation requires consideration of the patient's age, fracture risk factors, and clinical context.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "DEXA interpretation privileges fall under the same CPV.120 and LRD.140 requirements as any other imaging interpretation. A primary care provider may discuss DEXA results with patients in the context of their care - but the formal interpretation must be by a privileged physician.",
        whyWrong: {
          A: "DEXA results require clinical interpretation in context - T-score alone does not constitute clinical interpretation.",
          C: "Specific interpretation privileges are required - any clinician may not interpret imaging studies without these privileges.",
          D: "Quantitative measurements still require clinical interpretation by a qualified, privileged provider.",
        },
        operationalContext:
          "Add DEXA interpretation to the radiology interpretation privilege options on the DOP form. Verify the interpreting physician's training in musculoskeletal bone density interpretation. Grant the privilege through the governing body approval process before the first clinical interpretation.",
      },
    },
    {
      id: "asc_ocs_15",
      question:
        "Under OCS.110, what spill management requirement applies when hazardous chemotherapy drugs are used in an ambulatory infusion center?",
      options: [
        "Standard housekeeping spill procedures are sufficient for all chemical spills",
        "A chemotherapy spill kit must be immediately available, and staff must be trained in its use - including proper PPE for spill cleanup and appropriate waste disposal",
        "Chemotherapy spills are reported to the pharmacy only - no immediate staff response is required",
        "Spill kits are required only in pharmacy preparation areas, not in infusion rooms",
      ],
      correctIndex: 1,
      explanation:
        "OCS.110 and NIOSH guidelines require that chemotherapy spill kits are immediately accessible wherever chemotherapy is administered or stored. Staff must be trained in spill management procedures - including the PPE required for cleanup (chemotherapy gloves, gown, face shield), proper cleanup technique, and appropriate hazardous waste disposal of spill materials.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Chemotherapy spills pose significant exposure risk to staff and others in the environment. Standard housekeeping procedures are inadequate - specialized PPE, absorbent materials, and hazardous waste disposal are required. Spill kits at the point of use enable immediate, appropriate response.",
        whyWrong: {
          A: "Standard housekeeping procedures do not meet the PPE and waste disposal requirements for hazardous drug spills.",
          C: "Immediate staff response to contain and clean up the spill is required - waiting for pharmacy delays containment.",
          D: "Spill kits must be immediately accessible wherever chemotherapy is used - including all infusion rooms.",
        },
        operationalContext:
          "Place a chemotherapy spill kit in each infusion room (contents: chemo gloves x2 pairs, gown, face shield, absorbent pads, waste bags labeled 'chemotherapy waste,' tongs, signage). Train all infusion room staff on spill kit use annually. Document training completion.",
      },
    },
    {
      id: "asc_ocs_16",
      question:
        "What does OCS require regarding the specialty director for medical oncology services?",
      options: [
        "Any physician may direct oncology services if they are licensed",
        "A qualified physician director with specific training and experience in medical oncology must oversee oncology services",
        "Oncology services may be directed by a non-physician clinical director",
        "The specialty director role is optional for small oncology practices",
      ],
      correctIndex: 1,
      explanation:
        "OCS requires that specialty clinical services be directed by a qualified physician director with appropriate specialty expertise. For medical oncology, this means a physician with training and board certification in medical oncology or hematology-oncology - not just any licensed physician.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Specialty director qualifications ensure that the physician overseeing clinical protocols, quality monitoring, and clinical decision-making has the specific expertise the specialty requires. Medical oncology involves complex, high-risk treatments that demand subspecialty direction.",
        whyWrong: {
          A: "General physician licensure is not sufficient - specialty expertise must be verified.",
          C: "The specialty director must be a physician - clinical administrators and non-physician directors do not satisfy this requirement.",
          D: "The specialty director requirement applies regardless of practice size.",
        },
        operationalContext:
          "Verify the oncology director's board certification in medical oncology or hematology-oncology through the American Board of Internal Medicine (ABIM). Document in the credentials file. Ensure the director's DOP at the organization includes oncology service oversight.",
      },
    },
    {
      id: "asc_ocs_17",
      question:
        "An IVF laboratory must maintain records of cryopreserved embryo storage. What OCS.130 documentation element is specifically required?",
      options: [
        "Embryo photographs only",
        "A chain of custody documentation system tracking embryo identification, location in storage, and any changes in status",
        "Only financial records for storage fees",
        "IVF storage documentation is the patient's responsibility",
      ],
      correctIndex: 1,
      explanation:
        "OCS.130 requires a robust embryo identification and tracking system. Chain of custody documentation - from retrieval through fertilization, culture, cryopreservation, storage, transfer, or disposition - must be maintained to prevent identification errors and ensure each embryo can be accounted for at any time.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Chain of custody documentation creates an unbroken record of embryo identity at every step. This is the primary safeguard against embryo mix-up and loss - any gap in the documentation chain is a potential identification failure.",
        whyWrong: {
          A: "Photographs alone do not establish identity - a complete documentation chain with patient-linked identification is required.",
          C: "Financial records are administrative - they do not serve the clinical identification function.",
          D: "Embryo documentation is the organization's clinical responsibility - not delegated to patients.",
        },
        operationalContext:
          "Implement an electronic embryo tracking system that creates a time-stamped log entry at each step: patient ID, procedure date, embryologist performing the step, location in cryostorage, and any change in status. The log must be complete and continuous from retrieval to final disposition.",
      },
    },
    {
      id: "asc_ocs_18",
      question:
        "Under OCS.100, what dental-specific infection prevention requirement is explicitly addressed?",
      options: [
        "Dental offices are exempt from IPC requirements because patient contact time is short",
        "Dental unit waterline management and instrument sterilization using dental-specific protocols must be included in the IPC program",
        "Dental infection prevention is regulated only by the state dental board",
        "Standard surgical instrument sterilization protocols apply equally to dental instruments",
      ],
      correctIndex: 1,
      explanation:
        "OCS.100 requires that infection prevention practices specific to dentistry - including dental unit waterline management and dental instrument sterilization (which includes specific protocols for handpieces, burs, and heat-sensitive equipment) - be addressed in the IPC program.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Dental infection prevention has unique elements not found in general surgical settings: DUWL contamination, dental handpiece sterilization (some handpieces can only be heat-sterilized; others require specific protocols), and saliva ejector backflow prevention. These must be specifically addressed.",
        whyWrong: {
          A: "Patient contact time does not exempt dental practices from IPC requirements - dental procedures involve direct exposure to blood and oral secretions.",
          C: "While state dental boards may have IPC requirements, AAAHC OCS standards independently require dental-specific IPC program elements.",
          D: "Standard surgical protocols may not be appropriate for some dental instruments - dental-specific guidance (CDC Dental Guidelines, OSAP) should be followed.",
        },
        operationalContext:
          "Reference CDC's 'Guidelines for Infection Control in Dental Health-Care Settings' when developing dental IPC policies. Address DUWL management, handpiece sterilization, single-use item policies, personal protective equipment for dental procedures, and sharps management.",
      },
    },
    {
      id: "asc_ocs_19",
      question:
        "A patient receiving chemotherapy for breast cancer also takes tamoxifen (a high-alert hormonal therapy). Under OCS.110 and MED.150, what applies to tamoxifen management?",
      options: [
        "Hormonal therapies are not high-alert medications - standard medication management applies",
        "Tamoxifen should be on the facility's high-alert medication list with appropriate error-prevention processes",
        "Tamoxifen management is exclusively the oncologist's responsibility - nursing has no role",
        "MED.150 applies only to intravenous medications",
      ],
      correctIndex: 1,
      explanation:
        "Tamoxifen is a hormonal anticancer agent that ISMP includes in its list of high-alert medications. It has significant interactions with certain antidepressants, can affect fertility and pregnancy, and errors in dosing or duration can significantly affect cancer outcomes. MED.150 high-alert medication requirements apply.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "ISMP's high-alert medication list includes oral anticancer agents including hormonal therapies. The consequences of dosing errors - whether too high (severe side effects) or too low (inadequate cancer treatment) - justify high-alert classification and error-prevention processes.",
        whyWrong: {
          A: "ISMP includes oral anticancer agents as high-alert medications regardless of route.",
          C: "Nursing plays an important role in monitoring patients on tamoxifen for side effects and ensuring medication adherence.",
          D: "MED.150 applies to high-alert medications regardless of route - oral anticancer agents are specifically recognized.",
        },
        operationalContext:
          "Add oral anticancer agents (including tamoxifen, capecitabine, imatinib, etc.) to your high-alert medication list. Implement specific error-prevention processes: drug interaction checks with antidepressants (CYP2D6 interactions), adherence monitoring, patient education on side effects and fertility implications, and consistent access to drug information at point of care.",
      },
    },
    {
      id: "asc_ocs_20",
      question:
        "Under OCS.130, what must an IVF facility disclose regarding multiple gestation risk?",
      options: [
        "Multiple gestation risk is standard - patients should expect twins or triplets",
        "Patients must receive counseling about the risk of multiple gestation associated with IVF and the number of embryos transferred, and this counseling must be documented",
        "Multiple gestation is the patient's choice - no counseling is required",
        "Multiple gestation risk is only disclosed if the patient directly asks",
      ],
      correctIndex: 1,
      explanation:
        "OCS.130 requires that IVF patients receive counseling about multiple gestation risk - which is directly related to the number of embryos transferred. Counseling must address the maternal and neonatal risks of multiple gestation and the patient's options regarding single embryo transfer (SET) to reduce this risk.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Multiple gestation is associated with significant risks: premature birth, low birth weight, maternal complications, and increased infant mortality. Informed consent in IVF must specifically address this risk and the patient's ability to choose single embryo transfer to reduce it.",
        whyWrong: {
          A: "Multiple gestation carries significant risks - it should not be presented as an expected or acceptable outcome.",
          C: "Multiple gestation counseling is required as part of IVF informed consent - it is not triggered by patient inquiry.",
          D: "Proactive disclosure of multiple gestation risk is required - patients must receive this information without having to ask.",
        },
        operationalContext:
          "Include multiple gestation risk counseling as a required component of IVF informed consent. Use national data (SART) to discuss the risk associated with transferring 1 vs. 2 embryos. Document that the patient received counseling about single embryo transfer as a risk-reduction option and their decision regarding the number of embryos to transfer.",
      },
    },
  ],
};
