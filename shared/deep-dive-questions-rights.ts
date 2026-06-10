import type { DeepDiveLevel } from "./schema";

export const ddPatientRightsLevel: DeepDiveLevel = {
  id: "dd-patient-rights",
  name: "Patient Rights & Responsibilities Deep Dive",
  description: "Expert-level scenarios on informed consent validity, advance directive conflicts, restraint order gaps, grievance resolution, and protecting vulnerable patients.",
  icon: "Microscope",
  color: "hsl(24, 90%, 48%)",
  baseLevelId: "patient_rights",
  questions: [
    {
      id: "dd-pr1",
      baseQuestion: "A patient consented to a laparoscopic appendectomy. Intraoperatively, the surgeon discovers a suspicious mass on the colon and wants to perform a biopsy. The patient is under general anesthesia and cannot be consulted. The surgeon performs the biopsy. Is this practice compliant?",
      baseOptions: [
          "Yes - the discovery of an unexpected clinical finding during surgery gives the surgeon the legal authority to perform clinically indicated procedures without obtaining additional informed consent from the patient",
          "No - unless the biopsy was immediately necessary to prevent death or serious harm, the extension of the procedure scope without consent requires that the patient be awakened to consent or the procedure deferred to a separate encounter",
          "Yes - informed consent for general surgical procedures covers all procedures performed within the same operative session, including biopsies of unexpected findings discovered intraoperatively",
          "No - the surgeon should have called the patient's healthcare proxy for telephone consent during the procedure rather than proceeding with the biopsy without prior authorization or discussion",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Informed consent for surgery covers the specific procedure consented to. Performing an additional, non-emergency procedure without consent - even if discovered during the consented procedure - violates the patient's right to consent to their own care. The biopsy could be deferred to a separate encounter with appropriate consent discussion, unless immediate biopsy was clinically necessary to prevent serious imminent harm.",
      baseXp: 20,
      followUps: [
        {
          question: "The surgeon argues that informing the patient about the mass before surgery would have caused undue anxiety and that the biopsy result ultimately showed a benign finding, so no harm occurred. Does the benign result change the consent analysis?",
          options: [
          "Yes - a benign outcome demonstrates that the biopsy was the correct clinical decision and that proceeding without consent did not result in patient harm, which retroactively validates that the deviation from the consent standard was necessary and medically appropriate in this case.",
          "No - the validity of consent is evaluated at the time it is obtained, not by the outcome of the procedure. A benign result does not retroactively justify performing a procedure without consent. The patient's right to make an informed decision about the biopsy - including the right to refuse - existed regardless of what the result turned out to be",
          "Partially - the benign result eliminates the medical malpractice liability and damages component of the case but does not fully satisfy the informed consent standard, which is a separate violation of patient rights that exists independent of clinical outcome or harm.",
          "Yes - Joint Commission standards include a harm-based consent analysis where the outcome of the procedure determines whether a deviation from the consent process was legally and ethically acceptable in the clinical context.",
        ],
          correctIndex: 1,
          explanation: "Informed consent is a process right - the right to decide in advance, based on information, whether to accept a proposed treatment. Outcome does not determine whether consent was properly obtained. The surgeon's argument that the patient 'didn't need to know' substitutes physician judgment for patient autonomy, which is the core concept consent rights protect against. The benign result is irrelevant to the rights violation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr2",
      baseQuestion: "An elderly patient with dementia becomes agitated at night and attempts to climb out of bed. The nurse applies wrist restraints citing fall risk. No physician order has been obtained. The nurse calls the physician 2 hours later to report. What is the compliance status of this sequence?",
      baseOptions: [
          "Non-compliant - nursing judgment in an immediate safety emergency permits restraint application prior to physician notification when fall risk is objectively high, but documentation must be thorough",
          "Non-compliant - behavioral restraints require a physician order before application; emergency restraint application without an order requires immediate physician notification and order within a defined timeframe (typically 1 hour), not 2 hours later",
          "Compliant - the 2-hour window for physician notification meets acceptable standards for behavioral restraints in geriatric patients with dementia who have high acute fall risk in hospital settings",
          "Non-compliant - dementia patients cannot be restrained under any circumstances without prior ethics committee approval and written consent from a surrogate decision-maker",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "JC and CMS require a physician order for behavioral restraints. Emergency application without a prior order is permissible in some circumstances, but notification and order must occur within a defined timeframe - typically 1 hour. A 2-hour delay between application and physician notification exceeds the allowable window and is a compliance finding.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit manager reviews the past 3 months of restraint use and finds that the same nurse applied restraints without orders on 8 occasions, with physician notification averaging 2.5 hours post-application. The nurse says 'the doctors always approve them anyway.' What does this pattern represent and what response is required?",
          options: [
            "A performance issue for one nurse - counseling and re-education on restraint policy is sufficient",
            "A systemic pattern of non-compliance that has been tolerated - this requires: individual accountability for the nurse, evaluation of whether the current restraint application workflow makes timely physician contact impractical, a review of physician response times to restraint notifications, and leadership-level reinforcement that 'they always approve it' does not substitute for obtaining prior authorization when possible",
            "A documentation problem only - the restraints themselves were appropriate; the issue is timely paperwork",
            "Evidence that the restraint policy is too restrictive and should be revised to allow nurses to apply behavioral restraints for fall prevention without a prior order"
          ],
          correctIndex: 1,
          explanation: "Eight occurrences with the same nurse and similar timing indicate a normalized pattern - the nurse has learned that non-compliant behavior has no consequence because physicians ultimately approve. This requires both individual accountability and systemic examination. Why is physician contact taking 2.5 hours? Is the notification system broken? Is there a cultural expectation that approval is pro forma? JC would view a sustained 8-incident pattern as a systems and leadership failure, not just an individual nurse issue.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr3",
      baseQuestion: "A hospital conducts a grievance audit and finds: 34 written grievances received in 90 days; average written response time of 18 days; 6 grievances with no written response at all; and no tracking of grievance themes for quality improvement. What is the compliance status?",
      baseOptions: [
          "Non-compliant on multiple dimensions - CMS requires written response within 7 days for most grievances; 6 unresponded grievances represent direct compliance failures; and lack of grievance trend tracking for quality improvement violates the requirement that grievance data drive improvement",
          "Non-compliant on multiple dimensions - CMS requires written response within 7 days for most grievances; 6 unresponded grievances represent direct compliance failures; and lack of grievance trend tracking for quality improvement violates the requirement that grievance data drive improvement",
          "Partially compliant — while the 18-day average response time exceeds the 7-day requirement, the facility is responding to most grievances; the 6 unresponded grievances must be prioritized, but grievance trend data can be collected retrospectively if not previously tracked systematically",
          "Non-compliant only for the 6 unresponded grievances — response timing is measured from the date investigation is completed rather than the date of initial receipt, which means the 18-day average may be within acceptable limits if investigation periods are properly documented and tracked",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Multiple failures are present: (1) CMS requires written response within 7 days - an 18-day average represents a systemic timing violation; (2) 6 unanswered grievances are direct non-compliance; (3) no theme tracking means the grievance process is not being used for improvement as required. The grievance program has both process and outcome failures.",
      baseXp: 15,
      followUps: [
        {
          question: "The patient relations director proposes fixing the response time issue by having the investigation summary letter sent automatically within 7 days stating 'your grievance is under investigation and you will receive a full response within 30 days.' Does this approach satisfy the CMS and JC grievance response requirements?",
          options: [
          "Yes - acknowledging receipt of the grievance within 7 days satisfies the written response requirement; the complete investigation results and corrective actions can be provided in the 30-day follow-up communication",
          "No - the written response within 7 days must include the substance of the response: what was investigated, what was found, what actions were taken, and the name of a contact person. A form letter saying 'we are investigating' does not satisfy the content requirements of the written response standard",
          "Yes - CMS explicitly permits a two-stage response process where an initial acknowledgment letter is sent within 7 days and the complete response with findings is sent in a separate follow-up within 30 days",
          "Partially - the 7-day acknowledgment satisfies the timing component of the written response requirement; the substantive content requirements regarding investigation findings and actions can be met in the follow-up communication",
        ],
          correctIndex: 1,
          explanation: "The CMS grievance response requirements specify that the written response must include: the hospital contact person, steps taken to investigate, results of the grievance investigation, and the date of completion. A form acknowledgment letter stating 'we are investigating' does not meet the content standard - it only satisfies notification that the grievance was received. The substantive response must be provided on a timely basis, not deferred to a separate letter weeks later.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr4",
      baseQuestion: "A nurse caring for an elderly patient witnesses a nursing assistant being verbally abusive to the patient - shouting, using demeaning language, and roughly handling the patient during repositioning. The nurse does not report the behavior because 'I don't want to cause problems with a coworker.' What are the nurse's obligations?",
      baseOptions: [
          "The nurse should document the observation thoroughly in the patient's medical record — comprehensive chart documentation creates a clinical record of the incident and alerts the clinical team to the behavior pattern, which satisfies the core reporting obligation to ensure patient safety and appropriate care",
          "The nurse has a mandatory obligation to report the witnessed abuse to a supervisor and through the facility's abuse reporting process - 'not wanting to cause problems' is not an acceptable reason to withhold a required abuse report. The patient's right to be free from abuse is not negotiable",
          "Reporting is discretionary when verbal abuse is involved rather than physical abuse, since verbal behavior alone does not cause direct physical harm — only incidents involving physical contact or visible injury require mandatory reporting to comply with state abuse reporting laws and facility policy",
          "The nurse should first address the behavior directly with the nursing assistant through private conversation before reporting — this allows the staff member an opportunity to understand the impact of their behavior and change it without involving management or compliance, preserving professional relationships",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Witnessing patient abuse - including verbal abuse and rough physical handling - triggers a mandatory reporting obligation. JC requires that staff report suspected abuse through the facility's defined reporting channels. The coworker relationship does not reduce this obligation. Documenting in the chart without reporting through the abuse reporting channel is insufficient.",
      baseXp: 20,
      followUps: [
        {
          question: "The nurse reports the incident to the charge nurse, who says 'I know him, he's actually really good with patients - probably just a bad day. Let's not make it a big deal.' The charge nurse takes no further action. What has occurred and what should happen next?",
          options: [
          "The charge nurse made a reasonable clinical judgment - a single witnessed incident does not constitute confirmed abuse, and a brief informal investigation or observation period is appropriate before escalating the concern to senior leadership, the compliance officer, or external reporting agencies.",
          "The charge nurse has failed to fulfill their supervisory obligation to escalate an abuse report - the nurse who witnessed the event must escalate the report to the next level of leadership or through an alternative reporting pathway (patient safety hotline, compliance department) since the immediate supervisor has not acted",
          "The charge nurse's dismissal of the report means the obligation is discharged - the frontline nurse has fulfilled their professional responsibility by reporting the concern to their immediate supervisor, and further escalation to other levels of leadership or external agencies is not required.",
          "The nurse should confront the nursing assistant directly about the witnessed behavior to clarify the individual's intent and obtain an explanation before involving the charge nurse, management, or other leadership in the matter to avoid potential damage to the staff member's professional reputation.",
        ],
          correctIndex: 1,
          explanation: "When a supervisor fails to act on a reported abuse allegation, the reporting obligation does not end - it escalates. The nurse who witnessed the abuse must use alternative escalation pathways: direct supervisor's supervisor, patient safety or compliance reporting line, or risk management. A supervisor's dismissal of an abuse report as 'a bad day' is itself a supervisory failure that may require reporting. JC expects that facilities have multiple reporting pathways specifically because direct supervisor channels can fail.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr5",
      baseQuestion: "A non-English-speaking patient with limited literacy in their native language is admitted. The physician uses the patient's teenage child as an interpreter for the entire admission history, physical findings discussion, consent for procedure, and discharge instructions. The child is 14 years old. What rights issues are present?",
      baseOptions: [
          "No issues exist - the patient chose to have their child interpret and patient preference for family interpreters is a supported practice by Joint Commission standards, and the physician documented that the patient seemed to understand the information discussed during the admission and consent process",
          "Multiple issues: professional interpreter services must be offered first before a patient can choose family interpretation; a 14-year-old child should not be asked to interpret complex medical information for a parent - this creates an inappropriate role reversal and the child may filter, misunderstand, or be emotionally harmed by the content; and consent discussions require accurate interpretation that a child may not be able to provide",
          "One issue exists - the consent discussion should have used a professional interpreter, but the history and discharge instructions are acceptable with a family interpreter since those conversations are less legally sensitive and do not carry the same informed decision-making requirements as a surgical consent discussion",
          "No issues exist - Joint Commission permits family interpretation when the patient has not specifically requested professional interpreter services or expressed concerns about the child's ability to accurately translate medical terminology and complex clinical concepts discussed during the encounter",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Multiple rights and safety issues exist: (1) professional interpreter services must be offered before family interpretation occurs - there is no documentation that this happened; (2) using a minor child as a medical interpreter creates an inappropriate burden, a role reversal with psychological implications, and an accuracy risk since a 14-year-old may not have the vocabulary, emotional distance, or ability to accurately translate complex medical content; (3) consent interpretation through a child raises validity questions.",
      baseXp: 20,
      followUps: [
        {
          question: "The physician argues that the patient 'seemed to understand' during the visit and that the child is bilingual and well-educated. The patient expressed no concerns. Does the patient's apparent satisfaction with the interpretation validate the approach?",
          options: [
          "Yes - patient satisfaction with the interpretation process is a key indicator of effective communication, and if the patient did not express concerns about understanding the information, the interpretation was likely adequate and met the standard for informed decision-making in this clinical encounter",
          "No - patient satisfaction with the interpretation process does not validate it. Patients often do not know what they do not know - they may not realize information was filtered, mistranslated, or omitted. A patient cannot evaluate interpretation accuracy in a language they cannot fully understand. JC and HIPAA-aligned standards require that professional interpreters be offered regardless of patient apparent satisfaction",
          "Partially - patient satisfaction validates the accuracy of the history and discharge instruction components but does not validate the consent discussion, which requires professional interpretation regardless of the patient's perception of understanding or satisfaction with the interaction",
          "Yes - if the child was objectively bilingual and the physician documented that they observed appropriate understanding and the patient expressed no concerns about the interpretation quality, the standard has been met according to JC visitation and communication standards",
        ],
          correctIndex: 1,
          explanation: "Apparent patient satisfaction cannot be used to validate interpretation quality because patients are unable to independently assess whether translation was accurate, complete, or appropriately nuanced. This is precisely why professional interpreter standards exist - to protect patients from communication failures they cannot themselves detect. A patient who nods and says 'yes' when asked if they understand may be responding to social cues rather than genuine comprehension.",
          expertXp: 25
        }
      ]
    }
    ,
    {
      id: "dd-pr6",
      baseQuestion: "A patient with end-stage heart failure has a valid DNR order on file. During a cardiac arrest, the patient's adult daughter - who arrived at the hospital after the arrest began - demands that staff 'do everything.' The nurse initiates CPR. What right has been violated?",
      baseOptions: [
          "The patient's family has the right to override the DNR order because family members are the appropriate surrogate decision-makers when the patient cannot speak for themselves, regardless of whether they have formal healthcare proxy designation",
          "The patient's right to self-determination - a valid DNR order represents the patient's previously expressed, legally documented decision not to receive CPR. A family member who has not been designated as healthcare proxy does not have authority to override a valid advance directive",
          "The right was violated only if the patient was ever conscious and able to reconfirm the DNR order during this hospitalization, since advance directives may become outdated and require periodic patient reaffirmation to remain legally binding",
          "No right was violated because emergency circumstances justify using family preference as a guide when the patient's wishes are not immediately clear or when resuscitation may preserve life long enough for additional family input",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "A valid DNR order is the patient's documented exercise of their right to refuse life-sustaining treatment. It is legally binding. A family member who is not designated as the legal healthcare proxy does not have authority to override it. Initiating CPR contrary to a valid DNR violates patient autonomy and may constitute unwanted medical intervention. Staff must know the policy for handling family disagreement with advance directives before emergency situations occur.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the risk management team reviews and finds no facility policy addressing how to respond when family members demand intervention contrary to a valid DNR during an emergency. What must the policy include?",
          options: [
            "A default rule to honor all family requests - family advocacy reflects the patient's best interest",
            "The policy must: (1) affirm that valid DNR orders are honored even in the presence of family objection; (2) define who has authority to speak for the patient (designated proxy vs. next of kin without legal authority); (3) identify the chain of clinical and administrative escalation when family-staff conflict occurs in real time during an emergency; and (4) provide communication guidance for staff on how to respond compassionately to distressed family members while maintaining adherence to the patient's documented wishes",
            "A requirement that ethics committee approval be obtained before honoring any DNR over family objection",
            "A default rule to attempt resuscitation when any family member objects - family distress indicates insufficient prior communication and resuscitation provides time for that communication"
          ],
          correctIndex: 1,
          explanation: "Staff cannot be left without policy guidance on how to respond when a family member demands intervention contrary to a valid DNR in an active emergency. The policy must be clear about the DNR's legal authority, must define who has proxy authority, must provide an escalation path, and must equip staff to respond with both clinical adherence and human compassion. An after-the-fact policy development following an actual rights violation represents a preventable gap.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr7",
      baseQuestion: "A Spanish-speaking patient is scheduled for an elective knee replacement. The surgeon obtains informed consent through the patient's bilingual adult son. The son signs the interpreter certification section of the consent form. The patient signs the consent form. What rights issue is present?",
      baseOptions: [
        "No issue - the patient signed the consent form and the son's bilingual ability satisfies the interpreter requirement",
        "The facility is required to offer professional interpreter services before allowing family interpretation for significant medical decisions. Informed consent is specifically identified as a high-stakes communication requiring professional interpretation - using a family member who may filter, soften, or misinterpret complex medical information does not meet the standard. There is no documentation that professional services were offered and declined",
        "The issue is limited to the son's qualifications - a family member who is bilingual can interpret consent if they are over 18",
        "No issue - the patient's signature indicates voluntary participation and understanding"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Professional interpreter services must be offered before family interpretation for significant communications - including informed consent. Family members have emotional involvement that may cause them to soften diagnoses, filter risks, or interpret imprecisely. The patient's signature on a consent form does not validate the consent if it was obtained without adequate communication. The absence of documentation that professional services were offered and declined is a compliance gap.",
      baseXp: 15,
      followUps: [
        {
          question: "The patient's son argues that his mother prefers family interpretation and that using a hospital interpreter feels 'cold and impersonal.' How should the clinical team respond?",
          options: [
            "Accept family interpretation - patient preference for family interpretation is a documented right and overrides the professional interpreter requirement",
            "After offering professional interpreter services, the patient may choose family interpretation for routine communication - but the offer must be documented. For high-stakes discussions like consent, some facilities require professional interpretation regardless of patient preference, particularly when consent-specific risks are involved. The team should explain why professional interpretation is recommended for consent without dismissing the patient's cultural preference, and the patient's informed choice should be documented",
            "Use dual interpretation - the hospital interpreter and son both participate, with the interpreter verifying accuracy of the son's translations",
            "Allow family interpretation for consent since the patient is elective and not urgent - urgent cases require professional services but elective situations allow patient preference"
          ],
          correctIndex: 1,
          explanation: "Patient preference for family interpretation is legitimate and should be respected after professional services are offered. The process requires: professional services offered (documented), patient choice made (documented), and for consent specifically, the team should ensure that a professional interpreter is at minimum available if needed and that the content communicated is confirmed to include all material risks. The documentation of the offer and the patient's choice is what satisfies the rights standard.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr8",
      baseQuestion: "A competent adult patient with Jehovah's Witness religious beliefs refuses a blood transfusion for a ruptured splenic laceration. The trauma surgeon believes the patient will die without transfusion. The patient is alert, oriented, and signs a form declining the transfusion. The surgeon transfuses the patient anyway after the patient becomes hypotensive and briefly loses consciousness. Was this action justifiable?",
      baseOptions: [
        "Yes - brief unconsciousness eliminates the patient's decision-making capacity, permitting treatment in the patient's best medical interest",
        "No - a competent patient's clearly expressed, documented refusal of treatment cannot be overridden by brief unconsciousness that results from the progression of the very condition they refused treatment for. The patient's prior documented refusal represents their informed decision made in anticipation of potential deterioration. Transfusing against a clearly documented refusal violates the patient's right to refuse treatment",
        "Yes - life-threatening emergency always permits a physician to provide life-saving treatment against a previously expressed preference",
        "Justifiable only if the patient had not anticipated that unconsciousness might occur when they signed the refusal form"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A competent patient's documented refusal of treatment is legally binding and represents a fundamental patient right. A patient who refuses blood transfusion for religious reasons anticipates that their condition may deteriorate without it - this is the very situation the refusal was intended to address. Brief unconsciousness resulting from the refused treatment does not erase a previously expressed, documented, competent refusal. This was a rights violation regardless of the medical outcome.",
      baseXp: 20,
      followUps: [
        {
          question: "Before the surgery, the patient's family tells the surgeon 'we know she signed the form but she really doesn't want to die - please just transfuse her.' The family has no healthcare proxy authority. How should the surgeon respond to this request?",
          options: [
            "Honor the family request - family knowledge of the patient's 'true' wishes supersedes a signed form in emotional situations",
            "The surgeon must respectfully decline to act on family interpretation of the patient's wishes when a clear, signed, competent refusal exists. The surgeon can acknowledge the family's distress and explain that the signed refusal represents the patient's autonomous legal decision. If there is genuine uncertainty about the patient's decisional capacity at the time of signing, a formal capacity evaluation should have been completed - not a post-hoc family override",
            "Call the ethics committee before proceeding - family disagreement with advance care decisions always requires ethics committee review",
            "Explore the family's specific concerns and revise the consent form to add language they are comfortable with"
          ],
          correctIndex: 1,
          explanation: "Family opinion about what the patient 'really' wants cannot override a documented competent patient decision. The signed refusal represents the patient's legal exercise of their right to refuse treatment. The surgeon's role is to honor that refusal while providing compassionate support to both patient and family. If there was any uncertainty about the patient's capacity at the time of signing, that should have been formally assessed then - capacity evaluation cannot be retroactively delegated to family interpretation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr9",
      baseQuestion: "A psychiatric inpatient on a voluntary admission requests discharge at 2 PM. The treatment team believes the patient is still at risk and initiates an involuntary hold. The patient was not informed of the difference between voluntary and involuntary admission rights at the time of admission. What patient rights failures are present?",
      baseOptions: [
        "No failure - involuntary hold initiation is a clinical decision that does not require prior rights notification",
        "Two failures: (1) voluntary patients must be informed of their right to request discharge and the conditions under which that request may be converted to an involuntary hold - this is a required admission rights notification; (2) the process for initiating a hold must follow state law and facility policy, including required notifications to the patient of their rights under the hold, the basis for the hold, and the right to contest it",
        "One failure - the rights notification at admission is an administrative requirement but does not affect the legality of the hold",
        "No failure - the clinical determination of risk justifies the hold regardless of prior rights notification"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Psychiatric voluntary admission rights include informing the patient at admission that they may request discharge, and the conditions under which that request may be denied and converted to involuntary status. This information must be provided at or near admission, not only when the situation arises. The patient who arrived as a voluntary patient was never informed of the conditions of their voluntary status - this is a rights notification failure that precedes and compounds the hold process.",
      baseXp: 20,
      followUps: [
        {
          question: "The facility's admission rights form is a generic multi-page document that patients sign without a staff member reviewing the specific rights with them. 74% of psychiatric voluntary patients cannot accurately describe their discharge rights when asked post-admission. What does this indicate?",
          options: [
          "The rights form satisfies the legal requirement for compliance documentation, and patient education comprehension levels are not formally measured as part of accreditation standards since the signature itself demonstrates acknowledgment of the notification process and fulfills the facility's documentation obligations.",
          "A systemic patient education failure - the rights notification process is designed for compliance documentation, not patient understanding. JC requires that patient rights information be communicated in a way that the patient can understand, not merely signed. A 74% incomprehension rate indicates the form-signing process is not providing meaningful rights notification",
          "The 74% incomprehension rate is expected and acceptable for psychiatric patients who may have cognitive impairment or acute psychiatric conditions, and modified standards for patient rights comprehension are appropriately applied in behavioral health settings to account for the population's clinical presentation.",
          "The form satisfies the standard because patient rights forms are legal documents that require signature documentation, and the comprehension level of individual patients is not a measurable component of the rights notification requirement under accreditation standards for any healthcare setting.",
        ],
          correctIndex: 1,
          explanation: "Patient rights notification must be meaningful - not just a form-signing exercise. JC's patient rights standards require that information be communicated in a way the patient can understand. A 74% incomprehension rate demonstrates that the current process fails this standard. Improvements should include verbal explanation by a staff member at the time of admission, teach-back verification of key rights (discharge rights, grievance rights, least restrictive treatment rights), and translation for non-English-speaking patients.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr10",
      baseQuestion: "A hospital restricts visitation for all patients on a locked behavioral health unit to 'family members only, verified by ID.' A patient's partner of 15 years has no legal documentation of their relationship and is turned away. The patient requests that their partner be allowed to visit. What rights issue is this?",
      baseOptions: [
        "No rights issue - facilities have authority to set reasonable visitation restrictions for safety and clinical reasons",
        "A potential violation of CMS visitation rights regulations - hospitals must allow patients to designate their own visitors and cannot restrict visitation based on relationship type. A patient who designates their partner as a visitor must be allowed to have that visitor unless there is a specific, documented clinical reason for restriction. The 'family only' policy that excludes a designated visitor based on relationship status violates the patient's right to have support persons of their choosing",
        "The restriction is justified - legal relationship documentation is a reasonable verification standard for a psychiatric inpatient unit",
        "The restriction is compliant for psychiatric units specifically - behavioral health units are exempt from standard visitation rules due to safety considerations"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "CMS Conditions of Participation and JC require that patients have the right to designate their own visitors without discrimination based on relationship type. A blanket 'family only' policy that excludes a patient-designated visitor based on the absence of legal relationship documentation is non-compliant. The patient's right to designate support persons is not limited to legally recognized family members. Clinical restrictions (specific documented concern about a specific visitor's impact on treatment) are permissible; blanket categorical exclusions are not.",
      baseXp: 20,
      followUps: [
        {
          question: "The behavioral health unit's visitor policy was written in 2018 before the updated CMS visitation rights regulations were finalized. The nursing director argues the unit's therapeutic environment requires controlled visitation. How should the policy be revised?",
          options: [
            "Maintain the family-only policy with a formal exception process - clinical judgment can be exercised case by case",
            "Revise the policy to reflect that patients may designate any visitor of their choosing, subject to: (1) the patient's clinical status supporting visitation at a given time; (2) no specific documented concern about a specific visitor's effect on treatment; (3) general unit rules applied equally to all visitors (e.g., no outside food, specified visiting hours, sobriety requirements). The therapeutic environment rationale may support specific, documented, individualized restrictions - not categorical exclusions of classes of people",
            "The policy is legally protected under the clinical exception provisions - therapeutic environment is a documented clinical reason for restriction",
            "Request a regulatory waiver from CMS for behavioral health units due to their unique safety environment"
          ],
          correctIndex: 1,
          explanation: "The revised policy must distinguish between individual-specific restrictions (permissible, clinically documented) and categorical visitor exclusions (non-compliant). A psychiatric unit can limit visitation to specific times, require staff oversight of visits, and restrict specific individuals whose presence is documented to affect treatment - but it cannot categorically exclude a class of visitors based on relationship status. The policy must be rewritten to align with CMS regulations while preserving the unit's legitimate clinical authority to manage individual visitor situations.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr11",
      baseQuestion: "A patient who suffered a stroke and has expressive aphasia is unable to verbally communicate. The clinical team makes all treatment decisions in conference with the patient's adult children, none of whom have legal healthcare proxy authority. The patient can write with their dominant hand, which is unaffected. No one has asked the patient to write their preferences. What rights failure is occurring?",
      baseOptions: [
        "No failure - stroke patients with communication impairment are presumed to have diminished decision-making capacity",
        "The team has failed to assess the patient's actual decision-making capacity - aphasia impairs expressive communication but not necessarily cognitive capacity. The patient's ability to write indicates a possible alternative communication pathway that has not been explored. Family conference without establishing actual patient incapacity, or attempting to obtain the patient's direct input through available communication methods, is a rights failure",
        "The failure is documentation only - the team should document that the patient was offered writing as a communication option",
        "The failure applies only to major treatment decisions - day-to-day care decisions can appropriately involve family without patient direct input"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Decision-making capacity is not determined by the presence of aphasia alone. Capacity requires the ability to understand information, appreciate its relevance, reason about options, and communicate a decision. A patient with expressive aphasia who can write may retain full capacity. The team's failure to explore alternative communication methods and formally assess capacity means the family conferences may be substituting for a patient who could have communicated directly. This is a foundational autonomy violation.",
      baseXp: 20,
      followUps: [
        {
          question: "A speech-language pathologist is consulted and determines the patient has intact comprehension and can communicate reliably through writing and a letter board. The patient, when offered the letter board, spells out that they want to go home for comfort care. Their children object and want aggressive treatment. What is the correct response?",
          options: [
          "Honor the family's request - family members are the appropriate surrogate decision-makers when a patient cannot verbally communicate with the clinical team, regardless of what alternative communication methods might demonstrate about the patient's underlying capacity.",
          "Honor the patient's expressed preference - the patient has demonstrated decision-making capacity through an alternative communication modality. Their preference for comfort care is now a documented competent patient decision. Family disagreement does not override a competent patient's stated wishes. Aggressive treatment contrary to the patient's expressed preference would be a rights violation",
          "Seek a second opinion from neurology on the patient's capacity before honoring any patient preference that conflicts with family wishes, since stroke-related cognitive impairment requires neurological assessment to determine whether the patient's written communications reflect actual decision-making capacity.",
          "Continue the current treatment plan while the ethics committee reviews the family conflict - continuation of aggressive treatment pending ethics review is appropriate when there is disagreement between patient preferences and family wishes regarding the appropriate level of care intensity.",
        ],
          correctIndex: 1,
          explanation: "When a patient who was previously assumed to lack decision-making capacity is found to have capacity through proper assessment and alternative communication, their expressed preferences must be honored as the primary ethical and legal standard. The patient is not a surrogate decision-making situation - they are a competent patient with a currently expressed preference. Family disagreement is emotionally significant and should be addressed with support, but it does not override the patient's rights.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr12",
      baseQuestion: "A patient undergoing a lumbar puncture refuses to allow medical students to observe the procedure, stating 'I don't want students in the room.' The resident performing the procedure allows two medical students to remain in the room while the patient's gown is adjusted for the procedure, saying 'they're just watching.' When the patient notices and objects, the resident says they are already ready to begin. What rights violation occurred?",
      baseOptions: [
          "No violation - medical students are part of the care team and their presence does not require specific patient consent. Students routinely observe invasive procedures as part of their clinical education, and teaching hospitals have an educational mission that includes student participation in patient care.",
          "The patient's right to privacy was violated - the patient explicitly declined student presence. Allowing students to remain without the patient's consent and proceeding with an invasive procedure after the patient's objection violates both privacy rights and the right to informed refusal of specific provider presence. Academic teaching does not override explicit patient objection to student observation",
          "A minor privacy concern only - the students were observing, not participating, which reduces the privacy violation. The primary patient right at issue involves informed consent for treatment, not observation by educational personnel.",
          "No violation if the students were properly attired in clinical clothing and introduced as members of the clinical team. Patient objections to 'students in the room' refer to lay persons, and medical students identified as clinical team members satisfy transparency requirements.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Patients have the right to refuse the presence of specific individuals during their care - including students, residents, and non-essential staff. An explicit refusal of student presence that is overridden by a clinician who determines that 'watching' is acceptable constitutes a rights violation. The patient's autonomy over who is present during an invasive procedure is not negotiable on the basis of academic convenience or procedural timing.",
      baseXp: 15,
      followUps: [
        {
          question: "The resident argues that the medical students are part of the medical team and the patient was not specifically told they were medical students - he introduced them as 'colleagues.' Does the framing of the introduction change the rights analysis?",
          options: [
            "Yes - introducing students as 'colleagues' is a legitimate teaching hospital practice that satisfies disclosure requirements",
            "No - patients in a teaching facility must be informed when medical students, residents, or trainees are involved in their care and have the right to decline student or trainee presence. Introducing students as 'colleagues' without disclosing their student status is deceptive and prevents the patient from making an informed decision about trainee involvement. The patient's earlier refusal of 'students in the room' demonstrates they had a specific concern about trainee presence that should have been fully respected",
            "Partially - the introduction framing reduces the violation to a documentation deficiency rather than a rights violation",
            "Yes - the term 'student' has a specific meaning and 'colleagues' accurately describes medical students' role in the team"
          ],
          correctIndex: 1,
          explanation: "Teaching hospitals must be transparent about learner involvement. Intentionally framing a student as a 'colleague' to bypass a patient's expressed objection to student presence is deceptive. It specifically defeats the patient's ability to exercise their right to object to trainee involvement. JC and ACGME-aligned patient rights standards require disclosure of learner status when patients ask or when learners are meaningfully involved in their care. The patient's prior objection made disclosure especially important in this situation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr13",
      baseQuestion: "A patient's discharge plan calls for skilled nursing facility (SNF) placement, but the patient states they want to go home with home health. The social worker and physician agree the patient is not safe to go home. They arrange SNF placement without further discussion of the patient's home preference. What patient rights issue is present?",
      baseOptions: [
        "No rights issue - the clinical team has authority to determine the appropriate level of care at discharge",
        "A right to participate in care planning and discharge planning is being violated - patients must be involved in discharge planning decisions. When a patient expresses a preference for home discharge, the clinical team must engage the patient in a discussion of the clinical concerns, explore whether home safety can be achieved with additional services, and document the patient's informed understanding of the risks if they choose home against medical advice. Arranging placement without that conversation substitutes clinical judgment for patient participation",
        "A rights concern only if the patient was not informed of the SNF placement before transport was arranged",
        "No rights issue - SNF placement for safety reasons is a clinical decision within the provider's scope of practice"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Patients have the right to participate in care planning, including discharge planning. A clinical team that overrides a patient's stated discharge preference by arranging SNF placement without engaging the patient in the decision-making process is substituting clinical judgment for patient participation. The appropriate process is to explain the clinical concerns, explore whether the patient's home preference can be safely accommodated, present options with risk information, and document the patient's informed participation - not unilateral placement.",
      baseXp: 15,
      followUps: [
        {
          question: "The patient refuses SNF placement after being informed of the clinical concerns and insists on going home. They sign an AMA (against medical advice) form. How should the team proceed?",
          options: [
            "Discharge the patient without any home services - they signed AMA and forfeited the right to hospital-arranged services",
            "Even with an AMA discharge, the clinical team maintains an obligation to: (1) ensure the patient understands the risks in terms they can comprehend; (2) provide instructions for what to do if their condition worsens; (3) arrange any home services the patient is willing to accept; (4) document the conversation and the patient's decision with specificity. An AMA form is not a waiver of the patient's right to receive discharge education and supportive planning - it documents their decision, not the team's withdrawal of responsibility",
            "Delay discharge until the ethics committee reviews - AMA discharges from SNF-level patients require ethics review",
            "Notify the patient's family and honor the family's decision about discharge disposition - families can override AMA decisions for safety reasons"
          ],
          correctIndex: 1,
          explanation: "AMA discharge does not end the clinical team's obligations to the patient - it documents the patient's autonomous decision to leave contrary to medical advice. The team must still ensure the patient leaves with adequate information, home services they agree to accept, and a clear escalation plan. Withdrawing support from an AMA patient as a consequence of their decision compounds rather than reduces the clinical and ethical risk. Comprehensive AMA discharge planning is both a rights obligation and a clinical standard.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr14",
      baseQuestion: "A hospital's incident reporting system is confidential, but a nursing supervisor tells a nurse who reported a patient safety concern: 'I know you filed a report about Dr. Jones - you need to be careful about your relationship with the medical staff.' The nurse later receives a negative performance review citing 'lack of teamwork.' What patient rights and employee protection issues are present?",
      baseOptions: [
        "A supervisor-employee relationship issue - performance review processes are separate from patient safety reporting",
        "Both a patient safety culture failure and a potential retaliation violation - JC requires that facilities have a non-punitive reporting culture where staff can report safety concerns without fear of reprisal. Supervisor identification of a confidential report and a subsequent negative performance evaluation with 'teamwork' language are classic retaliatory patterns that violate both the reporting culture standard and potentially applicable whistleblower protection statutes",
        "Only an HR issue - patient safety and patient rights are not directly implicated by supervisor-employee reporting interactions",
        "A confidentiality breach by the supervisor only - the negative review may be unrelated to the report"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires a non-punitive safety reporting culture. When staff face actual or perceived retaliation for reporting safety concerns, it has a direct patient rights impact: other staff suppress future reports, problems go undetected, and patients lose the protection that safety reporting provides. The pattern described - identification of a confidential report followed by a negative performance evaluation citing vague 'teamwork' concerns - is a classic retaliation pattern that requires investigation and leadership response.",
      baseXp: 20,
      followUps: [
        {
          question: "The nurse files a formal complaint with the risk management department about potential retaliation. The risk manager says 'we can't prove the review was related to the report - it could be coincidental.' What must the investigation include?",
          options: [
          "The risk manager's assessment is adequate without proof of direct causal connection, but a thorough retaliation investigation requires examining the timing and content of the performance review relative to the incident report date, the reviewer's prior knowledge of who filed the report through confidentiality breach analysis, the nurse's prior performance evaluation history for baseline comparison, and whether 'lack of teamwork' citations correlate with specific behaviors or incidents rather than just report timing alone.",
          "The investigation must examine the timing and content of the performance review relative to the incident report date, the reviewer's prior knowledge of who filed the report (which requires examining the confidentiality breach), the nurse's prior performance evaluation history for baseline comparison, and whether 'lack of teamwork' citations correlate with any specific behaviors or incidents - not just the report timing. The confidentiality breach itself is a separate finding requiring investigation regardless of the review's motivation",
          "Limit the investigation to the confidentiality breach as the primary finding, since the performance review timing alone cannot establish retaliation without direct evidence of causal intent, and HR personnel typically make review decisions independent of risk management reporting channels and clinical incident data.",
          "Close the investigation pending any future retaliation events, as a single data point of timing correlation is insufficient for a formal finding without additional corroborating evidence of discriminatory intent or pattern behavior by the manager or institution.",
        ],
          correctIndex: 1,
          explanation: "A thorough retaliation investigation requires objective evidence analysis - prior performance review history, timing relative to reporting, content analysis of the review language, and the confidentiality breach that enabled targeted action. The absence of a signed confession does not mean there was no retaliation. Circumstantial evidence patterns - timing, vague negative language in reviews, identified supervisors in confidential systems - are exactly the evidence that retaliation investigations evaluate. A dismissive 'can't prove it' response to this pattern is itself a culture failure.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr15",
      baseQuestion: "A patient admitted for a non-psychiatric condition is placed in physical restraints for confused behavior after falling out of bed twice. The orders are written by the hospitalist and the restraints are applied. On day 3, the patient has shown no fall attempts and is more oriented. The restraints remain in place because 'we're busy and he fell before.' What patient rights issues are present?",
      baseOptions: [
          "None - the initial fall history justifies continued restraint use until the hospitalist reviews and discontinues the order, and documentation of clinical reasoning supports this decision without requiring daily reassessment when the patient remains confused and at high risk for falls",
          "Multiple - restraint orders require daily physician reassessment and a determination that continued use is still clinically justified. Keeping restraints in place because the unit is 'busy' and based on a 3-day-old clinical event without current reassessment violates the patient's right to the least restrictive care environment and exceeds the authorized restraint duration",
          "Only a documentation issue - the restraints are clinically appropriate based on the patient's repeated fall attempts and confusion, and the compliance concern is limited to ensuring that reassessment notes are added to the medical record within 24 hours of the current date",
          "No rights issue if the patient cannot verbally articulate objection to the restraints because restraint necessity is determined solely by clinical risk factors, and a patient's inability to protest does not create an obligation for physician reassessment",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Restraint use is time-limited and must be continuously justified. Each day of continued use requires clinical reassessment demonstrating that the criteria for restraint are still met - not assumption based on prior events. A patient who has not attempted to fall in 3 days, is more oriented, and has restraints maintained because the unit is busy is being denied the right to least restrictive care. The 'he fell before' rationale without current reassessment is a rights and clinical failure.",
      baseXp: 15,
      followUps: [
        {
          question: "The nursing staff report that the hospitalist rarely rounds on restrained patients to reassess restraint necessity. The nurse manager says 'we remind them, but they don't always come.' What is the facility's responsibility in this situation?",
          options: [
            "The nurse manager's reminder approach satisfies the facility's oversight obligation - if physicians do not respond, it is a physician performance issue",
            "The facility bears institutional responsibility for ensuring that required restraint reassessments occur - this is not solely a physician behavior issue. The facility must have a process that enforces reassessment requirements: escalating reminders with defined timeframes, nursing authority to contact a covering physician if the primary physician does not respond, and a leadership process for addressing physicians who repeatedly fail to perform required reassessments. Sustained physician non-compliance with a patient rights standard requires medical staff accountability, not just nursing reminders",
            "Implement a nursing-driven restraint discontinuation protocol - nurses can remove restraints without physician order when the criteria are no longer met",
            "The responsibility shifts to the patient's family - family should advocate for reassessment if the physician is not coming"
          ],
          correctIndex: 1,
          explanation: "The facility's obligation to protect patient rights does not end when a physician does not comply with required reassessments. Nursing reminders that are consistently ignored require escalation - to the hospitalist's attending, the medical director, or the department chief. The institution must have enforceable processes for required time-sensitive reassessments, including escalation pathways that work in real time. Repeated physician non-compliance with a patient rights standard is a medical staff quality issue requiring formal accountability.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr16",
      baseQuestion: "A patient requests a copy of their medical records. The hospital's health information department tells the patient the records will be available in '60 days.' The patient does not have a specific time-sensitive need. Is this timeline compliant?",
      baseOptions: [
        "Yes - HIPAA allows up to 60 days to provide access to medical records",
        "No - HIPAA requires that a covered entity act on a request for access within 30 days. If an extension is needed, the covered entity may extend by an additional 30 days (for a total of 60) only with a written explanation of the reason for the delay. Simply telling a patient '60 days' without the 30-day initial response and documented extension is non-compliant",
        "Yes - 60 days is the standard response timeframe for all record access requests",
        "Partially compliant - the 60-day timeline is correct for paper records; electronic records must be provided within 30 days"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "HIPAA's Access Rule requires response within 30 days. A 30-day extension is available, but only when the covered entity provides written notice within the initial 30-day period citing the reason for delay. Telling a patient upfront that records will take 60 days - without providing the initial 30-day response - shortcuts the required process and denies the patient timely access to their own health information, which is a recognized patient right.",
      baseXp: 15,
      followUps: [
        {
          question: "The patient later learns they were charged $0.50/page for paper copies of 200 pages, totaling $100. The patient says this is excessive and files a complaint. What does the 2021 HIPAA update say about fees for record access?",
          options: [
            "Facilities may charge any reasonable fee - $0.50/page is a standard and permissible rate",
            "The 2021 HIPAA Right of Access update significantly limited fees - for electronic records (which are available for most covered entities), the fee must be minimal or nominal. For paper records, fees must be cost-based and limited to the actual labor and material costs of copying - not a per-page flat rate. An HHS enforcement action found that $6.50 for a complete electronic record was non-compliant. $100 for records that could have been provided electronically is almost certainly excessive",
            "The fee is compliant - HIPAA does not regulate the amount of fees for paper copies",
            "The fee is compliant if the patient specifically requested paper copies rather than electronic - patient-requested format determines the permissible fee structure"
          ],
          correctIndex: 1,
          explanation: "HHS's Right of Access Initiative has actively pursued enforcement actions against healthcare facilities for excessive record access fees. The guiding principle is that fees must be reasonable, cost-based, and must not create a barrier to record access. For electronic records (available from most EHR systems), a flat fee that reflects the actual cost of labor to locate, compile, and transmit the record is appropriate - a per-page charge for records that could be provided electronically at minimal cost is inconsistent with the access right.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr17",
      baseQuestion: "An ICU patient who is alert and oriented refuses a medically necessary arterial line that the intensivist orders for hemodynamic monitoring. The intensivist argues the patient 'doesn't understand how sick they are' and that the monitoring is essential. The patient says 'I understand - I just don't want it.' What is the correct approach?",
      baseOptions: [
          "The intensivist may place the arterial line without consent if they document clinical judgment that the intervention is immediately necessary to prevent serious harm - this doctrine of emergency override applies when a capacitated patient's refusal directly contradicts life-saving treatment in the ICU setting, provided the intensivist obtains a second physician opinion and documents the emergency circumstances justifying the override decision.",
          "The patient's refusal must be respected - an alert, oriented, capacitated patient has the absolute right to refuse any medical intervention, including an arterial line that the physician considers medically necessary. The intensivist's disagreement with the patient's decision does not override the patient's autonomy. The clinical team must document the patient's informed refusal, explain the risks of monitoring without the line, and explore whether alternative monitoring is acceptable to the patient",
          "Request an urgent ethics committee consultation to evaluate whether the patient's refusal is truly informed - the intensivist's clinical concern about inadequate monitoring justifies a multidisciplinary review to determine if the patient's decision-making demonstrates sufficient understanding of the hemodynamic risks and consequences of refusing the monitoring intervention.",
          "Place the arterial line if the patient's hemodynamic status deteriorates during the surgery or monitoring period - clinical deterioration and emerging signs of instability restore physician authority to override the patient's initial refusal based on changed medical circumstances and the principle of implied consent during medical emergencies.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "A capacitated adult patient's right to refuse any medical intervention is absolute - even when the refusal is against medical advice and the provider considers the intervention medically necessary. Disagreeing with the patient's decision, or believing the patient does not fully understand their situation, does not reduce their right to refuse. The appropriate response is thorough education, exploration of acceptable alternatives, documentation of the informed refusal, and continuing to provide care within the scope of what the patient accepts.",
      baseXp: 20,
      followUps: [
        {
          question: "The intensivist documents 'patient refuses arterial line - capacity questioned.' He calls the psychiatry department for an emergency capacity evaluation. The patient's refusal is reasonable and consistent, and they have demonstrated understanding of their condition and the arterial line's purpose. Is the capacity evaluation appropriate in this context?",
          options: [
            "Yes - any patient refusing a medically necessary intervention warrants formal capacity evaluation",
            "No - capacity evaluation is appropriate when there is genuine clinical evidence of impaired decision-making, not simply because a patient makes a decision the physician disagrees with. A patient who refuses an intervention while demonstrating comprehension of the information, appreciation of their condition, reasoning about their options, and consistent communication of their choice is demonstrating the four elements of decision-making capacity. Using a psychiatric consult to 'undo' a valid refusal the physician dislikes is inappropriate and stigmatizes psychiatry as a tool for overriding patient autonomy",
            "Yes - ICU patients are presumptively at risk for impaired capacity due to their physiological state",
            "Yes - the intensivist's clinical expertise gives them authority to question capacity when they believe the patient's decision will cause harm"
          ],
          correctIndex: 1,
          explanation: "Capacity evaluation is a clinical tool for situations where there is genuine evidence of decision-making impairment - not a mechanism for overriding decisions the physician disagrees with. A patient who clearly demonstrates all four elements of capacity (understanding, appreciation, reasoning, communication) should not be subjected to a capacity evaluation simply because their decision is medically undesirable. Using psychiatric consultation to reverse a valid patient decision is a rights violation that also undermines the integrity of the capacity evaluation process.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr18",
      baseQuestion: "A hospital's patient relations department receives a formal written grievance from a patient about nursing care during their hospitalization. The department opens an investigation but does not send any written response to the patient. At 90 days post-receipt, the investigation is still 'in progress.' What compliance failure has occurred?",
      baseOptions: [
        "No failure - complex grievances may require extended investigation periods",
        "CMS Conditions of Participation require that grievances be responded to in writing within a timeframe that is reasonable given the nature of the grievance - typically 7 days for most grievances. A 90-day non-response represents a serious compliance failure in the grievance management process. The patient's right to have their complaint heard and responded to has not been fulfilled",
        "The failure is limited to the investigation timeline - a 90-day investigation is acceptable if it is documented",
        "A failure only if the patient contacted the department and received no response to that contact"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "CMS requires that formal grievances receive a written response that includes what was investigated, what was found, actions taken, and the date of completion. A 90-day period without any written response violates this requirement. The investigation may require more time, but the patient must receive a response within the required timeframe - even if it is an interim response explaining that the investigation is continuing and setting an expected resolution date.",
      baseXp: 15,
      followUps: [
        {
          question: "To close the compliance gap, the patient relations director proposes sending all pending grievances a standard letter stating 'we are investigating your concern and will provide a resolution within 30 additional days.' Does this satisfy the grievance response requirement?",
          options: [
            "Yes - a written interim response that commits to a resolution timeline satisfies the content requirements",
            "No - a standard 'we are investigating' letter does not satisfy the CMS grievance response content requirements. The written response must include: what steps were taken to investigate, what was found, what actions were taken (or will be taken), and a contact person. A form letter with no investigation content is not a CMS-compliant grievance response - it acknowledges receipt without providing the required substance",
            "Yes - for grievances still under investigation, interim responses with a projected timeline are an accepted alternative to final resolution letters",
            "Partially - the letter satisfies the timing requirement but must be supplemented with a final resolution letter that includes investigation findings"
          ],
          correctIndex: 1,
          explanation: "CMS grievance response content requirements specify what a written response must include - not merely that a written response was sent. A form letter that does not describe the investigation steps, findings, or actions does not satisfy these content requirements. Even for complex ongoing investigations, the written response should describe what has been done, what remains to be done, and when a final response can be expected - not simply 'we are investigating, 30 more days.' The substance of the response is what demonstrates that the patient's concern has been meaningfully engaged.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-pr19",
      baseQuestion: "A patient in the ED is brought in by police after a domestic violence incident. The patient is alert and asks the staff not to speak with the police officer about their injuries. A nurse tells the officer: 'She has bruises on her arms and torso consistent with blunt trauma - it looks like she was assaulted.' What rights violation occurred?",
      baseOptions: [
        "No violation - law enforcement presence at an ED creates an exception to patient privacy that allows staff to share clinical information",
        "A HIPAA privacy violation - the patient clearly requested that their clinical information not be shared with law enforcement, and HIPAA permits but does not require disclosure to law enforcement in domestic violence situations. When the patient objects to disclosure, the clinical team must respect that preference except in specific defined circumstances (serious imminent threat to the patient or others, legally mandated reporting in that jurisdiction). The nurse shared specific clinical findings without the patient's consent",
        "No violation - suspected child abuse and domestic violence are mandated reporting situations that eliminate patient consent requirements",
        "A minor violation - clinical findings shared with law enforcement are not protected health information because the officer was present during the encounter"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "HIPAA permits (but does not require) disclosure to law enforcement in certain circumstances. When a patient specifically objects to sharing their information with law enforcement in a domestic violence situation, the covered entity generally must honor that preference. Mandatory reporting for domestic violence varies significantly by state - not all jurisdictions require reporting for adult patients. The nurse's disclosure of specific clinical findings in the face of an explicit patient objection is a HIPAA privacy violation absent a specific mandatory reporting requirement in that jurisdiction.",
      baseXp: 20,
      followUps: [
        {
          question: "The hospital's policy states 'clinical staff may share information with law enforcement present in the ED when clinically relevant.' Does this policy provision authorize the disclosure?",
          options: [
            "Yes - the hospital policy explicitly authorizes the disclosure, which satisfies the HIPAA minimum necessary standard",
            "No - a hospital policy cannot create a HIPAA exception that does not exist in the regulation. HIPAA authorizations for law enforcement disclosure have specific criteria, and a blanket 'clinically relevant' policy provision does not satisfy them. Furthermore, the patient's explicit objection creates an additional barrier to disclosure in a domestic violence situation. The policy needs to be revised to reflect HIPAA-compliant law enforcement disclosure criteria, including patient consent or specific statutory exceptions",
            "Yes - policies approved by the hospital's compliance officer carry HIPAA authority for the specific disclosures they authorize",
            "The policy provision is valid because 'clinically relevant' disclosure to law enforcement is a recognized HIPAA exception for all healthcare facilities"
          ],
          correctIndex: 1,
          explanation: "Hospital policies cannot create HIPAA exceptions - they must be written within the framework of HIPAA's actual permissible disclosures. A blanket policy authorizing disclosure to 'law enforcement present in the ED when clinically relevant' is overbroad and does not incorporate the patient consent, objection, and mandatory reporting nuances that HIPAA requires. The policy must be revised to specify: what circumstances permit disclosure without consent (active threat, specific mandatory reporting requirements), how patient objection is handled, and what specific HIPAA provision supports each category of disclosure.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-pr20",
      baseQuestion: "A patient in a long-term acute care facility has been hospitalized for 87 days. During a family meeting, the patient's power of attorney asks for a detailed review of all treatments, goals of care, and a prognosis discussion. The attending physician attends the meeting for 4 minutes, hands the family a printed discharge summary, and leaves to see other patients. What patient and family rights concerns are present?",
      baseOptions: [
        "No concerns - the physician provided information through the discharge summary document",
        "Multiple concerns: the patient and family's right to a meaningful goals-of-care discussion with an available physician was not fulfilled; the right of the patient's legal representative (POA) to participate in care planning requires more than a 4-minute handoff; and for a patient hospitalized 87 days on life support, JC communication standards expect that goals of care discussions occur with adequate time and physician engagement. The document substitution does not fulfill the dialogue requirement",
        "Only a time management concern - the physician's other patients also have rights that justified limiting the meeting duration",
        "A concern limited to the family - the patient, not the POA, has the right to a goals-of-care discussion"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Goals-of-care discussions for patients with prolonged, complex illness are a critical component of patient-centered care. The patient's legal representative has the right to a meaningful consultation - not a handoff of a document. JC communication standards expect that information exchange occurs in a way that supports understanding and participation in care decisions. A 4-minute physician presence at a family meeting requested for a detailed prognosis discussion and goals review does not meet this standard.",
      baseXp: 20,
      followUps: [
        {
          question: "The family reports the experience to the patient relations department and rates their communication experience at 1 out of 5. The physician argues that the summary document contained all relevant information. How should the facility respond?",
          options: [
            "Support the physician - documented information in a written summary satisfies communication obligations",
            "Investigate the family's communication experience, facilitate a follow-up goals-of-care meeting with adequate physician engagement and time, and address with the physician the distinction between information transfer and meaningful communication. For patients on prolonged hospital courses, proactive, structured family communication meetings are both a JC expectation and a clinical best practice that improves care alignment and reduces moral distress for families and staff",
            "Provide the family with a follow-up call from patient relations - physician communication style is not subject to hospital quality improvement",
            "Refer the family to the hospital's care management team for future communication needs - physicians are responsible for clinical decisions, not care communication"
          ],
          correctIndex: 1,
          explanation: "Family-reported communication failures in goals-of-care situations require both immediate remedy (a proper meeting) and systemic response. The physician's belief that a document transfers the same value as a face-to-face conversation reflects a fundamental misunderstanding of what goals-of-care communication serves - it is not information transfer, it is shared understanding, emotional acknowledgment, and collaborative decision-making. JC's communication standards for seriously ill patients require dialogue, not documentation. Leadership must address both the specific family experience and the physician's communication practice.",
          expertXp: 25
        }
      ]
    }
  ]
};
