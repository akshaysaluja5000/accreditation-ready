with open('shared/questions.ts', 'r') as f:
    content = f.read()

def replace_questions(content, first_id, end_marker, new_block):
    q_start = content.find(f'    questions: [\n      {{\n        id: "{first_id}"')
    q_end = content.find(end_marker, q_start)
    if q_start == -1 or q_end == -1:
        print(f"FAIL: markers not found for {first_id} (start={q_start}, end={q_end})")
        return content
    out = content[:q_start] + new_block + content[q_end:]
    print(f"OK {first_id}: {q_end - q_start} chars → {len(new_block)} chars")
    return out

def replace_questions_last(content, first_id, new_block):
    q_start = content.find(f'    questions: [\n      {{\n        id: "{first_id}"')
    # For the last section, find the closing of the array
    q_end = content.find('\n    ],\n  },\n];\n', q_start)
    if q_start == -1 or q_end == -1:
        print(f"FAIL: markers not found for {first_id} (start={q_start}, end={q_end})")
        return content
    out = content[:q_start] + new_block + content[q_end:]
    print(f"OK {first_id} (last): {q_end - q_start} chars → {len(new_block)} chars")
    return out

# ─── EMERGENCY MANAGEMENT (em1-em20) ─────────────────────────────────────────
new_em = '''    questions: [
      {
        id: "em1",
        question: "A surveyor stops your OR nurse and asks: 'What would you do if the hospital declared a mass casualty event right now?' The nurse says 'I'd wait for my charge nurse to tell me.' Is this adequate?",
        options: [
          "Yes. Following the chain of command is the correct first step in any emergency response.",
          "No. The nurse should know their specific MCI role and duties without waiting to be told.",
          "Yes. Frontline nurses are not expected to have independent emergency responsibilities.",
          "No. The nurse should immediately call the house supervisor directly, bypassing the charge nurse."
        ],
        correctIndex: 1,
        explanation: "Frontline staff must know their specific role in the Emergency Operations Plan. 'Wait for my charge nurse' indicates the staff member does not know their duties during a declared emergency — a training compliance finding under EM.02.02.01. Surveyors expect every staff member to describe their specific actions, not just defer up the chain.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em2",
        question: "How often must your hospital update its Hazard Vulnerability Analysis (HVA)?",
        options: [
          "Every three years, as part of the accreditation cycle.",
          "Whenever a new type of disaster occurs in the region.",
          "At least annually.",
          "Only when the Emergency Operations Plan is revised."
        ],
        correctIndex: 2,
        explanation: "JC standard EM.02.01.01 requires the HVA to be updated at least annually. The local hazard environment changes — new industrial facilities open, climate patterns shift, community demographics change. An HVA that hasn't been reviewed in more than a year does not meet the standard.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em3",
        question: "Your hospital's Emergency Operations Plan was downloaded from a state health department template website and filed without modification. A surveyor reviews it. What is the most likely finding?",
        options: [
          "No finding. Using a state-approved template satisfies the EOP requirement.",
          "Minor finding. The hospital must add its name and address to the document.",
          "Significant finding. The EOP must be facility-specific, reflecting the hospital's actual hazards, resources, and community.",
          "No finding. Templates are reviewed and approved by the Joint Commission in advance."
        ],
        correctIndex: 2,
        explanation: "The EOP must be facility-specific. A generic template that doesn't reflect your hospital's unique hazard profile (from the HVA), actual resources, community relationships, and staff roles does not meet EM.01.01.01. Surveyors look for evidence the plan was built around your specific facility, not downloaded and filed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em4",
        question: "Which person or body has the authority to activate your hospital's Emergency Operations Plan?",
        options: [
          "The charge nurse on duty at the time of the emergency.",
          "The senior physician present in the facility.",
          "The CEO or designated leadership as defined in the EOP.",
          "The Joint Commission regional office upon notification."
        ],
        correctIndex: 2,
        explanation: "The EOP defines who has authority to declare an emergency and activate the plan — typically the CEO or a designated leadership chain. This authority structure must be written into the plan itself. Frontline staff do not activate the EOP; they execute their assigned roles once it is activated.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em5",
        question: "Your hospital in Arizona has an HVA that lists hurricanes as a high-probability, high-impact threat. A surveyor reviews this. What is the concern?",
        options: [
          "None. Hurricanes in the southwest U.S. are more common than most people realize.",
          "Your HVA is not facility-specific — it appears to be a generic template not based on actual local conditions.",
          "The concern is the impact rating. Hurricanes should be rated medium impact in inland regions.",
          "None. JC requires all natural disasters be listed regardless of local probability."
        ],
        correctIndex: 1,
        explanation: "Arizona has extremely low hurricane risk. Listing hurricanes as high-probability in an Arizona HVA is a clear indicator your facility used a non-specific template rather than conducting a genuine local hazard analysis. EM.02.01.01 requires your HVA to reflect actual local and regional conditions.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em6",
        question: "Which of the following is NOT one of the six critical areas required by JC standard EM.02.02.01?",
        options: [
          "Communications.",
          "Utilities management.",
          "Financial and billing continuity.",
          "Staff responsibilities."
        ],
        correctIndex: 2,
        explanation: "The six required critical areas under EM.02.02.01 are: (1) Communications, (2) Resources and assets, (3) Safety and security, (4) Staff responsibilities, (5) Utilities management, and (6) Patient clinical and support activities. Financial and billing continuity is not one of the six required areas.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em7",
        question: "Your hospital loses its main phone system during a severe ice storm. Which critical area of your EOP specifically addresses how to communicate under these conditions?",
        options: [
          "Safety and security.",
          "Utilities management.",
          "Communications.",
          "Resources and assets."
        ],
        correctIndex: 2,
        explanation: "The Communications critical area (EM.02.02.01) must address how your facility will maintain internal and external communications when primary systems fail. This includes backup systems: satellite phones, two-way radios, runners, and pre-established communication trees. A downed phone system with no backup plan is a gap in this critical area.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em8",
        question: "During a mass casualty event, your ED is overwhelmed. Your EOP activates a plan to convert a conference room into an overflow treatment area and discharge stable floor patients. Which critical area does this represent?",
        options: [
          "Safety and security.",
          "Utilities management.",
          "Staff responsibilities.",
          "Patient clinical and support activities."
        ],
        correctIndex: 3,
        explanation: "The Patient Clinical and Support Activities critical area addresses how your hospital will continue and expand care during an emergency — including surge capacity planning, care space expansion, patient discharge acceleration, and prioritization of care resources. This is surge capacity activation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em9",
        question: "A hazmat incident occurs one block from your hospital. Leadership determines that evacuating patients would expose them to the chemical agent outdoors. What is the correct protective action?",
        options: [
          "Evacuate all patients and staff immediately using your facility's standard evacuation routes.",
          "Shelter-in-place — keep patients and staff inside the building with ventilation systems shut down.",
          "Transfer all ICU patients to the nearest facility as the first priority action.",
          "Activate the EOP only after local fire department confirms the chemical identity."
        ],
        correctIndex: 1,
        explanation: "For external hazmat incidents, shelter-in-place is typically the correct protective action — keeping patients inside protects them from outdoor air contamination. HVAC systems may be shut down to prevent drawing contaminated air inside. Leadership makes the shelter-in-place vs. evacuation decision based on real-time conditions. This is why your EOP must address both options.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em10",
        question: "What is the Joint Commission minimum requirement for emergency exercises per year?",
        options: [
          "One drill per year, which may be an internal tabletop exercise.",
          "Four drills per year, one per quarter, with at least two involving community agencies.",
          "Two exercises per year, with at least one being a community-based exercise.",
          "Three exercises per year, all of which must be full-scale functional drills."
        ],
        correctIndex: 2,
        explanation: "EM.03.01.01 requires a minimum of two emergency exercises per year. At least one must be a community-based exercise involving external agencies — EMS, fire, public health, or neighboring hospitals. Both must be documented with participation records, critiques, and corrective action tracking.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em11",
        question: "Your hospital conducts its annual emergency drill but does not complete a written critique or identify corrective actions afterward. A surveyor finds the drill documentation. What is the compliance issue?",
        options: [
          "None. Completing the drill itself satisfies EM.03.01.01.",
          "Minor issue. A critique form is recommended but not required by the standard.",
          "Significant issue. Drill documentation must include a critique and corrective actions to meet the standard.",
          "None. Corrective actions are only required when the drill reveals a major failure."
        ],
        correctIndex: 2,
        explanation: "Conducting the drill is not enough. EM.03.01.01 requires documentation that includes the date, type of exercise, participants, a critique/evaluation of performance, and corrective actions identified for improvement. A drill without documented critique and follow-up is an incomplete exercise from a compliance standpoint.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em12",
        question: "What is the primary purpose of requiring at least one community-based emergency exercise per year?",
        options: [
          "To allow the Joint Commission to observe your hospital's emergency capabilities directly.",
          "To satisfy OSHA requirements for workplace emergency training.",
          "To test coordination with external agencies your hospital would rely on during a real community disaster.",
          "To reduce malpractice insurance premiums by demonstrating disaster preparedness."
        ],
        correctIndex: 2,
        explanation: "Real community disasters require your hospital to work alongside EMS, fire departments, public health agencies, and neighboring hospitals. Community-based exercises test those inter-agency relationships and communication systems before an actual event. A hospital that only drills internally has never tested whether their communication with the emergency command center actually works under pressure.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em13",
        question: "A surveyor asks to see documentation of your hospital's last two emergency exercises. Your compliance officer presents sign-in sheets but cannot locate critique forms or corrective action logs. What is the finding?",
        options: [
          "No finding. Attendance documentation is sufficient to prove the exercises occurred.",
          "Finding. Incomplete drill documentation — critique and corrective action tracking are required elements.",
          "Finding. Sign-in sheets are not an accepted form of participation documentation.",
          "No finding. Critiques are only required after full-scale exercises, not tabletop drills."
        ],
        correctIndex: 1,
        explanation: "Drill documentation must include more than attendance records. EM.03.01.01 requires documentation of the exercise critique — what worked, what failed, and corrective actions identified for improvement. Without these elements, the exercise record is incomplete even if staff actually participated.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em14",
        question: "What is an after-action review (AAR) in the context of emergency management?",
        options: [
          "A financial audit conducted after an emergency to calculate the cost of the event.",
          "A structured evaluation conducted after a drill or actual emergency to identify what worked, what failed, and what improvements are needed.",
          "A regulatory report submitted to the Joint Commission within 30 days of any declared emergency.",
          "A staff disciplinary review for employees who did not respond correctly during the emergency."
        ],
        correctIndex: 1,
        explanation: "An after-action review (AAR) is a structured debrief that happens after every emergency drill or real event. It examines what went well, what didn't, and what specific changes should be made to the EOP or training. EM.04.01.01 requires this process to be documented and corrective actions tracked through to completion.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em15",
        question: "After a mass casualty drill, your AAR identifies three corrective actions. Six months later, a surveyor visits. Which question will they most likely ask?",
        options: [
          "Why didn't the drill test all six critical areas simultaneously?",
          "Were all three corrective actions completed, and can you show evidence of completion?",
          "Who conducted the AAR, and were they certified in emergency management?",
          "Did the drill scenario accurately predict the type of mass casualty event most likely in your region?"
        ],
        correctIndex: 1,
        explanation: "The purpose of the AAR is to drive improvement. EM.04.01.01 requires corrective actions to be tracked to completion, not just identified. Surveyors will look for evidence that the loop was closed — the updated protocols and revised procedures should all be verifiable in current documentation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em16",
        question: "Who should participate in the after-action review following an emergency exercise?",
        options: [
          "Only the incident commander and senior leadership who oversaw the drill.",
          "Only the compliance officer and emergency management coordinator.",
          "A cross-functional group including frontline staff who participated, department leads, and leadership.",
          "External observers and Joint Commission consultants only, to ensure objectivity."
        ],
        correctIndex: 2,
        explanation: "Effective AARs require participation from people who were actually involved at every level — frontline staff, charge nurses, department leaders, and incident command. Frontline staff often have the most actionable observations about what broke down in practice. Limiting AAR participation to leadership misses the most important operational insights.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em17",
        question: "Your hospital experiences a power failure that knocks out main electrical systems for four hours. Does this event require an after-action review under EM.04.01.01?",
        options: [
          "No. The AAR requirement applies only to planned drills, not actual emergencies.",
          "Yes. EM.04.01.01 requires after-action reviews following both drills and actual emergency events.",
          "Only if the power failure was declared a formal emergency by the CEO.",
          "Only if patient care was affected during the outage."
        ],
        correctIndex: 1,
        explanation: "EM.04.01.01 requires after-action reviews after both emergency exercises AND actual emergency events. A real power failure activates the EOP's utilities critical area. It must be reviewed to identify how your facility responded, whether backup systems worked as planned, and what should be improved before the next event.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em18",
        question: "A surveyor asks your Facilities technician: 'What is your role if the hospital activates its EOP for a utility failure?' The tech responds: 'I'd go to my department and wait for instructions.' How should this be evaluated?",
        options: [
          "Acceptable. Utility staff should wait for incident command direction before taking any action.",
          "Acceptable. Knowing to report to your department is sufficient for frontline staff.",
          "Unacceptable. The technician should know specific duties such as activating backup generators, checking medical gas systems, and reporting status to incident command.",
          "Unacceptable. Utility staff are not part of the EOP and should evacuate during declared emergencies."
        ],
        correctIndex: 2,
        explanation: "Facilities staff have critical and specific roles in utility failure emergencies — activating backup systems, monitoring medical gas levels, isolating failed systems, and reporting to incident command. 'Wait for instructions' indicates the technician has not been trained on their EOP role, which is an EM.02.02.01 staff responsibilities finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "em19",
        question: "Which of the following best describes 'surge capacity planning' as required in the EOP?",
        options: [
          "The process of hiring additional staff before a predicted busy season.",
          "Your hospital's plan for managing more patients than its normal licensed capacity during a mass casualty or disaster event.",
          "The backup generator capacity calculations required by the utilities critical area.",
          "The process for requesting additional medical supplies from the state health department annually."
        ],
        correctIndex: 1,
        explanation: "Surge capacity planning addresses how your hospital will expand patient care capacity when demand overwhelms normal operations — typically during mass casualty events, community disasters, or pandemics. The EOP must address accelerating discharges, opening additional care areas, canceling elective procedures, and requesting mutual aid from neighboring hospitals.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "em20",
        question: "Your hospital's EOP does not address how staff will be notified and assigned during an off-hours emergency when normal supervisors are not present. A surveyor identifies this gap. Which standard does this violate?",
        options: [
          "EM.01.01.01. The EOP must address how the facility responds to all types of emergencies.",
          "EM.02.02.01. Staff responsibilities is one of the six critical areas the EOP must address.",
          "EM.03.01.01. Drill requirements mandate that off-hours scenarios be tested annually.",
          "EM.04.01.01. After-action reviews must include off-hours response analysis."
        ],
        correctIndex: 1,
        explanation: "Staff responsibilities — including how alternate staffing assignments work when normal supervisors are unavailable — is one of the six critical areas that EM.02.02.01 requires your EOP to address. An EOP that only describes the daytime chain of command fails to account for evenings, weekends, and holidays when many disasters actually occur.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "em1", '\n    ],\n  },\n  {\n    id: "patient_safety_systems"', new_em)

# ─── PATIENT SAFETY SYSTEMS (pss1-pss20) ─────────────────────────────────────
new_pss = '''    questions: [
      {
        id: "pss1",
        question: "Your surgeon skips the surgical time-out because he believes it slows the room down and 'nothing bad has ever happened.' Under Just Culture, how should this behavior be classified?",
        options: [
          "Human error. Console the surgeon and remind him of the policy.",
          "At-risk behavior. Coach the surgeon and redesign the workflow to make time-outs faster and easier to complete.",
          "Reckless behavior. Disciplinary action is required immediately without any coaching step.",
          "At-risk behavior. Terminate the surgeon since time-outs are a safety requirement."
        ],
        correctIndex: 1,
        explanation: "Skipping a time-out because 'nothing bad has ever happened' is at-risk behavior — the surgeon has drifted from a safe practice, likely not fully recognizing the cumulative risk. The Just Culture response is coaching and redesigning the workflow to make the safe behavior easier and faster. Reckless behavior requires conscious disregard of a substantial risk; here the behavior is rationalized, not openly defiant.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss2",
        question: "Your pharmacist catches a look-alike medication pulled for the wrong patient before it ever leaves the pharmacy. No patient was involved. This is best classified as:",
        options: [
          "A precursor safety event — it reached the point of care.",
          "A sentinel event — look-alike/sound-alike errors are always sentinel events.",
          "A near miss — the event did not reach the patient.",
          "An adverse drug event — any medication error is classified as an adverse event."
        ],
        correctIndex: 2,
        explanation: "A near miss (also called a close call or good catch) is an event that did not reach the patient at all. This pharmacist's catch is a textbook near miss and is high-value for learning. Near misses reveal system vulnerabilities — in this case, look-alike storage — before harm occurs. They must be reported and analyzed, not dismissed because no patient was harmed.",
        xpReward: 10,
        isSwipe: true,
      },
      {
        id: "pss3",
        question: "A sentinel event occurred on Tuesday. By what day must your hospital notify the Joint Commission?",
        options: [
          "The same day. JC must be notified immediately upon discovery.",
          "Within 5 business days of the event.",
          "Within 72 hours of discovery.",
          "Within 30 days, the same window as the root cause analysis."
        ],
        correctIndex: 2,
        explanation: "JC requires sentinel event notification within 72 hours of discovery — not the event date. The 72-hour clock starts when the organization becomes aware the event meets the sentinel event definition. Discovery on Tuesday means JC must be notified by Friday at the latest. The separate 45-day deadline applies to the Comprehensive Systemic Analysis and action plan.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss4",
        question: "Your hospital's CSA of a sentinel event lists one corrective action: 'All OR staff will be re-educated on the Universal Protocol.' A surveyor flags this as insufficient. Why?",
        options: [
          "Education is not an allowable corrective action under JC standards — only process changes are accepted.",
          "Staff education as the sole corrective action does not address the system design failures that allowed the event to occur and is unlikely to prevent recurrence.",
          "The corrective action should target leadership, not frontline staff.",
          "CSA action plans must include at least 5 distinct corrective actions to be considered complete."
        ],
        correctIndex: 1,
        explanation: "JC's PSS standards require that CSA corrective actions address root causes — the system conditions that enabled the event. 'Re-educate staff' as the sole action treats the event as an individual knowledge failure rather than examining workflow design, communication systems, and environmental factors. Education may be one component but cannot be the entire corrective plan.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss5",
        question: "How long does your hospital have to complete a Comprehensive Systemic Analysis (CSA) after a sentinel event?",
        options: [
          "30 calendar days from the event date.",
          "45 calendar days from the event or JC notification, whichever comes first.",
          "60 calendar days from JC notification.",
          "90 days, the same timeframe as a corrective action plan."
        ],
        correctIndex: 1,
        explanation: "The CSA must be completed within 45 calendar days of the sentinel event or JC notification, whichever comes first. This is a hard deadline — missing it is itself a JC compliance finding. The 45-day window covers the analysis AND development of the action plan. Begin the CSA process immediately after the event is identified, not after JC has been notified.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss6",
        question: "JC requires hospitals to conduct at least how many Failure Mode and Effects Analyses (FMEAs) per year?",
        options: [
          "None. FMEA is recommended but not required.",
          "One FMEA per year on a high-priority process.",
          "Two FMEAs per year — one clinical, one operational.",
          "One FMEA per sentinel event that occurs."
        ],
        correctIndex: 1,
        explanation: "JC requires at least one FMEA per year. The process selected must be high-priority, identified through your organization's risk assessment. FMEA is a proactive tool — conducted before an adverse event occurs to identify and redesign vulnerable steps. It runs on its own annual cycle, not triggered by events.",
        xpReward: 10,
        isSwipe: true,
      },
      {
        id: "pss7",
        question: "Your safety culture survey reveals only 38% of staff feel comfortable reporting a safety concern about a physician. Leadership files the survey results with the quality department and takes no further action. Which PSS requirement has your hospital failed to meet?",
        options: [
          "Your hospital must resurvey staff within 90 days if any domain scores below 50%.",
          "Survey results must be shared with staff and used to drive specific improvement actions. Filing results without action is insufficient.",
          "The survey must be re-administered using a different validated tool when physician-specific concerns are identified.",
          "Physician-reported concerns must be escalated to the medical executive committee within 30 days."
        ],
        correctIndex: 1,
        explanation: "JC requires that safety culture survey results be used — shared with staff and translated into specific improvement actions. A culture survey revealing low psychological safety around physician reporting demands a visible response. Filing results without action defeats the purpose and signals to staff that leadership is not serious about safety culture.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss8",
        question: "How frequently must your hospital measure its safety culture using a validated survey tool?",
        options: [
          "Annually, once per calendar year.",
          "At least every 24 months (every 2 years).",
          "Every 3 years unless a sentinel event occurs.",
          "Once during each accreditation cycle (every 3 years)."
        ],
        correctIndex: 1,
        explanation: "JC requires safety culture measurement at least every 24 months. The AHRQ Survey on Patient Safety Culture (SOPS) is the most widely used validated tool. The 24-month cycle ensures leadership receives current data on staff perceptions of reporting safety, teamwork, communication openness, and management response to errors.",
        xpReward: 10,
        isSwipe: true,
      },
      {
        id: "pss9",
        question: "Which of the following best describes the difference between a Comprehensive Systemic Analysis (CSA) and a Failure Mode and Effects Analysis (FMEA)?",
        options: [
          "CSA is used for near misses. FMEA is used for sentinel events.",
          "CSA is reactive — conducted after a serious safety event. FMEA is proactive — conducted before an adverse event to identify and redesign vulnerable processes.",
          "CSA is required by CMS. FMEA is required only by JC.",
          "CSA focuses on individual behavior. FMEA focuses on equipment failures."
        ],
        correctIndex: 1,
        explanation: "CSA is retrospective — it analyzes what went wrong after a serious safety event. FMEA is prospective — it maps a high-risk process, identifies where it could fail, and redesigns it before harm occurs. Together they form the two-sided PSS improvement cycle: react to events (CSA) and proactively reduce risk (FMEA).",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss10",
        question: "Your staff nurse reports a medication near miss through the facility's event reporting system. Her manager pulls her aside and tells her the report 'made the unit look bad' and she should think before reporting next time. Which PSS requirement does this violate?",
        options: [
          "The non-punitive reporting requirement. Staff must be able to report safety concerns without fear of retaliation.",
          "The FMEA requirement. Near misses must be funneled into the annual FMEA process.",
          "The sentinel event notification requirement. Near misses must be reported to JC within 72 hours.",
          "The CSA requirement. Every near miss must trigger a Comprehensive Systemic Analysis."
        ],
        correctIndex: 0,
        explanation: "Non-punitive reporting is a core PSS requirement. Staff must feel psychologically safe to report errors, near misses, and safety concerns without fear of blame, discipline, or social pressure. When managers respond with implied punishment, staff stop reporting — eliminating the early-warning system that prevents sentinel events. JC surveyors ask frontline staff directly: 'Can you report a safety concern without fear of retaliation?'",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss11",
        question: "A surveyor asks your bedside RN: 'What would you do if you made a medication error?' The nurse responds: 'I'd probably just monitor the patient closely and tell my charge nurse privately so we don't have to fill out all the paperwork.' How should this response be evaluated?",
        options: [
          "Acceptable. Verbal reporting to the charge nurse satisfies the immediate reporting requirement.",
          "Acceptable. Not all medication errors require formal documentation.",
          "Unacceptable. The nurse should report the event through the facility's safety event reporting system, which enables system-level analysis and corrective action.",
          "Unacceptable. The nurse should report directly to the pharmacy department, not the charge nurse."
        ],
        correctIndex: 2,
        explanation: "PSS requires that safety events — including medication errors — be reported through the organization's formal safety event reporting system, not handled through informal verbal channels. Formal reporting enables tracking, pattern identification, CSA if warranted, and QAPI review. A culture where staff route events around the reporting system undermines the entire patient safety infrastructure.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss12",
        question: "An inpatient psychiatric patient dies by suicide on your unit. Which correctly describes all required PSS and sentinel event response steps?",
        options: [
          "Complete an internal incident report, notify risk management, and conduct a staff debriefing within 30 days.",
          "Notify JC within 72 hours of discovery; complete CSA within 45 days; develop and submit an action plan; implement and verify improvement.",
          "Notify JC within 30 days; complete a peer review within 14 days; educate all psychiatric staff on suicide risk screening.",
          "File a state adverse event report within 24 hours. JC notification is not required for suicides in psychiatric settings."
        ],
        correctIndex: 1,
        explanation: "Inpatient suicide in a 24-hour care setting is one of JC's reviewable sentinel event types. Required steps: (1) notify JC within 72 hours; (2) complete the CSA within 45 calendar days; (3) develop a specific, measurable action plan; (4) implement the plan and verify improvement. State reporting obligations may run in parallel but do not replace the JC process.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss13",
        question: "Which of the following is a valid CSA team composition requirement under the PSS chapter?",
        options: [
          "The CSA team must consist entirely of department managers and quality staff to ensure objectivity.",
          "The CSA team must be multidisciplinary and must include frontline staff who were directly involved in or closest to the event.",
          "The CSA team must be chaired by the Chief Medical Officer and include no more than 5 members.",
          "The CSA team may consist of quality professionals alone if the event involved a single department."
        ],
        correctIndex: 1,
        explanation: "A valid CSA requires a multidisciplinary team that includes frontline staff closest to the event — not just leaders and quality professionals. Frontline staff have the most accurate operational knowledge of what actually happened and where the system is fragile. CSAs conducted exclusively by leadership often miss the real system factors and produce action plans that don't address actual workflow.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pss14",
        question: "Your charge nurse pauses to investigate why two staff members independently reported the medication dispensing cabinet was 'hard to use,' even though no errors have occurred yet. Which HRO principle is being applied?",
        options: [
          "Deference to expertise. The charge nurse defers to the staff's experience with the cabinet.",
          "Commitment to resilience. The charge nurse is building redundancy into the medication system.",
          "Preoccupation with failure. The charge nurse treats staff concerns as early warning signals and investigates before an adverse event occurs.",
          "Reluctance to simplify. The charge nurse refuses to accept a simple explanation for the cabinet issue."
        ],
        correctIndex: 2,
        explanation: "Preoccupation with failure means treating small signals — near misses, staff concerns, workarounds, equipment complaints — as potential early warnings of a serious failure. The charge nurse is not waiting for a medication error; she is acting on staff reports before harm occurs. This is the essence of preoccupation with failure.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss15",
        question: "Your CSA team concludes a wrong-patient transfusion occurred because 'the nurse was distracted and did not follow policy.' The action plan states the nurse will receive disciplinary action and all transfusion nurses will complete an online module. A JC reviewer rejects this CSA. Why?",
        options: [
          "Your hospital should have filed the CSA within 30 days, not 45 days.",
          "The CSA focused on individual blame rather than identifying and redesigning the system conditions — workflow, labeling, verification process — that allowed the error to occur.",
          "Online competency modules are not an acceptable corrective action format under PSS standards.",
          "The CSA team should have included the patient's family as a required member."
        ],
        correctIndex: 1,
        explanation: "A CSA that concludes 'the nurse was distracted' and prescribes disciplinary action has not identified root causes — it has identified an individual. A valid CSA must examine the system: Was the two-patient identifier verification step clearly designed? Were look-alike labels involved? What workarounds existed? Root causes are system conditions, not individual failures.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss16",
        question: "Your hospital selects its high-alert medication preparation process for this year's required FMEA. The team maps the process, identifies 23 possible failure modes, scores them, and identifies the top 5 highest-risk steps. What is the required next step?",
        options: [
          "Report the top 5 findings to the state health department within 60 days.",
          "Redesign the process to eliminate or reduce the highest-risk failure modes, implement the changes, and measure their effectiveness.",
          "Conduct a CSA for each of the 5 high-risk failure modes identified.",
          "Re-administer the FMEA in 6 months to confirm the results before taking action."
        ],
        correctIndex: 1,
        explanation: "After scoring and prioritizing failure modes, the FMEA process requires redesigning the process to address the highest-risk steps, implementing those redesigns, and measuring whether changes achieved the intended risk reduction. An FMEA that stops at identifying risks without implementing and measuring changes provides no protection against the failures identified.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pss17",
        question: "Your hospital's governing board receives patient safety performance data once a year in a brief slide during the annual report. A JC surveyor notes this as a gap. What does the PSS chapter require of the governing body?",
        options: [
          "The governing body must receive patient safety data at least quarterly and must hold leadership accountable for results.",
          "The governing body has no direct PSS obligation — patient safety is a medical staff function.",
          "The governing body must approve every CSA action plan before it is submitted to JC.",
          "The governing body must include a patient safety officer as a board member."
        ],
        correctIndex: 0,
        explanation: "PSS and the JC Leadership chapter together require the governing body to receive regular patient safety performance data — not just an annual summary — and to hold leadership accountable for improvement. Board-level accountability is explicit. Once-a-year exposure during an annual report does not constitute active board oversight.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pss18",
        question: "Which of the following correctly describes a 'precursor safety event'?",
        options: [
          "An event that did not reach the patient but was caught by a second checker.",
          "An event that reached the patient but caused no or only minor temporary harm.",
          "An event that caused permanent harm to the patient.",
          "An unsafe condition in the environment that has not yet involved a patient."
        ],
        correctIndex: 1,
        explanation: "A precursor safety event is one that reached the patient but resulted in no harm or only minor temporary harm. It is the middle tier: near miss (didn't reach patient) → precursor (reached patient, no/minor harm) → serious safety event/sentinel event (reached patient, significant harm). Precursor events are high-value learning opportunities — they reveal system vulnerabilities that may result in a serious event the next time.",
        xpReward: 10,
        isSwipe: true,
      },
      {
        id: "pss19",
        question: "Your hospital has conducted its annual PSS program evaluation. To whom must this evaluation be formally presented?",
        options: [
          "The state health department and CMS regional office.",
          "The medical executive committee only.",
          "Hospital leadership and the governing body (board of directors).",
          "The Joint Commission field representative assigned to your facility."
        ],
        correctIndex: 2,
        explanation: "The annual PSS program evaluation must be presented to both hospital leadership and the governing body. This ensures board-level visibility into whether the safety program is functioning — whether events are being reported, CSAs completed on time, FMEAs conducted, and culture surveys acted upon. Presenting only to the medical executive committee does not satisfy the board accountability requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pss20",
        question: "A surveyor asks your frontline nurse: 'If you saw something unsafe happening to a patient right now, what would you do?' The nurse replies: 'I would speak up immediately, and if needed use the chain of command or our safety reporting system — I wouldn't stay quiet just because someone outranks me.' Which HRO principle does this demonstrate?",
        options: [
          "Commitment to resilience. The nurse is prepared to recover from an error after it occurs.",
          "Reluctance to simplify. The nurse refuses to accept a simple answer to the safety question.",
          "Deference to expertise. In safety-critical situations, decision authority follows knowledge and patient safety, not hierarchy.",
          "Preoccupation with failure. The nurse is anticipating what could go wrong before it happens."
        ],
        correctIndex: 2,
        explanation: "Deference to expertise means that in safety-critical moments, authority flows to whoever has the most relevant knowledge and clearest view of the risk — regardless of rank. The nurse's willingness to speak up and escalate past hierarchy demonstrates this principle. JC looks for staff who understand they have both the right and the responsibility to escalate safety concerns even when it means challenging someone with higher authority.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions_last(content, "pss1", new_pss)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 9 (em + pss) complete.")
