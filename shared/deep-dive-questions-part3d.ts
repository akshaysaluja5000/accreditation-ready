import type { DeepDiveLevel } from "./schema";

export const ddEocLevel: DeepDiveLevel = {
  id: "dd-eoc",
  name: "EOC & Safety Compliance Deep Dive",
  description: "Go deeper on environment of care, life safety, hazardous materials, and emergency management with expert-level branching questions.",
  icon: "Microscope",
  color: "hsl(210, 70%, 50%)",
  baseLevelId: "eoc_safety",
  questions: [
    {
      id: "dd-eoc1",
      baseQuestion: "During an Environment of Care round on a medical-surgical unit, you discover a storage room with boxes stacked within 18 inches of the ceiling-mounted sprinkler deflector. What is the MOST appropriate immediate action?",
      baseOptions: [
        "Document the finding and submit a work order for rearrangement within 30 days",
        "Immediately move items to maintain the required 18-inch clearance below sprinkler deflectors",
        "Contact the fire marshal to inspect the room before taking any action",
        "Close the storage room and prohibit access until facilities management responds"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 25 and Joint Commission PE.03 (formerly EC.02.03.05) require a minimum 18-inch clearance below sprinkler deflectors to ensure proper spray pattern. Items encroaching on this clearance must be corrected immediately as this is a direct life safety hazard that could impair sprinkler function during a fire.",
      baseXp: 15,
      followUps: [{
        question: "During your follow-up review, you find that this same storage room has had repeated sprinkler clearance violations documented on 3 of the last 4 quarterly EOC rounds. What systemic action should the EOC Committee take?",
        options: [
          "Install additional sprinkler heads to compensate for potential obstruction",
          "Assign a dedicated staff member to monitor the room daily",
          "Lock the room and restrict all access to supervisors only",
          "Conduct a root cause analysis and implement a storage space management"
        ],
        correctIndex: 3,
        explanation: "Repeated findings indicate a systemic issue requiring root cause analysis per the Joint Commission's leadership standards (LD.03.02.01). The EOC Committee should analyze why recurrence is happening, which may involve inadequate storage space, lack of staff education, or unclear ownership, and implement sustainable corrective actions with assigned accountability.",
        expertXp: 30
      },
      {
        question: "The root cause analysis reveals that the unit has insufficient storage space, and staff have been stacking supplies high out of necessity. Leadership approves a capital project to expand storage, but it will take 8 months. What interim compliance strategy is MOST appropriate?",
        options: [
          "Move all overflow supplies to another department's storage area without a formal agreement",
          "Implement a supply par-level reduction plan",
          "Accept the risk and document that a capital project is underway as mitigation",
          "Request a waiver from the Joint Commission for the 18-inch clearance requirement during the construction period"
        ],
        correctIndex: 1,
        explanation: "Joint Commission does not grant waivers for NFPA requirements. The organization must maintain compliance at all times, even while awaiting a capital solution. A multi-pronged interim strategy including par-level optimization, visual cues, regular audits, and clear accountability demonstrates the organization's commitment to sustained compliance and meets the expectations of PE.03 / LD.03.02.01. (Note: Effective January 1, 2026, the old EC and LS chapters were merged into the Physical Environment (PE) chapter. EC.02.03.05 is now covered under PE.03.)",
        expertXp: 30
      },
      {
        question: "A Joint Commission tracer surveyor visits the same unit 6 months later and asks to review your sprinkler clearance compliance data, including EOC round findings, corrective actions, and trend reports. The surveyor also interviews a floor nurse who is unaware of the 18-inch clearance rule. What is the surveyor MOST likely to cite?",
        options: [
          "Because the capital project demonstrates good-faith effort to resolve the issue",
          "A deficiency in EC.02.03.05 only, since the physical environment must meet NFPA standards",
          "Deficiencies in both EC.02.03.05 for inadequate corrective action effectiveness and HR.01.05",
          "A deficiency in staff education and competency under HR.01.05.03, since the nurse could not articulate the safety requirement"
        ],
        correctIndex: 2,
        explanation: "Joint Commission tracers evaluate both the physical environment and staff knowledge. When a recurring life safety deficiency is found alongside a frontline staff member who cannot describe the relevant safety requirement, it indicates failures in both the Physical Environment management program (PE.03, formerly EC.02.03.05) and the staff education/competency program (HR.01.05.03). Surveyors expect that corrective actions for recurring findings include staff education with demonstrated competency, not just physical fixes.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc2",
      baseQuestion: "A tracer surveyor asks to see your facility's deficiency tracking system for EOC rounds. Which element is MOST critical for demonstrating an effective program?",
      baseOptions: [
        "Evidence of timely resolution with documented follow-up and",
        "Color-coded spreadsheets showing open vs. closed items",
        "Photographs of all deficiencies taken during rounds",
        "A comprehensive list of every finding from the past five years"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Joint Commission standard EC.04.01.01 requires organizations to monitor conditions in the environment through a systematic process. The most critical element is demonstrating a closed-loop system where deficiencies are tracked to resolution with evidence of trend analysis to identify systemic issues and drive improvement.",
      baseXp: 15,
      followUps: [{
        question: "Your trend analysis reveals that 40% of EOC deficiency findings are related to blocked electrical panels. What is the BEST approach to address this trend?",
        options: [
          "Paint floor markings with 36-inch clearance zones around all electrical panels",
          "Issue disciplinary action to department managers where violations occur",
          "Add more electrical panels throughout the facility to reduce congestion",
          "Increase EOC round frequency from quarterly to monthly in affected areas"
        ],
        correctIndex: 0,
        explanation: "NFPA 70 (National Electrical Code) requires a minimum 36-inch clearance in front of electrical panels. Implementing visual cues such as floor markings combined with staff education addresses both awareness and compliance. This proactive approach is consistent with Joint Commission expectations for sustainable corrective actions rather than solely punitive or surveillance-based measures.",
        expertXp: 30
      },
      {
        question: "After implementing floor markings and education, your next two quarterly EOC rounds show blocked electrical panel findings dropped from 40% to 12% of total deficiencies. The EOC Committee considers the issue resolved. What additional step should be taken before closing this performance improvement initiative?",
        options: [
          "Continue monitoring for at least two more quarters to confirm sustained improvement",
          "Close the initiative immediately since the data shows significant improvement",
          "Increase the monitoring frequency to weekly inspections indefinitely",
          "Report the improvement to the Board of Trustees and close the initiative pending their approval"
        ],
        correctIndex: 0,
        explanation: "Joint Commission expects performance improvement initiatives to demonstrate sustained improvement before closure per PI.01.01.01. Two quarters of improvement is encouraging but does not confirm a sustained trend. The organization should continue monitoring to verify the improvement holds, ensure the visual cues remain visible over time, and hardwire the education into onboarding processes to prevent regression when new staff join.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission triennial survey, the tracer surveyor reviews your EOC deficiency database and notices that while individual findings are tracked and resolved, the annual EC management plan evaluation does not reference the trend data or demonstrate how findings drove changes to the plan. What standard is MOST likely to be cited?",
        options: [
          "PI.02.01.01 for not taking action on performance improvement opportunities",
          "EC.02.03.05 for failure to maintain life safety code compliance",
          "LD.03.02.01 for leadership failure to allocate resources",
          "EC.04.01.01 for failing to use monitoring data to improve the EC management plans"
        ],
        correctIndex: 3,
        explanation: "EC.04.01.01 requires that data from EOC monitoring activities, including deficiency trends, near misses, and incident reports, be used to evaluate and update the EC management plans annually. When trend data exists but is not integrated into the plan evaluation, it demonstrates a disconnect between monitoring and improvement. The surveyor expects a closed loop where data informs plan modifications, resource allocation, and objective setting for the coming year.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc3",
      baseQuestion: "While conducting a life safety code inspection, you notice an exit sign above a door in the emergency department is not illuminated. What is the regulatory requirement for exit sign illumination?",
      baseOptions: [
        "Exit signs only need to be illuminated during nighttime hours",
        "Exit signs must be illuminated at all times and visible from the exit access corridor",
        "Exit signs must be illuminated only during emergency conditions when main power fails",
        "Exit signs are required only in inpatient areas and can be unlit in the ED"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Per NFPA 101 Life Safety Code Section 7.10, exit signs must be continuously illuminated and visible from the direction of exit access. In healthcare occupancies, both internally illuminated and externally illuminated signs must maintain a minimum illumination of 5 foot-candles on the face of the sign. An unlit exit sign is an immediate life safety deficiency.",
      baseXp: 15,
      followUps: [{
        question: "Upon further investigation, you discover the exit sign battery backup has failed and the sign only works when connected to normal power. The exit leads to a required means of egress. What is the correct course of action?",
        options: [
          "Immediately replace or repair the sign, implement interim life safety measures",
          "Post a staff member at the exit to direct people during any power outage until repair is complete",
          "Shut down the exit and redirect traffic to an alternate exit until the sign is repaired",
          "Place a temporary battery-powered exit sign and submit a work order for repair within 72 hours"
        ],
        correctIndex: 0,
        explanation: "Per Joint Commission PE.03 (formerly EC.02.03.05), when a life safety code deficiency is identified, the organization must implement interim life safety measures (ILSM) until the condition is corrected. The sign must be repaired or replaced promptly, and the interim measures must be documented. Simply posting staff or closing a required exit does not meet the regulatory requirement for maintaining means of egress.",
        expertXp: 30
      },
      {
        question: "A facility-wide audit of exit signage reveals that 8 of 45 exit signs across the hospital have non-functional battery backups, though all signs illuminate on normal power. What systemic action is MOST appropriate?",
        options: [
          "Switch all exit signs to photoluminescent (glow-in-the-dark) models to eliminate battery dependency",
          "Connect all exit signs to the emergency generator circuit to eliminate the need for battery backup",
          "Replace only the 8 deficient signs and recheck all signs at the next annual inspection",
          "Implement a comprehensive exit sign preventive maintenance program with scheduled battery testing"
        ],
        correctIndex: 3,
        explanation: "An 18% failure rate indicates a systemic maintenance gap rather than isolated failures. NFPA 101 Section 7.9 requires emergency lighting (including exit signs with battery backup) to be tested for 30 seconds monthly and 90 minutes annually. Establishing a comprehensive PM program with scheduled testing, replacement cycles, and integration into regular life safety rounds addresses the root cause and prevents recurrence, which aligns with Joint Commission PE.03 (formerly EC.02.03.05) expectations for proactive management.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer, the surveyor walks the emergency department egress path and identifies an exit sign that is illuminated but partially obscured by a banner hung for a staff recognition event. The surveyor asks the charge nurse about the process for maintaining egress path visibility. The nurse is unsure who is responsible. What findings will the surveyor MOST likely document?",
        options: [
          "Findings under EC.02.03.05 for the obscured sign and EC.04.01",
          "A finding under EC.02.03.05 only for the obscured exit sign",
          "A finding under EC.02.06.01 for improper use of decorations in a healthcare occupancy",
          "Since the sign is illuminated and the banner is temporary"
        ],
        correctIndex: 0,
        explanation: "Joint Commission surveyors evaluate systems, not just individual findings. An obscured exit sign violates NFPA 101 Section 7.10 (PE.03, formerly EC.02.03.05), but the nurse's inability to describe a process for maintaining egress visibility suggests the organization lacks an effective monitoring system and has not ensured staff understand their life safety responsibilities (HR.01.05.03). Surveyors expect that all staff can articulate basic life safety principles relevant to their work area, including keeping exit signage visible.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc4",
      baseQuestion: "A Joint Commission surveyor asks a nurse on a med-surg unit where the Safety Data Sheets (SDS) for chemicals used in the department are located. What is the BEST response that demonstrates compliance?",
      baseOptions: [
        "SDS information is available electronically through our hospital intranet and can be accessed 24/7 by any staff member during their shift",
        "The SDS sheets are filed in the pharmacy department since they manage all chemicals",
        "The SDS binder is kept locked in the charge nurse's office for security purposes",
        "SDS information is available electronically through our hospital intranet and can be"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "OSHA's Hazard Communication Standard (29 CFR 1910.1200) and JC PE.02 (formerly EC.02.02.01) require that SDS be readily accessible to employees during their work shifts. Electronic access is acceptable as long as there are no barriers to immediate access, backup systems are available, and employees are trained on how to retrieve them. Locking SDS away or claiming no chemicals are used would be non-compliant.",
      baseXp: 15,
      followUps: [{
        question: "The surveyor then asks what would happen if the computer system went down and staff needed to access SDS information during a chemical spill emergency. How should your facility address this?",
        options: [
          "Staff should call the Poison Control Center for chemical information during system outages",
          "Chemical spill kits contain all necessary information so SDS access is not critical during emergencies",
          "A backup plan such as a physical SDS binder or offline access must be maintained and staff must",
          "The IT department is on-call 24/7 and can restore access within minutes"
        ],
        correctIndex: 2,
        explanation: "OSHA requires that SDS be accessible at all times, including during electronic system failures. Joint Commission expects a contingency plan for SDS access, which typically includes maintaining physical backup binders in accessible locations. Staff must be trained on the backup process as part of the Hazard Communication program. Relying solely on external resources or IT response times does not meet the immediate accessibility requirement.",
        expertXp: 35
      },
      {
        question: "During a chemical spill drill, the surveyor observes that staff correctly locate the electronic SDS and the backup binder. However, the SDS in the physical backup binder is dated 2019, while the electronic version was updated in 2023. What compliance concern does this raise?",
        options: [
          "As the backup binder is only used in emergencies and the electronic version is current",
          "Only the electronic version must be current; physical backups are exempt from update requirements",
          "The 2019 version is acceptable as long as the chemical formulation has not changed",
          "The outdated backup binder violates OSHA's requirement that all SDS be the most current version available"
        ],
        correctIndex: 3,
        explanation: "OSHA 29 CFR 1910.1200 requires that SDS reflect the most current hazard information available. A backup binder with outdated SDS could lead staff to use incorrect PPE, follow outdated first aid procedures, or misidentify hazards during an emergency when the electronic system is unavailable. The organization must establish a process to synchronize physical backup SDS with electronic updates, typically through a scheduled review and replacement cycle.",
        expertXp: 30
      },
      {
        question: "A Joint Commission tracer surveyor conducts interviews across five departments and finds that while all staff can locate SDS electronically, staff in two departments cannot name the specific hazardous chemicals used in their work area or describe the required PPE for those chemicals. The departments have documented annual HazCom training records. What is the surveyor's MOST likely finding?",
        options: [
          "A finding under EC.02.02.01 and HR.01.05.03 indicating that while training was completed",
          "A finding under EC.02.02.01 for inadequate chemical labeling in those departments",
          "Since staff can access SDS and training records are documented",
          "A finding under LD.03.02.01 for leadership failure to ensure a safe work environment"
        ],
        correctIndex: 0,
        explanation: "Joint Commission distinguishes between training completion and demonstrated competency. Staff who have completed HazCom training but cannot identify chemicals in their work area or describe required PPE demonstrate that training was not effective. The surveyor will cite both the hazardous materials management standard (PE.02, formerly EC.02.02.01) for program effectiveness and staff competency standards (HR.01.05.03) for failure to verify that training translated into actual knowledge. Documentation of training alone does not satisfy the competency requirement.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc5",
      baseQuestion: "Your facility's Emergency Management Committee is reviewing the annual drill schedule. Per Joint Commission requirements, how many emergency management exercises must a hospital conduct per year?",
      baseOptions: [
        "Two full-scale exercises per year involving all departments and community partners",
        "Four exercises per year, one per quarter, to ensure comprehensive hazard coverage",
        "Two per year, with one being a community-wide or",
        "One tabletop exercise per year is sufficient if it addresses all identified hazard vulnerabilities"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Joint Commission standard EM.03.01.03 requires hospitals to conduct two emergency management exercises per year. These exercises must be spaced appropriately and should test various aspects of the Emergency Operations Plan. At least one should be a community-based exercise or a functional exercise that includes an influx of simulated patients. If the organization activates its EOP in response to a real emergency, that activation may substitute for one of the required exercises.",
      baseXp: 15,
      followUps: [{
        question: "Your hospital experienced a real mass casualty incident 4 months ago and activated the Emergency Operations Plan. The Emergency Management Committee wants to count this as one of the two required annual exercises. What additional requirements must be met?",
        options: [
          "The event counts only if it involved a federally declared disaster",
          "The event can count only if a formal after-action report is completed that evaluates the EOP's",
          "Real events cannot count toward the exercise requirement; two separate drills must still be conducted",
          "The real event automatically counts; no additional documentation is needed beyond the incident report"
        ],
        correctIndex: 1,
        explanation: "Per Joint Commission EM.03.01.03, an actual emergency can count as one of the two required annual exercises, but only if the organization conducts a thorough post-incident critique (after-action report) that evaluates the response, identifies improvement opportunities, and modifies the EOP accordingly. The key is the learning and improvement cycle, not just the activation itself.",
        expertXp: 30
      },
      {
        question: "The after-action report from the mass casualty incident identifies that the hospital's patient tracking system failed during surge conditions, and communication between the ED and the incident command center broke down after 90 minutes. The committee plans to address these in the next exercise. What is the BEST exercise design approach?",
        options: [
          "Defer the targeted exercise to next year and focus this year's second exercise on a different hazard vulnerability",
          "Conduct a full-scale exercise replicating the exact same mass casualty scenario to test whether the failures recur",
          "Conduct a tabletop exercise discussing what went wrong, since a second full-scale exercise is resource-intensive",
          "Design a functional exercise specifically targeting patient tracking and communication systems under surge conditions"
        ],
        correctIndex: 3,
        explanation: "Joint Commission EM.03.01.03 expects exercises to be designed with specific, measurable objectives. When an after-action report identifies gaps, the subsequent exercise should target those gaps to test corrective actions. A functional exercise allows focused testing of specific systems (patient tracking, communications) under realistic conditions without the full resource burden of a complete mass casualty re-enactment. The exercise must include its own after-action evaluation to close the improvement loop.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer, the surveyor reviews your Emergency Management program and notes that both exercises this year were tabletop discussions, the Hazard Vulnerability Analysis (HVA) has not been updated in two years, and the after-action reports do not document specific EOP revisions made in response to identified gaps. What findings will the surveyor MOST likely cite?",
        options: [
          "A finding under EM.02.02.01 only for not updating the Emergency Operations Plan",
          "Finding if the facility can demonstrate that the tabletop exercises were rigorous and well-attended",
          "Findings under EM.03.01",
          "A single finding under EM.03.01.03 for insufficient exercise type variety"
        ],
        correctIndex: 2,
        explanation: "Joint Commission evaluates the entire emergency management program as an integrated system. EM.03.01.03 requires that at least one exercise involve a functional component or community participation, not just tabletop discussion. EM.01.01.01 requires an annual HVA update to reflect current threats. After-action reports must document specific EOP changes resulting from exercise findings to demonstrate the plan-do-check-act cycle. Multiple deficiencies across the program suggest a systemic weakness in emergency management oversight.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc6",
      baseQuestion: "A surveyor asks about your facility's fire drill documentation. In a healthcare occupancy with inpatients, how frequently must fire drills be conducted per shift?",
      baseOptions: [
        "Once per shift per quarter, totaling 12 total drills per year across all shifts",
        "Monthly on each shift, for a total of 12 drills per shift per year",
        "Quarterly per shift, totaling 4 drills per shift per year",
        "Semi-annually per shift with at least one unannounced drill per shift"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Per NFPA 101 and JC standards (EC.02.03.03 EP 3 for ambulatory; PE.03.01.01 EP 3 for hospitals), fire drills must be conducted at least quarterly on each shift - a minimum of 12 drills per year across three shifts. All drills must be unannounced, held at unexpected times, and conducted under varying conditions. As of March 1, 2026, two formerly required scheduling restrictions were eliminated: the rule that drills must be spaced at least one hour apart within the same quarter, and the rule requiring each quarterly drill to fall within plus or minus ten days of the last. These restrictions no longer apply. Documentation must include date, time, shift, participants, scenario, and any identified deficiencies with corrective actions.",
      baseXp: 15,
      followUps: [{
        question: "During a fire drill review, the surveyor notices that all drills on the night shift for the past year were announced in advance and conducted in the same nursing unit. What deficiency should be cited?",
        options: [
          "Drills should vary in location and scenario",
          "Deficiency; consistency in drill location ensures staff familiarity with procedures",
          "The only issue is that drills need to be on different units; announced vs. unannounced is not specified",
          "Night shift drills are optional since fewer patients are awake during those hours"
        ],
        correctIndex: 0,
        explanation: "JC and NFPA 101 require fire drills to realistically test actual staff response capabilities. All drills must be unannounced - not just a percentage of them - and must be conducted at unexpected times and under varying conditions. Conducting all drills in the same location and announcing them in advance defeats the purpose entirely. Drills should vary in location, timing, and scenario design to provide a meaningful and defensible assessment of the organization's fire response program.",
        expertXp: 25
      },
      {
        question: "After implementing varied drill locations and unannounced drills, the night shift fire drill results reveal that staff in two units consistently fail to demonstrate proper RACE (Rescue, Alarm, Confine, Extinguish/Evacuate) procedures, with the average response time to confine the fire area being 4 minutes. What corrective action is MOST appropriate?",
        options: [
          "Repeat drills monthly on those units until performance improves",
          "Reassign staff from those units to units with better fire response performance",
          "Conduct targeted re-education on RACE procedures for the affected units",
          "Install automatic fire door closure devices on those units to reduce reliance on staff response"
        ],
        correctIndex: 2,
        explanation: "Joint Commission expects organizations to use drill performance data to drive improvement. When specific units demonstrate deficient fire response, the corrective action should include targeted education, individual competency verification, peer support through fire safety champions, and follow-up assessment. Simply repeating drills without addressing the knowledge or skill gap is insufficient. Automatic door closures address only one element of RACE and do not substitute for competent staff response.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor conducts an unannounced tracer during an active fire drill on a med-surg unit. The surveyor observes that staff successfully execute RACE procedures, but when asked about horizontal evacuation procedures, the charge nurse cannot identify the adjacent smoke compartment or the location of the smoke barrier doors. The drill documentation does not include evacuation route evaluation. What will the surveyor MOST likely cite?",
        options: [
          "A finding under EC.02.03.05 for incomplete fire drill evaluation that does not assess evacuation preparedness",
          "Findings under EC.02.03",
          "A finding under EC.02.03.03 for inadequate fire safety education content",
          "Since the RACE procedures were correctly demonstrated"
        ],
        correctIndex: 1,
        explanation: "Healthcare occupancies rely on a defend-in-place strategy where horizontal evacuation to an adjacent smoke compartment is the primary evacuation method. NFPA 101 Section 18.7.1 and JC PE.03 (formerly EC.02.03.05) require that fire drills evaluate all aspects of fire response including evacuation. Staff inability to identify smoke compartment boundaries indicates both a drill program gap (drills not exercising evacuation procedures) and a staff knowledge gap. Joint Commission expects all clinical staff to know their evacuation routes and smoke compartment layout.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc7",
      baseQuestion: "Your facility is developing its Utility Management Plan. Which of the following components is REQUIRED per Joint Commission standards?",
      baseOptions: [
        "A plan developed solely by the facilities management department without clinical input",
        "A comprehensive plan addressing all utility systems including electrical, water",
        "A plan that addresses utility systems only in patient care areas",
        "A plan covering only electrical and water systems since these are the most critical utilities"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.05.01 requires a comprehensive utility management plan that addresses all utility systems critical to patient care and safety. This includes electrical distribution, emergency power, water supply, HVAC, medical gas and vacuum, plumbing, boiler/steam, and vertical transport (elevators). The plan must be developed with input from clinical staff who understand how utility failures impact patient care.",
      baseXp: 15,
      followUps: [{
        question: "During a utility system risk assessment, your team identifies that the medical gas alarm panel in the OR suite has been intermittently malfunctioning. The alarm activates but sometimes delays by 30 seconds. What is the appropriate response?",
        options: [
          "Monitor the alarm panel for one more week to determine if the delay is worsening before taking action",
          "The 30-second delay is within acceptable tolerance and does not require action",
          "Immediately implement manual monitoring procedures, notify anesthesia and surgical staff",
          "Switch to portable oxygen cylinders in the OR until the panel is replaced next quarter"
        ],
        correctIndex: 2,
        explanation: "Medical gas alarm systems are critical life safety systems governed by NFPA 99. Any malfunction in alarm notification must be addressed immediately with interim measures to ensure continuous monitoring of medical gas pressures. This includes notifying affected clinical staff, implementing manual monitoring protocols, expediting repair, and documenting all interim measures per EC.02.05.01.",
        expertXp: 35
      },
      {
        question: "Your facility's water management program identifies Legionella colonization in the hot water system serving a transplant unit. Culture results show colony counts above the action level. What is the MOST appropriate immediate response?",
        options: [
          "Implement immediate point-of-use filters on affected outlets in the transplant unit",
          "Add a standing order for Legionella urinary antigen testing for all patients on the affected unit",
          "Increase the hot water temperature at the heater to 160°F and flush all outlets for 30 minutes",
          "Close the transplant unit and transfer patients until Legionella is eradicated"
        ],
        correctIndex: 0,
        explanation: "Joint Commission standard EC.02.05.01 and CMS requirements mandate a comprehensive water management program that includes action plans for Legionella detection. Immediate point-of-use filters protect patients while systemic remediation occurs. The response must be coordinated between facilities, infection prevention, and clinical staff. Simply raising water temperature without point-of-use protection delays patient safety measures, and unit closure may be unnecessary if interim protections are effective.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer, the surveyor reviews your utility management program and discovers that while the facility conducts monthly generator testing and documents results, there is no evidence that utility system failures or near-misses from the past year were analyzed or that the utility risk assessment was updated to reflect a recent addition of a cardiac catheterization lab. What is the surveyor MOST likely to cite?",
        options: [
          "EC.02.05.05 for inadequate utility system maintenance",
          "EC.02.05.01 for failure to update the utility management plan and risk",
          "LD.03.02.01 for leadership failure to provide resources for the new cath lab's utility needs",
          "EC.02.05.07 only, for incomplete emergency power documentation"
        ],
        correctIndex: 1,
        explanation: "Joint Commission expects the utility management plan to be a living document that is updated whenever significant changes occur, such as adding a cardiac catheterization lab with unique power, medical gas, and HVAC requirements. EC.02.05.01 requires the plan to reflect current operations and risk assessments. EC.04.01.01 requires that utility incidents and near-misses be analyzed for trends and improvement opportunities. A program that performs routine testing but fails to adapt to operational changes or learn from incidents is incomplete.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc8",
      baseQuestion: "A construction project is being planned on the third floor adjacent to an active inpatient oncology unit. What is the FIRST step the organization must take before construction begins?",
      baseOptions: [
        "Notify patients on the unit that construction will begin soon",
        "Begin construction during night shifts to minimize patient disruption",
        "Install HEPA filtration in the oncology unit as a precautionary measure",
        "Conduct a pre-construction Infection Control Risk Assessment (ICRA) to"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "Joint Commission standard IC.02.02.01 requires a pre-construction Infection Control Risk Assessment (ICRA) before any construction, renovation, or demolition project. The ICRA evaluates the type of construction activity, the patient population at risk (oncology patients are high-risk/immunocompromised), and determines the appropriate class of precautions (Class I through IV) including barriers, negative pressure, HEPA filtration, and monitoring requirements.",
      baseXp: 15,
      followUps: [{
        question: "The ICRA determines that Class IV precautions are needed due to the adjacent immunocompromised patient population. Which of the following is a Class IV requirement?",
        options: [
          "Wet mopping of construction area at the end of each work day",
          "Hard barriers floor to ceiling with sealed seams",
          "Posting construction warning signs and limiting construction to business hours only",
          "Standard dust barriers with periodic HEPA vacuuming of the construction area"
        ],
        correctIndex: 1,
        explanation: "Class IV ICRA precautions are required for major construction/demolition near high-risk patient populations such as oncology, NICU, and transplant units. Requirements include hard barriers sealed from floor to deck (not ceiling tiles), negative air pressure within the construction zone, HEPA-filtered air exhausted outside or through the HVAC system, an anteroom/vestibule for worker entry/exit, and continuous monitoring of air quality. These measures prevent Aspergillus and other airborne pathogens from reaching vulnerable patients.",
        expertXp: 35
      },
      {
        question: "Two weeks into the construction project, infection prevention conducts routine air sampling adjacent to the Class IV barriers and finds elevated Aspergillus spore counts in the oncology unit corridor. What is the MOST appropriate immediate response?",
        options: [
          "Halt construction immediately, inspect all barriers for breaches",
          "Move all oncology patients to another unit and resume construction after the transfer is complete",
          "Apply additional sealant to the construction barriers and retest air quality in 48 hours",
          "Increase the frequency of air sampling to daily monitoring and continue the project"
        ],
        correctIndex: 0,
        explanation: "Elevated Aspergillus spore counts near immunocompromised patients represent a critical patient safety event. The response must be immediate and comprehensive: construction must stop to prevent further contamination, barrier integrity must be verified, the extent of airborne contamination must be assessed, supplemental protection for patients must be deployed, and clinical teams must evaluate at-risk patients. This aligns with IC.02.02.01 and the organization's duty to protect vulnerable patients from healthcare-associated infections.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor conducting an ICRA-focused tracer during an active construction project asks the contractor's foreman about infection control precautions. The foreman cannot describe the ICRA class level, negative pressure requirements, or the process for reporting barrier breaches. The surveyor also notes that the daily ICRA compliance log has gaps on 4 of the last 14 days. What findings are MOST likely?",
        options: [
          "Finding against the hospital if the construction contract specifies that the contractor is responsible for ICRA compliance",
          "A finding under IC.02.02.01 only, since the contractor is responsible for maintaining barriers",
          "A finding under HR.01.05.03 for failure to train the contractor",
          "Findings under IC.02.02.01 for inadequate ICRA monitoring and enforcement"
        ],
        correctIndex: 3,
        explanation: "Joint Commission holds the hospital, not the contractor, accountable for ICRA compliance during construction projects. The hospital must ensure contractors understand and follow ICRA requirements, monitor compliance daily, and document adherence. A contractor who cannot articulate basic ICRA requirements and gaps in compliance logs indicate insufficient hospital oversight. The findings span infection control (IC.02.02.01), environment management (EC.02.06.05), and leadership accountability (LD.03.02.01) because the hospital bears ultimate responsibility for patient safety during construction.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc9",
      baseQuestion: "During a tracer in the surgical suite, a surveyor notices that a fire door in the corridor is propped open with a rubber doorstop. Staff state they keep it open for convenience because they frequently transport patients through it. What is the correct finding?",
      baseOptions: [
        "Staff convenience justifies the practice if the door is within sight of the nurses' station",
        "This is acceptable if the door is in a non-patient care corridor",
        "Fire doors in healthcare occupancies must never be propped open",
        "This is acceptable as long as the door is closed during fire drills"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Per NFPA 101 Section 18.2.2.2.2 and JC PE.03.01.01 (formerly EC.02.03.05 / LS.02.01.10), fire-rated doors in healthcare occupancies must be self-closing and latching. They may only be held open by devices connected to the fire alarm system that automatically release the door upon alarm activation. Propping fire doors open with doorstops, wedges, or other unapproved devices is a serious life safety code violation that compromises smoke compartmentalization.",
      baseXp: 15,
      followUps: [{
        question: "The surveyor asks the facility to demonstrate that all corridor fire doors close and latch properly. During testing, three doors are found that close but do not fully latch. What interim life safety measure (ILSM) is appropriate?",
        options: [
          "Remove the doors entirely since non-latching doors provide a false sense of security",
          "Post signs reminding staff to manually pull doors closed during a fire emergency",
          "Implement fire watch in the affected areas, assign staff to close and monitor the doors",
          "Disable the fire alarm connections to those doors until the latches are repaired"
        ],
        correctIndex: 2,
        explanation: "When a life safety feature is impaired, JC PE.03 (formerly EC.02.03.05) requires implementation of interim life safety measures. For non-latching fire doors, this includes assigning staff to monitor and manually close the doors during any fire alarm, implementing fire watch patrols in affected smoke compartments, expediting repair, and maintaining documentation of all interim measures. The ILSM must remain in effect until the deficiency is fully corrected.",
        expertXp: 30
      },
      {
        question: "A comprehensive fire door inspection of the entire facility reveals 22 deficiencies across 150 fire-rated doors, including doors that do not latch, doors with excessive gaps at the bottom, damaged smoke seals, and missing self-closing devices. What organizational response BEST demonstrates compliance with Joint Commission expectations?",
        options: [
          "Prioritize repairs based on location, fixing patient care area doors first and non-patient areas within 90 days",
          "Replace all 22 deficient doors with new fire-rated door assemblies to ensure full compliance",
          "Develop a prioritized corrective action plan based on risk severity, implement ILSMs for all deficient doors",
          "Contract with a fire door inspection company to repair all doors simultaneously within one week"
        ],
        correctIndex: 2,
        explanation: "A 15% deficiency rate across fire doors indicates both individual life safety concerns and a systemic maintenance program failure. Joint Commission expects a risk-based prioritization approach with ILSMs in place for all deficient doors during the repair process. The EOC Committee must track progress, and a root cause analysis should determine why the preventive maintenance program failed to identify deteriorating door components. This systematic approach addresses both the immediate deficiencies and the underlying program gap.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer six months after the fire door remediation project, the surveyor asks to see the fire door inspection program documentation. You present the completed repair records and a new annual inspection schedule. The surveyor then tests five random fire doors and finds one that does not latch. The surveyor asks what changed in your fire door maintenance program since the original finding. Your facilities director explains the repairs but cannot describe any changes to the ongoing inspection methodology. What will the surveyor conclude?",
        options: [
          "A single door not latching out of five tested is within acceptable tolerance",
          "The finding will be limited to EC.02.05.05 for maintenance deficiency on the single door",
          "The organization corrected the individual deficiencies but failed to improve the ongoing fire",
          "The program is compliant since the repair documentation demonstrates corrective action"
        ],
        correctIndex: 2,
        explanation: "Joint Commission expects that when significant deficiencies are identified, the organization not only corrects the individual findings but also improves the underlying system to prevent recurrence. Repairing 22 doors without modifying the inspection methodology that missed them demonstrates fixing symptoms without addressing root causes. The surveyor will expect evidence that the fire door PM program was enhanced with more rigorous inspection criteria, increased frequency, staff training on proper inspection techniques, or other systemic improvements per EC.04.01.01.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc10",
      baseQuestion: "A surveyor reviews the medical equipment management program and asks how the organization determines which medical devices are included in the program. What is the PRIMARY basis for inclusion?",
      baseOptions: [
        "Only devices that cost more than $5,000 are included in the management program",
        "Only devices identified by the FDA as Class III are included in the program",
        "All medical devices in the facility must be included regardless of risk level",
        "Equipment is included based on a risk assessment considering function"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "JC PE.04 (formerly EC.02.04.01) requires organizations to manage medical equipment risks by maintaining a written inventory based on criteria that include equipment function (therapeutic, diagnostic, monitoring), physical risk including patient and staff safety, maintenance requirements, and equipment incident history. This risk-based approach ensures that high-risk, high-priority equipment receives appropriate attention without requiring identical management of all devices.",
      baseXp: 15,
      followUps: [{
        question: "Your clinical engineering department reports that 15% of high-risk medical equipment has overdue preventive maintenance (PM). The Joint Commission surveyor asks how you will address this. What is the expected response?",
        options: [
          "High-risk equipment PM can be deferred up to 30 days past the scheduled date without concern",
          "Transfer the PM responsibilities to the nursing department to increase compliance rates",
          "Remove all equipment with overdue PM from service until maintenance is completed",
          "Immediately prioritize completion of overdue PMs"
        ],
        correctIndex: 3,
        explanation: "Joint Commission expects organizations to maintain medical equipment per their defined PM schedule. When overdue PMs are identified, the organization must prioritize based on risk, assess whether equipment currently in use poses safety concerns, complete the overdue PMs expeditiously, and develop a corrective action plan addressing root causes such as staffing, scheduling, or parts availability. A blanket removal of all equipment could compromise patient care, while ignoring the issue is non-compliant.",
        expertXp: 30
      },
      {
        question: "The root cause analysis for the overdue PMs reveals that the clinical engineering department lacks a centralized tracking system and relies on individual technician spreadsheets. Additionally, 30 infusion pumps acquired through a clinical trial were never added to the equipment inventory. What corrective actions are MOST critical?",
        options: [
          "Assign a senior technician to manually track all equipment and PM schedules in a master spreadsheet",
          "Return the clinical trial infusion pumps to the sponsor since they were not properly integrated",
          "Purchase a computerized maintenance management system (CMMS) and add the infusion pumps to the inventory when the system is implemented",
          "Immediately add all untracked infusion pumps to the equipment inventory, conduct initial safety inspections on each"
        ],
        correctIndex: 3,
        explanation: "JC PE.04 (formerly EC.02.04.01) requires that ALL medical equipment meeting the organization's inclusion criteria be in the inventory and managed appropriately. Equipment acquired through clinical trials, donations, or loans is not exempt. The untracked pumps must be immediately inventoried and inspected. The systemic fix requires centralized tracking with automated scheduling to prevent reliance on individual knowledge. A new acquisition process ensures future equipment enters the management program before patient use.",
        expertXp: 30
      },
      {
        question: "A Joint Commission tracer surveyor selects a ventilator from the ICU and asks to see its complete maintenance history, most recent PM documentation, and any associated recall or alert history. The clinical engineering technician produces the PM records but cannot demonstrate how the department tracks FDA recalls and safety alerts for managed equipment, or show evidence that a recent FDA safety notification for that ventilator model was received and acted upon. What will the surveyor cite?",
        options: [
          "EC.02.04.01 only, for incomplete equipment management records",
          "Since PM maintenance was current and the ventilator was functioning properly",
          "EC.02.04.03 for failure to report medical device incidents to the FDA",
          "EC.02.04.01 for inadequate medical equipment management program that does not"
        ],
        correctIndex: 3,
        explanation: "JC PE.04 (formerly EC.02.04.01) requires a comprehensive medical equipment management program that includes monitoring for and responding to equipment recalls, hazard notifications, and safety alerts. The inability to demonstrate a systematic process for tracking FDA communications and evidence that alerts were acted upon represents a significant program deficiency. A functioning device with current PM does not mitigate the risk of an unaddressed safety alert. The organization must show that it receives, evaluates, and responds to manufacturer and FDA notifications for all managed equipment.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc11",
      baseQuestion: "During a tracer through the laboratory, a surveyor observes a red biohazard bag in a regular trash receptacle. What regulatory standard is being violated?",
      baseOptions: [
        "EPA Clean Air Act requirements for medical waste incineration",
        "CMS Conditions of Participation for laboratory waste management",
        "OSHA Bloodborne Pathogen Standard requiring segregation of regulated",
        "State fire code requirements for combustible material storage"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "OSHA's Bloodborne Pathogen Standard (29 CFR 1910.1030) and JC PE.02 (formerly EC.02.02.01) require that regulated medical waste (biohazardous waste) be segregated from regular waste using color-coded containers (red bags or containers with the biohazard symbol). Placing biohazard waste in regular trash creates exposure risks for housekeeping, waste handlers, and the public, and represents a serious regulatory violation.",
      baseXp: 15,
      followUps: [{
        question: "Further investigation reveals that housekeeping staff in three departments have not received annual refresher training on regulated medical waste segregation. What corrective action is required?",
        options: [
          "Assign a waste management liaison to each department to sort waste on behalf of housekeeping",
          "Send an email reminder about proper waste segregation procedures",
          "Provide training within the next annual training cycle since it is only slightly overdue",
          "Immediately retrain affected staff, document completion, conduct competency verification"
        ],
        correctIndex: 3,
        explanation: "OSHA requires initial and annual refresher training on bloodborne pathogens and regulated medical waste handling for all employees with potential occupational exposure. When a training gap is identified, immediate retraining with documented competency assessment is required. The organization should also audit current practices to determine if the training gap resulted in actual non-compliant waste handling and implement measures to prevent future lapses in the training schedule.",
        expertXp: 25
      },
      {
        question: "A facility-wide waste segregation audit reveals that 23% of regulated medical waste containers across the hospital contain non-regulated waste items such as food wrappers, paper towels, and glove boxes. This over-classification increases disposal costs by an estimated $180,000 annually. What is the MOST effective corrective strategy?",
        options: [
          "Remove all regulated waste containers from areas where over-classification is occurring",
          "Switch to a single-stream waste disposal system to eliminate segregation errors",
          "Implement a targeted education campaign with visual aids posted at waste stations",
          "Reduce the number of red biohazard containers per department to discourage improper use"
        ],
        correctIndex: 2,
        explanation: "Over-classification of regulated medical waste is both a compliance and cost issue. While it does not create the same exposure risk as under-classification, it indicates that staff do not understand the criteria for regulated medical waste. The corrective strategy must include education with practical examples, competency verification, visual decision aids at the point of disposal, and ongoing monitoring. Reducing containers or switching to single-stream could create the opposite problem of regulated waste entering the regular waste stream, which is an OSHA violation.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer, the surveyor follows the regulated medical waste stream from point of generation in the OR to the loading dock storage area. The surveyor finds that the outdoor regulated waste storage area has an unlocked gate, no secondary containment, bags stored directly on the ground without a rigid container, and no posted spill response procedures. The waste hauler pickup log shows a 10-day interval between pickups. What findings will the surveyor document?",
        options: [
          "A finding under IC.02.02.01 for infection control risk from improper waste storage",
          "EC.02.02.01 for unsecured waste storage and recommend more frequent hauler pickups",
          "EC.02.02.01 for multiple deficiencies in regulated medical waste storage including lack of security",
          "Finding under Joint Commission standards since waste storage is regulated by the state environmental agency, not the Joint Commission"
        ],
        correctIndex: 2,
        explanation: "Joint Commission EC.02.02.01 encompasses the full lifecycle of hazardous materials and waste management, including storage prior to disposal. Regulated medical waste storage areas must be secured to prevent unauthorized access, use rigid leak-proof containers, have secondary containment, maintain posted emergency procedures, and comply with state storage time limits (typically 7-30 days depending on jurisdiction). Multiple deficiencies in the storage area indicate a systemic gap in the waste management program. The surveyor will cite both the hazardous materials standard and environmental safety standards.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc12",
      baseQuestion: "A surveyor asks about your facility's security management plan. Which of the following is a REQUIRED component per Joint Commission standards?",
      baseOptions: [
        "A security risk assessment that identifies risks to",
        "Closed-circuit television monitoring of all patient rooms",
        "Metal detectors at all public entrances",
        "Armed security officers at every entrance 24/7"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Joint Commission standard EC.02.01.01 requires organizations to manage safety and security risks in the environment of care. This includes conducting a proactive security risk assessment to identify vulnerabilities, implementing strategies to mitigate identified risks, and having a plan that addresses security-sensitive areas such as the ED, nursery/pediatrics, pharmacy, and behavioral health units. The specific security measures (armed guards, metal detectors, cameras) are determined by the risk assessment, not prescribed uniformly.",
      baseXp: 15,
      followUps: [{
        question: "Your security risk assessment identifies the emergency department as the highest-risk area for workplace violence. Staff report three verbal threats and one physical assault in the past quarter. What does the Joint Commission expect?",
        options: [
          "Transfer aggressive patients to other facilities to reduce the risk to staff",
          "Install bulletproof glass at the triage window and hire additional security guards",
          "Implement a comprehensive workplace violence prevention program including de-escalation",
          "Restrict the number of visitors allowed in the ED to reduce the potential for violence"
        ],
        correctIndex: 2,
        explanation: "Joint Commission standard EC.02.01.01 and the Sentinel Event Alert on workplace violence require a comprehensive approach including staff training in de-escalation and behavioral emergency response, environmental modifications such as safe rooms and panic alarms, clear reporting and investigation processes, post-incident debriefing and support, and data-driven analysis to identify patterns. A single physical or environmental control is insufficient to address the multifaceted nature of workplace violence.",
        expertXp: 30
      },
      {
        question: "Your workplace violence prevention program has been in place for one year. Data shows that while verbal threat reporting has increased by 200%, physical assaults have decreased by 40%. Some leaders interpret the increased reporting as evidence the program is failing. How should this data be presented to the EOC Committee?",
        options: [
          "Present the data showing that increased reporting is a positive indicator of improved reporting culture",
          "Acknowledge that the increased reporting is concerning and recommend additional physical security measures",
          "Suppress the verbal threat data and report only the assault reduction to demonstrate program success",
          "Recommend reverting to the previous reporting system since the new one is generating too many reports"
        ],
        correctIndex: 0,
        explanation: "Increased reporting of lower-severity events (verbal threats) combined with decreased high-severity events (physical assaults) is a classic indicator of a maturing safety culture. The workplace violence prevention program is working as intended: staff feel safe reporting, early interventions are preventing escalation, and the organization has better data for pattern identification. Joint Commission expects data-driven analysis that goes beyond surface numbers to understand program effectiveness per EC.04.01.01 and the leadership standards.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer in the behavioral health unit, the surveyor asks a psychiatric technician about the process for managing a patient who becomes physically aggressive. The technician describes the use of physical holds but cannot articulate the facility's policy on least-restrictive interventions, when to escalate to a registered nurse, or the documentation requirements for physical interventions. The unit's restraint log shows three instances in the past month where physician orders for restraint were obtained more than one hour after the restraint was initiated. What findings will the surveyor cite?",
        options: [
          "HR.01.05.03 for staff competency deficiency in understanding restraint policies",
          "PC.03.05.01 for restraint use without timely physician orders",
          "PC.03.05.01 only for late restraint orders",
          "RI.01.01.01 for patient rights violations related to restraint use"
        ],
        correctIndex: 1,
        explanation: "This scenario involves multiple intersecting standards. Late restraint orders violate PC.03.05.01 which requires a physician order within specific timeframes. Staff inability to describe least-restrictive intervention policies indicates a competency gap under HR.01.05.03. The behavioral health unit is a security-sensitive area under EC.02.01.01, and staff competency in de-escalation and behavioral crisis management is a critical component of the security management plan for that area. Joint Commission evaluates these issues holistically as indicators of program effectiveness across multiple standards.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc13",
      baseQuestion: "During an EOC round, you observe a patient smoking in a designated outdoor area that is only 10 feet from a building air intake vent. What is the primary concern?",
      baseOptions: [
        "Smoking is prohibited on all hospital property without exception per Joint Commission",
        "Secondhand smoke can enter the building through the air intake",
        "The smoking area must be at least 50 feet from any structure per federal law",
        "The patient lacks capacity to consent to the smoking restriction"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "While Joint Commission standard EC.02.06.01 addresses smoking risks and many facilities are smoke-free campuses, the primary concern here is the proximity to the air intake vent. Secondhand smoke entering the HVAC system affects indoor air quality and poses health risks to patients and staff inside the building. Most codes and standards require smoking areas to be a minimum of 25 feet from air intakes, operable windows, and building entrances.",
      baseXp: 15,
      followUps: [{
        question: "Your facility has a smoke-free campus policy, but staff report that patients frequently smoke near the main entrance despite posted signage. What is the MOST effective multifaceted approach?",
        options: [
          "Assign security officers to patrol the entrance and confiscate cigarettes",
          "Implement a comprehensive tobacco cessation program with nicotine replacement therapy",
          "Remove all ashtrays and smoking receptacles from the property and increase fines for violators",
          "Install motion-activated speakers that announce the smoking policy when someone lights up"
        ],
        correctIndex: 1,
        explanation: "Joint Commission expects a comprehensive approach to smoking policy compliance that includes offering tobacco cessation support (nicotine replacement, counseling referrals), educating staff on patient communication techniques, using environmental design to redirect smokers away from high-traffic areas, and maintaining consistent enforcement. Simply punitive or technological approaches alone are insufficient and do not address the underlying behavioral and addiction components.",
        expertXp: 25
      },
      {
        question: "Your facility's indoor air quality monitoring program detects elevated carbon monoxide and particulate levels in the lobby adjacent to the main entrance, correlating with peak smoking activity outside. Engineering confirms that the HVAC system's outdoor air intake is drawing contaminated air into the building. What is the MOST comprehensive solution?",
        options: [
          "Install carbon monoxide detectors in the lobby and set up alerts for when levels exceed safe thresholds",
          "Relocate the outdoor air intake to a position that is at least 25 feet from any area where smoking occurs",
          "Increase the HVAC system's outdoor air exchange rate to dilute the contaminants",
          "Close the main entrance and redirect all foot traffic to a side entrance away from the air intake"
        ],
        correctIndex: 1,
        explanation: "This situation requires an engineering solution combined with policy enforcement. ASHRAE Standard 62.1 and Joint Commission EC.02.06.01 require that outdoor air intakes be positioned to minimize introduction of contaminants. The comprehensive approach addresses the source (relocating the intake or enforcing the smoking ban), the pathway (enhanced filtration), and verification (follow-up monitoring). Simply diluting contaminated air or detecting it without corrective action does not resolve the root cause.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor conducting an environment of care tracer observes a patient smoking outside the main entrance and asks the registration clerk about the facility's smoking policy. The clerk states the policy is smoke-free campus but says enforcement is not her responsibility. The surveyor then asks the EOC director for the facility's indoor air quality monitoring data and tobacco cessation program metrics. The director can produce the smoke-free policy document but cannot provide air quality data near entrances or demonstrate how the tobacco cessation program is evaluated for effectiveness. What will the surveyor cite?",
        options: [
          "EC.02.06.01 only for the observed smoking policy violation",
          "Since the policy exists and smoking occurred in an outdoor area",
          "HR.01.05.03 for the clerk's failure to understand her role in policy enforcement",
          "EC.02.06.01 for insufficient monitoring of environmental conditions related to"
        ],
        correctIndex: 3,
        explanation: "Joint Commission expects that policies are not just documented but actively monitored and evaluated for effectiveness. The absence of air quality monitoring data near known problem areas indicates the organization is not assessing whether its smoke-free policy is actually protecting the indoor environment (EC.02.06.01). The inability to demonstrate program effectiveness evaluation violates EC.04.01.01. The clerk's response suggests a culture where staff do not see policy enforcement as a shared responsibility, which the surveyor may address under staff knowledge expectations.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc14",
      baseQuestion: "A contractor needs to perform work above the ceiling tiles on a patient care unit. What must be obtained BEFORE any ceiling tiles are displaced?",
      baseOptions: [
        "Written permission from the unit manager is sufficient",
        "An above-ceiling permit that addresses infection control",
        "A verbal approval from the facilities director",
        "Special permit is required as long as the work is completed within one shift"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Joint Commission standard EC.02.06.05 and infection control standards require an above-ceiling permit before displacing any ceiling tiles in patient care areas. The permit process ensures that infection control precautions are in place (dust containment, HEPA filtration if needed), fire safety features above the ceiling are not compromised, utility systems are identified and protected, and the area is properly restored when work is complete.",
      baseXp: 15,
      followUps: [{
        question: "During an emergency plumbing repair, a maintenance worker removes ceiling tiles on a hematology-oncology unit without obtaining an above-ceiling permit due to urgency. Water is actively leaking onto the floor. How should this situation be managed?",
        options: [
          "Immediately implement infection control precautions including containment barriers",
          "The emergency justifies bypassing the permit process entirely; document the repair after completion",
          "Stop the repair and complete the full permit process before proceeding, regardless of the active leak",
          "Evacuate all patients from the unit until the permit is obtained and the repair is completed"
        ],
        correctIndex: 0,
        explanation: "Emergency situations may require immediate action, but infection control precautions must still be implemented as quickly as possible, especially on units with immunocompromised patients. The organization should deploy containment measures simultaneously with the repair, notify infection prevention for guidance, and document the emergency circumstances with a retroactive permit. This demonstrates compliance with the intent of the standard while addressing the immediate patient safety concern.",
        expertXp: 35
      },
      {
        question: "A review of above-ceiling permits for the past 12 months reveals that 40% of permits were closed without documented verification that the ceiling was properly restored, fire-stopping materials were intact, and infection control barriers were removed. What systemic improvement is needed?",
        options: [
          "Reduce the number of above-ceiling work permits issued by consolidating maintenance activities",
          "Add a reminder note to the permit form asking workers to verify restoration",
          "Implement a mandatory post-work inspection process requiring a facilities supervisor and",
          "Transfer responsibility for permit closure to the requesting department manager"
        ],
        correctIndex: 2,
        explanation: "The above-ceiling permit process must include a formal close-out verification step to ensure that the ceiling plenum is restored to its pre-work condition. This includes verifying that fire-stopping materials are intact (breached fire barriers above the ceiling can allow smoke and fire to spread between compartments), ceiling tiles are properly seated, and infection control barriers are removed. A joint inspection by facilities and infection prevention provides accountability and documentation that satisfies both EC.02.06.05 and IC.02.02.01 requirements.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission tracer, the surveyor lifts a ceiling tile on a patient care unit and discovers breached fire-stopping material around a conduit penetration, evidence of debris from previous maintenance work, and a disconnected low-voltage cable. The surveyor asks to see the above-ceiling permit log for the area. The log shows three permits issued in the past year for this location, all marked as closed and complete. What findings will the surveyor document?",
        options: [
          "EC.02.03.05 for breached fire-stopping compromising smoke compartment integrity",
          "EC.02.03.05 only for the breached fire-stopping material",
          "EC.02.06.05 for inadequate above-ceiling work management since the debris and breached fire-stopping indicate permits were closed without proper restoration",
          "Finding since the conditions above the ceiling are not visible to patients"
        ],
        correctIndex: 0,
        explanation: "Above-ceiling conditions directly impact patient safety even though they are not visible. Breached fire-stopping material compromises the smoke compartment integrity required by NFPA 101 (EC.02.03.05). Closed permits with unresolved deficiencies demonstrate a failed permit close-out process (EC.02.06.05). Debris in the ceiling plenum creates infection control risks from particulate matter that can enter the air handling system (IC.02.02.01). The surveyor will note that the organization's process for managing above-ceiling work is ineffective across multiple safety domains.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc15",
      baseQuestion: "A surveyor inspects a fire extinguisher in a procedural area and checks the inspection tag. What is the MINIMUM required frequency for visual inspections of portable fire extinguishers?",
      baseOptions: [
        "Weekly inspections in patient care areas and monthly in non-patient areas",
        "Quarterly visual inspections with semi-annual professional servicing",
        "Annually by a certified fire protection specialist",
        "Monthly visual inspections with documented annual maintenance inspections"
      ],
      baseCorrectIndex: 3,
      baseExplanation: "NFPA 10 (Standard for Portable Fire Extinguishers) requires monthly visual inspections to verify extinguishers are in designated locations, accessible, charged (gauge in green zone), have intact seals and tamper indicators, and show no visible damage. Annual maintenance inspections by a trained professional are also required, along with internal examination or hydrostatic testing at specified intervals depending on extinguisher type.",
      baseXp: 15,
      followUps: [{
        question: "During your monthly inspection, you discover a fire extinguisher with a pressure gauge reading in the red (undercharged) zone. The extinguisher is in the PACU. What is the correct immediate action?",
        options: [
          "Tag the extinguisher as defective and schedule replacement within 30 days",
          "Note the finding on the inspection tag and recheck in one week",
          "Immediately remove the undercharged extinguisher from service",
          "Notify the fire department and request an emergency inspection of all extinguishers"
        ],
        correctIndex: 2,
        explanation: "An undercharged fire extinguisher cannot be relied upon to function properly during a fire emergency. Per NFPA 10, defective extinguishers must be immediately removed from service and replaced with fully charged, appropriate-type units. This is especially critical in high-risk areas like the PACU where patients may not be able to self-evacuate. The removed unit should be recharged or replaced through the normal maintenance process.",
        expertXp: 25
      },
      {
        question: "An audit of fire extinguisher records reveals that while monthly visual inspections are documented, the annual professional maintenance inspections for 12 of your facility's 85 extinguishers are 3 months overdue. Several of these are in the surgical suite and ICU. What corrective action is required?",
        options: [
          "Immediately schedule professional maintenance for all overdue extinguishers",
          "Schedule the overdue inspections for the next available maintenance window within 60 days",
          "Remove the 12 overdue extinguishers and rely on the remaining extinguishers in adjacent areas until inspections are completed",
          "Contact the extinguisher vendor and request a blanket certification extension"
        ],
        correctIndex: 0,
        explanation: "NFPA 10 mandates annual professional maintenance inspections for all portable fire extinguishers. Overdue inspections in critical areas like surgical suites and ICUs represent a heightened risk. The corrective action must prioritize high-risk locations, ensure immediate scheduling of inspections, implement system improvements to prevent recurrence (automated tracking), and document the entire process. Simply removing extinguishers could leave critical areas without fire suppression capability, violating NFPA 10 and Joint Commission EC.02.03.05.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission life safety code tracer, the surveyor walks a corridor and notes that a fire extinguisher cabinet is blocked by a mobile supply cart, making the extinguisher inaccessible. The surveyor asks the unit secretary to describe the RACE protocol and point to the nearest fire extinguisher. The secretary correctly describes RACE but points to the blocked cabinet without recognizing the accessibility issue. The surveyor then reviews your fire extinguisher inspection logs and finds that the monthly inspection for this extinguisher was signed as complete 5 days ago. What will the surveyor cite?",
        options: [
          "EC.02.03.05 for the blocked extinguisher access only",
          "Since the secretary knew RACE and the inspection was documented",
          "HR.01.05.03 for the secretary's failure to recognize the blocked extinguisher",
          "EC.02.03.05 for blocked fire extinguisher access"
        ],
        correctIndex: 3,
        explanation: "This scenario reveals multiple system failures. The blocked extinguisher violates NFPA 10 and EC.02.03.05 which require extinguishers to be accessible at all times. The monthly inspection signed as complete while the extinguisher was blocked indicates either a falsified inspection or an inspection that did not verify accessibility, undermining the reliability of the monitoring program (EC.04.01.01). The staff member's inability to recognize a blocked extinguisher as a safety issue suggests that fire safety education has not translated into situational awareness, which Joint Commission considers under staff competency expectations.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc16",
      baseQuestion: "Your facility is required to test the emergency power supply system (EPSS). Per Joint Commission and NFPA 110, what is the required frequency for testing the emergency generator under load?",
      baseOptions: [
        "Monthly for a minimum of 30 minutes under",
        "Quarterly with a 15-minute load bank test",
        "Semi-annually with a 4-hour load test",
        "Annually with a full facility power transfer"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "NFPA 110 (Standard for Emergency and Standby Power Systems) requires monthly testing of the emergency generator under load for a minimum of 30 continuous minutes. The generator must reach at least 30% of nameplate rating unless a load bank test is performed. Additionally, Joint Commission standard EC.02.05.07 requires that the EPSS be tested and maintained to ensure reliable operation during actual power failures.",
      baseXp: 15,
      followUps: [{
        question: "During the monthly generator test, the automatic transfer switch (ATS) fails to transfer within 10 seconds as required. Power restoration to the life safety branch took 14 seconds. What action is required?",
        options: [
          "Schedule ATS repair during the next quarterly maintenance window",
          "A 4-second delay beyond the 10-second requirement is within acceptable tolerance",
          "Immediately initiate repair of the ATS, conduct a root cause analysis",
          "Replace the generator since the ATS delay indicates overall system deterioration"
        ],
        correctIndex: 2,
        explanation: "NFPA 110 and NFPA 99 require the life safety branch of the emergency electrical system to restore power within 10 seconds of normal power loss. A failure to meet this requirement is a critical deficiency. The ATS must be repaired immediately, a root cause analysis conducted, affected departments notified, and interim measures implemented such as ensuring battery-powered backup lighting and equipment are functional until the ATS transfer time is verified at 10 seconds or less.",
        expertXp: 35
      },
      {
        question: "Your facility recently failed the annual 4-hour generator load test at the 3-hour mark when the generator overheated and shut down. The generator is 18 years old. Engineering recommends immediate repair of the cooling system. What additional actions should the organization take?",
        options: [
          "Rent a temporary portable generator and park it adjacent to the facility while repairs are made",
          "Repair the cooling system and retest within 30 days; no further action needed if the retest passes",
          "Immediately purchase a new generator since 18 years exceeds the typical service life",
          "Repair the cooling system, retest to verify 4-hour capability"
        ],
        correctIndex: 3,
        explanation: "A generator failure during the required annual 4-hour load test (NFPA 110 Section 8.4.9) is a critical finding that requires more than just component repair. The organization must evaluate the generator's overall condition and remaining service life, assess whether facility growth has increased the emergency power demand beyond the generator's capacity, and plan proactively for replacement or supplementation. Joint Commission expects leadership involvement in resource allocation for critical infrastructure per LD.03.02.01.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor reviews your emergency power program and finds that monthly generator tests are documented and the generator is operational. However, the surveyor asks to see documentation of the facility's emergency power inventory, which should list all equipment and systems connected to the emergency power system. The engineering director cannot produce a current inventory and admits that recent additions to the critical care unit, including new ventilators and monitoring systems, may not have been evaluated for emergency power connection. What will the surveyor cite?",
        options: [
          "Finding since the generator tests pass and the generator is functional",
          "EC.02.05.03 for not maintaining a current inventory of emergency power connections",
          "EC.02.05.01 for failure to maintain a current utility system inventory that",
          "EC.02.05.07 only for incomplete generator testing documentation"
        ],
        correctIndex: 2,
        explanation: "Joint Commission requires that organizations maintain a current inventory of equipment connected to emergency power and ensure the generator's capacity is adequate for the connected load. Adding critical care equipment without evaluating emergency power implications creates a risk that the generator could be overloaded during an actual power failure, potentially causing a cascading loss of life-sustaining equipment. The inability to produce the inventory and confirm capacity adequacy represents gaps in utility system management (EC.02.05.01), EPSS management (EC.02.05.07), and leadership oversight of infrastructure changes (LD.03.02.01).",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc17",
      baseQuestion: "During a construction project on the second floor, the fire alarm system in the affected zone must be temporarily impaired. What is REQUIRED before the system can be taken offline?",
      baseOptions: [
        "Notify the local fire department by email and proceed with construction",
        "Simply ensure the construction crew has fire extinguishers available in the work area",
        "Implement a complete interim life safety measures (ILSM) assessment, establish fire watch",
        "Only management notification is needed if the impairment will last less than 4 hours"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "Joint Commission standard EC.02.03.05 requires that when any fire protection system is impaired, the organization must implement interim life safety measures including conducting an ILSM assessment, establishing fire watch patrols in the affected area, notifying the local fire department (AHJ), posting signage alerting staff and occupants, and maintaining documentation. These measures must remain in place for the entire duration of the impairment regardless of expected length.",
      baseXp: 15,
      followUps: [{
        question: "The construction project is expected to last 6 weeks, and the fire alarm impairment will persist throughout. After 2 weeks, you discover that fire watch documentation has not been consistently maintained. What must happen?",
        options: [
          "Since no fire occurred during the gap, the documentation lapse is not critical",
          "Increase fire watch frequency to compensate for the documentation gap",
          "Halt construction until a new ILSM plan is developed and approved",
          "Immediately resume consistent fire watch documentation"
        ],
        correctIndex: 3,
        explanation: "Fire watch documentation gaps represent a significant compliance risk and potential life safety concern. The organization must immediately correct the documentation process, investigate why the lapse occurred, implement safeguards to prevent recurrence, and report the issue to the EOC Committee for oversight. The fact that no fire occurred does not mitigate the regulatory requirement for continuous documentation of interim life safety measures throughout any fire protection system impairment.",
        expertXp: 30
      },
      {
        question: "During the same 6-week construction project, a second fire protection system impairment occurs when a sprinkler branch line in an adjacent zone must be drained for modification. This means two overlapping zones now have impaired fire protection. What additional considerations are required?",
        options: [
          "Activate the facility's Emergency Operations Plan since multiple system impairments constitute an emergency",
          "Limit construction work to one zone at a time to avoid overlapping impairments",
          "Conduct a cumulative ILSM assessment evaluating the combined impact of both impairments",
          "A single ILSM plan can cover both impairment zones without modification"
        ],
        correctIndex: 2,
        explanation: "Overlapping fire protection system impairments create a cumulative risk that must be assessed holistically, not independently. Joint Commission EC.02.03.05 requires that the ILSM assessment consider the aggregate impact on patient and staff safety. Two adjacent impaired zones may create an area where neither fire alarm nor sprinkler protection is available, requiring enhanced fire watch, potential patient relocation considerations, updated AHJ notification, and leadership-level risk acceptance. The assessment must demonstrate that interim measures adequately compensate for the combined impairment.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor arrives during the final week of the construction project and asks to review the complete ILSM documentation package. The package includes the initial assessment, fire department notification, and daily fire watch logs. However, the surveyor notes that the ILSM assessment was not updated when the scope of construction changed at week 3 to include additional demolition work that increased the fire risk level, and there is no evidence that the EOC Committee reviewed the ILSM status during the 6-week period. What findings are expected?",
        options: [
          "EC.02.03.05 for the ILSM assessment not being updated when construction scope changed",
          "Finding since the basic ILSM requirements of fire watch and AHJ notification were maintained",
          "EC.02.03.05 for failure to reassess ILSMs when conditions changed",
          "LD.03.02.01 for EOC Committee oversight failure only"
        ],
        correctIndex: 2,
        explanation: "Joint Commission expects ILSM assessments to be living documents that are updated when conditions change. A scope increase involving demolition significantly changes the fire risk profile and may require additional interim measures. The EOC Committee is responsible for ongoing oversight of active ILSMs, particularly for extended impairments, to ensure that measures remain proportionate to the actual risk. The absence of Committee review during a 6-week impairment demonstrates insufficient organizational oversight of a sustained life safety risk per both EC.02.03.05 and LD.03.02.01.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc18",
      baseQuestion: "A Joint Commission surveyor traces a hazardous chemical through the facility and asks to see the chemical inventory. What MUST the hazardous materials inventory include?",
      baseOptions: [
        "Only chemicals classified as toxic or flammable need to be listed",
        "A list of all hazardous chemicals present in the workplace with corresponding SDS",
        "Only chemicals purchased within the current fiscal year",
        "A list maintained by the purchasing department of chemicals ordered but not necessarily received"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "OSHA's Hazard Communication Standard and Joint Commission standard EC.02.02.01 require a comprehensive inventory of all hazardous chemicals in the workplace. The inventory must include chemical identification, quantities, storage locations, associated SDS, and proper handling requirements. The list must be current and accessible, and must include all hazardous chemicals regardless of quantity or classification.",
      baseXp: 15,
      followUps: [{
        question: "The surveyor discovers that a laboratory has 3 chemicals in use that do not appear on the facility's hazardous chemical inventory. Lab staff state the chemicals were donated by a research partner. How should this be addressed?",
        options: [
          "Return the chemicals to the research partner since they were not procured through proper channels",
          "Donated chemicals are exempt from OSHA inventory requirements if they are used in small quantities",
          "Add the chemicals to the inventory and continue using them as long as staff have general hazmat training",
          "Immediately quarantine the chemicals, obtain SDS for each, add them to the inventory, conduct a risk assessment"
        ],
        correctIndex: 3,
        explanation: "All hazardous chemicals present in the workplace must be on the hazardous materials inventory with corresponding SDS, regardless of how they were obtained. Donated, sample, or trial chemicals are not exempt. The chemicals must be quarantined until SDS are obtained and reviewed, a risk assessment is completed, the inventory is updated, and staff receive chemical-specific training on safe handling, storage, and emergency procedures per OSHA 29 CFR 1910.1200.",
        expertXp: 30
      },
      {
        question: "A comprehensive hazardous materials audit identifies that your facility stores incompatible chemicals together in three departments: acids stored adjacent to bases in the laboratory, oxidizers stored near flammables in the maintenance shop, and corrosive cleaning agents stored above food items in the nutrition services department. What corrective action framework is MOST appropriate?",
        options: [
          "Move all hazardous chemicals to a single centralized storage location managed by the safety department",
          "Separate the chemicals in each department and add labels indicating incompatible storage groups",
          "Conduct a facility-wide hazardous materials storage assessment using SDS compatibility guidelines",
          "Install chemical-resistant shelving in all three departments to prevent reactions from occurring"
        ],
        correctIndex: 2,
        explanation: "Incompatible chemical storage creates risks of dangerous reactions, toxic gas generation, or fire. OSHA 29 CFR 1910.106 and Joint Commission EC.02.02.01 require chemicals to be stored according to compatibility. A systematic approach is needed: SDS review determines compatibility groups, physical segregation prevents contact between incompatibles, secondary containment protects against spills, department-specific storage maps guide daily compliance, and periodic audits verify sustained compliance. Chemical-resistant shelving does not prevent vapors from interacting and does not address the fundamental segregation requirement.",
        expertXp: 30
      },
      {
        question: "During a Joint Commission hazardous materials tracer, the surveyor follows a chemotherapy drug from the pharmacy to the oncology unit and asks to see the spill response procedure. A nurse demonstrates donning the spill kit PPE but selects standard nitrile gloves instead of chemotherapy-rated gloves, uses a regular dust pan instead of the spill kit's absorbent materials, and states she would dispose of the cleanup materials in a red biohazard bag rather than the required chemotherapy waste container. The unit's hazardous drug spill drill documentation shows all staff were trained 4 months ago. What will the surveyor cite?",
        options: [
          "EC.02.02.01 for an inadequate spill response procedure",
          "HR.01.05.03 for staff training deficiency since the nurse was trained recently but cannot perform correctly",
          "EC.02.02.01 for a hazardous materials management program that is not effectively",
          "PC.02.02.01 for failure to safely administer hazardous medications"
        ],
        correctIndex: 2,
        explanation: "This scenario demonstrates a critical disconnect between training documentation and actual competency. The nurse's errors, including wrong gloves, wrong cleanup materials, and wrong disposal container, indicate that training did not result in competent performance, which is a key distinction under Joint Commission standards. EC.02.02.01 requires an effective hazardous materials program including proper spill response. HR.01.05.03 requires verified competency, not just training attendance. OSHA requires specific training on hazardous drugs including proper PPE, cleanup procedures, and waste disposal. Training records alone do not demonstrate compliance when observed performance contradicts the training content.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc19",
      baseQuestion: "Your organization is conducting its annual evaluation of the Environment of Care management plans. How many EC management plans does Joint Commission require hospitals to maintain?",
      baseOptions: [
        "A minimum of seven plans covering safety, security, hazardous materials",
        "Five plans: safety, fire, utilities, medical equipment, and emergency management",
        "Three plans: safety, security, and fire prevention",
        "One comprehensive environment of care plan that covers all areas"
      ],
      baseCorrectIndex: 0,
      baseExplanation: "Joint Commission requires hospitals to maintain management plans in at least seven key areas under the Environment of Care chapter: safety management, security management, hazardous materials and waste management, fire safety management, medical equipment management, utility systems management, and in coordination with infection prevention. Each plan must include scope, objectives, performance standards, and an annual evaluation process demonstrating program effectiveness.",
      baseXp: 15,
      followUps: [{
        question: "During the annual evaluation, the EOC Committee identifies that the hazardous materials management plan has not been updated in 3 years despite significant changes in chemicals used and regulatory requirements. What is the expected corrective approach?",
        options: [
          "Update the plan during the next routine planning cycle to avoid disruption",
          "Immediately revise the plan to reflect current chemicals, processes",
          "Assign the task to a consultant to ensure accuracy and objectivity",
          "Adopt a neighboring hospital's hazardous materials plan as a template and customize it"
        ],
        correctIndex: 1,
        explanation: "Joint Commission standard EC.04.01.01 requires annual evaluation and updates to all EC management plans. A 3-year gap in updates is a significant compliance deficiency. The organization must immediately revise the plan, conduct a gap analysis to identify any risks or compliance failures that resulted from the outdated plan, implement corrective actions for any identified gaps, and establish a process to ensure timely annual review going forward.",
        expertXp: 30
      },
      {
        question: "The EOC Committee's annual evaluation of the fire safety management plan shows that all required fire drills were completed, fire inspections were performed, and fire protection systems were maintained. However, the evaluation report does not include analysis of fire drill performance data, trending of fire safety deficiencies, or measurable objectives for the coming year. What improvement is needed?",
        options: [
          "Add a summary statement that the fire safety program is effective based on no fire-related incidents",
          "Request the fire marshal to provide an independent evaluation of the program's effectiveness",
          "The annual evaluation must go beyond activity completion to include analysis of performance data such as",
          "The evaluation is adequate since it documents completion of all required activities"
        ],
        correctIndex: 2,
        explanation: "Joint Commission EC.04.01.01 requires that annual evaluations of EC management plans demonstrate program effectiveness, not merely activity completion. An effective evaluation analyzes outcome data, identifies trends, sets measurable improvement objectives, and creates an action plan. Simply documenting that drills were done and inspections completed is a checklist approach that does not meet the intent of the standard. The absence of fire incidents is not sufficient evidence of program effectiveness since it does not account for near misses, drill performance quality, or emerging risks.",
        expertXp: 30
      },
      {
        question: "A Joint Commission surveyor asks the EOC Committee chair to explain how the seven EC management plans are integrated and how findings from one plan area inform actions in another. The chair provides individual plan evaluations but cannot demonstrate cross-referencing between plans. For example, a security incident involving a patient assault on a nurse is documented in the security plan but was not reviewed in the safety plan for workplace violence implications, the HR injury report, or the performance improvement program. What will the surveyor cite?",
        options: [
          "EC.04.01.01 for failure to demonstrate integration across EC management plans where",
          "LD.03.02.01 for leadership failure to oversee the EOC program",
          "EC.02.01.01 for an inadequate security management plan that does not address workplace violence",
          "EC.04.01.01 for inadequate annual evaluation of the security management plan"
        ],
        correctIndex: 0,
        explanation: "Joint Commission expects EC management plans to function as an integrated system, not as independent silos. A patient assault event has implications across security management (EC.02.01.01), safety management (workplace violence under EC.02.01.01), staff injury and HR processes, and the organization's performance improvement program. The inability to demonstrate cross-plan integration indicates that the organization is not conducting the holistic analysis needed to identify systemic risks and coordinate comprehensive solutions. EC.04.01.01 requires that plan evaluations consider interactions between plan areas, and LD.04.04.01 requires organizational performance improvement activities to be integrated.",
        expertXp: 35
      }]
    },
    {
      id: "dd-eoc20",
      baseQuestion: "A surveyor observes that a corridor in a hospital's diagnostic imaging department has furniture, a portable X-ray machine, and a linen cart partially obstructing the hallway. The corridor is a required means of egress. What is the Life Safety Code violation?",
      baseOptions: [
        "Linen carts are permitted in corridors if they are on wheels and can be moved quickly",
        "Portable medical equipment is exempt from corridor obstruction rules during business hours",
        "Required means of egress corridors must remain clear of all obstructions that reduce the required",
        "Corridors may be used for temporary storage as long as items do not reduce the width below 6 feet"
      ],
      baseCorrectIndex: 2,
      baseExplanation: "NFPA 101 Section 18.2.3.4 requires that corridors used as means of egress in healthcare occupancies maintain the minimum required clear width at all times. While the Life Safety Code permits certain items in corridors (such as wheeled equipment in use that does not reduce corridor width below the minimum), persistent storage of equipment, furniture, and carts that reduces the clear width is a violation. The corridor must allow unobstructed passage for patient evacuation including beds and stretchers.",
      baseXp: 15,
      followUps: [{
        question: "The department manager explains that the corridor storage is necessary because the department lacks adequate storage space. This has been an ongoing issue raised in multiple EOC rounds. What should the organization do?",
        options: [
          "Apply to the local authority having jurisdiction for a corridor storage variance",
          "Allow the corridor storage to continue with staff education on keeping one side clear",
          "Reduce the department's equipment inventory to match available storage space",
          "Conduct a space utilization study, develop a plan to provide adequate storage"
        ],
        correctIndex: 3,
        explanation: "Chronic corridor obstruction indicates a systemic space management issue that requires organizational attention. Joint Commission expects the organization to address root causes rather than accept non-compliant conditions. This includes conducting a formal space assessment, developing short-term and long-term solutions, implementing interim measures that maintain life safety compliance, and escalating the resource need to leadership per LD.03.02.01 for appropriate allocation of space and funding.",
        expertXp: 30
      },
      {
        question: "While developing the corridor management plan, your team conducts a facility-wide corridor audit and finds egress obstructions in 8 of 12 departments surveyed. Common items include IV poles, wheelchairs, portable monitors, isolation carts, and nutrition carts. Some corridors are measured at 4 feet of clear width where 8 feet is required. How should the organization prioritize its response?",
        options: [
          "Focus on the corridors with the narrowest clear width first and work outward over the next 12 months",
          "Request each department manager to resolve their own corridor issues within 90 days",
          "Implement an immediate facility-wide corridor clearance initiative that brings all egress corridors into",
          "Install wider corridor doors to increase the effective egress width in the most affected areas"
        ],
        correctIndex: 2,
        explanation: "Widespread corridor obstructions represent a facility-wide life safety compliance failure, not isolated departmental issues. NFPA 101 requires minimum corridor widths to be maintained at all times. An immediate clearance initiative addresses the acute safety risk, while the systematic follow-up addresses root causes including inadequate storage design, workflow patterns, and equipment staging practices. The organization must also establish ongoing monitoring to prevent regression, demonstrating the plan-do-check-act cycle expected by Joint Commission under EC.02.03.05 and EC.04.01.01.",
        expertXp: 30
      },
      {
        question: "Six months after implementing the corridor management program, a Joint Commission tracer surveyor walks through the diagnostic imaging department and finds the corridor clear. However, the surveyor enters a nearby alcove and discovers equipment that was moved from the corridor now blocking access to an electrical panel and a fire extinguisher. The surveyor asks the department supervisor about the corridor management policy. The supervisor explains that staff were told to move everything out of the corridor but were not given guidance on where to put items or told about clearance requirements for electrical panels and fire safety equipment. What findings will the surveyor document?",
        options: [
          "EC.02.03.05 for the corridor obstruction issue being relocated rather than resolved",
          "EC.02.03.05 for blocked access to the fire extinguisher and electrical",
          "Finding since the corridor itself is now clear and compliant",
          "EC.02.03.05 for blocked fire extinguisher access only"
        ],
        correctIndex: 1,
        explanation: "This scenario illustrates a common compliance pitfall where solving one problem creates another. The organization moved obstructions from the corridor but created new violations by blocking fire extinguisher access (NFPA 10) and electrical panel clearance (NFPA 70). This indicates that the corrective action was superficial: staff were told what not to do (store in corridors) but not educated on the underlying safety principles that apply everywhere, not just corridors. Joint Commission will cite the new physical deficiencies (EC.02.03.05), the ineffective safety management approach (EC.02.01.01), and the education gap that failed to build genuine safety awareness (HR.01.05.03).",
        expertXp: 35
      }]
    }
  ]
};
