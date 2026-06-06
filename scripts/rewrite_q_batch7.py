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

# ─── NPSG (npsg1-npsg20) ──────────────────────────────────────────────────────
new_npsg = '''    questions: [
      {
        id: "npsg1",
        question: "Before a blood transfusion you confirm the patient's name by reading the wristband and verifying room number. Is this compliant?",
        options: [
          "Yes. The wristband name and room number together satisfy the two-identifier requirement.",
          "No. Room number is not an acceptable patient identifier. A second identifier such as date of birth is required.",
          "Yes. Blood transfusions only require one identifier since the blood bank performs its own check.",
          "No. Blood transfusions require three identifiers due to transfusion reaction risk."
        ],
        correctIndex: 1,
        explanation: "Room number is NEVER an acceptable patient identifier. Two patient-specific identifiers are required: name plus date of birth or MRN. Room number is not patient-specific because patients change rooms. The wristband name satisfies one identifier — a second must be actively verified.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg2",
        question: "You receive a telephone order for metoprolol 25mg PO twice daily. You write it down and hang up. What step is missing?",
        options: [
          "Nothing. Writing the order down while on the phone satisfies the telephone order requirement.",
          "You should have asked the physician to fax the order instead of giving it verbally.",
          "You must read the order back to the physician and get verbal confirmation before hanging up.",
          "A second nurse should have listened on speaker to witness the telephone order."
        ],
        correctIndex: 2,
        explanation: "NPG 1 (formerly NPSG.02.03.01) requires a complete read-back for all verbal and telephone orders. After writing the order, you must read it back completely and receive physician confirmation before hanging up. Simply writing the order without reading it back does not satisfy the requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg3",
        question: "Your post-surgical patient has a Morse fall score of 65. You document the score but write 'standard fall precautions' with no further specifics. What is missing?",
        options: [
          "Nothing. Documenting standard fall precautions is the appropriate response to any fall risk score.",
          "The specific individualized interventions addressing your patient's identified risk factors must be documented in the care plan.",
          "You should have called the physician for a fall risk consultation order.",
          "Standard fall precautions satisfy JC requirements for high-risk patients when the score is below 90."
        ],
        correctIndex: 1,
        explanation: "JC requires individualized fall prevention interventions tailored to the specific risk factors identified — not a generic 'standard precautions' notation. If the patient is at risk from sedating medications, that risk factor needs a specific documented intervention.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg4",
        question: "Your cardiac monitor alarm is set at HR >120 bpm. Your patient's baseline is consistently 110-115 bpm and triggers frequent alarms that staff silence without assessment. What does JC require?",
        options: [
          "Nothing. Alarm silencing is an acceptable nursing judgment when the cause is understood.",
          "The alarm threshold should be individualized to the patient's clinical baseline to reduce non-actionable alarms while preserving safety.",
          "The alarm must remain at 120 bpm. Modifying hospital default alarm thresholds is not permitted.",
          "Move the patient to telemetry where alarms are monitored centrally."
        ],
        correctIndex: 1,
        explanation: "JC alarm safety standards require alarm parameters to be individualized to each patient's clinical baseline. If your patient's baseline rate consistently triggers non-actionable alarms, the threshold should be adjusted by provider order. Silencing alarms without assessment is alarm fatigue behavior — the root cause must be addressed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg5",
        question: "You remove gloves after patient care and immediately touch the door handle without performing hand hygiene. Which WHO moment was missed?",
        options: [
          "Moment 1 — Before patient contact.",
          "Moment 3 — After body fluid exposure.",
          "Moment 4 — After patient contact (including after glove removal).",
          "Moment 5 — After contact with patient surroundings."
        ],
        correctIndex: 2,
        explanation: "WHO Moment 4 is 'After patient contact' and explicitly includes after removing gloves. Gloves do not eliminate hand hygiene — they can have micro-tears, and hands can be contaminated during glove removal. Hand hygiene after glove removal is required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg6",
        question: "Your medical-surgical patient expresses passive suicidal ideation (wishing they were dead) but has no active plan. Under NPG 8, what is required?",
        options: [
          "Document the comment and continue standard monitoring. Passive ideation without a plan does not require escalation.",
          "A formal safety assessment, documented care plan, and appropriate environmental safety steps are required.",
          "Transfer the patient to the psychiatric unit immediately.",
          "Notify the family only. Clinical intervention requires an active plan or intent."
        ],
        correctIndex: 1,
        explanation: "NPG 8 (formerly NPSG.15.01.01) requires that patients who screen positive for suicide risk — including passive ideation — receive a formal validated safety assessment (e.g., C-SSRS), a documented care plan, and environmental safety measures appropriate to the risk level.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg7",
        question: "You care for a patient with C. difficile in contact isolation and want to perform hand hygiene upon exiting. Which method is required?",
        options: [
          "Alcohol-based hand rub. It is effective against all healthcare pathogens including C. diff.",
          "Soap and water. Alcohol-based hand rub does not eliminate C. diff spores.",
          "Either method is equivalent for C. diff contact isolation exit hand hygiene.",
          "Double application of alcohol-based hand rub provides equivalent C. diff spore elimination."
        ],
        correctIndex: 1,
        explanation: "C. difficile produces spores that are NOT killed by alcohol-based hand rub. Soap and water are required because the mechanical washing action physically removes spores from your hands. This is one of the specific exceptions to the general preference for ABHR.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg8",
        question: "Your patient is started on a heparin infusion. You receive a verbal rate from the physician and adjust the pump without checking the patient's weight or your facility's weight-based protocol. What safety step was bypassed?",
        options: [
          "Nothing. Physicians determine heparin dosing and nursing follows the rate as ordered.",
          "Heparin must be administered per an approved anticoagulation management program. Bypassing the protocol is not acceptable.",
          "Weight-based protocol is only required for heparin bolus doses, not infusion rate adjustments.",
          "Weight-based verification is optional for experienced nurses."
        ],
        correctIndex: 1,
        explanation: "NPG 14 (formerly NPSG.03.05.01) requires facilities to use approved evidence-based protocols for anticoagulant dosing. Adjusting a heparin infusion from a verbal order without verifying the weight-based protocol bypasses a critical safety step. Heparin dosing errors are a leading cause of medication-related harm.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg9",
        question: "Your patient is admitted with three home medications. The physician orders two of them but does not address the third. What must happen?",
        options: [
          "The unaddressed medication is automatically discontinued on admission.",
          "Medication reconciliation requires every home medication to be addressed — explicitly ordered, held with rationale, or discontinued with documentation.",
          "Continue the third medication at home dose until the physician addresses it.",
          "Unaddressed medications require a pharmacist consultation order before any action."
        ],
        correctIndex: 1,
        explanation: "Medication reconciliation requires ALL home medications to be accounted for in admission orders — either continued, held with a reason, or discontinued with documentation. A home medication that is simply not mentioned is a reconciliation failure.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg10",
        question: "Your patient's ID band fell off. You are about to collect a blood specimen. What must happen first?",
        options: [
          "Proceed using room number and chart verification since you know the patient.",
          "Apply a replacement ID band and verify both identifiers before any specimen collection or treatment.",
          "Proceed with one identifier if a second nurse witnesses the identification.",
          "The physician must order a replacement wristband before you can proceed."
        ],
        correctIndex: 1,
        explanation: "A patient without an identification band must have one applied before any treatment, medication, or specimen collection. The two-identifier requirement cannot be satisfied with room number or familiarity. NPG 1 applies to every episode of care — there are no exceptions for 'known' patients.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg11",
        question: "Your patient's Braden admission score is 14 (mild risk). You document the score but add no care plan entry. Three days later the patient develops a sacral pressure injury. What was the process failure?",
        options: [
          "A Braden score of 14 is normal and does not require clinical intervention.",
          "Braden score documentation alone satisfies the JC requirement; the injury was unpreventable.",
          "A validated risk score triggers a requirement for individualized prevention interventions documented in the plan of care.",
          "Pressure injury prevention plans are required only for Braden scores below 12."
        ],
        correctIndex: 2,
        explanation: "A Braden score of 14 falls in the mild-risk range and requires documented prevention interventions in the care plan. Documenting only the score without corresponding interventions is incomplete. JC requires that identified risks generate specific, individualized care planning.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg12",
        question: "Your patient transfers from a medical unit to the ICU. What JC-required activities must occur at the time of transfer?",
        options: [
          "Only a physician-to-physician verbal handoff is required for ICU transfers.",
          "A structured handoff communication AND medication reconciliation comparing current orders to transfer orders are both required.",
          "Handoff requirements only apply to discharges from the hospital, not to intra-hospital transfers.",
          "Transfer medication review is the pharmacist's responsibility and does not require nursing participation."
        ],
        correctIndex: 1,
        explanation: "JC requires structured handoff communication at care transitions including intra-hospital transfers. A standardized format (SBAR or equivalent) ensures critical information is consistently communicated. Medication reconciliation is also required at transfer to confirm orders are appropriate for the new care setting.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg13",
        question: "Your ED patient reports 'occasional thoughts of not wanting to live anymore' when asked 'are you feeling safe?' You document 'patient denies suicidal ideation.' What is wrong?",
        options: [
          "Nothing. The patient's response can be interpreted as denial of active suicidal ideation.",
          "The question used is not a validated suicide risk tool. A validated instrument such as the C-SSRS or ASQ must be used.",
          "Suicide screening is only required for patients with a psychiatric history in the ED.",
          "Documentation is sufficient as long as the assessment was performed verbally."
        ],
        correctIndex: 1,
        explanation: "NPG 8 requires a validated suicide risk screening tool — not informal questions. 'Are you feeling safe?' is not validated. The C-SSRS and ASQ are validated tools. Additionally, this patient's response suggests possible passive ideation warranting formal follow-up assessment.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg14",
        question: "Your warfarin patient is discharged. The discharge instructions include a medication list but no education about bleeding signs, INR monitoring, or food interactions. What is missing?",
        options: [
          "Nothing. Medication lists are the only required discharge documentation for anticoagulant patients.",
          "Patient education about anticoagulant risks, monitoring requirements, and dietary interactions is required at discharge for all anticoagulant patients.",
          "Anticoagulant education at discharge is the prescribing physician's responsibility, not nursing's.",
          "Education is only required if the patient is newly starting anticoagulation, not if they were on warfarin before admission."
        ],
        correctIndex: 1,
        explanation: "NPG 14 requires patient and family education about anticoagulants at discharge. Education must cover: the drug and purpose, monitoring requirements (INR schedule), signs of adverse effects (bleeding), food and drug interactions, and when to seek emergency care. A medication list alone is insufficient.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg15",
        question: "Your night-shift nurse gives a verbal summary of each patient at handoff with no structured format or written documentation. Three patients have critical information gaps. What does JC require?",
        options: [
          "Nothing. JC does not mandate a specific handoff format or documentation.",
          "Handoffs must use a standardized process that ensures all critical information is consistently communicated at each transition.",
          "Written handoffs are only required in the ICU or for patients on high-alert medications.",
          "The receiving nurse is responsible for independently verifying all patient information regardless of handoff quality."
        ],
        correctIndex: 1,
        explanation: "JC requires handoffs to use a standardized communication process — SBAR, I-PASS, or a facility-defined equivalent — ensuring all critical information is consistently transmitted at every transition. Purely verbal, unstructured handoffs without a reliable process create conditions for information loss and patient harm.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg16",
        question: "Your COPD patient's baseline SpO2 is 90-92% on 2L NC. The pulse ox alarm is set at <88% and frequently triggers. Staff silence it routinely. What is the appropriate action?",
        options: [
          "Continue current settings. 88% is the standard clinical threshold for all patient populations.",
          "Raise the alarm threshold to 89-90% to match the patient's clinical baseline, reducing false alarms while maintaining safety.",
          "Disable the SpO2 alarm entirely for COPD patients since lower saturation is expected.",
          "Switch the patient to continuous telemetry monitoring."
        ],
        correctIndex: 1,
        explanation: "JC alarm safety standards require individualized alarm parameters based on each patient's clinical status. For a COPD patient with a baseline of 90-92%, a threshold of 88% generates non-actionable alarms and promotes alarm fatigue. Raising the threshold to the patient's clinical baseline maintains meaningful alerting. Any alarm parameter change requires a provider order and documentation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg17",
        question: "Your ED triage nurse identifies a home medication list but does not compare it against ED orders because 'the patient will be reconciled upstairs.' What is missing?",
        options: [
          "Nothing. Medication reconciliation is the admitting unit's responsibility, not the ED's.",
          "The ED must begin the reconciliation process. It cannot be deferred entirely to the admitting unit.",
          "Reconciliation at triage is only required for patients on anticoagulants or high-alert medications.",
          "Triage reconciliation is a physician responsibility — nursing collects the list but does not compare or reconcile."
        ],
        correctIndex: 1,
        explanation: "Medication reconciliation must begin at the first point of contact. While a full reconciliation may be completed by the admitting team, the ED is responsible for initiating the process — collecting a complete home medication list and flagging urgent medications that must not be omitted. Deferring entirely creates gaps where critical medications may be missed.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg18",
        question: "Your unit's hand hygiene compliance rate is 68% on the most recent observation audit. What does JC expect your organization to do with this data?",
        options: [
          "Publish the data internally. Observation and reporting alone satisfy JC hand hygiene requirements.",
          "Set a goal of 100% and continue monthly observation only until the goal is reached.",
          "Analyze the compliance data, implement targeted improvement interventions, and monitor for sustained improvement.",
          "Remove hand hygiene from unit-level quality metrics since 68% is within the normal range for hospital units."
        ],
        correctIndex: 2,
        explanation: "JC requires hospitals to have a hand hygiene improvement program — not just measurement. Low compliance data must trigger analysis (where are the gaps? which staff? which moments?) and targeted interventions. Monitoring for sustained improvement after interventions is required. Data that does not drive action does not satisfy NPG 5.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "npsg19",
        question: "Your high fall risk patient has a yellow wristband, fall risk sign, and locked bed wheels. The next morning the patient falls reaching for water on the bedside table. What prevention step was likely missed?",
        options: [
          "Nothing. You implemented standard fall precautions correctly and the fall was unpreventable.",
          "Individualized interventions addressing the specific risk — such as placing water within reach and providing call light education — were not implemented.",
          "You should have physically restrained the patient to prevent unassisted movement.",
          "A sitter should have been ordered. Yellow wristbands and bed locks are insufficient for any high-risk patient."
        ],
        correctIndex: 1,
        explanation: "Individualized fall prevention requires more than universal precautions. If a patient's risk includes reaching for items, the individualized plan must address that specifically — placing frequently needed items within reach, call light education, hourly rounding. Generic precautions without patient-specific interventions represent an incomplete fall prevention plan.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "npsg20",
        question: "The lab reports a critical potassium of 6.8 mEq/L verbally. You say 'got it' and hang up. What required step was missed?",
        options: [
          "Nothing. Acknowledging the value verbally satisfies the critical value notification requirement.",
          "You must read back the critical value to the lab technician to verify accuracy before acting.",
          "Critical values must always be communicated in writing — verbal reporting is not permitted.",
          "You should have immediately called the physician before completing the lab read-back."
        ],
        correctIndex: 1,
        explanation: "NPG 1 (formerly NPSG.02.03.01) requires read-back for critical value reporting — the same standard as verbal orders. You must repeat the value back to the lab ('You are reporting a potassium of 6.8 mEq/L — is that correct?') and receive confirmation. Simply saying 'got it' does not constitute a read-back.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "npsg1", '\n    ],\n  },\n\n  // ── INFECTION PREVENTION & CONTROL', new_npsg)

# ─── INFECTION CONTROL (ic1-ic20) ────────────────────────────────────────────
new_ic = '''    questions: [
      {
        id: "ic1",
        question: "You enter a patient's room to perform wound care. The patient has no documented infection. You put on gloves only. Is this PPE selection correct?",
        options: [
          "Yes. Gloves are the only required PPE for wound care in patients without known infection.",
          "No. A gown is also required because wound care involves contact with body fluids that may contaminate clothing.",
          "Yes. Additional PPE beyond gloves is only required for isolation patients.",
          "No. An N95 respirator is also required for wound care regardless of infection status."
        ],
        correctIndex: 1,
        explanation: "Standard precautions require a gown whenever there is risk of contamination of clothing from blood, body fluids, secretions, or excretions. Wound care involves wound drainage — a gown is required under standard precautions regardless of the patient's known infection status.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic2",
        question: "Your MRSA contact precaution patient has a visitor who entered wearing gloves only, bypassing the PPE station outside the door. What is required?",
        options: [
          "Gloves alone are sufficient for visitors since they do not perform clinical care.",
          "Both gown and gloves are required for ALL persons entering a contact precaution room, including visitors.",
          "Visitors are exempt from contact precaution requirements because they are not hospital employees.",
          "Visitors need a mask in addition to gloves only when the patient has an active wound."
        ],
        correctIndex: 1,
        explanation: "Contact precautions apply to ALL persons entering the room — staff and visitors alike. Gown and gloves must be worn upon entry and removed before leaving. Visitors should receive education on proper donning and doffing. Unprotected visitor entry creates a transmission risk and is a JC finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic3",
        question: "Your central line has been in place for 8 days. You document a site assessment and dressing change — but no daily necessity review. What is missing?",
        options: [
          "Nothing. Central line necessity reviews are a physician responsibility, not a nursing documentation requirement.",
          "Daily documentation of clinical justification for the line's continued use is required as part of the CLABSI prevention maintenance bundle.",
          "Necessity reviews are only required for femoral lines, not subclavian or internal jugular sites.",
          "The necessity documentation requirement begins on day 10 of catheter dwell time."
        ],
        correctIndex: 1,
        explanation: "Daily review of central line necessity is a required component of the CLABSI maintenance bundle. The clinical indication for continued central access must be documented daily — if there is no documented necessity, the line must be considered for removal. Extended dwell time is the primary modifiable CLABSI risk factor.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic4",
        question: "Your phlebotomist uses the same lancet to collect blood glucose from two adjacent patients because lancets ran out. What is the compliance finding?",
        options: [
          "No finding if the lancet was wiped with alcohol between patients.",
          "Minor finding. Lancet sharing is prohibited but does not constitute a serious safety event.",
          "Immediate serious finding. Lancets are single-use — reuse between patients creates direct bloodborne pathogen transmission risk.",
          "Finding only if one of the patients has a known bloodborne infection."
        ],
        correctIndex: 2,
        explanation: "Lancets are single-use devices and must never be shared. Reuse creates a direct route for bloodborne pathogen transmission (hepatitis B, C, HIV) regardless of whether either patient has a known infection. Outbreaks of hepatitis B have been directly linked to lancet sharing in healthcare settings.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic5",
        question: "Your surgical patient receives cefazolin for SSI prophylaxis. The infusion starts 2 hours before incision because the OR ran ahead of schedule. Is this timing compliant?",
        options: [
          "Yes. Antibiotics given within 4 hours of incision satisfy the SSI prophylaxis requirement.",
          "No. Prophylactic antibiotics must be administered within 1 hour before skin incision to maintain therapeutic tissue levels.",
          "Yes. Earlier administration is preferable because it allows more time to reach tissue levels.",
          "No. The antibiotic should be given exactly at incision time, not before."
        ],
        correctIndex: 1,
        explanation: "SSI prophylaxis requires administration within 1 hour before skin incision (2 hours for vancomycin and fluoroquinolones). Cefazolin given 2 hours before incision means tissue concentration may fall below therapeutic levels by the time incision occurs — the prophylaxis window has been missed. Timing must be coordinated with the surgical schedule.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic6",
        question: "You suspect a patient has tuberculosis. While waiting for the airborne isolation room to be cleaned, you place the patient in a standard private room with the door closed. What is wrong?",
        options: [
          "Nothing. A private room with a closed door provides adequate isolation for suspected TB.",
          "Suspected TB requires a negative pressure airborne infection isolation room. Standard private rooms do not provide the required air handling.",
          "Droplet precautions with a surgical mask are appropriate for suspected TB until confirmed by culture.",
          "A standard room is acceptable if the patient wears a surgical mask at all times."
        ],
        correctIndex: 1,
        explanation: "Suspected tuberculosis requires immediate placement in an airborne infection isolation room (AIIR) — negative pressure with 6-12 air changes per hour exhausted outside or HEPA-filtered. A standard private room does not provide negative pressure and cannot prevent airborne transmission. Explore alternatives (outdoor waiting, a large room) while preparing an AIIR.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic7",
        question: "After caring for a C. difficile patient, you perform hand hygiene with alcohol-based hand rub and move to the next patient. What is the error?",
        options: [
          "None. Alcohol-based hand rub is effective against C. difficile when applied correctly.",
          "Soap and water must be used after C. difficile patient contact because ABHR does not kill C. diff spores.",
          "The error is not wearing gloves — hand hygiene product selection is not regulated for C. diff.",
          "Both soap and ABHR should be used sequentially for C. difficile patients."
        ],
        correctIndex: 1,
        explanation: "C. difficile produces spores that are not eliminated by alcohol-based hand rub. Soap and water are required — the mechanical washing physically removes spores from your hands. This is a critical and commonly missed distinction: ABHR is preferred for most pathogens, but C. diff mandates soap and water.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic8",
        question: "Your patient's urinary catheter was placed 5 days ago for post-surgical urinary retention. The patient voided spontaneously twice today. The catheter remains in place. What should have occurred?",
        options: [
          "The catheter should remain in place for at least 7 days post-surgery as standard protocol.",
          "The catheter must be removed when the clinical indication no longer exists. Spontaneous voiding indicates the indication has resolved.",
          "Only a physician order can authorize urinary catheter removal — nursing cannot independently initiate removal.",
          "The catheter may remain for monitoring urine output even after spontaneous voiding."
        ],
        correctIndex: 1,
        explanation: "CAUTI prevention requires daily assessment of catheter necessity and removal when the indication no longer exists. Post-operative urinary retention was the indication — spontaneous voiding indicates it has resolved. Continuing catheterization without a current clinical indication is a compliance finding and increases CAUTI risk daily.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic9",
        question: "A staff member is about to enter a suspected measles patient's room wearing a surgical mask. What is wrong with this PPE selection?",
        options: [
          "Nothing. Surgical masks are appropriate for droplet-transmitted infections like measles.",
          "An N95 respirator is required for measles. It is airborne-transmitted and surgical masks do not provide required filtration.",
          "A surgical mask is acceptable if the staff member has documented measles immunity.",
          "Measles requires contact precautions only — no respiratory protection is indicated."
        ],
        correctIndex: 1,
        explanation: "Measles is airborne-transmitted and requires an N95 respirator (or higher) — not a surgical mask. Surgical masks do not filter the small particle droplet nuclei that carry the measles virus. Non-immune staff should not enter measles isolation rooms when possible.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic10",
        question: "Your unit's blood glucose monitoring device is shared between patients. Between uses, it is wiped with an alcohol wipe. Is this practice compliant?",
        options: [
          "Yes. Alcohol wipes provide adequate disinfection between patient uses for blood glucose monitors.",
          "No. Blood glucose monitors contact blood and must be cleaned and disinfected per the device manufacturer's instructions between each patient use.",
          "Yes. As long as a new lancet and test strip are used for each patient, device sharing is acceptable.",
          "No. Blood glucose monitors must be single-use and discarded between patients."
        ],
        correctIndex: 1,
        explanation: "Blood glucose monitors contact blood and must be cleaned and disinfected between each patient use per the manufacturer's specified method and product. A quick alcohol wipe may not achieve the required contact time or use the correct product. Outbreaks of hepatitis B have been traced to improperly cleaned shared blood glucose devices.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic11",
        question: "Your surgeon wants to shave a patient's leg with a razor the morning of surgery. Your charge nurse intervenes. What is the correct hair removal method for surgical site preparation?",
        options: [
          "Razor shaving is acceptable when performed immediately before the patient enters the OR.",
          "Electric clippers are the appropriate method. Razors create micro-abrasions that significantly increase SSI risk.",
          "Depilatory creams are the required method per JC standards — neither razors nor clippers are acceptable.",
          "Hair removal is not recommended at all — the area should be cleaned and left intact whenever possible."
        ],
        correctIndex: 1,
        explanation: "JC and evidence-based guidelines specify electric clippers as the correct method for surgical hair removal. Razors create micro-abrasions that serve as portals for bacterial entry, significantly increasing SSI risk. Your charge nurse is correct. If hair removal is clinically necessary, clippers immediately before surgery are the correct approach.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic12",
        question: "Your unit's CAUTI rate is 2.1 per 1,000 catheter days, above the national benchmark. The infection prevention team presents the data to nursing leadership. What action does JC require next?",
        options: [
          "Continued monitoring only — the rate must be tracked for 12 additional months before intervention is triggered.",
          "An RCA must be submitted to The Joint Commission within 30 days of identifying the elevated rate.",
          "Analysis of root causes, evidence-based improvement interventions, and measurement of effectiveness after implementation.",
          "Your unit must suspend catheter insertions until the rate returns to the national benchmark."
        ],
        correctIndex: 2,
        explanation: "JC requires surveillance data to drive improvement. When your HAI rates exceed benchmarks, the response must include: root cause analysis (why are rates elevated?), evidence-based interventions (daily catheter necessity rounds, insertion audits, nursing education), and measurement of whether rates improve. Monitoring without action does not satisfy the IC chapter.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic13",
        question: "A multi-dose saline vial in your medication room has no date written on it. Staff say it was opened 'a few weeks ago.' What is the compliance issue?",
        options: [
          "No issue. Multi-dose vials do not require dating as long as they appear visually clear.",
          "Multi-dose vials must be dated when opened and discarded per the manufacturer's beyond-use date or facility policy, typically within 28 days.",
          "The only requirement for multi-dose vials is refrigeration — dating is optional.",
          "Multi-dose vials are not regulated by JC — this falls under FDA jurisdiction only."
        ],
        correctIndex: 1,
        explanation: "Multi-dose vials must be dated when first opened and discarded per the manufacturer's beyond-use date or facility policy, typically within 28 days. An undated vial open for an unknown period cannot be safely used. Multi-dose vials have been implicated in infection outbreaks when shared between patients or accessed with contaminated needles.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic14",
        question: "Your knee replacement patient develops a fever on post-op day 3 with redness and warmth at the surgical wound. What infection prevention measure should your team assess first?",
        options: [
          "Whether the patient received SSI antibiotic prophylaxis within 1 hour before incision.",
          "Whether the patient has a new urinary catheter that may be causing the fever.",
          "Whether the patient's room has been terminally cleaned since the last occupant.",
          "Whether the patient has been exposed to another patient with a respiratory illness."
        ],
        correctIndex: 0,
        explanation: "A surgical wound infection on post-op day 3 with local signs requires assessment of the full SSI prevention bundle, starting with whether prophylactic antibiotics were given at the right time, with the right agent, and for the appropriate duration. This is the most directly relevant infection prevention measure for a surgical site presentation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic15",
        question: "Your nurse accesses a central line hub without scrubbing it first, saying it was cleaned during the prior shift. What is the required practice?",
        options: [
          "Hub scrubbing is only required before the first access each shift — once cleaned, it may be accessed multiple times.",
          "Prior-shift cleaning is sufficient if the hub cap was not removed between cleanings.",
          "Hub disinfection must occur immediately before EACH access — scrub for 15 seconds and allow to dry.",
          "Hub cleaning is only required for blood draws, not medication administration."
        ],
        correctIndex: 2,
        explanation: "'Scrub the hub' is a required element of the CLABSI maintenance bundle. The catheter hub must be disinfected with friction using 70% alcohol or an antiseptic immediately before every single access — regardless of when it was last cleaned. Prior-shift cleaning provides no protection against the current access.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic16",
        question: "Your airborne precaution patient needs transport through the hospital for imaging. What precautions are required during transport?",
        options: [
          "The patient must wear an N95 respirator during transport to protect others in the hallway.",
          "The patient wears a surgical mask during transport. The hallway should be cleared and the receiving area notified in advance.",
          "Transport of airborne precaution patients is prohibited except in declared medical emergencies.",
          "Clear the hallway of other patients before transport. No additional precautions are required for the patient."
        ],
        correctIndex: 1,
        explanation: "During transport of an airborne precaution patient: the PATIENT wears a surgical mask to contain respiratory secretions, the hallway should be cleared, and the receiving area notified in advance. Transport staff in the hallway do NOT need N95s if the patient is properly masked — N95s are required when staff are in the same room without the patient masked.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic17",
        question: "Your facility's MRSA rate has increased over 3 consecutive quarters. Your infection prevention committee reviews the data but takes no formal action. What does JC require?",
        options: [
          "No action is required unless the rate exceeds a nationally defined absolute threshold.",
          "The committee has fulfilled its obligation by reviewing and discussing the data quarterly.",
          "A formal performance improvement plan with evidence-based interventions and defined goals must be implemented and monitored.",
          "The issue must be reported to state health authorities before any internal action is taken."
        ],
        correctIndex: 2,
        explanation: "JC requires surveillance data to drive action. A three-quarter rising MRSA trend must generate a formal improvement response: root cause analysis, evidence-based interventions (active surveillance cultures, contact precaution audits, environmental cleaning enhancements), defined goals, and ongoing monitoring. Reviewing data without action does not satisfy the IC chapter.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ic18",
        question: "A reusable medical device labeled 'for single use only' was cleaned and reused on a second patient. What is the compliance and safety concern?",
        options: [
          "No concern if the device was thoroughly cleaned and sterilized between patients.",
          "Single-use devices may be reused by facilities with documented cleaning protocols, regardless of manufacturer labeling.",
          "Reuse of single-use devices is prohibited without an FDA-cleared reprocessing program. Manufacturer safety guarantees do not apply after reuse.",
          "The compliance concern only exists if the second patient develops an infection."
        ],
        correctIndex: 2,
        explanation: "Single-use devices may not be reused unless processed by an FDA-cleared third-party reprocessor. The manufacturer's safety and efficacy data applies only to the first use. Reuse without validated reprocessing carries unknown risks of contamination, device failure, and infection transmission — violating both JC and FDA requirements.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic19",
        question: "You perform hand hygiene entering a patient's room and again upon exit. You did NOT perform hand hygiene immediately before a dressing change during the visit. Which WHO moment was missed?",
        options: [
          "Moment 1 — Before patient contact (entry hand hygiene covers this).",
          "Moment 2 — Before an aseptic or clean procedure. Dressing change requires hand hygiene immediately before.",
          "Moment 4 — After patient contact.",
          "Moment 5 — After contact with patient surroundings."
        ],
        correctIndex: 1,
        explanation: "WHO Moment 2 is 'Before an aseptic or clean procedure.' A dressing change requires hand hygiene immediately before to protect the patient from microorganisms on your hands. Entry hand hygiene satisfies Moment 1 but does not substitute for the Moment 2 requirement immediately before the procedure.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ic20",
        question: "Your influenza patient is in a standard private room. Staff wear surgical masks when within 6 feet. Is this the correct precaution level?",
        options: [
          "No. Influenza requires airborne precautions and an N95 respirator.",
          "Yes. Droplet precautions (surgical mask within 6 feet) are appropriate for seasonal influenza in a private room.",
          "No. Influenza requires contact precautions only — no mask is needed beyond 1 foot from the patient.",
          "Yes. But only if the patient has received antiviral treatment within the past 24 hours."
        ],
        correctIndex: 1,
        explanation: "Seasonal influenza is transmitted primarily via large respiratory droplets and requires droplet precautions: surgical mask when within 6 feet of the patient (per updated CDC guidance), and a private room is preferred. A standard private room is appropriate — a negative pressure room is not required. N95 respirators are required for aerosol-generating procedures in influenza patients.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "ic1", '\n    ],\n  },\n\n  // ── PATIENT RIGHTS & RESPONSIBILITIES', new_ic)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 7 (npsg + ic) complete.")
