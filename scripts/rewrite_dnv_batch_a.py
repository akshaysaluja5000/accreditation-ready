"""Batch A: dnv_qm, dnv_gov, dnv_ms, dnv_ns"""
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

# ── DNV_QM (correctIndexes: 2,0,1,1,1,2,1,1,1,2,1,1,1,1,2,2,1,1,1,1) ─────────
new_qm = '''    questions: [
      {
        id: "dnv_qm_1",
        question: "Under NIAHO QM.1, who holds OVERALL ACCOUNTABILITY for the Quality Management System?",
        options: [
          "Management Representative — coordinates QMS activities.",
          "CEO — responsible for day-to-day implementation.",
          "Governing body — holds ultimate accountability for QMS performance.",
          "Chief Quality Officer — leads quality improvement initiatives."
        ],
        correctIndex: 2,
        explanation: "QM.1 places overall accountability for the QMS with the governing body. The CEO is responsible for implementation, and the Management Representative coordinates activities. Ultimate accountability rests with the governing body, not operational leaders.",
        category: "rule",
      },
      {
        id: "dnv_qm_2",
        question: "Which quality framework explicitly forms the basis of the DNV NIAHO Quality Management System?",
        options: [
          "ISO 9001 — the framework required by NIAHO QM.2.",
          "ISO 27001 — information security management standard.",
          "NIST Cybersecurity Framework — federal risk management tool.",
          "Joint Commission ORYX — performance measurement system."
        ],
        correctIndex: 0,
        explanation: "NIAHO QM.2 explicitly requires the hospital's QMS to be based on ISO 9001. This distinguishes DNV accreditation from TJC and AAAHC, which do not require ISO 9001 compliance.",
        category: "definition",
      },
      {
        id: "dnv_qm_3",
        question: "Your Management Representative reports corrective actions from last quarter's audit were implemented but no effectiveness review was done. This is a gap in which requirement?",
        options: [
          "QM.3 Quality Outline/Plan.",
          "QM.5 Corrective Action — effectiveness verification is required before closure.",
          "QM.7 Measurement and Monitoring.",
          "QM.4 Management Representative duties."
        ],
        correctIndex: 1,
        explanation: "QM.5 requires that corrective actions include verification of effectiveness after implementation. Closing a corrective action without confirming it resolved the root cause is a direct QM.5 violation.",
        category: "scenario",
      },
      {
        id: "dnv_qm_4",
        question: "How often must management review of the QMS occur under NIAHO requirements?",
        options: [
          "Monthly — at each department meeting.",
          "At planned intervals — frequency defined and documented by the hospital.",
          "Annually only — once per calendar year.",
          "After every adverse event — triggered by incidents."
        ],
        correctIndex: 1,
        explanation: "QM.2 (ISO 9001 framework) requires management review at planned intervals. The frequency is not prescribed as monthly or annual — the hospital defines the interval and must adhere to it.",
        category: "rule",
      },
      {
        id: "dnv_qm_5",
        question: "Your nurse discovers a near-miss medication event but doesn't report it because 'nothing bad happened.' Under NIAHO QM.8, this represents a failure of:",
        options: [
          "Medication management policy.",
          "Patient safety culture — near misses must be captured, not dismissed.",
          "Corrective action process.",
          "Management Representative duties."
        ],
        correctIndex: 1,
        explanation: "QM.8 requires a Patient Safety System that captures near misses — not just adverse events. Under-reporting because 'nothing bad happened' reflects a failure of patient safety culture, which leadership is responsible for fostering.",
        category: "scenario",
      },
      {
        id: "dnv_qm_6",
        question: "Which of the following is NOT required in your NIAHO Quality Outline/Plan (QM.3)?",
        options: [
          "Scope of the QMS.",
          "Quality objectives.",
          "Names of all quality committee members — this is not a required QM.3 element.",
          "How performance will be measured."
        ],
        correctIndex: 2,
        explanation: "QM.3 requires the Quality Outline/Plan to define scope, objectives, and measurement methods. Listing all committee member names is an administrative detail — not a QMS plan requirement.",
        category: "rule",
      },
      {
        id: "dnv_qm_7",
        question: "Under QM.7, what must your hospital do with quality data it collects?",
        options: [
          "Share it publicly on the hospital's website.",
          "Use it for measurement, monitoring, and analysis to drive improvement.",
          "Submit it to DNV within 30 days of collection.",
          "Store it for at least 10 years."
        ],
        correctIndex: 1,
        explanation: "QM.7 requires that data collected be used for measurement, monitoring, and analysis. The purpose is continual improvement — data must inform decisions, not just be collected and filed.",
        category: "rule",
      },
      {
        id: "dnv_qm_8",
        question: "The Management Representative role under NIAHO QM.4 is PRIMARILY responsible for:",
        options: [
          "Conducting all internal audits personally.",
          "Coordinating the QMS and reporting to leadership.",
          "Approving all corrective actions.",
          "Setting the hospital's annual budget."
        ],
        correctIndex: 1,
        explanation: "QM.4 designates the Management Representative to coordinate QMS activities and serve as the reporting link between QMS operations and organizational leadership. They do not necessarily conduct all audits personally.",
        category: "definition",
      },
      {
        id: "dnv_qm_9",
        question: "Your hospital wants to use peer review, patient satisfaction surveys, and infection rates to meet QM.7. This approach is:",
        options: [
          "Non-compliant — only DNV-specified indicators are allowed.",
          "Compliant — multiple data sources satisfy measurement and monitoring requirements.",
          "Compliant — but only if DNV approves the data sources in advance.",
          "Non-compliant — ISO 9001 requires a single unified metric."
        ],
        correctIndex: 1,
        explanation: "QM.7 requires measurement, monitoring, and analysis. Using multiple relevant data sources like peer review, satisfaction, and infection rates is exactly the type of evidence-based approach the standard supports.",
        category: "scenario",
      },
      {
        id: "dnv_qm_10",
        question: "Which NIAHO chapter specifically requires your hospital to operate a non-punitive adverse event reporting system?",
        options: [
          "QM.5 Corrective Action.",
          "QM.2 ISO 9001 QMS framework.",
          "QM.8 Patient Safety System — requires non-punitive reporting culture.",
          "QM.1 Responsibility and Accountability."
        ],
        correctIndex: 2,
        explanation: "QM.8 establishes the Patient Safety System requirements, including the obligation to foster a culture where staff can report adverse events and near misses without fear of punishment.",
        category: "rule",
      },
      {
        id: "dnv_qm_11",
        question: "Your DNV surveyors review internal audit reports but find no documented corrective actions resulting from audit findings. This gap most directly violates:",
        options: [
          "QM.3 — Quality Outline/Plan.",
          "QM.5 — Corrective Action must result from identified nonconformances.",
          "QM.7 — Measurement and Monitoring.",
          "QM.1 — Responsibility and Accountability."
        ],
        correctIndex: 1,
        explanation: "QM.5 requires corrective action on identified nonconformances. Internal audit findings that produce no documented corrective action indicate the corrective action process is not functioning.",
        category: "scenario",
      },
      {
        id: "dnv_qm_12",
        question: "The ISO 9001 principle most closely aligned with DNV's patient-centered quality approach is:",
        options: [
          "Supplier relationship management.",
          "Customer focus — translates directly to patient focus in healthcare.",
          "Context of the organization.",
          "Leadership commitment to profitability."
        ],
        correctIndex: 1,
        explanation: "ISO 9001's 'customer focus' principle translates directly to patient focus in healthcare. The hospital must understand patient needs, meet requirements, and aim to exceed expectations — the foundation of DNV's quality philosophy.",
        category: "definition",
      },
      {
        id: "dnv_qm_13",
        question: "Your hospital's Quality Outline/Plan hasn't been updated in three years despite significant service line additions. Under NIAHO, this is:",
        options: [
          "Acceptable if the core objectives remain the same.",
          "Non-compliant — the plan must reflect your current scope and objectives.",
          "Acceptable if reviewed annually even without changes.",
          "Non-compliant only if DNV requests an update."
        ],
        correctIndex: 1,
        explanation: "QM.3 requires the Quality Outline/Plan to be current. Significant organizational changes — such as new service lines — require the plan to be updated to reflect the current QMS scope and objectives.",
        category: "scenario",
      },
      {
        id: "dnv_qm_14",
        question: "What distinguishes 'preventive action' from 'corrective action' in the NIAHO QM.5 framework?",
        options: [
          "Preventive action applies to clinical staff only; corrective action to administrative staff.",
          "Corrective action addresses existing nonconformances; preventive action addresses potential future problems.",
          "Preventive action requires governing body approval; corrective action does not.",
          "They are interchangeable terms under ISO 9001."
        ],
        correctIndex: 1,
        explanation: "Corrective action is taken to eliminate the root cause of an existing nonconformance. Preventive action is taken to eliminate the cause of a potential nonconformance before it occurs. Both are required under QM.5.",
        category: "definition",
      },
      {
        id: "dnv_qm_15",
        question: "Benchmarking your performance against other hospitals or national standards most directly supports which QMS requirement?",
        options: [
          "QM.4 Management Representative.",
          "QM.3 Quality Outline/Plan.",
          "QM.7 Measurement, Monitoring, Analysis — external benchmarking is evidence-based analysis.",
          "QM.1 Responsibility and Accountability."
        ],
        correctIndex: 2,
        explanation: "QM.7 requires measurement, monitoring, and analysis of performance data. Benchmarking against external standards or peer hospitals is an evidence-based analysis approach that satisfies QM.7's intent.",
        category: "rule",
      },
      {
        id: "dnv_qm_16",
        question: "A DNV surveyor asks your CEO to describe their role in the QMS. The CEO says 'I leave QMS to the quality director.' This signals a potential gap in:",
        options: [
          "QM.8 Patient Safety.",
          "QM.4 Management Representative duties.",
          "QM.1 Responsibility and Accountability — CEO must implement, not fully delegate, the QMS.",
          "QM.5 Corrective Action."
        ],
        correctIndex: 2,
        explanation: "QM.1 makes the CEO responsible for implementing the QMS. Delegating all QMS responsibility without personal engagement contradicts the accountability structure — the CEO cannot fully abdicate this role.",
        category: "scenario",
      },
      {
        id: "dnv_qm_17",
        question: "Which statement about NIAHO internal audits is CORRECT?",
        options: [
          "Internal audits must be conducted by DNV-certified auditors only.",
          "Internal audits must be conducted at planned intervals and findings must drive corrective action.",
          "Internal audits are required only when a complaint is received.",
          "Internal audits replace the need for external DNV surveys."
        ],
        correctIndex: 1,
        explanation: "The ISO 9001-based QMS requires internal audits at planned intervals. Findings from those audits must feed into the corrective action process (QM.5). Internal and external audits serve different purposes and both are required.",
        category: "rule",
      },
      {
        id: "dnv_qm_18",
        question: "Your leadership frequently says 'heads will roll' when errors occur. Under QM.8, this culture most directly threatens:",
        options: [
          "The hospital's accreditation timeline.",
          "Patient safety event reporting — a punitive culture suppresses near-miss and event reports.",
          "The Management Representative's authority.",
          "Corrective action documentation."
        ],
        correctIndex: 1,
        explanation: "A punitive culture directly suppresses reporting. QM.8 requires a Patient Safety System where staff feel safe reporting adverse events and near misses. Threatening language from leadership undermines this foundational requirement.",
        category: "scenario",
      },
      {
        id: "dnv_qm_19",
        question: "Under NIAHO, quality objectives must be:",
        options: [
          "Approved by CMS before implementation.",
          "Documented and measurable so progress can be tracked.",
          "Identical across all hospital departments.",
          "Set only at the executive level."
        ],
        correctIndex: 1,
        explanation: "ISO 9001 (QM.2) requires quality objectives to be documented and measurable so that progress can be tracked and demonstrated. They should be relevant to the department or process they apply to.",
        category: "rule",
      },
      {
        id: "dnv_qm_20",
        question: "Your management review meeting minutes show the team reviewed quality data but made no decisions or action items. This is:",
        options: [
          "Acceptable if the data showed no problems.",
          "Non-compliant — management review must produce outputs such as decisions, actions, or resource allocations.",
          "Acceptable if the meeting was attended by the CEO.",
          "Non-compliant only if the same issue recurs next quarter."
        ],
        correctIndex: 1,
        explanation: "ISO 9001 requires management review to produce outputs — decisions, actions, resource allocations, or improvements. A review that merely reviews data without generating outputs does not satisfy the standard's intent.",
        category: "scenario",
      },'''

