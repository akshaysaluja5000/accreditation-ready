"""Batch B: dnv_mm, dnv_ss, dnv_pc, dnv_es"""
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

# ── DNV_MM (correctIndexes: 1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1) ─────────
new_mm = '''    questions: [
      {
        id: "dnv_mm_1",
        question: "Under NIAHO MM.4, which element is REQUIRED for a complete medication order?",
        options: [
          "Patient's insurance information.",
          "Route of administration — required along with drug, dose, frequency, and prescriber ID.",
          "Prescriber's DEA number for all medications.",
          "Patient's weight in kilograms for all medications."
        ],
        correctIndex: 1,
        explanation: "MM.4 requires medication orders to include route of administration along with drug name, dose, frequency, patient identifier, and prescriber authorization. Missing the route creates ambiguity that can lead to medication errors.",
        category: "rule",
      },
      {
        id: "dnv_mm_2",
        question: "Under NIAHO MM.5, after-hours access to pharmacy services must be:",
        options: [
          "Available by on-call pharmacist phone consultation only.",
          "Available 24 hours through defined means — on-site, on-call, or another approved mechanism.",
          "Available only for emergencies as defined by the medical director.",
          "Provided by the charge nurse if the pharmacist is unavailable."
        ],
        correctIndex: 1,
        explanation: "MM.5 requires 24-hour access to pharmacy services. This can be through an on-site pharmacist, on-call pharmacist with secure medication access, or another approved mechanism — access cannot have gaps.",
        category: "rule",
      },
      {
        id: "dnv_mm_3",
        question: "Your Pharmacy and Therapeutics committee under NIAHO MM.6 is responsible for:",
        options: [
          "Setting medication prices for insurance contracts.",
          "Overseeing medication use, approving the formulary, and monitoring drug-related outcomes.",
          "Credentialing all pharmacists on staff.",
          "Setting DEA quotas for controlled substances."
        ],
        correctIndex: 1,
        explanation: "MM.6 requires a pharmacy oversight group (typically the P&T committee) to oversee medication use, review and approve the formulary, and monitor drug-related outcomes and adverse events.",
        category: "rule",
      },
      {
        id: "dnv_mm_4",
        question: "Under NIAHO MM.3, scheduled (controlled) drugs require:",
        options: [
          "Double-lock storage, strict count procedures, and documented accountability — all required.",
          "Storage in a standard medication room without additional security.",
          "Monthly reconciliation with state pharmacy board records only.",
          "DEA approval for each individual administration."
        ],
        correctIndex: 0,
        explanation: "MM.3 requires enhanced safeguards for scheduled (controlled) drugs — including secure double-lock storage, documented counts at each shift or transaction, and accountability processes to detect and investigate discrepancies.",
        category: "rule",
      },
      {
        id: "dnv_mm_5",
        question: "Your pharmacy technician finds the controlled substance count is off by one tablet at shift change. Under MM.3, your facility must:",
        options: [
          "Wait until the end of the week to see if it resolves.",
          "Document and investigate the discrepancy immediately according to your policy.",
          "Assume it was an administrative error and move on.",
          "Report directly to the DEA without internal investigation first."
        ],
        correctIndex: 1,
        explanation: "MM.3 requires that controlled substance discrepancies be documented and investigated immediately. Discrepancies cannot be assumed away — the investigation must be documented even if the resolution is eventually administrative.",
        category: "scenario",
      },
      {
        id: "dnv_mm_6",
        question: "Under NIAHO MM.7, drug information resources must be:",
        options: [
          "Kept in the pharmacy only, accessible by pharmacists.",
          "Available to clinical staff wherever medications are administered.",
          "Updated no less than every 5 years.",
          "Provided only in electronic format."
        ],
        correctIndex: 1,
        explanation: "MM.7 requires drug information to be available to clinical staff at the point of care — not just in the pharmacy. Nurses, physicians, and others administering medications need access to current drug references.",
        category: "rule",
      },
      {
        id: "dnv_mm_7",
        question: "Your patient asks to continue taking home herbal supplements while hospitalized. Under NIAHO MM.9, your facility must:",
        options: [
          "Automatically allow it since herbal supplements are not prescription drugs.",
          "Assess the patient's ability to self-administer and document the safety decision.",
          "Prohibit all self-administered medications while hospitalized.",
          "Require physician pre-approval for any supplement under 30mg."
        ],
        correctIndex: 1,
        explanation: "MM.9 requires the hospital to assess the appropriateness and safety of self-administered medications — including supplements. The assessment must be documented, and your policy must address when self-administration is and is not appropriate.",
        category: "scenario",
      },
      {
        id: "dnv_mm_8",
        question: "An antimicrobial stewardship program under MM.8 must include:",
        options: [
          "A requirement to prescribe only generic antibiotics.",
          "Leadership commitment, defined responsibilities, and processes to optimize antibiotic use.",
          "State pharmacy board pre-approval for all antibiotic prescriptions.",
          "Mandatory infectious disease consultation for every antibiotic order."
        ],
        correctIndex: 1,
        explanation: "MM.8 requires a stewardship program with leadership support, defined accountability, drug use monitoring, and intervention processes to optimize antibiotic prescribing — reducing unnecessary use and combating resistance.",
        category: "rule",
      },
      {
        id: "dnv_mm_9",
        question: "Under NIAHO MM.2, your hospital formulary is defined as:",
        options: [
          "A list of all medications covered by patient insurance plans.",
          "The approved list of medications available for use in your hospital.",
          "A list of medications that require prior authorization.",
          "Your preferred pharmaceutical vendor contracts."
        ],
        correctIndex: 1,
        explanation: "MM.2 defines the formulary as the approved list of medications available for use in the hospital. The formulary is overseen by the pharmacy oversight group and represents a clinically curated list.",
        category: "definition",
      },
      {
        id: "dnv_mm_10",
        question: "A physician writes a medication order as 'Tylenol 500mg' without specifying route or frequency. Under MM.4, this order:",
        options: [
          "Can be filled by the pharmacist using standard dosing.",
          "Is incomplete and must be clarified before dispensing or administration.",
          "Is acceptable for PRN orders since the nurse can determine frequency.",
          "Complies with NIAHO since the drug name and dose are present."
        ],
        correctIndex: 1,
        explanation: "MM.4 requires complete orders including route and frequency. Without these elements, the order is ambiguous and unsafe — it must be clarified with the prescriber before the medication is dispensed or administered.",
        category: "scenario",
      },
      {
        id: "dnv_mm_11",
        question: "Under MM.1, medications stored on patient care units must be:",
        options: [
          "Accessible to all hospital staff at all times for efficiency.",
          "Stored securely, with access limited to authorized staff, under appropriate conditions.",
          "Kept at room temperature regardless of manufacturer recommendations.",
          "Approved by the state board of pharmacy for unit storage."
        ],
        correctIndex: 1,
        explanation: "MM.1 requires medications to be stored securely — under appropriate conditions (temperature, light, humidity per manufacturer) — and accessible only to authorized staff. Unsecured medication storage is a common survey finding.",
        category: "rule",
      },
      {
        id: "dnv_mm_12",
        question: "Which NIAHO standard requires your hospital to link antibiotic prescribing data to quality improvement?",
        options: [
          "MM.3 Scheduled Drugs.",
          "MM.8 Antimicrobial Stewardship — tracks use and drives improvement.",
          "MM.6 Oversight Group.",
          "MM.2 Formulary Management."
        ],
        correctIndex: 1,
        explanation: "MM.8 requires an antimicrobial stewardship program that tracks antibiotic use and links findings to quality improvement efforts. Simply monitoring data without acting on it does not satisfy MM.8.",
        category: "rule",
      },
      {
        id: "dnv_mm_13",
        question: "Your hospital uses an automated dispensing cabinet after hours. Under MM.5, this satisfies 24-hour access requirements only if:",
        options: [
          "The cabinet contains all formulary medications.",
          "A pharmacist is reachable and has authorized the medications stored in the cabinet.",
          "Nurses have unrestricted access to all medications in the cabinet.",
          "The cabinet is located in the emergency department."
        ],
        correctIndex: 1,
        explanation: "Automated dispensing cabinets can support after-hours access, but a pharmacist must be accessible and must have authorized the medications available. Unrestricted nurse access without pharmacist oversight does not meet MM.5.",
        category: "scenario",
      },
      {
        id: "dnv_mm_14",
        question: "Your P&T committee reviews a new medication request for the formulary. Under MM.6, the committee should evaluate:",
        options: [
          "The medication's cost relative to the hospital's revenue margin only.",
          "Clinical evidence, safety profile, and appropriateness relative to existing formulary options.",
          "Whether the pharmaceutical rep can provide samples for staff.",
          "Only whether CMS will reimburse the medication."
        ],
        correctIndex: 1,
        explanation: "MM.6 requires the oversight group to evaluate medications for formulary inclusion based on clinical evidence, safety, and appropriateness. This is a clinical and quality function — not primarily a financial or vendor relationship decision.",
        category: "scenario",
      },
      {
        id: "dnv_mm_15",
        question: "Under MM.1, high-alert medications such as concentrated electrolytes and insulin must:",
        options: [
          "Be stored with all other medications to reduce handling time.",
          "Have special storage, labeling, and administration safeguards to reduce harm risk.",
          "Be available only in the pharmacy — never on patient care units.",
          "Be restricted to physician administration only."
        ],
        correctIndex: 1,
        explanation: "MM.1 requires enhanced safeguards for high-alert medications — including special storage, distinct labeling, independent double-checks before administration, and clear protocols to reduce error risk.",
        category: "rule",
      },
      {
        id: "dnv_mm_16",
        question: "Under NIAHO, verbal medication orders should be:",
        options: [
          "Prohibited entirely — all orders must be written.",
          "Read back for confirmation and documented within the timeframe in your policy.",
          "Signed by the nurse who received them without physician follow-up.",
          "Acceptable only in emergencies with no documentation required."
        ],
        correctIndex: 1,
        explanation: "MM.4 requires verbal and telephone orders to be confirmed by read-back and documented promptly. The prescriber must authenticate the order within the hospital's defined timeframe. This reduces transcription errors.",
        category: "rule",
      },
      {
        id: "dnv_mm_17",
        question: "Your nursing staff is not tracking a patient's home medication supply. Under MM.9, this is:",
        options: [
          "Acceptable since home medications are the patient's personal property.",
          "A compliance gap — your facility must assess and document home medication use.",
          "Acceptable if the physician is aware.",
          "A concern only if the patient takes more than three home medications."
        ],
        correctIndex: 1,
        explanation: "MM.9 requires the hospital to address self-administered medications including those from home. Assessment and documentation of safety, interactions, and appropriateness are required.",
        category: "scenario",
      },
      {
        id: "dnv_mm_18",
        question: "Under NIAHO MM.3, who must document controlled substance administration?",
        options: [
          "The charge nurse at the end of each shift.",
          "The administering nurse — with required witness documentation for wastage.",
          "The pharmacist only.",
          "The physician who ordered the medication."
        ],
        correctIndex: 1,
        explanation: "MM.3 requires that the administering nurse document controlled substance administration. For wastage, a witness is required and both parties must document. This chain of accountability prevents diversion.",
        category: "rule",
      },
      {
        id: "dnv_mm_19",
        question: "Your antimicrobial stewardship program produces monthly reports, but no physician has changed prescribing practices in two years. Under MM.8, this program:",
        options: [
          "Is compliant since reports are being generated.",
          "Is non-compliant — the program must demonstrate intervention and impact on prescribing.",
          "Is compliant if physicians review and sign off on the reports.",
          "Needs only to notify the state health department of patterns."
        ],
        correctIndex: 1,
        explanation: "MM.8 requires a functioning stewardship program that influences prescribing — not just one that generates reports. No change in prescribing over two years despite a program suggests the intervention component is not functioning.",
        category: "scenario",
      },
      {
        id: "dnv_mm_20",
        question: "Under NIAHO MM.2, when a physician prescribes a non-formulary medication, your hospital must:",
        options: [
          "Automatically cancel the order.",
          "Have a defined process including pharmacist review and consideration of alternatives.",
          "Require governing body approval before dispensing.",
          "Dispense it without additional steps if the physician is a medical staff member."
        ],
        correctIndex: 1,
        explanation: "MM.2 requires a defined process for non-formulary medication requests. The pharmacist must review the request, consider therapeutic alternatives, and follow the hospital's non-formulary approval pathway before dispensing.",
        category: "rule",
      },'''

