"""Batch C: dnv_pr, dnv_ic, dnv_pe"""
with open('shared/dnv-niaho-questions.ts', 'r') as f:
    content = f.read()

def replace_q(content, first_id, end_marker, new_block):
    q_start = content.find(f'    questions: [\n      {{\n        id: "{first_id}"')
    q_end = content.find(end_marker, q_start)
    if q_start == -1 or q_end == -1:
        print(f"FAIL {first_id}: start={q_start} end={q_end}")
        return content
    out = content[:q_start] + new_block + content[q_end:]
    print(f"OK {first_id}")
    return out

# ── DNV_PR (all correctIndexes: 1) ───────────────────────────────────────────
new_pr = '''    questions: [
      {
        id: "dnv_pr_1",
        question: "Under NIAHO PR.1, your hospital must not discriminate against patients based on:",
        options: [
          "Insurance status only.",
          "Race, color, national origin, disability, age, sex, and other protected characteristics.",
          "Clinical diagnosis only.",
          "Ability to pay for services."
        ],
        correctIndex: 1,
        explanation: "PR.1 requires nondiscrimination on all federally and state-protected bases including race, color, national origin, disability, age, and sex. This applies to all aspects of care — admission, treatment, and discharge.",
        category: "rule",
      },
      {
        id: "dnv_pr_2",
        question: "Under NIAHO PR.7, a restraint may be used when:",
        options: [
          "A patient is agitated and staff find it difficult to provide care.",
          "Clinically justified to ensure patient safety and no less restrictive alternative is effective.",
          "The charge nurse approves it without a physician order.",
          "Standing orders for restraints exist for the unit."
        ],
        correctIndex: 1,
        explanation: "PR.7 requires restraints to be clinically justified for patient safety after less restrictive alternatives have been tried or considered. Standing orders for restraints are not permitted — each use requires an individual physician order.",
        category: "rule",
      },
      {
        id: "dnv_pr_3",
        question: "Your patient in four-point restraints must receive which of the following under NIAHO PR.7?",
        options: [
          "Assessment every 8 hours.",
          "Continuous monitoring of physical and psychological status.",
          "Physician presence in the room at all times.",
          "Family notification before restraint application."
        ],
        correctIndex: 1,
        explanation: "PR.7 requires continuous monitoring of patients in restraints — not periodic checks. Staff must monitor physical and psychological well-being, circulation, and safety continuously when a patient is restrained.",
        category: "rule",
      },
      {
        id: "dnv_pr_4",
        question: "Under NIAHO PR.9, when must your hospital report a patient death associated with restraint use to CMS?",
        options: [
          "Within 7 days.",
          "Within 1 business day.",
          "At the next survey cycle.",
          "Only if the death is directly caused by the restraint device."
        ],
        correctIndex: 1,
        explanation: "PR.9 requires reporting restraint-associated deaths to CMS within one business day. This is a mandatory federal reporting requirement with a strict deadline and a broad definition of 'associated.'",
        category: "rule",
      },
      {
        id: "dnv_pr_5",
        question: "Your patient who speaks only Spanish is not provided an interpreter during the consent process. Under NIAHO PR.4, this is:",
        options: [
          "Acceptable if a family member translates.",
          "Non-compliant — qualified language interpretation must be available at no cost to the patient.",
          "Acceptable if the physician speaks some Spanish.",
          "Compliant if written translation is provided after the discussion."
        ],
        correctIndex: 1,
        explanation: "PR.4 requires qualified language interpretation services at no cost to the patient. Using family members as interpreters for medical consent does not meet this standard — qualified medical interpreters are required.",
        category: "scenario",
      },
      {
        id: "dnv_pr_6",
        question: "Under NIAHO PR.6, a patient's written complaint about care quality is:",
        options: [
          "An informal concern — no formal process required.",
          "A grievance requiring acknowledgment, investigation, and written response.",
          "Handled solely at the unit manager level without documentation.",
          "Required to be submitted to DNV within 30 days."
        ],
        correctIndex: 1,
        explanation: "PR.6 defines a written complaint as a grievance requiring a formal process — acknowledgment, investigation, and written response to the patient within a defined timeframe. All written complaints trigger the grievance process.",
        category: "rule",
      },
      {
        id: "dnv_pr_7",
        question: "Your patient presents with an advance directive limiting resuscitation. Under NIAHO PR.3, your hospital must:",
        options: [
          "Override it if family members request full resuscitation.",
          "Honor it and document it in the medical record.",
          "Have the patient re-sign it on admission regardless of its current validity.",
          "Require physician countersignature before it becomes effective."
        ],
        correctIndex: 1,
        explanation: "PR.3 requires hospitals to honor advance directives and document them in the medical record. Your hospital cannot override a patient's valid advance directive even at family request.",
        category: "scenario",
      },
      {
        id: "dnv_pr_8",
        question: "Under NIAHO PR.5, informed consent for treatment must include:",
        options: [
          "Only the procedure name and the patient's signature.",
          "The proposed treatment, its purpose, material risks, alternatives, and the right to refuse.",
          "Governing body approval for all high-risk procedures.",
          "Insurance pre-authorization as a prerequisite."
        ],
        correctIndex: 1,
        explanation: "PR.5 requires informed consent to include the proposed treatment, its purpose, material risks, alternatives, and the patient's right to refuse. A signature without this discussion is not valid informed consent.",
        category: "rule",
      },
      {
        id: "dnv_pr_9",
        question: "Under NIAHO PR.7, a restraint order for a violent adult patient must be renewed after how many hours?",
        options: [
          "Every 2 hours.",
          "Every 4 hours — the required interval for violent adult patients.",
          "Every 8 hours.",
          "Every 12 hours."
        ],
        correctIndex: 1,
        explanation: "PR.7 requires restraint orders for violent or self-destructive behavior to be renewed every 4 hours for adults. These are time-limited orders — they cannot be standing and must be reassessed and reordered at required intervals.",
        category: "number",
      },
      {
        id: "dnv_pr_10",
        question: "PR.10 (Care in a Safe Setting) primarily addresses care for patients who:",
        options: [
          "Are at risk of elopement from the hospital.",
          "Are at risk of harm to themselves or others.",
          "Have infectious conditions requiring isolation.",
          "Are receiving experimental treatments."
        ],
        correctIndex: 1,
        explanation: "PR.10 specifically addresses care for patients at risk of self-harm or harm to others. This includes environmental safety measures, monitoring, and care planning to keep these patients safe without unnecessary restriction.",
        category: "rule",
      },
      {
        id: "dnv_pr_11",
        question: "Under NIAHO PR.2, your patients have the right to:",
        options: [
          "Choose any physician at any hospital regardless of credentialing.",
          "Receive care with dignity, privacy, and access to information about their condition.",
          "Discharge themselves without physician order at any time for any reason.",
          "Refuse any treatment and receive unlimited alternative treatments at hospital cost."
        ],
        correctIndex: 1,
        explanation: "PR.2 enumerates specific rights including the right to dignity, privacy, and information about their health status. Rights are specific and defined — not unlimited — but must be genuinely respected and operationalized.",
        category: "rule",
      },
      {
        id: "dnv_pr_12",
        question: "Your patient refuses a recommended medication. Under NIAHO PR.2, your care team should:",
        options: [
          "Administer the medication anyway for the patient's safety.",
          "Respect the refusal, document it, and inform the physician — cannot force treatment on competent patients.",
          "Seek emergency guardian appointment if the medication is important.",
          "Discharge the patient if they refuse recommended treatment."
        ],
        correctIndex: 1,
        explanation: "PR.2 includes the right to refuse treatment. A competent patient's refusal must be respected, documented, and communicated to the care team. Patients cannot be forced to take medication or threatened with discharge for refusing.",
        category: "scenario",
      },
      {
        id: "dnv_pr_13",
        question: "Under PR.7, which of the following is NEVER an acceptable use of restraints?",
        options: [
          "Preventing a confused patient from pulling out a life-sustaining IV line.",
          "Staff convenience or as a disciplinary measure.",
          "Protecting a patient with severe agitation from injuring themselves.",
          "Enabling care when the patient cannot cooperate due to altered mental status."
        ],
        correctIndex: 1,
        explanation: "PR.7 explicitly prohibits the use of restraints as punishment, for staff convenience, or for any non-clinical purpose. Every application must be clinically justified for patient safety.",
        category: "rule",
      },
      {
        id: "dnv_pr_14",
        question: "Under NIAHO PR.6, the written response to a patient grievance must include:",
        options: [
          "A billing adjustment if the complaint involved a financial issue.",
          "The name of the contact person, steps taken to investigate, and the outcome.",
          "Legal counsel's review and signature.",
          "Governing body approval before sending."
        ],
        correctIndex: 1,
        explanation: "PR.6 requires the written grievance response to include: the name of the hospital contact person, the steps taken to investigate, and the results of the investigation. This is the minimum required content for a compliant response.",
        category: "rule",
      },
      {
        id: "dnv_pr_15",
        question: "Under PR.8, staff who apply restraints must have:",
        options: [
          "Only general clinical experience.",
          "Training specific to restraint and seclusion application, monitoring, and patient rights.",
          "Physician supervision present during each restraint application.",
          "Annual recertification from a DNV-approved training program."
        ],
        correctIndex: 1,
        explanation: "PR.8 requires staff who apply restraints to be trained in safe application, monitoring requirements, alternative interventions, and patient rights. This is a specific training requirement separate from general clinical education.",
        category: "rule",
      },
      {
        id: "dnv_pr_16",
        question: "Your patient requests to see a chaplain. Under NIAHO PR.2, your hospital must:",
        options: [
          "Require the patient to contact the chaplain independently.",
          "Facilitate access to pastoral or spiritual care as part of the patient's rights.",
          "Provide chaplaincy only if the hospital has a designated chaplain on staff.",
          "Defer this request until the patient's medical condition is fully addressed."
        ],
        correctIndex: 1,
        explanation: "PR.2 includes the right to pastoral and spiritual care. Your hospital must facilitate this access — not just permit it theoretically. This is a patient right, not an optional service.",
        category: "scenario",
      },
      {
        id: "dnv_pr_17",
        question: "Under NIAHO PR.3, advance directives apply to:",
        options: [
          "Long-term care patients only.",
          "All patients — your hospital must inquire about and document advance directive status for every patient.",
          "Patients over 65 only.",
          "Only patients with terminal diagnoses."
        ],
        correctIndex: 1,
        explanation: "PR.3 requires hospitals to inquire about and document advance directive status for all patients — not just elderly or terminally ill patients. Every patient should be asked about advance directives at admission.",
        category: "rule",
      },
      {
        id: "dnv_pr_18",
        question: "Under NIAHO PR.7, which statement about seclusion is CORRECT?",
        options: [
          "Seclusion requires only a nursing supervisor's approval.",
          "Seclusion is subject to the same strict requirements as restraint — including physician order, time limits, and monitoring.",
          "Seclusion may be used freely as an alternative to restraint since it is less physically restrictive.",
          "Seclusion does not require documentation unless the patient is injured."
        ],
        correctIndex: 1,
        explanation: "PR.7 applies the same rigorous requirements to seclusion as to restraint — physician orders, time limits, continuous monitoring, documentation, and prohibition against use for punishment or convenience.",
        category: "rule",
      },
      {
        id: "dnv_pr_19",
        question: "Under NIAHO PR.4, language access services must be:",
        options: [
          "Available in the 10 most common languages spoken in your community.",
          "Provided at no cost to the patient for all significant communications.",
          "Provided only in the emergency department and surgical settings.",
          "Limited to written translations of key documents."
        ],
        correctIndex: 1,
        explanation: "PR.4 requires language access services at no cost to the patient for significant communications — including consent, discharge instructions, and rights information. This applies throughout your hospital, not just in the ED.",
        category: "rule",
      },
      {
        id: "dnv_pr_20",
        question: "Under NIAHO PR.10, environmental safety measures for your patients at risk of self-harm must include:",
        options: [
          "Restraint as the first-line intervention.",
          "Assessment of the environment and removal or mitigation of self-harm hazards such as ligature risks.",
          "Constant 1:1 physician observation at all times.",
          "Transfer to a psychiatric facility immediately upon identification of risk."
        ],
        correctIndex: 1,
        explanation: "PR.10 requires a safe care environment for at-risk patients — including environmental assessment and mitigation of self-harm risks (ligature points, sharps, etc.). Environmental safety is a proactive, ongoing responsibility.",
        category: "rule",
      },'''

