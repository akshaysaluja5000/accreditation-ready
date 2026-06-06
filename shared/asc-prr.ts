import type { Level } from "./schema";

export const ascPrrLevel: Level = {
  id: "asc_prr",
  module: "asc",
  name: "Patient Rights & Protections",
  description: "AAAHC v44 PRR - patient rights, responsibilities, informed consent, grievances, and communication.",
  icon: "ScrollText",
  color: "hsl(210, 82%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "PRR: Patient Rights, Responsibilities and Protections",
    plainLanguageSummary:
      "The PRR category establishes expectations for recognizing every patient's legal and ethical entitlements throughout their episode of care. Patients must be treated with respect and dignity, informed of their rights and responsibilities before care begins, given access to organizational information, and provided a meaningful grievance pathway. Informed consent must be documented in the clinical record. Communication must occur in a language and manner the patient and caregiver can understand.",
    keyOperationalExpectations: [
      "Patients are treated with respect for personal, cultural, and religious beliefs at all times.",
      "Rights and grievance pathways are communicated to both patients and staff before care is rendered.",
      "Patients are informed of their responsibilities - accurate health history, treatment plan adherence, respectful behavior.",
      "Organizational information (services, credentials, fees, after-hours) is accessible without the patient having to request it.",
      "Informed consent for procedures and anesthesia is documented in the clinical record before care begins.",
      "Interpretive services, visual/hearing aids, and plain-language materials are available to support communication.",
    ],
    commonRiskPoints: [
      "Rights notice is given after the patient is already gowned - too late to be meaningful.",
      "Grievances are resolved verbally with no written documentation of steps, results, or contact person.",
      "Consent form is signed but no evidence exists that the discussion of necessity and alternatives occurred.",
      "Staff cannot describe how patients with limited English access interpretive services.",
    ],
    aaahcStandards: ["PRR.100", "PRR.180", "PRR.190", "PRR.200", "PRR.240", "PRR.250", "PRR.440"],
  },
  studyMaterial: [
    {
      title: "How should you treat patients from different backgrounds?",
      content:
        "Every patient deserves to be treated with respect for their personal, cultural, and religious beliefs. Patients have the right to privacy during check-in and while being examined or treated. Patients should also have the chance to take part in decisions about their own care.",
      keyPoint:
        "Respect for a patient's beliefs, privacy during care, and involvement in their own decisions are all basic patient rights.",
    },
    {
      title: "What do patients need to know before their care starts?",
      content:
        "Before care begins, patients must be told about their rights, including how to file a complaint if something goes wrong. They also need to know their responsibilities, such as sharing accurate health information, following the treatment plan, and arranging a ride home. Staff also need to know patient rights and the complaint process.",
      keyPoint:
        "Rights and responsibilities must be communicated before care begins, to both the patient and the staff.",
    },
    {
      title: "What information about your facility should patients be able to find on their own?",
      content:
        "Patients should be able to find out about the services offered, hours, fees, payment policies, and staff credentials without having to ask. This information should be in a brochure, on a website, or posted in the facility. Patients should not need to request it.",
      keyPoint:
        "Basic facility information must be available to patients without them having to ask for it.",
    },
    {
      title: "What must be in the chart before a procedure takes place?",
      content:
        "The chart must show that the provider discussed the procedure, why it is needed, and any other options with the patient. The patient must sign a written consent form before the procedure begins. Consent for anesthesia must also be documented, and one form can cover both.",
      keyPoint:
        "Two things must be in the chart before the procedure: documentation that the discussion happened, and a signed consent form.",
    },
    {
      title: "How do you communicate with a patient who does not speak English?",
      content:
        "Staff must arrange interpreter services when a patient does not speak the same language. Using a family member to interpret is not an acceptable substitute, especially for consent or rights discussions. Services must also be available for patients with hearing or vision problems.",
      keyPoint:
        "Interpreter services must be available to all patients who need them. Family members cannot be used as a substitute.",
    },
  ],
  questions: [
    {
      id: "asc_prr_01",
      question:
        "Under AAAHC v44 PRR.100, which of the following is a required element of treating patients with respect and dignity?",
      options: [
        "Requiring all patients to wear identification wristbands during their visit",
        "Ensuring patients are treated respectfully of their personal, cultural, and religious beliefs",
        "Providing every patient with a written copy of the organization's mission statement",
        "Limiting waiting room time to 30 minutes regardless of case complexity",
      ],
      correctIndex: 1,
      explanation:
        "PRR.100 specifically requires treatment that respects the patient's personal, cultural, and religious beliefs, along with rights to personal privacy at check-in and in care areas, and the opportunity to participate in health care decisions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.100 explicitly names personal, cultural, and religious beliefs as the framework for respectful treatment. This extends to communication style, modesty needs, dietary restrictions, and spiritual practices.",
        whyWrong: {
          A: "Wristbands are a patient identification safety practice, not a PRR.100 dignity requirement.",
          C: "Organizational mission statements are not part of the PRR.100 requirements.",
          D: "Wait times are not addressed in PRR.100; they may be relevant to access and satisfaction standards elsewhere.",
        },
        operationalContext:
          "Build staff training on cultural humility and include a cultural/religious accommodation request field in the pre-admission assessment.",
      },
    },
    {
      id: "asc_prr_02",
      question:
        "PRR.180 requires that patients be informed of their right to voice grievances. Who else must be informed of this right under the same standard?",
      options: [
        "Governing body members only",
        "Staff",
        "Contracted anesthesia providers only",
        "Family members who accompany the patient",
      ],
      correctIndex: 1,
      explanation:
        "PRR.180 requires that both patients AND staff are informed of patient rights, including how to voice grievances. Staff must know the grievance process in order to receive, route, and document complaints appropriately.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The standard uses the phrase 'Patients and staff are informed' - staff knowledge is independently required so they can receive complaints, route them, and document them per policy.",
        whyWrong: {
          A: "Governing body awareness is addressed in GOV standards, not PRR.180.",
          C: "All staff - not just contracted providers - must be informed. PRR.180 does not limit its scope.",
          D: "While family members may accompany patients, PRR.180 does not list them as a required recipient of rights education.",
        },
        operationalContext:
          "Include patient rights and grievance process training in new-hire orientation and annual competency. Post the grievance contact on the rights notice.",
      },
    },
    {
      id: "asc_prr_03",
      question:
        "A patient with limited English proficiency arrives for a procedure. The check-in staff member asks the patient's adult daughter to interpret the rights notice and consent form. What does PRR.440 require instead?",
      options: [
        "Using a family member is acceptable as long as the patient appears to agree",
        "The organization must have interpretive services available to facilitate care based on the patient's preferred language",
        "Staff may use a bilingual staff member only if one is physically present",
        "Written translation is sufficient; verbal interpretation is not required",
      ],
      correctIndex: 1,
      explanation:
        "PRR.440 requires that interpretive services be available to facilitate care based on the individual's preferred language. Using family members as interpreters is not a substitute for professional interpretive services, particularly for consent and rights discussions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.440 specifically requires that interpretive services be available. Family members introduce confidentiality risks, may soften bad news, and may not know medical terminology - making them unreliable for rights and consent conversations.",
        whyWrong: {
          A: "Patient acquiescence to family interpretation is not the standard. The organization must affirmatively provide interpretive services.",
          C: "Bilingual staff may be used but the standard does not restrict services to physically present staff - telephone and video interpretation qualify.",
          D: "The standard requires both accessible language AND manner of communication, which includes verbal interpretation for non-literate or visually impaired patients.",
        },
        operationalContext:
          "Contract with a telephone or video interpretation service (e.g., Language Line) and train all front-desk and clinical staff on how to access it during check-in.",
      },
    },
    {
      id: "asc_prr_04",
      question:
        "PRR.250 requires documentation of informed consent in the clinical record. Which two elements must be present in the record to meet this standard?",
      options: [
        "A description of the risks discussed and the anesthesia type chosen",
        "The surgeon's attestation that the procedure was medically necessary, signed post-operatively",
        "Evidence that necessity/appropriateness and alternatives were discussed, AND the written consent signed before the procedure",
        "A copy of the patient's insurance authorization and the consent form",
      ],
      correctIndex: 2,
      explanation:
        "PRR.250 has two distinct documentation requirements: (1) evidence that the necessity or appropriateness of the procedure and alternative treatment techniques were discussed, and (2) the patient's written consent obtained before the surgery or procedure was performed.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.250 is structured around two sequential duties: (1) have the discussion (and document that it happened), and (2) get written consent before the procedure starts. Both must appear in the clinical record.",
        whyWrong: {
          A: "Risk discussion is part of thorough consent practice, but PRR.250 specifically names necessity, appropriateness, and alternatives - not a risk inventory.",
          B: "Post-operative attestation is the wrong timing. Consent must be documented before the procedure.",
          D: "Insurance authorization is a billing/access function, not part of PRR.250.",
        },
        operationalContext:
          "Many organizations use a combined anesthesia and surgical consent form that captures both PRR.240 and PRR.250 elements in a single document.",
      },
    },
    {
      id: "asc_prr_05",
      question:
        "An ASC's registration packet lists the services provided and payment policies, but omits information about the credentials of health care professionals who will provide care. Which PRR.200 element is missing?",
      options: [
        "PRR.200 only requires fee and payment information - credentials are listed in credentialing files",
        "The organization is missing information about the credentials of health care professionals, which must be available to patients",
        "Credentials must be posted on a website but not provided in writing to patients",
        "PRR.200 requires credential information only if the patient specifically requests it",
      ],
      correctIndex: 1,
      explanation:
        "PRR.200.50 explicitly requires that information about the credentials of health care professionals is available to patients. This is an availability requirement - it should be accessible without the patient having to ask.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.200 enumerates six categories of organizational information that patients should be able to access: services, after-hours/emergency care, fees, payment policies, credentials, and (if applicable) absence of malpractice coverage. All must be available.",
        whyWrong: {
          A: "Credentials belong to the patient-facing information set under PRR.200, not buried in internal credentialing files.",
          C: "PRR.200 does not restrict the medium to websites - the information must be 'available to patients' in whatever form works for the organization.",
          D: "The standard does not say 'on request.' Availability means accessible without prompting.",
        },
        operationalContext:
          "A provider bio page in the waiting room, on the website, or in the registration packet (with license numbers, specialty, and board certifications) satisfies this element.",
      },
    },
    {
      id: "asc_prr_06",
      question:
        "A patient verbally tells the pre-op nurse they have a DNR advance directive. The nurse acknowledges this and proceeds with pre-op prep, noting it verbally in handoff. What critical PRR documentation step was missed?",
      options: [
        "The anesthesiologist should have been paged to review the directive before pre-op started",
        "The existence of an advance directive must be prominently documented in the clinical record",
        "The patient should have been asked to produce the original signed document",
        "Verbal disclosure is sufficient for advance directive acknowledgment under PRR standards",
      ],
      correctIndex: 1,
      explanation:
        "PRR.180 requires that patients and staff are informed about advance directives as required by law and regulation, and the clinical record must reflect whether or not the patient has executed an advance directive. Prominent documentation in the chart - not just a verbal handoff - is required.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Prominent documentation in the clinical record ensures the advance directive status is visible to all members of the care team, including recovery nursing and emergency responders.",
        whyWrong: {
          A: "Anesthesiologist notification may be appropriate clinically, but the documentation failure is the compliance issue.",
          C: "Having the original document on file is best practice but PRR.180 focuses on documenting the existence in the clinical record.",
          D: "Verbal disclosure from patient to nurse does not substitute for chart documentation - surveyors look in the record.",
        },
        operationalContext:
          "Add a mandatory 'Advance Directive: Yes / No / Unknown' checkbox to the pre-op nursing assessment that appears prominently on page one of the clinical record.",
      },
    },
    {
      id: "asc_prr_07",
      question:
        "PRR.190 lists patient responsibilities the ASC must communicate before care. Which of the following is listed as a patient responsibility under PRR.190?",
      options: [
        "The patient is responsible for arranging their own transportation to the facility",
        "The patient is responsible for providing complete and accurate health information, including OTC products and dietary supplements",
        "The patient is responsible for selecting their own anesthesia type",
        "The patient is responsible for cleaning the surgical site the morning of surgery",
      ],
      correctIndex: 1,
      explanation:
        "PRR.190.10 specifically requires informing patients of the responsibility to provide complete and accurate information about their health, any medications taken including over-the-counter products and dietary supplements, and any allergies or sensitivities.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "OTC products and supplements are explicitly called out in PRR.190.10 because they can significantly affect anesthesia and medication management - yet patients often omit them thinking they are not 'real' medications.",
        whyWrong: {
          A: "Transportation arrangements are a responsibility (PRR.190.30) but the question asks which option is specifically listed, and option B is the most accurate verbatim match.",
          C: "Anesthesia selection is a clinical and consent matter, not a patient responsibility under PRR.190.",
          D: "Pre-procedure skin prep instructions may be given but they are not PRR.190 patient responsibilities.",
        },
        operationalContext:
          "Include a medication/supplement disclosure questionnaire in pre-registration and reinforce it at the pre-op nursing assessment.",
      },
    },
    {
      id: "asc_prr_08",
      question:
        "A patient complains that a staff member was dismissive during their procedure. The manager listens, apologizes, and resolves it verbally with no written record. Two weeks later, the same patient calls the state agency. What is the primary compliance failure?",
      options: [
        "The manager should have immediately suspended the staff member",
        "Verbal resolution without documentation fails to demonstrate that the grievance was received, investigated, and resolved with a written response",
        "Only written grievances require documentation - verbal ones may be resolved informally",
        "The patient should have been referred directly to the state agency at intake",
      ],
      correctIndex: 1,
      explanation:
        "PRR.180 requires a documented grievance process. Resolving complaints verbally without a record of receipt, investigation steps, result, and written response to the patient leaves no audit trail and cannot demonstrate compliance to a surveyor.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The grievance process must produce documentation of existence, submission, investigation, and disposition - regardless of whether the complaint was verbal or written. The written resolution must name a contact person, describe investigative steps, state the result, and give the completion date.",
        whyWrong: {
          A: "Personnel action is a separate matter from the documentation compliance failure.",
          C: "PRR standards apply to all complaints, verbal or written. There is no 'informal' exemption.",
          D: "While patients always have the right to contact the state, ASCs must first make a good-faith internal effort - and document it.",
        },
        operationalContext:
          "Use a grievance log that captures: date received, patient name, staff receiving it, summary, person in authority notified, steps taken, resolution, written response date, and contact information provided.",
      },
    },
    {
      id: "asc_prr_09",
      question:
        "Which AAAHC v44 standard requires that information about provisions for after-hours and emergency care is available to patients?",
      options: [
        "PRR.100",
        "PRR.190",
        "PRR.200",
        "PRR.440",
      ],
      correctIndex: 2,
      explanation:
        "PRR.200 addresses organizational information available to patients, including PRR.200.20 which specifically requires information about provisions for after-hours and emergency care.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.200 is the 'organizational transparency' standard - it covers six categories of information patients need about the organization: services, after-hours/emergency access, fees, payment policies, credentials, and malpractice coverage status.",
        whyWrong: {
          A: "PRR.100 covers dignity, privacy, and shared decision-making.",
          B: "PRR.190 addresses patient responsibilities.",
          D: "PRR.440 covers communication in an understandable language and manner.",
        },
        operationalContext:
          "Include an after-hours contact number and emergency care instructions in the patient registration packet, discharge instructions, and on the facility website.",
      },
    },
    {
      id: "asc_prr_10",
      question:
        "PRR.240 requires documented consent for anesthesia in the clinical record. Under what circumstance may one consent form satisfy both PRR.240 and PRR.250?",
      options: [
        "Only if the anesthesiologist and surgeon sign the same form simultaneously",
        "A single consent form may satisfy both standards as long as it captures anesthesia consent and surgical consent elements",
        "Only in facilities that perform exclusively local anesthesia",
        "PRR.240 and PRR.250 always require separate consent forms - they cannot be combined",
      ],
      correctIndex: 1,
      explanation:
        "The AAAHC guidance specifically notes that one consent form may be used to satisfy both the anesthesia consent (PRR.240) and the surgical consent (PRR.250) requirements, as long as all required elements are present.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The AAAHC guidance explicitly allows this: 'One consent form may be used to satisfy the Standard requirements for the anesthesia and surgical consents.' The key is that all elements - procedure necessity, alternatives, and anesthesia consent - must be documented.",
        whyWrong: {
          A: "No requirement exists for simultaneous signing by both providers.",
          C: "PRR.240 applies to organizations administering any level of sedation/anesthesia including minimal and local anesthesia topical applications.",
          D: "Combined forms are explicitly permitted per AAAHC guidance.",
        },
        operationalContext:
          "Design a single comprehensive consent form that captures: procedure description, necessity, alternatives, anesthesia type, anesthesia risks, and patient/representative signature with date/time.",
      },
    },
    {
      id: "asc_prr_11",
      question:
        "A patient with a hearing impairment arrives for a procedure. The front desk staff speaks loudly and slowly but does not arrange any other accommodation. What does PRR.440 require?",
      options: [
        "Speaking loudly and slowly is sufficient accommodation for hearing impairment under PRR.440",
        "Services must be available to individuals with hearing or visual impairments - typically sign language interpretation or captioning",
        "Hearing-impaired patients may consent through their accompanying caregiver without additional accommodation",
        "PRR.440 only covers language barriers, not physical impairments",
      ],
      correctIndex: 1,
      explanation:
        "PRR.440.20 specifically requires that services be available to individuals with hearing or visual impairments. Speaking loudly is not a recognized accommodation. ASCs must have access to qualified sign language interpreters or other assistive communication services.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.440 enumerates three communication requirements: interpretive services for language differences, services for hearing/visual impairments, and plain-language information. All three are independently required.",
        whyWrong: {
          A: "This is not an acceptable accommodation - it is ineffective for many types of hearing impairment and not recognized under communication accessibility standards.",
          C: "Routing communication through caregivers undermines patient privacy and autonomy; it is not equivalent to direct accommodated communication.",
          D: "PRR.440 explicitly covers 'individuals with hearing or visual impairments' as a separate requirement from language interpretation.",
        },
        operationalContext:
          "Contract with a video remote interpreting (VRI) service that can provide ASL interpretation in real time, and ensure tablets or screens are available at registration and in procedure areas.",
      },
    },
    {
      id: "asc_prr_12",
      question:
        "Under PRR.190, what financial responsibility must patients be informed of before care - with a specific limitation for Medicare-certified ASCs?",
      options: [
        "Patients must be informed of the total cost of the procedure, including surgeon fees",
        "Patients must be informed of the need to accept financial responsibility for charges not covered by insurance, but for Medicare-certified ASCs this is limited to deductible and coinsurance",
        "Patients must sign a blank financial responsibility agreement at check-in",
        "Financial responsibility communication is optional if the patient has insurance verification on file",
      ],
      correctIndex: 1,
      explanation:
        "PRR.190.40 requires that patients be informed of their financial responsibility for uncovered charges. For Medicare-certified ASCs, the AAAHC guidance notes that CMS limits what an ASC may charge - only the applicable deductible and coinsurance may be charged to Medicare patients.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The guidance clarifies that for Medicare-certified facilities, financial responsibility is limited to coinsurance and deductible - ASCs cannot balance-bill Medicare patients for facility fees beyond these amounts.",
        whyWrong: {
          A: "Surgeon fees are typically separate from the facility fee. PRR.190 focuses on the patient's financial responsibility to the organization.",
          C: "A blank financial agreement does not satisfy the requirement to inform patients of the nature of their financial responsibilities.",
          D: "Having insurance on file does not eliminate the requirement to proactively inform patients of their financial responsibility.",
        },
        operationalContext:
          "Include a clear financial responsibility statement in pre-registration paperwork, with a Medicare-specific note limiting responsibility to deductible and coinsurance as applicable.",
      },
    },
    {
      id: "asc_prr_13",
      question:
        "A patient's proposed procedure has two reasonable alternatives. The surgeon discusses only the procedure being performed and obtains a signed consent. What PRR.250 element is missing?",
      options: [
        "Nothing - the signed consent form is sufficient documentation of the discussion",
        "Evidence that alternative treatment techniques were discussed with the patient must be present in the clinical record",
        "A second consent form for each alternative must also be signed",
        "The surgeon must document why the alternatives were rejected by the patient",
      ],
      correctIndex: 1,
      explanation:
        "PRR.250.10 requires documentation that both the necessity/appropriateness of the proposed procedure AND alternative treatment techniques were discussed with the patient. The record must reflect both elements - the signed form alone does not prove the alternatives discussion occurred.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.250.10 has two sub-elements: (1) necessity/appropriateness and (2) alternative treatment techniques. If the chart only reflects a signed consent without any note about alternatives discussed, the standard is not met.",
        whyWrong: {
          A: "The signed consent form is documentation that the patient agreed - but it does not prove the substance of the discussion. A note or checked item describing the alternatives discussion is required.",
          C: "No separate consent form for each alternative is required - just documentation that the discussion occurred.",
          D: "Documenting why alternatives were rejected may be good clinical practice, but PRR.250 requires documentation that alternatives were presented, not the patient's reasoning for declining them.",
        },
        operationalContext:
          "Add a pre-printed 'alternatives discussed' line or checkbox to the consent form, or have a provider note in the chart that reads: 'Patient counseled on [alternative A] and [alternative B]; patient chose [procedure].'",
      },
    },
    {
      id: "asc_prr_14",
      question:
        "Under PRR.180, patients must be informed of the right to change providers. When does an exception apply?",
      options: [
        "When the patient has already signed the consent form",
        "When other qualified providers are not available",
        "When the procedure is an emergency",
        "When the ASC only has one physician on the credentialing roster",
      ],
      correctIndex: 1,
      explanation:
        "PRR.180.40 states that patients must be informed of the right to change providers 'if other qualified providers are available.' The standard includes NA as a potential rating if no alternatives are available.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The standard explicitly conditions this right on availability of qualified alternatives. A single-practitioner ASC with no equivalent credentialed provider available may legitimately note this element as not applicable.",
        whyWrong: {
          A: "Consent signing is not a waiver of the right to change providers.",
          C: "Emergencies are addressed under EMG standards, not as an exception to PRR.180.",
          D: "Having only one credentialed provider may be the factual basis for 'other qualified providers are not available,' but that framing should appear in the policy - not be assumed automatically.",
        },
        operationalContext:
          "Include a statement in the rights notice describing the provider change right with the qualifier 'when other qualified providers are available.' In a solo-practitioner setting, document the limitation transparently.",
      },
    },
    {
      id: "asc_prr_15",
      question:
        "What information about malpractice coverage must an ASC make available to patients under PRR.200?",
      options: [
        "The dollar amount of each practitioner's malpractice policy",
        "The name of the malpractice insurance carrier",
        "If applicable, the absence of malpractice coverage",
        "All pending malpractice claims against the organization",
      ],
      correctIndex: 2,
      explanation:
        "PRR.200.60 requires information about the absence of malpractice coverage - this is a disclosure requirement for uninsured practitioners, not a requirement to publish full policy details. It is rated Yes/No/NA, meaning it only applies where absence of coverage is a fact.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.200.60 is a transparency standard: if a practitioner does not carry malpractice insurance, that fact must be disclosed to patients who will receive care from them. Patients have a right to know this before consenting to care.",
        whyWrong: {
          A: "Policy amounts are not required disclosures under PRR.200.",
          B: "Carrier names are not required disclosures under PRR.200.",
          D: "Pending claims are not required disclosures under PRR.200 and may be protected information.",
        },
        operationalContext:
          "If any practitioner at your ASC practices without malpractice coverage, include a clear disclosure statement in the pre-registration or consent materials.",
      },
    },
    {
      id: "asc_prr_16",
      question:
        "A patient with a court-appointed guardian arrives for a procedure. Who may consent for this patient under PRR standards?",
      options: [
        "Any adult family member present at the facility",
        "The patient's primary care physician",
        "The person appointed by a court of proper jurisdiction under applicable state law",
        "The anesthesiologist, because they bear clinical responsibility",
      ],
      correctIndex: 2,
      explanation:
        "When a court of proper jurisdiction has adjudicated a patient incompetent, the rights and consent authority are exercised by the person appointed under applicable state law - the court-appointed guardian. The guardianship order must be verified and documented.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR standards defer to applicable state law for surrogate consent authority. A court-appointed guardian has legal authority; other family members who have not been legally appointed do not, regardless of how involved they are.",
        whyWrong: {
          A: "Family presence does not confer legal surrogate authority. Without documentation of guardianship or POA, a family member cannot provide legally binding consent.",
          B: "The primary care physician is not a legally authorized surrogate decision-maker.",
          D: "The anesthesiologist or surgeon cannot serve as the patient's surrogate.",
        },
        operationalContext:
          "For patients with known guardians, require a copy of the guardianship order in the pre-registration packet. Train registration staff to verify and copy the document before any consent is obtained.",
      },
    },
    {
      id: "asc_prr_17",
      question:
        "A telehealth-enabled ASC conducts pre-operative consults remotely. What additional privacy consideration does PRR.100 introduce for telehealth settings?",
      options: [
        "Telehealth visits are exempt from PRR.100 privacy requirements",
        "Staff must ensure visual, auditory, and electronic privacy on the clinical side, and encourage patients to secure privacy on their end",
        "Only written communication is required for telehealth visits",
        "Telehealth visits only require privacy protections during the billing process",
      ],
      correctIndex: 1,
      explanation:
        "The AAAHC v44 guidance for PRR.100 specifically addresses telehealth: clinical staff must maintain visual, auditory, and electronic privacy on their side, and should encourage patients to take steps to ensure their privacy (private location, auditory/visual privacy on the patient's end).",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Telehealth introduces unique privacy risks - an unencrypted connection, a clinician in a public space, or a patient in a location with bystanders can all compromise the privacy rights guaranteed under PRR.100.",
        whyWrong: {
          A: "Telehealth services are explicitly addressed in PRR.100 guidance - they are not exempt.",
          C: "Written communication is not the standard for telehealth - the same verbal and interactive communication required for in-person care applies.",
          D: "Privacy requirements extend throughout the encounter, not just billing.",
        },
        operationalContext:
          "Develop a telehealth privacy checklist for clinicians: confirm connection is encrypted, confirm no unauthorized individuals are present on the clinical side, and ask the patient to confirm their location is private before beginning.",
      },
    },
    {
      id: "asc_prr_18",
      question:
        "Under PRR.190, a patient tells the nurse they plan to drive themselves home after a procedure requiring sedation. The nurse says nothing and proceeds with pre-op. What responsibility was not communicated?",
      options: [
        "The patient's responsibility to have valid auto insurance",
        "The patient's responsibility to provide a responsible adult to provide transportation home and remain with them as directed",
        "The patient's responsibility to sign a waiver releasing the ASC from liability",
        "PRR.190 does not cover post-procedure transportation",
      ],
      correctIndex: 1,
      explanation:
        "PRR.190.30 requires that patients be informed of the responsibility to provide a responsible adult to provide transportation home and to remain with them as directed by the provider or as indicated on discharge instructions.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.190.30 addresses the safety risk of unsupervised post-sedation patients. The ASC must communicate this responsibility to the patient - typically during pre-registration - and document the discussion.",
        whyWrong: {
          A: "Auto insurance is not a PRR.190 element.",
          C: "Liability waivers are not part of the PRR.190 framework.",
          D: "PRR.190.30 explicitly covers the transportation responsibility.",
        },
        operationalContext:
          "Include a transportation/escort requirement statement in pre-registration paperwork and in the pre-op nursing assessment. If no escort is arranged, procedures involving sedation should not proceed without documented clinical review.",
      },
    },
    {
      id: "asc_prr_19",
      question:
        "PRR.330 applies when patients undergo employer-mandated laboratory tests or medical examinations. Which piece of information must be provided to those individuals?",
      options: [
        "Their employer's insurance policy number",
        "Information about the purpose and scope of the test, confidentiality protections, the examiner's role, what may be conveyed to the employer, test results, and necessary follow-up",
        "Only the test results - other information is confidential",
        "PRR.330 only applies to pre-employment physical examinations",
      ],
      correctIndex: 1,
      explanation:
        "PRR.330 requires that individuals undergoing employer-mandated tests or exams receive specific information: the purpose and scope of the test, confidentiality protections, the examiner's/organization's role, what information may be conveyed to the employer, results, and necessary medical follow-up.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "PRR.330 recognizes the unique ethical context of employer-directed testing - the patient is not a traditional voluntary care-seeker, and their interests must be protected by informing them of every aspect of the testing relationship.",
        whyWrong: {
          A: "Insurance policy numbers are not part of PRR.330 requirements.",
          C: "Results must be shared with the individual - confidentiality protections limit what goes to the employer, not what goes to the tested person.",
          D: "PRR.330 covers any employer-mandated lab test or medical examination, not only pre-employment physicals.",
        },
        operationalContext:
          "Occupational health ASCs should develop a standard disclosure form for employer-directed testing that covers all six PRR.330 elements and obtain the patient's acknowledgment before testing.",
      },
    },
    {
      id: "asc_prr_20",
      question:
        "A surveyor asks how the ASC communicates patient rights information in a plain and understandable manner. Staff say they use the standard form written at a 12th-grade reading level. What does PRR.440 require?",
      options: [
        "A 12th-grade reading level is appropriate for all patient populations",
        "Information must be provided in a manner that is easy to understand, and organizations should assume patients may have difficulty comprehending health information",
        "Plain language is only required for pediatric patients",
        "Organizations must conduct literacy assessments before providing any written materials",
      ],
      correctIndex: 1,
      explanation:
        "PRR.440.30 requires that information be provided in a manner that is easy to understand. The AAAHC guidance states organizations should assume patients (and caregivers) may have difficulty comprehending health information and should communicate proactively at an accessible level.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "A 12th-grade reading level is far above the average health literacy of adult patients. AAAHC v44 requires easy-to-understand communication - which typically means materials written at a 6th-grade or lower reading level.",
        whyWrong: {
          A: "Health literacy research consistently shows most adults read below a 12th-grade level, and medical information presents additional comprehension challenges.",
          C: "Plain language is required for all patients, not just pediatric populations.",
          D: "While health literacy screening is good practice, PRR.440 does not require formal literacy assessments - it requires accessible communication as a baseline assumption.",
        },
        operationalContext:
          "Revise rights notices, consent forms, and patient education materials to a 6th-grade reading level using tools like the Flesch-Kincaid readability score or the CDC plain language guidelines.",
      },
    },
  ],
};
