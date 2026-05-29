import type { Level } from "./schema";

export const ascEmgLevel: Level = {
  id: "asc_emg",
  module: "asc",
  name: "Emergency Management",
  description: "AAAHC v44 EMG - emergency and disaster preparedness plan, staff training, drills, resource management, and community coordination.",
  icon: "AlertTriangle",
  color: "hsl(20, 85%, 48%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "EMG: Emergency Management",
    plainLanguageSummary:
      "The EMG category requires ASCs to develop, maintain, and test a comprehensive emergency and disaster preparedness plan. The plan must address hazard identification, internal and external emergencies, continuity of operations, resource management, staff training, and coordination with community emergency response organizations. The plan must be exercised through drills and updated based on lessons learned.",
    keyOperationalExpectations: [
      "A written emergency and disaster preparedness plan is approved by the governing body.",
      "The plan is based on a hazard vulnerability analysis (HVA) identifying likely emergency scenarios.",
      "All staff receive training on the emergency plan and their specific roles.",
      "Emergency drills are conducted at defined intervals with documented debriefs and improvement actions.",
      "The plan addresses both internal emergencies (fire, medical emergency, power failure) and external disasters (natural disasters, mass casualty events).",
      "Coordination with community emergency management organizations is documented.",
    ],
    commonRiskPoints: [
      "Emergency plan exists but has never been tested through drills - no documentation of any exercise.",
      "Staff can describe their general role but cannot identify specific emergency contacts or locations of equipment.",
      "Hazard vulnerability analysis was completed once and never updated.",
      "Community coordination agreements are not documented or are with organizations that no longer exist.",
    ],
    aaahcStandards: ["EMG.100", "EMG.140", "EMG.160", "EMG.170", "EMG.180"],
  },
  studyMaterial: [
    {
      title: "EMG.100 - Medical Emergency and Unplanned Transfer Procedures",
      content:
        "EMG.100 requires written procedures for managing medical emergencies and unplanned outcomes that require transfer to a higher level of care. The procedures must specifically address four elements: (1) decision-making authority for transferring a patient - who has the authority to order a transfer; (2) the process for transferring a patient - including which hospital, how transport is arranged, and who accompanies the patient; (3) provisions for caring for the patient until the transfer occurs - maintaining safety and stability during the transfer preparation period; and (4) documentation that must accompany the patient - which records, consent forms, and clinical summaries go with the patient. Importantly, staff must be trained on these procedures, and documentation of that training must be present.",
      keyPoint:
        "EMG.100 is the medical emergency response standard. It requires procedures covering four elements: transfer decision authority, transfer process, care during transfer preparation, and accompanying documentation. Staff training on these procedures must be documented.",
    },
    {
      title: "EMG.140 - BLS-Trained Personnel and Emergency Equipment",
      content:
        "EMG.140 requires that personnel trained in basic life support (BLS) and in the use of cardiac and all other emergency equipment and supplies are present in the facility whenever patients are present. Three documentation requirements apply: (1) personnel files must include documentation of current BLS certification; (2) documentation of training in the use of cardiac and all other emergency equipment and supplies must be present; and (3) a written policy must require the presence of trained and currently certified personnel whenever patients are present. This standard ensures that when a cardiac or medical emergency occurs, someone qualified to respond is always in the building.",
      keyPoint:
        "EMG.140 has three requirements: current BLS certifications in personnel files, documented training on emergency equipment, and a written policy requiring trained personnel on-site whenever patients are present. All three must be satisfied.",
    },
    {
      title: "EMG.160 - Comprehensive Written Emergency and Disaster Preparedness Plan",
      content:
        "EMG.160 requires a comprehensive written emergency and disaster preparedness plan addressing both internal and external emergencies. The plan must include: (1) a provision for safe evacuation of individuals during an emergency - with specific attention to individuals at greater risk (patients under anesthesia, patients with limited mobility, pediatric patients); and (2) participation in community health emergency or disaster preparedness, if applicable. The plan must address internal emergencies (fires, medical crises, utility failures, security incidents) and external disasters (natural disasters, mass casualty events, community infrastructure failures). The 'at-risk populations' requirement is particularly important for surgery centers where patients may be sedated or in recovery and unable to self-evacuate.",
      keyPoint:
        "EMG.160's plan must address both internal and external emergencies and must specifically include evacuation provisions for individuals at greater risk - sedated surgical patients, patients with mobility limitations, and others who cannot self-evacuate.",
    },
    {
      title: "EMG.170 - Scenario-Based Drills: Quarterly Frequency and Written Evaluation",
      content:
        "EMG.170 requires scenario-based drills of the emergency and disaster preparedness plan, with specific frequency and documentation requirements. All drills must be scenario-based (not just walkthroughs). Specific frequencies are required: (1) at least one drill each calendar quarter - four drills per year minimum; (2) at least one CPR technique drill annually; and (3) at least one drill based on the full emergency/disaster plan annually. Documentation requirements include: documentation of drill participants, a written evaluation of each drill, and prompt implementation of any needed corrections or modifications to the emergency plan identified during the drill evaluation.",
      keyPoint:
        "EMG.170 minimum frequency: one drill per quarter (4/year), plus a CPR drill annually, plus a full disaster plan drill annually. Each drill requires a written evaluation. Corrections identified in the evaluation must be implemented promptly.",
    },
    {
      title: "EMG.180 - Emergency Equipment and Supplies: Maintained and Accessible",
      content:
        "EMG.180 requires that appropriate emergency equipment and supplies are maintained and readily accessible to all areas of each patient care service site. 'Readily accessible' means staff can reach emergency equipment quickly without having to search - equipment must be in defined, known locations. 'Maintained' means equipment is checked regularly to confirm it is functional, supplies are not expired, and any deficiencies are corrected promptly. Documentation of equipment checks must be present. Crash carts, AEDs, oxygen, emergency medications, and other emergency supplies are typical items covered by this standard.",
      keyPoint:
        "EMG.180 requires emergency equipment to be both maintained (functional, checked, stocked, not expired) and readily accessible (in defined locations known to all staff). Inaccessible or unmaintained emergency equipment is a direct patient safety failure.",
    },
  ],
  questions: [
    {
      id: "asc_emg_01",
      question:
        "An ASC's emergency plan was written two years ago and has never been tested through any drill. A surveyor asks for drill documentation. What is the compliance finding?",
      options: [
        "A plan alone demonstrates preparedness - drills are optional",
        "Emergency drills must be conducted and documented at defined intervals - no drill records represents a significant preparedness deficiency",
        "Drills are only required after a real emergency has occurred",
        "Drills are required only for facilities in disaster-prone geographic areas",
      ],
      correctIndex: 1,
      explanation:
        "EMG.170 requires that emergency drills are conducted at defined intervals with documentation. A plan without drills is a theoretical construct - drills test whether the plan actually works when personnel act it out. Absence of drill documentation is a direct EMG finding.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Drills reveal gaps in the plan that are not visible from reading it - incorrect emergency contact numbers, staff who don't know evacuation routes, equipment that isn't where the plan says it is. Without drills, these gaps remain invisible until a real emergency exposes them.",
        whyWrong: {
          A: "An untested plan offers false confidence - it has never been proven to work.",
          C: "Drills are proactive, not reactive - they occur before emergencies, not after.",
          D: "Emergency drill requirements apply to all ASCs regardless of geographic location.",
        },
        operationalContext:
          "Schedule at minimum one fire drill per shift per year (per NFPA 101) plus one additional emergency scenario drill (e.g., medical emergency, power failure, hazmat). Document each drill with a standardized form that includes: date, scenario, participants, observers, findings, and action items.",
      },
    },
    {
      id: "asc_emg_02",
      question:
        "What is the purpose of the hazard vulnerability analysis (HVA) in the emergency preparedness planning process?",
      options: [
        "The HVA is a regulatory report submitted to the state health department",
        "The HVA identifies the types of emergencies most likely to affect the organization, which determines what scenarios the emergency plan must address",
        "The HVA replaces the written emergency plan for small ASCs",
        "HVAs are only required for ASCs within 10 miles of a nuclear power plant",
      ],
      correctIndex: 1,
      explanation:
        "The HVA systematically evaluates the probability, severity, and organizational preparedness for various emergency scenarios - including natural disasters, technological hazards, and human-caused events. Its output drives the content of the emergency plan, ensuring the plan addresses the organization's actual risk profile.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "An HVA converts generic emergency planning into site-specific preparedness. A coastal ASC faces different top risks than an inland urban one - the HVA identifies and prioritizes those differences.",
        whyWrong: {
          A: "The HVA is an internal planning tool - not a regulatory submission document.",
          C: "The HVA supplements the plan; it does not replace it.",
          D: "HVAs are required for all ASCs - proximity to specific hazards affects the HVA's findings, not whether it is required.",
        },
        operationalContext:
          "Use Kaiser Permanente's HVA tool or the ASHE Healthcare Hazard Vulnerability Analysis. Score each hazard type for probability, severity, and preparedness. Use the highest-scoring hazards to prioritize plan content and drill scenarios.",
      },
    },
    {
      id: "asc_emg_03",
      question:
        "A fire breaks out in an ASC's linen storage room. The circulating nurse in the OR presses the emergency call button but staff in the waiting room are not alerted. What emergency plan element appears to be deficient?",
      options: [
        "The nurse should have used a cell phone to call 911 first",
        "The emergency communication system - internal alerting to all occupied areas - appears to have failed or is inadequate",
        "Only OR staff need to be notified of OR-proximate fires",
        "Waiting room staff are responsible for monitoring for emergencies independently",
      ],
      correctIndex: 1,
      explanation:
        "EMG.100 requires the emergency plan to address communication protocols. A fire emergency must trigger facility-wide alerting - all occupied areas must be notified simultaneously to initiate evacuation. A call button that notifies only one area is an insufficient communication system.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Fire safety requires that all persons in the building are alerted immediately - delays in notification allow fire and smoke to spread before evacuation begins. The communication system must reach every occupied area.",
        whyWrong: {
          A: "911 should be called, but simultaneously alerting all staff internally is also required - sequential actions delay evacuation.",
          C: "All occupied areas must be alerted - a fire anywhere in the building requires evacuation from everywhere.",
          D: "Waiting room staff and patients cannot be expected to independently monitor for emergencies - the facility's internal alert system must reach them.",
        },
        operationalContext:
          "Test your internal emergency alert system annually as part of fire drills. Confirm that each alarm activation reaches all occupied areas - including waiting rooms, recovery bays, restrooms, and staff areas. Document the test and any areas where signal was inadequate.",
      },
    },
    {
      id: "asc_emg_04",
      question:
        "After a fire drill, staff debrief and identify that the designated assembly point in the parking lot is in the path of normal emergency vehicle access. What must happen next under EMG.170?",
      options: [
        "The debrief observation is noted but no action is required since no real emergency occurred",
        "A corrective action must be developed to relocate the assembly point - debrief findings must result in documented improvements",
        "The assembly point is fine - emergency vehicles use a different access route",
        "Changing the assembly point requires governing body approval before any modification is made",
      ],
      correctIndex: 1,
      explanation:
        "EMG.170 requires that drill debriefs identify areas for improvement and that corrective actions are implemented and tracked. An assembly point in the path of emergency vehicle access is a genuine safety problem that must be corrected - not left for the next drill to expose again.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Drills are only valuable if they lead to improvement. EMG.170 makes debrief-driven corrective action a requirement - the loop must close from observation to action to verification.",
        whyWrong: {
          A: "Debrief findings from drills require action regardless of whether the drill involved a real emergency.",
          C: "The observation - even if possibly wrong - must be investigated and resolved, not assumed away.",
          D: "Operational safety improvements to evacuation procedures do not require governing body approval - they are management-level operational decisions.",
        },
        operationalContext:
          "Create a drill debrief action tracking log: finding, corrective action, owner, due date, completion date, and verification method. Review at the next drill planning meeting to confirm all prior actions were completed.",
      },
    },
    {
      id: "asc_emg_05",
      question:
        "EMG.160 requires the emergency plan to address resource management. Which scenario represents a resource management gap?",
      options: [
        "The ASC has a 7-day supply of critical medications on hand at all times",
        "The ASC's emergency plan identifies a backup generator but the generator has only enough fuel for four hours of operation",
        "The ASC has a mutual aid agreement with a neighboring surgical center",
        "Emergency supply inventory levels are reviewed quarterly",
      ],
      correctIndex: 1,
      explanation:
        "A backup generator with only four hours of fuel is an inadequate emergency resource for most realistic disaster scenarios (hurricanes, ice storms, earthquakes) that may disrupt power for days. The resource management plan must identify critical resources and ensure they are sufficient for realistic emergency durations.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Resource adequacy - not just resource presence - is the EMG.160 requirement. Four hours of generator fuel may be sufficient for a brief power outage but is clearly insufficient for extended disaster scenarios. The HVA should identify realistic emergency durations for the geographic risks identified.",
        whyWrong: {
          A: "A 7-day critical medication supply is an example of good resource management practice.",
          C: "Mutual aid agreements are a positive resource management element.",
          D: "Quarterly inventory review is a good resource management monitoring practice.",
        },
        operationalContext:
          "Calculate the minimum fuel reserve needed to sustain critical operations for the longest credible emergency duration (based on the HVA). For a generator, this may be 72 hours or more. Document the fuel calculation and the fueling/refueling plan in the emergency plan.",
      },
    },
    {
      id: "asc_emg_06",
      question:
        "An ASC has a mutual aid agreement with a neighboring hospital. The agreement was signed five years ago and has not been reviewed since. What is the preparedness concern?",
      options: [
        "The agreement is still valid - signed agreements do not expire unless explicitly stated",
        "Contact information, operational capacity, and agreement terms may have changed - agreements should be reviewed and updated periodically",
        "Mutual aid agreements require annual state approval to remain valid",
        "The neighboring hospital's participation supersedes the need for an ASC-level emergency plan",
      ],
      correctIndex: 1,
      explanation:
        "EMG.160 requires that community coordination relationships are current and functional. A five-year-old agreement may reference personnel who have left, contact numbers that have changed, or operational capacities that have been modified. Agreements must be periodically reviewed, updated, and confirmed as still operative.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A mutual aid agreement is only useful if both parties know about it and can activate it. Outdated agreements may be dormant on both sides - neither organization may know the contact person or process. Annual review confirms the agreement remains current and known to both parties.",
        whyWrong: {
          A: "Signed agreements need periodic review to verify continued relevance and accuracy - they are not self-perpetuating.",
          C: "State approval is not a standard requirement for mutual aid agreements between healthcare facilities.",
          D: "A neighboring hospital's capacity supplements the ASC's plan - it does not replace the need for an ASC-level emergency plan.",
        },
        operationalContext:
          "Review all mutual aid agreements annually. Confirm: contact names and phone numbers are current, operational capacity information is accurate, and the signing authorities on both sides are still in their roles. Re-execute agreements when key terms change.",
      },
    },
    {
      id: "asc_emg_07",
      question:
        "During an AAAHC survey, a staff nurse is asked: 'What is the emergency code for a medical emergency in this facility?' She responds: 'I'm not sure - I think we use Code Blue but I'd have to check.' What EMG standard is this response most directly affecting?",
      options: [
        "Only a physician needs to know emergency codes - nursing knowledge is not assessed",
        "EMG.160 requires that staff receive training and be able to demonstrate knowledge of emergency procedures, including response codes",
        "Emergency code knowledge is the responsibility of the emergency response team only",
        "Not knowing an emergency code is acceptable if the staff member knows where to find the information",
      ],
      correctIndex: 1,
      explanation:
        "EMG.160 requires all staff to be trained on the emergency plan appropriate to their role and to be able to demonstrate knowledge of emergency procedures. Not knowing the basic emergency code for a medical emergency is a direct EMG.160 training deficiency.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "In a real medical emergency, there is no time to look up the code. Clinical staff must have immediate recall of response codes, their specific role in the emergency, and who to notify. EMG.160 requires demonstrated knowledge - not just documentation of training attendance.",
        whyWrong: {
          A: "All clinical staff - not just physicians - must know emergency codes and their specific emergency roles.",
          C: "The emergency response team cannot respond if they are not notified - the nurse who discovers the emergency must know how to initiate the response.",
          D: "Having to look up basic emergency information in a real emergency delays response to a potentially life-threatening situation.",
        },
        operationalContext:
          "Post emergency codes prominently in all clinical areas: on walls, inside medication room doors, and in nursing stations. Conduct annual emergency code review as part of required training. Include code knowledge verification in annual competency assessments.",
      },
    },
    {
      id: "asc_emg_08",
      question:
        "An ASC's emergency plan includes an evacuation procedure but does not address what to do with patients who are sedated and cannot ambulate at the time of a fire. What planning gap does this represent?",
      options: [
        "Only ambulatory patients need evacuation plans - sedated patients are sheltered in place",
        "The emergency plan must address how non-ambulatory or anesthetized patients will be evacuated safely",
        "Sedated patients are the anesthesiologist's responsibility - the plan does not need to address them",
        "This gap is acceptable as long as a transfer agreement with a nearby hospital exists",
      ],
      correctIndex: 1,
      explanation:
        "EMG.100 requires the emergency plan to address evacuation procedures that account for the range of patient conditions at the facility. An ASC with patients under anesthesia must have a plan for evacuating non-ambulatory patients - including who is responsible, what equipment is used, and where patients go.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "ASC patients may be on the operating table, in recovery, or under sedation when an emergency occurs. The evacuation plan must address how these patients will be safely moved - they cannot walk out on their own, and they cannot simply be abandoned.",
        whyWrong: {
          A: "Sheltering sedated patients in place while a fire burns around them is not a safe or compliant evacuation plan.",
          C: "The emergency plan must address all patients - responsibility cannot be allocated to individuals without documented procedures.",
          D: "A transfer agreement addresses where patients go after evacuation - it does not address the physical process of evacuating a sedated patient from an OR.",
        },
        operationalContext:
          "Include in the evacuation plan: a mattress drag protocol for non-ambulatory patients (with trained staff), evacuation chairs for partially ambulatory patients, OR-specific evacuation scenarios (procedure stops, patient draped, patient on table), and a staging area for evacuated patients.",
      },
    },
    {
      id: "asc_emg_09",
      question:
        "How frequently should the emergency and disaster preparedness plan be reviewed and updated under EMG standards?",
      options: [
        "Only when a real emergency occurs",
        "At least annually - or sooner if significant changes occur in the facility, community risks, or following a drill or real event that identifies needed revisions",
        "Every five years, in alignment with major building codes",
        "Only when the governing body requests a review",
      ],
      correctIndex: 1,
      explanation:
        "The emergency plan must be reviewed and updated at defined intervals - at minimum annually - and must be revised following drill exercises that identify gaps, real emergencies that reveal plan deficiencies, or significant changes in facility operations or community risk profile.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergency plans that are not reviewed become stale - personnel change, facilities change, community risks change. Annual review ensures the plan remains current and actionable. Post-event and post-drill updates ensure lessons are captured.",
        whyWrong: {
          A: "Reactive review after a real emergency means the plan had deficiencies before the event - proactive annual review prevents this.",
          C: "Five-year review is insufficient - too much changes in that time period.",
          D: "Governing body review is part of the annual GOV.240 requirements - plan update is an operational responsibility that should not wait for a governing body request.",
        },
        operationalContext:
          "Schedule the emergency plan annual review in conjunction with the governing body's GOV.240 annual review. Assign the emergency plan owner (typically the safety officer or administrator) to complete the review, document findings, and present updates to the governing body.",
      },
    },
    {
      id: "asc_emg_10",
      question:
        "Under EMG.160, what documentation satisfies the community health emergency preparedness coordination requirement?",
      options: [
        "A list of local emergency services phone numbers posted at the front desk",
        "Documented relationships with community emergency management organizations - including signed mutual aid agreements, participation in community planning, and verified current contact information",
        "The local fire department's contact number in the emergency plan",
        "A letter from the local emergency management office acknowledging the ASC exists",
      ],
      correctIndex: 1,
      explanation:
        "EMG.160 requires documented coordination with community emergency management organizations - not just awareness of their contact information. Signed mutual aid agreements, participation in community exercises, and verified current relationships are the types of documentation that demonstrate actual coordination.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Community coordination means active, documented relationships - not passive awareness. During a real disaster, the ASC must be able to activate pre-established relationships quickly and confidently.",
        whyWrong: {
          A: "A phone number list demonstrates awareness but not coordination.",
          C: "A fire department number is a contact, not a coordination agreement.",
          D: "An acknowledgment letter is not a coordination agreement - it proves only that the organization sent a letter.",
        },
        operationalContext:
          "Contact your local emergency management office and request participation in community Healthcare Coalition exercises. Sign a mutual aid agreement with at least one neighboring healthcare facility. Document these relationships in the emergency plan and review annually.",
      },
    },
    {
      id: "asc_emg_11",
      question:
        "An ASC experiences a real external emergency (severe storm causing power loss for 18 hours). Patients in recovery are managed safely and the facility resumes operations the next day. What must happen from an emergency management perspective?",
      options: [
        "Nothing additional - the emergency was handled successfully",
        "The real emergency event must be reviewed and used to update the emergency plan, similar to a post-drill debrief",
        "A full new HVA must be completed before resuming normal operations",
        "Only incidents involving patient harm require post-event review",
      ],
      correctIndex: 1,
      explanation:
        "Real emergency events provide the most valuable learning opportunities for emergency plan improvement. EMG standards require that actual events - like drills - are reviewed and that lessons learned are incorporated into plan updates. Success during the event does not mean the plan cannot be improved.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Even a well-managed emergency reveals gaps in the plan - things that worked, things that didn't, things that were improvised. Capturing these lessons ensures the plan is better for the next event.",
        whyWrong: {
          A: "Successful management of the emergency is not the end of the EMG process - post-event review is required.",
          C: "A full HVA update is not required after every event - a targeted post-event review and plan update is appropriate.",
          D: "All emergency events - not just those with patient harm - provide learning opportunities and require review.",
        },
        operationalContext:
          "Within one to two weeks of any real emergency event, conduct a structured after-action review using the same format as a drill debrief: what happened, what worked, what didn't work, what will we do differently. Document findings and update the emergency plan accordingly.",
      },
    },
    {
      id: "asc_emg_12",
      question:
        "A new ASC employee starts working in the sterile processing department. Under EMG.160, when must they receive emergency preparedness training?",
      options: [
        "Within 90 days of hire",
        "At orientation - before or immediately upon starting their role",
        "At their first annual performance review",
        "Only if they will be the first responder to an emergency",
      ],
      correctIndex: 1,
      explanation:
        "EMG.160 requires that all personnel receive emergency plan training as part of their orientation to the organization. Training must occur before the employee begins working independently so they know what to do from day one.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergencies do not wait for new employees to complete their 90-day probationary period. A new sterile processing tech who encounters a fire or medical emergency on their first day must know what to do - orientation training ensures this.",
        whyWrong: {
          A: "90 days is too long - orientation means before beginning work or immediately upon starting.",
          C: "Performance reviews are an annual activity - far too delayed for safety training.",
          D: "All staff must be trained - emergency response is not limited to designated 'first responders.'",
        },
        operationalContext:
          "Include emergency preparedness in the standard new employee orientation checklist. Cover: emergency codes, their specific role in each emergency type, evacuation routes from their work area, location of fire extinguishers and pull stations, and how to initiate emergency response. Document completion before the first independent work shift.",
      },
    },
    {
      id: "asc_emg_13",
      question:
        "The ASC's emergency plan identifies influenza pandemic as a likely external emergency risk based on the HVA. What plan elements should specifically address this threat?",
      options: [
        "Pandemic response is a government function - the ASC plan need not address it",
        "The plan should address: patient surge management, staff absenteeism protocols, supply chain disruption, isolation and infection control measures, and coordination with public health authorities",
        "Only the IPC program needs to address pandemic - the emergency plan is not applicable",
        "The emergency plan should only address natural disasters, not biologic threats",
      ],
      correctIndex: 1,
      explanation:
        "The HVA drives plan content - if influenza pandemic is identified as a significant risk, the emergency plan must specifically address it. A pandemic plan includes staff absenteeism (staffing continuity), supply shortages (PPE, medications), patient cohorting and infection control measures, and public health coordination.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Biologic threats - including pandemic influenza - are a recognized HVA category for all healthcare organizations. The emergency plan must be comprehensive enough to address all scenarios identified in the HVA.",
        whyWrong: {
          A: "Healthcare facilities have independent emergency preparedness obligations - government response supplements, not replaces, facility-level planning.",
          C: "IPC and emergency management intersect during pandemics - the emergency plan must incorporate IPC-specific pandemic measures.",
          D: "Emergency plans must address the full range of HVA-identified threats - biologic threats are an established HVA category.",
        },
        operationalContext:
          "Add a pandemic/communicable disease emergency annex to the emergency plan. Include: staff absenteeism thresholds and cross-training plans, PPE stock calculation for a 30-day surge, patient triage and cohorting protocols, public health reporting triggers, and communication templates.",
      },
    },
    {
      id: "asc_emg_14",
      question:
        "What documentation must be maintained for each emergency drill conducted at the ASC?",
      options: [
        "Only the date and type of drill",
        "Date, drill type/scenario, participants, observations during the drill, debrief findings, corrective actions, owners, and completion timelines",
        "Only the sign-in sheet for participants",
        "A brief narrative summary is sufficient - specific action items are not required",
      ],
      correctIndex: 1,
      explanation:
        "EMG.170 requires comprehensive drill documentation that supports the entire drill improvement cycle: what was tested (date, type, scenario), who participated, what was observed, what the debrief identified, and what corrective actions were assigned with owners and timelines.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Drill documentation serves as evidence of both the exercise itself and the improvement process that follows. A surveyor will look at drill records to verify: that drills occurred, that debriefs happened, and that findings led to documented corrective actions.",
        whyWrong: {
          A: "Date and type alone prove a drill occurred but not that it was evaluated or improved upon.",
          C: "A sign-in sheet proves attendance but not drill content, findings, or improvement actions.",
          D: "Specific corrective actions with owners and timelines are required - a narrative summary without these elements is incomplete.",
        },
        operationalContext:
          "Use a structured drill documentation form with required fields: scenario description, date/time, participants (by role), observer notes during the drill, debrief summary (strengths and weaknesses), specific corrective actions, owner for each action, and target completion date. File completed forms in the emergency preparedness binder.",
      },
    },
    {
      id: "asc_emg_15",
      question:
        "An ASC in a coastal region fails to identify hurricane as a significant risk in its HVA. The emergency plan has no hurricane-specific provisions. During a hurricane, the facility suffers significant damage. What is the emergency management finding?",
      options: [
        "No finding - hurricanes are unforeseeable events that organizations cannot be expected to plan for",
        "The HVA failed to identify a clearly relevant regional hazard - a gap that resulted in an unaddressed risk in the emergency plan",
        "This finding would be addressed by the governing body, not in the emergency plan",
        "The only requirement is that the facility have insurance coverage for natural disasters",
      ],
      correctIndex: 1,
      explanation:
        "A coastal facility failing to identify hurricane as a hazard in its HVA represents a fundamental HVA methodology failure. The HVA must reflect the organization's actual geographic and contextual risk profile. An incomplete HVA leads to an incomplete emergency plan - which EMG.100 directly requires.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Hurricane is a textbook example of a geographically predictable hazard for coastal facilities. The HVA's purpose is precisely to identify such foreseeable risks - failure to do so is a planning failure, not an act of God defense.",
        whyWrong: {
          A: "Hurricanes are predictable risks for coastal facilities - they are foreseeable, not unforeseeable.",
          C: "Emergency plan gaps are EMG findings - the governing body approves the plan, but the EMG standard addresses plan content.",
          D: "Insurance coverage addresses financial risk - it is not a substitute for operational emergency preparedness.",
        },
        operationalContext:
          "When completing the HVA for a coastal facility, ensure all geographically relevant hazards are scored: hurricanes, storm surge, flooding, and wind damage. Consult FEMA's regional hazard maps and historical data. Use high-probability/high-severity scores to drive hurricane-specific plan provisions.",
      },
    },
    {
      id: "asc_emg_16",
      question:
        "Under EMG.160, what does the term 'continuity of operations' mean in the emergency plan context?",
      options: [
        "Maintaining the same surgical schedule regardless of the emergency",
        "Ensuring the organization can continue essential functions and patient care during and after an emergency",
        "Transferring all operations to an offsite facility whenever an emergency occurs",
        "Continuity of operations only applies to administrative functions, not clinical care",
      ],
      correctIndex: 1,
      explanation:
        "Continuity of operations (COOP) planning ensures the organization can maintain essential functions during and after an emergency. This includes: which services are essential (vs. which can be suspended), how staff will be deployed if normal operations are disrupted, how communication will function, and how patient care will be maintained for patients already in the facility.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "COOP planning is about resilience - not about pretending nothing is wrong. An ASC with patients in PACU during a hurricane must have a plan for completing their care safely, even if new cases cannot be accepted.",
        whyWrong: {
          A: "Maintaining a normal surgical schedule during a serious emergency is neither safe nor realistic - COOP is about essential function maintenance, not business as usual.",
          C: "Offsite transfer may be one COOP option - but COOP addresses operations at the primary facility as well.",
          D: "Clinical care continuity is the central concern of COOP - administrative functions are secondary.",
        },
        operationalContext:
          "Create a COOP section of the emergency plan that addresses: minimum staff required to provide essential care during an emergency, how cases in progress will be completed safely, how elective cases will be suspended, how patients in recovery will be monitored and discharged or transferred, and how the facility will be secured after hours during an emergency.",
      },
    },
    {
      id: "asc_emg_17",
      question:
        "An ASC's emergency plan assigns all emergency response coordination responsibilities to the administrator. The administrator is out of state when a medical emergency occurs. What emergency plan gap does this reveal?",
      options: [
        "No gap - the administrator can coordinate remotely",
        "The plan lacks a defined chain of command and designated backup for emergency coordination when the primary coordinator is unavailable",
        "Emergency response is the anesthesiologist's responsibility when the administrator is absent",
        "Emergency response may be postponed until the administrator returns",
      ],
      correctIndex: 1,
      explanation:
        "Emergency plans must include a clear chain of command with defined backup assignments for key emergency roles. Assigning all authority to a single individual without a backup creates a single point of failure - a gap that EMG.100 requires plans to address.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergencies do not time themselves around key personnel's schedules. The chain of command must have clear succession - so that when the primary coordinator is unavailable, a pre-designated backup immediately assumes the role without confusion.",
        whyWrong: {
          A: "Remote coordination during an active medical emergency or fire may be inadequate - on-site authority must exist.",
          C: "The anesthesiologist may have a clinical emergency role, but administrative authority succession must be pre-defined in the plan.",
          D: "Emergency response never waits - the plan must enable immediate response regardless of who is present.",
        },
        operationalContext:
          "Create an emergency chain of command chart: Primary Emergency Coordinator (Administrator) → Backup 1 (Medical Director) → Backup 2 (Senior Nurse on Duty). Post this chart prominently and include it in all emergency training.",
      },
    },
    {
      id: "asc_emg_18",
      question:
        "What patient care information should accompany a patient evacuated from the ASC to another facility during an emergency?",
      options: [
        "Insurance card and patient demographics only",
        "Clinical summary including: patient identity, procedure performed, current medications, vital signs, clinical status, and contact information for the originating ASC",
        "Only the patient's name and the procedure they underwent",
        "Emergency patient transfers require no documentation - the receiving facility will assess from scratch",
      ],
      correctIndex: 1,
      explanation:
        "When a patient is evacuated to another facility, continuity of care requires a clinical summary that enables the receiving team to understand what was done, what medications were given, and the patient's current status. This is both a CMC.160 coordination requirement and an EMG emergency plan element.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A receiving emergency department cannot safely manage a post-anesthesia patient without knowing: what procedure was performed, what anesthesia agents were used, what medications are on board, and any intraoperative complications. Missing this information risks dangerous interventions.",
        whyWrong: {
          A: "Insurance and demographics enable billing registration - they don't provide clinical information for safe care.",
          C: "The procedure name alone is minimally helpful without medications, complications, and current status.",
          D: "Receiving facilities should not have to assess from scratch - the transferring facility's documentation protects patient safety during the transfer.",
        },
        operationalContext:
          "Create an emergency patient transfer summary card or form: patient name/DOB, procedure performed, anesthesia type, medications given (with doses and times), vital signs at time of transfer, intraoperative complications if any, current clinical status, and ASC contact number. Attach to the patient at evacuation.",
      },
    },
    {
      id: "asc_emg_19",
      question:
        "An ASC's emergency plan does not address what to do if a staff member is injured during an emergency response. What EMG planning element is missing?",
      options: [
        "Staff injury is covered under workers' compensation - no emergency plan provision is needed",
        "The plan should address staff safety during emergency response - including protocols for when a responder is injured and how to ensure a replacement assumes their role",
        "Only OSHA regulations govern staff injury response - not the emergency plan",
        "Staff injuries during emergencies are handled by the emergency response team on the fly",
      ],
      correctIndex: 1,
      explanation:
        "EMG.100 requires the emergency plan to address the safety of both patients and personnel during emergencies. If a staff member is injured during emergency response (e.g., a nurse injures themselves evacuating a patient), the plan must address: immediate care for the injured staff member, and who assumes their emergency role to maintain response continuity.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Staff safety during emergencies is part of comprehensive emergency planning. An injured responder who is no longer able to perform their emergency role creates a gap in the response. The plan must address this scenario.",
        whyWrong: {
          A: "Workers' compensation addresses financial benefits for injured workers - not the operational emergency response gap created by their injury.",
          C: "OSHA and the emergency plan work in parallel - OSHA governs employer obligations; the emergency plan governs operational response.",
          D: "Ad hoc response to staff injury during an emergency is not a plan - pre-defined procedures ensure the response continues effectively.",
        },
        operationalContext:
          "Add a 'Responder Injury' provision to the emergency plan: any staff member injured during emergency response immediately notifies the emergency coordinator, receives first aid, and their role is assumed by the next person in the chain of command.",
      },
    },
    {
      id: "asc_emg_20",
      question:
        "Under EMG standards, when must the emergency and disaster preparedness plan be reviewed by the governing body?",
      options: [
        "Emergency plans are reviewed by the medical director - not the governing body",
        "At least annually as part of the GOV.240 governing body annual review of AAAHC accreditation requirements",
        "Only when a real emergency has occurred at the facility",
        "Every three years, in alignment with the accreditation survey cycle",
      ],
      correctIndex: 1,
      explanation:
        "GOV.240.30.4 specifically requires that the governing body review the emergency and disaster preparedness plan at least annually. This is part of the broader annual review of all key organizational programs by the governing body.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body's annual review of the emergency plan (as part of GOV.240) ensures governance-level oversight of this critical safety program. The governing body must receive evidence that the plan is current, tested, and effective.",
        whyWrong: {
          A: "The medical director may oversee day-to-day plan implementation, but governing body review is a separate governance requirement.",
          C: "Annual review is required regardless of whether a real emergency has occurred.",
          D: "Annual review is required - not a three-year cycle.",
        },
        operationalContext:
          "Present the emergency plan annual review summary to the governing body at its annual meeting. Include: HVA summary, drills conducted, lessons learned, plan updates made, and any community coordination changes. Document the governing body's review and any direction in board minutes.",
      },
    },
  ],
};