# ── DNV_GOV (correctIndexes: 1,1,1,1,1,1,1,0,2,1,1,1,2,1,1,1,1,1,1,1) ─────────
new_gov = '''    questions: [
      {
        id: "dnv_gov_1",
        question: "Under NIAHO GB.2, who holds LEGAL RESPONSIBILITY for hospital operations?",
        options: [
          "CEO — manages day-to-day operations.",
          "Governing body — holds legal responsibility that cannot be delegated away.",
          "Medical Staff President — leads clinical operations.",
          "State Health Department — holds regulatory authority."
        ],
        correctIndex: 1,
        explanation: "GB.2 places legal responsibility for the hospital squarely on the governing body. The CEO manages day-to-day operations, but the governing body cannot legally delegate this ultimate responsibility.",
        category: "rule",
      },
      {
        id: "dnv_gov_2",
        question: "Your hospital contracts with an outside company to provide all respiratory therapy services. Under NIAHO GB.4, your hospital:",
        options: [
          "Transfers all quality accountability to the contractor.",
          "Must maintain a written agreement and retain accountability for service quality.",
          "Is only responsible for credentialing the contractor's staff.",
          "Can waive quality monitoring for contracted clinical services."
        ],
        correctIndex: 1,
        explanation: "GB.4 requires written agreements for contracted services AND holds the hospital accountable for the quality of those services. Contracting does not transfer accountability — your hospital remains responsible.",
        category: "scenario",
      },
      {
        id: "dnv_gov_3",
        question: "Under NIAHO GB.3, the institutional plan must include:",
        options: [
          "A detailed staffing roster for every department.",
          "A budget and strategic direction approved by the governing body.",
          "Personal financial disclosures from board members.",
          "CMS-approved performance benchmarks."
        ],
        correctIndex: 1,
        explanation: "GB.3 requires an institutional plan that includes the budget. The governing body reviews and approves this plan, ensuring resources are aligned with the organization's mission and strategic direction.",
        category: "rule",
      },
      {
        id: "dnv_gov_4",
        question: "Under CE.2, your hospital CEO is responsible for which of the following?",
        options: [
          "Personally conducting all department audits.",
          "Implementing governing body policies and managing day-to-day operations.",
          "Approving all medical staff credentialing decisions.",
          "Serving as the NIAHO Management Representative."
        ],
        correctIndex: 1,
        explanation: "CE.2 charges the CEO with implementing governing body policies and managing daily hospital operations. The CEO is the executive who operationalizes board decisions throughout the organization.",
        category: "rule",
      },
      {
        id: "dnv_gov_5",
        question: "Your governing body approves every CEO recommendation without independent review or discussion. Under NIAHO GB.2, this pattern most directly represents:",
        options: [
          "Efficient governance.",
          "Inadequate legal oversight — the board must exercise genuine independent review.",
          "Appropriate delegation of authority.",
          "Compliant board behavior."
        ],
        correctIndex: 1,
        explanation: "GB.2 requires active legal oversight by the governing body. Consistently approving all CEO recommendations without independent review suggests the board is not exercising genuine oversight — a compliance gap.",
        category: "scenario",
      },
      {
        id: "dnv_gov_6",
        question: "Under NIAHO CE.1, CEO qualifications must be:",
        options: [
          "Identical to those of the Medical Staff President.",
          "Appropriate to the size and complexity of the hospital.",
          "Certified by DNV prior to appointment.",
          "Limited to individuals with a medical degree."
        ],
        correctIndex: 1,
        explanation: "CE.1 requires that the CEO have qualifications — education and experience — appropriate to the hospital's size and complexity. There is no requirement for a medical degree; the key is fit for the role.",
        category: "rule",
      },
      {
        id: "dnv_gov_7",
        question: "Your contracted pharmacy service has had three medication error events in six months. The governing body has not been informed. Under NIAHO GB.4, this is:",
        options: [
          "Acceptable if the CEO is aware.",
          "Non-compliant — contracted service quality must be reported to the governing body.",
          "Acceptable if the contractor has its own quality program.",
          "Non-compliant only if patients were harmed."
        ],
        correctIndex: 1,
        explanation: "GB.4 requires the governing body to receive quality reports on contracted services. Your hospital retains oversight responsibility — the governing body must be kept informed of contracted service performance.",
        category: "scenario",
      },
      {
        id: "dnv_gov_8",
        question: "Which of the following BEST describes the governing body's role in NIAHO GB.1?",
        options: [
          "Ensure the hospital meets the legal definition and scope of a hospital — that's the GB.1 role.",
          "Personally perform patient care audits.",
          "Credential all physicians annually.",
          "Set nursing ratios for each unit."
        ],
        correctIndex: 0,
        explanation: "GB.1 defines what constitutes a hospital under NIAHO — inpatient services, 24-hour nursing, etc. The governing body ensures the organization meets these definitional requirements as part of its oversight role.",
        category: "rule",
      },
      {
        id: "dnv_gov_9",
        question: "The institutional plan under GB.3 is reviewed and approved by:",
        options: [
          "Management Representative.",
          "DNV surveyors annually.",
          "Governing body — this is a core governance function.",
          "Chief Medical Officer only."
        ],
        correctIndex: 2,
        explanation: "GB.3 requires the institutional plan (including budget) to be reviewed and approved by the governing body — not just executive leadership. This is a core governance function.",
        category: "rule",
      },
      {
        id: "dnv_gov_10",
        question: "Your hospital hires a new CEO whose only experience is managing a small physician office. Under CE.1, this raises a concern because:",
        options: [
          "CMS requires all CEOs to have a clinical background.",
          "Qualifications must be appropriate to the hospital's size and complexity.",
          "The governing body cannot appoint a CEO without DNV approval.",
          "Hospital CEOs must hold a specific state license."
        ],
        correctIndex: 1,
        explanation: "CE.1 requires CEO qualifications to match the hospital's size and complexity. A small physician office background may be insufficient for managing a full acute care hospital — the governing body must assess fit carefully.",
        category: "scenario",
      },
      {
        id: "dnv_gov_11",
        question: "Under NIAHO, written agreements for contracted services must define:",
        options: [
          "Contractor profit margins.",
          "Scope of services and performance/quality expectations.",
          "State licensure requirements for all contracted staff.",
          "CMS billing codes for contracted services."
        ],
        correctIndex: 1,
        explanation: "GB.4 requires written agreements to define the scope of contracted services and include quality/performance expectations. This ensures the hospital can monitor and hold contractors accountable.",
        category: "rule",
      },
      {
        id: "dnv_gov_12",
        question: "Your governing body hasn't met in eight months due to scheduling difficulties. The most significant compliance concern is:",
        options: [
          "Delayed budget approval only.",
          "Failure to exercise ongoing legal oversight responsibility under GB.2.",
          "Non-compliance with CE.2 CEO duties.",
          "Failure to maintain the Quality Outline/Plan."
        ],
        correctIndex: 1,
        explanation: "GB.2 requires active, ongoing legal oversight. An eight-month gap in governing body meetings means oversight functions — credentialing approvals, quality review, policy approval — have lapsed. This is a serious GB.2 gap.",
        category: "scenario",
      },
      {
        id: "dnv_gov_13",
        question: "Under NIAHO, which entity approves medical staff bylaws?",
        options: [
          "CEO only.",
          "Medical Staff President.",
          "Governing body — holds authority over medical staff bylaws.",
          "State medical licensing board."
        ],
        correctIndex: 2,
        explanation: "The governing body holds authority over medical staff bylaws under GB.2. Medical staff develop bylaws, but governing body approval is required — this is a foundational governance responsibility.",
        category: "rule",
      },
      {
        id: "dnv_gov_14",
        question: "Your hospital's strategic plan was last updated four years ago, before a major service line expansion. Under GB.3, this is:",
        options: [
          "Acceptable — plans only need updating every five years.",
          "A compliance concern — the institutional plan must reflect current operations and direction.",
          "Acceptable if the CEO reports on new services to the board.",
          "A concern only if DNV requests an update during survey."
        ],
        correctIndex: 1,
        explanation: "GB.3 requires an institutional plan that accurately reflects the hospital's operations and direction. A plan that predates a major service line expansion is outdated and does not support effective governance oversight.",
        category: "scenario",
      },
      {
        id: "dnv_gov_15",
        question: "Your CEO implements a new policy that contradicts a governing body-approved policy without notifying the board. Under CE.2, this is:",
        options: [
          "Acceptable if clinically justified.",
          "Non-compliant — the CEO must implement, not override, governing body policies.",
          "Acceptable in emergencies without board notification.",
          "Compliant if the Management Representative is informed."
        ],
        correctIndex: 1,
        explanation: "CE.2 charges the CEO with implementing governing body policies. Unilaterally overriding a board-approved policy without going back to the governing body for revision contradicts the CEO's defined role.",
        category: "scenario",
      },
      {
        id: "dnv_gov_16",
        question: "Your contracted lab service does not submit quality reports to your hospital. Under GB.4, your hospital should:",
        options: [
          "Accept this since the lab is CAP-accredited.",
          "Require quality reporting as a contractual condition and monitor performance.",
          "Notify DNV directly and wait for guidance.",
          "Switch to a different contractor without further steps."
        ],
        correctIndex: 1,
        explanation: "GB.4 requires oversight of contracted services including quality monitoring. Your hospital must ensure its contracts include reporting requirements and must follow up when reports are not provided.",
        category: "scenario",
      },
      {
        id: "dnv_gov_17",
        question: "Under NIAHO, the governing body's responsibility includes oversight of which of the following?",
        options: [
          "Only financial and budget matters.",
          "Patient care quality, credentialing, bylaws, and institutional planning.",
          "Only credentialing and privileging of physicians.",
          "Only contracted services quality."
        ],
        correctIndex: 1,
        explanation: "The governing body's responsibility under GB.1-GB.4 is broad — it covers quality of patient care, credentialing, bylaws, institutional planning, and contracted services. It cannot limit its oversight to any single area.",
        category: "rule",
      },
      {
        id: "dnv_gov_18",
        question: "When evaluating CEO qualifications under CE.1, which factor is MOST important?",
        options: [
          "Length of time in prior healthcare roles regardless of scope.",
          "Whether qualifications match your hospital's size, complexity, and services.",
          "Whether the CEO has a DNV-recognized certification.",
          "Whether the CEO previously worked at a DNV-accredited hospital."
        ],
        correctIndex: 1,
        explanation: "CE.1 focuses on the match between CEO qualifications and the hospital's size and complexity. The specific background matters less than whether it prepares the CEO to lead this particular organization.",
        category: "rule",
      },
      {
        id: "dnv_gov_19",
        question: "Under NIAHO GB.4, if a contracted service fails to meet performance expectations, who is accountable for corrective action?",
        options: [
          "The contractor exclusively.",
          "Your hospital — which must ensure the contractor improves or take other action.",
          "DNV — which must intervene.",
          "The state health department."
        ],
        correctIndex: 1,
        explanation: "Your hospital retains accountability for contracted service quality under GB.4. If a contractor underperforms, your hospital must take action — modify the contract, require improvement, or change vendors.",
        category: "rule",
      },
      {
        id: "dnv_gov_20",
        question: "A governing board member states their role is simply to 'trust the CEO and sign off on recommendations.' Under NIAHO GB.2, this attitude represents:",
        options: [
          "Appropriate division of governance and management.",
          "Inadequate exercise of legal oversight responsibility — boards must engage substantively.",
          "Compliant behavior as long as the CEO is experienced.",
          "Appropriate deference to operational expertise."
        ],
        correctIndex: 1,
        explanation: "GB.2 requires the governing body to exercise active legal oversight. Simply trusting and rubber-stamping executive decisions without independent review does not meet this standard — boards must engage substantively.",
        category: "scenario",
      },'''

