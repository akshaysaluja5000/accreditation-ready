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

# ─── UNIVERSAL PROTOCOL (up1-up20) ───────────────────────────────────────────
new_up = '''    questions: [
      {
        id: "up1",
        question: "During the Time-Out, the surgeon keeps reviewing an X-ray while the circulator reads the checklist. He says 'I'm listening.' Acceptable?",
        options: [
          "No. ALL activity must stop during the Time-Out and every team member must actively participate.",
          "Yes. Reviewing imaging during the Time-Out demonstrates preparation and situational awareness.",
          "Yes. As long as the surgeon acknowledges each item verbally, multitasking during the Time-Out is acceptable.",
          "Yes. Verbal acknowledgment satisfies the active participation requirement during a Time-Out."
        ],
        correctIndex: 0,
        explanation: "ALL activity must stop during the Time-Out. Passive listening is not active participation. Every team member must pause what they are doing and actively engage in the verification.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up2",
        question: "Your consent form lists the procedure as 'L TKA.' The left knee is marked and the patient confirms verbally. Is the consent form compliant?",
        options: [
          "Yes. 'L TKA' is universally recognized in orthopedic surgery and the patient's verbal confirmation validates the intent.",
          "Yes. Standard medical abbreviations are acceptable on consent forms when the patient can confirm understanding.",
          "No. Consent forms must use the full procedure name. 'L' is on the JC Do Not Use abbreviation list and can be misread.",
          "Yes. The site marking and verbal confirmation together compensate for the abbreviated consent."
        ],
        correctIndex: 2,
        explanation: "Consent forms must use the full written procedure name. 'L' (left) is on the JC Do Not Use list — it can be misread as '1' or 'right.' Verbal confirmation does not fix a documentation deficiency. Write 'Left Total Knee Arthroplasty.'",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up3",
        question: "Your patient's H&P was completed 20 days ago. Surgery is tomorrow. Is any additional documentation required?",
        options: [
          "Yes. Because the H&P is more than 24 hours old, a follow-up assessment is required within 24 hours of registration.",
          "No. A follow-up is only required if the H&P is more than 25 days old.",
          "Yes. You need a completely new H&P because 20 days exceeds the pre-surgical documentation window.",
          "No. The H&P is within the 30-day requirement and no further documentation is needed."
        ],
        correctIndex: 0,
        explanation: "Your H&P is within the 30-day window (compliant), but it is more than 24 hours old. A follow-up assessment examining the patient and noting any changes must be completed within 24 hours of registration or before surgery.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up4",
        question: "The attending marks the surgical site with the patient awake. After draping, the mark is completely covered and not visible. Compliant?",
        options: [
          "Yes. The mark location at the incision line is correct; post-draping visibility is a preference, not a requirement.",
          "Yes. The patient participated and the mark was correctly placed, fulfilling the marking requirement.",
          "No. Your site mark must be visible after the patient is prepped and draped.",
          "Yes. As long as the Time-Out was completed before draping, the mark does not need to remain visible."
        ],
        correctIndex: 2,
        explanation: "Your site mark must remain visible after prepping and draping so it can be confirmed during the Time-Out. A covered mark cannot serve its verification purpose. Place the mark where it will stay visible.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up5",
        question: "You identify a patient using their full name and room number before a procedure. Is this adequate identification?",
        options: [
          "Yes. Name and room number together provide two distinct identifiers linked to the patient's current admission.",
          "Yes. When combined with verbal confirmation, name and room number meet the two-identifier standard.",
          "Yes. Room number is facility-assigned and unique during the patient's stay, making it a valid second identifier.",
          "No. Room number is not a unique patient identifier. Use name and DOB, or name and MRN."
        ],
        correctIndex: 3,
        explanation: "Room numbers can change and are NOT unique to patients. You must use two unique patient identifiers: name and date of birth, or name and medical record number (MRN).",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up6",
        question: "For a THA patient you have: opioid screening done, advance directives addressed, H&P within 30 days with a 24-hour update, and proper consent. A surveyor asks what else is required before anesthesia.",
        options: [
          "A pre-anesthesia assessment must be completed and documented before anesthesia services are provided.",
          "A fall risk assessment must be completed before anesthesia, separate from the H&P requirements.",
          "A medication reconciliation by anesthesia is needed, but it is part of the H&P update.",
          "Nothing. All pre-operative requirements are met and the case may proceed."
        ],
        correctIndex: 0,
        explanation: "A pre-anesthesia assessment must be completed and documented before anesthesia can be given. It is a separate requirement from the H&P and all other pre-op checks.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up7",
        question: "During the Time-Out, which item should NOT be verified?",
        options: [
          "Fire risk assessment score.",
          "The patient's insurance status.",
          "Prophylactic antibiotic timing confirmed.",
          "Implant availability and specifications discussed."
        ],
        correctIndex: 1,
        explanation: "Insurance status is NEVER a Time-Out element. The three core JC Time-Out requirements are: correct patient identity, correct procedure, and correct site. Additional elements (antibiotic timing, fire risk, implants) are common but insurance status has no place in a surgical safety Time-Out.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up8",
        question: "Your TKA patient has no opioid screening documented. The surgeon says the patient is not on opioids so it is not needed. Is he correct?",
        options: [
          "Yes. Opioid screening is recommended best practice but not mandatory for TKA patients.",
          "Yes. Opioid screening is only needed if the patient is currently taking opioids or has a substance use history.",
          "No. Opioid screening must be documented for ALL THA and TKA patients regardless of current opioid use.",
          "Yes. The surgeon's clinical assessment that the patient is opioid-naive serves as an equivalent to formal screening."
        ],
        correctIndex: 2,
        explanation: "Opioid screening must be documented for ALL Total Hip (THA) and Total Knee (TKA) arthroplasty patients. Whether the patient currently uses opioids is irrelevant — the screening documentation is required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up9",
        question: "Your patient's H&P was performed 32 days before scheduled surgery. Is this H&P still valid?",
        options: [
          "No. Your H&P must be completed within 30 days prior to surgery. At 32 days, a new one is required.",
          "Yes. As long as a 24-hour update note is done, the original H&P is valid regardless of age.",
          "Yes. The 30-day window has a standard 72-hour grace period for scheduling flexibility.",
          "Yes. A follow-up assessment bridges the gap for H&Ps that are slightly outside the 30-day window."
        ],
        correctIndex: 0,
        explanation: "Your H&P must be completed within 30 days prior to surgery. At 32 days, it is expired and must be redone. There is no grace period.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up10",
        question: "A resident marks the surgical site while the attending runs late. The patient participates in the marking. Is this acceptable?",
        options: [
          "No. The provider who will perform the procedure must be the one to mark the site.",
          "Yes. A resident acting under the attending's direction is an extension of the attending's authority for site marking.",
          "Yes. Any credentialed physician on the surgical team can mark the site when the patient participates and confirms.",
          "Yes. Patient participation in marking is the critical safeguard, not which provider applies the mark."
        ],
        correctIndex: 0,
        explanation: "The provider who will perform the procedure must mark the site. Having a different provider mark it defeats the verification process regardless of patient participation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up11",
        question: "Your patient has no advance directive. You inform them and offer help creating one. The patient declines. Compliant?",
        options: [
          "No. Patients must create an advance directive before any procedure involving anesthesia.",
          "Yes. Offering assistance fulfills the requirement even if the patient declines.",
          "No. The patient's refusal must be documented with a witness signature to be compliant.",
          "No. The offer and refusal must be on a facility-specific advance directive waiver form."
        ],
        correctIndex: 1,
        explanation: "The requirement is to inform the patient and offer help completing an advance directive. Patients are not required to create one. Informing, offering, and documenting the outcome is all that is required.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up12",
        question: "Your consent form has a patient signature, date, time, and the full procedure name — but no witness signature. Is this consent complete per JC?",
        options: [
          "Yes per JC. JC requires patient signature, date, time, and full procedure name. Witness signature requirements are set by state law and facility policy, not by JC itself.",
          "No. Witness signature is only required for high-risk or invasive procedures but not all consents.",
          "No. The surgeon's signature on the operative report serves as witness verification.",
          "No. JC RI.01.03.01 explicitly requires both the patient and witness signatures."
        ],
        correctIndex: 0,
        explanation: "JC (RI.01.03.01) requires documentation that the patient was informed of risks, benefits, and alternatives. JC does NOT independently mandate a witness signature — that is governed by state law and your facility's policy. However, most facilities DO require witness signatures per their own policies, so always follow your facility's consent form requirements.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up13",
        question: "The surgeon who marked the site was called away. A different surgeon is now performing the case. Should the Time-Out proceed without the marking provider?",
        options: [
          "Yes. Any attending present can verify the site and complete the Time-Out as long as the mark is visible.",
          "Yes. The site mark is valid documentation and the replacing surgeon can proceed.",
          "No. The provider who marked the site must be present during the Time-Out.",
          "Yes. The circulating nurse can verify the mark against the consent form, which is sufficient."
        ],
        correctIndex: 2,
        explanation: "The provider who marked the surgical site must be present during the Time-Out to confirm correct site identification. If that provider is unavailable, the site may need to be re-verified and re-marked before the Time-Out can proceed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up14",
        question: "Your consent reads 'Right Total Knee Arthroplasty.' During the Time-Out the circulator reads it aloud as 'right TKA' to save time. Acceptable?",
        options: [
          "Yes. The written consent uses the full name; abbreviating during verbal read-back is acceptable for efficiency.",
          "Yes. The written consent is the legal document; the verbal read-back does not require exact wording.",
          "No. Your Time-Out must read the consent exactly as written. Abbreviating undermines the verification process.",
          "Yes. All team members understand standard orthopedic abbreviations, so verbal shorthand is functionally equivalent."
        ],
        correctIndex: 2,
        explanation: "The Time-Out requires reading the consent aloud for verification by all team members. Abbreviating during read-back can cause confusion and defeats the cross-check purpose. State the full procedure name.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up15",
        question: "Your patient's H&P was done 28 days ago. A follow-up assessment was documented 36 hours before surgery. Is all documentation current?",
        options: [
          "Yes. The follow-up timing is flexible as long as it occurs after the original H&P and before surgery.",
          "Yes. A 36-hour follow-up is within the 48-hour acceptable window for pre-surgical updates.",
          "Yes. The H&P is within 30 days and a follow-up assessment was done and documented.",
          "No. Your follow-up assessment must be completed within 24 hours after admission/registration AND before surgery."
        ],
        correctIndex: 3,
        explanation: "Your H&P is within 30 days, but the required follow-up must be within 24 hours of admission/registration and before surgery. If registration was less than 36 hours ago, the 36-hour-old update predates registration and fails. The update must be current at the time of surgery.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up16",
        question: "Time-Out for bilateral knee injections: surgeon states the procedure and bilateral sites, circulator confirms consent and both knees are marked. What was missed?",
        options: [
          "Only patient identification was missed; all other elements are optional for minor injection procedures.",
          "Nothing. Your Time-Out covered the procedure, bilateral sites, and consent verification.",
          "Nothing. Bilateral procedures only require site and consent verification since the procedure is the same on both sides.",
          "Patient identity was not confirmed. The three core JC Time-Out elements are: correct patient, correct procedure, correct site."
        ],
        correctIndex: 3,
        explanation: "The three CORE JC Time-Out elements are: (1) correct patient identity, (2) correct procedure, and (3) correct site. Patient identity was not explicitly verified here. A surveyor would flag the missing patient identity confirmation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up17",
        question: "For a THA patient: consent done (full name, timed, dated, signatures), H&P from 10 days ago with a 12-hour update, opioid screening done, advance directives addressed, site marked by attending with patient. Pre-anesthesia assessment not yet done. Can the case start?",
        options: [
          "Yes. The anesthesiologist can perform the assessment concurrently during induction to avoid surgical delays.",
          "Yes. The H&P with the 12-hour update satisfies the pre-anesthesia assessment requirement.",
          "Yes. All other requirements are met and pre-anesthesia can be done after induction while monitoring the patient.",
          "No. Your pre-anesthesia assessment must be completed and documented BEFORE anesthesia is administered."
        ],
        correctIndex: 3,
        explanation: "Pre-anesthesia assessment must be done before anesthesia is given — it cannot be deferred or performed concurrently with induction. All other requirements in this scenario are met, but the case must wait.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "up18",
        question: "Your consent form has: patient signature, witness signature, date, and full procedure name — but the time of signing is missing. Complete?",
        options: [
          "Yes. The time can be cross-referenced from nursing documentation and added to the consent retroactively.",
          "Yes. The date is sufficient for validity; the time is a supplemental element.",
          "No. Your consent form must include the time at the point of signature; retroactive additions are not acceptable.",
          "Yes. As long as the time is added before the patient enters the OR, the consent remains valid."
        ],
        correctIndex: 2,
        explanation: "Consent forms must include time, date, signatures, and the full procedure name at the time of signing. A missing time field makes the consent incomplete. Retroactive additions are not acceptable.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "up19",
        question: "You identify a patient using name and MRN printed on the wristband, confirmed by barcode scan. A surveyor asks if the identification was adequate.",
        options: [
          "No. Name and MRN must be verbally confirmed by the patient, not just read from the wristband.",
          "No. Barcode scanning alone is the required method; visual confirmation of name and MRN is outdated.",
          "Yes. Name and MRN are two unique patient identifiers. Barcode scanning adds an extra verification layer.",
          "No. Three identifiers are required for surgical patients: name, MRN, and date of birth."
        ],
        correctIndex: 2,
        explanation: "Name and MRN are two unique patient identifiers — this meets the requirement. Barcode scanning is an excellent additional verification method and does not replace the two-identifier check.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "up20",
        question: "Your attending marks with an 'X,' a colleague uses an arrow, another uses initials. A surveyor asks about your site marking method. What is the concern?",
        options: [
          "No concern. Any visible mark that both the patient and surgeon agree on is acceptable.",
          "No concern. Individual surgeon marking style is acceptable as long as the mark is at or near the incision site.",
          "No concern. Variety of marks actually adds identification because each surgeon's mark is unique.",
          "Your site marking method must be consistent and standardized across your facility per JC UP.01.02.01."
        ],
        correctIndex: 3,
        explanation: "JC requires a standardized, consistent organizational approach to site marking. When each surgeon uses their own method, the verification process becomes unreliable. Your facility must define and enforce one approved marking method.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "up1", '\n    ],\n  },\n  {\n    id: "patient_care_docs"', new_up)

# ─── PATIENT CARE DOCS (pc1-pc20) ────────────────────────────────────────────
new_pc = '''    questions: [
      {
        id: "pc1",
        question: "Your patient received IV morphine 45 minutes ago. You reassess pain at 1 hour and document it. Is this reassessment timing correct?",
        options: [
          "No. Reassessment must occur at exactly 45 minutes for parenteral medications per evidence-based guidelines.",
          "Yes. IV medication reassessment is required within 1 hour of administration.",
          "No. IV medication requires reassessment within 30 minutes to capture peak effect.",
          "No. IV opioid reassessment requires a 2-hour window to allow for full therapeutic effect."
        ],
        correctIndex: 1,
        explanation: "Parenteral (IV) pain medication must be reassessed within 1 hour. Your reassessment at 1 hour meets this requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc2",
        question: "Your patient received oral pain medication. You reassess at 1 hour and document 'no change.' Is this reassessment timing appropriate?",
        options: [
          "No. Reassessing too early produces inaccurate data and should be repeated at the 2-hour mark.",
          "No. Oral medication reassessment should occur at exactly 2 hours for peak therapeutic effect.",
          "No. At 1 hour, your reassessment is premature and the documented result is not clinically valid.",
          "Yes. Earlier reassessment is always acceptable. The required timeframe is the maximum, not the minimum."
        ],
        correctIndex: 3,
        explanation: "Reassessing earlier than the maximum required interval is always acceptable. The policy timeframe (typically 2 hours for oral medications) is the maximum — reassessing before that is fine as long as you document the result.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc3",
        question: "You apply an ice pack for pain. When should you reassess the patient's pain level?",
        options: [
          "Within 3 hours.",
          "Within 2 hours.",
          "Within 4 hours.",
          "Within 1 hour."
        ],
        correctIndex: 2,
        explanation: "Non-pharmacologic interventions typically have a 4-hour reassessment window, longer than IV (1 hour) or oral medications (2 hours), because they take longer to produce measurable effects. Your specific timeframe is set by facility policy.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc4",
        question: "Your patient denied pain during the second assessment window, so you did not document a second assessment. Is once-daily pain documentation compliant?",
        options: [
          "Yes. Pain denial eliminates the need for a second assessment as long as the first is documented.",
          "Yes. A verbal denial during rounds meets the pain management documentation standard.",
          "Yes. If the patient denies pain, no formal assessment documentation is needed since there is nothing to report.",
          "No. Pain must be assessed and documented a minimum of 2 times per 24 hours regardless of patient report."
        ],
        correctIndex: 3,
        explanation: "Pain must be assessed AND documented at least 2 times every 24 hours — even if the patient denies pain. The denial itself is the assessment and must be recorded.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc5",
        question: "Before giving opioids you assess the patient's sedation level. After administration you document pain score but not post-dose sedation level. Adequate?",
        options: [
          "Yes. Documenting the pain score implicitly captures sedation status since pain and sedation are inversely related.",
          "Yes. Post-administration sedation monitoring is only needed for high-dose opioids.",
          "No. Sedation level and LOC must be assessed BOTH before AND after every opioid administration.",
          "Yes. Pre-administration sedation assessment is sufficient since it establishes the safety baseline."
        ],
        correctIndex: 2,
        explanation: "Sedation level and level of consciousness must be assessed both before AND after every opioid dose. Pain scores alone are insufficient — post-opioid sedation monitoring is essential for detecting respiratory depression.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc6",
        question: "A surveyor checks your PACU. Medications are stored in a locked automated dispensing cabinet with access controls. Is this compliant?",
        options: [
          "No. Controlled substances in the PACU require a separate locked compartment from non-controlled medications.",
          "Yes. Your medications are secured in a locked system, which meets the requirement.",
          "No. PACU medications need additional double-lock verification beyond automated dispensing cabinet controls.",
          "No. PACU medications must be stored in a separate locked room, not an automated dispensing cabinet."
        ],
        correctIndex: 1,
        explanation: "All medications in all locations, including the PACU, must be secured. Your locked automated dispensing cabinet meets this requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc7",
        question: "A PRN order reads 'Ondansetron 4mg IV PRN.' Is this order complete?",
        options: [
          "Yes. The indication is only required for controlled substances, not standard PRN medications like ondansetron.",
          "Yes. The clinical indication is implied since ondansetron is universally known as an antiemetic.",
          "No. Your PRN orders must include the clinical indication, such as 'for nausea.'",
          "Yes. Drug name, dose, route, and PRN designation meet the minimum order requirements."
        ],
        correctIndex: 2,
        explanation: "PRN medication orders must include the clinical indication — the specific reason to give the medication. 'PRN' alone without 'for nausea' or another indication is incomplete.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc8",
        question: "Your post-anesthesia evaluation was completed 50 hours after the procedure. Is this within the required timeframe?",
        options: [
          "Yes. The 48-hour guideline allows a reasonable grace period for weekends and staffing constraints.",
          "Yes. The evaluation was completed within 3 calendar days, which meets the intent of the requirement.",
          "Yes. The standard is a 72-hour window for post-anesthesia assessments.",
          "No. Your post-anesthesia evaluation must be completed within 48 hours of the procedure."
        ],
        correctIndex: 3,
        explanation: "Your post-anesthesia evaluation must be completed within 48 hours of the procedure. At 50 hours, it exceeds the required timeframe — no grace period applies.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc9",
        question: "Your post-op note includes: surgeon, assistants, findings, procedures, specimens, EBL, and post-op diagnosis. It is signed and dated but has no time. Complete?",
        options: [
          "No. Authentication requires signed, dated, AND timed. Your missing time makes the note incomplete.",
          "Yes. The time of the procedure is in the operative record and does not need to be on the post-op note.",
          "Yes. The time is supplemental and can be added retroactively from the anesthesia record.",
          "Yes. Signed and dated is sufficient authentication for immediate post-op notes."
        ],
        correctIndex: 0,
        explanation: "Your post-op note must be authenticated with signature, date, AND time. Missing any authentication element makes the note incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc10",
        question: "Your facility retains tissue tracking records for 7 years with full donor-to-recipient traceability. Is this adequate?",
        options: [
          "No. Tissue records must be retained for a minimum of 10 years.",
          "Yes. Seven years exceeds the 5-year FDA minimum for tissue documentation retention.",
          "Yes. Tissue records follow the same 7-year retention schedule as general surgical records.",
          "Yes. Seven years meets the standard medical records retention period, which applies equally to tissue tracking."
        ],
        correctIndex: 0,
        explanation: "Tissue records must be retained for a minimum of 10 years with full traceability from donor to recipient and back. Seven years is insufficient.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc11",
        question: "Your patient screens positive on the C-SSRS. You document the positive screen and notify the physician. Is anything else required?",
        options: [
          "No. Physician notification triggers an automatic psychiatric consult, which fulfills the follow-up requirement.",
          "No. The C-SSRS is the comprehensive assessment tool and no additional evaluation is required.",
          "No. Positive screen documentation and physician notification is sufficient for initial management.",
          "Yes. A SAFE-T risk assessment must follow, and you must provide the patient with 988 Crisis Lifeline information."
        ],
        correctIndex: 3,
        explanation: "A positive suicide screen requires a SAFE-T risk assessment (thoughts, method, plan, behaviors, intent), suicide precaution orders matched to risk level, documented safety checks, and providing the 988 Crisis Lifeline number to the patient.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc12",
        question: "You applied restraints to a combative patient. Your documentation shows: physician order, time of application, and patient assessment. Is this complete?",
        options: [
          "No. Your documentation must also show that less restrictive alternatives were tried and were ineffective.",
          "Yes. Physician order, time of application, and patient assessment are the required elements.",
          "Yes. The physician order itself implicitly documents that alternatives were considered before restraints.",
          "Yes. Combative behavior justifies immediate restraint application without requiring documentation of alternatives."
        ],
        correctIndex: 0,
        explanation: "Restraint documentation must include proof that less restrictive alternatives were attempted first and were ineffective. Restraints are a last resort and this must be explicitly documented.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pc13",
        question: "How often must you document intake and output (I&O) at minimum?",
        options: [
          "Every 8 hours.",
          "Once per shift, documented at shift change.",
          "Every 4 hours.",
          "Every 12 hours."
        ],
        correctIndex: 0,
        explanation: "Intake and output must be documented at a minimum of every 8 hours.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc14",
        question: "Your tissue supplier's FDA registration was verified 15 months ago. You are still receiving tissue from them. Is this acceptable?",
        options: [
          "Yes. FDA registration verification is required every 2 years, so 15 months is within the acceptable window.",
          "No. Your facility must verify that tissue suppliers are FDA-registered on an annual basis.",
          "Yes. If the supplier provides a current FDA certificate with each shipment, independent verification is not required.",
          "Yes. FDA registration only needs verification at initial contracting and during contract renewal."
        ],
        correctIndex: 1,
        explanation: "Tissue suppliers must be verified as FDA-registered annually. At 15 months since your last verification, this is overdue.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "pc15",
        question: "You give IV Dilaudid at 2:00 PM. At 2:45 PM you document the pain score but not sedation level. At 3:00 PM you document LOC. How many documentation deficiencies are present?",
        options: [
          "None. The 2:45 PM pain score implicitly includes sedation since you must observe the patient to document it.",
          "One. The only deficiency is the delayed LOC at 3:00 PM; pre-administration assessment is not required for subsequent doses.",
          "None. LOC was documented within an hour and pain was assessed at an appropriate interval.",
          "One. Your pre-administration sedation and LOC assessment is missing. Both pre- and post-dose assessments must be documented."
        ],
        correctIndex: 3,
        explanation: "Sedation level and LOC must be assessed before AND after every opioid dose. In this scenario, the pre-administration assessment is entirely missing. The post-dose LOC at 60 minutes is within policy for IV opioids, but the missing pre-administration assessment is a deficiency.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc16",
        question: "Your post-anesthesia evaluation at 40 hours documents: respiratory, cardiovascular, mental status, pain, nausea/vomiting, and hydration. What is missing?",
        options: [
          "Nothing is missing. The 40-hour timeframe exceeds the 24-hour maximum, which is the actual finding.",
          "Temperature is missing. All 7 required elements must be documented — respiratory, cardiovascular, mental status, temperature, pain, nausea/vomiting, and hydration.",
          "The evaluation must be completed in the PACU prior to discharge, not 40 hours post-procedure.",
          "Nothing. The six documented elements are a complete post-anesthesia evaluation within the required timeframe."
        ],
        correctIndex: 1,
        explanation: "Your post-anesthesia evaluation must include all 7 elements: respiratory function, cardiovascular function, mental status, temperature, pain, nausea/vomiting, and hydration status. Temperature is missing. The 40-hour timeframe is within the 48-hour requirement.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc17",
        question: "A range PRN order reads 'Morphine 2–4 mg IV PRN for pain.' One nurse gives 4 mg for pain of 3/10. Another gives 2 mg for pain of 8/10. Is this appropriate?",
        options: [
          "Yes. Range orders allow nurses to use professional discretion, and factors beyond pain score inform dosing.",
          "Concerning. The administration pattern — maximum dose for mild pain and minimum for severe pain — does not reflect individualized assessment.",
          "Yes. As long as both doses fall within the prescribed range and the 4-hour interval is maintained, administration is compliant.",
          "Yes. Both are within the range order and reflect individual clinical judgment."
        ],
        correctIndex: 1,
        explanation: "Range orders require clinical judgment that matches dose to actual pain level and clinical status. Giving the maximum dose for mild pain (3/10) and the minimum for severe pain (8/10) suggests assessment is not driving dosing decisions. This administration pattern warrants review.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc18",
        question: "Your immediate post-op note includes: surgeon name, findings, procedures, specimens removed, and post-op diagnosis. It is signed and dated. What required elements are missing?",
        options: [
          "Only the time of authentication. Assistant names are included in the operative report separately.",
          "Only assistant names. All other required elements are present.",
          "Only estimated blood loss (EBL). Assistants are optional on immediate post-op notes.",
          "Assistant names, EBL, specimen disposition, and the time of authentication are all missing."
        ],
        correctIndex: 3,
        explanation: "Your immediate post-op note requires: surgeon name, assistant names, findings, procedures, specimens AND their disposition, EBL, post-op diagnosis, and authentication (signed, dated, AND timed). This note is missing assistant names, EBL, specimen disposition, and the time of authentication.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc19",
        question: "Your patient screens positive on the C-SSRS. You document the screen and place them on 1:1 observation. What additional steps are required?",
        options: [
          "None. A positive screen with 1:1 observation is the maximum required intervention until psychiatric consultation.",
          "SAFE-T risk assessment, suicide precaution orders matched to risk level, documented safety checks, and providing the 988 Crisis Lifeline number.",
          "None. One-to-one observation is the highest precaution and encompasses all required safety measures.",
          "Only a psychiatric consultation referral. The 1:1 observation and documented screen satisfy all other requirements."
        ],
        correctIndex: 1,
        explanation: "A positive C-SSRS screen triggers required next steps: SAFE-T risk assessment, matched precaution orders, documented safety checks, ligature-resistant garments for high-risk patients, and providing the 988 Crisis Lifeline information to the patient.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pc20",
        question: "Your patient has been in restraints for 6 hours. Documentation shows: initial order, initial assessment, and a note that alternatives were attempted. The restraint flowsheet has not been updated in 4 hours. Adequate?",
        options: [
          "Yes. Restraint reassessment is only required at order renewal, not continuously.",
          "Yes. The initial order, assessment, and alternatives documentation are sufficient for a 6-hour restraint period.",
          "Yes. A 4-hour documentation gap is acceptable as long as the patient is being visually monitored.",
          "No. Restraints require ongoing flowsheet documentation with regular reassessments, not just an initial assessment."
        ],
        correctIndex: 3,
        explanation: "Restraint documentation must be continuous. Your restraint flowsheet must be updated at regular intervals with reassessments throughout the restraint period. An initial assessment alone is insufficient.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "pc1", '\n    ],\n  },\n  {\n    id: "eoc_safety"', new_pc)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 4 complete.")
