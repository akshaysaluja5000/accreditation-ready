import type { HandbookChapter } from "./schema";

export const handbook: HandbookChapter[] = [
  {
    levelId: "transport",
    title: "Transport of Instruments",
    overview: "Safe transport of surgical instruments from the OR to Sterile Processing (SPD) is one of the most critical steps in preventing healthcare-associated infections. This chapter covers every step from point-of-use treatment through corridor transport to the soiled utility room. Failure at any point in this chain can lead to dried bioburden, cross-contamination, staff exposure, and ultimately patient harm. Joint Commission surveyors closely inspect transport practices during tracers.",
    sections: [
      {
        heading: "Point-of-Use Treatment",
        content: "The moment a surgical case ends, the clock starts. Gross bioburden - blood, tissue, bone fragments - must be removed from instruments immediately at the point of use. This is not optional and cannot be deferred to SPD. When organic material dries on instrument surfaces, it becomes exponentially harder to remove during decontamination, and standard cleaning processes may fail to reach it. The process involves: (1) wipe off visible debris, (2) spray all surfaces with enzymatic pre-cleaner solution, (3) ensure solution contacts all crevices, box locks, and lumens. Pre-cleaner solution must always be available in the soiled utility room and stocked near the OR. Enzymatic sprays break down proteins and prevent bioburden from adhering during transport.",
        criticalValues: [
          { label: "When to treat", value: "Immediately after case ends - never allow bioburden to dry" },
          { label: "Solution", value: "Enzymatic pre-cleaner spray" },
          { label: "Target areas", value: "All surfaces, box locks, jaws, lumens, and crevices" }
        ],
        thinkAboutIt: "A scrub tech finishes a long orthopedic case and is running late for the next setup. They decide to just put instruments in the bin without spraying enzymatic cleaner first. What risks does this create for the decontamination process downstream?"
      },
      {
        heading: "Instrument Positioning for Transport",
        content: "All hinged instruments - scissors, clamps, hemostats, needle holders - must be placed in the open, unlocked position before transport. This is essential because box locks (the hinged joint mechanism) trap bioburden when locked. If instruments arrive at SPD in the closed position, the cleaning process cannot effectively reach those hidden surfaces. Additionally, heavy instruments must be placed on the bottom of the transport tray to prevent crushing or damaging lighter, more delicate instruments above them. Improper stacking leads to bent tips, misaligned jaws, and premature instrument failure.",
        criticalValues: [
          { label: "Hinged instruments", value: "Must be open/unlocked - box locks released, never locked closed" },
          { label: "Heavy instruments", value: "Bottom of the tray" },
          { label: "Delicate instruments", value: "Top of the tray, protected from crushing" }
        ],
        thinkAboutIt: "You're helping break down an instrument tray and notice several hemostats are still clamped shut with tissue in the jaws. What's the correct action before placing them in the transport container?"
      },
      {
        heading: "Containment Requirements",
        content: "Soiled instruments must be transported in rigid, leak-proof containers with secure lids. At Midwest Orthopedic, these are the red rigid bins with lids. The lid must be firmly secured AFTER enzymatic spray has been applied. This serves two purposes: (1) it prevents splashing and aerosolization of contaminated fluids during transport, and (2) it keeps the enzymatic solution in contact with instruments. Biohazard bags may also be used but must be sealed. Containers must never be overfilled to the point where the lid cannot close properly. Clean red bins/rigid containers, when not in use, must be stored in the clean supply room - never in the soiled utility room where they could become contaminated.",
        criticalValues: [
          { label: "Container type", value: "Red rigid bins with lids (leak-proof)" },
          { label: "Lid timing", value: "Secured AFTER enzymatic spray applied" },
          { label: "Clean bin storage", value: "Clean supply room only - never in soiled areas" }
        ]
      },
      {
        heading: "PPE Requirements for Handling",
        content: "Anyone handling contaminated instruments must wear full Personal Protective Equipment. This is not discretionary - it's a safety requirement enforced by OSHA's Bloodborne Pathogens Standard and Joint Commission standards. Full PPE includes: (1) gloves appropriate for the task, (2) fluid-resistant gown, (3) face shield or goggles for splash protection, (4) surgical mask. PPE must be readily available in the soiled utility room at all times. Staff should don PPE before handling any contaminated items and doff it properly after, following the correct sequence to avoid self-contamination. Applying enzymatic spray without gloves is a safety violation.",
        criticalValues: [
          { label: "Required PPE", value: "Gloves, gown, face shield/goggles, mask" },
          { label: "Availability", value: "Must be stocked and accessible in soiled utility room" },
          { label: "When to wear", value: "Before ANY contact with contaminated instruments" }
        ]
      },
      {
        heading: "Transport Pathways & Traffic Patterns",
        content: "Soiled instruments must travel through designated soiled corridors only. They must never pass through clean cores, sterile storage areas, or patient care areas. This one-way traffic flow is a fundamental principle of infection prevention - keeping contaminated items separated from clean environments at all times. Most facilities have clearly marked soiled and clean corridors. If your facility uses color-coded pathways or signage, follow them without exception. Even if a soiled corridor route is longer, it must be used. Taking shortcuts through clean areas creates cross-contamination risk and is a direct Joint Commission finding.",
        thinkAboutIt: "The soiled corridor is temporarily blocked by a construction barrier. A tech decides to take the instruments through the clean core 'just this once' since it's faster. What should you do if you witness this?"
      },
      {
        heading: "Soiled Utility Room Standards",
        content: "The soiled utility room is the staging area for contaminated instruments before transport to SPD. It must be properly equipped at all times with: pre-cleaner/enzymatic solution, full PPE supplies, waste receptacles, sharps containers, hand hygiene stations, and biohazard bags. The room must be maintained in a clean and orderly condition despite handling soiled items. The workflow in this room follows a specific sequence: (1) receive soiled instruments, (2) remove remaining gross bioburden, (3) open all hinged instruments, (4) apply enzymatic spray, (5) place in container/biohazard bag, (6) secure lid, (7) stage for transport to SPD via soiled corridor.",
        criticalValues: [
          { label: "Required supplies", value: "PPE, pre-cleaner, waste receptacles, sharps containers, hand hygiene" },
          { label: "Clean bins", value: "Stored in clean supply room, NOT soiled utility room" },
          { label: "Workflow", value: "Debride → Open instruments → Spray → Contain → Seal → Transport" }
        ]
      }
    ],
    quickReference: [
      { fact: "Point-of-use treatment", detail: "Enzymatic spray immediately - never let bioburden dry" },
      { fact: "Instrument position", detail: "Open/unlocked (box locks released), heavy on bottom, delicate on top" },
      { fact: "Transport container", detail: "Red rigid bin with secured lid" },
      { fact: "Clean bin storage", detail: "Clean supply room only" },
      { fact: "Required PPE", detail: "Gloves, gown, face shield/goggles, mask" },
      { fact: "Transport route", detail: "Soiled corridors only - never through clean areas" },
      { fact: "Soiled utility room", detail: "Must have PPE, pre-cleaner, waste, sharps, hygiene stations" }
    ]
  },
  {
    levelId: "environment",
    title: "Environment & Surfaces",
    overview: "Environmental surfaces in healthcare settings can harbor dangerous pathogens if not properly maintained. Joint Commission surveyors conduct Environment of Care (EOC) rounds specifically looking for infection prevention hazards on walls, ceilings, floors, countertops, and overhead surfaces. Understanding what constitutes a compliant environment versus a finding helps you identify and report issues before they become patient safety problems.",
    sections: [
      {
        heading: "Wall & Countertop Integrity",
        content: "Every wall, countertop, and work surface in clinical areas must be intact and impervious - meaning it can be properly cleaned and disinfected. The moment a surface develops a crack, hole, chip, or area of peeling paint, it can no longer be effectively disinfected. Biofilm and pathogens can colonize these damaged areas and resist standard cleaning. Tape residue is one of the most common findings during EOC rounds. When tape is applied directly to walls (for signage, tubing, etc.) and later removed, the sticky residue left behind traps dust and microorganisms. This makes the surface non-impervious. All tape residue must be removed, and staff should use approved mounting methods instead of tape on walls.",
        criticalValues: [
          { label: "Surface standard", value: "Intact, smooth, impervious (cleanable)" },
          { label: "Common violations", value: "Tape residue, holes, cracks, chips, peeling paint" },
          { label: "Action required", value: "Report immediately for repair" }
        ],
        thinkAboutIt: "During a walkthrough, you notice someone has taped a holiday card to the wall in a pre-op area. The card looks nice but the tape will leave residue. What's the appropriate response?"
      },
      {
        heading: "Ceiling Tile Requirements",
        content: "Ceiling tiles in all clinical areas must be intact, unstained, properly seated in the grid, and free of damage. This is one of the highest-priority items during EOC rounds. Cracked or damaged tiles can harbor mold, dust, and pathogens in their porous surfaces. Stained tiles are especially concerning because they often indicate water damage or active leaks from plumbing above the ceiling. Water damage above ceiling tiles creates conditions for mold growth, which can spread spores into patient care areas. Missing or displaced tiles expose the plenum space above, which is not a clean environment. Any ceiling tile issue must be reported immediately - never cover it with tape or ignore it.",
        criticalValues: [
          { label: "Tile standard", value: "Intact, unstained, properly seated in grid" },
          { label: "Stained tiles", value: "May indicate water leak - report immediately" },
          { label: "Missing/displaced tiles", value: "Expose unclean plenum - critical finding" }
        ]
      },
      {
        heading: "Dust & Overhead Surface Management",
        content: "All overhead surfaces must be free of visible dust. This includes light fixtures, surgical booms, shelving units, air vents/diffusers, picture frames, monitor arms, and the tops of crash carts and supply cabinets. Dust is not merely a housekeeping issue - it harbors microorganisms that can become airborne and settle into sterile fields, wound sites, or respiratory equipment. Regular cleaning schedules must include both high-touch surfaces and overhead surfaces. Many facilities use a documented schedule for overhead cleaning that includes monthly or quarterly deep cleaning of all elevated surfaces. If you can see dust on any overhead surface in a clinical area, it's a finding.",
        thinkAboutIt: "You pull down a piece of equipment from an overhead boom and notice a visible layer of dust on its surface. The equipment is needed for the next case. What do you do before using it?"
      },
      {
        heading: "Environment of Care (EOC) Rounds",
        content: "EOC rounds are systematic inspections conducted regularly to identify infection prevention and safety hazards. During these rounds, inspectors look for: tape residue on walls, visible dust on fixtures and overhead surfaces, damaged or stained ceiling tiles, holes in walls or countertops, improperly stored supplies, furniture with torn or cracked coverings (non-impervious), rust on metal equipment or fixtures, improper waste segregation, and blocked safety equipment. What is NOT typically flagged: minor floor scuffs from normal foot traffic and wheeled equipment are considered normal wear and are not infection prevention hazards. However, damaged cove base, standing water, or significant floor damage would be flagged.",
        criticalValues: [
          { label: "Flagged items", value: "Tape residue, dust, damaged tiles, holes, torn furniture, rust" },
          { label: "NOT flagged", value: "Minor floor scuffs from normal wear" },
          { label: "Frequency", value: "Regular scheduled rounds with documentation" }
        ]
      },
      {
        heading: "Floor & Baseboard Standards",
        content: "Floors must be clean, dry, and in good repair. Cove base (baseboards) must be intact and properly sealed to the wall and floor. Damaged cove base is a significant finding because it allows water, cleaning solutions, and contaminants to seep behind the wall, creating hidden moisture conditions ideal for mold growth. Standing water on floors is never acceptable in clinical areas. Floors should be free of debris and trip hazards. While minor scuff marks from normal use are acceptable, any damage that compromises the integrity of the floor surface (cracks, gaps, missing sections) must be reported and repaired.",
        criticalValues: [
          { label: "Floor standard", value: "Clean, dry, intact, free of standing water" },
          { label: "Cove base", value: "Intact and sealed - prevents moisture infiltration" },
          { label: "Damaged cove base", value: "Report immediately - mold risk" }
        ]
      },
      {
        heading: "Furniture & Equipment Surfaces",
        content: "All furniture in clinical areas - chairs, exam tables, stretchers, recliners - must have intact, non-porous, impervious coverings. Torn, cracked, or worn vinyl/upholstery creates surfaces that cannot be properly disinfected. Exposed foam or fabric absorbs body fluids and harbors pathogens. Any furniture with compromised covering must be removed from service and either reupholstered or replaced. Metal equipment must be free of rust, which indicates corrosion that cannot be effectively cleaned. Equipment with rust must be evaluated and potentially removed from service.",
        thinkAboutIt: "A favorite recliner in the recovery area has a small tear in the vinyl. Staff say it's comfortable and patients like it. Why can't you just put tape over the tear?"
      }
    ],
    quickReference: [
      { fact: "Wall surfaces", detail: "Intact, impervious, no tape residue, holes, or cracks" },
      { fact: "Ceiling tiles", detail: "Intact, unstained, properly seated - stains = possible water leak" },
      { fact: "Overhead surfaces", detail: "Must be free of visible dust" },
      { fact: "Floor scuffs", detail: "Minor scuffs OK - damaged cove base, standing water NOT OK" },
      { fact: "Furniture", detail: "No torn, cracked, or worn coverings - must be impervious" },
      { fact: "Rust on equipment", detail: "Remove from service for evaluation" },
      { fact: "EOC rounds focus", detail: "Infection prevention hazards, not cosmetic wear" }
    ]
  },
  {
    levelId: "segregation",
    title: "Clean/Dirty Segregation",
    overview: "The separation of clean and soiled items is a foundational principle of infection prevention. Joint Commission standards require that clean supplies, sterile instruments, and soiled/contaminated materials never share the same space, storage area, sink, or transport path. This chapter covers the rules for clean/dirty segregation in utility rooms, sinks, storage areas, and clinical spaces. Violations in this area are among the most commonly cited Joint Commission findings.",
    sections: [
      {
        heading: "The Clean/Dirty Separation Principle",
        content: "At its core, this principle is simple: clean and soiled items must never occupy the same space at the same time. This applies to every aspect of healthcare operations - from instrument transport to supply storage to patient care. Clean items include sterile supplies, medications, clean linens, and prepared patient care items. Soiled items include used instruments, contaminated linens, waste, and any item that has been exposed to body fluids. The separation must be maintained in storage rooms, on transport carts, in sinks, and during procedures. Cross-contamination can occur through direct contact, shared surfaces, airborne particles, or splash/spray.",
        thinkAboutIt: "A nurse places a bag of clean linens on a counter next to a basin of soiled wound dressings. Even though the items aren't touching, why is this a problem?"
      },
      {
        heading: "Utility Room Requirements",
        content: "Facilities must have separate clean utility rooms and soiled utility rooms. These rooms serve distinctly different purposes and their contents must never be mixed. The clean utility room stores: clean supplies, prepared medications, clean equipment, clean transport containers. The soiled utility room contains: soiled linen hampers, waste receptacles, contaminated equipment staging, instrument pre-treatment supplies, and hand hygiene stations. Items from a soiled utility room must never be stored in or pass through the clean utility room, and vice versa. Each room should be clearly labeled and staff must be trained on the appropriate use of each room.",
        criticalValues: [
          { label: "Clean utility room", value: "Clean supplies, meds, equipment, transport containers" },
          { label: "Soiled utility room", value: "Soiled linens, waste, contaminated equipment staging" },
          { label: "Golden rule", value: "Never mix contents or purposes of clean and soiled rooms" }
        ]
      },
      {
        heading: "Sink Designation & Use",
        content: "Sinks in clinical areas are designated for specific purposes and those designations must be followed without exception. A sink designated for handwashing must only be used for handwashing. A sink designated for instrument cleaning must only be used for instrument cleaning. A sink designated for patient care (such as filling water pitchers) must never be used for disposing of body fluids. Using a handwashing sink to rinse contaminated items contaminates the sink and creates cross-infection risk. Sink designations should be clearly posted. If a sink is not labeled, staff should know its designated purpose based on its location and training.",
        criticalValues: [
          { label: "Handwashing sinks", value: "Handwashing ONLY - no instrument rinsing, no disposal" },
          { label: "Instrument sinks", value: "Instrument processing only" },
          { label: "Labeling", value: "All sinks should have clear purpose designation" }
        ],
        thinkAboutIt: "You need to quickly rinse a bedpan but the designated hopper is being used. The handwashing sink nearby is available. Why can't you use it 'just this once'?"
      },
      {
        heading: "Storage Height & Floor Clearance",
        content: "Supplies must never be stored directly on the floor. All items must be stored at least 6-8 inches off the floor on shelving or carts. This clearance is necessary for: (1) allowing proper floor cleaning underneath, (2) preventing contamination from floor-cleaning solutions and splash, (3) facilitating pest control inspections, and (4) keeping supplies above any standing water in the event of a spill or flood. Additionally, nothing should ever be stored under sinks. The area under sinks is prone to moisture, condensation, and potential leaks - all of which can contaminate stored supplies. Items stored under sinks is one of the most common Joint Commission findings.",
        criticalValues: [
          { label: "Floor clearance", value: "6-8 inches minimum" },
          { label: "Under sinks", value: "NEVER store anything under sinks" },
          { label: "Why clearance matters", value: "Floor cleaning, splash protection, pest control" }
        ]
      },
      {
        heading: "Food & Beverage Restrictions",
        content: "Food and beverages are strictly prohibited in all clinical areas, medication rooms, labs, and anywhere patient care occurs. This includes: staff personal drinks (even with lids), food containers, and any eating or drinking. Food and beverages may only be consumed in designated break rooms or cafeteria areas. The reason is twofold: (1) food and drink containers can become contaminated with pathogens present in clinical areas, putting staff at risk of ingestion exposure, and (2) food particles attract pests and create surfaces that harbor bacteria. Even a water bottle with a sealed lid in a med room is a finding because it normalizes having personal items in clinical spaces.",
        thinkAboutIt: "A colleague argues that their sealed water bottle on the nursing station counter is fine because it has a lid. What would you tell them about why this is still a violation?"
      },
      {
        heading: "Linen & Supply Transport Separation",
        content: "Clean and soiled linens must be transported separately and must never be on the same cart at the same time. Clean linen carts must be covered or enclosed during transport to prevent contamination from airborne particles. Soiled linen hampers must be covered and transported via soiled corridors when possible. The same cart should not be used for both clean and soiled transport without thorough cleaning and disinfection between uses. Clean supplies being transported should be covered or wrapped to prevent contamination. Multi-use supply carts in patient care areas must be regularly cleaned and disinfected.",
        criticalValues: [
          { label: "Clean linen transport", value: "Covered/enclosed carts, clean corridors" },
          { label: "Soiled linen transport", value: "Covered hampers, soiled corridors" },
          { label: "Same cart for both?", value: "Only after thorough cleaning/disinfection between uses" }
        ]
      }
    ],
    quickReference: [
      { fact: "Core principle", detail: "Clean and soiled items NEVER share space, sinks, or transport" },
      { fact: "Floor storage", detail: "Nothing on the floor - 6-8 inch clearance required" },
      { fact: "Under sinks", detail: "NEVER store anything under sinks" },
      { fact: "Sink designation", detail: "Use sinks only for their designated purpose" },
      { fact: "Food/drinks", detail: "Prohibited in ALL clinical areas - break rooms only" },
      { fact: "Clean utility room", detail: "Clean supplies only - never soiled items" },
      { fact: "Soiled utility room", detail: "Soiled items, PPE, pre-cleaner, waste only" }
    ]
  },
  {
    levelId: "sterile_storage",
    title: "Sterile Storage & Handling",
    overview: "Sterile storage is where processed instruments and supplies await their next use. This area must maintain strict environmental controls and organizational standards to ensure that items remain sterile until the moment they're needed. Joint Commission standards for sterile storage cover everything from shelving requirements and package labeling to temperature/humidity monitoring and stock rotation. A single failure in sterile storage can result in a patient receiving a non-sterile item, leading to surgical site infection.",
    sections: [
      {
        heading: "Event-Related Sterility",
        content: "Modern sterile storage follows the event-related sterility principle: items remain sterile until an event compromises the packaging. Unlike the old practice of assigning expiration dates to sterile packs, event-related sterility recognizes that a properly packaged and stored item stays sterile indefinitely - unless something happens to damage the barrier. Events that compromise sterility include: torn or punctured packaging, moisture exposure, dropping the package, crush damage, seal failure, or environmental contamination. However, items stored for extended periods (over 1 year) should be re-inspected before use to verify package integrity, as long storage increases the chance of unnoticed damage.",
        criticalValues: [
          { label: "Sterility principle", value: "Event-related - sterile until packaging is compromised" },
          { label: "Compromising events", value: "Tears, moisture, drops, crush, seal failure" },
          { label: "Long storage", value: "Re-inspect items stored over 1 year" }
        ],
        thinkAboutIt: "A sterile pack has been on the shelf for 8 months with no expiration date printed on it. A colleague says it must be expired. How would you explain event-related sterility to them?"
      },
      {
        heading: "Prohibited Materials: Corrugated Cardboard",
        content: "Corrugated cardboard is strictly prohibited in sterile storage areas, OR suites, and SPD clean areas. This is an absolute rule with no exceptions. Corrugated cardboard cannot be properly cleaned or disinfected due to its porous, layered structure. It harbors dust, insects, mold spores, and bacteria between its layers. Even 'clean-looking' cardboard can contain contaminants. Shipping boxes must be broken down and removed in a receiving/staging area before supplies enter sterile storage. Items must be transferred to approved shelving or storage containers. Smooth-surfaced rigid containers and plastic bins are acceptable alternatives.",
        criticalValues: [
          { label: "Corrugated cardboard", value: "NEVER allowed in sterile storage, OR, or SPD clean areas" },
          { label: "Why prohibited", value: "Porous, harbors dust/insects/mold, cannot be disinfected" },
          { label: "Alternative", value: "Remove from cardboard in staging area, use approved containers" }
        ]
      },
      {
        heading: "Shelving & Physical Requirements",
        content: "Sterile storage areas must use wire shelving (which allows air circulation and visibility for cleaning). The bottom shelf must have a solid surface (shelf liner or solid shelf) to prevent items from contacting dust that settles on the floor below. Items must be stored 8-10 inches off the floor on the lowest shelf. The top of stored items must be at least 18 inches below ceiling-mounted sprinkler heads - this clearance is required by fire code to allow sprinkler spray patterns to function properly. Shelving must be clean and in good repair. Peel packs must be stored standing upright or stacked no more than 2 high to prevent crushing seal integrity.",
        criticalValues: [
          { label: "Shelving type", value: "Wire shelving with solid bottom shelf" },
          { label: "Floor clearance", value: "8-10 inches from floor" },
          { label: "Sprinkler clearance", value: "18 inches below sprinkler heads" },
          { label: "Peel pack stacking", value: "Maximum 2 high" }
        ]
      },
      {
        heading: "Environmental Controls",
        content: "Sterile storage areas require specific environmental conditions that must be monitored and documented. Temperature must be maintained between 68-75°F (20-24°C). Relative humidity must be kept between 30-60% per AAMI ST79. These ranges prevent condensation (which can wet and compromise sterile packaging), inhibit microbial growth, and maintain packaging material integrity. Temperature and humidity must be checked and logged daily (or continuously monitored with an automated system). If conditions fall outside these ranges, a corrective action plan must be implemented. Excessive humidity is particularly dangerous because moisture can wick through packaging materials and compromise sterility.",
        criticalValues: [
          { label: "Temperature", value: "68-75°F (20-24°C)" },
          { label: "Humidity", value: "30-60% relative humidity (AAMI ST79)" },
          { label: "Monitoring", value: "Daily checks with documentation" },
          { label: "Humidity risk", value: "Moisture wicks through packaging, breaks sterile barrier" }
        ]
      },
      {
        heading: "Package Labeling Requirements",
        content: "Every sterile pack processed in-house must be labeled with three critical pieces of information: (1) the sterilizer identification number (which sterilizer was used), (2) the load number (which cycle/load within that sterilizer), and (3) the date of sterilization. This labeling enables traceability - if a sterilizer's biological indicator (BI) test later shows a failure, staff can identify every item from that specific load and pull them from service. Without proper labeling, a BI failure could mean pulling ALL sterile inventory because you can't determine which items were in the affected load. Labels must be clearly legible. Chemical indicators (CI) must also be present showing exposure to sterilization conditions.",
        criticalValues: [
          { label: "Required label info", value: "Sterilizer ID + Load number + Date" },
          { label: "Purpose", value: "Traceability for BI failure recalls" },
          { label: "Chemical indicator", value: "Must be present and show exposure" }
        ],
        thinkAboutIt: "A biological indicator test comes back positive 48 hours after the load was processed. Without load numbers on the packs, what would the facility have to do? Why does proper labeling save time, money, and patient safety?"
      },
      {
        heading: "Stock Rotation (FIFO)",
        content: "Sterile storage must follow FIFO - First In, First Out - rotation. When new sterile items are added to shelves, they go to the back, and older items are moved to the front. This ensures that items with the longest storage time are used first, reducing the chance that packages sit for extended periods and develop unnoticed damage. Items that have been stored for more than 1 year should be re-inspected for packaging integrity before use (verify seals, check for moisture damage, ensure chemical indicators are intact). FIFO rotation should be a documented practice with regular audits to verify compliance.",
        criticalValues: [
          { label: "Rotation method", value: "FIFO - First In, First Out" },
          { label: "New stock placement", value: "Goes to the BACK of the shelf" },
          { label: "Items over 1 year", value: "Re-inspect before use" }
        ]
      }
    ],
    quickReference: [
      { fact: "Sterility principle", detail: "Event-related - sterile until an event compromises the package" },
      { fact: "Corrugated cardboard", detail: "NEVER allowed in sterile storage, OR, or SPD" },
      { fact: "Temperature range", detail: "68-75°F (20-24°C)" },
      { fact: "Humidity range", detail: "30-60% relative humidity (AAMI ST79)" },
      { fact: "Floor clearance", detail: "8-10 inches on bottom shelf" },
      { fact: "Sprinkler clearance", detail: "18 inches below sprinkler heads" },
      { fact: "Peel packs", detail: "Maximum 2 high" },
      { fact: "Pack labeling", detail: "Sterilizer ID + Load number + Date" },
      { fact: "Stock rotation", detail: "FIFO - First In, First Out" },
      { fact: "Shelving", detail: "Wire shelving, solid bottom shelf" }
    ]
  },
  {
    levelId: "instruments",
    title: "Instruments & Inspection",
    overview: "Every surgical instrument must be thoroughly inspected before packaging and sterilization. Damaged, corroded, or malfunctioning instruments can fail during surgery, harbor pathogens that survive sterilization, or compromise sterile packaging. This chapter covers visual inspection standards, rust and corrosion identification, peel pack requirements, and FDA compliance for instrument sourcing.",
    sections: [
      {
        heading: "Visual Inspection Standards",
        content: "Every instrument must be visually inspected after cleaning and before packaging for sterilization. Inspection must check for: residual bioburden, rust or corrosion (any orange/brown discoloration), proper function (scissors cut, clamps hold, ratchets lock at each position), alignment (jaw tips meet properly), surface damage, and cleanliness of all surfaces. Lighted magnification must be available and used at the assembly/inspection station. This is not optional - the human eye cannot detect fine residual bioburden or micro-damage without magnification. Inspection should follow a systematic approach: check the entire instrument from tip to handle, including box locks, serrations, and lumens.",
        criticalValues: [
          { label: "Inspection timing", value: "After cleaning, before packaging" },
          { label: "Required tool", value: "Lighted magnification at inspection station" },
          { label: "Check points", value: "Bioburden, rust, function, alignment, surface condition" }
        ],
        thinkAboutIt: "An inspector finds a hemostat where the jaws don't align perfectly at the tips - they're off by about 1mm. The ratchets still lock. Should this instrument be used or removed from service?"
      },
      {
        heading: "Rust & Corrosion Identification",
        content: "Rust is identified by any orange, brown, or reddish-brown discoloration on metal instrument surfaces. Rust is a form of corrosion that creates a porous, irregular surface texture. This porous surface cannot be effectively sterilized because microorganisms can hide within the surface pits and crevices where sterilant cannot reach. ANY instrument with rust must be immediately removed from service. There is no acceptable level of rust on surgical instruments. The instrument should be tagged, documented, and sent for evaluation. Surface rust sometimes appears after exposure to certain tap water minerals or incompatible cleaning chemicals. Using treated water (RO, DI, or distilled) for final rinse helps prevent this.",
        criticalValues: [
          { label: "Rust identification", value: "Any orange/brown/reddish-brown discoloration" },
          { label: "Action", value: "Remove from service IMMEDIATELY" },
          { label: "Why critical", value: "Porous surface cannot be sterilized - harbors pathogens" },
          { label: "Prevention", value: "Use treated water for final rinse (RO/DI/distilled)" }
        ]
      },
      {
        heading: "Surface Etching & Chemical Damage",
        content: "Etching appears as a dulling, frosting, or pitting of the instrument surface. Unlike rust which is biological corrosion, etching is typically caused by chemical damage from improper detergent concentrations, incompatible cleaning chemicals, prolonged exposure to disinfectants, or using chlorine-based cleaners on stainless steel. Etched surfaces are permanently damaged - the smooth, passivated surface layer of the stainless steel has been destroyed. Like rust, etched surfaces create micro-pits that can harbor microorganisms and resist sterilization. Instruments with etching must be removed from service and sent for evaluation. Prevention includes following IFU (Instructions for Use) for all cleaning chemicals exactly.",
        criticalValues: [
          { label: "Etching appearance", value: "Dulling, frosting, or pitting of metal surface" },
          { label: "Cause", value: "Chemical damage from improper detergent/disinfectant use" },
          { label: "Action", value: "Remove from service for evaluation" },
          { label: "Prevention", value: "Follow chemical IFU exactly - correct dilution, time, temperature" }
        ]
      },
      {
        heading: "Peel Pack Standards",
        content: "Peel packs (also called peel pouches) are the transparent/paper packaging used for individual instruments or small sets. Inspection of peel packs before use must verify: (1) the seal is intact and continuous with no channels or gaps, (2) the chemical indicator has changed color appropriately (showing exposure to sterilization conditions), (3) the instrument is positioned correctly inside (not touching the seal area, not puncturing the pack), and (4) the instrument itself is in good condition. Peel packs must be stored flat or standing upright, stacked no more than 2 high. Using sharp-edged instrument racks that could puncture packs during storage is not acceptable.",
        criticalValues: [
          { label: "Seal", value: "Intact, continuous, no channels or gaps" },
          { label: "Chemical indicator", value: "Must show appropriate color change" },
          { label: "Instrument position", value: "Not touching seal, not puncturing pack" },
          { label: "Storage", value: "Max 2 high, no sharp-edged racks" }
        ]
      },
      {
        heading: "FDA Compliance & Single-Use Instruments",
        content: "All surgical instruments used in the facility must be FDA-cleared for their intended use. Single-use designation is determined entirely by manufacturer labeling - specifically the single-use symbol (a '2' with a line through it) or explicit 'Do Not Reprocess' language on the label. Country of origin does not determine single-use status. Single-use instruments must never be placed in peel packs for in-house reprocessing, regardless of where they were manufactured. Single-use devices may only be reprocessed by FDA-registered third-party reprocessors - never in-house. Using a single-use device as a reusable instrument without FDA-registered reprocessing is a serious regulatory violation.",
        criticalValues: [
          { label: "FDA requirement", value: "ALL instruments must be FDA-cleared" },
          { label: "Single-use symbol", value: "'2' with line through it = discard after one use" },
          { label: "Single-use determination", value: "Manufacturer label only - not country of origin" },
          { label: "Peel pack eligibility", value: "Only FDA-cleared reusable instruments" }
        ],
        thinkAboutIt: "A shipment of instruments arrives bearing the single-use symbol. A surgeon wants to use them repeatedly because they look identical to the FDA-cleared reusable version. What's the correct response, and where does the single-use determination come from?"
      }
    ],
    quickReference: [
      { fact: "Inspection tool", detail: "Lighted magnification required at assembly station" },
      { fact: "Rust", detail: "Any orange/brown staining = remove from service immediately" },
      { fact: "Etching", detail: "Dulling/frosting of surface = chemical damage, remove from service" },
      { fact: "Peel pack storage", detail: "Maximum 2 high, no sharp-edged racks" },
      { fact: "Peel pack seal", detail: "Must be intact, continuous, no channels" },
      { fact: "Chemical indicator", detail: "Must show proper color change" },
      { fact: "FDA compliance", detail: "ALL instruments must be FDA-cleared" },
      { fact: "Single-use instruments", detail: "Determined by manufacturer label (symbol or 'Do Not Reprocess') - never reprocess in-house" }
    ]
  },
  {
    levelId: "facilities",
    title: "Facility Safety & Equipment",
    overview: "Healthcare facility safety encompasses warming equipment, gas cylinder management, electrical systems, fire safety, emergency equipment, and clinical device management. Joint Commission surveys examine these areas intensively because failures can directly cause patient injury, fire, or death. This chapter covers the specific temperature limits, clearance requirements, and safety protocols that every staff member must know.",
    sections: [
      {
        heading: "Blanket & Fluid Warmers",
        content: "Warming cabinets are among the most frequently cited items in Joint Commission surveys because their misuse creates direct patient safety risks. Blanket warmers must be set to a maximum of 130°F. ONLY blankets may be stored in blanket warmers - no IV fluids, irrigation solutions, or any liquids. Placing fluids in a blanket warmer risks overheating them beyond safe infusion/irrigation temperatures and can cause thermal burns. Fluid warmers are separate devices set to a maximum of 110°F. Only fluids may be placed in fluid warmers. All fluids in warmers must be dated when placed inside and must be used before their expiration date (check manufacturer's IFU for specific time limits after warming). Expired or undated fluids must be removed and discarded.",
        criticalValues: [
          { label: "Blanket warmer max", value: "130°F - blankets ONLY, no fluids" },
          { label: "Fluid warmer max", value: "110°F - fluids ONLY, must be dated" },
          { label: "Dated fluids", value: "Must have date placed in warmer + check expiration" },
          { label: "Expired/undated", value: "Remove and discard immediately" }
        ],
        thinkAboutIt: "A nurse places a bag of IV normal saline in the blanket warmer because the fluid warmer is full. 'It's just for a few minutes,' they say. Why is this dangerous?"
      },
      {
        heading: "Oxygen Cylinder Safety",
        content: "Compressed oxygen is an oxidizer that dramatically accelerates combustion. Oxygen cylinders require specific storage and handling protocols. Full (green cap/tag) cylinders must be segregated from partially full and empty cylinders - they should not be stored together. A maximum of 12 full-size oxygen cylinders may be stored in non-hazardous (non-patient care) areas outside of approved cylinder storage rooms. Cylinders must be secured in approved stands, racks, or chained to prevent falling. They must be stored away from heat sources and combustible materials. Empty cylinders should be clearly marked as empty and returned to the supplier promptly.",
        criticalValues: [
          { label: "Max cylinders", value: "12 full-size in non-hazardous areas" },
          { label: "Segregation", value: "Full cylinders separated from partial/empty" },
          { label: "Security", value: "Must be secured in stands/racks or chained" },
          { label: "Hazard", value: "Oxidizer - accelerates combustion" }
        ]
      },
      {
        heading: "Electrical Panel & Fire Equipment Clearances",
        content: "Three-foot clearance is one of the most important numbers in facility safety. Electrical panels must have 3 feet of clear, unobstructed space in front of them at all times. This clearance allows maintenance personnel and emergency responders to quickly access panels to shut off power during emergencies. Electrical panels must also be kept locked to prevent unauthorized access. The same 3-foot clearance applies to fire extinguishers, fire alarm pull stations, and medical gas shut-off panels. Items stored in front of this equipment - even temporarily - can delay emergency response and are a critical Joint Commission finding. Storage of any items within the 3-foot zone is never acceptable.",
        criticalValues: [
          { label: "Required clearance", value: "3 feet for electrical panels, fire pulls, extinguishers, gas panels" },
          { label: "Electrical panels", value: "Must be LOCKED and have 3-ft clearance" },
          { label: "Sprinkler clearance", value: "18 inches below all sprinkler heads" }
        ]
      },
      {
        heading: "Code Cart & Emergency Equipment",
        content: "Code carts (crash carts) must be maintained in a state of constant readiness. They must be plugged into red (emergency power) outlets so that the defibrillator battery stays charged even during a power outage. Documentation checks must be current - this typically means daily checks verifying the cart is sealed/locked, all supplies are present, and the defibrillator is functional. Expired supplies on a code cart are a critical finding. Call cords (nurse call devices) in patient areas must be accessible to patients - they must hang no more than 6 inches from the floor so a patient who has fallen can still reach them. Call cords must never be wrapped up or tied out of reach.",
        criticalValues: [
          { label: "Code cart outlet", value: "RED (emergency power) outlets only" },
          { label: "Documentation", value: "Daily checks required" },
          { label: "Call cord position", value: "Within 6 inches of the floor" },
          { label: "Call cord rule", value: "Never wrapped up or tied out of reach" }
        ]
      },
      {
        heading: "Clinical Device Management",
        content: "Clinical devices require specific cleaning protocols and dating. Glucometers must be cleaned between each patient use with the correct disinfectant and contact time: Yellow Top Bleach requires 4 minutes of wet contact time, while PDI Sani-Cloth germicidal wipes require 1 minute of wet contact time. Using the wrong contact time means the device is not properly disinfected and could transmit infections between patients. Ultrasound gel must be dated when opened and used within the manufacturer's specified beyond-use date - always follow the IFU (some manufacturers specify 28 days, others differ; single-patient use gel packets are exempt). Multi-dose vials must be dated when opened and used per manufacturer's guidelines. All medications, supplies, and solutions must be checked for expiration dates before use.",
        criticalValues: [
          { label: "Glucometer + Yellow Top Bleach", value: "4 minutes wet contact time" },
          { label: "Glucometer + PDI Sani-Cloth", value: "1 minute wet contact time" },
          { label: "Ultrasound gel", value: "Date when opened - follow manufacturer IFU for beyond-use date" },
          { label: "All supplies", value: "Must be within expiration date" }
        ],
        thinkAboutIt: "After checking a patient's blood glucose, you wipe the glucometer with a PDI Sani-Cloth and move to the next patient 30 seconds later. What did you do wrong?"
      },
      {
        heading: "Temperature Monitoring",
        content: "Refrigerators containing medications or biological specimens must have temperature checks documented daily. Temperatures must remain within the specified range for the contents (typically 36-46°F for medication refrigerators). Out-of-range temperatures require corrective action documentation and potentially discarding affected contents. Food refrigerators in patient nutrition areas also require daily temperature checks. Warming cabinets (blanket and fluid) should also have regular temperature verification to ensure they haven't drifted above maximum limits.",
        criticalValues: [
          { label: "Medication fridge", value: "Daily temperature checks documented" },
          { label: "Typical range", value: "36-46°F (check specific requirements)" },
          { label: "Out of range", value: "Corrective action required, contents may need to be discarded" }
        ]
      }
    ],
    quickReference: [
      { fact: "Blanket warmer", detail: "≤130°F, blankets ONLY, no fluids ever" },
      { fact: "Fluid warmer", detail: "≤110°F, fluids ONLY, must be dated" },
      { fact: "O₂ cylinders", detail: "Max 12 in non-hazardous areas, full separated from empty" },
      { fact: "Electrical panels", detail: "3-ft clearance, must be locked" },
      { fact: "Fire equipment", detail: "3-ft clearance for pulls, extinguishers, gas panels" },
      { fact: "Sprinkler clearance", detail: "18 inches below heads" },
      { fact: "Code carts", detail: "Red outlets, daily checks, no expired supplies" },
      { fact: "Call cords", detail: "≤6 inches from floor, never wrapped up" },
      { fact: "Glucometer cleaning", detail: "Yellow Top Bleach = 4 min, PDI Sani-Cloth = 1 min" },
      { fact: "Ultrasound gel", detail: "28 days after opening" },
      { fact: "Fridge checks", detail: "Daily temperature documentation" }
    ]
  },
  {
    levelId: "spd_decontam",
    title: "SPD & Decontamination",
    overview: "Sterile Processing Department (SPD) decontamination is where contaminated instruments are transformed back into sterile, patient-ready tools. This is one of the most heavily regulated areas in healthcare. Every step - from the decontamination room environment to enzymatic cleaning, automated processing, sterilization controls, and packaging - must follow strict protocols. Failures here can lead to surgical site infections, patient harm, and facility closure.",
    sections: [
      {
        heading: "Decontamination Room Environment",
        content: "The decontamination room must maintain negative air pressure relative to surrounding areas. This means air flows INTO the decon room, not OUT - preventing aerosolized contaminants from escaping into clean areas. You can verify negative pressure with a tissue test: hold a tissue at the bottom of the closed door - it should pull toward the decon room. If it pushes away or doesn't move, the HVAC system needs immediate attention. Full PPE is required at ALL times in the decon room: fluid-resistant gown, gloves, face shield or goggles, mask, and often shoe covers. The decon room should have emergency eyewash stations accessible within 10 seconds of travel. Temperature and humidity should be monitored for staff comfort and safety.",
        criticalValues: [
          { label: "Air pressure", value: "NEGATIVE pressure (air flows IN)" },
          { label: "Pressure test", value: "Tissue at door bottom - should pull toward decon room" },
          { label: "PPE required", value: "Gown, gloves, face shield/goggles, mask - ALL times" },
          { label: "Eyewash", value: "Within 10 seconds of travel" }
        ],
        thinkAboutIt: "You perform a tissue test at the decon room door and the tissue doesn't move. What does this indicate and what should you do?"
      },
      {
        heading: "Enzymatic Cleaning & IFU Compliance",
        content: "Enzymatic detergent is the primary cleaning agent for breaking down organic material on instruments. However, it must be used exactly according to the manufacturer's Instructions for Use (IFU). The IFU specifies: correct dilution ratio (too concentrated can damage instruments, too dilute is ineffective), correct water temperature (typically lukewarm - hot water can cook proteins onto surfaces), required soak time, how often to change the solution, and compatibility with instrument materials. Deviating from the IFU in any way is a compliance violation. Solution must be changed at the frequency specified - reusing enzymatic solution beyond its effective life means instruments are not being properly cleaned. Manual cleaning with brushes appropriate for the instrument type must precede automated processing for complex instruments.",
        criticalValues: [
          { label: "IFU compliance", value: "Follow EXACTLY - dilution, temp, soak time, change frequency" },
          { label: "Water temperature", value: "Per IFU (typically lukewarm - hot cooks proteins)" },
          { label: "Solution changes", value: "At manufacturer-specified frequency" },
          { label: "Manual cleaning", value: "Required for complex instruments before automated processing" }
        ]
      },
      {
        heading: "Automated Processing & Water Quality",
        content: "Automated washers and ultrasonic cleaners must be quality-tested daily before processing begins. Tests verify that mechanical action, temperature, and chemical delivery are functioning correctly. Records of these daily tests must be maintained. Water quality is critical: the final rinse in instrument processing must use treated water - reverse osmosis (RO), deionized (DI), or distilled water. Untreated tap water contains minerals that deposit on instrument surfaces, causing spotting, staining, and accelerated corrosion. Treated water prevents mineral deposits and ensures a residue-free final rinse. Water quality testing should be documented. Ultrasonic cleaners must be tested with aluminum foil or commercial test strips to verify cavitation.",
        criticalValues: [
          { label: "Daily testing", value: "Quality tests on ALL automated equipment before use" },
          { label: "Final rinse water", value: "Treated only - RO, DI, or distilled" },
          { label: "Tap water risk", value: "Mineral deposits cause spotting/staining/corrosion" },
          { label: "Ultrasonic testing", value: "Foil or commercial test to verify cavitation" }
        ]
      },
      {
        heading: "Sterilization Process Controls",
        content: "Sterilization is verified through three types of indicators: mechanical (reading the sterilizer gauges for correct temperature, pressure, and time), chemical (indicators that change color when exposed to sterilization conditions), and biological (BI - live spore tests that verify the sterilizer actually killed microorganisms). The Bowie-Dick test must be run daily on dynamic air removal (prevacuum) steam sterilizers - it verifies proper air removal from the chamber. Biological Indicators (BIs) must be run in EVERY load. If a BI comes back positive (spores survived), all items from that load must be recalled. Sterilizer logs must be current, complete, and include all three indicator results for every load.",
        criticalValues: [
          { label: "Bowie-Dick test", value: "Daily on prevacuum steam sterilizers" },
          { label: "Biological Indicators", value: "EVERY load - no exceptions" },
          { label: "Positive BI", value: "Recall ALL items from that load" },
          { label: "Sterilizer logs", value: "Must be current and complete - all 3 indicator types" }
        ],
        thinkAboutIt: "The sterilizer tech runs the Bowie-Dick test and it passes. They decide to skip BIs for the first few loads since 'the machine is obviously working.' Why is this unacceptable?"
      },
      {
        heading: "Packaging, Drying & Assembly",
        content: "Instruments must be completely dry before packaging. Moisture inside a sterile pack creates a pathway for microorganisms to wick through the packaging material (wet strike-through), compromising sterility. After cleaning, instruments should be dried using lint-free towels or a drying cabinet. Assembly and packaging takes place in the clean side of SPD. Lighted magnification must be available at the assembly station for instrument inspection. Instrument sets must not exceed 25 pounds - heavier sets can compromise packaging integrity and create ergonomic hazards. All packs must be labeled with sterilizer ID, load number, and date. Packaging materials must be appropriate for the sterilization method being used.",
        criticalValues: [
          { label: "Before packaging", value: "Instruments must be completely DRY" },
          { label: "Wet packs", value: "Moisture = wet strike-through = sterility compromised" },
          { label: "Max set weight", value: "25 pounds" },
          { label: "Assembly tools", value: "Lighted magnification required" },
          { label: "Pack labeling", value: "Sterilizer ID + Load number + Date" }
        ]
      }
    ],
    quickReference: [
      { fact: "Decon room pressure", detail: "Negative pressure - tissue test at door" },
      { fact: "Decon PPE", detail: "Full PPE at ALL times - gown, gloves, face shield, mask" },
      { fact: "Enzymatic cleaning", detail: "Follow IFU exactly - dilution, temp, soak time" },
      { fact: "Final rinse water", detail: "Treated water only - RO, DI, or distilled" },
      { fact: "Bowie-Dick test", detail: "Daily on prevacuum sterilizers" },
      { fact: "Biological indicators", detail: "EVERY load - recall if positive" },
      { fact: "Instruments before packaging", detail: "Must be completely dry" },
      { fact: "Max set weight", detail: "25 pounds" },
      { fact: "Assembly station", detail: "Lighted magnification required" },
      { fact: "Daily quality testing", detail: "All automated washers/ultrasonics before use" }
    ]
  },
  {
    levelId: "or_sterile_field",
    title: "OR & Sterile Technique",
    overview: "The operating room requires the highest level of infection prevention discipline. From attire standards to sterile field management, every action in the OR either protects or threatens the patient. This chapter covers OR attire requirements, sterile field integrity, surgical scrub procedures, skin preparation, draping, and medication safety in the surgical setting.",
    sections: [
      {
        heading: "Sterile Field Integrity",
        content: "The sterile field is the sacred zone around the surgical site where only sterile items may exist. Key rules: (1) Only sterile items may be placed on a sterile field. (2) Sterile team members face the sterile field at all times - turning your back to the field risks contamination. (3) Never reach over a sterile field. (4) If there's any doubt about sterility, consider the item contaminated. (5) Sterile fields should be set up as close to the time of use as possible and must be continuously monitored. (6) The edges of any sterile wrapper or drape are considered non-sterile (typically 1 inch from the edge). (7) If a sterile field is left unattended, it must be considered contaminated and re-established.",
        criticalValues: [
          { label: "Items on field", value: "ONLY sterile items" },
          { label: "Sterile team orientation", value: "Always face the sterile field" },
          { label: "Reaching", value: "NEVER reach over a sterile field" },
          { label: "Doubt", value: "If in doubt = contaminated" },
          { label: "Unattended field", value: "Considered contaminated" }
        ]
      },
      {
        heading: "OR Attire Standards",
        content: "OR attire serves as a barrier between the surgical team and the patient. Requirements include: freshly laundered facility-provided scrubs (not worn from home), surgical cap or hood that covers ALL hair (including sideburns, neckline hair, and facial hair), surgical mask worn over both mouth AND nose at all times in restricted areas, shoe covers as required by facility policy. Jewelry should be minimized in the OR - rings and bracelets can harbor bacteria and rings worn under sterile gloves present a glove integrity risk; facility policy governs what is permissible (AORN guidance allows jewelry that can be fully contained within attire per facility policy, but many facilities prohibit it entirely in restricted zones). Skull caps that leave hair exposed at the sides and back are non-compliant - a bouffant cap or hood that covers all hair must be used.",
        criticalValues: [
          { label: "Scrubs", value: "Facility-provided, freshly laundered" },
          { label: "Head covering", value: "Cap/hood covering ALL hair including sideburns and neckline" },
          { label: "Mask", value: "Over mouth AND nose in restricted areas" },
          { label: "Jewelry", value: "No rings, bracelets, watches - earrings must be covered" }
        ],
        thinkAboutIt: "A surgeon prefers a skull cap that only covers the top of their head. Their sideburns and neckline hair are exposed. Why does this matter for infection prevention?"
      },
      {
        heading: "Surgical Scrub & Gowning",
        content: "The surgical hand scrub is the last line of defense before gloving. Two methods are acceptable: (1) traditional scrub with antimicrobial soap and water using a standardized technique (typically 3-5 minutes), or (2) alcohol-based surgical hand rub (following manufacturer's IFU for application technique and drying time). After scrubbing, hands must be dried with a sterile towel. Gowning and gloving takes place in the OR. The gown is considered sterile only in the front from chest to waist level and on the sleeves from 2 inches above the elbow to the cuff. The back of the gown is NOT sterile. Traffic in and out of the OR should be minimized - every door opening disrupts air pressure differentials and increases particulate counts in the room.",
        criticalValues: [
          { label: "Scrub methods", value: "Antimicrobial soap/water OR alcohol-based rub per IFU" },
          { label: "Hand drying", value: "Sterile towel only" },
          { label: "Sterile gown zones", value: "Front chest-to-waist, sleeves elbow-to-cuff" },
          { label: "OR traffic", value: "Minimize - each opening disrupts air pressure" }
        ]
      },
      {
        heading: "Skin Preparation & Draping",
        content: "Surgical skin prep must be applied to the operative site and allowed to FULLY DRY before draping. This is a critical safety requirement because many skin prep solutions contain alcohol. If the prep is still wet when electrosurgery (cautery) is used, the alcohol vapors can ignite, causing a surgical fire. The prep solution must not pool under the patient - pooling creates an additional fire risk and can cause chemical burns. Drapes must be applied in a manner that maintains the sterile field. Once drapes are placed, they should not be repositioned - moving a drape can draw contamination from non-sterile areas onto the sterile field.",
        criticalValues: [
          { label: "Skin prep drying", value: "Must be FULLY DRY before draping" },
          { label: "Fire risk", value: "Wet alcohol prep + electrosurgery = fire" },
          { label: "Pooling", value: "Prevent pooling - fire risk and chemical burn risk" },
          { label: "Drape repositioning", value: "Do NOT reposition once placed" }
        ]
      },
      {
        heading: "Medication Labeling in the OR",
        content: "ALL medications and solutions on and off the sterile field must be labeled with the medication name and strength/concentration. This applies to every syringe, basin, cup, and container. The only exception is if a medication is immediately administered by the same person who prepared it and there is only one medication being used. In practice, this exception rarely applies in the OR where multiple medications are typically present. Labels must be applied at the time of preparation. Anesthesia work surfaces must be cleaned and disinfected between every patient - this includes the anesthesia machine, monitors, IV poles, and all surfaces the anesthesia team touches during a case.",
        criticalValues: [
          { label: "Labeling rule", value: "ALL meds/solutions labeled with name + strength" },
          { label: "On sterile field", value: "Every syringe, basin, cup labeled" },
          { label: "Off sterile field", value: "Every container labeled" },
          { label: "Anesthesia surfaces", value: "Clean and disinfect between EVERY patient" }
        ]
      }
    ],
    quickReference: [
      { fact: "Sterile field items", detail: "Only sterile items - if in doubt, it's contaminated" },
      { fact: "Sterile team", detail: "Always face the field, never reach over it" },
      { fact: "Head covering", detail: "Must cover ALL hair - bouffant/hood, not skull cap alone" },
      { fact: "Mask", detail: "Over mouth AND nose in restricted areas" },
      { fact: "Jewelry in OR", detail: "Not allowed - earrings must be covered" },
      { fact: "Skin prep", detail: "Must be fully DRY before draping - fire risk" },
      { fact: "Drapes", detail: "Do not reposition once placed" },
      { fact: "Medication labels", detail: "ALL meds on and off field: name + strength" },
      { fact: "Anesthesia", detail: "Clean all surfaces between every patient" },
      { fact: "OR traffic", detail: "Minimize - disrupts air pressure and increases contamination" }
    ]
  },
  {
    levelId: "universal_protocol",
    title: "Surgical Safety & Consent",
    overview: "The Universal Protocol was developed to prevent wrong-site, wrong-procedure, and wrong-patient surgery - catastrophic events that are entirely preventable. This chapter covers the three components of the Universal Protocol (pre-procedure verification, site marking, and Time-Out), informed consent requirements, H&P documentation, and patient identification standards. These are among the most scrutinized areas during Joint Commission surveys.",
    sections: [
      {
        heading: "Universal Protocol & Time-Out",
        content: "The Time-Out is the final verification step before a procedure begins. During a Time-Out: ALL activity in the room STOPS. Every team member actively participates - this is not a passive process. The Time-Out verifies: correct patient identity (using two unique identifiers), correct procedure, correct site/side, correct position, availability of correct implants/equipment, and relevant safety concerns (allergies, antibiotics given, etc.). If ANY team member has a concern, the procedure does not proceed until the concern is resolved. The Time-Out is performed at the location where the procedure will take place, immediately before the start. It cannot be done in advance in a different location.",
        criticalValues: [
          { label: "During Time-Out", value: "ALL activity stops - no exceptions" },
          { label: "Participation", value: "EVERY team member actively participates" },
          { label: "Verifies", value: "Patient, procedure, site, position, implants, safety info" },
          { label: "Concerns", value: "Any concern = procedure stops until resolved" }
        ],
        thinkAboutIt: "During a Time-Out, the circulating nurse notices the consent form says 'right knee' but the site marking is on the left knee. The surgeon says 'I know which knee it is, let's go.' What should happen next?"
      },
      {
        heading: "Surgical Site Marking",
        content: "The operative site must be marked before the patient enters the procedure room. The patient must actively participate in the site marking process whenever possible - this is their opportunity to confirm the correct site. The mark must be made at or near the incision site, must be unambiguous (typically the surgeon's initials), and must remain visible after prepping and draping. Two unique patient identifiers must be used to verify the patient's identity before marking. Site marking is required for procedures involving laterality (left/right), multiple structures (e.g., fingers, toes), or multiple levels (e.g., spine). The mark should be made by the licensed practitioner performing the procedure or a licensed individual to whom they have delegated the task.",
        criticalValues: [
          { label: "Patient role", value: "Must participate in site marking" },
          { label: "Mark visibility", value: "Must remain visible after prep and draping" },
          { label: "Identifiers", value: "Two unique patient identifiers required" },
          { label: "Who marks", value: "Licensed practitioner performing the procedure" }
        ]
      },
      {
        heading: "Informed Consent",
        content: "Informed consent is a legal and ethical requirement ensuring patients understand and agree to their procedure. The consent form must include: the patient's full name, the complete procedure name (using full terminology - NO abbreviations), the specific site/side, the surgeon's name, and the patient's signature. The form must be signed, dated, AND timed. Using abbreviations for the procedure name is never acceptable on a consent form - 'L TKA' is not acceptable; it must read 'Left Total Knee Arthroplasty.' The consent discussion must cover: the procedure, risks, benefits, alternatives, and what to expect. Consent must be obtained before the patient is sedated.",
        criticalValues: [
          { label: "Required elements", value: "Patient name, full procedure name, site/side, surgeon, signature" },
          { label: "Form requirements", value: "Signed, dated, AND timed" },
          { label: "Abbreviations", value: "NO abbreviations for procedure names - spell it out" },
          { label: "Timing", value: "Must be obtained BEFORE sedation" }
        ]
      },
      {
        heading: "H&P and Pre-Operative Requirements",
        content: "A History & Physical (H&P) examination must be completed within 30 days prior to the procedure. If the H&P was performed more than 24 hours before the procedure, an update must be documented within 24 hours of the procedure (or before the procedure begins). The update verifies that the patient's condition has not significantly changed since the original H&P. A pre-anesthesia assessment must also be completed. Pre-operative requirements at this facility include: pre-operative pregnancy testing for applicable patients, medication reconciliation, allergy verification, NPO status verification, and pre-operative nursing assessment.",
        criticalValues: [
          { label: "H&P timing", value: "Within 30 days of procedure" },
          { label: "H&P update", value: "Within 24 hours if H&P is >24 hours old" },
          { label: "Pre-anesthesia", value: "Assessment required before anesthesia" },
          { label: "Pre-op checks", value: "Pregnancy test, med reconciliation, allergies, NPO status" }
        ]
      },
      {
        heading: "Patient Identification & Safety Screening",
        content: "Patient identification using two unique identifiers is required before every interaction involving medications, procedures, treatments, or specimen collection. Acceptable identifiers include: patient's full legal name and date of birth, patient's full legal name and medical record number, or other facility-approved combinations. Room number is NEVER an acceptable identifier. Pain assessment is required for ALL surgical patients pre-operatively under PC.01.02.07 - this is a universal standard, not procedure-specific. For total hip arthroplasty (THA) and total knee arthroplasty (TKA) patients, pre-operative opioid risk screening is additionally required as a CMS quality measure. Pain management goals must be discussed and documented prior to surgery. All patients should have their pain goal documented (the level of pain they consider acceptable for recovery).",
        criticalValues: [
          { label: "Identifiers", value: "Two unique identifiers - NEVER room number" },
          { label: "Examples", value: "Name + DOB, Name + MRN" },
          { label: "Pain assessment", value: "Required pre-op for ALL surgical patients (PC.01.02.07)" },
          { label: "THA/TKA patients", value: "Additional opioid risk screening required (CMS quality measure)" },
          { label: "Pain management", value: "Pain goal documented before surgery" }
        ]
      }
    ],
    quickReference: [
      { fact: "Time-Out", detail: "ALL activity stops, every team member participates" },
      { fact: "Site marking", detail: "Patient participates, mark visible after draping" },
      { fact: "Identifiers", detail: "Two unique identifiers - room number is NEVER acceptable" },
      { fact: "Consent form", detail: "Signed, dated, timed - NO abbreviations for procedure" },
      { fact: "H&P timing", detail: "Within 30 days; update within 24 hours if H&P >24 hrs old" },
      { fact: "Pre-anesthesia", detail: "Assessment required before anesthesia" },
      { fact: "Pain assessment", detail: "Required pre-op for ALL surgical patients - THA/TKA additionally require opioid risk screening" },
      { fact: "Consent timing", detail: "Before sedation" }
    ]
  },
  {
    levelId: "patient_care_docs",
    title: "Patient Care & Documentation",
    overview: "Comprehensive patient care documentation ensures continuity, safety, and regulatory compliance. This chapter covers post-anesthesia care, pain assessment protocols, medication safety, fall risk management, suicide screening, tissue tracking, clinical record requirements, and the January 2026 obstetrical services updates. Proper documentation is both a patient safety tool and a legal record - if it wasn't documented, it didn't happen.",
    sections: [
      {
        heading: "Post-Anesthesia & Post-Op Documentation",
        content: "A post-anesthesia evaluation must be completed within 48 hours of the procedure by an anesthesia provider. JC and CMS do not enumerate a fixed list of required elements, but the evaluation typically addresses: respiratory function, cardiovascular function, mental status, temperature, pain level, nausea/vomiting, and hydration - consistent with ASA post-anesthesia care standards. The post-operative note must be documented by the surgeon and include: the name of the surgeon who performed the procedure, the procedure performed, findings, specimens removed, estimated blood loss (EBL), and the post-operative diagnosis. This note should be completed as soon as reasonably possible after the procedure and must be in the medical record before the patient is discharged.",
        criticalValues: [
          { label: "Post-anesthesia eval", value: "Within 48 hours - by anesthesia provider" },
          { label: "Typical elements", value: "Respiratory, CV, mental status, temp, pain, N/V, hydration" },
          { label: "Post-op note", value: "Surgeon, procedure, findings, specimens, EBL, diagnosis" }
        ]
      },
      {
        heading: "Pain Assessment & Reassessment",
        content: "Pain must be assessed a minimum of 2 times within every 24-hour period for all patients. After interventions, pain must be reassessed at specific intervals: within 1 hour after IV medications, within 2 hours after oral medications, and within 4 hours after non-pharmacological interventions. Level of consciousness must be assessed before AND after administration of any opioid medication. This dual assessment helps detect over-sedation, which is a leading cause of opioid-related respiratory depression. Pain assessment tools must be appropriate for the patient population (numeric scale, FACES scale, behavioral scales for non-verbal patients).",
        criticalValues: [
          { label: "Minimum assessments", value: "2 times per 24 hours" },
          { label: "After IV meds", value: "Reassess within 1 hour" },
          { label: "After oral meds", value: "Reassess within 2 hours" },
          { label: "After non-pharm", value: "Reassess within 4 hours" },
          { label: "Opioid safety", value: "LOC assessed before AND after opioid administration" }
        ],
        thinkAboutIt: "A patient received IV morphine at 2:00 PM. The nurse documents pain reassessment at 4:30 PM. What's wrong with this timing?"
      },
      {
        heading: "Medication Safety",
        content: "Medication reconciliation must occur at admission and at discharge. This means comparing all medications the patient takes at home with what is ordered in the facility, identifying any discrepancies, and resolving them. All medications in the facility must be securely stored - medication carts locked when unattended, automated dispensing cabinets secured, and controlled substances double-locked. PRN (as needed) orders must include an indication - the specific reason the medication would be given. A PRN order without an indication is incomplete and cannot be administered. Look-alike/sound-alike medications must be stored separately and clearly labeled to prevent medication errors.",
        criticalValues: [
          { label: "Med reconciliation", value: "At admission AND discharge" },
          { label: "Medication storage", value: "All meds secured - carts locked, cabinets secured" },
          { label: "PRN orders", value: "Must include indication (reason for use)" },
          { label: "Look-alike/sound-alike", value: "Store separately, label clearly" }
        ]
      },
      {
        heading: "Fall Risk & Suicide Screening",
        content: "Every patient must be assessed for fall risk with appropriate interventions implemented based on the assessment level. Fall risk interventions may include: non-skid footwear, bed in low position, call light within reach, toileting schedule, gait belt use, and high-risk fall precautions signage. Suicide screening is required using validated tools. The Columbia Suicide Severity Rating Scale (C-SSRS) is used for initial screening. If positive, the SAFE-T (Suicide Assessment Five-step Evaluation and Triage) assessment is completed. The 988 Suicide & Crisis Lifeline information must be provided to patients who screen positive. All suicide assessment results must be documented with the care plan.",
        criticalValues: [
          { label: "Fall risk", value: "Assess every patient, implement interventions" },
          { label: "Suicide screening", value: "C-SSRS for initial screen" },
          { label: "Positive screen", value: "SAFE-T assessment completed" },
          { label: "988 Lifeline", value: "Information provided to patients who screen positive" }
        ]
      },
      {
        heading: "Tissue Tracking & Specialty Records",
        content: "Human tissue products (allografts, bone grafts, skin grafts) require rigorous tracking from supplier to patient. All tissue must come from FDA-registered suppliers. Records must be maintained for 10 years and must enable tracing tissue from donor to recipient and recipient back to donor. Tissue storage must have 24/7 temperature monitoring with alarms that alert staff to out-of-range conditions. Intake and Output (I&O) documentation frequency is determined by patient condition and facility policy - JC does not mandate a specific interval, but I&O must be completed as ordered and reflect clinical needs. Restraint use requires: documentation of less restrictive alternatives attempted first, physician order, patient assessment, and monitoring per policy (minimum every 2 hours for behavioral restraints; every 15 minutes for violent/self-destructive). Restraints are always a last resort.",
        criticalValues: [
          { label: "Tissue suppliers", value: "FDA-registered only" },
          { label: "Record retention", value: "10 years" },
          { label: "Temperature monitoring", value: "24/7 with alarms" },
          { label: "I&O documentation", value: "Per patient order and facility policy - frequency is clinically determined" },
          { label: "Restraints", value: "Last resort - document alternatives tried first; monitor ≥ every 2 hours" }
        ]
      },
      {
        heading: "Obstetrical Services - January 2026 Updates (PC.06 / CMS Final Rule)",
        content: "Effective January 1, 2026, the Joint Commission replaced its maternal safety standards (PC.06.01.01 and PC.06.03.01) with new Elements of Performance that align with the CMS final rule on obstetrical services published November 27, 2024. Key Phase 2 requirements: (1) Labor and delivery rooms/suites - including labor rooms, delivery rooms (including operative delivery rooms), and postpartum/recovery rooms whether combined or separate - must be supervised at all times by a qualified experienced registered nurse, certified nurse midwife (CNM), nurse practitioner (NP), physician assistant (PA), or a doctor of medicine or osteopathy. (2) OB policies and standards of practice must be consistent with the needs and resources of the hospital and designed to assure high standards of medical practice, patient care, and safety. (3) Credentials and privileges for those providing obstetric services must be defined, granted, and reviewed per medical staff standards. Phase 3 requirements (effective January 1, 2027) will cover staff training and QAPI program requirements - JC will release Phase 3 details separately.",
        criticalValues: [
          { label: "Effective date", value: "January 1, 2026 (Phase 2 of CMS final rule)" },
          { label: "Replaced standards", value: "PC.06.01.01 and PC.06.03.01 - now CMS-aligned EPs" },
          { label: "L&D supervision", value: "Qualified RN, CNM, NP, PA, or physician AT ALL TIMES" },
          { label: "Phase 3 (Jan 2027)", value: "Staff training & QAPI requirements - details pending" },
          { label: "Driver", value: "CMS final rule Nov. 27, 2024 - first-ever federal maternal health baseline standards" }
        ]
      }
    ],
    quickReference: [
      { fact: "Post-anesthesia eval", detail: "Within 48 hours - by anesthesia provider; covers respiratory, CV, mental status, pain, temp, N/V" },
      { fact: "Post-op note", detail: "Surgeon, procedure, findings, specimens, EBL, diagnosis" },
      { fact: "Pain assessment", detail: "Minimum 2x per 24 hours" },
      { fact: "Pain reassess: IV", detail: "Within 1 hour" },
      { fact: "Pain reassess: oral", detail: "Within 2 hours" },
      { fact: "Pain reassess: non-pharm", detail: "Within 4 hours" },
      { fact: "Opioid LOC check", detail: "Before AND after administration" },
      { fact: "Med reconciliation", detail: "At admission AND discharge" },
      { fact: "PRN orders", detail: "Must include indication" },
      { fact: "Suicide screening", detail: "C-SSRS screen → SAFE-T if positive → 988 info" },
      { fact: "Tissue tracking", detail: "FDA suppliers, 10-year records, 24/7 alarms" },
      { fact: "I&O records", detail: "Per patient order and facility policy - frequency is clinically determined, not JC-mandated" },
      { fact: "OB services (PC.06, Jan 2026)", detail: "L&D must be supervised by qualified RN, CNM, NP, PA, or physician at all times. PC.06.01.01/PC.06.03.01 replaced by CMS-aligned EPs." }
    ]
  },
  {
    levelId: "eoc_safety",
    title: "EOC & Safety Compliance",
    overview: "Environment of Care (EOC) safety encompasses the facility-wide systems and practices that protect patients, staff, and visitors. This chapter covers sharps safety, vendor compliance, patient privacy (HIPAA), EMTALA requirements, fire safety equipment, eyewash station maintenance, and specialized equipment standards. These items are checked during both scheduled EOC rounds and unannounced Joint Commission surveys.",
    sections: [
      {
        heading: "Sharps Safety & Disposal",
        content: "Sharps containers must be securely mounted, maintained below the fill line, and located near the point of use - not across the room. An overfilled sharps container is a needlestick injury waiting to happen. Sharps containers should be replaced when they reach the fill line, not when they're overflowing. Mobile sharps carts (used for phlebotomy rounds or vaccination clinics) must be locked when the healthcare worker steps away - even briefly. This prevents unauthorized access and accidental needlestick injuries. Used sharps must never be recapped (unless using a one-handed recapping technique in specific situations), bent, broken, or removed from disposable syringes before disposal. All sharps go directly into the sharps container immediately after use.",
        criticalValues: [
          { label: "Container location", value: "Near point of use, securely mounted" },
          { label: "Fill level", value: "Replace at fill line - never overfill" },
          { label: "Mobile carts", value: "Must be LOCKED when unattended" },
          { label: "Used sharps", value: "Never recap, bend, or break - dispose immediately" }
        ]
      },
      {
        heading: "Vendor & Staff Compliance",
        content: "Vendor representatives (sales reps, equipment technicians, consultants) who enter clinical areas must wear visible identification badges at all times. Their access should be documented and their presence in clinical areas should be authorized. Any equipment brought in by vendors for trial or demonstration must be inspected, tested, and approved by biomedical engineering before use on patients. This ensures the equipment meets safety standards, is properly calibrated, and is compatible with facility systems. Environmental Services (EVS) closets must be kept locked when unattended. EVS closets contain chemicals that could harm patients if accessed inappropriately, and the room itself must be maintained in a clean, organized condition.",
        criticalValues: [
          { label: "Vendor ID", value: "Visible identification badges required at all times" },
          { label: "Vendor equipment", value: "Must be tested/approved by biomed before patient use" },
          { label: "EVS closets", value: "LOCKED when unattended" }
        ],
        thinkAboutIt: "A vendor arrives with a new surgical power tool for a surgeon to try during a case. They say it's 'FDA approved and ready to go.' What must happen before this equipment can be used on a patient?"
      },
      {
        heading: "Patient Privacy & EMTALA",
        content: "Protected Health Information (PHI) must be secured from public view at all times. Computer screens showing patient information must face away from public areas or use privacy screens. Patient charts, lab results, and any documents containing PHI must not be left visible in public areas. Visual and auditory privacy must be maintained during patient care - curtains drawn, doors closed, voices lowered when discussing patient information. EMTALA (Emergency Medical Treatment and Labor Act) requires that signs informing patients of their right to emergency medical treatment must be posted in the Emergency Department (ED) and Obstetrics (OB) department. These signs must be visible and in the languages commonly spoken by the patient population.",
        criticalValues: [
          { label: "PHI security", value: "Secured from public view at all times" },
          { label: "Computer screens", value: "Face away from public or use privacy screens" },
          { label: "Patient privacy", value: "Visual AND auditory privacy maintained" },
          { label: "EMTALA signs", value: "Posted in ED and OB - visible and multi-language" }
        ]
      },
      {
        heading: "Eyewash, Fire Safety & Emergency Access",
        content: "Eyewash stations must be unobstructed and accessible within 10 seconds of travel from any location where splash hazards exist. They must be tested weekly with documentation. No items should be placed in front of or blocking eyewash stations. Fire safety equipment requires 3-foot clearance: fire extinguishers, fire alarm pull stations, medical gas shut-off panels, and electrical panels. This clearance must be maintained 24/7 - not just during business hours. Electrical panels must also be locked. Staff must know the location of the nearest fire extinguisher, pull station, and exit on their unit. RACE (Rescue, Alarm, Contain, Extinguish) and PASS (Pull, Aim, Squeeze, Sweep) mnemonics should be known by all staff.",
        criticalValues: [
          { label: "Eyewash access", value: "Unobstructed, within 10 seconds of splash hazard" },
          { label: "Eyewash testing", value: "Weekly with documentation" },
          { label: "Fire equipment clearance", value: "3 feet - extinguishers, pulls, gas panels" },
          { label: "Electrical panels", value: "Locked + 3-foot clearance" },
          { label: "Fire mnemonics", value: "RACE and PASS" }
        ]
      },
      {
        heading: "Specialized Equipment & Supplies",
        content: "All clinical supplies must be within their expiration dates. Expired supplies - even if unopened - must be removed from service. This includes medications, sterile supplies, test strips, reagents, and any item with an expiration date. Pill cutters used for splitting medications must be cleaned between patients to prevent cross-contamination of medication residue. Glucose testing supplies must be dated when opened and used within the manufacturer's specified timeframe. Equipment must be in good repair - cracked housings, frayed cords, damaged connectors, and non-functional alarms all constitute compliance findings. Biomedical equipment must have documented preventive maintenance (PM) completed per the organization's schedule under PE.04 (formerly EC.02.04.03). PM stickers are a common method to show compliance at the point of care, but the underlying requirement is that PM activities are performed and documented - not that a sticker is physically present on the device.",
        criticalValues: [
          { label: "Expired supplies", value: "Remove from service - no exceptions" },
          { label: "Pill cutters", value: "Clean between patients" },
          { label: "Glucose supplies", value: "Dated when opened, within manufacturer timeframe" },
          { label: "Equipment condition", value: "Good repair - no cracks, frays, or damage" },
          { label: "Biomed PM", value: "Documented per PE.04 (formerly EC.02.04.03) - stickers are evidence, not the requirement itself" }
        ],
        thinkAboutIt: "During a supply check, you find a box of sterile gloves with an expiration date of last month. The gloves look fine and the box is sealed. Can they still be used?"
      },
      {
        heading: "Point-of-Care / Waived Testing - WT.01.01.01 (March 2026 Update)",
        content: "Waived testing (WT) covers point-of-care laboratory tests performed at or near the patient - blood glucose monitoring, urine dipstick testing, rapid antigen tests, and similar CLIA-waived tests. All waived testing must comply with the manufacturer's instructions for use (IFU). As of March 1, 2026, JC surveys to IFU requirements only - not to IFU recommendations (WT.01.01.01, EP 6). This change aligns with CLIA regulations, which require adherence to mandatory instructions rather than advisory guidance. Prior to this update, surveyors could cite failure to follow any manufacturer guidance including discretionary recommendations. Now, surveyors will only cite non-compliance with mandatory IFU requirements. Important: if your organization's own policies or procedures incorporate IFU recommendations as if they were requirements, JC will hold you to your own policy standard - which may be stricter than the IFU mandate alone.",
        criticalValues: [
          { label: "Standard", value: "WT.01.01.01, EP 6 - effective March 1, 2026" },
          { label: "Applies to", value: "Laboratories and home care organizations" },
          { label: "New rule", value: "JC surveys to IFU requirements ONLY - not recommendations" },
          { label: "Caution", value: "If your policy includes IFU recommendations as requirements, JC holds you to that higher standard" },
          { label: "Unchanged", value: "CLIA certificate required, QC per manufacturer, training documented" }
        ]
      }
    ],
    quickReference: [
      { fact: "Sharps containers", detail: "Below fill line, near point of use, secured" },
      { fact: "Sharps carts", detail: "Locked when unattended" },
      { fact: "Vendor badges", detail: "Visible ID at all times in clinical areas" },
      { fact: "Vendor equipment", detail: "Biomed testing before patient use" },
      { fact: "EVS closets", detail: "Locked when unattended" },
      { fact: "PHI", detail: "Secured from view, screens face away from public" },
      { fact: "EMTALA signs", detail: "ED and OB departments" },
      { fact: "Eyewash", detail: "Unobstructed, weekly testing, within 10 sec of hazard" },
      { fact: "Fire equipment", detail: "3-ft clearance - pulls, extinguishers, gas panels" },
      { fact: "Electrical panels", detail: "Locked + 3-ft clearance" },
      { fact: "Expired supplies", detail: "Remove from service - even if sealed" },
      { fact: "Pill cutters", detail: "Clean between patients" },
      { fact: "Fire response", detail: "RACE (Rescue, Alarm, Contain, Extinguish) + PASS" },
      { fact: "Waived testing (WT.01.01.01)", detail: "IFU requirements only - not recommendations. Effective March 2026." }
    ]
  },

  // ── MEDICATION MANAGEMENT ──────────────────────────────────────────────────
  {
    levelId: "medication_management",
    title: "Medication Management",
    overview: "The Joint Commission's Medication Management chapter requires hospitals to ensure medications are ordered correctly, dispensed safely, stored securely, and administered with verified patient identity. High-alert medications - heparin, insulin, concentrated electrolytes - carry a heightened risk of patient harm and require specific safeguards beyond standard practices. Look-alike/sound-alike drug pairs must be clearly differentiated at every point in the medication use process. Medication reconciliation must occur at every care transition: admission, transfer, and discharge. Surveyors frequently cite abbreviation violations, unlabeled syringes in ORs, and concentrated electrolytes stored on patient care units.",
    sections: [
      {
        heading: "High-Alert Medications and Required Safeguards",
        content: "High-alert medications are drugs that bear a heightened risk of causing significant patient harm when used in error. The Joint Commission requires facilities to identify their high-alert medications and implement specific safeguards. The Institute for Safe Medication Practices (ISMP) publishes a reference list that includes anticoagulants (heparin, warfarin), insulin, concentrated electrolytes (KCl >10 mEq, hypertonic saline), neuromuscular blocking agents, opioids, and chemotherapy agents. Safeguards must include at minimum: separate storage, clear warning labels, double-check verification before administration, and required staff education. A warning label alone does not constitute a sufficient safeguard system - JC expects a documented policy with multiple layers of protection for each high-alert drug.",
        criticalValues: [
          { label: "ISMP high-alert examples", value: "Heparin, insulin, concentrated KCl, NMBAs, opioids, chemotherapy" },
          { label: "Required safeguards", value: "Separate storage, labels, double-check, staff education" },
          { label: "Label alone", value: "Not sufficient - must have documented multi-layer policy" }
        ],
        thinkAboutIt: "A pharmacist proposes adding a red sticker to all high-alert medications as the sole safeguard. A surveyor asks staff to explain the high-alert medication program. What else does the system need to pass?"
      },
      {
        heading: "Concentrated Electrolytes: The Pharmacy-Only Rule",
        content: "The Joint Commission issued a Sentinel Event Alert prohibiting concentrated potassium chloride (KCl) and other concentrated electrolytes from being stored in patient care areas outside the pharmacy. This originated from multiple sentinel events where concentrated KCl was mistakenly administered IV push, causing fatal cardiac arrhythmias. Hypertonic saline solutions greater than 0.9% are also restricted. Facilities must remove these from unit stock and restrict their access to pharmacy, with a documented exception process for ICUs with specific protocols. Finding a vial of concentrated KCl in a medication room on a medical-surgical unit is an immediate citation regardless of whether it is locked.",
        criticalValues: [
          { label: "Restricted items", value: "Concentrated KCl (>10 mEq) and hypertonic saline (>0.9%)" },
          { label: "Storage location", value: "Pharmacy only - not on patient care units" },
          { label: "ICU exception", value: "Allowed only with documented specific protocols" }
        ]
      },
      {
        heading: "Look-Alike/Sound-Alike (LASA) Drug Management",
        content: "Look-alike/sound-alike drugs are medications with names or packaging that appear similar to other drugs, creating dangerous mix-up potential. JC requires facilities to identify LASA pairs in their formulary and implement differentiation strategies. ISMP recommends tall-man (mixed-case) lettering (e.g., DOBUTamine vs DOPamine), physical separation in storage, alerting labels, and electronic warnings in the ordering system. High-risk LASA pairs include heparin/Hespan, HydrOXYzine/hydrALAzine, morphine/HYDROmorphone, and DOBUTamine/DOPamine. Adjacent storage of LASA medications in automated dispensing cabinets - even with pocket labeling - is insufficient differentiation and is a compliance finding.",
        criticalValues: [
          { label: "Key LASA pairs", value: "DOBUTamine/DOPamine, HydrOXYzine/hydrALAzine, morphine/HYDROmorphone" },
          { label: "Required strategies", value: "Physical separation, tall-man lettering, electronic alerts" },
          { label: "ADC alone", value: "Not sufficient - separation and labeling required even in ADCs" }
        ],
        thinkAboutIt: "DOBUTamine and DOPamine are stored in adjacent bins in the automated dispensing cabinet with clear pocket labels. A surveyor flags this as a finding. Why isn't the pocket label enough?"
      },
      {
        heading: "Medication Reconciliation at Every Transition",
        content: "Medication reconciliation is the process of comparing a patient's medication orders at care transitions to the complete list of medications the patient was taking before. JC requires reconciliation at every transition: (1) Admission - compare home medications to admission orders; (2) Transfer between units or levels of care - compare current orders to transfer orders; (3) Discharge - reconcile the discharge medication list against what was ordered during the stay and provide a complete list to the patient. Omissions, duplications, dosing errors, and interactions must be identified and resolved. A home medication that is intentionally discontinued at discharge must have a documented clinical rationale - it cannot simply be omitted.",
        criticalValues: [
          { label: "Required at", value: "Admission, every intra-hospital transfer, and discharge" },
          { label: "What to compare", value: "Complete home medication list vs. new/current orders" },
          { label: "Discontinuations", value: "Must have documented clinical rationale - cannot just omit" }
        ]
      },
      {
        heading: "Do Not Use Abbreviations",
        content: "The Joint Commission's 'Do Not Use' list prohibits specific abbreviations in all medical orders and drug-related documentation because they have been associated with medication errors. The official required list includes: (1) U or u - can be mistaken for 0, 4, or 'cc'; use 'units'. (2) IU - can be mistaken for IV or 10; use 'international units'. (3) QD or QOD - misread as each other; use 'daily' or 'every other day'. (4) Trailing zeros (1.0 mg) - the decimal can be missed, turning 1 mg into 10 mg; write 1 mg. (5) Lack of leading zero (.5 mg) - can be misread as 5 mg; write 0.5 mg. (6) MS, MSO4, MgSO4 - confused with each other; write 'morphine sulfate' or 'magnesium sulfate' fully.",
        criticalValues: [
          { label: "Prohibited", value: "U, IU, QD, QOD, trailing zeros (1.0 mg), missing leading zeros (.5 mg), MS/MSO4/MgSO4" },
          { label: "Write instead", value: "units, international units, daily, every other day, 0.5 mg, 1 mg, morphine sulfate" },
          { label: "Scope", value: "All medical orders and drug-related documentation" }
        ]
      },
      {
        heading: "Medication Labeling at the Point of Preparation",
        content: "The Joint Commission requires that all medications prepared in advance of immediate administration must be labeled. This applies particularly in procedural settings, ORs, and at the bedside when syringes are drawn up. A label must include: medication name, strength/concentration, volume, preparation date/time, and expiration date/time. Any medication or solution that is not labeled must be discarded - it cannot be administered regardless of how certain staff are about its contents. This rule is a top source of OR-related findings because syringes are often pre-drawn without labels during procedures.",
        criticalValues: [
          { label: "Required label elements", value: "Drug name, concentration, volume, date, time, expiration" },
          { label: "Unlabeled medication", value: "Must be discarded immediately - no exceptions" },
          { label: "Common violation site", value: "Operating room sterile field - syringes pre-drawn without labels" }
        ],
        thinkAboutIt: "A scrub tech draws up three syringes on the sterile field and plans to label them after the next step. The surgeon is ready to proceed. What must happen before any syringe is used?"
      },
      {
        heading: "Crash Carts and PRN Medication Documentation",
        content: "Emergency medications must be immediately accessible throughout the hospital. Crash carts must be stocked per an approved formulary, inspected and sealed at regular intervals, checked for expiration dates on all medications, and restocked promptly after use. Expired medications in a crash cart are a direct compliance finding - the cart being sealed does not exempt it from expiration date requirements. PRN (as-needed) medications require post-administration documentation of effectiveness. After giving a PRN medication, nurses must document the patient's response within a timeframe defined by facility policy. Failure to document PRN effectiveness is one of the most commonly missed documentation elements during JC surveys.",
        criticalValues: [
          { label: "Crash carts", value: "Formulary-stocked, inspected, sealed, no expired items - documented" },
          { label: "Expired crash cart meds", value: "Immediate finding - sealed cart is not an exemption" },
          { label: "PRN effectiveness", value: "Must be documented after administration - follow-up charted" }
        ]
      }
    ],
    quickReference: [
      { fact: "High-alert medications", detail: "Separate storage, labels, double-check, education - policy required" },
      { fact: "Concentrated KCl / hypertonic saline", detail: "Pharmacy only - never on patient care units" },
      { fact: "LASA drugs", detail: "Physical separation + tall-man lettering + electronic alerts" },
      { fact: "Medication reconciliation", detail: "Admission, every transfer, and discharge" },
      { fact: "Prohibited abbreviations", detail: "U, IU, QD, QOD, trailing zeros, .5 mg → 0.5 mg, MS" },
      { fact: "Sterile field syringes", detail: "Label at time of preparation - unlabeled = discard" },
      { fact: "Crash cart meds", detail: "No expired drugs - sealed cart not exempt from expiration check" },
      { fact: "PRN documentation", detail: "Effectiveness must be charted after every PRN administration" }
    ]
  },

  // ── NATIONAL PERFORMANCE GOALS (formerly National Patient Safety Goals) ────
  {
    levelId: "npsg",
    title: "National Performance Goals (NPGs)",
    overview: "Effective January 1, 2026, the Joint Commission replaced its National Patient Safety Goals (NPSGs) with National Performance Goals (NPGs) - a core part of the Accreditation 360 overhaul. The NPG chapter organizes requirements that rise above CMS Conditions of Participation into 14 measurable, actionable goals. No new requirements were added; existing standards were reorganized and renamed. The 14 Hospital NPGs are: (1) Correct patient, correct care, correct time; (2) Culture of safety; (3) Emergency management program; (4) Health equity; (5) Infection prevention and control; (6) Pain management and safe prescribing; (7) Safe, informed care / patient rights; (8) Suicide risk reduction; (9) Safe transplant practices; (10) Waived testing; (11) Workplace and patient safety; (12) Staffing adequacy; (13) Safe imaging services; (14) Medication management program. The underlying clinical requirements - two-patient identifiers, hand hygiene, anticoagulant safety, alarm management, suicide screening, fall prevention - are unchanged. Surveyors continue to test staff knowledge on all of these topics.",
    sections: [
      {
        heading: "NPG 1 - Correct Patient, Correct Care, Correct Time (Patient Identification)",
        content: "NPG 1 / formerly NPSG.01.01.01 requires using at least two patient-specific identifiers before administering medications, blood or blood components, collecting specimens, or performing procedures. Acceptable identifiers include: patient name, date of birth, medical record number, and assigned identification number. Unacceptable identifiers include: room number, bed number, and diagnosis. The two identifiers must match both the patient's identification band and the order or label. Both identifiers must be independently verified - asking 'What's your name?' and confirming DOB is the standard. Passive identification (nurse reads the wristband without asking the patient to confirm) is insufficient. A patient without an ID band must have one applied before any clinical task proceeds.",
        criticalValues: [
          { label: "Acceptable identifiers", value: "Name, date of birth, MRN, assigned ID number" },
          { label: "Never acceptable", value: "Room number, bed number, diagnosis" },
          { label: "No ID band", value: "Apply replacement before any medication, specimen, or procedure" }
        ],
        thinkAboutIt: "A nurse is about to administer medication and the patient's ID band has fallen off. The nurse knows this patient from prior shifts. What must happen before the medication is given?"
      },
      {
        heading: "NPG 1 (continued) - Communication & Critical Value Reporting",
        content: "NPG 1 / formerly NPSG.02.03.01 requires that all verbal and telephone orders be verified using a read-back process. The receiver (nurse or pharmacist) writes down the order and reads it back to the prescriber completely before acting. The prescriber must confirm the order is correct. This same read-back applies to critical laboratory values - when a critical lab result is reported verbally, the clinician receiving the result must read back the value to confirm accuracy. Documentation must indicate the read-back was completed. Simply writing the order without reading it back does not satisfy the requirement.",
        criticalValues: [
          { label: "Process", value: "Write it → Read it back completely → Get prescriber confirmation → Act" },
          { label: "Applies to", value: "Verbal orders, telephone orders, AND critical lab value reporting" },
          { label: "Documentation", value: "Must indicate that read-back was performed" }
        ]
      },
      {
        heading: "NPG 14 - Medication Management: Anticoagulant Safety",
        content: "NPG 14 / formerly NPSG.03.05.01 requires hospitals to implement specific practices to reduce anticoagulant-related harm. Anticoagulants are consistently among the top drug classes involved in serious adverse events. Requirements include: weight-based dosing protocols for heparin infusions (deviation from protocol must be physician-documented); baseline and ongoing INR/PTT monitoring; patient and family education on anticoagulant risks at admission and discharge; defined reversal agent availability (protamine for heparin, vitamin K and FFP for warfarin); and pharmacy notification before dispensing. At discharge, warfarin patients must receive education covering drug purpose, INR monitoring schedule, signs of bleeding, and food and drug interactions.",
        criticalValues: [
          { label: "Heparin dosing", value: "Weight-based protocol required - verbal rate without protocol verification is a bypass" },
          { label: "Monitoring", value: "INR/PTT baselines and ongoing monitoring documented" },
          { label: "Discharge education", value: "Drug purpose, monitoring schedule, bleeding signs, food/drug interactions" }
        ]
      },
      {
        heading: "NPG 1 (continued) - Clinical Alarm Safety",
        content: "NPG 1 / formerly NPSG.06.01.01 addresses alarm fatigue - a condition where excessive non-actionable clinical alarms lead staff to silence, disable, or ignore alarms, missing true critical events. JC requires hospitals to establish an alarm management policy, identify the most important alarms requiring clinical staff response, set individualized alarm parameters based on each patient's clinical values rather than relying on universal defaults, and monitor alarm frequency and response. If a patient's baseline heart rate consistently triggers a non-actionable alarm, the threshold should be individualized to that patient's clinical baseline. Default settings applied to every patient create preventable false alarms.",
        criticalValues: [
          { label: "Root problem", value: "Alarm fatigue from excess false alarms → ignored alarms → missed emergencies" },
          { label: "Required action", value: "Individualize alarm parameters to patient's clinical baseline" },
          { label: "Default settings", value: "Not acceptable for all patients - individualization is the standard" }
        ],
        thinkAboutIt: "A COPD patient on 2L O2 has a baseline SpO2 of 90-92%. The pulse ox alarm is set at <88% and fires constantly. Staff silence it repeatedly. What should be changed and what risk does the current approach create?"
      },
      {
        heading: "NPG 5 - Infection Prevention & Hand Hygiene",
        content: "NPG 5 / formerly NPSG.07.01.01 requires hospitals to comply with WHO or CDC hand hygiene guidelines. The five moments for hand hygiene (WHO): (1) Before patient contact, (2) Before aseptic/clean procedures, (3) After body fluid exposure, (4) After patient contact, (5) After contact with patient surroundings. Alcohol-based hand rub (ABHR) is the preferred method for most situations - it kills more pathogens faster than soap and water. Soap and water is specifically required when hands are visibly soiled or after contact with Clostridioides difficile (C. diff). ABHR does not kill C. diff spores - this is a critical distinction tested on surveys.",
        criticalValues: [
          { label: "5 WHO moments", value: "Before patient contact, before procedure, after fluid, after patient, after surroundings" },
          { label: "ABHR preferred", value: "For most situations - faster, kills more pathogens" },
          { label: "Soap and water required", value: "Visibly soiled hands AND C. diff contact - ABHR doesn't kill spores" }
        ]
      },
      {
        heading: "NPG 8 - Suicide Risk Reduction",
        content: "NPG 8 / formerly NPSG.15.01.01 requires that all hospital patients - not just psychiatric patients - be screened for suicide risk using a validated tool such as the Columbia Suicide Severity Rating Scale (C-SSRS) or Ask Suicide-Screening Questions (ASQ). Informal questions like 'Are you feeling safe?' are not validated instruments and do not satisfy this requirement. Patients who screen positive - including passive ideation (wishing they were dead without an active plan) - must receive a formal safety assessment, care planning addressing the identified risk, and environmental safety modifications (removing ligature risks, locking down means access). Medical-surgical patients are among those who die from inpatient suicide.",
        criticalValues: [
          { label: "Who is screened", value: "ALL hospital patients - not just psychiatric admissions" },
          { label: "Validated tools", value: "C-SSRS, ASQ - informal questions don't qualify" },
          { label: "Positive screen requires", value: "Safety assessment + care plan + environmental modifications" }
        ]
      },
      {
        heading: "NPG 1 (continued) - Fall Prevention",
        content: "JC requires a systematic, individualized fall prevention approach. Required elements: (1) a validated fall risk assessment tool (Morse Fall Scale or similar) at admission, each shift, and after any fall; (2) individualized care planning with documented fall prevention interventions tailored to the specific risk factors identified - generic 'standard fall precautions' documentation is insufficient for high-risk patients; (3) patient and family education about fall risk and prevention; (4) post-fall analysis to identify contributing factors and system improvements. Universal fall precautions apply to all patients; high-risk patients require enhanced individualized interventions.",
        criticalValues: [
          { label: "Assessment timing", value: "Admission, each shift, and after every fall" },
          { label: "High-risk documentation", value: "Individualized interventions - 'standard precautions' note is insufficient" },
          { label: "Post-fall", value: "Analysis required to identify contributing factors and improvements" }
        ]
      }
    ],
    quickReference: [
      { fact: "NPG framework (Jan 2026)", detail: "Replaced NPSGs - 14 goals, no new requirements, same clinical standards" },
      { fact: "NPG 1 - Patient ID", detail: "Name + DOB or MRN - never room number. No ID band = apply replacement first." },
      { fact: "NPG 1 - Verbal order read-back", detail: "Write → Read back → Confirm → Document → Act" },
      { fact: "NPG 14 - Anticoagulant protocol", detail: "Weight-based heparin, INR/PTT monitoring, patient education at discharge" },
      { fact: "NPG 1 - Alarm fatigue", detail: "Individualize parameters to patient baseline - no universal defaults" },
      { fact: "NPG 5 - C. diff hand hygiene", detail: "Soap and water required - ABHR does not kill spores" },
      { fact: "NPG 8 - Suicide screening", detail: "All patients, validated tool (C-SSRS/ASQ) - positive = assess + plan + environment" },
      { fact: "NPG 1 - Fall risk", detail: "Assessed every shift; individualized interventions documented for high-risk" }
    ]
  },

  // ── INFECTION PREVENTION & CONTROL ────────────────────────────────────────
  {
    levelId: "infection_control",
    title: "Infection Prevention & Control",
    overview: "The Joint Commission's Infection Control (IC) chapter requires hospitals to maintain a comprehensive infection prevention program that reduces the risk of healthcare-associated infections (HAIs). Every staff member must understand standard precautions - which apply to all patients, always - and transmission-based precautions layered on top for patients with known or suspected infections. CLABSI, CAUTI, SSI, and MRSA/C. diff infections are the primary HAI targets. Surveillance data must drive active improvement, not just be collected and filed. Single-use devices must never be reused, and specific pathogens demand specific hand hygiene methods.",
    sections: [
      {
        heading: "Standard vs. Transmission-Based Precautions",
        content: "Standard precautions apply to ALL patients regardless of known infection status, based on the assumption that any patient may have an unrecognized transmissible infection. They include hand hygiene, appropriate PPE (gloves when touching blood/body fluids, gown for splash risk, mask/eye protection for splash to face), safe injection practices, and proper handling of contaminated equipment. Transmission-based precautions are ADDED ONTO standard precautions for patients with known or suspected infections requiring additional controls. The three types: Contact precautions (MRSA, C. diff, VRE) - gown and gloves upon room entry; Droplet precautions (influenza, pertussis) - surgical mask within 3 feet; Airborne precautions (TB, measles, varicella) - negative pressure room and N95 respirator.",
        criticalValues: [
          { label: "Standard precautions", value: "All patients, always - hand hygiene + PPE based on task risk" },
          { label: "Contact (MRSA/C. diff/VRE)", value: "Gown + gloves on room entry - applies to staff AND visitors" },
          { label: "Airborne (TB/measles/varicella)", value: "Negative pressure room + N95 respirator - surgical mask is insufficient" }
        ],
        thinkAboutIt: "A visitor enters a MRSA contact precaution room with gloves only, saying 'I'm just dropping off food.' What PPE is missing and does the contact precaution rule apply to visitors?"
      },
      {
        heading: "CLABSI Prevention: Insertion and Maintenance Bundles",
        content: "Central Line-Associated Bloodstream Infection (CLABSI) prevention requires both an insertion bundle and a maintenance bundle. Insertion bundle: (1) Hand hygiene before insertion, (2) Maximal barrier precautions (mask, cap, gown, sterile gloves, large sterile drape), (3) Chlorhexidine gluconate (CHG) skin antisepsis, (4) Optimal catheter site selection (subclavian preferred, femoral avoided in adults), (5) Daily review of line necessity. Maintenance bundle: sterile dressing changes per protocol, CHG-impregnated dressing at the insertion site, 'scrub the hub' before every access, and daily assessment of continued necessity. Extended dwell time is the primary modifiable CLABSI risk factor - every unnecessary day of catheterization increases risk.",
        criticalValues: [
          { label: "Insertion bundle", value: "Hand hygiene, maximal barrier, CHG skin prep, optimal site, daily necessity" },
          { label: "Maintenance", value: "Sterile dressing, CHG sponge, scrub the hub, daily necessity review" },
          { label: "Primary risk factor", value: "Duration - remove as soon as clinically unnecessary" }
        ]
      },
      {
        heading: "CAUTI Prevention: Necessity Is the Standard",
        content: "Catheter-Associated Urinary Tract Infection (CAUTI) prevention is centered on two principles: insert only when necessary and remove as soon as possible. JC requires documented clinical indication for every urinary catheter, daily assessment of catheter necessity, and removal when the indication no longer exists. Spontaneous voiding indicates the urinary retention indication has resolved - the catheter must be removed. Key elements: aseptic insertion technique, closed drainage system (never break without a clinical reason), bag kept below bladder level at all times, and perineal hygiene. The most effective CAUTI prevention measure is removing unnecessary catheters - each additional day of catheterization increases CAUTI risk measurably.",
        criticalValues: [
          { label: "Required for insertion", value: "Documented clinical indication - not convenience or routine monitoring" },
          { label: "Daily", value: "Assess necessity - remove when indication resolves" },
          { label: "Drainage bag", value: "Always below bladder level - closed system, never broken unnecessarily" }
        ]
      },
      {
        heading: "Surgical Site Infection Prevention",
        content: "JC requires hospitals to implement evidence-based SSI prevention practices. Key elements: (1) Pre-operative antibiotic prophylaxis within 1 hour before incision - 2 hours for vancomycin and fluoroquinolones; antibiotic selection is procedure-specific; (2) Hair removal using electric clippers only - razors create micro-abrasions that increase SSI risk; (3) Maintaining normothermia during surgery - hypothermia impairs immune function; (4) Blood glucose control - hyperglycemia impairs wound healing; (5) CHG-based pre-operative skin antisepsis; (6) Appropriate sterile technique throughout. Administering antibiotics more than 1 hour before incision allows drug levels to fall below effective tissue concentrations before the wound is opened.",
        criticalValues: [
          { label: "Antibiotic timing", value: "Within 1 hour before incision (2 hours for vanco/fluoroquinolones)" },
          { label: "Hair removal", value: "Electric clippers only - razors cause micro-abrasions that increase SSI risk" },
          { label: "Normothermia", value: "Required during surgery - hypothermia impairs immune response" }
        ]
      },
      {
        heading: "Single-Use Devices and Multi-Dose Vial Rules",
        content: "Single-use devices (SUDs) are labeled by the manufacturer for one-time use with one patient. JC and the FDA prohibit reuse of single-use devices unless the facility uses an FDA-cleared third-party reprocessing program. Commonly misused SUDs: lancets (blood glucose testing), syringes, needles, single-dose vials, catheter supplies, and biopsy needles. Multi-dose vials are the exception - they may be used for multiple patients if handled correctly: one needle per access, dated when opened, stored per label, and discarded within 28 days of opening or per manufacturer's beyond-use date. Single-dose vials must never be used for more than one patient. Outbreaks of hepatitis B have been traced to lancet sharing and shared blood glucose monitoring devices.",
        criticalValues: [
          { label: "Single-use devices", value: "One patient, one time - reuse without FDA reprocessing program is prohibited" },
          { label: "Multi-dose vials", value: "Date on opening, one needle per access, discard within 28 days" },
          { label: "Blood glucose lancets", value: "Single-use only - sharing = direct bloodborne pathogen transmission risk" }
        ],
        thinkAboutIt: "A phlebotomist runs out of lancets and uses the same one on two patients, wiping with alcohol between uses. Why is this a serious safety finding even if both patients appear healthy?"
      },
      {
        heading: "HAI Surveillance and Improvement Requirements",
        content: "JC requires hospitals to have an infection prevention and control program that conducts surveillance for HAIs, analyzes data to identify trends, benchmarks rates against national data (NHSN), reports findings to leadership and the governing body, implements evidence-based interventions when rates exceed benchmarks, and measures the effectiveness of interventions. Surveillance data alone is insufficient - it must drive improvement. When a unit's CAUTI or MRSA rate rises above national benchmarks, the required response includes root cause analysis, evidence-based interventions, defined improvement goals, and ongoing monitoring. Reviewing the data without action does not satisfy IC chapter requirements.",
        criticalValues: [
          { label: "Surveillance targets", value: "CLABSI, CAUTI, SSI, C. diff, MRSA, ventilator-associated events" },
          { label: "Benchmark source", value: "NHSN (National Healthcare Safety Network)" },
          { label: "Elevated rates require", value: "Root cause analysis + interventions + measurement - not just continued monitoring" }
        ]
      }
    ],
    quickReference: [
      { fact: "Standard precautions", detail: "All patients, always - hand hygiene + PPE per task" },
      { fact: "Contact precautions", detail: "Gown + gloves - staff AND visitors, MRSA / VRE / C. diff" },
      { fact: "Airborne precautions", detail: "TB, measles, varicella - negative pressure room + N95 (not surgical mask)" },
      { fact: "C. diff hand hygiene", detail: "Soap and water - ABHR does not kill C. diff spores" },
      { fact: "CLABSI insertion bundle", detail: "Hand hygiene, maximal barrier, CHG skin prep, optimal site, daily necessity" },
      { fact: "CAUTI prevention", detail: "Document indication, daily necessity review, remove when resolved" },
      { fact: "SSI antibiotic timing", detail: "Within 1 hour of incision (2 hours for vanco/fluoroquinolones)" },
      { fact: "Hair removal", detail: "Electric clippers only - no razors" },
      { fact: "Single-use devices", detail: "One patient, one time - lancets, syringes, single-dose vials never shared" },
      { fact: "Multi-dose vials", detail: "Date on opening, one needle/access, discard within 28 days" }
    ]
  },

  // ── PATIENT RIGHTS & RESPONSIBILITIES ─────────────────────────────────────
  {
    levelId: "patient_rights",
    title: "Patient Rights & Responsibilities",
    overview: "The Joint Commission's Rights and Responsibilities of the Individual (RI) chapter ensures that patients are treated with dignity and respect, receive complete information about their care, and can make informed decisions. Every patient has the right to informed consent, privacy, access to their medical records, a formal grievance process, and freedom from unnecessary restraint. Advance directives must be honored and documented in the active chart. Staff must protect patients from abuse, neglect, and exploitation, with mandatory reporting obligations when abuse is suspected. Surveyors test these rights directly - asking patients, reviewing records, and observing consent and communication practices.",
    sections: [
      {
        heading: "Informed Consent: Requirements and Who Can Obtain It",
        content: "Informed consent is the process by which a patient voluntarily agrees to a proposed treatment after receiving complete information about it. For consent to be valid: (1) the patient must have decision-making capacity; (2) they must receive adequate information - diagnosis, proposed treatment, purpose, risks, benefits, alternatives, and consequences of no treatment; (3) they must have the opportunity to ask questions; (4) consent must be voluntary, without coercion. Only a licensed practitioner who has the training to explain the procedure and answer clinical questions may obtain informed consent. Nurses, medical assistants, and clerical staff may witness the signature but cannot perform the consent discussion. Informed consent obtained after the patient has received sedating pre-medication is presumptively invalid.",
        criticalValues: [
          { label: "Who obtains it", value: "Licensed practitioner only - not nurses, MAs, or clerical staff as the consenting provider" },
          { label: "Required information", value: "Diagnosis, procedure, purpose, risks, benefits, alternatives, consequences of refusal" },
          { label: "After sedation", value: "Consent is invalid - must be obtained before sedating medications are given" }
        ],
        thinkAboutIt: "A patient received 4 mg IV lorazepam for anxiety 20 minutes ago. The surgeon asks a nurse to have the patient sign the consent form now. What should the nurse do and why?"
      },
      {
        heading: "Advance Directives: Asking, Documenting, and Honoring",
        content: "Advance directives are legal documents in which patients express their healthcare preferences if they lose decision-making capacity. Types include living wills, healthcare power of attorney/healthcare proxy, and DNR/DNAR orders. Hospitals must: (1) Ask every patient on admission whether they have an advance directive; (2) Document the response - whether yes or no; (3) Request a copy and place it in the active, readily accessible section of the medical record - not the history section; (4) Not refuse to care for a patient based on whether they have a directive; (5) Honor the directive when the patient lacks capacity. An advance directive in the history section of the chart may not be seen in an emergency, and has been the cause of patients being resuscitated against their documented wishes.",
        criticalValues: [
          { label: "Ask every patient at admission", value: "And document the response - 'no' must also be documented" },
          { label: "Placement", value: "Active section of the chart - not the history section" },
          { label: "Cannot refuse care", value: "Based on presence or absence of advance directive" }
        ]
      },
      {
        heading: "Restraints: Order Requirements and Monitoring",
        content: "The Joint Commission and CMS have strict requirements for restraint use. Every restraint requires a physician order specifying type, clinical justification, and duration limit. Before applying a restraint, the least restrictive alternatives must be documented as tried. Monitoring requirements: behavioral restraints - every 2 hours for circulation, sensation, skin integrity, repositioning, and toileting needs; violent/self-destructive restraints - every 15 minutes. Orders expire and patients cannot remain restrained on an expired order under any circumstances - the restraint must be removed immediately when the order expires if no renewal has been obtained. Threatening restraints as a behavioral deterrent without a clinical indication and physician order is a patient rights violation.",
        criticalValues: [
          { label: "Order must specify", value: "Type, clinical justification, time limit" },
          { label: "Monitoring", value: "Q2h behavioral restraints / Q15min violent - circulation, skin, positioning, toileting" },
          { label: "Expired order", value: "Remove restraint immediately - no verbal extensions, no nursing extensions" }
        ]
      },
      {
        heading: "Patient Grievance Process",
        content: "JC requires hospitals to have a defined process for receiving, investigating, and responding to patient grievances. A grievance differs from a complaint: a complaint is resolved at the point of care immediately and does not require the formal process; a grievance is an unresolved complaint or any written complaint. Key requirements: (1) Patients must be informed of their right to file a grievance and the process on admission; (2) All grievances must be acknowledged in writing and investigated; (3) Written response within 7 days (CMS requirement) including: the hospital contact name, steps taken to investigate, results, and date of completion; (4) Grievance data tracked and used for performance improvement. Failing to provide a written response within the required timeframe is a documented compliance failure.",
        criticalValues: [
          { label: "Grievance vs. complaint", value: "Unresolved complaint or any WRITTEN complaint = grievance requiring formal process" },
          { label: "Written response timeframe", value: "7 days (CMS) - must include investigation steps, results, date" },
          { label: "At admission", value: "Patients must be proactively informed of their right to file a grievance" }
        ]
      },
      {
        heading: "Language Access and Communication Rights",
        content: "Patients with limited English proficiency have the right to receive healthcare information in a language they understand. JC requires professional interpreter services for all clinical communication - not family members as interpreters for clinical or consent discussions. Professional interpreter services may be in-person, video, or telephone. A patient may choose to use a family member only after professional services have been offered and declined. For consent discussions, professional interpreters are required because family members may filter information or have conflicts of interest. A non-English-speaking patient who signs a consent form written entirely in English - with no interpreter present - has not given valid informed consent.",
        criticalValues: [
          { label: "Professional interpreters", value: "Required for clinical discussions, consent, and discharge education" },
          { label: "Family as interpreter", value: "Only if patient explicitly requests after professional services are offered" },
          { label: "English-only consent", value: "Invalid for non-English-speaking patient without interpreter" }
        ]
      },
      {
        heading: "Right to Refuse Treatment and Privacy Protections",
        content: "Competent adult patients have an absolute right to refuse any treatment, including life-sustaining treatment such as CPR, mechanical ventilation, or artificial nutrition - even when refusal may result in death. Staff obligations: inform the patient of consequences in understandable terms, document the refusal and the information provided, notify the physician, and honor the decision. Privacy and confidentiality: patient health information - including medication lists, diagnosis, and condition - cannot be shared with anyone, including family members, without the patient's explicit authorization. Medical discussions must not occur in public areas where they can be overheard. Patients must receive a Notice of Privacy Practices on admission.",
        criticalValues: [
          { label: "Right to refuse", value: "Absolute for competent adults - including life-sustaining care" },
          { label: "Required documentation", value: "Refusal, consequences explained, patient understanding demonstrated, physician notified" },
          { label: "PHI sharing", value: "Cannot share with family - even medication list - without patient authorization" }
        ],
        thinkAboutIt: "A competent patient with religious objections refuses a blood transfusion the care team considers essential. The team believes they know what's best for the patient. What are the required steps?"
      }
    ],
    quickReference: [
      { fact: "Informed consent", detail: "Licensed practitioner only - after sedation = invalid" },
      { fact: "Required consent elements", detail: "Diagnosis, procedure, risks, benefits, alternatives, consequences" },
      { fact: "Advance directives", detail: "Ask every patient at admission, document response, place in active chart" },
      { fact: "Restraint order", detail: "Type, justification, time limit - physician must order" },
      { fact: "Restraint monitoring", detail: "Q2h behavioral / Q15min violent" },
      { fact: "Expired restraint order", detail: "Remove immediately - no extensions" },
      { fact: "Grievance response", detail: "Written, within 7 days, include investigation results" },
      { fact: "Professional interpreters", detail: "Required for clinical discussions - family only if patient requests after offer" },
      { fact: "Right to refuse", detail: "Absolute for competent adults - document refusal, honor decision" },
      { fact: "PHI", detail: "Cannot share with family without patient authorization" }
    ]
  },

  // ── LIFE SAFETY ────────────────────────────────────────────────────────────
  {
    levelId: "life_safety",
    title: "Life Safety / Physical Environment (PE)",
    overview: "Effective January 1, 2026, the Joint Commission merged its Environment of Care (EC) and Life Safety (LS) chapters into a single new chapter called Physical Environment (PE), as part of the Accreditation 360 overhaul. The 464 EPs across EC and LS were consolidated into 63 EPs in the new PE chapter - a 86% reduction in EP count. Standard codes changed: old LS.02.01.xx and EC.02.03.xx references now live under PE.03.xx. No substantive requirements were removed; the consolidation eliminated duplication and better aligned JC standards with CMS Conditions of Participation. Core requirements remain: hospitals must maintain a physical environment that protects patients and staff from fire, smoke, and structural hazards per NFPA 101. Every staff member must know and be able to demonstrate the RACE fire response protocol and PASS fire extinguisher technique - surveyors ask staff directly. Fire doors must remain closed, egress routes must be kept clear, and fire drills must occur quarterly on every shift including nights. When construction or renovation compromises any fire safety system, Interim Life Safety Measures (ILSM) must be implemented immediately.",
    sections: [
      {
        heading: "RACE: The Four-Step Fire Response Protocol",
        content: "RACE is the universal hospital fire response framework required by JC. Every staff member must know and be able to demonstrate all four steps: R - Rescue: Move any person in immediate danger to safety - this is the first priority. A - Alarm: Activate the nearest fire alarm pull station AND call the internal emergency number immediately. C - Contain/Confine: Close all doors between the fire and other areas to prevent smoke and fire spread - do not lock doors. E - Extinguish or Evacuate: Attempt to extinguish only if the fire is very small, contained, there is a clear egress path, and you are trained; otherwise evacuate. Horizontal evacuation (moving patients through fire doors to the next fire compartment on the same floor) is the first approach. Vertical evacuation via stairs is used only when horizontal is not possible.",
        criticalValues: [
          { label: "R - Rescue", value: "Remove anyone in immediate danger - first priority" },
          { label: "A - Alarm", value: "Pull station + internal emergency number - do not delay alarm to rescue" },
          { label: "C - Contain", value: "Close all doors - do not lock them" },
          { label: "E - Extinguish/Evacuate", value: "Horizontal first, vertical only if necessary; attempt extinguishment only if small fire + clear exit + trained" }
        ],
        thinkAboutIt: "A fire breaks out in a supply room. A patient is in the adjacent room. The nurse sees the fire is small but growing. Walk through each RACE step and explain the decisions the nurse faces at each stage."
      },
      {
        heading: "PASS: How to Use a Fire Extinguisher",
        content: "PASS is the four-step fire extinguisher operation method all healthcare staff must know. P - Pull: Pull the safety pin from the handle (breaks the tamper seal). A - Aim: Aim the nozzle at the BASE of the fire - not at the flames. Addressing the base removes the fuel source; aiming at the flames is ineffective. S - Squeeze: Squeeze the handle to release the extinguishing agent. S - Sweep: Sweep side to side at the base of the fire until extinguished or the extinguisher is empty. Attempt extinguishment only when: the fire is very small (wastebasket size), there is a clear exit behind you, and you are trained. If in doubt, evacuate. Most hospital fires should be managed through evacuation and door closure, not extinguisher use.",
        criticalValues: [
          { label: "Aim target", value: "BASE of the fire - not the flames" },
          { label: "When to attempt", value: "Small fire + clear exit behind you + trained - otherwise evacuate" },
          { label: "Sweep motion", value: "Side to side at the base until out or extinguisher empty" }
        ]
      },
      {
        heading: "Fire Drill Requirements",
        content: "JC requires hospitals to conduct fire drills at least quarterly on each shift - this means at least four drills per shift per year (EC.02.03.03, EP 3 for ambulatory; PE.03.01.01, EP 3 for hospitals). All drills must be: unannounced; held at unexpected times; conducted under varying conditions; inclusive of all shifts (day, evening, night, and weekend - night shift cannot be omitted because patient census is lower); documented with date, time, shift, location, participating staff, and a performance critique; followed by corrective action when deficiencies are identified. Conducting drills only on day and evening shifts is a compliance deficiency. Drills can be structured to minimize patient disruption while still testing staff response knowledge - the alarm does not always need to be audibly activated throughout the facility. March 2026 update: JC removed two formerly required drill-timing restrictions - the rule that drills must be spaced at least one hour apart within the same quarter, and the rule that each quarterly drill must fall within plus or minus ten days of the last. These scheduling constraints no longer apply. The core requirements - unannounced, unexpected times, varying conditions, quarterly per shift - remain in force.",
        criticalValues: [
          { label: "Frequency", value: "Quarterly on EACH shift - 4+ per shift per year" },
          { label: "All shifts required", value: "Night, weekend - cannot be omitted for any reason" },
          { label: "Must be", value: "Unannounced + unexpected times + varying conditions (all three)" },
          { label: "Removed (March 2026)", value: "1-hour spacing rule and ±10-day window rule - no longer required" },
          { label: "Still required", value: "Documented, post-drill critique, corrective action for deficiencies" }
        ]
      },
      {
        heading: "Fire Compartmentalization and Fire Door Rules",
        content: "Hospitals are built in fire compartments - sections separated by fire-rated walls and doors that contain fire and smoke to prevent spread throughout the building. This compartmentalization is the primary life safety design for hospitals where full patient evacuation is difficult. Fire doors must: remain closed at all times or be held open only by an approved automatic closing device that releases when the fire alarm activates (magnetically-held doors on alarm release are compliant); never be propped open with doorstops, furniture, equipment, or wedges; have functioning latches that allow them to close and latch completely. Propping a fire door open with an unapproved object is a frequently cited JC finding under PE.03.01.01 (formerly LS.02.01.10) because it defeats the compartmentalization design - it applies to stairwell doors, corridor fire doors, and all other fire-rated doors.",
        criticalValues: [
          { label: "Fire doors", value: "Must remain closed - or use approved auto-close/hold-open devices only" },
          { label: "Never prop", value: "No doorstops, furniture, wedges - unapproved propping is a JC citation" },
          { label: "Approved hold-open", value: "Magnetic devices that release on alarm activation are compliant" }
        ],
        thinkAboutIt: "An EVS staff member props a stairwell fire door open with a rubber wedge while cleaning the corridor to make it easier to move carts back and forth. What is the compliance finding and what should they do instead?"
      },
      {
        heading: "Egress Routes and Interim Life Safety Measures",
        content: "Egress routes are the designated exit paths from any area - corridors leading to exits, stairwells, and exit doors. JC and NFPA 101 require egress routes to be: unobstructed at all times (no stored items narrowing the required clear width); clearly marked with illuminated exit signs visible from any corridor point; and free of locking mechanisms that could prevent exit. Corridor storage is one of the most-cited JC findings. Wheelchairs, gurneys, and IV poles staged in corridors are compliant as long as minimum clear width is maintained. When a Life Safety Code deficiency exists - during construction, sprinkler repair, or a compromised fire door - hospitals must immediately implement Interim Life Safety Measures (ILSMs): temporary fire watches, additional drills, extra extinguishers, and compartmentalization barriers.",
        criticalValues: [
          { label: "Egress", value: "Always unobstructed, illuminated exit signs, no locks preventing exit" },
          { label: "Corridor staging", value: "Compliant if minimum clear width maintained - stored items are a citation" },
          { label: "ILSMs", value: "Required immediately when any life safety system is impaired - fire watch, extra drills, extinguishers" }
        ]
      },
      {
        heading: "Medical Gas Safety and Electrical Safety",
        content: "All medical gas zone shutoff valves must be labeled with the areas they control, and staff in patient care areas must know the location of their zone valves and how to operate them. Medical gas cylinders must be stored secured (chained or in a rack) - never free-standing. Empty cylinders must be segregated from full cylinders and labeled. Oxygen is an oxidizing gas that significantly increases combustion risk and must never be stored with flammable materials. Electrical: extension cords are prohibited from permanent use in healthcare facilities - only temporary use is allowed. Hospital-grade, UL-listed power strips with surge protection may be used; standard household strips are prohibited. Daisy-chaining power strips is always prohibited.",
        criticalValues: [
          { label: "Gas valves", value: "Labeled by zone - staff must know location and operation" },
          { label: "Cylinders", value: "Secured (chained or racked) - never free-standing; empty and full segregated" },
          { label: "Extension cords", value: "Temporary only - never permanent. Hospital-grade power strips only. No daisy-chaining" }
        ]
      }
    ],
    quickReference: [
      { fact: "RACE order", detail: "Rescue → Alarm → Contain (close doors) → Extinguish or Evacuate" },
      { fact: "PASS aim point", detail: "Base of the fire - not the flames" },
      { fact: "Fire drills", detail: "Quarterly per shift - unannounced, unexpected times, varying conditions, all shifts. March 2026: 1-hour spacing and ±10-day window rules removed." },
      { fact: "Fire doors", detail: "Closed or on approved auto-release hold-open. Propping = citation under PE.03.01.01 (formerly LS.02.01.10)" },
      { fact: "Horizontal evacuation", detail: "First approach - through fire doors to next compartment, same floor" },
      { fact: "Vertical evacuation", detail: "Stairs only when horizontal is not possible" },
      { fact: "Egress routes", detail: "Always clear, illuminated signs, no locks - stored items are a citation" },
      { fact: "ILSMs", detail: "Implement immediately when any fire safety system is impaired" },
      { fact: "Gas cylinders", detail: "Secured (chained), full/empty segregated, labeled" },
      { fact: "Extension cords", detail: "Temporary only - hospital-grade power strips, no daisy-chaining" }
    ]
  },
  {
    levelId: "emergency_management",
    title: "Emergency Management",
    overview: "Emergency Management is one of the most commonly cited Joint Commission chapters - especially for multi-site health systems like Surgery Partners. Every hospital must maintain a written Emergency Operations Plan (EOP) built on a facility-specific Hazard Vulnerability Analysis, address six critical functional areas, practice the plan through two documented exercises per year, and continuously improve it through structured after-action reviews. Surveyors will ask frontline staff directly about their emergency role - not knowing is a finding.",
    sections: [
      {
        heading: "Emergency Operations Plan - EM.01.01.01",
        content: "The Emergency Operations Plan is the facility's comprehensive, written response framework for managing emergencies - both internal (fire, utility failure, workplace violence) and external (mass casualty event, community disaster, pandemic). The EOP must be facility-specific, not a generic template. It must describe how leadership activates the plan, what triggers escalation, and how the facility transitions from normal operations to emergency mode. Typically, the CEO or a defined designee declares the emergency and activates the EOP. Once activated, every department operates under the plan's structure. Joint Commission surveyors will review the EOP for completeness, relevance to local conditions, and evidence that it has been tested and improved over time.",
        criticalValues: [
          { label: "Standard", value: "EM.01.01.01" },
          { label: "Who activates", value: "CEO or designated leadership chain as defined in the EOP" },
          { label: "Must cover", value: "Both internal emergencies (fire, utility) and external disasters (MCI, community events)" },
          { label: "Critical failure", value: "Generic template not tailored to the facility's actual hazard profile" }
        ],
        thinkAboutIt: "A surveyor hands a copy of your facility's EOP to a frontline nurse and asks her to find the section that describes her specific role during a mass casualty event. What should she be able to find, and what would a gap look like?"
      },
      {
        heading: "Hazard Vulnerability Analysis - EM.02.01.01",
        content: "The Hazard Vulnerability Analysis is an annual structured risk assessment that identifies which natural, technological, and human-caused hazards pose the greatest threat to a specific facility. Each hazard is scored on probability of occurrence, potential impact on people, property, and operations. The resulting risk profile determines what the EOP must address - a facility near a chemical plant needs chemical spill response; a coastal hospital needs hurricane protocols. The HVA must be updated at least annually because local risk conditions change: new industry, infrastructure shifts, climate patterns. A single-state or regional template that is not customized to the facility is a significant citation. The HVA is typically led by the Safety Officer or Emergency Management Coordinator with input from leadership, Facilities, and clinical departments.",
        criticalValues: [
          { label: "Standard", value: "EM.02.01.01" },
          { label: "Update frequency", value: "At least annually" },
          { label: "Hazard categories", value: "Natural (weather, seismic), technological (utility, hazmat), human-caused (MCI, violence)" },
          { label: "Common citation", value: "HVA is generic or not facility-specific - lists hazards irrelevant to the local area" }
        ],
        thinkAboutIt: "Your hospital's HVA rates 'earthquake' as a top-tier threat, but your facility is located in central Illinois. A surveyor asks how this rating was determined. What does this scenario tell you about how the HVA was created?"
      },
      {
        heading: "The Six Critical Areas of the EOP - EM.02.02.01",
        content: "Standard EM.02.02.01 requires the EOP to address six specific functional areas: (1) Communications - how internal and external communication will be maintained when primary systems fail, including backup technologies and communication trees; (2) Resources and assets - how the facility will obtain, track, and manage supplies, equipment, and staffing during a prolonged emergency; (3) Safety and security - how the facility will secure itself, manage access control, and protect patients and staff; (4) Staff responsibilities - what every role does during an emergency, including alternate assignments when normal supervisors are unavailable; (5) Utilities management - how the facility will maintain critical utilities or implement clinical workarounds during utility failure; (6) Patient clinical and support activities - how the facility will continue care, handle patient surge, manage evacuations, and coordinate with receiving facilities. All six must be documented in the EOP. Missing or underdeveloped sections in any of the six areas are findings.",
        criticalValues: [
          { label: "Standard", value: "EM.02.02.01" },
          { label: "Area 1", value: "Communications - backup systems when phones/internet fail" },
          { label: "Area 2", value: "Resources and assets - supply, equipment, and staff sourcing" },
          { label: "Area 3", value: "Safety and security - facility lockdown, access control" },
          { label: "Area 4", value: "Staff responsibilities - every role has defined duties including backup chains" },
          { label: "Area 5", value: "Utilities management - generator, medical gas, water, HVAC contingencies" },
          { label: "Area 6", value: "Patient clinical activities - surge capacity, care continuation, evacuation" }
        ]
      },
      {
        heading: "Drills and Exercises - EM.03.01.01",
        content: "Testing the EOP through exercises is required - having a plan that has never been practiced is insufficient. Standard EM.03.01.01 requires hospitals to conduct a minimum of two emergency exercises per year. At least one must be a community-based exercise involving external agencies such as EMS, fire departments, public health offices, or neighboring hospitals. The second may be an internal drill - tabletop (discussion-based), functional, or full-scale. All exercises must be documented with: the date and type of exercise, a participant list, a written critique or evaluation of what worked and what failed, and corrective actions identified for follow-up. Drills conducted without documentation or critique do not satisfy the standard. Multi-site health systems must ensure each facility meets the requirement independently.",
        criticalValues: [
          { label: "Standard", value: "EM.03.01.01" },
          { label: "Minimum frequency", value: "2 exercises per year" },
          { label: "Community requirement", value: "At least 1 must involve external agencies (EMS, fire, public health, neighboring hospitals)" },
          { label: "Required documentation", value: "Date, type, participants, critique/evaluation, corrective actions" },
          { label: "Common citation", value: "Drill conducted but no critique form or corrective actions documented" }
        ],
        thinkAboutIt: "Your facility conducted its two required exercises but the compliance officer can only find attendance logs - no critique forms, no corrective action list. A surveyor asks to review the exercise records. What is the finding, and what would compliant documentation look like?"
      },
      {
        heading: "After-Action Reviews - EM.04.01.01",
        content: "Every emergency exercise and every actual emergency event must be followed by a structured after-action review (AAR). The AAR is a formal debrief that examines: what was supposed to happen (per the EOP), what actually happened, why any gaps occurred, and what specific improvements are needed. Standard EM.04.01.01 requires the AAR to be documented and corrective actions to be tracked through to completion. Identifying a problem in the AAR and never fixing it is as much a compliance failure as not having the AAR at all - the improvement loop must close. Effective AARs involve participants from all levels: frontline staff who were in the drill, charge nurses, department directors, and leadership. Frontline participants often have the most operationally relevant observations.",
        criticalValues: [
          { label: "Standard", value: "EM.04.01.01" },
          { label: "Triggers", value: "Required after every exercise AND after every actual emergency event" },
          { label: "Required elements", value: "What happened, gaps identified, corrective actions assigned with owners and due dates" },
          { label: "Tracking requirement", value: "Corrective actions must be followed to verified completion - not just identified" },
          { label: "Who participates", value: "Cross-functional - frontline staff, charge nurses, department leads, leadership" }
        ]
      },
      {
        heading: "Shelter-in-Place vs. Evacuation, and Surge Capacity",
        content: "Two concepts frontline staff must understand and be able to act on: protective action decisions and patient surge. For protective actions, shelter-in-place means keeping everyone inside the facility - typically used for external hazmat, chemical releases, or severe weather where leaving creates greater risk. Evacuation means moving patients and staff out - used when the building is the hazard (fire, structural failure, internal chemical event). Leadership makes this call based on incident command input; frontline staff execute for their unit. For patient surge, hospitals must have a plan to expand care capacity beyond normal licensed beds - accelerating discharges, converting conference rooms, canceling electives, and requesting mutual aid from neighboring facilities. The EOP must address both protective actions and surge response in the patient clinical activities critical area.",
        criticalValues: [
          { label: "Shelter-in-place", value: "Stay inside - external threat (hazmat, weather). Shut HVAC to prevent outside air ingress." },
          { label: "Evacuation", value: "Move out - internal threat (fire, structural). Follow staged evacuation routes." },
          { label: "Who decides", value: "Incident command / leadership - not frontline staff" },
          { label: "Surge capacity", value: "Discharge stable patients, cancel electives, open alternate care spaces, request mutual aid" }
        ],
        thinkAboutIt: "A nurse asks: 'If we get a shelter-in-place order during a hazmat event outside, do I still send my patient to their scheduled procedure?' What does the EOP's staff responsibilities section need to answer about this kind of operational question?"
      }
    ],
    quickReference: [
      { fact: "EOP standard", detail: "EM.01.01.01 - must be written, facility-specific, and tested" },
      { fact: "HVA frequency", detail: "Updated at least annually - must reflect local hazard conditions" },
      { fact: "Six critical areas", detail: "Communications, Resources/Assets, Safety/Security, Staff Responsibilities, Utilities, Patient Clinical Activities" },
      { fact: "Drill requirement", detail: "Minimum 2 per year - at least 1 community-based (involves external agencies)" },
      { fact: "Drill documentation", detail: "Date, participants, critique, and corrective actions - all required" },
      { fact: "After-action review", detail: "Required after every drill AND every actual emergency event" },
      { fact: "AAR follow-up", detail: "Corrective actions must be tracked to verified completion" },
      { fact: "Shelter-in-place", detail: "External threat - stay inside, shut HVAC" },
      { fact: "Evacuation", detail: "Internal threat - move out, follow staged routes" },
      { fact: "Common citation", detail: "Staff cannot describe their emergency role when asked by a surveyor" }
    ]
  },
  {
    levelId: "patient_safety_systems",
    title: "Patient Safety Systems",
    overview: "The Patient Safety Systems (PSS) chapter is the backbone of Joint Commission's Accreditation 360 framework. It requires hospitals to build a genuine culture of safety - not just policies, but a functioning system where staff can report concerns without fear, leadership actively responds, adverse events are analyzed rigorously, and risks are identified before harm occurs. PSS governs Just Culture, sentinel event review, Comprehensive Systemic Analysis (CSA), proactive FMEA risk assessments, safety event classification, and the annual safety program evaluation.",
    sections: [
      {
        heading: "Just Culture - The Three Behavior Types",
        content: "Just Culture distinguishes between three types of behavior that produce adverse events, each requiring a different organizational response. (1) Human error - a slip, lapse, or mistake that any reasonable person could make under the same conditions. The response is to console the individual and fix the system - not punish. (2) At-risk behavior - a behavioral choice that increases risk, often because the person does not recognize the risk or believes it is justified (e.g., skipping a step because 'we always do it that way'). The response is to coach and create incentives for safer behavior. (3) Reckless behavior - consciously disregarding a substantial and unjustifiable risk; the person knew the risk and chose to proceed. The response is remediation or disciplinary action. Under Just Culture, the same event may involve all three behavior types from different people - the analysis must classify each person's contribution separately. A facility that punishes all adverse events equally suppresses reporting. A facility that excuses all events equally enables reckless behavior.",
        criticalValues: [
          { label: "Human error", value: "Unintentional - console and fix the system" },
          { label: "At-risk behavior", value: "Drift from safe practice - coach and incentivize" },
          { label: "Reckless behavior", value: "Conscious disregard of known risk - remediate/discipline" },
          { label: "Key principle", value: "Same event, different behaviors - each classified separately" }
        ],
        thinkAboutIt: "A nurse skips the time-out because 'the surgeon is always in a rush and nothing ever happens.' Which Just Culture category is this, and what is the appropriate organizational response?"
      },
      {
        heading: "Safety Event Classification",
        content: "JC and the Patient Safety Movement use a three-tier safety event classification system. (1) Near miss (also called 'close call' or 'good catch') - an event that did not reach the patient at all. Example: a nurse catches a wrong-patient medication before it leaves the pharmacy. These are high-value learning events and must be encouraged and reported. (2) Precursor safety event - an event that reached the patient but caused no harm, or minor temporary harm. Example: a patient received the wrong dose of a non-critical medication, no adverse effect occurred. (3) Serious safety event - an event that reached the patient and caused significant harm, including sentinel events. JC's sentinel event definition: an unexpected occurrence involving death, permanent harm, or severe temporary harm. Near misses are actually the most valuable for learning - they reveal system vulnerabilities without the cost of patient harm. Organizations that only investigate serious events miss the vast majority of their learning opportunities.",
        criticalValues: [
          { label: "Near miss", value: "Did not reach patient - highest value learning opportunity" },
          { label: "Precursor safety event", value: "Reached patient, no or minor harm" },
          { label: "Serious safety event", value: "Reached patient, significant harm" },
          { label: "Sentinel event", value: "Unexpected death, permanent harm, or severe temporary harm" }
        ]
      },
      {
        heading: "Sentinel Events - Definition, Reporting, and Required Review",
        content: "A sentinel event is an unexpected occurrence involving death, permanent harm, or severe temporary harm. JC maintains a list of reviewable sentinel event types - including wrong-site surgery, suicide in a 24-hour care setting, infant abduction, and transfusion-related death. When a sentinel event occurs: (1) The organization must notify JC within 72 hours of discovery. (2) A Comprehensive Systemic Analysis (CSA - formerly called RCA2) must be completed within 45 calendar days of the event or JC notification, whichever comes first. (3) An action plan with measurable improvement strategies must be submitted to JC. (4) Implementation of the action plan and verified improvement must be demonstrated. Failure to perform a timely CSA is itself a JC compliance finding. The 45-day clock is firm.",
        criticalValues: [
          { label: "JC notification", value: "Within 72 hours of discovery" },
          { label: "CSA deadline", value: "45 calendar days from event or JC notification" },
          { label: "Required output", value: "Completed CSA + action plan with measurable strategies" },
          { label: "Follow-up", value: "Implementation and verified improvement required" }
        ],
        thinkAboutIt: "A patient dies by suicide on a 24-hour psychiatric unit on a Tuesday. When is the JC notification due, and when is the CSA due?"
      },
      {
        heading: "Comprehensive Systemic Analysis (CSA) - Formerly RCA2",
        content: "Accreditation 360 renamed the traditional Root Cause Analysis process to Comprehensive Systemic Analysis (CSA) to emphasize its systemic rather than individual focus. A valid CSA must: (1) Be conducted by a multidisciplinary team that includes frontline staff closest to the event - not just leadership and quality staff. (2) Identify root causes that, if resolved, would prevent recurrence - not just contributing factors. (3) Develop an action plan with specific, measurable interventions that address the identified root causes. (4) Assign accountability for each action item with a completion timeline. (5) Monitor implementation and verify that the interventions achieved the intended improvement. Common CSA failures: identifying 'staff education' as the sole corrective action (education alone rarely prevents recurrence of systemic failures); completing the CSA paperwork without implementing the actions; and blaming individuals rather than examining system design.",
        criticalValues: [
          { label: "Team", value: "Multidisciplinary - must include frontline staff involved in the event" },
          { label: "Focus", value: "System design failures - not individual blame" },
          { label: "Action plan", value: "Specific, measurable, accountable, time-bound interventions" },
          { label: "Verification", value: "Implementation AND confirmed improvement - not just completion" },
          { label: "Common failure", value: "'Staff will be re-educated' is not an acceptable sole corrective action" }
        ]
      },
      {
        heading: "Proactive Risk Reduction - FMEA",
        content: "Failure Mode and Effects Analysis (FMEA) is a proactive, structured method for identifying where a high-risk process could fail before an adverse event occurs. JC requires at least one FMEA per year for a high-priority process identified through the organization's risk assessment. The FMEA process: (1) Select a high-risk process (e.g., look-alike/sound-alike medication dispensing, patient handoffs in the ICU). (2) Map the process step by step. (3) Identify all the ways each step could fail (failure modes). (4) Assess the severity and probability of each failure. (5) Redesign the process to eliminate or reduce the highest-priority failures. (6) Implement and measure the redesign. FMEA is the 'before the event' counterpart to the CSA's 'after the event' analysis. Organizations that only react to adverse events - never proactively examining high-risk processes - are not meeting the PSS standard.",
        criticalValues: [
          { label: "Frequency", value: "At least 1 FMEA per year" },
          { label: "Selection criteria", value: "High-priority process - identified through risk assessment" },
          { label: "Process", value: "Map → Identify failure modes → Assess → Redesign → Implement → Measure" },
          { label: "Distinction", value: "FMEA = proactive (before harm). CSA = reactive (after harm)." }
        ]
      },
      {
        heading: "Culture of Safety - Leadership Commitment and Measurement",
        content: "The PSS chapter places explicit responsibility on hospital leadership for creating and sustaining a culture of safety. This is not a nursing or quality department function - it requires CEO and board-level visibility and accountability. Key requirements: (1) Leadership must receive and act on safety culture data - not just acknowledge it exists. (2) Safety culture must be measured with a validated survey tool (AHRQ's Survey on Patient Safety Culture [SOPS] is most commonly used) at least every 24 months. (3) Survey results must be shared with staff and drive improvement actions. (4) Leaders must demonstrate visible commitment - safety walk rounds, personal involvement in CSA reviews, and modeling of safety behavior. (5) Staff must feel safe reporting concerns without fear of retaliation (psychological safety). A non-punitive reporting environment is foundational - organizations where staff fear punishment suppress the near-miss reports that would prevent sentinel events.",
        criticalValues: [
          { label: "Survey frequency", value: "At least every 24 months (2 years)" },
          { label: "Recommended tool", value: "AHRQ SOPS (Survey on Patient Safety Culture)" },
          { label: "Leadership role", value: "Visible, active - not delegated to quality department" },
          { label: "Psychological safety", value: "Staff must feel safe to report without fear of retaliation" },
          { label: "Non-punitive reporting", value: "Required - event reporting must be encouraged, not penalized" }
        ]
      },
      {
        heading: "High Reliability Organization (HRO) Principles",
        content: "High Reliability Organizations are those that operate in high-hazard environments with consistently low error rates. Healthcare has adopted the HRO framework as a safety culture foundation. Five HRO principles: (1) Preoccupation with failure - treat near misses and small deviations as signals of potential catastrophic failure; always assume something could go wrong. (2) Reluctance to simplify - resist simple explanations for complex events; dig into system factors, don't stop at 'human error.' (3) Sensitivity to operations - frontline staff are the most important source of real-time situational awareness; leadership must stay connected to what is actually happening at the bedside. (4) Commitment to resilience - build the capacity to detect, contain, and recover from errors before they cause harm. (5) Deference to expertise - in a crisis, decision authority should go to the person with the most relevant knowledge, not the highest rank. JC uses HRO principles as a framework in its Leadership chapter (LD) and PSS chapter.",
        criticalValues: [
          { label: "Preoccupation with failure", value: "Near misses are warnings - treat them seriously" },
          { label: "Reluctance to simplify", value: "Don't accept 'human error' as the final answer" },
          { label: "Sensitivity to operations", value: "Stay connected to frontline reality" },
          { label: "Commitment to resilience", value: "Detect, contain, recover before harm escalates" },
          { label: "Deference to expertise", value: "Crisis authority follows knowledge, not rank" }
        ]
      },
      {
        heading: "Annual PSS Program Evaluation and Patient Safety Officer",
        content: "JC requires hospitals to conduct an annual evaluation of the patient safety program - reviewing whether the PSS systems (reporting, analysis, improvement, culture measurement) are functioning effectively and achieving improvement. The evaluation must be presented to hospital leadership and the governing body. Most accredited hospitals designate a Patient Safety Officer (PSO) - a qualified individual responsible for coordinating the patient safety program, tracking safety events, overseeing CSA and FMEA processes, managing the safety culture survey, and reporting to leadership. The PSO role is distinct from the quality/performance improvement function, though they often overlap. The governing board must also receive safety performance data regularly - board-level accountability for patient safety is a JC Leadership chapter requirement that intersects directly with PSS.",
        criticalValues: [
          { label: "Annual evaluation", value: "PSS program must be formally evaluated each year" },
          { label: "Presented to", value: "Leadership AND the governing body (board)" },
          { label: "Patient Safety Officer", value: "Designated coordinator of the safety program" },
          { label: "Board accountability", value: "Governing body must receive regular safety performance data" }
        ]
      }
    ],
    quickReference: [
      { fact: "Just Culture: human error", detail: "Unintentional slip - console, fix the system" },
      { fact: "Just Culture: at-risk behavior", detail: "Drift from safe practice - coach, create incentives" },
      { fact: "Just Culture: reckless behavior", detail: "Conscious disregard of risk - remediate/discipline" },
      { fact: "Near miss", detail: "Did not reach patient - encourage reporting, high-value learning" },
      { fact: "Precursor safety event", detail: "Reached patient, no or minor harm" },
      { fact: "Serious safety event / Sentinel event", detail: "Death, permanent harm, or severe temporary harm" },
      { fact: "Sentinel event - JC notification", detail: "Within 72 hours of discovery" },
      { fact: "CSA (formerly RCA2) deadline", detail: "45 calendar days from event or JC notification" },
      { fact: "CSA team", detail: "Multidisciplinary - must include frontline staff" },
      { fact: "FMEA frequency", detail: "At least 1 per year - high-priority process" },
      { fact: "Safety culture survey", detail: "At least every 24 months - AHRQ SOPS recommended" },
      { fact: "Leadership role", detail: "Visible, active safety commitment - not delegated to quality dept" },
      { fact: "HRO: 5 principles", detail: "Preoccupation with failure, Reluctance to simplify, Sensitivity to operations, Commitment to resilience, Deference to expertise" },
      { fact: "Annual PSS evaluation", detail: "Presented to leadership and governing body each year" },
      { fact: "Common citation", detail: "'Staff re-education' as sole CSA corrective action - not acceptable" }
    ]
  }
];