# ── DNV_SS (all correctIndexes: 1) ───────────────────────────────────────────
new_ss = '''    questions: [
      {
        id: "dnv_ss_1",
        question: "Under NIAHO SS.8, if an operative report cannot be dictated immediately after surgery, the surgeon must:",
        options: [
          "Document a complete operative note within 24 hours.",
          "Place a brief operative note in the medical record before the patient is transferred from the OR.",
          "Have another surgeon write the report within 8 hours.",
          "Notify the hospital administrator and submit the report within 72 hours."
        ],
        correctIndex: 1,
        explanation: "SS.8 requires the operative report immediately after surgery. If delayed dictation is necessary, a brief operative note must be placed in the record before patient transfer from the OR. This ensures continuity for post-operative care.",
        category: "rule",
      },
      {
        id: "dnv_ss_2",
        question: "Your patient is given IV midazolam for anxiety before signing the surgical consent form. Under NIAHO SS.9, this is:",
        options: [
          "Acceptable if the patient appears awake and oriented.",
          "Non-compliant — informed consent must be obtained before sedation.",
          "Acceptable if a family member witnesses the signing.",
          "Compliant if the surgeon reviews the procedure verbally after sedation."
        ],
        correctIndex: 1,
        explanation: "SS.9 requires informed consent before any procedure. Sedation impairs decision-making capacity — consent signed after sedation is not valid and represents a serious compliance and ethical failure.",
        category: "scenario",
      },
      {
        id: "dnv_ss_3",
        question: "Under NIAHO SS.6, your operating room register must contain:",
        options: [
          "A financial record of each procedure's billing codes.",
          "A log of all procedures including patient identification, procedure performed, and surgeon name.",
          "Only emergency surgery entries — elective procedures are tracked separately.",
          "Pre-authorization numbers from insurance companies."
        ],
        correctIndex: 1,
        explanation: "SS.6 requires an OR register that logs all procedures performed — not just emergencies. The log must include patient identification, the procedure performed, the operating surgeon, and other key data points.",
        category: "rule",
      },
      {
        id: "dnv_ss_4",
        question: "Under NIAHO SS.7, a patient in your PACU may be discharged when:",
        options: [
          "The surgeon gives a verbal order to discharge.",
          "Defined discharge criteria are met and documented by qualified PACU staff.",
          "One hour has passed since the procedure ended.",
          "The anesthesiologist signs the discharge order from the anesthesia workroom."
        ],
        correctIndex: 1,
        explanation: "SS.7 requires that PACU discharge occur when defined criteria are met and documented. The criteria must be established in policy, and PACU staff must assess and document that each criterion has been met before discharge.",
        category: "rule",
      },
      {
        id: "dnv_ss_5",
        question: "Instrument reprocessing under SS.10 must follow:",
        options: [
          "The most cost-effective method available to your facility.",
          "Manufacturer instructions for reprocessing of each instrument or device.",
          "General SPD decontamination guidelines only.",
          "State health department-approved protocols exclusively."
        ],
        correctIndex: 1,
        explanation: "SS.10 requires that surgical instruments, implants, and medical equipment be reprocessed according to manufacturer instructions. Deviating from manufacturer-validated methods — even with good intent — can compromise sterilization effectiveness.",
        category: "rule",
      },
      {
        id: "dnv_ss_6",
        question: "Under NIAHO AS.1, anesthesia services must be organized under:",
        options: [
          "A CRNA serving as department head.",
          "A qualified physician director.",
          "A committee of anesthesiologists and CRNAs.",
          "The hospital CEO with anesthesia advisory input."
        ],
        correctIndex: 1,
        explanation: "AS.1 requires anesthesia services to be directed by a qualified physician. While CRNAs are critical members of anesthesia teams, the department leadership under NIAHO must be a physician.",
        category: "rule",
      },
      {
        id: "dnv_ss_7",
        question: "Under NIAHO AS.3, a pre-anesthesia evaluation must be performed:",
        options: [
          "Within 7 days of surgery during the pre-admission visit only.",
          "Immediately before each anesthesia case to assess the patient's current status.",
          "By the surgeon rather than the anesthesia provider.",
          "Only for patients with ASA class III or higher."
        ],
        correctIndex: 1,
        explanation: "AS.3 requires a pre-anesthesia evaluation before every anesthesia case. This includes a review of the patient's current status, medical history, medications, allergies, airway assessment, and anesthesia plan.",
        category: "rule",
      },
      {
        id: "dnv_ss_8",
        question: "Your surgeon performs a procedure not listed in their delineated clinical privileges. Under NIAHO SS.3, this is:",
        options: [
          "Acceptable in emergencies without prior notification.",
          "A serious compliance violation — procedures must be within delineated privileges.",
          "Acceptable if the OR charge nurse gives verbal approval.",
          "Compliant if the surgeon has performed the procedure at another hospital."
        ],
        correctIndex: 1,
        explanation: "SS.3 requires practitioners to hold specific delineated privileges for procedures they perform. Performing outside privileged scope — even in apparent good faith — is a NIAHO violation and creates patient safety and legal risk.",
        category: "scenario",
      },
      {
        id: "dnv_ss_9",
        question: "Under NIAHO SS.9, which element must be included in the surgical informed consent discussion?",
        options: [
          "The surgeon's personal complication rates for this procedure.",
          "The procedure, its purpose, material risks, alternatives, and the patient's right to refuse.",
          "A mandatory 24-hour waiting period before signing.",
          "The names of all OR staff who will be present."
        ],
        correctIndex: 1,
        explanation: "SS.9 requires informed consent to include: the procedure, its purpose, material (significant) risks, available alternatives, and the patient's right to refuse. Consent is a process — not just a signature on a form.",
        category: "rule",
      },
      {
        id: "dnv_ss_10",
        question: "Under AS.3, a post-anesthesia assessment before PACU discharge must evaluate:",
        options: [
          "Only the patient's pain level and vital signs.",
          "Respiratory function, oxygenation, cardiovascular status, level of consciousness, and pain.",
          "Whether the patient can ambulate independently.",
          "Only whether the patient can take oral fluids."
        ],
        correctIndex: 1,
        explanation: "AS.3 requires a comprehensive post-anesthesia assessment before PACU discharge. This must include respiratory function, oxygenation, cardiovascular status, level of consciousness, and pain management — not just one or two parameters.",
        category: "rule",
      },
      {
        id: "dnv_ss_11",
        question: "Under SS.5, your surgical suite must have emergency equipment that includes:",
        options: [
          "Equipment as determined by surgeon preference only.",
          "Equipment required to respond to anesthesia emergencies, cardiac arrest, and other urgent events.",
          "Basic vital sign monitoring only — advanced equipment is kept in the ICU.",
          "Equipment approved by the medical staff annually."
        ],
        correctIndex: 1,
        explanation: "SS.5 requires available emergency equipment in the surgical suite — including cardiac arrest and anesthesia emergency response supplies. Equipment must be present where procedures occur, not stored elsewhere.",
        category: "rule",
      },
      {
        id: "dnv_ss_12",
        question: "A sterile instrument set is opened but the procedure is cancelled. Under SS.10, the instruments:",
        options: [
          "Can be returned to sterile storage for up to 48 hours.",
          "Must be returned to SPD for reprocessing — sterility cannot be guaranteed after opening.",
          "May be reused in the next case since they were not contaminated.",
          "Can be stored covered in the OR for one week."
        ],
        correctIndex: 1,
        explanation: "Once a sterile package is opened, sterility cannot be guaranteed even if the instruments were not used. SS.10 and infection control standards require return to SPD for full reprocessing.",
        category: "scenario",
      },
      {
        id: "dnv_ss_13",
        question: "Which element is REQUIRED in a complete operative report under SS.8?",
        options: [
          "The patient's insurance authorization number.",
          "Pre- and post-operative diagnosis, description of findings, and name of operating surgeon.",
          "A detailed description of anesthesia agents used.",
          "The cost of implants used in the procedure."
        ],
        correctIndex: 1,
        explanation: "SS.8 requires the operative report to include pre- and post-operative diagnoses, description of the procedure and findings, specimens sent, surgeons/assistants present, and any complications. Insurance numbers are not a clinical operative report element.",
        category: "rule",
      },
      {
        id: "dnv_ss_14",
        question: "Under NIAHO SS.2, surgical services staffing must include:",
        options: [
          "At least one physician in the OR suite at all times regardless of case type.",
          "Qualified personnel in sufficient numbers to provide surgical services safely.",
          "Only OR nurses and the operating surgeon — no other roles required.",
          "A fixed nurse-to-case ratio set by the state."
        ],
        correctIndex: 1,
        explanation: "SS.2 requires qualified personnel in sufficient numbers to provide surgical services safely. The team must include the appropriate mix of roles — surgeon, anesthesia provider, scrub and circulating personnel — matched to case complexity.",
        category: "rule",
      },
      {
        id: "dnv_ss_15",
        question: "Under AS.2, anesthesia policies and procedures must address:",
        options: [
          "Only the types of agents approved for use.",
          "Pre-anesthesia evaluation, monitoring during procedures, and post-anesthesia care.",
          "Insurance billing for anesthesia services.",
          "The anesthesiologist's scheduling preferences."
        ],
        correctIndex: 1,
        explanation: "AS.2 requires anesthesia policies to address the full continuum of anesthesia care — pre-anesthesia evaluation, intraoperative monitoring and management, and post-anesthesia recovery. All three phases must be covered.",
        category: "rule",
      },
      {
        id: "dnv_ss_16",
        question: "Your PACU nurse discharges a patient to the floor because 'it's been long enough' without formally assessing discharge criteria. Under SS.7, this is:",
        options: [
          "Acceptable if the surgeon ordered the transfer.",
          "Non-compliant — discharge criteria must be formally assessed and documented before discharge.",
          "Acceptable if vital signs have been stable for 30 minutes.",
          "Compliant if the anesthesiologist verbally approved the discharge."
        ],
        correctIndex: 1,
        explanation: "SS.7 requires discharge criteria to be formally assessed and documented by qualified PACU staff. Time alone and verbal orders do not substitute for documented criteria-based discharge.",
        category: "scenario",
      },
      {
        id: "dnv_ss_17",
        question: "Under NIAHO SS.9, who is PRIMARILY responsible for obtaining informed consent for a surgical procedure?",
        options: [
          "The hospital's consent coordinator.",
          "The surgeon who will perform the procedure.",
          "The patient's primary care physician.",
          "The anesthesiologist for their portion of the procedure."
        ],
        correctIndex: 1,
        explanation: "SS.9 places responsibility for obtaining surgical informed consent with the surgeon performing the procedure. They must personally discuss risks, alternatives, and the proposed procedure — this cannot be fully delegated to other staff.",
        category: "rule",
      },
      {
        id: "dnv_ss_18",
        question: "Under AS.3, intraoperative monitoring during anesthesia must include monitoring of:",
        options: [
          "Only blood pressure and pulse oximetry.",
          "Parameters defined in anesthesia policies — typically oxygenation, ventilation, circulation, and temperature.",
          "Only parameters the anesthesiologist determines are relevant to the specific case.",
          "The parameters listed in the patient's pre-op orders."
        ],
        correctIndex: 1,
        explanation: "AS.3 requires intraoperative monitoring that meets professional standards — typically oxygenation, ventilation, circulation, and temperature monitoring as appropriate. The specific parameters are defined in your anesthesia policies.",
        category: "rule",
      },
      {
        id: "dnv_ss_19",
        question: "Under NIAHO SS.10, if a manufacturer's reprocessing instructions require a specific sterilization method, your facility may:",
        options: [
          "Substitute an equivalent method if clinical staff believe it is adequate.",
          "Use only the manufacturer-specified method unless validated equivalence is established.",
          "Use whichever method is available in SPD.",
          "Skip manufacturer guidelines if AAMI standards are followed."
        ],
        correctIndex: 1,
        explanation: "SS.10 requires adherence to manufacturer reprocessing instructions. Substituting methods without validated equivalence is non-compliant. Any deviation must be supported by evidence that the alternative achieves equivalent sterility assurance.",
        category: "rule",
      },
      {
        id: "dnv_ss_20",
        question: "Under NIAHO SS.1, surgical services organization requires:",
        options: [
          "A separate surgical committee with monthly meetings.",
          "A defined organizational structure with qualified leadership accountable for surgical service quality.",
          "All OR staff to report directly to the CMO.",
          "Surgical and anesthesia departments to be managed by the same director."
        ],
        correctIndex: 1,
        explanation: "SS.1 requires surgical services to be organized under a defined structure with qualified leadership. This leadership is accountable for quality, safety, staffing adequacy, and compliance with surgical standards.",
        category: "rule",
      },'''

