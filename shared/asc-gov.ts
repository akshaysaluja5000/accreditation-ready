import type { Level } from "./schema";

export const ascGovLevel: Level = {
  id: "asc_gov",
  module: "asc",
  name: "Governance",
  description: "AAAHC v44 GOV - governing body responsibilities, strategic direction, clinical operations, contracts, and regulatory compliance.",
  icon: "Building2",
  color: "hsl(240, 60%, 50%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "GOV: Governance",
    plainLanguageSummary:
      "The GOV category sets expectations for the governing body's role in ensuring high-quality health care and organizational integrity. The governing body is legally responsible for all operations - clinical and administrative - and must establish strategic direction, define the scope of services, approve contracts, ensure regulatory compliance, and review accreditation requirements at least annually. Specific selective standards address anesthesia, surgical services, energy-emitting devices, laboratory, imaging, dental, and research oversight.",
    keyOperationalExpectations: [
      "The governing body determines the mission, goals, and objectives and evaluates progress annually.",
      "Bylaws, policies, financial management, and legal compliance are established and maintained by the governing body.",
      "The scope of services is formally defined and includes treatments, patient populations, and hours of operation.",
      "All major contracts and arrangements affecting clinical care are approved by the governing body.",
      "Accreditation requirements are reviewed at least annually, with revisions made as needed.",
      "Authority, responsibility, and functions of officers and administrators are clearly defined in writing.",
    ],
    commonRiskPoints: [
      "Governing body minutes do not reflect annual review of accreditation requirements including QI, IPC, and safety programs.",
      "Scope of services document lacks population description or hours of operation.",
      "Major contracts for external services are in place but lack governing body approval documentation.",
      "Anesthesia techniques used are not documented as approved by the governing body.",
    ],
    aaahcStandards: ["GOV.140", "GOV.160", "GOV.170", "GOV.180", "GOV.190", "GOV.200", "GOV.220", "GOV.230", "GOV.240", "GOV.250", "GOV.270"],
  },
  studyMaterial: [
    {
      title: "Who is responsible for the overall direction and legal accountability of the facility?",
      content:
        "The governing body, such as a board of directors or owner-group, is responsible for setting the mission and goals of the facility and making sure they are followed. The governing body also carries the legal responsibility for all operations, including clinical care, financial management, and compliance with laws. This accountability cannot be fully passed off to an administrator or medical director.",
      keyPoint:
        "The governing body sets the direction and is legally accountable for everything that happens at the facility. This responsibility cannot be delegated away entirely.",
    },
    {
      title: "What must be written down about the services your facility provides?",
      content:
        "The governing body must formally document what services the facility offers, which patient populations it serves, and what its hours of operation are. This document must be approved by the governing body and reviewed at least once a year. If telehealth services are offered, those must also be included.",
      keyPoint:
        "The scope of services must describe what is done, who is served, and when the facility is open. All three elements must be written and approved.",
    },
    {
      title: "What oversight is required for contracts and outside service arrangements?",
      content:
        "The governing body must approve all major contracts that affect patient care, such as contracts for radiology reading, laboratory services, or housekeeping. Approval at the time of signing is not enough. The governing body must also confirm on an ongoing basis that contracted services are being provided safely and effectively.",
      keyPoint:
        "Governing body approval of major contracts must include ongoing monitoring, not just a one-time signature.",
    },
    {
      title: "What must the governing body review at least once a year?",
      content:
        "Every year, the governing body must formally review a specific list of topics, including patient rights, the quality improvement program, the infection prevention program, the safety program, emergency preparedness, and the scope of services. Meeting minutes must show that each topic was actually reviewed, not just listed on the agenda.",
      keyPoint:
        "Annual governing body review must cover a defined set of topics. Meeting minutes must document that each topic was reviewed, not just mentioned.",
    },
    {
      title: "Who decides which procedures and types of anesthesia can be performed at your facility?",
      content:
        "The governing body must formally approve which surgical procedures and which types of anesthesia are permitted at the facility. This approval must be based on recommendations from qualified clinical staff. The approved list must exist in writing and must match what is actually being performed.",
      keyPoint:
        "The governing body must approve both the surgical procedures and the anesthesia techniques used. An approved list must be in writing.",
    },
  ],
  questions: [
    {
      id: "asc_gov_01",
      question:
        "GOV.140 requires that the organization be a legally constituted entity. Which document would satisfy this requirement for a corporation?",
      options: [
        "A copy of the organization's AAAHC accreditation certificate",
        "Articles of incorporation",
        "The medical director's credentialing file",
        "The organization's current operating budget",
      ],
      correctIndex: 1,
      explanation:
        "GOV.140 requires documentation of legal constitution - for a corporation, this is the articles of incorporation. For other entity types, acceptable documentation includes articles of organization, partnership agreements, operating agreements, legislative or executive acts, or bylaws (except sole proprietorships).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "GOV.140 lists specific acceptable documents by entity type. Articles of incorporation is the standard formation document for a corporation and directly proves the organization is legally constituted in its state.",
        whyWrong: {
          A: "An accreditation certificate proves accreditation, not legal formation.",
          C: "The medical director's credentials prove clinical qualifications, not legal entity status.",
          D: "A budget is a financial planning document, not proof of legal entity.",
        },
        operationalContext:
          "Keep a certified copy of the articles of incorporation (or equivalent) in an accessible governing body file for surveyor review. Confirm it reflects the current entity name and state of operation.",
      },
    },
    {
      id: "asc_gov_02",
      question:
        "Under GOV.160, what is the governing body's responsibility regarding long-range planning?",
      options: [
        "Long-range plans are delegated to the medical director with no governing body involvement",
        "The governing body formulates long-range plans in accordance with the mission, goals, and objectives",
        "Long-range plans must be reviewed by the state health department before adoption",
        "Long-range planning is only required for ASCs with more than 50 employees",
      ],
      correctIndex: 1,
      explanation:
        "GOV.160.20 requires that the governing body formulates long-range plans in accordance with the mission, goals, and objectives. This is a Universal/Tier 1 standard with full/partial/non-compliance rating, indicating it is a high-weight requirement.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Long-range planning is a core governance function. The governing body must demonstrate that its strategic decisions are tied to the stated mission and goals and evaluated for progress (GOV.160.30).",
        whyWrong: {
          A: "Delegation is permitted under GOV.170 but the governing body retains oversight responsibility - it cannot fully abdicate long-range planning.",
          C: "State approval of long-range plans is not a GOV.160 requirement.",
          D: "GOV.160 applies universally regardless of organization size.",
        },
        operationalContext:
          "Include a strategic plan section in annual governing body meeting agendas and document progress against goals in board minutes.",
      },
    },
    {
      id: "asc_gov_03",
      question:
        "GOV.170.50 requires the governing body to ensure fulfillment of applicable obligations under prevailing laws. Which of the following is explicitly mentioned in this standard?",
      options: [
        "Compliance with the Joint Commission's National Performance Goals (NPGs)",
        "Reporting to the National Practitioner Data Bank",
        "Submission of annual quality reports to CMS",
        "Filing quarterly tax returns with the IRS",
      ],
      correctIndex: 1,
      explanation:
        "GOV.170.50 explicitly lists NPDB reporting among the examples of prevailing laws and regulations the governing body must ensure compliance with, alongside laws addressing disabilities, medical privacy, grievances, fraud and abuse, self-referral, and anti-trust.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The National Practitioner Data Bank is specifically named in GOV.170.50, reflecting its importance in practitioner oversight and patient protection.",
        whyWrong: {
          A: "The Joint Commission's NPSGs apply to TJC-accredited facilities; AAAHC uses its own standards.",
          C: "Annual quality reports to CMS are a separate Medicare/Medicaid requirement not enumerated in GOV.170.50.",
          D: "Tax filing is a legal obligation but not enumerated in GOV.170.50 in the context of health care regulatory compliance.",
        },
        operationalContext:
          "Establish a process for NPDB reporting of adverse privileging actions, malpractice payments, and exclusion events. Document governing body oversight of NPDB compliance in board minutes.",
      },
    },
    {
      id: "asc_gov_04",
      question:
        "GOV.180 requires the scope of services to include three specific elements. Which combination correctly identifies all three?",
      options: [
        "Mission statement, financial projections, and staffing ratios",
        "Treatments/procedures/services provided, population served, and hours of operation",
        "Quality improvement goals, infection control plan, and emergency procedures",
        "Accreditation history, insurance contracts, and patient satisfaction scores",
      ],
      correctIndex: 1,
      explanation:
        "GOV.180 specifically requires documentation of: (1) the treatments, procedures, and services the organization provides; (2) the population served; and (3) the hours of operation. All three elements must be in the governing body-approved scope of services document.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "These three elements define what the organization does, who it serves, and when it operates - the minimum content for a scope of services that surveyors can verify against actual practice.",
        whyWrong: {
          A: "Mission statements relate to GOV.160; financial projections and staffing ratios are not scope of services elements under GOV.180.",
          C: "QI, IPC, and emergency programs are reviewed under GOV.240 but are not scope of services elements.",
          D: "These are performance and administrative items, not scope of services components.",
        },
        operationalContext:
          "Create a concise, governing-body-approved 'Scope of Services' document listing procedure types (e.g., GI endoscopy, orthopedic arthroscopy), the defined patient population, and operating days/hours. Update it when services change.",
      },
    },
    {
      id: "asc_gov_05",
      question:
        "GOV.190.50 requires the governing body to establish, implement, and oversee a risk management program. What must this program specifically include?",
      options: [
        "Only financial risk - clinical risk is managed by the medical director",
        "Review of risk management activities, as part of governing body oversight",
        "Monthly audits of all patient records by a third-party reviewer",
        "Risk management applies only to facilities with prior adverse survey findings",
      ],
      correctIndex: 1,
      explanation:
        "GOV.190.50 requires the governing body to establish, implement, and oversee a risk management program that includes review of risk management activities. This is a Universal/Tier 2 standard, meaning it is clinically focused and high-weight.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Governing body oversight includes actual review of risk management activities - not just approving a policy. The governing body should receive regular risk management reports and document its review in meeting minutes.",
        whyWrong: {
          A: "GOV.190.50 requires the governing body to oversee the risk management program - clinical delegation does not eliminate governing body accountability.",
          C: "Monthly third-party record audits are not required by GOV.190.50.",
          D: "GOV.190.50 applies to all AAAHC-accredited organizations regardless of prior survey history.",
        },
        operationalContext:
          "Build a quarterly risk management report template that goes to the governing body, summarizing incidents, near misses, litigation status, and program updates.",
      },
    },
    {
      id: "asc_gov_06",
      question:
        "How frequently must the governing body meet at minimum under GOV.230?",
      options: [
        "Monthly",
        "Quarterly",
        "At least annually",
        "At least semi-annually",
      ],
      correctIndex: 2,
      explanation:
        "GOV.230 requires the governing body to meet at least annually, or more frequently as determined by the governing body itself, with minutes or other records maintained for the orderly conduct of the organization.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The minimum is annual. However, most accreditation experts and governance best practices call for more frequent meetings - quarterly is common - to stay ahead of compliance requirements.",
        whyWrong: {
          A: "Monthly is not required by GOV.230, though it is permissible.",
          B: "Quarterly is not the stated minimum - the standard says 'at least annually.'",
          D: "Semi-annual is not the stated minimum.",
        },
        operationalContext:
          "Schedule at least one annual meeting dedicated to the GOV.240 review requirements, with interim meetings as needed for significant operational or clinical decisions.",
      },
    },
    {
      id: "asc_gov_07",
      question:
        "GOV.240 requires at least annual governing body review of AAAHC accreditation requirements. Which program is explicitly included in this review list?",
      options: [
        "Employee performance reviews",
        "The emergency and disaster preparedness plan",
        "The facility's annual budget",
        "Third-party billing contractor performance",
      ],
      correctIndex: 1,
      explanation:
        "GOV.240.30.4 explicitly lists the emergency and disaster preparedness plan as one of the key programs the governing body must review at least annually. The full list includes QI, IPC, safety, emergency preparedness, and risk management.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "GOV.240.30 requires review of five specific programs: QI, IPC, safety, emergency and disaster preparedness, and risk management. All must appear as agenda items in the governing body's annual meeting minutes.",
        whyWrong: {
          A: "Employee performance reviews are a human resources function, not a GOV.240 item.",
          C: "Budget review is a financial governance function not enumerated in GOV.240.",
          D: "Billing contractor performance is a GOV.200 contract oversight issue, not a GOV.240 annual review item.",
        },
        operationalContext:
          "Create an annual governing body meeting agenda template that lists each GOV.240 item with checkboxes for completion, and ensure minutes reflect specific review of each item with any actions taken.",
      },
    },
    {
      id: "asc_gov_08",
      question:
        "GOV.200.50 requires that services rendered under major contracts are provided 'in a safe and effective manner.' What does this mean operationally?",
      options: [
        "Contractors must be licensed in the state where services are provided",
        "The governing body must monitor ongoing contractor performance, not just approve the initial contract",
        "All contractors must have AAAHC accreditation themselves",
        "Governing body approval is only needed when contracts exceed $100,000 annually",
      ],
      correctIndex: 1,
      explanation:
        "GOV.200.50 requires ongoing monitoring of contracted services to ensure they are safe and effective - initial contract approval alone is not sufficient. The governing body must have a process for reviewing contractor performance on an ongoing basis.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The standard's phrase 'ensures that services rendered under all major contracts are provided in a safe and effective manner' implies active, ongoing assurance - not a one-time sign-off at contract execution.",
        whyWrong: {
          A: "Licensing may be a contract requirement but it does not fulfill the monitoring requirement of GOV.200.50.",
          C: "AAAHC does not require contractors to be AAAHC-accredited.",
          D: "GOV.200 does not establish a dollar threshold - it applies to all major contracts affecting clinical care.",
        },
        operationalContext:
          "Include a contract performance review section in the annual governing body agenda. For high-risk contracts (anesthesia, lab, radiology), request quarterly performance reports.",
      },
    },
    {
      id: "asc_gov_09",
      question:
        "Under GOV.270, which governing body action is required to authorize anesthesia techniques at an ASC?",
      options: [
        "The anesthesiologist chooses techniques independently based on clinical judgment",
        "The governing body must approve anesthesia techniques upon the recommendation of qualified professional personnel",
        "Anesthesia technique approval is delegated entirely to the state medical board",
        "Only moderate and deep sedation require governing body approval; local anesthesia does not",
      ],
      correctIndex: 1,
      explanation:
        "GOV.270 requires that anesthesia services are limited to techniques approved by the governing body upon the recommendation of qualified professional personnel. The guidance notes this applies to all levels of sedation and anesthesia, including minimal sedation.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Governing body approval of anesthesia techniques is a fundamental patient safety control. The approved technique list, with documentation of the professional recommendation, should appear in governing body minutes or policy.",
        whyWrong: {
          A: "Clinical judgment does not substitute for the required governing body approval process.",
          C: "While state medical boards regulate practitioners, they do not approve specific techniques at specific facilities - that is a governing body function.",
          D: "The guidance note explicitly states GOV.270 applies 'to all organizations involved in the administration of sedation and anesthesia, including those where only local or topical anesthesia is administered.'",
        },
        operationalContext:
          "Maintain a governing body-approved list of authorized anesthesia techniques in your bylaws or a governing body resolution. Have qualified anesthesia personnel recommend updates when new techniques are added.",
      },
    },
    {
      id: "asc_gov_10",
      question:
        "GOV.190.30 requires the governing body to define the pediatric population. Why is this definition required and what must it include?",
      options: [
        "It is required only for facilities that exclusively treat children",
        "The governing body must define the pediatric population and state whether or not this population is included in the scope of services",
        "Pediatric definition is left to the individual practitioners based on their clinical judgment",
        "The AAAHC defines pediatric as under 18 years old for all organizations - no individual definition is needed",
      ],
      correctIndex: 1,
      explanation:
        "GOV.190.30 requires the governing body to define what 'pediatric' means for the organization (which may be based on age, puberty, height/weight, BMI, emergency capabilities, or other criteria per state regulation) and to specify whether this population is within the scope of services.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC v44 guidance notes that organizations define pediatrics based on state regulations or criteria which may include age, puberty, height/weight, BMI, emergency capabilities, or other items - there is no single universal definition.",
        whyWrong: {
          A: "The definition requirement applies to all ASCs - even those that serve primarily adults must define and document whether or not they treat pediatric patients.",
          C: "Individual practitioner judgment is not an acceptable substitute for a governing body definition.",
          D: "AAAHC does not impose a fixed age cutoff; each organization must define it based on state requirements and clinical capabilities.",
        },
        operationalContext:
          "Include a pediatric definition and scope statement in the governing body-approved scope of services. Example: 'This organization defines pediatric patients as those under 18 years of age. Pediatric patients are included in our scope of services for [procedures X, Y, Z].'",
      },
    },
    {
      id: "asc_gov_11",
      question:
        "GOV.220 addresses governing body communication responsibilities. Which of the following is an explicit element of GOV.220?",
      options: [
        "The governing body must distribute meeting minutes to all employees within 30 days",
        "The governing body ensures that marketing and advertising statements are not misleading",
        "The governing body must maintain a social media presence",
        "All external communications must be approved by the medical director",
      ],
      correctIndex: 1,
      explanation:
        "GOV.220.30 specifically requires that the governing body ensures marketing, advertising, and other statements regarding the organization's competence and capabilities are not misleading.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Governance of organizational communications includes oversight of external-facing claims. The governing body must ensure the organization does not overstate its capabilities, credentials, or outcomes in marketing materials.",
        whyWrong: {
          A: "A 30-day minutes distribution timeline is not specified in GOV.220.",
          C: "Social media presence is not a governance requirement under GOV.220.",
          D: "Medical director approval of all external communications is not a GOV.220 element.",
        },
        operationalContext:
          "Include marketing material review in the governing body's annual agenda. Flag any website, brochure, or ad claims about clinical capabilities for verification against actual credentialing and service scope.",
      },
    },
    {
      id: "asc_gov_12",
      question:
        "An ASC uses lithotripsy services. Under GOV.320, who must the governing body designate to oversee these services?",
      options: [
        "A registered nurse with lithotripsy certification",
        "One or more qualified urologists",
        "The facility's risk manager",
        "A biomedical engineer with equipment expertise",
      ],
      correctIndex: 1,
      explanation:
        "GOV.320 requires that the governing body designates one or more qualified urologists to oversee lithotripsy services. This is a selective standard that applies when lithotripsy is among the services offered.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Lithotripsy oversight requires urological expertise. GOV.320 specifies 'qualified urologists' - not just any physician or clinical personnel.",
        whyWrong: {
          A: "Nursing certification, however specialized, is not the qualification specified in GOV.320.",
          C: "Risk managers are administrative professionals, not qualified to oversee a clinical service.",
          D: "Biomedical engineers address equipment maintenance, not clinical service oversight.",
        },
        operationalContext:
          "If your ASC offers lithotripsy, ensure the governing body meeting minutes include the designation of a qualified urologist(s) to oversee the service, with their credentials on file.",
      },
    },
    {
      id: "asc_gov_13",
      question:
        "GOV.240.50 requires governing body review of which process at least annually?",
      options: [
        "The facility cleaning schedule",
        "The appointment and reappointment process for health care professionals",
        "The organization's social media policy",
        "Individual employee payroll records",
      ],
      correctIndex: 1,
      explanation:
        "GOV.240.50 explicitly requires that the appointment and reappointment processes are reviewed as part of the annual governing body review of AAAHC accreditation requirements.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Annual review of the credentialing and privileging process is a fundamental governance oversight function. The governing body must confirm the process is functioning as designed and producing appropriately credentialed staff.",
        whyWrong: {
          A: "Cleaning schedules are operational matters addressed under IPC standards.",
          C: "Social media policy is not a GOV.240 requirement.",
          D: "Payroll records are a human resources and financial matter, not a GOV.240 item.",
        },
        operationalContext:
          "In the annual board meeting, include a credentialing committee report summarizing the appointment and reappointment activities for the year and any issues identified.",
      },
    },
    {
      id: "asc_gov_14",
      question:
        "Under GOV.250, what must be clearly defined by the governing body regarding officers and administrators?",
      options: [
        "Their salary ranges and benefits packages",
        "Their authority, responsibility, and functions as carried out through governing body directives",
        "Their personal liability exposure for clinical decisions",
        "Their social media use policies during working hours",
      ],
      correctIndex: 1,
      explanation:
        "GOV.250 requires that the authority, responsibility, and functions of officers and administrators elected, appointed, or employed to carry out governing body directives are clearly defined by the governing body.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Clear delineation of authority prevents governance gaps and ensures accountability. Surveyors look for job descriptions or bylaws provisions that specify who has authority to make which decisions on behalf of the governing body.",
        whyWrong: {
          A: "Compensation is a human resources and governance matter, but not what GOV.250 specifically requires.",
          C: "Personal liability is a legal matter addressed in corporate law, not GOV.250.",
          D: "Social media use is a policy matter unrelated to GOV.250.",
        },
        operationalContext:
          "Ensure bylaws or governing body resolutions specifically describe the medical director's, administrator's, and quality officer's scope of authority, reporting lines, and delegated functions.",
      },
    },
    {
      id: "asc_gov_15",
      question:
        "An ASC's governing body approved a contract with an outside laboratory. Six months later, reports show the laboratory is frequently missing turnaround time benchmarks. What does GOV.200.50 require at this point?",
      options: [
        "Nothing - the governing body's only responsibility was initial contract approval",
        "The governing body must ensure services are provided safely and effectively, meaning performance issues must be addressed through governing body oversight",
        "The contract must be terminated immediately",
        "GOV.200.50 only applies to clinical care contractors, not laboratory services",
      ],
      correctIndex: 1,
      explanation:
        "GOV.200.50 requires ongoing assurance that contracted services are provided safely and effectively. Sustained turnaround time failures are a patient safety concern that the governing body must address - not ignore because the initial contract was approved.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "GOV.200.50 is an ongoing oversight standard. When contracted services fail performance expectations, the governing body must take corrective action - whether that is a performance improvement plan, contract renegotiation, or contractor replacement.",
        whyWrong: {
          A: "Initial approval is not the end of governing body responsibility - GOV.200.50 requires ensuring ongoing safe and effective service delivery.",
          C: "Immediate termination may be warranted in extreme cases but is not the required first step. Escalating to governing body review and implementing a corrective plan is the appropriate response.",
          D: "Laboratory services are explicitly listed in GOV.200.10 as an example of external service contracts requiring governing body oversight.",
        },
        operationalContext:
          "Build a contract monitoring function into the governing body agenda - review performance reports for all major clinical service contracts at least annually, with a process for escalating persistent failures.",
      },
    },
    {
      id: "asc_gov_16",
      question:
        "GOV.190.40 requires the governing body to ensure that quality of care is evaluated and problems are appropriately addressed. How is this typically evidenced to a surveyor?",
      options: [
        "By the presence of a quality improvement committee with at least 10 members",
        "By governing body meeting minutes documenting receipt and review of quality improvement reports and actions taken",
        "By hiring a dedicated quality officer with advanced clinical degrees",
        "By achieving a patient satisfaction score above 90%",
      ],
      correctIndex: 1,
      explanation:
        "Surveyors look for evidence in governing body meeting minutes that QI reports are received, reviewed, and acted upon. The governing body does not need to manage QI day-to-day, but must receive regular reports and demonstrate oversight.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Minutes are the primary evidence of governing body oversight. They should show that quality data was presented, questions were asked, and actions were directed when problems were identified.",
        whyWrong: {
          A: "Committee size is not a GOV.190.40 requirement.",
          C: "The quality officer's qualifications support program implementation, but governing body oversight is evidenced by documentation of their engagement - not by the officer's credentials.",
          D: "Patient satisfaction scores are one metric but not the standard against which GOV.190.40 compliance is measured.",
        },
        operationalContext:
          "Require the QI committee to produce a quarterly summary report for the governing body. Governing body meeting minutes should reflect discussion, questions, and any directives issued.",
      },
    },
    {
      id: "asc_gov_17",
      question:
        "GOV.210 addresses Medicare/Medicaid program participation. What must the governing body do under this standard?",
      options: [
        "Approve and ensure compliance with CMS contracts and arrangements",
        "Submit annual cost reports to CMS on behalf of the facility",
        "Hire a Medicare compliance officer as a full-time employee",
        "GOV.210 only applies to hospitals, not ambulatory surgery centers",
      ],
      correctIndex: 0,
      explanation:
        "GOV.210 requires that the governing body approves and ensures compliance with contracts or arrangements with CMS if the organization participates in the Medicare/Medicaid program.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Medicare participation involves a specific legal agreement (the Medicare certification) and ongoing compliance obligations. The governing body must approve participation and ensure compliance - not just delegate it to administrative staff.",
        whyWrong: {
          B: "Cost report submission is a financial/administrative function, not what GOV.210 specifically requires of the governing body.",
          C: "A full-time compliance officer is not required by GOV.210.",
          D: "GOV.210 applies to ambulatory surgery centers that participate in Medicare/Medicaid.",
        },
        operationalContext:
          "Ensure the governing body formally approves Medicare/Medicaid participation and receives periodic compliance updates. Document this in board minutes.",
      },
    },
    {
      id: "asc_gov_18",
      question:
        "An ASC uses laser equipment for dermatologic procedures. Under GOV.310, what must the governing body do for each provider using these devices?",
      options: [
        "Ensure each provider has completed the equipment manufacturer's training course",
        "Grant each provider privileges specifically for each energy-emitting device they use",
        "Purchase liability insurance covering all laser procedures",
        "Post warning signs at the entrance to each room where lasers are used",
      ],
      correctIndex: 1,
      explanation:
        "GOV.310 requires the governing body to grant each provider privileges for each energy-emitting device (lasers, light-based technologies, or other energy-emitting equipment) that they use. This is a selective standard that applies to any organization providing surgery or procedures involving such devices.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Device-specific privileges are a governing body function. Each provider must demonstrate training and competency with each specific device - and the governing body formally recognizes this through the privilege granting process.",
        whyWrong: {
          A: "Manufacturer training is a prerequisite for privileges, not a substitute for the governing body's privilege granting action.",
          C: "Insurance is a financial matter, not the governing body function required by GOV.310.",
          D: "Warning signs are an IPC/safety requirement (SAF.320) - not the governing body action required by GOV.310.",
        },
        operationalContext:
          "Add device-specific privilege categories to the credentialing delineation of privileges form (e.g., CO2 laser, Nd:YAG laser) and require documented competency before each new privilege is granted.",
      },
    },
    {
      id: "asc_gov_19",
      question:
        "Under GOV.190, which of the following is a governing body responsibility for clinical operations?",
      options: [
        "Setting the surgical schedule for each week",
        "Establishing policies on patient education and continuing education for staff",
        "Performing monthly chart audits on all surgical cases",
        "Scheduling annual performance reviews for all clinical staff",
      ],
      correctIndex: 1,
      explanation:
        "GOV.190.70 specifically requires the governing body to establish policies on patient education and continuing education for staff. This is a Universal/Tier 2 clinical operations standard.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body establishes policy - it does not manage operations. GOV.190.70 requires a governing body-level policy commitment to patient education and ongoing staff competency development.",
        whyWrong: {
          A: "Surgical scheduling is an operational function, not a governing body responsibility.",
          C: "Chart audits are conducted by QI and clinical staff - not directly by the governing body.",
          D: "Individual employee performance reviews are a management function, not a governing body duty.",
        },
        operationalContext:
          "Ensure the governing body has approved a policy or charter that commits to patient education programs and requires annual continuing education for staff, with documentation of completion.",
      },
    },
    {
      id: "asc_gov_20",
      question:
        "Under GOV.240.70, what action is required after the governing body completes its annual review of accreditation requirements?",
      options: [
        "Submit a compliance report to AAAHC within 30 days",
        "Revisions must be made as needed to maintain compliance",
        "Have all staff re-sign updated policies before the next survey",
        "No action is required unless the survey is within 6 months",
      ],
      correctIndex: 1,
      explanation:
        "GOV.240.70 requires that revisions are made as needed to maintain compliance following the annual review. This closes the loop - the review is not simply an academic exercise but must result in documented updates when gaps are identified.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The annual review is only meaningful if it produces action. GOV.240.70 makes explicit that the governing body must revise policies, programs, or procedures wherever the review identifies deficiencies.",
        whyWrong: {
          A: "AAAHC does not require a 30-day post-review compliance report from the organization.",
          C: "Staff re-signing is appropriate when policies change, but is not the specific GOV.240.70 requirement.",
          D: "Annual review and revision are required regardless of survey timing.",
        },
        operationalContext:
          "Build an action item tracker into the annual review process. Each identified gap becomes a corrective action with an owner, timeline, and verification step. Document completion in subsequent board minutes.",
      },
    },
  ],
};