# ── DNV_MS (correctIndexes: 1,1,2,1,2,1,0,0,2,1,1,0,1,0,1,1,1,1,1,2) ─────────
new_ms = '''    questions: [
      {
        id: "dnv_ms_1",
        question: "Under NIAHO MS.6, clinical privileges for a physician must be based on:",
        options: [
          "Physician's request and years of experience alone.",
          "Demonstrated competence through credentialing review and FPPE.",
          "Department chief recommendation without further review.",
          "State licensure only."
        ],
        correctIndex: 1,
        explanation: "MS.6 requires privileges to be granted based on demonstrated competence — verified through the credentialing process and confirmed through FPPE for new privileges. Experience and licensure alone are insufficient.",
        category: "rule",
      },
      {
        id: "dnv_ms_2",
        question: "Your surgeon requests privileges for a new robotic surgery procedure. Under NIAHO, which process is required BEFORE routine independent practice begins?",
        options: [
          "OPPE data collection.",
          "FPPE — a focused, time-limited evaluation confirming competence in this specific procedure.",
          "Department peer review only.",
          "No additional process if the surgeon already holds open surgery privileges."
        ],
        correctIndex: 1,
        explanation: "MS.6 requires FPPE for newly granted privileges. Even if a surgeon holds existing privileges, a new procedural privilege requires FPPE to confirm competence in that specific procedure before routine independent practice.",
        category: "scenario",
      },
      {
        id: "dnv_ms_3",
        question: "OPPE (Ongoing Professional Practice Evaluation) under MS.8 must be:",
        options: [
          "Completed only at reappointment.",
          "An annual self-assessment by each physician.",
          "Continuous and data-driven, informing reappointment decisions.",
          "Required only for physicians on probationary status."
        ],
        correctIndex: 2,
        explanation: "MS.8 requires OPPE to be ongoing — not just at reappointment. Data on case volumes, outcomes, peer review, and complaints must be continuously collected and reviewed to assess practitioner performance.",
        category: "rule",
      },
      {
        id: "dnv_ms_4",
        question: "Under NIAHO MS.13, an H&P completed 20 days before an elective surgery admission is:",
        options: [
          "Non-compliant — H&P must be done within 7 days of admission.",
          "Compliant — if updated within 24 hours of admission to note any interval changes.",
          "Non-compliant — H&P must always be done after admission.",
          "Compliant without any additional documentation needed."
        ],
        correctIndex: 1,
        explanation: "MS.13 allows H&Ps within 30 days before admission. When the H&P was done more than 24 hours before admission, an update must be documented within 24 hours of admission noting any interval changes in the patient's condition.",
        category: "scenario",
      },
      {
        id: "dnv_ms_5",
        question: "Medical staff bylaws under NIAHO MS.3 must be approved by:",
        options: [
          "Medical Staff President only.",
          "CEO and Medical Staff President jointly.",
          "Governing body — final authority over medical staff bylaws.",
          "DNV during the accreditation survey."
        ],
        correctIndex: 2,
        explanation: "MS.3 requires bylaws, rules, and regulations to be approved by the governing body. Medical staff develop them, but governing body approval is required — this is a core governance function.",
        category: "rule",
      },
      {
        id: "dnv_ms_6",
        question: "Temporary clinical privileges under NIAHO MS.7 may be granted:",
        options: [
          "To any physician for any reason at the CEO's discretion.",
          "Only in specific defined circumstances with a time limit.",
          "Without credentialing if the need is urgent.",
          "Only by the Medical Staff President with governing body approval for each case."
        ],
        correctIndex: 1,
        explanation: "MS.7 allows temporary privileges only in defined circumstances — typically urgent patient care needs or pending completion of a credentialing file. They must be time-limited and granted through a defined process in the bylaws.",
        category: "rule",
      },
      {
        id: "dnv_ms_7",
        question: "A telemedicine radiologist at an accredited distant-site hospital reads images for your DNV-accredited hospital. Under MS.15, your hospital may:",
        options: [
          "Accept the distant site's credentialing via credentialing by proxy with a written agreement.",
          "Require independent full credentialing at your site regardless of distant-site accreditation.",
          "Grant privileges based on state licensure alone.",
          "Not use telemedicine services without CMS approval."
        ],
        correctIndex: 0,
        explanation: "MS.15 permits credentialing by proxy for telemedicine when the distant site is accredited and a written agreement exists. This streamlines the process while maintaining accountability for practitioner competence.",
        category: "scenario",
      },
      {
        id: "dnv_ms_8",
        question: "Under NIAHO MS.10, corrective action against a medical staff member must follow:",
        options: [
          "A process defined in the medical staff bylaws that provides due process.",
          "Immediate termination without review for patient safety events.",
          "A process set solely by the CEO without medical staff input.",
          "CMS-mandated federal timelines regardless of hospital bylaws."
        ],
        correctIndex: 0,
        explanation: "MS.10 requires corrective or rehabilitative action to follow a defined process in the bylaws that includes due process protections for the practitioner. The process must be fair, documented, and consistently applied.",
        category: "rule",
      },
      {
        id: "dnv_ms_9",
        question: "Your physician's OPPE data shows a pattern of elevated complication rates compared to peers. Under MS.8, your hospital should:",
        options: [
          "Wait until reappointment to address the issue.",
          "Continue monitoring for another full year before acting.",
          "Initiate focused review and potentially convert to FPPE or corrective action.",
          "Remove the physician's privileges immediately without review."
        ],
        correctIndex: 2,
        explanation: "MS.8 requires OPPE data to be acted upon. A concerning pattern should trigger focused review — potentially converting back to FPPE-style monitoring or initiating the corrective action process defined in MS.10.",
        category: "scenario",
      },
      {
        id: "dnv_ms_10",
        question: "Under MS.11, admission to your hospital requires:",
        options: [
          "A court order or family request.",
          "A physician order with appropriate documentation.",
          "Pre-authorization from the governing body.",
          "DNV pre-notification for all new admissions."
        ],
        correctIndex: 1,
        explanation: "MS.11 requires that hospital admissions be ordered by a licensed practitioner with appropriate authority and properly documented. Admissions cannot occur without a physician's order and the required admission documentation.",
        category: "rule",
      },
      {
        id: "dnv_ms_11",
        question: "Which statement about medical staff eligibility under NIAHO MS.2 is CORRECT?",
        options: [
          "Any licensed physician is automatically eligible for medical staff membership.",
          "Eligibility requires licensure, training verification, and meeting medical staff criteria.",
          "Eligibility decisions are made by the CEO alone.",
          "International medical graduates are ineligible for medical staff membership."
        ],
        correctIndex: 1,
        explanation: "MS.2 requires that eligibility for medical staff membership be based on licensure, verified training and education, and meeting the organization's medical staff criteria. Licensure alone is not sufficient.",
        category: "rule",
      },
      {
        id: "dnv_ms_12",
        question: "Your hospital's medical staff bylaws require consultation for complex cases. Under MS.14, the consultation must be:",
        options: [
          "Documented in the medical record.",
          "Approved by the governing body before it occurs.",
          "Conducted only by board-certified specialists.",
          "Requested within 48 hours of admission in all cases."
        ],
        correctIndex: 0,
        explanation: "MS.14 requires consultations to be documented in the medical record. When consultation is required (by bylaws, rules, or clinical judgment), documentation of the consultation and its findings must be present in the record.",
        category: "rule",
      },
      {
        id: "dnv_ms_13",
        question: "Medical staff participation in quality improvement activities is addressed under:",
        options: [
          "MS.1 Organization and Accountability.",
          "MS.5 Medical Staff Participation — specifically addresses QI involvement.",
          "MS.8 Performance Data.",
          "MS.3 Bylaws and Regulations."
        ],
        correctIndex: 1,
        explanation: "MS.5 specifically addresses medical staff participation in quality management and improvement activities. Medical staff must be actively engaged in QMS processes — not just clinical care.",
        category: "definition",
      },
      {
        id: "dnv_ms_14",
        question: "Your patient is admitted for elective knee replacement. The surgeon completed the H&P 32 days ago. Under MS.13, the surgeon must:",
        options: [
          "Complete a new H&P within 24 hours of admission.",
          "Use the existing H&P since it was done in a clinical setting.",
          "Obtain governing body approval to use the existing H&P.",
          "Complete an update noting any changes within 24 hours of admission."
        ],
        correctIndex: 0,
        explanation: "MS.13 allows H&Ps within 30 days before admission. At 32 days, the H&P is outside this window — a new H&P must be completed, not just an update. The 30-day maximum has been exceeded.",
        category: "scenario",
      },
      {
        id: "dnv_ms_15",
        question: "Required education and training for medical staff under MS.9 refers to:",
        options: [
          "Annual mandatory compliance training for all clinical staff.",
          "Specialty-specific required training physicians must complete to maintain privileges.",
          "CME hours required for state licensure renewal only.",
          "Training conducted exclusively by DNV-approved educators."
        ],
        correctIndex: 1,
        explanation: "MS.9 addresses required education and training specific to maintaining clinical privileges — including any specialty-specific training, simulation, or competency requirements that support the privileges a practitioner holds.",
        category: "definition",
      },
      {
        id: "dnv_ms_16",
        question: "The governing body's role in medical staff credentialing under MS.4 is to:",
        options: [
          "Conduct the primary source verification independently.",
          "Approve credentials and privileges recommended by the medical staff.",
          "Delegate all credentialing decisions to the CMO without review.",
          "Credential only physicians — nurses are credentialed by HR."
        ],
        correctIndex: 1,
        explanation: "MS.4 defines the governing body's role as approving credentials and privileges recommended through the medical staff credentialing process. Final authority rests with the governing body, though the medical staff drives the credentialing work.",
        category: "rule",
      },
      {
        id: "dnv_ms_17",
        question: "Your physician's medical record documentation is consistently poor — late entries, incomplete notes. Under NIAHO MS.12, your hospital should:",
        options: [
          "Address it only if a patient complains.",
          "Include medical record quality in OPPE data and take appropriate action if a pattern persists.",
          "Report the physician to the state medical board immediately.",
          "Suspend privileges immediately until records are complete."
        ],
        correctIndex: 1,
        explanation: "MS.12 requires medical record maintenance, and MS.8 (OPPE) means documentation quality should be tracked as performance data. A persistent pattern of poor documentation should be addressed through the medical staff performance process.",
        category: "scenario",
      },
      {
        id: "dnv_ms_18",
        question: "Under NIAHO MS.6, reappointment to the medical staff must be based on:",
        options: [
          "Years of service and positive peer relationships.",
          "OPPE data reflecting actual performance over the appointment period.",
          "Department chief recommendation without additional data.",
          "The physician's self-reported caseload."
        ],
        correctIndex: 1,
        explanation: "MS.6 requires reappointment decisions to be informed by OPPE data — objective performance information collected during the appointment period. Relationship-based or self-reported data alone is insufficient.",
        category: "rule",
      },
      {
        id: "dnv_ms_19",
        question: "Your patient's condition changes significantly after the H&P is completed but before surgery the next morning. Under MS.13, what must the surgeon do?",
        options: [
          "Proceed with surgery — the H&P is valid for 30 days.",
          "Document an update addressing the interval change before proceeding.",
          "Obtain governing body approval to proceed.",
          "Cancel the procedure and reschedule with a new H&P."
        ],
        correctIndex: 1,
        explanation: "MS.13 requires that any H&P be updated to reflect interval changes in the patient's condition. If the patient's status has changed since the H&P, the surgeon must document an update before the procedure proceeds.",
        category: "scenario",
      },
      {
        id: "dnv_ms_20",
        question: "Under NIAHO MS.7, what is the maximum duration for temporary clinical privileges?",
        options: [
          "7 days — a fixed federal limit.",
          "30 days, unless extended by the CEO.",
          "As defined in the medical staff bylaws with a specific time limit.",
          "6 months with automatic renewal."
        ],
        correctIndex: 2,
        explanation: "MS.7 requires temporary privileges to be time-limited as defined in the medical staff bylaws. The specific duration is set by the hospital's bylaws — but it must be finite and defined, not open-ended.",
        category: "rule",
      },'''