# ── DNV_PC (all correctIndexes: 1) ───────────────────────────────────────────
new_pc = '''    questions: [
      {
        id: "dnv_pc_1",
        question: "Under NIAHO LS.2, when a donated blood product is later found to be potentially infectious, your hospital must:",
        options: [
          "Discard it quietly and update donor records only.",
          "Quarantine it if unused, notify the recipient if transfused, and report to public health authorities.",
          "Report to the FDA only and wait for further instructions.",
          "Notify the patient's physician only."
        ],
        correctIndex: 1,
        explanation: "LS.2 requires a look-back process: quarantine unused potentially infectious products, notify patients who received the product, and report to appropriate authorities. This protects public health while addressing individual patient risk.",
        category: "rule",
      },
      {
        id: "dnv_pc_2",
        question: "Under NIAHO RC.2, respiratory therapy treatments may be administered:",
        options: [
          "At the respiratory therapist's clinical discretion without a physician order.",
          "Only with a physician's order specifying the treatment and parameters.",
          "Based on standing protocols without individual physician orders.",
          "At the patient's request without clinical evaluation."
        ],
        correctIndex: 1,
        explanation: "RC.2 requires physician orders for respiratory therapy treatments. Respiratory therapists are skilled clinicians, but they must operate under physician orders — they cannot initiate treatment based solely on their own clinical judgment.",
        category: "rule",
      },
      {
        id: "dnv_pc_3",
        question: "Your medical imaging department performs CT scans without a formal radiation protection program. Under NIAHO MI.2, this is:",
        options: [
          "Acceptable if the CT is a low-dose protocol.",
          "Non-compliant — a radiation protection program is required for all ionizing radiation imaging.",
          "Acceptable if the radiologist monitors doses informally.",
          "Compliant if the equipment was recently inspected."
        ],
        correctIndex: 1,
        explanation: "MI.2 requires a formal radiation protection program for all imaging using ionizing radiation. The program must be active and documented — not informal or assumed based on equipment capabilities.",
        category: "scenario",
      },
      {
        id: "dnv_pc_4",
        question: "Under NIAHO OB.4, your obstetrical care policies must include procedures for:",
        options: [
          "Elective induction scheduling only.",
          "Management of obstetric emergencies such as hemorrhage and eclampsia.",
          "Epidural anesthesia pricing and consent only.",
          "Neonatal intensive care transfer protocols to tertiary centers only."
        ],
        correctIndex: 1,
        explanation: "OB.4 requires policies and protocols for obstetric emergencies — including hemorrhage, eclampsia/pre-eclampsia, and other urgent situations. These protocols must exist and your staff must be trained on them.",
        category: "rule",
      },
      {
        id: "dnv_pc_5",
        question: "Under NIAHO NM.2, radioactive materials used in your nuclear medicine department must be:",
        options: [
          "Ordered by nurses without physician supervision.",
          "Handled, stored, and disposed of in accordance with applicable regulations.",
          "Approved for each patient use by the governing body.",
          "Stored in any locked room away from patients."
        ],
        correctIndex: 1,
        explanation: "NM.2 requires that radioactive materials be handled, stored, and disposed of in accordance with Nuclear Regulatory Commission (NRC) regulations and other applicable requirements.",
        category: "rule",
      },
      {
        id: "dnv_pc_6",
        question: "Your rehabilitation patient receives therapy sessions without a physician's order. Under NIAHO RS.3, this is:",
        options: [
          "Acceptable if the therapist is board-certified.",
          "Non-compliant — rehabilitation treatment must be ordered by a physician.",
          "Acceptable if the patient's PCP was verbally informed.",
          "Compliant if your hospital has a standing order for rehabilitation services."
        ],
        correctIndex: 1,
        explanation: "RS.3 requires physician orders for rehabilitation treatment. Physical, occupational, and speech therapists are skilled practitioners, but their treatment must be ordered and authorized by a physician.",
        category: "scenario",
      },
      {
        id: "dnv_pc_7",
        question: "Under NIAHO MI.3, medical imaging equipment must be:",
        options: [
          "Replaced every 5 years regardless of condition.",
          "Regularly inspected and maintained to ensure safety and performance.",
          "Approved by DNV before each use.",
          "Operated only by radiologists — technologists cannot use equipment independently."
        ],
        correctIndex: 1,
        explanation: "MI.3 requires imaging equipment to be regularly inspected and maintained. Proper maintenance ensures image quality for diagnostic accuracy and keeps radiation dose within acceptable ranges.",
        category: "rule",
      },
      {
        id: "dnv_pc_8",
        question: "Under NIAHO LS.3, a patient who received blood later identified as potentially infectious must be:",
        options: [
          "Notified by public health only — your hospital has no direct notification duty.",
          "Notified by your hospital and offered appropriate follow-up testing and care.",
          "Notified only if the patient specifically asks about transfusion history.",
          "Notified only if they develop symptoms of infection."
        ],
        correctIndex: 1,
        explanation: "LS.3 requires patient notification when a transfusion product is identified as potentially infectious. Your hospital must notify the patient promptly and arrange for appropriate follow-up evaluation and testing.",
        category: "rule",
      },
      {
        id: "dnv_pc_9",
        question: "Under NIAHO MI.5, interpretation of medical images must be performed by:",
        options: [
          "Any licensed physician on medical staff.",
          "Qualified individuals — typically radiologists or physicians with specific training and imaging privileges.",
          "The ordering physician who is familiar with the patient's case.",
          "Only board-certified radiologists."
        ],
        correctIndex: 1,
        explanation: "MI.5 requires image interpretation to be performed by qualified personnel — those with appropriate training, experience, and clinical privileges for image interpretation. The specific credential is defined by your hospital's privileging process.",
        category: "rule",
      },
      {
        id: "dnv_pc_10",
        question: "Your respiratory therapist routinely adjusts ventilator settings based on clinical assessment without waiting for a new physician order. Under NIAHO RC.2, this practice:",
        options: [
          "Is compliant if the therapist is experienced and certified.",
          "Requires physician orders — settings may be adjusted only within parameters specified in the order.",
          "Is acceptable if the supervising physician is in the hospital at the time.",
          "Is fully compliant under respiratory therapy independent practice acts."
        ],
        correctIndex: 1,
        explanation: "RC.2 requires physician orders for respiratory interventions. Ventilator management adjustments must occur within physician-ordered parameters or under a new/modified order. Independent adjustment without order authority violates RC.2.",
        category: "scenario",
      },
      {
        id: "dnv_pc_11",
        question: "Under NIAHO OB.3, obstetrical practitioner privileges must be:",
        options: [
          "The same as general medical staff privileges — no separate OB delineation needed.",
          "Specifically delineated for obstetric procedures and care.",
          "Approved by the state department of health.",
          "Self-reported by the practitioner based on training."
        ],
        correctIndex: 1,
        explanation: "OB.3 requires specific privilege delineation for obstetrical procedures. Practitioners must have OB-specific privileges — general medical staff membership does not automatically confer obstetric privileges.",
        category: "rule",
      },
      {
        id: "dnv_pc_12",
        question: "Under NIAHO RS.1, your rehabilitation services must be organized under:",
        options: [
          "The nursing department without a separate organizational structure.",
          "Qualified personnel with a defined organizational structure and department leadership.",
          "A contracted entity with no reporting to the hospital governing body.",
          "The medical imaging department for efficiency."
        ],
        correctIndex: 1,
        explanation: "RS.1 requires rehabilitation services to have a defined organizational structure with qualified leadership. This ensures accountability for quality, staffing, and standards compliance within rehab services.",
        category: "rule",
      },
      {
        id: "dnv_pc_13",
        question: "Nuclear medicine staff handling radioactive materials must have:",
        options: [
          "A general nursing license and additional on-the-job training.",
          "Qualifications appropriate to their role and compliance with NRC requirements for radiation workers.",
          "DNV-specific nuclear medicine certification.",
          "At least 5 years of radiology experience."
        ],
        correctIndex: 1,
        explanation: "NM.1 requires nuclear medicine staff to be qualified for their role. This includes meeting NRC requirements for radiation workers — training, dosimetry monitoring, and demonstrated competency in handling radioactive materials.",
        category: "rule",
      },
      {
        id: "dnv_pc_14",
        question: "Under NIAHO LS.4, your hospital's transfusion service must:",
        options: [
          "Only test blood before transfusion — post-transfusion testing is not required.",
          "Implement a blood safety program including compatibility testing, reaction reporting, and safety procedures.",
          "Obtain state board of pharmacy approval for all blood products.",
          "Limit transfusions to no more than two units per patient without special authorization."
        ],
        correctIndex: 1,
        explanation: "LS.4 requires a comprehensive blood safety program including compatibility testing before transfusion, procedures for managing transfusion reactions, and documentation of all transfusions.",
        category: "rule",
      },
      {
        id: "dnv_pc_15",
        question: "Under NIAHO MI.6, medical imaging staff qualifications must:",
        options: [
          "Be approved by the state board of medical imaging annually.",
          "Match the modalities they operate and the images they produce.",
          "Include board certification in radiology for all technologists.",
          "Be verified only at the time of hire."
        ],
        correctIndex: 1,
        explanation: "MI.6 requires that imaging staff have qualifications appropriate to the specific modalities they use. A CT technologist must be qualified for CT; an MRI technologist for MRI. Qualifications must be maintained — not just verified at hire.",
        category: "rule",
      },
      {
        id: "dnv_pc_16",
        question: "Under NIAHO RC.3, respiratory care policies and procedures must address:",
        options: [
          "Billing and reimbursement for respiratory services.",
          "Clinical protocols for treatment delivery, infection control, and equipment maintenance.",
          "Union staffing ratios for respiratory therapists.",
          "State licensure renewal requirements for RT staff."
        ],
        correctIndex: 1,
        explanation: "RC.3 requires policies covering respiratory care treatment delivery, infection control practices specific to respiratory equipment, and equipment maintenance. These operational policies ensure safe, consistent respiratory care.",
        category: "rule",
      },
      {
        id: "dnv_pc_17",
        question: "An obstetrician manages a labor patient without obstetric privileges at your hospital. Under NIAHO OB.3, this is:",
        options: [
          "Acceptable since they hold a valid medical license.",
          "A serious compliance violation — obstetric privileges must be specifically granted.",
          "Acceptable in an emergency if no other OB is available without documentation.",
          "Compliant if the patient's PCP refers them."
        ],
        correctIndex: 1,
        explanation: "OB.3 requires specific obstetric privileges. Holding a medical license or general medical staff membership does not confer obstetric privileges. Managing a labor patient without OB privileges is a credentialing violation.",
        category: "scenario",
      },
      {
        id: "dnv_pc_18",
        question: "Under NIAHO MI.4, a medical imaging examination must be performed based on:",
        options: [
          "The patient's request alone without physician involvement.",
          "A physician's order or order from another authorized practitioner.",
          "The radiologist's independent assessment of the patient's need.",
          "A standing order for all patients with the primary diagnosis."
        ],
        correctIndex: 1,
        explanation: "MI.4 requires a physician order (or order from an authorized practitioner) for medical imaging. Imaging cannot be performed simply because the patient requests it or based on radiologist judgment alone without an order.",
        category: "rule",
      },
      {
        id: "dnv_pc_19",
        question: "Under NIAHO NM.3, nuclear medicine equipment and supplies must be:",
        options: [
          "Approved by DNV before use.",
          "Appropriate for the procedures performed and maintained in working condition.",
          "Purchased only from DNV-approved vendors.",
          "Inspected monthly by a DNV-certified technician."
        ],
        correctIndex: 1,
        explanation: "NM.3 requires that nuclear medicine equipment and supplies be appropriate for the procedures being performed and properly maintained. This ensures diagnostic accuracy and radiation safety.",
        category: "rule",
      },
      {
        id: "dnv_pc_20",
        question: "Under NIAHO OB.2, supervision and staffing in your obstetrical services must ensure:",
        options: [
          "At least one OB physician present on the unit at all times regardless of census.",
          "Adequate qualified supervision and staffing appropriate to the volume and acuity of patients.",
          "A 1:1 nurse-to-patient ratio at all times in labor and delivery.",
          "A pediatrician present at every delivery."
        ],
        correctIndex: 1,
        explanation: "OB.2 requires qualified supervision and adequate staffing appropriate to patient volume and acuity. The specific ratios and coverage are defined by your hospital in policy — the standard is adequacy for safe patient care, not a rigid universal ratio.",
        category: "rule",
      },'''

