import type { Level } from "./schema";

export const dnvLevels: Level[] = [

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 1 - Quality Management System (QM)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_qm",
    name: "Quality Management System",
    description: "Master the ISO 9001-based QMS requirements unique to DNV NIAHO - governing body accountability, management review, corrective action, and patient safety systems.",
    icon: "ClipboardCheck",
    color: "hsl(217, 91%, 45%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Quality Management System (QM)",
      plainLanguageSummary: "DNV NIAHO requires hospitals to maintain a formal ISO 9001-based Quality Management System. The governing body holds ultimate accountability; a designated Management Representative coordinates the QMS and reports to leadership. Hospitals must have a written Quality Outline/Plan, conduct internal audits, perform management reviews at planned intervals, complete corrective and preventive action on findings, and operate a robust Patient Safety System that captures adverse events and near misses.",
      keyOperationalExpectations: [
        "Governing body holds overall accountability for QMS performance.",
        "CEO is responsible for implementing the QMS throughout the organization.",
        "A Management Representative must be formally designated and empowered.",
        "A written Quality Outline/Plan must be maintained and reviewed.",
        "Management review must occur at planned intervals with documented outcomes.",
        "Corrective action must include root cause analysis and preventive follow-up.",
        "Patient safety events and near misses must be captured and analyzed.",
      ],
      commonRiskPoints: [
        "No designated Management Representative or unclear reporting lines.",
        "Quality Outline/Plan not updated after organizational changes.",
        "Management reviews not documented or held at irregular intervals.",
        "Corrective actions closed without verifying effectiveness.",
        "Patient safety events under-reported due to punitive culture.",
      ],
      cmsTags: ["QM.1", "QM.2", "QM.3", "QM.4", "QM.5", "QM.6", "QM.7", "QM.8"],
    },
    studyMaterial: [
      {
        title: "Who Is Ultimately Accountable for the QMS?",
        content: "Under NIAHO QM.1, the governing body holds overall accountability for the Quality Management System. The CEO is responsible for implementation throughout the organization. A Management Representative is formally designated to coordinate the QMS and serve as the liaison between the clinical and administrative teams and the governing body.",
        keyPoint: "Governing body = ultimate accountability. CEO = implementation. Management Rep = coordination.",
        category: "rule",
      },
      {
        title: "What Makes DNV Different: ISO 9001",
        content: "DNV NIAHO's QMS is explicitly based on the ISO 9001 standard - unlike TJC or AAAHC. This means hospitals must establish documented quality objectives, perform internal audits, conduct formal management reviews, and maintain a documented QMS scope. ISO 9001 principles include customer focus (patient focus), process approach, continual improvement, and evidence-based decision making.",
        keyPoint: "NIAHO QMS = ISO 9001 framework. Internal audits, management reviews, and documented objectives are required.",
        category: "definition",
      },
      {
        title: "What Must the Quality Outline/Plan Include?",
        content: "QM.3 requires a written Quality Outline/Plan that defines the organization's approach to quality. It must describe the QMS scope, quality objectives, and how the organization will measure, monitor, and analyze performance. The plan must be maintained current and reviewed when significant changes occur.",
        keyPoint: "Quality Outline/Plan: scope + objectives + measurement methods. Keep it current.",
        category: "rule",
      },
      {
        title: "Corrective vs. Preventive Action",
        content: "QM.5 requires a corrective action process that includes root cause analysis for identified nonconformances. Corrective action addresses the cause of an existing problem. Preventive action addresses the cause of a potential problem. Both require documentation, implementation, and verification that the action was effective before closure.",
        keyPoint: "Corrective = fix existing problem's root cause. Preventive = prevent future problems. Both require effectiveness verification.",
        category: "definition",
      },
      {
        title: "Patient Safety System Requirements",
        content: "QM.8 requires a formal Patient Safety System that captures adverse events, near misses, and unsafe conditions. The system must support a safety culture - staff must feel safe reporting without fear of punishment. Analysis of safety events must drive improvement. Leadership is responsible for fostering this culture through visible commitment to non-punitive reporting.",
        keyPoint: "Patient Safety System must capture events AND near misses. Non-punitive culture required. Leadership accountable.",
        category: "rule",
      },
    ],
    questions: [
      {
        id: "dnv_qm_1",
        question: "Under NIAHO QM.1, who holds OVERALL ACCOUNTABILITY for the Quality Management System?",
        options: [
          "Management Representative — coordinates QMS activities.",
          "Governing body — holds ultimate accountability for QMS performance.",
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 2 - Governance & Leadership (GB + CE)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_gov",
    name: "Governance & Leadership",
    description: "Governing body legal responsibility, institutional planning, contracted services oversight, and CEO qualifications and duties under DNV NIAHO.",
    icon: "Building2",
    color: "hsl(232, 76%, 48%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Governance & Leadership (GB + CE)",
      plainLanguageSummary: "The governing body is legally responsible for the hospital's operations and must exercise active oversight - not simply rubber-stamp executive decisions. It approves an institutional plan and budget, oversees contracted services through written agreements, and appoints a qualified CEO who is responsible for day-to-day operations, staffing, and implementation of governing body policies.",
      keyOperationalExpectations: [
        "Governing body exercises legal responsibility for all hospital operations.",
        "Institutional plan including a budget must be reviewed and approved by the governing body.",
        "Contracted services must have written agreements defining scope and accountability.",
        "The governing body must oversee quality of contracted services.",
        "CEO must have qualifications appropriate to hospital complexity.",
        "CEO implements governing body policies and manages daily operations.",
      ],
      commonRiskPoints: [
        "Governing body acting as a rubber stamp without genuine oversight.",
        "No written agreements for contracted clinical services.",
        "Contracted service quality not monitored or reported to governing body.",
        "CEO qualifications not documented or not matched to hospital scope.",
        "Institutional plan not updated to reflect strategic changes.",
      ],
      cmsTags: ["GB.1", "GB.2", "GB.3", "GB.4", "CE.1", "CE.2"],
    },
    studyMaterial: [
      {
        title: "Governing Body Legal Responsibility",
        content: "Under NIAHO GB.2, the governing body is legally responsible for the hospital. This means the board cannot simply delegate all authority to the CEO - it must actively oversee the quality of care, credentialing decisions, and organizational performance. The governing body approves bylaws, the institutional plan, and major policies.",
        keyPoint: "Governing body = legally responsible. Active oversight required, not rubber-stamping.",
        category: "rule",
      },
      {
        title: "Contracted Services Oversight",
        content: "GB.4 requires written agreements for all contracted clinical services. The hospital remains responsible for the quality of contracted services - it cannot outsource accountability. Contracts must define scope, performance expectations, and reporting requirements. The governing body must receive reports on contracted service quality.",
        keyPoint: "Written agreements required. Hospital keeps accountability for contracted service quality.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 3 - Medical Staff (MS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_ms",
    name: "Medical Staff",
    description: "Organization, credentialing, privileging, performance monitoring, telemedicine, and corrective action for medical staff under DNV NIAHO MS standards.",
    icon: "Stethoscope",
    color: "hsl(168, 74%, 36%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Medical Staff (MS.1–MS.15)",
      plainLanguageSummary: "NIAHO requires a well-organized medical staff accountable to the governing body through bylaws, rules, and regulations. Credentialing must verify licensure, training, and competence. Privileges must be delineated and based on demonstrated ability (FPPE for new privileges, OPPE for ongoing). Telemedicine providers may be credentialed via a credentialing-by-proxy agreement with an accredited originating site. Corrective action must follow a fair process defined in bylaws.",
      keyOperationalExpectations: [
        "Medical staff must be organized and accountable to the governing body.",
        "Bylaws, rules, and regulations must govern medical staff conduct and processes.",
        "All practitioners must be credentialed and privileged before providing care.",
        "FPPE required for all newly granted privileges.",
        "OPPE must be conducted on an ongoing basis for all medical staff.",
        "Temporary privileges granted only in specific circumstances with defined time limits.",
        "Telemedicine practitioners must be credentialed at the distant site or via credentialing-by-proxy.",
        "H&P must be completed within 30 days before or 24 hours after admission.",
      ],
      commonRiskPoints: [
        "Privileges granted without FPPE completion.",
        "OPPE data not collected or reviewed regularly.",
        "H&P not updated when patient condition changes before surgery.",
        "Telemedicine credentialing not meeting NIAHO proxy requirements.",
        "Bylaws not updated when processes change.",
      ],
      cmsTags: ["MS.1", "MS.2", "MS.6", "MS.7", "MS.8", "MS.13", "MS.15"],
    },
    studyMaterial: [
      {
        title: "FPPE vs. OPPE: The Two Pillars of Physician Performance Monitoring",
        content: "FPPE (Focused Professional Practice Evaluation) is required for all newly granted clinical privileges - it is a time-limited, focused evaluation to confirm the practitioner can perform the privileged activities. Once FPPE is complete and competence is confirmed, the practitioner moves to OPPE (Ongoing Professional Practice Evaluation), which is continuous monitoring of performance through data - case volumes, outcomes, peer review, etc.",
        keyPoint: "FPPE = new privileges, time-limited focus. OPPE = continuous monitoring for existing staff.",
        category: "definition",
      },
      {
        title: "H&P Timing Requirements",
        content: "Under MS.13, a History and Physical must be completed within 30 days before or 24 hours after inpatient admission or a surgical procedure. If the H&P was done before admission and more than 24 hours pass since it was completed, an update addressing any interim changes in the patient's condition must be documented within 24 hours of admission and before any procedure.",
        keyPoint: "H&P within 30 days before or 24 hours after admission. Update required if condition changes.",
        category: "rule",
      },
      {
        title: "Telemedicine Credentialing Options",
        content: "MS.15 addresses telemedicine. The distant-site hospital (where the telemedicine practitioner is physically located) must credential the practitioner. The originating-site hospital (where the patient is) may either fully credential the practitioner independently OR use credentialing by proxy - accepting the distant site's credentialing if the distant site is DNV-accredited or accredited by another recognized body and a written agreement exists.",
        keyPoint: "Credentialing by proxy allowed for telemedicine if distant site is accredited and written agreement exists.",
        category: "definition",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 4 - Nursing & Staffing Management (NS + SM)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_ns",
    name: "Nursing & Staffing Management",
    description: "Nursing service organization, the Nurse Executive role, individualized care planning, staffing determination, competency assessment, and orientation under NS and SM standards.",
    icon: "HeartPulse",
    color: "hsl(340, 82%, 45%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Nursing & Staffing Management (NS.1–NS.4, SM.1–SM.7)",
      plainLanguageSummary: "NIAHO requires an organized nursing service led by a qualified Nurse Executive who is accountable for nursing standards and staffing. Every patient must have an individualized plan of care developed from a thorough assessment. Staffing must be determined based on patient needs and acuity - not fixed ratios alone. All staff must be licensed, practicing within their professional scope, oriented to their role, and have competency assessed and documented. Job descriptions must exist for every position.",
      keyOperationalExpectations: [
        "Nursing service must be organized and adequately staffed 24/7.",
        "Nurse Executive must be qualified and have authority over nursing services.",
        "Every patient requires an individualized plan of care based on assessment.",
        "Assessment must be ongoing - not just at admission.",
        "Staffing levels must be determined by patient acuity and needs, not fixed numbers alone.",
        "All staff must have documented job descriptions and operate within their professional scope.",
        "Orientation to the unit, role, and equipment is required for all new staff.",
        "Competency must be assessed and documented - initial and ongoing.",
      ],
      commonRiskPoints: [
        "Care plans not individualized - same template used for all similar diagnoses.",
        "Reassessment not documented when patient condition changes.",
        "Staffing based on fixed schedules rather than adjusted to patient acuity.",
        "Staff practicing outside their licensed scope without supervision.",
        "Competency assessments not completed or not documented.",
      ],
      cmsTags: ["NS.1", "NS.2", "NS.3", "NS.4", "SM.1", "SM.4", "SM.6", "SM.7"],
    },
    studyMaterial: [
      {
        title: "The Nurse Executive Role",
        content: "NS.2 requires a qualified Nurse Executive (CNO or equivalent) who has authority and responsibility for nursing services across the organization. The Nurse Executive establishes nursing policies, ensures adequate staffing, and is accountable for the quality of nursing care. The role must have the organizational authority to act on nursing concerns - not just advisory input.",
        keyPoint: "Nurse Executive = qualified, organizationally empowered, accountable for nursing quality.",
        category: "rule",
      },
      {
        title: "Competency Assessment vs. Orientation",
        content: "SM.6 requires orientation to the role, unit, and environment. SM.7 requires competency assessment and performance appraisal. These are separate but related requirements. Orientation introduces the staff member to processes, equipment, and expectations. Competency assessment verifies they can actually perform the required tasks safely and to standard. Both must be documented.",
        keyPoint: "Orientation ≠ competency. Both required. Both must be documented.",
        category: "definition",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 5 - Medication Management (MM)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_mm",
    name: "Medication Management",
    description: "Storage, ordering, dispensing, administration, controlled substances, antimicrobial stewardship, and the formulary under NIAHO MM standards.",
    icon: "Pill",
    color: "hsl(38, 92%, 45%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Medication Management (MM.1–MM.9)",
      plainLanguageSummary: "NIAHO's Medication Management chapter requires hospitals to implement safe medication practices from formulary management through prescribing, dispensing, and administration. A pharmacy oversight group (P&T committee) must oversee the formulary. After-hours pharmacy access must be available 24/7. Controlled substances require additional safeguards. An antimicrobial stewardship program is required. Medication orders must be complete and legible. Self-administered medications must be assessed for safety.",
      keyOperationalExpectations: [
        "Medications must be safely stored, dispensed, and administered.",
        "A formulary must be maintained and overseen by the pharmacy oversight group.",
        "Medication orders must be complete, legible, and properly authorized.",
        "24-hour pharmacy access is required - including after-hours.",
        "Scheduled (controlled) drugs require special safeguards and accountability.",
        "An antimicrobial stewardship program must be in place.",
        "Drug information resources must be available to clinical staff.",
        "Self-administered medications must be assessed and documented.",
      ],
      commonRiskPoints: [
        "Incomplete medication orders - missing dose, route, or frequency.",
        "After-hours pharmacy access not clearly defined or consistently available.",
        "Controlled substance counts with unresolved discrepancies.",
        "Antimicrobial stewardship program existing on paper but not functioning.",
        "Outdated drug information resources available on units.",
      ],
      cmsTags: ["MM.1", "MM.2", "MM.3", "MM.4", "MM.5", "MM.6", "MM.7", "MM.8", "MM.9"],
    },
    studyMaterial: [
      {
        title: "Elements of a Complete Medication Order",
        content: "Under MM.4, a complete medication order must include: patient name/identifier, medication name, dose, route of administration, frequency/timing, and prescriber signature. Verbal or telephone orders must be documented and signed within the timeframe specified in hospital policy. Standing orders and pre-printed order sets must also meet completeness requirements.",
        keyPoint: "Complete order: patient ID, drug name, dose, route, frequency, prescriber signature.",
        category: "rule",
      },
      {
        title: "Antimicrobial Stewardship Program",
        content: "MM.8 requires a formal antimicrobial stewardship program. This program must have leadership support, defined responsibilities, drug use tracking, and processes to optimize antibiotic prescribing. The goal is to reduce unnecessary antibiotic use that drives resistance. The program connects to the infection control program (IC.2).",
        keyPoint: "Antimicrobial stewardship: formal program, leadership support, tracks use, optimizes prescribing.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 6 - Surgical & Anesthesia Services (SS + AS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_ss",
    name: "Surgical & Anesthesia Services",
    description: "Surgical organization, informed consent, operative reports, post-op care, instrument reprocessing, and anesthesia service requirements under NIAHO SS and AS standards.",
    icon: "Scissors",
    color: "hsl(270, 65%, 45%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Surgical & Anesthesia Services (SS.1–SS.10, AS.1–AS.3)",
      plainLanguageSummary: "NIAHO requires surgical services to be organized under qualified leadership with privileges delineated for each procedure performed. An OR register must document all procedures. Informed consent must be obtained and documented before any surgical procedure. The operative report must be dictated/written immediately after surgery. Post-operative care requires qualified PACU staff and defined discharge criteria. Anesthesia services require a qualified director, pre-anesthesia evaluation, intraoperative monitoring, and post-anesthesia assessment. Instrument reprocessing must follow manufacturer guidelines.",
      keyOperationalExpectations: [
        "Surgical services must be organized under a qualified director.",
        "Clinical privileges must be delineated for every surgical procedure performed.",
        "Informed consent must be obtained and documented before surgery.",
        "An OR register must be maintained logging all procedures.",
        "Operative report must be dictated immediately after surgery (or brief note before transfer).",
        "PACU care requires continuous monitoring until discharge criteria are met.",
        "Anesthesia director must be a qualified physician.",
        "Pre-anesthesia evaluation required before all anesthesia cases.",
        "Post-anesthesia assessment required before discharge from PACU.",
        "Instrument reprocessing must follow manufacturer instructions.",
      ],
      commonRiskPoints: [
        "Consent signed after sedation administered.",
        "Operative report not dictated promptly - only a brief note without full detail.",
        "PACU discharge without documented criteria being met.",
        "Instruments reprocessed using modified or unapproved methods.",
        "Pre-anesthesia evaluation not documented for all cases.",
      ],
      cmsTags: ["SS.1", "SS.4", "SS.6", "SS.7", "SS.8", "SS.9", "SS.10", "AS.1", "AS.2", "AS.3"],
    },
    studyMaterial: [
      {
        title: "Operative Report Requirements",
        content: "Under SS.8, the operative report must be dictated or written immediately after surgery. If dictation will be delayed, a brief operative note must be placed in the record before the patient is transferred from the OR. The complete operative report must include: date, pre- and post-operative diagnosis, procedure performed, description of findings, specimens sent, name of surgeons and assistants, and complications if any.",
        keyPoint: "Dictate immediately. If delayed, brief note in chart before transfer. Complete report includes findings, diagnosis, specimens, complications.",
        category: "rule",
      },
      {
        title: "Informed Consent for Surgery",
        content: "SS.9 requires surgical informed consent to be obtained and documented before the procedure. Consent must be signed while the patient is competent - never after sedation. The discussion must include the procedure, its purpose, material risks, alternatives, and the right to refuse. The surgeon performing the procedure is responsible for obtaining consent.",
        keyPoint: "Consent before sedation. Surgeon obtains consent. Includes risks, alternatives, right to refuse.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 7 - Patient Care Services (OB, LS, RC, MI, NM, RS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_pc",
    name: "Patient Care Services",
    description: "Obstetrical care, laboratory and blood safety, respiratory care, medical imaging radiation protection, nuclear medicine, and rehabilitation services under NIAHO.",
    icon: "Activity",
    color: "hsl(158, 64%, 36%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Patient Care Services (OB, LS, RC, MI, NM, RS)",
      plainLanguageSummary: "NIAHO covers multiple ancillary patient care services, each with specific organizational and safety requirements. Obstetrics requires practitioner privileges and emergency protocols. The laboratory must follow blood safety standards and notify patients of potentially infectious blood products. Respiratory care requires physician orders and documented treatment. Medical imaging requires radiation protection programs. Nuclear medicine requires radioactive material handling controls. Rehabilitation services must have treatment plans and qualified staff.",
      keyOperationalExpectations: [
        "OB: Practitioner privileges delineated; emergency protocols (hemorrhage, eclampsia) in place.",
        "Lab: Potentially infectious blood must be quarantined and patients notified.",
        "Lab: Blood safety programs required for all transfusion services.",
        "RC: All respiratory therapy must be ordered by a physician.",
        "MI: Radiation protection program required for all imaging with ionizing radiation.",
        "MI: Imaging equipment must be regularly inspected and maintained.",
        "NM: Radioactive materials must be handled, stored, and disposed of per regulations.",
        "RS: Rehabilitation treatment must be ordered, planned, and documented.",
      ],
      commonRiskPoints: [
        "OB emergencies without documented protocols or drills.",
        "Potentially infectious blood products not quarantined or reported.",
        "Respiratory therapy administered without a physician order.",
        "Imaging performed with unqualified personnel or without radiation dose tracking.",
        "Rehab treatment performed without a physician's order or treatment plan.",
      ],
      cmsTags: ["OB.1", "OB.4", "LS.1", "LS.2", "LS.3", "RC.1", "RC.2", "MI.1", "MI.2", "NM.1", "NM.2", "RS.1"],
    },
    studyMaterial: [
      {
        title: "Laboratory Blood Safety: Potentially Infectious Products",
        content: "Under LS.2, when a blood product is identified as potentially infectious (e.g., donor tests positive for HIV after donation), the hospital must quarantine the product if not yet transfused, trace and notify recipients if already transfused, and report to appropriate public health authorities. This look-back program is essential for patient safety.",
        keyPoint: "Potentially infectious blood: quarantine if not given, notify patient if already transfused, report to public health.",
        category: "rule",
      },
      {
        title: "Radiation Protection in Medical Imaging",
        content: "MI.2 requires a radiation protection program for all imaging using ionizing radiation (X-ray, CT, fluoroscopy). The program must minimize unnecessary exposure to patients, staff, and visitors. Requirements include shielding, dosimetry for staff, equipment inspection, and protocols for minimizing patient dose - particularly for vulnerable populations like pregnant patients and children.",
        keyPoint: "Radiation protection: minimize dose, staff dosimetry, shielding, equipment inspection.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 8 - Emergency, Outpatient & Dietary Services (ES + OS + DS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_es",
    name: "Emergency, Outpatient & Dietary Services",
    description: "Emergency department organization, EMTALA-aligned protocols, outpatient scope, dietary management, therapeutic diets, and the diet manual under NIAHO ES, OS, and DS standards.",
    icon: "Zap",
    color: "hsl(25, 95%, 48%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Emergency, Outpatient & Dietary Services (ES.1–ES.5, OS.1–OS.4, DS.1–DS.3)",
      plainLanguageSummary: "Emergency services must be organized, appropriately staffed, and have protocols for the full range of emergencies the community may present - including emergencies for which the hospital will transfer patients. Outpatient services require the same quality care standards as inpatient. Dietary services must be led by a qualified dietitian, provide individualized therapeutic diets, and maintain a current diet manual used by all staff ordering diets.",
      keyOperationalExpectations: [
        "ED must be organized and staffed to respond to emergency presentations.",
        "Emergency protocols required for conditions treated and for those requiring transfer.",
        "Off-campus emergency services must meet the same standards.",
        "Outpatient services must have qualified staff and a defined scope of service.",
        "All outpatient orders must be properly documented.",
        "Dietary services must be directed by a qualified dietitian.",
        "Therapeutic diets must be individualized and medically appropriate.",
        "A current diet manual must exist and be accessible to staff ordering diets.",
      ],
      commonRiskPoints: [
        "ED protocols not covering conditions for which the hospital transfers patients.",
        "Off-campus ED departments not meeting same standards as main ED.",
        "Outpatient orders not properly documented.",
        "Dietary services without a qualified dietitian director.",
        "Outdated or inaccessible diet manual on patient units.",
      ],
      cmsTags: ["ES.1", "ES.2", "ES.3", "ES.4", "ES.5", "OS.1", "OS.3", "DS.1", "DS.2", "DS.3"],
    },
    studyMaterial: [
      {
        title: "Emergency Services Not Provided",
        content: "ES.4 specifically requires that when the hospital does not provide a particular emergency service, it must have written protocols for transferring patients who require that service. The hospital cannot simply say 'we don't do that' without having a plan - every potential emergency presentation must have a response pathway, even if that pathway is a transfer to a capable facility.",
        keyPoint: "If you don't provide an emergency service, you must have a written transfer protocol for that emergency.",
        category: "rule",
      },
      {
        title: "The Diet Manual Requirement",
        content: "DS.3 requires the hospital to maintain a current diet manual that is the reference for all therapeutic diets ordered. The manual must be approved by the dietary service and the medical staff. It must be accessible to medical and nursing staff who order and implement diets - not just to dietary staff. Outdated manuals or manuals kept only in the dietary department are compliance findings.",
        keyPoint: "Current diet manual: approved by dietary and medical staff, accessible to staff who order diets.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 9 - Patient Rights (PR)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_pr",
    name: "Patient Rights",
    description: "Nondiscrimination, specific patient rights, advance directives, informed consent, grievance processes, restraint and seclusion, and care in safe settings under NIAHO PR standards.",
    icon: "ShieldCheck",
    color: "hsl(195, 85%, 38%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Patient Rights (PR.1–PR.10)",
      plainLanguageSummary: "NIAHO's Patient Rights chapter is among the most detailed and survey-intensive sections of the standard. Hospitals must not discriminate (PR.1), must uphold a comprehensive set of specific rights (PR.2), must honor advance directives (PR.3), provide language access (PR.4), obtain informed consent (PR.5), have a functional grievance process (PR.6), and follow very specific restraint and seclusion standards (PR.7–PR.9). Care in safe settings for patients at risk of self-harm or harm to others is addressed in PR.10.",
      keyOperationalExpectations: [
        "Nondiscrimination on the basis of race, color, national origin, disability, age, sex, and other protected characteristics.",
        "Patients must be informed of their rights and have them respected.",
        "Advance directives must be honored and documented.",
        "Language interpretation services must be available at no cost to patients.",
        "Informed consent required before treatment - fully informed, voluntary, competent.",
        "Grievance process must be defined, communicated to patients, and followed.",
        "Restraints and seclusion governed by strict requirements - least restrictive, time-limited, continuous monitoring.",
        "Deaths associated with restraints must be reported to CMS within required timeframes.",
        "Patients at risk of self-harm or harm to others must receive care in safe settings.",
      ],
      commonRiskPoints: [
        "Staff not knowing the grievance process or timeline for response.",
        "Restraints applied without orders, or orders not renewed within required timeframes.",
        "Seclusion used without all required documentation and monitoring.",
        "Deaths in restraints not reported to CMS timely.",
        "Advance directives in the chart but not followed during care.",
        "Informed consent missing documentation of risks and alternatives discussed.",
      ],
      cmsTags: ["PR.1", "PR.2", "PR.3", "PR.4", "PR.5", "PR.6", "PR.7", "PR.8", "PR.9", "PR.10"],
    },
    studyMaterial: [
      {
        title: "Restraint and Seclusion: Core Requirements",
        content: "PR.7 contains extensive restraint and seclusion requirements. Key rules: (1) Use the least restrictive intervention first. (2) Restraints require a physician order. (3) Orders must be time-limited - not standing orders. (4) Patients in restraints require continuous monitoring. (5) Restraints can only be used when clinically justified - never for punishment or staff convenience. (6) Violent/self-destructive restraint orders expire in shorter intervals (1 hour for children, 2 hours for adolescents, 4 hours for adults) and require reassessment.",
        keyPoint: "Restraints: least restrictive first, MD order required, time-limited, continuous monitoring, never for punishment.",
        category: "rule",
      },
      {
        title: "Grievance Process Requirements",
        content: "PR.6 requires a formal grievance process. A 'grievance' is a formal or informal written or verbal complaint made by a patient or their representative. The hospital must acknowledge receipt, investigate, and respond in writing within a defined timeframe. The response must include the name of the contact person, the steps taken, and the outcome. Patients must be informed of the grievance process at admission.",
        keyPoint: "Grievance: formal process, written acknowledgment, investigation, written response with findings and contact info.",
        category: "rule",
      },
      {
        title: "Reporting Restraint-Associated Deaths",
        content: "PR.9 requires that deaths associated with restraint or seclusion use be reported to CMS within one business day of the death. This is a hard federal deadline. The definition is broad - a death occurring while in restraints, within 24 hours of restraint removal, or within 1 week if restraints contributed to the death.",
        keyPoint: "Restraint-associated death: report to CMS within 1 business day. Broad definition - includes 24 hours after removal.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 10 - Infection Control & Medical Records (IC + MR + DC + UR)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_ic",
    name: "Infection Control & Medical Records",
    description: "Infection prevention and control program, antibiotic stewardship integration, medical record requirements, discharge planning, and utilization review under NIAHO IC, MR, DC, and UR standards.",
    icon: "FileText",
    color: "hsl(143, 71%, 35%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Infection Control & Medical Records (IC.1–IC.4, MR.1–MR.8, DC.1–DC.6, UR.1–UR.5)",
      plainLanguageSummary: "A formal infection prevention and control program is required with leadership accountability. The program must integrate with antibiotic stewardship. Medical records must be complete, retained per regulation, kept confidential, and contain all required elements including orders, operative reports, and discharge summaries. Discharge planning must begin at admission and be individualized. Utilization review must include admission review, continued stay review, and evaluation of professional services with a plan for addressing over- or under-utilization.",
      keyOperationalExpectations: [
        "IPC program must have designated leadership and defined responsibilities.",
        "Antibiotic stewardship must be integrated with the IPC program.",
        "Medical records must be complete and authenticated within required timeframes.",
        "Medical records must be retained per applicable law - typically minimum 5-10 years.",
        "Discharge planning must begin at or near admission for every patient.",
        "Discharge plan must be individualized and include post-acute care needs.",
        "Utilization review must cover admission necessity, continued stay, and professional services.",
      ],
      commonRiskPoints: [
        "IPC program without designated infection preventionist or physician champion.",
        "Antibiotic stewardship disconnected from IPC data.",
        "Incomplete medical records - missing discharge summaries or operative reports.",
        "Discharge planning only for long-stay patients - not initiated for all patients.",
        "Utilization review plan not updated or not functioning with defined processes.",
      ],
      cmsTags: ["IC.1", "IC.2", "IC.3", "MR.1", "MR.2", "MR.3", "MR.6", "DC.1", "DC.3", "UR.1", "UR.2"],
    },
    studyMaterial: [
      {
        title: "Infection Prevention and Control Program Structure",
        content: "IC.1 requires a formal IPC program with a designated infection preventionist (or team), leadership accountability, and defined processes for surveillance, investigation, prevention, and reporting. The program must collect and analyze infection data, identify trends, and implement evidence-based practices. Leadership must support the program with resources and authority.",
        keyPoint: "IPC program: designated preventionist, leadership accountability, surveillance, evidence-based practices.",
        category: "rule",
      },
      {
        title: "Complete Medical Record Requirements",
        content: "MR.2 specifies what constitutes a complete medical record. Required elements include: patient identification, medical history, physical examination, diagnoses, treatment plans, medication orders, informed consent documents, operative reports, nursing notes, physician orders, laboratory and imaging results, and a discharge summary (or transfer summary for transfers). All entries must be dated, timed, and authenticated.",
        keyPoint: "Complete record: ID + H&P + diagnoses + orders + consents + reports + discharge summary. All dated, timed, authenticated.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 11 - Physical Environment (PE + TO)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "dnv_pe",
    name: "Physical Environment & Emergency Preparedness",
    description: "Facility safety, life safety management, emergency management program, medical equipment management (including AEM), utility systems, and organ procurement under NIAHO PE and TO standards.",
    icon: "Building",
    color: "hsl(210, 78%, 42%)",
    requiredScore: 0,
    chapterSummary: {
      chapterTitle: "Physical Environment & Emergency Preparedness (PE.1–PE.8, TO)",
      plainLanguageSummary: "NIAHO's physical environment chapter covers the full environment of care including the physical facility's safety compliance (Life Safety Code), safety and security management systems, hazardous materials handling, emergency preparedness, medical equipment management (with specific AEM program rules), and utility systems. The emergency preparedness requirements are extensive - hospitals must have risk-based emergency plans, communication plans, training and testing programs, and coordinate with community partners. Organ procurement requires written agreements with OPOs and defined processes for identifying potential donors.",
      keyOperationalExpectations: [
        "Facility must comply with the applicable edition of NFPA Life Safety Code.",
        "Safety management system must address workplace safety hazards.",
        "Security management system must protect patients, staff, and visitors.",
        "Hazardous materials must be handled, stored, and disposed of per regulations.",
        "Emergency preparedness plan must be risk-based (HVA) and updated annually.",
        "Emergency plan must include communication, training, and testing components.",
        "Medical equipment must be maintained per manufacturer or AEM program standards.",
        "AEM programs must be documented with risk assessment for critical equipment.",
        "Utility systems must be maintained with defined failure response procedures.",
        "Organ procurement requires OPO agreement and defined donor identification process.",
      ],
      commonRiskPoints: [
        "Life safety deficiencies not corrected or placed on ILSM.",
        "Emergency plan not updated after exercises or after organizational changes.",
        "AEM program without documented risk assessment for critical equipment.",
        "Utility failures without defined response procedures.",
        "Organ procurement: staff not trained to identify and refer potential donors.",
      ],
      cmsTags: ["PE.1", "PE.2", "PE.3", "PE.4", "PE.5", "PE.6", "PE.7", "PE.8", "TO.1", "TO.2"],
    },
    studyMaterial: [
      {
        title: "Alternate Equipment Management (AEM) Program",
        content: "PE.7 allows hospitals to maintain certain medical equipment using alternative maintenance schedules that differ from manufacturer recommendations - but only if they implement a documented AEM program. The AEM program must: (1) be based on nationally recognized standards (e.g., ANSI/AAMI EQ56), (2) have a risk assessment for each device placed in the AEM program, (3) identify 'critical equipment' (devices where failure could cause serious injury or death), and (4) be managed by qualified personnel (typically biomedical engineers).",
        keyPoint: "AEM program: documented, risk-assessed, nationally-recognized standards, qualified personnel. Critical equipment requires special focus.",
        category: "rule",
      },
      {
        title: "Emergency Preparedness: Required Components",
        content: "PE.6 requires a comprehensive emergency preparedness program based on a Hazard Vulnerability Analysis (HVA). The program must include: (1) an emergency plan addressing likely hazards, (2) policies and procedures, (3) a communication plan including backup communication methods, (4) a training and testing program with at least two exercises annually (one community-based), and (5) a process for after-action review and improvement following exercises and actual events.",
        keyPoint: "Emergency prep: HVA-based plan + policies + communication plan + training + 2 exercises/year (1 community-based) + after-action review.",
        category: "rule",
      },
      {
        title: "Organ Procurement Requirements",
        content: "TO.1-TO.2 require hospitals to have a written agreement with a designated OPO (Organ Procurement Organization). The hospital must have a defined process for identifying potential organ donors and referring them to the OPO in a timely manner. All deaths and imminent deaths must be reported to the OPO. The hospital cannot make the determination of whether the patient is a suitable donor - that is the OPO's role.",
        keyPoint: "OPO agreement required. Report all deaths/imminent deaths to OPO. Hospital identifies and refers; OPO evaluates suitability.",
        category: "rule",
      },
    ],
    questions: [
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
      },
    ],
  },
];


