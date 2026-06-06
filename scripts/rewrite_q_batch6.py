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

# ─── MEDICATION MANAGEMENT (mm1-mm20) ────────────────────────────────────────
new_mm = '''    questions: [
      {
        id: "mm1",
        question: "You find an unlabeled syringe on a procedure tray pre-drawn by a colleague who stepped out. You believe it's midazolam based on context. Can you administer it?",
        options: [
          "Yes. You may administer it if your colleague confirms the contents upon return.",
          "Yes. Clinical context and syringe size are reliable identifiers for common procedural medications.",
          "No. Any unlabeled medication must be discarded regardless of suspected identity.",
          "No. But only if the label is missing the expiration date; a partial label is acceptable."
        ],
        correctIndex: 2,
        explanation: "JC requires all medications to be labeled at the point of preparation. Any unlabeled medication — regardless of suspected identity — must be discarded. Context assumptions are not a safe substitute for a label.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm2",
        question: "A surveyor finds a vial of concentrated potassium chloride (20 mEq/10 mL) in your medical-surgical unit's medication drawer. What is the finding?",
        options: [
          "Minor finding. Concentrated KCl is acceptable on MS units when kept in a locked drawer.",
          "No finding. 20 mEq is below the threshold requiring pharmacy-only storage.",
          "Immediate finding. Concentrated electrolytes must not be stored in patient care areas outside the pharmacy.",
          "Finding only if the vial is not labeled with a warning sticker."
        ],
        correctIndex: 2,
        explanation: "Following multiple fatal KCl administration errors, JC requires concentrated potassium chloride to be removed from all patient care units. Storing concentrated KCl on a unit is an immediate finding regardless of access controls or drawer locks.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm3",
        question: "An order is written for '5 U regular insulin IV.' What is wrong with this order?",
        options: [
          "Nothing. 'U' is an accepted standard abbreviation for units in insulin orders.",
          "'U' is on the Do Not Use list — it can be misread as a zero. The order must read '5 units.'",
          "Only the route is incorrect. 'U' is acceptable but insulin cannot be given IV.",
          "'U' is only prohibited in paper orders, not in electronic order entry."
        ],
        correctIndex: 1,
        explanation: "'U' is on the JC Do Not Use list because it has been misread as the number zero, causing 10-fold dosing errors. Orders must spell out 'units' in full. This applies to both handwritten and electronic orders.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm4",
        question: "DOBUTamine and DOPamine are stored side by side in the same bin in your medication room. What does JC require for these LASA medications?",
        options: [
          "Nothing additional. LASA drugs may be stored together if both vials have clear labels visible from the front.",
          "Nothing additional. Side-by-side storage is acceptable when both drugs are in the same therapeutic class.",
          "Separate storage and differentiation strategies such as tall-man lettering and electronic alerts.",
          "Action is only required for LASA pairs in the same dosage form — IV formulations are excluded."
        ],
        correctIndex: 2,
        explanation: "DOBUTamine and DOPamine are a high-profile LASA pair. JC requires you to identify LASA drugs and implement differentiation strategies: physical separation, tall-man lettering, and electronic order alerts. Storing them together increases dangerous mix-up risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm5",
        question: "Your nurse completes a medication history at admission but does not compare home medications against the physician's admission orders. What process is missing?",
        options: [
          "Nothing. Medication history documentation alone satisfies the admission requirement.",
          "Medication reconciliation. Your home medication list must be compared against admission orders to identify discrepancies.",
          "Only a pharmacist is required to perform admission medication reconciliation, not nursing.",
          "Reconciliation is only required for patients with five or more home medications."
        ],
        correctIndex: 1,
        explanation: "Medication reconciliation requires comparing your patient's complete home medication list against new admission orders to identify omissions, duplications, dose changes, and interactions. Simply documenting the home list without comparing it to the orders is not reconciliation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm6",
        question: "Your crash cart inspection finds two medications expired 3 weeks ago. The cart was sealed and inspected on schedule. What is the finding?",
        options: [
          "No finding. Sealed crash carts are presumed stocked to formulary until opened.",
          "Immediate finding. All crash cart medications must be within expiration date.",
          "Finding only if the expired medications are controlled substances.",
          "Minor finding if your facility can document that the expired items were not needed during the inspection period."
        ],
        correctIndex: 1,
        explanation: "Crash cart medications must be within expiration date at all times. Expired medications found during inspection — regardless of whether the cart was sealed — are a direct JC finding. Your inspection protocol must include expiration date verification.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm7",
        question: "Your nurse gives a PRN hydrocodone tablet for pain and charts the administration. Two hours later, no follow-up pain assessment is documented. What standard was missed?",
        options: [
          "None. Charting administration is the only documentation required for PRN medications.",
          "The nurse should have notified the physician if the pain medication was ineffective.",
          "PRN medication effectiveness must be assessed and documented following administration.",
          "Follow-up assessment is only required for IV opioids, not for oral PRN medications."
        ],
        correctIndex: 2,
        explanation: "JC requires PRN medication effectiveness to be documented following administration. A post-administration pain assessment is required for all PRN pain medications — the interval is set by your facility's policy.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm8",
        question: "An order reads 'Warfarin 2.5mg QD.' What is the compliance concern?",
        options: [
          "None. 'QD' is a standard approved abbreviation for once-daily dosing.",
          "'QD' is on the Do Not Use list — it can be misread as 'QID' (4x daily). The order must read 'warfarin 2.5 mg daily.'",
          "The concern is the dose. Warfarin must not be ordered below 5 mg.",
          "'QD' is only prohibited for controlled substance orders, not anticoagulants."
        ],
        correctIndex: 1,
        explanation: "'QD' is prohibited under JC's Do Not Use list because it can be misread as 'QID' — a 4-fold dosing error. For a high-alert medication like warfarin, this error could cause serious hemorrhagic complications. All orders must use 'daily' instead of QD.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm9",
        question: "Your scrub tech draws up three syringes of different concentrations on the sterile field without labels, planning to label them after the next step. Acceptable?",
        options: [
          "Yes. Syringes on a sterile field are excluded from labeling requirements during active procedures.",
          "Yes. The scrub tech may rely on position and color-coded syringe sizes to differentiate unlabeled syringes.",
          "No. All medications on the sterile field must be labeled at the time of preparation, not after.",
          "No. Only the highest concentration syringe requires immediate labeling on the sterile field."
        ],
        correctIndex: 2,
        explanation: "All medications on your sterile field must be labeled at the time of preparation. This is a top-cited OR finding. Labels must include at minimum drug name and concentration. Relying on memory, position, or syringe appearance to differentiate unlabeled drugs creates patient safety risk.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm10",
        question: "A handwritten order reads '.5 mg Alprazolam PO' (no leading zero). What Do Not Use rule does this violate?",
        options: [
          "None. '0.5 mg' and '.5 mg' are clinically equivalent and both are acceptable in orders.",
          "Trailing zeros should have been added: '0.50 mg' is the compliant format.",
          "A leading zero must precede the decimal point. '.5 mg' can be misread as '5 mg' — a 10-fold dosing error.",
          "Decimal-based dosing must be written in fractions, not decimals, in handwritten orders."
        ],
        correctIndex: 2,
        explanation: "JC's Do Not Use list requires a leading zero before decimal points: '0.5 mg,' not '.5 mg.' Without the leading zero, a handwritten '.5' can be misread as '5' — a 10-fold error. Trailing zeros are also prohibited ('1.0 mg' becomes '10 mg' if the decimal is missed).",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm11",
        question: "Your patient transfers from the ICU to a step-down unit. The ICU nurse gives a verbal handoff but no medication reconciliation is performed. What is missing?",
        options: [
          "Nothing. Verbal handoff satisfies the transfer reconciliation requirement.",
          "Medication reconciliation must occur at every care transition, including unit-to-unit transfers within the same hospital.",
          "Reconciliation is only required at admission and discharge, not for intra-hospital transfers.",
          "Transfer reconciliation is only required when medications change during the ICU stay."
        ],
        correctIndex: 1,
        explanation: "JC requires medication reconciliation at every care transition — admission, unit-to-unit transfers, and discharge. ICU-to-step-down transfers carry high risk because patients often have complex regimens. Omissions and inappropriate continuations must be caught at every transition.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm12",
        question: "Your unit keeps 23.4% hypertonic saline on the floor for rapid access during neurological emergencies. Is this compliant?",
        options: [
          "Yes. Neurological emergencies justify floor stock of concentrated saline for rapid response.",
          "Yes. Hypertonic saline above 3% is permitted on units with documented emergency protocols.",
          "No. Concentrated hypertonic saline (above 0.9%) must be stored in pharmacy with controlled access.",
          "No. But only if your unit lacks a dedicated medication room for separate secure storage."
        ],
        correctIndex: 2,
        explanation: "Hypertonic saline above 0.9% is a high-alert concentrated electrolyte. Like concentrated KCl, it must be restricted to pharmacy storage with controlled dispensing — even for units that need rapid neurological emergency access. Work with pharmacy to establish a rapid dispensing protocol instead of maintaining floor stock.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm13",
        question: "Your pharmacist identifies 'hydroxyzine' and 'hydralazine' in adjacent bins in the automated dispensing cabinet. What action does JC require?",
        options: [
          "None. Automated dispensing cabinets prevent selection errors through pocket labeling.",
          "Separate the pair in storage and differentiate them with tall-man lettering or alert labels.",
          "Action is only required if both medications are in the same dosage form.",
          "Pharmacy must obtain physician approval before implementing any LASA separation changes."
        ],
        correctIndex: 1,
        explanation: "HydrOXYzine and hydrALAzine are a classic dangerous LASA pair. Adjacent ADC storage increases selection error risk. JC requires physical separation, tall-man lettering, and alert overlays. ADC pocket labeling alone is insufficient differentiation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm14",
        question: "Vecuronium (a neuromuscular blocking agent) is stored in your medication room with no special labeling or access restriction. What safeguard does JC require?",
        options: [
          "None. Neuromuscular blockers are safely stored with other standard medications.",
          "A warning label only when stored with look-alike vials of similar size.",
          "Warning labels AND additional access restrictions due to respiratory arrest risk.",
          "Special storage applies only to succinylcholine, not to non-depolarizing NMBAs like vecuronium."
        ],
        correctIndex: 2,
        explanation: "Neuromuscular blocking agents are on the ISMP high-alert list because accidental administration causes respiratory arrest. JC requires prominent warning labels ('Warning: Paralyzing Agent — Causes Respiratory Arrest'), separate storage, and access controls for ALL NMBAs, not just succinylcholine.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm15",
        question: "A physician writes 'MS 4mg IV q4h PRN pain.' What is the risk with the abbreviation 'MS'?",
        options: [
          "None. 'MS' is universally understood as morphine sulfate.",
          "'MS' can be confused with 'magnesium sulfate.' The order must spell out 'morphine sulfate' in full.",
          "The risk only applies to written orders. Electronic orders may use 'MS' since the system auto-populates the full name.",
          "'MS' is prohibited only when ordering for pediatric patients due to dosing sensitivity."
        ],
        correctIndex: 1,
        explanation: "'MS,' 'MSO4,' and 'MgSO4' are all on the JC Do Not Use list. 'MS' can be interpreted as either morphine sulfate or magnesium sulfate — two entirely different drugs. Full drug names must always be written. This confusion has caused patient deaths.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm16",
        question: "Your discharge medication list omits two home medications deliberately held during the stay, with no documented reason for discontinuation. What is missing?",
        options: [
          "Nothing. Medications not ordered during the stay are automatically discontinued at discharge.",
          "Nothing. Your discharge list satisfies requirements if it includes all medications ordered during the inpatient stay.",
          "Discharge reconciliation must account for all home medications. Intentional discontinuations must include clinical rationale.",
          "The physician's verbal stop order substitutes for written reconciliation documentation."
        ],
        correctIndex: 2,
        explanation: "Your medication reconciliation at discharge must account for all home medications. If a home medication is intentionally not continued at discharge, the reason must be documented — this prevents patients from stopping important medications due to confusion about intentional vs. accidental omissions.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm17",
        question: "Your unit has heparin in two concentrations — 25,000 units/250 mL and 25,000 units/500 mL — in the same bin. What safeguard does JC require?",
        options: [
          "None. The concentration difference is apparent from the volume printed on each bag label.",
          "Multiple concentrations of high-alert drugs must be clearly differentiated, stored separately, with prominent concentration labeling.",
          "Remove the lower concentration bag from floor stock and make it pharmacy-only.",
          "Dual concentrations are acceptable if nurses verbally confirm concentration before hanging each bag."
        ],
        correctIndex: 1,
        explanation: "Heparin is a high-alert anticoagulant. Two concentrations in the same location — 100 units/mL and 50 units/mL — is a dangerous mix-up scenario. JC requires physical separation, prominent labeling, and ideally limiting to one standard concentration. Verbal confirmation alone is insufficient.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm18",
        question: "Your nurses routinely override the pharmacy verification system for non-urgent medications to avoid delays. What is the compliance concern?",
        options: [
          "None. Nurse override authority is appropriate for any time-sensitive medication.",
          "Acceptable as long as the nurse documents clinical rationale in the chart.",
          "Overrides should be limited to true emergencies. Routine overrides bypass the pharmacist review that catches errors before administration.",
          "Override compliance depends only on whether the pharmacy is closed at the time."
        ],
        correctIndex: 2,
        explanation: "Pharmacist review is a critical safety check. JC expects facilities to monitor override patterns and restrict overrides to true clinical emergencies. High override rates signal systemic problems — understaffing, workflow issues, or inadequate pharmacy support — that increase medication error risk.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "mm19",
        question: "Your nurse administers insulin to a patient without checking blood glucose first. The order reads 'Regular Insulin 10 units subcutaneous now.' What risk does this represent?",
        options: [
          "None. The physician ordered the dose without a glucose parameter, so the nurse followed the order correctly.",
          "No risk if the patient reports feeling fine.",
          "Administering insulin without verifying current blood glucose risks severe hypoglycemia. Glucose should be checked per protocol before administration.",
          "Risk only exists for sliding-scale insulin orders, not for fixed-dose orders."
        ],
        correctIndex: 2,
        explanation: "Insulin is a high-alert medication. Administering a fixed dose without knowing current blood glucose risks hypoglycemia — especially if the patient has not eaten or had unexpected glucose changes. Your protocol should require glucose verification before insulin administration.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "mm20",
        question: "A surveyor asks your nurse to explain your high-alert medication safeguard system. The nurse says 'high-alert drugs have a red sticker.' Is this a sufficient safeguard?",
        options: [
          "Yes. A visual warning label is a complete and sufficient safeguard for high-alert medication management.",
          "No. Your facility must have a documented high-alert medication policy with specific safeguards beyond labeling alone.",
          "Yes. JC only requires that staff can visually identify high-alert medications at the point of use.",
          "No. Stickers must be replaced with packaging-level changes made by the pharmacy department."
        ],
        correctIndex: 1,
        explanation: "A warning label alone does not constitute a comprehensive safeguard system. JC requires a documented policy identifying your high-alert medications AND specific safeguards for each: separate storage, double-check requirements, staff education, and monitoring. Labels are one element, not the complete system.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "mm1", '\n    ],\n  },\n\n  // ── NATIONAL PERFORMANCE GOALS', new_mm)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 6 (mm) complete.")