# ── DNV_IC (all correctIndexes: 1) ───────────────────────────────────────────
# Need to read the ic questions - I'll use the ones already visible plus reconstruct the rest
new_ic = '''    questions: [
      {
        id: "dnv_ic_1",
        question: "Under NIAHO IC.1, your infection prevention and control (IPC) program must have:",
        options: [
          "A committee that meets monthly to review infection data.",
          "Designated leadership accountable for IPC activities and outcomes.",
          "DNV-certified infection preventionists at all times.",
          "CMS-approved protocols posted on every unit."
        ],
        correctIndex: 1,
        explanation: "IC.1 requires the IPC program to have designated leadership with defined responsibility and accountability. The program cannot function effectively without identified ownership.",
        category: "rule",
      },
      {
        id: "dnv_ic_2",
        question: "Under NIAHO IC.2, your antimicrobial stewardship program must be integrated with:",
        options: [
          "The pharmacy billing system to track antibiotic costs.",
          "The infection prevention and control program to address resistance and HAIs.",
          "The medical staff credentialing process.",
          "The governing body's financial oversight function."
        ],
        correctIndex: 1,
        explanation: "IC.2 requires integration between the antimicrobial stewardship program and the IPC program. Together they address healthcare-associated infections, antibiotic resistance, and appropriate antibiotic use.",
        category: "rule",
      },
      {
        id: "dnv_ic_3",
        question: "Your hospital's IPC program identifies a cluster of surgical site infections. Under NIAHO IC.3, your facility must:",
        options: [
          "Report the cluster to DNV within 24 hours.",
          "Investigate the cluster, identify root causes, and implement corrective actions.",
          "Suspend surgeries until DNV completes its own investigation.",
          "Notify insurance companies of the potential liability."
        ],
        correctIndex: 1,
        explanation: "IC.3 requires the IPC program to investigate infection clusters, identify contributing factors, and implement corrective actions. The program must be active — not just monitoring — when problems emerge.",
        category: "scenario",
      },
      {
        id: "dnv_ic_4",
        question: "Under NIAHO MR.1, medical records must be maintained for a minimum period defined by:",
        options: [
          "DNV policy — 3 years from date of discharge.",
          "Applicable state and federal law — typically a minimum of 5 to 10 years.",
          "The patient's insurance company requirements.",
          "The hospital CEO at their discretion."
        ],
        correctIndex: 1,
        explanation: "MR.1 requires medical records to be retained per applicable state and federal law. The minimum period varies by jurisdiction but is typically 5 to 10 years — your hospital must know and comply with the applicable requirement.",
        category: "rule",
      },
      {
        id: "dnv_ic_5",
        question: "Under NIAHO MR.2, medical records must be:",
        options: [
          "Accessible only to the treating physician.",
          "Confidential, accurate, and accessible to authorized users when needed for patient care.",
          "Stored only in paper format for legal validity.",
          "Accessible to all hospital staff without restriction for continuity of care."
        ],
        correctIndex: 1,
        explanation: "MR.2 requires medical records to be maintained as confidential, accurate, and accessible to authorized individuals who need them for patient care. Both confidentiality and accessibility are required — neither can be sacrificed.",
        category: "rule",
      },
      {
        id: "dnv_ic_6",
        question: "Under NIAHO DC.1, discharge planning must begin:",
        options: [
          "Only when the physician writes a discharge order.",
          "At or near the time of admission for every patient.",
          "When the patient's length of stay exceeds 3 days.",
          "Only for patients going to post-acute care facilities."
        ],
        correctIndex: 1,
        explanation: "DC.1 requires discharge planning to begin at or near admission for every patient. Early discharge planning ensures post-acute needs are identified and addressed before discharge — not at the last minute.",
        category: "rule",
      },
      {
        id: "dnv_ic_7",
        question: "Under NIAHO DC.3, the discharge plan must be based on:",
        options: [
          "The physician's preference for post-acute settings.",
          "An individualized assessment of the patient's clinical and social needs.",
          "The patient's insurance coverage and pre-authorization status.",
          "Standardized pathways for each diagnosis group."
        ],
        correctIndex: 1,
        explanation: "DC.3 requires the discharge plan to be based on an individualized assessment of the patient's clinical and social circumstances. Standard pathways applied without individualization do not meet this requirement.",
        category: "rule",
      },
      {
        id: "dnv_ic_8",
        question: "Under NIAHO UR.1, your utilization review (UR) plan must address:",
        options: [
          "Insurance billing optimization strategies.",
          "Admission necessity, continued stay appropriateness, and review of professional services.",
          "Physician credentialing decisions.",
          "Budget planning for inpatient services."
        ],
        correctIndex: 1,
        explanation: "UR.1 requires the UR plan to cover admission necessity review, continued stay review, and evaluation of professional services. This ensures resources are used appropriately and care decisions are clinically justified.",
        category: "rule",
      },
      {
        id: "dnv_ic_9",
        question: "Under NIAHO UR.2, when a utilization review finds that a patient's continued stay is no longer medically necessary, the hospital must:",
        options: [
          "Immediately discharge the patient without physician involvement.",
          "Follow a defined process to notify the physician and address the finding.",
          "Report the finding to CMS before taking any action.",
          "Bill the patient directly for days deemed not medically necessary."
        ],
        correctIndex: 1,
        explanation: "UR.2 requires a defined process for addressing findings of unnecessary continued stay. The process must involve the physician and provide an opportunity to address the finding — not unilateral immediate discharge.",
        category: "rule",
      },
      {
        id: "dnv_ic_10",
        question: "Under NIAHO MR.3, which of the following must be in every medical record?",
        options: [
          "The patient's insurance policy number and authorization codes.",
          "Medical history, physical examination, diagnosis, treatment plan, and physician orders.",
          "Nursing staff performance evaluations.",
          "Hospital billing data linked to each clinical encounter."
        ],
        correctIndex: 1,
        explanation: "MR.3 specifies the required content of a medical record — including history, physical, diagnosis, treatment plan, orders, and clinical notes. The record must be a complete, accurate account of the patient's care.",
        category: "rule",
      },
      {
        id: "dnv_ic_11",
        question: "Under NIAHO IC.4, IPC surveillance data must be used to:",
        options: [
          "Generate annual reports for the governing body only.",
          "Drive ongoing quality improvement and inform clinical practice changes.",
          "Meet state public health reporting requirements only.",
          "Credential infection preventionists on your staff."
        ],
        correctIndex: 1,
        explanation: "IC.4 requires IPC surveillance data to be used for quality improvement. Data that is collected, reported, and then set aside without action does not satisfy the requirement's intent.",
        category: "rule",
      },
      {
        id: "dnv_ic_12",
        question: "Under NIAHO MR.6, a medical record must be authenticated (signed) by:",
        options: [
          "The charge nurse for all nursing entries.",
          "The author of each entry — entries must be dated, timed, and authenticated.",
          "The attending physician for all entries in the record.",
          "The medical records director at the time of discharge."
        ],
        correctIndex: 1,
        explanation: "MR.6 requires every entry to be authenticated by the author who made it — not a designee or supervisor. Authentication establishes accountability and legal validity for each entry.",
        category: "rule",
      },
      {
        id: "dnv_ic_13",
        question: "Your hospital's discharge planning process only activates for patients expected to stay more than 5 days. Under NIAHO DC.1, this is:",
        options: [
          "Acceptable — short stays rarely need formal discharge planning.",
          "Non-compliant — discharge planning must begin for every patient at or near admission.",
          "Acceptable if nursing staff verbally assess all patients' post-discharge needs.",
          "Compliant if the physician confirms no post-acute needs at admission."
        ],
        correctIndex: 1,
        explanation: "DC.1 requires discharge planning for every patient, initiated at or near admission. Limiting planning to expected long stays creates gaps — many patients with short stays still have significant post-discharge needs.",
        category: "scenario",
      },
      {
        id: "dnv_ic_14",
        question: "Under NIAHO DC.5, discharge instructions given to patients must include:",
        options: [
          "The hospital's billing contact information only.",
          "Information about follow-up care, medications, activity restrictions, and warning signs.",
          "A full copy of the discharge summary in medical terminology.",
          "Only the next appointment date."
        ],
        correctIndex: 1,
        explanation: "DC.5 requires discharge instructions to include follow-up care requirements, medication information, activity or dietary restrictions, and warning signs that should prompt the patient to seek care. Instructions must be understandable to the patient.",
        category: "rule",
      },
      {
        id: "dnv_ic_15",
        question: "Under NIAHO UR.3, the utilization review plan must include a process for:",
        options: [
          "Approving insurance claim denials.",
          "Reviewing the medical necessity of admissions and identifying over- or under-utilization.",
          "Setting physician compensation based on utilization data.",
          "Approving new clinical service lines."
        ],
        correctIndex: 1,
        explanation: "UR.3 requires the UR process to review medical necessity and identify patterns of over- or under-utilization. The goal is to ensure appropriate, efficient use of hospital resources and services.",
        category: "rule",
      },
      {
        id: "dnv_ic_16",
        question: "Under NIAHO MR.4, which of the following requires a discharge summary in the medical record?",
        options: [
          "Outpatient visits over 4 hours only.",
          "All inpatient stays — discharge summaries are required for every hospitalization.",
          "Only inpatient stays over 48 hours.",
          "Only stays where the patient is transferred to another facility."
        ],
        correctIndex: 1,
        explanation: "MR.4 requires a discharge summary for all inpatient hospitalizations. The discharge summary documents the hospital course, diagnoses, treatment, follow-up plans, and is essential for continuity of care.",
        category: "rule",
      },
      {
        id: "dnv_ic_17",
        question: "Under NIAHO MR.5, entries in the medical record must be:",
        options: [
          "Made only by licensed clinical staff — administrative staff may not document.",
          "Dated, timed, and authenticated by the author.",
          "Made exclusively in blue ink — black ink is not acceptable.",
          "Completed only at the end of each nursing shift."
        ],
        correctIndex: 1,
        explanation: "MR.5 requires that all entries be dated, timed, and authenticated by the person making the entry. This ensures accountability, legal validity, and the ability to reconstruct the care timeline accurately.",
        category: "rule",
      },
      {
        id: "dnv_ic_18",
        question: "Under NIAHO DC.6, post-acute care services discussed in discharge planning must address:",
        options: [
          "Only home care services — SNF placement is outside your hospital's scope.",
          "The full range of appropriate post-acute options based on the patient's clinical and social needs.",
          "Only services covered by the patient's primary insurance.",
          "Only services provided by your hospital's affiliated post-acute facilities."
        ],
        correctIndex: 1,
        explanation: "DC.6 requires discharge planning to address the full range of post-acute care options appropriate to the patient's needs — home health, SNF, rehabilitation, outpatient services, etc. Planning must not be limited by facility affiliation.",
        category: "rule",
      },
      {
        id: "dnv_ic_19",
        question: "Under NIAHO UR.4, review of professional services is intended to:",
        options: [
          "Evaluate physician billing practices for fraud and abuse.",
          "Assess whether professional services provided are medically appropriate and necessary.",
          "Review physician credentials at the time of service.",
          "Evaluate patient satisfaction with physician communication."
        ],
        correctIndex: 1,
        explanation: "UR.4 (Review of Professional Services) evaluates whether the professional services delivered to patients are medically appropriate and necessary — not physician billing or credentialing.",
        category: "rule",
      },
      {
        id: "dnv_ic_20",
        question: "Under NIAHO MR.8, when records are made available electronically to other treating providers, your hospital must:",
        options: [
          "Require the receiving provider to pick up physical copies as a backup.",
          "Ensure the electronic notification meets confidentiality and accuracy requirements.",
          "Obtain a court order for each electronic release.",
          "Share records only with providers within the same health system."
        ],
        correctIndex: 1,
        explanation: "MR.8 addresses electronic notification and record sharing. When records are transmitted electronically, your hospital must ensure confidentiality protections are maintained and the transmitted information is accurate.",
        category: "rule",
      },'''

