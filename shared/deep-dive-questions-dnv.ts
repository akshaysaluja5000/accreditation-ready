import type { DeepDiveLevel } from "./schema";

export const dnvDeepDiveLevels: DeepDiveLevel[] = [
  {
    id: "dd-dnv-qm",
    name: "Quality Management Deep Dive",
    description: "Expert scenarios on DNV NIAHO QM standards - performance improvement, data collection, and quality committee oversight.",
    icon: "Microscope",
    color: "hsl(217, 91%, 45%)",
    baseLevelId: "dnv_qm",
    questions: [
      {
        id: "dd-dnv-qm-1",
        baseQuestion: "A DNV surveyor reviews your hospital's Performance Improvement (PI) program. They note that the PI committee meets quarterly, collects data on core measures, but has not demonstrated that data analysis leads to measurable improvements. Which finding does this most directly represent under NIAHO QM standards?",
        baseOptions: [
          "The hospital exceeds minimum NIAHO requirements because core measures data is being collected quarterly by a dedicated committee",
          "The hospital fails to demonstrate a systematic PI process with identifiable improvement actions and outcome tracking",
          "Quarterly meetings satisfy NIAHO frequency requirements; no deficiency exists in the committee's structure or meeting schedule",
          "NIAHO requires only data collection and reporting; demonstration of improvement outcomes is a best practice but not mandated",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO QM.1 requires that the PI program not only collect data but demonstrate that analysis drives actions and that outcomes improve. A committee that collects data without traceable improvement cycles fails the 'systematic' and 'outcome' requirements of the standard.",
        baseXp: 15,
        followUps: [
          {
            question: "The PI committee argues that their quarterly reports show steady core measure performance, which proves the program is working. How should this evidence be interpreted under NIAHO QM standards?",
            options: [
          "Yes - at least one frontline representative on a committee roster satisfies NIAHO QM staff involvement requirements for all quality improvement activities and initiatives",
          "No - NIAHO QM.1 requires a documented process for soliciting frontline staff input across all clinical departments, not a single representative on a committee roster",
          "Staff involvement is not explicitly required by NIAHO; only medical staff and leadership committee participation is mandated for quality improvement compliance",
          "Yes - the nurse representative fulfills the requirement; additional involvement is recommended but not required under NIAHO standards for quality management",
        ],
            correctIndex: 2,
            explanation: "NIAHO QM standards require a demonstrable PDSA or equivalent improvement cycle - not just stable metrics. Correlation between a PI program's existence and steady outcomes is not the same as demonstrating the program drives results. Surveyors look for action items, re-measurements, and documented improvement loops.",
            expertXp: 25
          },
          {
            question: "During the tracer, the surveyor asks to see evidence that frontline staff are involved in the PI process, not just leadership. The administrator points to a committee roster that includes one staff nurse. Is this sufficient?",
            options: [
              "Yes - at least one frontline representative satisfies NIAHO QM staff involvement requirements",
              "No - NIAHO QM.1 requires a documented process for soliciting frontline staff input across all clinical departments, not a single representative on a committee roster",
              "Staff involvement is not explicitly required by NIAHO; only medical staff and leadership committee participation is mandated",
              "Yes - the nurse representative fulfills the requirement; additional involvement is recommended but not required under NIAHO"
            ],
            correctIndex: 1,
            explanation: "NIAHO QM standards expect that improvement activities are informed by those closest to care delivery. A single roster entry does not demonstrate a systematic process for frontline engagement. Surveyors look for departmental data submission, unit-level improvement teams, or documented staff feedback loops.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-qm-2",
        baseQuestion: "Your hospital's QM plan states that all departments must submit quality indicators monthly. During a DNV survey tracer, three departments have not submitted data for the past four months. The QM director explains this was an oversight due to staff turnover. What is the most significant compliance concern?",
        baseOptions: [
          "Staff turnover is an acceptable reason for data gaps; NIAHO allows temporary suspensions of reporting during personnel transitions and hiring",
          "The hospital's QM plan is not being implemented as written, demonstrating a gap between policy and practice that is a direct NIAHO QM finding",
          "Only the three departments are deficient; the hospital-wide QM plan remains compliant overall and the issue is localized",
          "The concern is minor since no patient harm resulted from the data gap; NIAHO focuses on outcomes rather than process compliance",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "A QM plan that is not executed as written represents a fundamental NIAHO compliance failure. The plan creates an obligation; gaps between written plans and actual practice are primary survey findings under QM standards regardless of the reason.",
        baseXp: 15,
        followUps: [
          {
            question: "The QM director proposes updating the plan to reduce reporting frequency to quarterly, which would retroactively eliminate the deficiency. How should this be handled?",
            options: [
          "Purchasing and installing the software is sufficient; NIAHO does not require post-implementation monitoring or additional verification of system performance",
          "The hospital must document a corrective action plan, track implementation, verify data completeness for two consecutive quarters, and present this to the PI committee with documented discussion",
          "Staff training records for the new system are the only additional documentation required under NIAHO QM standards for demonstrating compliance",
          "The hospital should request a DNV interim visit to close the finding before the next survey cycle and verify system installation",
        ],
            correctIndex: 1,
            explanation: "A plan change cannot retroactively fix a documented compliance gap. NIAHO surveyors evaluate whether the organization followed its own plan during the survey period. Prospective amendments are appropriate but do not resolve past non-compliance.",
            expertXp: 25
          },
          {
            question: "Following the survey, the hospital implements a new automated data submission system to prevent future lapses. What additional step is most critical for demonstrating NIAHO QM compliance at the next survey?",
            options: [
              "Purchasing and installing the software is sufficient; NIAHO does not require post-implementation monitoring",
              "The hospital must document a corrective action plan, track implementation, verify data completeness for two consecutive quarters, and present this to the PI committee with documented discussion",
              "Staff training records for the new system are the only additional documentation required under NIAHO QM",
              "The hospital should request a DNV interim visit to close the finding before the next survey cycle"
            ],
            correctIndex: 1,
            explanation: "NIAHO expects organizations to demonstrate sustainable corrections. A corrective action plan with tracked implementation, re-measurement, and committee review creates the evidence trail needed to show systemic resolution rather than a one-time fix.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-gov",
    name: "Governance Deep Dive",
    description: "Advanced tracer scenarios covering governing body responsibilities, medical staff oversight, and NIAHO GOV accountability standards.",
    icon: "Microscope",
    color: "hsl(232, 76%, 48%)",
    baseLevelId: "dnv_gov",
    questions: [
      {
        id: "dd-dnv-gov-1",
        baseQuestion: "During a DNV governance tracer, the surveyor asks the board chair how the governing body ensures the quality of care provided. The chair responds that the board reviews quarterly financial reports and the CEO's updates on operations. What critical gap does this response reveal?",
        baseOptions: [
          "No gap - financial oversight is the primary governing body responsibility, and NIAHO GOV standards do not require direct clinical quality oversight by the board",
          "The governing body is not demonstrating direct oversight of clinical quality and patient safety, which is an explicit NIAHO GOV responsibility",
          "The gap is that board meeting minutes were not available for surveyor review; NIAHO requires documentation of all governance discussions and decisions",
          "Operational updates from the CEO satisfy the governing body's NIAHO quality oversight requirement when documented in board meeting minutes",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO GOV standards require the governing body to maintain direct accountability for the quality of care. Delegating all clinical quality oversight to the CEO without direct board engagement with quality metrics, adverse events, and improvement activities is a fundamental governance gap.",
        baseXp: 15,
        followUps: [
          {
            question: "The board chair explains they receive a 'quality dashboard' from the CNO at each meeting. The dashboard shows overall satisfaction scores but does not include sentinel events, infection rates, or PI outcomes. Does this satisfy NIAHO GOV?",
            options: [
          "Yes - the MEC-to-CEO-to-board chain is a compliant governance structure under NIAHO GOV if the CEO is a physician and reports directly to the board chair without filtering quality data",
          "No - NIAHO requires the governing body to have direct mechanisms for receiving quality information and cannot fully delegate this accountability through the CEO",
          "No - NIAHO requires the governing body to have direct mechanisms for receiving quality information and cannot fully delegate this accountability through the CEO",
          "Yes - NIAHO explicitly allows the CEO to serve as the governing body's sole quality liaison and to determine which quality metrics are presented to the board",
        ],
            correctIndex: 1,
            explanation: "NIAHO GOV requires substantive quality oversight. A satisfaction-only dashboard leaves the governing body without visibility into clinical safety, outcomes, and improvement activity - the core elements they are accountable for. Surveyors will probe the depth and completeness of board-level quality information.",
            expertXp: 25
          },
          {
            question: "A hospital argues that their medical executive committee (MEC) handles all quality oversight and reports to the CEO, who then reports to the board. Does this structure satisfy NIAHO governing body accountability?",
            options: [
              "Yes - the MEC-to-CEO-to-board chain is a compliant governance structure under NIAHO GOV",
              "Partially - the structure is compliant only if the board receives direct quality reports from the MEC at least annually without CEO filtering",
              "No - NIAHO requires the governing body to have direct mechanisms for receiving quality information and cannot fully delegate this accountability through the CEO",
              "Yes - NIAHO explicitly allows the CEO to serve as the governing body's sole quality liaison"
            ],
            correctIndex: 2,
            explanation: "While reporting chains are acceptable, NIAHO holds the governing body directly accountable for quality oversight. A chain where quality information is filtered entirely through the CEO, with no direct governing body engagement with quality data or the MEC, does not meet the direct accountability standard.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-gov-2",
        baseQuestion: "A DNV surveyor asks to review the governing body's process for granting, renewing, and revoking medical staff privileges. The hospital presents a policy that states 'all credentialing decisions are delegated to the credentials committee.' What NIAHO concern does this raise?",
        baseOptions: [
          "No concern - full delegation to the credentials committee is the standard model and fully compliant with NIAHO GOV",
          "The governing body may delegate credentialing review but must retain final approval authority and accountability for all privilege decisions",
          "NIAHO requires the full board to individually review each physician's credentials; committee delegation is prohibited",
          "The concern is only procedural; NIAHO does not define the governing body's role in credentialing"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO GOV allows delegation of credentialing review to appropriate committees but the governing body must retain final approval authority. Full delegation without retained accountability violates the standard's requirement that the governing body be the ultimate decision-making body for medical staff membership and privileges.",
        baseXp: 15,
        followUps: [
          {
            question: "The credentials committee presents its recommendations to the MEC, which then forwards an approved list to the board. The board votes to 'accept the MEC report' en bloc without individual review. Is this compliant with NIAHO?",
            options: [
          "Yes - NIAHO requires that any physician facing privilege reduction or revocation have direct access to the governing body for an appeal hearing",
          "No - NIAHO requires a fair hearing process but does not mandate that the governing body be the hearing body; a properly constituted hearing panel satisfies the standard",
          "The physician may appear before the board only if the hospital's bylaws explicitly provide for this; NIAHO is silent on the matter and defers to institutional policy",
          "NIAHO prohibits governing body involvement in individual privilege disputes to avoid conflicts of interest and to protect peer review confidentiality",
        ],
            correctIndex: 2,
            explanation: "En bloc acceptance is compliant when structured properly: the board must formally vote on the recommendations (not just 'accept' a report passively), and individual members must have the right to pull any application for separate review. The key is documented, deliberate governing body action.",
            expertXp: 25
          },
          {
            question: "A physician whose privileges are being reviewed for cause asks to appear before the board directly rather than the credentials committee. Must the governing body hear this appeal under NIAHO?",
            options: [
              "Yes - NIAHO requires that any physician facing privilege reduction or revocation have direct access to the governing body",
              "No - NIAHO requires a fair hearing process but does not mandate that the governing body be the hearing body; a properly constituted hearing panel satisfies the standard",
              "The physician may appear before the board only if the hospital's bylaws explicitly provide for this; NIAHO is silent on the matter",
              "NIAHO prohibits governing body involvement in individual privilege disputes to avoid conflicts of interest"
            ],
            correctIndex: 1,
            explanation: "NIAHO requires a fair hearing and appeals process but does not require the governing body itself to be the hearing body. A properly constituted peer review or hearing panel with documented procedures satisfies the standard. The governing body's role is to ensure the process exists and is followed, not necessarily to conduct the hearing.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ms",
    name: "Medical Staff Deep Dive",
    description: "Expert clinical tracer scenarios on NIAHO MS standards - peer review, credentialing, focused professional practice evaluation, and medical staff governance.",
    icon: "Microscope",
    color: "hsl(168, 74%, 36%)",
    baseLevelId: "dnv_ms",
    questions: [
      {
        id: "dd-dnv-ms-1",
        baseQuestion: "A DNV surveyor performing a medical staff tracer asks to see evidence of Focused Professional Practice Evaluation (FPPE) for a physician who joined the medical staff six months ago. The credentials coordinator states that FPPE is only required for physicians with performance concerns. What is the compliance issue?",
        baseOptions: [
          "No issue - FPPE triggered by performance concerns is the only NIAHO MS requirement for focused evaluation of newly privileged practitioners at any stage of their appointment.",
          "NIAHO MS requires FPPE for all newly granted privileges, not only when concerns arise; the credentials coordinator has an incorrect understanding of the standard",
          "FPPE is required only after the first full year of practice; six months is too early to conduct a meaningful evaluation of the physician's clinical performance and outcomes.",
          "The coordinator is correct; NIAHO requires ONGOING Professional Practice Evaluation (OPPE), not FPPE, for new physicians in the initial credentialing and privileging process.",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO MS standards require FPPE for all new privileges - it is a time-limited, focused review that applies to every newly privileged practitioner regardless of performance. It is not triggered only by concerns. After the FPPE period ends, the practitioner transitions to OPPE.",
        baseXp: 15,
        followUps: [
          {
            question: "The FPPE for the new surgeon consisted of a department chief reviewing three operative reports and signing a form stating 'no concerns identified.' The surveyor finds this insufficient. Why?",
            options: [
          "The department chief's recommendation is sufficient for privilege continuation; no further governance review is required if the chief documents that FPPE objectives were met during the observation period",
          "The credentials committee must review the FPPE data and make a recommendation to the MEC, which forwards to the governing body for final approval of privilege continuation",
          "The MEC alone can approve privilege continuation after FPPE without governing body involvement when FPPE has been completed and documented in accordance with medical staff bylaws and standards",
          "The physician must self-report their FPPE outcomes to the credentials office; peer review is not required for routine privilege continuation decisions following completion of the observation period",
        ],
            correctIndex: 1,
            explanation: "NIAHO requires that FPPE be based on defined performance criteria established in the medical staff bylaws or privileging criteria, with structured data collection. A chief's informal review without pre-defined metrics, case minimums from the bylaws, or direct observation where indicated does not demonstrate a compliant FPPE process.",
            expertXp: 25
          },
          {
            question: "At the end of the FPPE period, the department chief recommends that the surgeon transition to OPPE and continue all current privileges. Who must make the final decision to extend privileges beyond the FPPE period?",
            options: [
              "The department chief's recommendation is sufficient; no further action is required under NIAHO MS",
              "The credentials committee must review the FPPE data and make a recommendation to the MEC, which forwards to the governing body for final approval of privilege continuation",
              "The MEC alone can approve privilege continuation after FPPE; governing body involvement is not required for routine renewals",
              "The physician must self-report their FPPE outcomes to the credentials office; peer review is not required for continuation decisions"
            ],
            correctIndex: 1,
            explanation: "NIAHO requires that privilege decisions - including continuation after FPPE - follow the same governance chain as initial privileging: credentials committee, MEC recommendation, governing body approval. Department chief sign-off alone is not the final authority.",
            expertXp: 30
          }
        ]
      },
      {
        id: "dd-dnv-ms-2",
        baseQuestion: "A DNV surveyor asks to see your hospital's process for peer review of adverse events involving medical staff. The CMO explains that peer review findings are shared with the involved physician but not retained in the credentials file. What NIAHO concern does this practice raise?",
        baseOptions: [
          "No concern - physician privacy protections prohibit storing peer review findings in credentials files under state and federal confidentiality laws protecting the peer review process from disclosure",
          "Peer review findings must inform OPPE and be retained so that patterns can be identified across multiple events; excluding them from the credentials process defeats NIAHO's peer review purpose",
          "NIAHO does not specify how peer review findings must be retained; the CMO's approach is acceptable and aligns with common medical staff practices in hospitals nationally",
          "The concern is limited to events involving patient harm; peer review for near-misses and system issues does not require documentation in credentials files or OPPE tracking",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO requires peer review to feed into the OPPE process. If findings are shared with the physician but not retained for pattern analysis and credential review, the hospital cannot identify recurring performance issues - the central purpose of NIAHO peer review requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "The CMO argues that retaining peer review findings in credentials files creates a legal liability and discourages voluntary reporting. How should this conflict be balanced under NIAHO?",
            options: [
          "Legal liability concerns override NIAHO requirements; the CMO's practice is defensible and NIAHO surveyors must accommodate legitimate concerns raised by hospital legal counsel regarding peer review retention.",
          "Most states provide peer review privilege protections that allow retention of peer review data in protected credentials files; the hospital should work with legal counsel to structure a compliant, protected process rather than eliminate the documentation",
          "NIAHO explicitly exempts peer review documentation from credentials files in states with peer review privilege laws, allowing hospitals to maintain separate confidential peer review databases outside the official credentialing file.",
          "The solution is to use numerical codes instead of physician names in peer review files, satisfying NIAHO while protecting identities and reducing legal liability concerns about discoverable credentialing information.",
        ],
            correctIndex: 1,
            explanation: "State peer review privilege laws exist specifically to allow retention of peer review findings in a protected context. The solution is not to eliminate documentation but to structure the process within available legal protections. NIAHO requires functional peer review that informs credentialing, and legal counsel should help design a compliant framework.",
            expertXp: 25
          },
          {
            question: "Three adverse events involving the same surgeon over 18 months were each reviewed individually and found 'within expectations.' No pattern analysis was performed across the three events. What NIAHO concern does this represent?",
            options: [
              "No concern - each event was reviewed individually and cleared; NIAHO requires only that each event be reviewed, not cross-event analysis",
              "NIAHO OPPE requires aggregate performance data analysis; three individual clearances without pattern review across the same physician's cases fails to identify systemic performance issues",
              "The concern only applies if the events involved the same clinical category; unrelated adverse events do not require pattern analysis",
              "Pattern analysis is required only when four or more events occur within 12 months; three events over 18 months does not trigger this requirement"
            ],
            correctIndex: 1,
            explanation: "NIAHO's OPPE framework requires aggregate performance analysis - patterns across multiple events, procedures, or outcomes. Individual event-by-event clearances that never accumulate into a practitioner-level performance picture fail the standard's intent and can allow systemic performance issues to go unrecognized.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ns",
    name: "Nursing Services Deep Dive",
    description: "Advanced tracer scenarios on NIAHO NS standards - nurse staffing, scope of practice, nursing care planning, and director of nursing accountability.",
    icon: "Microscope",
    color: "hsl(340, 82%, 45%)",
    baseLevelId: "dnv_ns",
    questions: [
      {
        id: "dd-dnv-ns-1",
        baseQuestion: "During a nursing services tracer, a DNV surveyor reviews the ICU staffing grid for the previous 30 days. On seven shifts, the grid shows RN-to-patient ratios above the hospital's own policy limit due to call-outs. Each shift was managed by floating CNAs to cover. What is the primary NIAHO NS finding?",
        baseOptions: [
          "The hospital failed to ensure sufficient RN coverage consistent with its own staffing policy; CNA coverage does not satisfy RN scope-of-practice requirements in an ICU setting",
          "The hospital failed to ensure sufficient RN coverage consistent with its own staffing policy; CNA coverage does not satisfy RN scope-of-practice requirements in an ICU setting",
          "The finding is limited to the staffing documentation; NIAHO only requires that staffing plans exist, not that they be followed on every individual shift in the unit",
          "NIAHO NS findings only arise when patient harm is documented; no finding exists without evidence of adverse outcomes from the staffing ratios",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO NS requires that nursing services be provided by a sufficient number of qualified RNs at all times. In an ICU, CNA scope of practice cannot substitute for RN clinical judgment and assessment. Repeated violations of the hospital's own policy also demonstrate that the policy is not operationally effective - a second-order NIAHO finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The CNO explains that agency RNs were unavailable and the hospital could not require overtime above the policy limit. She argues the staffing decisions were reasonable under the circumstances. How does NIAHO evaluate this?",
            options: [
          "This is a medical records documentation finding, not a nursing services finding; NIAHO NS standards do not specify the frequency or timing requirements for care plan updates during patient stays",
          "NIAHO NS requires nursing care plans to be initiated, maintained, and updated to reflect the patient's current status - a three-day-old care plan inconsistent with daily assessments demonstrates failure to maintain individualized care plans",
          "NIAHO requires care plan updates only when the patient's condition changes significantly; routine status changes that are documented in daily nursing notes do not require separate updates to the formal care plan document",
          "The finding applies only if the physician co-signed the outdated care plan; nursing documentation and care planning alone do not constitute a NIAHO NS violation unless the medical staff has approved or validated the care plan",
        ],
            correctIndex: 1,
            explanation: "NIAHO requires not just that a staffing plan exist but that the hospital maintain adequate contingency resources to actually execute safe staffing. Seven shifts of ICU understaffing over 30 days demonstrates that the contingency infrastructure - agency relationships, per diem staff, cross-training - is insufficient, making the system itself the finding.",
            expertXp: 25
          },
          {
            question: "The surveyor asks the Director of Nursing to demonstrate how nursing care plans are being updated after each patient assessment. The DON pulls a random chart in which the care plan was last updated three days ago despite daily nursing notes documenting changed patient status. What standard is implicated?",
            options: [
              "This is a medical records finding, not a nursing services finding; NS standards do not govern care plan update frequency",
              "NIAHO NS requires nursing care plans to be initiated, maintained, and updated to reflect the patient's current status - a three-day-old care plan inconsistent with daily assessments demonstrates failure to maintain individualized care plans",
              "NIAHO requires care plan updates only when the patient's condition changes significantly; minor status changes documented in nursing notes do not require care plan updates",
              "The finding applies only if the physician co-signed the outdated care plan; nursing documentation alone does not constitute a NIAHO NS violation"
            ],
            correctIndex: 1,
            explanation: "NIAHO NS standards require that nursing care plans reflect the patient's current clinical status. A care plan that contradicts or fails to incorporate changes documented in nursing assessments is not being actively maintained - one of the core nursing services requirements.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-mm",
    name: "Medication Management Deep Dive",
    description: "Expert NIAHO MM scenarios covering high-alert medications, pharmacy oversight, reconciliation, and medication error prevention.",
    icon: "Microscope",
    color: "hsl(38, 92%, 45%)",
    baseLevelId: "dnv_mm",
    questions: [
      {
        id: "dd-dnv-mm-1",
        baseQuestion: "A DNV medication management tracer reveals that concentrated potassium chloride (KCl) 2mEq/mL vials are stored in three floor-level medication rooms accessible to nursing staff without restriction. The pharmacy director states this has been policy for years. What is the most significant NIAHO MM finding?",
        baseOptions: [
          "No finding - nursing staff access to concentrated KCl enables faster response to critical hypokalemia in emergencies and reduces unnecessary pharmacy delays in time-sensitive clinical situations",
          "Concentrated potassium chloride is a high-alert medication that must be removed from floor-level storage and stored only in the pharmacy or in restricted, clearly labeled locations with mandatory double-check protocols",
          "The finding is documentation-related; NIAHO requires only that concentrated electrolytes be labeled, not that they be restricted from floor storage or subject to dispensing controls",
          "This is a JCAHO National Patient Safety Goal requirement, not a NIAHO MM standard; DNV does not survey medication storage practices or high-alert medication segregation",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Concentrated electrolytes including potassium chloride are a NIAHO high-alert medication category. NIAHO MM standards require that high-alert medications be segregated, clearly labeled, and protected from inadvertent administration. Unrestricted floor-level storage of concentrated KCl is a sentinel-event-level compliance failure.",
        baseXp: 15,
        followUps: [
          {
            question: "The pharmacy director proposes placing bright-red warning labels on all concentrated KCl vials and adding a policy requiring two-nurse verification before any concentrated electrolyte administration. Does this fully remediate the NIAHO finding?",
            options: [
          "Clinical need for rapid access to concentrated KCl overrides NIAHO MM high-alert medication requirements; the nurse's concern about treatment delays justifies maintaining floor stock with enhanced monitoring",
          "The pharmacy should establish a STAT dispensing protocol with defined turnaround times; if clinical need requires pre-mixed solutions, pharmacy can prepare patient-specific KCl infusions and deliver to the unit in advance",
          "The hospital should apply for a NIAHO variance or waiver allowing floor storage of concentrated KCl in critical care areas with enhanced controls, supervision, and documentation to address access delays",
          "NIAHO allows floor storage of concentrated KCl in ICU and acute care settings due to the critical nature of the patient population and documented clinical need for immediate medication access",
        ],
            correctIndex: 1,
            explanation: "NIAHO MM standards for high-alert medications require both process controls (labels, double checks) AND storage controls (removal from routine floor stock, pharmacy-controlled dispensing). Labels alone on floor-stocked concentrated KCl do not eliminate the risk of wrong-drug or wrong-concentration errors during a high-stress clinical moment.",
            expertXp: 25
          },
          {
            question: "A nurse questions why the new policy requires pharmacy dispensing for concentrated KCl when the floor previously managed independently. She states this will delay treatment for critically hypokalemic patients. How should this clinical concern be addressed in the NIAHO compliance framework?",
            options: [
              "Clinical need for rapid access overrides NIAHO MM high-alert requirements; the nurse's concern justifies maintaining floor stock",
              "The pharmacy should establish a STAT dispensing protocol with defined turnaround times; if clinical need requires pre-mixed solutions, pharmacy can prepare patient-specific KCl infusions and deliver to the unit in advance",
              "The hospital should apply for a NIAHO variance allowing floor storage of concentrated KCl with enhanced controls",
              "NIAHO allows floor storage of concentrated KCl in ICU settings due to the critical nature of the patient population"
            ],
            correctIndex: 1,
            explanation: "Clinical concerns about access speed are real and must be addressed - but through compliant solutions. Pharmacy-prepared pre-mixed patient-specific KCl infusions, STAT dispensing protocols, and satellite pharmacy services are compliant alternatives that maintain safety controls while meeting clinical urgency needs.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ss",
    name: "Surgical Services Deep Dive",
    description: "Expert NIAHO SS scenarios on surgical safety, time-out procedures, informed consent, and post-operative documentation standards.",
    icon: "Microscope",
    color: "hsl(270, 65%, 45%)",
    baseLevelId: "dnv_ss",
    questions: [
      {
        id: "dd-dnv-ss-1",
        baseQuestion: "A DNV surgical services tracer observes a universal protocol/time-out in OR 3 before a laparoscopic cholecystectomy. The circulating nurse reads from the checklist while the surgeon completes instrument counting and the anesthesiologist documents vitals. Neither the surgeon nor anesthesiologist verbally confirms items. Is this time-out compliant with NIAHO SS?",
        baseOptions: [
          "Yes - the circulating nurse's verbal read of the checklist satisfies the team-based safety requirement as long as all surgical team members are present in the operating room during the procedure",
          "No - NIAHO SS requires active participation and verbal confirmation by all relevant team members; a time-out performed by one person while others are occupied does not constitute a team-based safety check",
          "The time-out is compliant because documentation of the checklist completion by the circulating nurse meets NIAHO SS requirements for universal protocol adherence in surgical services",
          "NIAHO requires that the time-out be performed by the surgeon; verbal confirmation by the circulating nurse alone does not satisfy the standard requirement for surgical team participation",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO SS universal protocol standards require that the time-out be an active, team-based process during which all activity pauses and each relevant team member confirms key safety elements. A nurse reading while the surgeon and anesthesiologist perform other tasks is a passive recitation, not an active time-out - a common survey finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The OR director argues that their time-out process has been in place for five years with no wrong-site surgeries, proving it works. How should this argument be evaluated in the NIAHO compliance context?",
            options: [
          "No concern - same-day consent is common practice and fully compliant with accreditation standards as long as the signature is present on the consent form and medical record documentation is complete and legible for survey review",
          "NIAHO requires that informed consent be obtained while the patient has decision-making capacity; pre-sedation consents obtained immediately before sedation risk capturing consent from a patient whose capacity may already be altered by anxiety, pre-medications, or the clinical environment",
          "NIAHO requires consent to be obtained at least 24 hours before surgery without exception; same-day consent is categorically non-compliant with the informed consent standards regardless of patient signature or medical record documentation completeness",
          "The concern is documentation-related only; NIAHO does not regulate the timing of informed consent in relation to sedation administration or the environmental conditions in which consent is obtained from the patient",
        ],
            correctIndex: 1,
            explanation: "Absence of harm does not equal compliance with safety systems. NIAHO evaluates whether the process is designed and executed to reliably prevent errors - a passive time-out may have worked by chance, not by system design. Surveyors assess process reliability, not just outcome history.",
            expertXp: 25
          },
          {
            question: "During review of informed consent documentation, the surveyor finds that surgical consent forms are signed in the pre-op area the morning of surgery, often less than 30 minutes before the patient receives sedation. What NIAHO concern does this raise?",
            options: [
              "No concern - same-day consent is common practice and fully compliant with NIAHO SS as long as the signature is present",
              "NIAHO requires that informed consent be obtained while the patient has decision-making capacity; pre-sedation consents obtained immediately before sedation risk capturing consent from a patient whose capacity may already be altered by anxiety, pre-medications, or the clinical environment",
              "NIAHO requires consent to be obtained at least 24 hours before surgery; same-day consent is categorically non-compliant",
              "The concern is documentation-related only; NIAHO does not regulate the timing of informed consent in relation to sedation"
            ],
            correctIndex: 1,
            explanation: "NIAHO SS requires that informed consent be obtained with adequate time for the patient to understand, ask questions, and decide without impairment. Pre-sedation consent immediately before a procedure is a known risk for compromised capacity. Best practice and NIAHO intent require consent to be completed at a separate encounter with time for deliberation.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-pc",
    name: "Patient Care Deep Dive",
    description: "Advanced NIAHO PC tracer scenarios on assessment, care planning, continuity of care, and discharge planning standards.",
    icon: "Microscope",
    color: "hsl(158, 64%, 36%)",
    baseLevelId: "dnv_pc",
    questions: [
      {
        id: "dd-dnv-pc-1",
        baseQuestion: "A DNV patient care tracer follows a 74-year-old patient admitted with hip fracture. The nursing assessment was completed at admission. On day 3, the surveyor asks to see evidence of reassessment since initial admission. The medical record shows only a daily nurse note with vital signs and pain score. What NIAHO PC concern exists?",
        baseOptions: [
          "No concern - daily vital signs and pain scores constitute adequate reassessment documentation under NIAHO PC standards for medical-surgical patients",
          "NIAHO PC requires reassessment at defined intervals and in response to changes in condition; a vital signs/pain-only note is not a comprehensive reassessment and does not capture functional, cognitive, or discharge planning status",
          "Reassessment frequency is determined by hospital policy and the surveyor cannot cite a finding unless the hospital's own policy specifies a different frequency than weekly documentation",
          "NIAHO requires physician-driven reassessment documentation in the medical record; nursing notes and assessments alone do not satisfy the regulatory reassessment standard",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PC reassessment standards require documentation of the patient's clinical status across all relevant dimensions - not just vitals and pain. For a hip fracture patient, this includes functional assessment, mobility status, cognitive screening, discharge planning progress, and response to treatment - elements absent from a brief daily note.",
        baseXp: 15,
        followUps: [
          {
            question: "The nurse explains that the full interdisciplinary assessment form is only completed weekly. Physical therapy, social work, and case management have not re-documented since admission. Is the weekly interdisciplinary re-assessment schedule compliant with NIAHO PC?",
            options: [
          "No finding - one-day discharge planning is within normal variation for an acute care hospital, and the timing of social work referral is not a compliance indicator under NIAHO PC standards",
          "NIAHO PC requires discharge planning to begin at or near admission for patients with anticipated complex discharge needs; a day-4 referral for a patient needing SNF placement demonstrates failure to initiate timely discharge planning",
          "The finding is a social work documentation issue, not a NIAHO PC violation - the discharge planning process occurred but the documentation of the initiation date was recorded incorrectly in the medical record",
          "NIAHO only requires discharge planning for patients hospitalized more than seven days; a five-day stay does not trigger the discharge planning standard even when SNF placement is anticipated",
        ],
            correctIndex: 1,
            explanation: "NIAHO PC requires reassessment to be clinically driven, not calendar-driven. A post-surgical hip fracture patient in the acute phase requires frequent interdisciplinary reassessment as mobility, pain, cognition, and discharge readiness evolve daily. A fixed weekly schedule that does not respond to clinical change does not meet the standard.",
            expertXp: 25
          },
          {
            question: "The surveyor reviews discharge planning documentation and finds that the social work referral was made on day 4 for a patient anticipated to need skilled nursing facility (SNF) placement. The patient was discharged on day 5 with incomplete SNF arrangements. What NIAHO PC finding does this represent?",
            options: [
              "No finding - one-day discharge planning is within normal variation for an acute care hospital",
              "NIAHO PC requires discharge planning to begin at or near admission for patients with anticipated complex discharge needs; a day-4 referral for a patient needing SNF placement demonstrates failure to initiate timely discharge planning",
              "The finding is a social work documentation issue, not a NIAHO PC violation",
              "NIAHO only requires discharge planning for patients hospitalized more than seven days; a five-day stay does not trigger the standard"
            ],
            correctIndex: 1,
            explanation: "NIAHO PC requires discharge planning to be initiated early enough to actually coordinate the needed post-acute resources. For a 74-year-old hip fracture patient, SNF placement requires insurance authorization, bed availability, and family coordination that cannot be achieved in one day. A day-4 referral followed by a day-5 discharge with incomplete arrangements demonstrates a systemic failure in discharge planning.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-es",
    name: "Environment & Safety Deep Dive",
    description: "Expert NIAHO ES scenarios on life safety, emergency management, hazardous materials, and environment of care inspections.",
    icon: "Microscope",
    color: "hsl(25, 95%, 48%)",
    baseLevelId: "dnv_es",
    questions: [
      {
        id: "dd-dnv-es-1",
        baseQuestion: "During a DNV environment of care tracer, the surveyor tests a fire door in the surgical corridor and finds it does not fully latch when released. The facilities director states the door was inspected annually as required. What NIAHO ES finding exists?",
        baseOptions: [
          "No finding - annual inspection is the NIAHO-required frequency; the current door failure is a maintenance issue discovered between scheduled inspections and does not constitute a violation",
          "The hospital must demonstrate both compliant inspection frequency and that identified deficiencies are corrected within required timeframes; a latching failure in a fire door represents an active life safety deficiency regardless of inspection schedule",
          "The finding only applies if the door is in a smoke compartment boundary; corridor fire doors are held to a lower standard under NIAHO ES and do not require full latching functionality",
          "Annual inspection satisfies NIAHO ES requirements; the surveyor cannot issue a finding for a deficiency discovered after a compliant inspection unless the deficiency poses immediate danger",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO ES life safety standards require both compliant inspection programs AND correction of identified deficiencies. A fire door that fails to latch is an active life safety deficiency regardless of when it was last inspected. The inspection's purpose is to find and correct deficiencies - not to create a compliance shield for subsequent failures.",
        baseXp: 15,
        followUps: [
          {
            question: "The facilities director shows the surveyor inspection records from the past two years, all showing 'pass.' He argues the door must have been damaged recently. What additional documentation should exist to support a compliant NIAHO ES program?",
            options: [
          "ILSMs are only required when construction compromises more than 25% of a single occupied floor; a renovation affecting only one wing does not meet the threshold for triggering interim life safety measure requirements",
          "NIAHO requires that when life safety systems are impaired by construction or renovation, ILSMs must be implemented, documented, and monitored for the duration of the impairment - six months without ILSM documentation is a significant ES finding",
          "NIAHO requires that when life safety systems are impaired by construction or renovation, ILSMs must be implemented, documented, and monitored for the duration of the impairment - six months without ILSM documentation is a significant ES finding",
          "The general contractor is solely responsible for implementing ILSMs during construction; hospital facilities staff and administration are not required to document interim measures unless construction directly affects occupied patient care areas",
        ],
            correctIndex: 1,
            explanation: "A compliant life safety program requires ongoing monitoring between formal inspections through staff observation and reporting. The absence of any documented issues or work orders for a door with an active deficiency suggests either the deficiency is not new (inspection records may be inaccurate) or the between-inspection reporting system failed - both are NIAHO concerns.",
            expertXp: 25
          },
          {
            question: "The surveyor asks to review the hospital's Interim Life Safety Measures (ILSM) policy. The hospital has one under renovation in a wing that has been under construction for six months, but no ILSM documentation exists for this area. What does NIAHO require?",
            options: [
              "ILSMs are only required when construction compromises more than 25% of an occupied floor; a single wing does not trigger the requirement",
              "NIAHO requires that when life safety systems are impaired by construction or renovation, ILSMs must be implemented, documented, and monitored for the duration of the impairment - six months without ILSM documentation is a significant ES finding",
              "ILSMs are a Joint Commission-specific requirement; NIAHO does not have an equivalent standard for construction-related life safety impairments",
              "The general contractor is responsible for ILSMs during construction; hospital facilities staff are not required to document measures unless construction affects clinical areas"
            ],
            correctIndex: 1,
            explanation: "NIAHO ES requires ILSMs whenever construction activities impair life safety features - detection, suppression, egress, or fire barriers. This includes enhanced fire watch, staff training, and alternative protection measures with full documentation for the duration. A six-month construction project with no ILSM records is a significant finding.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-pr",
    name: "Patient Rights Deep Dive",
    description: "Advanced NIAHO PR tracer scenarios on informed decision-making, grievance processes, restraint use, and advance directives.",
    icon: "Microscope",
    color: "hsl(195, 85%, 38%)",
    baseLevelId: "dnv_pr",
    questions: [
      {
        id: "dd-dnv-pr-1",
        baseQuestion: "A DNV patient rights tracer reviews a patient's chart where soft wrist restraints were applied after the patient pulled at their IV twice. The physician order reads 'restraints PRN for safety.' The restraints remained in place for 18 hours with nursing monitoring every 4 hours. What is the primary NIAHO PR finding?",
        baseOptions: [
          "No finding exists because a physician PRN order combined with 4-hour monitoring intervals satisfies all NIAHO PR restraint requirements for safety restraints applied to prevent medical device displacement",
          "NIAHO PR requires that restraint orders be time-limited (not PRN), that the least restrictive alternative be documented, that monitoring occur at least every 2 hours, and that the continued need be reassessed with physician involvement - all of these requirements are violated",
          "The finding is limited to the monitoring frequency; PRN orders are acceptable under NIAHO PR for non-behavioral safety restraints used to prevent medical device-related harm, such as restraints applied to prevent IV line displacement",
          "NIAHO PR restraint standards apply only to behavioral or violent restraints; safety restraints applied to protect IV lines and other medical devices are excluded from the specific time-limited order and monitoring requirements",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PR restraint standards for non-violent/non-self-destructive restraints require: a specific time-limited order (not PRN), documentation that less restrictive alternatives were tried, monitoring at defined intervals (at minimum every 2 hours), and reassessment of continued need. A PRN order lasting 18 hours with 4-hour monitoring violates multiple concurrent requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "The nurse explains that the patient was at high fall risk and agitated, and that the physician was unavailable for the first 4 hours after restraint application. How does NIAHO PR address emergency restraint application before a physician order is obtained?",
            options: [
          "Family members have no legal decision-making authority over a confused patient without a power of attorney or guardianship; the clinical team may maintain restraints based on the physician order without engaging the family in the discussion",
          "Under NIAHO PR, the clinical team must engage the family, explain the clinical rationale, reassess whether the continued restraint meets criteria, explore less restrictive alternatives, and document the conversation - the family's concern must be taken seriously even if the ultimate clinical decision differs",
          "If the patient lacks capacity and has no advance directive, the physician's clinical judgment supersedes all family input; NIAHO PR does not require engagement with family surrogates for restraint continuation decisions once clinical need is established",
          "NIAHO PR requires restraints to be immediately removed when a family member requests removal, regardless of the patient's clinical status, current confusion level, or the physician's assessment of continued medical necessity",
        ],
            correctIndex: 1,
            explanation: "NIAHO PR recognizes emergency restraint application but requires rapid physician involvement - typically within one hour. The emergency application must be documented, a physician order obtained promptly, and the restraint reassessed as a formal order with all applicable requirements met. A 4-hour delay in physician involvement is a PR finding.",
            expertXp: 25
          },
          {
            question: "A patient's family member demands that restraints be removed, stating the patient would never want to be restrained. The patient does not have an advance directive and is currently confused. How should the clinical team respond under NIAHO PR?",
            options: [
              "Family members have no legal authority over a confused patient; the clinical team may ignore the demand and maintain restraints based on the physician order",
              "Under NIAHO PR, the clinical team must engage the family, explain the clinical rationale, reassess whether the continued restraint meets criteria, explore less restrictive alternatives, and document the conversation - the family's concern must be taken seriously even if the ultimate clinical decision differs",
              "If the patient lacks capacity, the physician's clinical judgment supersedes all family input; NIAHO PR does not require engagement with surrogates for restraint decisions",
              "NIAHO PR requires restraints to be immediately removed when a family member requests it, regardless of clinical status"
            ],
            correctIndex: 1,
            explanation: "NIAHO PR requires that patient rights - including the right to participate in care decisions through surrogates when capacity is impaired - be respected. The family concern triggers an obligation to explain the clinical basis, reassess the need, explore alternatives, and document the engagement. It does not automatically mandate removal or continuation - it mandates a thoughtful, documented clinical process.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-ic",
    name: "Infection Control Deep Dive",
    description: "Expert NIAHO IC tracer scenarios on surveillance, isolation protocols, hand hygiene compliance, and infection control program oversight.",
    icon: "Microscope",
    color: "hsl(143, 71%, 35%)",
    baseLevelId: "dnv_ic",
    questions: [
      {
        id: "dd-dnv-ic-1",
        baseQuestion: "A DNV infection control tracer reviews the hospital's MRSA surveillance data. The infection preventionist reports that MRSA rates are tracked monthly and shared with nursing units. However, the data has never been presented to the medical executive committee, and no physician-driven interventions have been implemented in 18 months despite rates above national benchmarks. What NIAHO IC finding does this represent?",
        baseOptions: [
          "No finding - sharing data with nursing units satisfies NIAHO IC surveillance requirements",
          "NIAHO IC requires that infection surveillance data drive action through the PI committee and medical leadership; rates above benchmarks without physician engagement or PI-driven interventions demonstrates a failure of the IC program's accountability structure",
          "The finding is limited to data reporting frequency; NIAHO does not require physician committee review of IC surveillance data",
          "IC surveillance above national benchmarks only becomes a NIAHO finding after a reportable outbreak is declared"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO IC standards require that surveillance data be linked to improvement activities through the PI program and leadership engagement. Rates above national benchmarks that persist without physician involvement, committee discussion, or targeted interventions demonstrate that the IC program is collecting data without driving change - a core NIAHO compliance failure.",
        baseXp: 15,
        followUps: [
          {
            question: "The infection preventionist argues that MRSA rates have been above benchmark for 18 months because the patient population has more complex cases. How should this explanation be evaluated under NIAHO IC?",
            options: [
              "Case mix complexity is an accepted explanation under NIAHO IC; acuity-adjusted benchmarks relieve the obligation to implement targeted interventions",
              "Case mix adjustment is a legitimate analytical consideration, but it must be documented with data showing how complexity affects the hospital's rates; if the adjusted rates still exceed benchmarks, improvement activities are still required under NIAHO IC",
              "NIAHO accepts the infection preventionist's clinical judgment as sufficient explanation without requiring documented case mix analysis",
              "Benchmark comparisons are not relevant to NIAHO IC compliance; only internally established targets must be met"
            ],
            correctIndex: 1,
            explanation: "Case mix adjustment is a valid analytical step but must be documented with data - not just asserted. If adjusted rates still exceed benchmarks, NIAHO IC requires demonstrable improvement activities. Explanation alone does not satisfy the standard's requirement for action.",
            expertXp: 25
          },
          {
            question: "During an observed hand hygiene audit, the surveyor watches a physician enter a patient room, examine the patient without performing hand hygiene, then exit. The nurse present does not address this. What does NIAHO IC expect of the nursing staff in this situation?",
            options: [
              "NIAHO IC only holds nursing staff responsible for their own hand hygiene; physician compliance is a medical staff issue outside nursing scope",
              "NIAHO IC expects a culture where all staff - including nurses - are empowered and expected to address hand hygiene non-compliance by any team member, including physicians; a nurse who witnesses a violation and does not speak up indicates a safety culture gap",
              "The nurse should document the observation and report to the infection preventionist; real-time intervention is not a NIAHO expectation",
              "Speaking up to a physician about hand hygiene is beyond a nurse's professional scope; NIAHO IC does not require interprofessional intervention"
            ],
            correctIndex: 1,
            explanation: "NIAHO IC expects facilities to have a culture of safety where hand hygiene compliance is everyone's responsibility. A nurse who witnesses a violation and does not act - regardless of the other person's role - indicates that the safety culture does not support mutual accountability. NIAHO surveyors look for evidence of this culture, not just policy existence.",
            expertXp: 30
          }
        ]
      }
    ]
  },
  {
    id: "dd-dnv-pe",
    name: "Performance Evaluation & Education Deep Dive",
    description: "Advanced NIAHO PE tracer scenarios on staff competency assessment, orientation, ongoing education, and training documentation requirements.",
    icon: "Microscope",
    color: "hsl(210, 78%, 42%)",
    baseLevelId: "dnv_pe",
    questions: [
      {
        id: "dd-dnv-pe-1",
        baseQuestion: "A DNV performance evaluation tracer reviews competency documentation for ICU nurses. The education coordinator shows annual competency checklists with supervisor sign-off for all staff. However, for three nurses who transitioned from med-surg to ICU within the past year, no additional competency validation is documented beyond the standard annual checklist. What NIAHO PE finding exists?",
        baseOptions: [
          "No finding - annual competency checklists apply equally to all nurses regardless of unit transfer, and no additional assessment is required for internal staff reassignments",
          "NIAHO PE requires that staff who take on new roles or responsibilities demonstrate competency specific to those new responsibilities; a med-surg nurse moving to ICU requires role-specific competency validation beyond a standard annual checklist",
          "Additional competency validation is only required for nurses who failed their annual competency assessment; passing nurses may transfer between units without further evaluation",
          "NIAHO PE competency requirements apply only at initial hire and during annual reviews; internal transfers between units do not trigger additional competency assessment requirements",
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PE requires competency validation whenever staff take on new or expanded responsibilities. A med-surg nurse transitioning to ICU must demonstrate ICU-specific competencies - hemodynamic monitoring, vasoactive drips, ventilator management - that are not covered by a general annual checklist. The absence of role-specific competency documentation for these three nurses is a direct PE finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The education coordinator argues that the three nurses completed an ICU orientation program and were deemed competent by their charge nurse at the end. The charge nurse did not document the competency assessment. How does NIAHO PE view undocumented competency validation?",
            options: [
          "Yes - a written test with a defined passing score and retake process fully satisfies NIAHO PE competency requirements for assessing clinical knowledge and procedural readiness in nursing staff across all patient care settings",
          "No - NIAHO PE requires that competency assessment include demonstration of skills performance, not just written knowledge; a written test alone is insufficient for clinical competencies that require skill demonstration",
          "Written tests are the preferred NIAHO competency assessment method; skills demonstration is required only for high-risk procedures such as central line placement and advanced hemodynamic monitoring in critical care units",
          "Yes - the 80% passing score aligns with NIAHO PE's recommended threshold for clinical competency programs and meets industry standards for knowledge-based assessment in healthcare accreditation frameworks",
        ],
            correctIndex: 1,
            explanation: "NIAHO PE standards require documented competency assessment. Orientation attendance proves exposure, not competency. A charge nurse's undocumented verbal attestation cannot be verified during a survey or referenced in future performance reviews. NIAHO applies the fundamental principle that undocumented care - or assessment - did not occur from a compliance standpoint.",
            expertXp: 25
          },
          {
            question: "The hospital's competency program uses an annual written test with 80% as the passing score for all clinical staff. A nurse scores 78% and is required to retake the test. She scores 82% on retake. Is this competency program structure sufficient under NIAHO PE?",
            options: [
              "Yes - a written test with a defined passing score and retake process fully satisfies NIAHO PE competency requirements",
              "No - NIAHO PE requires that competency assessment include demonstration of skills performance, not just written knowledge; a written test alone is insufficient for clinical competencies that require skill demonstration",
              "Written tests are the preferred NIAHO competency assessment method; skills demonstration is required only for high-risk procedures",
              "Yes - the 80% passing score aligns with NIAHO PE's recommended threshold for clinical competency programs"
            ],
            correctIndex: 1,
            explanation: "NIAHO PE requires that competency assessment methods match the competency being assessed. Clinical skills - IV insertion, wound care, hemodynamic monitoring - cannot be adequately assessed through a written test alone. A competency program that relies exclusively on written testing for clinical staff fails NIAHO PE's requirement for appropriate assessment methods.",
            expertXp: 30
          }
        ]
      }
    ]
  }
];
