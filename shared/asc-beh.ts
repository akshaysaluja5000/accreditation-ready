import type { Level } from "./schema";

export const ascBehLevel: Level = {
  id: "asc_beh",
  module: "asc",
  name: "Behavioral Health Services",
  description: "AAAHC v44 BEH - mental health and substance use disorder services in ambulatory settings, telehealth delivery, and patient rights in behavioral health.",
  icon: "Brain",
  color: "hsl(280, 55%, 48%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "BEH: Behavioral Health Services",
    plainLanguageSummary:
      "The BEH category applies to ambulatory organizations that provide behavioral health services including mental health evaluation and treatment, substance use disorder (SUD) treatment, or both. Standards address therapeutic settings, patient rights specific to behavioral health (including restraint and seclusion restrictions), individualized treatment planning, documentation requirements, continuity of care, and staff competencies. Telehealth delivery of behavioral health services is explicitly addressed with specific requirements for privacy, therapeutic environment, and documentation.",
    keyOperationalExpectations: [
      "Therapeutic settings are appropriate for the type and intensity of behavioral health services provided.",
      "Patient rights specific to behavioral health - including freedom from inappropriate restraint and seclusion - are communicated and protected.",
      "Each patient has an individualized treatment plan based on comprehensive assessment.",
      "Staff providing behavioral health services have documented qualifications and training appropriate to their scope of practice.",
      "Continuity of care is facilitated through care coordination and discharge planning.",
      "Telehealth behavioral health services meet specific requirements for therapeutic environment and informed consent.",
    ],
    commonRiskPoints: [
      "Group therapy rooms lack adequate privacy to prevent auditory or visual disclosure to other patients.",
      "Treatment plans are generic rather than individualized - lacking measurable goals or specific intervention plans.",
      "Staff qualifications for behavioral health are not verified - scope of practice for licensed counselors vs. psychologists is unclear.",
      "Telehealth behavioral health visits lack documentation of the technology platform used and privacy protections in place.",
    ],
    aaahcStandards: ["BEH.100", "BEH.110", "BEH.120", "BEH.130", "BEH.140", "BEH.150"],
  },
  studyMaterial: [
    {
      title: "What makes a therapy room appropriate for behavioral health services?",
      content:
        "A room used for individual therapy must provide both visual and sound privacy so that conversations cannot be overheard by people in nearby rooms or hallways. Group therapy spaces must also protect what participants share from being heard outside the group. Rooms must be free from physical hazards that could be used for self-harm.",
      keyPoint:
        "Behavioral health settings require true privacy, meaning both visual and sound privacy. Thin walls or open doors that allow conversations to be overheard are not acceptable.",
    },
    {
      title: "What extra privacy protections apply to substance use disorder records?",
      content:
        "Records for patients being treated for substance use disorders have stronger privacy protections than regular medical records. Most disclosures require the patient's specific written consent, even to share information with other treating providers. This applies in addition to HIPAA, not instead of it.",
      keyPoint:
        "Substance use disorder records cannot be shared with most people, including other providers, without the patient's specific written consent.",
    },
    {
      title: "What should a behavioral health treatment plan include?",
      content:
        "Each patient must have an individualized treatment plan based on their specific assessment. The plan must include measurable goals with target dates, the specific treatment methods that will be used, which providers are involved, and a discharge planning component. Generic plans that look the same for every patient do not meet the standard.",
      keyPoint:
        "Treatment plans must be specific to the individual patient and include measurable goals. A general plan that applies to everyone does not qualify.",
    },
    {
      title: "What credentials must staff have to provide behavioral health services?",
      content:
        "Staff providing behavioral health services must hold the license required by their state for the type of services they provide. A licensed counselor and a licensed psychologist have different scopes of practice and cannot perform the same tasks. Staff who are not yet fully licensed must be formally supervised by someone who is.",
      keyPoint:
        "Behavioral health licenses are state-specific and scope-specific. Supervision arrangements for associate-licensed staff must be formally documented.",
    },
    {
      title: "When does discharge planning begin for a behavioral health patient?",
      content:
        "Discharge planning must begin at the time of admission, not when the patient is about to leave. If a patient needs a different level of care, there must be a process for connecting them with the right services. If a patient stops coming to treatment without completing the program, the facility must document attempts to follow up with that person.",
      keyPoint:
        "Discharge planning starts at admission. Patients who disengage early require documented follow-up attempts.",
    },
  ],
  questions: [
    {
      id: "asc_beh_01",
      question:
        "An ambulatory behavioral health organization conducts individual therapy sessions in offices separated by thin partition walls where conversations can be overheard in adjacent offices. What BEH.100 requirement is at risk?",
      options: [
        "Visual privacy is met - auditory privacy is not required in outpatient settings",
        "BEH.100 requires both visual and auditory privacy in individual therapy settings - overheard conversations violate patient confidentiality and therapeutic privacy",
        "Acoustic privacy is the patient's responsibility - they should speak quietly",
        "Partitions are acceptable if patients sign a confidentiality waiver"
      ],
      correctIndex: 1,
      explanation:
        "BEH.100 requires that individual therapy settings provide adequate privacy - both visual and auditory. Therapy conversations that can be overheard through thin partitions violate the patient's privacy and undermine the therapeutic relationship.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Confidentiality is the foundation of the therapeutic relationship in behavioral health. Patients who know their conversations can be overheard may not disclose sensitive information - compromising the quality of care. Physical privacy safeguards this disclosure-safe environment.",
        whyWrong: {
          A: "Auditory privacy is specifically required - visual-only privacy is not sufficient in individual therapy settings.",
          C: "The organization bears the responsibility for providing an appropriately private therapeutic environment - this cannot be shifted to patients.",
          D: "Confidentiality waivers do not address the therapeutic environment requirement or the protection of other patients whose conversations may also be overheard.",
        },
        operationalContext:
          "Conduct an acoustic privacy assessment of all therapy rooms. Install sound-dampening panels, white noise machines, or door sweeps where needed. Ensure that conversational volume in one room cannot be understood in adjacent spaces.",
      },
    },
    {
      id: "asc_beh_02",
      question:
        "A patient receiving substance use disorder (SUD) treatment asks that their provider not share any treatment information with their primary care physician. Under 42 CFR Part 2, how should this be handled?",
      options: [
        "The standard HIPAA treatment, payment, and operations exception allows SUD information to be shared with the primary care physician",
        "42 CFR Part 2 requires specific patient consent for most disclosures of SUD records - the patient's request must be respected unless a legally defined exception applies",
        "The primary care physician may always access SUD records through a HIE",
        "SUD records are subject to the same disclosure rules as all other health records under HIPAA"
      ],
      correctIndex: 1,
      explanation:
        "42 CFR Part 2 provides stronger confidentiality protections for SUD treatment records than HIPAA. These records generally cannot be disclosed to any person or entity - including treating providers - without the patient's written consent, unless a specific exception applies (e.g., medical emergency, court order).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "42 CFR Part 2 was designed specifically to protect SUD patients from discrimination and to encourage treatment-seeking. The confidentiality protections are deliberately stronger than HIPAA to address the unique stigma and legal risks associated with SUD disclosure.",
        whyWrong: {
          A: "HIPAA's treatment exception does not override 42 CFR Part 2 - the stronger protection applies.",
          C: "Health information exchanges must also comply with 42 CFR Part 2 - SUD information cannot be shared through a HIE without appropriate consent.",
          D: "SUD records have stronger protections than standard HIPAA records - the two frameworks are not equivalent.",
        },
        operationalContext:
          "Train all clinical and administrative staff on 42 CFR Part 2 requirements. Use a Part 2-compliant consent form for any SUD record disclosure. Implement EHR safeguards to flag SUD records requiring Part 2 consent before disclosure.",
      },
    },
    {
      id: "asc_beh_03",
      question:
        "A behavioral health organization's treatment plans all contain the same boilerplate goal: 'Patient will improve coping skills.' Is this an adequate treatment plan under BEH.120?",
      options: [
        "Yes - coping skills improvement is a universally appropriate behavioral health goal",
        "No - treatment goals must be specific, measurable, and individualized to the patient's presenting problems and diagnosis",
        "Yes - the goal is appropriate as long as a specific intervention type is listed",
        "Treatment plan specificity is left to the clinician's discretion - AAAHC does not prescribe goal format"
      ],
      correctIndex: 1,
      explanation:
        "BEH.120 requires individualized treatment plans with measurable goals. A boilerplate goal like 'improve coping skills' is not specific to the patient's presenting problem, not measurable, and not individualized. A compliant goal would be: 'Patient will identify and practice three specific coping strategies for management of panic attacks within 30 days, as evidenced by self-report and clinician assessment.'",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Individualized, measurable goals drive clinical accountability - they allow the clinician and patient to assess whether treatment is working. Generic goals offer no basis for assessing progress or adjusting the treatment approach.",
        whyWrong: {
          A: "Generic goals are not individualized to the patient's specific diagnosis, severity, or functional impairment.",
          C: "Specificity of interventions is important, but the goals themselves must also be specific and measurable.",
          D: "AAAHC BEH.120 requires individualized treatment plans with measurable goals - clinician discretion operates within these parameters.",
        },
        operationalContext:
          "Train clinicians to write SMART goals: Specific (related to the presenting problem), Measurable (observable behavior or validated scale score), Attainable, Relevant (to the patient's stated priorities), and Time-bound (target date or interval). Audit a sample of treatment plans monthly for SMART goal quality.",
      },
    },
    {
      id: "asc_beh_04",
      question:
        "An associate-licensed counselor (working toward full licensure) provides therapy at a behavioral health ASC. What BEH.130 documentation must be in place?",
      options: [
        "The associate license is sufficient - no additional documentation is required",
        "A documented supervision arrangement with a fully licensed clinician, including the supervisor's credentials and the frequency and format of supervision",
        "Only the supervising clinician's credentials need to be on file - the associate's credential is assumed from employment",
        "Associate-licensed staff may not provide services in AAAHC-accredited settings"
      ],
      correctIndex: 1,
      explanation:
        "BEH.130 requires that supervision arrangements for associate-licensed or license-eligible staff are formally documented - including the supervisor's name and credentials, the supervisory relationship (what services, at what frequency, in what format), and the associate's current credential status.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Associate licensure is a supervised practice credential - the supervision arrangement is the clinical safeguard that protects patients. Without documented supervision, the organization cannot demonstrate that required oversight is occurring.",
        whyWrong: {
          A: "Associate licenses authorize supervised practice - the supervision arrangement is the required safeguard.",
          C: "Both the associate's credential and the supervisor's credentials must be verified and on file.",
          D: "Associate-licensed staff may provide services in AAAHC settings - with documented, qualified supervision.",
        },
        operationalContext:
          "Create a supervision agreement template for each associate-licensed clinician: supervisor name, credentials, license number, supervision modality (individual, group, or both), frequency (weekly, bi-weekly), and specific cases/services covered. File signed copies and update when supervision arrangements change.",
      },
    },
    {
      id: "asc_beh_05",
      question:
        "A patient abruptly stops attending behavioral health sessions after four appointments. Under BEH.150, what must the organization do?",
      options: [
        "Close the case after 30 days of no contact - no further action is required",
        "Attempt documented follow-up with the patient who disengaged prematurely - the organization must have a policy for following up with patients who leave treatment early",
        "Immediately refer the case to the emergency crisis line",
        "Send the patient's file to their primary care physician automatically"
      ],
      correctIndex: 1,
      explanation:
        "BEH.150 requires that the organization has a process for following up with patients who disengage from treatment prematurely. Behavioral health disengagement can signal a crisis or relapse - documented outreach attempts are required to demonstrate the organization fulfilled its duty of care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Premature disengagement from behavioral health treatment is a clinical concern - patients who abruptly stop may be experiencing a crisis, medication side effects, or therapeutic rupture. A documented outreach process ensures the organization fulfills its clinical and ethical duty to the patient.",
        whyWrong: {
          A: "Passive case closure without outreach attempts does not fulfill the continuity of care obligation.",
          C: "A crisis referral may be appropriate in some situations but is not the standard response to missed appointments.",
          D: "Automatic disclosure to the primary care physician may violate 42 CFR Part 2 if SUD records are involved, and standard HIPAA authorization requirements apply.",
        },
        operationalContext:
          "Develop a 'No Show/Missed Appointment' protocol: (1) attempt phone contact on the day of the missed appointment; (2) send a letter within 72 hours; (3) attempt a second phone call within one week; (4) document all attempts and outcomes. For patients with safety concerns, escalate the outreach intensity.",
      },
    },
    {
      id: "asc_beh_06",
      question:
        "What criterion system is referenced by AAAHC for determining the appropriate level of care for substance use disorder (SUD) patients?",
      options: [
        "DSM-5 severity specifiers alone",
        "American Society of Addiction Medicine (ASAM) Patient Placement Criteria",
        "GAF (Global Assessment of Functioning) score",
        "Beck Anxiety Inventory scores"
      ],
      correctIndex: 1,
      explanation:
        "The BEH.150 guidance references ASAM Patient Placement Criteria as the tool for determining appropriate level of care for SUD patients. ASAM criteria assess six dimensions of functioning to guide placement decisions across outpatient, intensive outpatient, residential, and medically managed treatment levels.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "ASAM criteria are the nationally recognized standard for SUD level-of-care determination. Using ASAM ensures clinical decisions about treatment intensity are systematic, evidence-based, and defensible.",
        whyWrong: {
          A: "DSM-5 severity specifiers describe diagnosis severity - they do not guide treatment level placement decisions.",
          C: "The GAF has largely been replaced by more specific functioning measures and is not the referenced SUD placement tool.",
          D: "Beck Anxiety Inventory measures anxiety symptoms - it is not a level-of-care placement tool.",
        },
        operationalContext:
          "Train SUD intake clinicians on ASAM criteria. Use a validated ASAM placement tool at intake and re-assess at defined intervals (typically monthly for IOP patients). Document ASAM criteria findings as the basis for all level-of-care recommendations.",
      },
    },
    {
      id: "asc_beh_07",
      question:
        "A behavioral health organization begins providing telehealth therapy sessions. Under BEH.100 telehealth requirements, what must the clinician verify at the beginning of each session?",
      options: [
        "The patient's insurance eligibility and co-pay amount",
        "That the patient is in a private location that ensures their auditory and visual privacy during the session",
        "That the patient has a stable internet connection",
        "Telehealth sessions have no specific privacy requirements beyond HIPAA"
      ],
      correctIndex: 1,
      explanation:
        "BEH.100 guidance for telehealth behavioral health services requires that clinicians encourage and confirm that patients are in a location where their privacy is protected. The clinician cannot control the patient's environment, but they must actively address it at the start of each session.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Telehealth behavioral health sessions involve sensitive disclosures that require privacy protection on both ends. A patient speaking from their car in a parking lot has very different privacy than one speaking from a private office. The clinician must actively assess and document the patient's environmental privacy.",
        whyWrong: {
          A: "Insurance eligibility is an administrative function - not a therapeutic environment requirement.",
          C: "Internet stability affects session quality but is not the BEH.100 privacy requirement.",
          D: "HIPAA establishes baseline privacy requirements, but BEH.100 adds specific telehealth therapeutic environment requirements for behavioral health.",
        },
        operationalContext:
          "Open each telehealth session with a standard privacy verification: 'Are you in a private location where others cannot hear our conversation? Are you able to speak freely?' Document the response. If the patient is not in a private location, offer to reschedule or discuss only non-sensitive topics until privacy is secured.",
      },
    },
    {
      id: "asc_beh_08",
      question:
        "Under BEH.110, when may a patient in a behavioral health program be placed in seclusion or restraint?",
      options: [
        "Whenever the patient becomes disruptive to the therapeutic group process",
        "Only as a last resort when there is an immediate safety risk and less restrictive interventions have been ineffective or are not appropriate - and only in compliance with applicable state and federal regulations",
        "Restraint may be used at the clinical team's discretion for non-compliant patients",
        "Seclusion is always prohibited in ambulatory behavioral health settings under any circumstances"
      ],
      correctIndex: 1,
      explanation:
        "BEH.110 states that patients have the right to be free from inappropriate restraint or seclusion. When restraint or seclusion is used, it must be a last resort for imminent safety emergencies, using the least restrictive approach, in compliance with applicable federal and state regulations (including CMS Conditions of Participation and state mental health law).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Restraint and seclusion are inherently coercive - their use must be strictly limited to immediate safety emergencies. Routine or punitive use is prohibited. Each use must be clinically justified, time-limited, and documented.",
        whyWrong: {
          A: "Disruption to group process does not meet the threshold for restraint or seclusion - it requires de-escalation or removal from the group.",
          C: "Clinical team discretion does not justify restraint use - specific regulatory criteria must be met.",
          D: "Seclusion is not categorically prohibited in all ambulatory settings - but its use must meet strict safety and regulatory criteria.",
        },
        operationalContext:
          "Train all behavioral health staff in crisis de-escalation techniques (e.g., CPI or therapeutic options training). Establish a clear policy on restraint/seclusion use that meets state law and federal requirements. Conduct a post-event review for every restraint or seclusion episode.",
      },
    },
    {
      id: "asc_beh_09",
      question:
        "A behavioral health ASC treats both mental health and substance use disorder patients. What specific privacy protection applies to SUD records that does not apply to general mental health records?",
      options: [
        "SUD records must be stored in a separate physical file cabinet",
        "42 CFR Part 2 requires SUD records to be kept confidential and not disclosed without explicit patient consent, even to treating providers - with limited exceptions",
        "SUD records must be destroyed after five years regardless of state law",
        "Only the patient's psychiatrist may access SUD records"
      ],
      correctIndex: 1,
      explanation:
        "42 CFR Part 2 imposes stricter confidentiality on SUD records than HIPAA. Unlike standard medical records (which can be shared for treatment under HIPAA's treatment exception), SUD records generally require explicit patient consent before disclosure - even to other treating providers, with narrow exceptions for emergencies and court orders.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The stronger protections under 42 CFR Part 2 recognize that SUD patients face unique risks from disclosure - including criminal penalties, employment consequences, and family disruption. The consent requirement reflects the need for trust in SUD treatment relationships.",
        whyWrong: {
          A: "Physical storage location is a practical consideration but is not what distinguishes 42 CFR Part 2 from HIPAA.",
          C: "Record retention is governed by state law, not 42 CFR Part 2.",
          D: "42 CFR Part 2 restricts disclosure to all parties without consent - it is not limited to access by psychiatrists.",
        },
        operationalContext:
          "Develop a consent form that meets 42 CFR Part 2 requirements: patient name, program name, person/organization to whom disclosure is made, purpose of disclosure, specific information to be disclosed, and patient's right to revoke. Track consent status in the EHR.",
      },
    },
    {
      id: "asc_beh_10",
      question:
        "Under BEH.120, what must be documented to show a patient was involved in their own treatment planning?",
      options: [
        "Patient signature on any form is sufficient to demonstrate involvement",
        "Documentation of the patient's input into goals and preferences, their agreement (or documented disagreement) with the treatment plan, and any modifications made based on their feedback",
        "Patient involvement is assumed unless the patient specifically objects",
        "Patient involvement only needs to be documented at the initial treatment plan - updates can be clinician-directed"
      ],
      correctIndex: 1,
      explanation:
        "BEH.120 requires that the patient participates in treatment planning and that this participation is documented. The documentation should reflect actual collaboration - the patient's stated goals, their agreement with the plan, any modifications made based on their input, and the process by which the plan was developed jointly.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patient involvement in treatment planning is both an ethical requirement and a therapeutic strategy. Research consistently shows that patient-led goal-setting produces better treatment adherence and outcomes. Documentation must prove the collaboration occurred - not just note that the plan was reviewed.",
        whyWrong: {
          A: "A signature proves the patient was present - not that they were meaningfully involved in developing the plan.",
          C: "Involvement cannot be assumed - it must be documented.",
          D: "Treatment plan updates should also involve patient input - ongoing collaboration throughout treatment is required.",
        },
        operationalContext:
          "Use a treatment plan format that includes a 'Patient Goals' section filled in by the patient or in the patient's own words. Have patients co-sign the treatment plan. Document any disagreements and how they were addressed. At each review, document patient's self-assessment of progress toward goals.",
      },
    },
    {
      id: "asc_beh_11",
      question:
        "What is the significance of 'level of care' determination in ambulatory behavioral health treatment?",
      options: [
        "Level of care only matters for billing purposes - all patients receive equivalent intensity of services",
        "Level of care determines the intensity of services a patient receives, matching clinical need to treatment intensity using criteria such as ASAM for SUD or equivalent criteria for mental health",
        "Level of care is determined solely by the patient's insurance plan",
        "All ambulatory behavioral health patients receive the same level of care by definition"
      ],
      correctIndex: 1,
      explanation:
        "Level-of-care determination matches a patient's clinical severity and needs to the appropriate intensity of services. For SUD, ASAM criteria guide this decision. Appropriate matching prevents under-treatment (insufficient intensity for severe needs) or over-treatment (more intensive and costly services than clinically indicated).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Level-of-care matching is a clinical safety issue - a patient with severe SUD receiving weekly outpatient counseling when they need intensive outpatient (IOP) or residential treatment is under-treated and at risk for serious adverse outcomes including relapse and death.",
        whyWrong: {
          A: "Service intensity must be clinically determined, not assumed to be equivalent across patients.",
          C: "Insurance coverage may affect access, but clinical need must drive the level-of-care recommendation - the organization then advocates for appropriate coverage.",
          D: "Ambulatory behavioral health includes a spectrum from outpatient to intensive outpatient to partial hospitalization - all are different levels of care.",
        },
        operationalContext:
          "Implement level-of-care assessment at intake using ASAM criteria (for SUD) or an equivalent validated tool (for mental health). Document the level-of-care rationale. Reassess at each clinical review. If a patient's needs exceed your organization's level of care, refer to a higher-intensity program.",
      },
    },
    {
      id: "asc_beh_12",
      question:
        "A behavioral health organization uses master's-level counselors to conduct psychiatric medication evaluations and prescribe psychotropic medications. Is this practice compliant under BEH.130?",
      options: [
        "Yes - master's-level counselors may prescribe medications if supervised by a psychiatrist",
        "No - prescribing psychotropic medications requires licensure as a prescribing provider (psychiatrist, psychiatric APRN, or as authorized by state law) - master's-level counselors are not authorized to prescribe",
        "Prescribing is permitted if the counselor has completed a medication management training course",
        "BEH.130 does not address prescribing authority"
      ],
      correctIndex: 1,
      explanation:
        "BEH.130 requires that staff practice within their licensed scope of practice. Prescribing psychotropic medications requires prescriptive authority under state law - which is granted to physicians (psychiatrists), psychiatric APRNs, physician assistants with prescriptive authority, and in some states, pharmacists - not to master's-level counselors regardless of supervision.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Scope of practice for behavioral health licensure is clearly defined in state law. Master's-level counselors (LPC, LCSW, etc.) are authorized to provide psychotherapy and counseling - prescribing medications is outside their legal scope in all US states.",
        whyWrong: {
          A: "Supervision does not expand scope of practice - it supports practice within the defined scope.",
          C: "Training courses do not confer prescriptive authority - state licensure and prescriptive authority designation are required.",
          D: "BEH.130 directly addresses staff qualifications and scope of practice - it is central to this issue.",
        },
        operationalContext:
          "Create a scope-of-practice reference for each license type at your organization. Clearly delineate who may prescribe, who may diagnose, and who may conduct assessments. Include scope boundaries in job descriptions and use them to assign clinical responsibilities appropriately.",
      },
    },
    {
      id: "asc_beh_13",
      question:
        "A patient in a behavioral health program is diagnosed with co-occurring major depressive disorder and alcohol use disorder. Under BEH.120, how should the treatment plan address both conditions?",
      options: [
        "Each condition requires a separate treatment plan managed by different providers without coordination",
        "The integrated treatment plan should address both diagnoses with specific goals and interventions for each - recognizing their interaction and the need for coordinated treatment",
        "Only the primary diagnosis (whichever is more severe) needs to be addressed in the treatment plan",
        "Alcohol use disorder requires a separate program - it cannot be addressed in a mental health treatment plan"
      ],
      correctIndex: 1,
      explanation:
        "BEH.120 requires individualized treatment plans based on comprehensive assessment - and for patients with co-occurring disorders, this means integrated treatment addressing both conditions simultaneously. Siloed, condition-separate treatment is not as effective as integrated dual-diagnosis care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Co-occurring mental health and SUD disorders are the norm rather than the exception. Research shows that integrated treatment of both conditions simultaneously produces better outcomes than sequential or parallel treatment by separate teams.",
        whyWrong: {
          A: "Separate plans without coordination fragment care - integrated treatment is the evidence-based best practice.",
          C: "Both diagnoses require specific goals and interventions - the 'primary' diagnosis framing may minimize the importance of addressing both.",
          D: "Integrated behavioral health programs are specifically designed to address both mental health and SUD concurrently.",
        },
        operationalContext:
          "Train clinicians in integrated dual-diagnosis treatment. Use a treatment plan format that explicitly addresses co-occurring conditions. Assign an integrated care coordinator or case manager for patients with multiple diagnoses to ensure care coordination across providers.",
      },
    },
    {
      id: "asc_beh_14",
      question:
        "What must be documented when a behavioral health patient refuses a recommended treatment intervention?",
      options: [
        "Nothing - patient autonomy means refusal requires no documentation",
        "The refusal must be documented along with the clinician's explanation of the recommendation, the risks of refusal communicated to the patient, and any alternative plan discussed",
        "A refusal terminates the treatment relationship automatically",
        "Only the patient's signature on a refusal form is needed"
      ],
      correctIndex: 1,
      explanation:
        "BEH.110 (patient right to refuse treatment) requires that when a patient refuses a specific treatment, the refusal is documented with the clinical context: what was recommended, what was explained about the recommendation and its alternatives, what the patient was told about risks of refusal, and any alternative plan developed.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Documenting informed refusal protects both the patient and the organization. It demonstrates that the organization fulfilled its duty to inform, the patient made an autonomous decision with complete information, and an alternative plan was developed to continue supporting the patient's care.",
        whyWrong: {
          A: "Informed refusal requires documentation precisely because of the patient's autonomous choice - it creates an important clinical and legal record.",
          C: "Refusal of a specific intervention does not end the treatment relationship - an alternative plan should be explored.",
          D: "A signature proves acknowledgment - the clinical documentation must also capture what was explained and what alternative plan was offered.",
        },
        operationalContext:
          "Create a 'Treatment Refusal' note template: recommended intervention, explanation of risks and benefits provided, patient's reason for refusal (if given), alternative plan discussed, and clinical plan going forward. Both clinician and patient should sign when possible.",
      },
    },
    {
      id: "asc_beh_15",
      question:
        "Under BEH.150, what distinguishes 'discharge' from a behavioral health program versus a 'warm handoff' to another level of care?",
      options: [
        "They are the same - any transition out of a program is called a discharge",
        "Discharge is the completion of a treatment episode; a warm handoff is an active, supported transition to another provider or level of care with direct communication between the referring and receiving clinicians",
        "Warm handoffs are only required for SUD patients transitioning to residential care",
        "Warm handoffs require a formal transfer agreement between organizations"
      ],
      correctIndex: 1,
      explanation:
        "BEH.150 requires that transitions between levels of care involve direct clinician-to-clinician communication (warm handoff) to ensure continuity. A warm handoff is an active transition - not just sending records. The referring clinician makes direct contact with the receiving clinician to facilitate the transfer of care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Warm handoffs dramatically reduce the risk of patients falling through the cracks during care transitions. A direct clinician-to-clinician call or meeting conveys nuanced clinical information that a chart note cannot - particularly about safety concerns, therapeutic relationship factors, and treatment barriers.",
        whyWrong: {
          A: "These are distinct concepts - discharge is completion; warm handoff is a facilitated transition.",
          C: "Warm handoffs apply to all level-of-care transitions, not only SUD patients transitioning to residential.",
          D: "Formal transfer agreements address organizational relationships. A warm handoff is a clinical communication practice - it can occur between organizations without a formal agreement.",
        },
        operationalContext:
          "Train clinicians on warm handoff technique: (1) call the receiving clinician before the patient's first appointment, (2) share key clinical information (diagnosis, current symptoms, safety history, treatment barriers), (3) review any special considerations for the patient, (4) document the handoff call in the clinical record, including who was contacted and what was communicated.",
      },
    },
    {
      id: "asc_beh_16",
      question:
        "A group therapy session has 12 participants in a room designed for 8. Several patients must sit in the doorway or hallway. What BEH.100 requirement is at risk?",
      options: [
        "Group size is a therapeutic preference - space requirements do not apply",
        "The therapeutic setting must be appropriate for the service provided - an overcrowded group therapy space compromises both confidentiality and therapeutic environment",
        "Patients in the hallway maintain confidentiality as long as the hallway is not public space",
        "Only individual therapy rooms have specific space requirements under BEH standards"
      ],
      correctIndex: 1,
      explanation:
        "BEH.100 requires that therapeutic settings are appropriate for the type and intensity of services provided. An overcrowded group therapy room with participants in the hallway compromises confidentiality (hallway conversations are overheard), therapeutic boundaries, and the physical environment necessary for effective group treatment.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Group therapy settings must protect participant confidentiality, provide adequate space for the therapeutic modality (including movement-based or experiential techniques), and allow all participants to engage meaningfully. An overcrowded group fails on all these dimensions.",
        whyWrong: {
          A: "Space requirements in therapeutic settings are a BEH.100 compliance matter - not a preference.",
          C: "Any non-controlled, non-soundproofed space (including a hallway) fails the confidentiality standard.",
          D: "Group therapy settings have space and privacy requirements just as individual therapy rooms do.",
        },
        operationalContext:
          "Establish group size limits for each therapy room based on physical capacity and therapeutic appropriateness. Post maximum capacity and enforce it. If demand exceeds capacity, add group sessions rather than exceeding room limits.",
      },
    },
    {
      id: "asc_beh_17",
      question:
        "A behavioral health organization reviews a patient's treatment plan six weeks into treatment. The patient has not met any goals and reports feeling worse. What BEH.120 step is now required?",
      options: [
        "Document the lack of progress and continue the current treatment plan for another six weeks",
        "Revise the treatment plan based on the updated assessment - changing goals, interventions, or level of care as clinically indicated",
        "Discharge the patient for non-compliance with the treatment plan",
        "BEH.120 review cycles are not triggered by lack of progress - only by time intervals"
      ],
      correctIndex: 1,
      explanation:
        "BEH.120 requires treatment plans to be reviewed and updated based on the patient's progress and changing needs. A patient who has not met any goals and reports worsening symptoms requires immediate treatment plan revision - which may include changing interventions, modifying goals, or stepping up to a higher level of care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A treatment plan that is not producing results must be changed - not continued unchanged. This is the clinical accountability function of the treatment plan review process.",
        whyWrong: {
          A: "Waiting another six weeks when a patient is deteriorating is clinically inappropriate and a BEH.120 failure.",
          C: "Lack of progress is a clinical problem to be solved - not a reason to discharge the patient.",
          D: "Treatment plan reviews are triggered by clinical indicators including lack of progress - not solely by calendar intervals.",
        },
        operationalContext:
          "Define clinical triggers for unscheduled treatment plan reviews: (1) lack of progress toward goals at any scheduled review, (2) significant change in clinical status (improvement or deterioration), (3) safety concern, (4) patient request. Document the clinical rationale for each treatment plan revision.",
      },
    },
    {
      id: "asc_beh_18",
      question:
        "What must be included in the informed consent for telehealth behavioral health services beyond standard informed consent for in-person care?",
      options: [
        "Standard informed consent is sufficient - telehealth does not require additional elements",
        "Informed consent for telehealth must include: the nature of telehealth and its limitations, confidentiality in the telehealth context, the technology platform to be used, what happens in case of technical failure, and emergency contact protocols if the patient experiences a crisis during a session",
        "Only the patient's agreement to pay the telehealth copay is required",
        "Telehealth consent requires notarization"
      ],
      correctIndex: 1,
      explanation:
        "Telehealth informed consent has elements specific to the modality: the nature of telehealth and its limitations compared to in-person care, privacy protections and limitations in the virtual environment, the technology platform and data security, alternative arrangements if technology fails, and emergency protocols if a crisis occurs remotely.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Telehealth introduces unique risks and limitations that patients must understand: potential technical failures interrupting care, the clinician's inability to physically intervene in an emergency, and confidentiality risks on the patient's end. These require specific informed consent elements.",
        whyWrong: {
          A: "Standard consent does not cover telehealth-specific risks and modality limitations.",
          C: "Financial consent is a billing function - it does not constitute informed consent for the telehealth modality.",
          D: "Notarization is not required for telehealth consent.",
        },
        operationalContext:
          "Develop a telehealth consent addendum covering: telehealth technology explanation, privacy protections, technology failure plan (backup phone contact), emergency protocol (patient provides local emergency contacts at session start), and location documentation (document where the patient is located at the start of each session for emergency purposes).",
      },
    },
    {
      id: "asc_beh_19",
      question:
        "A behavioral health organization's licensed clinical social worker (LCSW) conducts psychological testing and provides formal diagnostic assessments using standardized psychological tests such as the MMPI-2. Is this within scope of practice under BEH.130?",
      options: [
        "Yes - LCSWs may conduct any type of assessment if supervised by a psychologist",
        "It depends on state law - in many states psychological testing is restricted to licensed psychologists, and the organization must verify state scope of practice before authorizing this service",
        "LCSWs are always authorized to conduct psychological testing in behavioral health settings",
        "Psychological testing scope of practice is determined by the employer, not state law"
      ],
      correctIndex: 1,
      explanation:
        "Psychological testing scope of practice varies by state. In many states, the administration and interpretation of formal psychological tests (MMPI, Rorschach, intelligence testing) is restricted to licensed psychologists. BEH.130 requires staff to practice within their licensed scope - the organization must verify state law before authorizing LCSWs or other non-psychologists to conduct formal psychological testing.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "State scope-of-practice laws are the controlling authority for behavioral health professional practice. Some states restrict formal psychological testing to licensed psychologists; others permit LCSWs with specific training. The organization must verify the applicable state law, not assume broad authorization.",
        whyWrong: {
          A: "Supervision does not expand statutory scope of practice.",
          C: "LCSWs' authorization for psychological testing varies by state - it is not universal.",
          D: "State law establishes scope of practice - employers cannot authorize services that exceed the licensed scope.",
        },
        operationalContext:
          "Review each state's behavioral health licensing statutes and scope-of-practice regulations before authorizing any service. Consult the state licensing board or legal counsel when scope questions arise. Document the regulatory basis for each clinical service provided by each license category.",
      },
    },
    {
      id: "asc_beh_20",
      question:
        "Under BEH.150, discharge planning in behavioral health begins at what point in the treatment episode?",
      options: [
        "When the patient requests discharge",
        "At admission - discharge planning begins from the first day of treatment",
        "When the patient has met all treatment plan goals",
        "When the clinical team determines discharge is imminent"
      ],
      correctIndex: 1,
      explanation:
        "BEH.150 requires that discharge planning begins at admission and is updated throughout treatment. Starting discharge planning at admission ensures that the treatment trajectory is oriented toward defined outcomes, transition resources are identified early, and the patient understands from the beginning what successful completion looks like.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Early discharge planning in behavioral health reflects the reality that many patients disengage before completing treatment. Starting the conversation about transition, community resources, and aftercare at admission increases the likelihood that patients are connected to appropriate support before they leave.",
        whyWrong: {
          A: "Patient-requested discharge triggers documentation requirements but discharge planning should have started at admission.",
          C: "Waiting until goals are met to begin discharge planning is reactive - it may delay transition when the patient is ready.",
          D: "Imminent discharge planning is far too late to ensure appropriate community support and aftercare resources are in place.",
        },
        operationalContext:
          "Include a 'Discharge Planning' section in the initial intake assessment: anticipated treatment duration, long-term clinical goals, identified community resources, aftercare preferences. Update this section at each treatment plan review. Activate the transition plan with sufficient lead time before anticipated discharge.",
      },
    },
  ],
};
