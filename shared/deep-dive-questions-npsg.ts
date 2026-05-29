import type { DeepDiveLevel } from "./schema";

export const ddNpsgLevel: DeepDiveLevel = {
  id: "dd-npsg",
  name: "National Performance Goals (NPGs) Deep Dive",
  description: "Expert-level scenarios on patient identification failures, alarm fatigue, anticoagulant safety, suicide risk screening, and systemic handoff failures. Effective Jan 1, 2026, NPSGs are now National Performance Goals (NPGs).",
  icon: "Microscope",
  color: "hsl(271, 76%, 53%)",
  baseLevelId: "npsg",
  questions: [
    {
      id: "dd-npsg1",
      baseQuestion: "A wrong-patient medication event is analyzed. The root cause: two patients with similar last names were in adjacent rooms. The nurse scanned the correct medication barcode but never scanned the patient's wristband. The barcode medication administration system allowed administration without the patient scan because the patient scan step had been disabled by IT to 'reduce alert fatigue.' What systemic failure does this reveal?",
      baseOptions: [
        "Individual nurse failure - the scan sequence is a nursing responsibility and the nurse should have followed the correct order regardless of system configuration",
        "A systemic failure in which a patient safety technology (barcode MAR) was deliberately configured to bypass a required safety step, eliminating a primary defense against wrong-patient errors",
        "An IT configuration error that is secondary to the primary cause - the nurse's failure to manually verify patient identity",
        "No systemic failure - wrong-patient events occur even with functioning barcode systems and the event was statistically expected"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Disabling the patient scan step in a barcode medication administration system eliminates the primary technology-based patient identification safeguard. This is a systemic failure - a safety technology was deliberately modified to reduce alerts in a way that created a direct patient harm pathway. The individual nurse's action occurred within a system that had removed a protective barrier.",
      baseXp: 20,
      followUps: [
        {
          question: "Following the event, the quality team discovers that 12 other hospitals in the system have also disabled the patient wristband scan step in their barcode MAR systems for the same reason. Leadership wants to re-enable the step system-wide but nursing directors warn it will increase alert burden by approximately 400 additional alerts per shift per unit. How should leadership balance the competing concerns?",
          options: [
            "Restore the patient scan requirement across all facilities - alert burden must be managed through education and compliance enforcement, not through disabling safety features",
            "The immediate action is to restore the patient scan requirement system-wide and simultaneously form an interprofessional team to address the root cause of alert fatigue through alert optimization - reducing non-actionable alerts, improving wristband readability, and streamlining the scan workflow rather than disabling the safety step",
            "Allow each hospital to decide independently based on their error rate and nursing preference",
            "Keep the patient scan disabled but implement a manual two-identifier policy that compensates for the missing technology step"
          ],
          correctIndex: 1,
          explanation: "Restoring the safety requirement is non-negotiable - the scan step is a primary defense against wrong-patient medication errors and cannot remain disabled. However, the alert fatigue concern is real and valid. The solution is to fix the underlying cause of the alert burden: wristband readability, scanner calibration, workflow design, and alert optimization. The two actions must happen simultaneously - restore the safety step immediately, and in parallel fix what was causing the burden that led to the unsafe configuration change.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg2",
      baseQuestion: "A cardiac unit's alarm management audit reveals 387 monitor alarms per patient per day, with nursing response occurring for fewer than 12% of alarms. Staff have developed a pattern of silencing alarms without patient assessment. Three weeks later, a patient dies after a fatal arrhythmia went undetected for 6 minutes while the alarm was silenced. What does NPG 1 / formerly NPSG.06.01.01 require the facility to do after this event?",
      baseOptions: [
        "Discipline the staff members who silenced the alarm without assessing the patient",
        "Conduct a sentinel event review, analyze the alarm management system as a root cause, implement individualized alarm parameter policies, and establish ongoing alarm response metrics with leadership reporting",
        "Replace the monitor equipment with a newer system that cannot be silenced without entering a clinical justification",
        "Implement a policy requiring two-nurse cosign to silence any cardiac monitor alarm"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A patient death potentially related to alarm fatigue is a sentinel event. NPG 1 / formerly NPSG.06.01.01 requires not just individual accountability but systemic response: root cause analysis of the alarm environment, individualized parameter setting, improved alarm response protocols, and ongoing monitoring of alarm response metrics. 387 alarms per patient per day is a system-level problem requiring a system-level solution.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit implements individualized alarm parameters for all patients. Three months later, a quality audit shows the average alarms per patient per day dropped to 94 - but nursing response to alarms remained at 18%, still well below expectations. What does this persistent gap indicate and what additional intervention is needed?",
          options: [
            "A 75% reduction in alarm volume is a success - 18% response rate is an acceptable outcome when alarm volume is reduced",
            "The persistent low response rate despite lower alarm volume indicates that alarm fatigue has created a deeply embedded behavioral pattern - individualized parameters alone are insufficient; additional interventions needed include role clarity for alarm response, real-time monitoring of response rates, leadership accountability structures, and potentially cultural change work addressing the normalization of ignoring alarms",
            "Reducing alarms further to below 50 per patient per day will drive response rates above 50% automatically - additional behavioral interventions are not needed",
            "The 18% response rate suggests the remaining alarms are predominantly non-actionable - further alarm reduction is the only needed intervention"
          ],
          correctIndex: 1,
          explanation: "Alarm fatigue creates conditioned behavioral responses - staff have learned over time that alarms do not require response. Parameter optimization removes non-actionable alarms but does not automatically reverse deeply embedded behavioral habits. Sustained improvement requires multiple simultaneous interventions: clear role definitions for who responds to which alarm, real-time feedback loops, leadership visibility into response data, simulation training on high-priority alarm recognition, and culture work that re-establishes alarm response as a non-negotiable professional expectation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg3",
      baseQuestion: "A hospital screens all inpatients for suicide risk using the Columbia Suicide Severity Rating Scale. A medical-surgical patient screens positive with recent ideation and a prior attempt. The nurse notifies the physician, who orders a one-to-one sitter. No environmental modifications are made to the room. Three days later, the patient uses a ligature point in the bathroom. What NPG 8 / formerly NPSG.15.01.01 requirement was not fully implemented?",
      baseOptions: [
        "The sitter should have been positioned inside the bathroom during all bathroom use",
        "Environmental safety modifications - removing ligature risks from the patient's room and bathroom - are a required component of the NPSG suicide risk response, not just a one-to-one sitter",
        "A psychiatric consult was required before any safety measures were implemented",
        "The screening tool was administered incorrectly - a positive screen in a medical-surgical patient should be repeated before safety measures are initiated"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NPG 8 / formerly NPSG.15.01.01 requires three responses to a positive suicide screen: safety assessment, care plan, and environmental modifications. Environmental modifications include removing or securing potential ligature points - shower curtain rods, IV pole hooks, door handles, call light cords. A sitter without environmental modifications leaves available means in the patient's immediate environment.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the quality team learns that the medical-surgical unit has never performed a formal environmental risk assessment for ligature points. The unit director argues that a full ligature-risk environmental mitigation is only required in behavioral health units, not in medical-surgical rooms. Is this reasoning correct, and what does JC require?",
          options: [
            "Correct - ligature-risk assessments and mitigations are explicitly limited to behavioral health environments under NPG 8",
            "Incorrect - NPG 8 / formerly NPSG.15.01.01 applies to all hospital patients who screen positive for suicide risk, regardless of unit type. Medical-surgical units must be able to perform environmental modifications for high-risk patients, even if they cannot achieve the full mitigation standard of a dedicated behavioral health unit. A formal environmental assessment of all patient care areas for mitigation options is required",
            "Partially correct - medical-surgical units only need to address ligature risks in bathrooms, not in the main patient room",
            "Incorrect - but ligature risk remediation in medical-surgical rooms is only required during active psychiatric holds, not for voluntary patients who screen positive on a screening tool"
          ],
          correctIndex: 1,
          explanation: "NPG 8 / formerly NPSG.15.01.01 does not limit its scope to psychiatric units. All hospital patients who screen positive for suicide risk must receive appropriate safety measures, including feasible environmental modifications. JC recognizes that medical-surgical units cannot achieve the full environmental safety standard of a locked behavioral health unit, but they must conduct a formal environmental risk assessment and implement all feasible modifications - removing unnecessary hooks, securing IV poles, replacing breakaway shower rods - for patients identified as high risk.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg4",
      baseQuestion: "A quality improvement team analyzes medication reconciliation data and finds that 67% of patients admitted through the emergency department have incomplete reconciliation - missing medications, incorrect doses, or undocumented changes from their home regimen. The team proposes training emergency nurses on reconciliation. What else does this data suggest about the reconciliation system?",
      baseOptions: [
        "Training alone is likely sufficient - a 67% failure rate reflects widespread knowledge gaps that education will correct",
        "A 67% failure rate in a consistent population (ED admissions) indicates a systemic process problem, not just a knowledge gap - the workflow, tools, resources, and role clarity for ED reconciliation require evaluation alongside education",
        "The data is expected - ED environments are too chaotic for accurate reconciliation and a 67% completion rate is operationally normal",
        "The finding should be reported to pharmacy leadership who bears primary reconciliation responsibility in the ED setting"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A 67% failure rate across an entire population is a process and system indicator, not just a training indicator. If nearly two-thirds of all ED admissions have reconciliation failures, the workflow itself needs examination - does the ED have reliable access to medication histories, adequate time and tools for reconciliation, clear role responsibility, and EHR support? Training addresses knowledge; process redesign addresses the system conditions that make reconciliation difficult or impractical.",
      baseXp: 15,
      followUps: [
        {
          question: "The team's root cause analysis reveals three contributing factors: (1) patients arrive without medication lists and cannot accurately recall home medications; (2) the EHR does not integrate with outpatient pharmacy records; (3) there is no defined timeline for completing ED reconciliation before admission orders are written. Which of these factors is most directly addressable through a JC-compliant process improvement within 90 days?",
          options: [
            "Factor 1 - patient recall can be improved through a standardized patient intake questionnaire administered at triage that prompts specific medication classes",
            "Factor 3 - defining a clear timeline and role responsibility for reconciliation completion before admission orders are written is a process design change that can be implemented rapidly and directly reduces the window during which unreconciled medications generate incorrect admission orders",
            "Factor 2 - EHR integration with outpatient pharmacies is the highest-leverage solution and should be prioritized over process changes",
            "All three factors require simultaneous action and cannot be prioritized"
          ],
          correctIndex: 1,
          explanation: "Factor 3 - the absence of a defined timeline - is the most immediately actionable process design change. Without a defined point at which reconciliation must be completed before admission orders are written, there is no structural incentive for timely completion. Establishing the requirement ('reconciliation must be complete before admission orders are co-signed by the admitting physician') creates a process gate. Factor 1 can be addressed concurrently. Factor 2 (EHR integration) typically requires significant resources and a longer timeline - it cannot be the 90-day solution.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg5",
      baseQuestion: "During a survey tracer, the surveyor follows a nurse who performs a structured handoff using SBAR at shift change. The handoff includes diagnosis, current status, recent events, and pending tasks. The receiving nurse asks about the patient's fall risk status - the outgoing nurse is unsure. The receiving nurse asks about a critical lab result from 3 hours ago - the outgoing nurse was unaware of it. What does this scenario reveal about the handoff process?",
      baseOptions: [
        "The handoff was functional - no handoff process can guarantee 100% information transfer and the gaps are expected",
        "The structured format (SBAR) was used but the handoff content was incomplete - critical information including safety risk status and critical results was not reliably communicated, suggesting the SBAR template itself does not capture all required elements or was not used with sufficient rigor",
        "The failure is the receiving nurse's - they should proactively review the chart rather than relying on handoff communication",
        "The critical lab result gap is a separate laboratory notification failure unrelated to the handoff process"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Using a structured format is necessary but not sufficient. The handoff must also ensure completeness of critical content. A fall risk status gap suggests the SBAR template does not include safety risk as a required element. An unknown critical lab result 3 hours later suggests a breakdown in the critical value notification and documentation process that creates handoff gaps. Both are process failures.",
      baseXp: 15,
      followUps: [
        {
          question: "The facility's SBAR template is reviewed and found to include: diagnosis, current vitals, recent medications, and pending orders - but not fall risk, pressure injury risk, current safety precautions, or critical pending results. What process redesign does this require?",
          options: [
            "No redesign - nurses should supplement the template with any additional relevant information they think of at the time",
            "The SBAR template must be revised to include patient safety status elements as required fields: fall risk score and active precautions, pressure injury risk and prevention measures, pending critical results, and active safety orders. Required fields prevent omission by making safety communication a structured expectation, not an optional addition",
            "A separate safety-focused handoff should be conducted after the SBAR, requiring nurses to complete two separate handoff processes per patient",
            "The template is sufficient - the failures identified were individual nurse performance issues, not template design issues"
          ],
          correctIndex: 1,
          explanation: "JC's handoff requirement is for a standardized process that reliably communicates all critical information. If the template systematically omits patient safety information - fall risk, pressure injury status, active safety orders - those elements will be omitted in most handoffs because they require providers to deviate from the structure. Building safety elements into required template fields ensures consistent communication. The goal is one complete handoff, not two separate processes.",
          expertXp: 25
        }
      ]
    }
    ,
    {
      id: "dd-npsg6",
      baseQuestion: "A patient in pre-op states 'I know you need two ID identifiers - I'm John Smith, DOB January 5, 1962.' The nurse says 'great, thanks' and places the IV without scanning the wristband or asking the patient to repeat the identifiers. Is the identification process complete?",
      baseOptions: [
        "Yes - the patient verbalized two identifiers, satisfying the NPG patient identification requirement",
        "No - JC requires that at least two identifiers be verified against the source - the patient's identification band or other authoritative documentation - not simply accepted from the patient's verbal statement alone. The patient's recall of their own identifiers does not substitute for cross-referencing the wristband or medical record",
        "Yes - patient-verbalized identifiers are acceptable when the patient is alert and oriented",
        "Partially - one additional identifier (such as address or phone number) must be added when the patient volunteers the information"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The purpose of two-identifier verification is to prevent errors caused by misidentification - including situations where staff approach the wrong patient, who confirms their own (incorrect from the perspective of who was intended) identity. Verification must compare patient-provided identifiers against a secondary source: the wristband, the order, or the MAR. A patient telling you who they are without cross-referencing a secondary source does not complete the verification process.",
      baseXp: 15,
      followUps: [
        {
          question: "In a busy ED, a nurse argues that stopping to scan wristbands on every patient interaction slows care and that 'I know my patients.' What does evidence about wrong-patient errors in high-familiarity settings show?",
          options: [
            "Provider familiarity with patients is a reliable substitute for systematic identification - the 'I know my patients' approach is safe in defined small-unit environments",
            "Wrong-patient errors occur most frequently in high-familiarity environments where providers bypass verification because they believe they know the patient. Cognitive shortcuts - mistaking a similar-appearing patient in the same room type, or confusing patients with similar names - cause errors precisely when staff feel most confident they don't need to verify. Systematic identification is most important in high-volume, familiar settings",
            "Wristband scanning is only required for medication administration and procedures - non-medication interactions do not require two-identifier verification",
            "The 'I know my patients' argument is valid for the primary nurse but not for any other provider who encounters the patient"
          ],
          correctIndex: 1,
          explanation: "Paradoxically, wrong-patient errors are more common in familiar settings because familiarity breeds complacency about systematic verification. Cognitive load in busy EDs causes staff to pattern-match on expected identities rather than verify actual identities. The safeguard exists precisely because human pattern-recognition is unreliable under high volume and time pressure. The scan takes 2 seconds; the wrong-patient error it prevents may result in catastrophic harm.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg7",
      baseQuestion: "A critical laboratory value (serum potassium of 6.8 mEq/L) is called to the nursing unit by the lab at 2:47 AM. The unit secretary answers the phone, hears the value, and writes it on a note. She does not call the patient's nurse because 'it's 3 AM and I didn't want to wake anyone up.' The nurse discovers the critical value at 6:30 AM during chart review. What NPG requirement was violated?",
      baseOptions: [
        "No NPG violation - the lab fulfilled its reporting obligation by calling the unit, and documentation of the value satisfies the standard",
        "Critical value reporting requires that the receiving individual ensure the result reaches a licensed caregiver who can act on it - the unit secretary receiving the call and not passing it to the nurse represents a failure in the critical value notification chain. Additionally, the secretary's decision not to notify the nurse due to the time of day reflects a misunderstanding of what 'critical' means",
        "The violation is limited to documentation - the critical value should have been entered in the electronic record immediately upon receipt",
        "The lab bears responsibility for the failure - they should have called back to verify the result reached a licensed provider"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Critical value notification requires that the result reach a licensed clinician who can evaluate and act on it. Having a unit secretary receive the value and not relay it to nursing is a complete failure of the critical value communication chain. A potassium of 6.8 mEq/L is a life-threatening hyperkalemia that requires immediate intervention - a 3.75-hour delay in notification represents a serious patient safety failure that could have resulted in fatal arrhythmia.",
      baseXp: 20,
      followUps: [
        {
          question: "An audit reveals that the unit secretary receiving calls is a common practice across all overnight shifts. The unit nurse manager says 'the secretary always writes values down and puts them in the nurse's box.' What must change?",
          options: [
            "Implement a policy that unit secretaries must wake the nurse immediately for critical values - the current process with improved education is sufficient",
            "Critical values must be communicated directly to a licensed nurse or physician - not deposited in a nurse's physical mailbox. The process must be redesigned so that critical lab results can only be received by a licensed provider, with verification that the provider acknowledged the value and will take action. The nurse 'box' process means critical values are waiting for the nurse to check their inbox, not being acted upon in real time",
            "The process is acceptable if the secretary is trained to recognize which values are 'critical' and which can wait until morning",
            "Add a two-step process where the secretary wakes the charge nurse who then determines whether to notify the bedside nurse"
          ],
          correctIndex: 1,
          explanation: "Physical or electronic mailbox receipt of critical values defeats the purpose of the critical value system. A value placed in a nurse's box does not produce action - it produces passive availability of a result that may not be seen for hours. Critical value communication requires active handoff to a provider who acknowledges the result and accepts responsibility for action. This means direct verbal communication with the licensed provider, confirmed by read-back.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg8",
      baseQuestion: "A universal protocol time-out is performed before a laparoscopic cholecystectomy. The circulating nurse leads the time-out, confirms the patient's name and date of birth, confirms 'cholecystectomy,' confirms the site as 'abdomen,' and confirms the antibiotic was given. The surgeon does not respond verbally - they are reviewing images. After the procedure, it is noted that the consent form said 'laparoscopic cholecystectomy with possible open conversion' but the surgeon performed an open cholecystectomy without first attempting laparoscopic. What time-out failure contributed?",
      baseOptions: [
        "No time-out failure - the time-out confirmed the correct procedure and the surgeon's clinical decision to proceed open is a separate clinical judgment",
        "The time-out was incomplete - the surgeon did not actively participate (no verbal response), which means the time-out verification was not truly performed as a team process. Additionally, the time-out did not confirm the specific operative approach, which was clinically relevant given the consent language. A passive time-out where one team member responds for all does not satisfy the active-verification standard",
        "The time-out failure was the site description - 'abdomen' is not specific enough; the time-out should have confirmed right versus left side",
        "The consent form language is the issue - the operative approach should not vary based on intraoperative decisions without a separate re-consent process"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The Universal Protocol time-out requires active participation from all team members - including the operating surgeon. A time-out where the surgeon does not respond verbally is not a valid team verification. Additionally, when consent includes specific approach language ('laparoscopic with possible open conversion'), the time-out should confirm that the planned approach aligns with the consent. A rubber-stamp time-out provides false assurance.",
      baseXp: 20,
      followUps: [
        {
          question: "A quality review of 60 days of operative time-out records shows that in 34% of cases, the surgeon's participation was documented as 'present' but no surgeon verbal confirmation was documented. What does this pattern indicate?",
          options: [
            "Acceptable documentation practice - surgeon presence implies participation",
            "A systematic time-out performance gap - 'present' without documented verbal confirmation strongly suggests that time-outs in this ORs are being documented as completed without actually verifying active surgeon engagement. This is a safety system failure where a required process is being performed as a compliance ritual rather than as a real-time safety check",
            "A documentation deficiency only - training the circulating nurses to document 'surgeon confirmed' will resolve the finding",
            "The pattern reflects normal OR culture - surgeons are typically focused on procedure preparation during time-outs and presence is the standard expected"
          ],
          correctIndex: 1,
          explanation: "Documentation of surgeon 'presence' as a proxy for participation in 34% of cases indicates that the time-out process has become performative rather than substantive. The circulating nurse is completing the form without the time-out having functioned as a team verification. This is the most dangerous form of compliance failure - the record says the safety check occurred, but the safety check did not actually take place. Real corrective action requires addressing the team culture and the definition of what constitutes participation, not just improving documentation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg9",
      baseQuestion: "A hospital implements a fall prevention program that includes bed alarms for all patients scored as high risk on the Morse Fall Scale. A quality audit shows that 41% of high-risk patients have a bed alarm in place, but 39% of that group still fell within 72 hours of the alarm being activated. What does this data reveal about the fall prevention program?",
      baseOptions: [
        "Bed alarms are working - the fall rate would be higher without them",
        "High fall rates despite high bed alarm utilization indicate that the program is over-relying on technology. Bed alarms alert staff after a patient begins to rise, but they do not prevent the fall - they depend on staff response time being faster than the patient's fall trajectory. A comprehensive fall prevention program must include individualized risk-factor mitigation, hourly rounding, toileting protocols, medication review, and environmental modification - not just alarm placement",
        "The bed alarm threshold sensitivity needs adjustment - higher sensitivity will reduce fall rates",
        "The data indicates that the Morse Fall Scale is not accurately identifying high-risk patients - a more sensitive screening tool would improve outcomes"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Bed alarms are a reactive technology - they notify staff that a fall may be starting, not that it has been prevented. A high utilization rate combined with a high fall rate in alarm-equipped patients indicates the program is not preventing falls; it is detecting attempts. Evidence for bed alarm effectiveness in reducing fall rates is weak. The program must shift toward individualized fall risk mitigation - identifying the specific reason each patient is at risk and targeting that reason directly.",
      baseXp: 20,
      followUps: [
        {
          question: "The quality team proposes eliminating bed alarms and replacing them with a structured hourly rounding protocol combined with individualized fall risk interventions (toileting schedules, medication reviews, physical therapy referrals). The nursing staff objects, saying 'without alarms, we'll have no warning when patients try to get up.' How should leadership evaluate this transition?",
          options: [
            "Support the objection - bed alarms provide a safety net that should not be removed without evidence that the replacement program is effective",
            "Present the evidence: hourly rounding has stronger evidence for fall prevention than bed alarms. The 'warning' function of bed alarms is often insufficient because response time exceeds fall trajectory time. If the proposed replacement program includes structured individualized risk mitigation and hourly rounding on a tested protocol, the transition is evidence-supported. Pilot the program on one unit with outcome tracking before full implementation",
            "Keep bed alarms for high-fall-risk patients while adding hourly rounding - a combined approach is optimal",
            "The decision should be referred to the medical staff executive committee - fall prevention program changes require physician approval"
          ],
          correctIndex: 1,
          explanation: "Evidence-based fall prevention programs show that individualized risk mitigation plus structured rounding outperforms alarm-based approaches for sustained fall rate reduction. Leadership should evaluate the proposed change using the existing evidence base, design a pilot with outcome measurement, and make the decision based on data. The nursing staff's concern about 'no warning' is a legitimate psychological concern that should be addressed through evidence presentation, not used to preserve a less effective intervention.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg10",
      baseQuestion: "A central line bundle compliance audit shows 97% compliance across all five elements for new PICC placements. Despite this, the CLABSI rate has not declined over 6 months. What should the quality team investigate?",
      baseOptions: [
        "The audit data - 97% compliance is near-perfect and the CLABSI rate must be attributable to patient factors outside the bundle's control",
        "Maintenance bundle compliance - CLABSI risk continues throughout the catheter's dwell time. High insertion bundle compliance reduces insertion-related infections but does not address hub access frequency, dressing change compliance, and need reassessment. If the maintenance bundle is being neglected while insertion is measured, the audit is capturing only part of the prevention picture",
        "The NHSN benchmark - the current CLABSI definition may include events that are not truly related to central lines",
        "PICC placement team training - 97% compliance by a dedicated team may mask compliance gaps when non-team members perform line placements"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "CLABSI prevention requires both insertion and maintenance bundle compliance. A 97% insertion bundle score with a flat CLABSI rate suggests the maintenance bundle - daily need assessment, dressing change compliance, hub scrub technique, and tubing change frequency - may not be receiving the same scrutiny. A high insertion compliance score combined with poor or unmeasured maintenance compliance is a common pattern in programs where the CLABSI rate fails to improve.",
      baseXp: 15,
      followUps: [
        {
          question: "A direct observation of maintenance practices reveals that hub disinfection ('scrub the hub') takes an average of 4 seconds, when the recommended minimum friction scrub time is 15 seconds. Staff say 'we're very quick - we scrub every hub.' What does this reveal?",
          options: [
            "The 4-second scrub reflects efficient technique - friction time is less important than the action of scrubbing",
            "A documented compliance gap that is invisible to self-report audits - staff believe they are compliant ('we scrub every hub') while the actual technique fails to meet minimum requirements. A 4-second scrub does not achieve the friction duration required for adequate disinfection of hub organisms. The maintenance bundle compliance figure derived from self-report or documentation review would show 100% hub scrub compliance while actual technique compliance is 0%",
            "The timing standard is overly conservative - 4 seconds of friction scrub with an alcohol swab is clinically equivalent to 15 seconds",
            "The finding is relevant only for needleless connector types with biofilm-prone surfaces - standard luer-lock hubs are adequately cleaned in 4 seconds"
          ],
          correctIndex: 1,
          explanation: "The 4-second versus 15-second scrub finding reveals the critical difference between documentation compliance and behavioral compliance. Staff who self-report or have their hub access documented as 'scrubbed' may have technically performed the action while failing to achieve the minimum duration for disinfection effectiveness. Direct observation is the only measurement method that captures technique quality. The CLABSI program must include direct observation of maintenance technique, not just documentation audits.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg11",
      baseQuestion: "An inpatient psychiatric unit uses a paper-based method to document suicide risk screening - completed paper forms placed in a physical chart. A safety review reveals that three patients who transferred from the ED to the inpatient unit had positive suicide screens documented in the ED paper record, but the inpatient team was unaware of the results because the ED paper was not reviewed before admission. What NPG 8 failure occurred?",
      baseOptions: [
        "NPG 8 violation by the ED - the ED failed to communicate the positive screen to the receiving unit",
        "A handoff communication failure that intersects with NPG 8 - positive suicide screens must be communicated at care transitions, and the paper-based system created an information gap at the ED-to-inpatient handoff. Both the sending and receiving teams share responsibility for ensuring critical safety information transfers across care boundaries",
        "No NPG violation - NPG 8 requires screening in each care setting independently; the ED screen is not transferable to the inpatient setting",
        "A technology failure only - moving to electronic documentation would prevent the paper record review gap"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NPG 8 requires that suicide risk information be communicated across care transitions. A positive ED screen that is unknown to the receiving inpatient team means the inpatient team cannot implement the appropriate care plan based on current risk information. This is both a handoff failure and a systems failure - the paper-based process had no mechanism to ensure critical safety information accompanied the patient from the ED to the floor. Electronic documentation is one solution; a structured verbal or written handoff protocol that explicitly includes suicide risk status is another.",
      baseXp: 20,
      followUps: [
        {
          question: "The facility proposes a checklist-based ED-to-inpatient handoff tool that includes 'positive suicide risk screen?' as an item. Implementation planning reveals that ED nurses complete an average of 12 handoffs per shift with varying times available for handoff communication. What design considerations will maximize this tool's effectiveness?",
          options: [
            "Make the checklist as comprehensive as possible - more items ensure more information is transferred",
            "Design for reliability under time pressure - the most effective handoffs are structured, brief, and include only critical items that change care decisions. Suicide risk status is high-priority enough to warrant a specific handoff field in the electronic transfer documentation AND a verbal confirmation requirement. A suicide risk checklist item buried in a 30-item comprehensive handoff tool will be skipped under time pressure",
            "Require the ED attending to complete all handoffs directly with the inpatient attending - nurse-to-nurse handoffs are insufficient for complex patients",
            "Post the checklist at the nursing station - environmental reminders improve compliance without adding process burden"
          ],
          correctIndex: 1,
          explanation: "Handoff tool effectiveness is inversely proportional to length under time pressure. Critical items like suicide risk status should be prominent, required, and specifically confirmed - not embedded in a comprehensive checklist that staff can complete by rote. The ideal design makes the suicide risk status a mandatory field in the electronic transfer documentation that generates an alert if not completed, and includes it as a required verbal handoff element at the top of the structured communication, not buried in the middle.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg12",
      baseQuestion: "A hospital conducts an anticoagulation safety review and finds that 22% of patients on therapeutic anticoagulation had no documented baseline INR or anti-Xa level before the first dose was given. What is the patient safety concern?",
      baseOptions: [
        "Documentation only - the laboratory values were likely checked but not recorded in the medication administration record",
        "A clinical safety gap - baseline coagulation status before initiating anticoagulation therapy affects dosing decisions and establishes a reference point for monitoring therapy. Without baseline values, an elevated baseline INR (from liver disease, malnutrition, or drug interaction) could lead to dangerous supratherapeutic anticoagulation at doses that would be therapeutic in a patient with normal baseline function",
        "The concern applies only to warfarin, not to heparin or direct oral anticoagulants",
        "Baseline laboratory values are not required before initiating anticoagulation therapy in emergency or urgent clinical situations"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Pre-anticoagulation baseline laboratory assessment is a clinical standard because it identifies patients with existing coagulation abnormalities that affect therapeutic dosing. A patient with an INR of 1.8 at baseline needs different management than one with an INR of 1.0. A 22% rate of missing baseline values indicates a systemic workflow gap in the anticoagulation initiation process. This is a clinical safety issue, not just a documentation problem.",
      baseXp: 15,
      followUps: [
        {
          question: "To address the gap, the pharmacy proposes a clinical decision support alert that fires when an anticoagulation order is entered without a baseline coagulation result in the last 24 hours. The alert says 'Baseline coagulation studies recommended before anticoagulation initiation - click to dismiss or order labs.' What is the expected effectiveness of this alert design?",
          options: [
            "High - the alert directly addresses the gap and requires a conscious action to dismiss",
            "Moderate at best - a dismissible single-click alert for a recommendation will likely have a high override rate. For this safety gap, a more effective design would require the prescriber to either confirm that baseline labs have been ordered (with a required order entry field), acknowledge a specific reason for bypassing baseline assessment, or trigger an automatic baseline lab order at the time of anticoagulation order entry. The current alert design creates awareness without creating an action requirement",
            "Low only if the alert fires too frequently - targeting the alert to specific anticoagulants will improve specificity and reduce override rates",
            "High - 'recommended' language is clinically appropriate and providers will act on recommendations when they are relevant to their patient"
          ],
          correctIndex: 1,
          explanation: "Alert design determines behavioral impact. A 'recommended - click to dismiss' alert will have high override rates because it requires no specific action, provides an easy dismissal pathway, and creates no accountability for the override decision. More effective designs integrate the safety check into the workflow: auto-ordering the labs, requiring confirmation of receipt of existing results, or creating a hard stop that requires documentation of clinical rationale for bypassing baseline assessment.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg13",
      baseQuestion: "A hospital conducts a wrong-patient-wrong-specimen event analysis and finds three cases in the past year where blood specimens were labeled with another patient's identifiers. All three cases occurred when blood was drawn from two patients in the same room simultaneously by one phlebotomist. What system failure does this represent?",
      baseOptions: [
        "Individual phlebotomist error - drawing blood from two patients simultaneously is a known risk and phlebotomists should perform one patient at a time",
        "Both an individual practice problem and a systemic failure - if the facility has no policy prohibiting simultaneous blood draws from multiple patients by one collector, the system has not made the correct behavior the default. The risk of labeling a specimen at the bedside with the wrong patient's identifiers is highest when multiple patients' supplies, tubes, and labels are in use simultaneously",
        "A laboratory system failure - the laboratory should have rejected specimens with discrepant labeling",
        "Limited to same-room patients - the labeling error risk does not apply when patients are in separate rooms"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Simultaneous collection from multiple patients is a recognized wrong-specimen risk factor. The correct practice is to complete one patient's full collection - including labeling at the bedside before leaving the patient - before beginning the next patient's collection. A facility without a policy prohibiting concurrent multi-patient collection has not established this standard. The three-event cluster in one-year is a sentinel signal that the practice is occurring and generating risk.",
      baseXp: 20,
      followUps: [
        {
          question: "The phlebotomy supervisor proposes a policy requiring that all specimens be labeled at the patient's bedside immediately after collection, before the phlebotomist leaves the room. The transport team objects, saying this slows collection throughput. How should this conflict be resolved?",
          options: [
            "Side with transport - throughput is a quality metric and policy changes that reduce throughput require evidence of direct benefit before implementation",
            "Implement the bedside-labeling policy - bedside labeling is the foundational safety standard for specimen identification, endorsed by CLSI and required by JC NPG. The risk of a wrong-patient specimen result leading to incorrect treatment, missed diagnosis, or unnecessary intervention far exceeds the throughput impact of bedside labeling. Throughput concerns should be addressed by optimizing the labeling workflow, not by deferring labeling to a location where the patient-specimen association cannot be verified",
            "Compromise by requiring bedside labeling only for patients in shared rooms and allowing delayed labeling for single-occupancy rooms",
            "Pilot the policy during low-volume periods - implementing during peak periods risks unacceptable throughput impact"
          ],
          correctIndex: 1,
          explanation: "Bedside labeling immediately after collection is not optional - it is the safety standard that prevents wrong-patient specimen errors. The patient-specimen association can only be reliably maintained at the point of collection, in the presence of the patient, using the patient's wristband as the verification source. Post-collection labeling at a cart or laboratory station introduces the exact environment where wrong-patient labeling errors occur. Throughput concerns are real but secondary to a fundamental specimen safety standard.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg14",
      baseQuestion: "An ambulatory surgery center's blood transfusion process requires two-nurse verification of the blood product and patient identification before administration. A quality audit shows that in 18% of transfusion events, the second verifying nurse signed the transfusion form without being present at the bedside - they reviewed the form at the nursing station. Is this practice compliant?",
      baseOptions: [
        "Compliant - the second nurse reviewed the product information and their signature documents verification",
        "Non-compliant - two-nurse blood product verification requires that both nurses independently verify the product against the patient's wristband at the patient's bedside. A signature obtained without bedside presence does not constitute verification - the second nurse cannot confirm the patient identification or the physical blood product without being present",
        "Compliant for blood type verification but not for patient ID - the second nurse must be present only for the patient identification component",
        "Partially compliant - the nursing station review is acceptable when the charge nurse is the second verifier due to charge nurse oversight authority"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Blood product verification is a two-person, bedside process. Both verifiers must independently verify: (1) the patient's two identifiers against the wristband, (2) the blood product label against the crossmatch slip and the patient's wristband, and (3) the blood type, Rh factor, and expiration. A nurse who signs without being present cannot perform these verifications - they are signing without knowledge. Remote verification is not verification; it is falsification of the verification record.",
      baseXp: 20,
      followUps: [
        {
          question: "The nursing director argues that requiring two nurses at the bedside simultaneously is operationally difficult on a one-nurse unit. What alternatives satisfy the two-person verification requirement?",
          options: [
            "Allow the single nurse to perform verification alone with a checklist - systematic completion of each verification element compensates for the absence of a second verifier",
            "Two-person verification remains a non-negotiable requirement for blood product administration. Operational solutions include: cross-unit verification (calling a nurse from another unit), verification by a second licensed staff member present (physician, CRNA, pharmacist with appropriate training), or technology-based blood verification systems (electronic crossmatch verification systems that provide a validated patient-product match). Single-nurse units must identify their verification resource before blood administration, not at the moment of administration",
            "Physician-only verification is acceptable in single-nurse units - physician authority substitutes for two-nurse verification",
            "Defer transfusion administration until a second nurse becomes available - this is the only compliant option and units must accept the delay"
          ],
          correctIndex: 1,
          explanation: "Two-person blood product verification is a safety standard designed to prevent ABO-incompatible transfusions, which are frequently fatal. Operational constraints cannot eliminate this requirement - they must be addressed through alternative verification models. Facilities that perform blood transfusions must proactively identify how they will achieve two-person verification in all staffing scenarios, including nights, weekends, and low-census periods. 'We only have one nurse' is a staffing plan problem, not a reason to eliminate a life-safety verification requirement.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg15",
      baseQuestion: "A hospital's medication reconciliation process reconciles home medications on admission but has no formal process for reconciliation at internal care transitions (ICU to medical-surgical floor, surgery to post-op unit). Three patients in one quarter experienced medication continuation errors (held medications not restarted, new duplicates created) at these internal transitions. What does this reveal?",
      baseOptions: [
        "Individual prescribing errors - physicians are responsible for reviewing all medications at each care transition",
        "A systemic gap in the reconciliation program - NPG 3 / formerly NPSG.03.06.01 requires medication reconciliation not only at admission and discharge but also at all internal care transitions where medication changes could occur. A process that only reconciles at admission leaves internal transitions as an unprotected step where omissions and duplications accumulate",
        "An EHR failure - the medication list should carry forward automatically across care transitions without requiring manual reconciliation",
        "A nursing failure - medication reconciliation at internal transfers is a nursing documentation responsibility, not a physician prescribing responsibility"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Medication reconciliation at internal transitions is a frequently overlooked NPG requirement. The admission reconciliation captures home medications; internal transfer reconciliation ensures that medications appropriately held for a procedure are restarted, newly prescribed medications during the prior stay are reviewed, and no duplicates or omissions exist at the point of transfer. ICU-to-floor transitions are particularly high-risk because of the complexity of medication regimens and the change in provider teams.",
      baseXp: 15,
      followUps: [
        {
          question: "The pharmacy proposes a pharmacist-led transfer reconciliation process where a pharmacist reviews all active medications and makes recommendations to the receiving team within 4 hours of transfer. The receiving physician team expresses concern that pharmacist recommendations create a delay. What is the evidence basis for the proposed process?",
          options: [
            "Pharmacist-led reconciliation is not evidence-based for internal transfers - the focus should be on physician awareness of transfer-of-care responsibilities",
            "Pharmacist-led reconciliation at transitions has strong evidence for improving reconciliation accuracy and reducing medication errors. The 4-hour window is a reasonable starting point, though higher-risk transfers (post-operative, ICU to floor) may warrant a tighter timeline. The physician concern about delay is addressed by designing the process as a recommendation model - the pharmacist identifies discrepancies and brings them to physician attention, accelerating rather than delaying resolution",
            "Accept the 4-hour delay concern - medication errors from transition can be addressed through increased nursing monitoring rather than a pharmacist-intensive reconciliation process",
            "Pharmacist involvement should be limited to high-alert medications - standard medications can be self-reconciled by the receiving physician"
          ],
          correctIndex: 1,
          explanation: "Pharmacist-led transfer reconciliation is evidence-based and improves reconciliation accuracy compared to physician-only processes. Physicians at the point of care often lack the time and medication-specific knowledge to efficiently review complex inpatient regimens for omissions and duplications. The pharmacist recommendation model accelerates resolution by doing the work of comparison and flagging discrepancies - the physician then confirms or adjusts. This is additive to physician authority, not a replacement of it.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg16",
      baseQuestion: "A surgical patient has an allergy to penicillin documented as 'anaphylaxis' in the EHR. The surgeon orders cefazolin for surgical prophylaxis without reviewing the allergy. The pharmacist verifies the allergy and contacts the surgeon to discuss the cephalosporin-penicillin cross-reactivity. The surgeon says 'the cross-reactivity is only 1-2% - give it.' What is the correct approach?",
      baseOptions: [
        "Administer the cefazolin - the surgeon has clinical authority and the cross-reactivity risk is low",
        "The pharmacist must not dispense without a clinical evaluation and documented decision - a patient with documented penicillin anaphylaxis (a severe reaction type) requires assessment by the clinical team before administration of any cephalosporin. The surgeon's verbal statement does not constitute adequate clinical evaluation. An allergy consult or at minimum a documented risk-benefit decision with alternative antibiotic consideration should occur",
        "Administer the cefazolin with anaphylaxis medications at the bedside as a precaution - preparedness reduces the risk to acceptable levels",
        "The pharmacist should accept the surgeon's clinical decision - prescriber authority supersedes pharmacist safety concerns for decisions within the prescriber's area of expertise"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Penicillin anaphylaxis is a severe, potentially fatal allergic reaction. Current evidence shows that documented anaphylactic penicillin allergy patients have a higher risk of cephalosporin reaction than those with non-anaphylactic reactions. A 'give it anyway' verbal response from the surgeon without a formal evaluation, alternative consideration, or allergy consultation is not an adequate clinical decision for a patient who has had anaphylaxis. The pharmacist has a professional obligation to escalate this decision before dispensing.",
      baseXp: 20,
      followUps: [
        {
          question: "The pharmacist escalates to the chief of surgery, who says 'the surgeon is right about the cross-reactivity - dispense it.' The pharmacist is still uncomfortable. What is the pharmacist's final obligation?",
          options: [
            "Dispense the cefazolin - escalation to the chief of surgery has fulfilled the pharmacist's professional duty",
            "Document the clinical decision chain - the pharmacist's escalation attempt, the responses received, and their professional concern - and consult with the medical director of pharmacy before dispensing. If all escalation pathways support the decision to administer, the pharmacist may dispense but must ensure the clinical team is aware of the allergy and monitoring is planned. The pharmacist should also suggest allergy evaluation or a test dose protocol if available. Ultimately, after full escalation and documentation, the clinical responsibility rests with the prescribing team",
            "Refuse to dispense - a pharmacist's clinical judgment overrides prescriber authority for high-risk allergy situations",
            "Dispense and place an allergy monitoring note in the chart - documentation of the concern discharges the pharmacist's professional duty"
          ],
          correctIndex: 1,
          explanation: "Professional pharmacist responsibility includes escalation to appropriate authority levels and complete documentation. After full escalation, the clinical decision rests with the prescribing physician team - the pharmacist is not the final authority on clinical risk-benefit decisions. However, the pharmacist must ensure the decision chain is documented (not just verbal), that the bedside team is aware of the allergy and monitoring requirements, and that the pharmacist's concern is part of the medical record. This protects both patient safety and professional integrity.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg17",
      baseQuestion: "An ED physician performs an informed consent discussion with a patient for a procedure and documents 'consent obtained - patient agrees.' The procedure goes poorly and the patient states they were not informed of the specific complication that occurred. Review shows the consent form is blank except for the patient's signature. What NPG 13 / formerly NPSG patient communication requirement was not met?",
      baseOptions: [
        "NPG 13 does not address informed consent - this is a medical-legal standard, not an NPG requirement",
        "Informed consent documentation must reflect what was discussed - risks, benefits, alternatives, and the patient's questions and understanding. A consent form with only a signature but no documentation of what was disclosed does not demonstrate that meaningful informed consent occurred. NPG 13 / formerly NPSG communication standards require that patient education and information exchange be documented in a way that demonstrates understanding",
        "The documentation standard was met - a patient signature demonstrates consent was obtained",
        "The requirement was met by the physician's note 'consent obtained' - verbal documentation in the medical record satisfies the standard"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Informed consent documentation must reflect the content of the consent discussion - not just that the conversation occurred. A blank consent form with a signature demonstrates that a patient signed a form, not that they were informed. JC and NPG communication standards require documentation that demonstrates the substance of the education and the patient's expressed understanding. 'Patient agrees' is not a record of what they agreed to or what they were told.",
      baseXp: 15,
      followUps: [
        {
          question: "The hospital's consent forms are preprinted with generic procedure names and a list of generic risks (bleeding, infection, anesthesia complications). The physician circles the applicable risks and the patient signs. Does this preprinted approach satisfy the informed consent documentation requirement?",
          options: [
            "Yes - preprinted standardized risk lists are a recognized efficient consent documentation method",
            "Partially - preprinted lists that are specifically completed for the individual procedure and patient provide a better documentation foundation than a blank form, but they do not capture patient-specific risks, the patient's questions and responses, alternative treatment discussions, or procedure-specific complications beyond the generic list. A comprehensive consent documentation should supplement the preprinted form with patient-specific additions",
            "No - only handwritten procedure-specific consent forms meet the documentation standard",
            "Yes - preprinted consent forms are the industry standard and satisfy all consent documentation requirements when properly completed with the patient's signature"
          ],
          correctIndex: 1,
          explanation: "Preprinted consent forms that are specifically annotated for the procedure and patient are a reasonable baseline for consent documentation efficiency. However, they must be completed - risks circled, patient questions noted, specific complications relevant to this patient documented. A preprinted form that is simply handed to a patient to sign without completion of the patient-specific elements is functionally equivalent to a blank form. The standard requires evidence that individualized information was communicated.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-npsg18",
      baseQuestion: "A hospital's venous thromboembolism (VTE) prevention program shows a VTE prophylaxis order rate of 94% for appropriate patients. However, the VTE event rate has not decreased. A pharmacist investigates and finds that 31% of ordered VTE prophylaxis was administered more than 6 hours late or not administered at all. What does this reveal about the program's effectiveness measurement?",
      baseOptions: [
        "The pharmacist's finding is unexpected - a 94% order rate should translate to high administration rates",
        "The program was measuring order compliance, not administration compliance - a fundamental measurement error. An ordered medication that is not administered provides no patient protection. The effective VTE prevention rate is the proportion of patients who received the ordered prophylaxis on time, not the proportion who had an order written. The measurement gap allowed the program to report 'success' while a third of patients were unprotected",
        "The 31% administration gap is a nursing performance issue - pharmacy should report each missed dose to nursing leadership",
        "The VTE event rate decline lag is expected - VTE prevention programs typically take 12-18 months to show measurable outcome improvement"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Measuring process at the wrong point in the care chain produces misleading data. Ordering VTE prophylaxis is a necessary but insufficient step - the patient is protected only when the medication is administered as ordered and on time. Programs that measure ordering rates and report high compliance are measuring the physician's behavior, not the patient's protection. The complete process measure requires tracking: ordered → dispensed → administered on schedule → patient remained protected during the at-risk period.",
      baseXp: 20,
      followUps: [
        {
          question: "Investigation of missed doses reveals three contributing causes: (1) medication not available in ADC when due; (2) patients refusing injections; (3) nurses not administering due to incorrect hold parameters. Which of these causes requires a different type of intervention and what is it?",
          options: [
            "All three require the same intervention - nursing education on VTE prophylaxis importance",
            "Each cause requires a different intervention: (1) ADC availability requires a pharmacy stocking solution; (2) patient refusal requires structured patient education about VTE risk and prophylaxis benefits - including a standardized response protocol for nurses when patients refuse; (3) incorrect hold parameters require clinical decision support that clearly defines when prophylaxis should and should not be held, with a nurse-pharmacist consultation pathway for borderline cases. Treating all three with education alone will fix the third cause but not the first two",
            "Causes 1 and 3 are system problems; cause 2 is a patient autonomy issue that cannot be addressed through system interventions",
            "Cause 3 is the highest priority since incorrect clinical decisions represent the most serious potential harm"
          ],
          correctIndex: 1,
          explanation: "Effective problem-solving requires root cause classification - different causes require different solutions. Supply chain failures (cause 1) require supply chain fixes. Patient behavior (cause 2) requires patient-focused education and communication. Clinical decision uncertainty (cause 3) requires clinical decision support tools. When a quality team applies a single intervention (nursing education) to multiple root causes, the intervention will only address the cause that education is designed to fix.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg19",
      baseQuestion: "A nurse performs a structured handoff at shift change using the facility's approved SBAR format. The outgoing nurse tells the incoming nurse: 'Mr. Chen in 412 is stable - he's on warfarin for AFib, his INR was 2.6 this morning, and he's due for his 8 PM dose. No concerns.' The incoming nurse later discovers that Mr. Chen's morning INR result actually showed a critical value of 4.9, which was corrected in the chart 2 hours after initial entry due to a specimen labeling issue. The 2.6 was the original erroneous value. What handoff process failure occurred?",
      baseOptions: [
        "The handoff was adequate - the outgoing nurse communicated what they believed to be accurate based on available information",
        "Critical result updates and corrections must be incorporated into the active patient management and communicated at handoff - if the correct INR of 4.9 was in the chart 2 hours before shift change, the outgoing nurse failed to verify current information before handoff. Handing off based on a superseded value with a critical medication dose due represents a significant patient safety risk",
        "The failure is the laboratory's - the specimen labeling error that required correction should have been flagged to the nursing team directly",
        "The failure is an EHR design problem - result correction workflows should alert the current nursing user when a value they have viewed is superseded"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A handoff based on outdated or superseded critical values creates patient harm risk - in this case, the patient may receive a warfarin dose despite a supratherapeutic INR of 4.9. Pre-handoff preparation must include a current chart review that verifies the most recent values, not those reviewed hours earlier. Result corrections in the EHR - especially for critical values - must trigger active notification to the current care team, not just passive chart updates.",
      baseXp: 20,
      followUps: [
        {
          question: "To prevent similar events, the quality team proposes two interventions: (1) a requirement that nurses review all active medication orders and current labs within 30 minutes of shift start, and (2) an EHR alert that notifies the current nurse when a result they have previously viewed is corrected or superseded. Which intervention is more effective and why?",
          options: [
            "Intervention 1 is more effective - active nurse review is more reliable than EHR alerts, which are subject to alert fatigue",
            "Intervention 2 is more effective in isolation - a real-time system notification that pushes superseded-result alerts to the current nurse requires no behavior change and acts at the precise moment a critical update is made",
            "Both interventions are needed - intervention 2 provides immediate point-of-correction notification that intervention 1 cannot guarantee (the nurse may review labs before the correction occurs); intervention 1 provides a safety net for other information changes that would not trigger a correction alert. Together they provide redundant coverage across different failure modes",
            "Neither intervention is effective - handoff failures require cultural change, not process or technology interventions"
          ],
          correctIndex: 2,
          explanation: "Complementary interventions covering different failure modes are more effective than any single intervention. Real-time result correction alerts (intervention 2) catch the specific scenario where a value changes after the nurse has already reviewed it - which is precisely what occurred in this event. Structured post-handoff review (intervention 1) catches any changes that occurred before the nurse took report. Together they provide overlapping protection. Choosing only one leaves a gap that the other would have covered.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-npsg20",
      baseQuestion: "A hospital tracks its hand hygiene compliance rate using electronic dispenser sensors that record dispenser activation counts and estimate compliance based on room entry events. The reported rate is 88%. However, a concurrent direct observation audit shows 61% compliance. What does this discrepancy reveal?",
      baseOptions: [
        "The direct observation method is less reliable - observers may cause Hawthorne effect that artificially lowers observed rates",
        "The sensor-based methodology overcounts compliance - dispenser activations that do not correspond to patient contact moments (cleaning, non-clinical use), room entries not associated with patient care, and the inability to track whether gel was applied to both hands for adequate duration all mean sensor data systematically overestimates actual hand hygiene compliance",
        "The discrepancy is within statistical tolerance - an 88% reported versus 61% observed rate is expected variance given different measurement methodologies",
        "The direct observation data indicates observer bias - the 27-point gap suggests observers are scoring hand hygiene more conservatively than the standard requires"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Electronic dispenser sensor systems measure dispenser activations, not hand hygiene compliance. Multiple sources of overestimation exist: non-clinical dispenser uses, room entries not associated with patient contact, inadequate gel volume, and incomplete hand coverage. A 27-point gap between sensor-reported and observer-reported rates is consistent with known limitations of dispenser-based monitoring. Direct observation, while more labor-intensive, remains the more accurate compliance measurement method.",
      baseXp: 15,
      followUps: [
        {
          question: "Leadership uses the 88% sensor-reported rate in their JC accreditation self-assessment. The quality department argues that the 61% direct observation rate is the more accurate figure. How should the reporting discrepancy be resolved?",
          options: [
            "Use the 88% rate - it is based on objective electronic data and requires no subjective observer interpretation",
            "Report the measurement methodology and both data points - transparency about measurement approach allows JC to evaluate the program's actual performance. Using only the sensor-reported rate without acknowledging the direct observation data misrepresents program performance and potentially masks a patient safety gap. The facility should also develop a plan to align its compliance monitoring methodology with its improvement target",
            "Use the average of the two rates - 74.5% is a balanced representation of actual compliance",
            "Report the direct observation rate and stop using sensor data - conflicting metrics create program confusion"
          ],
          correctIndex: 1,
          explanation: "Reporting only the more favorable metric from a known methodology with significant limitations - while a less favorable but more accurate measurement is available - is not transparent quality reporting. JC expects honest self-assessment. The resolution is to report both methodologies, acknowledge the discrepancy, explain its sources, and commit to a measurement improvement plan. The direct observation data at 61% is the more actionable figure for improvement planning.",
          expertXp: 25
        }
      ]
    }
  ]
};
