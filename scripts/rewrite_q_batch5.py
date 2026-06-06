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

# ─── EOC SAFETY (eoc1-eoc20) ─────────────────────────────────────────────────
new_eoc = '''    questions: [
      {
        id: "eoc1",
        question: "A surveyor holds a tissue at the bottom of your OR door. It pushes outward into the hallway. What does this mean?",
        options: [
          "Your OR has negative pressure, which is incorrect. ORs require positive pressure to keep contaminants out.",
          "Your OR has positive pressure, which is correct. Outward airflow confirms contaminants are pushed away from the sterile field.",
          "Inconclusive. The tissue test must be done at the top of the door frame to measure accurately.",
          "Your OR has negative pressure. Outward tissue movement confirms air is exhausted via HEPA filters."
        ],
        correctIndex: 1,
        explanation: "ORs must be maintained at positive pressure so air flows OUT into hallways, preventing contaminants from entering the surgical environment. Tissue pushing outward confirms your OR is correctly at positive pressure.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc2",
        question: "Your soiled utility room door is open while a housekeeper mops inside. Is this a compliance issue?",
        options: [
          "No. Doors may be open during active cleaning since the housekeeper is present and preventing access.",
          "No. Soiled utility room doors only need to be closed when contaminated materials are being transported.",
          "Yes. Your soiled utility room door must remain closed at all times to contain contamination.",
          "No. Your door only needs to be closed when the room is unoccupied and not actively in use."
        ],
        correctIndex: 2,
        explanation: "Soiled utility room doors must remain closed at ALL times to contain contamination, odors, and airborne particles. Active cleaning does not exempt this requirement.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc3",
        question: "Your fire extinguisher inspection tag is initialed and dated 28 days ago this month. Is this compliant?",
        options: [
          "No. Your fire extinguisher must be inspected weekly, not monthly.",
          "Yes. Monthly inspection is required, and a 28-day-old inspection is within the current calendar month.",
          "No. Fire extinguishers must be inspected immediately before every shift, not monthly.",
          "No. Your facility must use electronic fire extinguisher monitoring and physical tags are no longer accepted."
        ],
        correctIndex: 1,
        explanation: "Fire extinguishers must be inspected monthly. A 28-day-old inspection tag within the current month is compliant.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc4",
        question: "Your eyewash station flushing log shows the last flush was performed 8 days ago. Is this compliant?",
        options: [
          "No. Your eyewash stations must be flushed daily.",
          "Yes. Eyewash stations only need to be flushed when visibly contaminated or after use.",
          "Yes. Your station was flushed within the accepted 2-week interval.",
          "No. Your eyewash stations must be flushed weekly to maintain water quality and verify function."
        ],
        correctIndex: 3,
        explanation: "Eyewash stations must be flushed weekly (at minimum) to maintain water quality and verify the unit functions properly. At 8 days, your station is overdue.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc5",
        question: "A surveyor finds your emergency exit blocked by a supply cart during a busy shift. Staff says it will be cleared after the rush. Is this a finding?",
        options: [
          "Yes. Your emergency exits must remain clear and unobstructed at all times. No exceptions.",
          "No. Temporary obstruction during peak operational hours is a recognized operational necessity.",
          "No. Your exit has an overhead illuminated exit sign and a secondary exit within 100 feet.",
          "No. Your emergency exit only needs to be clear during fire drills and actual emergencies."
        ],
        correctIndex: 0,
        explanation: "Emergency exits must remain clear and unobstructed at ALL times. There are no exceptions for busy periods or operational convenience.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc6",
        question: "Your OR positive-pressure air exchange runs 20 exchanges per hour. The standard requires a minimum of 20. Compliant?",
        options: [
          "No. Your OR must exceed the minimum of 20 exchanges — meeting the exact minimum is not sufficient.",
          "Yes. Meeting the minimum of 20 exchanges per hour satisfies the OR ventilation requirement.",
          "No. Your OR requires a minimum of 25 air exchanges per hour; 20 is the standard for procedure rooms.",
          "No. Your ventilation must be validated quarterly, regardless of the current exchange rate."
        ],
        correctIndex: 1,
        explanation: "ORs require a minimum of 20 air exchanges per hour. Meeting the minimum exactly is compliant.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc7",
        question: "Your clean supply room has a mop and bucket stored in the corner after the morning cleaning. Is this a finding?",
        options: [
          "No. Cleaning equipment may be stored in clean supply rooms when not actively in use and not near supplies.",
          "No. Mops are only a finding when stored wet; a dry mop in a clean room does not represent a contamination risk.",
          "Yes. Your clean supply room must not contain cleaning equipment. Mops belong in the soiled utility or janitor's closet.",
          "No. Your clean supply room must only exclude hazardous materials; mops are not classified as hazardous."
        ],
        correctIndex: 2,
        explanation: "Clean supply rooms must not contain cleaning equipment, soiled items, or anything that could contaminate supplies. Your mop and bucket must be stored in the soiled utility room or janitorial closet.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc8",
        question: "Your patient room computer screen is unlocked, visible to the door, and displaying the patient's name and diagnosis. The door is open. Is this a concern?",
        options: [
          "No. Your patient room is semi-private and shared information in this space is permitted.",
          "No. Displaying PHI on a screen in a patient's own room is not a privacy violation.",
          "No. The attending and charge nurse regularly pass by the room, so the information is only visible to authorized staff.",
          "Yes. Your computer must be locked or positioned so PHI is not visible to unauthorized persons passing the doorway."
        ],
        correctIndex: 3,
        explanation: "PHI must be protected in all forms, including on screens. With the door open, anyone passing your doorway — including visitors and other patients — can see the information. Your screen must be locked or positioned to prevent unauthorized viewing.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc9",
        question: "Your facility's patient whiteboard in a room near the hallway shows the patient's full name, diagnosis, and nurse's name. Is this a privacy concern?",
        options: [
          "No. Whiteboards are an approved communication tool and the information is visible only to those entering the patient's room.",
          "No. PHI on a whiteboard in the patient's own room is considered acceptable under HIPAA's treatment exception.",
          "Yes. Your whiteboard must either be positioned so it is not visible from the hallway OR display only non-identifying information.",
          "No. Whiteboards in patient rooms are exempt from privacy standards because patients have consented to their room assignment."
        ],
        correctIndex: 2,
        explanation: "Whiteboards visible from hallways display PHI to anyone who passes, including non-authorized visitors. Your whiteboard must be positioned so it is not visible from outside the room, or it should use non-identifying information only.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc10",
        question: "A surveyor finds your crash cart padlock broken. Staff says a new one is on order. Is this a finding?",
        options: [
          "No. A broken padlock is a facilities maintenance issue, not a patient safety finding, as long as the cart is still accessible.",
          "No. Crash carts only need to be secured when not in use; during the shift the cart is accessible regardless of lock status.",
          "Yes. Your crash cart must be locked and tamper-evident at all times. A broken lock is an immediate finding.",
          "No. Your crash cart can remain in service during a brief transition period while awaiting a replacement lock."
        ],
        correctIndex: 2,
        explanation: "Your crash cart must be locked and tamper-evident at all times. A broken padlock means you cannot verify that the cart contents have not been accessed or altered since the last documented check. This is an immediate finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc11",
        question: "Your hazardous materials storage room has a proper NFPA diamond on the door. Inside, flammables and corrosives are in the same unlocked metal cabinet. Is this compliant?",
        options: [
          "No. Your flammable and corrosive materials must be stored in separate, appropriately rated containers or cabinets.",
          "Yes. The NFPA diamond on the door provides adequate hazard identification for the entire room's contents.",
          "Yes. Metal cabinets provide sufficient separation when contents are labeled with proper GHS hazard labels.",
          "No. Hazardous materials must be stored in a room with a sprinkler system regardless of cabinet type."
        ],
        correctIndex: 0,
        explanation: "Flammables and corrosives must be stored in separate, appropriately rated storage containers or cabinets. Co-storing incompatible chemicals in the same cabinet creates reaction and fire risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc12",
        question: "Your glucometer cleaning log shows the correct product and dwell time, but the 'cleaned by' field is blank for 3 of the last 10 entries. Is this a concern?",
        options: [
          "No. The product and dwell time are the critical compliance fields; staff identification is optional.",
          "No. Three missing initials out of 10 entries represents a minor documentation gap, not a compliance finding.",
          "Yes. All cleaning log fields — including who performed the cleaning — must be completed for every entry.",
          "No. As long as the most recent entry is complete, older entries with missing initials are not reviewed."
        ],
        correctIndex: 2,
        explanation: "All fields in your cleaning and disinfection logs must be completed for every entry. Incomplete documentation makes it impossible to verify accountability and traceability for cleaning procedures.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc13",
        question: "Your linen cart in the hallway has a torn cover exposing the clean linens below. Is this a finding?",
        options: [
          "No. Clean linen carts are only required to be covered during transport, not during stationary storage.",
          "No. A torn cover still provides significant protection and is acceptable until the next supply order.",
          "Yes. Your clean linen must be covered at all times to protect it from contamination.",
          "No. Your hallway is a restricted area; unauthorized personnel cannot access the linen."
        ],
        correctIndex: 2,
        explanation: "Clean linen must be covered at all times to protect it from airborne and contact contamination. A torn cover that exposes linens is a finding regardless of whether the cart is stationary or in transit.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc14",
        question: "Your sharps container is labeled and mounted properly but positioned 5.5 feet high on the wall. Is this compliant?",
        options: [
          "No. Your sharps container must be mounted at waist level, between 3 and 5 feet from the floor.",
          "No. Your sharps container must be mounted no higher than 52 inches per OSHA standards.",
          "Yes. Mounting height is a preference and does not affect compliance as long as the container is properly labeled.",
          "Yes. A 5.5-foot mounting height is within the acceptable range for clinical areas."
        ],
        correctIndex: 1,
        explanation: "OSHA requires sharps containers to be mounted at or below 52 inches (approximately 4.3 feet) from the floor so staff can see into the container when disposing of sharps. At 5.5 feet, staff cannot see into the container — a needlestick risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc15",
        question: "Your storage room has boxes within 16 inches of the ceiling sprinkler heads. Is this a compliance issue?",
        options: [
          "No. Eighteen inches is the required clearance from sprinkler heads; 16 inches is within 2 inches of the minimum.",
          "No. The clearance requirement is measured from the top of the sprinkler deflector, and 16 inches may meet that standard.",
          "Yes. Your storage must maintain at least 18 inches of clearance from sprinkler heads at all times.",
          "No. The 18-inch rule only applies to combustible materials, not cardboard boxes."
        ],
        correctIndex: 2,
        explanation: "NFPA 13 requires at least 18 inches of clearance below sprinkler deflectors. At 16 inches, your boxes obstruct proper water distribution. This is a finding.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "eoc16",
        question: "Your sharps container reaches the fill line during a patient's procedure. Staff plans to swap it after the procedure ends. Acceptable?",
        options: [
          "Yes. Completing the current patient's care before swapping is a reasonable clinical priority.",
          "Yes. The fill line is a guideline and the container can safely hold additional sharps up to the closure line.",
          "Yes. You can defer to the next patient encounter since this patient's exposure risk is already established.",
          "No. Your sharps container must be replaced immediately when it reaches the fill line — no deferral is acceptable."
        ],
        correctIndex: 3,
        explanation: "Sharps containers must be replaced before reaching the fill line (typically marked at ~¾ full). Once at or above the fill line, immediate replacement is required. Forcing additional sharps in greatly increases needlestick risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc17",
        question: "Your patient's computer is locked, whiteboard turned from the door, and door is closed — but a printed discharge summary with full PHI is visible on the bedside table. Is privacy maintained?",
        options: [
          "No. Your printed discharge summary with visible PHI on the bedside table is accessible to anyone entering the room.",
          "Yes. The closed door limits access to authorized personnel, and your whiteboard is appropriately positioned.",
          "Yes. The closed door creates a reasonable expectation of privacy, making the document placement acceptable.",
          "Yes. Discharge summaries are patient property and their placement in the patient's own room is not a privacy violation."
        ],
        correctIndex: 0,
        explanation: "PHI must be secured in ALL forms. A printed document with full PHI visible on a bedside table is a privacy violation even when other privacy measures are in place. Paper documents must be face-down, in a folder, or otherwise secured from view.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc18",
        question: "A mobile computer workstation is parked 2.5 feet from your medical gas shut-off panel. The 3-foot access zone is marked on the floor. Is this a finding?",
        options: [
          "No. The 3-foot zone is a guideline and mobile equipment can be moved quickly in an emergency.",
          "No. The 2.5-foot distance is within acceptable variance for mobile equipment near gas shut-off panels.",
          "No. Mobile equipment is exempt from clearance requirements since any staff member can reposition it quickly.",
          "Yes. Your medical gas shut-off panels must remain unobstructed at all times. Your workstation within the clearance zone is a finding."
        ],
        correctIndex: 3,
        explanation: "Medical gas shut-off valves must remain accessible and unobstructed at all times. In a gas emergency, seconds matter. Mobile equipment parked within your facility's marked clearance zone is a finding regardless of how easily it can be moved.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc19",
        question: "A nurse used a pill cutter 2 hours ago and cleaned it. It looks clean. She is about to use it for a different patient. Should she clean it again?",
        options: [
          "Yes. You must clean your pill cutter between EACH patient use regardless of appearance or time since last cleaning.",
          "No. Your pill cutter only requires cleaning at the end of each medication pass, not between individual patients.",
          "No. It was cleaned after the last use and still appears clean, so re-cleaning is unnecessary.",
          "No. Visual inspection confirming no residue is sufficient between uses of the same medication class."
        ],
        correctIndex: 0,
        explanation: "Pill cutters and crushers must be cleaned between each patient use to prevent cross-contamination. Appearance and time since last cleaning are irrelevant — the standard is between each patient.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "eoc20",
        question: "A surveyor finds in your ED: EMTALA signage at entrance, a sharps container above the fill line, a box partially blocking the eyewash station, a fire extinguisher with 3-foot clearance, and a locked EVS closet. How many findings?",
        options: [
          "One. Only the sharps container above the fill line; the box near the eyewash does not fully block access.",
          "Two. The sharps container and the fire extinguisher, which requires clearance verification beyond 3 feet.",
          "Three. The sharps container, blocked eyewash, and EMTALA signage is incomplete without OB area posting.",
          "Two. The sharps container above the fill line and the box blocking your eyewash station."
        ],
        correctIndex: 3,
        explanation: "Two findings: (1) your sharps container above the fill line must be replaced immediately, and (2) your eyewash station must be unobstructed and immediately accessible. The EMTALA signage, fire extinguisher clearance, and locked EVS closet are all compliant.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "eoc1", '\n    ],\n  },\n  {\n    id: "anesthesia_sedation"', new_eoc)

# ─── ANESTHESIA SEDATION (anes1-anes20) ───────────────────────────────────────
new_anes = '''    questions: [
      {
        id: "anes1",
        question: "A hospitalist is about to give IV midazolam and fentanyl for moderate sedation. He is credentialed for the procedure but not specifically for moderate sedation. Can the procedure proceed?",
        options: [
          "Yes. A physician license allows moderate sedation administration without facility-specific credentialing.",
          "No. Moderate sedation requires facility-specific credentialing regardless of physician license.",
          "Yes. If the charge nurse monitors the patient, the physician can administer sedation without additional credentialing.",
          "No. Only CRNAs and anesthesiologists may administer any level of sedation in a hospital."
        ],
        correctIndex: 1,
        explanation: "Your facility must credential providers specifically for moderate sedation. A physician or RN license alone is not sufficient. The credential — including training, competency, and specific privilege — must be on file before any provider administers moderate sedation.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes2",
        question: "Your post-anesthesia evaluation at 36 hours documents respiratory function, cardiovascular function, pain, and mental status. Is this complete?",
        options: [
          "Yes. These 4 elements satisfy JC post-anesthesia requirements.",
          "No. Temperature, nausea/vomiting status, and post-operative hydration status are also required.",
          "No. ASA classification and level of consciousness are missing.",
          "No. A pre-anesthesia re-assessment and current vital signs are also required."
        ],
        correctIndex: 1,
        explanation: "Your post-anesthesia evaluation must include all 7 required elements: respiratory function, cardiovascular function, mental status, temperature, pain, nausea/vomiting, and post-operative hydration status. Temperature, nausea/vomiting status, and hydration are missing here.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes3",
        question: "A surveyor asks where your reversal agents are kept for a GI suite using midazolam and fentanyl. The nurse points to the Pyxis one hallway away. Is this compliant?",
        options: [
          "Yes. The Pyxis is stocked and accessible within a reasonable time.",
          "No. Your reversal agents must be at the bedside or within the procedure room during sedation.",
          "Yes. Reversal agents must only be available in the building, not necessarily in the specific room.",
          "No. Only an anesthesiologist may hold or administer reversal agents."
        ],
        correctIndex: 1,
        explanation: "JC requires reversal agents to be 'immediately available' — at the bedside or within the procedure room during sedation. A Pyxis one hallway away does not meet this standard. Naloxone (for opioids) and flumazenil (for benzodiazepines) must be in the room.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes4",
        question: "During a colonoscopy, the proceduralist is monitoring sedation and performing the procedure simultaneously. No dedicated observer is present. Compliant?",
        options: [
          "Yes. The proceduralist may monitor sedation if credentialed for both the procedure and moderate sedation.",
          "No. A dedicated observer monitoring the patient's sedation level is required. The proceduralist cannot self-monitor.",
          "Yes. Nursing in the room satisfies the monitoring requirement even without a formal sedation role.",
          "No. Only CRNAs may monitor patients during sedation procedures."
        ],
        correctIndex: 1,
        explanation: "JC requires a dedicated individual whose sole role during the procedure is monitoring sedation level and physiologic status. The proceduralist performing the colonoscopy cannot simultaneously fulfill that monitoring role.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes5",
        question: "A CRNA reviews the patient's pre-op note showing no prior adverse reactions to anesthesia and proceeds directly to induction without a separate pre-anesthesia assessment. Compliant?",
        options: [
          "Yes. The pre-op registration note documents adverse reaction history and satisfies the pre-anesthesia assessment requirement.",
          "No. A formal pre-anesthesia assessment including airway review, medications, ASA classification, and prior anesthesia history must be completed before induction.",
          "Yes. If the CRNA reviews the H&P, a separate pre-anesthesia assessment is not required.",
          "No. Only the attending anesthesiologist may complete the pre-anesthesia assessment, not a CRNA."
        ],
        correctIndex: 1,
        explanation: "A pre-anesthesia assessment is a distinct, required document separate from the H&P and pre-op nursing assessments. It must be completed before anesthesia and must include airway assessment, medication review, ASA classification, and prior anesthesia history.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes6",
        question: "During a spinal nerve block for a knee replacement, the anesthesiologist injects without a time-out for the block site. The surgical time-out was done 10 minutes earlier. Is there a compliance issue?",
        options: [
          "No. The surgical time-out covers all procedures performed during the same case.",
          "Yes. Regional anesthesia and nerve blocks require a separate site-specific time-out before injection.",
          "No. Nerve blocks are part of anesthesia and exempt from the Universal Protocol.",
          "Yes. The time-out is required but must be conducted by nursing, not the anesthesiologist."
        ],
        correctIndex: 1,
        explanation: "Regional anesthesia, including nerve blocks, requires its own site-specific time-out before injection. This is separate from the surgical time-out. The prior time-out does not cover a distinct invasive technique at a different anatomical site.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes7",
        question: "The anesthesiologist documents the written anesthesia plan after the case, noting it reflects what was planned and done. Is this compliant?",
        options: [
          "Yes. A written plan created the same day as the procedure satisfies JC documentation standards.",
          "No. Your written anesthesia plan must be created and discussed with the patient BEFORE the procedure.",
          "Yes. The plan may be written retrospectively within 24 hours as long as it accurately reflects intraoperative decisions.",
          "No. The anesthesia plan is part of the post-anesthesia evaluation and must be on a separate form."
        ],
        correctIndex: 1,
        explanation: "The written anesthesia plan is a pre-procedure requirement. It must be created before the procedure and discussed with the patient. A plan written after the fact does not satisfy the requirement regardless of accuracy.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes8",
        question: "Your moderate sedation patient becomes difficult to arouse and only responds to painful stimulation. The nurse increases oxygen flow. What has occurred?",
        options: [
          "The patient is experiencing expected moderate sedation — increased oxygen flow is the correct response.",
          "The patient has transitioned to deep sedation. The administering provider must be credentialed for deep sedation, a higher privilege level.",
          "The patient is in minimal sedation — no additional credentialing or documentation is needed.",
          "The patient has transitioned to deep sedation, but this is acceptable as long as oxygen saturation is maintained."
        ],
        correctIndex: 1,
        explanation: "When a patient only responds to painful stimulation, they have transitioned from moderate to deep sedation. JC requires the administering provider to hold the specific credential for deep sedation, which is a higher privilege than moderate sedation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes9",
        question: "Your patient receives IV hydromorphone for sedation during a lumbar puncture and becomes apneic. Which reversal agent do you reach for?",
        options: [
          "Flumazenil — it reverses opioid-induced respiratory depression.",
          "Naloxone — it reverses opioid-induced respiratory depression.",
          "Atropine — it reverses sedation-related bradycardia and apnea.",
          "Physostigmine — it reverses opioid and benzodiazepine sedation."
        ],
        correctIndex: 1,
        explanation: "Naloxone (Narcan) reverses opioids. Hydromorphone is an opioid, so naloxone is the correct choice. Flumazenil reverses benzodiazepines only. Both agents must be at the bedside when their respective drug class is used.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes10",
        question: "Your patient received midazolam and propofol. Is flumazenil alone sufficient as the reversal agent on your procedure cart?",
        options: [
          "Yes. Flumazenil reverses both benzodiazepines and propofol.",
          "No. Flumazenil reverses midazolam only. Propofol has no reversal agent, but if any opioid was also used, naloxone is required.",
          "No. Flumazenil only reverses benzodiazepines (midazolam); propofol has no reversal agent, so naloxone is also required if any opioid was used.",
          "Yes. Any sedation reversal agent covers the full spectrum of sedating medications used."
        ],
        correctIndex: 1,
        explanation: "Flumazenil reverses benzodiazepines (midazolam). Propofol has no pharmacological reversal agent. The critical question is whether opioids were also given — if so, naloxone is additionally required. Flumazenil alone does not cover propofol or opioids.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes11",
        question: "A surveyor asks for your newly credentialed RN's moderate sedation file. The manager shows an active nursing license and BLS card. Is this sufficient?",
        options: [
          "Yes. An active nursing license and current BLS demonstrate qualifications for moderate sedation.",
          "No. Your facility-specific credentialing file must include sedation-specific training, competency validation, and the formal privilege on file.",
          "Yes. If the RN passed general hospital orientation including medication administration, no additional documentation is required.",
          "No. Only ACLS certification satisfies the competency requirement for moderate sedation administration."
        ],
        correctIndex: 1,
        explanation: "Facility-specific credentialing for moderate sedation requires more than a license and BLS. Your file must document sedation-specific training, competency validation (return demonstration or proctored cases), and the formal privilege granting moderate sedation rights at your facility.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes12",
        question: "After oral diazepam pre-medication, the anesthesiologist has the patient sign a separate nerve block consent. Is this compliant?",
        options: [
          "Yes. Consent obtained before the nerve block procedure itself is sufficient.",
          "No. Consent for regional anesthesia must be obtained before any sedating or anxiolytic medication is administered.",
          "Yes. Diazepam given orally does not impair decision-making so consent remains valid.",
          "No. Nerve block consent must be obtained by a nurse, not the anesthesiologist."
        ],
        correctIndex: 1,
        explanation: "Consent must be obtained before any sedating medication is administered. Diazepam is a benzodiazepine with sedating properties — even given orally. Consent obtained after a sedating pre-medication is presumptively defective because decision-making capacity may be compromised.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes13",
        question: "Your post-anesthesia evaluation at 52 hours after surgery documents all 7 required elements. Is this compliant?",
        options: [
          "Yes. All 7 elements are present and the evaluation is within the 72-hour standard window.",
          "No. Your post-anesthesia evaluation must be completed within 48 hours of the procedure.",
          "Yes. Completeness of all 7 elements takes priority over timing for JC surveys.",
          "No. Your evaluation must be completed before the patient leaves the PACU, not within 48 hours."
        ],
        correctIndex: 1,
        explanation: "Your post-anesthesia evaluation must be completed within 48 hours of the procedure. At 52 hours, it is out of compliance regardless of completeness. Both the timing and all 7 elements must be met.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes14",
        question: "In the pain clinic, a provider performs an epidural steroid injection without a time-out. The patient is awake and already consented. Is this compliant?",
        options: [
          "No. A time-out is required for all invasive procedures involving regional anesthesia, including epidural injections.",
          "Yes. Time-outs are only required for surgical procedures in the OR, not pain clinic injections.",
          "No. Time-outs are required, but only the physician must verify — team participation is not needed in outpatient settings.",
          "Yes. The patient's verbal confirmation during consent satisfies the time-out requirement."
        ],
        correctIndex: 0,
        explanation: "The Universal Protocol and time-out requirements apply to all invasive procedures, including epidural steroid injections in pain clinic or procedure room settings. Site-specific time-outs are especially important for spinal and epidural techniques.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes15",
        question: "Moderate sedation escalates to general anesthesia during a procedure. The anesthesiologist documents the final anesthesia type only in the post-op note. What is missing?",
        options: [
          "Nothing. Documenting the final anesthesia type in the post-op note satisfies the requirement.",
          "The change in anesthesia plan must be documented in the anesthesia record intraoperatively, including the reason for escalation.",
          "A new informed consent must be obtained for general anesthesia even if the patient is already under sedation.",
          "The anesthesiologist must page the attending surgeon to document concurrence with the plan change."
        ],
        correctIndex: 1,
        explanation: "When your anesthesia plan changes intraoperatively, the change and the reason must be documented in the anesthesia record at the time it occurs — not just noted in a post-op note. The intraoperative record is the primary document for anesthesia events.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes16",
        question: "A quality review finds 8 of 12 post-anesthesia evaluations document respiratory, cardiovascular, and pain — but routinely omit temperature and hydration. What is the compliance status?",
        options: [
          "Partially compliant. Five of 7 elements are documented, satisfying a 70% threshold under JC standards.",
          "Non-compliant. All required post-anesthesia evaluation elements must be present; omitting temperature and hydration is a finding for each case.",
          "Compliant. Temperature and hydration are nursing documentation responsibilities, not part of the anesthesia evaluation.",
          "Non-compliant only if the omissions caused patient harm during the review period."
        ],
        correctIndex: 1,
        explanation: "JC requires all 7 post-anesthesia evaluation elements in every case — there is no partial-credit threshold. Systematic omission of temperature and hydration across 8 of 12 charts is a pattern of deficient documentation and would be cited on every affected record.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes17",
        question: "Your anesthesiologist completes a thorough pre-anesthesia assessment but does not document the patient's ASA physical status classification. Is this a finding?",
        options: [
          "No. ASA classification is a useful clinical tool but is not specifically required by JC in the pre-anesthesia assessment.",
          "No. ASA classification is only required for cases involving general anesthesia, not moderate sedation.",
          "Yes. Your pre-anesthesia assessment must include patient physical status classification, and ASA classification satisfies this requirement.",
          "Yes. But only if the patient is ASA Class III or higher, which must always be documented."
        ],
        correctIndex: 2,
        explanation: "JC pre-anesthesia assessment requirements include patient physical status documentation. ASA classification (I–VI) is the standard method. Omitting physical status classification makes your pre-anesthesia assessment incomplete.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "anes18",
        question: "A CRNA performing a spinal anesthetic for a C-section asks the circulating RN to monitor the patient's sedation level during the case. Is this arrangement compliant?",
        options: [
          "No. Only a physician anesthesiologist may administer spinal anesthesia in an OR setting.",
          "No. A CRNA must monitor and administer simultaneously because they are the credentialed provider.",
          "No. Even for a CRNA, a dedicated observer is required — the CRNA cannot administer and solely monitor at the same time.",
          "Yes. The CRNA assigning the circulating RN as the dedicated monitor satisfies the monitoring requirement."
        ],
        correctIndex: 3,
        explanation: "This IS compliant. The CRNA administering the anesthetic cannot simultaneously serve as the sole dedicated monitor — a separate observer is required. By assigning the circulating RN to monitor and report patient status, this arrangement correctly provides a dedicated observer. The RN's monitoring role should be documented.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes19",
        question: "The surgical consent for a knee replacement lists 'femoral nerve block for analgesia.' The physician prepares to perform the block. Is separate consent required for the nerve block?",
        options: [
          "No. Listing the nerve block on the surgical consent with the patient's signature satisfies the consent requirement.",
          "Yes. A separate, dedicated informed consent specifically for the nerve block must be signed prior to sedation.",
          "No. Nerve blocks are part of the anesthesia plan and consent for anesthesia covers regional techniques.",
          "Yes. But only if the nerve block involves a sedating medication; a pure local anesthetic block requires verbal consent only."
        ],
        correctIndex: 1,
        explanation: "Regional anesthesia techniques, including nerve blocks, require their own informed consent that specifically describes the risks, benefits, and alternatives of the regional technique. Mentioning the block on a surgical consent is not equivalent to a separate informed consent.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "anes20",
        question: "A chart shows: signed surgical consent (pre-sedation), written anesthesia plan, complete pre-anesthesia assessment with airway eval and ASA class, intraoperative monitoring, and a post-anesthesia evaluation at 44 hours with all 7 elements. Compliant?",
        options: [
          "No. The post-anesthesia evaluation at 44 hours exceeds the acceptable window.",
          "No. The written anesthesia plan must be completed after the procedure, not before.",
          "Yes. All JC anesthesia documentation requirements are met.",
          "No. The pre-anesthesia assessment must be completed by the surgeon, not the anesthesiologist."
        ],
        correctIndex: 2,
        explanation: "This chart is fully compliant: consent before sedation, pre-procedure written anesthesia plan, complete pre-anesthesia assessment (airway eval + ASA classification), intraoperative monitoring documented, and post-anesthesia evaluation within 48 hours with all 7 required elements present.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "anes1", '\n    ],\n  },\n\n  // ── MEDICATION MANAGEMENT', new_anes)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 5 complete.")
