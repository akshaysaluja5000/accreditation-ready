import type { Level } from "./schema";

export const ascAsgLevel: Level = {
  id: "asc_asg",
  module: "asc",
  name: "Anesthesia & Surgical Services",
  description: "AAAHC v44 ASG - pre-operative assessment, surgical safety, patient identification, surgical site marking, anesthesia management, and post-operative care.",
  icon: "Stethoscope",
  color: "hsl(350, 65%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "ASG: Anesthesia and Surgical Services",
    plainLanguageSummary:
      "The ASG category establishes requirements for the entire surgical episode - from pre-operative assessment through post-operative care. Standards cover patient identification, surgical site marking, the pre-procedural pause (time-out), anesthesia management, monitoring during procedures, management of anesthesia complications, recovery care, and discharge criteria. The ASG standards reflect a systems approach to preventing surgical and anesthesia adverse events.",
    keyOperationalExpectations: [
      "Pre-operative assessment is completed and documented before the procedure begins, including anesthesia evaluation.",
      "Patient identity, procedure, and surgical site are verified using at least two patient identifiers before the procedure.",
      "Surgical site is marked before the procedure with patient involvement when applicable.",
      "A formal pre-procedural time-out is conducted immediately before the incision/procedure begins.",
      "Anesthesia monitoring follows nationally recognized standards throughout the procedure.",
      "Post-anesthesia recovery includes documented monitoring, and discharge occurs only when defined criteria are met.",
    ],
    commonRiskPoints: [
      "Time-out documentation is absent, or the time-out is conducted before all team members are present.",
      "Surgical site marking is done by a nurse rather than the operating practitioner.",
      "Post-anesthesia discharge criteria are not written, or patients are discharged without meeting documented criteria.",
      "Anesthesia monitoring documentation is incomplete for the procedure or recovery period.",
    ],
    aaahcStandards: ["ASG.100", "ASG.110", "ASG.120", "ASG.130", "ASG.140", "ASG.150", "ASG.160", "ASG.170", "ASG.180"],
  },
  studyMaterial: [
    {
      title: "What must be completed and documented before a procedure begins?",
      content:
        "Before any surgical procedure, the patient must have a completed history and physical in the chart. The anesthesia provider must also review the patient's airway, current medications, and prior anesthesia history. Signed consent for both the procedure and anesthesia must be in the chart before the patient goes back to the operating room.",
      keyPoint:
        "The history and physical, anesthesia evaluation, and signed consents must all be documented in the chart before the procedure starts.",
    },
    {
      title: "Who is responsible for marking the surgical site, and when?",
      content:
        "The surgeon or provider who will perform the procedure is responsible for marking the surgical site, not the nurse. The mark must be made before the patient enters the OR whenever possible, so it can be confirmed during the time-out. Patients should be involved in the marking process when it is appropriate.",
      keyPoint:
        "The operating surgeon marks the site, not nursing staff. The mark must be visible during the time-out.",
    },
    {
      title: "What happens during a surgical time-out and when does it occur?",
      content:
        "The time-out is a formal pause that happens immediately before the first incision or the start of the procedure. Every member of the team must actively participate, not just listen. The team confirms the right patient, the right procedure, the right site and side, the patient's position, and any special equipment needed.",
      keyPoint:
        "The time-out happens right before the incision, with all team members actively involved. It must be documented in the chart.",
    },
    {
      title: "What does the anesthesia team monitor during a procedure?",
      content:
        "During any procedure with sedation or anesthesia, the patient must be continuously monitored for oxygen levels, heart rhythm, blood pressure, and end-tidal carbon dioxide when deeply sedated or under general anesthesia. The anesthesia record must document all monitoring data, medications given, and the patient's condition throughout the case.",
      keyPoint:
        "Continuous monitoring is required during anesthesia. The anesthesia record must be complete, not just a start-and-finish note.",
    },
    {
      title: "What must happen before a patient can leave the recovery area?",
      content:
        "Patients must be continuously monitored in the recovery area until they meet written discharge criteria that have been approved by facility leadership. The criteria must be consistently applied to every patient. Common scoring tools track vital signs, consciousness, pain, and other recovery measures, and the score must be documented before discharge.",
      keyPoint:
        "Written discharge criteria must be met and documented before a patient leaves recovery. The criteria must be governing-body-approved.",
    },
  ],
  questions: [
    {
      id: "asc_asg_01",
      question:
        "Two patient identifiers must be used to verify patient identity before a procedure. Which combination meets this requirement?",
      options: [
        "Room number and procedure type",
        "Patient name and date of birth",
        "Insurance ID number and admission date",
        "Wristband color and procedure room assignment"
      ],
      correctIndex: 1,
      explanation:
        "Two patient identifiers must be unique to the individual patient. Patient name combined with date of birth (or medical record number) are the most commonly accepted two-identifier combinations. Room number and procedure type are location/service identifiers - not patient identifiers.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The two-identifier rule exists because any single identifier can be ambiguous. Name + date of birth uniquely identifies an individual in most populations. The identifiers must be directly verified against the clinical record or wristband.",
        whyWrong: {
          A: "Room number identifies a location, not the patient. Two patients could have the same procedure type.",
          C: "Insurance ID may not be unique, and admission date alone is not sufficient.",
          D: "Wristband color is not a patient identifier - it may indicate allergies or other status but not unique identity.",
        },
        operationalContext:
          "Standardize two-identifier verification in the pre-op checklist: 'Ask patient to state their name and date of birth - confirm against the wristband and the clinical record.' Document the verification as completed.",
      },
    },
    {
      id: "asc_asg_02",
      question:
        "A pre-operative nurse marks the surgical site on a patient's knee before the surgeon arrives. The surgeon later conducts the time-out and operates. What is wrong with this scenario?",
      options: [
        "Nothing - the nurse completing site marking is acceptable practice",
        "Surgical site marking must be performed by the operating practitioner who will perform the procedure - not by nursing staff",
        "Site marking must be done in the OR, not in pre-op",
        "The surgeon should have marked the site at the time-out, not before it"
      ],
      correctIndex: 1,
      explanation:
        "The operating practitioner who will perform the procedure is responsible for surgical site marking. This ensures the person with the most direct knowledge of the intended surgical site - and the most at stake in performing it correctly - verifies and marks the location.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Wrong-site surgery is a sentinel event. Assigning site marking to the person performing the procedure creates direct personal accountability. A pre-op nurse marking a site has less direct procedural knowledge and less accountability for the mark's accuracy.",
        whyWrong: {
          A: "This is specifically not acceptable - the operating practitioner must perform the marking.",
          C: "Site marking should ideally occur before the patient enters the OR so the mark can be verified during the time-out - pre-op is an appropriate location.",
          D: "Site marking occurs before the time-out so it can be verified during the time-out - not at the time-out.",
        },
        operationalContext:
          "Include in your surgical safety policy: the surgeon or operating practitioner must mark the site before the patient enters the OR, in the presence of the patient/representative when possible. The mark must be visible after draping.",
      },
    },
    {
      id: "asc_asg_03",
      question:
        "An ASC's time-out policy requires verbal confirmation by all team members of the correct patient, procedure, and site. During a time-out, the circulating nurse says 'time-out' and reads the elements aloud while the surgeon and anesthesiologist continue preparing. No one verbally confirms. Is this compliant?",
      options: [
        "Yes - the time-out was conducted and documented",
        "No - all team members must actively participate in the time-out, not passively listen",
        "It depends on whether the surgeon knew the patient's name before the procedure",
        "Yes - the circulating nurse has authority to conduct the time-out unilaterally"
      ],
      correctIndex: 1,
      explanation:
        "A compliant time-out requires active participation by all members of the procedural team - not passive presence while one person reads a checklist. Active participation means each team member verbally confirms the elements and stops any activity until the time-out is complete.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The purpose of the time-out is to catch potential errors before the incision. Passive listening defeats this purpose - team members who are mentally still preparing are not cognitively engaged in verifying safety elements.",
        whyWrong: {
          A: "Documented time-outs that lack active participation are documented failures - not documented successes.",
          C: "The team's prior knowledge of the patient is not a substitute for the active team-based verification required at the time-out.",
          D: "The circulating nurse facilitates the time-out - but participation is a shared team responsibility.",
        },
        operationalContext:
          "Establish a clear time-out protocol: before the time-out begins, the circulating nurse calls 'all hands pause - beginning time-out.' All team members stop their activities. Each member verbally confirms their understanding of each element. Any 'no' or 'I don't know' stops the procedure until resolved.",
      },
    },
    {
      id: "asc_asg_04",
      question:
        "An anesthesiologist uses continuous end-tidal CO2 monitoring during a procedure under general anesthesia. This monitoring requirement is based on what standard?",
      options: [
        "ASC internal policy only - there is no external standard for EtCO2 monitoring",
        "Nationally recognized anesthesia monitoring guidelines (such as ASA Standards for Basic Anesthetic Monitoring)",
        "Only applicable when the procedure lasts more than 60 minutes",
        "EtCO2 monitoring is recommended but not required for general anesthesia"
      ],
      correctIndex: 1,
      explanation:
        "ASG.150/160 requires that anesthesia monitoring meets nationally recognized guidelines. The American Society of Anesthesiologists (ASA) Standards for Basic Anesthetic Monitoring require continuous EtCO2 monitoring whenever general anesthesia is administered, as it is the most sensitive indicator of ventilation adequacy.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC standard defers to nationally recognized anesthesia monitoring guidelines, which include the ASA Standards. EtCO2 is required for verifying endotracheal tube placement and detecting respiratory changes under general anesthesia.",
        whyWrong: {
          A: "External nationally recognized standards (ASA) govern anesthesia monitoring - not just internal policy.",
          C: "EtCO2 monitoring is required throughout any general anesthesia case regardless of duration.",
          D: "EtCO2 is required (not merely recommended) during general anesthesia per ASA Standards.",
        },
        operationalContext:
          "Reference the current ASA Standards for Basic Anesthetic Monitoring in your anesthesia policies. Ensure all ORs have functional EtCO2 capnography. Document EtCO2 values continuously in the anesthesia record.",
      },
    },
    {
      id: "asc_asg_05",
      question:
        "ASG.180 requires that discharge from the post-anesthesia care area is based on written criteria. Who must approve these criteria?",
      options: [
        "The head nurse of the recovery area",
        "The governing body",
        "The anesthesia department chair",
        "The state board of nursing"
      ],
      correctIndex: 1,
      explanation:
        "ASG.180 requires that post-anesthesia discharge criteria are written and approved by the governing body. This is consistent with the governing body's overall responsibility for clinical policy approval and quality of care oversight.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body approves clinical policies governing patient safety decisions - including discharge criteria after anesthesia. This reflects the governance-level commitment to safe patient discharge from the recovery area.",
        whyWrong: {
          A: "The head nurse may implement the criteria but does not have governing body authority to approve them.",
          C: "The anesthesia department chair may recommend the criteria but governing body approval is required.",
          D: "State boards of nursing license nurses - they do not approve clinical discharge criteria.",
        },
        operationalContext:
          "Submit the post-anesthesia discharge criteria (e.g., Modified Aldrete Score ≥9, or Chung's PADS scale) to the governing body for formal approval. Document approval in board minutes. Review and reapprove at least annually per GOV.240.",
      },
    },
    {
      id: "asc_asg_06",
      question:
        "A surgeon operates on the wrong side of a patient's hand - the site was not marked and no time-out was conducted. Which ASG standards were violated?",
      options: [
        "Only ASG.140 - the time-out standard",
        "Both ASG.130 (site marking) and ASG.140 (time-out), as well as the patient identification requirements",
        "Only ASG.130 - if the time-out had been done it would have caught the error",
        "No ASG standard was violated - this is a physician error, not a system failure"
      ],
      correctIndex: 1,
      explanation:
        "Wrong-site surgery violates multiple ASG standards: ASG.130 (surgical site marking was not performed), ASG.140 (pre-procedural time-out was not conducted), and the overall surgical safety standards. These three system components work together to prevent wrong-site surgery.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Wrong-site surgery is the predictable consequence of system failures in surgical safety. The ASG standards are specifically designed to prevent this through layered checks: patient ID, site marking, and time-out. Violating all three removed all three safeguards.",
        whyWrong: {
          A: "Site marking and patient ID failures are equally important violations.",
          C: "Both site marking AND time-out failures contributed - neither alone would have been sufficient to prevent the error if both were absent.",
          D: "Surgical safety is a system responsibility, not solely a physician responsibility. The ASG standards reflect this system-based approach.",
        },
        operationalContext:
          "After any wrong-site surgery or near-miss, conduct a root cause analysis examining all three layers: patient identification, site marking, and time-out. Identify which safeguards failed and implement corrective actions for each.",
      },
    },
    {
      id: "asc_asg_07",
      question:
        "Under ASG.100, what must happen if a patient's pre-operative history and physical examination (H&P) was completed in a physician's office 35 days before the procedure?",
      options: [
        "The H&P from 35 days ago is acceptable - H&Ps are valid for 90 days",
        "The H&P must be updated immediately before the procedure if the organization's policy requires more frequent review",
        "An H&P from 35 days ago automatically requires a complete new H&P",
        "Only the anesthesiologist needs to update the assessment - not the surgeon"
      ],
      correctIndex: 1,
      explanation:
        "The acceptability of a prior H&P depends on the organization's defined H&P currency policy and whether any interval changes have occurred. If the organization's policy allows H&Ps completed within 30 days (a common standard), then a 35-day-old H&P requires updating. If within 30 days, an update note is needed. Policies vary - the key is consistency with the organization's documented standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Organizations define their own H&P currency window in policy - commonly 30 days. When an H&P falls outside that window, an update addressing any interval changes must be documented in the clinical record before the procedure.",
        whyWrong: {
          A: "90 days is the maximum for some settings, but organizations may define shorter windows. The compliance determination depends on the organization's policy.",
          C: "A complete repeat H&P may not be required - an update note addressing interval changes may be sufficient per policy.",
          D: "Both the surgeon and anesthesiologist have pre-operative assessment responsibilities - the anesthesiologist's evaluation is separate from but complementary to the surgical H&P.",
        },
        operationalContext:
          "Establish a written H&P currency policy (e.g., H&P must be completed within 30 days of the procedure). Include a requirement for an update note if the H&P was completed within the window but more than 24 hours before the procedure. Train all proceduralists on the requirement.",
      },
    },
    {
      id: "asc_asg_08",
      question:
        "A patient undergoing moderate sedation for a colonoscopy suddenly develops hypoxia and bradycardia. Under ASG standards, what must be immediately available?",
      options: [
        "Only supplemental oxygen - medications are not required under moderate sedation standards",
        "Reversal agents, emergency medications, airway management equipment, and defibrillation capability - appropriate for the level of anesthesia used",
        "A helicopter transport arrangement with the nearest hospital",
        "Moderate sedation complications are managed by nursing without physician intervention"
      ],
      correctIndex: 1,
      explanation:
        "ASG standards require that emergency equipment, medications, and personnel sufficient to manage complications of the anesthesia level being used are immediately available. For moderate sedation, this includes reversal agents (naloxone, flumazenil), emergency airway equipment, and resuscitation capability.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Complications of moderate sedation (hypoxia, respiratory depression, cardiac arrhythmia) can be life-threatening. The ASG standards require that facilities using sedation or anesthesia have the equipment and medications to manage these emergencies immediately at the point of care.",
        whyWrong: {
          A: "Oxygen alone is insufficient - medications and airway management capability are required.",
          C: "Helicopter transport may eventually be needed, but immediate stabilization must occur at the facility.",
          D: "Physicians must be immediately available to manage sedation complications - nursing alone is not sufficient.",
        },
        operationalContext:
          "Ensure each procedure room and recovery area has: crash cart with ACLS medications, defibrillator, emergency airway management supplies (laryngoscope, ETTs, BVM), reversal agents (naloxone, flumazenil), and an anesthesiologist or CRNA immediately available.",
      },
    },
    {
      id: "asc_asg_09",
      question:
        "A post-anesthesia care nurse documents a patient's vital signs every 30 minutes during recovery. Thirty minutes after arrival in PACU, the patient's oxygen saturation drops to 88%. What does the PACU monitoring requirement mean for this situation?",
      options: [
        "The 30-minute monitoring schedule is compliant - the next check will identify the issue",
        "The monitoring schedule must be flexible enough to respond to clinical changes - the nurse must assess and intervene immediately when a change occurs",
        "Post-anesthesia monitoring is a documentation requirement only - the nurse documents whatever is observed at scheduled intervals",
        "Oxygen saturation below 90% in PACU is expected and does not require immediate intervention"
      ],
      correctIndex: 1,
      explanation:
        "ASG recovery monitoring standards require ongoing assessment responsive to the patient's clinical status - not just scheduled vitals. An oxygen saturation of 88% requires immediate assessment and intervention, not waiting for the next scheduled check. Monitoring is a clinical function, not a documentation schedule.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The purpose of post-anesthesia monitoring is to detect and respond to complications. A scheduled documentation interval does not override the clinical obligation to respond immediately to an identified change.",
        whyWrong: {
          A: "A 30-minute delay to respond to SpO2 88% could be clinically catastrophic - immediate action is required.",
          C: "Monitoring is a clinical assessment function - documentation is the record of that assessment. They are not the same.",
          D: "Oxygen saturation below 90% is below normal limits and requires immediate clinical evaluation and intervention.",
        },
        operationalContext:
          "Establish PACU vital sign thresholds that trigger immediate nurse assessment and intervention (e.g., SpO2 <92%, HR <50 or >120, BP outside defined ranges). Include in the PACU policy: 'Any vital sign value outside defined parameters triggers immediate nurse assessment regardless of the monitoring schedule.'",
      },
    },
    {
      id: "asc_asg_10",
      question:
        "What must happen when a patient in post-anesthesia recovery does not meet discharge criteria but the surgeon wants to discharge them to go home?",
      options: [
        "The surgeon's order overrides nursing discharge criteria concerns",
        "The patient must not be discharged until written discharge criteria are met - the surgeon's preference does not override patient safety criteria",
        "The patient may be discharged with a responsible adult escort if the surgeon documents the decision",
        "Discharge criteria are guidelines, not requirements - clinical judgment supersedes them"
      ],
      correctIndex: 1,
      explanation:
        "ASG.180 requires that post-anesthesia discharge is based on written criteria approved by the governing body. These criteria exist to protect patients - they are not advisory. Discharging a patient who does not meet criteria, even at the surgeon's request, is a patient safety failure and an ASG compliance deficiency.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Written discharge criteria are a patient safety standard - not a guideline. The governing body approved them precisely to protect patients from premature discharge that could result in post-anesthesia adverse events (respiratory depression, falls, cardiovascular events).",
        whyWrong: {
          A: "Surgeon preference does not supersede governing-body-approved patient safety criteria.",
          C: "An escort reduces some risks but does not mean the patient has met the physiological criteria required for safe discharge.",
          D: "If discharge criteria are only guidelines, they offer no protection - ASG.180 makes them requirements.",
        },
        operationalContext:
          "Train PACU nurses that discharge criteria are mandatory safety standards they are empowered to enforce. Provide a clear escalation pathway: if a surgeon requests discharge before criteria are met, the nurse notifies the medical director or administrator. Document the disagreement and its resolution.",
      },
    },
    {
      id: "asc_asg_11",
      question:
        "An anesthesiologist arrives just as a case is beginning and asks the circulating nurse to have already completed the pre-procedural time-out without them. Is this acceptable?",
      options: [
        "Yes - the nurse can conduct the time-out on behalf of absent team members",
        "No - the time-out must be conducted immediately before the procedure begins with ALL team members present and actively participating",
        "Yes - as long as the anesthesiologist verifies the time-out elements before administering anesthesia",
        "Only if the surgeon has already confirmed the patient's identity"
      ],
      correctIndex: 1,
      explanation:
        "The pre-procedural time-out must be conducted with all procedural team members present and actively participating. Conducting a time-out without the anesthesiologist (a key team member) is not compliant - the time-out must wait until all essential team members are present.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The value of the time-out is that ALL team members - surgeon, anesthesiologist, circulating nurse, scrub tech - confirm the same elements simultaneously. Completing it without a team member eliminates their participation as a safety check.",
        whyWrong: {
          A: "The nurse cannot conduct a complete time-out 'on behalf of' an absent team member.",
          C: "Post-hoc verification does not substitute for active participation in the shared team-based time-out.",
          D: "Surgeon identity confirmation alone is not a complete time-out.",
        },
        operationalContext:
          "Establish a policy that no case begins - including anesthesia induction - until all essential team members are present and the time-out is complete. This may require delaying the case start by a few minutes if a team member is late. Document the reason for any delay.",
      },
    },
    {
      id: "asc_asg_12",
      question:
        "Under ASG pre-operative assessment requirements, what information from a patient's anesthesia history is most critical to review before administering anesthesia?",
      options: [
        "The number of prior procedures performed at this facility",
        "Prior anesthesia complications - including difficult airway history, malignant hyperthermia risk, or adverse drug reactions",
        "The patient's preferred anesthesia type",
        "Whether the patient has seen the same anesthesiologist before"
      ],
      correctIndex: 1,
      explanation:
        "Prior anesthesia complications - particularly difficult airway history, history of malignant hyperthermia (MH) or MH susceptibility, and adverse drug reactions - are the most critical anesthesia history elements. They directly affect anesthesia planning and preparation for emergencies.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Difficult airway history triggers specific airway management preparation (video laryngoscope, awake fiber-optic intubation readiness). MH susceptibility requires total intravenous anesthesia (TIVA) and dantrolene availability. These are potentially life-saving pieces of information.",
        whyWrong: {
          A: "Prior procedures at the facility is administrative information - prior anesthesia complications anywhere are clinically critical.",
          C: "Patient preference is a care quality consideration, but safety history takes precedence.",
          D: "Provider familiarity may be beneficial for relationship continuity but is not a clinical history element.",
        },
        operationalContext:
          "Include in the pre-anesthesia assessment form: prior anesthesia complications (specify), difficult intubation history, MH personal or family history, adverse drug reactions, and current medications. Require the anesthesiologist to document review of this section before anesthetic plan is finalized.",
      },
    },
    {
      id: "asc_asg_13",
      question:
        "A patient receiving moderate sedation for a procedure stops breathing adequately. The nurse realizes they are the only clinical staff member immediately available. What should the ASC's emergency response plan include?",
      options: [
        "The nurse should continue the procedure alone until the physician arrives",
        "Emergency responders and medications must be immediately available during any sedation administration - immediate assistance must be obtainable by a single staff member",
        "Only facilities administering general anesthesia need emergency response plans",
        "The nurse should attempt CPR alone until paramedics arrive"
      ],
      correctIndex: 1,
      explanation:
        "ASG standards require that emergency equipment, personnel, and medications are immediately available whenever sedation or anesthesia is administered. The facility must be structured so that emergency help is immediately accessible - not potentially delayed by a single-provider model without backup.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Sedation emergencies can escalate in seconds. The ASG standards require pre-positioned emergency resources and a response structure that ensures help is immediately available - not a few minutes away. This includes a designated emergency call system accessible to a single nurse.",
        whyWrong: {
          A: "Continuing alone without emergency assistance in a respiratory emergency is unsafe and non-compliant.",
          C: "Emergency response requirements apply to all facilities using any level of sedation beyond minimal.",
          D: "Emergency response should be internal - with pre-positioned equipment and an immediately activatable call system - before considering paramedic arrival.",
        },
        operationalContext:
          "Install a two-way call system in each procedure room. Ensure crash carts and reversal agents are within 30 seconds of any sedation administration location. Conduct annual sedation emergency drills and document results.",
      },
    },
    {
      id: "asc_asg_14",
      question:
        "What element of the pre-procedural time-out directly addresses the risk of wrong-level spinal surgery?",
      options: [
        "Verification of the patient's name",
        "Confirmation of the correct surgical site, including level or side if applicable",
        "Confirmation of the anesthesia plan",
        "Verification that all instruments are counted"
      ],
      correctIndex: 1,
      explanation:
        "The time-out must confirm the correct surgical site - including, for spinal procedures, the correct vertebral level. Level designation is a specific element that prevents wrong-level spinal surgery, which is a well-recognized type of wrong-site surgery.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Wrong-level spinal surgery is a sentinel event. Level confirmation during site marking and the time-out - using imaging confirmation when available - is the specific safeguard designed to prevent this error.",
        whyWrong: {
          A: "Patient name verification confirms identity - not the surgical site level.",
          C: "Anesthesia plan confirmation is part of the time-out but does not address wrong-level risk.",
          D: "Instrument count is a separate intraoperative safety measure - not a time-out element.",
        },
        operationalContext:
          "For spinal procedures, include a fluoroscopic level confirmation step in the time-out policy - require the surgeon to confirm the level both by marking and by intraoperative imaging before the incision proceeds.",
      },
    },
    {
      id: "asc_asg_15",
      question:
        "Under ASG.130, when is surgical site marking NOT required?",
      options: [
        "When the surgeon has operated on the patient before",
        "When the procedure involves a single, non-lateral midline structure (per organizational policy), or when marking would be clinically inappropriate",
        "When the patient is under general anesthesia and cannot participate",
        "Surgical site marking is always required - there are no exceptions"
      ],
      correctIndex: 1,
      explanation:
        "Site marking exceptions include: procedures on single, non-bilateral structures (e.g., cardiac procedures, GI procedures via endoscopy) or cases where marking would be clinically inappropriate (e.g., superficial skin lesions where marking would affect surgical planning). These exceptions must be defined in organizational policy.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Not all procedures involve laterality or site ambiguity. Oral/dental procedures, single midline incisions, and endoscopic procedures may be exempted by policy because there is no risk of operating on the 'wrong side.' The key is that exceptions are policy-defined, not ad hoc.",
        whyWrong: {
          A: "Prior surgical history does not create a site marking exemption.",
          C: "Patient being under anesthesia does not eliminate the site marking requirement - marking occurs pre-operatively, before induction.",
          D: "Policy-defined exceptions do exist - the standard acknowledges this.",
        },
        operationalContext:
          "Define site marking exceptions in your surgical safety policy. Examples of typical exceptions: oral procedures (mark on radiograph or dental diagram instead), cardiac procedures (single midline sternotomy), GI endoscopy (site verified by scope). Require that exceptions be documented in the clinical record.",
      },
    },
    {
      id: "asc_asg_16",
      question:
        "A patient is being prepared for a bilateral knee arthroscopy. The surgeon only marks one knee, stating the other is 'obvious.' What is the compliance issue?",
      options: [
        "No issue - bilateral procedures do not require site marking since both sides are affected",
        "Both surgical sites on a bilateral procedure should be marked - 'obvious' is not a compliant substitute for marking policy requirements",
        "Marking is only required for procedures with different techniques on each side",
        "The anesthesiologist's pre-op note identifying the bilateral procedure satisfies the marking requirement"
      ],
      correctIndex: 1,
      explanation:
        "Bilateral procedures require marking of both sites. For bilateral knee arthroscopy, the operative sequence (e.g., right first, then left) or any side-specific procedural differences must be clearly marked. 'Obvious' is not a standard - marking policy must be applied consistently.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Wrong-site surgery cases have occurred even in bilateral procedures where one side was 'accidentally' operated on before the other, or where a planned bilateral became unilateral without clear documentation. Marking both sites prevents this.",
        whyWrong: {
          A: "Bilateral procedures still require marking - to confirm laterality sequence and prevent operating on the wrong side first.",
          C: "All bilateral procedures require marking to prevent sequence and laterality errors.",
          D: "A pre-op note does not substitute for physical site marking on the patient.",
        },
        operationalContext:
          "Policy: for bilateral procedures, mark both sites with the procedure sequence (e.g., 'R knee - 1st' and 'L knee - 2nd'). Confirm the sequence is consistent with the operative plan and the consent form.",
      },
    },
    {
      id: "asc_asg_17",
      question:
        "During anesthesia induction, the anesthesiologist notices the endotracheal tube has been placed in the esophagus rather than the trachea. Which monitoring modality would have detected this immediately?",
      options: [
        "Pulse oximetry alone",
        "End-tidal CO2 (capnography) - the absence of CO2 waveform immediately indicates esophageal placement",
        "Blood pressure monitoring",
        "Visual observation of chest rise"
      ],
      correctIndex: 1,
      explanation:
        "End-tidal CO2 (EtCO2) capnography is the gold standard for confirming endotracheal tube placement. Esophageal intubation produces no sustained CO2 waveform. The ASA Standards for Basic Anesthetic Monitoring require continuous EtCO2 monitoring after intubation - and AAAHC ASG standards require compliance with these nationally recognized monitoring guidelines.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "EtCO2 waveform confirmation of ETT placement is the standard of care. The absence of a CO2 waveform after intubation is the most reliable immediate indicator of esophageal placement - before SpO2 begins to fall (which takes several minutes).",
        whyWrong: {
          A: "Pulse oximetry detects hypoxia after it occurs - it may not alert to esophageal intubation for several minutes after placement.",
          C: "Blood pressure monitoring does not assess ventilation or airway placement.",
          D: "Chest rise can appear to occur even with esophageal intubation due to gastric distention - it is not reliable.",
        },
        operationalContext:
          "Establish a policy: EtCO2 confirmation of ETT placement is required before the patient's hands are freed from the operating table. Waveform must be continuous throughout anesthesia. Document initial EtCO2 value confirming placement in the anesthesia record.",
      },
    },
    {
      id: "asc_asg_18",
      question:
        "An ASC's pre-anesthesia assessment policy requires documentation of the patient's airway classification. Why is this a patient safety priority?",
      options: [
        "Airway classification is required for billing purposes",
        "Identifying a potentially difficult airway before the procedure allows the anesthesia team to prepare for alternative airway management strategies",
        "Airway classification is only relevant for patients receiving general anesthesia with intubation",
        "Airway assessment is the surgeon's responsibility, not the anesthesiologist's"
      ],
      correctIndex: 1,
      explanation:
        "Pre-operative airway assessment (Mallampati score, thyromental distance, neck mobility, mouth opening) allows the anesthesia team to anticipate difficult intubation before induction. Identifying a difficult airway in advance allows preparation of video laryngoscopy, awake fiber-optic intubation, or other strategies before the patient is anesthetized and the airway is secured.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'can't intubate, can't ventilate' emergency is one of the most critical anesthesia complications. Pre-operative airway assessment is the primary tool for anticipating this risk - enabling preparation that can prevent a fatal outcome.",
        whyWrong: {
          A: "Airway classification is a clinical safety tool, not a billing requirement.",
          C: "Airway assessment is relevant for all anesthesia levels - even for sedation where airway management may become needed unexpectedly.",
          D: "Airway assessment is primarily the anesthesiologist's or CRNA's responsibility as part of their pre-anesthesia evaluation.",
        },
        operationalContext:
          "Require a Mallampati airway classification and documentation of other airway predictors (limited neck mobility, prominent incisors, short thyromental distance) on the pre-anesthesia assessment form. For Mallampati III or IV, document the anticipated airway management plan.",
      },
    },
    {
      id: "asc_asg_19",
      question:
        "Under ASG.170, what must be monitored and documented in the post-anesthesia care area?",
      options: [
        "Only the patient's pain score at arrival and discharge",
        "Vital signs, level of consciousness, pain, nausea/vomiting, bleeding, and any complications - at defined intervals",
        "Only SpO2 and blood pressure - other parameters are optional",
        "The recovery nurse monitors the patient continuously but only documents at discharge"
      ],
      correctIndex: 1,
      explanation:
        "ASG.170 requires continuous monitoring in the recovery area that includes vital signs, level of consciousness, pain assessment, nausea and vomiting, bleeding, and any complications. Documentation must reflect this monitoring at defined intervals - not just on arrival and at discharge.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-anesthesia complications - respiratory depression, hypotension, arrhythmias, laryngospasm - can emerge at any point in the recovery period. Regular documented assessment creates a clinical record and drives timely response.",
        whyWrong: {
          A: "Pain alone is insufficient - the full set of required parameters must be monitored and documented.",
          C: "SpO2 and BP alone do not constitute comprehensive recovery monitoring - level of consciousness, pain, nausea, and bleeding are all required.",
          D: "Continuous monitoring without interval documentation does not create a recoverable record for clinical review or quality improvement.",
        },
        operationalContext:
          "Create a PACU flowsheet with time-stamped vital sign columns (SpO2, HR, BP, RR), pain score, sedation score, nausea score, bleeding status, and nursing notes. Document every 15 minutes until discharge criteria are met, or more frequently if the patient is unstable.",
      },
    },
    {
      id: "asc_asg_20",
      question:
        "A patient being discharged home after moderate sedation asks if they can drive themselves. Under ASG.180 and PRR.190, what must happen?",
      options: [
        "The patient may drive if they feel alert and oriented",
        "The patient must not be allowed to drive - they must have a responsible adult for transportation home, as required by the organization's discharge criteria and patient responsibility policies",
        "Driving is permitted if the patient received a reversal agent",
        "Driving decisions are the patient's personal responsibility - the ASC has no authority"
      ],
      correctIndex: 1,
      explanation:
        "Both ASG discharge criteria and PRR.190.30 (patient responsibilities) require that patients have a responsible adult available for transportation home after sedation. Sedation impairs driving ability for hours - the reversal of conscious effects does not mean the patient is safe to drive.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-sedation patients have residual cognitive and motor impairment that makes driving dangerous - even if they feel alert. PRR.190.30 makes this a patient responsibility that must be communicated before care, and ASG discharge criteria make it a clinical discharge requirement.",
        whyWrong: {
          A: "Subjective patient alertness is not a reliable indicator of driving safety after sedation.",
          C: "Reversal agents reverse sedative effects temporarily - cognitive impairment may return as the reversal agent metabolizes before the sedative.",
          D: "The ASC has a professional and legal duty to not discharge patients who are unsafe - this includes ensuring they have a responsible adult escort.",
        },
        operationalContext:
          "Communicate the transportation requirement pre-operatively in writing (PRR.190.30). On the day of the procedure, confirm the escort is present before induction. Document in the discharge checklist that a responsible adult escort is confirmed. If no escort is available, delay or cancel the procedure.",
      },
    },
  ],
};
