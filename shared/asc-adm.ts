import type { Level } from "./schema";

export const ascAdmLevel: Level = {
  id: "asc_adm",
  module: "asc",
  name: "Administration",
  description: "AAAHC v44 ADM - administrative structure, staffing, personnel records, training, and organizational policies.",
  icon: "ClipboardList",
  color: "hsl(190, 70%, 40%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "ADM: Administration",
    plainLanguageSummary:
      "The ADM category sets expectations for how an ambulatory surgery center manages its administrative operations. This includes organizational structure, staffing adequacy, personnel records, orientation and training, performance evaluations, and policies and procedures. The governing body must ensure sufficient personnel are available, appropriately trained, and that the organization maintains documentation proving competency and compliance. Administrative systems must support safe, high-quality patient care.",
    keyOperationalExpectations: [
      "An organizational chart clearly defines reporting relationships and authority.",
      "Personnel are sufficient in number and qualifications for the services provided.",
      "All personnel have documented orientation, job-specific training, and annual competency verification.",
      "Personnel files contain licensure/certification verification, orientation records, performance evaluations, and health records.",
      "Written policies and procedures are current, accessible, and reviewed at defined intervals.",
      "Staff are oriented to and demonstrate knowledge of emergency procedures.",
    ],
    commonRiskPoints: [
      "Personnel files lack documentation of current licensure - licenses lapsed without detection.",
      "Orientation records are incomplete for clinical staff hired within the past 12 months.",
      "Policies have not been reviewed or updated within the organization's stated review cycle.",
      "Staffing levels are not formally evaluated against patient volume and case complexity.",
    ],
    aaahcStandards: ["ADM.100", "ADM.110", "ADM.120", "ADM.130", "ADM.140", "ADM.150", "ADM.160", "ADM.170", "ADM.180"],
  },
  studyMaterial: [
    {
      title: "What must be documented when your facility notifies the accreditation body of a significant change?",
      content:
        "The facility must send written notification to AAAHC within 15 calendar days when significant events occur, such as changes in ownership, major changes in services offered, or a patient death that raises a quality concern. If you are not sure whether something needs to be reported, report it and let AAAHC decide. Missing a required notification is itself a compliance problem.",
      keyPoint:
        "Notification must be in writing and sent within 15 calendar days of the significant event. When in doubt, report it.",
    },
    {
      title: "What can you say publicly about your facility's accreditation?",
      content:
        "A facility can only claim to be accredited if the specific site and services are covered by a current, active accreditation. You cannot advertise one location as accredited if a different location holds the accreditation. You also cannot continue to claim accreditation after the accreditation period has ended.",
      keyPoint:
        "Public claims about accreditation must exactly match what is covered by the current active accreditation. Overstating coverage is a compliance violation.",
    },
    {
      title: "What must a facility's administrative policies and personnel files include?",
      content:
        "Written policies must govern how the organization operates, and personnel files must show that every staff member has the qualifications, experience, and current licenses required for their job. Every position must have a written job description. Important organizational documents like governing body meeting minutes and corporate records must be securely stored.",
      keyPoint:
        "Administrative policies, written job descriptions, documented qualifications in personnel files, and secured organizational records are all required.",
    },
    {
      title: "What financial controls must the facility have in writing?",
      content:
        "Written policies must cover how the facility tracks its assets, manages accounts receivable and payable, handles cash, manages unpaid accounts, and controls supplies and equipment. These financial controls protect the organization and must be in writing. Verbal financial practices are not sufficient.",
      keyPoint:
        "Five areas of financial controls must be covered in writing: accounting, receivables and payables, cash handling, collections, and supply management.",
    },
    {
      title: "What topics must be covered during staff orientation?",
      content:
        "Every new employee must receive orientation that covers patient rights, workplace violence, safety including fire and sharps injury prevention, emergency preparedness, infection prevention including bloodborne pathogens, incident reporting, and patient privacy. This orientation must be completed and documented within 30 days of the employee's start date. Annual training on these same topics must also be documented.",
      keyPoint:
        "Seven specific topics must be covered in orientation. Completion must be documented within 30 days of hire, and annual refreshers must also be documented.",
    },
    {
      title: "What does the facility need to do to ensure it has enough qualified staff?",
      content:
        "All staff who provide patient care must be appropriately qualified for their role and have documented supervision when required. The facility must also confirm through observation and interviews that there are enough trained staff to safely handle the number and complexity of patients being cared for. Documentation must support both the qualifications and the supervision arrangements.",
      keyPoint:
        "Three things must be demonstrated for all clinical staff: appropriate qualifications, appropriate supervision, and sufficient numbers confirmed through observation.",
    },
  ],
  questions: [
    {
      id: "asc_adm_01",
      question:
        "An AAAHC surveyor asks for the organizational chart. The administrator says relationships are 'well understood by all staff' but there is no written document. What is the compliance issue?",
      options: [
        "There is no compliance issue - verbal understanding meets ADM requirements",
        "The organizational structure must be defined and documented in writing",
        "Only organizations with more than 25 employees need organizational charts",
        "Organizational charts are only required if the governing body has more than five members",
      ],
      correctIndex: 1,
      explanation:
        "ADM standards require that the organizational structure be clearly defined, establishing reporting relationships and authority. Verbal understanding is not documented evidence - surveyors must be able to review a written organizational structure.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "An organizational chart provides objective evidence of the reporting structure. Without it, the surveyor cannot verify that lines of authority are clear and that the organizational structure is rationally designed to support safe operations.",
        whyWrong: {
          A: "Verbal understanding cannot be verified or audited - it is not a compliance basis.",
          C: "ADM standards do not establish an employee-count threshold for organizational charts.",
          D: "Governing body size is irrelevant to the organizational chart requirement.",
        },
        operationalContext:
          "Maintain an approved, dated organizational chart showing all positions, reporting lines, and the relationship to the governing body. Update it when positions or reporting structures change.",
      },
    },
    {
      id: "asc_adm_02",
      question:
        "A newly hired operating room nurse begins patient care orientation on day one. Under ADM.130, what must be documented before she provides independent patient care?",
      options: [
        "Only the date of hire and department assignment",
        "Orientation to the organization, job duties, emergency procedures, and applicable policies - before independent practice",
        "Only the proof of RN licensure",
        "A 90-day probationary performance evaluation",
      ],
      correctIndex: 1,
      explanation:
        "ADM orientation requirements mandate documented orientation to the organization's policies, job-specific duties, emergency procedures, and key safety practices before the employee provides independent care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Orientation documentation must be in place before independent practice begins. This includes general organizational orientation AND role-specific clinical orientation.",
        whyWrong: {
          A: "Date of hire and assignment are administrative records, not orientation documentation.",
          C: "Licensure verification is required but does not substitute for completed orientation documentation.",
          D: "Performance evaluation at 90 days is a follow-up activity - it does not satisfy orientation requirements.",
        },
        operationalContext:
          "Use a structured orientation checklist that is signed off by the employee and their supervisor or trainer as each element is completed. File the completed checklist in the personnel record before the employee goes independent.",
      },
    },
    {
      id: "asc_adm_03",
      question:
        "The administrator discovers that two clinical staff members have RN licenses that expired 45 days ago. What ADM requirement has been violated?",
      options: [
        "Staff may practice on expired licenses for up to 90 days while renewal is pending",
        "Personnel files must contain current licensure, and the organization must track expiration dates to prevent lapsed licenses",
        "Only physicians are required to maintain current licensure under ADM standards",
        "License tracking is a state board responsibility, not an organizational requirement",
      ],
      correctIndex: 1,
      explanation:
        "ADM standards require personnel files to contain documentation of current licensure and the organization to maintain a system to track expiration dates and prevent staff from practicing on lapsed credentials.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Operating with staff on lapsed licenses is both a regulatory violation and a patient safety failure. AAAHC ADM standards require documented current licensure - and surveyors will check.",
        whyWrong: {
          A: "There is no 90-day grace period in AAAHC standards for practicing on an expired license.",
          C: "ADM licensure requirements apply to all licensed personnel, not only physicians.",
          D: "While state boards issue and renew licenses, the organization bears responsibility for ensuring its staff hold current credentials.",
        },
        operationalContext:
          "Implement a license expiration tracking spreadsheet or HR system alert that notifies supervisors 90, 60, and 30 days before expiration. Do not allow staff to work on the expiration date or after without proof of renewal.",
      },
    },
    {
      id: "asc_adm_04",
      question:
        "A staff member's annual competency verification was due six months ago and has not been completed. The employee has been practicing without a current competency assessment. What is the AAAHC finding?",
      options: [
        "Annual competencies are optional if the employee has been with the organization for more than three years",
        "This is a deficiency - ADM requires documented ongoing competency verification at defined intervals",
        "Only new employees need competency verification; experienced staff are exempt",
        "This is only a finding if the employee made a clinical error in the past year",
      ],
      correctIndex: 1,
      explanation:
        "ADM standards require ongoing competency verification at the organization's defined intervals (typically annually). Gap in documentation regardless of employee tenure is a compliance deficiency.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Competency verification is ongoing - it confirms current ability to perform required job functions, not just initial ability at hire. Long-tenured employees still need annual verification.",
        whyWrong: {
          A: "Tenure does not exempt employees from competency requirements.",
          C: "Initial competency verification is required at hire; ongoing verification is required annually (or per organizational policy).",
          D: "Competency requirements exist independently of whether errors occurred - they are preventive, not reactive.",
        },
        operationalContext:
          "Build competency schedules into the HR system with due-date alerts. A simple rule: all competencies must be completed before the employee's hire anniversary date each year.",
      },
    },
    {
      id: "asc_adm_05",
      question:
        "An ASC's medication storage policy was last reviewed and approved 27 months ago. The organization's policy management system calls for annual review. What does this represent under ADM standards?",
      options: [
        "A minor documentation gap that can be resolved after the survey",
        "A compliance deficiency - policies must be reviewed at the interval defined by the organization's own policy management system",
        "Acceptable - AAAHC only requires policy review every 3 years",
        "Only clinical policies require annual review; administrative policies may be reviewed less frequently",
      ],
      correctIndex: 1,
      explanation:
        "ADM requires policies to be current and reviewed at the organization's own defined interval. If the organization's standard calls for annual review, failing to review for 27 months is a deficiency - organizations are held to their own stated standards.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Surveyors check both whether policies exist and whether they have been reviewed per the organization's own policy management system. Exceeding your own review deadline is a self-imposed compliance failure.",
        whyWrong: {
          A: "Post-survey remediation does not satisfy the standard - the review must be current at the time of survey.",
          C: "AAAHC does not specify a universal policy review interval - organizations set their own, but must then follow it.",
          D: "No ADM category distinction between clinical and administrative policy review intervals is made.",
        },
        operationalContext:
          "Set policy review reminders in your document management system 60 days before expiration. Assign each policy an owner responsible for initiating review on time.",
      },
    },
    {
      id: "asc_adm_06",
      question:
        "Under ADM standards, what must be included in an employee's health records kept by the organization?",
      options: [
        "Only the pre-employment physical examination results",
        "Health screening records relevant to the employee's role, including immunization status and any required baseline testing",
        "Full medical histories including all past diagnoses",
        "Health records are an employee's private information and may not be kept by the employer",
      ],
      correctIndex: 1,
      explanation:
        "ADM personnel health records must include health screening relevant to the role - such as immunization status, TB testing, and any occupational health baseline assessments. Full medical history is not required; health records must be maintained separately from the general personnel file and kept confidential.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Occupational health records for healthcare workers include role-specific elements: immunization documentation, TB screening, and any exposure-related assessments required by OSHA. These are separate from the general HR file.",
        whyWrong: {
          A: "Pre-employment physicals alone are not sufficient - ongoing health monitoring (annual TB, flu vaccination status) must be maintained.",
          C: "Full medical histories are private information the employer is not permitted to request or retain.",
          D: "Employers are permitted and required to maintain occupational health records - separate from the general personnel file, with appropriate confidentiality protections.",
        },
        operationalContext:
          "Maintain a separate, locked health records file for each employee. Contents: immunization records, TB screening, exposure incident documentation, and any occupational health assessments required by your role category.",
      },
    },
    {
      id: "asc_adm_07",
      question:
        "An ASC is opening a new on-site GI endoscopy suite. Under ADM.110, what must the organization assess before opening the new suite?",
      options: [
        "The profitability of the new service line",
        "Whether personnel are sufficient in number and qualifications to support the new endoscopy service safely",
        "Whether the physical space meets architectural standards only",
        "Staffing for new service lines is assessed only after the first six months of operation",
      ],
      correctIndex: 1,
      explanation:
        "ADM.110 requires ongoing assessment of personnel sufficiency - in number AND qualifications - for all services provided. Before opening a new service line, the organization must verify it has enough appropriately trained staff to provide care safely.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Adding a service without assessing staffing adequacy is a patient safety risk and an ADM deficiency. The assessment must address both headcount and whether existing staff have the specific competencies for endoscopy.",
        whyWrong: {
          A: "Profitability assessment is a business function, not an ADM requirement.",
          C: "Physical space requirements are addressed in FAC standards - ADM focuses on personnel.",
          D: "Staffing assessment must occur before a new service opens, not six months after.",
        },
        operationalContext:
          "Before any new service launch, conduct a staffing gap analysis: what competencies does the new service require, which current staff have them (with documentation), and what training do others need.",
      },
    },
    {
      id: "asc_adm_08",
      question:
        "Staff at an ASC tell a surveyor they know the fire evacuation plan but cannot demonstrate the location of the nearest pull station or the correct phone number to call. What ADM requirement is not being met?",
      options: [
        "Fire safety knowledge is optional for administrative staff",
        "ADM orientation requirements include emergency procedures, and staff must demonstrate knowledge of those procedures",
        "Fire safety training is only required for facilities with an inpatient component",
        "The surveyor cannot test emergency knowledge - only observe drills",
      ],
      correctIndex: 1,
      explanation:
        "ADM orientation and training requirements mandate that all personnel receive training on emergency procedures and demonstrate knowledge of those procedures. Staff being unable to demonstrate basic emergency information is a direct ADM finding.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Emergency preparedness is explicitly listed as an orientation element under ADM. Staff must not only receive the training - they must be able to demonstrate knowledge when asked.",
        whyWrong: {
          A: "Emergency training applies to all staff, including administrative personnel.",
          C: "ADM emergency training requirements apply to all ASCs.",
          D: "Surveyors absolutely may interview staff to test knowledge of emergency procedures - this is a standard survey technique.",
        },
        operationalContext:
          "Include a brief emergency knowledge quiz in orientation completion verification. Conduct unannounced emergency knowledge spot-checks during drills and document results in the drill report.",
      },
    },
    {
      id: "asc_adm_09",
      question:
        "Under ADM standards, how should an ASC handle a situation where a new piece of clinical equipment is added to the facility?",
      options: [
        "Equipment can be put into service immediately based on manufacturer instructions",
        "Training on the new equipment must be provided to all intended operators before it is used in patient care",
        "Only the medical director needs equipment training - other staff learn on the job",
        "Training is only required for equipment with specific FDA-required training programs",
      ],
      correctIndex: 1,
      explanation:
        "ADM training requirements include orientation to new equipment before it is placed into patient care service. SAF.230 further reinforces this, requiring that a designated person ensures clinical education occurs prior to use and that vendor representatives are not the sole training source.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Using clinical equipment in patient care without documented operator training is both an ADM and a SAF deficiency. The training must be completed and documented before the first patient use.",
        whyWrong: {
          A: "Manufacturer instructions supplement, but do not substitute for, formal staff training.",
          C: "All intended operators - not just the medical director - must receive training.",
          D: "ADM training requirements apply to all new clinical equipment, not just FDA-designated training programs.",
        },
        operationalContext:
          "Create a new equipment checklist: (1) identify all intended operators, (2) arrange training (vendor + in-house clinical educator), (3) document training completion with signature, (4) schedule competency verification, (5) clear for patient use.",
      },
    },
    {
      id: "asc_adm_10",
      question:
        "An ASC's administrator leaves suddenly and a temporary manager is brought in. Under ADM standards, what is the most important documentation step for the temporary manager?",
      options: [
        "No documentation is needed for temporary staff if they are from a staffing agency",
        "The temporary manager's authority, responsibilities, and qualifications must be documented, including any required licensure or certification",
        "Temporary managers are exempt from ADM documentation requirements for the first 90 days",
        "Only clinical staff require documentation - administrative temporary staff are exempt",
      ],
      correctIndex: 1,
      explanation:
        "ADM documentation requirements apply to all personnel including temporary staff. The temporary manager's role authority, qualifications, and any required credentials must be on file, just as for permanent employees.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Surveyors do not distinguish between permanent and temporary personnel for documentation purposes. All personnel performing services must have appropriate documentation of their role and qualifications.",
        whyWrong: {
          A: "Staffing agency origin does not exempt an employee from organizational documentation requirements.",
          C: "There is no 90-day temporary staff exemption in AAAHC ADM standards.",
          D: "ADM documentation requirements apply to all personnel regardless of clinical or administrative role.",
        },
        operationalContext:
          "When bringing in temporary staff, collect their credentials and qualifications before they start. Create a temporary personnel file and include it in your master personnel record system.",
      },
    },
    {
      id: "asc_adm_11",
      question:
        "A nurse at an ASC is assigned to perform sterile processing tasks she has never done before. What ADM requirement is relevant?",
      options: [
        "She can learn sterile processing techniques from observing an experienced colleague without formal documentation",
        "She must receive documented training and demonstrate competency in sterile processing before performing these tasks independently",
        "Sterile processing training only applies to employees with the specific job title of 'sterile processing technician'",
        "ADM competency requirements do not apply to cross-trained staff",
      ],
      correctIndex: 1,
      explanation:
        "ADM training requirements apply to any new task assigned to personnel - not just initial job training. A nurse cross-trained into sterile processing must receive documented training in those specific tasks and demonstrate competency before performing them independently.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Competency must be task-specific and role-specific. Adding new tasks to an employee's responsibilities triggers a new training and competency documentation requirement.",
        whyWrong: {
          A: "Observational learning without documentation is not sufficient - training content, date, trainer, and employee demonstration of competency must be recorded.",
          C: "ADM training requirements follow the task, not the job title.",
          D: "Cross-training does not exempt employees from training and competency requirements.",
        },
        operationalContext:
          "Whenever an employee takes on new tasks (cross-training, expanded roles), create a task-specific training record. Include: training content, date, trainer, and signed employee competency validation.",
      },
    },
    {
      id: "asc_adm_12",
      question:
        "An ASC operates Monday through Friday, 7 AM to 5 PM. A patient calls Saturday evening with a post-operative concern. Under ADM standards, what must the facility have in place?",
      options: [
        "Patients accept inherent limitations of outpatient care - no after-hours coverage is required",
        "Documentation of how clinical coverage or advice is provided after normal working hours, as required by the organization's policies",
        "A contracted hospital must accept all after-hours calls from ASC patients",
        "After-hours care is only required for facilities that use general anesthesia",
      ],
      correctIndex: 1,
      explanation:
        "ADM (and SAF.100.40/50) requires documentation of coverage arrangements and clinical advice processes after normal working hours. Patients must be able to reach clinical guidance after hours, and the organization must document how this is provided.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Post-operative patients may have urgent questions or complications after hours. The organization must have a documented process - and patients must be informed of how to access after-hours care (PRR.200.20).",
        whyWrong: {
          A: "After-hours coverage is a documented requirement, not an optional convenience.",
          C: "Contracted hospital coverage may be one approach but is not specifically required - the standard is that a documented process exists.",
          D: "After-hours care provisions apply regardless of anesthesia type.",
        },
        operationalContext:
          "Establish an on-call protocol for the medical director or designated provider to receive after-hours clinical questions. Document the process in policy and communicate the after-hours contact number to patients at discharge.",
      },
    },
    {
      id: "asc_adm_13",
      question:
        "An employee performance evaluation was last completed 18 months ago. The organization's policy requires annual evaluations. What is the compliance issue?",
      options: [
        "Performance evaluations are optional under AAAHC standards",
        "Failing to complete evaluations at the organization's own required interval is an ADM deficiency",
        "Evaluations are only required for employees in their first year",
        "Annual evaluations are only required for clinical staff, not administrative employees",
      ],
      correctIndex: 1,
      explanation:
        "ADM personnel management standards require that organizations follow their own defined processes, including evaluation schedules. Failing to complete evaluations per the organization's own policy is a self-created compliance gap.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "AAAHC holds organizations to their own stated policies. If your policy says annual evaluations, the absence of a current evaluation is a deficiency regardless of the employee's performance history.",
        whyWrong: {
          A: "While AAAHC does not specify an exact evaluation frequency, it requires organizations to follow their own personnel management systems.",
          C: "Annual evaluations apply throughout employment, not just the first year.",
          D: "Personnel management requirements apply to all staff, clinical and administrative.",
        },
        operationalContext:
          "Schedule performance evaluations by anniversary date. Supervisors should receive a 30-day advance notice from HR, with the evaluation due before the anniversary date. Document completion in the personnel file.",
      },
    },
    {
      id: "asc_adm_14",
      question:
        "ADM standards require that on-call arrangements for clinical coverage are documented. Which document typically contains this information?",
      options: [
        "The patient registration form",
        "The organization's written policies for after-hours coverage, including call schedules",
        "The facility's architectural plans",
        "The governing body meeting minutes alone",
      ],
      correctIndex: 1,
      explanation:
        "Written policies must document the process for after-hours coverage, including how the call schedule is organized, who is responsible for providing coverage, and how patients can reach a clinician after hours.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Call schedule documentation is a policy and administrative record requirement. The policy must describe the process; actual call schedules should be maintained as operational records showing current coverage assignments.",
        whyWrong: {
          A: "Patient registration forms capture patient information, not organizational coverage processes.",
          C: "Architectural plans address physical facility requirements.",
          D: "Board minutes may reference coverage policy approval but are not where call schedules are maintained.",
        },
        operationalContext:
          "Maintain a written after-hours coverage policy and post current monthly call schedules in a readily accessible location for staff. Document the after-hours phone number in both the policy and patient discharge instructions.",
      },
    },
    {
      id: "asc_adm_15",
      question:
        "Under ADM, what is the significance of 'primary source verification' of a clinical employee's license?",
      options: [
        "It means accepting a photocopy of the license provided by the employee",
        "It means verifying the license directly with the issuing state licensing board, not solely relying on the employee's representation",
        "Primary source verification is only required for physicians, not nurses or technicians",
        "Primary source verification is optional if the employee has worked at the facility for more than five years",
      ],
      correctIndex: 1,
      explanation:
        "Primary source verification means confirming licensure directly with the issuing authority (the state licensing board) rather than relying solely on copies or attestations from the employee. This ensures the license is current, in good standing, and accurately represented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Primary source verification eliminates the risk of forged or altered documents. Licensing boards typically provide online license verification portals that make this straightforward.",
        whyWrong: {
          A: "A photocopy is not primary source verification - the employee controls what they copy.",
          C: "Primary source verification applies to all licensed and certified personnel.",
          D: "Tenure does not eliminate the need for verified, current credentials.",
        },
        operationalContext:
          "Verify each clinician's license through the state licensing board's online portal at initial hire and at each renewal. Print and date the verification screen and file it in the personnel record.",
      },
    },
    {
      id: "asc_adm_16",
      question:
        "An ASC's policies address the clinical side of operations but have no written policies for administrative functions such as billing disputes, visitor management, or vendor access. Is this a compliance concern under ADM?",
      options: [
        "No - ADM only requires clinical policies; administrative policies are optional",
        "Yes - ADM requires written policies covering all aspects of operations, including administrative functions",
        "Only billing policies are required for Medicare-participating ASCs",
        "Administrative policies must only be in place if the organization has received a patient complaint about those issues",
      ],
      correctIndex: 1,
      explanation:
        "ADM requires comprehensive written policies for all aspects of the organization's operations. Administrative functions - visitor management, vendor access, billing disputes - are part of the operational fabric and must be covered by written policy.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "AAAHC takes a whole-organization view of policy requirements. Gaps in administrative policies can affect patient safety (e.g., uncontrolled vendor access to patient care areas) and organizational integrity.",
        whyWrong: {
          A: "ADM has no clinical-only exemption for policy requirements.",
          C: "Billing dispute policies are one example, but the requirement is broader - all operational functions need written policies.",
          D: "Policies are proactive requirements, not reactive responses to complaints.",
        },
        operationalContext:
          "Conduct an annual policy inventory to identify gaps. Common administrative policy gaps include vendor and visitor management, media inquiries, and social media use. Draft and approve policies for any missing areas.",
      },
    },
    {
      id: "asc_adm_17",
      question:
        "A new anesthesia machine is delivered to the ASC. The vendor representative provides a 30-minute walkthrough for one nurse and one anesthesiologist. Other OR staff receive no formal training. What standard is at risk?",
      options: [
        "Only the anesthesiologist's training matters for equipment compliance",
        "SAF.230 and ADM training requirements are at risk - vendor representatives cannot be the sole source of training, and all intended operators must be trained",
        "Equipment training is the vendor's responsibility, not the organization's",
        "Training documentation is only required after the first patient is treated with the equipment",
      ],
      correctIndex: 1,
      explanation:
        "SAF.230 specifically prohibits vendors from being the sole source of clinical education for new equipment. All intended operators must receive training, and a designated person within the organization must ensure education occurs before clinical use.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "SAF.230 has two key requirements: (1) a designated organizational person is responsible for ensuring clinical education occurs before use, and (2) vendors cannot be the sole training source. Both were violated in this scenario.",
        whyWrong: {
          A: "All intended operators - not just the anesthesiologist - must be trained on equipment they will use.",
          C: "Organizational responsibility for training cannot be delegated entirely to vendors.",
          D: "Training must be complete before the first patient use - not after.",
        },
        operationalContext:
          "For any new equipment: identify all staff who will operate or interact with it, supplement vendor training with an organizational clinical educator's review, document training for each staff member, and clear for use only after all intended operators are trained.",
      },
    },
    {
      id: "asc_adm_18",
      question:
        "How should an ASC handle a policy that becomes outdated due to a change in state regulation?",
      options: [
        "Wait until the next annual review cycle to update the policy",
        "Update the policy promptly to reflect the regulatory change and ensure staff are notified of the revision",
        "Regulations supersede policies automatically - no policy update is needed",
        "The governing body must vote on all regulatory-driven policy changes at their next meeting",
      ],
      correctIndex: 1,
      explanation:
        "ADM standards require policies to be current and revised when regulations, standards, or practices change. A known regulatory change that makes a policy outdated requires prompt revision - not waiting for the next scheduled review.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Policy management requires responsiveness to regulatory changes. An outdated policy that conflicts with current law is a compliance risk even if it was recently reviewed - organizations must act on known changes.",
        whyWrong: {
          A: "Annual review cycles are for routine refreshes - regulatory changes require immediate action.",
          C: "Regulations do not automatically update internal policies. Staff follow policies; policies must align with regulations.",
          D: "While governing body approval may be needed for significant policy changes, urgent regulatory compliance should not wait for a scheduled board meeting.",
        },
        operationalContext:
          "Subscribe to state health department regulatory updates and designate a compliance officer to monitor changes. Establish an expedited policy update process for regulatory-driven revisions that does not require waiting for the full annual review.",
      },
    },
    {
      id: "asc_adm_19",
      question:
        "An ADM surveyor asks to see documentation that staff are aware of the organization's patient rights policies. What is the best form of evidence?",
      options: [
        "The organization's posted patient rights notice in the waiting room",
        "Signed acknowledgments in personnel files confirming receipt and review of patient rights policies, plus training records",
        "A verbal statement from the administrator that all staff were trained at orientation",
        "The date stamp on the most recently updated patient rights policy document",
      ],
      correctIndex: 1,
      explanation:
        "ADM requires documentation that policies are communicated to and understood by staff. The best evidence is a combination of signed acknowledgments in personnel files (proving communication) and training records (proving instruction occurred).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documentation must prove two things: (1) the policy exists and was provided to staff, and (2) staff received training on its contents. Signed acknowledgments address (1); training records address (2).",
        whyWrong: {
          A: "Patient-facing posting is a PRR requirement - it does not demonstrate staff awareness of the policy.",
          C: "Verbal statements from administrators are not verifiable by a surveyor.",
          D: "A timestamp on the policy proves when it was last updated, not whether staff were informed.",
        },
        operationalContext:
          "For each policy update, generate a staff notification memo. Require employees to sign and date an acknowledgment of receipt. File acknowledgments in personnel files or a central policy acknowledgment log.",
      },
    },
    {
      id: "asc_adm_20",
      question:
        "An ASC's administrator is solely responsible for all clinical operations, administrative management, quality oversight, and staff scheduling. No delegation of authority has been documented. What risk does this create?",
      options: [
        "No risk - a capable administrator can manage all these functions without documented delegation",
        "Lack of documented delegation creates a governance and continuity risk - if the administrator is unavailable, no one has clear authority to act",
        "Only large ASCs need documented delegation of authority",
        "Delegation documentation is only required when the administrator is away on leave",
      ],
      correctIndex: 1,
      explanation:
        "ADM standards require that authority and responsibility are clearly defined and documented. Undocumented centralization of authority creates succession and continuity risks - and makes it impossible for surveyors to verify organizational governance.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Governance requires clear, documented authority. If an administrator is incapacitated, documented delegation ensures operations continue safely. Without it, the organization is one absence away from a leadership vacuum.",
        whyWrong: {
          A: "Capability is insufficient without documentation. The organizational structure must be verifiable through written records.",
          C: "ADM requirements apply to all ASCs regardless of size.",
          D: "Delegation documentation should be a standing organizational governance document, not a leave-triggered arrangement.",
        },
        operationalContext:
          "Create a written delegation matrix that assigns backup authority for each major function (clinical oversight, quality, finance, HR) when the primary responsible person is unavailable. Include it in the governing body's organizational governance documents.",
      },
    },
  ],
};
