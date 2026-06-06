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

# ─── PATIENT RIGHTS (pr1-pr20) ────────────────────────────────────────────────
new_pr = '''    questions: [
      {
        id: "pr1",
        question: "A medical assistant obtains surgical consent after explaining the surgery to the patient. The physician never discusses the procedure. Is this valid consent?",
        options: [
          "Yes. The patient's signature on the form constitutes valid informed consent regardless of who explained it.",
          "No. Informed consent for surgery must be obtained by a licensed practitioner qualified to explain the procedure and answer clinical questions.",
          "Yes. Medical assistants may obtain consent when the physician is available for follow-up questions.",
          "No. But only if the patient later reports not understanding the procedure."
        ],
        correctIndex: 1,
        explanation: "Informed consent must be obtained by a licensed practitioner qualified to explain the procedure and answer clinical questions. A medical assistant cannot obtain surgical consent. The physician's failure to discuss the procedure makes this consent invalid regardless of the patient's signature.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr2",
        question: "Your patient's advance directive with a DNR order is placed in the 'history' section of the chart — not active orders. The patient arrests and is resuscitated. What was the failure?",
        options: [
          "None. The advance directive was in the chart and accessible to staff.",
          "The advance directive must be in the active, readily accessible section of the medical record to be effectively honored in emergencies.",
          "DNR orders from advance directives are automatically converted to active physician orders upon admission.",
          "The failure was the physician's — only an active physician DNR order can prevent resuscitation."
        ],
        correctIndex: 1,
        explanation: "An advance directive buried in the history section may not be seen in an emergency. JC requires it to be in a prominent, accessible location in the active chart. More importantly, an advance directive should prompt the physician to enter an active DNR/DNAR order in the orders section — the directive alone may not be visible to emergency responders.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr3",
        question: "Your patient's behavioral restraint order expired 30 minutes ago. No renewal has been obtained but the patient remains physically restrained. What must happen immediately?",
        options: [
          "Nursing may continue the restraint for up to 2 additional hours pending physician renewal.",
          "The restraint must be removed immediately. Patients cannot remain restrained on an expired order.",
          "The charge nurse may verbally extend the restraint until the physician can be reached.",
          "The restraint continues if the nurse documents that the patient is still displaying the behavior that prompted the original order."
        ],
        correctIndex: 1,
        explanation: "Patients cannot remain in restraints on an expired order under any circumstances. The restraint must be removed immediately when the order expires. To prevent this, nursing must proactively contact the physician for renewal before the order expires if continued restraint is clinically necessary.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr4",
        question: "Your Spanish-speaking patient needs to sign informed consent. The patient's adult daughter who speaks English volunteers to interpret. Can you use the daughter for the consent discussion?",
        options: [
          "Yes. Family members are the preferred interpreters for clinical discussions per patient rights standards.",
          "No. Professional interpreter services must be offered first. The patient may choose to use a family member only after professional services are offered and declined.",
          "Yes. The patient's right to use family members supersedes any professional interpreter requirement.",
          "No. Family members may never be used as interpreters for clinical conversations under any circumstances."
        ],
        correctIndex: 1,
        explanation: "JC requires that professional interpreter services be offered to patients with limited English proficiency first. Only after professional services are offered may a patient choose a family member. For informed consent discussions specifically, professional interpreters are strongly preferred because family members may filter information and conflicts of interest can affect accuracy.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr5",
        question: "Your patient verbally complains about meal quality. The charge nurse resolves it immediately by arranging an alternative meal. Must this be processed as a formal grievance?",
        options: [
          "Yes. All patient complaints must be formally logged and investigated as grievances.",
          "No. A complaint resolved satisfactorily at the time it is made does not require formal grievance processing.",
          "Yes. Verbal complaints require written acknowledgment within 7 days regardless of immediate resolution.",
          "No. Only written complaints require the formal grievance process."
        ],
        correctIndex: 1,
        explanation: "JC distinguishes between complaints (resolved at the point of care immediately) and grievances (unresolved complaints or any written complaint). A meal complaint resolved immediately by the nurse does not require the formal grievance process. If the patient were unsatisfied with the resolution, it would escalate to a grievance requiring the full process.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr6",
        question: "Your patient with decision-making capacity refuses a blood transfusion for religious reasons despite being told the refusal could be life-threatening. What must your clinical team do?",
        options: [
          "Administer the transfusion anyway. The duty to preserve life supersedes a patient's right to refuse.",
          "Obtain an emergency court order to override the patient's refusal.",
          "Document the patient's informed refusal (including consequences explained), notify the physician, and honor the decision.",
          "Transfer the patient to a facility that will override the refusal."
        ],
        correctIndex: 2,
        explanation: "A competent adult has an absolute right to refuse any treatment, including life-sustaining care. Your team must ensure the patient understands the consequences, document the discussion and the patient's demonstrated understanding, notify the physician, and honor the decision. Overriding the refusal of a competent patient constitutes battery regardless of clinical rationale.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr7",
        question: "A family member asks your nurse what medications a 45-year-old competent patient is receiving. The nurse provides the list because 'the family is involved in care.' What patient rights issue has occurred?",
        options: [
          "None. Family involvement in care implies consent to information sharing.",
          "Patient health information cannot be shared with family members without the patient's explicit authorization.",
          "None. Sharing medication information with family is standard of care and does not require consent.",
          "The issue only exists if the patient has documented in the chart that they do not want information shared."
        ],
        correctIndex: 1,
        explanation: "A competent adult's health information — including medication list — is protected and cannot be shared with family members without the patient's explicit authorization. 'Family involvement' is not consent. This applies even to close relatives. Your nurse must obtain the patient's permission before sharing any health information with family.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr8",
        question: "During an assessment, your nurse notices patterned bruising on an elderly patient inconsistent with the reported mechanism of injury. What is the nurse's obligation?",
        options: [
          "Document the findings in the chart and wait for the physician to assess and determine next steps.",
          "Ask the patient's family member if they are aware of the bruising before taking any action.",
          "Report the suspected abuse to the appropriate supervisory and administrative channels per facility policy and state mandatory reporting law.",
          "Take no action unless the patient explicitly states they have been abused."
        ],
        correctIndex: 2,
        explanation: "Nurses are mandatory reporters. Patterned bruising inconsistent with the reported mechanism in an elderly patient constitutes reasonable suspicion of abuse that triggers mandatory reporting obligations. JC requires hospitals to have abuse reporting processes and staff must follow them. Waiting for the patient to disclose or deferring to family delays protective action.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr9",
        question: "Your patient asks to read their medical record. The nursing supervisor says they need to submit a written request and can view the record in 45 days. Is this timeframe compliant?",
        options: [
          "Yes. 45 days is within the standard access window for patient medical records.",
          "No. HIPAA requires records to be provided within 30 days of a patient's request, with a possible 30-day extension under specific circumstances.",
          "Yes. 45 days is compliant for inpatient records. Outpatient records must be provided within 7 days.",
          "No. Patients have the right to immediate real-time access to their records upon request."
        ],
        correctIndex: 1,
        explanation: "Under HIPAA (45 CFR 164.524), covered entities must provide access to medical records within 30 days of a written request. One 30-day extension is permitted if the entity notifies the patient in writing with the reason and new deadline. A 45-day response without an extension notice violates HIPAA. JC aligns with HIPAA's patient access requirements.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr10",
        question: "You find a restrained patient's restraint is cutting into their wrist, causing redness and mild skin breakdown. What must you do?",
        options: [
          "Document the finding and notify the physician at the end of the shift.",
          "Remove or adjust the restraint immediately, assess the injury, provide wound care, notify the physician, and document all actions.",
          "Apply padding over the restraint and continue the monitoring schedule.",
          "Contact the charge nurse for guidance before taking any independent action."
        ],
        correctIndex: 1,
        explanation: "Monitoring restrained patients for circulation, sensation, and skin integrity at defined intervals exists specifically to prevent this type of harm. Skin breakdown from a restraint requires immediate action: remove or reposition the restraint, assess and treat the injury, notify the physician, and document thoroughly. This is both a patient rights and patient safety issue.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr11",
        question: "Your patient received 4 mg IV lorazepam 20 minutes ago for anxiety. The surgeon now asks your nurse to have the patient sign the consent form. What should your nurse do?",
        options: [
          "Proceed. The surgeon has indicated the patient is ready and the nurse should follow the order.",
          "Refuse. Consent obtained after administering a sedating benzodiazepine is presumptively invalid due to impaired decision-making capacity.",
          "Have a second nurse witness the signing to validate the consent.",
          "Ask the patient if they feel capable of consenting and proceed if they say yes."
        ],
        correctIndex: 1,
        explanation: "Lorazepam is a sedating benzodiazepine that impairs cognitive function and decision-making capacity. Informed consent obtained while a patient is under the influence of sedating medication is presumptively invalid. Consent must be obtained before sedating medications are administered.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr12",
        question: "Your patient asks whether the hospital has a process for filing a complaint about their care. What information must your hospital provide?",
        options: [
          "The name of the unit manager is sufficient — that is the appropriate complaint recipient for hospital patients.",
          "Written information about the right to file a grievance, the grievance process, and contact information for the state health agency if the hospital cannot resolve the issue.",
          "Patients must be redirected to the quality department. Bedside staff cannot answer questions about complaint processes.",
          "The hospital only needs to provide complaint information if the patient has already expressed a specific concern."
        ],
        correctIndex: 1,
        explanation: "JC requires hospitals to inform patients of their grievance rights — typically at admission through a patient rights document. This must include: the right to file a grievance, how to do so, the hospital's response timeline, and contact information for the state health department or accrediting body if the grievance is not resolved internally. This information must be proactively provided.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr13",
        question: "Your non-English speaking patient signs a consent form written in English with no interpreter present. Your nurse witnessed the signature. Is this consent valid?",
        options: [
          "Yes. The patient's signature constitutes agreement to the procedure regardless of language barriers.",
          "No. Informed consent requires that the patient understand what they are consenting to. A patient who cannot read the form lacks the information necessary for valid consent.",
          "Yes. The nurse's witness signature validates the consent.",
          "No. But only if the procedure is elective — emergent procedures may proceed with a witnessed signature only."
        ],
        correctIndex: 1,
        explanation: "Valid informed consent requires the patient to understand the information. A patient who cannot read English cannot have understood an English-only consent form. The signature is meaningless without comprehension. Professional interpreter services must be used for the consent discussion, and a translated consent form should ideally be provided.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr14",
        question: "A visitor asks which room your patient is in. The patient is listed in the hospital directory. What should your nurse do?",
        options: [
          "Provide the room number. Directory information is public and sharing it does not violate patient rights.",
          "Verify the patient has not opted out of the directory, then provide directory information including room number and general condition.",
          "Decline to provide any information. All patient information is confidential regardless of directory status.",
          "Ask the visitor to show identification before releasing any information."
        ],
        correctIndex: 1,
        explanation: "Hospitals may share basic directory information (name, general condition, location) with visitors who ask for a patient by name — unless the patient has opted out. If the patient has opted out, the hospital must state they cannot confirm or deny the patient is there. Patients must be informed of the directory practice and their opt-out right on admission.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr15",
        question: "Your patient's sibling is designated as the healthcare proxy decision-maker. The patient's spouse disagrees with the sibling's treatment decisions. Whose decision prevails?",
        options: [
          "The spouse's. Marriage confers automatic healthcare decision-making authority that supersedes any written document.",
          "The sibling's. A validly executed healthcare proxy designates the named agent as the legal healthcare decision-maker.",
          "The physician's. Clinical decision-making authority belongs to the care team in cases of family conflict.",
          "The conflict must be resolved by the hospital ethics committee before any treatment proceeds."
        ],
        correctIndex: 1,
        explanation: "A validly executed healthcare proxy (durable power of attorney for healthcare) legally designates the named individual as the patient's authorized decision-maker. The designated agent's decisions take legal precedence over family members who are not designated — including spouses. Your hospital must honor the legally executed document.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr16",
        question: "Your patient's psychiatric diagnosis is inadvertently mentioned at the nursing station where other patients can overhear. What patient right has been violated?",
        options: [
          "None. Incidental disclosures in a clinical setting are expected and permitted.",
          "The patient's right to privacy and confidentiality. Protected health information must not be discussed in areas where it can be overheard.",
          "Only financial and demographic information is protected in verbal communications.",
          "The right is only violated if the overheard patient knows who the information refers to."
        ],
        correctIndex: 1,
        explanation: "Patients have a right to have their health information kept private. Discussing a patient's diagnosis — especially a sensitive psychiatric diagnosis — in a public area where it can be overheard violates HIPAA and JC patient rights standards. Clinical conversations must occur in private settings. This is a common JC finding when surveyors observe staff discussing patients at public nursing stations.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr17",
        question: "Your patient lacks decision-making capacity, has no advance directive, and has no family available. The clinical team needs to make a treatment decision. What process applies?",
        options: [
          "The attending physician has sole authority to make treatment decisions for incapacitated patients without family.",
          "No treatment may be provided — care must be suspended until a legal guardian is appointed.",
          "The hospital's ethics committee or legally defined surrogate decision-making process must be engaged to determine the appropriate decision-maker.",
          "Emergency treatment proceeds. All non-emergency decisions are deferred indefinitely."
        ],
        correctIndex: 2,
        explanation: "When a patient lacks decision-making capacity and has no advance directive or available family, hospitals must engage defined surrogate decision-making processes — which may include ethics committee consultation, court-appointed guardianship, or state-specific surrogate hierarchy laws. The physician alone cannot serve as the sole decision-maker. JC requires hospitals to have a defined process for these circumstances.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr18",
        question: "Your nurse threatens to apply restraints to a fall-risk patient who is trying to get out of bed without calling. Has the patient's rights been violated?",
        options: [
          "No. Fall safety justifies using restraint threats as a behavioral deterrent.",
          "Yes. Threatening restraints without clinical justification and a physician order is a patient rights violation.",
          "No. Fall prevention instructions may include restraint warnings for high-risk patients.",
          "Yes. But only if the threat was made in front of other patients or visitors."
        ],
        correctIndex: 1,
        explanation: "Threatening restraints as a punitive measure or deterrent without clinical justification and a valid physician order violates patient rights. Restraints require a specific clinical indication, physician order, and documentation. Using the threat of restraint to control patient behavior — even for safety — is coercive and rights-violating. Try alternatives first: hourly rounding, bed alarm, patient education.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "pr19",
        question: "Your newly admitted patient says they do not have an advance directive. The admitting nurse does not document this response. What is missing?",
        options: [
          "Nothing. Verbal screening for advance directives satisfies the requirement without documentation.",
          "The response — whether the patient has an advance directive or not — must be documented in the medical record.",
          "The nurse should have provided an advance directive form for the patient to complete before admission is finalized.",
          "Documentation is only required if the patient has an advance directive. No documentation needed for a 'no' response."
        ],
        correctIndex: 1,
        explanation: "JC requires that the advance directive inquiry and the patient's response be documented in the medical record — whether 'yes' or 'no.' This documents that the inquiry was made and establishes the baseline. If the patient later creates an advance directive during the stay, the update must also be documented.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "pr20",
        question: "Your hospital fails to provide a written response to a patient's formal written grievance within the required timeframe. The patient escalates to The Joint Commission. What is the compliance failure?",
        options: [
          "None. Verbal communication with the patient about the grievance satisfies the response requirement.",
          "Your hospital failed to provide a written response within the required timeframe. CMS and JC require written responses to formal grievances.",
          "The failure is only relevant if the grievance involved a clinical care concern, not a service concern.",
          "Your hospital's obligation was fulfilled when the patient was informed of the grievance process at admission."
        ],
        correctIndex: 1,
        explanation: "CMS Conditions of Participation and JC standards require hospitals to provide written responses to formal patient grievances. The response must include: the hospital's response, steps taken to investigate, results, and the date of completion. A patient escalating to JC after receiving no written response clearly illustrates a documented failure in the grievance management process.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "pr1", '\n    ],\n  },\n\n  // ── LIFE SAFETY', new_pr)

# ─── LIFE SAFETY (ls1-ls20) ───────────────────────────────────────────────────
new_ls = '''    questions: [
      {
        id: "ls1",
        question: "You discover smoke coming from under a supply room door. In what order should the RACE steps be performed?",
        options: [
          "Alarm the system first, then rescue anyone in danger, then contain by closing doors, then extinguish or evacuate.",
          "Rescue anyone in immediate danger, alarm the system, contain/confine by closing doors, then extinguish or evacuate.",
          "Extinguish the fire first if possible, then alarm, then rescue anyone present, then contain the area.",
          "Contain the fire by closing doors first, then alarm, then rescue patients, then evacuate."
        ],
        correctIndex: 1,
        explanation: "RACE: Rescue → Alarm → Contain/Confine → Extinguish or Evacuate. Rescue is first because patient life is the immediate priority. Alarm follows to alert others and the fire department. Contain by closing doors prevents spread. Extinguish only if the fire is very small; otherwise evacuate.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls2",
        question: "During a fire alarm, you find a patient in a room adjacent to the smoke origin. The corridor is clear. What is the first evacuation approach?",
        options: [
          "Vertical evacuation — use the stairwell immediately to move the patient to a lower floor.",
          "Shelter in place — keep the patient in their room with the door closed until the all-clear.",
          "Horizontal evacuation — move the patient through fire doors to the next fire compartment on the same floor.",
          "Wait for fire department direction before moving any patients."
        ],
        correctIndex: 2,
        explanation: "Horizontal evacuation — moving patients to the next fire compartment through fire doors on the same floor — is always the first approach in hospitals. Vertical evacuation via stairs is only used when horizontal evacuation is not possible. Moving patients on the same floor is safer and faster, particularly for non-ambulatory patients.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls3",
        question: "An EVS staff member uses a rubber doorstop to hold a stairwell fire door open while cleaning the corridor. What is the compliance finding?",
        options: [
          "Minor finding. Doorstops are acceptable for temporary access during cleaning activities.",
          "No finding. Stairwell doors are exempt from fire door requirements in non-patient care areas.",
          "Immediate finding. Fire doors must never be propped open — they must remain closed or use approved automatic closing devices.",
          "Finding only if the door was propped open for more than 15 minutes."
        ],
        correctIndex: 2,
        explanation: "Propping a fire door open — even briefly, even in a non-patient corridor — defeats the fire compartmentalization design. This is one of the most commonly cited immediate JC findings. Fire doors must remain closed at all times or be equipped with automatic closing devices that release when the alarm sounds.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls4",
        question: "A surveyor asks a nurse to describe how to use a fire extinguisher. The nurse says 'pull the pin, aim at the flames, squeeze the handle, and spray.' What error is in this description?",
        options: [
          "The nurse should have said 'push' not 'pull' for the pin.",
          "The nurse should aim at the BASE of the fire, not at the flames. Aiming at the base removes the fuel source.",
          "The nurse omitted the fifth step: 'Stand back 10 feet before discharging the extinguisher.'",
          "The description is complete and correct — aiming at the flames is the appropriate target."
        ],
        correctIndex: 1,
        explanation: "In PASS, 'Aim' means aim at the BASE of the fire, not the flames. The base is where the fuel source is burning. Aiming at the flames sprays above the fuel without extinguishing it. All four PASS steps must be demonstrated correctly: Pull, Aim (at base), Squeeze, Sweep.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls5",
        question: "Your hospital conducts fire drills on day and evening shifts each quarter but not on the night shift because census is low and staff do not want to disturb patients. Is this compliant?",
        options: [
          "Yes. Patient comfort justifies limiting fire drills to day and evening shifts.",
          "No. Fire drills must be conducted at least quarterly on EACH shift, including nights. All shifts are required.",
          "Yes. Night shift is exempt from quarterly drill requirements when census falls below 50%.",
          "No. But night shift drills may be substituted with a tabletop exercise twice per year."
        ],
        correctIndex: 1,
        explanation: "JC requires at least one fire drill per quarter on EACH shift — including nights, weekends, and holidays. Night shift staff have the same obligation to know fire response procedures as day shift. Skipping night shift drills is a compliance deficiency. Specific drill procedures can minimize patient disruption while still testing staff response.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls6",
        question: "Your surgical patient has oxygen running at 4L/min via nasal cannula. A staff member uses an alcohol-based sanitizer near the patient and leaves the open bottle on the bedside table. What is the fire safety concern?",
        options: [
          "None. Alcohol-based sanitizers are safe near all levels of supplemental oxygen.",
          "Oxygen enriches combustion. Flammable materials including alcohol-based products must be kept away from oxygen sources, and open containers must not be left at the bedside.",
          "The concern exists only if the patient is using a non-rebreather mask at 15L/min or higher.",
          "The concern applies only to liquid oxygen systems, not to piped medical oxygen."
        ],
        correctIndex: 1,
        explanation: "Supplemental oxygen enriches the environment and significantly increases combustion risk. Alcohol-based hand rubs and sanitizers are flammable and must not be left open near oxygen sources. Fires with patients on supplemental oxygen have caused serious patient injuries.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls7",
        question: "Sprinkler heads in a supply room are coated with paint from a recent renovation. What is the compliance and safety concern?",
        options: [
          "None. Paint protects sprinkler heads from corrosion without affecting their function.",
          "Painted sprinkler heads may fail to activate at the required temperature. All paint must be removed and heads replaced as necessary.",
          "The concern only exists for dry-pipe sprinkler systems, not wet-pipe systems.",
          "Paint on sprinkler heads is only cited if coverage exceeds 50% of the head surface."
        ],
        correctIndex: 1,
        explanation: "Sprinkler heads activate via a heat-sensitive element that melts at a defined temperature. Paint covers the element and can prevent it from melting correctly, causing activation failure during a fire. Paint on sprinkler heads is an immediate JC finding. Affected heads must be replaced — they cannot be repaired. Staff who paint walls and ceilings must mask sprinkler heads.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ls8",
        question: "Your department manager stores a cart of clean linens in the exit corridor to free up space. A surveyor walks by. What is the finding?",
        options: [
          "No finding. Clean linen carts in corridors do not constitute a fire or egress hazard.",
          "Minor finding. Corridor storage is only cited when it creates an acute fire risk.",
          "Immediate finding if the cart reduces the required minimum corridor clear width for egress.",
          "No finding as long as the cart is on one side and leaves the other half of the corridor free."
        ],
        correctIndex: 2,
        explanation: "Egress routes must maintain the minimum required clear width for patient evacuation. Storing carts — even temporarily, even with clean items — in corridors is cited when they obstruct the required exit path width. Healthcare corridors must maintain minimum widths to allow safe gurney and wheelchair evacuation. This is a consistently cited JC finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls9",
        question: "Your fire sprinkler system in one wing is shut down for 48-hour maintenance repairs. What is required during this impairment period?",
        options: [
          "Post a notice and restrict access to the affected wing until the system is restored.",
          "Implement Interim Life Safety Measures immediately, including a fire watch, additional fire extinguishers, and staff briefings.",
          "Notify The Joint Commission within 24 hours and await guidance before implementing any compensatory measures.",
          "No compensatory measures are required for planned maintenance impairments shorter than 72 hours."
        ],
        correctIndex: 1,
        explanation: "When a life safety system — including the sprinkler — is impaired for any reason or duration, ILSMs must be implemented IMMEDIATELY. A fire watch (staff patrolling the affected area to detect fires) is required during sprinkler impairment. Additional fire extinguishers and staff briefing complete the required ILSMs. This cannot wait for regulatory notification.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ls10",
        question: "A surveyor asks a nurse where the medical gas shutoff valve is for the unit. The nurse says they don't know. What is the compliance issue?",
        options: [
          "None. Medical gas valve locations are the responsibility of facilities management, not clinical staff.",
          "Staff in patient care areas must know the location of medical gas shutoff valves serving their area and how to operate them in an emergency.",
          "Issue only if the valves are not properly labeled. Staff knowledge is not a regulatory requirement.",
          "This is an informational question only — surveyor findings require documented non-compliance, not verbal knowledge gaps."
        ],
        correctIndex: 1,
        explanation: "JC requires that staff working in patient care areas know the location of medical gas shutoff valves for their area and be able to operate them in an emergency. In a gas-related emergency (pipe rupture, oxygen fire), shutting off the appropriate valve quickly is critical. A nurse who cannot locate or operate the valve represents a training gap and a life safety compliance deficiency.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls11",
        question: "Your nurse plugs a patient monitor into a household extension cord permanently routed under the bed. What is the life safety concern?",
        options: [
          "None. Extension cords are acceptable for medical equipment when positioned out of the traffic path.",
          "Extension cords cannot be used permanently to power clinical equipment. This is a fire and life safety violation.",
          "Concern exists only if the extension cord is not hospital-grade rated.",
          "Extension cords are compliant when the circuit load is verified to be under capacity."
        ],
        correctIndex: 1,
        explanation: "Permanently routing extension cords to power clinical equipment is prohibited by the Life Safety Code. Extension cords are only for temporary use. When permanent additional outlet capacity is needed, outlets must be installed by licensed electricians. An extension cord under the bed is also a trip hazard and is a consistently cited JC finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls12",
        question: "A fire alarm activates when someone accidentally pulls the station. Staff know it is accidental. Should staff still respond?",
        options: [
          "No. If staff know it is accidental, the alarm can be ignored and reset without a response.",
          "Yes. Every fire alarm activation requires a response verifying there is no actual fire before the alarm is silenced.",
          "Only the charge nurse needs to respond. Other staff may continue patient care.",
          "Staff should wait for two separate alarm activations before treating it as a real emergency."
        ],
        correctIndex: 1,
        explanation: "Every fire alarm activation must be treated as real until the absence of fire is confirmed. Even known-accidental activations require a response to verify. Ignoring alarms because staff believe they know the cause trains staff to ignore all alarms — and a true fire could be dismissed. JC expects a defined alarm response and reset protocol that includes verification.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls13",
        question: "An exit sign at the end of a patient corridor has been unilluminated for two weeks. Staff are aware. What is the compliance finding?",
        options: [
          "Minor finding. Exit signs are redundant with corridor wayfinding and their illumination is not critical.",
          "Immediate finding. Exit signs must be illuminated at all times — an unlit sign compromises evacuation safety.",
          "No finding if there is another illuminated exit sign within 100 feet.",
          "Finding only if the facility is currently under construction affecting egress routes."
        ],
        correctIndex: 1,
        explanation: "Exit signs must be illuminated at all times. A non-illuminated exit sign is an immediate JC finding — it compromises the ability of patients and staff to find egress routes in an emergency, particularly in smoke conditions. The two-week delay in repair indicates a failure in the work order and inspection processes.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls14",
        question: "Your facility's sprinkler system is going offline for 3 days for construction. What is the minimum required ILSM response?",
        options: [
          "Post construction warning signs and restrict entry to the affected area.",
          "A continuous fire watch by trained staff in the impaired area, additional portable fire extinguishers, and staff notification.",
          "Evacuate all patients from the affected area until the system is restored.",
          "No ILSM is required for planned maintenance impairments approved by the facilities department."
        ],
        correctIndex: 1,
        explanation: "A sprinkler impairment requires: (1) an ongoing fire watch (trained staff patrol at defined intervals), (2) additional portable fire extinguishers in the affected area, (3) staff briefing on the impairment and compensatory measures. These ILSMs are required immediately upon impairment. The facility should also notify the local fire authority and insurer as required.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ls15",
        question: "A full medical gas cylinder and an empty cylinder are stored together in the same rack without any differentiation. What is the safety concern?",
        options: [
          "None. Cylinders may be stored together as long as they are all secured in a rack.",
          "Empty and full cylinders must be stored separately and clearly marked to prevent using an empty cylinder in an emergency.",
          "The concern applies only to oxygen cylinders — other medical gases may be stored together regardless of fill status.",
          "Cylinders require separation only when stored in patient care areas, not in dedicated storage rooms."
        ],
        correctIndex: 1,
        explanation: "Full and empty medical gas cylinders must be stored separately and clearly labeled. Mixing them risks using an empty cylinder in an emergency — creating a critical supply gap. Separately marked storage (tags, separate racks, or zones) with clear full/empty designation is required.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls16",
        question: "Your facility was cited for fire door propping on a prior JC survey. On the re-survey, the surveyor finds the same fire door propped open. What does this represent?",
        options: [
          "A standard finding. Repeat findings are cited the same as first-time findings.",
          "A pattern of non-compliance that may escalate to a Requirements for Improvement or condition-level finding.",
          "No finding if the facility submitted a corrective action plan after the initial survey.",
          "Repeat findings are only escalated when they involve immediate patient harm."
        ],
        correctIndex: 1,
        explanation: "Repeat findings — particularly for life safety violations — indicate that the corrective action from the prior survey was ineffective or not sustained. This pattern may escalate to a more serious compliance finding and raises questions about leadership oversight and culture of safety. JC tracks repeated deficiencies and they factor into accreditation decisions.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ls17",
        question: "A stairwell used as an egress route has boxes of unused supplies stored in a corner at the base. The egress path through the stairwell is still passable. Is this compliant?",
        options: [
          "Yes. The egress path remains usable, so storage in unused corners is acceptable.",
          "No. Stairwells used as egress routes must be completely clear of all storage, regardless of location.",
          "Yes. Storage is allowed in stairwells as long as it does not reduce the minimum 36-inch clear path width.",
          "No. But only if the supplies are flammable or combustible materials."
        ],
        correctIndex: 1,
        explanation: "Stairwells designated as egress routes must be completely free of all storage — regardless of where in the stairwell items are placed or whether the primary path remains clear. Stairwells accumulate smoke rapidly during a fire, and any stored material can become a fuel source or obstruction. This is a direct NFPA 101 and JC Life Safety requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls18",
        question: "A nurse attempts to use a portable fire extinguisher during a small wastebasket fire. The extinguisher is empty. What was the process failure?",
        options: [
          "None. Extinguishers discharge quickly and the nurse should have used a second one.",
          "The extinguisher inspection process failed. Monthly inspections must verify charge status and annual service must confirm contents.",
          "Process failure only if the extinguisher was not the correct type for the fire class involved.",
          "The nurse should have confirmed the extinguisher was charged before attempting to use it during a fire."
        ],
        correctIndex: 1,
        explanation: "Fire extinguishers must be inspected monthly (visual inspection of charge indicator and physical condition) and serviced annually. A discharged extinguisher should be identified during monthly checks. Discovering an empty extinguisher during an actual fire is a direct patient safety failure caused by inspection process breakdown.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ls19",
        question: "During a survey walk-through, a surveyor asks a new staff member what to do if they smell smoke. The employee says 'I would call the charge nurse.' What is missing from this response?",
        options: [
          "Nothing. Calling the charge nurse is the appropriate first response to any emergency.",
          "The employee should describe RACE: rescue anyone in immediate danger, alarm the system, contain by closing doors, and extinguish or evacuate.",
          "The employee should call 911 before taking any other action.",
          "The employee should first investigate the source of the smoke before taking any action."
        ],
        correctIndex: 1,
        explanation: "All staff must know and be able to describe the RACE protocol. 'Call the charge nurse' is not a RACE step and does not address the immediate life-safety priorities: getting people out of danger and activating the alarm. A new employee's inability to describe RACE indicates inadequate fire safety training and is a JC training compliance finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ls20",
        question: "Your facility connects two approved hospital-grade power strips together (one plugged into the other) to power equipment in a procedure room. Is this arrangement compliant?",
        options: [
          "Yes. Two hospital-grade power strips connected together double the available outlet capacity safely.",
          "Yes. Daisy-chaining is acceptable when each strip individually carries under 50% of its rated load.",
          "No. Daisy-chaining power strips is prohibited regardless of the grade or rating of the individual strips.",
          "No. But only when the strips are in a patient care area, not in administrative areas."
        ],
        correctIndex: 2,
        explanation: "Daisy-chaining power strips — plugging one into another — is prohibited regardless of individual strip rating or load. The combined circuit can exceed circuit breaker capacity, creating fire risk. Each strip is rated for connection to a wall outlet, not to another strip. If more outlets are needed permanently, additional wall outlets must be installed by a licensed electrician.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "ls1", '\n    ],\n  },\n  // ─────────────────────────────────────────────────────────────────────────\n  // EMERGENCY MANAGEMENT', new_ls)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 8 (pr + ls) complete.")
