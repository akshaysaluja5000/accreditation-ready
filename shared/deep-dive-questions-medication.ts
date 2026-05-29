import type { DeepDiveLevel } from "./schema";

export const ddMedicationLevel: DeepDiveLevel = {
  id: "dd-medication",
  name: "Medication Management Deep Dive",
  description: "Expert-level scenarios on high-alert medications, LASA safeguards, medication reconciliation failures, override patterns, and JC compliance in complex clinical situations.",
  icon: "Microscope",
  color: "hsl(346, 78%, 48%)",
  baseLevelId: "medication_management",
  questions: [
    {
      id: "dd-mm1",
      baseQuestion: "A surveyor finds heparin infusion bags in two concentrations (25,000 units/250 mL and 25,000 units/500 mL) stored in the same pharmacy bin on a cardiac unit. Both are available for nursing to select. What is the immediate compliance concern?",
      baseOptions: [
        "No concern - the concentration is printed on each bag label and nurses verify before hanging",
        "Multiple concentrations of a high-alert anticoagulant in the same storage location create dangerous mix-up potential - differentiation strategies or concentration standardization are required",
        "Concern exists only when both concentrations are available in the same patient's room simultaneously",
        "The concern is limited to look-alike packaging - if the bags are visually distinct, storage together is acceptable"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Heparin is a high-alert anticoagulant. Storing two different concentrations together creates a selection error risk that can result in 2-fold dosing errors. JC requires differentiation: separate storage, clear concentration labeling, and ideally standardization to a single concentration. Relying on label reading alone is insufficient for high-alert medications.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy director proposes eliminating the 25,000/500 mL concentration entirely and standardizing to 25,000/250 mL for all heparin infusions. A cardiologist objects, stating that some patients require the lower concentration for fluid management reasons. How should this conflict be resolved within a JC-compliant framework?",
          options: [
            "The cardiologist's clinical judgment supersedes the safety-driven standardization - physicians can order any concentration they deem appropriate",
            "The medication safety committee should evaluate the clinical rationale for dual concentrations, define clear criteria for when each is appropriate, implement additional safeguards if dual concentrations are maintained, and document the decision with leadership approval",
            "The pharmacy director has final authority over formulary decisions - standardization should proceed regardless of physician objections",
            "The conflict should be submitted to JC for resolution before any formulary change is implemented"
          ],
          correctIndex: 1,
          explanation: "Clinical and safety considerations must both be addressed through a structured process. The medication safety committee (or equivalent governance body) is the appropriate forum - they can evaluate whether the clinical need is valid, define criteria for when each concentration is indicated, and determine what additional safeguards are required if both concentrations are maintained. This process satisfies JC's expectation that medication safety decisions involve interprofessional governance.",
          expertXp: 25
        },
        {
          question: "After standardizing to a single heparin concentration, a medication error occurs when a nurse selects the wrong weight for the weight-based dosing protocol, resulting in a 2-fold overdose. The patient develops a serious bleeding event. What does JC require the facility to do with this event?",
          options: [
            "Disciplinary action for the nurse who selected the wrong weight, followed by re-education on weight-based protocol",
            "Report the event as a sentinel event if it resulted in serious patient harm, conduct a root cause analysis, implement system-level corrective actions, and provide a quality improvement report to leadership",
            "Conduct an internal review only - reporting to JC is voluntary for medication errors",
            "File an incident report within 72 hours - no further action is required unless the patient dies"
          ],
          correctIndex: 1,
          explanation: "A serious patient harm event from a medication error meets the definition of a sentinel event under JC standards. Facilities are expected to report sentinel events and conduct a thorough root cause analysis examining contributing factors beyond the individual provider error - including protocol design, weight verification processes, pump programming safeguards, and override patterns. System-level corrective actions must be implemented and their effectiveness monitored.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm2",
      baseQuestion: "A surveyor observes a nurse drawing up three medications from different vials in the pre-op area and placing labeled syringes on a tray. The nurse then draws a fourth medication and places the unlabeled syringe on the tray saying 'I'll label it in a second.' The surveyor stops the nurse. What is the finding?",
      baseOptions: [
        "No finding - the nurse stated intention to label the syringe and only momentarily set it down",
        "Immediate finding - all medications must be labeled at the point of preparation; the unlabeled syringe must be discarded regardless of intended subsequent labeling",
        "Finding only if the unlabeled syringe contains a high-alert medication",
        "Minor finding - the nurse can label it within 5 minutes without discarding the syringe"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires labeling at the point of preparation - not 'soon after.' An unlabeled syringe is indistinguishable from other syringes on the tray and must be discarded. The risk of mix-up during the labeling delay, particularly in a busy pre-op environment with multiple syringes, is unacceptable.",
      baseXp: 15,
      followUps: [
        {
          question: "After the survey, the anesthesia department reports that the unlabeled syringe practice has been standard in their pre-op area for years because 'everyone knows what's in it.' The department chief pushes back on the finding, arguing clinical context eliminates the safety risk. How should hospital leadership respond?",
          options: [
            "Acknowledge the department's experience and allow a modified standard for pre-op areas where providers prepare their own medications and context is clear",
            "Reject the rationalization - 'everyone knows' is not a safety system; leaders must reinforce the labeling standard, address the cultural normalization of the unsafe practice, and implement monitoring to verify sustained compliance",
            "Escalate to JC for guidance on whether an exception applies to anesthesia pre-op preparation areas",
            "Accept the exception during normal operations and require full labeling only during scheduled inspections or surveys"
          ],
          correctIndex: 1,
          explanation: "Cultural normalization of unsafe practices ('we've always done it this way' or 'everyone knows') is a recognized patient safety failure mode. Leadership must reject the rationalization, communicate why the standard exists (multiple wrong-drug errors have occurred in exactly these 'everyone knows' situations), implement the standard fully, and monitor compliance. Accepting survey-only compliance reinforces exactly the wrong behavioral pattern.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm3",
      baseQuestion: "A pharmacist's override log review shows that 34% of all ADC overrides on the medical-surgical floor occurred for non-emergency medications during normal pharmacy hours, including routine antibiotics, antihypertensives, and sleeping medications. What does this pattern indicate?",
      baseOptions: [
        "Normal operational variance - some override rate is expected in any ADC system and 34% is within acceptable limits",
        "The override rate suggests systemic issues with pharmacy turnaround time, ADC stocking, or workflow design that are driving staff to bypass the pharmacist review safety check for non-urgent medications",
        "The overrides are appropriate since nurses have clinical judgment authority to determine which medications are urgent",
        "The pattern indicates the ADC software threshold settings need to be tightened - a system configuration change will resolve the issue"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A high override rate for non-emergency medications during pharmacy operational hours indicates that the pharmacy review process is not serving the clinical workflow - staff are overriding routinely because it is faster. This eliminates the pharmacist safety check for a significant portion of medications. JC expects override rates to be monitored and high rates to trigger root cause analysis and system improvement.",
      baseXp: 20,
      followUps: [
        {
          question: "The pharmacy director proposes reducing overrides by requiring a supervisor cosign for every override. Nursing leadership predicts this will slow medication administration and increase patient complaints. How should the facility balance the competing concerns?",
          options: [
            "Prioritize patient experience - override restrictions that increase wait times for medication administration should not be implemented",
            "The underlying problem is not override approval authority but pharmacy turnaround time and ADC par levels - the correct solution addresses the root cause (improving pharmacy responsiveness and stocking) rather than adding friction to the existing broken workflow",
            "Implement the supervisor cosign requirement and monitor for one quarter before evaluating the impact",
            "Allow nursing leadership to set their own override policy - pharmacy has no authority over nursing ADC use practices"
          ],
          correctIndex: 1,
          explanation: "Adding a supervisor cosign to a fundamentally broken workflow adds bureaucratic friction without fixing the underlying problem. If overrides are occurring because pharmacy is slow or ADCs are understocked, those are the root causes to address - faster pharmacy response, improved par level management, and better first-dose stocking. Addressing root causes improves both safety and efficiency, while cosign requirements alone only slow an already suboptimal process.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm4",
      baseQuestion: "A medication reconciliation audit reveals that 42% of patients discharged to home had at least one home medication not addressed on the discharge reconciliation - neither continued, modified, held, or intentionally discontinued with documentation. What is the patient safety risk and compliance finding?",
      baseOptions: [
        "Low risk - patients can self-manage their home medications based on pre-admission practices",
        "High risk - unaddressed home medications create significant potential for patients to omit critical medications (antihypertensives, anticoagulants, seizure medications) or continue medications that should be stopped - this represents a systemic reconciliation failure requiring improvement",
        "Moderate risk - the finding applies only if the unaddressed medications are high-alert drugs",
        "The finding exists but requires documentation only of controlled substances - other medication classes are lower priority"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Medication reconciliation at discharge is a patient safety requirement. A 42% rate of unaddressed home medications means nearly half of discharged patients received an incomplete discharge medication list. Patients may stop critical medications thinking they were intentionally discontinued, or they may unknowingly duplicate medications. This systemic failure requires a root cause analysis and process redesign.",
      baseXp: 15,
      followUps: [
        {
          question: "To address the reconciliation failure rate, the quality team proposes making medication reconciliation a required field in the electronic discharge documentation - the system will not allow discharge completion until all home medications are addressed. The nursing staff objects, saying this will delay discharges and is 'too rigid.' How should leadership respond?",
          options: [
            "Support the nursing objection - discharge workflow efficiency should take priority over mandatory reconciliation checkpoints",
            "Implement the hard stop with appropriate workflow support - a 42% failure rate indicates the current voluntary process is insufficient and a system-level control is warranted; address the workflow efficiency concern by ensuring the process is streamlined, not by removing the safety checkpoint",
            "Implement the hard stop only for patients on high-alert medications - for other patients, maintain the current voluntary approach",
            "Pilot the hard stop on one unit for 90 days before considering broader implementation"
          ],
          correctIndex: 1,
          explanation: "A 42% deficiency rate demonstrates that voluntary compliance with medication reconciliation is not working. A hard stop in the EHR is an appropriate system-level control - it changes the environment to make the right action the required action. Workflow efficiency concerns should be addressed by optimizing the reconciliation process itself (auto-population of home medication lists, pharmacy support), not by removing the safety gate.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm5",
      baseQuestion: "During a tracer activity, a surveyor asks a bedside nurse to explain what makes warfarin a 'high-alert medication' and describe one safeguard used on this unit. The nurse says 'I know it's high-alert because it's on the list, but I don't know any specific safeguard we have for it.' What does this response reveal?",
      baseOptions: [
        "Acceptable knowledge level - knowing the medication is high-alert is the primary staff expectation",
        "The response reveals inadequate staff education - staff must know both what makes a medication high-alert and the specific facility safeguards they are expected to implement during administration",
        "The surveyor's question is unreasonable - safeguard details are pharmacy and policy responsibilities, not bedside nursing knowledge",
        "No concern - the nurse can look up the safeguards in the policy manual during patient care situations"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Knowing a medication is 'on the list' without understanding why or what safeguards apply is insufficient. Staff must understand what makes high-alert medications dangerous (narrow therapeutic index, severe bleeding risk for warfarin) and know the specific safeguards they are expected to apply - such as INR monitoring before administration, weight-based dosing, hold parameters, and patient education. This knowledge gap is a staff education deficiency.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy director reports that the high-alert medication education was delivered via a 15-minute online learning module completed by 94% of nursing staff with 100% passing rate on the post-test. Yet staff knowledge at the bedside is consistently inadequate on tracer surveys. What does this disconnect indicate?",
          options: [
            "The online module is sufficient - bedside knowledge gaps are attributable to staff forgetting over time, which is expected and unavoidable",
            "A high completion and pass rate on a knowledge test does not guarantee transfer of knowledge to bedside practice - competency must be assessed in context, not just through testing, and the education modality may need to shift to include scenario-based application and direct observation",
            "The disconnect means the post-test questions are too easy - increasing test difficulty will improve bedside knowledge transfer",
            "The 94% completion rate means 6% of staff are the source of all bedside knowledge gaps"
          ],
          correctIndex: 1,
          explanation: "This is the classic education-to-practice gap. Online modules test recognition knowledge ('which of these is high-alert?') but do not necessarily build the applied competence to identify and implement safeguards in complex real situations. JC-aligned competency development includes situational application, not just test-passing. Adding scenario-based simulation, case reviews with clinical examples, and direct observation of practice improves actual bedside performance.",
          expertXp: 25
        }
      ]
    }
    ,
    {
      id: "dd-mm6",
      baseQuestion: "A patient on warfarin for atrial fibrillation is admitted for a hip fracture. The admission medication reconciliation correctly lists warfarin 5 mg daily. The hospitalist orders 'warfarin per home regimen.' Three days later, the INR is 5.8 and the patient has significant hematuria. What failure occurred?",
      baseOptions: [
        "The pharmacy failed to flag the elevated INR - the prescribing order was appropriate",
        "The order 'warfarin per home regimen' is an ambiguous order that does not specify dose, frequency, or INR monitoring parameters - during acute hospitalization, anticoagulant orders must include specific dosing instructions and laboratory monitoring intervals, not cross-reference an outpatient regimen",
        "The nursing staff failed to perform daily INR checks - order compliance is the primary failure",
        "The patient's warfarin sensitivity changed due to the hip fracture and reduced oral intake - this is an expected pharmacological event, not a prescribing failure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Warfarin is a high-alert anticoagulant with a narrow therapeutic index. 'Per home regimen' is an ambiguous order that does not account for the clinical changes of acute hospitalization - altered diet, new medications, reduced mobility, pain medications, and antibiotic use all affect warfarin response. Inpatient anticoagulation orders must specify dose, route, frequency, and monitoring parameters. Relying on outpatient dosing without adjustment is a recognized high-risk prescribing pattern.",
      baseXp: 20,
      followUps: [
        {
          question: "The pharmacy and therapeutics committee reviews the case and proposes implementing a weight-based anticoagulation dosing protocol for all warfarin inpatients, managed by a clinical pharmacist with dose-adjustment authority. The hospitalist medical staff objects, arguing 'I'm the treating physician - pharmacists should not have prescribing authority.' How should leadership resolve this?",
          options: [
            "Support the physician objection - prescribing authority is legally and professionally limited to licensed prescribers; pharmacist dose adjustment is outside scope of practice",
            "Implement the protocol with appropriate collaborative practice agreement - pharmacist-managed anticoagulation is a nationally recognized evidence-based model that improves safety and reduces adverse events. Dose adjustment under an approved collaborative practice agreement is within pharmacist scope of practice in most states and does not supersede physician authority - the physician approves the protocol parameters and the pharmacist applies them within defined boundaries",
            "Implement a compromise requiring pharmacist 'recommendations' that physicians must act on - this preserves physician authority while incorporating pharmacist expertise",
            "Refer the objection to the credentials committee for review of whether pharmacist prescribing authority is appropriate within this institution's medical staff bylaws"
          ],
          correctIndex: 1,
          explanation: "Pharmacist-managed anticoagulation with dose-adjustment authority under collaborative practice agreements is an evidence-based, widely implemented safety model with demonstrated improvements in time-in-therapeutic-range and reduced bleeding events. Physician objection based on scope of practice concerns misrepresents how collaborative practice agreements function - the physician establishes the treatment goals and protocol parameters; the pharmacist applies them with defined authority and escalation criteria. Leadership must distinguish evidence-based safety models from scope-of-practice disputes.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm7",
      baseQuestion: "A chemotherapy nurse prepares a vincristine dose and places it in a 50 mL bag for IV administration. A pharmacist catches the preparation error and alerts the nurse. What is the critical safety issue?",
      baseOptions: [
        "Vincristine was prepared in a bag rather than a syringe - while this is a preparation preference issue, it is not a critical safety error",
        "Vincristine must never be prepared in a bag for IV administration - ISMP and international guidelines require that vincristine be dispensed in a minibag or syringe with a specific administration set that prevents connection to a lumbar IT line. The specific danger is accidental intrathecal injection of vincristine, which is universally fatal. Preparation in a standard IV bag increases this connection error risk",
        "The error is that the dose was not verified against the BSA-based order before preparation",
        "Vincristine in a 50 mL bag is only an error if the patient has a lumbar puncture scheduled the same day"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Accidental intrathecal vincristine injection is one of the most catastrophic medication errors - it is uniformly fatal. ISMP guidelines require dispensing vincristine in a minibag (with a dedicated vinca alkaloid sticker warning) or syringe specifically to prevent connection to an intrathecal line. Facilities that perform lumbar punctures must have physical safeguards - separate administration sets, clear labeling, and timing protocols - to prevent this error from occurring even when vincristine is prepared correctly.",
      baseXp: 20,
      followUps: [
        {
          question: "A hospital oncology unit performs intrathecal chemotherapy (methotrexate, cytarabine) at the same time of day as vincristine infusions are running in the same patient bay. What system-level safeguards does ISMP recommend?",
          options: [
            "Dual-nurse verification of all chemotherapy preparations before administration is sufficient",
            "Temporal separation - intrathecal chemotherapy should be administered in a separate session from IV vinca alkaloid administration; dedicated intrathecal-specific administration sets that cannot connect to standard IV tubing; separate medication delivery to the unit for IT versus IV chemotherapy; and clear labeling on all vincristine preparations with 'FOR IV USE ONLY - FATAL IF GIVEN INTRATHECALLY'",
            "Electronic order verification at the pharmacy level is sufficient to prevent wrong-route errors",
            "The safeguard is adequate if nursing staff receive annual chemotherapy safety training that includes vinca alkaloid hazards"
          ],
          correctIndex: 1,
          explanation: "ISMP recommends a system of physical and temporal barriers for vincristine safety. Temporal separation removes the concurrent availability of both preparation types. Dedicated tubing connectors that are physically incompatible with intrathecal lines provide a technological barrier. Clear, standardized labeling provides a cognitive barrier. Training alone is the weakest safeguard because it relies on providers remembering and applying knowledge under pressure - and this error has killed patients despite training.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm8",
      baseQuestion: "A nurse prepares insulin infusions for two different patients - one is a type 1 diabetic requiring 0.1 units/kg/hr and one is a post-cardiac surgery patient on an insulin drip protocol at 2 units/hr. The nurse draws up both syringes at the same workstation and labels them with handwritten labels. A pharmacist conducting a medication safety round observes this. What are the safety concerns?",
      baseOptions: [
        "No concern - handwritten labels are acceptable for nursing-prepared medications at the bedside",
        "Multiple concerns: (1) insulin is a high-alert medication requiring additional preparation safeguards; (2) preparing two insulin syringes simultaneously at one workstation increases mix-up risk; (3) handwritten labels on insulin syringes lack required labeling elements (drug name, concentration, patient ID, preparation time) and increase error risk; (4) insulin infusions should be pharmacist-prepared with bar-coded labels to enable bedside scanning verification",
        "The concern is labeling only - the preparation process itself is appropriate for bedside nursing preparation",
        "High-alert medication preparation at the bedside is acceptable for experienced nurses who regularly administer insulin infusions"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Insulin is a ISMP-designated high-alert medication associated with frequent, serious errors. Concurrent preparation of two insulin infusions for two different patients at one workstation creates swap risk. Handwritten labels lack critical elements and cannot be scanned for barcode MAR verification. Best practice is pharmacy preparation with standardized concentrations, complete labels, and barcodes. If bedside preparation is unavoidable, each syringe must be prepared and labeled separately with no concurrent preparation for other patients.",
      baseXp: 20,
      followUps: [
        {
          question: "The nurse argues that the pharmacy insulin infusion turnaround time is 90 minutes and patients cannot wait that long. How should the medication safety committee address this conflict?",
          options: [
            "Allow bedside preparation since patient care urgency outweighs preparation safety concerns",
            "The turnaround time problem is the root cause that must be fixed - 90 minutes for an insulin infusion is operationally unacceptable, and the response is to improve pharmacy workflow, not to accept unsafe bedside preparation. Solutions include premixed insulin infusion bags stocked in unit satellites, pharmacist presence on high-utilization units, or validated rapid preparation processes with appropriate safeguards. The answer is to fix the system, not to normalize a workaround",
            "Allow bedside preparation with a mandatory double-check by another nurse - the two-nurse verification compensates for the preparation safety gaps",
            "Implement a policy that allows bedside preparation only for nurses with more than 2 years of insulin infusion experience"
          ],
          correctIndex: 1,
          explanation: "Long pharmacy turnaround times that drive clinical staff to bypass pharmacy preparation are a systems failure. The appropriate response is to fix the turnaround time - not to accept the unsafe workaround. Premixed standardized insulin products, unit satellite pharmacy stocking, and rapid preparation protocols are established solutions. Double-checking a fundamentally unsafe preparation process adds a layer of detection but does not eliminate the underlying preparation risk.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm9",
      baseQuestion: "A medication error occurs when a nurse administers methotrexate to an outpatient at the daily dose (15 mg/day) rather than the prescribed weekly dose (15 mg/week). The patient develops severe mucositis and bone marrow suppression. What system safeguard failures allowed this error?",
      baseOptions: [
        "Only individual nurse failure - methotrexate dosing frequency is a basic nursing knowledge requirement",
        "Multiple system failures: (1) methotrexate for non-oncologic indications is a LASA high-alert medication where daily versus weekly frequency confusion is the most common and serious error type; (2) the medication order may not have explicitly stated 'weekly' in a way that differentiated it from daily; (3) the dispensing system may not have flagged daily methotrexate as an alert; (4) the patient was not educated to question the daily administration schedule",
        "A pharmacy verification failure - the pharmacist who dispensed the medication should have caught the daily order error",
        "An electronic health record alert fatigue failure - the system likely generated a warning that was dismissed"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Methotrexate daily versus weekly dosing confusion is one of the most documented, serious, and often fatal medication errors in outpatient and inpatient settings. Multiple system safeguards are expected to prevent this error: order entry that requires explicit frequency selection with clinical decision support for daily methotrexate orders in non-oncologic patients, pharmacy verification, patient education that includes expected frequency, and dispensing systems that flag methotrexate ordered daily. When all safeguards fail simultaneously, systemic redesign is required.",
      baseXp: 20,
      followUps: [
        {
          question: "Following the event, the pharmacy proposes implementing a clinical decision support alert that fires whenever methotrexate is ordered daily for non-oncologic indications. The clinical informatics team warns that providers currently override 78% of drug alerts. How should the methotrexate alert be designed to avoid the same override fate?",
          options: [
            "Use the same alert format but add a hard stop - preventing order completion will force prescribers to address the alert",
            "Design the alert as a meaningful differentiated warning - a 'hard stop' requiring a specific clinical justification (typed free text from the prescriber stating the rationale for daily dosing), visible to both the ordering provider and the pharmacist, and triggering a mandatory pharmacist review before dispensing. The alert should be reserved for this specific high-risk pattern and not use the same generic format as lower-risk alerts that have been conditioned to be clicked past",
            "Accept that 78% override rates are unavoidable for clinical decision support and proceed with standard alert implementation",
            "Limit the alert to a pharmacy-only notification - removing the prescriber-facing alert eliminates provider fatigue while maintaining the pharmacist safety check"
          ],
          correctIndex: 1,
          explanation: "Alert fatigue is caused by high-volume, low-specificity alerts that are usually overridable without consequence. A methotrexate daily-dosing alert should be designed differently: as a distinctive high-priority alert with a meaningful hard stop that requires typed justification, triggers pharmacist review, and is not interruptible with a single click. Reserving this design for truly high-stakes specific alerts makes it stand out from the background noise of routine drug interaction warnings.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm10",
      baseQuestion: "A behavioral health unit routinely stores concentrated potassium chloride (2 mEq/mL) in the unit's medication room for nursing preparation of IV potassium infusions. A safety officer flags this practice. What is the concern?",
      baseOptions: [
        "No concern - concentrated KCl is a standard floor stock medication in any unit where IV potassium replacement is used",
        "Concentrated potassium chloride (2 mEq/mL) is on the ISMP list of medications that must not be available on patient care units - it is a high-alert medication that, when injected undiluted, causes fatal cardiac arrest within seconds. Units must use pre-diluted potassium infusions prepared by pharmacy rather than concentrated vials that require nursing dilution",
        "The concern is unit-specific - concentrated KCl is only restricted in pediatric and ICU settings",
        "The safety concern is that the concentrated KCl is stored in an unlocked medication room rather than in a locked high-alert medication cabinet"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Concentrated potassium chloride (2 mEq/mL and similar concentrations) is on the ISMP list of medications prohibited from floor stock because accidental IV push of undiluted KCl causes immediate cardiac arrest. This error has killed patients across healthcare settings worldwide. The correct safeguard is complete removal from all patient care unit stock and replacement with pharmacy-prepared premixed potassium infusions at safe, diluted concentrations. This is a non-negotiable safety standard.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit nurse manager argues that pharmacy turnaround for potassium replacement orders is sometimes 60-90 minutes and that having concentrated KCl on the floor allows faster correction of hypokalemia. What is the appropriate response to this clinical efficiency argument?",
          options: [
            "Accept the argument - patient care urgency may outweigh the risk for an experienced nursing staff",
            "Reject the concentrated KCl floor stock regardless of turnaround time, and simultaneously work to fix the turnaround time problem. Pre-diluted potassium infusion bags (10 mEq/100 mL, 20 mEq/100 mL) can be pre-stocked in the unit satellite pharmacy or automated dispensing cabinet at safe concentrations that do not require nursing dilution - providing rapid access without the lethal potential of concentrated vials",
            "Compromise by restricting concentrated KCl to a key-locked cabinet accessible only to charge nurses",
            "Allow concentrated KCl floor stock with a mandatory two-nurse dilution verification process before administration"
          ],
          correctIndex: 1,
          explanation: "The correct solution addresses both the safety requirement (no concentrated KCl on floors) and the clinical efficiency need (timely potassium replacement). Pre-diluted potassium infusion bags stocked in the unit's automated dispensing cabinet provide immediate nursing access to safe-concentration products without the risk of concentrated vials. Turnaround time is not a reason to maintain a floor stock of a medication that has killed patients - it is a reason to fix the supply chain.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm11",
      baseQuestion: "During a review, a pharmacist identifies that a patient received their antibiotic dose 3.5 hours late on two consecutive days because the medication was not available in the ADC when nursing attempted administration. The antibiotic is vancomycin for an MRSA bacteremia. What is the patient safety concern?",
      baseOptions: [
        "Administrative only - documentation of the late dose timing is the primary compliance concern",
        "Clinical harm risk - vancomycin timing for serious MRSA infections is linked to therapeutic drug monitoring targets. Consistent 3-4 hour delays shift the dosing interval and alter trough levels, potentially creating sub-therapeutic troughs that fail to treat the infection and promote vancomycin resistance. This is a medication management system failure requiring investigation of the ADC stocking process",
        "Limited concern - vancomycin has a long half-life that accommodates 3-4 hour dosing delays without clinical consequence",
        "The concern is limited to documentation - nursing must document the actual administration time but the clinical impact of a 3.5-hour delay is minimal for a q12h antibiotic"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "For serious infections requiring antibiotic timing precision, consistent administration delays can undermine therapeutic goals. Vancomycin's efficacy in MRSA bacteremia depends on maintaining target trough or AUC levels - consistent delays alter the pharmacokinetic profile. Beyond the immediate patient impact, the underlying cause (antibiotic not stocked in ADC when needed) is a medication supply process failure that puts other patients at risk of the same delay.",
      baseXp: 15,
      followUps: [
        {
          question: "Investigation reveals the vancomycin was not in the ADC because the pharmacy tech restocking process uses a 'daily restock' schedule rather than restocking when an ADC withdrawal triggers a low-quantity alert. Several other antibiotics show similar restocking delays. What systemic change is indicated?",
          options: [
            "Increase the daily restock frequency to twice daily - this will reduce the incidence of ADC stockouts",
            "Shift to demand-driven restocking - the ADC system should generate real-time low-quantity alerts that trigger immediate restocking, rather than a scheduled daily cycle that may miss high-utilization periods. Additionally, par levels for high-frequency antibiotics like vancomycin should be set based on actual utilization data, not historical estimates",
            "Add critical antibiotics to the override profile so nurses can access them without a pharmacist-released order during stockouts",
            "Require nursing to call pharmacy whenever an ADC withdrawal leaves fewer than two doses remaining - manual nurse-driven restocking requests will fill the gap"
          ],
          correctIndex: 1,
          explanation: "Scheduled daily restocking cannot account for variable daily utilization. Demand-driven restocking based on real-time ADC inventory alerts is the standard approach for preventing stockouts of critical medications. Par levels must be set based on actual withdrawal data, not static estimates. Increasing scheduled restock frequency is a partial improvement but does not address the fundamental mismatch between a fixed schedule and variable demand.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm12",
      baseQuestion: "A patient is prescribed tramadol for post-operative pain on an orthopaedic unit. The nurse reviews the MAR and sees a concurrent order for a serotonin-norepinephrine reuptake inhibitor (SNRI) the patient takes for depression. The nurse administers the tramadol without flagging the interaction. Six hours later, the patient develops agitation, tremor, diaphoresis, and hyperthermia. What occurred?",
      baseOptions: [
        "An expected opioid adverse effect - hyperalgesia and central sensitization following tramadol administration",
        "Serotonin syndrome - a potentially life-threatening drug interaction between tramadol (which inhibits serotonin reuptake) and the SNRI. The nurse should have flagged the combination before administration, and the clinical decision support system should have alerted the prescriber at order entry. Multiple safety layers failed",
        "Opioid toxicity from tramadol accumulation in a patient with renal insufficiency",
        "A hypersensitivity reaction to tramadol requiring antihistamine treatment and possible desensitization"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Tramadol has serotonergic activity and when combined with SNRIs, SSRIs, or other serotonergic agents creates risk for serotonin syndrome. This interaction is documented and should be flagged at order entry. The clinical presentation - agitation, tremor, diaphoresis, hyperthermia - is classic serotonin syndrome. Multiple barriers failed: prescriber awareness, clinical decision support alert (either absent or overridden), and nursing recognition of the drug interaction risk.",
      baseXp: 20,
      followUps: [
        {
          question: "Post-event analysis shows the clinical decision support system generated a 'moderate interaction' alert for the tramadol-SNRI combination at order entry, which the prescribing physician dismissed with a single click. What does this indicate about the alert's design?",
          options: [
            "The alert design is appropriate - physician override of a moderate interaction alert is a documented and acceptable clinical decision",
            "A serotonin syndrome risk from tramadol-SNRI combination should be classified as a high-severity alert requiring more than a single-click dismissal - the 'moderate' categorization underrepresents the clinical risk. The alert should require the prescriber to choose an alternative agent or document specific clinical justification for the combination, and the override should trigger pharmacy notification for a clinical pharmacist review",
            "The alert design is not the issue - the pharmacist verifying the order should have escalated the interaction",
            "Alert design cannot prevent prescriber overrides - a change to the alert severity level will not improve the override rate for experienced prescribers"
          ],
          correctIndex: 1,
          explanation: "Alert severity classification determines provider response behavior. A single-click dismissible 'moderate' alert for a drug combination with known potential for a life-threatening drug interaction underrepresents the risk. Reclassifying this interaction as high-severity with a meaningful acknowledgment requirement - and routing the override to clinical pharmacy for review - creates a second safety net. The combination of reclassification and pharmacist escalation is more effective than either alone.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm13",
      baseQuestion: "A hospital's opioid stewardship team reviews post-discharge opioid prescribing data and finds that orthopaedic surgery patients are discharged with a median of 112 oxycodone 5 mg tablets - enough for a 14-day course at 8 tablets/day. CDC guidelines recommend the minimum effective quantity for acute post-operative pain. What is the quality and safety concern?",
      baseOptions: [
        "No concern - post-operative opioid prescribing is a clinical decision and external guidelines do not apply",
        "Excessive opioid prescribing at discharge creates patient safety risk (accidental overdose, diversion, progression to dependence) and public health risk (diverted tablets). CDC guidelines recommend prescribing the lowest effective dose for the shortest effective duration - 112 tablets is inconsistent with evidence for most orthopaedic procedures. Opioid stewardship programs should develop procedure-specific prescribing guidelines based on actual utilization data",
        "The concern is limited to patients with prior substance use disorder - opioid quantity is not a safety concern for opioid-naive patients",
        "The concern is administrative - prescriptions must include drug monitoring program reporting but quantity guidelines are not a JC compliance area"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Overprescribing of opioids at discharge is a recognized patient safety and public health problem. Procedure-specific prescribing guidelines calibrated to actual patient utilization data consistently reduce discharge opioid quantities without increasing patient-reported pain or callbacks. Facilities with opioid stewardship programs that use data to set evidence-based discharge prescribing quantities demonstrate both safety improvement and reduced diversion risk.",
      baseXp: 15,
      followUps: [
        {
          question: "The orthopaedic department resists the opioid stewardship team's recommendation to implement procedure-specific prescribing guidelines. Surgeons argue that 'patients need enough to manage their pain at home and I know my patients best.' How should leadership respond?",
          options: [
            "Defer to surgical judgment - individual clinical decision-making is not subject to stewardship program mandates",
            "Present the data: patient utilization studies consistently show that most orthopaedic patients use significantly fewer opioid tablets than are prescribed, leaving large quantities unused and accessible for misuse or diversion. Leadership should invite surgeon leaders to participate in designing the guidelines using the department's own patient data, frame the effort as patient safety rather than restriction, and establish that opioid stewardship is a program expectation with quality metric reporting",
            "Implement mandatory guidelines without surgeon input - the evidence base is sufficient to proceed unilaterally",
            "Allow surgeons to continue current practice but add a patient education handout about safe opioid storage and disposal"
          ],
          correctIndex: 1,
          explanation: "Surgeon buy-in is essential for any prescribing behavior change. Presenting the department's own data - how many tablets their patients actually use versus what is prescribed - is far more compelling than external guidelines. Involving surgeons as co-designers of the guidelines respects their expertise while incorporating the evidence. Framing stewardship as protecting patients from excess opioid access (rather than restricting prescribing) aligns the conversation with shared clinical values.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm14",
      baseQuestion: "A REMS (Risk Evaluation and Mitigation Strategy) program requires that prescribers of a medication for opioid use disorder be certified before prescribing. A physician on the medical-surgical unit prescribes the medication for an inpatient with opioid use disorder who is experiencing withdrawal. The physician is not certified under the REMS program. What is the compliance status?",
      baseOptions: [
        "Compliant - inpatient prescribing is exempt from REMS certification requirements for opioid use disorder medications",
        "Non-compliant - REMS certification requirements apply to both inpatient and outpatient prescribers of covered medications. The pharmacy should have a process to verify prescriber certification status before dispensing REMS-covered medications. The facility must have certified prescribers available for consultation when patients require REMS-covered medications",
        "Compliant - REMS programs are DEA-administered and apply to outpatient pharmacies, not hospitals",
        "Compliant if the prescriber documents the clinical urgency and the administration is limited to the duration of the inpatient stay"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "REMS certification requirements for opioid use disorder medications apply to prescribers in all settings, including inpatient. Hospitals must have processes to ensure that REMS-covered medications are only prescribed by certified providers, or that a certified provider is consulted. Pharmacy should verify certification at the time of dispensing. The absence of a certified prescriber requires consultation with addiction medicine, a certified hospitalist, or another qualified provider - not uncertified prescribing.",
      baseXp: 15,
      followUps: [
        {
          question: "The hospital has no certified prescribers for opioid use disorder medications among its medical staff. As a result, patients admitted with opioid use disorder cannot initiate or continue pharmacotherapy during hospitalization. What must the hospital address to meet patient care standards?",
          options: [
            "This is acceptable - patients can resume outpatient medication management after discharge",
            "The hospital must either ensure credentialed prescribers are available for this patient population (through medical staff recruitment, training, or telemedicine consultation with a certified prescriber) or establish a formal consultation protocol with a certified provider. Interrupting pharmacotherapy for opioid use disorder during hospitalization is associated with significantly increased post-discharge overdose mortality - it is not a clinically neutral decision",
            "The hospital should refer these patients to a psychiatric facility for initiation of pharmacotherapy",
            "The hospital can apply for an institutional exemption from REMS requirements when no certified prescriber is on staff"
          ],
          correctIndex: 1,
          explanation: "Interrupting buprenorphine or methadone therapy for opioid use disorder during hospitalization is clinically harmful - it is associated with post-discharge overdose risk and treatment disengagement. Hospitals have a patient care obligation to ensure continuity of medications for opioid use disorder during inpatient stays. This requires either certified prescribers on staff, tele-addiction-medicine consultation, or formal consultation relationships. 'We don't have a certified prescriber' is a system failure, not a clinical justification for withholding evidence-based treatment.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm15",
      baseQuestion: "A medication error analysis reveals that a nurse administered a patient's regular insulin dose subcutaneously but used the wrong syringe - a tuberculin (1 mL) syringe instead of an insulin syringe. The patient received approximately 3× the intended dose. What made this error possible?",
      baseOptions: [
        "Individual nurse unfamiliarity with insulin syringes - education on syringe types will prevent recurrence",
        "Insulin and tuberculin syringes appear similar and are often stored together. Tuberculin syringes are marked in mL while insulin syringes are marked in units - drawing up '20' on a tuberculin syringe delivers 0.2 mL rather than 20 units, which for standard insulin (100 units/mL) represents a 10-fold overdose. The error occurred because incompatible syringes were co-stocked in a way that made wrong-syringe selection easy",
        "The pharmacy dispensed the wrong insulin concentration - a concentration error rather than a syringe error caused the overdose",
        "This error is inherent to subcutaneous insulin administration and cannot be prevented through system changes"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Insulin-tuberculin syringe mix-ups are a known and preventable error type. The safeguards include: separate storage of insulin-specific syringes away from tuberculin syringes, visual differentiation of insulin syringes (orange caps), and education on why unit-marked syringes must be used for insulin. Some facilities use prefilled syringes or pen devices to eliminate the drawing-up step entirely. The co-stocking of these visually similar but functionally incompatible syringes in the same drawer is the primary system failure.",
      baseXp: 20,
      followUps: [
        {
          question: "The nursing unit proposes removing tuberculin syringes from the nursing supply areas entirely, reserving them only for specific clinical uses (allergy skin testing, intradermal immunizations) with pharmacy dispensing on request. What are the implications of this supply chain change?",
          options: [
            "The change is excessive - nursing staff should be educated rather than having supply access restricted",
            "This is a sound system-level intervention - removing a high-confusion-risk product from routine floor stock eliminates the environmental condition that enables the error. Pharmacy-on-request dispensing for the specific, less frequent uses adds a pharmacist verification step. The inconvenience of requesting a syringe is far outweighed by the prevention of insulin overdose errors, which can be life-threatening",
            "The change creates access barriers for routine nursing care - skin testing is a common nursing procedure and restricted access is operationally unacceptable",
            "The change is acceptable only after a pilot on one unit - system-wide implementation requires more evidence that the floor removal approach is effective"
          ],
          correctIndex: 1,
          explanation: "Removing a high-risk supply item from routine floor stock when its primary use can be served by a purpose-designed alternative is a textbook system-level error prevention intervention. Insulin syringes (for insulin) and pharmacy-dispensed tuberculin syringes (for skin testing) eliminate the co-location confusion. The operational 'inconvenience' of requesting a syringe through pharmacy is trivial compared to the risk of a 10-fold insulin overdose.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm16",
      baseQuestion: "A pharmacy conducts a waste reconciliation audit for controlled substances and finds that 14% of morphine waste events have no documented witness signature - the administering nurse documented the waste themselves without a second provider present. What is the compliance and safety concern?",
      baseOptions: [
        "A documentation compliance finding only - morphine waste documentation is an administrative requirement without direct patient safety implications",
        "Both a compliance and a safety concern - unwitnessed controlled substance waste creates the opportunity for medication diversion, where a provider takes a portion of the intended waste for personal use. DEA and JACHO expect controlled substance waste to be witnessed by a second qualified individual as the primary safeguard against diversion. A 14% rate of unwitnessed waste represents a systematic program gap",
        "Limited concern - unwitnessed waste is only a safety concern for patients with opioid use disorder histories or when a specific provider is under investigation",
        "The 14% rate is within acceptable variance - some clinical situations prevent immediate witness availability, and documentation of these circumstances satisfies the requirement"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Witnessed waste is the primary safeguard against controlled substance diversion by healthcare workers. Unwitnessed waste events cannot be verified - the amount discarded cannot be confirmed, creating an opportunity for a provider to take a portion of the discarded medication. A 14% rate indicates a systemic gap in the waste verification program. JC and DEA expect that controlled substance waste be witnessed and documented by a second qualified provider in all but the most exceptional circumstances.",
      baseXp: 15,
      followUps: [
        {
          question: "Investigation identifies that 11 of the 14% unwitnessed waste events occurred during a period when one specific nurse was working night shift when no other nurse was immediately available on the unit. The nurse denies diversion. What must the investigation determine and what system changes are needed?",
          options: [
            "Accept the night shift explanation - solitary nursing situations create unavoidable witness gaps",
            "The investigation must determine: (1) whether any patient-specific morphine administration timing correlates with the unwitnessed waste events (diversion pattern analysis); (2) whether the nurse's urine drug screen is consistent with non-use; (3) whether there are alternative witness options available during night shift (charge nurse, pharmacy, security, another floor's nurse). System changes must ensure that no shift operates without a controlled substance witness available - including implementing electronic waste verification systems or requiring cross-unit witness protocols",
            "Discipline the nurse for repeated unwitnessed waste documentation - individual accountability eliminates the need for system changes",
            "Increase the controlled substance audit frequency during night shifts - more frequent audits will detect diversion if it is occurring"
          ],
          correctIndex: 1,
          explanation: "When unwitnessed waste clusters around a single provider on a specific shift, it requires both a clinical investigation (diversion screening) and a system fix. The investigation cannot conclude 'unavoidable' without confirming through objective data (administration timing analysis, drug screening). Simultaneously, 'no witness available on night shift' is a system design failure - facilities must ensure that witness access is available 24/7. Cross-unit witness protocols, pharmacy staff coverage, and electronic witness systems are all viable solutions.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm17",
      baseQuestion: "A patient being discharged after hip replacement surgery is given verbal counseling by a nurse about their anticoagulant (rivaroxaban). No written medication instructions are provided. The patient is also prescribed a new iron supplement and a NSAID for residual pain. Three days later, the patient presents with GI bleeding. What medication education failures likely contributed?",
      baseOptions: [
        "None - verbal counseling is equivalent to written medication education for discharge instructions",
        "Multiple gaps: (1) discharge medication education must include written instructions covering dose, timing, indication, duration, and key adverse effects - verbal-only education has poor retention; (2) the patient was not educated about drug interactions (NSAIDs increase bleeding risk with anticoagulants and may cause GI bleeding independently); (3) the patient may not have known that the NSAID was contraindicated with rivaroxaban",
        "The NSAID prescribing is the primary failure - medication education would not have changed the outcome if the drug was prescribed inappropriately",
        "The iron supplement interaction with rivaroxaban (reduced absorption when co-administered) is the most likely contributor to the bleeding event"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Discharge medication education for anticoagulants must include written instructions, key adverse effects (bleeding signs), drug and food interactions, and contraindicated medications. Verbal-only education has poor retention rates. The concurrent prescription of an NSAID with an anticoagulant is a documented high-risk combination - the patient should have been explicitly told to avoid NSAIDs and given this instruction in writing. A medication reconciliation and counseling failure allowed a preventable drug interaction to cause patient harm.",
      baseXp: 20,
      followUps: [
        {
          question: "The patient states they did not know that their prescription ibuprofen (prescribed by the same discharging team) interacted with rivaroxaban. The surgeon's notes document 'patient educated about anticoagulation' but no specifics. How does this documentation affect the root cause analysis?",
          options: [
            "The documentation satisfies the education standard - the surgeon noted that education occurred",
            "The documentation is insufficient - 'patient educated about anticoagulation' does not demonstrate what was taught, what the patient understood, or what written materials were provided. JC requires that medication education be documented with sufficient detail to demonstrate that it occurred and was understood. The documentation gap means the RCA cannot determine whether the NSAID interaction was specifically addressed - a critical distinction for determining whether this was a counseling failure or a comprehension failure",
            "The documentation is adequate as long as the patient signed a discharge education acknowledgment form",
            "The documentation gap shifts responsibility to the patient - if they signed any discharge paperwork, they accepted responsibility for managing their medications"
          ],
          correctIndex: 1,
          explanation: "Documentation of medication education must be specific enough to demonstrate what was taught and comprehended, not just that 'education occurred.' Vague documentation prevents the organization from learning whether the education content addressed the specific risk that caused harm. For high-alert medications like anticoagulants, the documentation should include the specific topics covered, the patient's verbalized understanding, and the written materials provided. Generic documentation of 'patient educated' satisfies neither the learning nor the accountability function of clinical documentation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm18",
      baseQuestion: "An oncology clinic nurse notes that a patient's chemotherapy order was written based on a weight obtained 6 weeks ago at the previous cycle. The patient is visibly cachectic and appears to have lost significant weight. The nurse calls the oncologist, who says 'just use the old weight - the calculation is close enough.' What should the nurse do?",
      baseOptions: [
        "Use the old weight - the oncologist has ordering authority and the weight difference may be clinically insignificant",
        "Obtain a current weight before preparing or administering the chemotherapy - chemotherapy dosing requires current body surface area calculations. Weight loss in an oncology patient can be clinically significant and result in relative overdose. The nurse has both a professional and ethical obligation to ensure the order is based on accurate current clinical data, and the oncologist must be informed of the actual current weight before the dose is confirmed",
        "Split the difference between the old weight and an estimated current weight and recalculate the dose",
        "Administer the current order and document that the weight was based on the previous cycle - the documentation satisfies the discrepancy"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Chemotherapy dosing based on body surface area requires current, accurate weight. Significant weight loss in an oncology patient can result in dose that is correct by calculation but represents actual overdose relative to the patient's current physiology. The nurse's professional obligation includes verifying that the clinical data supporting the order is current and accurate. An oncologist dismissing a current weight requirement with 'close enough' does not override the nurse's clinical and professional responsibility to advocate for accurate dosing.",
      baseXp: 20,
      followUps: [
        {
          question: "The patient's current weight is 11 kg less than the weight in the order - a 16% reduction. The nurse reports this to the oncologist who recalculates and reduces the dose. The original order would have resulted in a 16% overdose. How should this near-miss event be reported and analyzed?",
          options: [
            "The event does not need reporting since the dose was corrected before administration - near-misses that are caught before harm require no formal reporting",
            "This near-miss should be reported through the event reporting system as a high-acuity near-miss - a 16% chemotherapy overdose that was prevented by nursing vigilance represents both a patient safety success and a system failure that must be analyzed. The root cause analysis should examine: why the order was written based on 6-week-old weight, whether the EHR flagged the weight as outdated, and whether there is a systematic check for current weight before chemotherapy preparation",
            "Report it to the oncologist only - chemotherapy near-misses are handled within the oncology department without external quality reporting",
            "Document the weight discrepancy in the patient's chart as resolved - the correction is the event's conclusion"
          ],
          correctIndex: 1,
          explanation: "Near-misses that were caught only due to individual vigilance - rather than a systematic safeguard - are high-value learning events. This near-miss reveals that the system did not have a reliable check for current weight before chemotherapy ordering. The nurse's intervention was the only barrier that prevented a 16% overdose. Reporting and analyzing this event allows the facility to implement a systematic check (EHR weight recency alert, mandatory current weight at chemotherapy visit check-in) so that prevention is not dependent on one nurse's observation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-mm19",
      baseQuestion: "A pharmacy benefit manager audit finds that a community hospital does not have a documented pharmacy and therapeutics (P&T) committee meeting record for the past 8 months. The pharmacy director says 'the committee exists but we haven't had a formal meeting - we make decisions by email.' What does JC require?",
      baseOptions: [
        "JC does not specify meeting frequency for the P&T committee - decision-making by email is acceptable if decisions are documented",
        "JC requires the pharmacy and therapeutics function to occur through a defined, structured governance process that includes regular meetings with documented minutes showing formulary decisions, medication use policy reviews, medication safety event analysis, and high-alert medication oversight. An 8-month absence of formal meetings indicates the committee's governance function is not being fulfilled",
        "The requirement is met as long as all email decisions are archived - the medium of communication is not a JC compliance element",
        "P&T committee requirements apply only to hospitals with more than 200 beds - community hospitals may use informal decision-making processes"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The pharmacy and therapeutics committee is a required governance structure for medication management oversight in JC-accredited facilities. Its functions - formulary management, medication use policy, high-alert medication oversight, and medication safety event review - require a structured process with documented evidence that the governance work is occurring. An 8-month gap in formal meetings represents an 8-month gap in structured governance of the medication management program.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy director argues that email-based decisions are faster and that the formal meeting format is 'bureaucratic.' How should this argument be addressed?",
          options: [
            "Accept the efficiency argument and formalize a hybrid email-and-meeting model that JC would recognize",
            "The efficiency argument does not negate the governance requirement - P&T committee functions require interprofessional input (physician, pharmacy, nursing, quality) that email threads among pharmacy staff do not replace. The value of structured meetings is the deliberative process: varied perspectives, debate about safety evidence, and documented consensus from a defined group of stakeholders. The meeting format exists because it produces better, more accountable decisions than informal communication. 'Bureaucratic' efficiency concerns should be addressed by optimizing meeting design, not eliminating the governance function",
            "Implement quarterly P&T meetings and accept email for all routine interim decisions",
            "Support the pharmacy director - JC accreditation outcomes are more important than meeting format, and quality outcomes are maintained under the current informal process"
          ],
          correctIndex: 1,
          explanation: "Governance processes exist because they produce qualitatively different outcomes than informal decision-making - they require participation from multiple stakeholders, documentation of the reasoning behind decisions, and accountability to an institutional record. A P&T committee that functions primarily through pharmacy department emails excludes the physician, nursing, and quality perspectives that are central to medication safety governance. The solution to meeting inefficiency is better meeting design, not dissolution of the governance requirement.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-mm20",
      baseQuestion: "A quality audit reveals that 28% of PRN pain medication administrations on a medical-surgical unit have no documented pain reassessment within the expected timeframe (30-60 minutes post-administration). The nursing manager says 'nurses reassess - they just don't always document it.' How should this finding be approached?",
      baseOptions: [
        "Accept the manager's explanation - nursing documentation practices do not always capture all clinical activities",
        "Investigate whether the gap is documentation-only or reflects actual missed reassessments - the distinction matters clinically. If reassessments are not occurring, patients may have undertreated pain or unrecognized adverse effects (respiratory depression, oversedation). If reassessments are occurring but not documented, the quality record is incomplete. Either finding requires corrective action: actual missed reassessments require workflow redesign; documentation gaps require a documentation improvement process and may also indicate the reassessment is not reliably occurring",
        "Accept the finding as a documentation problem and implement a documentation education module",
        "The finding is not a JC compliance issue - pain reassessment after PRN administration is a nursing best practice standard, not a JC requirement"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The distinction between 'did it but didn't document' and 'didn't do it' is clinically critical for pain management. Pain reassessment after PRN opioid administration serves dual purposes: verifying analgesic effectiveness and detecting adverse effects (respiratory depression, oversedation). A 28% rate of undocumented reassessments requires investigation to determine the actual cause. Neither explanation - missed documentation or missed assessment - is acceptable at this rate without corrective action.",
      baseXp: 15,
      followUps: [
        {
          question: "Direct observation over five shifts reveals that nurses do return to assess pain after PRN opioids in 71% of cases, but only 44% of those assessments are documented. What does this dual gap (29% missed assessments + underdocumentation of performed assessments) require?",
          options: [
            "Address the documentation gap only - the 71% actual assessment rate is clinically acceptable",
            "Two concurrent interventions: (1) redesign the workflow to make pain reassessment more reliable - perhaps through a prompt in the EHR or medication administration workflow that requires pain score entry before closing the PRN administration; (2) address the documentation gap separately through documentation training and feedback. The 29% missed assessment rate is not clinically acceptable for PRN opioids where adverse effects can progress rapidly",
            "Accept the 71% as baseline and set an improvement goal of 85% over the next quarter",
            "Implement a mandatory paper pain log at the bedside - parallel paper documentation will capture assessments that are missed in the EHR"
          ],
          correctIndex: 1,
          explanation: "A 29% rate of missed post-opioid reassessments is a patient safety issue, not just a documentation problem. Opioid-induced respiratory depression can develop within 30-60 minutes of administration. An EHR prompt that requires pain score entry as part of completing the PRN documentation converts the reassessment from an optional follow-up to a required step in the administration workflow - making the right action the default action. This addresses both the assessment and documentation gaps simultaneously.",
          expertXp: 25
        }
      ]
    }
  ]
};
