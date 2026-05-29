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
          "The hospital exceeds minimum NIAHO requirements because core measures data is being collected",
          "The hospital fails to demonstrate a systematic PI process with identifiable improvement actions and outcome tracking",
          "Quarterly meetings satisfy NIAHO frequency requirements; no deficiency exists",
          "NIAHO requires only data collection, not demonstration of improvement outcomes"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO QM.1 requires that the PI program not only collect data but demonstrate that analysis drives actions and that outcomes improve. A committee that collects data without traceable improvement cycles fails the 'systematic' and 'outcome' requirements of the standard.",
        baseXp: 15,
        followUps: [
          {
            question: "The PI committee argues that their quarterly reports show steady core measure performance, which proves the program is working. How should this evidence be interpreted under NIAHO QM standards?",
            options: [
              "Steady performance is sufficient evidence of an effective PI program because it demonstrates the hospital is not declining",
              "NIAHO requires trend data over at least 24 months; quarterly reports covering less than two years cannot satisfy QM.1",
              "Steady performance does not prove the PI program caused or maintained that performance; the hospital must show the cycle of analysis, action, and re-measurement",
              "Core measure stability is acceptable proof under QM.1 as long as no measures fall below the national 50th percentile"
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
          "Staff turnover is an acceptable reason for data gaps; NIAHO allows temporary suspensions of reporting during personnel transitions",
          "The hospital's QM plan is not being implemented as written, demonstrating a gap between policy and practice that is a direct NIAHO QM finding",
          "Only the three departments are deficient; the hospital-wide QM plan remains compliant",
          "The concern is minor since no patient harm resulted from the data gap"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "A QM plan that is not executed as written represents a fundamental NIAHO compliance failure. The plan creates an obligation; gaps between written plans and actual practice are primary survey findings under QM standards regardless of the reason.",
        baseXp: 15,
        followUps: [
          {
            question: "The QM director proposes updating the plan to reduce reporting frequency to quarterly, which would retroactively eliminate the deficiency. How should this be handled?",
            options: [
              "Retroactive plan changes are acceptable under NIAHO if the governing body approves the revision before the survey closes",
              "Plan changes must go through the formal PI governance process and take effect prospectively; they cannot resolve a past gap in compliance",
              "NIAHO permits plan amendments at any time; the revised quarterly frequency would eliminate the deficiency if documented",
              "The surveyor must accept the plan revision since NIAHO does not mandate monthly reporting frequency"
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
          "No gap - financial oversight is the primary governing body responsibility under NIAHO GOV standards",
          "The governing body is not demonstrating direct oversight of clinical quality and patient safety, which is an explicit NIAHO GOV responsibility",
          "The gap is that board meeting minutes were not available; content of oversight is not evaluated by NIAHO",
          "Operational updates from the CEO satisfy the governing body's NIAHO quality oversight requirement"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO GOV standards require the governing body to maintain direct accountability for the quality of care. Delegating all clinical quality oversight to the CEO without direct board engagement with quality metrics, adverse events, and improvement activities is a fundamental governance gap.",
        baseXp: 15,
        followUps: [
          {
            question: "The board chair explains they receive a 'quality dashboard' from the CNO at each meeting. The dashboard shows overall satisfaction scores but does not include sentinel events, infection rates, or PI outcomes. Does this satisfy NIAHO GOV?",
            options: [
              "Yes - any quality dashboard presented to the board satisfies NIAHO GOV oversight requirements",
              "No - NIAHO requires the governing body to receive and act on comprehensive quality information including patient safety events, clinical outcomes, and PI results, not satisfaction scores alone",
              "Yes - patient satisfaction is a core NIAHO quality indicator; satisfaction scores are sufficient for governing body reporting",
              "The standard only requires annual quality reporting to the board; quarterly dashboards exceed the requirement"
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
              "Yes - en bloc acceptance of MEC recommendations is a recognized and compliant governing body practice under NIAHO GOV",
              "No - the governing body must review individual credentials files, not just accept committee lists",
              "The en bloc acceptance is compliant only if any board member may request individual review and the board formally approves each recommendation, even as a group vote",
              "NIAHO requires a two-thirds majority vote for credential approvals; en bloc unanimous acceptance does not satisfy this threshold"
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
          "No issue - FPPE triggered by performance concerns is the only NIAHO MS requirement for focused evaluation",
          "NIAHO MS requires FPPE for all newly granted privileges, not only when concerns arise; the credentials coordinator has an incorrect understanding of the standard",
          "FPPE is required only after the first full year of practice; six months is too early to evaluate",
          "The coordinator is correct; NIAHO requires ONGOING Professional Practice Evaluation (OPPE), not FPPE, for new physicians"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO MS standards require FPPE for all new privileges - it is a time-limited, focused review that applies to every newly privileged practitioner regardless of performance. It is not triggered only by concerns. After the FPPE period ends, the practitioner transitions to OPPE.",
        baseXp: 15,
        followUps: [
          {
            question: "The FPPE for the new surgeon consisted of a department chief reviewing three operative reports and signing a form stating 'no concerns identified.' The surveyor finds this insufficient. Why?",
            options: [
              "NIAHO requires at least 10 cases be reviewed during FPPE; three cases is below the minimum threshold",
              "FPPE must include a specific number of cases defined in medical staff bylaws, direct observation or proctoring, and documented performance criteria - a signature form without defined metrics does not meet the standard",
              "The department chief cannot conduct FPPE; it must be performed by an external peer reviewer",
              "FPPE documentation must be submitted to the governing body; review only at the department level is not compliant"
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
          "No concern - physician privacy protections prohibit storing peer review findings in credentials files",
          "Peer review findings must inform OPPE and be retained so that patterns can be identified across multiple events; excluding them from the credentials process defeats NIAHO's peer review purpose",
          "NIAHO does not specify how peer review findings must be retained; the CMO's approach is acceptable",
          "The concern is limited to events involving patient harm; peer review for near-misses does not require documentation in credentials files"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO requires peer review to feed into the OPPE process. If findings are shared with the physician but not retained for pattern analysis and credential review, the hospital cannot identify recurring performance issues - the central purpose of NIAHO peer review requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "The CMO argues that retaining peer review findings in credentials files creates a legal liability and discourages voluntary reporting. How should this conflict be balanced under NIAHO?",
            options: [
              "Legal liability concerns override NIAHO requirements; the CMO's practice is defensible and NIAHO surveyors must accommodate it",
              "Most states provide peer review privilege protections that allow retention of peer review data in protected credentials files; the hospital should work with legal counsel to structure a compliant, protected process rather than eliminate the documentation",
              "NIAHO explicitly exempts peer review documentation from credentials files in states with peer review privilege laws",
              "The solution is to use numerical codes instead of physician names in peer review files, satisfying NIAHO while protecting identities"
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
          "No finding - using CNAs to fill coverage gaps is an accepted staffing solution under NIAHO NS",
          "The hospital failed to ensure sufficient RN coverage consistent with its own staffing policy; CNA coverage does not satisfy RN scope-of-practice requirements in an ICU setting",
          "The finding is limited to the staffing documentation; NIAHO only requires that staffing plans exist, not that they be followed on every shift",
          "NIAHO NS findings only arise when patient harm is documented; no finding exists without evidence of adverse outcomes"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO NS requires that nursing services be provided by a sufficient number of qualified RNs at all times. In an ICU, CNA scope of practice cannot substitute for RN clinical judgment and assessment. Repeated violations of the hospital's own policy also demonstrate that the policy is not operationally effective - a second-order NIAHO finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The CNO explains that agency RNs were unavailable and the hospital could not require overtime above the policy limit. She argues the staffing decisions were reasonable under the circumstances. How does NIAHO evaluate this?",
            options: [
              "NIAHO accepts documented evidence of good-faith effort to staff appropriately; circumstantial staffing below policy is not a finding if efforts are documented",
              "NIAHO requires the hospital to have contingency staffing plans - including agency relationships, per-diem pools, or float pools - sufficient to maintain safe staffing; repeated gaps indicate the contingency system itself is inadequate",
              "A CNO's professional judgment that staffing was safe on each shift satisfies NIAHO NS requirements regardless of ratio variances",
              "NIAHO only evaluates staffing plans, not actual shift-by-shift staffing; the policy variance is an internal compliance matter, not a NIAHO finding"
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
          "No finding - nursing staff access to concentrated KCl enables faster response to critical hypokalemia in emergencies",
          "Concentrated potassium chloride is a high-alert medication that must be removed from floor-level storage and stored only in the pharmacy or in restricted, clearly labeled locations with mandatory double-check protocols",
          "The finding is documentation-related; NIAHO requires only that concentrated electrolytes be labeled, not that they be restricted from floor storage",
          "This is a JCAHO National Patient Safety Goal requirement, not a NIAHO MM standard; DNV does not survey this specific practice"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "Concentrated electrolytes including potassium chloride are a NIAHO high-alert medication category. NIAHO MM standards require that high-alert medications be segregated, clearly labeled, and protected from inadvertent administration. Unrestricted floor-level storage of concentrated KCl is a sentinel-event-level compliance failure.",
        baseXp: 15,
        followUps: [
          {
            question: "The pharmacy director proposes placing bright-red warning labels on all concentrated KCl vials and adding a policy requiring two-nurse verification before any concentrated electrolyte administration. Does this fully remediate the NIAHO finding?",
            options: [
              "Yes - warning labels and double-check protocols fully satisfy NIAHO MM high-alert medication requirements for concentrated KCl",
              "No - while labels and double checks are required components, NIAHO also requires that concentrated KCl be removed from floor stock and dispensed only from pharmacy on a patient-specific basis",
              "Yes - NIAHO requires process controls but does not mandate removal from floor stock if adequate precautions are in place",
              "Labels satisfy NIAHO; double-check verification is a recommended practice only, not a NIAHO MM requirement"
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
          "Yes - the circulating nurse's verbal read of the checklist constitutes a compliant time-out under NIAHO SS",
          "No - NIAHO SS requires active participation and verbal confirmation by all relevant team members; a time-out performed by one person while others are occupied does not constitute a team-based safety check",
          "The time-out is compliant because all required personnel are physically present in the room during the procedure",
          "NIAHO requires only that the time-out be documented; verbal confirmation is a recommended practice, not a standard requirement"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO SS universal protocol standards require that the time-out be an active, team-based process during which all activity pauses and each relevant team member confirms key safety elements. A nurse reading while the surgeon and anesthesiologist perform other tasks is a passive recitation, not an active time-out - a common survey finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The OR director argues that their time-out process has been in place for five years with no wrong-site surgeries, proving it works. How should this argument be evaluated in the NIAHO compliance context?",
            options: [
              "Absence of wrong-site surgeries over five years is strong evidence that the process is effective and satisfies NIAHO SS requirements",
              "NIAHO evaluates compliance with defined standards, not outcome absence; a non-compliant process that has not yet caused harm is still a finding, because system reliability cannot be confirmed without process adherence",
              "Five years of positive outcomes satisfies NIAHO's risk-based evaluation framework for surgical safety",
              "The argument is valid; NIAHO SS standards include an outcomes-based compliance pathway for hospitals with established safety records"
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
          "No concern - daily vital signs and pain scores constitute adequate reassessment documentation under NIAHO PC",
          "NIAHO PC requires reassessment at defined intervals and in response to changes in condition; a vital signs/pain-only note is not a comprehensive reassessment and does not capture functional, cognitive, or discharge planning status",
          "Reassessment frequency is determined by hospital policy; the surveyor cannot cite a finding unless the hospital's own policy specifies a different frequency",
          "NIAHO requires physician-driven reassessment documentation; nursing notes alone do not satisfy the reassessment standard"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PC reassessment standards require documentation of the patient's clinical status across all relevant dimensions - not just vitals and pain. For a hip fracture patient, this includes functional assessment, mobility status, cognitive screening, discharge planning progress, and response to treatment - elements absent from a brief daily note.",
        baseXp: 15,
        followUps: [
          {
            question: "The nurse explains that the full interdisciplinary assessment form is only completed weekly. Physical therapy, social work, and case management have not re-documented since admission. Is the weekly interdisciplinary re-assessment schedule compliant with NIAHO PC?",
            options: [
              "Yes - weekly interdisciplinary reassessment is specifically authorized under NIAHO PC for non-ICU patients with stable conditions",
              "No - NIAHO PC requires that reassessment be performed in response to changes in condition and at intervals appropriate to the patient's clinical situation; a fixed weekly schedule regardless of clinical changes is not compliant for an acute post-surgical patient",
              "Weekly reassessment is compliant as long as the physician documents daily progress notes",
              "NIAHO PC does not specify interdisciplinary reassessment frequency; weekly scheduling is an internal hospital decision outside NIAHO scope"
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
          "No finding - annual inspection is the NIAHO-required frequency; the current door failure is a maintenance issue discovered between inspections",
          "The hospital must demonstrate both compliant inspection frequency and that identified deficiencies are corrected within required timeframes; a latching failure in a fire door represents an active life safety deficiency regardless of inspection schedule",
          "The finding only applies if the door is in a smoke compartment boundary; corridor fire doors are held to a lower standard",
          "Annual inspection satisfies NIAHO ES; the surveyor cannot issue a finding for a deficiency discovered after a compliant inspection"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO ES life safety standards require both compliant inspection programs AND correction of identified deficiencies. A fire door that fails to latch is an active life safety deficiency regardless of when it was last inspected. The inspection's purpose is to find and correct deficiencies - not to create a compliance shield for subsequent failures.",
        baseXp: 15,
        followUps: [
          {
            question: "The facilities director shows the surveyor inspection records from the past two years, all showing 'pass.' He argues the door must have been damaged recently. What additional documentation should exist to support a compliant NIAHO ES program?",
            options: [
              "The inspection 'pass' records are sufficient; NIAHO does not require interim monitoring between annual inspections",
              "A compliant program requires documented staff reporting mechanisms for between-inspection deficiencies, documented work orders for repairs, and a corrective action tracking log showing timely remediation - absence of any recent work orders for this door raises questions about the reporting system",
              "The director should provide the manufacturer's warranty documentation to show the door was recently serviced; warranty records satisfy NIAHO ES between-inspection requirements",
              "NIAHO requires facilities staff to perform weekly fire door checks in addition to annual inspections; the director should show these weekly logs"
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
          "No finding - a physician PRN order and 4-hour monitoring satisfy NIAHO PR restraint requirements",
          "NIAHO PR requires that restraint orders be time-limited (not PRN), that the least restrictive alternative be documented, that monitoring occur at least every 2 hours, and that the continued need be reassessed with physician involvement - all of these requirements are violated",
          "The finding is limited to the monitoring frequency; PRN orders are acceptable under NIAHO PR for non-behavioral restraints",
          "NIAHO PR restraint requirements apply only to behavioral (violent) restraints; safety restraints for IV protection are excluded from these standards"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PR restraint standards for non-violent/non-self-destructive restraints require: a specific time-limited order (not PRN), documentation that less restrictive alternatives were tried, monitoring at defined intervals (at minimum every 2 hours), and reassessment of continued need. A PRN order lasting 18 hours with 4-hour monitoring violates multiple concurrent requirements.",
        baseXp: 15,
        followUps: [
          {
            question: "The nurse explains that the patient was at high fall risk and agitated, and that the physician was unavailable for the first 4 hours after restraint application. How does NIAHO PR address emergency restraint application before a physician order is obtained?",
            options: [
              "NIAHO PR prohibits restraint application without a prior physician order under any circumstances; the nurse should have waited",
              "NIAHO allows a nurse to apply restraints in an emergency to protect the patient or staff, but a physician order must be obtained within a defined timeframe (typically 1 hour) and the event must be documented as an emergency application",
              "NIAHO requires a verbal order from the physician before restraint application; verbal orders do not require documentation until the end of the shift",
              "Emergency restraint application by nursing staff is not governed by NIAHO PR; this is covered only by state nursing practice acts"
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
          "No finding - annual competency checklists apply equally to all nurses regardless of unit transfer",
          "NIAHO PE requires that staff who take on new roles or responsibilities demonstrate competency specific to those new responsibilities; a med-surg nurse moving to ICU requires role-specific competency validation beyond a standard annual checklist",
          "Additional competency validation is only required for nurses who failed their annual competency assessment",
          "NIAHO PE competency requirements apply only at initial hire; internal transfers do not trigger additional competency assessment"
        ],
        baseCorrectIndex: 1,
        baseExplanation: "NIAHO PE requires competency validation whenever staff take on new or expanded responsibilities. A med-surg nurse transitioning to ICU must demonstrate ICU-specific competencies - hemodynamic monitoring, vasoactive drips, ventilator management - that are not covered by a general annual checklist. The absence of role-specific competency documentation for these three nurses is a direct PE finding.",
        baseXp: 15,
        followUps: [
          {
            question: "The education coordinator argues that the three nurses completed an ICU orientation program and were deemed competent by their charge nurse at the end. The charge nurse did not document the competency assessment. How does NIAHO PE view undocumented competency validation?",
            options: [
              "Verbal competency confirmation by a charge nurse satisfies NIAHO PE if the charge nurse is available to attest to this during the survey",
              "NIAHO PE requires that competency assessments be documented; undocumented competency validation cannot be verified and does not meet the standard - if it isn't documented, it didn't happen from a compliance standpoint",
              "NIAHO accepts orientation program completion certificates as equivalent to documented competency assessment",
              "The three-month recency of the orientation satisfies NIAHO PE; documentation requirements only apply to assessments performed more than six months ago"
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
