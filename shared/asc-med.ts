import type { Level } from "./schema";

export const ascMedLevel: Level = {
  id: "asc_med",
  module: "asc",
  name: "Medication Management",
  description: "AAAHC v44 MED - pharmaceutical services oversight, prescription security, medication storage, labeling, disposal, high-alert medications, and vaccine storage.",
  icon: "Pill",
  color: "hsl(30, 80%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "MED: Medication Management",
    plainLanguageSummary:
      "The MED category applies to all ASCs that use drugs, biologicals, pharmaceutical supplies, or samples - regardless of whether an on-site pharmacy is present. The standards address oversight of pharmaceutical services, staff knowledge of prevailing laws, high-alert and look-alike/sound-alike (LASA) medication management, drug security and diversion prevention, medication storage and labeling, patient medication education, device maintenance for medication delivery, vaccine storage protocols, and disposal of expired or recalled medications.",
    keyOperationalExpectations: [
      "A written policy defines safe medication handling and administration per nationally recognized guidelines.",
      "DEA certification for controlled substances is current and readily retrievable.",
      "High-alert medication list is maintained and error-prevention processes are in place, including antidote co-storage.",
      "LASA medication list is maintained with processes to prevent administration errors.",
      "Pre-signed and post-dated prescriptions are prohibited by written policy.",
      "Medications removed from original containers are labeled with drug name, strength, amount/volume, expiration date/time, and preparer's name/initials.",
    ],
    commonRiskPoints: [
      "High-alert medication list exists but antidotes/reversal agents are not co-stored with the medications.",
      "Medications are labeled with drug name only - strength, expiration, and preparer's identity are missing.",
      "Multi-dose vials are used for multiple patients without documented policy or single-patient assignment.",
      "Vaccine temperature monitoring logs are absent or incomplete - temperature excursion response training is not documented.",
    ],
    aaahcStandards: ["MED.100", "MED.140", "MED.150", "MED.160", "MED.170", "MED.180", "MED.190", "MED.200", "MED.220", "MED.230", "MED.240"],
  },
  studyMaterial: [
    {
      title: "What do staff need to know and have available related to medications?",
      content:
        "All staff who handle medications must have access to current drug reference information at the point of care. A current DEA certificate must be kept on site when controlled substances are used. There must also be a written policy on safe medication handling that follows nationally recognized guidelines.",
      keyPoint:
        "Staff need drug reference access, a DEA certificate on site for controlled substances, and a written safe handling policy.",
    },
    {
      title: "What extra steps are required for high-alert medications?",
      content:
        "High-alert medications are drugs that can cause serious harm if given incorrectly. Your facility must keep a list of which high-alert medications you stock and have processes to reduce the chance of errors. If a reversal agent or antidote exists for a high-alert drug, it must be stored in the same location as that medication.",
      keyPoint:
        "High-alert medications require a list, error-prevention steps, and co-storage of the reversal agent at the same location.",
    },
    {
      title: "What rules apply to how medications are stored and secured?",
      content:
        "Medications must be stored in organized, labeled areas that are designed to reduce the chance of grabbing the wrong drug. They must be kept at the temperature and conditions required by the manufacturer. Pre-signed or post-dated prescriptions are never allowed.",
      keyPoint:
        "Medications must be labeled, organized, stored at proper conditions, and prescription pads must be secured. Pre-signed prescriptions are prohibited.",
    },
    {
      title: "What must be written on a label when a medication is taken out of its original container?",
      content:
        "If a medication is drawn up or poured but not given right away, a label must be attached. The label must include the drug name, the strength, the amount or volume, the expiration date and time, and the name or initials of the person who prepared it. If even a few minutes pass before it is given, a label is required.",
      keyPoint:
        "Five things on every medication label: name, strength, amount, expiration date and time, and the preparer's name or initials.",
    },
    {
      title: "What is required for vaccines stored at your facility?",
      content:
        "Vaccines must be stored and handled following nationally recognized guidelines approved by facility leadership. A temperature monitoring device must be in the storage unit. Staff who handle vaccines must be trained on routine storage procedures and what to do if the temperature goes out of range.",
      keyPoint:
        "Vaccine storage requires a temperature monitoring device, written policies for routine and emergency situations, and documented staff training.",
    },
  ],
  questions: [
    {
      id: "asc_med_01",
      question:
        "MED.100.30 requires that when controlled substances are present, DEA certification must be maintained in what manner?",
      options: [
        "Filed in the administrator's office, accessible within 24 hours",
        "Onsite and readily retrievable by authorized personnel",
        "Submitted annually to the state pharmacy board",
        "Posted in the medication storage room at all times",
      ],
      correctIndex: 1,
      explanation:
        "MED.100.30 specifically requires that when controlled substances are present, a current DEA certification is maintained onsite and readily retrievable by authorized personnel. It must be immediately accessible - not filed remotely or retrievable only within 24 hours.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "DEA inspectors and AAAHC surveyors may request to see the DEA registration during a visit. 'Onsite and readily retrievable' means it can be produced quickly by any authorized person who knows where to find it.",
        whyWrong: {
          A: "24-hour retrieval is not 'readily retrievable' - the certificate must be accessible immediately.",
          C: "The DEA certificate is kept at the facility - it is not submitted to the state pharmacy board.",
          D: "Posting in the medication room is not specifically required - 'readily retrievable' means accessible, not necessarily posted on a wall.",
        },
        operationalContext:
          "Keep a framed copy of the DEA registration certificate in the medication room or administrator's office. Maintain a digital copy as backup. Track expiration dates and renew at least 60 days before expiration.",
      },
    },
    {
      id: "asc_med_02",
      question:
        "MED.150.30 requires that if a high-alert medication is present for which there is an antidote, rescue, or reversal agent, where must the agent be stored?",
      options: [
        "In the pharmacy or medication room, accessible within five minutes",
        "In the same area as the high-alert medication, along with appropriate directions for use",
        "In the crash cart only",
        "In the administrator's office for security purposes",
      ],
      correctIndex: 1,
      explanation:
        "MED.150.30 requires that antidotes, rescue, or reversal agents be stocked in the same area as the high-alert medication, along with appropriate directions for use. Co-location ensures immediate availability when the high-alert medication causes an adverse reaction.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Co-location of the reversal agent with the high-alert medication ensures that if an adverse reaction occurs during administration, the reversal agent is immediately at hand - not in a separate room requiring retrieval.",
        whyWrong: {
          A: "Five-minute accessibility is not close enough for reversal agents during active adverse events.",
          C: "The crash cart alone may not be where the high-alert medication is being used - co-location means at the point of use.",
          D: "The administrator's office is not an appropriate medication storage location.",
        },
        operationalContext:
          "For example: if neostigmine is used as a reversal for neuromuscular blocking agents (NMBAs), ensure atropine and glycopyrrolate are stocked at the same location. For opioids, ensure naloxone is co-stocked at the point of use.",
      },
    },
    {
      id: "asc_med_03",
      question:
        "A nurse draws up propofol into two syringes for two different patients. She labels the syringes only with 'Propofol.' What elements of the MED.200 labeling requirement are missing?",
      options: [
        "The label is complete - drug name is all that is required",
        "Missing: drug strength, amount/volume, expiration date/time, and the nurse's name or initials",
        "Missing: patient name and procedure type",
        "Propofol does not require labeling because it is administered immediately",
      ],
      correctIndex: 1,
      explanation:
        "MED.200 requires five label elements: drug name, strength, amount/volume (if not apparent), expiration date and time, and the preparer's name or initials. Labeling only the drug name satisfies only one of the five requirements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "All five MED.200 elements are independently required. Strength identifies the concentration (10 mg/mL), amount/volume clarifies if a non-standard volume is drawn, expiration date/time limits how long the labeled syringe is valid, and the preparer's identity creates accountability.",
        whyWrong: {
          A: "Drug name alone satisfies only one of five required elements.",
          C: "Patient name is not a MED.200 required label element - though it may be good practice.",
          D: "Once drawn into a second syringe, the medication is no longer in its original container. 'Immediate administration' means no break in the process - preparing two syringes for two different patients involves a break.",
        },
        operationalContext:
          "Use pre-printed medication labels with fields for all five required elements. OR staff should complete all fields at the time of draw - before the syringe leaves the preparation area.",
      },
    },
    {
      id: "asc_med_04",
      question:
        "Under MED.170.10, what is the organization's obligation regarding pre-signed prescriptions?",
      options: [
        "Pre-signed prescriptions may be used if co-signed by a second practitioner",
        "Pre-signed and post-dated prescriptions are prohibited by written policy",
        "Pre-signed prescriptions are permitted only for controlled substances",
        "Pre-signed prescriptions are acceptable if used within 24 hours",
      ],
      correctIndex: 1,
      explanation:
        "MED.170.10 establishes a hard prohibition: pre-signed and post-dated prescriptions are prohibited by written policy. There are no exceptions - not for co-signature, not for specific drug types, not for short use windows.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Pre-signed prescriptions are a significant drug diversion risk. The prohibition must be explicit in written policy, and staff must be trained to recognize and not accept pre-signed or post-dated prescriptions.",
        whyWrong: {
          A: "Co-signature does not legitimize a pre-signed prescription under MED.170.10.",
          C: "The prohibition applies to all prescription types, not just controlled substances.",
          D: "No time window exception exists - pre-signed prescriptions are categorically prohibited.",
        },
        operationalContext:
          "Include the pre-signed/post-dated prescription prohibition in the pharmacy/medication management policy. Include it in practitioner orientation and the prescribing privileges granted by the governing body.",
      },
    },
    {
      id: "asc_med_05",
      question:
        "MED.180.10 requires medications to be segregated into organized, labeled storage areas designed to minimize what specific risk?",
      options: [
        "Temperature exposure",
        "Drug selection errors",
        "Medication theft",
        "Label defacement",
      ],
      correctIndex: 1,
      explanation:
        "MED.180.10 requires that medications are segregated into organized, labeled storage areas designed to minimize drug selection errors - the most frequent cause of wrong-drug administration events.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication segregation - separating LASA medications, organizing by category, and using clear labels - directly reduces the risk of a nurse or provider picking the wrong medication from a storage area.",
        whyWrong: {
          A: "Temperature management is a separate requirement (MED.180.20, SAF.180) - not the design goal of segregation.",
          C: "Theft prevention is a MED.170 drug security issue - segregation is about selection error prevention.",
          D: "Label protection is not the purpose of storage area organization.",
        },
        operationalContext:
          "Organize the medication room so that high-alert medications are stored separately from routine medications, LASA pairs are physically separated with tall-man lettering labels, and each storage bin or shelf is clearly labeled with the medication name and concentration.",
      },
    },
    {
      id: "asc_med_06",
      question:
        "MED.190 requires that patients be provided with information about the safe and effective use of medications. What qualifier does this standard include?",
      options: [
        "The information must be provided only in writing",
        "Information must be consistent with legal requirements and patient needs",
        "Information must be provided by a pharmacist",
        "Information is only required for controlled substances",
      ],
      correctIndex: 1,
      explanation:
        "MED.190 requires that patients are provided with information concerning the safe and effective use of medications consistent with legal requirements and patient needs. The standard is confirmed by interviews with staff and/or observations of patient interaction.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The qualifier 'consistent with legal requirements and patient needs' acknowledges that medication education must be individualized - a patient with limited literacy needs verbal and visual education; a complex medication regimen needs more detailed instruction.",
        whyWrong: {
          A: "Written-only education is not required - verbal education with documentation of the discussion is acceptable.",
          C: "While pharmacist education is ideal, MED.190 does not restrict instruction to pharmacists.",
          D: "Medication education requirements apply to all medications provided, not only controlled substances.",
        },
        operationalContext:
          "Document medication education in the clinical record: medication name, purpose, dose, frequency, common side effects, and signs of adverse reaction. Assess patient understanding before discharge.",
      },
    },
    {
      id: "asc_med_07",
      question:
        "MED.220 requires a written policy for disposal of expired, damaged, and recalled medications. What monitoring requirement does MED.220.20 add?",
      options: [
        "Quarterly medication reviews by a pharmacist",
        "The policy must require monitoring of all medications, including vaccines and samples, for expiration dates on a regular basis",
        "Annual disposal documentation to the DEA",
        "Monitoring is only required for Schedule II controlled substances",
      ],
      correctIndex: 1,
      explanation:
        "MED.220.20 specifically requires the policy to mandate regular monitoring of all medications - including vaccines and samples - for expiration dates. This ensures expired medications are identified and removed before they can be inadvertently administered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The explicit inclusion of vaccines and samples is important - these are often overlooked in routine expiration monitoring. Vaccine samples are a common finding during surveys.",
        whyWrong: {
          A: "Quarterly pharmacist review is not specifically required - the standard requires regular monitoring per organizational policy.",
          C: "Disposal documentation to the DEA is required for controlled substance disposal - it is not what MED.220.20 requires organizationally.",
          D: "The requirement applies to all medications, not only Schedule II controlled substances.",
        },
        operationalContext:
          "Establish a monthly expiration monitoring procedure covering all medication storage locations including anesthesia carts, procedure rooms, sample storage, and vaccine refrigerators. Document the monitoring with staff initials and date.",
      },
    },
    {
      id: "asc_med_08",
      question:
        "MED.240 requires that the vaccine storage unit be equipped with what device?",
      options: [
        "An automatic vaccine administration system",
        "A temperature monitoring device in accordance with the adopted nationally recognized guidelines",
        "A humidity sensor calibrated quarterly",
        "A biometric lock accessible only to trained staff",
      ],
      correctIndex: 1,
      explanation:
        "MED.240.50 requires that the vaccine storage unit is equipped with a temperature monitoring device in accordance with the adopted nationally recognized guidelines. CDC guidelines specify a continuous, digital data logger rather than a simple min/max thermometer.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Temperature excursions destroy vaccine potency. A continuous temperature monitoring device (digital data logger) provides a complete record of storage conditions - a simple thermometer read once a day misses excursions that occur between readings.",
        whyWrong: {
          A: "Automated administration is not a MED.240 requirement.",
          C: "Humidity sensing is not a MED.240 element for vaccines.",
          D: "Security access controls may be appropriate but are not the MED.240.50 equipment requirement.",
        },
        operationalContext:
          "Install a CDC-recommended digital data logger with a buffered temperature probe in each vaccine storage unit. Review the log daily. Document the log review in the vaccine temperature monitoring log.",
      },
    },
    {
      id: "asc_med_09",
      question:
        "Under MED.240, what must staff demonstrate knowledge of regarding temperature excursions?",
      options: [
        "How to purchase replacement vaccines from the manufacturer",
        "Procedures to follow if vaccines are exposed to a temperature excursion",
        "How to calibrate the temperature monitoring device",
        "The chemical composition of each vaccine to determine heat stability",
      ],
      correctIndex: 1,
      explanation:
        "MED.240.60 requires that staff demonstrate knowledge of procedures to follow if vaccines are exposed to a temperature excursion. This includes the chain-of-custody for affected vaccines, notification steps, and how to determine vaccine viability.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "When a temperature excursion occurs, rapid and appropriate response is critical. Staff must know: stop administering affected vaccines, quarantine them, document the excursion, notify the vaccine manager, and contact the manufacturer and/or public health authority to determine vaccine viability.",
        whyWrong: {
          A: "Purchasing replacement vaccines may be the eventual outcome but is not the immediate procedural knowledge required.",
          C: "Device calibration is a maintenance task, not the temperature excursion response procedure.",
          D: "Chemical composition knowledge is beyond the scope of the MED.240 staff competency requirement.",
        },
        operationalContext:
          "Post a temperature excursion response card on the vaccine storage unit: (1) do not discard affected vaccines, (2) label 'do not use,' (3) document excursion in the log, (4) notify the vaccine manager and IPC officer, (5) contact manufacturer and state health department for viability guidance.",
      },
    },
    {
      id: "asc_med_10",
      question:
        "MED.160 addresses confused drug names (LASA medications). Which nationally recognized resource provides a list of these medications?",
      options: [
        "The American Medical Association's Prescribing Safety Guide",
        "ISMP's Confused Drug Names list",
        "The Joint Commission's Sentinel Event database",
        "The FDA's Drug Approval Database",
      ],
      correctIndex: 1,
      explanation:
        "The MED.160 guidance references the ISMP (Institute for Safe Medication Practices) recommendations and specifically links to the ISMP confused drug names list as the source for LASA medications. This list was formerly called 'look-alike, sound-alike' medications.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "ISMP is the authoritative source for LASA and high-alert medication information in the US. The AAAHC guidance explicitly references ISMP resources for MED.150 and MED.160.",
        whyWrong: {
          A: "The AMA does not publish a prescribing safety guide specific to LASA medications.",
          C: "The Joint Commission's Sentinel Event database identifies adverse event trends but is not the LASA list resource.",
          D: "The FDA Drug Approval Database tracks drug approvals - it does not publish LASA medication lists.",
        },
        operationalContext:
          "Download and review the current ISMP Confused Drug Names list at least annually. Cross-reference against your current medication inventory to identify which LASA pairs you stock. Document the review and implement visual differentiation strategies (tall-man lettering, physical separation, color coding) for each identified pair.",
      },
    },
    {
      id: "asc_med_11",
      question:
        "MED.230 governs devices used in medication delivery (nebulizers, IV pumps). What does MED.230.10 require?",
      options: [
        "Devices must be replaced annually",
        "Procedures for maintenance, cleaning, distribution, and use must adhere to manufacturer instructions",
        "Only nursing staff may operate medication delivery devices",
        "Devices must be validated by the state pharmacy board",
      ],
      correctIndex: 1,
      explanation:
        "MED.230.10 requires that procedures for the maintenance, cleaning, distribution, and use of medication delivery devices adhere to the manufacturers' instructions. MED.230.20 additionally requires documented staff training on these procedures.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication delivery devices that are improperly maintained or cleaned can cause medication errors, infections, or delivery failures. Adherence to manufacturer instructions is the minimum standard for these devices.",
        whyWrong: {
          A: "Annual replacement is not the standard - manufacturer maintenance schedules govern replacement intervals.",
          C: "MED.230 does not restrict device operation to nursing staff.",
          D: "State pharmacy board validation is not a MED.230 requirement.",
        },
        operationalContext:
          "For each medication delivery device (IV pump, nebulizer, PCA pump), maintain a copy of the manufacturer's IFU for cleaning and maintenance. Create a device-specific maintenance schedule and competency checklist for staff.",
      },
    },
    {
      id: "asc_med_12",
      question:
        "MED.140.30 requires that monitoring activities related to high-alert and LASA medications be documented. What type of monitoring is required by MED.140.20?",
      options: [
        "Weekly inspection by a pharmacist",
        "Documented staff training on the monitoring policy",
        "Annual submission of monitoring results to ISMP",
        "Monthly purchasing records to verify inventory levels",
      ],
      correctIndex: 1,
      explanation:
        "MED.140.20 requires documentation that relevant staff have been trained on the high-alert and LASA monitoring policy. This is in addition to MED.140.30's requirement for documentation of the monitoring activities themselves.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "MED.140 has three layers: the policy itself (MED.140.10), documented staff training on the policy (MED.140.20), and documentation of actual monitoring activities (MED.140.30). All three must be present.",
        whyWrong: {
          A: "Weekly pharmacist inspection is not specified in MED.140.20.",
          C: "ISMP is a resource organization - submission of monitoring results to ISMP is not required.",
          D: "Purchasing records address supply management, not the MED.140.20 staff training documentation requirement.",
        },
        operationalContext:
          "For MED.140 compliance, maintain three documents: (1) the high-alert and LASA monitoring policy; (2) staff training records showing each relevant employee received training; and (3) monitoring logs showing the results of regular inventory checks against both lists.",
      },
    },
    {
      id: "asc_med_13",
      question:
        "MED.130 applies when pharmaceutical services are provided through a contractual arrangement. What does MED.130.20 require about the contractor?",
      options: [
        "The contractor must be owned by a physician",
        "Documentation must demonstrate that the pharmacy contractor is appropriately licensed and/or certified",
        "The contractor must accept liability for all medication errors",
        "The contractor must be physically located within 10 miles of the ASC",
      ],
      correctIndex: 1,
      explanation:
        "MED.130.20 requires documentation demonstrating that the pharmacy contractor is appropriately licensed and/or certified. This verifies that contracted pharmaceutical services meet the same professional and legal standards as in-house services.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "MED.130 ensures that contracted pharmaceutical services are not held to a lower standard. The governing body must verify the contractor's credentials - a signed contract alone is not sufficient.",
        whyWrong: {
          A: "Physician ownership of the contractor is not required.",
          C: "Liability allocation is a legal/contractual matter - not the MED.130.20 credential verification requirement.",
          D: "Proximity is not a MED.130 requirement.",
        },
        operationalContext:
          "Obtain and file a copy of the pharmacy contractor's state pharmacy license and any relevant certifications. Verify current status through the state pharmacy board's online lookup. Include verification renewal in the annual contract review.",
      },
    },
    {
      id: "asc_med_14",
      question:
        "Under MED.180.20, medications must be stored and managed in accordance with what sources?",
      options: [
        "Only state guidelines - federal guidelines are secondary",
        "Manufacturer requirements AND state and/or CDC guidelines",
        "The organization's internal pharmacy policy, which supersedes all other guidelines",
        "Only the CDC guidelines - manufacturer requirements are advisory",
      ],
      correctIndex: 1,
      explanation:
        "MED.180.20 requires that medications are stored and managed in accordance with both manufacturer requirements AND state and/or CDC guidelines. All applicable standards must be met - not just the most convenient one.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medication storage conditions (temperature ranges, light exposure, humidity) are specified by manufacturers in package inserts. State and CDC guidelines may add additional requirements. Both must be observed.",
        whyWrong: {
          A: "Both federal and state requirements apply - neither is categorically secondary.",
          C: "Internal policies must comply with applicable external standards - they cannot supersede manufacturer or regulatory requirements.",
          D: "Manufacturer requirements are not merely advisory - they are legally relevant to product liability and patient safety.",
        },
        operationalContext:
          "Review the package insert storage conditions for each medication in your formulary. Ensure storage locations meet both manufacturer and CDC/state requirements - especially for temperature-sensitive medications and vaccines.",
      },
    },
    {
      id: "asc_med_15",
      question:
        "MED.100.40 requires that staff demonstrate knowledge of prevailing pharmaceutical laws and regulations. How is this typically assessed during an AAAHC survey?",
      options: [
        "Through review of the pharmacy license posted on the wall",
        "Through interviews with relevant staff",
        "Through submission of annual training records to the state pharmacy board",
        "Only the medical director is required to demonstrate this knowledge",
      ],
      correctIndex: 1,
      explanation:
        "MED.100.40 specifically states that 'through interviews, staff demonstrates knowledge of prevailing pharmaceutical laws and regulations.' Surveyors assess this through direct staff interviews - not just policy review.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The standard explicitly states the assessment method: staff interviews. Surveyors will ask clinical staff about controlled substance handling, prescription laws, and medication administration requirements. Policies on a shelf do not prove staff knowledge.",
        whyWrong: {
          A: "The pharmacy license demonstrates licensure, not staff knowledge.",
          C: "There is no state pharmacy board submission requirement under MED.100.40.",
          D: "All relevant staff - not just the medical director - must demonstrate knowledge.",
        },
        operationalContext:
          "Train all clinical staff on the pharmaceutical laws and regulations relevant to their role (controlled substance handling, prescription pad security, DEA requirements). Use a brief annual knowledge test to document and confirm ongoing competency.",
      },
    },
    {
      id: "asc_med_16",
      question:
        "MED.220.30 requires that drugs identified for disposal are removed from active use. What specific step must be taken first?",
      options: [
        "Immediately flush the medications down the sink",
        "Segregate them from drugs available for active use before disposal",
        "Contact the DEA for disposal authorization for all medications",
        "Notify the manufacturer for return instructions",
      ],
      correctIndex: 1,
      explanation:
        "MED.220.30 requires that expired, damaged, and recalled drugs that are to be disposed of are first segregated from drugs available for active use. This segregation prevents inadvertent administration of the drugs while awaiting disposal.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The segregation step is a bridge between identifying a medication for disposal and actually disposing of it - it prevents anyone from accidentally using the identified item before it is properly disposed of.",
        whyWrong: {
          A: "Flushing medications is not environmentally compliant for most medications and is not the MED.220 step - that is a disposal method, not segregation.",
          C: "DEA authorization is required for controlled substance disposal specifically - not for all medications under MED.220.30.",
          D: "Manufacturer return may be the disposal method for some medications, but segregation from active stock must happen immediately while the return process is arranged.",
        },
        operationalContext:
          "Designate a clearly labeled 'medications for disposal' bin or storage area separate from the active medication stock. Only authorized personnel may place medications in this bin. Document what is placed in the bin and when disposal occurs.",
      },
    },
    {
      id: "asc_med_17",
      question:
        "MED.240.30 requires written policies for vaccine storage and handling in what type of emergency situation?",
      options: [
        "When a vaccine is nearing its expiration date",
        "In case of emergency such as equipment failure, power outage, or natural disasters",
        "When a new vaccine is added to the formulary",
        "When patients decline vaccination during pre-operative assessment",
      ],
      correctIndex: 1,
      explanation:
        "MED.240.30 specifically requires written policies and procedures for vaccine storage, handling, and transport in case of emergency, including equipment failure, power outage, and natural disasters.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Vaccines are temperature-sensitive - a refrigerator failure or power outage can destroy an entire vaccine inventory. Pre-established emergency procedures ensure rapid response to protect vaccines before they are damaged.",
        whyWrong: {
          A: "Expiring vaccines are addressed in routine storage policies and MED.220 - not MED.240.30.",
          C: "Adding a new vaccine to the formulary is addressed in governance and training, not MED.240.30.",
          D: "Patient vaccine declination is a clinical and consent matter, not a storage policy issue.",
        },
        operationalContext:
          "Create a vaccine emergency response plan: who to call, what to do within the first 30 minutes, how to transport vaccines to a compliant backup storage location, and how to document the excursion event for viability assessment.",
      },
    },
    {
      id: "asc_med_18",
      question:
        "What is 'immediate administration' under MED.200, and why does it determine whether labeling is required?",
      options: [
        "Administration within 15 minutes of preparation",
        "When the preparer completely administers the drug to the patient without any break in the process",
        "When a second nurse verifies the medication before administration",
        "Administration within the same shift as preparation",
      ],
      correctIndex: 1,
      explanation:
        "MED.200 defines immediate administration as when the person who prepares or transfers the drug completely administers (or directly witnesses the administration of) the drug to the patient without any break in the process. Any break triggers the labeling requirement.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'no break in the process' definition means: if you draw it up and immediately inject it into the patient in one continuous action, labeling may not be required. If you set it down, hand it to someone, or wait any time - labeling is required.",
        whyWrong: {
          A: "Time elapsed is not the determining factor - the continuity of the process is.",
          C: "Verification by a second nurse introduces a break in the process - labeling would be required.",
          D: "Same-shift preparation does not meet the 'no break' standard.",
        },
        operationalContext:
          "The practical implication: in most OR and procedure room environments, medications drawn into syringes for later or sequential use require labeling. Train staff that the immediate administration exception is narrow and must be applied conservatively.",
      },
    },
    {
      id: "asc_med_19",
      question:
        "An ASC routinely administers heparin from a 10-unit/mL vial and also stocks heparin 1,000-unit/mL vials. Both are stored adjacent to each other. What MED.150 and MED.160 concern does this create?",
      options: [
        "No concern - heparin is not a high-alert medication",
        "Both high-alert medication error prevention (MED.150) and LASA error prevention (MED.160) concerns, because heparin is high-alert and the two concentrations are a known look-alike error risk",
        "Only MED.160 applies - concentration differences are LASA issues only",
        "Only MED.150 applies - LASA concerns only exist for medications with different names",
      ],
      correctIndex: 1,
      explanation:
        "Heparin is a well-known high-alert medication (MED.150). The 10-unit/mL and 1,000-unit/mL concentrations are a significant LASA risk (MED.160). Adjacent storage of different concentrations violates both standards' error prevention requirements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Heparin concentration errors have resulted in patient deaths, including high-profile cases involving neonates. Both MED.150 (high-alert error prevention) and MED.160 (LASA confusion prevention) apply, and the storage arrangement described is a direct risk factor.",
        whyWrong: {
          A: "Heparin is on both the ISMP high-alert medications list and the ISMP confused drug names list.",
          C: "LASA risks include different concentrations of the same drug - this is a documented heparin-specific risk category.",
          D: "LASA risks are not limited to different drug names - different concentrations and formulations of the same drug are equally hazardous.",
        },
        operationalContext:
          "Physically separate the two heparin concentrations - different storage bins or drawers. Apply tall-man lettering and color-coded alerts to each. Conduct a double-check before heparin administration. Remove the concentration not needed for your specific patient population if clinically feasible.",
      },
    },
    {
      id: "asc_med_20",
      question:
        "MED.100.50 requires direct access to current drug information and other decision support resources. Who must have this access?",
      options: [
        "Only the medical director and pharmacist",
        "All relevant staff",
        "Only staff with controlled substance handling responsibilities",
        "Clinical staff only - administrative staff are excluded",
      ],
      correctIndex: 1,
      explanation:
        "MED.100.50 requires direct access to current drug information and decision support resources for all relevant staff - not just physicians or pharmacists. Any staff member involved in medication management (nurses, anesthesia providers, surgical technicians) must have access.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Drug information access at the point of care enables safe real-time decision-making. Nurses administering medications need to verify doses, interactions, and side effects - access to current drug information is a fundamental safety tool.",
        whyWrong: {
          A: "Drug information access is not limited to physicians and pharmacists - all staff involved in medication management need it.",
          C: "Controlled substance-only access is too narrow - all relevant staff are covered.",
          D: "Administrative staff may be 'relevant' if they are involved in medication-related functions - the standard covers 'all relevant staff.'",
        },
        operationalContext:
          "Subscribe to a clinical drug information database (e.g., Lexicomp, Micromedex, or ClinicalKey Pharmacology) accessible on workstations in medication rooms, procedure rooms, and at nursing stations. Ensure all relevant staff have accounts or shared access.",
      },
    },
  ],
};
