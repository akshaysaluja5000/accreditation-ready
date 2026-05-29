import type { DeepDiveLevel } from "./schema";

export const ddAnesthesiaLevel: DeepDiveLevel = {
  id: "dd-anesthesia",
  name: "Anesthesia & Sedation Deep Dive",
  description: "Expert-level questions on moderate sedation credentialing, post-anesthesia documentation, reversal agents, regional anesthesia protocols, and JC compliance scenarios.",
  icon: "Microscope",
  color: "hsl(262, 65%, 52%)",
  baseLevelId: "anesthesia_sedation",
  questions: [
    {
      id: "dd-anes1",
      baseQuestion: "A hospitalist with moderate sedation privileges administers midazolam and fentanyl for a bedside procedure. Thirty minutes in, the patient becomes minimally responsive, only reacting to painful stimulation. The hospitalist continues the procedure. What has occurred and what is the primary compliance issue?",
      baseOptions: [
        "The patient is in expected moderate sedation - deep unresponsiveness is a normal variation within the moderate sedation range",
        "The patient has transitioned to deep sedation - the hospitalist must hold deep sedation privileges to continue, which is a higher credential level",
        "The patient is under general anesthesia - the procedure must stop and anesthesia must be called immediately",
        "No compliance issue exists as long as the patient's oxygen saturation remains above 92%"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "When a patient no longer responds to verbal or light tactile stimulation, they have crossed into deep sedation. JC requires the administering provider to hold a specific deep sedation privilege - which is distinct from and higher than a moderate sedation credential. Continuing without that credential is a compliance finding.",
      baseXp: 15,
      followUps: [
        {
          question: "The hospitalist argues that the transition to deep sedation was unintended and brief. The facility's policy does not address unintended sedation depth escalation. What are the JC compliance implications of this policy gap?",
          options: [
            "No implications - unintended sedation escalation is an expected clinical event and does not require specific policy guidance",
            "The policy gap means the facility lacks defined procedures for managing unintended sedation depth escalation, which JC would cite as a deficiency in the sedation management program",
            "The compliance issue rests entirely with the individual provider - facility policy gaps are not cited when the root cause is a provider credentialing issue",
            "The gap is permissible if the facility documents the event as a near-miss and submits a corrective action plan within 90 days"
          ],
          correctIndex: 1,
          explanation: "JC requires that the hospital's anesthesia and sedation policies address the full spectrum of clinical scenarios, including unintended sedation level escalation. A policy that does not define what to do when a patient transitions unexpectedly from moderate to deep sedation leaves staff without guidance during a critical moment. This policy gap would be cited as a systemic deficiency in the sedation program.",
          expertXp: 25
        },
        {
          question: "Following the event, the quality team conducts a root cause analysis. They discover the hospitalist has performed 47 moderate sedation cases in the past year, four of which involved unintended deep sedation transitions, all undocumented. What systemic failures does this reveal and what corrections are required?",
          options: [
            "The failure is individual provider non-compliance - suspension of privileges pending retraining is the only required action",
            "Systemic failures include: lack of mandatory depth-of-sedation documentation, no trigger for reporting unintended escalation, no monitoring of sedation complication rates by provider, and no review of sedation outcomes at the credentials committee. Corrections include sedation monitoring policy revision, mandatory reporting protocol, and outcomes tracking linked to re-credentialing",
            "The finding requires reporting to the state medical board before any internal corrective action can be taken",
            "The four undocumented events are the only finding - the facility should implement a chart audit to identify all missing documentation and backfill records"
          ],
          correctIndex: 1,
          explanation: "Four undocumented unintended deep sedation transitions in one provider's practice over one year reflects multiple systemic failures: no mandatory sedation outcome documentation, no mechanism for reporting unexpected events, no ongoing monitoring of sedation practice quality, and no credential review trigger. True systemic correction requires policy changes, outcome surveillance, and integration of sedation performance data into the credentialing process - not just individual provider action.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes2",
      baseQuestion: "A post-anesthesia evaluation completed at 46 hours documents all required elements except post-operative hydration status. The anesthesiologist argues this element is covered by nursing assessments and need not be in the anesthesia evaluation. Is this reasoning correct?",
      baseOptions: [
        "Yes - hydration status is a nursing domain and its documentation in the nursing flow sheet satisfies the anesthesia evaluation requirement",
        "No - all 7 required post-anesthesia evaluation elements must be documented by the qualified provider completing the evaluation, not distributed across other documentation",
        "Yes - the Joint Commission allows cross-referencing other chart sections for post-anesthesia evaluation elements",
        "No - but only when the anesthesia evaluation is the only post-procedure note in the chart"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "All 7 post-anesthesia evaluation elements must be present in the evaluation completed by the qualified provider. Cross-referencing nursing documentation for required elements does not satisfy the standard - each element must be addressed within the evaluation itself.",
      baseXp: 15,
      followUps: [
        {
          question: "A quality audit reveals that 23% of post-anesthesia evaluations are missing at least one of the 7 required elements, and 15% are completed beyond the 48-hour window. The anesthesia department chief submits a plan to re-educate providers. What else must the improvement plan include to satisfy JC performance improvement expectations?",
          options: [
            "Re-education alone satisfies JC performance improvement requirements - the plan is complete",
            "The plan must also include: a baseline measurement of the current deficiency rate, a defined improvement goal, a monitoring mechanism with regular data collection post-intervention, a reporting cadence to leadership, and a reassessment timeline to verify sustained improvement",
            "The plan must include a corrective action for each individual provider who had deficient documentation - systemic measures are secondary to individual accountability",
            "The plan is complete once a new documentation template is created that prompts providers to complete all 7 elements"
          ],
          correctIndex: 1,
          explanation: "A re-education-only plan does not constitute a performance improvement process. JC requires PDSA-cycle thinking: define the problem (baseline data), implement an intervention, measure the result, and sustain improvement. The plan must include baseline data, an improvement goal, a post-intervention monitoring mechanism, leadership reporting, and reassessment. A documentation template can be one tool, but it must be accompanied by outcome measurement.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes3",
      baseQuestion: "A GI suite uses midazolam and fentanyl for colonoscopy sedation. During a tracer, the surveyor asks the nurse to show where reversal agents are stored. The nurse leads the surveyor to the medication room, approximately 90 feet away. Is this location compliant?",
      baseOptions: [
        "Yes - the medication room is the standard storage location for all reversal agents in a GI suite",
        "No - reversal agents must be immediately available at the bedside or in the procedure room during any procedure using the drugs they reverse",
        "Yes - 90 feet is within the acceptable distance standard for reversal agent access",
        "No - reversal agents must be carried by the administering provider at all times during sedation procedures"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires reversal agents to be 'immediately available' - meaning at the bedside or within the procedure room, not down the hall. A medication room 90 feet away does not meet the standard because a delay in obtaining naloxone or flumazenil during a sedation emergency could result in patient harm or death.",
      baseXp: 15,
      followUps: [
        {
          question: "The GI suite manager proposes storing reversal agents in a locked cabinet in an alcove just outside each procedure room door - approximately 12 feet away - with the key kept on the administering nurse. The surveyor is asked whether this arrangement is compliant. What is the correct analysis?",
          options: [
            "Non-compliant - locked storage with a key always fails the immediately available standard, regardless of distance",
            "Compliant - 12 feet with a key on the administering nurse represents immediate access within the meaning of the standard",
            "Compliant only if the cabinet uses a break-glass mechanism rather than a key lock",
            "Non-compliant - reversal agents must be in the procedure room itself; outside the room never satisfies the standard"
          ],
          correctIndex: 1,
          explanation: "The immediately available standard does not specify a precise distance - it requires that the reversal agent be accessible without delay during an emergency. A locked cabinet 12 feet away with the key on the administering nurse is a defensible interpretation of immediate availability - the provider can access the medication in seconds without leaving the clinical area. This is significantly different from a medication room 90 feet down a corridor. Facilities should document the rationale for their storage approach in policy.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes4",
      baseQuestion: "Before a spinal block, an anesthesiologist marks the lumbar site with a skin marker, discusses the plan with the patient, and proceeds without a formal time-out. The anesthesiologist argues that a time-out is not required for a spinal because 'the site is obvious and the patient is awake.' Is this reasoning correct?",
      baseOptions: [
        "Yes - time-outs for spinal anesthesia are discretionary when the patient is awake and can confirm the site",
        "No - regional anesthesia and nerve blocks require a site-specific time-out before injection regardless of patient awareness or perceived site clarity",
        "Yes - time-outs are required only for procedures performed under general anesthesia",
        "No - but only when the spinal is performed for surgical rather than obstetrical anesthesia"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Universal Protocol requires a time-out before all invasive procedures involving regional anesthesia techniques - including spinal blocks. Patient awareness does not substitute for the time-out process. The time-out confirms correct patient, correct site/level, and correct procedure with the clinical team present.",
      baseXp: 15,
      followUps: [
        {
          question: "A facility's anesthesia department argues that requiring a time-out for every spinal block slows workflow in a high-volume obstetrics unit. They propose a 'mini time-out' where only the anesthesiologist verbally confirms the site to themselves before injection. Does this modified approach satisfy the Universal Protocol?",
          options: [
            "Yes - any verbal confirmation before an invasive procedure constitutes a time-out under the Universal Protocol",
            "No - the Universal Protocol requires a team time-out involving at least the anesthesiologist and one other member of the clinical team - a solo provider self-confirming does not satisfy the requirement",
            "Yes - the Universal Protocol time-out requirement has documented efficiency exceptions for high-volume procedural areas",
            "No - the time-out requires all team members present in the room, including circulating nurses, scrub technicians, and the supervising physician"
          ],
          correctIndex: 1,
          explanation: "The Universal Protocol time-out must involve the clinical team - it is a team verification process, not an individual self-confirmation. A provider verbally confirming to themselves is not a time-out. In an obstetrics setting, the minimum team for a spinal time-out would include the anesthesiologist and the labor and delivery nurse. Workflow concerns must be addressed through efficient process design, not by eliminating team verification.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes5",
      baseQuestion: "An endoscopy unit's credential files show RN sedation credentials that include training completion documentation but no competency validation (return demonstration or proctored sedation cases). The education coordinator says the training module is comprehensive. Does this satisfy the JC credentialing standard?",
      baseOptions: [
        "Yes - documented completion of a comprehensive training module satisfies JC moderate sedation credentialing requirements",
        "No - credentialing requires both training completion and competency validation demonstrating the provider can perform the skill correctly",
        "Yes - competency validation is required only for new-to-profession nurses, not for experienced RNs",
        "No - competency validation must be performed by an external certifying organization, not internally"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC credentialing requires both: (1) training that covers required knowledge, and (2) competency validation that confirms the provider can correctly perform moderate sedation in practice. Training completion alone is insufficient. Validation methods include return demonstration, simulation, or proctored real cases with sign-off from a qualified supervisor.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit implements a new competency validation process where nurses complete 3 proctored sedation cases with a physician sign-off. One nurse fails to achieve independent performance after 3 cases but is credentialed anyway because of unit staffing needs. What are the JC implications?",
          options: [
            "Credentialing a provider who failed to demonstrate competency creates direct patient risk and constitutes a false credential - JC would cite this as a serious compliance failure in the medical staff credentialing process",
            "The credential is valid because the physician signed off, and staffing need is a documented mitigating factor",
            "The nurse can be credentialed provisionally if an experienced nurse is available in the unit during each of their sedation cases",
            "The implication depends on whether the cases where the nurse struggled involved any adverse patient outcomes"
          ],
          correctIndex: 0,
          explanation: "Credentialing a provider who has not demonstrated competency - regardless of the reason - is a fundamental credentialing failure. JC requires that credentials reflect demonstrated competency, not staffing convenience. Granting a credential to someone who failed the validation process exposes patients to an unqualified provider and constitutes a falsification of the credential record. JC would cite this as a serious finding in the credentialing program.",
          expertXp: 30
        }
      ]
    }
    ,
    {
      id: "dd-anes6",
      baseQuestion: "A pre-anesthesia evaluation is documented 3 hours before a scheduled elective knee replacement. The patient discloses during the pre-op assessment with nursing that they started a new beta-blocker 4 days ago for hypertension. The anesthesiologist is not informed and the case proceeds. What compliance issue does this represent?",
      baseOptions: [
        "No compliance issue - a new beta-blocker is expected perioperative management and would not change the anesthetic plan",
        "The pre-anesthesia evaluation was not updated to reflect a material change in the patient's medication history discovered after the evaluation - the evaluating anesthesiologist must be notified of new information affecting anesthetic risk, and the evaluation must be updated or a new evaluation completed before proceeding",
        "The compliance issue is a nursing documentation problem - nursing should have updated the anesthesia record directly",
        "Beta-blockers are not a reportable medication change for anesthesia purposes unless the patient also has a known cardiac condition"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The pre-anesthesia evaluation must reflect the patient's condition immediately before the procedure. A new medication - particularly a beta-blocker, which has hemodynamic implications - discovered after the initial evaluation represents a material change requiring anesthesiologist notification and evaluation update. Proceeding without this update means the anesthesia plan was based on incomplete information.",
      baseXp: 15,
      followUps: [
        {
          question: "A new beta-blocker was started 4 days before surgery. The anesthesiologist, now informed, notes the patient's pre-op heart rate is 48. What must happen before proceeding?",
          options: [
            "The case may proceed since beta-blockers lower heart rate and this is an expected pharmacological effect",
            "A clinical assessment of the bradycardia is required - a heart rate of 48 in a surgical patient may represent excessive beta-blockade that increases perioperative risk, and the anesthesiologist must document the clinical decision to proceed or delay with the rationale",
            "The case should be cancelled automatically - any heart rate below 60 is a contraindication to general anesthesia",
            "The prescribing physician must be consulted and must authorize continuation of the beta-blocker before anesthesia may proceed"
          ],
          correctIndex: 1,
          explanation: "A resting heart rate of 48 bpm in the context of a newly initiated beta-blocker requires clinical evaluation before proceeding with elective surgery. The anesthesiologist must assess whether this represents hemodynamic compromise, determine whether dose adjustment is warranted, consult cardiology if indicated, and document the clinical reasoning. Proceeding without this evaluation means the perioperative team accepted a potentially modifiable risk without documentation of the decision.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes7",
      baseQuestion: "A patient scheduled for an elective colonoscopy reports eating a full meal 4 hours before the procedure. The endoscopist says 'It's just a scope - let's do it anyway.' The anesthesia provider refuses to proceed. Which party is correct?",
      baseOptions: [
        "The endoscopist - NPO guidelines for colonoscopy allow a shorter fasting interval since the procedure is lower risk than open surgery",
        "The anesthesia provider - standard ASA NPO guidelines require 6 hours for a light meal and 8 hours for a full meal before any procedure requiring sedation or anesthesia. Proceeding with inadequate fasting increases aspiration risk, and the anesthesia provider's refusal to proceed is clinically and ethically appropriate",
        "Neither - the decision should be referred to the facility's ethics committee given the disagreement",
        "The endoscopist - patient preference and procedure urgency override NPO guidelines for moderate sedation cases"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "ASA NPO guidelines apply to all procedures requiring sedation or anesthesia - not just general anesthesia or surgical cases. A full meal 4 hours prior does not meet the minimum 8-hour fasting requirement for solids. Aspiration during colonoscopy sedation, while less common than during general anesthesia, carries serious risk. The anesthesia provider has both the clinical authority and the professional responsibility to decline to administer sedation to a patient who does not meet fasting requirements for elective procedures.",
      baseXp: 20,
      followUps: [
        {
          question: "The endoscopist escalates to the medical director, arguing that the anesthesia provider's refusal is causing unnecessary delays and patient inconvenience. How should the medical director respond?",
          options: [
            "Override the anesthesia provider's decision - procedure efficiency is a quality metric and the colonoscopy is a low-risk procedure",
            "Support the anesthesia provider's clinical judgment - the refusal to administer sedation to a patient who ate 4 hours ago is consistent with established safety standards and is not a performance problem. The medical director should educate the endoscopist about NPO requirements and ensure the scheduling process captures fasting status before patients arrive",
            "Allow the procedure to proceed with a waiver signed by the patient - informed consent for increased aspiration risk satisfies the clinical obligation",
            "Refer the dispute to the credentials committee for review of whether the anesthesia provider's refusal pattern represents a disruptive behavior issue"
          ],
          correctIndex: 1,
          explanation: "A medical director who overrides a patient safety decision made by a qualified anesthesia provider creates serious patient harm risk and institutional liability. The anesthesia provider's refusal is not a behavioral or performance issue - it is correct clinical decision-making. The appropriate response is institutional support for the safety decision and system improvement to prevent patients from arriving for procedures without meeting fasting requirements.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes8",
      baseQuestion: "A patient develops masseter muscle rigidity and a fever of 39.2°C within 10 minutes of succinylcholine administration for intubation. The heart rate is 130 and end-tidal CO₂ is rising. The anesthesiologist suspects malignant hyperthermia. What is the most critical immediate action?",
      baseOptions: [
        "Administer dantrolene sodium 2.5 mg/kg IV immediately while discontinuing all triggering agents and calling for MH-specific emergency support",
        "Cool the patient with ice packs and antipyretics while completing the intubation before addressing the suspected MH reaction",
        "Consult neurology immediately - masseter rigidity may indicate an alternative diagnosis requiring workup before dantrolene administration",
        "Discontinue succinylcholine and observe for 5 minutes before committing to a malignant hyperthermia treatment protocol"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Malignant hyperthermia is a life-threatening pharmacogenetic emergency. Immediate administration of dantrolene sodium at 2.5 mg/kg IV (with repeat doses as needed) while simultaneously discontinuing all volatile anesthetic agents is the priority action. Every minute of delay worsens the hypermetabolic crisis. Dantrolene must be available in any location where triggering agents are used, and staff must know the MH protocol without needing to look it up.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the quality team learns the facility's MH cart was stocked with dantrolene that expired 8 months prior, and one of the three staff in the room during the event had never received MH training. What must the facility's MH preparedness program address?",
          options: [
            "Medication expiration is the primary finding - dantrolene replacement policy must be updated. Staff training is a secondary concern",
            "Three interdependent failures: (1) medication inventory management - dantrolene must be checked regularly and replaced before expiration; (2) all staff in any location where triggering agents are used must receive MH emergency training; (3) MH drills must be conducted regularly to verify that the response plan can be executed correctly under time pressure. All three require immediate corrective action",
            "The event itself is the corrective action - staff who experienced a real MH case now have firsthand training",
            "Only the anesthesia department is responsible for MH preparedness - the surgical team and nursing staff are not required to receive MH-specific training"
          ],
          correctIndex: 1,
          explanation: "MH preparedness requires three concurrent elements: reliable medication availability (non-expired dantrolene in adequate quantity), universal staff training for all who work in triggering-agent environments, and regular drills to build procedural fluency. An expired dantrolene supply during an actual MH event is a near-miss for patient death. The absence of any one of these three elements represents a serious preparedness failure.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes9",
      baseQuestion: "PACU discharge criteria at a freestanding surgery center require a minimum Aldrete score of 9 before a patient can be discharged to a Step-Down area. A nurse discharges a patient with an Aldrete score of 7, stating 'the surgeon said she's fine.' What is the compliance finding?",
      baseOptions: [
        "No finding - physician order supersedes structured discharge scoring tools",
        "Discharging a patient who does not meet the facility's defined PACU discharge criteria is a compliance finding regardless of verbal physician instruction - discharge criteria exist to standardize safety thresholds and are not subject to physician override absent a documented exception process",
        "The finding is limited to documentation - the nurse should have documented the surgeon's verbal order as the basis for early discharge",
        "The Aldrete score is a guideline, not a requirement - clinical judgment may appropriately supersede scoring thresholds"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Facility-defined discharge criteria are safety standards, not suggestions. When a facility sets an Aldrete score of 9 as the minimum for PACU discharge, a nurse who discharges at 7 based on a verbal physician comment has bypassed the safety system. If the facility wants to allow exceptions, it must have a documented exception process with physician sign-off and leadership awareness - not informal verbal overrides.",
      baseXp: 15,
      followUps: [
        {
          question: "The surgery center director proposes revising the policy to 'Aldrete score of 9 or physician certification of readiness.' How should the anesthesia and quality teams respond to this proposed revision?",
          options: [
            "Approve the revision - physician certification is a clinically sound alternative to a standardized score",
            "Evaluate the revision carefully - if the goal is to reduce unnecessary PACU time for stable patients, there may be specific clinical exceptions worth defining (e.g., a patient with a stable chronic score of 7 due to baseline paraplegia). However, a blanket 'or physician certification' alternative eliminates the standardized threshold entirely and recreates the exact gap the policy was designed to prevent. Any exception must be defined and bounded, not open-ended",
            "Reject the revision - discharge criteria should never be subject to physician override in ambulatory surgery settings",
            "Approve the revision - physician judgment is the ultimate clinical authority and discharge criteria tools are administrative supplements, not clinical requirements"
          ],
          correctIndex: 1,
          explanation: "Open-ended physician certification alternatives to structured scoring tools recreate the same informal override problem in a policy-sanctioned form. If exceptions are clinically warranted - for example, patients with stable neurological deficits whose baseline Aldrete is permanently below 9 - those exceptions should be defined with specificity. A blanket alternative makes the scoring threshold meaningless because any physician can certify readiness without documented criteria for what 'readiness' means.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes10",
      baseQuestion: "A post-anesthesia care audit reveals that 22% of patients who received general anesthesia had no documented temperature measurement in the PACU. The PACU manager says 'we check temperature if we think the patient looks cold.' What is the compliance concern?",
      baseOptions: [
        "No concern - clinical judgment-based temperature assessment is an appropriate standard for PACU monitoring",
        "Temperature monitoring is a required post-anesthesia assessment element - general anesthesia impairs thermoregulation and hypothermia increases bleeding, cardiac, and wound healing risk. Selective monitoring based on visual appearance is insufficient and does not constitute clinical assessment",
        "The concern applies only to patients who received volatile anesthetic agents - TIVA patients do not require routine temperature monitoring",
        "Temperature monitoring in the PACU is required only if the patient's intraoperative temperature was below 36°C"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Post-anesthesia temperature monitoring is not optional - general anesthesia impairs thermoregulation, and intraoperative hypothermia is common even with active warming. The PACU is the first opportunity to identify and correct hypothermia before its consequences develop. 'Looking cold' is not a clinical assessment - many hypothermic patients do not appear cold. Temperature must be documented for all post-general-anesthesia patients.",
      baseXp: 15,
      followUps: [
        {
          question: "A PACU nurse argues that temperature measurement requires equipment that is 'usually busy with other patients' and proposes documenting 'temperature not measured - patient warm to touch' as the assessment. Does this documentation satisfy the post-anesthesia monitoring requirement?",
          options: [
            "Yes - 'warm to touch' is a clinical assessment finding that documents the temperature evaluation",
            "No - 'warm to touch' is a subjective tactile finding, not a temperature measurement. The standard requires an objective temperature value. If equipment availability is the barrier, that is a resource planning problem requiring additional thermometers - not a justification for substituting subjective assessment for an objective measurement",
            "Yes - when objective measurement is not available, subjective clinical assessment is an accepted documentation alternative",
            "Partially - 'warm to touch' satisfies the requirement for patients who have no intraoperative temperature concerns; objective measurement is only required for patients who were hypothermic intraoperatively"
          ],
          correctIndex: 1,
          explanation: "Post-anesthesia monitoring standards require objective measurements, not subjective impressions. A nurse's perception that a patient feels warm to touch has limited clinical accuracy and no documented numeric value for trending or handoff communication. If equipment availability is the real constraint, the facility must address equipment access - that is an administrative and resource problem, not a clinical assessment problem. Documenting a subjective finding as a substitute for an objective standard creates false documentation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes11",
      baseQuestion: "A survey tracer in the cardiac catheterization lab finds that the facility uses moderate sedation with midazolam and fentanyl administered by the interventional cardiologist who is also performing the procedure. JC is asked about the compliance status of this practice. What is the relevant standard?",
      baseOptions: [
        "Fully compliant - cardiologists may administer their own sedation in procedural settings without restriction",
        "Potentially non-compliant - JC requires that the individual administering sedation be able to monitor the patient continuously throughout the procedure. A cardiologist simultaneously performing a technical procedure cannot adequately monitor sedation depth, respiratory status, and hemodynamics - this dual role requires facility policy to address and typically requires a dedicated sedation monitor",
        "Compliant as long as the cardiologist has documented moderate sedation privileges",
        "Compliant in cardiac catheterization labs specifically - JC excludes procedural cardiology from the physician-as-sedation-monitor restriction"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires continuous patient monitoring during sedation by a qualified individual who is not distracted by performing the procedure. A cardiologist focused on catheter positioning and coronary anatomy cannot simultaneously maintain vigilant sedation monitoring. Facilities must address this by having a dedicated person responsible for monitoring patient status during the procedure - typically a nurse or additional provider specifically assigned to sedation monitoring, with the credentials and training to assess and respond to sedation emergencies.",
      baseXp: 20,
      followUps: [
        {
          question: "The cardiology department proposes assigning a circulating nurse to 'watch the patient' during catheterizations while the cardiologist manages sedation. The nurse's role description does not include sedation monitoring responsibilities and the nurse has no moderate sedation competency verification. Does this arrangement satisfy the requirement?",
          options: [
            "Yes - having any additional person in the room satisfies the dedicated monitoring requirement",
            "No - the person assigned to monitor sedation must have: (1) defined sedation monitoring as an explicit role responsibility during the procedure; (2) documented competency in assessing sedation depth, airway management, and recognizing sedation complications; and (3) authority and ability to intervene or alert the team without being simultaneously responsible for other tasks",
            "Partially - adding a competency requirement for the nurse would satisfy the remaining gap",
            "Yes - nursing presence in the room creates implicit monitoring responsibility regardless of explicit role designation"
          ],
          correctIndex: 1,
          explanation: "A monitoring person in name only does not satisfy the standard. The dedicated sedation monitor must have: a defined role that includes sedation monitoring as a primary responsibility during the procedure, competency verification in sedation assessment and emergency response, and practical ability to act on monitoring findings without competing duties. A circulating nurse without moderate sedation competency who has other procedural responsibilities does not meet this standard.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes12",
      baseQuestion: "An anesthesiologist performs a pre-anesthesia evaluation 5 days before a scheduled elective hip replacement. The day-of-surgery assessment is delegated to a CRNA who documents 'see anesthesiologist's pre-op note - no change.' The patient reports having developed a productive cough and fever of 38.5°C in the past 2 days. The surgery proceeds. What is the finding?",
      baseOptions: [
        "No finding - the CRNA's documentation of 'no change' satisfies the day-of-surgery assessment requirement",
        "The day-of-surgery assessment did not capture or address a material change in the patient's clinical condition - a new fever and productive cough represent potential active infection that may affect anesthetic risk and raise the question of whether elective surgery should be deferred. The assessment was not actually performed; it referenced a 5-day-old note",
        "The finding is limited to the CRNA - the anesthesiologist who performed the initial evaluation bears no responsibility for the day-of-surgery assessment",
        "No finding - pre-anesthesia evaluations are valid for 7 days under JC standards"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A day-of-surgery assessment must reflect the patient's current condition - not cross-reference an evaluation from days earlier. 'No change' documented without actually assessing the patient is a false entry. The patient's new fever and productive cough represent a material clinical development that could indicate active infection - a contraindication to elective surgery. This assessment failure allowed a potentially avoidable surgical risk to proceed unchecked.",
      baseXp: 20,
      followUps: [
        {
          question: "The surgery was completed and the patient developed a post-operative pneumonia requiring ICU admission. The root cause analysis traces the infection to a pre-existing pneumonia that was present at the time of surgery. What systemic recommendations should the RCA produce?",
          options: [
            "Disciplinary action for the CRNA - individual accountability is the primary recommendation when a clinical assessment was falsified",
            "The RCA must address: (1) what the day-of-surgery assessment process requires and how compliance is verified; (2) what authority a CRNA has to defer or cancel a case when a new clinical finding suggests contraindication, and whether that pathway is supported by policy; (3) whether surgeons receive the day-of-surgery assessment findings and are part of the go/no-go decision; and (4) how the facility will detect and respond to patients who disclose new symptoms on the day of surgery",
            "No systemic changes - this was a single provider error and systemic recommendations require a pattern of similar events",
            "The recommendation is to require all day-of-surgery assessments to be performed by anesthesiologists rather than CRNAs"
          ],
          correctIndex: 1,
          explanation: "A single serious harm event can reveal systemic vulnerabilities that, if addressed, prevent future events. The RCA should examine the entire system: the assessment process, the authority and pathway for deferral, the multidisciplinary go/no-go communication, and the mechanism for capturing late-breaking clinical changes. Individual accountability is appropriate, but if the system creates conditions where a CRNA feels unable to defer a surgeon's case over a new clinical finding, the individual action occurred within a broken system.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes13",
      baseQuestion: "A hospital's anesthesia department has never conducted a formal anesthesia machine checkout procedure audit. A surveyor asks to see documentation showing that pre-use machine checks are being performed. The department chief produces a laminated checklist posted on each machine but no completion records. What is the compliance finding?",
      baseOptions: [
        "No finding - a posted checklist constitutes a documented protocol and demonstrates that the procedure is expected to be performed",
        "A compliance finding - JC requires documented evidence that pre-use anesthesia machine checks are being performed, not just that a protocol exists. Without completion records, there is no verification that the safety check is actually occurring before each use",
        "Partial finding - the checklist satisfies the protocol requirement; the completion record requirement only applies to facilities that have experienced anesthesia machine-related adverse events",
        "The finding is limited to the department chief - the anesthesiologist performing each case is responsible for documenting the machine check without department-level tracking"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A posted protocol demonstrates intent - it does not demonstrate performance. JC requires evidence that required safety processes are actually being carried out. Pre-use anesthesia machine checkout must be documented at the case level. Without completion records, the facility cannot demonstrate that this critical safety step is reliably performed. In the event of an equipment failure, undocumented checks also mean there is no evidence to support or refute whether a problem was pre-existing or caused by the checkout process.",
      baseXp: 15,
      followUps: [
        {
          question: "The department implements a paper checkout log - a sheet attached to each machine where the performing anesthesiologist initials the checkout before each case. Three months later, a quality review of 240 cases shows that 94% have anesthesiologist initials, but 6% have the same circulating nurse's initials. The nurse was not trained to perform an anesthesia machine checkout. What does this finding reveal?",
          options: [
            "Acceptable variance - the nurse observed the anesthesiologist perform the checkout and documented it on their behalf",
            "The documentation process has been gamed - initials from a person not authorized to perform the checkout indicate that the log is being completed to satisfy a documentation requirement rather than to reflect actual performance. This requires investigation of whether the 6% represent cases where no checkout was performed, and whether the practice of having unauthorized staff sign the log reflects broader normalization of documentation-without-performance",
            "Minor finding - the nurse simply documented the anesthesiologist's work because the anesthesiologist forgot to initial; this is a training issue, not a patient safety concern",
            "No additional finding - the 94% compliance rate is excellent and the 6% represents statistical noise within an otherwise strong program"
          ],
          correctIndex: 1,
          explanation: "When people sign documentation for processes they did not perform - and are not qualified to perform - it reveals that the documentation is disconnected from the actual safety behavior. Six percent of cases with unauthorized signatures is not a documentation error; it is a signal that in at least some cases, the checkout may not have occurred at all. This requires investigation of those specific cases and a response that addresses both the documentation integrity problem and the potential for actual missed safety checks.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes14",
      baseQuestion: "A patient undergoing general anesthesia for a 4-hour spine surgery has no temperature monitoring device applied. The anesthesiologist notes intraoperatively that the patient's end-tidal CO₂ is stable and assumes temperature is adequate. The patient arrives in PACU at 34.8°C. What perioperative standard was not met?",
      baseOptions: [
        "No standard was missed - end-tidal CO₂ monitoring is an adequate substitute for temperature monitoring during spine procedures",
        "Continuous temperature monitoring is required during general anesthesia for procedures exceeding a defined duration - the absence of any temperature monitoring device meant the team had no data to guide active warming interventions during the case, resulting in clinically significant hypothermia on arrival to PACU",
        "The standard was met - temperature monitoring is only required for procedures where hypothermia is the primary clinical concern, such as cardiac surgery with cardioplegia",
        "The PACU temperature finding triggers a requirement - intraoperative temperature monitoring is only standard of care if hypothermia is anticipated based on patient risk factors"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "All patients undergoing general anesthesia for any extended procedure are at risk for hypothermia due to anesthetic-induced thermoregulatory impairment, cold operating room environments, and exposed body cavities. Temperature monitoring allows real-time guided warming interventions. The absence of monitoring meant the team could not act on temperature data they never had. A 34.8°C PACU arrival temperature indicates a preventable adverse outcome.",
      baseXp: 15,
      followUps: [
        {
          question: "The anesthesia department implements a policy requiring temperature monitoring for all cases over 2 hours. The compliance officer asks how the department will audit compliance with this new requirement. What monitoring approach would be most effective?",
          options: [
            "Self-reporting - anesthesiologists document temperature readings in the anesthesia record, which can be audited retrospectively",
            "Anesthesia record audits that specifically track: (1) whether a temperature device was applied (device type documented), (2) whether intraoperative temperature values are present in the record for cases over 2 hours, and (3) whether active warming measures were applied and adjusted based on temperature readings. The audit should be conducted prospectively by the quality team, not retrospectively by the department itself",
            "Incident reporting - staff should report cases where temperature monitoring was omitted, and the department will track the rate of incident reports",
            "Spot audits by the anesthesia department chief during high-volume periods - periodic direct observation is sufficient for a new policy"
          ],
          correctIndex: 1,
          explanation: "A new policy requires a structured measurement plan to verify implementation and sustain compliance. Anesthesia record audits that look for specific documented data points (device applied, temperature values recorded, warming interventions documented) are far more reliable than self-reporting or incident reports, which only capture omissions that staff choose to self-report. The audit should be conducted by an independent quality function, not the department being monitored, to prevent reporting bias.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes15",
      baseQuestion: "During a tracer, a surveyor asks the anesthesia team about their protocol for a failed airway - specifically, what they do if they cannot intubate and cannot oxygenate a patient. The attending anesthesiologist describes a series of escalating steps but is unable to identify where the surgical airway kit is kept. A CRNA in the room also cannot locate it. What does this reveal?",
      baseOptions: [
        "A knowledge gap for two individuals - the emergency airway kit location should be part of orientation but is not a systemic finding if it is properly stocked elsewhere in the OR",
        "A critical emergency preparedness failure - in a 'cannot intubate, cannot oxygenate' emergency, every second counts. If the airway team cannot immediately locate the surgical airway kit, the kit is functionally unavailable. Emergency equipment must be immediately accessible AND the location must be known to all team members who may need to use it",
        "A training deficiency for the CRNA only - attending anesthesiologists are not expected to know the location of equipment stored by surgical technologists",
        "No finding - the anesthesia team described the correct escalation steps and the kit location is a secondary operational detail"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A 'cannot intubate, cannot oxygenate' scenario is the most time-critical airway emergency in anesthesia. The surgical airway kit must be immediately accessible - within seconds - and its location must be known to all team members. If both the anesthesiologist and CRNA cannot locate it, the kit provides no protection in a real emergency. Equipment location knowledge is not optional for life-safety emergency equipment.",
      baseXp: 20,
      followUps: [
        {
          question: "The OR manager responds that the surgical airway kit 'is always on the difficult airway cart which is kept in the airway supply room adjacent to the main OR corridor.' Is this location compliant?",
          options: [
            "Yes - adjacent to the OR is within the required proximity for emergency airway equipment",
            "This depends on whether 'adjacent' means immediately accessible during an active airway emergency. If a provider must leave the patient's side, exit the OR, and enter a separate room to retrieve the kit, that distance may be unacceptable for a true 'cannot oxygenate' emergency where a cricothyrotomy may need to be completed within 90 seconds. The difficult airway cart should be positioned inside the OR or immediately outside the specific room where a case is occurring, not in a general corridor supply room",
            "Compliant - a separate supply room satisfies proximity requirements if it is within 100 feet of the OR",
            "The location is compliant because the airway room is a designated emergency supply area covered by the department's emergency response protocol"
          ],
          correctIndex: 1,
          explanation: "Emergency airway equipment must be immediately and practically accessible during the emergency itself - not retrievable after leaving the patient. In a cannot-oxygenate scenario, the patient may be experiencing oxygen desaturation and brain damage within 3-4 minutes. Equipment stored in a general supply room that requires a staff member to leave the OR to retrieve it does not meet the immediately available standard. The difficult airway cart must be positioned at or adjacent to the active procedure room.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes16",
      baseQuestion: "A facility that performs procedures under monitored anesthesia care (MAC) does not require patients receiving only local anesthetic with minimal sedation to have an anesthesiologist present. A surveyor finds a case where a patient received 3 mg midazolam and 150 mcg fentanyl from the proceduralist with no dedicated sedation monitor. What is the finding?",
      baseOptions: [
        "No finding - when a proceduralist administers their own minimal sedation, anesthesia department involvement is not required",
        "A finding - 3 mg midazolam combined with 150 mcg fentanyl in combination represents moderate sedation, not minimal sedation. The drug combination and doses exceed the 'anxiolysis only' threshold for minimal sedation and require a qualified dedicated sedation monitor separate from the performing provider",
        "A finding limited to documentation - the proceduralist should have documented the sedation level as 'moderate' rather than 'minimal'",
        "No finding - MAC is defined by the presence of an anesthesia provider and this case did not use MAC at all, placing it outside JC sedation standards"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Midazolam and fentanyl in combination are capable of producing deep sedation at moderate doses. The combined administration of 3 mg midazolam and 150 mcg fentanyl to an average adult frequently produces moderate or deeper sedation. The sedation level is defined by the patient's level of consciousness, not by the provider's intentions or the drug's labeled category. Misclassifying this as minimal sedation removes the required monitoring safeguards.",
      baseXp: 20,
      followUps: [
        {
          question: "The facility's policy states that 'minimal sedation cases do not require a dedicated sedation monitor.' The proceduralist argues that they were performing minimal sedation because they intended to produce only anxiolysis. How should the policy be revised?",
          options: [
            "Add a physician attestation that the intended sedation level is minimal - this satisfies the policy definition requirement",
            "Revise the policy to define sedation level by the patient's clinical state, not provider intention, and include maximum dose thresholds for drugs commonly used in sedation that, if exceeded, require automatic classification as moderate sedation with corresponding monitoring requirements",
            "Remove the minimal sedation exception entirely - all sedation cases require a dedicated monitor regardless of intended depth",
            "The policy is adequate - the finding is an individual provider education issue, not a policy gap"
          ],
          correctIndex: 1,
          explanation: "Sedation level policies that rely on provider intention rather than patient clinical state create systematic misclassification. The revision should define what constitutes minimal sedation by clinical criteria (patient responds normally to verbal stimulation, maintains all protective reflexes, no drug combination likely to produce deeper sedation) and include drug dose thresholds that trigger automatic moderate sedation classification. Evidence-based dose thresholds give providers objective criteria rather than subjective intent assessment.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-anes17",
      baseQuestion: "An obstetric patient at 32 weeks gestation requires urgent appendectomy under general anesthesia. The anesthesiologist plans a standard rapid sequence induction. The obstetrician requests that fetal heart tones be monitored continuously throughout the procedure. The anesthesiologist says 'the OR is too chaotic for fetal monitoring.' What does the anesthesiologist's response represent?",
      baseOptions: [
        "Reasonable clinical judgment - intraoperative fetal monitoring is not a standard of care requirement for non-obstetric surgery in pregnant patients",
        "A missed opportunity for collaborative care planning - while continuous electronic fetal monitoring during non-obstetric surgery is not universally mandated, it is standard of care for a viable fetus (typically ≥23-24 weeks) when the equipment and qualified personnel are available. A 32-week fetus is viable and the obstetrician's request reflects appropriate advocacy for the fetus. The dismissal without collaborative discussion represents a failure of interprofessional communication",
        "An appropriate response - anesthesiologists have sole authority over the conduct of general anesthesia and fetal monitoring is an obstetric concern outside their scope",
        "Partially correct - fetal monitoring during appendectomy is required only when the procedure involves direct uterine manipulation"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Fetal monitoring for non-obstetric surgery in a viable pregnancy should be planned collaboratively between the anesthesiologist, surgeon, and obstetrician. ACOG guidance supports electronic fetal monitoring when the fetus is of viable gestational age, the monitoring can be reliably interpreted, and intervention for fetal distress is possible. The anesthesiologist's dismissal without interprofessional discussion represents a communication failure. Even if continuous monitoring is deemed impractical, fetal assessment before and after the procedure is expected.",
      baseXp: 20,
      followUps: [
        {
          question: "The case proceeds without fetal monitoring, the infant is born via emergency cesarean 36 hours later with evidence of hypoxic-ischemic encephalopathy, and causation is disputed. What does the absence of intraoperative fetal monitoring data mean for the root cause analysis?",
          options: [
            "The absence of data is neutral - causation cannot be assigned without direct evidence of fetal distress during surgery",
            "The absence of monitoring data means a critical window of fetal physiological status is unknowable - the RCA cannot determine whether fetal compromise began during the surgical procedure. This documentation gap strengthens the case for interprofessional monitoring planning, since the absence of data prevents both accountability and learning. Whether or not monitoring would have changed the outcome, the lack of data eliminates the possibility of answering the causation question",
            "The absence of data is exculpatory for the anesthesia team - you cannot be held accountable for monitoring you declined to perform",
            "The absence of data means the standard of care defense is strengthened because monitoring was not required"
          ],
          correctIndex: 1,
          explanation: "In a complex adverse outcome, the absence of monitoring data does not exculpate the team - it creates an unresolvable evidentiary gap. The RCA cannot determine whether the fetal compromise started during surgery (potentially preventable with intervention) or after. This ambiguity is itself a consequence of the monitoring decision. The lesson is that when fetal monitoring is feasible and the clinical situation is high-risk, the value of the data to subsequent care decisions and quality review justifies the effort.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes18",
      baseQuestion: "A post-PACU review finds that three patients who received neuraxial anesthesia (spinal or epidural) were discharged from PACU before documenting return of motor function below the level of the block. One was discharged to Phase II, and two were sent directly home. What is the compliance and safety concern?",
      baseOptions: [
        "No concern - the anesthesia provider verified the block was adequate at the time of administration; PACU staff do not need to re-assess neurological recovery",
        "Patients with neuraxial blockade must have return of motor and sensory function documented before PACU discharge - premature discharge before block regression is resolved carries risk of unrecognized complications (neurological injury, cauda equina) and falls. Discharge before resolution of the block requires explicit documentation of the clinical decision and disposition plan",
        "Concern only for the two patients discharged directly home - Phase II discharge before full block resolution is acceptable",
        "The concern is documentation only - the anesthesia record documents the block level, which serves as the post-operative assessment"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Neuraxial anesthesia recovery must be documented before PACU discharge. Return of motor function must be verified because: (1) premature mobility before block resolution causes falls, (2) persistent or asymmetric neurological findings may indicate a spinal hematoma or other complication requiring emergency intervention, and (3) patients discharged before the block resolves cannot reliably detect new neurological symptoms. This assessment is a required component of the post-anesthesia evaluation.",
      baseXp: 15,
      followUps: [
        {
          question: "One of the two patients discharged home develops cauda equina syndrome symptoms 6 hours after discharge and presents to the ED. The neuraxial anesthesia was performed without documented motor assessment in the PACU. How does this affect the clinical evaluation and root cause analysis?",
          options: [
            "The PACU documentation gap does not affect the clinical evaluation - the ED team can assess current neurological status regardless of what was documented earlier",
            "Clinically - without a documented baseline neurological assessment at PACU discharge, the ED team cannot determine whether current symptoms represent new neurological injury (requiring emergency intervention) or residual block (resolving safely). This ambiguity affects the urgency and nature of the clinical workup. For the RCA - the absence of a PACU neurological assessment eliminated the ability to detect a developing complication during the highest-risk early period post-procedure",
            "The ED clinical team can rely on the anesthesiologist's intraoperative block documentation as the baseline for comparison",
            "Cauda equina syndrome after spinal anesthesia is rare enough that the documentation gap is not a meaningful contributor to the root cause"
          ],
          correctIndex: 1,
          explanation: "A missing post-neuraxial baseline assessment creates both a clinical and a patient safety learning failure. Clinically, the absence of documented baseline function makes it impossible to determine timing of neurological decline. A documented assessment at PACU discharge would allow the ED to know whether the deficit is new (spinal hematoma - surgical emergency) or progressive from residual block. The ambiguity delays critical decision-making in a time-sensitive condition.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes19",
      baseQuestion: "A CRNA administers 100 mg of bupivacaine for a peripheral nerve block. Within 3 minutes, the patient reports perioral tingling, becomes confused, and begins having tonic-clonic seizures. The CRNA calls for help and begins ventilatory support. What is the specific treatment for this complication?",
      baseOptions: [
        "Benzodiazepine for seizure management and vasopressors for hemodynamic support - standard cardiac resuscitation protocol",
        "Lipid emulsion therapy (Intralipid 20%) - this is the specific antidote for local anesthetic systemic toxicity (LAST). It should be administered immediately alongside seizure management, airway support, and ACLS if cardiac arrest occurs",
        "Immediate cardioversion - bupivacaine toxicity causes ventricular fibrillation that requires electrical treatment before drug therapy",
        "Sodium bicarbonate to alkalinize the plasma - bupivacaine toxicity is treated by raising blood pH to reduce drug-receptor binding"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Local anesthetic systemic toxicity (LAST) is a recognized complication of regional anesthesia. Lipid emulsion (Intralipid 20%) is the specific treatment - it acts as a lipid sink, sequestering bupivacaine from cardiac and CNS tissue. The ASRA LAST checklist recommends immediate lipid emulsion administration at the first sign of LAST, concurrent with airway management, seizure suppression, and ACLS if indicated. Epinephrine in LAST is used cautiously in small doses; standard ACLS epinephrine doses may worsen cardiac toxicity.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the quality team learns that lipid emulsion was not immediately available in the procedure room where the block was performed. The CRNA had to send a staff member to the pharmacy while managing the emergency. What must the facility's regional anesthesia program ensure?",
          options: [
            "Lipid emulsion availability in the main pharmacy is sufficient - it can be retrieved within the timeframe needed for LAST treatment",
            "Lipid emulsion must be immediately available wherever regional anesthesia is performed - this means stocked in the procedure room or on a dedicated regional anesthesia emergency cart accessible within seconds. A trip to the pharmacy during a LAST emergency introduces dangerous delay when time-critical drug administration may affect survival",
            "Lipid emulsion availability in the PACU is sufficient since most LAST events manifest in the recovery period",
            "Maintaining lipid emulsion in the procedure room requires special refrigeration and regulatory storage controls that make room-level storage impractical"
          ],
          correctIndex: 1,
          explanation: "LAST can progress from early CNS symptoms to cardiovascular collapse within minutes. Lipid emulsion must be available at the point of care - in the room where the block is performed. Requiring staff to leave the patient to retrieve emergency medication is an unacceptable design. Regional anesthesia programs must stock lipid emulsion at each block location, track expiration dates, and verify availability as part of pre-procedure safety checks.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-anes20",
      baseQuestion: "A quality audit shows that 18% of intraoperative anesthesia records for general anesthesia cases are missing at least one required monitoring parameter value for intervals exceeding 10 minutes. The most common gaps are in blood pressure and end-tidal CO₂. The anesthesia department chief says 'providers are busy during critical portions of cases.' How should this finding be addressed?",
      baseOptions: [
        "Accept the finding as operationally unavoidable - intraoperative documentation is necessarily incomplete during complex clinical events",
        "The finding requires both a process improvement response and a clinical assessment - prolonged gaps in documented monitoring values may indicate actual monitoring lapses (not just documentation gaps), which is a patient safety issue. The improvement plan must address: whether the gaps correlate with clinical events or simply reflect documentation behavior, whether automated monitoring systems can capture values without manual documentation burden, and what the minimum acceptable documentation interval is for each required parameter",
        "Address the finding through individual counseling - 18% is a provider behavior problem, not a systemic issue",
        "Revise the documentation standard to allow 15-minute intervals - the current 10-minute requirement is too frequent for busy cases"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Documentation gaps in intraoperative monitoring records are clinically concerning for two reasons: (1) the gap may reflect an actual lapse in patient monitoring, not just a charting delay; (2) even if monitoring occurred, undocumented values cannot contribute to clinical decision-making or post-event review. The appropriate response examines both possibilities and explores technology solutions (automated data capture from monitoring equipment) that reduce documentation burden while maintaining a complete record.",
      baseXp: 15,
      followUps: [
        {
          question: "The anesthesia informatics team proposes integrating the anesthesia monitoring devices with the EHR to auto-capture vital sign values every 5 minutes. The department chief expresses concern that 'the EHR will capture values during artifact periods and create inaccurate records.' How should this concern be addressed?",
          options: [
            "Abandon the auto-capture project - provider documentation is more accurate than automated capture because providers can assess artifact",
            "The concern is legitimate and should be addressed through implementation design - the system should flag auto-captured values as 'auto-captured, review for artifact' and allow providers to annotate or correct values during or after the case. This preserves the documentation benefit (complete time-stamped record) while providing a mechanism for artifact correction, rather than abandoning automated capture because of a manageable design challenge",
            "Accept artifact capture as acceptable - the clinical team can mentally discount obviously erroneous values when reviewing the record",
            "Limit auto-capture to non-invasive measurements only - invasive line values are too susceptible to artifact for automated documentation"
          ],
          correctIndex: 1,
          explanation: "The artifact concern is real but solvable through system design, not by abandoning automation. An implementation that flags auto-captured values, provides a quick correction interface, and maintains a complete timestamped record is far superior to a manual system with 18% documentation gaps. Anesthesia information management systems routinely handle this design challenge through value review workflows. The perfect should not be the enemy of a significant safety improvement.",
          expertXp: 25
        }
      ]
    }
  ]
};
