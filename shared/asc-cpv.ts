import type { Level } from "./schema";

export const ascCpvLevel: Level = {
  id: "asc_cpv",
  module: "asc",
  name: "Credentialing & Privileging",
  description: "AAAHC v44 CPV - governing body accountability for credentialing and privileging, initial and reappointment applications, primary source verification, NPDB, and ongoing monitoring.",
  icon: "ClipboardCheck",
  color: "hsl(220, 60%, 45%)",
  requiredScore: 0,
  chapterSummary: {
    chapterTitle: "CPV: Credentialing and Privileging",
    plainLanguageSummary:
      "The CPV category establishes requirements for how an ASC verifies the qualifications of its medical and dental staff and grants them specific clinical privileges. The governing body is ultimately responsible for credentialing and privileging. Every practitioner must complete a formal application, provide evidence of training and current competence, and submit to primary or secondary source verification before privileges are granted. Reappointment occurs at least every three years with the same rigor. Ongoing monitoring of licensure, DEA registration, and board certification keeps credentials current between formal reviews.",
    keyOperationalExpectations: [
      "The governing body has defined, uniform criteria for initial appointment and reappointment of medical/dental staff.",
      "Each application for privileges includes verified evidence of training, experience, current competence, current license, NPDB query, and DEA registration (if applicable).",
      "Applicants provide written attestation on their application addressing liability history, licensure actions, adverse privilege history, federal sanctions, criminal history, and health status.",
      "Primary or secondary source verification is conducted for each application before privileges are granted.",
      "Reappointment occurs at least every three years, with peer review results incorporated into the decision.",
      "Date-sensitive information - licensure, DEA, board certification - is monitored on an ongoing basis.",
    ],
    commonRiskPoints: [
      "Credentials were approved solely because a hospital granted the same privileges - no independent ASC verification.",
      "NPDB was queried at initial appointment but not at reappointment.",
      "Peer review results are maintained separately and not brought into the reappointment decision.",
      "Licensure and DEA expiration dates are not tracked between formal reappointment cycles.",
    ],
    aaahcStandards: ["CPV.100", "CPV.130", "CPV.140", "CPV.150", "CPV.160", "CPV.170", "CPV.180", "CPV.190", "CPV.200", "CPV.210"],
  },
  studyMaterial: [
    {
      title: "Who is responsible for verifying a provider's credentials before they can work at your ASC?",
      content:
        "The governing body is ultimately responsible for verifying credentials and granting clinical privileges to all providers who work at the facility. Having privileges at a hospital does not automatically give a provider privileges at your ASC. The ASC must run its own independent verification process for every provider.",
      keyPoint:
        "Hospital privileges do not transfer. The ASC must run its own separate credentialing process for every provider.",
    },
    {
      title: "What written processes must be in place for credentialing?",
      content:
        "The facility must have governing-body-approved written processes for every stage of the credentialing cycle, including initial appointment, reappointment, granting privileges, suspending or ending privileges, and how providers can appeal a decision. Informal understandings are not enough. All processes must be in writing and consistent with state law.",
      keyPoint:
        "Every step of the credentialing cycle must have a formal written process approved by the governing body.",
    },
    {
      title: "What information must a provider submit when applying for clinical privileges?",
      content:
        "A provider applying for privileges must submit evidence of their training, experience, and current clinical competence. They must also provide a current state license, a National Practitioner Data Bank report, and their DEA registration if they prescribe controlled substances. Peer references are also required to confirm that someone who has seen the provider practice can vouch for their current skills.",
      keyPoint:
        "Initial applications must include training evidence, peer references, a current license, an NPDB report, and DEA registration if applicable.",
    },
    {
      title: "What must a provider disclose on their credentialing application?",
      content:
        "Providers must answer questions about their history of malpractice claims, any past license suspensions or restrictions, any loss or limitation of privileges at other facilities, any federal sanctions, any criminal history, and any health conditions that could affect their ability to provide safe care. The application must be signed and dated by the provider before it can be processed.",
      keyPoint:
        "Providers must disclose adverse history in multiple categories. An unsigned application cannot be processed.",
    },
    {
      title: "What does primary source verification mean?",
      content:
        "Primary source verification means confirming a provider's credentials directly with the organization that issued them. For example, you verify a license by checking the state licensing board directly, not by accepting a copy from the provider. Your facility can use an accredited credentialing verification organization to do this work, but that organization must also perform primary source checks.",
      keyPoint:
        "Primary source verification means going directly to the issuing authority. A copy provided by the provider does not count.",
    },
    {
      title: "How often must providers reapply for clinical privileges?",
      content:
        "Providers must go through a full reappointment process at least every three years, or more often if required by state law. The reappointment process includes a new application, updated disclosures, and a fresh round of primary source verification. Reappointment is not a rubber stamp of the previous review.",
      keyPoint:
        "Reappointment must happen at least every three years and requires the same level of verification as initial credentialing.",
    },
    {
      title: "How are peer review results connected to credentialing decisions?",
      content:
        "When the governing body makes a decision about renewing a provider's clinical privileges, it must consider peer review data, quality monitoring results, and any complaint or incident information. A credentialing process that never looks at clinical performance data is missing a required connection between quality and privileging.",
      keyPoint:
        "Credentialing decisions must incorporate peer review and quality monitoring results. The two processes must connect.",
    },
    {
      title: "How do you keep track of licenses and certifications between reappointments?",
      content:
        "License expiration dates, DEA registration renewals, and board certification deadlines must be tracked on an ongoing basis between reappointment cycles. A license that expires between reappointments must be caught and renewed before the provider continues to practice. Waiting until the three-year reappointment to check these dates is not sufficient.",
      keyPoint:
        "Licenses and DEA registrations expire on their own schedule. They must be tracked and renewed continuously, not just at the three-year reappointment.",
    },
  ],
  questions: [
    {
      id: "asc_cpv_01",
      question:
        "An ASC approves a new surgeon's clinical privileges solely because the surgeon is credentialed at a nearby hospital with the same procedures. What does CPV.100 require instead?",
      options: [
        "Hospital credentials are sufficient - the ASC may rely on them without its own verification",
        "The ASC must conduct its own independent credentialing and privileging process - hospital status may be considered but does not substitute for the ASC's review",
        "The surgeon may begin practicing while the ASC completes its credentialing process",
        "CPV.100 only applies to new graduates - experienced surgeons may use privilege reciprocity",
      ],
      correctIndex: 1,
      explanation:
        "CPV.100 explicitly states that privileges may not be approved solely on the basis that another organization has approved them. The ASC must have its own independent credentialing and privileging process. Another institution's status may be included in the governing body's consideration, but it does not substitute for independent verification.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Each accredited organization is independently responsible for verifying the credentials and competence of its medical staff. A hospital's approval reflects that hospital's capabilities, patient population, and review process - not necessarily appropriate for the ASC's services and setting.",
        whyWrong: {
          A: "Relying solely on another organization's approval is explicitly prohibited by CPV.100.",
          C: "The practitioner may not begin practicing until the ASC's own credentialing and privileging process is complete and the governing body approves privileges.",
          D: "CPV.100 applies to all initial appointments regardless of the practitioner's experience level.",
        },
        operationalContext:
          "When a practitioner holds hospital privileges, request a copy of their credentials file as a starting point - but conduct your own primary source verification for each required element. Document that you have done so independently.",
      },
    },
    {
      id: "asc_cpv_02",
      question:
        "Which of the following is a required element on a formal initial application for staff privileges under CPV.140?",
      options: [
        "A letter from the practitioner's specialty society endorsing their application",
        "Information from the National Practitioner Data Bank (NPDB)",
        "A copy of the practitioner's most recent federal tax return",
        "A letter from the practitioner's malpractice insurer rating their risk category",
      ],
      correctIndex: 1,
      explanation:
        "CPV.140 requires NPDB information on every initial application for staff privileges. The NPDB captures malpractice payment history, adverse licensure actions, and privilege actions reported by other organizations - information the applicant might not self-disclose.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The NPDB query reveals adverse actions that the practitioner may omit from their application. Querying the NPDB at initial appointment is a non-negotiable CPV.140 requirement.",
        whyWrong: {
          A: "Specialty society endorsement letters are not a required CPV.140 element.",
          C: "Tax returns are not a credentialing requirement.",
          D: "Current liability coverage and claims history are required, but a risk rating letter from the insurer is not the specified documentation.",
        },
        operationalContext:
          "Build the NPDB query into your initial credentialing checklist as a required, non-waivable step. File the query result - positive or negative - in the credentials file. Track the query date so you know when to query again at reappointment.",
      },
    },
    {
      id: "asc_cpv_03",
      question:
        "A surgeon's application for initial privileges discloses two malpractice claims settled in the past five years. Under CPV.150, what must the application address about these claims?",
      options: [
        "Claims history is not part of the formal application - only the NPDB covers this",
        "The application must include the professional liability claims history as part of the written attestation",
        "Only claims that resulted in judgments (not settlements) must be disclosed",
        "Claims from more than three years ago are excluded from attestation requirements",
      ],
      correctIndex: 1,
      explanation:
        "CPV.150 requires the application to include professional liability claims history as part of the written attestation - specifically claims history and any refusal or cancellation of professional liability coverage. This is a self-disclosure requirement separate from and in addition to the NPDB query.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CPV.150 attestation and CPV.140 NPDB query work together - the attestation captures self-disclosed information while the NPDB captures externally reported adverse actions. Both are required. Settlements appear on NPDB reports if payments were made.",
        whyWrong: {
          A: "Claims history attestation is explicitly required by CPV.150 as part of the application itself, not only through NPDB.",
          C: "CPV.150 does not distinguish between settled and judged claims.",
          D: "No time limitation on claims history disclosure is specified in CPV.150.",
        },
        operationalContext:
          "Design your application form to have a dedicated attestation section with a separate question for each CPV.150 disclosure category. A practitioner who leaves a section blank has submitted an incomplete application that cannot be processed.",
      },
    },
    {
      id: "asc_cpv_04",
      question:
        "A completed and signed application for clinical privileges is received. Under CPV.170, what must happen before privileges may be granted?",
      options: [
        "The governing body may grant privileges based on the application alone if the practitioner is board certified",
        "Primary or secondary source verification of credentials must be conducted",
        "A 30-day waiting period is required before verification begins",
        "Verification is only required if the NPDB query returns adverse reports",
      ],
      correctIndex: 1,
      explanation:
        "CPV.170 requires primary or secondary source verification upon receipt of a completed and signed application. Verification is not optional - it must be conducted for every application regardless of the practitioner's board certification status or NPDB result.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Primary source verification is what distinguishes a credentialing process from a document collection process. The standard specifically requires verification to occur after the completed and signed application is received, before privileges are granted.",
        whyWrong: {
          A: "Board certification is one credential that must itself be primary source verified - it does not eliminate the need for verification of other elements.",
          C: "No waiting period is specified in CPV.170 - verification should begin promptly.",
          D: "Verification is a universal requirement, not contingent on adverse NPDB findings.",
        },
        operationalContext:
          "Use state licensing board online portals, ABMS specialty board lookup (certificationmatters.org), and the NPDB to conduct and document verification. Print and date each verification result. File in the credentials record.",
      },
    },
    {
      id: "asc_cpv_05",
      question:
        "A surgeon's reappointment is due. The credentials committee reviews the license and NPDB query but does not include any peer review data in its deliberations. What CPV standard is not satisfied?",
      options: [
        "Peer review data belongs only in the quality committee - it has no role in reappointment",
        "CPV.200 requires peer references and/or peer review results to be incorporated into the appointment and reappointment decision process",
        "Peer review data is only required for reappointment when the practitioner has had adverse quality events",
        "CPV.200 only applies to initial appointment, not reappointment",
      ],
      correctIndex: 1,
      explanation:
        "CPV.200 explicitly requires that peer references and/or peer review activities and results are incorporated into the appointment and reappointment decision process. At reappointment, the organization's internal peer review results serve this function. The credentials and quality processes must intersect - not remain in separate silos.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CPV.200 closes the loop between quality and credentialing. A surgeon who has performed 50 procedures with three documented quality concerns during the appointment period cannot be reappointed without the credentials committee knowing about those concerns.",
        whyWrong: {
          A: "CPV.200 specifically requires peer review data to be incorporated into the reappointment decision - the quality committee's findings must reach the credentials and governing body.",
          C: "Peer review data incorporation is a universal reappointment requirement, not contingent on known adverse events.",
          D: "CPV.200 applies to both initial appointment (peer references) and reappointment (peer review results).",
        },
        operationalContext:
          "Create a reappointment packet template with a required section for peer review summary. The quality coordinator must complete this section before the credentials committee can finalize its reappointment recommendation.",
      },
    },
    {
      id: "asc_cpv_06",
      question:
        "Under CPV.180, how frequently must medical staff members apply for reappointment?",
      options: [
        "Every year",
        "At least every three years",
        "Every five years, consistent with hospital reappointment cycles",
        "Only when there is a change in the practitioner's scope of practice",
      ],
      correctIndex: 1,
      explanation:
        "CPV.180 requires reappointment at least every three years, or more frequently if prevailing laws, regulations, or organizational policies require it. Some states require more frequent reappointment - the organization must follow whichever interval is more stringent.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Three years is the maximum interval between formal reappointments under CPV.180. Organizations may require more frequent reappointment - but not less.",
        whyWrong: {
          A: "Annual reappointment is more frequent than required but would satisfy CPV.180 if the organization chooses this interval.",
          C: "Five-year intervals do not meet the three-year maximum required by CPV.180.",
          D: "Reappointment is time-based, not event-triggered - it occurs at defined intervals regardless of scope changes.",
        },
        operationalContext:
          "Maintain a reappointment calendar with all practitioners listed and their reappointment due dates. Send 90-day advance notices to practitioners and initiate the NPDB query at the same time. Never allow a practitioner to practice beyond their reappointment date without a formal temporary privilege authorization.",
      },
    },
    {
      id: "asc_cpv_07",
      question:
        "A physician assistant's (PA) medical license expires during their current appointment period - six months before their scheduled reappointment. Under CPV.210, what should the organization do?",
      options: [
        "The expired license will be addressed at the scheduled reappointment - no action needed now",
        "The organization must monitor date-sensitive credentials like licensure on an ongoing basis and take action when the license expires - the practitioner may not practice on an expired license",
        "The PA should self-notify the organization when the license is renewed",
        "Only physicians require ongoing licensure monitoring between reappointments",
      ],
      correctIndex: 1,
      explanation:
        "CPV.210 requires ongoing monitoring of date-sensitive credentialing information - at minimum at expiration, appointment, and reappointment. Licensure expiration must be tracked and addressed immediately - the organization cannot wait for the next scheduled reappointment to discover an expired license.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "CPV.210 was designed precisely to address the gap between three-year reappointment cycles. Licenses expire annually in most states. The organization must have a tracking system that catches expirations as they occur - not at the next formal review.",
        whyWrong: {
          A: "Allowing a practitioner to practice on an expired license violates CPV.210 and most state practice acts.",
          C: "Self-notification by the practitioner is not a compliant monitoring system - the organization must have its own tracking.",
          D: "CPV.210 applies to all licensed practitioners including PAs, not only physicians.",
        },
        operationalContext:
          "Build a master credentialing expiration tracker with automated alerts 90, 60, and 30 days before each practitioner's license, DEA, and board certification expiration. The credentialing coordinator should verify renewal documentation before the expiration date.",
      },
    },
    {
      id: "asc_cpv_08",
      question:
        "The governing body of an ASC wants to delegate the initial review of credentials applications to the Medical Director. Under CPV.200, what must be present if this delegation occurs?",
      options: [
        "Delegation to the Medical Director is not permitted - the governing body must personally review each application",
        "Documentation of the delegation must be present, and the governing body still makes the final appointment and reappointment decisions",
        "Once delegated, the Medical Director has full governing body authority for credentialing decisions",
        "Delegation is only permitted for reappointment applications, not initial appointments",
      ],
      correctIndex: 1,
      explanation:
        "CPV.200 permits the governing body to delegate initial review of applications to an internal delegate (such as the Medical Director or a Credentials Committee), provided the delegation is documented. However, the governing body retains final decision-making authority for appointment and reappointment - delegation of review, not of the final decision.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The governing body remains responsible for credentialing decisions even when it delegates the review function. The Medical Director or committee provides recommendations; the governing body approves or denies.",
        whyWrong: {
          A: "CPV.200 explicitly allows delegation of application review - only the final decision must remain with the governing body.",
          C: "The governing body cannot fully transfer its credentialing decision authority - it may delegate review and recommendation only.",
          D: "Delegation is equally applicable to both initial and reappointment reviews.",
        },
        operationalContext:
          "Document the delegation in the governing body bylaws or a formal resolution. The Medical Director or committee should present their recommendations to the governing body in writing; the governing body's vote to approve or deny should be documented in meeting minutes.",
      },
    },
    {
      id: "asc_cpv_09",
      question:
        "An application for initial staff privileges is received. The application form is complete and signed, but the credentials coordinator cannot verify the applicant's medical school education through the school's records because the school closed 20 years ago. Under CPV.170, what is an acceptable approach?",
      options: [
        "The education verification may be skipped since the school no longer exists",
        "Secondary source verification (through a CVO or accredited verification service that has access to historical records) is acceptable when primary source verification is impossible",
        "The applicant's self-attestation of their medical school education is sufficient in this case",
        "A letter from the applicant's residency program confirming the medical degree is always sufficient for primary source verification",
      ],
      correctIndex: 1,
      explanation:
        "CPV.170 and AAAHC guidance recognize that primary source verification may not be possible if a source no longer exists or is impossible to verify. In such cases, secondary source verification through an accredited CVO or equivalent verification service that has historical records is acceptable. The organization must document the reason primary source verification could not be obtained.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "AAAHC standards acknowledge the practical reality that some original credentialing sources no longer exist. Secondary source verification through a reputable CVO that maintains historical records is the recognized alternative.",
        whyWrong: {
          A: "Simply skipping a required verification without documenting why and using an alternative is not compliant.",
          C: "Applicant self-attestation is not a primary or secondary source - it is the information being verified, not the verification itself.",
          D: "A residency program can verify the applicant completed their training there, but a residency letter is not primary source verification for the underlying medical degree.",
        },
        operationalContext:
          "When a primary source is unavailable, document: (1) what source was sought, (2) why it could not be used, (3) what alternative secondary source was used, and (4) what that secondary source confirmed. This documentation protects the organization in a survey.",
      },
    },
    {
      id: "asc_cpv_10",
      question:
        "A surgeon applies for reappointment. The reappointment application includes updated personal information and a dated signature but does not include the attestation questions addressing adverse actions, licensure changes, and health status. Under CPV.180, what is the status of this application?",
      options: [
        "The application is complete - attestation is only required at initial appointment",
        "The application is incomplete - attestation questions must be completed at reappointment as well as at initial appointment",
        "The attestation section can be skipped if the NPDB query is clean",
        "Only practitioners with prior adverse history must complete the attestation at reappointment",
      ],
      correctIndex: 1,
      explanation:
        "CPV.180 specifies that the reappointment application must include at minimum: updated personal information, completed attestation questions, and a dated signature. Attestation questions at reappointment cover the same categories as initial appointment - they must be completed regardless of the NPDB result or the practitioner's history.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Reappointment attestation catches changes that occurred since the last appointment - new malpractice claims, licensure actions in other states, new health conditions. The NPDB captures reported actions, but the attestation may reveal unreported events.",
        whyWrong: {
          A: "Attestation is required at both initial appointment and reappointment under CPV.180.",
          C: "NPDB results and attestation are complementary, not interchangeable. A clean NPDB does not waive the attestation requirement.",
          D: "Attestation is a universal reappointment requirement - not limited to practitioners with prior adverse history.",
        },
        operationalContext:
          "Use a standardized reappointment application form that mirrors the initial application's attestation section. Date the form the day it is received and confirm all attestation fields are completed before routing to the credentials committee.",
      },
    },
    {
      id: "asc_cpv_11",
      question:
        "A new anesthesiologist joins the ASC mid-year. Her DEA registration expires in two months. Under CPV.210, what must the organization track?",
      options: [
        "DEA registration expiration is the anesthesiologist's personal responsibility - the organization has no tracking obligation",
        "The organization must monitor DEA registration expiration on an ongoing basis and ensure renewal occurs before the registration expires",
        "DEA registration only needs to be verified at initial appointment and reappointment",
        "DEA tracking is only required for practitioners who prescribe Schedule II substances",
      ],
      correctIndex: 1,
      explanation:
        "CPV.210 requires ongoing monitoring of DEA registration (in addition to licensure and board certification) between reappointment cycles. An expired DEA registration means the anesthesiologist may not administer controlled substances - a patient safety and regulatory violation - that the organization must prevent through active tracking.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "DEA registrations renew on three-year cycles. An anesthesiologist who allows their DEA registration to lapse cannot legally administer controlled substances. CPV.210 places the monitoring responsibility on the organization, not only on the practitioner.",
        whyWrong: {
          A: "The organization bears joint responsibility for ensuring practitioners maintain current credentials. CPV.210 is the standard that formalizes this responsibility.",
          C: "Time-limited credentials like DEA registration must be tracked at expiration, not only at formal reappointment.",
          D: "DEA monitoring applies to all practitioners who prescribe or administer controlled substances, not only Schedule II.",
        },
        operationalContext:
          "Add DEA registration expiration dates to your credentialing expiration tracker alongside license expiration dates. Set alerts 90 days before expiration. Verify renewal documentation before the expiration date.",
      },
    },
    {
      id: "asc_cpv_12",
      question:
        "The governing body of a small ASC consists of two physician-owners. One physician applies for reappointment. Under CPV, what must be considered to avoid a conflict-of-interest problem in the reappointment decision?",
      options: [
        "Physician-owners are exempt from formal reappointment requirements",
        "When the governing body is too small or has conflicts of interest, AAAHC standards note that solo providers and small groups may require review by an outside provider to ensure objectivity",
        "The other physician-owner may evaluate and approve the reappointment without any external review",
        "Governing body members do not require credentialing because they are owners",
      ],
      correctIndex: 1,
      explanation:
        "AAAHC guidance under CPV.200 notes that for solo providers, because a separate physician cannot serve as an internal peer reviewer, review by an outside provider is required. The same principle applies when conflicts of interest prevent objective internal review. External review protects both the quality of the credentialing process and the organization.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The objectivity of the credentialing and peer review process is fundamental to its purpose. When internal review cannot be objective due to conflict of interest or insufficient staff, external peer review is the recognized solution.",
        whyWrong: {
          A: "Physician-owners are subject to the same credentialing and reappointment requirements as all medical staff members.",
          C: "A single physician-owner reviewing their co-owner partner creates an obvious conflict of interest that does not satisfy the independence required for credentialing.",
          D: "Ownership of the organization does not exempt individuals from the credentialing and reappointment process.",
        },
        operationalContext:
          "For small ASCs where all governing body members are also practitioners under review, establish a relationship with an external peer review organization or a hospital peer review committee that can provide objective outside review.",
      },
    },
    {
      id: "asc_cpv_13",
      question:
        "During an AAAHC survey, the surveyor asks to see the credentials file for a contracted CRNA who provides anesthesia services. The administrator says the CRNA is employed by an anesthesia group that handles their own credentialing. Under CPV, what is the compliance issue?",
      options: [
        "No issue - contracted practitioners are credentialed by their employer, not the ASC",
        "The ASC must have its own independent credentialing and privileging process for all practitioners providing services at the facility, including contracted CRNAs",
        "CRNAs do not require the same credentialing as physicians - only physician credentials are reviewed at the ASC level",
        "Contracted practitioners are credentialed at reappointment only, not at initial appointment",
      ],
      correctIndex: 1,
      explanation:
        "CPV.100 requires the organization to have its own independent credentialing and privileging process. This applies to all practitioners - employed, contracted, locum tenens, or otherwise. The anesthesia group's credentialing is a separate process and does not satisfy the ASC's independent obligation.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Patients receiving care at the ASC from contracted practitioners deserve the same credential verification as from employed practitioners. AAAHC holds the organization responsible for verifying the credentials of every provider who delivers care under its auspices.",
        whyWrong: {
          A: "Contracted employment status does not transfer the ASC's credentialing obligation to the contractor.",
          C: "CRNAs are licensed independent practitioners and must be credentialed and privileged at the ASC just as physicians are.",
          D: "Initial credentialing must occur before the practitioner begins providing services - not at a future reappointment cycle.",
        },
        operationalContext:
          "For contracted anesthesia providers, establish a process to request their credential documentation from the group, but conduct your own primary source verification and maintain separate ASC credentials files for each individual CRNA.",
      },
    },
    {
      id: "asc_cpv_14",
      question:
        "An application for initial staff privileges is received and all documentation appears complete. However, the application is not signed by the applicant. Under CPV.160, what is the status of this application?",
      options: [
        "The application can be processed - the signature can be obtained later",
        "An unsigned application does not satisfy CPV.160 and may not be processed until it is properly signed and dated by the applicant",
        "Only the governing body chairperson's signature is required on credentialing applications",
        "Digital applications do not require signatures under CPV.160",
      ],
      correctIndex: 1,
      explanation:
        "CPV.160 specifically requires that the application includes the applicant's dated signature (in addition to a liability release and accuracy attestation). CPV.170 requires primary source verification 'upon receipt of a completed and signed application' - the signature is a prerequisite to processing the application.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "The dated signature serves two functions: (1) it commits the applicant to the accuracy of the information provided, and (2) it establishes the date from which the processing timeline begins. An unsigned application is not a completed application under CPV.160.",
        whyWrong: {
          A: "Processing may not begin on an unsigned application - CPV.170 requires verification 'upon receipt of a completed and signed application.'",
          C: "The applicant's own signature is required - not a governing body officer's signature.",
          D: "The signature requirement applies regardless of whether the application is submitted in paper or digital form. Electronic signatures satisfy the requirement.",
        },
        operationalContext:
          "Return unsigned or undated applications to the applicant immediately with a request to complete and return them. Track the date the completed, signed application is received - this is the date from which your processing timeline runs.",
      },
    },
    {
      id: "asc_cpv_15",
      question:
        "A board-certified orthopedic surgeon's board certification expires because the surgeon did not complete Maintenance of Certification (MOC) requirements. Under CPV.210, what action is required?",
      options: [
        "Board certification expiration has no effect on credentialing status - the original certification remains valid",
        "The organization must monitor board certification on an ongoing basis and update the credentials file to reflect the lapsed certification, which may affect the surgeon's credentialing status",
        "Board certification monitoring is only required when the surgeon requests new privileges",
        "Lapsed board certification is only relevant at the next scheduled reappointment",
      ],
      correctIndex: 1,
      explanation:
        "CPV.210 requires ongoing monitoring of board certifications as applicable. If a surgeon's board certification lapses because they did not complete MOC requirements, the credentials file must reflect this. Whether a lapsed certification affects the practitioner's appointment status depends on the organization's criteria - but CPV.210 ensures the lapse is detected when it occurs, not at the next formal reappointment.",
      xpReward: 15,
      isSwipe: false,
      tutor: {
        whyCorrect:
          "Board certifications with ongoing MOC requirements are date-sensitive. An organization that only checks board certification at three-year reappointments may not detect a lapse for years. CPV.210 requires ongoing monitoring to catch this.",
        whyWrong: {
          A: "Modern board certifications require ongoing Maintenance of Certification - they are not permanent. A lapsed MOC means the certification has expired.",
          C: "Board certification monitoring is time-based under CPV.210, not event-triggered.",
          D: "CPV.210 requires monitoring at expiration, not only at formal reappointment cycles.",
        },
        operationalContext:
          "Add board certification expiration dates to your credentialing tracker. Note which certifications require MOC and when MOC deadlines fall. Contact the practitioner before board certification expiration to confirm MOC is on track.",
      },
    },
  ],
};