# ── DNV_NS (correctIndexes: all 1s) ─────────────────────────────────────────
new_ns = '''    questions: [
      {
        id: "dnv_ns_1",
        question: "Under NIAHO NS.2, the Nurse Executive is responsible for:",
        options: [
          "Credentialing all nurses at the state level.",
          "Nursing service quality, staffing adequacy, and nursing policy across the organization.",
          "Approving all physician orders.",
          "Setting the hospital's overall budget."
        ],
        correctIndex: 1,
        explanation: "NS.2 establishes the Nurse Executive as accountable for nursing service quality, staffing adequacy, and nursing policies. The role requires organizational authority — not just advisory input.",
        category: "rule",
      },
      {
        id: "dnv_ns_2",
        question: "Your patient with pneumonia has a care plan identical to the standard pneumonia template with no individualization. Under NS.3, this is:",
        options: [
          "Compliant if the template meets diagnosis-based standards.",
          "Non-compliant — care plans must be individualized to each patient's specific needs.",
          "Compliant if a physician signed the template.",
          "Acceptable as long as nursing assessments are documented separately."
        ],
        correctIndex: 1,
        explanation: "NS.3 requires individualized plans of care. A template applied without patient-specific modification does not meet the individualization requirement — each patient's care plan must reflect their unique needs, conditions, and goals.",
        category: "scenario",
      },
      {
        id: "dnv_ns_3",
        question: "NS.4 (Assessment-Reassessment) requires that patient assessment be:",
        options: [
          "Completed only at admission and discharge.",
          "Ongoing — performed when conditions change and at defined intervals.",
          "Performed by physicians only.",
          "Documented weekly regardless of condition changes."
        ],
        correctIndex: 1,
        explanation: "NS.4 requires assessment and reassessment to be ongoing. When a patient's condition changes, a reassessment must be documented. Limiting assessment to admission and discharge misses critical interim changes.",
        category: "rule",
      },
      {
        id: "dnv_ns_4",
        question: "Under NIAHO SM.4, staffing levels must be determined by:",
        options: [
          "A fixed nurse-to-patient ratio set by state law only.",
          "Patient acuity, census, and care needs — adjusted as conditions change.",
          "The prior year's staffing budget.",
          "Union contract minimums only."
        ],
        correctIndex: 1,
        explanation: "SM.4 requires staffing to be determined and modified based on patient needs, acuity, and the scope of services. Fixed ratios may be a floor, but staffing must flex with actual patient needs.",
        category: "rule",
      },
      {
        id: "dnv_ns_5",
        question: "Your medical assistant is asked to administer IV medications on the unit. Under NIAHO SM.2, this is:",
        options: [
          "Acceptable if the nurse is nearby.",
          "Non-compliant — staff must practice within their professional scope and licensure.",
          "Acceptable if the medical assistant has been trained on the specific medication.",
          "Compliant if the CEO authorizes it in writing."
        ],
        correctIndex: 1,
        explanation: "SM.2 requires staff to practice within their professional scope. IV medication administration is outside the scope of a medical assistant in virtually all states. Allowing this violates SM.2 and creates patient safety risk.",
        category: "scenario",
      },
      {
        id: "dnv_ns_6",
        question: "Under SM.6, orientation of a new staff member must include:",
        options: [
          "Only a review of the employee handbook.",
          "Introduction to the role, unit environment, equipment, and applicable policies.",
          "A 90-day probationary performance review only.",
          "DNV-approved online modules only."
        ],
        correctIndex: 1,
        explanation: "SM.6 requires orientation that covers the role, the specific unit environment, equipment, applicable policies and procedures, and safety practices. It is the foundational preparation for safe practice in the new role.",
        category: "rule",
      },
      {
        id: "dnv_ns_7",
        question: "Competency assessment under SM.7 is different from orientation because:",
        options: [
          "Competency assessment is done by HR; orientation by the department.",
          "Competency assessment verifies ability to perform tasks to standard; orientation introduces the environment.",
          "Orientation is required for new staff; competency assessment only for experienced staff.",
          "They are the same thing under NIAHO."
        ],
        correctIndex: 1,
        explanation: "SM.6 (orientation) introduces the staff member to their environment and role. SM.7 (competency assessment) verifies they can actually perform required tasks safely and correctly. Both are separately required.",
        category: "definition",
      },
      {
        id: "dnv_ns_8",
        question: "Under NIAHO SM.5, a job description must exist for:",
        options: [
          "Only clinical positions.",
          "Every position in the hospital.",
          "Only positions requiring a state license.",
          "Only leadership and supervisory positions."
        ],
        correctIndex: 1,
        explanation: "SM.5 requires a job description for every position. This establishes expectations, scope of work, required qualifications, and reporting relationships — supporting accountability and competency assessment.",
        category: "rule",
      },
      {
        id: "dnv_ns_9",
        question: "Your patient's pain level increases from 2/10 to 8/10 after a procedure. Under NS.4, nursing staff should:",
        options: [
          "Document the change at the end of the shift.",
          "Reassess the patient immediately and document the reassessment and response.",
          "Wait for the next scheduled assessment time.",
          "Report only if the pain does not resolve within 4 hours."
        ],
        correctIndex: 1,
        explanation: "NS.4 requires reassessment whenever the patient's condition changes. A significant increase in pain is a condition change requiring immediate reassessment and documentation of the nursing response.",
        category: "scenario",
      },
      {
        id: "dnv_ns_10",
        question: "Under NIAHO SM.1, all staff must have:",
        options: [
          "DNV-issued competency certificates.",
          "Current licensure or certification appropriate to their role.",
          "Annual board recertification.",
          "A minimum of 5 years of healthcare experience."
        ],
        correctIndex: 1,
        explanation: "SM.1 requires that all staff hold current licensure or certification appropriate to their role and that the hospital verify and maintain documentation of this. Expired licenses or certifications are a compliance finding.",
        category: "rule",
      },
      {
        id: "dnv_ns_11",
        question: "Your Nurse Executive is being excluded from senior leadership meetings where staffing resources are allocated. Under NS.2, this is a concern because:",
        options: [
          "The Nurse Executive must attend all hospital meetings.",
          "The Nurse Executive must have organizational authority to address nursing staffing and quality.",
          "The Nurse Executive can delegate attendance to charge nurses.",
          "This is only a concern if patient outcomes are affected."
        ],
        correctIndex: 1,
        explanation: "NS.2 requires the Nurse Executive to have real organizational authority over nursing services, including staffing. Being excluded from resource allocation decisions undermines this authority.",
        category: "scenario",
      },
      {
        id: "dnv_ns_12",
        question: "Your unit's staffing plan hasn't been adjusted despite a significant increase in patient acuity over the past month. Under SM.4, this represents:",
        options: [
          "Acceptable management discretion.",
          "A compliance gap — staffing must be modified in response to changing patient needs.",
          "Acceptable if the fixed staffing budget is approved by the governing body.",
          "A concern only if adverse events have occurred."
        ],
        correctIndex: 1,
        explanation: "SM.4 requires staffing to be determined AND modified based on patient acuity and needs. Failing to adjust staffing when acuity increases is a direct SM.4 compliance gap.",
        category: "scenario",
      },
      {
        id: "dnv_ns_13",
        question: "Under NIAHO NS.1, nursing service must be available:",
        options: [
          "During standard business hours, 7 days a week.",
          "24 hours a day, 7 days a week.",
          "Whenever patient census requires it, at nursing leadership discretion.",
          "Only on units where physicians are present."
        ],
        correctIndex: 1,
        explanation: "NS.1 requires adequate nursing staff 24 hours a day, 7 days a week. This is a fundamental requirement for hospital licensure and NIAHO accreditation — nursing coverage cannot have gaps.",
        category: "rule",
      },
      {
        id: "dnv_ns_14",
        question: "Your LPN is asked to perform an initial patient assessment independently. Under NIAHO SM.2, this is:",
        options: [
          "Always acceptable under nurse delegation.",
          "Depends on state scope of practice for LPNs — must not exceed their licensed scope.",
          "Acceptable if the RN co-signs within 4 hours.",
          "Acceptable since LPNs and RNs have equivalent scope."
        ],
        correctIndex: 1,
        explanation: "SM.2 requires all staff to practice within their professional scope. Whether an LPN can conduct an independent initial assessment depends on state scope of practice. NIAHO does not expand state-defined scopes.",
        category: "scenario",
      },
      {
        id: "dnv_ns_15",
        question: "Under NIAHO NS.3, nursing care plans must be developed based on:",
        options: [
          "The physician's orders exclusively.",
          "A nursing assessment of each patient's individual needs and condition.",
          "Standard protocols for each diagnosis without modification.",
          "The patient's insurance coverage and length-of-stay authorization."
        ],
        correctIndex: 1,
        explanation: "NS.3 requires individualized care planning based on nursing assessment of each patient. The plan must reflect the specific patient's needs, goals, and condition — not generic diagnosis-based templates.",
        category: "rule",
      },
      {
        id: "dnv_ns_16",
        question: "Your hospital hires travel nurses who skip facility orientation because they are experienced. Under SM.6, this is:",
        options: [
          "Acceptable if the travel nurse has worked at another hospital in the same state.",
          "Non-compliant — orientation to the specific unit, environment, and policies is required for all new staff.",
          "Acceptable if the agency certifies their competency.",
          "Compliant if supervised by a permanent staff nurse for the first week."
        ],
        correctIndex: 1,
        explanation: "SM.6 requires orientation for all new staff — including travel staff. Orientation to the specific environment, equipment, policies, and procedures at this particular hospital is required regardless of prior experience elsewhere.",
        category: "scenario",
      },
      {
        id: "dnv_ns_17",
        question: "Under SM.7, performance appraisals must be:",
        options: [
          "Completed only when disciplinary action is being considered.",
          "Conducted at defined intervals and linked to competency assessment.",
          "Approved by the governing body for all clinical staff.",
          "Done exclusively by HR using standardized federal forms."
        ],
        correctIndex: 1,
        explanation: "SM.7 requires performance appraisals at defined intervals that are linked to competency assessment. This connects performance expectations (job description) with actual observed performance and competency.",
        category: "rule",
      },
      {
        id: "dnv_ns_18",
        question: "Your patient's care plan documents the goal as 'patient will improve.' Under NS.3, this goal is:",
        options: [
          "Acceptable as a general direction.",
          "Inadequate — goals must be specific, measurable, and individualized.",
          "Acceptable if the physician wrote the care plan.",
          "Adequate for documentation purposes only."
        ],
        correctIndex: 1,
        explanation: "NS.3 requires individualized care plans with meaningful goals. 'Patient will improve' is vague and unmeasurable — a compliant goal should specify what improvement looks like, by when, and for this specific patient.",
        category: "scenario",
      },
      {
        id: "dnv_ns_19",
        question: "Under NIAHO NS.1, which statement about nursing service staffing is CORRECT?",
        options: [
          "At least one RN must be on call but not necessarily present at all times.",
          "Adequate nursing staff must be present and providing care 24/7.",
          "Nursing coverage can be provided entirely by LPNs on overnight shifts.",
          "Staffing adequacy is judged solely by nurse-to-patient ratio compliance."
        ],
        correctIndex: 1,
        explanation: "NS.1 requires adequate nursing staff present 24 hours a day. 'On call' arrangements without nurses present do not satisfy the requirement for continuous nursing service.",
        category: "rule",
      },
      {
        id: "dnv_ns_20",
        question: "Under SM.6, continuing education for hospital staff is required to:",
        options: [
          "Meet only state licensure renewal requirements.",
          "Support ongoing competency and keep staff current with evolving practices.",
          "Be approved by DNV for each topic covered.",
          "Be completed during scheduled working hours only."
        ],
        correctIndex: 1,
        explanation: "SM.6 requires orientation and continuing education that supports ongoing competency. The purpose is keeping staff current with evolving practices, new equipment, and changing standards — not merely satisfying licensure hour requirements.",
        category: "rule",
      },'''

# ── Apply all replacements ──────────────────────────────────────────────────
CHAPTER_SEP = '\n    ],\n  },\n\n  // ─────────────────────────────────────────────────────────────────────────'
content = replace_q(content, "dnv_qm_1", CHAPTER_SEP + '\n  // CHAPTER 2', new_qm)
content = replace_q(content, "dnv_gov_1", CHAPTER_SEP + '\n  // CHAPTER 3', new_gov)
content = replace_q(content, "dnv_ms_1", CHAPTER_SEP + '\n  // CHAPTER 4', new_ms)
content = replace_q(content, "dnv_ns_1", CHAPTER_SEP + '\n  // CHAPTER 5', new_ns)

with open('shared/dnv-niaho-questions.ts', 'w') as f:
    f.write(content)
print("Batch A done.")
