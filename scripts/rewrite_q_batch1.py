with open('shared/questions.ts', 'r') as f:
    content = f.read()

def replace_questions(content, first_id, end_marker, new_block):
    q_start = content.find(f'    questions: [\n      {{\n        id: "{first_id}"')
    q_end = content.find(end_marker, q_start)
    if q_start == -1 or q_end == -1:
        print(f"FAIL: markers not found for {first_id} (start={q_start}, end={q_end})")
        return content
    out = content[:q_start] + new_block + content[q_end:]
    print(f"OK {first_id}: {q_end - q_start} chars → {len(new_block)} chars")
    return out

# ─── TRANSPORT (t1-t20) ──────────────────────────────────────────────────────
new_transport = '''    questions: [
      {
        id: "t1",
        question: "After a case you spray enzymatic, close the bin, and use the soiled corridor. Correct?",
        options: [
          "Yes. Enzymatic spray, a secured lid, and the soiled corridor are all three required steps.",
          "No. You must rinse with water before applying enzymatic spray.",
          "No. Only SPD staff may apply enzymatic spray at the decon sink.",
          "No. Keep the lid open so the enzymatic spray can work during transport."
        ],
        correctIndex: 0,
        explanation: "All three steps are correct: enzymatic spray at the point of use, lid secured before transport, and soiled corridor used. Missing any one of these is a finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t2",
        question: "A surveyor sees your hemostats locked shut in the transport bin. What do you say?",
        options: [
          "Hinged instruments must travel open so cleaning solution can reach the box locks and jaw areas.",
          "Locked instruments protect tips and maintain alignment during transport to SPD.",
          "Each instrument should be individually wrapped before placing in the bin.",
          "You rinse with sterile water and dry before transport."
        ],
        correctIndex: 0,
        explanation: "Hinged instruments must be in the open position during transport. Locked jaws and box locks block cleaning solution from the areas where bioburden collects.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t3",
        question: "After a case, you store the clean red bins in the soiled utility room. Is this correct?",
        options: [
          "No. Clean bins must be stored in the clean supply room to prevent contamination before use.",
          "Yes. Staging clean bins in the soiled utility room speeds up case turnover.",
          "Yes. The soiled utility room is the correct staging area for all transport equipment.",
          "Yes. Clean bins stay in the soiled utility room until the next case begins."
        ],
        correctIndex: 0,
        explanation: "Clean bins must go in the clean supply room when not in use. Storing them in the soiled utility room contaminates the exterior before the bins ever touch clean instruments.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t4",
        question: "A surveyor asks what PPE your soiled utility room must have. What do you answer?",
        options: [
          "Gloves, gown, face shield or goggles, and a mask — all four are required.",
          "Gloves and a mask. Eye protection is only needed during active decontamination.",
          "Gloves, gown, and eye protection. Masks are only required during aerosol-generating tasks.",
          "Gloves, gown, and a mask. Eye protection is optional unless you are spraying chemicals."
        ],
        correctIndex: 0,
        explanation: "All four PPE elements are required in the soiled utility room: gloves, gown, face shield or goggles, and a mask. Missing any one element is incomplete PPE and a compliance finding.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t5",
        question: "You apply enzymatic spray but leave the bin lid off during transport. Is that okay?",
        options: [
          "No. The lid must be secured before you leave the OR. An open container risks splashing and contamination in the corridor.",
          "Yes. Leaving the lid open lets the enzymatic spray ventilate and work more effectively.",
          "Yes. An open container lets you confirm instruments stay covered during transport.",
          "Yes. The lid is only required when sharing an elevator with clean supplies."
        ],
        correctIndex: 0,
        explanation: "The lid must be secured before transport begins. An open bin can splash and spread contamination through the soiled corridor.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t6",
        question: "The soiled corridor adds three minutes. Can you cut through the clean core?",
        options: [
          "No. Soiled instruments must use the designated soiled corridor every time, regardless of distance.",
          "Yes. A sealed container in the clean core is acceptable for short distances.",
          "Yes. Full PPE and a sealed container make the clean core acceptable.",
          "Yes. A three-minute difference is within facility variance guidelines."
        ],
        correctIndex: 0,
        explanation: "Distance and convenience never justify using a clean corridor. Your soiled instruments belong in the soiled corridor, every time, every case.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t7",
        question: "A case ended ten minutes ago and instruments are still on the back table. What is the risk?",
        options: [
          "Bioburden is drying on the instrument surfaces, which makes decontamination much harder for SPD.",
          "Residual moisture will cause corrosion on the instrument surfaces.",
          "Airborne contaminants will colonize the instruments and require extended sterilization cycles.",
          "The enzymatic spray window will expire, requiring full soaking at SPD."
        ],
        correctIndex: 0,
        explanation: "Dried-on blood and tissue is much harder for SPD to remove. Point-of-use prep should begin as soon as the case ends.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t8",
        question: "A surveyor sees heavy retractors stacked on top of your microsurgical instruments. What is wrong?",
        options: [
          "Heavy instruments must go on the bottom. Delicate instruments go on top to prevent damage.",
          "Retractors and microsurgical instruments must be transported in completely separate bins.",
          "There is no required stacking order as long as the lid is secured.",
          "Enzymatic spray cushions instruments during transport and prevents contact damage."
        ],
        correctIndex: 0,
        explanation: "Heavy instruments go on the bottom, delicate instruments on top. Stacking heavy items on microsurgical instruments damages tips, jaws, and alignment.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t9",
        question: "Your soiled utility room has pre-cleaner, PPE, and waste receptacles. A surveyor is coming. What is missing?",
        options: [
          "A hand hygiene station. All four items are required: pre-cleaner, PPE, waste receptacles, and a hand hygiene station.",
          "Nothing. Those three items fulfill all requirements for a soiled utility room.",
          "An eyewash station is required wherever chemicals are stored.",
          "Hand hygiene stations are only required at the room exit, not inside."
        ],
        correctIndex: 0,
        explanation: "Your soiled utility room needs all four: pre-cleaner, PPE, waste receptacles, and a hand hygiene station. All four must be present for full compliance.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t10",
        question: "What does enzymatic spray actually do when you apply it at the point of use?",
        options: [
          "It prevents bioburden from drying on instrument surfaces during transport. It does not disinfect or sterilize.",
          "It begins high-level disinfection so instruments arrive partially cleaned at SPD.",
          "It fully breaks down blood and tissue so SPD decontamination is faster.",
          "It lubricates instrument joints and hinges for easier cleaning."
        ],
        correctIndex: 0,
        explanation: "Enzymatic spray has one job: prevent bioburden from drying and hardening on instruments during transport. Disinfection and sterilization happen at SPD, not at the point of use.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t11",
        question: "A surveyor asks who is responsible for point-of-use instrument prep. What do you say?",
        options: [
          "OR staff at the point of use. You remove bioburden, open instruments, apply enzymatic spray, and secure the container.",
          "The surgeon who performed the case is responsible for post-case instrument handling.",
          "The SPD technician who receives the tray at the decontamination window handles prep.",
          "The charge nurse assigns point-of-use prep responsibility at the start of each case."
        ],
        correctIndex: 0,
        explanation: "OR staff are responsible for point-of-use prep: remove bioburden, open instruments, apply enzymatic spray, secure the container, and transport via soiled corridor.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t12",
        question: "You are wearing gloves, gown, and goggles while handling soiled instruments. What is missing?",
        options: [
          "A mask. All four elements are required: gloves, gown, eye protection, and a mask.",
          "Nothing. Goggles provide complete facial protection for soiled instrument handling.",
          "A mask is only required in the SPD decontamination room, not at the point of use.",
          "Nothing. Masks are only required for aerosol-generating procedures."
        ],
        correctIndex: 0,
        explanation: "All four PPE elements are required when handling soiled instruments: gloves, gown, eye protection, and a mask. The mask protects you from aerosolized bioburden.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t13",
        question: "You separate sharps from delicate instruments using a protective mat in the transport bin. Acceptable?",
        options: [
          "Yes. A protective mat that separates sharps from delicate instruments prevents injury and instrument damage.",
          "No. Only rigid dividers are an approved barrier method for sharps separation.",
          "No. Sharps must be disposed of in a sharps container immediately and never transported to SPD.",
          "No. Sharps must always go in a completely separate dedicated bin."
        ],
        correctIndex: 0,
        explanation: "A protective mat that separates sharps from delicate instruments is acceptable. The goal is preventing sharps injuries and instrument damage during transport.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "t14",
        question: "You use the soiled elevator, soiled corridor, and enter SPD through the decon door. Is that correct?",
        options: [
          "Yes. Soiled elevator, soiled corridor, and decon entry follow the correct soiled pathway all the way through.",
          "No. Instruments should enter through the clean side of SPD for logging before decon.",
          "No. Soiled instruments must enter only through the SPD receiving window.",
          "No. The soiled elevator should not be used when a dumbwaiter is available."
        ],
        correctIndex: 0,
        explanation: "This is the correct pathway. Soiled instruments enter SPD through the decontamination side, following designated soiled pathways from OR to decon the entire way.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t15",
        question: "You set the sealed soiled bin on the floor while getting the transport cart. Is that okay?",
        options: [
          "No. The bin must not touch the floor during transport. Stage your cart before the case ends.",
          "Yes. Two minutes is within the acceptable floor contact limit for sealed containers.",
          "Yes. The lid is secured, so floor contact does not create a contamination risk.",
          "Yes. Floor contact is only a concern in clean corridors, not soiled areas."
        ],
        correctIndex: 0,
        explanation: "The bin must not touch the floor. Floor contact contaminates the exterior, which you and others will then handle. Have your cart staged before the case ends.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t16",
        question: "One tech uses enzymatic spray; the other uses sterile water. Both secure lids and use soiled corridors. Who is wrong?",
        options: [
          "The tech who used sterile water. Enzymatic pre-cleaner is required, not just any moisture source.",
          "The tech who used enzymatic spray. Only SPD staff may apply enzymatic solutions.",
          "Both are wrong. Instruments must be transported dry.",
          "Neither. The key requirement is keeping instruments moist during transport."
        ],
        correctIndex: 0,
        explanation: "Enzymatic pre-cleaner is required at the point of use. Sterile water keeps instruments moist but does not prevent bioburden from hardening the way enzymatic spray does.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t17",
        question: "A surveyor asks you to describe the correct order of steps for point-of-use prep. What do you say?",
        options: [
          "Remove bioburden, open instruments, spray enzymatic, secure the lid, transport via soiled corridor.",
          "Spray enzymatic first, remove loosened bioburden, open instruments, secure lid, then transport.",
          "Open instruments, remove bioburden, spray enzymatic, secure lid, transport.",
          "Remove bioburden, spray enzymatic, then open instruments, secure lid, transport."
        ],
        correctIndex: 0,
        explanation: "Correct order: (1) remove gross bioburden, (2) open all hinged instruments, (3) apply enzymatic spray, (4) secure the lid, (5) transport via soiled corridor. Bioburden removal always comes first.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t18",
        question: "Halfway down the corridor, you realize you forgot enzymatic spray. Should you open the bin right there?",
        options: [
          "No. Continue to SPD. Opening a soiled bin in the corridor creates splash and exposure risk outside a controlled area.",
          "Yes. Return to the OR and reapply enzymatic spray under full PPE.",
          "Yes. As long as you are wearing full PPE, opening the bin in the corridor is acceptable.",
          "No. Enzymatic spray loses effectiveness once a container has been sealed."
        ],
        correctIndex: 0,
        explanation: "Do not open a soiled container in the hallway. Continue to SPD where it can be opened safely with proper PPE, ventilation, and containment.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "t19",
        question: "Your sealed soiled bin and a clean supply cart reach the elevator at the same time. Can you share?",
        options: [
          "Yes. A properly sealed, leak-proof soiled container may share an elevator with clean supplies.",
          "No. Clean and soiled items must never share any transport conveyance.",
          "Yes, but only if the soiled container is loaded last and unloaded first.",
          "Only if a physical barrier separates the two carts inside the elevator."
        ],
        correctIndex: 0,
        explanation: "A properly sealed, closed, leak-proof soiled container may share an elevator with clean supplies. The compliance requirement is proper containment, not a dedicated elevator.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "t20",
        question: "Your case ran long. You spray enzymatic but skip removing visible bone and tissue first. Acceptable?",
        options: [
          "No. You must manually remove gross bioburden before enzymatic spray, regardless of time pressure.",
          "Yes. Enzymatic spray dissolves bone and tissue during transport to SPD.",
          "Yes. When time-critical, enzymatic spray alone is sufficient and SPD handles the rest.",
          "Yes. The sealed container and soiled corridor compensate for the missed step."
        ],
        correctIndex: 0,
        explanation: "Enzymatic spray prevents drying but cannot substitute for removing gross bioburden. Bone fragments and tissue must be physically removed first, every time, no exceptions.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "t1", '\n    ],\n  },\n  {\n    id: "environment"', new_transport)

# ─── ENVIRONMENT (e1-e20) ────────────────────────────────────────────────────
new_environment = '''    questions: [
      {
        id: "e1",
        question: "During a survey, your inspector sees minor scuff marks on the patient hallway floor. Is this a finding?",
        options: [
          "No. Minor floor scuffs from normal wear are not flagged as an infection prevention finding.",
          "Yes. Scuff marks compromise the floor surface and harbor pathogens in the grooves.",
          "Yes. All surface damage in patient areas must be documented and reported for repair.",
          "Yes. Floor scuffs indicate inadequate cleaning and require a process review."
        ],
        correctIndex: 0,
        explanation: "Minor floor scuffs from normal wear are not an infection prevention finding. The concern is surfaces that can no longer be properly disinfected.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e2",
        question: "A brown stain on a pre-op ceiling tile has been there for months. Staff calls it cosmetic. What should you report?",
        options: [
          "A likely water leak above the ceiling. Stained tiles almost always mean moisture intrusion and possible mold growth.",
          "Nothing. Long-standing stains that have not changed are not active infection risks.",
          "Inadequate cleaning by EVS. The stain needs to be addressed in the cleaning schedule.",
          "Normal aging. Ceiling tiles yellow over time and require routine replacement."
        ],
        correctIndex: 0,
        explanation: "Stained ceiling tiles almost always indicate water damage or a leak above. Mold can grow in the ceiling space above without anyone noticing from below. Investigate immediately.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e3",
        question: "You check the OR: walls intact, tiles clean, counters good, floor clean. A surveyor says you are not done. What did you miss?",
        options: [
          "Overhead surfaces. Lights, booms, and ventilation grilles must also be checked for visible dust.",
          "Nothing. Those elements are the required components of an environmental assessment.",
          "Room temperature and humidity must also be verified and documented.",
          "Instrument count documentation must be verified before completing the environmental round."
        ],
        correctIndex: 0,
        explanation: "A complete environmental check includes overhead surfaces: lights, booms, and ventilation grilles. Dust on top of OR lights is one of the most common survey findings.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e4",
        question: "Staff hang approved signage on the wall using adhesive hooks that leave no residue. Is this compliant?",
        options: [
          "Yes. If the mounting method leaves the wall surface intact and cleanable, it is acceptable.",
          "No. Only facility-installed mounting hardware is permitted on clinical walls.",
          "No. All clinical area signage must use magnetic or suction-based mounting.",
          "No. Adhesive hooks damage paint over time and belong only in non-clinical areas."
        ],
        correctIndex: 0,
        explanation: "The concern with tape is the sticky residue that cannot be properly disinfected. Adhesive hooks that leave no residue and keep the wall surface intact are acceptable.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e5",
        question: "A ceiling tile is displaced in the procedure room. You push it back into place. Is the issue resolved?",
        options: [
          "No. You must inspect the tile for damage and investigate why it was displaced before calling it done.",
          "Yes. Reseating the tile restores the ceiling barrier and fully resolves the issue.",
          "Yes. As long as no visible debris fell from the plenum, reseating is sufficient.",
          "Yes. You should reseat displaced tiles promptly to minimize plenum exposure time."
        ],
        correctIndex: 0,
        explanation: "Pushing the tile back is not enough. You must check the tile for cracks or contamination and find out why it moved, otherwise it will happen again.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e6",
        question: "Which of these four findings in a procedure room is the most serious infection risk?",
        options: [
          "A cracked ceiling tile directly above the sterile field.",
          "Tape residue on the wall near the hand hygiene dispenser.",
          "Visible dust on an overhead surgical light in an unoccupied OR.",
          "A minor chip in countertop laminate near the scrub sink."
        ],
        correctIndex: 0,
        explanation: "A cracked ceiling tile above the sterile field is the most serious. Dust, debris, and mold spores from above can fall directly into an open surgical wound. The OR cannot be used until it is repaired.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e7",
        question: "Peeling paint is found above a patient bed. Your work order is submitted. Can the room stay open?",
        options: [
          "No. Peeling paint creates particles that can fall on patients and cannot be disinfected. Address it before using the room.",
          "Yes. A documented work order shows your facility is actively addressing the problem.",
          "Yes. Peeling paint is a maintenance concern but not an infection risk.",
          "Yes. Move the bed away from the affected area as a temporary measure."
        ],
        correctIndex: 0,
        explanation: "Peeling paint above a patient is an active infection risk. Paint particles can fall on the patient, and the damaged surface cannot be disinfected. A work order documents the problem but does not eliminate the risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e8",
        question: "In a procedure room, why must the cove base along the floor be intact and fully sealed?",
        options: [
          "To prevent moisture from floor cleaning from seeping behind the wall and promoting hidden mold growth.",
          "To create a sealed transition that meets bloodborne pathogen containment standards.",
          "To prevent pest entry through gaps at the floor-wall junction.",
          "To maintain a fully impervious zone for terminal cleaning of the room."
        ],
        correctIndex: 0,
        explanation: "A damaged or missing cove base allows mop water to seep behind the wall. Hidden moisture behind clinical walls promotes mold growth and structural damage that you cannot see until it is a major problem.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e9",
        question: "Ventilation grilles in the medication room have visible dust. Cleaning records show they were cleaned last week. Compliant?",
        options: [
          "No. Visible dust is never acceptable regardless of when the grilles were last cleaned. Increase cleaning frequency.",
          "Yes. Weekly cleaning of ventilation grilles meets the standard for medication rooms.",
          "Yes. Dust accumulation between scheduled cleanings is expected and not a compliance issue.",
          "Yes. If the log shows cleaning within 7 days, compliance is demonstrated."
        ],
        correctIndex: 0,
        explanation: "The standard is no visible dust, period. If dust is visible, your cleaning frequency is not enough for current conditions. Cleaning logs do not override what the surveyor can see.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e10",
        question: "Your OR looks perfect except for one small chip on the countertop that exposes the substrate. Is the room compliant?",
        options: [
          "No. All surfaces must be intact and impervious. A chip exposes porous material that cannot be disinfected.",
          "Yes. Minor chips are cosmetic wear addressed during routine maintenance.",
          "Yes. One small chip in an otherwise compliant room is within acceptable tolerance.",
          "Yes. The chip can be temporarily sealed with approved epoxy until maintenance arrives."
        ],
        correctIndex: 0,
        explanation: "The exposed substrate beneath a chip is porous and cannot be properly disinfected. No matter how small, the surface must be repaired before the room is fully compliant.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e11",
        question: "A chair in the waiting room has torn vinyl. Is this an infection prevention concern or just cosmetic?",
        options: [
          "Infection prevention concern. Torn upholstery exposes material that cannot be properly disinfected.",
          "Just cosmetic. Waiting areas are non-clinical spaces with lower environmental standards.",
          "Just cosmetic. Replace it for patient comfort, but it is not an infection risk.",
          "Just cosmetic. The foam underneath can still be cleaned with hospital-grade disinfectant."
        ],
        correctIndex: 0,
        explanation: "Torn furniture coverings cannot be properly disinfected, even in waiting rooms. Patients contact waiting room chairs, so the same surface integrity standard applies.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e12",
        question: "Standing water is found near a sink in a procedure room. It looks clean. Is it acceptable?",
        options: [
          "No. Standing water is never acceptable. It is a slip hazard and a source of microbial growth regardless of appearance.",
          "Yes. Clear water near a sink is expected and not an infection risk.",
          "Yes. Minor water near sinks is normal and will evaporate without intervention.",
          "Yes. If the water does not contain visible biological material, it is acceptable."
        ],
        correctIndex: 0,
        explanation: "Appearance does not make standing water safe. Even clear water promotes microbial growth and creates slip risk. Find the source and clean it up immediately.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "e13",
        question: "An IV pole base has minor paint wear but no rust. The surface underneath is intact. Is this a finding?",
        options: [
          "No. Minor paint wear is acceptable if the underlying surface is intact, rust-free, and cleanable.",
          "Yes. Any paint wear on patient care equipment must be documented and the equipment removed from service.",
          "Yes. Worn paint creates rough surfaces that cannot be effectively disinfected.",
          "Yes. Exposed metal under worn paint will eventually corrode and must be repainted."
        ],
        correctIndex: 0,
        explanation: "Minor paint wear is acceptable when the surface underneath is intact and rust-free. The concern is rust, which creates a surface that cannot be disinfected. Cosmetic wear alone is not a finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e14",
        question: "A 2-inch section of grout is missing between floor tiles near the scrub sink. A work order was submitted. How many findings?",
        options: [
          "One. Missing grout creates a non-impervious surface that harbors moisture and pathogens.",
          "Two. The missing grout and its proximity to a water source are two separate findings.",
          "Zero. Grout gaps under 3 inches are routine maintenance, not active infection concerns.",
          "One, but only because it is near a water source. The same gap elsewhere would not be a finding."
        ],
        correctIndex: 0,
        explanation: "One finding. Missing grout makes the floor non-impervious, trapping moisture and pathogens. The work order status does not eliminate the current compliance gap.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e15",
        question: "You find a lighter ceiling tile (clean, intact), rust on a cabinet handle, and tape residue on a wall. Which are findings?",
        options: [
          "The rust on the cabinet handle and the tape residue. The lighter tile is likely a recent replacement.",
          "Only the tape residue. Minor rust on stainless steel in humid environments is normal wear.",
          "All three. Any visible surface change in a procedure room must be corrected.",
          "Only the rust. Tape residue on an undamaged wall is cosmetic."
        ],
        correctIndex: 0,
        explanation: "Two findings: rust on equipment (surface that cannot be disinfected) and tape residue on the wall (sticky surface that cannot be properly disinfected). A lighter-colored intact tile is likely a recent replacement — color variation alone is not an infection risk.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e16",
        question: "A small hole in the wall behind a wall-mounted dispenser is only visible when the dispenser is pulled forward. Is this a finding?",
        options: [
          "Yes. Any wall penetration in a clinical area is a finding, regardless of whether it is visible from normal position.",
          "No. Permanently mounted equipment creates a sealed barrier that prevents underlying defects from affecting the environment.",
          "No. Holes behind mounted fixtures are not assessed during routine rounds.",
          "No. Removing mounted fixtures to fix minor holes risks greater surface damage."
        ],
        correctIndex: 0,
        explanation: "Wall holes are findings regardless of visibility. A hidden hole can still harbor pests, collect moisture, and indicate structural problems. The dispenser being mounted over it does not seal the wall.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e17",
        question: "Your pre-op room has intact wallpaper with no tears, peeling edges, or staining. A surveyor flags it. Why?",
        options: [
          "Wallpaper seams and edges can trap moisture and harbor pathogens even when the surface appears intact.",
          "Intact wallpaper with sealed edges provides an acceptable impervious surface for clinical areas.",
          "Healthcare-grade vinyl wallpaper is approved for patient care areas and meets all requirements.",
          "Wallpaper and paint are equivalent for infection prevention when both are properly maintained."
        ],
        correctIndex: 0,
        explanation: "Wallpaper is not recommended in clinical areas. Even intact seams can trap moisture and harbor microorganisms that a smooth painted surface would not.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e18",
        question: "Rank these three ceiling tile issues from most to least serious: a brown water stain, a displaced tile, and a hairline crack.",
        options: [
          "Water stain first, then displaced tile, then hairline crack.",
          "Water stain first, then hairline crack, then displaced tile.",
          "Displaced tile first, then water stain, then hairline crack.",
          "Hairline crack first, then water stain, then displaced tile."
        ],
        correctIndex: 0,
        explanation: "Water stain is most serious because it indicates moisture intrusion and possible mold growth above the ceiling. A displaced tile exposes the plenum. A hairline crack collects dust. All three need attention, but the stain demands the fastest investigation.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "e19",
        question: "A renovated patient room has fabric acoustic panels on the walls. They are clean and mounted securely. Are they compliant?",
        options: [
          "No. Fabric surfaces cannot be properly disinfected and may harbor pathogens even when visually clean.",
          "Yes. They are acceptable as long as they are included in the routine cleaning schedule.",
          "Yes. Securely mounted clean panels meet environmental surface requirements.",
          "Yes. Acoustic panels are non-contact surfaces and are exempt from impervious surface requirements."
        ],
        correctIndex: 0,
        explanation: "Fabric surfaces cannot be disinfected with hospital-grade cleaners, even when they look clean. All surfaces in patient care areas must be smooth, non-porous, and cleanable.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "e20",
        question: "Dust is found on an OR light boom the day after cleaning. Staff says nearby construction is the cause. Still a finding?",
        options: [
          "Yes. Visible dust on overhead surfaces in a clinical area is a finding regardless of cause. Increase cleaning frequency.",
          "No. The cleaning log from yesterday confirms compliance, and construction dust is an external factor.",
          "No. The construction contractor is responsible for dust containment during adjacent projects.",
          "No. Environmental dust from active construction is classified as an uncontrollable external factor."
        ],
        correctIndex: 0,
        explanation: "The cause of visible dust does not matter. The standard is no visible dust on overhead surfaces in clinical areas. When construction increases dust in your environment, your cleaning frequency must increase to match.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "e1", '\n    ],\n  },\n  {\n    id: "segregation"', new_environment)

# ─── SEGREGATION (s1-s20) ────────────────────────────────────────────────────
new_segregation = '''    questions: [
      {
        id: "s1",
        question: "Patient supplies are on shelving 8 inches off the floor in your clean utility room. Is this compliant?",
        options: [
          "Yes. Eight inches meets the 6-8 inch minimum clearance required for proper floor cleaning underneath.",
          "No. Only sealed containers may be stored below 10 inches.",
          "No. Supplies in clean utility rooms require 12 inches off the floor.",
          "No. Shelving must be wire-rack style with impervious bottom shelves regardless of height."
        ],
        correctIndex: 0,
        explanation: "Eight inches is compliant. Items must be stored at least 6-8 inches off the floor to allow proper floor cleaning and mopping underneath.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s2",
        question: "A nurse rinses a bedpan in the handwashing sink, then disinfects the sink afterward. Is this acceptable?",
        options: [
          "No. Handwashing sinks are designated exclusively for hand hygiene, regardless of post-use cleaning.",
          "Yes. Proper disinfection with hospital-grade cleaner restores the sink to its designated function.",
          "Yes. Temporary use during equipment outages is permitted if documented.",
          "Yes. As long as she performs hand hygiene at a different sink before resuming patient care."
        ],
        correctIndex: 0,
        explanation: "Handwashing sinks are designated exclusively for hand hygiene. They cannot be used for equipment cleaning even if thoroughly cleaned afterward. Sink designation is absolute.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s3",
        question: "Patient care supplies are stored 2 feet from a sink with a splash barrier in place. Is this compliant?",
        options: [
          "Yes. A splash barrier satisfies the storage requirement when supplies cannot be placed 3 feet away.",
          "No. Splash barriers only reduce the required distance to 2.5 feet, not 2 feet.",
          "No. Supplies must always be at least 3 feet from sinks regardless of any barriers installed.",
          "No. Splash barriers are only approved for medication storage, not general patient care supplies."
        ],
        correctIndex: 0,
        explanation: "Patient care items must be at least 3 feet from sinks OR have a splash barrier in place. With a barrier, the 3-foot requirement is satisfied even at 2 feet.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s4",
        question: "A surveyor finds your sealed water bottle at the nurses station in a patient care area. Is this compliant?",
        options: [
          "No. Staff food and beverages are prohibited in all clinical and patient care areas, including nurses stations.",
          "Yes. Sealed personal beverages at workstations are allowed if kept below counter level.",
          "Yes. Sealed containers prevent contamination and are permitted at nurses stations.",
          "Yes. As long as the beverage is not near medication storage or patient charts."
        ],
        correctIndex: 0,
        explanation: "Staff food and beverages are strictly prohibited in all clinical and patient care areas, including nurses stations. Sealed containers do not change this rule.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s5",
        question: "Soiled linen is in a covered hamper in a soiled area. Clean linen is in a covered cart in the clean supply room. Compliant?",
        options: [
          "Yes. Soiled linen in a covered hamper in a soiled area and clean linen in a covered cart in the clean room both meet the requirement.",
          "No. Clean linen carts must be stored in a dedicated linen closet, not the general clean supply room.",
          "No. Soiled linen hampers must be in the soiled utility room specifically, not just a designated soiled area.",
          "No. Covered carts are not approved for clean linen storage; only enclosed shelving is acceptable."
        ],
        correctIndex: 0,
        explanation: "Both requirements are met. Soiled linen must be in covered hampers in soiled areas, and clean linen must be stored in clean rooms or covered carts.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s6",
        question: "A covered biohazard waste container is in your clean utility room for overflow from the soiled room. Acceptable?",
        options: [
          "No. Biohazard waste has no place in a clean utility room under any circumstance.",
          "Yes. Overflow protocols allow temporary placement for up to 24 hours if the container is properly labeled.",
          "Yes. As long as the container is sealed and not touching clean supplies on adjacent shelving.",
          "Yes. Covered biohazard containers are permitted temporarily if the soiled room is at capacity."
        ],
        correctIndex: 0,
        explanation: "Clean utility rooms are exclusively for clean supplies and patient care items. Biohazard waste containers, even covered, are never permitted regardless of the reason.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s7",
        question: "What is the minimum height items must be stored off the floor in your clean utility room?",
        options: [
          "6-8 inches.",
          "12 inches.",
          "4-6 inches.",
          "8-10 inches."
        ],
        correctIndex: 0,
        explanation: "Items must be stored at least 6-8 inches off the floor to allow proper floor cleaning and mopping underneath. This prevents contamination from floor-level moisture during cleaning.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s8",
        question: "A tech props the soiled utility room door open to improve airflow and reduce odors. Is this acceptable?",
        options: [
          "No. The soiled utility room door must be kept closed to prevent contaminated air from spreading.",
          "Yes. Propping the door open during staffed hours is acceptable as long as it is closed overnight.",
          "Yes. Improved ventilation reduces airborne pathogen concentration during active use.",
          "Yes. As long as the room has negative pressure ventilation, the open door does not matter."
        ],
        correctIndex: 0,
        explanation: "Soiled utility room doors must be kept closed. Propping the door open for airflow defeats the purpose of separating soiled from clean areas.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s9",
        question: "A clean supply cart is parked directly next to a soiled linen hamper in the hallway. Is this compliant?",
        options: [
          "No. Clean supplies must be physically separated from soiled items to prevent cross-contamination.",
          "Yes. The soiled linen hamper has a cover, which provides sufficient barrier protection.",
          "Yes. As long as both the cart and hamper are covered, proximity in hallways is acceptable.",
          "Yes. Hallway placement is temporary and does not require the same separation standards as storage rooms."
        ],
        correctIndex: 0,
        explanation: "Clean supplies must be physically separated from soiled items. Parking a clean supply cart directly next to a soiled linen hamper violates the clean/dirty separation principle.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s10",
        question: "Without a splash barrier, how far must patient care items be stored from any sink?",
        options: [
          "3 feet.",
          "4 feet.",
          "2 feet.",
          "18 inches."
        ],
        correctIndex: 0,
        explanation: "Patient care items must be stored at least 3 feet from sinks when no splash barrier is in place, to prevent water contamination of supplies.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s11",
        question: "A surveyor checks under the medication room sink and finds cleaning supplies stored there. Is this compliant?",
        options: [
          "No. Nothing should be stored under sinks due to potential leaks and contamination.",
          "Yes. Cleaning supplies are non-sterile and may be stored under sinks in sealed containers.",
          "Yes. Under-sink storage in a secondary containment tray is acceptable for non-patient-care items.",
          "Yes. Cleaning products may be stored under sinks as long as they are not patient-contact items."
        ],
        correctIndex: 0,
        explanation: "Nothing should be stored under sinks — not patient supplies, not cleaning supplies, nothing. Potential leaks and splash contamination affect anything stored underneath.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s12",
        question: "A surveyor asks where patient food refrigerators should be relative to medication refrigerators. What do you say?",
        options: [
          "They must be separate designated refrigerators, and both require documented temperature logs.",
          "Patient food can be stored in any clean refrigerator as long as it is in sealed containers.",
          "They can share one refrigerator if items are clearly labeled and on separate shelves.",
          "Both require monitoring, but only medication refrigerators need daily temperature logs."
        ],
        correctIndex: 0,
        explanation: "Patient food and medications must have separate designated refrigerators. Both require documented temperature logs — medication refrigerators must be checked daily and maintained at 36-46°F.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s13",
        question: "Your personal lunch is in a clearly labeled container in the staff break room refrigerator. Is this a concern?",
        options: [
          "No. Staff food in the designated break room refrigerator is compliant.",
          "Yes. Staff food in any hospital refrigerator creates cross-contamination risk regardless of location.",
          "Yes. All personal food must be stored in personal coolers, not hospital-owned refrigerators.",
          "Yes. Personal food containers must be removed daily; storage beyond one shift is non-compliant."
        ],
        correctIndex: 0,
        explanation: "Staff food in the designated break room is compliant. The restriction is against staff food in clinical areas and clinical refrigerators, not in break rooms.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "s14",
        question: "Your clean utility room has supplies 5 inches off the floor. The soiled utility room across the hall has items at 8 inches. Which room has the compliance issue?",
        options: [
          "The clean utility room. Supplies are below the 6-8 inch minimum floor clearance.",
          "Both rooms have issues: the clean room shelving is too low and the soiled room needs a hand hygiene station.",
          "Neither room. Five inches meets the minimum clearance for floor-level storage.",
          "The soiled utility room. It is missing a hand hygiene station."
        ],
        correctIndex: 0,
        explanation: "The clean utility room is non-compliant: supplies are only 5 inches off the floor, below the 6-8 inch minimum. The soiled utility room at 8 inches meets the standard.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s15",
        question: "A nurse washes a reusable emesis basin in the handwashing sink, then disinfects it with proper dwell time. How many violations occurred?",
        options: [
          "One. The emesis basin should not have been washed in a handwashing sink, which is designated exclusively for hand hygiene.",
          "Two. The emesis basin was improperly cleaned AND she should have used a separate sink for hand hygiene afterward.",
          "None. Proper disinfection with adequate dwell time between uses restores the sink's designated function.",
          "Three. Wrong sink, wrong hand hygiene technique, and the hopper issue should have been escalated."
        ],
        correctIndex: 0,
        explanation: "One violation: handwashing sinks are designated exclusively for hand hygiene. Disinfecting after improper use does not make the initial use acceptable. She can still wash her hands in the same sink afterward, because that is its designated purpose.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s16",
        question: "Your clean utility room has IV supplies at 7 inches, a linen cart, a medication fridge at 42°F with logs, and a mop and bucket in the corner. What is the finding?",
        options: [
          "The mop and bucket. Cleaning equipment does not belong in a clean utility room.",
          "The medication refrigerator at 42°F exceeds the 40°F maximum for safe medication storage.",
          "The shelving at 7 inches is below the required 8-inch minimum for clean utility rooms.",
          "All items are appropriate for a clean utility room."
        ],
        correctIndex: 0,
        explanation: "Cleaning equipment does not belong in a clean utility room — it belongs in a designated housekeeping closet. The shelving at 7 inches meets the 6-8 inch general standard, and 42°F is within the 36-46°F medication storage range.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s17",
        question: "Supplies are stored 2.5 feet from a sink. No splash barrier is in place. Staff plans to install one next week. Compliant now?",
        options: [
          "No. Without a barrier in place right now, supplies must be at least 3 feet from the sink. Planned installation does not count.",
          "Yes. Supplies only 10% short of the 3-foot rule fall within acceptable tolerance.",
          "Yes. A documented corrective action plan with a scheduled installation date demonstrates good-faith compliance.",
          "No, but only for sterile supplies. General patient care supplies may be stored at 2 feet."
        ],
        correctIndex: 0,
        explanation: "Compliance is assessed at the time of observation. Without a splash barrier in place right now, supplies must be at least 3 feet from the sink. A planned future installation does not satisfy the current requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s18",
        question: "A surveyor opens your medication refrigerator and finds medications, daily logs at 38°F, and a clearly labeled staff lunch bag. What is the finding?",
        options: [
          "The staff lunch bag. Staff food cannot be stored in a medication refrigerator under any circumstances.",
          "Nothing. The lunch is clearly labeled and physically separated from medications on a different shelf.",
          "Nothing. The ice pack keeps the lunch at a safe temperature and the labeling prevents medication errors.",
          "Nothing. Personal items in sealed containers are permitted in medication refrigerators during a staff member's shift."
        ],
        correctIndex: 0,
        explanation: "Staff food must never be stored in clinical refrigerators, including medication refrigerators. A labeled lunch bag does not change this rule. Staff food belongs only in designated break room refrigerators.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "s19",
        question: "A procedure area has three sinks: one labeled handwashing only, one labeled instrument cleaning, and one unlabeled used for both. What should the surveyor cite?",
        options: [
          "Only the unlabeled sink. It has no designation and is used for two different purposes.",
          "All three sinks. Each needs documented daily cleaning logs and usage tracking.",
          "Only the instrument cleaning sink. Instrument cleaning should only occur in the decontamination area.",
          "The handwashing-only and unlabeled sinks. Handwashing-only is too restrictive."
        ],
        correctIndex: 0,
        explanation: "The unlabeled sink is non-compliant for two reasons: no designation label and dual use. Sinks must have designated purposes and cannot be used interchangeably. The labeled sinks are properly designated.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "s20",
        question: "Your soiled utility room has PPE, covered waste containers, a closed door, and items at 8 inches off the floor. A surveyor asks what is missing. What do you say?",
        options: [
          "A hand hygiene station. PPE, waste receptacles, and a hand hygiene station are all required.",
          "A biohazard spill kit.",
          "Nothing. PPE, waste receptacles, closed door, and proper shelving meet all the requirements.",
          "A negative-pressure ventilation system."
        ],
        correctIndex: 0,
        explanation: "Soiled utility rooms require PPE, waste receptacles, AND a hand hygiene station. The hand hygiene station is missing from the list of what was described.",
        xpReward: 15,
        isSwipe: false,
      },'''

content = replace_questions(content, "s1", '\n    ],\n  },\n  {\n    id: "sterile_storage"', new_segregation)

# ─── STERILE STORAGE (ss1-ss20) ──────────────────────────────────────────────
new_sterile_storage = '''    questions: [
      {
        id: "ss1",
        question: "A sterile pack has been stored 11 months with intact packaging and no damage. Is it considered sterile?",
        options: [
          "Yes. Under event-related sterility, intact packaging maintains sterility until a compromise event occurs.",
          "No. Items stored beyond 9 months require biological indicator testing before use.",
          "No. Event-related sterility only applies to rigid sterilization containers, not wrapped or peel-pack items.",
          "No. Sterile items must be reprocessed after 6 months of storage regardless of packaging condition."
        ],
        correctIndex: 0,
        explanation: "Under event-related sterility, items remain sterile as long as packaging is intact. At 11 months with intact packaging, this item is sterile.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss2",
        question: "The sterile storage room thermometer reads 76°F with humidity at 55%. Is this compliant?",
        options: [
          "No. The temperature exceeds the 75°F maximum for sterile storage. Humidity is within range.",
          "Yes. A 1-degree variance above range is within acceptable tolerance if humidity is compliant.",
          "No. The humidity at 55% also exceeds the maximum for sterile storage.",
          "Yes. Both readings fall within the acceptable ranges."
        ],
        correctIndex: 0,
        explanation: "Sterile storage must maintain 68-75°F and 30-60% humidity. The humidity at 55% is within range, but the temperature at 76°F exceeds the 75°F maximum.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss3",
        question: "Your sterile storage has wire shelving with a solid bottom shelf, 9 inches off the floor, 20 inches below sprinklers, not touching walls. Compliant?",
        options: [
          "Yes. All four storage requirements are met: shelving type, height, sprinkler clearance, and wall distance.",
          "No. Supplies must be at least 24 inches below sprinkler deflectors to maintain proper spray distribution.",
          "No. The bottom shelf must be at least 12 inches off the floor in sterile storage areas.",
          "No. Wire shelving is not permitted in sterile storage; solid closed shelving is required."
        ],
        correctIndex: 0,
        explanation: "All requirements are met: wire shelving with solid bottom shelf (correct), 9 inches off floor (meets 8-inch minimum), 20 inches below sprinkler deflectors (exceeds 18-inch minimum), and not touching walls.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss4",
        question: "You removed items from cardboard shipping boxes and left the empty flattened boxes in sterile storage for recycling pickup. Acceptable?",
        options: [
          "No. Cardboard in any form is never permitted in sterile storage areas.",
          "Yes. Flattened boxes are acceptable temporarily if recycling pickup occurs within 24 hours.",
          "Yes. Empty flattened boxes are acceptable because the items were properly removed first.",
          "Yes. Flattened cardboard poses minimal fiber risk compared to full boxes."
        ],
        correctIndex: 0,
        explanation: "Corrugated cardboard is never permitted in sterile storage — including empty, flattened boxes. Cardboard sheds fibers and harbors dust and insects even when empty.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss5",
        question: "Peel packs on a shelf are stacked 3 high. Is this acceptable?",
        options: [
          "No. Peel packs should be stacked no more than 2 high to prevent compression damage to the packaging seal.",
          "Yes. Stacking up to 5 high is acceptable on wire shelving where airflow reduces moisture buildup.",
          "Yes. Peel packs may be stacked up to 4 high as long as heavier items are on the bottom.",
          "Yes. 3 high is within the acceptable range for lightweight instrument packs."
        ],
        correctIndex: 0,
        explanation: "Peel packs should be stacked no more than 2 high to prevent compression damage that can compromise seal integrity. Three high exceeds this limit.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss6",
        question: "A sterile pack label shows sterilizer number and load number but no date. Is the label complete?",
        options: [
          "No. The label must also include the date of sterilization. All three elements are required.",
          "Yes. Sterilizer and load number are sufficient for full traceability and recall capability.",
          "No, but only for items stored longer than 6 months.",
          "Yes. The load number contains an embedded date code, so a separate date field is not needed."
        ],
        correctIndex: 0,
        explanation: "Every sterile pack must be labeled with three elements: sterilizer used, cycle/load number, AND date of sterilization. Missing any one element is incomplete.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss7",
        question: "A sterile pack has a small area of condensation on the outside. The seal appears intact. Can you use it?",
        options: [
          "No. Moisture is a strike-through contamination event regardless of seal integrity. The item must be reprocessed.",
          "Yes. Surface moisture from humidity changes is normal and does not affect sterility if the seal holds.",
          "Yes. Dry the pack thoroughly before opening and the sterility is not compromised.",
          "Yes. External condensation does not penetrate a properly sealed package."
        ],
        correctIndex: 0,
        explanation: "Moisture is a strike-through contamination event. Moisture can wick bacteria through packaging material even without visibly breaking the seal. Reprocess the item.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss8",
        question: "What is the minimum height the bottom shelf in sterile storage must be from the floor?",
        options: [
          "At least 8 inches.",
          "4-6 inches.",
          "6-8 inches.",
          "10-12 inches."
        ],
        correctIndex: 0,
        explanation: "The bottom shelf in sterile storage must be at least 8 inches off the floor. This is higher than the general 6-inch minimum used for non-sterile supply storage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss9",
        question: "Sterile supplies are stored on all-solid metal shelving with no wire sections. Is the shelving type compliant?",
        options: [
          "No. Sterile storage requires wire shelving for airflow, with only the bottom shelf being solid.",
          "Yes. Solid metal shelving provides superior protection against dust and particle contamination.",
          "Yes. Any non-porous metal shelving meets sterile storage requirements regardless of design.",
          "Yes. Solid shelving is preferred because it prevents peel packs from sagging through wire gaps."
        ],
        correctIndex: 0,
        explanation: "Sterile storage requires wire shelving to allow airflow, with only the bottom shelf being solid. All-solid shelving restricts the air circulation needed for proper storage conditions.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss10",
        question: "New stock arrives. You place the new items in front of the existing stock on the shelf. Is this correct?",
        options: [
          "No. New items must go behind existing stock so older items are used first.",
          "Yes. Placing new stock in front is acceptable under event-related sterility since items do not expire.",
          "Yes. Newer items should be used first to ensure peak sterility assurance.",
          "Yes. Stock rotation order is not required as long as all packages are inspected before use."
        ],
        correctIndex: 0,
        explanation: "First In, First Out (FIFO) requires placing newer items behind existing stock. Older items at the front get used first, preventing extended storage times.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss11",
        question: "A sterile item stored for 14 months has intact packaging. You pull it for use without additional inspection. Is this correct?",
        options: [
          "No. All sterile packages require a point-of-use integrity inspection before opening, regardless of how long they have been stored.",
          "Yes. Event-related sterility means intact packages remain sterile with no inspection needed.",
          "No. Items stored over 1 year must be automatically reprocessed before use.",
          "No. Items over 12 months must be returned to SPD for biological indicator testing."
        ],
        correctIndex: 0,
        explanation: "Event-related sterility means packaging integrity determines sterility, not time. But every sterile package must still be inspected at the point of use before opening. Skipping that inspection is the error here.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss12",
        question: "The sterile storage room reads 72°F and 45% humidity. Is this within acceptable parameters?",
        options: [
          "Yes. Both temperature and humidity are within the acceptable ranges for sterile storage.",
          "No. Humidity must be kept below 35% to prevent moisture damage to packaging.",
          "No. The humidity at 45% exceeds the 40% maximum for sterile storage.",
          "No. The temperature should be maintained between 60-68°F for optimal sterile storage."
        ],
        correctIndex: 0,
        explanation: "Both readings are within acceptable parameters: temperature 68-75°F (72°F is compliant) and humidity 30-60% (45% is compliant).",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss13",
        question: "The chemical indicator inside a sterile pack has not changed color. What does this mean?",
        options: [
          "The item was not properly exposed to the sterilization process and must not be used.",
          "The indicator is a slow-reacting type that requires 24 hours before reading the final color.",
          "The indicator type does not match the sterilization method, so the color result is not relevant.",
          "The indicator was placed on the wrong side of the packaging and did not get proper sterilant contact."
        ],
        correctIndex: 0,
        explanation: "An unchanged chemical indicator means the package was not properly exposed to the sterilization process. Do not use the item and report it immediately.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss14",
        question: "Sterile supplies are stored 16 inches below a sprinkler head. Is this compliant?",
        options: [
          "No. Supplies must be at least 18 inches below sprinkler deflectors to maintain fire suppression coverage.",
          "Yes. 16 inches exceeds the standard 12-inch clearance requirement for sprinkler heads.",
          "Yes. The 18-inch rule only applies to flammable storage areas, not sterile supply rooms.",
          "Yes. Sterile storage rooms have a reduced 15-inch clearance requirement."
        ],
        correctIndex: 0,
        explanation: "Supplies must be stored at least 18 inches below sprinkler deflectors. At 16 inches, these supplies are too close and would interfere with fire suppression coverage.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "ss15",
        question: "Your sterile storage has correct shelving at 9 inches off the floor, 19 inches below sprinklers, 73°F, and 62% humidity. How many parameters are out of compliance?",
        options: [
          "One. The humidity at 62% exceeds the 60% maximum.",
          "Zero. All parameters including humidity are within the acceptable range.",
          "One. The temperature at 73°F exceeds the 72°F maximum.",
          "Two. The humidity exceeds the maximum and the sprinkler clearance does not meet the 24-inch requirement."
        ],
        correctIndex: 0,
        explanation: "One finding: humidity at 62% exceeds the 60% maximum. Everything else is compliant: shelving is correct, 9 inches off floor meets the 8-inch minimum, 19 inches below sprinklers exceeds the 18-inch minimum, and 73°F is within 68-75°F.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss16",
        question: "You pick up a sterile pack and hear rattling inside, suggesting the instrument shifted and may have contacted the seal area. Should you use it?",
        options: [
          "No. An instrument shifting inside may have compromised the seal from the inside. Inspect more carefully or reprocess.",
          "Yes. A changed chemical indicator confirms full sterilant exposure, and the externally intact seal satisfies all verification criteria.",
          "Yes. Minor instrument shifting during normal handling does not compromise seal integrity.",
          "Yes. Open it with aseptic technique and visually inspect the instrument before it contacts the field."
        ],
        correctIndex: 0,
        explanation: "When in doubt, do not use it. An instrument shifting inside a peel pack can stress the seal from within, creating micro-breaches that are not visible externally. Return it for reprocessing.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss17",
        question: "Sterile supplies are on correct wire shelving 10 inches off the floor, but the shelving is touching the back wall. Is this a finding?",
        options: [
          "Yes. Supplies must not touch walls in sterile storage. Wall contact can cause moisture wicking and packaging damage.",
          "No. Wire shelving with solid bottom shelf and proper height meet all requirements.",
          "No. The humidity at 45% is below the minimum 50% threshold, so that is actually the real finding.",
          "No. The bottom shelf at 10 inches exceeds the 8-9 inch maximum, making that the finding instead."
        ],
        correctIndex: 0,
        explanation: "Sterile supplies must not touch walls. Contact with walls can cause moisture wicking and physical damage to packaging. All other parameters in this scenario are within acceptable ranges.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss18",
        question: "Sterile storage has a corrugated cardboard divider between tray types and peel packs stacked 2 high. Which is the finding?",
        options: [
          "Only the cardboard divider. Corrugated cardboard in any form is prohibited in sterile storage. Peel packs at 2 high are acceptable.",
          "Only the peel packs. Stacking compresses seals and AORN recommends storing peel packs on edge.",
          "Neither. Plastic-coated corrugated dividers are acceptable and 2-high stacking is within limits.",
          "Both. Cardboard is prohibited and peel packs must always be stored vertically on edge."
        ],
        correctIndex: 0,
        explanation: "Corrugated cardboard in any form is prohibited in sterile storage, including as dividers. Peel packs stacked 2 high are within accepted practice. The cardboard is the clear compliance finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "ss19",
        question: "A sterile pack sterilized 13 months ago has completely intact packaging. You inspect and document it before returning it to the shelf. Correct?",
        options: [
          "Yes. Event-related sterility means packaging integrity determines sterility regardless of time. Your documented inspection is the correct step.",
          "No. Event-related sterility only applies for the first 12 months; after that, the item must be reprocessed.",
          "No. Any item stored over 12 months must be automatically reprocessed.",
          "No. Re-inspection alone is insufficient; the item must be tested biologically before release."
        ],
        correctIndex: 0,
        explanation: "Event-related sterility means packaging integrity determines sterility, not elapsed time. There is no standard that mandates automatic reprocessing after 12 months. Your documented integrity inspection is the correct process.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "ss20",
        question: "Sterile storage reads 74°F and 58% humidity. A surveyor asks what happens if the temperature rises 2 more degrees. What do you say?",
        options: [
          "At 76°F, the room would exceed the 75°F maximum, requiring immediate corrective action.",
          "The humidity would need to drop below 50% to compensate for the temperature increase.",
          "Nothing. The acceptable range extends to 78°F for sterile storage areas.",
          "A 2-degree rise would be documented but would not require action unless it persisted over 4 hours."
        ],
        correctIndex: 0,
        explanation: "Sterile storage temperature must be 75°F or below. At 74°F, the room is within range by just 1 degree. A rise to 76°F would exceed the maximum and require immediate corrective action on the environment and an assessment of stored items.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "ss1", '\n    ],\n  },\n  {\n    id: "instruments"', new_sterile_storage)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 1 complete.")
