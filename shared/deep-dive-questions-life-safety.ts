import type { DeepDiveLevel } from "./schema";

export const ddLifeSafetyLevel: DeepDiveLevel = {
  id: "dd-life-safety",
  name: "Life Safety Deep Dive",
  description: "Expert-level scenarios on fire compartmentalization failures, ILSM requirements, egress compliance, alarm response, and systemic life safety program gaps.",
  icon: "Microscope",
  color: "hsl(0, 72%, 45%)",
  baseLevelId: "life_safety",
  questions: [
    {
      id: "dd-ls1",
      baseQuestion: "During a fire, staff on a medical-surgical unit attempt to evacuate non-ambulatory patients via the stairwell because the horizontal evacuation path has heavy smoke. Three patients in wheelchairs cannot be safely moved down the stairs. What is the correct protocol for non-ambulatory patients who cannot be evacuated vertically?",
      baseOptions: [
        "Leave the patients in their rooms with doors closed - the fire department will rescue them when they arrive",
        "Move patients to an area of refuge - a fire-rated enclosure such as a stairwell landing or corridor smoke compartment designed to protect occupants temporarily while awaiting rescue",
        "Attempt vertical evacuation regardless of patient mobility - any movement is safer than remaining on the affected floor",
        "Move patients to an interior room without windows to reduce heat and smoke exposure"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Areas of refuge - typically stairwell landings or designated smoke compartments - provide temporary fire-rated protection for patients who cannot be evacuated vertically. They are equipped with two-way communication systems to coordinate with the fire department. Leaving patients in rooms with closed doors is secondary to active area of refuge use when available.",
      baseXp: 20,
      followUps: [
        {
          question: "The unit's emergency plan does not identify areas of refuge or include any procedure for non-ambulatory patients who cannot use stairs. Fire department arrival was delayed by 9 minutes. What does this planning gap represent and what must the facility do?",
          options: [
            "The gap represents an unfortunate but operationally expected limitation - not all emergencies can be planned for in advance",
            "The gap represents a failure in the emergency operations plan. JC requires that evacuation plans specifically address non-ambulatory patients, identify areas of refuge, include procedures for staff-to-fire-department communication, and be tested during drills that include non-ambulatory patient scenarios. The plan must be revised and the revision tested in the next scheduled drill",
            "The fire department delay is the primary contributing factor - the planning gap is secondary and requires only documentation of the delay",
            "The plan should be updated but only requires input from nursing leadership - facilities management and fire department are not required participants in the plan revision"
          ],
          correctIndex: 1,
          explanation: "JC requires emergency operations plans to be comprehensive and tested. A plan that does not address the evacuation of non-ambulatory patients - who make up a substantial portion of any hospital census - is fundamentally incomplete. The plan must specifically include: identification of areas of refuge, staff roles in non-ambulatory patient management, communication with the fire department, and drill scenarios that test these procedures.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls2",
      baseQuestion: "A quarterly fire drill on the night shift is conducted at 3 AM. The nursing supervisor announces the drill 10 minutes in advance so staff can 'be prepared.' When the surveyor reviews the drill documentation, the pre-announcement is noted. What is the compliance concern?",
      baseOptions: [
        "No concern - pre-announcement improves drill participation quality by allowing staff to be in position for a more educational exercise",
        "The drill's value is significantly compromised - fire drills must be unannounced to test actual staff response. Pre-announced drills test whether staff can perform procedures when prepared, not whether they respond correctly under realistic surprise conditions",
        "Pre-announcement is permitted for night shift drills to minimize patient disruption",
        "The concern is the 3 AM timing only - pre-announcement is an acceptable practice for all shifts"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires fire drills to be unannounced to test actual response capability. A pre-announced drill produces compliance theater - staff perform correctly because they are ready, not because the response is embedded. The drill documentation noting the pre-announcement would be a survey finding. Night shift drills may be conducted with modifications to minimize patient disruption, but unannounced nature is a non-negotiable requirement.",
      baseXp: 15,
      followUps: [
        {
          question: "The nursing supervisor defends the pre-announcement saying 'we've had the same drill deficiencies for two years and announcing it is the only way to get staff to demonstrate the correct response.' What does this reasoning reveal about the fire safety training program and how should it be addressed?",
          options: [
            "The reasoning is pragmatic - if pre-announcement is the only way to get correct performance, it should be accepted as a reasonable accommodation",
            "The reasoning reveals that the fire safety education program is failing - if staff can only perform correctly when warned in advance, they have not internalized the knowledge and skills. The solution is to improve the training program (more frequent drills, scenario-based education, immediate corrective feedback, leadership reinforcement), not to compromise the drill's assessment validity",
            "The reasoning is valid for two years of repeated deficiencies - extended non-compliance justifies modified assessment methods",
            "The deficiencies after two years should be reported to JC as chronic non-compliance before implementing any program changes"
          ],
          correctIndex: 1,
          explanation: "Two years of repeated drill deficiencies is a serious indicator that the training program is not achieving behavioral competency. The response cannot be to make the assessment easier - it must be to fix the training program. This means examining: what specific behaviors are failing, what is preventing correct performance, whether the training modality is effective, and whether leadership reinforcement exists. Pre-announcing drills delays the reckoning while patient safety remains at risk.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls3",
      baseQuestion: "A multi-story hospital's main corridor has a fire door held open by an approved electromagnetic hold-open device that releases when the fire alarm activates. During a test, the fire alarm is activated and the door does not release - it remains held open. The facilities team says it will be repaired 'in a few weeks.' Is this acceptable?",
      baseOptions: [
        "Yes - the door can remain in this state temporarily since the alarm has been activated and the door is in a known state",
        "No - a malfunctioning fire door hold-open device represents a life safety system impairment requiring immediate ILSM implementation and urgent repair; 'a few weeks' is not acceptable for a deficiency that compromises fire compartmentalization",
        "Yes - as long as the door can be manually closed by staff during an actual fire event, the malfunction is acceptable temporarily",
        "No - the door must be replaced entirely, not repaired, since a repaired electromagnetic device may malfunction again"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A fire door that fails to close when the alarm activates is a direct life safety system impairment. The fire compartmentalization that the door provides is compromised. This requires immediate ILSM implementation (fire watch, staff notification) and urgent - not eventual - repair. 'A few weeks' is not an acceptable repair timeline for a safety-critical failure.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities director argues that they have two other fire doors on the same corridor that are functioning, so the compartmentalization is 'basically maintained.' Does the presence of other functional doors in the same corridor reduce the urgency of the malfunctioning door?",
          options: [
            "Yes - redundant fire doors in the same corridor provide compensatory protection that reduces the criticality of one door's malfunction",
            "No - each fire door is an independent component of the fire safety system. The compartmentalization design relies on all fire doors functioning correctly. A fire starting in the area between the functioning doors and the malfunctioning door could travel through the gap. The argument of 'basically maintained' does not satisfy NFPA 101 or JC life safety requirements",
            "Yes - NFPA 101 includes a recognized compensatory measure for single fire door failures when adjacent doors remain functional",
            "Partially - the urgency is reduced but not eliminated; a 30-day repair timeline would be acceptable in this context"
          ],
          correctIndex: 1,
          explanation: "Fire safety systems are not designed with 'basically functional' tolerances - each component serves a specific, defined purpose. A malfunctioning fire door means that specific compartment boundary is breached. Fire behavior is not predictable enough to rely on other doors compensating for a failure. NFPA 101 and JC do not include a provision for reduced urgency based on nearby functioning doors.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls4",
      baseQuestion: "A hospital renovation project runs 6 weeks behind schedule. During this time, a temporary plywood barrier - not fire-rated - has been used to separate the construction zone from patient areas. The contractor says upgrading to a fire-rated barrier would add 3 weeks to the schedule. What must the hospital do?",
      baseOptions: [
        "Accept the temporary non-fire-rated barrier and implement ILSM, including an enhanced fire watch",
        "Both: Implement immediate comprehensive ILSM (fire watch, increased extinguisher availability, daily staff briefings, additional fire drills) and require the contractor to install a fire-rated barrier or fire-rated sheeting as quickly as possible - schedule impact does not override life safety requirements for protecting patient areas from construction fire risk",
        "Accept the contractor's recommendation since they are the technical expert on construction safety",
        "The non-rated barrier is acceptable with a fire watch - NFPA 241 allows non-fire-rated barriers when a fire watch is in place"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Construction zones are a leading source of healthcare facility fires. A non-fire-rated barrier separating construction from patient areas does not provide the protection required. ILSM alone is not a permanent solution - the barrier must be upgraded. The contractor's schedule pressure does not change the safety requirement. Both actions are required: immediate ILSM and accelerated installation of appropriate fire-rated separation.",
      baseXp: 20,
      followUps: [
        {
          question: "The hospital's Environment of Care committee was informed about the non-rated barrier issue 4 weeks ago but the committee chair decided to 'monitor the situation' rather than require immediate action. The committee meets monthly and the next meeting is 2 weeks away. What does this governance failure represent?",
          options: [
            "A reasonable approach - the EC committee's authority includes deciding the urgency of safety findings and monitoring is an acceptable response",
            "A governance failure in which a known life safety deficiency affecting a patient care area was not escalated or acted upon within an appropriate timeframe. JC expects that identified life safety deficiencies trigger immediate action - not monitoring until the next scheduled committee meeting. This represents a culture of delayed safety response that leadership must correct",
            "The committee chair's clinical judgment should be respected - the 'monitor' decision was an informed professional assessment",
            "The failure is documentation-based - the committee should have formally documented the monitoring decision to create a defensible record"
          ],
          correctIndex: 1,
          explanation: "Known life safety deficiencies in active patient care areas require immediate action - not monitoring cycles. A four-week delay with the deficiency still unresolved when it reaches survey or causes harm represents a governance failure. JC's environment of care expectations include mechanisms for escalating urgent safety findings between scheduled meetings. A committee structure that cannot act on urgency between monthly meetings is inadequate for life safety management.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls5",
      baseQuestion: "A hospital's fire drill documentation for the past year shows: 4 drills on the day shift, 4 on the evening shift, and 2 on the night shift. The night shift supervisor reports that 2 drills were 'skipped due to high census.' What is the compliance status?",
      baseOptions: [
        "Partially compliant - 10 of 12 required drills were completed; 2 missed drills due to documented operational reasons may be acceptable",
        "Non-compliant - JC requires at least 4 drills per shift per year; the night shift has only 2 documented. High census is not an accepted reason to skip fire drills - modified drill approaches (door-only activation, limited simulation scope) can reduce patient disruption while maintaining compliance",
        "Compliant - 10 total drills exceeds the minimum of 4 annual drills across all shifts combined",
        "Non-compliant - but only if the 2 missed night drills occurred in the same quarter"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC requires at least one drill per quarter per shift - meaning 4 per shift annually, or a minimum of 12 total for a three-shift operation. Night shift has only 2. 'High census' is not an accepted waiver - it is actually an argument for more training, since high-census situations represent higher-risk evacuation scenarios. Drill design can be modified to minimize patient disruption without eliminating the drill entirely.",
      baseXp: 15,
      followUps: [
        {
          question: "The night shift supervisor proposes that, going forward, night shift fire safety training will be conducted as a tabletop exercise rather than an actual drill with alarm activation. The supervisor argues this is less disruptive to sleeping patients. Does a tabletop exercise satisfy the JC fire drill requirement?",
          options: [
            "Yes - tabletop exercises are a recognized and equivalent alternative to in-person fire drills for all shifts",
            "No - JC requires actual fire drills, not tabletop exercises, to satisfy the quarterly per-shift requirement. A tabletop may supplement drills as an educational tool, but it does not replace the behavioral rehearsal that an actual drill provides. Night shift drills must occur and can be designed to minimize patient disruption without activating the full building alarm",
            "Yes - tabletop exercises are equivalent for night shift specifically because live drills pose an unacceptable patient disturbance risk during sleeping hours",
            "Partially - tabletop exercises satisfy 50% of the drill requirement; 2 tabletops can substitute for 1 actual drill"
          ],
          correctIndex: 1,
          explanation: "JC's fire drill requirement specifies actual drills - behavioral rehearsal of the response process. Tabletop exercises test theoretical knowledge but do not build the muscle memory, spatial familiarity, and automatic response behaviors that actual drills develop. Night shift drills can be conducted without full building alarm activation - for example, simulating the alarm response in a contained section, using a phone-based notification, or activating the drill verbally - while still requiring staff to physically demonstrate RACE steps and patient evacuation procedures.",
          expertXp: 25
        }
      ]
    }
    ,
    {
      id: "dd-ls6",
      baseQuestion: "A hospital undergoes a significant renovation to its cardiac catheterization lab. During construction, the HVAC system serving both the cath lab and an adjacent cardiac step-down unit is temporarily disabled for 3 days. No ILSM (Interim Life Safety Measures) are implemented. What compliance failures occurred?",
      baseOptions: [
        "No failures - HVAC system maintenance is a facilities management decision that does not trigger ILSM requirements",
        "Multiple failures - HVAC shutdown creates life safety risks including loss of required air pressure differentials, ventilation for infection control, smoke removal capacity, and heating/cooling. Any planned impairment to a life safety system requires a pre-planned ILSM process that includes: risk assessment, notification to affected areas, enhanced monitoring, identification of compensatory measures, and documentation before and throughout the impairment period",
        "A partial failure - ILSM is only required when the fire suppression system is impaired, not for HVAC systems",
        "No failure if the renovation contractor assumed responsibility for life safety during the construction period"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "ILSM is required whenever any building system that contributes to life safety is impaired - including HVAC systems that provide smoke management, pressurization, and air quality functions. A 3-day HVAC shutdown without documented ILSM represents a significant compliance gap. The ILSM process must be activated before the impairment begins and must document the risk assessment, compensatory measures, and monitoring plan for the duration of the impairment.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities director argues that a 3-day outage is 'routine maintenance' and that ILSM is only required for 'emergency' impairments. Is this reasoning correct?",
          options: [
            "Partially correct - planned maintenance impairments under 7 days do not require full ILSM documentation",
            "Incorrect - ILSM requirements apply to both planned and unplanned impairments to life safety systems. A planned HVAC shutdown actually creates more accountability, not less, because the risk was foreseeable and the ILSM plan could and should have been developed in advance. The planned versus emergency distinction affects the pre-planning process, not the requirement to implement ILSM",
            "Correct - 'routine maintenance' is a recognized ILSM exception in NFPA 101",
            "Partially correct - ILSM is only required if the area affected is a smoke compartment with oxygen-dependent patients"
          ],
          correctIndex: 1,
          explanation: "The distinction between planned and emergency impairments affects when ILSM planning begins (before versus during the impairment), not whether ILSM is required. Planned impairments are actually lower risk precisely because ILSM measures can be implemented before the impairment begins. A facilities director who treats planned maintenance as exempt from ILSM requirements has a fundamental misunderstanding of the life safety management program.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls7",
      baseQuestion: "A surveyor observes that a medical-surgical unit's corridor has boxes of linens stored against the wall for approximately 6 feet. The nurse manager says 'those were delivered today and will be put away by evening.' What is the compliance concern?",
      baseOptions: [
        "No concern - temporary linen storage is a normal operational activity and does not constitute a life safety finding",
        "Corridor obstruction is an egress violation - corridors in healthcare occupancies must maintain the minimum required clear width at all times for patient evacuation. Materials stored in corridors, even temporarily, reduce the effective egress width and create a fire load. 'Will be put away by evening' is not an acceptable timeline for an active egress obstruction",
        "A finding only if the boxes reduce the corridor width below 4 feet - NFPA 101 allows temporary storage that does not reduce egress width below the minimum",
        "A concern only during active fire alarms - temporary corridor storage is acceptable during normal operations"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 101 healthcare occupancy corridor requirements prohibit obstructions that reduce clear egress width. Healthcare facilities routinely fail surveys for temporary storage in corridors - the 'it's just temporary' argument does not satisfy the standard. Corridors must maintain required clear width continuously for patient evacuation, which in hospitals may involve wheeling beds and non-ambulatory patients through the space under emergency conditions.",
      baseXp: 15,
      followUps: [
        {
          question: "The nurse manager responds that deliveries are made twice weekly and there is nowhere else to stage materials before they can be distributed. What is the correct facility-level response to this operational problem?",
          options: [
            "Accept the corridor staging as operational necessity and document the timing limits in policy",
            "Identify a compliant staging location - a designated staging room, alcove, or area that is not an exit access corridor. If no such space exists, the delivery schedule and receiving process must be redesigned to move materials directly to destination rather than staging in corridors. The absence of a staging area is a facility design problem that must be solved through process redesign, not by accepting a persistent life safety violation",
            "Allow corridor staging for up to 30 minutes after delivery - brief staging periods do not constitute an egress obstruction under NFPA 101",
            "Restrict deliveries to after-hours periods when corridor traffic is lower - reducing collision risk compensates for the egress width reduction"
          ],
          correctIndex: 1,
          explanation: "The operational problem of where to stage deliveries is real and requires a real solution - not policy language that normalizes an egress violation. The solution must identify or create a compliant staging space. If no such space exists, the process must change to eliminate the staging step. This may require coordination with the materials management department, redesign of the delivery schedule, or physical space modifications - all of which are preferable to a facility that consistently fails surveys for corridor storage.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls8",
      baseQuestion: "During a life safety inspection, a surveyor identifies that a facility's fire alarm system has been in a 'trouble' status for 11 days - specifically, a supervisory signal indicating a water flow device in the sprinkler system has not been retested since a recent repair. The facilities team is aware but states 'we're waiting for the sprinkler contractor.' What is required?",
      baseOptions: [
        "Waiting for the contractor is acceptable - fire alarm trouble conditions that do not affect active detection are low-priority findings",
        "An unresolved fire alarm system trouble status representing a potential sprinkler system compromise requires ILSM implementation for the affected area, proactive follow-up with the contractor to establish a repair timeline, and documentation of the trouble status and compensatory measures. An 11-day unresolved trouble signal without ILSM or documented escalation is a compliance finding",
        "The 'trouble' status is informational only - supervisory signals do not require ILSM unless the sprinkler system is confirmed non-operational",
        "The finding is the contractor's responsibility - when a licensed contractor is engaged, the facility's compliance obligation transfers to them during the repair period"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A fire alarm supervisory signal indicating a potential sprinkler system issue requires immediate action - not contractor scheduling. The facility must: document the trouble condition, assess the life safety impact, implement appropriate ILSM for affected areas, escalate contractor scheduling to achieve prompt repair, and monitor the system status daily. Compliance responsibility never transfers to the contractor - the facility is always accountable for the functional status of its life safety systems.",
      baseXp: 20,
      followUps: [
        {
          question: "The contractor performs the retesting and clears the trouble condition on day 14. The facilities director asks whether a post-repair inspection of the affected sprinkler zone is required. What is the answer?",
          options: [
            "No - clearing the trouble signal on the panel confirms the repair is complete and no further inspection is required",
            "Yes - NFPA 25 requires that any sprinkler system component that was repaired or replaced be tested following the repair to verify correct operation. Clearing a trouble signal confirms the device is communicating with the panel but does not confirm that the waterflow device operates correctly under flow conditions. A physical test of the repaired component is required before the post-repair ILSM measures can be lifted",
            "A post-repair inspection is required only if the trouble condition lasted more than 30 days",
            "No - the contractor's completion certificate satisfies the post-repair verification requirement without additional facility-conducted testing"
          ],
          correctIndex: 1,
          explanation: "NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) requires testing of repaired components. A panel trouble signal clearing indicates electrical continuity - it does not confirm that the mechanical device (waterflow sensor, control valve) functions correctly when needed. The post-repair test is a required verification step before the area returns to normal operational status. Contractor completion certificates document that work was performed, not that performance was verified.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls9",
      baseQuestion: "A hospital's emergency generator is tested monthly under load, as required. However, review of the test logs shows that the generator has never been tested for the required 30-minute continuous minimum run, with most tests lasting 8-12 minutes. The facilities director argues 'the generator starts and runs - it's working.' What does the abbreviated test duration miss?",
      baseOptions: [
        "Nothing significant - if the generator starts and runs for 10 minutes, it will function in an actual emergency",
        "A 30-minute minimum load test is required because generators can experience failures that only manifest after sustained operation - oil pressure issues, cooling system failures, fuel supply problems, and load-carrying limitations that do not appear during brief starts. An 8-minute test confirms starting function only; it does not verify sustained operational reliability under the load conditions that an actual extended outage would produce",
        "The abbreviated test is acceptable because modern generators have computerized diagnostics that would detect any operational problems",
        "The 30-minute requirement applies only to annual tests - monthly tests may be shorter"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The 30-minute minimum load test duration is based on the operational requirements of a real power failure scenario - hospitals may need generator power for hours or days. A brief start test confirms the generator cranks and runs; it does not test the sustained load-carrying capacity, cooling system function under continuous operation, fuel consumption rate, or the voltage stability needed to support life-critical equipment over extended periods. Only tests of sufficient duration reveal these failure modes.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities team proposes logging the actual duration of future tests at 30 minutes to satisfy the documentation requirement, while continuing the 8-12 minute operational practice. What does this proposal represent?",
          options: [
            "A pragmatic compliance solution - documentation accuracy is the compliance requirement",
            "Documentation fraud - falsifying test records to show required durations that were not performed is a serious compliance and integrity violation. It creates a false record that suggests the generator has been validated for sustained operation when it has not, and removes the safety signal that a properly documented abbreviated test would provide. If the generator fails during a real extended outage, the falsified records mean the facility missed the opportunity to detect the problem through legitimate testing",
            "An acceptable interim measure while the team works to extend test duration operationally",
            "Not fraud - the generator did run for the documented time, just not continuously; the total cumulative minutes from multiple tests satisfies the standard"
          ],
          correctIndex: 1,
          explanation: "Falsifying maintenance and testing records is a serious compliance violation that has real patient safety consequences. A falsified generator test log means the facility believes it has a reliable backup power system when the reliability has not actually been verified. If a real extended power outage occurs and the generator fails after 20 minutes - a failure that might have been caught during a proper 30-minute test - patients dependent on electrically powered equipment face life-threatening risk. Documentation integrity is not a bureaucratic formality; it is a patient safety safeguard.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls10",
      baseQuestion: "A surveyor observes that fire exit signs in a hospital corridor are illuminated with red LED lights while the NFPA-required color for exit sign lettering is green in this jurisdiction. The facilities director says 'these signs have been here for 20 years and were approved when installed.' What is the compliance status?",
      baseOptions: [
        "Compliant - signs approved at time of installation are grandfathered under original approval",
        "Potentially non-compliant - exit sign color requirements are jurisdiction-specific. If the authority having jurisdiction (AHJ) requires green lettering and the existing signs display red, the grandfathering status depends on whether the current edition of the adopted code requires replacement of non-conforming signs as part of a maintenance or life safety program update. The 20-year age of the signs and the active inspection history must be reviewed to determine the actual compliance status",
        "Compliant - federal NFPA standards allow both red and green exit sign colors and state requirements cannot override federal standards",
        "Non-compliant - all exit signs must be replaced within 90 days of a finding, regardless of installation approval history"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Exit sign compliance is AHJ-specific and subject to the adopted code edition. While some jurisdictions accept both colors, others are specific. Grandfathering provisions exist but require that the installation was code-compliant at the time and that no subsequent code adoption requires replacement. The 20-year history and previous inspection records must be reviewed - if the AHJ has cited this finding on prior inspections without requiring replacement, the current surveyor's citation still requires response through the AHJ's standard compliance process.",
      baseXp: 15,
      followUps: [
        {
          question: "Review of prior inspection records shows this was cited at a 2018 inspection and the facility submitted a plan of correction committing to replacement 'within 2 years.' It is now 2026 and the signs have not been replaced. What is the significance of the prior plan of correction?",
          options: [
            "The plan of correction commitment has lapsed - new citations start fresh and the prior plan does not affect the current finding's severity",
            "A prior plan of correction that was not completed is a significant aggravating factor - it indicates the facility acknowledged the deficiency, committed to correction, and failed to fulfill the commitment. This pattern of acknowledged-but-uncorrected deficiency demonstrates that the compliance process is not driving actual correction. The current inspection finding is now part of a documented pattern of non-compliance rather than a new, isolated finding",
            "The prior plan of correction protects the facility from citation - documenting a correction plan satisfies the compliance standard even if implementation is delayed",
            "The 2-year commitment is the binding standard - the facility has until 2020 to complete the replacement, which has passed, making this a current non-compliance finding from 2020"
          ],
          correctIndex: 1,
          explanation: "Prior plans of correction that were not executed are a serious survey finding because they reveal that the accreditation feedback loop is not functioning - the facility received a finding, committed to fix it, and did not. This pattern represents a leadership and facilities management accountability failure. It converts a routine compliance finding into evidence of a systemic program gap, and JC and other surveyors treat it with corresponding seriousness. The time elapsed since the commitment makes this substantially worse than a new finding.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls11",
      baseQuestion: "A hospital stores compressed oxygen cylinders in a corridor adjacent to the ED, chained in groups of 6 to a wall bracket. The corridor is also used for patient transport and is an exit access route. What life safety and NFPA compliance concerns are present?",
      baseOptions: [
        "No concerns - compressed gas cylinders secured by chains are a compliant storage method in any corridor",
        "Multiple concerns: (1) compressed oxygen in storage quantities in exit access corridors creates a fire accelerant hazard and egress obstruction; (2) NFPA 99 and 55 require that medical gas storage areas have specific construction, ventilation, and separation requirements that corridors do not meet; (3) chaining cylinders to walls does not substitute for proper storage room requirements; (4) the egress width may be compromised",
        "Limited concern - the chain restraint satisfies the tip-over prevention requirement, which is the primary regulatory focus for compressed cylinder storage",
        "A concern only if the oxygen cylinders are not capped - capped cylinders in corridors are a minor finding"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 99 and 55 establish specific requirements for medical gas storage that include dedicated storage rooms with appropriate ventilation, fire rating, signage, and quantity limits. Corridor storage of compressed oxygen cylinders violates both the egress requirements for corridors and the medical gas storage construction requirements. Even secured cylinders in corridors are non-compliant - the solution is a code-compliant storage room, not better securing in an inappropriate location.",
      baseXp: 20,
      followUps: [
        {
          question: "The ED director argues that immediate access to oxygen cylinders in the corridor is a clinical necessity - transport to a storage room adds time during respiratory emergencies. How should this operational concern be addressed?",
          options: [
            "Accept corridor storage for 'emergency access' cylinders - clinical urgency is a recognized NFPA exception for immediate-use quantities",
            "NFPA 99 allows a limited number of cylinders to be maintained at the point of use (typically 12 cylinders or less, depending on the standard version and gas type) - these must be within the clinical area they serve, not in an egress corridor. A compliant solution would be properly designed storage integrated into the ED clinical space rather than in the exit access corridor. The operational concern is legitimate and should drive a design solution that achieves both clinical access and life safety compliance",
            "Allow up to 3 cylinders in the corridor as a reasonable emergency access exception - quantities under 4 are below NFPA 55 threshold for separate storage requirements",
            "The clinical urgency exception is unlimited for oxygen - oxygen is a life-sustaining gas and emergency access needs supersede storage location requirements"
          ],
          correctIndex: 1,
          explanation: "NFPA 99 includes provisions for gases in use and in storage within the clinical area - these are distinct from storage room requirements. The operational concern about emergency access is valid and can be addressed within NFPA-compliant parameters: a limited quantity at point of use, within the clinical space (not the exit access corridor), with appropriate securing and signage. The solution is facility design that integrates compliant storage into the clinical environment, not corridor storage justified by urgency.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls12",
      baseQuestion: "A hospital's environment of care rounds identify that a patient room's sprinkler head has been painted over during a recent room renovation. The sprinkler is covered with at least two coats of paint. What is the required action?",
      baseOptions: [
        "Document the finding and schedule the sprinkler head for replacement at the next scheduled maintenance cycle",
        "The painted-over sprinkler head must be replaced immediately - NFPA 25 prohibits any coating on sprinkler heads because paint alters the thermal response characteristics of the fusible element, delaying or preventing actuation in a fire. The sprinkler is non-functional in its current condition and the area must be treated as having an impaired suppression system until replacement is completed",
        "The paint can be removed chemically without replacing the sprinkler head - cleaning restores functionality",
        "One coat of paint is acceptable; two or more coats require replacement - a single coat does not materially alter thermal response"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "NFPA 25 is unambiguous - any coating on a sprinkler head, including paint, renders it non-compliant and requires replacement, not cleaning. Paint alters the thermal dynamics of the fusible element and can prevent the sprinkler from operating at the designed temperature. A single painted sprinkler in a patient room means that room has no suppression coverage. The area must be treated as an impaired zone until the sprinkler is replaced by a licensed contractor.",
      baseXp: 15,
      followUps: [
        {
          question: "Investigation reveals the sprinkler was painted because the renovation contractor was not instructed to protect sprinkler heads before painting. Five other rooms in the same renovation project are found to have painted sprinklers. What must the Environment of Care program do to prevent recurrence?",
          options: [
            "Issue a corrective action notice to the contractor - individual contractor accountability is the appropriate response",
            "The EC program must establish a construction and renovation oversight process that includes: (1) pre-construction briefing of all contractors on sprinkler head protection requirements; (2) infection control and life safety rounds during renovation that specifically check for sprinkler head coverage; (3) a post-construction life safety inspection checklist that includes sprinkler head visual inspection before new occupancy; and (4) contractual requirements that obligate contractors to protect and verify life safety systems during work",
            "Implement a policy that requires contractors to submit written plans for sprinkler protection - documentation prevents recurrence",
            "The contractor is solely responsible - facilities management has no obligation to monitor contractor compliance with NFPA 25 during renovation"
          ],
          correctIndex: 1,
          explanation: "Finding six painted sprinkler heads in one renovation project indicates a systemic oversight failure, not a one-time contractor error. The EC program's obligation is to establish controls that prevent this from occurring - not just to respond after the fact. Pre-construction briefings, mid-renovation rounds, post-renovation inspections, and contractual requirements are all required components of a renovation life safety management program. Waiting for contractors to self-comply without oversight is not an acceptable control.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls13",
      baseQuestion: "During a survey, a surveyor asks a nursing staff member to locate the nearest fire extinguisher. The staff member walks the surveyor to a cabinet, opens it, and finds a fire extinguisher with a pressure gauge reading below the green zone. The extinguisher tag shows the last monthly inspection was 3 months ago. What are the compliance findings?",
      baseOptions: [
        "One finding - the extinguisher pressure is low and requires servicing",
        "Multiple findings: (1) the fire extinguisher pressure is out of service range - it cannot be relied upon for fire suppression; (2) monthly inspection records are 3 months overdue - the facility's fire extinguisher inspection program is not functioning; (3) the combination of an unmaintained, out-of-service extinguisher and a gap in the inspection program means the life safety system has been compromised for an unknown period",
        "The finding is limited to the inspection record gap - visual pressure gauge readings are supplementary indicators, not primary compliance metrics",
        "A single finding - monthly inspections that are 3 months overdue, with the extinguisher pressure being a consequence of the inspection lapse"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Both findings are independent compliance problems: the out-of-service extinguisher represents a non-functional life safety device in a patient care area, and the inspection lapse represents a systemic program failure. The combination reveals that the monthly inspection program is not functioning - raising the question of how many other extinguishers across the facility are in similar condition. This warrants an immediate sweep of all extinguishers, not just replacement of this one.",
      baseXp: 15,
      followUps: [
        {
          question: "The facilities manager proposes replacing the one extinguisher and updating the inspection log. The surveyor asks whether a facility-wide extinguisher inventory audit was conducted after the finding. The manager says 'just this one was checked.' What must happen?",
          options: [
            "Replacing the identified extinguisher satisfies the corrective action requirement - the finding was specific to this location",
            "The discovery of an out-of-service extinguisher with a 3-month inspection gap is a sentinel indicator of a systemic inspection program failure - a facility-wide audit of all extinguishers is required to determine the scope of the problem. One identified extinguisher represents the inspectors' access point, not the boundary of the problem. JC would expect a comprehensive response that assesses whether the inspection program is functioning for all life safety devices, not just the one that was observed",
            "The log update closes the finding - inspectors are authorized to conclude their review with corrective action documentation",
            "Audit only the unit where the finding occurred - systemic inspection failures are typically unit-specific, not facility-wide"
          ],
          correctIndex: 1,
          explanation: "When a single finding reveals a potential systemic process failure - in this case, an inspection program that missed a 3-month interval for at least one device - the correct response evaluates the scope of the failure. Replacing one extinguisher while leaving potentially dozens of other uninspected, possibly out-of-service extinguishers across the facility is an inadequate corrective response. The inspection program failure is the root cause; the individual extinguisher is just its visible consequence.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls14",
      baseQuestion: "A hospital's fire alarm panel shows a 'zone 4 detector offline' supervisory signal. The facilities team has been notified but has taken no action for 5 days. Zone 4 covers the medical records and pharmacy storage area. What must happen?",
      baseOptions: [
        "Schedule repair within the standard maintenance queue - supervisory signals are low-priority findings",
        "Implement immediate ILSM for zone 4 - a detector offline in any area means that area has reduced fire detection capability. ILSM must include a fire watch or equivalent compensatory measure, notification of affected staff, documentation of the impairment, and an urgent repair schedule. A 5-day delay without ILSM is non-compliant",
        "The zone 4 area is non-patient-care (medical records, pharmacy storage) - ILSM is only required for patient care areas",
        "Notify local fire department and await their guidance before implementing compensatory measures"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "A detector offline in any zone - including non-patient-care areas - means that fire in that zone will not be detected by the automatic system. This requires ILSM immediately. The medical records and pharmacy storage area contains combustible materials, medications, and serves as a critical facility function area. ILSM for a detector-offline impairment typically includes increased patrol frequency of the affected area, staff notification, and documentation. A 5-day delay without compensatory measures is a serious compliance failure.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities director argues that the pharmacy and medical records area is unoccupied overnight, so the fire risk is lower and ILSM is less urgent. Does occupancy status affect the ILSM requirement?",
          options: [
            "Yes - unoccupied areas have lower fire risk and reduced ILSM requirements",
            "No - fire in an unoccupied area can spread to occupied areas. The purpose of fire detection is to warn all building occupants of fire anywhere in the building, regardless of where the fire originates. An undetected fire in pharmacy storage that reaches patient areas before occupants can evacuate is a catastrophic outcome. Occupancy status of the zone affects the immediate life risk in that zone; it does not reduce the building-wide fire detection system's function or the ILSM requirement",
            "Partially - the ILSM frequency of patrol can be reduced for unoccupied zones during overnight hours",
            "Correct - NFPA 72 recognizes occupancy-based adjustment of fire watch requirements for detector-impaired zones"
          ],
          correctIndex: 1,
          explanation: "Fire detection system impairments are managed at the building level, not the zone level. A fire that starts in an undetected zone and spreads to patient care areas is the scenario that fire detection exists to prevent. The impaired zone's occupancy status is irrelevant to the system-level function - the building's fire alarm cannot alert occupants to a fire it cannot detect. ILSM applies regardless of zone occupancy.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls15",
      baseQuestion: "A hospital's EOC committee reviews its life safety compliance program and finds the following: fire drills are conducted 4 times per shift per year (compliant), fire extinguisher inspections are monthly (compliant), and fire door inspections are completed annually (compliant). The committee chair declares the life safety program fully compliant. A board member asks about utility system documentation. What might be missing?",
      baseOptions: [
        "Nothing - the three components reviewed cover the full scope of JC life safety compliance",
        "The EOC review may not have addressed: (1) testing and inspection of the emergency generator and transfer switches per NFPA 110; (2) medical gas system testing and certification; (3) electrical system inspection records; (4) elevator recall testing; (5) smoke detector sensitivity testing; (6) sprinkler system annual inspection per NFPA 25; and (7) HVAC system maintenance records relevant to pressure relationships in protective environments. Life safety compliance encompasses far more than drills, extinguishers, and fire doors",
        "Only the sprinkler system inspection - the three reviewed components plus sprinklers constitute the complete life safety program",
        "The program is complete - regulatory bodies consider drills, extinguishers, and fire doors the core compliance indicators"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The JC Environment of Care and Life Safety chapters encompass a comprehensive set of systems and processes. Fire drills, extinguisher inspections, and fire door testing are visible elements of a much larger program that includes utility system management (emergency generators, medical gas, electrical), fire suppression (sprinklers, suppression systems), detection (smoke detector testing), and specialized area requirements (protective environments, operating rooms, hazardous material storage). A committee that declares compliance based on three components has an incomplete program assessment.",
      baseXp: 20,
      followUps: [
        {
          question: "The board member asks why the EOC committee has not been reviewing utility system documentation as part of its quarterly compliance review. The committee chair says 'that's a facilities department function.' What does this response reveal?",
          options: [
            "An appropriate division of responsibilities - clinical quality committees should not duplicate facilities management oversight functions",
            "A governance gap - the EOC committee is the governance body responsible for overseeing all environment of care elements, including utility system management. Delegating review to the facilities department without governance oversight means the committee does not know whether utility compliance is being maintained. JC expects the EOC committee to review utility system data and compliance documentation - facilities staff execute the program, but governance oversight requires committee-level visibility into results",
            "A reasonable delegation - utility system management is too technical for committee-level review",
            "Correct - the committee should focus on clinical safety; physical plant compliance is a management responsibility"
          ],
          correctIndex: 1,
          explanation: "The EOC committee's governance function includes oversight of all environment of care elements - not just those that are clinically visible. Utility system failures can have direct patient care consequences (power failures to life-critical equipment, medical gas contamination, HVAC failures in protective environments). The committee's responsibility is to review reports from the departments that execute these programs and to ensure accountability for compliance. 'That's a facilities department function' reflects delegation without oversight, which is a governance failure.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls16",
      baseQuestion: "A hospital wing undergoes exterior window replacement. During the project, fire-rated window assemblies in two stairwell exit enclosures are replaced with non-rated tempered glass windows to reduce cost. The contractor states the glass is 'safety glass' and the change is not reported to the facilities team or AHJ. What life safety violation occurred and what must happen?",
      baseOptions: [
        "No violation if the glass meets ASTM safety standards - safety glass in exit enclosures is an acceptable substitution for fire-rated assemblies",
        "A serious life safety violation - exit stairwell enclosures require fire-rated assemblies to maintain their function as protected exit paths. Replacing fire-rated windows with non-rated glass eliminates the fire compartmentalization of the exit enclosure. Changes to fire-rated assemblies require AHJ notification, permit approval, and inspection. The non-rated windows must be replaced with compliant assemblies, and the AHJ must be notified of the unauthorized change",
        "A contractor compliance issue only - the facility's obligation is to remove the non-compliant contractor from the project",
        "Non-compliant but manageable - fire watch for the stairwells until the next renovation cycle satisfies the life safety requirement"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Exit stairwell enclosures are fire-rated protected paths - their walls, doors, and windows must all maintain the fire rating to preserve the exit enclosure's protective function. Non-rated glass in a stairwell enclosure eliminates the fire separation at those openings. This is not a minor variation - it fundamentally compromises the exit path that occupants depend on for safe egress during a fire. The AHJ must be notified, permits must be evaluated, and compliant assemblies must be installed.",
      baseXp: 20,
      followUps: [
        {
          question: "The facilities director asks whether ILSM (fire watch) is sufficient to compensate for the non-rated windows while compliant replacements are scheduled. Is fire watch an adequate compensatory measure for a compromised exit enclosure?",
          options: [
            "Yes - fire watch is the universal ILSM compensatory measure for any fire rating impairment",
            "Fire watch is an interim measure but is not equivalent to restoring the fire-rated assembly. For a compromised exit enclosure, the compensatory measures must be commensurate with the risk - which may include emergency alterations to restore at least partial separation (temporary fire-rated glazing), evaluation of alternate egress paths, and accelerated replacement scheduling. Fire watch alone does not restore the exit enclosure's protective function; it provides detection without protection",
            "Yes - NFPA 101 explicitly approves fire watch as an equivalent compensatory measure for any fire-rated assembly impairment",
            "Fire watch is not required for exit enclosures - only for patient care areas adjacent to impaired suppression systems"
          ],
          correctIndex: 1,
          explanation: "ILSM compensatory measures must be matched to the specific risk created by the impairment. A non-rated window in an exit stairwell creates a fire spread pathway into the one area that must remain protected during evacuation. Fire watch provides notification - it does not restore the protective separation function. Interim restoration options (temporary fire-rated panels, boarding) and accelerated repair timelines are appropriate responses to this severity of compromise, with fire watch as a supplementary measure rather than the sole response.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls17",
      baseQuestion: "A hospital's life safety environment of care rounds are conducted monthly by a rotating group of department managers. A surveyor reviews 12 months of round reports and finds that the same corridor, door, and storage deficiencies are cited each month without evidence of correction between rounds. What does this pattern reveal?",
      baseOptions: [
        "Active monitoring - the consistency of findings demonstrates the rounds program is working correctly",
        "A fundamental program failure - monthly rounds that repeatedly identify the same deficiencies without correction reveal that the rounds generate findings but do not drive correction. The life safety rounds program's value is its ability to identify and correct deficiencies; repeated identification without closure means the program is producing reports, not improving safety",
        "A documentation problem - deficiencies may have been corrected but re-cited because the correction was not documented in the round report",
        "Normal variance - some corridor and door deficiencies recur because they reflect high-traffic wear that is expected"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "EOC rounds exist to identify and correct life safety deficiencies - not merely to document them. When the same deficiencies appear month after month without resolution, the rounds are functioning as observation exercises rather than improvement drivers. This indicates a failure in the corrective action process: either deficiencies are not being assigned to responsible parties, corrective action timelines are not being tracked, or completion is not verified before the next round cycle.",
      baseXp: 15,
      followUps: [
        {
          question: "The EOC committee proposes redesigning the rounds process to include a corrective action tracking system where each finding is assigned a responsible party, an action-by date, and a verification requirement before closure. What governance change must accompany this operational redesign?",
          options: [
            "No governance change is needed - the operational redesign is sufficient to address the finding pattern",
            "The EOC committee must itself review the corrective action tracking report at each meeting - not just receive assurance that the tracking system exists. Governance oversight requires that the committee can see open findings, aging deficiencies, and closure rates, and can hold accountable the managers responsible for corrective action. A tracking system without committee-level review is operationally useful but not sufficient to close the governance gap revealed by 12 months of unaddressed findings",
            "Assign a dedicated life safety officer to manage the corrective action system - individual accountability replaces committee governance for operational programs",
            "Implement quarterly rather than monthly rounds - fewer rounds will allow more time between cycles for correction"
          ],
          correctIndex: 1,
          explanation: "The 12-month pattern of unaddressed findings reveals a governance failure - the EOC committee was receiving round reports without accountability for closure. The operational redesign (tracking system) changes what data is collected; the governance change (committee review of tracking data with accountability) changes what happens as a result. Both are required. Without committee-level visibility into open and aging findings, the tracking system itself may also be circumvented or under-utilized.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls18",
      baseQuestion: "A surveyor conducts a life safety walk and asks the accompanying nurse educator to explain the RACE acronym. The educator correctly explains R-A-C-E. The surveyor then asks what 'PASS' stands for and how to use a fire extinguisher. The educator correctly explains PASS. The surveyor then activates a portable fire extinguisher training device and asks the educator to demonstrate use. The educator has difficulty locating the safety pin and then loses control of the hose. What does the simulation reveal?",
      baseOptions: [
        "An individual performance gap - one nurse's difficulty does not indicate a systemic training finding",
        "A competency gap between knowledge and physical skill - the educator could recite RACE and PASS (demonstrating theoretical knowledge) but could not demonstrate competent physical use of an extinguisher (demonstrating applied competency). JC fire safety training must build operational competency, not just knowledge recall. Staff who cannot physically operate a fire extinguisher effectively under simulated conditions would be ineffective during an actual fire",
        "No finding - extinguisher operation is a facilities responsibility, not a nursing competency requirement",
        "A finding only if the educator is the designated fire safety officer - bedside nurses are not expected to operate extinguishers"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "JC fire safety competency expectations include the ability to actually operate fire response equipment - not just know the acronyms. Knowledge of RACE and PASS is necessary but not sufficient. An educator who teaches fire safety to clinical staff but cannot physically demonstrate extinguisher operation has a gap between what they teach and what they can do. This gap likely reflects training that emphasizes knowledge testing over skill practice - a common fire safety education deficiency.",
      baseXp: 20,
      followUps: [
        {
          question: "The nurse educator's annual fire safety competency was verified by a 10-question online module with a 100% passing score. How does this case demonstrate the limitation of online module-based competency verification for life safety skills?",
          options: [
            "Online modules are equivalent to skills demonstration for knowledge-based competencies like fire safety - the passing score validates the competency",
            "Online modules test recall of factual content - they cannot assess motor skills, spatial reasoning in emergency conditions, or the ability to execute a skill under stress. Fire extinguisher operation is a physical skill that requires hands-on practice for competency. A 100% score on a written test of PASS components does not predict whether a person can actually pull the pin, aim the nozzle, squeeze the handle, and sweep the discharge - particularly in a smoke-filled, chaotic environment",
            "Online modules are appropriate for all JC fire safety competencies - skills demonstration is only required for high-risk clinical skills, not life safety skills",
            "The online module limitation is specific to this educator's learning style - other staff with different learning profiles achieve equivalent competency through online training"
          ],
          correctIndex: 1,
          explanation: "This case illustrates a fundamental principle of competency assessment: the method must match the nature of the competency being assessed. Knowledge of fire safety information is a cognitive competency testable by written exam. Operating a fire extinguisher is a psychomotor competency that requires hands-on demonstration and feedback. Using a knowledge test to verify a psychomotor competency produces false validation - the person 'passes' without demonstrating the skill that matters. Fire safety training programs must include periodic hands-on skills demonstration for all staff.",
          expertXp: 30
        }
      ]
    },
    {
      id: "dd-ls19",
      baseQuestion: "During a life safety tracer, a surveyor examines the fire door at the entrance to the ICU. The door has a self-closing mechanism, latches when released, and appears fully operational. However, the surveyor notices that the door frame has visible light infiltration around three sides when the door is closed. What is the significance of this finding?",
      baseOptions: [
        "No significance - light infiltration around a closed door is a cosmetic finding without life safety implications",
        "Visible light around a closed fire door indicates gaps in the door-frame assembly that compromise the fire rating - smoke and hot gases can pass through gaps that are large enough to transmit light. The gaps may result from warped frames, missing intumescent seals, or damaged door hardware. A fire door that allows light infiltration may not provide the rated protection during a fire event",
        "Significance only if the light infiltration exceeds 1/4 inch in width - small gaps are within tolerance for fire door assemblies",
        "The finding is limited to energy efficiency - light around doors indicates air infiltration that affects HVAC performance but not fire door function"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "Light infiltration around a closed fire door is a recognized indicator of gap integrity failure. NFPA 80 specifies clearance requirements for fire doors (typically 1/8 inch on sides and top, 3/4 inch at the bottom for unsealed doors) - gaps that allow visible light may exceed these tolerances. Intumescent seals that are missing, deteriorated, or compressed will not expand in heat to close the gaps during a fire. This requires repair by a qualified fire door inspector.",
      baseXp: 15,
      followUps: [
        {
          question: "The facilities team schedules the door frame repair for the next maintenance cycle 'in about 6 weeks.' Is this timeframe compliant for a compromised ICU fire door?",
          options: [
            "Yes - 6 weeks is within the standard maintenance scheduling timeframe for non-emergency findings",
            "No - a compromised fire door in an ICU fire compartment boundary requires prompt repair, not standard queue scheduling. The ICU contains non-ambulatory patients who depend entirely on fire compartmentalization for survival. A gap-compromised fire door between the ICU and adjacent areas means the compartment boundary is not functioning as rated. This should trigger ILSM documentation for the affected compartment and an accelerated repair timeline - typically days, not weeks, for patient care area fire door failures",
            "Compliant if the ICU has redundant fire doors in the same compartment boundary - backup fire doors reduce urgency",
            "Yes if the door's self-closing mechanism is functioning - the self-closing function is the primary fire door performance criterion; gap sealing is secondary"
          ],
          correctIndex: 1,
          explanation: "Repair timeline urgency for life safety findings must be proportional to the risk created by the deficiency. A gap-compromised fire door in an ICU - where patients are fully dependent on compartmentalization for evacuation protection - is not a standard maintenance queue item. ILSM documentation for the affected compartment and an accelerated repair timeline reflect the urgency appropriate to the risk. A 6-week repair timeline treats a patient safety issue as a routine maintenance item.",
          expertXp: 25
        }
      ]
    },
    {
      id: "dd-ls20",
      baseQuestion: "A hospital's life safety officer documents a hazardous materials storage room that has flammable liquids (isopropyl alcohol, acetone) stored on metal shelving without secondary containment, adjacent to an electrical panel with a 12-inch clearance. The OSHA standard requires 36-inch clearance around electrical panels. What life safety violations are present?",
      baseOptions: [
        "One finding - the OSHA 36-inch electrical panel clearance is the primary violation; the liquid storage is acceptable in a designated hazardous materials room",
        "Multiple findings: (1) flammable liquids stored without secondary containment in a metal-shelf room create a spill fire risk - NFPA 30 requires secondary containment to prevent spilled flammables from spreading; (2) the 12-inch clearance from flammable liquids to an electrical panel is a combustion hazard - an arc or spark from the panel could ignite flammable vapors; (3) OSHA 29 CFR 1910.303 requires 36 inches of clear working space in front of electrical panels; the combination of violations creates an intersecting fire and explosion risk",
        "The finding is limited to the electrical panel clearance - hazardous materials storage is subject to EPA regulations, not OSHA or NFPA during facility inspections",
        "A single combined finding - OSHA electrical clearance requirements subsume the NFPA flammable storage concerns"
      ],
      baseCorrectIndex: 1,
      baseExplanation: "The co-location of flammable liquids without secondary containment adjacent to an electrical panel with insufficient clearance creates an additive life safety risk. A spill from the shelving without secondary containment allows flammable liquid to reach the panel area. An arc at the panel ignites the flammable vapor from the spill or from the liquid's evaporation. Each violation is independently citable; their combination creates a potentially catastrophic incident scenario.",
      baseXp: 20,
      followUps: [
        {
          question: "The safety officer proposes addressing both findings by relocating the electrical panel rather than the flammable storage - the panel is fixed infrastructure but the storage can be moved. The facilities team argues that panel relocation is costly and difficult. Who is correct, and what is the optimal solution?",
          options: [
            "The safety officer - the electrical panel should be relocated to resolve both findings simultaneously",
            "The facilities team is correct that flammable storage relocation is the easier solution. The optimal response is to: (1) immediately remove the flammable liquids from the current room; (2) identify a compliant NFPA 30 flammable storage room or cabinet; (3) install secondary containment in the compliant storage location; (4) restore the 36-inch electrical panel clearance by removing all storage from the panel proximity. This resolves both violations without major infrastructure work. Panel relocation should be evaluated only if no compliant alternative storage exists",
            "The facilities team is correct - electrical panel relocation is the definitive solution, and a 3-year capital plan timeline is acceptable for infrastructure projects",
            "Neither - both findings must be reported to OSHA and AHJ simultaneously before any corrective action may be taken"
          ],
          correctIndex: 1,
          explanation: "The most efficient resolution addresses the modifiable element - storage can be moved more easily than fixed electrical infrastructure. Removing the flammable liquids from the room eliminates both the NFPA 30 containment violation and the fire proximity hazard near the panel, while also restoring the required electrical panel clearance. This is a rapid, low-cost solution that does not require capital investment. The principle is to match the corrective action to the easiest compliant solution, not the most complex one.",
          expertXp: 25
        }
      ]
    }
  ]
};
