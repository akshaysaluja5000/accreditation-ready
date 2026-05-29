import type { Question } from "./schema";

export interface AscPosttestQuestion extends Question {
  chapterId: string;
  chapterName: string;
}

export const ascPosttestQuestions: AscPosttestQuestion[] = [
  {
    id: "asc_post_pr_01",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A deaf patient arrives for a procedure and requests an ASL interpreter. The ASC has not arranged one and offers a video remote interpreter (VRI) on a tablet. The tablet's wifi connection drops repeatedly. What does the ADA and the patient rights expectation require?",
    options: [
      "VRI attempts are sufficient effort",
      "The ASC must provide effective communication; if VRI is unreliable, an in-person interpreter must be arranged before consent and the case may need to be rescheduled",
      "Family members can sign for the patient",
      "Written notes are an acceptable substitute",
    ],
    correctIndex: 1,
    explanation:
      "Effective communication is the standard, not 'best effort.' Unreliable VRI does not satisfy the requirement when an in-person interpreter is needed. The ASC has the obligation to arrange and pay for it.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070; ADA Title III",
    tutor: {
      whyCorrect:
        "Effective communication for deaf and hard-of-hearing patients is an enforceable right. Surveyors and OCR investigations both look for documented arrangement of effective auxiliary aids.",
      whyWrong: {
        A: "Effort is not the standard; effectiveness is.",
        C: "Family members are not qualified medical interpreters.",
        D: "Written notes are insufficient for complex consent and clinical communication.",
      },
      operationalContext:
        "Maintain a contract with at least two interpreter agencies (in-person and video). Test VRI equipment monthly. When VRI fails, escalate to in-person without delay.",
    },
  },
  {
    id: "asc_post_pr_02",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A patient was billed an unexpected facility fee that wasn't disclosed pre-procedure. She files a written complaint about the financial surprise. The administrator says, 'Billing complaints aren't grievances - they go to the billing office.' Is this defensible?",
    options: [
      "Yes - billing is separate from patient care",
      "No - written complaints about any aspect of care or service are grievances and must be processed through the grievance procedure with written response",
      "Yes if the bill was correct",
      "No - but only if the patient threatens legal action",
    ],
    correctIndex: 1,
    explanation:
      "Grievance scope includes service issues, billing surprises, and any aspect of the patient's experience. Routing all written complaints through one defined process produces consistent handling and audit trail.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070 (42 CFR 416.50(d))",
    tutor: {
      whyCorrect:
        "The grievance process is the unified intake. Billing-specific resolution can still happen, but the intake, response, and tracking go through the grievance system.",
      whyWrong: {
        A: "Billing affects patient experience and falls within grievance scope.",
        C: "Bill correctness is the resolution; grievance processing is the framework.",
        D: "Threat of action is not the trigger.",
      },
      operationalContext:
        "Train front-office and billing staff: 'All written patient complaints come to the privacy/grievance officer.' Maintain one grievance log with categorical tags (clinical, service, billing, privacy).",
    },
  },
  {
    id: "asc_post_pr_03",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A patient asks the surgeon to keep his HIV status private from the OR team. The surgeon agrees. During the case, the OR team is unaware. What is the issue?",
    options: [
      "No issue - patient privacy preferences are absolute",
      "OR team needs information necessary for safe care; the patient's privacy preference cannot override clinical safety needs, though access can be limited to those who require it",
      "No issue if standard precautions are used",
      "Issue only if a needlestick occurs",
    ],
    correctIndex: 1,
    explanation:
      "Standard precautions are always in effect, but the OR team has a need-to-know for clinically relevant information. The privacy framework limits access to those who require it; it does not eliminate disclosure to the team providing care.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070; HIPAA",
    tutor: {
      whyCorrect:
        "HIPAA permits disclosure for treatment without patient authorization. Patient preference for confidentiality from the team that is treating them is not enforceable when clinical safety requires the information.",
      whyWrong: {
        A: "Privacy is balanced against clinical safety, not absolute.",
        C: "Standard precautions reduce risk but do not eliminate the need-to-know.",
        D: "Need-to-know exists at the moment of care, not contingent on adverse events.",
      },
      operationalContext:
        "Train clinicians on the difference between 'minimum necessary' (HIPAA) and 'restricted from the treating team' (not permitted). Have a privacy officer available for case-by-case consultation.",
    },
  },
  {
    id: "asc_post_pr_04",
    chapterId: "asc_patient_rights",
    chapterName: "Patient Rights",
    question:
      "A pediatric patient's divorced parents both arrive for the procedure. The custody order on file gives the mother sole medical decision-making authority. The father insists he should sign the consent. What is the correct response?",
    options: [
      "Both parents sign - both should be involved",
      "The mother signs as the legal medical decision-maker per the custody order; father can be present but not the signing authority",
      "The grandparent on file signs",
      "The case is canceled if both parents disagree",
    ],
    correctIndex: 1,
    explanation:
      "Custody orders define legal medical decision-making authority. The ASC follows the order, not the in-the-moment dynamics of the family.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0070",
    tutor: {
      whyCorrect:
        "The chart should hold a current custody order or affirmation of decision-making authority. Front-office staff verify before the case proceeds.",
      whyWrong: {
        A: "Joint signing without authority is invalid.",
        C: "Grandparents have decision-making authority only if formally designated.",
        D: "Cancellation isn't required if the legal decision-maker is present.",
      },
      operationalContext:
        "Pediatric intake includes verification of the medical decision-maker. If a custody order is in play, request a copy in advance. Front desk staff trained to handle disputes calmly while verifying the order.",
    },
  },
  {
    id: "asc_post_gov_01",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "An ASC has a written conflict-of-interest policy that requires annual disclosure forms from board members and physician owners. Forms are filed and never reviewed; no recusals are documented; vendor approvals are made without reference to the disclosures. What is the gap?",
    options: [
      "No gap - the policy and forms exist",
      "A COI program is the policy plus active use of the disclosures: review by the chair, identification of conflicts, documented recusals, and recorded decisions; collection without use is paper compliance",
      "Gap only if a regulator notices",
      "No gap because owner physicians are inherently trusted",
    ],
    correctIndex: 1,
    explanation:
      "COI programs only protect the organization when the disclosures are read against actual decisions. The chair (or designee) must review the disclosure log when material decisions are made - vendor selection, contract approval, credentialing of related parties - and document any recusal that occurs. Filing forms and never opening them is the most common COI finding.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0021 (42 CFR 416.41)",
    tutor: {
      whyCorrect:
        "Surveyors review the COI log and recusal records together. They specifically look for vendor or contract decisions where a known conflict existed and trace whether recusal happened.",
      whyWrong: {
        A: "Existence without use is the gap.",
        C: "The expectation is independent of regulator attention.",
        D: "Trust is not a substitute for documented recusal.",
      },
      operationalContext:
        "Build a standing agenda item: 'COI check' at the top of each governance meeting where vendor, contract, or credentialing matters appear. The chair reviews the disclosure log against the agenda; recusals are recorded in the minutes.",
    },
  },
  {
    id: "asc_post_gov_02",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "A capital purchase of a $90,000 sterilizer was approved verbally by the medical director, ordered by the administrator, and not presented to the governing body. The ASC bylaws require governing body approval for purchases over $25,000. Is this defensible?",
    options: [
      "Yes - the medical director is qualified to approve clinical equipment",
      "No - the bylaws set the approval threshold, and bypassing it undermines internal controls and governance oversight",
      "Yes if the equipment is needed",
      "Yes if the sterilizer is FDA-approved",
    ],
    correctIndex: 1,
    explanation:
      "Bylaws-defined approval thresholds are how the governing body retains financial oversight. Bypassing the threshold - even for a defensible purchase - is a control failure.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044 (42 CFR 416.41(a))",
    tutor: {
      whyCorrect:
        "The governing body's financial controls exist to ensure capital decisions are deliberate. The fix is process correction, not the equipment itself.",
      whyWrong: {
        A: "Medical director approval doesn't override bylaws-defined financial authority.",
        C: "Need doesn't substitute for required process.",
        D: "Equipment certification is not the governance question.",
      },
      operationalContext:
        "Print the capital approval matrix in the administrator's office. Stamp every PO with the approval level used. Audit annually.",
    },
  },
  {
    id: "asc_post_gov_03",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "An ASC's bylaws still reference an organizational structure (committees, officer titles, voting procedures) that has not matched actual operations for several years. The administrator says everyone knows the bylaws are 'out of date' and works around them. How should governance treat this?",
    options: [
      "No action needed - bylaws are aspirational",
      "Bylaws are the operating charter; an unrevised bylaws document misaligned with actual governance creates ambiguity about decision authority and must be formally revised and re-adopted",
      "Action only when a dispute arises",
      "Update only the section currently in use",
    ],
    correctIndex: 1,
    explanation:
      "Bylaws define who has authority to act on behalf of the organization. When they no longer describe how the organization actually runs, every decision is exposed to challenge: was the committee that approved this even the right one? Did the right body vote? Drift between bylaws and practice is a governance defect that compounds over time.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044 (42 CFR 416.41)",
    tutor: {
      whyCorrect:
        "A bylaws revision is a formal act: drafted, circulated, voted on, recorded in the minutes, and dated. Keep a redline that maps old to new so historical decisions remain interpretable.",
      whyWrong: {
        A: "Bylaws are operative, not aspirational.",
        C: "Disputes are the worst time to discover the bylaws don't match.",
        D: "Partial revisions leave the unrevised sections in conflict with practice.",
      },
      operationalContext:
        "Schedule a bylaws review on a defined cycle (e.g., every 3 years or whenever organizational structure changes materially). Engage counsel for the redline. Re-adopt by formal vote and post the effective date.",
    },
  },
  {
    id: "asc_post_gov_04",
    chapterId: "asc_governance",
    chapterName: "Governance",
    question:
      "An ASC's risk manager keeps a detailed log of incidents, near-misses, and patient complaints. The log is shared with the medical director monthly but never reaches the governing body - the administrator decides what is 'worth bringing up' once a year at the annual meeting. What is the structural defect?",
    options: [
      "No defect - the administrator filters appropriately",
      "Risk data must reach the governing body on a defined, regular cadence so the body can act on its accountability for safety; an annual filtered summary is too thin and removes governance from real-time oversight",
      "Defect only if a serious event is missed",
      "No defect because the medical director sees the data",
    ],
    correctIndex: 1,
    explanation:
      "The governing body's accountability for quality and safety requires access to the underlying data, not just an executive summary delivered once a year. A defined reporting cadence (typically quarterly at minimum, with immediate notification of sentinel events) keeps governance in the loop and supports informed decision-making about resource allocation, policy changes, and corrective action.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0044 (42 CFR 416.41)",
    tutor: {
      whyCorrect:
        "Risk reports to governance should include incident counts by category, trends, open corrective actions, and any sentinel events. The body uses the data to ask questions, direct resources, and confirm that root-cause work is occurring.",
      whyWrong: {
        A: "Filtering by an administrator inserts a single point of judgment between the data and the body that owns accountability.",
        C: "The defect is structural and exists regardless of any specific event.",
        D: "Medical director visibility is part of the picture, not a substitute for governance visibility.",
      },
      operationalContext:
        "Set a quarterly governance report template: incident category counts, sentinel events (with status), top complaints, open corrective actions, and trend versus prior quarter. Add an immediate-notification rule for serious events.",
    },
  },
  {
    id: "asc_post_cr_01",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A patient is discharged after an outpatient procedure with verbal instructions only. The chart contains a generic 'discharge instructions given' check-box but no copy of what was given, no documented teach-back, and no signed acknowledgment by the patient or escort. What is the documentation defect?",
    options: [
      "No defect - the check-box is enough",
      "Discharge instructions must be documented as the specific instructions provided, evidence of patient/escort understanding (such as teach-back or signed acknowledgment), and a copy retained in the record",
      "Defect only if the patient returns with a complication",
      "No defect - procedure-specific instructions are implied",
    ],
    correctIndex: 1,
    explanation:
      "Discharge instructions are a clinical hand-off to the patient and caregiver. The record must show what instructions were provided, that they were understood, and that a copy was given to the patient. A check-box without underlying content does not satisfy the standard, and it leaves the ASC unable to demonstrate what the patient was told if a complication occurs at home.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0143 (42 CFR 416.52)",
    tutor: {
      whyCorrect:
        "Use a procedure-specific discharge instruction template. Have the patient or escort sign acknowledging receipt and understanding. Retain a copy in the chart and give a copy to the patient.",
      whyWrong: {
        A: "A check-box is metadata, not content.",
        C: "Documentation must support practice independent of any particular outcome.",
        D: "Implied instructions are not documented instructions.",
      },
      operationalContext:
        "Build procedure-specific discharge instruction templates with sections for activity, medications, warning signs, follow-up appointment, and emergency contact. Require signed acknowledgment from patient or escort at discharge and retain in the record.",
    },
  },
  {
    id: "asc_post_cr_02",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "An ASC stores paper records for 7 years per its policy. State law requires 10 years. The administrator wants to destroy at year 7. What controls?",
    options: [
      "ASC policy controls",
      "The longer of state or federal retention period applies; 10 years controls and the policy must be amended",
      "HIPAA's 6-year retention controls",
      "Destroy at 7 and notify the state",
    ],
    correctIndex: 1,
    explanation:
      "When state and federal retention periods differ, the longer period applies. Internal policy cannot be shorter than the applicable law.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0148 (42 CFR 416.47(c))",
    tutor: {
      whyCorrect:
        "Build a retention matrix with every applicable rule by record type. Retain for the longest applicable period.",
      whyWrong: {
        A: "Policy can't shorten the law.",
        C: "HIPAA's 6 years applies to certain HIPAA documentation, not medical records broadly.",
        D: "Notification doesn't legalize unlawful destruction.",
      },
      operationalContext:
        "Maintain a retention matrix by record type with state, federal, and other applicable rules. Review with counsel every 2 years.",
    },
  },
  {
    id: "asc_post_cr_03",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A surgeon discovers an error in a signed dictated op note 3 days later. What is the correct way to fix it?",
    options: [
      "Edit the original dictation and re-sign",
      "Add a dated, signed addendum that identifies the error and provides the correction; do not alter the signed original",
      "Have the transcriptionist correct it",
      "Leave it - minor errors don't matter",
    ],
    correctIndex: 1,
    explanation:
      "Authenticated entries are read-only. Corrections are made by addendum that preserves the original and adds the correction to the audit trail.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0143 (42 CFR 416.47(a))",
    tutor: {
      whyCorrect:
        "Addenda preserve the documentary chain. The original stays as written; the addendum identifies the error and the correction with author and timestamp.",
      whyWrong: {
        A: "Editing destroys the audit trail.",
        C: "Transcriptionists aren't authors and can't correct clinical content.",
        D: "Accuracy is the standard, not severity.",
      },
      operationalContext:
        "Lock authenticated reports; provide a one-click 'Add Addendum' workflow that prompts for correction and forces a signature.",
    },
  },
  {
    id: "asc_post_cr_04",
    chapterId: "asc_clinical_records",
    chapterName: "Clinical Records",
    question:
      "A pre-op nursing assessment was completed by an RN, but the chart shows the assessment electronically signed by the charge nurse who was not present and did not perform the assessment. The charge nurse 'signs to keep things moving.' What is the documentation defect?",
    options: [
      "No defect - the charge nurse is authorized",
      "Each entry must be authenticated by the individual who actually performed or witnessed the action; signing for someone else misrepresents authorship and breaks the chain of accountability",
      "Defect only if the assessment is later disputed",
      "No defect because the assessment was performed",
    ],
    correctIndex: 1,
    explanation:
      "Authentication identifies the individual responsible for the entry. When someone other than the actual author signs, the record no longer accurately reflects who did the work - a critical problem for clinical hand-offs, peer review, and legal defensibility. The performing nurse must sign her own work.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0143 (42 CFR 416.47)",
    tutor: {
      whyCorrect:
        "Every entry needs the actual author's identifier (signature or unique electronic credential), date, and time. EHR systems should prevent one user from authenticating in another user's name.",
      whyWrong: {
        A: "Authority over the unit does not include authority to sign for another's clinical work.",
        C: "Defensibility requires accurate authorship at the moment of entry, not after the fact.",
        D: "Performance and authentication are separate requirements; both must be met.",
      },
      operationalContext:
        "Configure the EHR so each user authenticates with personal credentials and cannot countersign as another user. Train all clinical staff that signing for someone else is a documentation integrity violation.",
    },
  },
  {
    id: "asc_post_ip_01",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "After an SPD tech notices a wet pack pulled from the autoclave, the supervisor instructs the tech to dry it with a clean towel and use it. What is the issue?",
    options: [
      "No issue - drying restores sterility",
      "Wet packs are considered non-sterile and must be reprocessed; drying does not restore sterility",
      "Issue only with cloth wraps",
      "Issue only with implants",
    ],
    correctIndex: 1,
    explanation:
      "Moisture in or on a sterilized pack indicates wicking or sterilization failure. The pack is non-sterile and must be returned to decontamination and reprocessed.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "AAMI ST79; AAAHC IP",
    tutor: {
      whyCorrect:
        "Wet packs are a recognized failure mode that compromise sterility. The pack returns to decontamination, the cycle is investigated, and the load may need to be quarantined.",
      whyWrong: {
        A: "Drying doesn't address the underlying sterility breach.",
        C: "Wet packs apply to all wrap types.",
        D: "Implants have additional rules; the wet-pack response applies broadly.",
      },
      operationalContext:
        "Train SPD staff: any wet pack = non-sterile = reprocess. Investigate cycle for steam quality, load configuration, drying time, and chamber issues.",
    },
  },
  {
    id: "asc_post_ip_02",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "An ASC installs a new ultrasound probe used for vascular access. The IFU specifies high-level disinfection between patients. The clinical team wipes with a low-level disinfectant between uses. What is the gap?",
    options: [
      "No gap - wiping is universal",
      "Vascular-access probes contact non-intact tissue and require high-level disinfection per IFU; wiping with low-level disinfectant is non-compliant",
      "Gap only for invasive surgery probes",
      "Gap only if a CRBSI occurs",
    ],
    correctIndex: 1,
    explanation:
      "Spaulding classification governs disinfection level: critical (sterile), semi-critical (high-level), non-critical (low-level). Probes that contact non-intact tissue or sterile sites require at least high-level disinfection.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0240; Spaulding/CDC",
    tutor: {
      whyCorrect:
        "Manufacturer IFU and Spaulding classification together set the required disinfection level. Following only one (or wiping by habit) is non-compliant.",
      whyWrong: {
        A: "Wiping is appropriate only for non-critical surfaces.",
        C: "Vascular-access probes are exactly the use case requiring HLD.",
        D: "The compliance gap exists today regardless of CRBSI events.",
      },
      operationalContext:
        "Maintain a probe inventory with Spaulding classification, IFU on file, required disinfection level, equipment available, and staff training records.",
    },
  },
  {
    id: "asc_post_ip_03",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "An ASC's surgical attire policy permits scrub jackets to leave the building during lunch. A surveyor observes a circulator returning from lunch in the same scrubs and jacket. What does AORN guidance say?",
    options: [
      "No issue - scrubs are clean enough",
      "Scrub attire that has left the controlled environment is considered contaminated and should be changed before re-entry to semi-restricted/restricted areas",
      "No issue if the jacket is removed",
      "Issue only with bloodborne exposure",
    ],
    correctIndex: 1,
    explanation:
      "Scrub attire is considered contaminated once it leaves the controlled environment. Returning to semi-restricted or restricted areas requires fresh scrubs.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "AORN guidelines for surgical attire",
    tutor: {
      whyCorrect:
        "AORN guidance is the recognized standard. Scrub attire policies should align with AORN and explicitly address travel outside the building.",
      whyWrong: {
        A: "Outside contamination is the concern, not visible cleanliness.",
        C: "Removing the jacket doesn't decontaminate the underlying scrubs.",
        D: "The standard applies regardless of bloodborne exposure.",
      },
      operationalContext:
        "Update the attire policy to require fresh scrubs after leaving the building. Provide accessible scrub stations to make compliance practical.",
    },
  },
  {
    id: "asc_post_ip_04",
    chapterId: "asc_infection_prevention_safety",
    chapterName: "Infection Prevention",
    question:
      "An infection preventionist wants to start a hand hygiene observation program but has no time for daily observations. What is a defensible approach?",
    options: [
      "Skip observation - it's optional",
      "Develop a structured observation methodology (defined observers, defined observation times, sample size, data tracking) at a sustainable cadence and report results to QAPI",
      "Self-report by clinicians is sufficient",
      "Camera surveillance only",
    ],
    correctIndex: 1,
    explanation:
      "Hand hygiene observation is a recognized QAPI activity. The methodology can be designed for a sustainable cadence (e.g., 2 observation sessions per month per area) as long as it is structured, documented, and reported.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0240; CDC hand hygiene",
    tutor: {
      whyCorrect:
        "Defensible observation requires methodology: who observes, when, what counts, how sampled, how reported. Sustainability beats heroics.",
      whyWrong: {
        A: "Hand hygiene observation is a standard infection prevention element.",
        C: "Self-report systematically over-reports compliance.",
        D: "Cameras raise privacy and cost concerns; structured human observation is the default.",
      },
      operationalContext:
        "Train 3–5 observers across shifts. Observe 5–10 hand hygiene moments per session, 2–4 sessions per area per month. Report compliance rates monthly to QAPI.",
    },
  },
  {
    id: "asc_post_cred_01",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A locum surgeon is engaged for a single weekend. The MSC says, 'No time for credentialing - he's only here two days.' What is required?",
    options: [
      "Skip credentialing for short engagements",
      "Locum credentialing can be expedited (often via credentialing-by-proxy with a vetted agency under written agreement) but cannot be skipped; the governing body must grant temporary privileges",
      "License verification only",
      "Medical director vouching is sufficient",
    ],
    correctIndex: 1,
    explanation:
      "Locum tenens are subject to the same credentialing standards. Credentialing-by-proxy via a vetted agency is permitted under defined conditions, but the ASC must still grant privileges through its governing body.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45(a))",
    tutor: {
      whyCorrect:
        "Patient safety doesn't relax for short engagements. Credentialing-by-proxy plus governing body privilege grant is the operational pattern.",
      whyWrong: {
        A: "No time-based exemption exists.",
        C: "License alone is insufficient.",
        D: "Vouching is not credentialing.",
      },
      operationalContext:
        "Establish written credentialing-by-proxy agreements with reputable agencies. Require complete files 7 days before the locum's first shift. Verify license and DEA independently.",
    },
  },
  {
    id: "asc_post_cred_02",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A credentialing application is brought to the medical staff committee. The file is missing two professional references and the malpractice claims history. The committee votes to approve, planning to chase the missing items 'after the fact.' What is the issue?",
    options: [
      "No issue - the committee can approve subject to follow-up",
      "Voting to approve an incomplete file substitutes intent for evidence; the committee should defer the decision until the file is complete and only then act on the recommendation",
      "Issue only if the missing items reveal concerns",
      "No issue if the medical director endorses the applicant",
    ],
    correctIndex: 1,
    explanation:
      "Credentialing decisions are evidence-based. References and claims history exist precisely to surface concerns that other documents may not. Approving without reviewing them defeats the purpose of the process and leaves the governing body acting on incomplete information. The fix is procedural: defer until the file is complete.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45)",
    tutor: {
      whyCorrect:
        "The credentialing checklist defines what 'complete' means. Incomplete files do not advance to vote. If timing pressure is a concern, the answer is to start the work earlier, not to weaken the review.",
      whyWrong: {
        A: "Conditional approvals create a class of approved-but-unverified clinicians and erode the standard.",
        C: "The risk is in not knowing - the committee cannot evaluate concerns it has not yet seen.",
        D: "Endorsement supplements but does not replace the documentary record.",
      },
      operationalContext:
        "Build a 'complete file' gate into the credentialing workflow. Files missing required elements do not appear on the committee agenda. Track turnaround time on missing-item requests so coordination, not committee, becomes the constraint.",
    },
  },
  {
    id: "asc_post_cred_03",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "A physician assistant assigned to ortho cases at the ASC has begun performing first-assist duties on cases outside her granted privilege list. The surgeon vouches for her competency. How should the ASC respond?",
    options: [
      "Allow it because the surgeon supervises her",
      "Privileges define what a clinician may do at the facility; activity outside the privilege list must stop until the privilege list is formally amended through the credentialing committee and governing body",
      "Allow it for cases under a defined dollar threshold",
      "Allow it as long as outcomes are good",
    ],
    correctIndex: 1,
    explanation:
      "Privileges set the boundary of permitted activity. When a clinician operates outside that boundary, it does not matter that someone supervises or that outcomes are good - the activity is unauthorized at the facility level. The fix is procedural: stop, request the additional privilege, document training/competency, and obtain governing body approval.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45)",
    tutor: {
      whyCorrect:
        "Surveyors will review privilege lists against actual case logs to detect drift. A clinician performing outside her privileges is the same finding whether the supervising physician is comfortable with it or not.",
      whyWrong: {
        A: "Supervisor comfort does not modify the facility privilege grant.",
        C: "Dollar thresholds are not part of the credentialing standard.",
        D: "Outcomes are evaluated within the bounds of granted privileges, not as a justification for exceeding them.",
      },
      operationalContext:
        "Run periodic case-log audits cross-referenced with privilege lists. Train surgeons and clinicians that scope-creep is a credentialing matter and must be addressed through the formal privilege amendment process.",
    },
  },
  {
    id: "asc_post_cred_04",
    chapterId: "asc_credentialing",
    chapterName: "Credentialing & Privileging",
    question:
      "An anesthesiologist's DEA registration is set to expire on the 15th of the month. The credentialing coordinator notices on the 20th that no renewal documentation is on file. What is the appropriate response?",
    options: [
      "Allow the anesthesiologist to keep working while staff confirm renewal by phone",
      "Suspend privileges that depend on the lapsed credential immediately, prevent further controlled-substance ordering, and require documented proof of renewal before reinstating",
      "Wait 30 days for grace period processing, then act if still lapsed",
      "Refer the matter to the next quarterly credentialing committee meeting",
    ],
    correctIndex: 1,
    explanation:
      "Expirables (DEA, state license, board certification, BLS/ACLS, malpractice, NPI updates) are non-discretionary. When a credential lapses, the privileges that depend on it lapse with it. The corrective action is to stop the dependent activity, document the gap, and reinstate only with primary-source-verified renewal - not phone confirmation, not assumed grace periods.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0091 (42 CFR 416.45)",
    tutor: {
      whyCorrect:
        "An expired DEA means no authority to order or administer scheduled drugs. The ASC must treat this as a hard stop on the dependent privileges and document the suspension and reinstatement decisions in the credentialing file.",
      whyWrong: {
        A: "Verbal confirmation is not primary source verification; the credential is lapsed until proven renewed.",
        C: "There is no automatic grace period - the credential is either active or it is not.",
        D: "Quarterly cadence is the wrong cadence for an active expirable; this requires immediate action.",
      },
      operationalContext:
        "Maintain an expirables tracker with 90/60/30/7-day reminders to the clinician and credentialing coordinator. Build automated suspension workflows that flag the OR scheduler and pharmacy if a credential reaches the expiration date without verified renewal.",
    },
  },
  {
    id: "asc_post_qm_01",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "An ASC launches a PIP titled 'Reduce post-op nausea.' The charter has a problem statement and a proposed intervention but no specified owner, no defined measurement frequency, and no closeout criteria. What is the design issue?",
    options: [
      "No issue - the project topic is appropriate",
      "A PIP charter must specify an owner accountable for the work, a measurement frequency, and explicit criteria for what constitutes success or closeout, otherwise the project cannot be evaluated or closed",
      "Issue only if the project takes longer than expected",
      "No issue if the medical director is informally responsible",
    ],
    correctIndex: 1,
    explanation:
      "PIP charters are accountability documents. Without a named owner, the work has no driver; without a measurement plan, there is nothing to evaluate; without closeout criteria, the project drifts indefinitely. These are the elements surveyors look for first when reviewing any PIP.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "A complete charter includes problem, baseline, target, owner, measurement frequency, intervention(s), timeline, and explicit criteria for success or closeout. Missing elements weaken the charter as evidence of a managed improvement effort.",
      whyWrong: {
        A: "Topic appropriateness is necessary but not sufficient.",
        C: "Schedule slippage is a downstream consequence, not the root design defect.",
        D: "Informal responsibility is unauditable; the charter must name the accountable individual.",
      },
      operationalContext:
        "Adopt a one-page PIP charter template. Require sign-off by the QAPI committee before the PIP starts work. Reject charters missing required fields rather than launching the project incomplete.",
    },
  },
  {
    id: "asc_post_qm_02",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "The QAPI committee notices its monthly infection-rate denominator looks wrong - case counts seem too high. Members joke about 'bad data' but proceed to discuss the rate anyway and conclude it is acceptable. What is the QAPI failure?",
    options: [
      "No failure - discussion occurred and a conclusion was reached",
      "Decisions made on data the committee believes is incorrect are unsound; QAPI must validate the data, document the validation, and only then act on the result",
      "Failure only if the conclusion turns out to be wrong",
      "No failure if the discussion was thorough",
    ],
    correctIndex: 1,
    explanation:
      "Data integrity is foundational to QAPI. If the committee suspects the data is wrong, the correct response is to pause, identify the source of the discrepancy, correct it, and re-present the validated data - not proceed to a conclusion on numbers the committee itself does not trust.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "Surveyors expect to see evidence that data sources are validated, that reconciliation steps exist (e.g., periodic reconciliation between case scheduling, billing, and QAPI denominators), and that suspect data triggers investigation rather than discussion-as-usual.",
      whyWrong: {
        A: "Discussion of bad data produces unreliable conclusions.",
        C: "The failure is structural and exists regardless of whether the conclusion happens to be correct.",
        D: "Thoroughness on bad data is still wasted effort.",
      },
      operationalContext:
        "Document the data sources and validation steps for each indicator in the QAPI plan. When the committee questions data, table the indicator, assign a validation owner with a deadline, and revisit at the next meeting with the corrected source.",
    },
  },
  {
    id: "asc_post_qm_03",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "An ASC's QAPI dashboard tracks indicators only against its own historical performance. The committee never compares its rates to peer ASC benchmarks or national datasets. What is the limitation?",
    options: [
      "No limitation - internal trends are what matter",
      "Without external benchmarks the committee cannot tell whether 'stable' performance is actually acceptable; QAPI should compare to peer or national rates wherever published benchmarks exist",
      "External benchmarks are optional for ASCs",
      "Limitation only if a regulator requests benchmarks",
    ],
    correctIndex: 1,
    explanation:
      "Internal trends answer 'are we improving' but not 'are we safe enough.' External benchmarks (NHSN SIRs, AHRQ measures, specialty society rates, accreditor publications) provide the absolute reference point that internal trends cannot. A program that only looks inward can declare itself stable while sitting well above peer performance.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "Surveyors expect to see at least one external comparator per major indicator. The QAPI committee should document the benchmark source, the comparison, and any action triggered when the ASC sits above the benchmark.",
      whyWrong: {
        A: "Internal stability without external context is incomplete.",
        C: "Reasonable benchmarking is standard expectation, not optional.",
        D: "The expectation is on the program, independent of regulator requests.",
      },
      operationalContext:
        "Catalog the benchmark source for each indicator (NHSN, AHRQ, society data, accreditor's published norms). Refresh annually and document the comparison in QAPI minutes alongside the rate.",
    },
  },
  {
    id: "asc_post_qm_04",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "Staff at an ASC tell the surveyor privately that they don't report adverse events because the medical director publicly criticized a nurse who reported a medication error last year. The event log shows almost no events. How does this affect the QAPI program?",
    options: [
      "No effect - fewer events means safer care",
      "A punitive culture suppresses reporting and produces a falsely clean event log; the QAPI program is operating without its primary data source and the suppression itself is a top-priority QAPI finding",
      "Effect only if a sentinel event is missed",
      "No effect because the medical director sets the tone appropriately",
    ],
    correctIndex: 1,
    explanation:
      "Event reporting is the input that drives the entire QAPI program. When staff stop reporting because of fear of reprisal, the program loses its eyes and ears - the data goes down, but the underlying risk does not. Surveyors specifically interview staff about reporting culture and treat suppression as a structural QAPI failure.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "Just culture and non-punitive reporting are explicit expectations in modern QAPI guidance. The corrective action is a written non-punitive reporting policy, leadership reset, and visible acts that demonstrate reports are valued.",
      whyWrong: {
        A: "Low counts can reflect either safe care or under-reporting; without reporting culture data the program cannot tell which.",
        C: "Suppression is a chronic structural finding regardless of any single missed event.",
        D: "Tone-setting is the issue here - the criticism event undermines reporting independent of intent.",
      },
      operationalContext:
        "Publish a non-punitive reporting policy. Track event report volume and staff perception of safety culture (annual survey). Investigate sudden drops in reporting as potentially indicating suppression rather than improvement.",
    },
  },
  {
    id: "asc_post_qm_05",
    chapterId: "asc_quality_management",
    chapterName: "Quality Management",
    question:
      "Peer review at an ASC consists of one chart per surgeon per year, scored on a 1–5 scale by a peer in the same specialty. Scores are filed in the credentialing folder. The QAPI committee never sees the data. How would a surveyor evaluate this peer review program?",
    options: [
      "Acceptable - peer review is a confidential credentialing activity, separate from QAPI",
      "Peer review findings should feed both individual provider evaluation and the QAPI program; aggregate trends, recurring case types, and specialty-level signals belong in QAPI analysis with appropriate confidentiality protections",
      "Acceptable as long as every surgeon gets one chart reviewed per year",
      "Acceptable if the medical director signs off on each score",
    ],
    correctIndex: 1,
    explanation:
      "Peer review serves two legitimate purposes: individual practitioner evaluation (feeds OPPE/FPPE and reappointment) and program-level learning (feeds QAPI). De-identified or aggregated findings - recurring complications by procedure type, documentation gaps, technique variances - should reach the QAPI committee so the program can act on patterns, not just on individuals.",
    xpReward: 12,
    isSwipe: false,
    cmsTag: "Q-0061 (42 CFR 416.43)",
    tutor: {
      whyCorrect:
        "A mature program separates the identifiable findings (which stay in the credentialing/peer review file under state peer review protections) from the aggregate learning (which is summarized for QAPI). Both products come from the same review activity and both are necessary for accreditation-grade quality oversight.",
      whyWrong: {
        A: "Confidentiality of individual findings does not exempt the program from feeding aggregate learning into QAPI.",
        C: "Volume of reviews is one input; the analytic loop into QAPI is the missing piece.",
        D: "Medical director sign-off is an internal control, not a substitute for systemic feedback into the QAPI program.",
      },
      operationalContext:
        "Standardize the peer review form to capture both an individual score (kept confidential per state peer review statute) and a structured set of de-identified findings (case mix, complication category, documentation issues) that the QAPI coordinator aggregates quarterly. Present aggregate trends at QAPI; document any resulting interventions.",
    },
  },
];
