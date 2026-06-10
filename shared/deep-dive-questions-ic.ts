import type { DeepDiveLevel } from "./schema";

export const ddInfectionControlLevel: DeepDiveLevel = {
  id: "dd-infection-control",
  name: "Infection Prevention & Control Deep Dive",
  description: "Expert-level questions on HAI prevention bundles, isolation precaution gaps, PPE compliance failure patterns, MDRO management, and IC surveillance program requirements.",
  icon: "Microscope",
  color: "hsl(185, 70%, 38%)",
  baseLevelId: "infection_control",
  questions: [
    {
      id: "dd-ic1",
      baseQuestion: "A CLABSI rate audit reveals 3.8 infections per 1,000 catheter days on the medical ICU - significantly above the NHSN benchmark of 0.8. Chart reviews show the insertion bundle was documented as complete in 96% of cases. What does this discrepancy suggest?",
      baseOptions: [
          "The insertion bundle documentation is accurate and the elevated CLABSI rate is attributable to patient acuity factors and underlying conditions rather than preventable process failures",
          "High documented bundle compliance with elevated infection rates suggests that documentation is not reflecting actual practice - direct observation audits of insertion technique are needed to identify real-world compliance gaps",
          "The NHSN benchmark is based on lower-acuity ICUs and the comparison is not clinically valid for a high-acuity medical ICU with more complex patient populations",
          "The maintenance bundle is likely the primary driver of CLABSI risk, and insertion bundle compliance is confirmed by the documented 96% compliance rate which is reliable",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Near-perfect documented compliance with elevated infection rates is a classic sign that documentation does not reflect practice. Self-report or retrospective checkbox documentation frequently overstates actual compliance. Direct observation of insertion technique, maintenance practices, and hub access is required to identify where actual practice deviates from the documented protocol.",
      baseXp: 20,
      followUps: [
        {
          question: "Direct observation audits reveal that providers consistently use chlorhexidine skin prep but skip the drying step, do not maintain maximal barrier precautions (gown is not worn by one team member), and the catheter hub is accessed without a consistent 15-second friction scrub. These are all insertion and maintenance bundle elements that were being checked as 'compliant' in documentation. What does this reveal about the measurement system?",
          options: [
          "The measurement system is functional - the gaps are individual provider non-compliance events within an otherwise valid measurement process that uses provider self-reporting and checkbox completion during routine documentation",
          "The measurement system is fundamentally flawed - checkboxes completed by the performing provider without direct observation validation produce data that reflects intention rather than behavior. The quality program must shift to observed audits conducted by a trained third party as the primary compliance measurement method",
          "The measurement problem is limited to the skin prep drying step - the other bundle elements including maximal barrier precautions and catheter hub maintenance are reliably self-reported by experienced providers and do not require direct observation",
          "The solution is to add more specific checkbox questions to the documentation form to capture each sub-step of the bundle elements, with mandatory completion triggers that prevent providers from advancing to the next section without documentation",
        ],
          correctIndex: 1,
          explanation: "Self-completed checklists for one's own procedure systematically overestimate compliance because providers document intended practice rather than actual technique. Direct observation by a trained third party is the gold standard for bundle compliance measurement. The facility needs to redesign its measurement approach - not just add more checkboxes - to capture what is actually happening during insertions and maintenance activities.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic2",
      baseQuestion: "A patient in contact precautions for VRE is transported to radiology for a CT scan. The transport team wears gloves but not gowns. The radiology technologist who positions the patient wears no PPE. After the scan, the CT table is wiped with an alcohol-based wipe. What are the compliance failures in this scenario?",
      baseOptions: [
          "Only the transport team's PPE approach is deficient - transport team should wear gowns in addition to gloves, but the radiology technologist's gloves-only approach is appropriate for the radiology environment and alcohol wipe cleaning is sufficient for VRE disinfection on equipment.",
          "Multiple failures: transport team requires gowns in addition to gloves for VRE contact precautions; radiology staff require gown and gloves when directly handling a contact precaution patient; and alcohol wipes are inadequate for VRE - an EPA-registered disinfectant effective against VRE must be used",
          "The only failure is the CT table cleaning method - transport team and radiology technologist PPE are sufficient because VRE contact precautions require only glove protection for direct patient contact in accordance with standard precaution guidelines for VRE-colonized patients.",
          "No failures occurred because contact precautions apply only within the patient's room - during transport and in radiology departments, standard precautions are the appropriate infection control measure and staff need only basic hygiene practices.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Contact precautions require gown AND gloves for all direct patient contact - not just in the patient's room but wherever the patient is physically handled. The radiology technologist who physically positioned the patient had direct contact without any PPE. Additionally, VRE can survive on surfaces - the CT table requires cleaning with a product proven effective against VRE, not just an alcohol wipe.",
      baseXp: 20,
      followUps: [
        {
          question: "After the event, the infection control team audits radiology and discovers that the department has no written protocol for receiving contact precaution patients. Staff say 'we do what transport tells us' and transport says 'radiology is responsible for their own PPE.' What systemic problem does this reveal and how should it be addressed?",
          options: [
          "This is an individual accountability gap - both the transport team and radiology nursing staff need discipline and re-education on contact precaution requirements, and each department should establish its own internal protocols for how staff handle contact precaution patients during their specific roles in patient care and equipment handling processes.",
          "A systemic communication and accountability gap exists between departments for shared responsibility situations - resolution requires a cross-departmental protocol specifying PPE requirements for all contact precaution patient interactions in radiology, including who provides what equipment, how receiving staff are notified, and how the receiving area is cleaned. This must be owned jointly by nursing, infection prevention, and radiology leadership",
          "Radiology should be responsible for all aspects of contact precaution management for patients in their department since they are the receiving area - a cross-departmental protocol would create confusion about which department holds final accountability for ensuring proper PPE availability and patient area disinfection after transport and imaging procedures.",
          "The solution is to restrict all contact precaution patients to portable imaging only, eliminating the need for transport to the radiology department and thereby removing the communication gap between departments - this clinical approach avoids the complexity of coordinating protocols across multiple departments and their different operational workflows.",
        ],
          correctIndex: 1,
          explanation: "When two departments point at each other, the root cause is a systemic gap in cross-departmental protocols and accountability. The infection prevention program must develop a written standard that defines responsibility at each stage of a contact precaution patient's journey outside their room. Both transport and receiving departments must have clear, agreed-upon roles that are embedded in written protocol, staff education, and compliance monitoring.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic3",
      baseQuestion: "A patient returns from surgery with a freshly inserted central line. The post-op nurse accesses the line to draw labs without scrubbing the hub, hangs the ordered medications, and documents the access. The nurse says the line 'was just placed in a sterile field.' Does the sterile insertion environment eliminate the need for hub disinfection on first access in PACU?",
      baseOptions: [
          "Yes - a central line placed in a sterile surgical environment retains its sterile status until it is first accessed - therefore, disinfection before the first access is redundant and unnecessary in the immediate post-operative period",
          "No - hub disinfection is required before every access regardless of how recently or under what conditions the line was placed; the hub surface may have been contaminated during connection of tubing, labeling, or transport",
          "Yes - the first access in the first 2 hours following line insertion is an accepted and documented exception to the hub scrub requirement in post-operative settings where line sterility is highest",
          "No - but only if the line is accessed for blood draws rather than medication administration - medication infusions through unclean hubs carry higher contamination risk than sampling procedures",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Hub disinfection before every access is a non-negotiable maintenance bundle requirement. Even a freshly inserted line can have hub contamination from tubing connections, cap handling, or transport. The sterile insertion environment protects the insertion site, not the hub - these are two distinct potential contamination pathways.",
      baseXp: 15,
      followUps: [
        {
          question: "The PACU nurse manager argues that requiring hub scrubbing for every post-op access will slow recovery nursing in a high-volume PACU. They propose a modified protocol: scrub the hub only for blood draws and intermittent medication pushes, but not for checking line patency or flushing. Is this modification evidence-based and compliant?",
          options: [
          "The modification is evidence-based because contamination risk during flushing with normal saline is lower than during medication infusion, and a tiered approach differentiating access purposes by clinical intervention type is supported by operational efficiency considerations and clinically logical risk stratification",
          "The modification is not evidence-based or compliant - hub disinfection is required before every intravascular access event, including flushes. Any breach of the closed system - regardless of purpose - introduces contamination risk. The PACU volume concern must be addressed through workflow efficiency, not by eliminating safety steps",
          "The modification is acceptable if the PACU nursing leadership documents a departmental exception based on high patient volume and operational necessity, which is permitted under accreditation standards for facility-specific adaptations in high-acuity units with documented safety metrics and compliance reviews",
          "The modification is compliant for flushing but not for blood draws, as this distinction between access purposes is supported by the CLABSI prevention literature and allows for operational flexibility while maintaining safety through differential protocols based on clinical purpose and contamination risk levels",
        ],
          correctIndex: 1,
          explanation: "The catheter hub disinfection requirement applies to every access event - any time the closed system is breached, contamination can be introduced. There is no evidence-based exception for flushing. Workflow concerns in a high-volume PACU must be addressed through optimization - pre-positioning supplies at the bedside, using pre-flushed syringes, efficient tray setup - not by creating exceptions to a core safety practice.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic4",
      baseQuestion: "An infection control review of the past 12 months shows that CAUTI rates have remained elevated despite a catheter management bundle implementation 8 months ago. The bundle includes insertion checklist documentation and daily nursing assessments. What is likely missing from the improvement strategy?",
      baseOptions: [
          "The bundle needs more time to demonstrate results - 8 months of implementation is insufficient to show statistically significant CAUTI rate reduction, and the bundle elements may require up to 12 to 18 months of sustained adoption before meaningful outcome changes become measurable",
          "A nurse-driven urinary catheter removal protocol - allowing nurses to remove catheters based on defined criteria without waiting for a physician order - is consistently the highest-impact CAUTI prevention intervention and is likely missing from the current bundle",
          "The documentation burden of the insertion checklist is causing nursing fatigue and workflow disruption that undermines other bundle elements and diverts staff attention from direct patient care and catheter maintenance activities",
          "Urinary antiseptic additives should be incorporated into the catheter care bundle protocol to reduce bacterial colonization rates and complement the insertion checklist with additional antimicrobial preventive measures during catheterization",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "The single most effective CAUTI prevention intervention is early catheter removal. Nurse-driven removal protocols - which allow nurses to remove catheters based on defined criteria (post-surgery day, absence of specific indications) without a separate physician order - are associated with the largest CAUTI rate reductions in the literature. If the bundle focuses on insertion and maintenance but not removal criteria, it is missing the highest-leverage intervention.",
      baseXp: 20,
      followUps: [
        {
          question: "The medical staff resists implementing a nurse-driven removal protocol because physicians want to maintain order authority over catheter management decisions. How should the infection prevention program address this resistance within the hospital's governance structure?",
          options: [
            "Defer to physician authority - nurse-driven removal requires physician support and cannot be implemented without unanimous physician consensus",
            "Bring the evidence on nurse-driven protocols to the medical executive committee and patient safety committee with CAUTI data showing the current protocol's limitations, propose a pilot protocol with clear criteria, physician oversight built in, and defined evaluation metrics - regulatory and accreditation pressure on HAI rates creates leadership-level urgency that can accelerate physician engagement",
            "Implement the nurse-driven protocol through nursing policy only - physician order authority does not extend to nursing assessment-based interventions",
            "Report the physician resistance to JC as an obstruction to evidence-based practice"
          ],
          correctIndex: 1,
          explanation: "Physician resistance to nurse-driven protocols is best addressed through the medical governance structure using data, evidence, and shared accountability framing. Presenting the CAUTI data - including harm events, cost, and regulatory risk - alongside peer-reviewed evidence for nurse-driven removal at the medical executive committee level engages physicians as partners in solving a shared problem. Unilateral nursing implementation without medical staff engagement creates political conflict that undermines program sustainability.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic5",
      baseQuestion: "During a tracer, a surveyor enters an airborne precaution room (suspected TB) after donning an N95 respirator. Inside, the surveyor notices the patient's door was left ajar by the prior staff member who exited, the room air pressure monitor in the hallway reads positive (instead of negative), and the patient has no surgical mask on. How many compliance failures are present?",
      baseOptions: [
          "One deficiency exists - the door being left ajar is the only actionable finding requiring immediate closure by available staff without escalation to supervisory or administrative leadership.",
          "Three - open door (positive pressure enters the room), positive room pressure (engineering failure that must be immediately reported and the room taken out of service for airborne isolation), and unmasked patient create compounded transmission risk",
          "Two deficiencies are present - the open door and the unmasked patient pose isolation concerns, but positive pressure reading in an airborne room indicates system is functioning as designed to contain pathogens.",
          "One deficiency requires action - the positive room pressure reading represents the only immediate compliance finding; door closure and patient masking are routine maintenance and housekeeping matters outside compliance scope.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Three separate failures: (1) the door was left open - airborne rooms must have the door kept closed at all times to maintain negative pressure; (2) the room pressure monitor reads positive - this means the room is no longer functioning as an airborne isolation room and the failure must be reported immediately to engineering and the patient moved or the room taken out of service; (3) the patient is not wearing a surgical mask - patients in airborne precautions must wear a surgical mask when staff are present or during transport.",
      baseXp: 20,
      followUps: [
        {
          question: "The positive room pressure reading is traced to a failed air handling unit that has been malfunctioning for 3 days. Staff on the unit were aware the pressure alarm had been going off but assumed it was a sensor malfunction and did not report it. The suspected TB patient has been in the room for all 3 days. What immediate actions are required?",
          options: [
            "Repair the air handling unit and document the event - no further immediate action is required since the patient has not yet been confirmed as TB positive",
            "Immediately: relocate the patient to a functioning airborne isolation room or implement alternative isolation; report the engineering failure to facilities for emergency repair; conduct a contact exposure assessment for all staff, patients, and visitors who entered the unit or adjacent areas during the 3-day failure; initiate ILSM for the affected room; notify infection prevention and leadership; and conduct a root cause analysis on why a 3-day room pressure alarm was not reported",
            "Place the patient on droplet precautions temporarily until the airborne room is repaired",
            "Confirm TB positive status before taking any exposure assessment action - no confirmed exposure has occurred during the malfunction period"
          ],
          correctIndex: 1,
          explanation: "A 3-day failure of a critical airborne isolation room is a serious safety event requiring immediate, multi-pronged response. The patient must be moved to appropriate isolation. An exposure assessment is required for all potentially exposed individuals - TB exposure management follows public health protocols regardless of confirmation status. Engineering emergency repair, ILSM implementation, and root cause analysis of the 3-day reporting failure (alarm normalized, not escalated) are all required. Waiting for TB confirmation delays essential public health steps.",
          expertXp: 35
        }
      ]
    }
    ,
    {
      id: "dd-ic6",
      baseQuestion: "A hospital's hand hygiene compliance audit shows an overall rate of 89%. The infection preventionist flags that compliance at the 'before patient contact' moment is 71%, while 'after patient contact' is 97%. What does this asymmetry indicate?",
      baseOptions: [
          "Overall 89% compliance meets acceptable thresholds established by accreditation standards; moment-by-moment breakdown is a secondary analytical tool not required for compliance determination",
          "Staff are protecting themselves (post-contact compliance) but not consistently protecting patients (pre-contact compliance) - the more critical moment from a HAI prevention standpoint is 'before,' and this gap requires targeted intervention",
          "The difference is statistically expected because post-contact moments are more observable and therefore always demonstrate higher compliance rates in audit methodology",
          "Hand hygiene before contact is only required for immunocompromised patients and high-risk procedures; the 71% rate reflects appropriate clinical triage rather than a compliance gap",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Pre-contact hand hygiene prevents the transmission of organisms to patients - it is the moment with the greatest patient safety impact. A 26-point gap between pre- and post-contact compliance indicates staff are motivated primarily by self-protection rather than patient protection, a pattern that leaves vulnerable patients at risk. JC and WHO hand hygiene guidelines prioritize the 'before patient contact' moment as essential to HAI prevention.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit educator proposes posting reminder signs at room entrances that say 'Protect Your Patient - Sanitize Before You Enter.' Three months later, pre-contact compliance is 78% - improved but still below target. What additional interventions does evidence support?",
          options: [
          "Signage alone is a sufficient intervention - the 78% compliance rate shows improvement and additional resources should focus on post-contact compliance gaps instead of expanding pre-contact interventions.",
          "Multimodal interventions combining signage with direct observation and real-time feedback, leadership role modeling, peer-to-peer coaching, and accountability structures (dashboard reporting by unit with leadership review) consistently produce better results than any single-modality approach",
          "Implement a policy requiring staff to document hand hygiene at every patient contact - documentation compliance is the primary driver of behavior change and will increase pre-contact compliance rates more effectively than additional signage or observation.",
          "Replace the sanitizer dispensers with a more convenient location closer to room entrances - accessibility is the primary barrier to pre-contact compliance and moving dispensers will improve both compliance and efficiency.",
        ],
          correctIndex: 1,
          explanation: "Sustained hand hygiene improvement requires multimodal interventions. Signage alone produces modest, short-lived gains. The most effective programs combine environmental design (accessible dispensers), education, direct observation with real-time feedback, peer accountability, leadership visibility, and transparent data reporting. Each element reinforces the others. Programs that rely on any single intervention rarely sustain compliance above 85%.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic7",
      baseQuestion: "A surgical site infection rate for colon procedures is 8.2% - more than double the NHSN risk-adjusted benchmark of 3.7%. The surgical team confirms that pre-operative antibiotics are consistently given within the 60-minute window and glucose is controlled perioperatively. What other SSI bundle element is most likely being omitted?",
      baseOptions: [
        "Post-operative wound culture - all SSIs should be cultured to identify responsible organisms",
        "Both B and C are commonly omitted elements that independently increase SSI risk and would each be worth investigating",
        "Appropriate hair removal technique - razor shaving versus clipping significantly increases SSI risk, and is a commonly overlooked bundle element even when antibiotic timing is optimized",
        "Both B and C are commonly omitted elements that independently increase SSI risk and would each be worth investigating"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Elevated SSI rates despite documented antibiotic and glucose compliance point to other bundle elements. Both inappropriate hair removal (shaving versus clipping) and failure to maintain normothermia are independent SSI risk factors that are often overlooked when antibiotic timing receives all the attention. A full bundle audit should assess all elements: antibiotics, glucose, hair removal, normothermia, and surgical team hand hygiene.",
      baseXp: 20,
      followUps: [
        {
          question: "An audit finds that 34% of colon cases involve razor shaving by patient preparation staff, and intraoperative temperatures below 36°C are documented in 28% of cases with no corrective action. Both findings were visible in existing data but had never been aggregated and reviewed. What does this represent?",
          options: [
          "Random clinical variance - SSI risk factors are multifactorial and individual cases cannot be attributed to specific preventable causes like shaving technique and perioperative temperature management without prospective randomized study data",
          "A surveillance and data integration failure - the SSI bundle elements were being collected in separate systems but never analyzed together, meaning the quality program was blind to preventable risk factors that explained the elevated rate. JC expects that SSI data is used to drive improvement through integrated analysis",
          "A finding limited to the surgical prep staff - the operating room team cannot control what happens in pre-operative preparation areas, and responsibility for these preventable SSI factors belongs to the perioperative services department",
          "Documentation errors - the actual rates of shaving and hypothermia are likely lower than the audit found because staff may have used alternative prep methods or active warming that were not captured in the chart review process used",
        ],
          correctIndex: 1,
          explanation: "When preventable SSI risk factors are documented in existing data but never aggregated for review, the quality surveillance system has failed. JC expects that SSI data informs ongoing improvement - and that improvement requires identifying modifiable contributors. Siloed data collection without integrated analysis is a common root cause of elevated infection rates that persist despite 'compliance' with individual elements.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic8",
      baseQuestion: "A patient with active C. difficile infection is placed on Contact Precautions. The patient's room has a hand sanitizer dispenser at the door that nursing staff use when exiting. A surveyor observes this and stops to discuss it with the team. What is the compliance concern?",
      baseOptions: [
          "No concern - hand sanitizer is the standard accepted hand hygiene method for Contact Precautions and is appropriate for use when exiting patient rooms to prevent cross-contamination",
          "Alcohol-based hand sanitizer is not effective against C. difficile spores - soap and water handwashing is required after caring for C. diff patients, because alcohol does not eliminate spores and can spread them",
          "The concern is that hand sanitizer was not used before room entry - post-exit hand hygiene is a secondary priority for Contact Precautions and does not require soap and water specifically",
          "Contact Precautions require double gloving and extended PPE protocols - single glove use is the compliance concern, not the type of hand hygiene product used at the door",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "C. difficile produces spores that are resistant to alcohol-based hand sanitizers. After caring for C. diff patients, soap and water handwashing is required - mechanical friction removes spores in a way that alcohol cannot. Using hand sanitizer only after C. diff patient care is a recognized compliance and safety failure that can spread spores to other patients.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit manager argues that the hand hygiene policy posted in the unit says 'use hand sanitizer or soap and water as appropriate' and does not specifically mention C. difficile. What does this policy gap represent?",
          options: [
          "A documentation technicality that does not affect compliance because nurses have adequate clinical knowledge of organism-specific precautions and can apply correct hand hygiene methods regardless of whether the policy explicitly mentions each organism.",
          "A policy deficiency - infection prevention policies must specifically address organism-specific exceptions to standard hand hygiene agents, and the absence of this guidance creates a training and compliance gap that puts patients at risk",
          "An acceptable policy framework because the phrase 'as appropriate' grants nurses sufficient clinical judgment to select the correct hand hygiene method based on the clinical situation and their understanding of infection prevention principles.",
          "A policy gap that should be addressed at the next scheduled annual policy review cycle when comprehensive updates to all infection prevention standards are systematically implemented across the facility.",
        ],
          correctIndex: 1,
          explanation: "Policies that rely on staff clinical knowledge to fill in organism-specific exceptions are insufficient. Not all nurses have detailed microbiological knowledge about C. diff spore resistance. The policy must explicitly state that soap and water is required for C. diff patients. A policy gap that creates ambiguity in infection prevention is a JC-citable finding because it leaves critical precaution guidance to individual interpretation.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic9",
      baseQuestion: "Three ICU patients develop BSIs with the same rare organism within a 10-day period. The infection preventionist initiates an outbreak investigation. What is the correct sequence of initial steps?",
      baseOptions: [
          "Immediately culture all patients and staff in the ICU, then implement universal Contact Precautions for the entire unit and document all findings in the outbreak investigation log before proceeding with hypothesis generation or control measure implementation",
          "Define the case (organism, time period, affected population), identify and confirm additional cases through active surveillance, hypothesize transmission routes based on the case cluster, implement control measures appropriate to the hypothesized transmission route, and report to public health if indicated",
          "Request environmental cultures of all ICU surfaces immediately before implementing any patient-focused measures, and simultaneously notify all clinical staff members to heighten awareness and document any additional suspected cases they may have encountered",
          "Notify the medical staff and request voluntary behavioral changes before implementing formal investigation steps, including reviewing aseptic technique compliance and evaluating individual clinician practices in the affected patient care areas",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "An outbreak investigation follows an epidemiological framework: define the case, confirm cases, establish an epidemic curve, generate transmission hypotheses based on the cluster pattern, implement interim control measures, test the hypothesis, and report as required. Jumping to environmental cultures or mass staff cultures before defining the case and hypothesis wastes resources and misses the systematic analysis needed to identify the source.",
      baseXp: 20,
      followUps: [
        {
          question: "The investigation identifies a shared PICC line insertion kit supplier as the probable source - the same lot of chlorhexidine preparation applicators was used for all three patients. What must the infection preventionist do immediately?",
          options: [
          "Complete the investigation report and document all findings thoroughly before notifying the supplier or regulatory agencies, as external communication should follow internal documentation and administrative review procedures",
          "Quarantine remaining kits from the implicated lot, notify the supply chain and risk management, report to the FDA MedWatch program as a device-related adverse event, and consult with public health to determine if additional facilities received the same lot",
          "Continue using the kits while awaiting laboratory confirmation of contamination, as circumstantial evidence alone is insufficient to remove a supply from service without definitive microbiological evidence linking the product to patient harm",
          "Notify the supplier's sales representative and allow them to conduct their own investigation before taking regulatory action, because the manufacturer has responsibility for quality assurance and should lead the root cause analysis",
        ],
          correctIndex: 1,
          explanation: "When an implicated medical supply is identified in an outbreak, immediate quarantine and reporting are required - investigation does not need to be complete before action is taken to protect additional patients. FDA MedWatch reporting is required for suspected device-related adverse events. Public health notification allows investigation of whether other facilities received the same lot and may have unreported cases.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic10",
      baseQuestion: "A respiratory therapy department uses one portable large-volume medication nebulizer to deliver treatments to multiple patients, rinsing with sterile water between patients. A surveyor observes this practice and flags it. What is the concern?",
      baseOptions: [
          "No concern - rinsing with sterile water between patient uses is the standard accepted reprocessing method for portable nebulizers in respiratory therapy departments",
          "Portable nebulizers must be patient-dedicated - rinsing between patients does not eliminate bacterial contamination, particularly Pseudomonas aeruginosa, which can colonize nebulizer reservoirs and cause pneumonia in subsequent users",
          "The concern is the use of sterile water rather than distilled water; distilled water is the correct rinsing agent for nebulizers shared among multiple patients in the same unit",
          "The practice is acceptable for non-immunocompromised patients but would require additional precautions in oncology units or transplant services where immunocompromised populations receive care",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Large-volume nebulizers used in respiratory therapy must be patient-dedicated - they cannot be safely decontaminated with simple rinsing between patients. Pseudomonas and other water-loving organisms colonize reservoir surfaces, and rinsing does not achieve the disinfection level required to prevent transmission. Each patient must receive their own nebulizer, and reusable devices must undergo high-level disinfection between patients if shared use is absolutely unavoidable.",
      baseXp: 20,
      followUps: [
        {
          question: "The respiratory therapy director points out that the facility's policy states 'nebulizers should be rinsed between patients when possible.' This policy has been in place for seven years. What are the implications of this policy for the facility's IC program?",
          options: [
          "The policy provides protection - the 'when possible' language gives staff discretion to use judgment in individual patient situations, and the policy demonstrates good faith effort to balance infection control with operational realities, which represents an acceptable standard of care given the facility's resources",
          "The policy represents a fundamental IC program failure - a written policy that explicitly permits a practice known to transmit respiratory pathogens (shared un-disinfected nebulizers) means the IC risk assessment failed to identify this risk. The policy must be corrected immediately and an audit conducted to determine patient harm attributable to the practice",
          "The policy is acceptable - the IC committee approved it seven years ago and has maintained it through annual re-reviews, indicating that senior infection control leadership has determined the policy appropriately addresses the facility's clinical needs and operational constraints",
          "The policy finding is limited to the respiratory therapy director who signed the most recent policy review and is responsible for ensuring compliance with written protocols, making this an individual performance issue rather than a systemic infection control program failure",
        ],
          correctIndex: 1,
          explanation: "A written policy that codifies an unsafe practice is worse than no policy - it institutionalizes the risk. An IC program should identify and prohibit known transmission pathways. A seven-year-old policy permitting shared nebulizers indicates the IC risk assessment has not kept pace with evidence. JC would find both the practice and the policy deficient, and would expect a review of whether patients were harmed during the period the unsafe policy was in effect.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic11",
      baseQuestion: "A hospital's fit-test records show that 23 of 112 employees who work in areas requiring N95 respirator use have expired fit tests (more than 12 months old). The respiratory protection program coordinator argues that fit tests are 'only required annually or when there is a significant change in weight or facial structure.' What is the compliance concern?",
      baseOptions: [
          "No concern - the coordinator's description of the 12-month fit test interval is accurate and consistent with OSHA respiratory protection standards for routine use cases",
          "Annual fit testing means within 12 months - 23 employees with tests that have lapsed beyond 12 months means they are currently using N95 respirators in high-risk areas without current fit verification, which is a direct compliance failure",
          "Fit testing is only required for N95 use during active disease outbreaks or confirmed airborne transmission situations - routine respiratory protective equipment use does not require annual fit testing",
          "The concern is only valid if the employees are assigned to care for confirmed airborne infection patients - fit testing status is not relevant for employees using respirators for routine occupational exposure",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "OSHA's Respiratory Protection Standard (29 CFR 1910.134) requires fit testing at least annually. Employees with lapsed fit tests are working in required-respirator areas without current verification that their respirator achieves an adequate face seal. Any seal deficiency means the N95 is not providing its intended protection. This is a direct compliance failure that puts both employees and patients at risk.",
      baseXp: 15,
      followUps: [
        {
          question: "To resolve the compliance gap quickly, the manager proposes having all 23 employees do a 'user seal check' before each use as an alternative to formal fit testing while scheduling makeup fit tests over the next 6 weeks. Is this approach acceptable?",
          options: [
          "Yes - user seal checks are an OSHA-recognized alternative to formal fit testing for employees with expired tests, and a documented 6-week remediation plan with interim seal checks satisfies compliance requirements for all respiratory protection scenarios and high-risk patient care areas",
          "No - user seal checks are a required daily practice in addition to fit testing, not a substitute for it. Employees with expired fit tests should not use N95 respirators in high-risk areas until their fit test is current, unless there is a documented emergency situation that requires alternative protective measures with enhanced monitoring",
          "Yes - a 6-week remediation plan with interim seal checks satisfies OSHA requirements as long as the plan is documented in the employee health records and communicated to all staff members working in high-risk patient care areas including TB isolation and respiratory precaution units",
          "Partially acceptable - user seal checks are sufficient for non-pandemic respiratory precautions but not for TB or novel pathogen settings, and may be used as interim measures while fit testing is being scheduled for all affected employees within the organization",
        ],
          correctIndex: 1,
          explanation: "User seal checks confirm that a properly fitted respirator is seated correctly on a given day - they test the seal in the moment, not whether the mask model fits the employee's face shape. Only a formal fit test can verify that a specific respirator model provides adequate protection for a specific employee's facial geometry. OSHA does not accept user seal checks as a substitute for annual fit testing.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic12",
      baseQuestion: "An endoscope reprocessing unit's records show that flexible bronchoscopes are being stored in a vertical hanging cabinet with the insertion tube tip touching the cabinet floor. The reprocessing technician states the scopes are fully reprocessed before storage. What is the concern?",
      baseOptions: [
          "No concern - once high-level disinfection and sterilization processes are complete, the actual storage position and configuration do not materially affect scope safety or patient risk.",
          "Bronchoscopes must be stored hanging vertically with the distal tip free - a tip touching the cabinet floor can retain moisture and harbor residual organisms including Pseudomonas, creating recontamination risk and potential for patient infection during subsequent use",
          "The primary concern is the use of vertical rather than horizontal storage configuration, as scopes should be coiled horizontally to prevent potential kinking or damage to internal channels.",
          "Scope storage positioning and configuration is not specifically addressed under JC compliance standards and falls entirely under manufacturer guidelines and AORN recommendations without JC citation authority.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Post-reprocessing scope storage is a recognized infection risk. Scopes must hang freely, with the distal tip not touching any surface. Any contact point can re-introduce moisture and organisms. Retained moisture in internal channels promotes biofilm formation. Inadequate drying and improper storage are among the most common causes of endoscope-associated outbreaks. JC and SGNA guidelines both address proper storage as part of the reprocessing program.",
      baseXp: 15,
      followUps: [
        {
          question: "The GI unit's reprocessing log shows that 18% of scope reprocessing cycles had a 'manual cleaning time' of less than 60 seconds, when the manufacturer requires a minimum of 5 minutes of manual cleaning before high-level disinfection. What does this represent?",
          options: [
            "A documentation problem - manual cleaning time may have been performed correctly but not accurately recorded",
            "A critical reprocessing failure - manual cleaning removes bioburden that high-level disinfectants cannot penetrate. Inadequate manual cleaning renders HLD ineffective regardless of the chemical concentration or contact time achieved. An 18% rate of insufficient manual cleaning means a significant proportion of scopes are being used on patients without adequate decontamination",
            "A workflow efficiency issue - 60 seconds of manual cleaning is sufficient for most routine procedures and 5 minutes is an overly conservative manufacturer recommendation",
            "Acceptable variance - reprocessing standards allow up to 20% deviation from manufacturer guidelines before a finding is generated"
          ],
          correctIndex: 1,
          explanation: "Manual cleaning is the most critical step in endoscope reprocessing - it physically removes blood, tissue, and biofilm that chemical disinfectants cannot penetrate. The manufacturer's minimum cleaning time is based on validation studies confirming what is required to achieve adequate bioburden reduction. Cutting cleaning time to 60 seconds invalidates the reprocessing cycle. This is a patient safety crisis, not a documentation issue, and requires immediate workflow correction and patient notification assessment.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic13",
      baseQuestion: "A hospital's water management program log shows no Legionella culture results for the past 14 months, and the last water temperature survey found three dead-end distribution lines with stagnant water at temperatures between 78°F and 92°F. What is the significance of this finding?",
      baseOptions: [
          "Low significance - Legionella risk is primarily associated with cooling towers and air handling systems, not domestic water distribution or storage systems in patient care areas",
          "High significance - stagnant warm water (77-108°F) in dead-end lines is the primary environmental niche for Legionella proliferation. Absence of culture surveillance over 14 months means the facility has no current data on Legionella colonization in a clearly high-risk configuration",
          "Moderate significance - Legionella risk only becomes critical in immunocompromised patient populations such as transplant and oncology units; standard medical-surgical units and general patient care areas are at lower risk from environmental water colonization",
          "The finding is significant only if there has been a confirmed case of healthcare-associated Legionnaire's disease or respiratory infection in the facility; environmental findings alone without clinical cases do not require immediate remediation",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "ASHRAE 188 and CMS require healthcare facilities to implement a water management program with monitoring - including Legionella culture surveillance. Dead-end lines with stagnant water in the 77-108°F temperature range represent optimal Legionella growth conditions. A 14-month gap in culture surveillance in the context of identified high-risk conditions means the facility does not know whether patients are being exposed to Legionella from their water system.",
      baseXp: 20,
      followUps: [
        {
          question: "Following the finding, the facilities director argues that Legionella cultures are 'expensive and logistically complex.' The water management team proposes monitoring water temperature as a proxy for Legionella risk instead of culturing. Does temperature monitoring satisfy the water management program requirement?",
          options: [
          "Yes - maintaining hot water above 122°F and cold water below 68°F is a validated control measure that eliminates the need for culture surveillance because these temperature parameters prevent Legionella survival and reproduction in the water system",
          "No - temperature monitoring is a control measure, not a monitoring tool for the presence of Legionella. Water management programs require both control measures (temperature, biocide) and validation through culture or qPCR testing that confirms the controls are achieving their intended effect. Temperature alone does not confirm absence of colonization",
          "Yes - ASHRAE 188 standard explicitly identifies temperature control as the primary and sufficient monitoring tool for Legionella in domestic water systems and does not require culture testing when temperature parameters are consistently maintained",
          "Temperature monitoring is sufficient for facilities without transplant, oncology, or intensive care populations - higher-risk facilities with immunocompromised patients require culture surveillance because these patients face greater risk from Legionella colonization despite adequate temperature control measures",
        ],
          correctIndex: 1,
          explanation: "Temperature monitoring tells you whether your control parameters are being maintained - it does not tell you whether Legionella is present. Water management programs must include validation testing (culture or equivalent) to confirm that controls are achieving the intended outcome. A program that monitors temperature but never cultures may be operating with controlled conditions that are nonetheless failing to prevent colonization, without any knowledge that the risk exists.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic14",
      baseQuestion: "During a tracer, a surveyor asks the infection preventionist to describe the annual IC risk assessment process. The IP states that the risk assessment is completed using a template that has not changed in four years and includes the same risk categories each year. The IP acknowledges that a new oncology bone marrow transplant unit opened 18 months ago. What is the concern?",
      baseOptions: [
          "No concern - a consistent template ensures year-over-year comparability of risk data and maintains standardized documentation across all infection prevention assessments and surveillance activities throughout the organization",
          "The risk assessment has not been updated to reflect a significant organizational change - the opening of a BMT unit introduces new IC risks (aspergillosis, CMV reactivation, immunocompromised host environment) that should have been incorporated into the risk assessment when the unit opened",
          "The concern is that a template is being used at all - risk assessments should be conducted entirely de novo each year without any reference to prior-year frameworks or historical data to ensure truly independent clinical evaluation and avoid bias",
          "The risk assessment process is acceptable as long as infection rates in the BMT unit are being tracked in the facility's surveillance data and reported to the infection prevention committee monthly or quarterly for review",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "The IC risk assessment must be updated when significant organizational changes occur - not just annually. Opening a bone marrow transplant unit is a major change that introduces unique, high-stakes infection risks. An 18-month delay in updating the risk assessment means the IC program may not have the resources, policies, and surveillance activities in place to protect this high-risk population. JC expects the risk assessment to drive the IC program priorities and resource allocation.",
      baseXp: 15,
      followUps: [
        {
          question: "The BMT unit has had two cases of probable healthcare-associated aspergillosis in the past year, each attributed to 'environmental exposure of unknown origin.' The IC risk assessment done before the unit opened did not include a protective environment (PE) room assessment or air quality monitoring protocol. What does this suggest about the program?",
          options: [
          "The aspergillosis cases are not related to the IC program gap - aspergillosis in BMT patients is an expected opportunistic infection regardless of environmental controls because the immunosuppression required for transplant engraftment creates unavoidable infection risk that cannot be mitigated through facility design.",
          "The IC program failed to anticipate and mitigate the primary environmental risk for BMT patients. Protective environment rooms with HEPA filtration and positive pressure, along with air quality monitoring, are required IC measures for this population. The program gap may have directly contributed to patient harm, and a retrospective investigation of both cases is required",
          "The risk assessment failure is an administrative issue - the clinical team bears responsibility for aspergillosis prevention through antifungal prophylaxis, antimicrobial stewardship, and patient care practices rather than through environmental controls managed by the IC program or facilities department.",
          "Two cases in one year is within expected statistical variance for BMT populations and does not represent a meaningful outbreak - no IC program finding or intervention should be inferred from this rate because case clusters of this size occur by chance in immunocompromised patient populations.",
        ],
          correctIndex: 1,
          explanation: "Healthcare-associated aspergillosis in BMT patients is a preventable HAI when protective environment measures are properly implemented. An IC program that did not anticipate and plan for this risk when opening a BMT unit has a structural gap. The two cases require retrospective root cause analysis to determine whether the PE environment was inadequate (HEPA filtration, positive pressure, sealed construction) and what corrective measures are required. 'Unknown environmental exposure' is not an acceptable final determination - it is a starting point for investigation.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic15",
      baseQuestion: "An employee health program records show that 34% of clinical staff have not received the current season's influenza vaccine and have not signed a declination form. The employee health manager says 'we offer it - we can't force people.' What does JC require in this situation?",
      baseOptions: [
          "JC requires only that influenza vaccine be offered to clinical staff - documentation of refusal is not required and the 34% unvaccinated rate does not represent a compliance finding under current standards",
          "JC requires that facilities have a program that ensures all staff either receive the influenza vaccine or sign a declination - staff who have done neither are outside the program's tracking system, which is itself a compliance gap",
          "JC only requires vaccination programs for staff with direct patient contact in high-risk areas such as ICU, oncology, and transplant services - general clinical and support staff are outside the scope of requirements",
          "JC defers entirely to state law on healthcare worker influenza vaccination requirements - the manager's approach is acceptable in states that do not mandate vaccination or formal declination documentation",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires a structured influenza vaccination program that ensures every staff member either receives the vaccine or formally declines. Staff who have done neither represent a program management failure - they are unaccounted for. The program must track each employee to a documented outcome. An unvaccinated, non-declination rate of 34% means a third of clinical staff are not in the program at all, which is a compliance finding independent of whether the state mandates vaccination.",
      baseXp: 15,
      followUps: [
        {
          question: "The employee health manager proposes closing the compliance gap by marking all unaccounted employees as 'declinations' in the system to achieve 100% documentation. Is this approach acceptable?",
          options: [
          "Yes - documenting all unaccounted employees as declinations is a pragmatic solution that achieves 100% documentation compliance and removes the administrative gap from performance metrics without requiring additional follow-up contact with staff members who may have already received vaccination elsewhere",
          "No - falsifying records by marking employees as having declined a vaccine they were never asked about is documentation fraud. The correct approach is to contact each unaccounted employee, offer the vaccine, and obtain a signed declination if they refuse. Creating false records to satisfy a compliance metric is a reportable integrity violation",
          "Partially acceptable - this approach is permissible for employees hired after September 1 who may have missed the initial program enrollment period and should be offered the vaccine during their onboarding process with documentation of the offer and their response",
          "Yes - the end of influenza season makes the retrospective documentation process acceptable since the vaccination opportunity has passed and marking unaccounted employees as declinations satisfies the annual compliance requirement without additional clinical burden",
        ],
          correctIndex: 1,
          explanation: "Falsifying compliance records - even to close a gap in an administrative program - is a serious integrity violation. It is categorically unacceptable. The correct remediation requires actually contacting unaccounted employees, offering vaccination (even if late in the season), and obtaining authentic declination signatures from those who refuse. If some employees cannot be contacted, that fact should be documented honestly with the date and method of attempted outreach.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic16",
      baseQuestion: "A patient is placed in an airborne infection isolation room for suspected tuberculosis. Fourteen hours later, the test result confirms TB. Review reveals that during those 14 hours, four staff members entered the room without N95 respirators - two believed the patient had a routine respiratory illness and two were unaware of the precaution order. What systemic failures does this reveal?",
      baseOptions: [
          "Individual training failures for the four staff members who entered without appropriate PPE - focused retraining on airborne precaution protocols and N95 fit verification is the primary corrective action to prevent future similar incidents",
          "At minimum three systemic failures: (1) the clinical communication system did not reliably notify all staff of the precaution status before room entry, (2) the physical environment lacked a clear real-time precaution indicator visible at the room entrance, and (3) there was no point-of-entry prompt requiring N95 verification before entering the room",
          "A single documentation failure occurred when the airborne precaution order was not entered into the EHR promptly enough for all staff members to view it during their shift, preventing timely awareness before they entered the patient's room without appropriate protection",
          "Two systemic failures: (1) physician order entry delay for the precaution status and (2) nursing failure to communicate the new precaution requirements to all staff at the shift change briefing, including both unit-based nurses and ancillary departments",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "When multiple staff from different roles enter an isolation room without appropriate PPE, the failure is systemic, not individual. Three independent barriers should have prevented these entries: real-time visual precaution indicators at the room door, communication systems that flag precaution status in EHR views, and point-of-entry prompts (PPE supply or a visual check system). When all three are absent or failed, the individual staff members walked into a danger zone without being warned. The root cause is a system that depended on word-of-mouth communication.",
      baseXp: 20,
      followUps: [
        {
          question: "Exposure assessment confirms that two of the four staff members had extended close-contact exposure (>15 minutes within 3 feet) without N95 protection. What must the facility do for these employees?",
          options: [
          "Offer TB testing at 8 weeks post-exposure only, as initial testing within 2-3 weeks typically produces false-negative results. Symptom development during the window period will be the primary trigger for clinical evaluation and initial testing should be deferred until window period closes.",
          "Initiate TB exposure follow-up protocol: obtain baseline TB testing (IGRA or TST) within 2-3 weeks, repeat at 8-10 weeks, assess for symptoms, provide counseling on TB transmission and signs of disease, and document the occupational exposure in their employee health record. Reportable exposure events may require public health notification depending on state regulations",
          "Reassure the employees that single-exposure infection risk from one confirmed TB patient is statistically rare in healthcare settings. Follow-up testing is not required unless the source patient's culture results specifically confirm drug-resistant or extensively drug-resistant TB strains.",
          "Offer prophylactic isoniazid therapy immediately to both employees without baseline testing, since documented close-contact exposure to a confirmed TB patient warrants preventive treatment independent of individual baseline test results and symptom status.",
        ],
          correctIndex: 1,
          explanation: "Healthcare worker TB exposure requires a structured occupational health response regardless of the probability of infection. Baseline testing establishes whether the worker was already infected before exposure. Follow-up testing at 8-10 weeks detects new infection that may have resulted from the exposure. Documentation of the occupational exposure is required. Isoniazid prophylaxis is only indicated after positive testing indicates latent TB infection, not preemptively after exposure without test results.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic17",
      baseQuestion: "An infection preventionist reviews CAUTI data and finds 2.1 infections per 1,000 catheter days - above the benchmark of 1.3. Chart review shows that 41% of catheterized patients have no documented indication for catheter placement in the nursing or physician notes. What is the primary driver of the elevated CAUTI rate?",
      baseOptions: [
          "Inadequate catheter maintenance protocols — while insertion and maintenance bundles are important, the 41% rate of undocumented indications represents a fundamental gap in clinical decision-making that directly contributes to unnecessary catheterization and elevated CAUTI rates despite bundle compliance efforts",
          "Inappropriate catheter use - the most effective CAUTI prevention strategy is reducing catheter utilization by ensuring indications are documented and reviewed daily. A 41% rate of undocumented indications suggests catheters are being placed without clear clinical justification and likely retained beyond their need",
          "The benchmark is not risk-adjusted for the patient population, making comparison problematic — a medical-surgical benchmark cannot be appropriately applied to a mixed acuity unit with potentially different patient risk profiles and catheterization patterns that would naturally result in higher infection rates",
          "Insertion technique failures are likely the primary driver — bundle compliance data regarding aseptic insertion protocols, hand hygiene adherence, and sterile field maintenance during catheter placement would need to be reviewed before attributing the elevated rate to issues of inappropriate catheter use or retention",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "The most effective CAUTI prevention strategy is avoiding unnecessary catheter placement and ensuring early removal - this is more impactful than any insertion or maintenance bundle element. A 41% rate of undocumented indications strongly suggests many catheters are in place without clear clinical need. The correlation between high utilization ratio and CAUTI rate is well-established. Catheter utilization review and nurse-driven removal protocols are the primary interventions.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit implements a nurse-driven catheter removal protocol that allows nurses to remove catheters that no longer meet defined indications without a separate physician order. After 60 days, catheter utilization drops 31% and the CAUTI rate falls to 0.9. A physician on the unit objects, saying 'nurses should not be removing my catheters without my order.' How should leadership respond?",
          options: [
          "Suspend the protocol pending medical staff approval - physician authority over catheter management overrides a nurse-driven protocol and should be restored to ensure all removal decisions are made by the attending physician regardless of clinical indicators",
          "Affirm the protocol - evidence-based nurse-driven removal protocols are a recognized best practice endorsed by JC, NHSN, and SHEA/IDSA guidelines. The 31% utilization reduction and 54% CAUTI rate reduction demonstrate patient benefit. Leadership should educate the objecting physician about the protocol's evidence base and the safety data from this implementation",
          "Modify the protocol to require verbal physician notification before removal - this preserves physician authority while allowing nurse-initiated action and provides documented communication that protects both the nursing staff and the medical staff from liability concerns",
          "Return to physician-only removal orders and address the CAUTI rate through enhanced insertion and maintenance bundles instead - this approach respects traditional physician authority while still achieving infection prevention goals through alternative bundle strategies",
        ],
          correctIndex: 1,
          explanation: "Nurse-driven catheter removal protocols have strong evidence support and are considered standard of care in CAUTI prevention. The outcomes data - 31% utilization reduction and 54% CAUTI rate improvement - demonstrate that the protocol is working. Leadership must support evidence-based protocols over individual physician preference, particularly when patient safety data supports the practice. The physician's concern should be addressed through education, not by dismantling an effective safety program.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ic18",
      baseQuestion: "During a PPE observation audit in a COVID-19 isolation unit, a surveyor watches a nurse doff PPE in the following sequence: remove gloves, remove gown, perform hand hygiene, exit room, remove N95, perform hand hygiene. What is the compliance concern with this sequence?",
      baseOptions: [
          "No concern exists with this sequence — removing the N95 in the hallway after exiting the room is an acceptable variation and represents standard practice in many facilities where anteroom space is limited or unavailable for all staff transitions",
          "The N95 respirator must be removed inside the anteroom or after fully exiting the isolation room but before entering the clean corridor - removing it in the hallway after room exit risks contaminating the clean corridor. Additionally, removing the N95 should occur before eye protection if both are worn, or in the correct facility-defined doff sequence",
          "Hand hygiene should be performed after removal of each individual PPE item throughout the sequence, not just after gloves and after exiting — the missing hand hygiene step after gown removal represents a critical gap in preventing cross-contamination and represents the primary compliance concern with this doff sequence",
          "The gown should be removed before removing gloves to prevent contamination of hands during gown removal — this sequencing error combined with the delayed N95 removal indicates the staff member was not following the correct facility-established PPE doff protocol and requires retraining on proper sequence and hand hygiene",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "PPE doffing sequence and location are critical to preventing self-contamination. The N95 or respirator should be removed in a designated area (anteroom, hallway transition zone) - not after entering a clean space - to prevent aerosolized contamination from potentially spreading to unprotected areas. The exact sequence varies by facility protocol, but the location of N95 removal relative to clean/dirty zones is consistently cited as a doffing compliance concern.",
      baseXp: 15,
      followUps: [
        {
          question: "The unit has an anteroom for PPE doffing. Review shows that 67% of staff skip the anteroom and doff in the hallway because the anteroom is 'cramped and inconvenient.' What should the IC and facilities teams address?",
          options: [
          "Accept the hallway doffing practice and adjust the written policy to reflect the actual workflow — staff are consistently choosing the hallway over the anteroom, suggesting the policy does not align with practical facility workflows and operational realities of the unit",
          "The IC team must reinforce the doffing location requirement; simultaneously the facilities team must address the design barrier - if the anteroom is too cramped for practical use, it must be redesigned or enhanced because the physical space is defeating the safety system. Compliance requires both behavioral reinforcement and environmental design that supports correct behavior",
          "Add more doffing space by removing furniture from the anteroom and improving lighting — staff behavioral compliance will improve when access is optimized and the space is more inviting, reducing the 67% bypass rate without requiring additional monitoring or surveillance infrastructure",
          "Institute a mandatory monitoring and observation program where a designated observer documents PPE doffing compliance on all shifts and provides immediate real-time feedback to staff — this accountability approach will change behavior and reduce the 67% bypass rate over time through corrective coaching",
        ],
          correctIndex: 1,
          explanation: "When 67% of staff consistently bypass a safety measure, the root cause is usually a process or environmental design failure, not individual non-compliance. If the anteroom is too small for practical use, it is functionally unavailable - staff correctly recognize it as impractical and adapt. The solution must address both the behavioral expectation (anteroom use is required) and the environmental barrier (anteroom design must support the behavior). Behavioral enforcement alone without fixing the design will not sustain compliance.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic19",
      baseQuestion: "An IC program's annual surveillance report shows that the hospital tracks CLABSI, CAUTI, MRSA, C. diff, and SSI. The infection preventionist reports all data to the performance improvement committee quarterly. A surveyor asks whether the IC program tracks ventilator-associated events (VAE). The IP says 'we don't have many ventilated patients, so we don't track it.' Is this reasoning acceptable?",
      baseOptions: [
          "Yes - VAE surveillance is only required in ICUs with more than 10 ventilated patient-days per quarter, so this facility's small volume of ventilated patients justifies focusing on the five current metrics without adding additional targets",
          "No - the decision to include or exclude a surveillance target must be based on a formal risk assessment that documents the population, event prevalence, and risk level. 'We don't have many' is not a documented risk assessment - it is a subjective judgment without data to support the decision",
          "Yes - VAE surveillance is optional for non-teaching hospitals; only academic medical centers and teaching facilities are required to track ventilator-associated events as a mandatory surveillance metric",
          "The reasoning is acceptable as long as the facility documents and reports to NHSN on at least four mandatory infection control metrics including CLABSI, CAUTI, MRSA bacteremia, and either C. difficile or SSI",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "IC surveillance scope must be determined through a formal risk assessment, not informal impression. Even if ventilated patient volume is low, the decision to exclude VAE surveillance must be documented and justified with data - patient volume, event rates, high-risk populations. 'We don't have many ventilated patients' without data is not a risk assessment. If VAE surveillance is omitted, the risk assessment must document the evidence supporting that exclusion.",
      baseXp: 15,
      followUps: [
        {
          question: "The IC committee decides to add VAE surveillance. The infection preventionist requests access to ventilator day denominators and clinical documentation from respiratory therapy. Respiratory therapy leadership declines, saying 'that data is ours and IC doesn't need access to unit-level clinical data.' How should this interdepartmental conflict be resolved?",
          options: [
          "The IC program should develop VAE surveillance without respiratory therapy data - administrative data on ventilator days and discharge dispositions alone can be used as a proxy for clinical denominators without direct access to clinical documentation from respiratory therapy",
          "Surveillance data access is an organizational responsibility, not a departmental permission. Leadership must establish that IC has authority to access clinical data across all departments as required for surveillance purposes - this is a governance issue that cannot be resolved at the department level. The IC director should escalate to the Chief Medical Officer or Quality leadership",
          "The IC program should submit a formal request to the data governance committee and await approval through established channels - departmental data ownership is a legitimate organizational concern that requires proper authorization and documentation before sharing clinical information across departments",
          "The infection preventionist should build a relationship with respiratory therapy leadership over time through collaborative meetings and shared quality improvement projects - access will follow once trust is established and the department understands the surveillance purpose and commitment",
        ],
          correctIndex: 1,
          explanation: "Infection surveillance requires access to clinical data across departmental boundaries - this is not optional. An organization where departments can veto IC's access to the data it needs for surveillance has a governance failure. The IC program director must escalate to organizational leadership, who must clarify that IC surveillance data access is an institutional obligation, not subject to departmental approval. JC would cite a lack of organizational support for the IC program as a finding.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ic20",
      baseQuestion: "A healthcare worker sustains a needlestick injury from a hollow-bore needle used on a patient with known HIV. The employee goes to the ED, where a nurse documents the exposure and provides basic wound care. The employee is sent home and told to follow up with their primary care physician. What elements of the post-exposure management protocol were likely not completed?",
      baseOptions: [
          "Nothing was missed - wound care and documentation are the required post-exposure steps. Following initial wound care and documentation in the ED, the occupational health department will coordinate any additional follow-up as part of routine post-exposure protocols managed outside the emergency department.",
          "Multiple elements were likely omitted: baseline HIV testing of the source patient (if not already known) and the exposed worker, initiation of HIV post-exposure prophylaxis (PEP) within 2 hours of exposure for maximum effectiveness, risk assessment by a clinician experienced in occupational exposure management, and enrollment in the facility's occupational health follow-up program",
          "The only missing element is a report to OSHA - bloodborne pathogen exposures require OSHA reporting within 24 hours. Once OSHA notification is completed and occupational health follow-up is arranged, the facility has fulfilled all post-exposure management requirements and no additional immediate interventions are required.",
          "The employee should have been offered PEP but sending to their primary care physician for follow-up is otherwise appropriate. The primary care physician can manage ongoing monitoring and coordinate with infectious disease specialists as needed, and this approach avoids unnecessary burden on the facility's occupational health resources.",
        ],
      baseCorrectIndex: 1,
      baseExplanation: "Needlestick injury with a known HIV-positive source requires time-sensitive response. PEP must begin within 2 hours for maximum effectiveness and should be initiated in the ED, not deferred to a primary care follow-up. Baseline HIV testing of the exposed worker establishes pre-exposure status. A clinician experienced in HIV PEP must assess the risk and prescribe the appropriate regimen. Sending the employee home without initiating PEP is a critical management failure.",
      baseXp: 20,
      followUps: [
        {
          question: "The facility does not have an on-call occupational medicine service. The ED physician is not familiar with HIV PEP regimens and feels uncomfortable prescribing them. What is the facility's responsibility in this situation?",
          options: [
          "The ED physician's discomfort is a legitimate reason to defer PEP - the employee should be instructed to go to an urgent care center the next morning. Urgent care facilities have greater availability of infectious disease consultation and can initiate PEP during morning hours when infectious disease specialists are more readily available by telephone.",
          "The facility must have a defined protocol that ensures any staff member with a significant bloodborne pathogen exposure receives timely PEP regardless of time of day or ED physician familiarity - this includes access to telephone consultation with an infectious disease specialist, a written PEP starter pack protocol authorized for ED initiation, and a clear escalation pathway. The absence of such a protocol is a preventable patient (employee) safety failure",
          "The CDC's National Clinician Consultation Center provides a 24/7 PEP hotline - the ED physician should call for guidance but the facility bears no additional responsibility. The availability of external consultation resources means the facility has met its obligation to ensure access to expertise, and relying on the physician to independently call for guidance is sufficient.",
          "The facility should document that PEP was not initiated due to physician unfamiliarity - good-faith documentation reduces liability for the missed treatment window. Clear documentation of the reason PEP was deferred protects the facility from liability claims and demonstrates that the decision was made with appropriate clinical reasoning.",
        ],
          correctIndex: 1,
          explanation: "A facility that employs staff but cannot ensure timely post-exposure management for bloodborne pathogen exposures has a fundamental occupational health program failure. JC, OSHA, and CDC guidance all expect facilities to have 24/7 protocols that enable timely PEP regardless of who is working. A written protocol with a starter pack that can be initiated by any ED physician (with phone consult backup from ID) is the standard of care. Institutional gaps that result in missed PEP windows represent preventable occupational harm.",
          expertXp: 30
        }
      ]
    }
  ]
};