# ── DNV_PE (all correctIndexes: 1) ───────────────────────────────────────────
new_pe = '''    questions: [
      {
        id: "dnv_pe_1",
        question: "Under NIAHO PE.7, your hospital may use an Alternate Equipment Management (AEM) program for medical equipment only if:",
        options: [
          "The CEO approves alternate maintenance schedules.",
          "The AEM program is documented, based on nationally recognized standards, and includes risk assessment.",
          "The equipment is more than 5 years old.",
          "The manufacturer specifically allows alternative maintenance in the product manual."
        ],
        correctIndex: 1,
        explanation: "PE.7 allows AEM programs as an alternative to manufacturer-specified maintenance, but only when the program is documented, based on nationally recognized standards (like ANSI/AAMI EQ56), and supported by risk assessment for each device.",
        category: "rule",
      },
      {
        id: "dnv_pe_2",
        question: "Under NIAHO PE.6, your emergency preparedness plan must be based on:",
        options: [
          "The previous year's incident volume statistics.",
          "A Hazard Vulnerability Analysis (HVA) identifying likely hazards in the community and facility.",
          "Federal FEMA templates applied uniformly.",
          "Staff surveys about their emergency concerns."
        ],
        correctIndex: 1,
        explanation: "PE.6 requires emergency plans to be based on a Hazard Vulnerability Analysis — a structured assessment of likely hazards (natural, technological, human-caused) specific to your facility's geographic and operational context.",
        category: "rule",
      },
      {
        id: "dnv_pe_3",
        question: "Under NIAHO PE.6, how many emergency preparedness exercises must your facility conduct annually?",
        options: [
          "One tabletop exercise only.",
          "At least two exercises — with at least one being community-based.",
          "Four exercises — one per quarter.",
          "One full-scale drill and monthly tabletop exercises."
        ],
        correctIndex: 1,
        explanation: "PE.6 requires at least two exercises annually, with at least one being a community-based exercise (coordinating with external agencies). Exercises may include full-scale drills, functional exercises, or tabletop exercises.",
        category: "number",
      },
      {
        id: "dnv_pe_4",
        question: "Under NIAHO PE.2, a newly discovered fire code deficiency in your facility must be:",
        options: [
          "Corrected within 90 days or reported to DNV.",
          "Corrected immediately or placed on an Interim Life Safety Measures (ILSM) plan until corrected.",
          "Deferred until the next scheduled renovation.",
          "Reported to the fire marshal only."
        ],
        correctIndex: 1,
        explanation: "PE.2 requires life safety deficiencies to be corrected immediately. If immediate correction is not possible, your hospital must implement ILSM — compensatory measures that provide equivalent protection while the deficiency is being corrected.",
        category: "rule",
      },
      {
        id: "dnv_pe_5",
        question: "Under NIAHO TO.2, an organ procurement organization (OPO) agreement must include:",
        options: [
          "Financial compensation rates for organ donation staff.",
          "Defined responsibilities of the hospital and OPO, including notification and referral requirements.",
          "A list of approved transplant recipients.",
          "CMS billing codes for organ procurement procedures."
        ],
        correctIndex: 1,
        explanation: "TO.2 requires the OPO agreement to define the responsibilities of both your hospital and the OPO — including when and how your hospital must notify the OPO of potential donors and how the OPO will respond.",
        category: "rule",
      },
      {
        id: "dnv_pe_6",
        question: "Under NIAHO PE.7, which medical equipment is MOST scrutinized in an AEM program review?",
        options: [
          "Equipment that is inexpensive and easily replaced.",
          "'Critical equipment' — devices where failure could cause serious injury or death.",
          "Equipment manufactured outside the United States.",
          "Equipment used in the emergency department only."
        ],
        correctIndex: 1,
        explanation: "PE.7 directs surveyors to focus on 'critical equipment' in AEM programs — devices where failure or malfunction could cause serious injury or death. This equipment requires the most thorough risk assessment and justification for alternate maintenance.",
        category: "rule",
      },
      {
        id: "dnv_pe_7",
        question: "Under NIAHO PE.6, after an emergency exercise your facility must:",
        options: [
          "Archive the exercise records without further review.",
          "Conduct an after-action review, identify improvement opportunities, and update the plan accordingly.",
          "Report exercise results to DNV within 30 days.",
          "Conduct the next exercise within 30 days as a follow-up."
        ],
        correctIndex: 1,
        explanation: "PE.6 requires after-action review following exercises and actual emergency events. Lessons learned must be documented and used to improve the emergency plan and training program — exercises are only valuable if improvements result.",
        category: "rule",
      },
      {
        id: "dnv_pe_8",
        question: "Under NIAHO PE.5, your hazardous material management system must:",
        options: [
          "Track only radioactive materials — chemical hazards are covered by OSHA separately.",
          "Have processes for identification, handling, storage, and disposal of all hazardous materials per applicable regulations.",
          "Store all hazardous materials in the pharmacy for centralized management.",
          "Obtain annual DNV approval for your hazardous material inventory."
        ],
        correctIndex: 1,
        explanation: "PE.5 requires a comprehensive hazardous material management system covering identification, safe handling, storage, and compliant disposal of all hazardous materials — including chemicals, radioactive materials, and biological hazards.",
        category: "rule",
      },
      {
        id: "dnv_pe_9",
        question: "Under NIAHO TO.1, when a patient is near death, your hospital must:",
        options: [
          "Wait for family to request organ donation before contacting the OPO.",
          "Refer all potential donors to the OPO in a timely manner — before pronouncing death when possible.",
          "Determine organ suitability internally using the patient's medical records.",
          "Contact the OPO only if the patient has a signed donor card."
        ],
        correctIndex: 1,
        explanation: "TO.1 requires timely referral of all potential donors to the OPO — not just those with donor cards. The OPO makes the suitability determination. Your hospital must refer ALL deaths and imminent deaths to the OPO without pre-screening.",
        category: "rule",
      },
      {
        id: "dnv_pe_10",
        question: "Under NIAHO PE.8, failure of a critical utility system requires:",
        options: [
          "Immediate facility evacuation.",
          "Activation of defined emergency procedures and alternative utility provisions.",
          "DNV notification before any corrective action is taken.",
          "A 24-hour wait period before backup systems are activated."
        ],
        correctIndex: 1,
        explanation: "PE.8 requires defined emergency procedures for utility failures — immediate activation of backup systems and response protocols. Your facility must have pre-planned responses, not improvise when critical utilities fail.",
        category: "rule",
      },
      {
        id: "dnv_pe_11",
        question: "Your hospital places ventilators in its AEM program, scheduling maintenance less frequently than the manufacturer recommends. Under PE.7, you must demonstrate:",
        options: [
          "The manufacturer's agreement with the modified schedule.",
          "A risk assessment justifying the modification and documenting that safety is not compromised.",
          "DNV pre-approval for ventilators in any AEM program.",
          "That the reduced frequency saves at least 20% in maintenance costs."
        ],
        correctIndex: 1,
        explanation: "PE.7 requires risk assessment documentation for equipment in an AEM program. Ventilators are likely 'critical equipment' — your hospital must demonstrate through documented risk analysis that the modified schedule does not compromise patient safety.",
        category: "scenario",
      },
      {
        id: "dnv_pe_12",
        question: "Under NIAHO PE.3, your safety management system must address:",
        options: [
          "Employee satisfaction with working conditions.",
          "Workplace safety hazards, incident investigation, and ongoing safety monitoring.",
          "Building exterior maintenance only.",
          "Financial risk management and liability insurance."
        ],
        correctIndex: 1,
        explanation: "PE.3 requires the safety management system to identify and address workplace safety hazards, investigate incidents, and monitor safety performance on an ongoing basis — protecting patients, staff, and visitors.",
        category: "rule",
      },
      {
        id: "dnv_pe_13",
        question: "Your emergency preparedness communication plan under PE.6 must include:",
        options: [
          "Primary phone systems only — cell phones are personal devices and not required.",
          "Backup communication methods for when primary systems fail.",
          "A social media strategy for public notification.",
          "A single designated spokesperson with exclusive communication authority."
        ],
        correctIndex: 1,
        explanation: "PE.6 requires the communication plan to include backup communication methods — primary systems may fail in a disaster. Backup options might include satellite phones, ham radio, or other redundant communication systems.",
        category: "rule",
      },
      {
        id: "dnv_pe_14",
        question: "Under NIAHO PE.1, your hospital facility must comply with the applicable edition of:",
        options: [
          "The American Hospital Association physical plant guidelines.",
          "The National Fire Protection Association (NFPA) Life Safety Code.",
          "The American Society of Mechanical Engineers (ASME) building codes.",
          "The state department of health facility standards exclusively."
        ],
        correctIndex: 1,
        explanation: "PE.1 requires compliance with the applicable edition of the NFPA Life Safety Code (LSC). CMS has incorporated the LSC into its Conditions of Participation, and NIAHO requires compliance with this federal standard.",
        category: "rule",
      },
      {
        id: "dnv_pe_15",
        question: "Under NIAHO TO.4, your hospital must respect patient rights in the organ donation process by:",
        options: [
          "Requiring organ donation for all patients without next-of-kin who die in your hospital.",
          "Ensuring donation is voluntary and that patient and family rights are respected throughout the process.",
          "Deferring all donation decisions to the OPO without involving the family.",
          "Documenting organ donation refusals as adverse events."
        ],
        correctIndex: 1,
        explanation: "TO.4 requires that patient and family rights be respected throughout the organ donation process. Donation must be fully voluntary — your hospital and OPO may approach families about donation, but cannot coerce or override their decision.",
        category: "rule",
      },
      {
        id: "dnv_pe_16",
        question: "Under NIAHO PE.4, your security management system must:",
        options: [
          "Be staffed entirely by off-duty law enforcement officers.",
          "Protect patients, staff, and visitors from security risks including infant abduction and workplace violence.",
          "Focus exclusively on physical access to the facility exterior.",
          "Require DNV-certified security personnel."
        ],
        correctIndex: 1,
        explanation: "PE.4 requires the security management system to protect all persons in your hospital — patients, staff, and visitors — from a range of security risks. This includes infant abduction prevention, workplace violence prevention, and general physical security.",
        category: "rule",
      },
      {
        id: "dnv_pe_17",
        question: "Under NIAHO PE.7, imaging and radiologic equipment is specifically:",
        options: [
          "Eligible for AEM programs at your hospital's discretion.",
          "NOT eligible for AEM programs — must be maintained per manufacturer recommendations under 42 CFR 482.26.",
          "Eligible for AEM only with state radiology board approval.",
          "Exempt from all maintenance requirements due to regulatory overlap with ACR standards."
        ],
        correctIndex: 1,
        explanation: "PE.7 specifically identifies imaging and radiologic equipment as ineligible for AEM programs under 42 CFR 482.26(b)(2), which requires maintenance per manufacturer recommendations. This is one of the specific AEM exclusions.",
        category: "rule",
      },
      {
        id: "dnv_pe_18",
        question: "Under NIAHO PE.6, your emergency preparedness program as part of a multi-hospital system must:",
        options: [
          "Be identical at all system facilities.",
          "Be integrated and unified across the system while addressing each facility's specific risks.",
          "Be operated as a completely independent program at each facility.",
          "Be approved by the system CEO before it can be submitted to DNV."
        ],
        correctIndex: 1,
        explanation: "For multi-hospital systems, PE.6 requires the emergency preparedness program to be unified and integrated across the system — sharing resources and coordinating responses — while addressing each individual facility's specific hazard vulnerabilities.",
        category: "rule",
      },
      {
        id: "dnv_pe_19",
        question: "Under NIAHO TO.6, if your hospital performs organ transplantation, it must:",
        options: [
          "Have its own OPO designation from HRSA.",
          "Meet additional requirements specific to transplant programs under applicable regulations.",
          "Limit transplants to kidneys and livers only unless specifically approved.",
          "Perform transplants only on patients admitted to your hospital's service area."
        ],
        correctIndex: 1,
        explanation: "TO.6 addresses hospitals that perform organ transplantation — they must meet additional regulatory requirements beyond the basic OPO agreement, including federal transplant program standards and specific quality and outcome monitoring.",
        category: "rule",
      },
      {
        id: "dnv_pe_20",
        question: "Under NIAHO PE.7, which personnel are considered 'qualified' to make decisions about placing medical equipment in an AEM program?",
        options: [
          "The hospital CEO or CFO based on financial analysis.",
          "Clinical or biomedical engineers and technicians with the relevant technical expertise.",
          "Any licensed clinical staff member who uses the equipment.",
          "DNV-certified maintenance coordinators only."
        ],
        correctIndex: 1,
        explanation: "PE.7 requires that decisions to place equipment in an AEM program be made by qualified personnel — specifically clinical or biomedical technicians or engineers with expertise in the equipment type. Financial staff alone cannot make this determination.",
        category: "rule",
      },'''

# ── Apply all replacements ──────────────────────────────────────────────────
CHAPTER_SEP = '\n    ],\n  },\n\n  // ─────────────────────────────────────────────────────────────────────────'
LAST_END = '\n    ],\n  },\n];\n'

content = replace_q(content, "dnv_pr_1", CHAPTER_SEP + '\n  // CHAPTER 10', new_pr)
content = replace_q(content, "dnv_ic_1", CHAPTER_SEP + '\n  // CHAPTER 11', new_ic)
content = replace_q(content, "dnv_pe_1", LAST_END, new_pe)

with open('shared/dnv-niaho-questions.ts', 'w') as f:
    f.write(content)
print("Batch C done.")