# ── DNV_ES (all correctIndexes: 1) ───────────────────────────────────────────
new_es = '''    questions: [
      {
        id: "dnv_es_1",
        question: "Under NIAHO ES.1, your emergency services department must be:",
        options: [
          "Open only during business hours unless your hospital is a trauma center.",
          "Organized and staffed to provide care for any emergency presentation at all hours.",
          "Staffed by physicians on call — no requirement for on-site coverage between patients.",
          "Providing only stabilization services — definitive care is always transferred."
        ],
        correctIndex: 1,
        explanation: "ES.1 requires the emergency department to be organized and staffed to provide emergency care around the clock. Your hospital must be capable of responding to emergency presentations at any time.",
        category: "rule",
      },
      {
        id: "dnv_es_2",
        question: "Under NIAHO ES.4, if your hospital does not provide neurosurgical services, you must:",
        options: [
          "Decline patients who may need neurosurgery.",
          "Have written protocols for transferring patients who require neurosurgical care.",
          "Apply for a waiver from DNV.",
          "Post a notice in the ED informing patients of this limitation."
        ],
        correctIndex: 1,
        explanation: "ES.4 requires written transfer protocols for emergency conditions your hospital cannot treat. Every potential emergency — including neurosurgical emergencies — must have a documented transfer pathway.",
        category: "rule",
      },
      {
        id: "dnv_es_3",
        question: "Under NIAHO ES.5, an off-campus emergency department must:",
        options: [
          "Meet less stringent standards since it is not the main ED.",
          "Meet the same standards as the main campus emergency department.",
          "Be staffed only with advanced practice providers.",
          "Be directly supervised by the main ED medical director via telemedicine at all times."
        ],
        correctIndex: 1,
        explanation: "ES.5 requires off-campus emergency departments to meet the same NIAHO standards as the main ED. Operating a satellite ED does not reduce your organization's obligation to provide compliant emergency care.",
        category: "rule",
      },
      {
        id: "dnv_es_4",
        question: "Under NIAHO DS.3, your hospital's diet manual must be:",
        options: [
          "Kept exclusively in the dietary department for staff reference.",
          "Current, approved by dietary and medical staff, and accessible to staff ordering diets.",
          "Updated only when new federal dietary guidelines are issued.",
          "Developed by the CEO and medical staff without dietary input."
        ],
        correctIndex: 1,
        explanation: "DS.3 requires the diet manual to be current, approved by both dietary and medical staff, and accessible to nursing and medical staff who order diets. Accessibility is essential — it cannot be locked away in the dietary department.",
        category: "rule",
      },
      {
        id: "dnv_es_5",
        question: "Under NIAHO DS.1, your dietary services must be directed by:",
        options: [
          "A nurse with additional dietary training.",
          "A qualified dietitian with appropriate credentials.",
          "The Chief Nursing Officer as an additional responsibility.",
          "Any clinical manager designated by the CEO."
        ],
        correctIndex: 1,
        explanation: "DS.1 requires dietary services to be organized under a qualified dietitian. Dietary is a clinical service — it requires professional leadership with the appropriate credential and training.",
        category: "rule",
      },
      {
        id: "dnv_es_6",
        question: "Your patient with renal failure is served the same meal as a general diet patient. Under NIAHO DS.2, this is:",
        options: [
          "Acceptable if no specific diet was ordered.",
          "A compliance concern — diets must be individualized to the patient's medical needs.",
          "Acceptable since the dietitian approves the general menu.",
          "Compliant if the patient is not on fluid restriction."
        ],
        correctIndex: 1,
        explanation: "DS.2 requires diets to be appropriate to the patient's medical condition. A renal failure patient requires a kidney-appropriate diet. Using the general diet without individualization violates the therapeutic diet requirement.",
        category: "scenario",
      },
      {
        id: "dnv_es_7",
        question: "Under NIAHO ES.3, your emergency department protocols must address:",
        options: [
          "Insurance verification procedures.",
          "Management of the range of emergencies the community may present, including life-threatening conditions.",
          "Scheduling of elective follow-up appointments.",
          "Patient satisfaction survey distribution."
        ],
        correctIndex: 1,
        explanation: "ES.3 requires protocols for the emergencies your community may present — including life-threatening conditions. Protocols must cover clinical management, triage, escalation, and disposition.",
        category: "rule",
      },
      {
        id: "dnv_es_8",
        question: "Under NIAHO OS.4, outpatient medication orders must be:",
        options: [
          "Verbal orders only with retroactive documentation within a week.",
          "Properly documented in the patient's outpatient record with all required order elements.",
          "Approved by the hospital pharmacist before being given to the patient.",
          "Restricted to your hospital's inpatient formulary."
        ],
        correctIndex: 1,
        explanation: "OS.4 requires outpatient orders — including medication orders — to be properly documented. The same completeness requirements that apply to inpatient orders apply in the outpatient setting.",
        category: "rule",
      },
      {
        id: "dnv_es_9",
        question: "Under NIAHO ES.2, your emergency department staffing must be:",
        options: [
          "Fixed at the level established during the most recent DNV survey.",
          "Adequate to meet the volume and acuity of emergency presentations.",
          "Limited to physicians and RNs only — ancillary roles are not required.",
          "Based on state-mandated minimum staffing ratios exclusively."
        ],
        correctIndex: 1,
        explanation: "ES.2 requires staffing adequate for the volume and acuity of your emergency department. Staffing must flex with demand — a fixed minimum that doesn't account for surge or high-acuity periods is not compliant.",
        category: "rule",
      },
      {
        id: "dnv_es_10",
        question: "Under NIAHO DS.2, therapeutic diets provided to your patients must be:",
        options: [
          "Selected from a list pre-approved by the medical staff each year.",
          "Individualized to meet each patient's specific medical and nutritional needs.",
          "Limited to the 10 most common therapeutic diets in your service area.",
          "Prescribed by the dietitian without physician involvement."
        ],
        correctIndex: 1,
        explanation: "DS.2 requires therapeutic diets to be individualized to each patient's medical condition and nutritional needs. A menu of standard options applied without individualization does not meet this requirement.",
        category: "rule",
      },
      {
        id: "dnv_es_11",
        question: "Under NIAHO OS.2, outpatient services staffing must ensure:",
        options: [
          "All outpatient staff hold inpatient care certifications.",
          "Qualified personnel in numbers adequate to provide the scope of outpatient services offered.",
          "A physician on-site at all times outpatient services are available.",
          "Outpatient staff report to inpatient nursing leadership."
        ],
        correctIndex: 1,
        explanation: "OS.2 requires outpatient staffing to be adequate and qualified for the scope of services provided. Adequate qualified staff must be present when services are offered.",
        category: "rule",
      },
      {
        id: "dnv_es_12",
        question: "Your hospital's diet manual was last approved by medical staff in 2018. Under NIAHO DS.3, this is:",
        options: [
          "Acceptable as long as dietary staff believe it remains clinically current.",
          "A compliance concern — the diet manual must be kept current and re-approved by medical staff.",
          "Acceptable if no patient complaints about diets have been received.",
          "Compliant if the dietitian director has informally reviewed it more recently."
        ],
        correctIndex: 1,
        explanation: "DS.3 requires the diet manual to be current and approved by both dietary and medical staff. A manual not formally reviewed or re-approved since 2018 — with advancing nutritional science — is a compliance gap.",
        category: "scenario",
      },
      {
        id: "dnv_es_13",
        question: "Under NIAHO OS.3, the scope of your outpatient service must be:",
        options: [
          "Identical to the inpatient service scope to ensure consistency.",
          "Defined and consistent with your hospital's overall mission and capabilities.",
          "Set by CMS based on your hospital's inpatient volumes.",
          "Reviewed and set by DNV at each survey."
        ],
        correctIndex: 1,
        explanation: "OS.3 requires a defined outpatient scope of service consistent with your hospital's mission, capabilities, and resources. The outpatient scope serves as the reference for what services are available and how they are provided.",
        category: "rule",
      },
      {
        id: "dnv_es_14",
        question: "Your hospital does not have cardiac catheterization services. Under NIAHO ES.4, the most compliant approach is to:",
        options: [
          "Decline all patients with chest pain and direct them to the nearest cardiac center.",
          "Have a written transfer protocol for STEMI patients with defined time targets and receiving facility agreements.",
          "Wait for the patient to request transfer before initiating the process.",
          "Offer thrombolytics as an alternative without a transfer protocol."
        ],
        correctIndex: 1,
        explanation: "ES.4 requires written protocols for transferring patients who require services your hospital cannot provide. A STEMI transfer protocol with time targets and defined receiving facility agreements is exactly what this standard requires.",
        category: "scenario",
      },
      {
        id: "dnv_es_15",
        question: "Under NIAHO DS.1, your hospital contracts its dietary services to an outside food service company. Your hospital:",
        options: [
          "Has no further NIAHO obligation since the contractor assumes all responsibility.",
          "Must still ensure the contracted service meets NIAHO dietary requirements and maintain oversight.",
          "Is exempt from diet manual requirements since it is not operating the service.",
          "Only needs to verify the contractor has a food safety license."
        ],
        correctIndex: 1,
        explanation: "Like all contracted services under GB.4, your hospital retains accountability for contracted dietary services. The contractor must meet NIAHO requirements, and your hospital must maintain oversight — including ensuring a qualified dietitian directs the service.",
        category: "scenario",
      },
      {
        id: "dnv_es_16",
        question: "Under NIAHO OS.1, your outpatient service must be:",
        options: [
          "A separate legal entity from the hospital.",
          "An organized service providing care consistent with applicable standards.",
          "Limited to post-surgical follow-up only.",
          "Available to patients only referred by hospital medical staff."
        ],
        correctIndex: 1,
        explanation: "OS.1 requires outpatient services to be organized and provide care consistent with NIAHO standards. Outpatient care receives the same quality expectations as inpatient care.",
        category: "rule",
      },
      {
        id: "dnv_es_17",
        question: "Your emergency patient needs psychiatric services your hospital does not provide. Under NIAHO ES.4, your hospital must:",
        options: [
          "Refuse the patient and direct them to a psychiatric facility.",
          "Have a written protocol to stabilize and transfer the patient to a facility providing psychiatric services.",
          "Provide psychiatric care regardless since you accepted the patient.",
          "Only address the patient's medical complaints and ignore psychiatric components."
        ],
        correctIndex: 1,
        explanation: "ES.4 requires transfer protocols for services not provided. Psychiatric emergencies that exceed your capabilities require a written transfer protocol ensuring appropriate stabilization and safe transfer to psychiatric care.",
        category: "scenario",
      },
      {
        id: "dnv_es_18",
        question: "Under NIAHO DS.2, therapeutic diet services include which of the following?",
        options: [
          "Only calorie-counting for weight management patients.",
          "Nutritional assessment, individualized diet orders, and monitoring of dietary response.",
          "General healthy eating recommendations given by nurses.",
          "Standard meal trays with optional condiments."
        ],
        correctIndex: 1,
        explanation: "DS.2 encompasses a full range of therapeutic diet services — including nutritional assessment, individualized diet prescriptions, and monitoring of the patient's response to the diet. It is a clinical service, not just a food delivery function.",
        category: "rule",
      },
      {
        id: "dnv_es_19",
        question: "Under NIAHO ES.2, your emergency department must have staffing that can:",
        options: [
          "Manage only the most common diagnosis categories in your community.",
          "Provide initial stabilization for any emergency presentation regardless of diagnosis.",
          "Treat only adults — pediatric emergencies may be redirected.",
          "Function with registered nurses as sole clinical staff if physicians are on call."
        ],
        correctIndex: 1,
        explanation: "ES.2 requires your ED to have staffing capable of providing initial stabilization for any emergency that may present. Your department cannot pre-select which emergencies it will address based on staffing limitations.",
        category: "rule",
      },
      {
        id: "dnv_es_20",
        question: "Under NIAHO DS.3, who must approve the diet manual?",
        options: [
          "The hospital CEO and CFO for financial sustainability.",
          "The dietary service and the medical staff.",
          "DNV surveyors during the accreditation visit.",
          "The state department of health only."
        ],
        correctIndex: 1,
        explanation: "DS.3 requires the diet manual to be approved by both the dietary service (professional expertise) and the medical staff (clinical authority). This dual approval ensures the manual is both clinically sound and operationally practical.",
        category: "rule",
      },'''

# ── Apply all replacements ──────────────────────────────────────────────────
CHAPTER_SEP = '\n    ],\n  },\n\n  // ─────────────────────────────────────────────────────────────────────────'
content = replace_q(content, "dnv_mm_1", CHAPTER_SEP + '\n  // CHAPTER 6', new_mm)
content = replace_q(content, "dnv_ss_1", CHAPTER_SEP + '\n  // CHAPTER 7', new_ss)
content = replace_q(content, "dnv_pc_1", CHAPTER_SEP + '\n  // CHAPTER 8', new_pc)
content = replace_q(content, "dnv_es_1", CHAPTER_SEP + '\n  // CHAPTER 9', new_es)

with open('shared/dnv-niaho-questions.ts', 'w') as f:
    f.write(content)
print("Batch B done.")
