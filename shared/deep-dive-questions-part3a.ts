import type { DeepDiveLevel } from "./schema";

export const ddOrLevel: DeepDiveLevel = {
  id: "dd-or",
  name: "OR & Sterile Technique Deep Dive",
  description: "Master OR sterile technique, gowning/gloving, draping, and counting procedures with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(0, 75%, 55%)",
  baseLevelId: "or_sterile_field",
  questions: [
    {
      id: "dd-or1",
      baseQuestion: "During a Joint Commission tracer, the surveyor observes the scrub technologist setting up the back table. Which practice demonstrates correct sterile field setup?",
      baseOptions: [
        "Opening both sides of the drape simultaneously",
        "Opening the sterile drape toward yourself first, then away",
        "Having the circulator open the drape while the scrub tech holds the edges",
        "Opening the sterile drape away from yourself first, then toward yourself"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "When creating a sterile field, the first fold of the sterile drape should be opened away from the body to prevent reaching over the sterile surface. This is a fundamental AORN-recommended practice to maintain sterility during back table setup.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor then asks: once the back table is set up, what is the minimum height the sterile field drape must hang over the table edges?",
          options: [
          "The drape must extend 12 inches past the table on the instrument side only",
          "The drape must hang at least 6 inches below the table edge on all sides",
          "The drape must hang to the floor on all sides",
          "The drape only needs to cover the top surface"
        ],
        correctIndex: 3,
          explanation: "The sterile field extends only to the level of the table surface. The drape hanging below the table edge is considered unsterile. Only the top surface of the draped table is considered sterile; items falling below the table level are considered contaminated.",
          expertXp: 30
        },
        {
          question: "During the same tracer, the surveyor notices the scrub tech placed a sterile towel on the back table 45 minutes before the procedure started. The room was unattended for 10 minutes during that time. What is the surveyor's primary concern?",
          options: [
          "The sterile field is only invalid if the door was opened while unattended",
          "The sterile field is acceptable as long as chemical indicators on the drape still show proper color change",
          "An unmonitored sterile field cannot be verified as uncompromised and should be considered contaminated regardless of elapsed time",
          "The sterile field is still valid because it was set up using correct technique and the 2-hour rule applies"
        ],
        correctIndex: 2,
          explanation: "Per AORN guidelines, a sterile field must be continuously monitored from the time of setup. If the field is left unattended, there is no way to verify that it was not compromised by airborne contamination, contact, or other events. The field should be considered contaminated and re-established regardless of the time elapsed.",
          expertXp: 30
        },
        {
          question: "The surveyor escalates: your facility reports a cluster of 3 SSIs in clean orthopedic cases over 2 months, all linked to the same OR suite. Environmental cultures and instrument sterility are confirmed. Which root cause analysis finding would MOST likely explain the cluster?",
          options: [
          "The back table was being set up more than 30 minutes before incision in all three cases",
          "The OR HVAC system was found to have intermittent loss of positive pressure during door openings due to a",
          "The scrub techs were using a different brand of sterile drapes that had recently been substituted by supply chain",
          "The surgical hand scrub soap was changed from chlorhexidine to povidone-iodine 3 months ago"
        ],
        correctIndex: 1,
          explanation: "A faulty HVAC damper causing intermittent loss of positive pressure is the most likely root cause for a cluster of SSIs in clean cases when instruments and technique are confirmed adequate. Per ASHRAE and FGI standards, OR suites must maintain positive pressure relative to corridors at all times. Failure to do so allows unfiltered corridor air to enter during door openings, depositing particulates and microorganisms onto the sterile field. This is a systems-level failure that would affect all cases in that room.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or2",
      baseQuestion: "A tracer scenario: the circulator is preparing to assist the surgeon with gowning. After the surgeon performs a surgical hand scrub, what is the correct sequence for gowning and gloving?",
      baseOptions: [
        "Don the gown first, then use open gloving technique",
        "Don the gown and gloves simultaneously",
        "Glove first using open technique, then don the gown",
        "Don the gown first, then use closed gloving technique"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "The standard OR protocol requires donning the sterile gown first, followed by closed gloving technique. Closed gloving prevents bare skin from contacting the outside of the sterile gloves, reducing contamination risk. This is the AORN recommended practice for surgical team members.",
      baseXp: 15,
      followUps: [
        {
          question: "During the gowning process, which area of the surgical gown is considered sterile?",
          options: [
          "The front and back of the gown from waist up",
          "Only the sleeves from shoulder to cuff",
          "The front of the gown from chest to the",
          "The entire gown from neck to hem"
        ],
        correctIndex: 2,
          explanation: "Per AORN guidelines, the sterile area of a surgical gown includes the front from chest to the level of the sterile field and the sleeves from 2 inches above the elbow to the stockinette cuff. The back, neckline, shoulders, and area below the waist are considered unsterile because they cannot be directly observed by the wearer.",
          expertXp: 30
        },
        {
          question: "A newly hired scrub tech asks when open gloving technique is acceptable in the OR instead of closed gloving. Which response is correct per AORN guidelines?",
          options: [
          "Open gloving is acceptable whenever the scrub tech is comfortable with the technique",
          "Open gloving is acceptable for the first assistant but not the primary surgeon",
          "Open gloving may only be used when changing a contaminated glove during a procedure",
          "Open gloving is never permitted in the OR under any circumstances"
        ],
        correctIndex: 2,
          explanation: "Open gloving technique is reserved for situations where a glove change is required during a procedure (e.g., glove perforation) and the gown cuff remains intact. In this scenario, the stockinette cuff is still covered by the existing or replacement gown sleeve, so bare skin does not contact the outer sterile glove surface. For initial gowning and gloving, closed technique is always required per AORN standards.",
          expertXp: 30
        },
        {
          question: "During a tracer, the surveyor observes a surgeon who has just scrubbed and gowned. The circulator assisted with gowning by reaching inside the gown to pull it onto the surgeon's shoulders, then secured the back ties. The surgeon then performs closed gloving. The surveyor identifies a deficiency. What was incorrect?",
          options: [
          "The circulator should not have touched the inside of the gown because it is sterile",
          "The circulator should have also donned sterile gloves before assisting with gowning",
          "The surgeon should have performed open gloving after being assisted by the circulator",
          "The circulator's technique was correct"
        ],
        correctIndex: 3,
          explanation: "The inside of the gown is considered unsterile, so the circulator touching it is acceptable. However, for wrap-around style surgical gowns, the front waist tie must be passed to another scrubbed team member (or secured using the sterile cardboard tab technique) so the gown wraps around the wearer, creating a sterile back panel. Without this step, the gown's sterile coverage is incomplete. This is a commonly missed step that surveyors specifically look for during gowning observations.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or3",
      baseQuestion: "A Joint Commission surveyor observes a laparoscopic cholecystectomy. The surgeon requests an instrument that was not included in the original case setup and needs immediate sterilization. Under what circumstances is IUSS (Immediate Use Steam Sterilization) appropriate?",
      baseOptions: [
        "Whenever the surgeon requests it to save time between cases",
        "Only when the item is needed for an emergency or urgent patient",
        "For all implantable devices as a standard practice",
        "Whenever the central sterile processing department is backed up"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "IUSS (formerly called flash sterilization) should only be used when an item is needed urgently for patient care and no other properly sterilized item is available. It should never be used for convenience, to compensate for insufficient instrument inventory, or as a routine practice. Joint Commission standards and AORN guidelines restrict IUSS to emergency situations.",
      baseXp: 15,
      followUps: [
        {
          question: "When IUSS is performed, which documentation elements are required per Joint Commission standards?",
          options: [
          "The item name and the patient's medical record number only",
          "Only the item name and sterilization time",
          "Patient name, item description, reason for IUSS",
          "Just the surgeon's verbal order and the circulator's initials"
        ],
        correctIndex: 2,
          explanation: "Joint Commission requires comprehensive documentation for every IUSS cycle including: patient identification, description of the item sterilized, reason IUSS was necessary, cycle parameters (time, temperature, pressure), biological indicator results (if applicable), name of person who performed the sterilization, and date/time. This documentation supports traceability and quality monitoring.",
          expertXp: 35
        },
        {
          question: "The surveyor reviews your facility's IUSS log and finds that the same laparoscopic grasper has been IUSS-processed 12 times in the past month. What corrective action should the surveyor expect the facility to implement?",
          options: [
          "Continue IUSS as long as each cycle is properly documented and parameters are met",
          "The facility must conduct a root cause analysis to determine why the instrument is repeatedly",
          "Assign a dedicated sterile processing technician to prioritize that instrument's turnaround",
          "Switch to a different sterilization method such as ethylene oxide for that instrument"
        ],
        correctIndex: 1,
          explanation: "Repeated IUSS of the same instrument indicates a systemic issue - typically insufficient instrument inventory or inadequate turnaround scheduling. Joint Commission expects facilities to monitor IUSS frequency and treat repeated use as a quality improvement trigger. The corrective action must address the root cause, which usually means procuring additional sets so standard full-cycle sterilization with proper drying, cooling, and biological monitoring can be used instead of IUSS.",
          expertXp: 30
        },
        {
          question: "A surgeon insists on IUSS for an implantable orthopedic screw because the correct size was contaminated during the case. The SPD technician asks for guidance. Per current AAMI ST79 and Joint Commission standards, what is the correct response?",
          options: [
          "IUSS of implants is strongly discouraged and should only occur in a documented life-or-limb-threatening",
          "IUSS of implantable devices is absolutely prohibited under all circumstances per Joint Commission",
          "IUSS of implants requires only verbal authorization from the surgeon and OR charge nurse",
          "IUSS of implants is acceptable as long as a prevacuum cycle is used and a Class 5 chemical integrator passes"
        ],
        correctIndex: 0,
          explanation: "Per AAMI ST79 and Joint Commission standards, IUSS of implantable devices is strongly discouraged but not absolutely prohibited. It may only be performed in a true emergency when no alternative sterile implant exists and delay would compromise patient safety. When IUSS is performed on implants, a full gravity cycle (not abbreviated) must be used, a biological indicator must accompany the load (with results followed up), and the surgeon must document acceptance of risk. Many facilities require informed consent from the patient as well.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or4",
      baseQuestion: "During a tracer round, the surveyor asks about surgical draping. A circulator is preparing to drape a patient for an abdominal procedure. What is the correct draping principle?",
      baseOptions: [
        "Have the surgeon place all drapes since only surgeons can drape",
        "Drape from the non-sterile area toward the sterile area (far to near)",
        "Drape from the operative site outward to the periphery (near to",
        "Drape from head to toe in a single motion"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Surgical draping is performed from the operative site (cleanest area) outward to the periphery. This 'clean to dirty' principle prevents contamination of the surgical site by avoiding passing materials over the prepared incision area. Drapes are placed by any sterile team member, not exclusively the surgeon.",
      baseXp: 15,
      followUps: [
        {
          question: "Once a surgical drape has been placed, the surgeon notices it is slightly misaligned. What is the correct action?",
          options: [
          "Leave it as is and proceed since repositioning is never allowed",
          "The drape may be shifted toward the operative site but never away from",
          "Pull the drape in any direction to reposition it correctly",
          "Remove the drape entirely and replace it with a new sterile drape"
        ],
        correctIndex: 1,
          explanation: "Once a sterile drape is placed, it should not be repositioned toward an unsterile area because this could drag contaminants toward the surgical site. The drape may only be shifted closer to the operative site. If significantly misplaced, an additional drape should be placed on top. Removing and replacing would risk contaminating the prepared surgical field.",
          expertXp: 25
        },
        {
          question: "During a complex abdominal procedure, the circulator notices a pool of irrigation fluid has soaked through the surgical drape near the operative site (strike-through). The surgeon states the area is not near the incision. What is the correct response?",
          options: [
          "The wet area must be covered immediately with an additional impervious sterile",
          "Action is needed since the wet area is not directly adjacent to the incision",
          "Replace the entire drape set to maintain the sterile barrier",
          "Blot the wet area with a sterile towel and continue without additional draping"
        ],
        correctIndex: 0,
          explanation: "Strike-through contamination occurs when moisture creates a wicking pathway that allows bacteria to migrate from the unsterile surface below the drape to the sterile surface above. Per AORN guidelines, any wet area on a sterile drape must be covered with additional impervious sterile material regardless of its proximity to the incision. The moisture breach compromises the barrier function of the drape at that location.",
          expertXp: 30
        },
        {
          question: "A surveyor reviews your facility's draping protocol for a total hip arthroplasty and asks about the specific requirements for extremity draping in orthopedic procedures. Which practice meets AORN and Joint Commission standards?",
          options: [
          "The extremity is wrapped in a sterile towel and held by the surgeon while the circulator places the drapes",
          "The extremity is prepped and a single sheet drape with a fenestration is placed over the operative site; no circumferential draping is required",
          "Extremity draping follows the same technique as abdominal draping with four towels and a laparotomy sheet",
          "The extremity should be prepped, held elevated by a non-scrubbed team member wearing sterile gloves"
        ],
        correctIndex: 3,
          explanation: "Orthopedic extremity draping requires circumferential isolation of the limb. The prepped extremity is held elevated by a team member (the hand-holder) using proper technique, an impervious stockinette is applied to create a sterile barrier around the limb, and split sheets are used to create a circumferential sterile field. This allows the surgical team to manipulate the extremity during the procedure while maintaining sterility. The technique differs significantly from trunk draping because the entire circumference of the limb must be isolated.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or5",
      baseQuestion: "A surveyor is evaluating implant sterilization practices. A scrub nurse is about to open a sterilized orthopedic implant tray. What must be verified regarding biological indicators before the implant can be used?",
      baseOptions: [
        "The biological indicator results from the sterilization load must",
        "Biological indicators are checked only once per week for implant loads",
        "Biological indicator results are not required for implants",
        "Only chemical indicator results need to be checked"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Per Joint Commission standards and AAMI guidelines, biological indicator (BI) results must show no growth before implantable devices are released for patient use. A biological indicator containing Geobacillus stearothermophilus spores must be included in every load containing implants, and results must be available before the implant is used.",
      baseXp: 15,
      followUps: [
        {
          question: "The BI incubation results for an implant load are not yet available, but the surgeon insists the implant is needed immediately for an emergency case. What is the appropriate action?",
          options: [
          "The implant may be released with documented informed consent from the",
          "Release the implant without any additional steps since the chemical indicator passed",
          "Contact the manufacturer for authorization to use the implant",
          "Refuse to release the implant under any circumstances"
        ],
        correctIndex: 0,
          explanation: "In a documented emergency when BI results are unavailable, the implant may be released if the surgeon accepts responsibility with informed consent, and the infection preventionist is notified. All chemical indicators must have passed. The BI results must still be followed up and documented, and if the BI later shows growth, the surgeon and patient must be notified for appropriate follow-up.",
          expertXp: 35
        },
        {
          question: "The surveyor reviews your facility's implant tracking system. Which elements must be documented for every implanted device per Joint Commission and FDA requirements?",
          options: [
          "Only the implant name and the surgeon who placed it",
          "Patient name, implant type, and the circulator's initials confirming the package was opened",
          "The implant catalog number and the purchase order from the vendor",
          "Manufacturer name, lot/serial number, implant description, patient identifier"
        ],
        correctIndex: 3,
          explanation: "Joint Commission and FDA require comprehensive implant traceability documentation including: manufacturer name, lot and/or serial number, implant description/catalog number, patient identifier, date of implantation, implanting surgeon, and sterilization verification data (BI results, load number, sterilizer ID). This documentation enables rapid identification and notification of affected patients in the event of a manufacturer recall or detected sterilization failure.",
          expertXp: 30
        },
        {
          question: "Six months later, a BI from an implant sterilization load run 6 months ago is flagged during a retrospective quality audit as potentially having shown late growth that was misread as negative. Three implants from that load were used in patients. What is the facility's obligation per Joint Commission standards?",
          options: [
          "The facility should re-test the biological indicator to confirm the result before taking any action",
          "Action is required since the patients have not shown signs of infection and 6 months have passed",
          "The facility must initiate its recall/notification protocol: notify the infection preventionist, risk management",
          "The facility should add the finding to the next quarterly quality report but no immediate action is needed"
        ],
        correctIndex: 2,
          explanation: "A potentially positive BI associated with implanted devices triggers immediate action regardless of time elapsed. Per Joint Commission standards and AAMI guidelines, the facility must activate its recall/notification protocol, which includes notifying infection prevention, risk management, and the implanting surgeons. A risk assessment must determine the likelihood of actual sterilization failure. Affected patients must be notified and monitored. The incident must be documented with root cause analysis and corrective actions. Delayed discovery does not eliminate the obligation to act.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or6",
      baseQuestion: "A Joint Commission surveyor observes OR traffic during an active surgical procedure. Which finding would be cited as non-compliant?",
      baseOptions: [
        "Multiple staff members entering and exiting the OR repeatedly with the door propped open",
        "An anesthesia provider entering through the substerile corridor",
        "The circulating nurse leaving the room once during the case to retrieve supplies",
        "A single visitor entering the OR before the incision with proper attire"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Excessive OR traffic and door openings significantly increase airborne contamination and surgical site infection risk. Propping doors open violates positive-pressure ventilation requirements. Joint Commission standards require limiting OR door openings and traffic to essential personnel only. Studies show each door opening increases bacterial colony counts in the surgical field.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor asks about the OR ventilation standard that makes door management critical. What are the minimum air exchange requirements for an operating room?",
          options: [
          "10 total air exchanges per hour with 2 fresh air exchanges",
          "25 total air exchanges per hour with 5 fresh air exchanges",
          "15 total air exchanges per hour with 3 fresh (outside) air exchanges",
          "20 total air exchanges per hour with 4 fresh (outside) air exchanges"
        ],
        correctIndex: 2,
          explanation: "Per ASHRAE and the FGI Guidelines for Design and Construction of Hospitals, operating rooms require a minimum of 15 total air exchanges per hour with at least 3 of those being fresh (outside) air exchanges. The OR must maintain positive pressure relative to adjacent corridors to prevent contaminated air from entering when doors are opened.",
          expertXp: 30
        },
        {
          question: "The surveyor asks facilities engineering to demonstrate the OR positive pressure relationship. The engineer holds a tissue at the door gap and it flutters inward toward the OR. What does this finding indicate?",
          options: [
          "Positive pressure is functioning correctly since air is moving at the door",
          "Negative pressure is acceptable as long as HEPA filtration is functioning",
          "The OR has negative pressure relative to the corridor",
          "The test is inconclusive and requires a smoke test for verification"
        ],
        correctIndex: 2,
          explanation: "A tissue fluttering inward indicates air is flowing from the corridor into the OR, meaning the OR is at negative pressure relative to the corridor. This is a critical deficiency - OR suites must maintain positive pressure so that air flows outward from the clean OR into the less-clean corridor. Negative pressure allows unfiltered corridor air containing particulates and microorganisms to enter the surgical environment, increasing SSI risk. This finding would require immediate corrective action and potentially suspension of elective cases in that room.",
          expertXp: 30
        },
        {
          question: "Following the ventilation deficiency finding, the surveyor asks what daily monitoring documentation your facility maintains for OR HVAC parameters. Which response demonstrates full Joint Commission compliance?",
          options: [
          "We perform daily pressure differential monitoring with a log documenting positive pressure verification, temperature (68-75°F)",
          "We rely on the quarterly environmental tour conducted by infection prevention to verify OR HVAC compliance",
          "Our building automation system monitors HVAC and sends email alerts if parameters deviate, so manual documentation is not required",
          "Our facilities engineering team checks OR ventilation parameters annually during preventive maintenance"
        ],
        correctIndex: 0,
          explanation: "Joint Commission expects daily monitoring and documentation of critical OR environmental parameters including pressure differential (positive pressure verification), temperature, and humidity for each OR suite. While building automation systems can supplement monitoring, they do not replace the requirement for documented daily verification and a defined escalation protocol when parameters are out of range. Annual or quarterly checks alone are insufficient. The facility must demonstrate a proactive monitoring program with defined response procedures for out-of-range readings.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or7",
      baseQuestion: "During a perioperative tracer, the surveyor asks a scrub technologist about surgical attire requirements. Which statement about surgical caps/hoods is compliant with Joint Commission and AORN standards?",
      baseOptions: [
        "Surgical caps are only required for the surgeon and scrub tech",
        "Cloth skull caps that leave the sides and back of the head exposed are acceptable",
        "Caps are optional if the staff member will not be near the sterile field",
        "All head and facial hair must be completely covered by a surgical cap or hood"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "AORN guidelines and Joint Commission standards require that all head and facial hair, including sideburns and the nape of the neck, be completely covered when in the semi-restricted and restricted areas of the surgical suite. This applies to all personnel entering these areas, not just scrubbed team members.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor also inquires about surgical mask requirements. When must a surgical mask be worn in the OR suite?",
          options: [
          "Only when the patient is immunocompromised",
          "Masks are required only during procedures lasting longer than one hour",
          "Masks must be worn in the restricted area (OR) when sterile",
          "Masks are only required by the surgeon and first assistant"
        ],
        correctIndex: 2,
          explanation: "Surgical masks must be worn in the restricted area whenever sterile supplies are opened or scrubbed team members are present. The mask must fully cover the nose and mouth and be secured to prevent venting. This requirement applies to all personnel in the room, including observers, anesthesia staff, and sales representatives.",
          expertXp: 25
        },
        {
          question: "A surveyor observes a vendor representative in the OR wearing a surgical mask that hangs loosely below the nose, a bouffant cap, and scrub attire. The vendor is standing 3 feet from the sterile field observing the case. What compliance issues should the surveyor cite?",
          options: [
          "The mask must fully cover both the nose and mouth and be secured to prevent venting at the",
          "The vendor should be wearing a full surgical hood instead of a bouffant cap",
          "The vendor is wearing appropriate attire and is not scrubbed in",
          "The only issue is that vendors should not be permitted within 5 feet of the sterile field"
        ],
        correctIndex: 0,
          explanation: "A surgical mask worn below the nose is effectively useless as a barrier device and is a commonly cited deficiency. Per AORN guidelines and Joint Commission standards, masks must fully cover the nose and mouth and be snugly secured to minimize venting of exhaled air. This applies to all personnel in the restricted area when sterile supplies are open, regardless of whether they are scrubbed. The surveyor should also verify the vendor has completed facility credentialing and orientation to OR protocols.",
          expertXp: 30
        },
        {
          question: "The surveyor asks the OR manager about the facility's policy on surgical attire worn outside the perioperative area. A staff member is observed wearing scrubs and a skull cap while getting coffee in the main hospital cafeteria, then returning directly to the OR. What is the compliance concern per AORN guidelines?",
          options: [
          "Surgical attire worn outside the perioperative suite should be covered with a single-use cover gown or",
          "Scrub attire can be worn anywhere in the hospital as long as it is facility-laundered and not visibly soiled",
          "The only requirement is that the staff member perform hand hygiene before re-entering the OR",
          "There is no concern because the scrubs were clean when donned that morning"
        ],
        correctIndex: 0,
          explanation: "AORN guidelines recommend that surgical attire worn outside the perioperative suite be covered with a clean cover garment to minimize contamination from the external environment. Upon return to the semi-restricted/restricted areas, the cover garment should be removed and the head covering should be changed, as it may have been contaminated by airborne particles, food particles, or contact outside the OR. This is a frequently cited area during Joint Commission surveys, particularly in facilities with high traffic between OR suites and common areas.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or8",
      baseQuestion: "A tracer scenario: the circulator and scrub tech are preparing to perform the initial surgical count before a total knee replacement. Which items must be included in the surgical count?",
      baseOptions: [
        "Only sponges and instruments",
        "Sponges, sharps (needles/blades), instruments, and miscellaneous small items (vessel loops, bulldogs, etc.)",
        "Only radiopaque sponges",
        "Only items that are radiopaque"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per AORN guidelines and Joint Commission requirements, surgical counts must include all sponges (radiopaque), sharps (suture needles, blades, safety pins), instruments, and miscellaneous small items such as vessel loops, bulldog clamps, and cottonoids. Counts must be performed audibly and concurrently by the scrub person and circulating nurse.",
      baseXp: 15,
      followUps: [
        {
          question: "During the closing count, the scrub tech and circulator discover a sponge count discrepancy. What is the correct sequence of actions?",
          options: [
          "Immediately notify the surgeon, recount, search the field and floor",
          "Complete the closure and obtain a postoperative X-ray",
          "Recount three times and if still incorrect, document the discrepancy and close",
          "Notify risk management before taking any action"
        ],
        correctIndex: 0,
          explanation: "When a count discrepancy occurs, the immediate sequence per AORN guidelines is: (1) notify the surgeon immediately, (2) repeat the count, (3) conduct a thorough search of the surgical field, drapes, floor, linen, and trash, (4) if the item is still unaccounted for, an intraoperative X-ray must be obtained before wound closure. An incident report must be filed and the event documented in the patient record.",
          expertXp: 35
        },
        {
          question: "The surgeon, after being notified of a count discrepancy with an unresolved missing sponge, states the X-ray is negative and instructs the team to close the wound. However, the circulator is not satisfied that the count has been reconciled. What should the circulator do?",
          options: [
          "Ask the charge nurse to override the surgeon's decision",
          "Refuse to participate in the closure and leave the room",
          "The circulator should advocate for the patient by requesting a re-exploration",
          "Accept the surgeon's decision since the X-ray was negative and the surgeon has final authority"
        ],
        correctIndex: 2,
          explanation: "Per AORN guidelines and Joint Commission patient safety standards, the circulator has a professional obligation to advocate for the patient. An unreconciled count must be thoroughly documented regardless of X-ray findings (as some items may not be radiopaque or may be obscured). The circulator should clearly communicate concerns, request additional investigation, and if the surgeon proceeds with closure despite the discrepancy, document the events in the medical record and file an incident report. This supports a culture of safety where any team member can raise concerns.",
          expertXp: 30
        },
        {
          question: "Your facility's data shows 8 count discrepancy events in the past quarter. The OR quality committee asks you to lead process improvement. According to AORN and Joint Commission methodology, which intervention would MOST effectively reduce retained surgical item (RSI) risk?",
          options: [
          "Requiring three-person counts instead of two-person counts for all procedures",
          "Standardizing count procedures with a structured counting protocol",
          "Implementing mandatory overtime penalties for staff involved in count discrepancies to increase accountability",
          "Eliminating all non-radiopaque items from surgical trays so that X-ray can always detect retained items"
        ],
        correctIndex: 1,
          explanation: "AORN and Joint Commission emphasize a systems-based approach to reducing RSI risk. The most effective interventions combine standardized counting protocols, adjunct technology (such as radiofrequency sponge detection systems or barcode counting), human factors analysis (identifying distractions, fatigue, handoff errors), and establishing protected counting periods free from interruption. Punitive measures are counterproductive to a just culture. Three-person counts add complexity without evidence of benefit, and eliminating non-radiopaque items is impractical.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or9",
      baseQuestion: "A surveyor observes a break in sterile technique during a procedure. The surgeon's gown sleeve contacts the IV pole adjacent to the sterile field. What should happen next?",
      baseOptions: [
        "Only document the break and continue without intervention",
        "Wipe the sleeve with an alcohol prep pad and continue",
        "The contaminated gown sleeve must be covered with a sterile sleeve",
        "Continue the procedure since the IV pole is within the sterile field boundary"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Any contact between a sterile gown and an unsterile surface constitutes a break in sterility and must be corrected immediately. The contaminated area must either be covered with an impervious sterile drape/sleeve or the team member must change the gown and re-glove. Failure to address breaks in technique is a serious patient safety concern and Joint Commission compliance issue.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor asks: who is responsible for identifying and calling out a break in sterile technique during a surgical procedure?",
          options: [
          "Only the charge nurse or OR manager",
          "Every member of the surgical team has the",
          "Only the circulating nurse",
          "Only the infection preventionist who monitors via camera"
        ],
        correctIndex: 1,
          explanation: "All surgical team members share the responsibility for maintaining sterile technique and must speak up immediately when a contamination event occurs. This is consistent with Joint Commission patient safety goals regarding communication and a culture of safety. No hierarchy should prevent any team member from reporting a break in sterility.",
          expertXp: 25
        },
        {
          question: "A scrub tech observes the attending surgeon contaminate a glove by touching the OR light handle but the surgeon does not acknowledge the break. The scrub tech mentions it once and the surgeon dismisses the concern. What should the scrub tech do next per Joint Commission culture of safety standards?",
          options: [
          "Document the event after the case but take no further action during the procedure",
          "Stop participating in the procedure until the surgeon changes gloves",
          "Accept the surgeon's response since the surgeon outranks the scrub tech in the OR hierarchy",
          "Use the facility's established escalation pathway"
        ],
        correctIndex: 3,
          explanation: "Joint Commission requires facilities to have established escalation pathways (such as CUS or two-challenge rule) that empower any team member to halt unsafe practices regardless of hierarchy. If the initial communication is dismissed, the scrub tech should escalate using the facility's chain of command - typically notifying the charge nurse or OR supervisor who can intervene. Simply documenting after the fact fails to protect the current patient. Joint Commission surveyors specifically look for evidence that escalation pathways exist and are used.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews your facility's sterile technique breach data for the past year and finds that 40% of documented breaks involved contact between gowned personnel and unsterile equipment (light handles, monitors, IV poles). What system-level intervention would BEST address this recurring issue per Joint Commission Environment of Care standards?",
          options: [
          "Increase the frequency of sterile technique competency assessments for all surgical staff",
          "Require all scrubbed team members to wear proximity sensors that alarm when they approach non-sterile equipment",
          "Post additional signage in each OR reminding staff of sterile field boundaries",
          "Redesign the OR layout and workflow to increase clearance between sterile field boundaries and"
        ],
        correctIndex: 3,
          explanation: "When a specific category of sterile technique breaches occurs repeatedly, Joint Commission expects a systems-level rather than individual-level intervention. Redesigning the physical environment to increase clearance between sterile field boundaries and non-sterile equipment (light handles, monitors, IV poles), using sterile barrier covers on frequently contacted equipment, and incorporating sterile field boundary verification into the surgical safety checklist addresses the root cause. Competency assessments and signage alone are insufficient for a recurring systems issue, and proximity sensors are not a standard practice.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or10",
      baseQuestion: "The circulator needs to open a sterile instrument tray onto the back table. Which technique is correct per AORN standards?",
      baseOptions: [
        "Have the scrub tech open the tray since only scrubbed personnel can handle sterile items",
        "Remove the tray from the wrapper and place it on the table bare",
        "Open the far flap first, then the side flaps, and the near flap last",
        "Open the wrapper toward yourself first, then open the far side"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "When opening a wrapped sterile package, the circulator opens the far flap first (away from body), then each side flap, and finally the near flap (toward body) last. This sequence prevents the circulator from reaching over the sterile contents at any point, maintaining sterility. The outer wrapper serves as the sterile table cover.",
      baseXp: 15,
      followUps: [
        {
          question: "When opening peel-pack sterile supplies to deliver to the scrub tech, what is the correct method?",
          options: [
          "Open the package and place it on the sterile field with the packaging still attached",
          "Peel the package open, expose the contents",
          "Open the package and hand the item directly to the scrub tech touching the item with bare hands",
          "Tear the package open and drop the contents onto the sterile field from a height of 12 inches"
        ],
        correctIndex: 1,
          explanation: "Peel-pack items should be opened by peeling back the edges of the packaging, exposing the sterile contents, and either presenting them to the scrub person to grasp or gently flipping them onto the sterile field without reaching over the sterile area. The circulator must not touch the sterile contents or allow the unsterile packaging edges to contact the sterile field.",
          expertXp: 25
        },
        {
          question: "A circulator opens a wrapped instrument tray and notices that the internal chemical indicator (Class 5 integrator) has not fully changed color. The external chemical indicator on the wrapper did change appropriately. What should the circulator do?",
          options: [
          "Reject the entire tray",
          "Use the tray since the external indicator passed, which confirms sterilization occurred",
          "Re-sterilize the tray using IUSS before the procedure",
          "Use only the instruments on the top layer of the tray and reject the bottom layer"
        ],
        correctIndex: 0,
          explanation: "External chemical indicators (Class 1) only confirm exposure to the sterilization process (e.g., the package went through the sterilizer) but do not confirm that sterilization parameters were met throughout the load. Internal chemical indicators (Class 5 integrators) are designed to respond to all critical sterilization parameters (time, temperature, steam quality). A failed or equivocal internal indicator means the contents may not be sterile despite the external indicator passing. The tray must be rejected, SPD notified for investigation, and a replacement tray obtained.",
          expertXp: 30
        },
        {
          question: "The surveyor asks the SPD manager to explain the difference between chemical indicator classes and when each is used in the sterilization monitoring program. Which response demonstrates comprehensive understanding per AAMI ST79?",
          options: [
          "We use Class 6 emulating indicators exclusively, as they are the most accurate chemical indicator and reduce the need for biological indicator testing",
          "Class 1 indicators go on the outside of packs, Class 5 indicators go inside packs, and biological indicators are run once daily - that covers our monitoring program",
          "Our program uses Class 1 external indicators on every package (process exposure), Class 5 integrators inside every package (parameter verification)",
          "We use Class 4 multi-variable indicators inside all packs, which eliminates the need for biological indicators on non-implant loads"
        ],
        correctIndex: 2,
          explanation: "Per AAMI ST79, a comprehensive sterilization monitoring program requires multiple levels of verification: Class 1 external indicators on every package (confirm process exposure), Class 5 integrators (or equivalent) inside every package (verify all critical parameters), biological indicators in every load (confirm actual microbial kill), and daily Bowie-Dick tests for prevacuum sterilizers (verify adequate air removal). No chemical indicator class replaces biological indicators, as BIs are the only method that directly confirms sterilization lethality. Each indicator level serves a specific purpose, and defined corrective actions must exist for failures at each level.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or11",
      baseQuestion: "A surveyor asks about splash basin management during a procedure. What is the current AORN recommendation regarding splash basins on the sterile field?",
      baseOptions: [
        "Splash basins are no longer recommended and should not be used in any procedure",
        "Splash basins should be filled immediately before use and the fluid discarded after each use",
        "Splash basins should be filled at the start of the case and refilled as needed",
        "Splash basins should contain an antiseptic solution to remain sterile throughout the case"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "AORN recommends that splash basins be filled with sterile fluid immediately before use and the contents discarded after each use. Allowing warm fluid to remain standing in an open basin creates an environment conducive to bacterial growth. Solutions should not be left standing on the sterile field for extended periods.",
      baseXp: 15,
      followUps: [
        {
          question: "When pouring sterile solutions onto the sterile field, which practice is correct?",
          options: [
          "Pour gently with the label facing up",
          "Pour from a height of at least 12 inches to prevent splash-back",
          "Allow the scrub tech to hold the container while the circulator pours",
          "Pour the full container at once since recapping is not allowed"
        ],
        correctIndex: 0,
          explanation: "Sterile solutions should be poured gently with the label facing up (to protect the label and allow identification) from a height sufficient to prevent the unsterile bottle from contacting the sterile receiving container. Splashing must be minimized as strike-through moisture can compromise the sterile barrier. The entire contents should be used or the remainder discarded; opened bottles should not be recapped for later use.",
          expertXp: 25
        },
        {
          question: "During a long spinal fusion procedure (4+ hours), the scrub tech has been rinsing instruments in the same basin of sterile saline that was poured at the beginning of the case. The surveyor identifies this as a deficiency. What is the specific risk and required practice?",
          options: [
          "Standing sterile solutions become contaminated over time through exposure to airborne microorganisms",
          "The risk is only chemical degradation of the saline, not microbial contamination",
          "The practice is acceptable if the room temperature is maintained below 70°F, which inhibits bacterial growth in saline",
          "There is no risk as long as the saline was sterile when poured and the basin has remained on the sterile field"
        ],
        correctIndex: 0,
          explanation: "Research demonstrates that sterile solutions left standing in open containers become progressively contaminated with airborne microorganisms. Studies have shown measurable bacterial colony counts in open basins within 1-2 hours. AORN recommends that solutions be discarded and replenished at regular intervals, particularly during prolonged procedures. The warm, protein-rich environment (from instrument rinsing) further promotes microbial growth. Room temperature alone does not prevent contamination.",
          expertXp: 30
        },
        {
          question: "The infection preventionist presents data showing your facility's SSI rate for spinal fusion procedures is above the NHSN benchmark. A process analysis reveals that irrigation solutions are being mixed on the sterile field by the scrub tech using multiple additives (bacitracin, polymyxin, saline). The surveyor asks about medication safety on the sterile field. What is the primary concern per Joint Commission NPSG and AORN guidelines?",
          options: [
          "Medication labeling is only required for controlled substances on the sterile field",
          "Mixing medications on the sterile field is always acceptable as long as the scrub tech verifies the label with the circulator",
          "The surgeon is solely responsible for verifying all medications on the sterile field; nursing staff have no labeling obligation",
          "All medications and solutions on the sterile field must be labeled with the drug name, concentration"
        ],
        correctIndex: 3,
          explanation: "JC National Performance Goal 14 (formerly NPSG 03.04.01) requires that all medications and solutions on and off the sterile field be labeled with the drug name, strength/concentration, and expiration time when preparation and administration are not immediately concurrent. On the sterile field, labeling must occur at the time the solution is transferred to the sterile container, and the circulator and scrub person must perform a verbal verification (read-back). Any unlabeled container must be discarded. This is one of the most frequently cited areas during OR tracers. Note: Effective January 1, 2026, NPSGs were replaced by National Performance Goals (NPGs) - the same requirements apply under the new NPG 14 medication management goal.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or12",
      baseQuestion: "During a tracer, a surveyor evaluates back table organization. What is the primary purpose of organizing the back table in a standardized manner?",
      baseOptions: [
        "To ensure efficiency, reduce errors",
        "To make the setup look neat for inspections",
        "To minimize the number of instruments needed",
        "To reduce the time needed for turnover between cases"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Standardized back table organization is a patient safety practice that ensures any scrub team member can quickly locate needed instruments, especially during emergencies. Consistent setup reduces the risk of retained surgical items, facilitates accurate surgical counts, and supports efficient instrument handoff during critical procedural moments.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor asks about the mayo stand. What is the correct positioning and management of the mayo stand during a procedure?",
          options: [
          "The mayo stand should be positioned at the foot of the bed and remain stationary throughout the case",
          "The mayo stand should be positioned over the patient at a height that allows the surgeon",
          "The mayo stand should be covered with a clear plastic drape for visibility",
          "The mayo stand is optional and only used for orthopedic procedures"
        ],
        correctIndex: 1,
          explanation: "The mayo stand is positioned over the operative site to hold the most frequently used instruments for immediate access. It is set at a height that does not impede the surgeon's view or movement. The sterile mayo stand cover drapes over the tray and extends below on all sides. Only the top surface is considered sterile. The scrub person manages instruments on the mayo stand throughout the procedure.",
          expertXp: 30
        },
        {
          question: "During a relief handoff between scrub techs mid-procedure, the surveyor observes the outgoing scrub tech verbally reporting the instrument count to the incoming scrub tech. What critical steps must occur during this handoff per AORN guidelines?",
          options: [
          "A complete surgical count of all countable items must be performed jointly by the outgoing scrub",
          "A verbal report of the instrument count is sufficient for the handoff",
          "The circulating nurse recounts independently after the handoff is complete",
          "The incoming scrub tech signs the count sheet to accept responsibility for the count as reported by the outgoing tech"
        ],
        correctIndex: 0,
          explanation: "Per AORN guidelines, any permanent relief of the scrub person requires a complete surgical count performed jointly by all three parties - the outgoing scrub person, incoming scrub person, and circulating nurse. This count must be performed concurrently and audibly, documented, and any discrepancies resolved before the outgoing team member leaves. A verbal report alone is insufficient because it does not verify actual item quantities and creates risk for count errors and retained surgical items.",
          expertXp: 30
        },
        {
          question: "Your facility is implementing a new standardized instrument tray rationalization program. The surveyor asks how instrument tray composition should be determined to balance efficiency, cost, and patient safety. What approach aligns with AORN and Joint Commission recommendations?",
          options: [
          "Tray composition should be determined through a multidisciplinary review including surgeons, scrub techs, and SPD",
          "Each surgeon should have their own custom preference card with unique tray compositions",
          "Tray composition should be determined solely by the SPD manager based on sterilizer capacity and processing efficiency",
          "Instrument trays should contain every instrument the surgeon might possibly need to avoid opening additional trays during the case"
        ],
        correctIndex: 0,
          explanation: "AORN and Joint Commission support evidence-based instrument tray rationalization using a multidisciplinary approach. Utilization data should drive decisions about which instruments to include, as over-loaded trays increase count errors, processing costs, instrument damage, and staff fatigue. Standardized procedure-specific trays (rather than unlimited surgeon-specific customization) improve count reliability, reduce turnover time, and decrease SPD workload. The process should involve surgeons, scrub techs, and SPD staff to balance clinical needs with safety and efficiency.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or13",
      baseQuestion: "A Joint Commission surveyor checks the OR thermostat during a procedure. The room temperature reads 78 degrees F. What is the compliance concern?",
      baseOptions: [
        "There is no concern; OR temperature has no regulatory standard",
        "The temperature is only a concern if the patient complains",
        "The temperature is too low for patient comfort",
        "The temperature exceeds the recommended OR range of 68-75"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Per ASHRAE, FGI Guidelines, and Joint Commission standards, the recommended OR temperature range is 68-75 degrees F (20-24 degrees C). Temperatures above this range promote microbial proliferation, increase surgical site infection risk, and can cause discomfort and fatigue for the surgical team, affecting performance and patient safety.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor also checks the humidity level in the OR and finds it at 15%. What is the compliance concern?",
          options: [
          "Low humidity is preferred in the OR for instrument preservation",
          "The humidity is below the recommended range of 20-60%,",
          "Humidity is not a regulated parameter in the OR",
          "Low humidity only matters in the sterile processing department"
        ],
        correctIndex: 1,
          explanation: "The recommended OR relative humidity range is 20-60% per ASHRAE and FGI Guidelines. Humidity below 20% increases the risk of electrostatic discharge (which can cause equipment malfunction and create sparks in oxygen-enriched environments), dries mucous membranes of patients and staff, and can affect the integrity of some sterile packaging materials. Note: modern anesthetic agents are not flammable at clinical concentrations; the primary concern with electrostatic discharge is oxygen enrichment, not flammable anesthetic vapors. Humidity above 60% promotes microbial growth and condensation.",
          expertXp: 30
        },
        {
          question: "The surveyor identifies an OR suite where the temperature log shows readings of 76-78°F for the past 3 weeks. Facilities engineering has been notified but states the chiller unit is awaiting parts. The OR manager has continued to schedule elective cases in the room. What should the surveyor's expectation be?",
          options: [
          "The facility only needs to document the work order for the chiller repair",
          "Continued scheduling is acceptable as long as staff are aware of the elevated temperature",
          "The facility should have implemented an interim life safety measure (ILSM) including risk",
          "The elevated temperature is acceptable because it falls within a 10% variance tolerance"
        ],
        correctIndex: 2,
          explanation: "When an environmental parameter is chronically out of compliance, Joint Commission expects the facility to implement interim life safety measures (ILSMs) or equivalent risk mitigation. This includes formal risk assessment, increased monitoring frequency, notification to infection prevention and surgical leadership, and evaluation of whether elective cases should be suspended or relocated. Simply documenting a work order without active risk mitigation demonstrates inadequate response. There is no 10% variance tolerance for OR environmental parameters.",
          expertXp: 30
        },
        {
          question: "A neonatal surgeon requests that the OR temperature be raised to 80°F for a premature infant undergoing emergency abdominal surgery. This exceeds the standard 68-75°F range. How should the facility manage this request per Joint Commission and AORN guidelines?",
          options: [
          "The facility's policy should include a defined process for temperature adjustments outside the standard range for specific",
          "Deny the request because OR temperature must always remain within 68-75°F without exception",
          "Use only warming blankets and overhead warmers instead of adjusting room temperature, since the HVAC range cannot be modified",
          "Comply with the request without any additional steps since the surgeon has clinical authority over patient care decisions"
        ],
        correctIndex: 0,
          explanation: "AORN and Joint Commission recognize that certain patient populations (neonates, burn patients, elderly, hypothermic trauma patients) may require OR temperatures outside the standard range to prevent hypothermia. The facility must have a defined policy that allows these adjustments with proper documentation including clinical indication, physician order, and planned return to standard range. Simply raising the temperature without documentation, or rigidly refusing clinically indicated adjustments, both represent compliance failures. The policy should balance infection prevention (standard range) with patient-specific thermoregulation needs.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or14",
      baseQuestion: "A surveyor observes a surgical technologist who has been scrubbed and is standing at the sterile field. The tech steps away from the table to answer a question from the circulator across the room. What is the concern?",
      baseOptions: [
        "This is acceptable if the tech keeps hands above waist level",
        "There is no concern as long as the tech does not touch anything unsterile",
        "The scrubbed person should remain within the sterile field",
        "The tech should remove gloves before walking away"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Scrubbed personnel must remain within the sterile field throughout the procedure. Stepping away from the sterile area increases the risk of inadvertent contamination of the gown and gloves by contact with unsterile surfaces or objects. If a scrubbed person must leave the sterile field, they should re-gown and re-glove upon return.",
      baseXp: 15,
      followUps: [
        {
          question: "If two scrubbed team members need to pass each other at the sterile field, what is the correct movement?",
          options: [
          "They should pass back to back or front to front (sterile to sterile)",
          "One person should step out of the sterile area to let the other pass",
          "They should pass with one person turning sideways",
          "They should pass as quickly as possible in any orientation"
        ],
        correctIndex: 0,
          explanation: "When two scrubbed persons must pass each other, they should pass back to back (unsterile to unsterile) or front to front (sterile to sterile). This principle ensures that sterile surfaces face sterile surfaces and unsterile surfaces face unsterile surfaces, minimizing the risk of cross-contamination. A scrubbed person should never turn their back toward the sterile field.",
          expertXp: 25
        },
        {
          question: "During a long procedure, the scrub tech needs to temporarily step back from the field to rest but does not break scrub. Upon returning to the sterile field 5 minutes later, what is the correct protocol?",
          options: [
          "The scrub tech should have the circulator inspect the gown and gloves for visible contamination before returning",
          "The scrub tech can return to the sterile field without any changes since they did not break scrub",
          "The scrub tech must completely re-gown and re-glove as if performing initial scrub",
          "The scrub tech should change gloves (re-glove) at minimum before handling sterile instruments again"
        ],
        correctIndex: 3,
          explanation: "When a scrubbed team member steps away from the immediate sterile field but does not break scrub (does not touch unsterile surfaces above the waist), the risk of glove contamination still exists from incidental contact with the gown below waist level (which is unsterile) or environmental surfaces. Best practice per AORN is to change gloves at minimum before returning to handle sterile instruments. If there is any doubt about gown contamination, a full gown and glove change is warranted. Visual inspection alone is insufficient as microbial contamination is not visible.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews a sentinel event report where a patient developed a deep surgical site infection after a spinal fusion. The investigation reveals that during the 6-hour procedure, the scrub tech left the sterile field twice to use the restroom, re-gowned and re-gloved each time, but the back table was left covered with a sterile drape and unmonitored during those breaks. What is the critical process failure?",
          options: [
          "The sterile back table was left unmonitored during the breaks",
          "The scrub tech should not have left the field during the case under any circumstances, regardless of personal needs",
          "The procedure was too long and should have been staged into two separate operations to prevent fatigue-related breaks",
          "The re-gowning and re-gloving procedure was likely performed incorrectly, introducing contamination"
        ],
        correctIndex: 0,
          explanation: "The critical failure is leaving the sterile field unmonitored. Per AORN guidelines, the sterile field must be under continuous observation from setup through case completion. When a scrubbed team member needs to leave, a qualified relief scrub person must be available to maintain continuous monitoring of the sterile field. Covering the field with a drape does not substitute for continuous surveillance, as contamination events (falling particles, air currents from door openings, accidental contact) cannot be detected on an unmonitored field. This is a systems failure - the facility should have a relief scrub person available for prolonged cases.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or15",
      baseQuestion: "During a tracer, the surveyor asks the circulator about shoe cover requirements in the OR. Which statement reflects current evidence-based practice?",
      baseOptions: [
        "Shoe covers are mandatory for all personnel entering the OR at all times",
        "Shoe covers are only needed during orthopedic procedures",
        "Shoe covers must be changed between every case",
        "Shoe covers are not required by AORN for infection prevention but"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Current AORN guidelines indicate that shoe covers have not been shown to reduce surgical site infection rates. They are primarily used as personal protective equipment (PPE) to protect the healthcare worker's shoes from blood and body fluid contamination. Clean, dedicated OR shoes are an acceptable alternative. Facilities should follow their institutional policy based on current evidence.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor follows up by asking when shoe covers ARE specifically required in the perioperative setting?",
          options: [
          "When gross contamination with blood or body fluids is",
          "Only when the patient has a known bloodborne pathogen",
          "Only during cardiac and transplant procedures",
          "During all surgical procedures without exception"
        ],
        correctIndex: 0,
          explanation: "Shoe covers are specifically indicated as PPE when gross contamination with blood or body fluids is anticipated (Standard Precautions), and in specific infection control situations such as entering protective environment rooms. The decision should be based on risk assessment and Standard Precautions rather than a blanket policy for all cases.",
          expertXp: 25
        },
        {
          question: "The surveyor broadens the inquiry to ask about the evidence base for OR attire policies in general. A staff nurse states that wearing long-sleeved jackets over scrubs in the semi-restricted area prevents SSIs. How should the OR manager respond to align with current AORN evidence-based guidelines?",
          options: [
          "Explain that while cover jackets with long sleeves are recommended in the semi-restricted area to contain skin",
          "Explain that only warm-up jackets with snapping closures are acceptable; zip-front jackets are prohibited",
          "Confirm the nurse's statement - long-sleeved jackets are proven to reduce SSIs by containing skin squames",
          "State that cover jackets are not recommended by AORN and should be eliminated from the attire policy"
        ],
        correctIndex: 0,
          explanation: "AORN recommends long-sleeved cover jackets in semi-restricted areas to contain skin squames (shed skin cells that carry bacteria), but acknowledges that the direct causal link between cover jacket use and SSI reduction has not been definitively established through high-quality studies. The recommendation is based on the theoretical framework that reducing particulate shedding in the perioperative environment reduces microbial contamination. This distinction between evidence-based and evidence-informed practice is important for accurate staff education.",
          expertXp: 30
        },
        {
          question: "The surveyor asks the infection preventionist to describe how the facility evaluates whether its surgical attire policies are effective. Which response demonstrates a compliant quality monitoring approach per Joint Commission and AORN?",
          options: [
          "We perform annual observational audits of surgical attire compliance (head covering, mask fit, attire worn outside OR)",
          "We monitor SSI rates and if they are within NHSN benchmarks, we consider our attire policies effective",
          "We installed cameras in the semi-restricted corridors and review footage monthly to identify attire violations",
          "We rely on peer-to-peer reminders and do not formally monitor attire compliance since it is a professional expectation"
        ],
        correctIndex: 0,
          explanation: "Joint Commission and AORN expect facilities to have a structured quality monitoring program for surgical attire compliance that includes regular observational audits with defined metrics (head covering completeness, mask fit, attire changes upon return from unrestricted areas), trend tracking over time, correlation with SSI surveillance data, and feedback loops through the perioperative governance structure. Relying solely on SSI rates is a lagging indicator that cannot detect attire-specific issues. Formal monitoring demonstrates the facility's commitment to proactive infection prevention rather than reactive response.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or16",
      baseQuestion: "A surveyor reviews the count policy during a cesarean section. The initial sponge count was performed and documented. At what additional points during the procedure must counts be performed?",
      baseOptions: [
        "At initial setup, before closure of a cavity within a cavity",
        "Only at the initial setup and final closing count",
        "Counts are not required for cesarean sections",
        "At the beginning and end of the case only, plus whenever the surgeon requests it"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Per AORN guidelines, surgical counts must be performed: (1) before the procedure begins, (2) before closure of a cavity within a cavity (e.g., uterus during C-section), (3) before wound closure begins, (4) at skin closure or end of procedure, and (5) at the time of permanent relief of either the scrub person or circulator. Additional counts may be performed at the surgeon's request or any time a discrepancy is suspected.",
      baseXp: 15,
      followUps: [
        {
          question: "Who is ultimately accountable for ensuring the count is correct before the wound is closed?",
          options: [
          "The scrub technologist alone",
          "The circulating nurse alone",
          "The charge nurse who oversees the department",
          "The surgeon bears ultimate"
        ],
        correctIndex: 3,
          explanation: "While the scrub person and circulating nurse are jointly responsible for performing and verifying surgical counts, the surgeon bears the ultimate responsibility for ensuring no retained items at wound closure. The surgeon should not close until counts are reconciled. All three roles share accountability for patient safety, and this shared responsibility must be documented per Joint Commission standards.",
          expertXp: 30
        },
        {
          question: "During a cesarean section, an emergency arises requiring an urgent hysterectomy. The surgical team decides to omit the cavity count before uterine closure due to the life-threatening hemorrhage. What documentation and follow-up is required per AORN guidelines?",
          options: [
          "The circulator should complete the count independently and document it as reconciled",
          "The team should perform a postoperative count of all remaining supplies in the room to reconcile",
          "The surgeon must document the clinical rationale for omitting the count in the operative note",
          "Documentation is needed because the count was legitimately omitted for patient safety"
        ],
        correctIndex: 2,
          explanation: "AORN recognizes that in true life-threatening emergencies, the count may need to be omitted or abbreviated to prioritize patient survival. However, this does not eliminate documentation requirements. The surgeon must document the clinical rationale for omitting the count in the operative note. An intraoperative X-ray should be obtained as soon as the patient is stable enough. An incident report must be filed per facility policy to document the omitted count and trigger follow-up. This documentation protects both the patient and the surgical team.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews your facility's retained surgical item (RSI) prevention program and notes that the facility experienced a near-miss event where a sponge was found in the wound during the closing count. The event was properly managed and no harm occurred. The surveyor asks how this near-miss should be handled per Joint Commission patient safety culture standards. What is the correct approach?",
          options: [
          "Near-miss events should be reported to The Joint Commission Sentinel Event database within 45 days",
          "The event should be reported through the facility's voluntary event reporting system",
          "Since no patient harm occurred, the event should be noted in the circulator's personal file but no further action is required",
          "The event should only be reported if it is the second near-miss involving the same staff member"
        ],
        correctIndex: 1,
          explanation: "Joint Commission promotes a just culture where near-miss events are valued as learning opportunities. Near-misses should be voluntarily reported through the facility's event reporting system, analyzed to identify system-level contributing factors (not individual blame), shared as de-identified learning cases with the surgical team, and used to drive process improvements. Punitive responses discourage reporting and undermine the safety culture. Near-misses are not reported to The Joint Commission Sentinel Event database (only actual sentinel events with harm meet that threshold), but they are critical for internal quality improvement.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or17",
      baseQuestion: "A surveyor observes the circulator opening a basin set. The outer wrapper integrity indicator has changed color, but the circulator notices a small tear in the inner wrapper. What should the circulator do?",
      baseOptions: [
        "Use the basin set since the integrity indicator shows sterilization occurred",
        "Reject the package; any compromise in packaging integrity",
        "Open only the basins that are not near the tear",
        "Tape over the tear and use the set"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A tear, hole, or any compromise in sterile packaging integrity renders the contents unsterile regardless of chemical indicator results. The package must be rejected and returned to sterile processing for reprocessing. Event-related sterility means that the sterility of an item is maintained until the packaging is compromised by an event such as a tear, moisture, or other breach.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor asks about event-related sterility. Which factors can compromise the sterility of a properly sterilized package during storage?",
          options: [
          "Moisture, tears/punctures, excessive handling",
          "Sterile packages remain sterile indefinitely once processed",
          "Only direct contact with a contaminated surface",
          "Only the expiration date on the package"
        ],
        correctIndex: 0,
          explanation: "Event-related sterility recognizes that items remain sterile until a specific event compromises the packaging. Events that can break sterility include: moisture contamination (strike-through), tears or punctures, excessive handling that degrades packaging, improper storage (dust exposure, compression from overstacking), broken heat seals, and environmental contamination. Properly maintained packages with intact barriers remain sterile indefinitely.",
          expertXp: 30
        },
        {
          question: "The surveyor inspects the sterile storage area and finds instrument trays stored on the bottom shelf, 4 inches from the floor, with some packages touching the wall. Several packages show compression marks from overstacking. What storage deficiencies should be cited?",
          options: [
          "The items are compliant as long as they are off the floor and the packaging is intact",
          "Storage requirements only apply to implantable devices, not routine instrument trays",
          "Only the compression marks are a concern; floor and wall clearance have no standard",
          "Sterile items must be stored at least 8-10 inches from the floor, 2 inches from walls"
        ],
        correctIndex: 3,
          explanation: "AAMI ST79 and Joint Commission standards specify minimum clearance requirements for sterile storage: 8-10 inches from the floor (to prevent splash contamination during floor cleaning), 2 inches from exterior walls (to prevent condensation exposure), and 18 inches from ceiling sprinkler heads (fire code and to prevent water damage). Overstacking that compresses packaging compromises the sterile barrier, violating event-related sterility. These requirements apply to all sterile items, not just implants. The storage area must also have controlled temperature, humidity, and limited traffic.",
          expertXp: 30
        },
        {
          question: "During the sterile storage inspection, the surveyor asks the SPD manager to explain the facility's shelf-life policy for sterile items. The manager states that all items have a 1-year expiration date stamped on the package. The surveyor identifies a concern. What is the issue per AAMI and Joint Commission standards?",
          options: [
          "Assigning arbitrary time-based expiration dates contradicts the event-related sterility",
          "The expiration date is appropriate but should be 6 months instead of 1 year",
          "Expiration dating is required by FDA for all sterilized medical devices and the facility is compliant",
          "One year is too short - most sterile items should have a 2-year shelf life"
        ],
        correctIndex: 0,
          explanation: "AAMI ST79 and Joint Commission endorse event-related sterility, which holds that sterile items remain sterile until an event (tear, moisture, compression, contamination) compromises the packaging barrier - not until an arbitrary date expires. Assigning time-based expiration dates (e.g., 1 year) is inconsistent with this principle and creates unnecessary waste through re-processing of items with intact packaging. The facility's shelf-life policy should be event-related, with regular inspection of stored items for packaging integrity rather than date-based culling.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or18",
      baseQuestion: "During a procedure, the scrub technologist notices a small hole in their right glove. They are currently holding a retractor for the surgeon. What is the correct immediate action?",
      baseOptions: [
        "Finish holding the retractor and change gloves at the next convenient opportunity",
        "Alert the team, step back from the field",
        "Apply skin adhesive over the hole and continue",
        "Apply a second glove over the compromised one"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A glove perforation is an immediate break in the sterile barrier and must be corrected as soon as it is identified. The scrubbed person must alert the team, step back from the sterile field, and have the contaminated glove removed and replaced with a new sterile glove. If the gown cuff is potentially contaminated, the gown must also be changed. Double gloving is recommended to reduce perforation exposure risk.",
      baseXp: 15,
      followUps: [
        {
          question: "What does current evidence suggest about double gloving in the OR?",
          options: [
          "Double gloving is required only by the surgeon, not the scrub tech",
          "Double gloving significantly reduces the risk of inner glove perforation",
          "Double gloving is only required for HIV-positive patients",
          "Double gloving is unnecessary and reduces tactile sensation without benefit"
        ],
        correctIndex: 1,
          explanation: "Evidence demonstrates that double gloving reduces the risk of inner glove perforation by up to 87% and significantly decreases blood contact with the surgical team's skin. AORN recommends double gloving for all surgical procedures, particularly those involving sharp instruments, orthopedic hardware, or prolonged cases. Indicator glove systems (colored inner glove) facilitate early detection of outer glove perforation.",
          expertXp: 30
        },
        {
          question: "A scrub tech using a colored indicator glove system notices a green stain appearing on the outer glove during a total knee arthroplasty. There is no visible hole. What does this indicate and what action is required?",
          options: [
          "The colored stain is normal wear and no action is needed",
          "The indicator system is malfunctioning and should be reported to the manufacturer",
          "The stain indicates the inner glove is degrading and both gloves must be changed",
          "The green stain indicates fluid has penetrated the outer glove through a"
        ],
        correctIndex: 3,
          explanation: "Indicator (colored) underglove systems work by creating a visible color contrast when fluid penetrates the outer glove through a micro-perforation. A green stain appearing on the outer glove surface means patient blood or body fluids have traveled through an invisible hole in the outer glove. The outer glove must be changed immediately. This demonstrates the value of indicator glove systems - studies show that up to 80% of glove perforations go undetected without an indicator system, and detection time is reduced from an average of 28 minutes to under 2 minutes with colored undergloves.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews your facility's sharps injury and glove perforation data and asks about your post-exposure protocol. During a case, the scrub tech sustains a needlestick through both gloves. What is the required sequence of actions per OSHA Bloodborne Pathogen Standard and Joint Commission requirements?",
          options: [
          "The surgeon decides whether the scrub tech should leave the field or continue; medical follow-up is optional",
          "Apply antiseptic to the injury site through the glove, change the outer glove, and continue the case; report to employee health after the procedure",
          "Immediately step back from the field, remove the gloves, wash the injury site with soap and water, report to the circulating nurse",
          "Change gloves, document the injury after the case, and follow up with employee health within 72 hours"
        ],
        correctIndex: 2,
          explanation: "OSHA Bloodborne Pathogen Standard (29 CFR 1910.1030) requires a defined post-exposure protocol. The immediate actions are: step away from the field, remove gloves, wash the wound with soap and water (do not squeeze), and report the injury. Post-procedure requirements include: incident reporting, baseline testing for HIV, HBV, and HCV within 1-2 hours, evaluation for post-exposure prophylaxis (PEP - especially for HIV exposure, which is time-sensitive), source patient identification and testing (with consent), and follow-up testing at defined intervals (6 weeks, 3 months, 6 months). Joint Commission requires facilities to demonstrate that post-exposure protocols are in place, staff are trained, and timely medical evaluation is accessible.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or19",
      baseQuestion: "A Joint Commission surveyor reviews the OR schedule and notes that a room is being turned over for the next case. The environmental services (EVS) staff has completed terminal cleaning. What temperature should the OR be brought to before the next patient enters?",
      baseOptions: [
        "The room should be as cold as possible to reduce bacterial growth",
        "Any temperature the surgeon prefers",
        "Between 68-75 degrees F (20-24 degrees C) per ASHRAE and",
        "Temperature only matters during the procedure, not during setup"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "The OR temperature should be within the 68-75 degrees F (20-24 degrees C) range per ASHRAE standards before the next case begins. Temperature may be adjusted for specific patient populations (e.g., pediatric or burn patients may require warmer settings). The room must be at the appropriate temperature before sterile supplies are opened and the patient enters, as temperature affects both sterility and patient normothermia.",
      baseXp: 15,
      followUps: [
        {
          question: "What are the key environmental parameters that must be verified and documented before setting up for the next surgical case?",
          options: [
          "Only cleaning verification and instrument availability",
          "Only room cleanliness",
          "Temperature (68-75 degrees F)",
          "Only temperature and humidity"
        ],
        correctIndex: 2,
          explanation: "Before setting up for the next case, all environmental parameters must be within specification: temperature (68-75 degrees F), relative humidity (20-60%), positive pressure relationship maintained, minimum 15 air exchanges per hour with 3 fresh air exchanges, and confirmation that terminal cleaning has been completed. These parameters must be monitored, documented, and any out-of-range readings must trigger corrective action per Joint Commission standards.",
          expertXp: 35
        },
        {
          question: "The surveyor observes the turnover process between cases and notes that the EVS staff used the same mop and bucket solution for three consecutive OR rooms. What is the concern per AORN and Joint Commission environmental cleaning standards?",
          options: [
          "This is acceptable practice as long as the cleaning solution was prepared at the correct dilution at the start of the shift",
          "The only concern is whether the mop head was wrung out properly between rooms",
          "Cleaning solutions become contaminated with organic material and microorganisms during use",
          "Reusing cleaning solution is acceptable for between-case cleaning but not for terminal cleaning"
        ],
        correctIndex: 2,
          explanation: "Using the same mop and cleaning solution across multiple rooms creates a risk of cross-contamination. Cleaning solutions become progressively contaminated with organic soil, blood, and microorganisms, reducing their antimicrobial efficacy. Per AORN guidelines and infection prevention best practices, mop heads should be changed (or dedicated microfiber cloths used) and fresh cleaning solution prepared for each room. Many facilities have transitioned to microfiber mopping systems or disposable mop heads to address this. The surveyor should verify the facility's environmental cleaning protocol specifies single-room use of cleaning materials.",
          expertXp: 30
        },
        {
          question: "The surveyor asks about the difference between between-case (routine) cleaning and terminal cleaning of the OR. The charge nurse states they are essentially the same process. What is the correct distinction per AORN guidelines, and what additional steps does terminal cleaning require?",
          options: [
          "Terminal cleaning is more extensive than between-case cleaning and includes: cleaning all horizontal and vertical surfaces (walls to a",
          "Terminal cleaning requires use of a different EPA-registered disinfectant than between-case cleaning",
          "Terminal cleaning only adds floor scrubbing with a mechanical floor scrubber to the between-case protocol",
          "The charge nurse is correct - between-case and terminal cleaning use the same protocol; the only difference is that terminal cleaning occurs at the end of the day"
        ],
        correctIndex: 0,
          explanation: "AORN distinguishes between-case cleaning (focused on immediate procedural area, horizontal surfaces, and equipment used during the case) and terminal cleaning (comprehensive cleaning of the entire room). Terminal cleaning adds: cleaning all wall surfaces to a minimum height (typically door height or higher), moving all portable equipment to clean floor underneath, cleaning ceiling-mounted equipment tracks and surgical light fixtures, wet-vacuuming or damp-mopping the entire floor surface, and cleaning adjacent substerile areas and scrub sinks. Both processes use EPA-registered hospital-grade disinfectants at proper contact time, but terminal cleaning is significantly more extensive in scope.",
          expertXp: 35
        }
      ]
    },
    {
      id: "dd-or20",
      baseQuestion: "A surveyor asks about the management of sharps during a procedure. During a tracer, the circulator is observed recapping a used suture needle with her fingers before placing it in the sharps counter. What is the compliance issue?",
      baseOptions: [
        "Used needles and sharps must never be recapped by hand",
        "There is no compliance issue; recapping needles is standard practice",
        "The needle should be broken before disposal",
        "Only the scrub tech can handle sharps"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "OSHA Bloodborne Pathogen Standard prohibits recapping needles by hand due to the high risk of needlestick injury. In the OR, sharps must be managed using a hands-free passing technique (neutral zone) and handled with instruments rather than fingers. Used needles should be placed on a magnetic needle counter pad or in a designated sharps container for counting purposes.",
      baseXp: 15,
      followUps: [
        {
          question: "The surveyor asks about the neutral zone or hands-free technique for sharps transfer. What does this practice involve?",
          options: [
          "The surgeon verbally announces when passing a sharp instrument",
          "The scrub tech always holds the sharp end when passing to the surgeon",
          "Sharps are only passed during designated pause points in the procedure",
          "A designated safe zone (basin, magnetic mat"
        ],
        correctIndex: 3,
          explanation: "The neutral zone (also called hands-free technique or safe zone) is a designated area on the sterile field where sharp instruments are placed by one person and picked up by another, eliminating simultaneous hand-to-hand contact with sharp instruments. This AORN-recommended practice significantly reduces percutaneous injuries among surgical team members. The neutral zone should be established at the beginning of each procedure and consistently used throughout.",
          expertXp: 30
        },
        {
          question: "During the tracer, the surveyor checks the sharps container mounted on the wall in the OR. It is filled above the manufacturer's fill line. What is the compliance issue and what standard applies?",
          options: [
          "The fill line is a manufacturer suggestion, not a regulatory requirement",
          "Overfilling is only a concern if sharps are protruding from the container opening",
          "Per OSHA Bloodborne Pathogen Standard",
          "Overfilling is acceptable during long cases as long as the container is replaced at the end of the case"
        ],
        correctIndex: 2,
          explanation: "OSHA's Bloodborne Pathogen Standard (29 CFR 1910.1030) requires that sharps containers be replaced routinely and not be allowed to overfill. The manufacturer's fill line (typically 2/3 to 3/4 capacity) represents the maximum safe fill level. Overfilled containers increase the risk of needlestick injuries when staff attempt to force additional items in or when protruding sharps contact hands during handling. This is a frequently cited OSHA violation during Joint Commission surveys and can result in both JC findings and OSHA citations.",
          expertXp: 30
        },
        {
          question: "The surveyor reviews your facility's sharps injury prevention program and asks for evidence of compliance with the Needlestick Safety and Prevention Act. What documentation must the facility maintain and produce upon request?",
          options: [
          "A sharps injury log with detailed information (device type, department, procedure",
          "Only the OSHA 300 log entries for sharps injuries from the past calendar year",
          "Only the facility's written sharps safety policy and the sharps container inspection schedule",
          "Employee vaccination records for Hepatitis B and annual bloodborne pathogen training attendance"
        ],
        correctIndex: 0,
          explanation: "The Needlestick Safety and Prevention Act (amending OSHA's Bloodborne Pathogen Standard) requires facilities to maintain: a detailed sharps injury log (type of device, department, circumstances - more detailed than the OSHA 300 log), documentation of annual evaluation of safer sharps devices with direct input from frontline healthcare workers who use the devices, evidence that safety-engineered sharps devices are implemented unless contraindicated (with documented clinical justification for exceptions), and an Exposure Control Plan updated at least annually. Joint Commission surveyors verify these elements and expect the facility to demonstrate an active sharps injury prevention program, not just documentation of past injuries.",
          expertXp: 35
        }
      ]
    }
  ]
};
