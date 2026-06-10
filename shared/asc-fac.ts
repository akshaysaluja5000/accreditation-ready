import type { Level } from "./schema";

export const ascFacLevel: Level = {
  id: "asc_fac",
  module: "asc",
  name: "Facilities & Equipment",
  description: "AAAHC v44 FAC - physical environment safety, space requirements, equipment maintenance, emergency power, and environmental controls.",
  icon: "Building",
  color: "hsl(170, 50%, 38%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "FAC: Facilities and Equipment",
    plainLanguageSummary:
      "The FAC category addresses the physical environment and equipment of the ambulatory surgery center. Standards cover the safety of the physical environment, adequate space and equipment for the services provided, decontamination and instrument processing areas, environmental controls in procedure areas, equipment maintenance and calibration, alternate power for operative and recovery areas, and specialty equipment for specific service lines. The physical environment must support safe, effective patient care for all procedures performed.",
    keyOperationalExpectations: [
      "The physical environment is safe for patients, staff, and visitors.",
      "Space, equipment, and supplies are adequate for the procedures and services provided.",
      "The decontamination area is separate from clean and sterile areas, with unidirectional workflow.",
      "Environmental controls (temperature, humidity, ventilation) are maintained per nationally recognized guidelines.",
      "Medical equipment is maintained with documented periodic calibration and preventive maintenance per manufacturer specifications.",
      "Alternate power is available in operative and recovery areas for facilities using moderate/deep sedation or general anesthesia.",
    ],
    commonRiskPoints: [
      "Decontamination area shares space with clean or sterile areas - no physical separation.",
      "Equipment maintenance logs are absent or show gaps between preventive maintenance dates.",
      "Emergency power backup is untested or documented only at initial installation without subsequent testing.",
      "Environmental control parameters (OR temperature/humidity) are not monitored or documented.",
    ],
    aaahcStandards: ["FAC.100", "FAC.110", "FAC.120", "FAC.130", "FAC.140", "FAC.150", "FAC.160", "FAC.250", "FAC.260"],
  },
  studyMaterial: [
    {
      title: "What documentation shows that a facility meets building safety standards?",
      content:
        "The facility must have documentation showing it complies with applicable building codes. Acceptable proof includes an occupancy permit, a letter from the local fire authority, or written confirmation from a building approval agency. The facility must also have written policies on safety and security practices, and staff must visibly follow those practices.",
      keyPoint:
        "Building code compliance must be documented with a permit or official letter. Security policies must also be observed in practice, not just written down.",
    },
    {
      title: "What physical features must a facility have to protect patient privacy and comfort?",
      content:
        "Waiting areas and restrooms must be large enough for the number of patients and visitors typically present. Exam rooms, dressing rooms, and consultation areas must provide privacy during conversations and examinations. The facility must also prohibit smoking inside, provide accommodations for people with disabilities, and ensure adequate lighting and ventilation throughout.",
      keyPoint:
        "Patient privacy, disability accommodations, adequate lighting and ventilation, and smoking prohibition are all required physical environment features.",
    },
    {
      title: "What must staff look for during routine facility checks?",
      content:
        "Facility rounds must check that all surfaces are clean and free of visible soil, rust, or mold. Walls, plumbing, and electrical systems must be in good working order. Staff must also watch for anything that could cause a patient or staff member to slip, fall, get a shock, or be burned.",
      keyPoint:
        "Cleanliness, maintenance, and absence of safety hazards are all evaluated through direct observation during both routine rounds and accreditation surveys.",
    },
    {
      title: "What is required for fire extinguisher maintenance at your facility?",
      content:
        "Fire extinguishers must be placed so that any point in the building is within 75 feet walking distance of one. Staff must check each extinguisher monthly and document those checks. Full maintenance inspections must be performed and documented annually.",
      keyPoint:
        "Fire extinguishers must be within 75 feet of any location, checked monthly with documentation, and inspected annually.",
    },
    {
      title: "What must be kept up to date for medical equipment used in patient care?",
      content:
        "Medical equipment must be regularly maintained following the manufacturer's instructions for calibration and preventive maintenance. Records must show when maintenance was last performed and that it was completed per the manufacturer's schedule. Written policies must also outline the steps for using each type of equipment correctly.",
      keyPoint:
        "Both written maintenance policies and actual maintenance records are required. Calibration and preventive maintenance must follow the manufacturer's schedule.",
    },
    {
      title: "What backup power requirements apply when anesthesia is used at the facility?",
      content:
        "If the facility administers moderate sedation, deep sedation, or general anesthesia, it must have backup power available in both the operating area and the recovery area. The backup power must be adequate to support all critical equipment used during procedures. Having a generator alone is not enough if it cannot power all necessary OR equipment.",
      keyPoint:
        "Backup power must be both present and adequate for the types of procedures performed. Documented testing is needed to prove it works.",
    },
  ],
  questions: [
    {
      id: "asc_fac_01",
      question:
        "During an AAAHC survey, the surveyor observes that the instrument decontamination sink is located in the same room as the clean instrument packaging area, with no physical barrier. What FAC standard is this most likely violating?",
      options: [
        "FAC.100 - general physical environment safety",
        "IPC.170 - decontamination area must be separate from clean areas with unidirectional workflow",
        "FAC.250 - equipment maintenance requirement",
        "FAC.260 - alternate power requirement"
      ],
      correctIndex: 1,
      explanation:
        "IPC.170 requires a separate decontamination area with unidirectional workflow - soiled instruments should travel from decontamination to cleaning to sterile packaging without crossing clean areas. A shared space violates this physical separation requirement.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The physical separation of soiled from clean processes is fundamental to preventing cross-contamination during instrument processing. IPC.170 (and IPC.170) require this separation - not just a policy commitment to be careful.",
        whyWrong: {
          A: "FAC.100 is the overarching environment safety standard - IPC.170 is the specific instrument processing standard that applies here.",
          C: "FAC.250 addresses equipment maintenance, not area separation.",
          D: "FAC.260 addresses backup power, not physical layout.",
        },
        operationalContext:
          "If physical separation is not possible, create a designated soiled processing time versus clean packaging time with documented sanitization of the shared surface between uses. However, a dedicated separate room is the ideal solution.",
      },
    },
    {
      id: "asc_fac_02",
      question:
        "An ASC's backup generator was installed three years ago. There are no records of any testing since installation. What FAC.260 requirement is not being met?",
      options: [
        "Generators only need to be tested at initial installation - no ongoing testing is required",
        "The alternate power must be tested to confirm adequacy, and results must be documented - the absence of test records is a deficiency",
        "Testing is required only after a power outage",
        "Generator testing is an FAC requirement only for facilities performing cardiac procedures"
      ],
      correctIndex: 1,
      explanation:
        "FAC.260 requires alternate power to be available AND adequate for the procedures performed. 'Available and adequate' implies testing - and the NFPA 110 and other applicable standards require periodic generator testing (typically monthly load testing) with documented results.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A generator that has never been tested since installation may not actually start or provide adequate power when needed. Testing with documentation is the only way to verify continued adequacy.",
        whyWrong: {
          A: "Ongoing testing is required - generators must be regularly exercised to ensure they will function when needed.",
          C: "Testing should be proactive, not reactive - waiting for a power outage to verify adequacy is not compliant.",
          D: "FAC.260 applies to any organization using moderate or deeper sedation, not just those performing cardiac procedures.",
        },
        operationalContext:
          "Establish a monthly generator test protocol: load-test the generator for at least 30 minutes, verify transfer to generator power in all required areas, document the test date, duration, and results. Keep logs for at least three years.",
      },
    },
    {
      id: "asc_fac_03",
      question:
        "FAC.250 requires documentation of equipment maintenance. Which two types of documentation are specifically required?",
      options: [
        "Purchase receipts and warranty cards",
        "Calibration documentation (if applicable) AND preventive maintenance documentation",
        "Manufacturer data sheets and staff operating manuals",
        "Insurance certificates and equipment serial numbers"
      ],
      correctIndex: 1,
      explanation:
        "FAC.250.30 requires documentation of periodic calibration per manufacturer's specifications (when calibration is required), and FAC.250.40 requires documentation of preventive maintenance per manufacturer's instructions. Both must be current and on file.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "These two documentation types prove that equipment is being maintained according to the manufacturer's requirements. Without them, the organization cannot demonstrate that equipment is in safe operating condition.",
        whyWrong: {
          A: "Purchase receipts and warranties establish acquisition history - they do not prove ongoing maintenance.",
          C: "Manufacturer data sheets are reference documents - they don't document that maintenance was performed.",
          D: "Insurance and serial numbers are administrative records - not maintenance documentation.",
        },
        operationalContext:
          "Create an equipment inventory log with columns for: equipment name, serial number, location, calibration frequency required, last calibration date/result, PM frequency required, and last PM date. Review this log quarterly.",
      },
    },
    {
      id: "asc_fac_04",
      question:
        "An ASC is planning to add a new procedure that requires significant OR equipment not currently owned. Under FAC.100, what must be assessed before the new procedure is offered?",
      options: [
        "Only the revenue potential of the new procedure",
        "Whether space, equipment, and supplies are adequate for the type and volume of the new procedure",
        "Whether all existing staff are interested in learning the new procedure",
        "FAC.100 only applies to procedures already in the scope - new procedures are covered by GOV"
      ],
      correctIndex: 1,
      explanation:
        "FAC.100 requires that space, equipment, and supplies are adequate for the types of procedures performed. Before adding a new procedure, the organization must assess whether its facilities can support it safely - including physical space, specialized equipment, and required supplies.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "FAC.100 is not static - it applies to the current scope of services and must be re-evaluated when services change. Adding a procedure without facility assessment is a potential patient safety failure.",
        whyWrong: {
          A: "Revenue potential is a business decision - FAC.100 requires a safety and capacity assessment.",
          C: "Staff interest is relevant to training planning but is not the FAC.100 assessment requirement.",
          D: "FAC.100 applies continuously to all procedures performed, including newly added ones.",
        },
        operationalContext:
          "Before adding any new procedure type, complete a facility readiness checklist: space assessment, equipment procurement and testing, supply chain confirmation, staff training plan, and IPC risk assessment. Document the readiness determination before the first case.",
      },
    },
    {
      id: "asc_fac_05",
      question:
        "Which nationally recognized standard is commonly referenced for determining appropriate temperature, humidity, and ventilation parameters in ASC procedure rooms?",
      options: [
        "OSHA 29 CFR 1910.1030",
        "ASHRAE 170 (Ventilation of Health Care Facilities)",
        "The Joint Commission Environment of Care standards",
        "NFPA 70 (National Electrical Code)"
      ],
      correctIndex: 1,
      explanation:
        "ASHRAE Standard 170 (Ventilation of Health Care Facilities) is the primary nationally recognized guideline for temperature, humidity, air exchanges, and pressure relationships in healthcare facility procedure rooms. IPC.230 and IPC.230 both require alignment with nationally recognized guidelines for environmental controls.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "ASHRAE 170 specifies OR temperature (68-75°F), relative humidity (20-60%), minimum air exchanges per hour, and pressure differentials for different room types. AAAHC surveyors expect facilities to reference and meet these parameters.",
        whyWrong: {
          A: "OSHA 29 CFR 1910.1030 is the Bloodborne Pathogens Standard - not an environmental control standard.",
          C: "The Joint Commission is a different accreditation body - AAAHC does not reference TJC EOC standards.",
          D: "NFPA 70 is the electrical code - not applicable to ventilation and temperature requirements.",
        },
        operationalContext:
          "Install OR temperature and humidity monitors with real-time display. Set alarms at the ASHRAE 170 thresholds. Document readings daily. When parameters fall out of range, implement the defined response procedure and document the resolution.",
      },
    },
    {
      id: "asc_fac_06",
      question:
        "An autoclave's biological indicator tests show a recent failure, but the preventive maintenance log shows PM was completed six months ago per the manufacturer's 6-month schedule. What additional FAC.250 step is triggered?",
      options: [
        "Nothing additional - PM is current per the manufacturer schedule",
        "A sterilizer failure requires taking the unit out of service and investigating the cause - PM alone does not address a biological indicator failure",
        "The sterilizer may continue to be used until the next scheduled PM",
        "Only the IPC officer needs to be notified - FAC standards are not implicated"
      ],
      correctIndex: 1,
      explanation:
        "A biological indicator failure (positive spore test) indicates a sterilization failure - this is an equipment performance issue that goes beyond routine PM. The sterilizer must be taken out of service, investigated, and cleared before return to use. FAC.250 requires equipment to be maintained to safe operating standards - a malfunctioning sterilizer is not meeting that standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Preventive maintenance ensures the equipment is serviced per schedule - but when the equipment fails its performance test, additional investigation is required regardless of PM status. PM and performance testing are complementary, not substitutes.",
        whyWrong: {
          A: "Current PM does not excuse a performance failure - PM is maintenance, not performance validation.",
          C: "A failed sterilizer must not continue in use - all items from the failed cycle must be quarantined.",
          D: "FAC.250 (equipment maintenance and performance) is directly implicated in a sterilizer failure.",
        },
        operationalContext:
          "Document the biological indicator failure in the sterilization log and the equipment maintenance log. Initiate sterilizer failure protocol: quarantine affected items, notify biomed, call the sterilizer service company, obtain a service report before returning to use.",
      },
    },
    {
      id: "asc_fac_07",
      question:
        "FAC.150 addresses the safety of the environment. Which statement best describes an organization's ongoing obligation under this standard?",
      options: [
        "A safety inspection at initial accreditation satisfies FAC.150 permanently",
        "The physical environment must be continuously maintained as safe for patients, staff, and visitors, with identified hazards addressed promptly",
        "FAC.150 is only relevant to the procedure rooms - common areas are excluded",
        "FAC.150 compliance is the contractor's responsibility, not the ASC's"
      ],
      correctIndex: 1,
      explanation:
        "FAC.150 and FAC.100 together establish that the physical environment must be maintained as safe on an ongoing basis - not just at the time of a survey. Identified hazards must be remediated promptly, and the organization must have processes for identifying new hazards.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Physical environment safety is an ongoing operational requirement. Hazards that emerge between surveys (damaged flooring, malfunctioning equipment, blocked exits) must be addressed promptly - not allowed to persist until the next accreditation visit.",
        whyWrong: {
          A: "Survey findings establish a compliance baseline - ongoing maintenance is the continuous requirement.",
          C: "FAC standards apply to the entire facility: procedure rooms, recovery areas, common areas, staff work areas, and patient pathways.",
          D: "The ASC bears responsibility for the safety of its physical environment regardless of who manages the building.",
        },
        operationalContext:
          "Implement monthly environmental safety rounds using a standardized checklist (exits, lighting, equipment condition, floor surfaces, hazard labeling). Document findings and corrective actions with target completion dates.",
      },
    },
    {
      id: "asc_fac_08",
      question:
        "An ASC adds a lithotripsy service. Under FAC.100, what must be present to support this service?",
      options: [
        "Only a written policy for lithotripsy treatment",
        "Equipment, adequate supplies, and written policies/procedures for providing appropriate lithotripsy treatment in accordance with manufacturer's guidelines",
        "A designated urologist on-call at all times",
        "A dedicated lithotripsy suite separate from all other procedure areas"
      ],
      correctIndex: 1,
      explanation:
        "FAC.100 requires that equipment adequate to treat per manufacturer's guidelines, adequate supplies, and written policies and procedures governing lithotripsy treatment are all present. The policies must address indications, contraindications, maximum power settings, maximum shocks, patient position, and patient size/weight.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "FAC.100 is a selective standard that applies when lithotripsy is offered. It requires three elements: equipment, supplies, and written guidelines - all aligned with the manufacturer's specifications.",
        whyWrong: {
          A: "Written policies alone are not sufficient - the equipment and supplies must also be adequate.",
          C: "A designated urologist oversight is a GOV.320 requirement - not a FAC.100 facility equipment requirement.",
          D: "A dedicated lithotripsy suite is not specifically required by FAC.100 - adequate space within the facility for safe treatment is what is required.",
        },
        operationalContext:
          "When adding lithotripsy, create a service-specific facility checklist: equipment purchase and validation, supply inventory, written lithotripsy policies per manufacturer IFU, and governing body approval of the service (GOV.180) and urologist oversight (GOV.320).",
      },
    },
    {
      id: "asc_fac_09",
      question:
        "The AAAHC survey team notes that the procedure room's humidity gauge consistently reads above the maximum level for a procedure room. The administrator says it has been that way for months. What FAC standard is violated?",
      options: [
        "FAC.100 - general physical environment safety",
        "Both IPC.230/230 - written environmental controls policy requirement and the implementation/monitoring requirement",
        "FAC.250 - equipment maintenance requirement",
        "No FAC standard is violated - humidity is a comfort issue, not a patient safety issue"
      ],
      correctIndex: 1,
      explanation:
        "IPC.230 and IPC.230 together require that environmental controls (including humidity) are maintained within parameters specified by nationally recognized guidelines (ASHRAE 170), monitored, and documented. A months-long out-of-range humidity reading represents a monitoring failure AND an environmental control failure.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "High humidity in an OR or procedure room increases infection risk (bacterial and fungal growth, condensation on sterile surfaces) and is a fire hazard. ASHRAE 170 specifies acceptable humidity ranges. Sustained out-of-range conditions represent a serious FAC and IPC issue.",
        whyWrong: {
          A: "FAC.100 is the overarching standard, but IPC.230/230 are the specific environmental controls standards violated.",
          C: "FAC.250 addresses equipment maintenance, not environmental parameters.",
          D: "Humidity is absolutely a patient safety issue - high humidity in procedure rooms increases SSI risk and creates other hazards.",
        },
        operationalContext:
          "When a procedure room's environmental parameters fall out of range, log the event, notify the facilities manager, and assess whether affected cases need additional clinical review. Do not use the room for procedures until parameters are corrected and re-verified.",
      },
    },
    {
      id: "asc_fac_10",
      question:
        "An ASC has a blood glucose meter for pre-op blood sugar monitoring. Under FAC.250, what maintenance documentation is required?",
      options: [
        "No documentation is required for simple diagnostic devices",
        "Documentation of periodic calibration per manufacturer's specifications and preventive maintenance per manufacturer instructions",
        "Only documentation of the original purchase and manufacturer warranty",
        "Calibration is only required if the device fails a quality control test"
      ],
      correctIndex: 1,
      explanation:
        "FAC.250 requires documentation of periodic calibration (FAC.250.30) and preventive maintenance (FAC.250.40) for medical equipment. A point-of-care glucose meter requires calibration and quality control per the manufacturer and CLIA requirements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Blood glucose meters are medical equipment subject to FAC.250 maintenance requirements. Calibration verification (using control solutions) and PM per manufacturer specifications must be performed and documented.",
        whyWrong: {
          A: "All medical equipment - including simple diagnostic devices - falls under FAC.250.",
          C: "Purchase documentation proves acquisition; maintenance documentation proves ongoing calibration and PM compliance.",
          D: "Calibration is performed on a schedule - not only when a QC failure occurs. QC failure triggers corrective action, but scheduled calibration is proactive.",
        },
        operationalContext:
          "Create an equipment log for each glucose meter: serial number, control solution lot number, calibration verification date and result, and PM completion date. Check controls at each use or at defined intervals per manufacturer instructions.",
      },
    },
    {
      id: "asc_fac_11",
      question:
        "FAC.260 requires alternate power adequate for the types of surgery performed. What specific facility types are included in this requirement?",
      options: [
        "All ambulatory surgery centers regardless of anesthesia level",
        "Organizations that administer moderate sedation/analgesia, regional anesthesia, deep sedation/analgesia, or general anesthesia",
        "Only facilities that use general anesthesia",
        "FAC.260 applies only to facilities with more than two procedure rooms"
      ],
      correctIndex: 1,
      explanation:
        "FAC.260 guidance specifies that the standard applies to organizations that administer moderate sedation/analgesia, regional anesthesia, deep sedation/analgesia, or general anesthesia. Facilities using only minimal sedation or local anesthesia may not be required to meet FAC.260.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The trigger for FAC.260 is the administration of sedation or anesthesia beyond minimal sedation. At these levels, equipment-dependent monitoring and life support become essential - power failure during a case could be catastrophic without backup power.",
        whyWrong: {
          A: "Facilities using only local anesthesia/minimal sedation may not be required to meet FAC.260.",
          C: "The requirement applies to moderate sedation and above - not only general anesthesia.",
          D: "FAC.260 applicability is determined by anesthesia level, not procedure room count.",
        },
        operationalContext:
          "Calculate the power load required during your most equipment-intensive case (OR lights, electrosurgical unit, anesthesia machine, monitoring equipment). Verify your generator has sufficient capacity for this load. Document this adequacy assessment.",
      },
    },
    {
      id: "asc_fac_12",
      question:
        "An ASC telehealth-enables its pre-operative assessment process. Under FAC standards, what applies to medical equipment used by staff or provided to patients in telehealth encounters?",
      options: [
        "Equipment used in telehealth is exempt from FAC maintenance requirements",
        "Medical equipment used in telehealth encounters is subject to the same FAC maintenance standards as in-person equipment",
        "Telehealth equipment is only subject to IT department standards",
        "FAC.250 only applies to physical equipment used in the procedure room - not remote monitoring equipment"
      ],
      correctIndex: 1,
      explanation:
        "The AAAHC v44 guidance for FAC.250 explicitly states that if telehealth and telemedicine services are offered, medical equipment utilized by staff or provided to the patient is appropriately maintained according to this Standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC v44 guidance directly addresses telehealth equipment: the same maintenance standards apply. Remote monitoring devices, digital stethoscopes, or pulse oximeters provided to patients must be maintained per manufacturer specifications.",
        whyWrong: {
          A: "Telehealth equipment is not exempt - it is explicitly covered by FAC.250 guidance.",
          C: "IT standards address connectivity and security - they do not substitute for medical device maintenance requirements.",
          D: "FAC.250 applies to all medical equipment regardless of where it is deployed.",
        },
        operationalContext:
          "Extend your equipment inventory log to include telehealth devices: the video-enabled exam devices, remote monitoring equipment, or diagnostic tools provided to patients. Include them in the calibration and PM schedule.",
      },
    },
    {
      id: "asc_fac_13",
      question:
        "An ASC provides radiation oncology teletherapy services. Under FAC.280, what equipment must be available?",
      options: [
        "Only a radiation safety survey meter",
        "Super voltage or megavoltage machine(s) for external beam treatments, kilovoltage x-ray source, computerized dosimetry, and simulation/CT imaging - all must be present or accessible",
        "A single linear accelerator is sufficient for all teletherapy requirements",
        "FAC.280 equipment requirements are waived if the organization has an agreement with a hospital-based radiation oncology department"
      ],
      correctIndex: 1,
      explanation:
        "FAC.280 lists specific equipment requirements for teletherapy: external beam machines (linear accelerators, Gamma Knife, etc.); kilovoltage x-ray for skin lesions; computerized dosimetry; simulation and/or CT imaging; patient transport; personal immobilization devices; and technologies for shaping dose distributions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "FAC.280 is a comprehensive equipment standard for teletherapy that covers the full spectrum of equipment required for safe radiation treatment planning and delivery.",
        whyWrong: {
          A: "A safety survey meter is one component - FAC.280 requires a full complement of treatment planning and delivery equipment.",
          C: "A single linear accelerator alone would not meet all FAC.280 requirements (dosimetry, simulation, etc.).",
          D: "FAC.280 applies to organizations that provide teletherapy services - agreements do not substitute for having required equipment present or accessible.",
        },
        operationalContext:
          "For radiation oncology services, FAC.280 should be reviewed by the radiation oncology medical physicist during annual safety review. Document equipment availability and accessibility for each required element.",
      },
    },
    {
      id: "asc_fac_14",
      question:
        "Under FAC.100, what must be present in post-anesthesia care units (PACU) or recovery areas?",
      options: [
        "Only supplemental oxygen equipment",
        "Equipment, supplies, and staff adequate to monitor and respond to patients recovering from anesthesia - as required by the level of anesthesia used",
        "A minimum of two nurses per patient at all times",
        "FAC.100 only applies to facilities that use general anesthesia"
      ],
      correctIndex: 1,
      explanation:
        "FAC.100 requires adequate equipment, supplies, and staffing in the recovery area appropriate to the level of anesthesia used by the organization. This ensures patients can be safely monitored and complications managed during the critical post-anesthesia period.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Recovery area requirements are calibrated to the highest level of anesthesia used. A facility using general anesthesia must have more comprehensive monitoring equipment and staffing than one using only local anesthesia.",
        whyWrong: {
          A: "Oxygen alone is not sufficient - monitoring equipment (pulse oximetry, cardiac monitoring), emergency response equipment, and appropriately qualified staff are all required.",
          C: "Staffing ratios may be defined by state regulation, but FAC.100 does not specify a 2:1 patient ratio.",
          D: "FAC.100 applies at any level of anesthesia - the standard scales with the depth of sedation used.",
        },
        operationalContext:
          "Establish written PACU standards: minimum monitoring equipment (SpO2, EtCO2, NIBP, ECG), staff qualification requirements, discharge criteria, and patient observation ratios. Calibrate these to the deepest level of anesthesia used at your facility.",
      },
    },
    {
      id: "asc_fac_15",
      question:
        "A biomedical technician performs preventive maintenance on all OR equipment on the same day. One piece of equipment - the electrosurgical unit - shows an anomaly on its performance test but is put back in service anyway. What FAC.250 risk does this create?",
      options: [
        "No risk - the PM was completed as scheduled",
        "Returning equipment with a documented performance anomaly to patient service without resolution is a safety failure under FAC.250",
        "The anomaly can be addressed at the next scheduled PM",
        "FAC.250 compliance is based on PM completion, not on performance test results"
      ],
      correctIndex: 1,
      explanation:
        "FAC.250 requires that equipment is 'appropriately maintained' - which means that identified anomalies must be investigated and resolved before the equipment is returned to patient use. Completing the PM schedule while ignoring a performance anomaly does not satisfy FAC.250.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "An electrosurgical unit (ESU) with a performance anomaly poses significant patient safety risk - including fire, unintended tissue damage, and patient burns. FAC.250 requires equipment to be maintained to safe operating standards, which means anomalies must be resolved.",
        whyWrong: {
          A: "PM completion is the schedule requirement - equipment safety is the performance requirement. Both must be met.",
          C: "A performance anomaly identified during PM requires immediate action - not deferral to the next PM cycle.",
          D: "FAC.250 compliance includes both completing the PM schedule and addressing identified performance issues.",
        },
        operationalContext:
          "Establish a failed equipment protocol: any equipment that fails a performance test during PM is tagged 'Do Not Use,' removed from service, and sent for repair. Document the failure, repair, and return-to-service testing in the equipment log.",
      },
    },
    {
      id: "asc_fac_16",
      question:
        "An ASC's physical plant has a patient restroom with a broken grab bar that has been awaiting repair for three weeks. What FAC concern does this represent?",
      options: [
        "No FAC concern - bathroom fixtures are not medical equipment",
        "A hazard that must be addressed promptly as part of maintaining a safe physical environment under FAC.100/150",
        "This is only an ADA compliance issue, not an AAAHC concern",
        "Only the building owner is responsible for fixture repairs - the ASC has no AAAHC obligation"
      ],
      correctIndex: 1,
      explanation:
        "A broken grab bar in a patient restroom is a fall hazard - which directly implicates FAC.100/150 (safe physical environment) and SAF.140.30 (fall prevention). The three-week repair delay with no interim safety measure (like a 'do not use' closure) demonstrates inadequate hazard response.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A grab bar exists specifically to prevent patient falls - a broken one creates the exact risk the fixture was installed to prevent. Prompt hazard resolution is required under FAC and SAF standards.",
        whyWrong: {
          A: "Patient safety infrastructure (including grab bars) is part of the physical environment subject to FAC requirements.",
          C: "ADA and AAAHC obligations overlap but are independent - AAAHC requires a safe environment regardless of ADA compliance.",
          D: "The ASC bears responsibility for the safety of its patient care environment - even if the building owner holds the repair responsibility, the ASC must take interim safety measures.",
        },
        operationalContext:
          "When a facility hazard is identified: (1) immediately implement interim safety measures (close the restroom, post a warning, provide alternative access), (2) issue a work order with a target repair date, and (3) document both the interim measure and the completed repair in the safety event log.",
      },
    },
    {
      id: "asc_fac_17",
      question:
        "What is the primary purpose of requiring unidirectional workflow in the instrument decontamination and processing area per IPC.170?",
      options: [
        "To maximize efficiency of instrument processing",
        "To prevent cross-contamination between soiled instruments and clean or sterile items",
        "To meet OSHA traffic control requirements",
        "Unidirectional flow is a recommendation, not a requirement"
      ],
      correctIndex: 1,
      explanation:
        "Unidirectional workflow - soiled instruments moving from decontamination → cleaning → packaging → sterile storage - prevents clean or sterile items from becoming contaminated by soiled instruments or associated aerosols. This is a patient safety requirement, not just an efficiency measure.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Cross-contamination during instrument processing is a direct cause of healthcare-associated infections. The physical separation and unidirectional flow are engineering controls that make it structurally impossible for soiled and clean/sterile items to occupy the same space.",
        whyWrong: {
          A: "Efficiency may be a secondary benefit, but cross-contamination prevention is the patient safety rationale.",
          C: "OSHA traffic control is not the regulatory framework for decontamination flow - IPC and FAC standards are.",
          D: "IPC.170 makes this a requirement - it is not advisory.",
        },
        operationalContext:
          "Map the physical flow of instruments through your decontamination area on a floor plan. Mark soiled intake, soiled sink, decontamination, clean rinsing, drying, inspection, packaging, and sterile storage as sequential zones. Post the flow map and enforce unidirectional traffic.",
      },
    },
    {
      id: "asc_fac_18",
      question:
        "An ASC performs upper endoscopy procedures using flexible endoscopes. What special FAC concern applies to these scopes compared to surgical instruments?",
      options: [
        "Endoscopes have no special FAC concerns - they are processed the same as all surgical instruments",
        "Flexible endoscopes are complex devices that cannot be steam sterilized and require high-level disinfection per manufacturer instructions and nationally recognized guidelines (AAMI, SGNA, ASGE) - with specific FAC facility requirements for safe processing",
        "Endoscopes are disposable after each use - no processing area is needed",
        "IPC.170 exempts flexible endoscopes from unidirectional workflow requirements"
      ],
      correctIndex: 1,
      explanation:
        "Flexible endoscopes are heat-sensitive and cannot be autoclaved - they require manual cleaning followed by high-level disinfection (HLD) using chemical germicides. This process requires dedicated sinks, HLD solution monitoring, and ventilation controls for personnel protection. IPC.170 and IPC.170 apply to endoscope reprocessing.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Endoscope reprocessing has unique facility requirements: a dedicated cleaning sink (manual pre-clean), leak testing, channel brushing, and HLD soaking in an approved chemical germicide. The HLD chemical requires ventilation (some chemicals are toxic) and documented exposure time and concentration checks.",
        whyWrong: {
          A: "Flexible endoscopes have unique processing requirements incompatible with standard instrument sterilization.",
          C: "Most flexible endoscopes are reusable, not single-use.",
          D: "IPC.170 unidirectional workflow applies to endoscope reprocessing just as it does to instrument sterilization.",
        },
        operationalContext:
          "Follow AAMI/ANSI ST91 and SGNA/ASGE joint guidelines for endoscope reprocessing. Facilities must have: dedicated soiled endoscope receiving area, HLD processing area with ventilation, and clean/dry storage. Monitor HLD concentration with test strips at each use. Document all reprocessing steps.",
      },
    },
    {
      id: "asc_fac_19",
      question:
        "IPC.230 requires that environmental controls are implemented in procedure areas. What evidence would a surveyor most likely examine to verify compliance?",
      options: [
        "The architect's original design specifications for the building",
        "Temperature, humidity, and air pressure monitoring logs with documented daily readings within the acceptable ranges",
        "Staff verbal statements about their comfort level in the procedure rooms",
        "The HVAC contractor's most recent service invoice"
      ],
      correctIndex: 1,
      explanation:
        "IPC.230 requires implementation and documentation of environmental controls. Surveyors look for monitoring logs showing that temperature, humidity, and pressure parameters are being actively measured and recorded - with values confirmed to be within the acceptable ranges specified by nationally recognized guidelines.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Monitoring logs provide objective, time-stamped evidence that parameters are continuously maintained. Logs also reveal when parameters go out of range and whether corrective action was taken.",
        whyWrong: {
          A: "Original design specifications prove intent - not current operating conditions.",
          C: "Staff comfort is subjective and cannot verify compliance with specific temperature/humidity parameters.",
          D: "Service invoices prove maintenance was performed - not that the system is operating within required parameters.",
        },
        operationalContext:
          "Use a daily OR environmental monitoring log with fields for: date, time, temperature reading, humidity reading, pressure differential (positive/negative vs. corridor), and staff initials. Review monthly for trends. Investigate and document any out-of-range readings.",
      },
    },
    {
      id: "asc_fac_20",
      question:
        "Under FAC.250, what does 'standardized use of equipment' mean as a policy requirement?",
      options: [
        "All staff must use the same brand of equipment",
        "Written policies must define how each piece of equipment is to be used correctly and consistently by trained personnel",
        "Equipment use is standardized by the manufacturer - no organizational policy is needed",
        "Only the biomedical engineer defines how equipment is used"
      ],
      correctIndex: 1,
      explanation:
        "FAC.250.20.1 requires that equipment maintenance policies address 'standardized use of the equipment.' This means written operational procedures defining how the equipment is correctly and consistently used by trained personnel - covering set-up, operation, and any safety precautions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Standardized use procedures ensure that every trained operator uses the equipment the same way - reducing user-error-related equipment malfunctions and patient safety incidents. This is distinct from the maintenance/calibration documentation requirement.",
        whyWrong: {
          A: "Brand standardization is a procurement preference - FAC.250 requires standardized use procedures, not brand uniformity.",
          C: "Manufacturer IFU provides the baseline - organizational policies must translate this into operational procedures applicable to the specific clinical setting.",
          D: "Operational use procedures are a clinical/nursing documentation responsibility, not solely a biomedical engineering function.",
        },
        operationalContext:
          "For high-risk or complex equipment (ventilators, electrosurgical units, infusion pumps), create a one-page standardized use quick reference card covering: set-up steps, operating parameters, safety alarms, and shutdown procedure. Attach to the equipment or store at the point of use.",
      },
    },
  ],
};
