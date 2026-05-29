import type { DeepDiveLevel } from "./schema";

export const ddSurgicalSafetyLevel: DeepDiveLevel = {
  id: "dd-surgical-safety",
  name: "Surgical Safety & Consent Deep Dive",
  description: "Go deeper on Universal Protocol, surgical time-out, site marking, and informed consent with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(160, 70%, 40%)",
  baseLevelId: "universal_protocol",
  questions: [
    {
      id: "dd-ssc1",
      baseQuestion: "A Joint Commission tracer surveyor asks you to name the three components of the Universal Protocol. Which answer correctly identifies all three?",
      baseOptions: [
        "Site marking, surgical count, debriefing",
        "Patient identification, pre-procedure verification, surgical count",
        "Informed consent, patient identification, time-out",
        "Pre-procedure verification, site marking, time-out"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "The Universal Protocol consists of three components: (1) pre-procedure verification, (2) marking the operative/procedure site, and (3) performing a time-out immediately before the procedure.",
      baseXp: 15,
      followUps: [
        {
          question: "During the pre-procedure verification, the surgical team discovers the history and physical was completed 32 days ago. According to Joint Commission standards, what must happen before proceeding?",
          options: [
          "Proceed since the H&P is within 60 days",
          "The attending may verbally confirm no changes and proceed",
          "Cancel the case and reschedule after a new H&P",
          "An updated examination must be documented within 30"
        ],
        correctIndex: 3,
          explanation: "Joint Commission requires a history and physical within 30 days prior to the procedure, with an update within 24 hours before the procedure if the H&P was done more than 24 hours in advance. At 32 days, the H&P has expired and must be redone.",
          expertXp: 30
        },
        {
          question: "A patient arrives for an elective procedure with an H&P completed 28 days ago. The attending physician documents a brief update note stating 'no changes.' The update was written 26 hours before the scheduled procedure. A JC surveyor reviews the chart. What is the compliance finding?",
          options: [
          "Fully compliant - the H&P is within 30 days and has an update note",
          "Non-compliant - the update must be completed within 24 hours before surgery; 26 hours exceeds the requirement",
          "Compliant - the 24-hour update rule applies only when the H&P is older than 30 days",
          "Non-compliant - the original H&P should have been performed within 7 days for elective cases"
        ],
        correctIndex: 1,
          explanation: "Per CMS CoP §482.51(b)(1) and Joint Commission standards, when the H&P is performed more than 24 hours prior to the procedure, an updated examination must be completed and documented within 24 hours before the procedure. At 26 hours, the update is outside the allowable window and is non-compliant.",
          expertXp: 30
        },
        {
          question: "During a JC tracer, you are asked about your facility's pre-procedure verification process for add-on emergency cases at 2 AM when the attending surgeon is en route. The resident has examined the patient and documented an H&P. Which statement best reflects Joint Commission expectations?",
          options: [
          "A verbal attestation by the attending via phone satisfies the H&P requirement for emergencies",
          "Emergency cases are exempt from all Universal Protocol requirements including H&P documentation",
          "The H&P must be performed or authenticated by a practitioner with appropriate privileges before the",
          "The resident's H&P is sufficient if the attending co-signs within 72 hours post-procedure"
        ],
        correctIndex: 2,
          explanation: "Joint Commission PC.03.01.03 and medical staff bylaws require that the H&P be performed or authenticated by a credentialed practitioner before the procedure begins. While residents may document the H&P, the responsible attending must authenticate it per the facility's medical staff rules. Emergency status does not waive this requirement - it only allows the facility to define an expedited process.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc2",
      baseQuestion: "During a tracer, a surveyor observes the surgical time-out. Which element is NOT a required component of the time-out per Joint Commission standards?",
      baseOptions: [
        "Agreement on the procedure to be performed",
        "Confirmation of anesthesia provider's",
        "Correct site verified and marked",
        "Correct patient identity confirmed"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The time-out must include verification of correct patient identity, correct side/site, agreement on the procedure to be performed, and correct patient position. Scheduling logistics are not part of the time-out.",
      baseXp: 15,
      followUps: [
        {
          question: "The surgeon wants to add an additional procedure discovered intraoperatively. What does the Universal Protocol require?",
          options: [
          "Additional steps are needed since the patient is already under anesthesia",
          "A new time-out must be performed before the additional procedure begins",
          "The surgeon verbally announces the addition and that serves as the time-out",
          "The circulating nurse simply documents the additional procedure in the operative note"
        ],
        correctIndex: 1,
          explanation: "Whenever a new procedure is added, even intraoperatively, a separate time-out must be conducted before beginning the additional procedure. This includes verifying correct site, correct procedure, and correct patient.",
          expertXp: 30
        },
        {
          question: "During an intraoperative time-out for an added procedure, the circulating nurse asks whether the original consent covers the new procedure. The surgeon states the consent includes 'and any additional procedures deemed necessary.' Is this sufficient per Joint Commission standards?",
          options: [
          "Blanket consent language covering additional procedures is standard and acceptable",
          "The added procedure requires specific informed consent unless it constitutes a life-threatening",
          "All add-on procedures require a new written consent signed by the patient regardless of circumstances",
          "As long as the surgeon documents the medical necessity in the operative note afterward"
        ],
        correctIndex: 1,
          explanation: "Joint Commission RI.01.03.01 requires informed consent for each specific procedure. Blanket consent language does not meet the standard for informed consent because the patient was not informed of the specific risks, benefits, and alternatives of the additional procedure. The exception is a true emergency where obtaining consent is impossible and delay would endanger the patient's life.",
          expertXp: 30
        },
        {
          question: "A JC surveyor is tracing a case where the surgeon performed an intraoperative add-on procedure. The surveyor finds: (1) a second time-out was performed, (2) no separate consent was obtained, and (3) the surgeon documented 'emergent finding requiring immediate intervention - abscess encountered.' The patient was hemodynamically stable. How should the surveyor evaluate this?",
          options: [
          "Compliant - the surgeon documented the emergent finding which justifies proceeding without separate consent",
          "Compliant - the second time-out alone satisfies all requirements for add-on procedures",
          "Non-compliant - the hospital should have contacted the ethics committee before proceeding",
          "Non-compliant - an abscess in a hemodynamically stable patient does not constitute an emergency that"
        ],
        correctIndex: 3,
          explanation: "The emergency exception to informed consent applies only when the patient faces an immediate life-threatening situation and delay to obtain consent would cause serious harm. A hemodynamically stable patient with an abscess does not meet this threshold. The team should have attempted to obtain consent from the patient's surrogate decision-maker or awakened the patient if feasible. Joint Commission surveyors specifically look for appropriate application of the emergency consent exception.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc3",
      baseQuestion: "Who is responsible for marking the operative site according to Joint Commission requirements?",
      baseOptions: [
        "The circulating nurse",
        "Any member of the surgical team",
        "The surgical technologist",
        "The licensed practitioner"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "The Joint Commission requires the operative site to be marked by the licensed independent practitioner (LIP) who is performing the procedure or a licensed individual to whom the practitioner delegates this task per hospital policy.",
      baseXp: 15,
      followUps: [
        {
          question: "A patient is scheduled for a left inguinal hernia repair. The site mark must meet which Joint Commission specification?",
          options: [
          "A sticker placed by the pre-op nurse on the correct side",
          "An 'X' placed at the incision site",
          "The surgeon's initials or 'YES' at or near the",
          "A dot of indelible ink on the operative side"
        ],
        correctIndex: 2,
          explanation: "The Joint Commission requires the mark to be unambiguous (initials or 'YES' - never an 'X' which can be interpreted as 'not here'), placed at or near the procedure site, and visible after the patient is prepped and draped. The mark must be made with a permanent marker.",
          expertXp: 30
        },
        {
          question: "A hospital's policy allows a physician assistant (PA) to mark the surgical site under the surgeon's delegation. During a JC tracer, the surveyor discovers the PA marked the site but the surgeon never independently verified the mark before the time-out. Is the facility compliant?",
          options: [
          "Only the operating surgeon may mark the site under any circumstances",
          "The PA is a licensed practitioner and delegation alone satisfies the requirement",
          "Verification of the mark happens during the time-out which is a separate step",
          "When site marking is delegated"
        ],
        correctIndex: 3,
          explanation: "Joint Commission UP.01.02.01 allows delegation of site marking to a licensed individual per hospital policy, but the operating practitioner retains ultimate responsibility for verifying the mark's accuracy. The delegation policy must include a verification step by the surgeon. The time-out serves as an additional checkpoint but does not replace the surgeon's responsibility to verify the delegated mark.",
          expertXp: 30
        },
        {
          question: "During a JC survey, a facility's site marking policy is reviewed. The policy permits the use of adhesive arrows for site marking on patients receiving anticoagulation therapy (to avoid needle-stick bruising from marking). A surveyor asks whether this practice is acceptable. What is the correct assessment?",
          options: [
          "Non-compliant - Joint Commission requires ink markings only and does not permit adhesive alternatives",
          "Compliant - adhesive markers are acceptable as an alternative method if the facility's policy documents when",
          "Compliant - any visible indicator is acceptable without additional policy documentation",
          "Non-compliant - anticoagulated patients should simply have ink marks placed with lighter pressure"
        ],
        correctIndex: 1,
          explanation: "Joint Commission FAQ guidance on UP.01.02.01 permits alternative marking methods (including adhesive markers) when standard indelible ink marking is not feasible or appropriate, provided the facility has a written policy specifying when alternatives are used, who applies them, and how they remain visible through prep and draping. The key requirement is that the mark be unambiguous, at or near the site, and visible after preparation - the medium is flexible if properly governed by policy.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc4",
      baseQuestion: "When must the surgical time-out be performed?",
      baseOptions: [
        "Immediately before making the incision or starting the procedure",
        "After the patient is anesthetized but before draping",
        "In the pre-operative holding area before transport to the OR",
        "During the pre-procedure verification in the surgeon's office"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "The Joint Commission mandates the time-out occur immediately before starting the procedure. All members of the team must actively participate, which means the procedure must not begin until all questions or concerns are resolved.",
      baseXp: 15,
      followUps: [
        {
          question: "During the time-out, the scrub tech notices the consent form says 'right knee arthroscopy' but the site mark is on the left knee. What is the correct action?",
          options: [
          "Ask the anesthesiologist to decide which side is correct",
          "Proceed with the left knee since the surgeon marked it",
          "Stop the procedure and resolve the discrepancy before proceeding",
          "Proceed with the right knee since the consent form is the legal document"
        ],
        correctIndex: 2,
          explanation: "Any discrepancy identified during the time-out must halt the procedure. The team must resolve the discrepancy by verifying with the patient (if possible), reviewing imaging, and confirming with the surgeon before proceeding. This is a fundamental safety checkpoint.",
          expertXp: 35
        },
        {
          question: "After resolving the laterality discrepancy (the correct side was left knee, and the consent form had a transcription error), the team corrects the consent, re-marks the site, and prepares to proceed. What must happen before the procedure begins?",
          options: [
          "A completely new time-out must be performed from the beginning with all team members actively",
          "The surgeon verbally states the correction and the procedure can begin",
          "The anesthesiologist confirms the correction and the original time-out is considered complete",
          "The circulating nurse simply amends the time-out documentation to reflect the correction"
        ],
        correctIndex: 0,
          explanation: "After any discrepancy is resolved during a time-out, the entire time-out process must be repeated from the beginning. All team members must actively re-verify patient identity, procedure, site, site marking, positioning, and any other required elements. A partial re-verification or documentation amendment does not satisfy UP.01.03.01 requirements.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews 50 time-out records and finds that in 8 cases, the documented time-out occurred more than 15 minutes before the incision time due to delays (equipment issues, attending late). The time-outs were not repeated before incision. What is the surveyor's likely finding?",
          options: [
          "Non-compliant - the standard requires the time-out to occur within exactly 5 minutes of incision",
          "Compliant - there is no specific time limit between time-out and incision in Joint Commission standards",
          "Non-compliant - the time-out must occur 'immediately before' the procedure",
          "Compliant - the time-outs were performed and documented; the timing gap is acceptable"
        ],
        correctIndex: 2,
          explanation: "While Joint Commission does not specify an exact time limit, UP.01.03.01 requires the time-out occur 'immediately before starting the procedure.' When significant delays occur between the time-out and the start of the procedure - especially with intervening events like team member changes, patient repositioning, or equipment setup - conditions verified during the original time-out may no longer be valid. The facility should have a policy requiring a repeat time-out when significant delays or changes occur.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc5",
      baseQuestion: "Which of the following scenarios does NOT require site marking per Joint Commission standards?",
      baseOptions: [
        "Insertion of a central venous catheter in the right internal jugular vein",
        "Right carpal tunnel release",
        "Cesarean section (midline incision)",
        "Left total knee replacement"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Site marking is required for procedures involving laterality (right/left distinction), multiple structures (e.g., fingers, toes), or multiple levels (e.g., spine). A cesarean section with a midline incision does not involve laterality and may be exempt per hospital policy, though pre-procedure verification and time-out still apply.",
      baseXp: 15,
      followUps: [
        {
          question: "A spine surgeon is performing a multi-level lumbar fusion. How should site marking be handled according to Joint Commission guidance?",
          options: [
          "Mark only the first level to be fused",
          "Mark each individual vertebral level on the patient's skin with a permanent marker",
          "Mark the general spinal area and verify specific levels with",
          "Marking needed since spine procedures use intraoperative imaging"
        ],
        correctIndex: 2,
          explanation: "For spinal procedures, the general area should be marked, and the specific level(s) must be confirmed with intraoperative imaging (radiographic verification) as part of the time-out. Marking individual vertebral levels on skin is impractical and unreliable for identifying exact spinal levels.",
          expertXp: 30
        },
        {
          question: "A patient is scheduled for excision of a lesion on the right fourth finger. During pre-procedure verification, the surgeon marks the right hand but does not specifically identify the fourth finger. Is this compliant with Joint Commission standards?",
          options: [
          "Each finger on the hand must be individually marked to show which ones are NOT being operated on",
          "Marking the correct hand is sufficient for hand procedures",
          "The specific finger will be identified during the time-out verbally",
          "Procedures involving multiple structures (fingers) require marking at or near the"
        ],
        correctIndex: 3,
          explanation: "Joint Commission UP.01.02.01 specifically addresses procedures involving multiple structures such as fingers and toes. The mark must be placed at or near the specific structure (the fourth finger) to prevent wrong-structure surgery. Marking only the hand creates ambiguity about which finger is the operative site.",
          expertXp: 30
        },
        {
          question: "A JC surveyor is reviewing your facility's site marking exemption policy. The policy exempts the following from site marking: midline sternotomy, emergency intubation, single-organ cases (appendectomy, cholecystectomy), and all interventional radiology procedures. The surveyor identifies a compliance gap. Which exemption is problematic?",
          options: [
          "Emergency intubation - all airway procedures require marking",
          "Single-organ cases - appendectomy and cholecystectomy should still be marked",
          "All interventional radiology procedures",
          "Midline sternotomy - cardiac procedures always require site marking"
        ],
        correctIndex: 2,
          explanation: "Blanket-exempting all interventional radiology procedures is non-compliant because many IR procedures involve laterality (e.g., left vs. right renal artery embolization, unilateral nephrostomy, lateralized biopsies). Each procedure must be individually assessed for laterality, multiple structures, or multiple levels. Midline sternotomy and single-organ cases without laterality can appropriately be exempted, and emergent airway procedures may follow alternative verification processes.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc6",
      baseQuestion: "A tracer surveyor reviews the informed consent form for a surgical patient. Which element is required for valid informed consent?",
      baseOptions: [
        "A witness signature from a family member only",
        "A generic pre-printed consent form with no procedure-specific information",
        "The specific procedure, risks, benefits",
        "Only the surgeon's signature is needed"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Valid informed consent requires disclosure of the specific procedure, material risks, expected benefits, alternatives (including no treatment), and that the patient demonstrates understanding. The discussion must be in language the patient can understand.",
      baseXp: 15,
      followUps: [
        {
          question: "A patient who speaks only Mandarin is scheduled for gallbladder surgery. The consent discussion was conducted through the patient's 12-year-old bilingual child. Is this acceptable?",
          options: [
          "A qualified medical interpreter must be used",
          "The procedure must be cancelled entirely",
          "As long as the child accurately translates",
          "If the child signs as the interpreter"
        ],
        correctIndex: 0,
          explanation: "Joint Commission standards and federal regulations require the use of qualified medical interpreters for informed consent discussions. Minor children should never serve as interpreters for medical decisions due to potential inaccuracy, emotional burden, and inability to understand complex medical terminology.",
          expertXp: 35
        },
        {
          question: "A qualified medical interpreter is used for the consent discussion, and the patient signs the consent form. The surgeon documented 'informed consent obtained via interpreter' in the chart. During a JC tracer, the surveyor asks to see the interpreter documentation. What specific documentation does Joint Commission expect?",
          options: [
          "A separate interpreter consent form signed by the interpreter and the patient",
          "Additional documentation is needed beyond the surgeon's note",
          "The interpreter's name, language used, interpreter qualification/ID number",
          "Only the interpreter's signature on the consent form is required"
        ],
        correctIndex: 2,
          explanation: "Joint Commission RI.01.02.01 and CMS requirements mandate documentation of interpreter-assisted consent including the interpreter's identity, qualifications, language interpreted, and evidence that the patient understood the information and had the opportunity to ask questions. Simply noting 'interpreter used' is insufficient for demonstrating compliance with informed consent and language access standards.",
          expertXp: 30
        },
        {
          question: "A JC surveyor discovers that a facility uses telephone interpreter services for informed consent in surgical cases. The surveyor asks what quality assurance process exists for telephone interpreters. The facility has no QA process. What standard does this implicate, and what corrective action is required?",
          options: [
          "Joint Commission RI.01.01",
          "Standard addresses telephone interpretation quality - only in-person interpreters require QA",
          "The facility simply needs to switch to in-person interpreters for all surgical consents",
          "Telephone interpretation is prohibited for surgical consent under Joint Commission standards"
        ],
        correctIndex: 0,
          explanation: "Joint Commission standard RI.01.01.03 requires organizations to effectively address patient communication needs. This extends to quality assurance for all interpretation modalities, including telephone services. The facility must verify that its contracted telephone interpretation service employs qualified medical interpreters, implement periodic monitoring of interpretation accuracy, collect patient feedback, and maintain documentation of the QA process. Telephone interpretation is permitted but must be properly governed.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc7",
      baseQuestion: "What is the primary purpose of the WHO Surgical Safety Checklist?",
      baseOptions: [
        "To reduce surgical complications and mortality",
        "To ensure the surgeon's credentials are verified",
        "To document billing codes for the procedure",
        "To satisfy malpractice insurance requirements"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "The WHO Surgical Safety Checklist was designed to reduce surgical morbidity and mortality worldwide. It includes checks at three phases: Sign In (before anesthesia induction), Time Out (before skin incision), and Sign Out (before the patient leaves the OR).",
      baseXp: 15,
      followUps: [
        {
          question: "During the WHO checklist 'Sign In' phase (before anesthesia induction), which of the following must be confirmed?",
          options: [
          "Final surgical count is correct",
          "Patient identity, procedure and site",
          "Equipment and instrument sterility only",
          "The post-operative recovery plan"
        ],
        correctIndex: 1,
          explanation: "The Sign In phase occurs before induction of anesthesia and includes confirming patient identity, procedure, site, and consent; verifying the site is marked; confirming the anesthesia machine and medication check is complete; pulse oximeter is on the patient and functioning; known allergies; airway assessment; and risk of blood loss.",
          expertXp: 30
        },
        {
          question: "A JC surveyor observes that the facility uses its own customized surgical safety checklist rather than the exact WHO version. The customized checklist includes all WHO elements plus facility-specific additions. Is this compliant?",
          options: [
          "Compliant - Joint Commission allows facilities to customize their surgical safety",
          "Non-compliant - any deviation from the WHO checklist invalidates the safety process",
          "Compliant - but only if the WHO formally approves the modifications",
          "Non-compliant - facilities must use the exact WHO checklist without modifications"
        ],
        correctIndex: 0,
          explanation: "Joint Commission does not mandate the use of the WHO checklist specifically. Rather, it requires compliance with the Universal Protocol standards (UP.01.01.01 pre-procedure verification, UP.01.02.01 site marking, UP.01.03.01 time-out). Facilities may customize their checklists to meet these standards and add institution-specific elements. The WHO checklist is a widely adopted framework but customization is both permitted and encouraged to fit the facility's workflow.",
          expertXp: 30
        },
        {
          question: "A facility's compliance data shows that Sign Out completion rates are consistently lower than Sign In and Time Out completion rates (68% vs. 95% and 97% respectively). During a JC tracer, the surveyor asks what the facility is doing to address this gap. Which response best demonstrates compliance with Joint Commission performance improvement expectations?",
          options: [
          "The facility has identified the gap and plans to address it at the next annual quality review meeting",
          "The facility decided to eliminate the Sign Out phase since Sign In and Time Out cover the essential safety checks",
          "The facility conducted a focused root cause analysis, identified barriers (time pressure at case end",
          "The facility disciplined OR staff who failed to complete Sign Out and compliance has not improved"
        ],
        correctIndex: 2,
          explanation: "Joint Commission standard LD.03.02.01 and PI.01.01.01 require organizations to use data to identify performance improvement opportunities and implement systematic corrective actions. A compliant response demonstrates a data-driven improvement cycle: identify the gap, analyze root causes, implement targeted interventions, and monitor for sustained improvement. Punitive approaches alone are ineffective, and eliminating a safety checkpoint would create additional non-compliance.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc8",
      baseQuestion: "A surveyor asks about the two-patient-identifier requirement in the perioperative setting. Which combination meets Joint Commission standards?",
      baseOptions: [
        "Patient's room number and bed assignment",
        "Patient's gown color and wristband color",
        "Patient's diagnosis and surgeon name",
        "Patient's full name and date of birth"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "The Joint Commission requires at least two patient-specific identifiers (such as name and date of birth, or name and medical record number). Room number, bed assignment, and other location-based identifiers are never acceptable as patient identifiers.",
      baseXp: 15,
      followUps: [
        {
          question: "An unconscious trauma patient arrives in the OR with no identification. How should the two-patient-identifier requirement be met?",
          options: [
          "Skip identification since it's an emergency",
          "Use a temporary identification system (e.g.",
          "Use the room number as one identifier",
          "Wait for family to arrive before proceeding"
        ],
        correctIndex: 1,
          explanation: "For unidentified patients, hospitals must have a policy for assigning temporary identifiers (e.g., 'Trauma Alpha' with a unique medical record number). A wristband with these temporary identifiers must be applied to the patient. The two-identifier process must still be followed using these temporary identifiers.",
          expertXp: 30
        },
        {
          question: "Two trauma patients arrive simultaneously and are both assigned temporary identifiers. Patient 'Trauma Alpha' needs a craniotomy and 'Trauma Bravo' needs an exploratory laparotomy. A JC surveyor asks what safeguards prevent a mix-up between these unidentified patients. Which response best reflects Joint Commission expectations?",
          options: [
          "Trauma patients are exempt from the two-identifier requirement until they are formally identified",
          "The trauma team assigns sequential MRN numbers which serves as a sufficient safeguard",
          "The temporary names are different enough to prevent confusion",
          "The facility uses a standardized process including unique temporary identifiers"
        ],
        correctIndex: 3,
          explanation: "JC NPG 1 / formerly NPSG.01.01.01 requires reliable patient identification even for unknown patients. Best practice includes multiple safeguards: unique temporary names following a standardized naming convention (avoiding similar-sounding names), unique MRNs, color-coded or distinctly labeled wristbands, dedicated care teams, and rigorous verification at every handoff and before every procedure. The facility must have a written policy addressing simultaneous unidentified patients.",
          expertXp: 30
        },
        {
          question: "During a JC tracer, the surveyor discovers that the facility's temporary identification policy uses sequential naming (Trauma 1, Trauma 2, Trauma 3) and that the temporary identifiers are not reconciled with the patient's true identity when it becomes known. The surveyor also finds that the wristband with the temporary ID was not replaced when the patient was identified 6 hours later. What are the compliance gaps?",
          options: [
          "Only the wristband issue is a problem - sequential naming is acceptable",
          "Only the naming convention is problematic - wristband replacement is not required if the patient has been verbally identified",
          "Neither is a compliance gap - temporary identification processes are at the facility's discretion",
          "Both are compliance gaps: sequential numbering creates confusion risk among multiple unknowns"
        ],
        correctIndex: 3,
          explanation: "Both findings represent compliance gaps under NPG 1 / formerly NPSG.01.01.01. Sequential numbering (1, 2, 3) increases confusion risk among multiple unidentified patients and should use more distinct conventions. Additionally, when a patient's true identity is established, the facility must have a defined reconciliation process: replace the temporary wristband, merge medical records, notify all active care teams, and re-verify identity with two permanent identifiers. Failure to reconcile identifiers creates ongoing patient safety risk.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc9",
      baseQuestion: "According to Joint Commission National Performance Goals (NPG 1 - correct patient, correct care, correct time), when must surgical specimens be labeled?",
      baseOptions: [
        "When the circulating nurse has a free moment",
        "At the point of collection",
        "After the specimen is received in the pathology lab",
        "Only if the specimen appears abnormal"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission NPG 1 / formerly NPSG.01.03.01 requires labeling of specimens at the point of collection, in the presence of the patient. The label must include at least two patient identifiers, specimen source/site, and any other required information.",
      baseXp: 15,
      followUps: [
        {
          question: "During a bilateral breast biopsy, how should the surgical team handle specimen labeling to prevent a mix-up?",
          options: [
          "Place both specimens in the same container and label it with the patient's name",
          "Label each specimen separately with patient identifiers",
          "Send them unlabeled and call pathology with the details",
          "Label them 'Specimen 1' and 'Specimen 2'"
        ],
        correctIndex: 1,
          explanation: "Each specimen must be individually labeled at the point of collection with two patient identifiers, laterality, and specific site. A verification process (such as read-back) between the surgeon and circulating nurse is required to confirm correct labeling. This prevents critical errors in pathology that could lead to incorrect treatment.",
          expertXp: 35
        },
        {
          question: "A surgeon hands off three specimens in rapid succession during a complex case: right axillary sentinel node, right breast mass, and right breast margin. The circulating nurse labels them at the back table after all three are collected. A JC surveyor observes this. What is the compliance finding?",
          options: [
          "Compliant - as long as the nurse correctly identifies each specimen when labeling",
          "Non-compliant - but only because the nurse should have used pre-printed labels",
          "Compliant - all specimens were labeled before leaving the OR",
          "Non-compliant - each specimen must be labeled immediately at the point of"
        ],
        correctIndex: 3,
          explanation: "NPG 1 / formerly NPSG.01.03.01 requires labeling at the point of collection, in the presence of the patient. Collecting multiple specimens and labeling them later creates significant risk of mislabeling because the nurse must rely on memory or position to identify which specimen is which. Each specimen must be labeled immediately upon collection with read-back verification before the next specimen is passed off the field.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews a sentinel event involving a specimen labeling error: a right breast biopsy specimen was mislabeled as left breast, leading to the wrong side being treated with radiation. The root cause analysis reveals that the surgeon verbally stated the laterality, the circulating nurse repeated it back, but wrote the wrong side on the label. What system-level corrective action would best address this failure mode?",
          options: [
          "Add a third person to the verification process - the scrub tech must also confirm laterality verbally",
          "Implement a redundant verification system: surgeon states laterality, nurse labels the specimen",
          "Require surgeons to write their own specimen labels to eliminate transcription errors",
          "Switch to electronic labeling systems which eliminate all human error"
        ],
        correctIndex: 1,
          explanation: "The failure mode was a transcription error despite verbal read-back. The most effective corrective action adds a visual verification step: after labeling, both the surgeon and nurse visually confirm the written label matches the laterality documented on the consent form and site mark. This creates a closed-loop verification system that catches transcription errors. Simply adding a third verbal confirmation does not address the write-down error. Electronic systems help but are not universally available and still require verification of entered data.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc10",
      baseQuestion: "What is the most common root cause of wrong-site surgery events reported to The Joint Commission?",
      baseOptions: [
        "Inadequate staffing levels",
        "Equipment malfunction",
        "Surgeon inexperience",
        "Failure in the pre-operative verification process and communication breakdown"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Analysis of sentinel events reported to The Joint Commission consistently identifies breakdown in communication and failure to follow the pre-operative verification process as the most common root causes of wrong-site, wrong-patient, and wrong-procedure events.",
      baseXp: 15,
      followUps: [
        {
          question: "A hospital has had two wrong-site near-miss events in three months. As part of the root cause analysis, which action is MOST aligned with Joint Commission expectations?",
          options: [
          "Implement a system-level corrective action",
          "Terminate the surgeons involved",
          "Only discipline the circulating nurses who were present",
          "Add a disclaimer to the consent form"
        ],
        correctIndex: 0,
          explanation: "Joint Commission sentinel event policy expects a thorough root cause analysis followed by a system-level corrective action plan. This includes process improvements, education, monitoring compliance with the Universal Protocol, and fostering a just culture where staff feel safe reporting concerns and near-miss events.",
          expertXp: 30
        },
        {
          question: "During the root cause analysis of the near-miss events, the team discovers that in both cases, the time-out was led by the circulating nurse while the surgeon was scrubbing and the anesthesiologist was charting. Staff interviews reveal this is a common practice 'to save time.' What Joint Commission standard is being violated, and what corrective action is most appropriate?",
          options: [
          "Standard is violated - the time-out was performed and documented",
          "The violation is with staffing standards - the unit needs more nurses so time-outs don't feel rushed",
          "UP.01.03.01 requires active participation of all team members",
          "UP.01.02.01 is violated - the marking process should compensate for incomplete time-outs"
        ],
        correctIndex: 2,
          explanation: "UP.01.03.01 explicitly requires that the time-out involve 'the immediate members of the procedure team: the individual performing the procedure, anesthesia providers, and circulating nurse, operating room technician, and other active participants who will be participating in the procedure from the beginning.' All must actively participate. The corrective action must address both the individual behavior and the systemic culture that normalized passive time-outs.",
          expertXp: 30
        },
        {
          question: "Six months after implementing corrective actions for the wrong-site near-misses, the facility conducts a compliance audit of 100 time-outs using direct observation. Results show 92% full compliance, but 8 cases had partial compliance (surgeon not fully engaged). The facility reports this to their Quality Committee as 'substantially compliant.' A JC surveyor reviews this data. What is the surveyor's likely assessment?",
          options: [
          "The 92% rate demonstrates effective corrective action and is considered compliant",
          "Joint Commission expects 100% compliance with the Universal Protocol",
          "The 8% non-compliance rate is acceptable if it represents a statistical improvement over the pre-intervention baseline",
          "The facility should simply continue monitoring until the rate improves naturally"
        ],
        correctIndex: 1,
          explanation: "The Universal Protocol is a foundational patient safety practice for which Joint Commission expects 100% compliance. Wrong-site surgery is classified as a 'never event.' Unlike clinical metrics where improvement trends are acceptable, safety protocols like the time-out require complete compliance every time. The facility must investigate each non-compliant case, identify remaining barriers, implement additional interventions (such as empowerment protocols allowing any team member to stop the line), and continue monitoring until full compliance is sustained.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc11",
      baseQuestion: "Who must actively participate in the surgical time-out?",
      baseOptions: [
        "Only the surgeon and anesthesiologist",
        "Only the circulating nurse who reads the checklist",
        "The entire operative team including surgeon",
        "The surgeon and the patient's family"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The Joint Commission requires that the time-out involves the entire operative team. All members must actively communicate and agree on patient identity, procedure, and site before the procedure begins. Passive participation is not acceptable.",
      baseXp: 15,
      followUps: [
        {
          question: "A tracer surveyor observes a time-out where the surgeon continues scrubbing at the sink while the circulating nurse reads the checklist items. The surgeon says 'yeah, yeah' without looking up. Is this compliant?",
          options: [
          "But only because the surgeon should have been already scrubbed",
          "As long as the circulating nurse documents the time-out",
          "The surgeon verbally acknowledged the information",
          "The time-out requires active participation by all team members"
        ],
        correctIndex: 3,
          explanation: "Active participation means all team members must pause, be focused, and actively engage in the time-out process. A distracted acknowledgment ('yeah, yeah') while performing another task does not constitute active participation. The procedure must not start until all team members have genuinely participated.",
          expertXp: 30
        },
        {
          question: "A junior circulating nurse tells the surveyor she once noticed a discrepancy during a time-out but felt intimidated to speak up because the surgeon dismissed her concern and said 'let's just go.' She did not escalate the issue. What Joint Commission concept does this scenario illustrate, and what systemic fix is required?",
          options: [
          "This is an interpersonal conflict that should be handled by human resources",
          "This illustrates a documentation problem - the nurse should have documented her concern in the chart",
          "This illustrates a failure of the 'just culture' and psychological safety environment",
          "This illustrates a training gap - the nurse needs additional education on the Universal Protocol"
        ],
        correctIndex: 2,
          explanation: "Joint Commission Leadership standard LD.03.01.01 requires a culture of safety where staff feel free to report safety concerns without fear of retaliation. The scenario illustrates a failure of psychological safety and hierarchical intimidation - a well-documented contributor to surgical errors. The corrective action must include a formal 'stop the line' policy, leadership commitment to non-retaliation, crew resource management (CRM) training, and mechanisms for anonymous reporting.",
          expertXp: 30
        },
        {
          question: "A JC surveyor interviews multiple OR staff members and discovers that 'stop the line' events are reported through a voluntary online system, but the data shows only 3 reports in 12 months across 8,000 surgical cases. Leadership states 'this proves our processes are working well.' How should the surveyor interpret this finding?",
          options: [
          "The voluntary reporting system should be replaced with a mandatory reporting system to increase numbers",
          "The low reporting rate likely indicates underreporting due to barriers such as fear of retaliation",
          "Leadership's interpretation is reasonable - low reporting indicates high compliance",
          "The reporting rate is only concerning if the facility has had recent sentinel events"
        ],
        correctIndex: 1,
          explanation: "In a robust safety culture, high-reliability organizations typically see higher near-miss and safety concern reporting rates because staff feel empowered to report. An extremely low rate (3 in 8,000 cases = 0.04%) is a red flag for underreporting rather than a sign of safety excellence. Joint Commission expects organizations to actively assess reporting culture, identify barriers, provide feedback to reporters (closing the loop), and benchmark their reporting rates. Leadership misinterpreting low reports as success suggests a gap in safety culture understanding.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc12",
      baseQuestion: "During a tracer, a surveyor reviews the fire risk assessment documentation in the OR. What three elements make up the 'fire triangle' that must be assessed?",
      baseOptions: [
        "Heat, fuel, and oxidizer",
        "Cautery, prep solution, and patient hair",
        "Electricity, oxygen, and drapes",
        "Laser, alcohol, and supplemental oxygen"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "The fire triangle consists of three elements: a heat/ignition source (e.g., electrosurgical units, lasers, fiber-optic lights), fuel (e.g., drapes, alcohol-based prep, patient hair, intestinal gases), and an oxidizer (e.g., supplemental oxygen, nitrous oxide). All three must be present for a fire to occur.",
      baseXp: 15,
      followUps: [
        {
          question: "A head and neck surgery requires supplemental oxygen via nasal cannula and use of electrocautery near the face. What is the most appropriate fire prevention strategy?",
          options: [
          "Switch to a different surgeon who does not use cautery",
          "Minimize oxygen concentration",
          "Use an alcohol-based prep on the face to ensure sterility",
          "Special precautions are needed for routine cases"
        ],
        correctIndex: 1,
          explanation: "Head and neck procedures with supplemental oxygen and electrosurgery represent the highest fire risk. Prevention includes reducing FiO2 to the minimum necessary, allowing all alcohol-based preps to completely dry (minimum 3 minutes), draping to prevent oxygen entrapment, and ensuring fire suppression equipment is immediately available.",
          expertXp: 35
        },
        {
          question: "During the pre-procedure fire risk assessment, the anesthesiologist plans to use an FiO2 of 100% via open delivery (nasal cannula) for a facial lesion excision using electrocautery. The circulating nurse flags this as a high fire risk. The anesthesiologist states the patient's SpO2 is 88% on room air and needs high-flow oxygen. What is the most appropriate course of action?",
          options: [
          "Proceed with 100% FiO2 since patient safety from hypoxemia outweighs fire risk",
          "Cancel the case until the patient's respiratory status improves",
          "Reduce FiO2 to 21% regardless of the patient's oxygen needs",
          "Collaborate as a team to develop a risk mitigation plan: consider a secured"
        ],
        correctIndex: 3,
          explanation: "This scenario requires balancing two competing safety risks. The solution is not to choose one risk over another but to mitigate both through team collaboration. Securing the airway with an LMA or ETT contains the oxygen delivery system and prevents oxygen enrichment of the surgical field. Using bipolar electrocautery or alternative hemostasis methods reduces ignition risk. This reflects Joint Commission EC.02.06.01 expectations for proactive fire risk assessment and mitigation.",
          expertXp: 30
        },
        {
          question: "A JC surveyor asks the OR charge nurse to describe the facility's surgical fire drill process. The charge nurse states that fire drills are conducted annually in the OR and that staff know to 'stop, drop, and roll.' The surveyor identifies several deficiencies. Which response identifies the most critical gap?",
          options: [
          "The gap is that only the charge nurse was interviewed - all staff should be able to describe the process",
          "Fire drills should include participation from the fire department each time",
          "Annual drills are insufficient - Joint Commission requires monthly fire drills in the OR",
          "The response protocol described is for personal clothing fires"
        ],
        correctIndex: 3,
          explanation: "Surgical fire response requires specific OR-relevant protocols distinct from general fire response. The sequence includes immediately halting the ignition source, removing burning material from the patient, extinguishing fire on the patient (saline for small fires, CO2 extinguisher for larger fires), stopping supplemental oxygen and anesthetic gases, removing drapes, and evacuating if the fire is not controlled. Joint Commission EC.02.06.01 requires that fire drills in the OR simulate realistic surgical fire scenarios specific to the perioperative environment, not generic fire response.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc13",
      baseQuestion: "What is the purpose of surgical count reconciliation?",
      baseOptions: [
        "To determine how many staff members were in the OR",
        "To ensure all sponges, sharps, instruments",
        "To track inventory for ordering supplies",
        "To calculate the cost of the procedure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Surgical counts are performed to prevent retained surgical items (RSIs), a serious and preventable patient safety event. Counts must include sponges, sharps, instruments, and miscellaneous items and must be reconciled before wound closure.",
      baseXp: 15,
      followUps: [
        {
          question: "The final surgical count before closure is incorrect - one laparotomy sponge is unaccounted for. What is the required course of action?",
          options: [
          "Repeat the count, conduct a thorough wound",
          "Ask the team to recount from memory",
          "Close the wound and order a post-operative X-ray",
          "Document the discrepancy and close the wound"
        ],
        correctIndex: 0,
          explanation: "When a count discrepancy occurs, the wound must not be closed until the missing item is found. Standard protocol requires repeating the count, searching the surgical field and wound, checking trash and linen, and if the item remains unaccounted for, performing an intraoperative radiograph. The wound should not be closed until the item is located.",
          expertXp: 35
        },
        {
          question: "A surgeon in a complex 8-hour case states that performing counts is 'wasting time' and instructs the team to skip the closing count because 'nothing is missing.' The circulating nurse insists on performing the count. Who has the authority in this situation per Joint Commission expectations?",
          options: [
          "The charge nurse should be called in to mediate the disagreement",
          "The circulating nurse has both the right and obligation to complete the count",
          "The surgeon has final authority on all decisions in the OR including counts",
          "The circulating nurse should defer to the surgeon to maintain team dynamics"
        ],
        correctIndex: 1,
          explanation: "Surgical count policies are hospital-wide safety standards aligned with Joint Commission requirements and are not subject to individual surgeon discretion. The circulating nurse is professionally obligated to complete the count per hospital policy. If a surgeon refuses to allow the count, the nurse must invoke the chain of command (charge nurse, nursing supervisor, chief of surgery). Joint Commission standard LD.03.01.01 supports a culture where safety policies are consistently followed and staff feel empowered to advocate for patient safety.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews a facility's retained surgical item prevention program. The facility uses radiopaque sponges and manual counting. The surveyor notes that the facility has had 2 retained sponge events in 18 months despite correct final counts being documented in both cases. What additional technology and process improvement should the surveyor expect the facility to evaluate?",
          options: [
          "The facility should switch from laparotomy sponges to non-radiopaque gauze to make X-ray detection easier",
          "Additional measures are needed - the counts were documented as correct, so the system worked",
          "The facility should simply increase the number of count audits performed by management",
          "The facility should consider implementing adjunct technology (radiofrequency detection systems or barcode"
        ],
        correctIndex: 3,
          explanation: "Two retained items despite documented correct counts indicates a systemic failure in the counting process itself. Joint Commission expects the facility to conduct thorough root cause analysis examining how counts were falsely recorded as correct (human factors, distraction, count technique errors, relief handoff gaps). The facility should evaluate adjunct technology such as RF detection systems or barcode-enabled counting systems as additional safety barriers. AORN guidelines recommend considering these technologies especially in facilities with retained item events. Non-radiopaque materials would make detection harder, not easier.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc14",
      baseQuestion: "Before administering a blood transfusion in the OR, which verification steps are required per Joint Commission standards?",
      baseOptions: [
        "Two qualified individuals must independently verify the",
        "The anesthesiologist verbally confirms the blood type",
        "The blood bank's phone confirmation is sufficient",
        "One nurse checks the blood label against the patient's wristband"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Blood product verification requires two qualified individuals to independently verify at the bedside: patient identity using two identifiers matched to the blood bank tag, ABO/Rh compatibility, unit number, and expiration date. This dual verification is critical to preventing hemolytic transfusion reactions.",
      baseXp: 15,
      followUps: [
        {
          question: "During the blood verification, one of the two verifiers notices the unit is labeled 'O Positive' but the patient's blood type on the chart says 'O Negative.' The patient is a 28-year-old female. What should happen?",
          options: [
          "Do NOT transfuse; notify the blood bank of the discrepancy",
          "Proceed since the patient is not currently pregnant",
          "Transfuse only half the unit to minimize risk",
          "Proceed since O Positive is compatible with O Negative patients"
        ],
        correctIndex: 0,
          explanation: "This is a critical discrepancy. Administering Rh-positive blood to an Rh-negative female of childbearing age can cause Rh sensitization (formation of anti-D antibodies), which can lead to hemolytic disease of the fetus and newborn in future pregnancies. The transfusion must be stopped and the blood bank notified immediately.",
          expertXp: 35
        },
        {
          question: "The blood bank investigates the Rh discrepancy and discovers that the O Positive unit was intended for a different patient in an adjacent OR. They immediately send the correct O Negative unit. Before transfusing the correct unit, what must the team do?",
          options: [
          "Proceed immediately since the blood bank confirmed it is the correct unit",
          "Restart the complete dual-verification process from the beginning with two qualified",
          "Accept the unit if the unit number matches the blood bank's verbal confirmation",
          "Have the anesthesiologist alone verify the new unit since time is critical"
        ],
        correctIndex: 1,
          explanation: "The entire dual-verification process must be restarted for the new unit. The fact that a wrong unit reached the bedside constitutes a near-miss sentinel event requiring an incident report, root cause analysis, and investigation of how the blood bank's processes allowed a unit intended for a different patient to be issued. No shortcuts in verification are acceptable regardless of clinical urgency.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews the facility's blood administration policies and observes that in the OR, the two verifiers for blood products are consistently the circulating nurse and the surgical technologist. The facility's policy defines 'qualified individuals' for blood verification as 'RN or physician.' What is the compliance finding?",
          options: [
          "Compliant - any two healthcare workers can serve as verifiers for blood products",
          "Non-compliant - blood products in the OR should only be verified by the anesthesiologist and the circulating nurse",
          "Non-compliant - the surgical technologist does not meet the facility's own definition of 'qualified individuals'",
          "Compliant - the surgical technologist is a member of the operative team and is qualified by proximity"
        ],
        correctIndex: 2,
          explanation: "JC NPG 1 / formerly NPSG.01.03.01 requires that blood product verification be performed by individuals qualified per the facility's own policy. If the facility's policy defines qualified verifiers as 'RN or physician,' then using a surgical technologist - regardless of competency - violates the facility's own standard. The surveyor would cite this as non-compliance with the facility's implementation of NPG 1. The facility must either change its policy to include surgical technologists (with competency validation) or ensure only defined qualified individuals perform verification.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc15",
      baseQuestion: "A Joint Commission surveyor asks when pre-procedure verification should begin. What is the correct answer?",
      baseOptions: [
        "Only in the operating room",
        "After the patient is anesthetized",
        "At the time the procedure is scheduled and",
        "Only when the patient arrives in the pre-operative holding area"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Pre-procedure verification is an ongoing process that begins at the time the procedure is first planned or scheduled. It continues through all transitions of care (office visit, pre-admission testing, admission, pre-op holding, OR) up to and including the time-out.",
      baseXp: 15,
      followUps: [
        {
          question: "During pre-procedure verification in the holding area, the nurse discovers the consent form lists 'right shoulder arthroplasty' but the surgeon's posted schedule says 'right shoulder arthroscopy.' What is the appropriate action?",
          options: [
          "Use the schedule since the surgeon's office prepared it",
          "Proceed with whichever procedure the OR is set up for",
          "Resolve the discrepancy immediately by contacting the surgeon",
          "Use the consent form since it has the patient's signature"
        ],
        correctIndex: 2,
          explanation: "Any discrepancy in procedure documentation must be resolved before the patient enters the operating room. This requires direct communication with the surgeon, verification with the patient, and correction of all documents. An arthroplasty (joint replacement) versus arthroscopy (scope) are vastly different procedures with different implants, instruments, and recovery expectations.",
          expertXp: 30
        },
        {
          question: "A JC surveyor traces a patient through pre-procedure verification and finds that the verification was performed in the holding area but not re-verified at the OR door or upon entering the OR. The facility's policy states verification occurs 'at each transition point.' What is the compliance finding?",
          options: [
          "Compliant - verification in the holding area is sufficient since the patient has not changed",
          "Compliant - re-verification is only required if there is a change in team members",
          "Non-compliant - the facility's own policy requires verification at each transition point",
          "Non-compliant - but only because the OR door is where the official verification should occur"
        ],
        correctIndex: 2,
          explanation: "Joint Commission UP.01.01.01 describes pre-procedure verification as an ongoing process at each transition point. When a facility's policy specifies verification at each transition (which aligns with JC expectations), failure to verify at the holding-to-OR transition is non-compliant with both the facility's policy and the standard. Each transition represents an opportunity to catch discrepancies before they reach the time-out.",
          expertXp: 30
        },
        {
          question: "A JC surveyor discovers that a facility's pre-procedure verification process relies entirely on a single paper checklist that travels with the patient. The checklist is completed with checkmarks and no narrative documentation. Staff interviews reveal that nurses sometimes check boxes without actually performing the verification steps ('checkbox culture'). What systemic risk does this represent, and what corrective action best addresses it?",
          options: [
          "The facility should eliminate checklists entirely and rely on verbal verification",
          "The paper checklist is adequate - the facility should simply re-educate staff on its importance",
          "The systemic risk is normalization of deviance where safety checks become rote rather than",
          "The facility should add more checkboxes to the checklist to make it more comprehensive"
        ],
        correctIndex: 2,
          explanation: "This scenario illustrates 'normalization of deviance' - a well-documented safety culture failure where safety processes become perfunctory rituals rather than meaningful verifications. Joint Commission LD.03.01.01 (safety culture) and PI.01.01.01 (performance improvement) require organizations to identify and address such systemic risks. Effective corrective actions include redesigning verification tools to require active engagement (free-text responses, specific data entry), conducting unannounced direct observation audits, implementing electronic verification with hard stops that prevent progression without completion, and addressing the underlying culture through leadership engagement.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc16",
      baseQuestion: "Which type of ink must be used for operative site marking?",
      baseOptions: [
        "A felt-tip marker in the facility's designated color",
        "A permanent/indelible marker that will remain visible",
        "Any pen available at the nursing station",
        "A water-soluble marker that washes off with prep solution"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The site mark must be made with a permanent, indelible marker so it remains visible after skin preparation with antiseptic solutions and after draping. A mark that washes off defeats the purpose of site verification.",
      baseXp: 15,
      followUps: [
        {
          question: "A patient with a dark skin tone has a site mark that is not easily visible. What should the surgical team do?",
          options: [
          "Proceed without the mark since the surgeon knows which side",
          "Take a photograph of the mark as documentation and proceed",
          "Use alternative marking methods such as a different color",
          "Use a skin-lightening agent to improve visibility"
        ],
        correctIndex: 2,
          explanation: "When standard marking is not clearly visible due to skin tone, the team must use alternative methods as outlined in hospital policy. Options include different colored markers, adhesive site markers, or marking on an adjacent visible area. The chosen alternative must be documented and communicated to all team members during the time-out.",
          expertXp: 30
        },
        {
          question: "A JC surveyor asks the perioperative director what specific alternative marking methods are included in the facility's policy for patients where standard indelible ink is not visible. The director responds that 'staff use their best judgment on a case-by-case basis.' What is the compliance finding?",
          options: [
          "Compliant - Joint Commission allows flexibility in marking methods",
          "Non-compliant - the facility must have a written policy specifying approved",
          "Non-compliant - but only because the director should have been more specific in the response",
          "Compliant - clinical judgment is always the gold standard"
        ],
        correctIndex: 1,
          explanation: "Joint Commission UP.01.02.01 requires organizations to have a written, standardized process for site marking, including alternative methods. Relying on individual judgment without a policy creates inconsistency and potential safety gaps. The policy must specify what alternatives are approved (e.g., specific marker colors, adhesive markers, wristband-style markers), criteria for when they are used, who applies them, and how they are verified during the time-out.",
          expertXp: 30
        },
        {
          question: "A facility's revised site marking policy now includes approved alternatives for difficult-to-mark patients, including adhesive site markers and white surgical marking pens. During implementation, an OR nurse reports that during a case, the adhesive marker fell off after the ChloraPrep skin preparation. The site could not be verified during the time-out. What should the facility's response include?",
          options: [
          "Accept this as an unavoidable risk and proceed with verbal verification when marks are not visible",
          "Investigate whether the adhesive marker product is compatible with the facility's specific",
          "Switch all patients to the white surgical marking pen regardless of skin tone",
          "Remove adhesive markers from the approved alternatives list entirely"
        ],
        correctIndex: 1,
          explanation: "This represents a policy implementation failure that requires systematic investigation. The facility must determine product compatibility with their specific prep solutions (ChloraPrep, Betadine, etc.), potentially test alternative products, and revise the policy to address the sequence of marking versus preparation. Joint Commission expects organizations to identify safety gaps in their own policies and implement data-driven improvements. Simply removing the option or accepting the risk creates additional safety vulnerabilities.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc17",
      baseQuestion: "In the WHO Surgical Safety Checklist, what occurs during the 'Sign Out' phase?",
      baseOptions: [
        "The surgeon signs the operative note",
        "The patient signs a post-operative consent form",
        "The anesthesiologist signs out the controlled substances",
        "The team confirms the procedure performed"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "The Sign Out phase occurs before the patient leaves the operating room. It includes confirmation of the procedure name for documentation, completion of instrument/sponge/needle counts, correct specimen labeling, identification of equipment problems, and review of key concerns for recovery and management.",
      baseXp: 15,
      followUps: [
        {
          question: "During Sign Out, the team identifies that a key concern for recovery is the patient's obstructive sleep apnea and the use of opioid pain management. What communication step is essential?",
          options: [
          "Tell the patient's family to watch for breathing problems",
          "Order an automatic respiratory therapy consult for all surgical patients",
          "Document it in the chart and assume the recovery room nurse will read it",
          "Provide a structured handoff to the PACU team that specifically addresses"
        ],
        correctIndex: 3,
          explanation: "A structured handoff from the OR team to the PACU team is essential, specifically highlighting the patient's obstructive sleep apnea and opioid administration. This should include monitoring recommendations (continuous SpO2), CPAP/BiPAP availability, and positioning guidance to reduce airway obstruction risk.",
          expertXp: 30
        },
        {
          question: "A JC surveyor observes the OR-to-PACU handoff and notes that the anesthesiologist gives a rapid verbal report while the PACU nurse is simultaneously connecting monitors and assessing the patient. The nurse does not ask any clarifying questions. What Joint Commission standard is at risk, and what improvement is needed?",
          options: [
          "PC.02.02.01 - the issue is with discharge planning, not handoff",
          "NPSG.02.03.01 (handoff communication)",
          "Standard is at risk - this is a normal and efficient handoff process",
          "The handoff is adequate as long as it is documented in the chart"
        ],
        correctIndex: 1,
          explanation: "JC NPG 1 / formerly NPSG.02.03.01 requires standardized handoff communication with an opportunity for questions and concerns. A handoff where the receiver is distracted by simultaneous tasks and does not ask questions fails to meet the interactive requirement of the standard. Best practice includes a standardized format (I-PASS, SBAR), a dedicated moment where competing tasks are paused, read-back of critical information, and documentation of the handoff.",
          expertXp: 30
        },
        {
          question: "Following a JC survey finding about handoff deficiencies, the facility implements a standardized I-PASS handoff protocol for OR-to-PACU transitions. Six months later, a compliance audit shows 78% adherence to the full protocol. Staff feedback indicates the protocol 'takes too long' and 'delays room turnover.' How should leadership respond to balance compliance with operational efficiency?",
          options: [
          "Engage frontline staff in a rapid-cycle improvement process to streamline the protocol",
          "Accept 78% as reasonable compliance and focus on other quality priorities",
          "Make compliance mandatory and discipline staff who do not follow the full protocol",
          "Shorten the protocol to only the most critical elements to improve compliance"
        ],
        correctIndex: 0,
          explanation: "Joint Commission PI.01.01.01 requires data-driven performance improvement using frontline staff engagement. When a new safety protocol faces adoption barriers, the organization must investigate root causes (workflow conflicts, time pressure, protocol design issues) and iteratively improve the implementation without compromising safety. This includes engaging staff who identified the barriers, redesigning workflow to accommodate the protocol (e.g., establishing a handoff pause), sharing outcome data to reinforce importance, and setting realistic but escalating compliance targets. Punitive approaches without addressing systemic barriers are ineffective.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc18",
      baseQuestion: "A patient is scheduled for a procedure on a non-lateralized midline structure (e.g., thyroidectomy). How should site marking be handled?",
      baseOptions: [
        "Mark an 'X' on the neck",
        "Site marking is not required for midline",
        "Site marking is optional for all procedures",
        "The surgeon must mark both sides of the neck"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Joint Commission does not require site marking for midline procedures where there is no laterality, no multiple structures, and no multiple levels. However, pre-procedure verification and time-out are still mandatory. Individual hospital policy may still require marking for these cases.",
      baseXp: 15,
      followUps: [
        {
          question: "A patient is having a thyroid lobectomy (removal of the RIGHT lobe only). Does this change the site marking requirement?",
          options: [
          "Marking is only needed if both lobes might be removed",
          "Only if the patient requests it",
          "Because the procedure now involves",
          "Thyroid procedures never require marking"
        ],
        correctIndex: 2,
          explanation: "A thyroid lobectomy involves laterality (right versus left lobe), which makes it subject to the site marking requirement under the Universal Protocol. The operating side must be marked by the surgeon to prevent wrong-side surgery. This differs from a total thyroidectomy which is a midline procedure.",
          expertXp: 25
        },
        {
          question: "A surgeon argues that site marking for a thyroid lobectomy is unnecessary because 'the neck is so small that left and right are obvious, and I'll confirm with ultrasound intraoperatively.' A JC surveyor hears this during a tracer interview. What is the surveyor's assessment?",
          options: [
          "The surgeon's reasoning is sound - intraoperative ultrasound provides definitive laterality confirmation",
          "The surgeon is partially correct",
          "The surgeon is correct - site marking for thyroid lobectomy is at the facility's discretion",
          "The surveyor should defer to the surgeon's clinical judgment on this matter"
        ],
        correctIndex: 1,
          explanation: "Joint Commission UP.01.02.01 is unambiguous: site marking is required for procedures involving laterality. The surgeon's argument that anatomy makes laterality 'obvious' does not constitute an exemption. Intraoperative imaging is an excellent additional verification step but does not replace pre-procedure site marking. The surveyor would note this as a non-compliant attitude that could indicate broader culture issues with Universal Protocol adherence.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews the facility's site marking exemption list and finds that parathyroid exploration is listed as exempt from site marking because it is 'a bilateral procedure.' However, the surveyor notes that the facility frequently performs focused, unilateral parathyroidectomy based on pre-operative sestamibi scan localization. What is the compliance issue?",
          options: [
          "Parathyroid procedures are always bilateral explorations and therefore exempt",
          "Parathyroid procedures should never be on the exemption list regardless of approach",
          "The exemption is acceptable because the sestamibi scan serves as the site verification",
          "The exemption list fails to distinguish between bilateral parathyroid exploration (which may be"
        ],
        correctIndex: 3,
          explanation: "This represents a policy gap where the site marking exemption list has not kept pace with evolving surgical practice. While bilateral parathyroid exploration involves both sides (potentially exemptible from laterality marking), focused unilateral parathyroidectomy directed by pre-operative imaging clearly involves laterality. The facility must review and update its exemption list to accurately reflect the procedures being performed, ensuring that unilateral/lateralized approaches are appropriately subjected to site marking requirements under UP.01.02.01.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc19",
      baseQuestion: "A Joint Commission surveyor asks about the organization's process for patients who refuse site marking. What is the correct policy approach?",
      baseOptions: [
        "Have the patient's family member mark the site instead",
        "Proceed without any site verification",
        "The organization must have a written",
        "Cancel the surgery"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The Joint Commission acknowledges that patients may refuse site marking for various reasons (cultural, religious, cosmetic concerns). Organizations must have a written alternative process that ensures correct site verification even when marking is not performed.",
      baseXp: 15,
      followUps: [
        {
          question: "A Jehovah's Witness patient refuses surgical site marking for religious reasons. She is having a left knee replacement. What alternative process would satisfy Joint Commission requirements?",
          options: [
          "Proceed without any additional steps since the patient refused",
          "Have the chaplain mark the site instead",
          "Cancel the case",
          "Implement the hospital's alternative"
        ],
        correctIndex: 3,
          explanation: "When a patient refuses site marking, the hospital's alternative verification process must be followed. This may include additional imaging review, extra verification during time-out, use of non-ink methods like stickers or bands, and clear documentation of the refusal and alternative methods used. The goal remains preventing wrong-site surgery through an adapted process.",
          expertXp: 30
        },
        {
          question: "A cosmetic surgery patient refuses site marking because she does not want any residual ink marks on her skin after surgery. The surgeon agrees and states marking is 'not necessary for cosmetic procedures.' A JC surveyor reviews this case. What is the finding?",
          options: [
          "Non-compliant - the patient should be counseled that marking is mandatory and non-negotiable",
          "Compliant - the patient's autonomy to refuse marking overrides the requirement without any additional steps",
          "Compliant - cosmetic procedures are exempt from site marking requirements",
          "Non-compliant - the surgeon's exemption of cosmetic procedures is not supported by JC standards"
        ],
        correctIndex: 3,
          explanation: "Joint Commission does not exempt cosmetic procedures from the Universal Protocol. If the procedure involves laterality, multiple structures, or multiple levels, site marking is required. When a patient refuses, the facility's alternative verification policy applies - the surgeon cannot unilaterally waive the requirement. The facility must document the refusal, implement the alternative process, and ensure all time-out participants are aware of the modified verification approach.",
          expertXp: 30
        },
        {
          question: "A JC surveyor reviews the facility's site marking refusal policy and finds it states: 'If a patient refuses site marking, the surgeon will confirm laterality verbally during the time-out.' There is no documentation requirement, no alternative marking method, and no additional verification steps beyond the standard time-out. Is this policy adequate?",
          options: [
          "As long as the time-out includes laterality verification, no additional steps are needed for refusal cases",
          "Verbal confirmation during the time-out is the standard practice and is sufficient",
          "The policy should simply state that surgery cannot proceed if the patient refuses marking",
          "The policy is insufficiently robust"
        ],
        correctIndex: 3,
          explanation: "Joint Commission expects that alternative processes for patients who refuse marking provide verification that is at least equivalent in reliability to standard site marking. A policy that simply relies on verbal confirmation during the standard time-out does not add any safety barrier beyond what already exists - it effectively waives the marking requirement without substituting an alternative. The policy must include documentation of the refusal, specific alternative verification methods, communication to the entire team, and evidence that the alternative process has been validated to prevent wrong-site events.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-ssc20",
      baseQuestion: "During a tracer in the ambulatory surgery center, a surveyor observes a nurse performing a pre-procedure verification. The nurse checks the consent form, confirms the patient's identity with two identifiers, and verifies the procedure matches the schedule. What critical element is the nurse missing?",
      baseOptions: [
        "Confirming that all relevant documents",
        "Verifying the patient's insurance information",
        "Calling the surgeon to confirm arrival time",
        "Checking the patient's dietary preferences"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Pre-procedure verification must include confirming that all relevant documents (H&P, consent, pre-procedure orders), imaging studies (properly labeled and displayed), and any required implants, special equipment, or blood products are available, correct, and matched to the patient.",
      baseXp: 15,
      followUps: [
        {
          question: "The pre-procedure verification reveals that the CT scan displayed on the viewer belongs to a different patient with a similar name. This is caught before the procedure. What systemic issue does this represent, and what corrective action is most appropriate?",
          options: [
          "An imaging department issue that is not the surgical team's concern",
          "A labeling error; simply replace the scan and proceed",
          "A patient identification failure that warrants an incident",
          "A minor clerical error that requires no follow-up"
        ],
        correctIndex: 2,
          explanation: "A wrong-patient imaging study reaching the OR represents a significant system failure in patient identification and verification. This near-miss requires an incident report, root cause analysis examining how the wrong study was pulled and not caught earlier, review of imaging retrieval workflows, and education for all staff involved in the pre-procedure verification chain.",
          expertXp: 35
        },
        {
          question: "The root cause analysis of the wrong-patient CT scan reveals that the radiology tech retrieved the study by searching the patient's last name only, and two patients with the same last name had CT scans on the same day. The facility's PACS system does not require MRN verification when pulling studies for surgical cases. What systemic corrective action is most aligned with Joint Commission expectations?",
          options: [
          "Require the surgeon to personally verify all imaging before each case",
          "Retrain the radiology tech who pulled the wrong study",
          "Add a disclaimer to the imaging request form stating the surgical team is responsible for verification",
          "Implement a system-level fix requiring two-identifier matching (name AND MRN or DOB)"
        ],
        correctIndex: 3,
          explanation: "JC sentinel event policy and NPG 1 / formerly NPSG.01.01.01 expect system-level corrective actions that address root causes rather than individual blame. The fix must address the systemic vulnerability: the PACS system allowing single-identifier retrieval. Implementing mandatory two-identifier matching in the retrieval workflow creates a hard stop that prevents this failure mode. Additionally, the facility should conduct a proactive risk assessment (FMEA) to identify similar single-identifier vulnerabilities in other systems (lab results, medication dispensing, etc.).",
          expertXp: 30
        },
        {
          question: "Six months after implementing the PACS two-identifier retrieval requirement, a JC surveyor returns for a follow-up survey. The facility shows data that wrong-patient imaging retrieval events dropped from 4 per quarter to zero. However, the surveyor discovers that OR staff have developed a workaround: when the PACS two-identifier search is slow, they photograph the imaging screen with a personal phone and use that image for surgical planning. What compliance issues does this workaround create?",
          options: [
          "Compliance issue - staff are being resourceful to maintain workflow efficiency",
          "The workaround is acceptable as a temporary measure while the PACS speed is improved",
          "Multiple compliance issues: (1) personal device images bypass the two-identifier verification",
          "The only issue is HIPAA - personal phone photographs of patient imaging violate privacy rules"
        ],
        correctIndex: 2,
          explanation: "This scenario illustrates how safety system implementations can create unintended workarounds that introduce new risks - a concept known as 'risk migration.' The workaround bypasses the very safety barrier implemented to prevent wrong-patient imaging events, violates HIPAA through PHI on personal devices, may provide diagnostically inadequate images, and signals that the safety fix created an operational barrier staff felt compelled to circumvent. Joint Commission expects organizations to monitor for workarounds after implementing safety changes (PI.01.01.01), address them through process improvement (such as improving PACS speed or providing facility-owned devices), and maintain the integrity of safety barriers.",
          expertXp: 35
        }
      ]
    }
  ]
};
