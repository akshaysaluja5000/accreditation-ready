import type { Level } from "./schema";

export const ascQuaLevel: Level = {
  id: "asc_qua",
  module: "asc",
  name: "Quality Management",
  description: "AAAHC v44 QUA - peer review, ongoing monitoring, quality improvement studies, and linking QI to risk management and safety.",
  icon: "BarChart3",
  color: "hsl(270, 55%, 48%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "QUA: Quality",
    plainLanguageSummary:
      "The QUA category requires ASCs to maintain a multidimensional, multidisciplinary quality management and improvement program that integrates peer review, ongoing performance monitoring, infection prevention data, safety, and risk management. Peer review must be structured, ongoing, and include all privileged health care professionals. Quality improvement activities must use data to identify trends, drive action, and improve outcomes. Results must be reported to the governing body at least annually.",
    keyOperationalExpectations: [
      "Each physician, dentist, or health care professional is reviewed by at least one similarly privileged/licensed peer.",
      "Peer review criteria are developed and applied by privileged professionals - not just administrators.",
      "Clinical care is selected for ongoing review covering all similarly privileged professionals.",
      "QI data is collected continuously, evaluated for trends, and acted upon when problems are identified.",
      "Peer review results are reported to the governing body at least annually.",
      "QI studies include measurable goals, baselines, intervention, and re-measurement components.",
    ],
    commonRiskPoints: [
      "Peer review exists on paper but all privileged providers have not been reviewed in the past 12 months.",
      "QI studies lack baselines, measurable goals, or re-measurement phases.",
      "QI committee minutes do not document trending data or specific corrective actions triggered by data.",
      "Peer review results are never formally presented to the governing body.",
    ],
    aaahcStandards: ["QUA.100", "QUA.110", "QUA.120", "QUA.130", "QUA.140", "QUA.150", "QUA.160", "QUA.210", "QUA.220"],
  },
  studyMaterial: [
    {
      title: "Who reviews the care that providers give at your facility?",
      content:
        "Each provider must be reviewed by at least one peer who holds a similar clinical license or privileges. A surgeon must be reviewed by another surgeon, for example, not just by an administrator. For facilities where a single provider is the only one in their specialty, an outside peer reviewer must be arranged.",
      keyPoint:
        "Peer review must be performed by a similarly qualified peer. Administrators, quality consultants, or unrelated specialists do not qualify as peers.",
    },
    {
      title: "How does the facility use clinical data to identify and fix problems?",
      content:
        "The quality program must collect ongoing clinical data, review that data on a regular schedule to look for patterns or problems, and take action when a problem is identified. Collecting data without analyzing it or acting on findings is not a complete quality process. Benchmarking against national averages or similar facilities is also part of this process.",
      keyPoint:
        "Quality monitoring is a three-step process: collect data, evaluate for trends, and act when problems are found. All three steps must be documented.",
    },
    {
      title: "How are peer review results connected to a provider's continued privileges?",
      content:
        "Peer review results must be presented to the governing body at least once a year. They must also be used as part of the process for deciding whether a provider keeps their clinical privileges. Facilities that run peer review and credentialing as completely separate processes with no connection to each other have a structural quality problem.",
      keyPoint:
        "Peer review results must go to the governing body annually and must be used in privilege continuation decisions.",
    },
    {
      title: "What makes a quality improvement study complete?",
      content:
        "A complete quality improvement study must have a specific clinical topic, a measurable goal, baseline data, an improvement action, and a follow-up measurement to see if the action worked. A study that only collects data without a baseline, a goal, or a re-measurement phase does not meet the full requirement.",
      keyPoint:
        "A quality study requires a baseline, a measurable goal, an intervention, and a re-measurement. Data collection alone is not a complete study.",
    },
    {
      title: "How should infection prevention and safety data be connected to the quality program?",
      content:
        "Infection prevention data, safety event reports, and risk management findings must all feed into the quality improvement program. The governing body should receive one integrated view of how the facility is performing, not separate unconnected reports from each program. When these programs work in silos, important patterns are missed.",
      keyPoint:
        "Infection prevention, safety, risk management, and peer review must all connect through the quality program. Separate reports that never inform each other are not integrated.",
    },
  ],
  questions: [
    {
      id: "asc_qua_01",
      question:
        "Under QUA.100, who must review each physician, dentist, or health care professional at the ASC?",
      options: [
        "The facility administrator based on patient satisfaction surveys",
        "At least one similarly privileged and/or similarly licensed peer",
        "A contracted quality consultant hired by the organization",
        "The medical director reviewing all providers regardless of specialty"
      ],
      correctIndex: 1,
      explanation:
        "QUA.100 requires peer review by at least one similarly privileged and/or similarly licensed peer. The AAAHC guidance clarifies that differently licensed practitioners may review each other if they are privileged to provide similar services to similar patients and prevailing laws permit.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The 'similarly privileged/licensed peer' requirement ensures that reviewers are clinically qualified to evaluate the care being reviewed. A surgeon should review a surgeon's operative cases - not an administrator or a nurse.",
        whyWrong: {
          A: "Patient satisfaction data may inform QI but does not constitute peer review.",
          C: "Quality consultants may support the process but cannot substitute for peer review by similarly qualified clinicians.",
          D: "The medical director reviewing all providers regardless of specialty does not meet the 'similarly privileged/licensed' peer requirement for specialties outside the medical director's own.",
        },
        operationalContext:
          "Structure peer review so that each clinical specialty has at least one designated peer reviewer in the same specialty. For solo practitioners, establish a formal arrangement with an external peer reviewer.",
      },
    },
    {
      id: "asc_qua_02",
      question:
        "A solo anesthesiologist works at an ASC that has no other anesthesiologists on staff. How must peer review be conducted for this provider under QUA.110?",
      options: [
        "Self-review is acceptable for solo practitioners",
        "An outside peer must provide peer review for the solo practitioner",
        "Peer review is waived for facilities with fewer than three providers in the same specialty",
        "The medical director may review the anesthesiologist's cases regardless of specialty"
      ],
      correctIndex: 1,
      explanation:
        "QUA.110 is a selective standard specifically addressing solo practitioners: in organizations with solo practitioners, an outside peer must provide peer review. Self-review is never acceptable under AAAHC standards.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Solo practitioners cannot objectively review their own work. QUA.110 closes this gap by requiring external peer review - typically a peer from a neighboring facility or a regional peer review organization.",
        whyWrong: {
          A: "Self-review is explicitly excluded from AAAHC peer review requirements.",
          C: "There is no size-based waiver for peer review in QUA standards.",
          D: "Cross-specialty review does not meet the 'similarly privileged/licensed' peer requirement.",
        },
        operationalContext:
          "Establish a formal agreement with an external anesthesiologist from another facility for peer review. Document the arrangement in a signed agreement and include the external reviewer's credentials in the credentialing file.",
      },
    },
    {
      id: "asc_qua_03",
      question:
        "QUA.120 requires that privileged health care professionals participate in peer review. What specific developmental role does this standard require providers to take?",
      options: [
        "Providers must simply agree to be reviewed - no active development role is required",
        "Providers must participate in the development and application of peer review criteria used to evaluate the care they provide",
        "Providers must select the cases to be reviewed from their own practice",
        "Providers must conduct unannounced peer observations of their colleagues"
      ],
      correctIndex: 1,
      explanation:
        "QUA.120.10 requires that privileged health care professionals participate in the development and application of the peer review criteria used to evaluate the care they provide. This is an active role - not passive consent to being reviewed.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Provider participation in criteria development ensures that review standards are clinically meaningful and appropriate for the specialty. Criteria imposed purely by administrators or outside parties may not reflect the nuances of the care being reviewed.",
        whyWrong: {
          A: "Mere agreement to be reviewed is insufficient - active criteria development participation is specifically required.",
          C: "Providers selecting only their own cases for review would undermine the objectivity of peer review.",
          D: "Unannounced observations are not mentioned in QUA.120 - the standard focuses on criteria development and ongoing selection processes.",
        },
        operationalContext:
          "Hold an annual peer review committee meeting where all privileged providers review and approve the criteria to be used for the coming year. Document attendance and criteria decisions in committee minutes.",
      },
    },
    {
      id: "asc_qua_04",
      question:
        "QUA.120.50 requires that all privileged health care professionals are reviewed at least how frequently?",
      options: [
        "Every three years at reappointment",
        "At least annually by a peer or supervising health care professional",
        "Only when a clinical incident occurs",
        "Every two years per accreditation cycle"
      ],
      correctIndex: 1,
      explanation:
        "QUA.120.50 requires that all privileged health care professionals are reviewed at least annually by a peer or supervising health care professional. This is a minimum requirement - more frequent review is permissible and encouraged.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Annual review ensures ongoing monitoring of each provider's practice, not just episodic review triggered by problems. The 'at least annually' floor means no provider should go more than 12 months without documented peer review.",
        whyWrong: {
          A: "Three-year reappointment cycles are credentialing intervals - QUA.120.50 requires annual peer review between reappointments.",
          C: "Incident-triggered review is addressed in QUA.120.40 but is in addition to, not instead of, annual review.",
          D: "Two-year accreditation cycles do not correspond to the peer review frequency requirement.",
        },
        operationalContext:
          "Track peer review completion by provider by calendar year. Ensure every credentialed provider has a documented, completed peer review before their annual anniversary or before year-end, whichever your process specifies.",
      },
    },
    {
      id: "asc_qua_05",
      question:
        "Under QUA.130, an ASC collects surgical site infection data monthly. What additional steps are required by this standard to achieve full compliance?",
      options: [
        "Data collection alone satisfies QUA.130 as long as it is ongoing",
        "The data must also be periodically evaluated for trends, and action must be taken when problems are identified",
        "Data must be submitted to a national registry to achieve compliance",
        "QUA.130 only requires data collection - evaluation and action are addressed in QUA.160"
      ],
      correctIndex: 1,
      explanation:
        "QUA.130 has three required steps: (1) ongoing data collection, (2) periodic evaluation to identify trends or occurrences affecting patient outcomes, and (3) action when data analysis identifies problems or improvement opportunities. Collection alone is insufficient.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC designs QUA.130 as a complete monitoring cycle - data collection is only valuable if it leads to evaluation and action. An ASC that collects data but never acts on findings fails QUA.130.20 and QUA.130.30.",
        whyWrong: {
          A: "Data collection is the first step, not the complete requirement.",
          C: "National registry submission may be good practice but is not required by QUA.130.",
          D: "QUA.130.20 and QUA.130.30 explicitly add evaluation and action requirements to the data collection baseline.",
        },
        operationalContext:
          "For each QI metric, create a monitoring worksheet: (1) data collected monthly; (2) 90-day trend review at committee; (3) action plan triggered if trend goes below target. Document all three phases in committee minutes.",
      },
    },
    {
      id: "asc_qua_06",
      question:
        "QUA.140 requires peer review results to be reported to the governing body. How frequently does this reporting minimum occur?",
      options: [
        "Monthly",
        "At least annually",
        "Only when a provider is placed on focused review",
        "At the time of each provider's reappointment"
      ],
      correctIndex: 1,
      explanation:
        "QUA.140 requires that the results of peer review activities are reported to the governing body at least annually. This ensures governance-level accountability for the peer review program.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body needs to know how its peer review program is functioning. Annual reporting is the minimum - quarterly or semi-annual reporting provides better oversight.",
        whyWrong: {
          A: "Monthly is not required; at least annually is the stated minimum.",
          C: "Focused review triggers additional reporting but is not a substitute for the annual governing body report.",
          D: "Reappointment cycles may trigger a comprehensive report but QUA.140 requires annual reporting independent of reappointment timing.",
        },
        operationalContext:
          "Include a peer review summary report as an annual governing body agenda item. The report should summarize: number of reviews completed, number of providers reviewed, any identified issues, and corrective actions taken.",
      },
    },
    {
      id: "asc_qua_07",
      question:
        "QUA.150 requires that peer review results be used in which specific credentialing decision?",
      options: [
        "Initial appointment decisions only",
        "The process for granting continuation of clinical privileges at reappointment",
        "Hiring decisions for employed physicians",
        "Malpractice insurance premium determinations"
      ],
      correctIndex: 1,
      explanation:
        "QUA.150 specifically requires that peer review results are used as part of the process for granting continuation of clinical privileges. This ensures quality data from peer review directly informs privilege renewal at reappointment.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "QUA.150 closes a critical governance loop: clinical performance data from peer review must feed into the credentialing decision about whether to renew privileges. An ASC that never considers peer review data at reappointment has a structural QUA.150 deficiency.",
        whyWrong: {
          A: "Initial appointment decisions rely primarily on credentialing documents - QUA.150 specifically addresses continuation (renewal) of privileges.",
          C: "Employment decisions are HR functions separate from clinical privileging.",
          D: "Malpractice premiums are set by insurers, not by the organization using peer review data.",
        },
        operationalContext:
          "Include a mandatory 'Peer Review Summary' section in the reappointment packet that summarizes findings from the current reappointment period. The credentials committee must review this section before recommending privilege continuation.",
      },
    },
    {
      id: "asc_qua_08",
      question:
        "An ASC's QI committee reviews surgical volume data but has no systematic process for identifying trends. What QUA.130 element is missing?",
      options: [
        "Volume data is sufficient for QI compliance - trend analysis is optional",
        "QUA.130.20 requires periodic evaluation of data to identify trends or occurrences affecting patient outcomes",
        "Trend analysis is only required when an adverse event occurs",
        "Volume data belongs in the administrative report, not the QI program"
      ],
      correctIndex: 1,
      explanation:
        "QUA.130.20 requires that collected data is periodically evaluated to identify trends or occurrences that affect patient outcomes. Reviewing raw volume data without systematic trend analysis does not satisfy this requirement.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Trend identification is the mechanism by which QI data becomes actionable. Without a systematic trend analysis process, problems may persist undetected until they cause a serious event.",
        whyWrong: {
          A: "Volume data collection is step one of QUA.130; trend evaluation is step two. Both are required.",
          C: "Trend analysis under QUA.130 is proactive and ongoing - not triggered by adverse events.",
          D: "Volume data may appear in administrative reports, but clinical volume as a QI metric belongs in the QI program.",
        },
        operationalContext:
          "Use run charts or control charts to display QI metrics over time. Present trend data (not just point-in-time snapshots) at every QI committee meeting. Flag any data points outside the control limits for action.",
      },
    },
    {
      id: "asc_qua_09",
      question:
        "A QI study at an ASC tracked post-operative nausea rates for three months, implemented an antiemetic protocol, and never re-measured. Which component of a compliant QI study is missing?",
      options: [
        "The topic selection - post-operative nausea is not a required QI study topic",
        "Re-measurement after the intervention to determine whether the change produced improvement",
        "Governing body approval of the study topic before implementation",
        "QI studies do not need re-measurement if the intervention was clinically sound"
      ],
      correctIndex: 1,
      explanation:
        "A compliant QI study must include re-measurement after the intervention to determine whether the change produced the desired improvement. Without re-measurement, the study cannot demonstrate whether the improvement effort was effective.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Re-measurement is the 'check' phase of a Plan-Do-Check-Act (PDCA) cycle. Without it, you have a Plan-Do with no evidence of effect. Surveyors specifically look for re-measurement data to confirm study completeness.",
        whyWrong: {
          A: "Post-operative nausea is a relevant clinical quality topic - there is no prescribed list of required QI study topics.",
          C: "Governing body approval of each study topic is not a QUA.160 element; the governing body approves the overall QI program.",
          D: "Clinical soundness of the intervention does not eliminate the need to verify its actual effect through re-measurement.",
        },
        operationalContext:
          "After implementing any QI intervention, schedule a re-measurement period (typically 90 days post-implementation). Present baseline, intervention, and post-intervention data as a three-phase result in the QI committee minutes.",
      },
    },
    {
      id: "asc_qua_10",
      question:
        "QUA.220 requires that the quality management program links which organizational programs in a systematic way?",
      options: [
        "Only peer review and QI studies - other programs are managed separately",
        "Peer review, QI activities, infection prevention and control, safety, and risk management",
        "Only clinical programs - administrative functions are excluded",
        "The accreditation program, marketing, and patient experience"
      ],
      correctIndex: 1,
      explanation:
        "QUA.220 requires the quality management program to link peer review, QI activities, infection prevention and control, safety, and risk management in an organized, systematic way. Integration is the core requirement - siloed programs fail this standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "QUA.220 reflects the AAAHC's systems thinking approach: patient safety, quality of care, infection prevention, and risk are interconnected. An integrated program identifies patterns that siloed programs miss.",
        whyWrong: {
          A: "IPC, safety, and risk management are explicitly named integration elements - not optional.",
          C: "Administrative functions that affect clinical safety (e.g., risk management) are included in the integration mandate.",
          D: "Marketing and patient experience are not QUA.220 integration elements.",
        },
        operationalContext:
          "Structure your QI committee so that IPC surveillance data, safety event reports, and risk management findings are all standing agenda items alongside peer review summaries and QI study updates.",
      },
    },
    {
      id: "asc_qua_11",
      question:
        "The QI committee reviews peer review findings but the governing body has not received a peer review report in two years. What AAAHC standard is at issue?",
      options: [
        "Peer review reporting to the governing body is optional if the QI committee reviews results",
        "QUA.140 requires reporting to the governing body at least annually - two years without reporting is a deficiency",
        "GOV.240 is the only standard that addresses governing body review requirements",
        "QUA.140 applies only to organizations with employed physicians"
      ],
      correctIndex: 1,
      explanation:
        "QUA.140 specifically requires that peer review results be reported to the governing body at least annually. A two-year gap is a clear deficiency regardless of the QI committee's review activities.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body must have direct visibility into peer review results to exercise its governance oversight of clinical quality. QI committee review alone does not satisfy the governing body reporting requirement.",
        whyWrong: {
          A: "QI committee review and governing body reporting are separate requirements - one does not substitute for the other.",
          C: "GOV.240 requires annual program reviews, but QUA.140 is the specific peer review reporting standard.",
          D: "QUA.140 applies to all organizations with privileged health care professionals, regardless of employment model.",
        },
        operationalContext:
          "Schedule peer review summary presentation as an annual governing body agenda item. Create a standard one-page template: providers reviewed, cases reviewed per provider, findings summary, and actions taken.",
      },
    },
    {
      id: "asc_qua_12",
      question:
        "Under QUA.120.40, what must the peer review program do when a clinical incident occurs?",
      options: [
        "Document the incident in the patient's medical record only",
        "Review all clinical incidents in accordance with the organization's peer review policies and procedures",
        "Clinical incidents are referred directly to the risk manager and excluded from peer review",
        "Incidents are only reviewed if the patient files a formal complaint"
      ],
      correctIndex: 1,
      explanation:
        "QUA.120.40 requires that all clinical incidents are reviewed in accordance with the organization's peer review policies and procedures. Incidents are not excluded from peer review - they are a core input.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Clinical incidents are some of the most important cases for peer review - they may reveal system failures, skill gaps, or policy deficiencies that require correction. Excluding them from peer review removes a critical safety feedback loop.",
        whyWrong: {
          A: "Medical record documentation is required separately - it does not substitute for peer review of the incident.",
          C: "Risk management and peer review work in parallel - an incident referred to risk management must also go through peer review.",
          D: "Peer review of incidents is not patient-complaint-triggered; it is system-triggered by the incident itself.",
        },
        operationalContext:
          "Create an incident-to-peer-review pipeline: when a clinical incident is filed in the risk management system, it automatically appears on the next peer review committee agenda. Document the review and disposition for every incident.",
      },
    },
    {
      id: "asc_qua_13",
      question:
        "The AAAHC guidance for QUA.130 mentions benchmarking. What does benchmarking add to the quality monitoring process?",
      options: [
        "Benchmarking is optional and adds no compliance value",
        "Benchmarking allows the organization to compare its performance against external norms or best-practice standards to identify improvement opportunities",
        "Benchmarking is only required for organizations with Medicare-certified status",
        "Benchmarking replaces internal data collection when external data is available"
      ],
      correctIndex: 1,
      explanation:
        "The AAAHC guidance notes that benchmarking - comparing against external norms - is part of the ongoing monitoring process under QUA.130. Benchmarking provides context for internal data, helping identify whether performance is truly good or merely acceptable compared to peers.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Without external benchmarks, an organization may misinterpret its data. A post-operative complication rate of 2% may seem low until benchmarking reveals the national average is 0.5%. Benchmarking reveals the true performance gap.",
        whyWrong: {
          A: "The AAAHC guidance specifically calls out benchmarking as part of the QUA.130 process.",
          C: "Benchmarking is recommended for all organizations, not limited to Medicare-certified ones.",
          D: "Benchmarking supplements - it does not replace - internal data collection.",
        },
        operationalContext:
          "Subscribe to a relevant ambulatory surgery outcome database (e.g., NACOR or the ASC Quality Collaboration) to access national benchmarks for your procedure-specific complication and unplanned admission rates.",
      },
    },
    {
      id: "asc_qua_14",
      question:
        "An ASC completes peer review of all surgeons but not of the anesthesia providers. What QUA standard is violated?",
      options: [
        "Only surgeons require peer review - anesthesia providers are reviewed by their own professional boards",
        "QUA.100 requires all physicians, dentists, or health care professionals to be reviewed - anesthesia providers are included",
        "Anesthesia peer review is governed by the American Board of Anesthesiology, not AAAHC",
        "Peer review for anesthesia providers is optional if they hold current board certification"
      ],
      correctIndex: 1,
      explanation:
        "QUA.100 requires that each physician, dentist, or health care professional is reviewed by at least one similarly privileged/licensed peer - this includes all credentialed providers such as anesthesiologists, CRNAs, and other APPs.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The QUA.100 requirement covers all privileged health care professionals - not just surgeons. Anesthesia providers are independently credentialed and must independently receive peer review.",
        whyWrong: {
          A: "Professional board certification and AAAHC peer review serve different purposes - board certification proves training, peer review monitors ongoing practice.",
          C: "AAAHC peer review requirements apply at the facility level, independently of external board review.",
          D: "Board certification does not exempt a provider from facility-based peer review requirements.",
        },
        operationalContext:
          "Include anesthesia providers in the peer review schedule. If contracted anesthesia is used, include peer review of their performance as part of the contract compliance monitoring process.",
      },
    },
    {
      id: "asc_qua_15",
      question:
        "QUA.120.20 requires that clinical care be selected for review on what basis?",
      options: [
        "Only cases with patient complaints are selected for review",
        "Clinical care is selected for review on an ongoing basis",
        "Only randomly selected cases are reviewed - incident cases are excluded",
        "Clinical care is reviewed annually during the recredentialing cycle only"
      ],
      correctIndex: 1,
      explanation:
        "QUA.120.20 requires that clinical care is selected for review on an ongoing basis - not just during credentialing cycles or incident investigations. Ongoing selection means review is a continuous, year-round process.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Ongoing review means the selection process runs continuously throughout the year, not just episodically. This allows for trend detection that point-in-time reviews would miss.",
        whyWrong: {
          A: "Complaint-only review is reactive and misses proactive quality monitoring.",
          C: "Both random case selection and incident review are appropriate - the standard does not exclude either.",
          D: "Annual-only review at recredentialing does not satisfy 'ongoing basis.'",
        },
        operationalContext:
          "Implement a prospective case selection system: each month, randomly select a percentage of each provider's cases for peer review, plus all cases meeting predefined automatic review criteria (complications, readmissions, returns to OR).",
      },
    },
    {
      id: "asc_qua_16",
      question:
        "An ASC's IPC data shows a trend of increasing wound infections, but this data is never shared with the QI committee or linked to peer review findings. What QUA standard is at risk?",
      options: [
        "IPC data is the exclusive domain of the IPC officer - it does not need to go to the QI committee",
        "QUA.220 requires integration of IPC data into the quality management program in a systematic way",
        "QI committees only review patient satisfaction and wait time data",
        "IPC data is reported to the governing body directly and does not require QI committee review"
      ],
      correctIndex: 1,
      explanation:
        "QUA.220 requires that the quality management program links QI activities and infection prevention and control in a systematic way. IPC data (like wound infection trends) must flow into the QI program for analysis and action.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "QUA.220 is the integration standard. An infection trend that is tracked but never shared with the QI committee or used to initiate a QI study represents a missed connection that QUA.220 specifically requires.",
        whyWrong: {
          A: "IPC data is the IPC officer's responsibility to collect, but QUA.220 requires it to be shared and integrated with the QI program.",
          C: "QI committees must review clinical outcomes data including IPC metrics.",
          D: "Governing body reporting is separate from the QI committee review - and does not substitute for integration.",
        },
        operationalContext:
          "Add IPC surveillance results as a standing item on the QI committee agenda. When IPC data identifies a trend, the QI committee should formally link it to peer review data and initiate a QI study if warranted.",
      },
    },
    {
      id: "asc_qua_17",
      question:
        "An ASC's QI program includes study topics that address administrative efficiency but no studies on clinical care outcomes. What does the QUA.160 principle require?",
      options: [
        "Administrative efficiency studies fully satisfy QI study requirements",
        "QI studies must systematically assess and improve the quality of clinical care - clinical outcomes must be included",
        "QI studies only need to address areas cited in the previous AAAHC survey",
        "The mix of study topics is at the organization's complete discretion"
      ],
      correctIndex: 1,
      explanation:
        "QUA.160 requires that the QI program includes studies that systematically assess and improve the quality of clinical care. While administrative studies may also be conducted, clinical care quality must be the core subject of QI activities.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "AAAHC's QI program requirements are fundamentally about clinical care quality. Administrative process improvement is valuable but does not substitute for clinical outcome studies.",
        whyWrong: {
          A: "Administrative studies alone do not satisfy the clinical care focus required by QUA.160.",
          C: "QI study topics should be driven by current organizational data and priorities, not only prior survey findings.",
          D: "While organizations have flexibility in topic selection, clinical care quality must be included.",
        },
        operationalContext:
          "Ensure your annual QI work plan includes at least one study focused on a clinical outcome (e.g., PONV rates, SSI rates, unplanned admissions, wrong-site events). Track baseline, implement intervention, and re-measure.",
      },
    },
    {
      id: "asc_qua_18",
      question:
        "A QI committee meeting minute notes 'SSI rate discussed - 3.2%.' No trend context, no benchmark comparison, and no action taken is documented. Is this QUA.130 compliant?",
      options: [
        "Yes - mentioning the data in minutes demonstrates ongoing monitoring",
        "No - QUA.130 requires evaluation for trends and action when problems are identified, not just data mention",
        "Yes - the committee's expertise makes formal trend analysis unnecessary",
        "No - only written QI studies can satisfy QUA.130 monitoring requirements"
      ],
      correctIndex: 1,
      explanation:
        "QUA.130 requires three steps: data collection, trend evaluation, and action when problems are identified. Simply noting a data point without trend context, benchmark comparison, or action evaluation fails QUA.130.20 and QUA.130.30.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Surveyors look for evidence that committees actually analyzed data - not just heard a number. Minutes should show trend charts, benchmark comparisons, and the committee's decision about whether action is warranted.",
        whyWrong: {
          A: "Mentioning a data point is not the same as evaluating trends or identifying actions.",
          C: "Committee expertise must be demonstrated through documented analysis, not assumed.",
          D: "QUA.130 ongoing monitoring and formal QUA.160 studies are different requirements - but both require documented analysis.",
        },
        operationalContext:
          "Structure committee minutes to include for each metric: current rate, prior period comparison (trend), benchmark if available, whether the rate is within acceptable range, and any action directed. A simple table format works well.",
      },
    },
    {
      id: "asc_qua_19",
      question:
        "What is the significance of QUA.120.30 - that the case selection process applies to all similarly privileged health care professionals?",
      options: [
        "It allows high-volume surgeons to be reviewed more frequently than others",
        "It ensures peer review is systematic and equitable - no provider is exempt from the selection process",
        "It allows providers with clean records to be reviewed less frequently",
        "It only applies to providers who have had prior adverse peer review findings"
      ],
      correctIndex: 1,
      explanation:
        "QUA.120.30 requires that the selection process for care to be reviewed applies to all similarly privileged health care professionals. This prevents selective review that might miss problems with certain providers.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Universal application of the selection process ensures objectivity. If some providers are systematically excluded from case selection, the peer review program is incomplete and may fail to detect performance issues.",
        whyWrong: {
          A: "While high-volume surgeons may generate more cases for selection, the process must apply consistently to all similarly privileged providers.",
          C: "Clean records do not exempt a provider from ongoing peer review - ongoing surveillance is how clean records are confirmed.",
          D: "The selection process applies prospectively to all providers, not retrospectively to those with prior findings.",
        },
        operationalContext:
          "Use a case selection formula that generates review cases for every credentialed provider, regardless of volume or history. Low-volume providers (e.g., a provider who operates once a month) should have all cases reviewed if needed to obtain sufficient data.",
      },
    },
    {
      id: "asc_qua_20",
      question:
        "A new AAAHC v44 ambulatory surgery center has never had a peer review program. During the initial accreditation survey, what is the minimum evidence the surveyor will look for?",
      options: [
        "A written peer review policy only - a new facility cannot have completed reviews yet",
        "Both a written peer review policy AND documented evidence that peer review has been conducted for each privileged provider",
        "Three years of peer review data from previous facilities where the providers worked",
        "A signed attestation from the medical director that peer review is planned"
      ],
      correctIndex: 1,
      explanation:
        "Even at initial survey, AAAHC expects to see that peer review is operational - not just planned. This means documented reviews for credentialed providers, not just a policy. The survey assesses current compliance, not future intentions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Accreditation surveys evaluate current operational compliance. A new organization must have its peer review program operational and producing results before applying for accreditation - not promise to start it post-survey.",
        whyWrong: {
          A: "A written policy alone is not sufficient - documented evidence of completed reviews is required.",
          C: "Prior facility data is not the same as the current facility's peer review program.",
          D: "Attestations and plans are not evidence of operational compliance.",
        },
        operationalContext:
          "For initial accreditation, launch the peer review program at least three to six months before the survey. Conduct peer reviews of all credentialed providers and document results. Present these at the governing body level before applying.",
      },
    },
  ],
};
