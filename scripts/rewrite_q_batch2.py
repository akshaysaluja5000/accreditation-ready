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

# ─── INSTRUMENTS (i1-i20) ────────────────────────────────────────────────────
new_instruments = '''    questions: [
      {
        id: "i1",
        question: "You open a peel pack and the hemostat inside is locked closed. The indicator changed. What is the problem?",
        options: [
          "Nothing. A changed indicator confirms sterilant reached the instrument, which is the key requirement.",
          "The indicator type. A changed indicator on a closed instrument confirms sterilization did not reach the hinge.",
          "The seal. A locked instrument compresses the seal seam during storage and may have created micro-breaks.",
          "The instrument position. Hinged instruments must be open inside peel packs so sterilant can reach all surfaces."
        ],
        correctIndex: 3,
        explanation: "Instruments in peel packs must be in the open/unhinged position. Locked jaws block sterilant from the hinge and box lock areas. A changed indicator does not compensate for wrong positioning.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i2",
        question: "A stainless steel instrument has light gray toning and feels smooth. Should you remove it from service?",
        options: [
          "Yes. Any discoloration requires documentation and removal pending metallurgical testing.",
          "No. Light gray toning on a smooth surface is normal patina, not rust or etching.",
          "Yes. Gray discoloration suggests chemical residue from improper rinsing that may compromise sterilization.",
          "Yes. Any discoloration indicates the protective finish has degraded and the surface can no longer be sterilized."
        ],
        correctIndex: 1,
        explanation: "Light gray toning with a smooth surface is normal stainless steel patina. The concerns are orange or brown staining (rust), rough or frosted areas (etching), and pitting. Smooth gray toning alone is not a defect.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i3",
        question: "What does surface etching on an instrument look like, and what causes it?",
        options: [
          "Orange or brown staining caused by moisture exposure during storage.",
          "Rough, dull, or frosted patches caused by incompatible cleaning chemicals or wrong concentrations.",
          "Smooth, thinned areas from repeated high-temperature autoclave cycles.",
          "White or chalky buildup from hard water mineral deposits during rinsing."
        ],
        correctIndex: 1,
        explanation: "Surface etching appears as rough, dull, or frosted areas on the instrument surface. It is caused by incompatible cleaning chemicals, wrong dilutions, or prolonged chemical exposure. Etched surfaces harbor bacteria in microscopic irregularities.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i4",
        question: "An instrument with the single-use symbol is in a peel pack ready for the next case. What do you do?",
        options: [
          "Remove it immediately. You cannot reprocess a single-use instrument in-house regardless of what is on file.",
          "Flag it for review. You can use it today but it must be evaluated before the next processing cycle.",
          "Use it. A changed indicator and intact seal confirm it was processed correctly.",
          "Use it. The single-use symbol only applies to soft goods, not rigid metal instruments."
        ],
        correctIndex: 0,
        explanation: "Single-use instruments, identified by the single-use symbol or 'Do Not Reprocess' language, cannot be reprocessed in-house. Only FDA-registered third-party reprocessors may legally reprocess single-use devices.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i5",
        question: "You verify a peel pack: intact seal, changed indicator, instrument open, no tears or moisture, complete label. Is it ready?",
        options: [
          "Yes. You have confirmed all six required integrity criteria before opening.",
          "No. You must also confirm the biological indicator for that sterilizer load was negative before using any pack from the load.",
          "No. The pack must also show the technician's initials who assembled and loaded the instrument.",
          "No. Peel packs also need an external chemical indicator strip on the outside of the package."
        ],
        correctIndex: 1,
        explanation: "All six integrity criteria are met, and this pack is ready for use. The pack label (sterilizer, load number, date) confirms traceability, and your point-of-use inspection confirms packaging integrity.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i6",
        question: "You find brown discoloration only in the box lock area of a hemostat. The rest looks clean. What should you do?",
        options: [
          "Return it to service. Box lock discoloration is expected friction wear from repeated use.",
          "Return it to service. Localized hinge discoloration from heat exposure is not a sterility concern.",
          "Remove it. Brown discoloration in the box lock likely indicates trapped bioburden or early corrosion.",
          "Return it to service as long as the instrument opens and closes smoothly."
        ],
        correctIndex: 2,
        explanation: "Brown discoloration in the box lock is a red flag for trapped bioburden or corrosion. Bioburden in hinges prevents proper sterilization. The instrument needs thorough inspection and cleaning.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i7",
        question: "A scissor feels dull when you test it, but there is no rust, pitting, or damage. Can it stay in service?",
        options: [
          "No. Dull cutting edges are a functional defect requiring removal for sharpening or replacement.",
          "Yes. Dullness is normal wear and does not affect the instrument's sterility or safety.",
          "Yes. The surgeon can sharpen the scissor on a sterile stone at the point of use.",
          "Yes. As long as it passes a tissue test before the case, it may remain in service."
        ],
        correctIndex: 1,
        explanation: "Dull cutting edges are a functional defect. Instruments with dull edges must be removed for professional sharpening or replacement. Using a dull scissor risks patient harm and is a compliance finding.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i8",
        question: "A single-use device needs reprocessing. Can your facility's SPD reprocess it in-house to save time?",
        options: [
          "Yes. Your facility may reprocess single-use devices in-house if you follow the manufacturer's IFU exactly.",
          "Only FDA-registered third-party reprocessors may legally reprocess single-use devices.",
          "Yes. Single-use devices that are non-critical or semi-critical may be reprocessed in-house.",
          "Yes. Your validated sterilization program allows reprocessing single-use devices up to three times."
        ],
        correctIndex: 1,
        explanation: "Your facility cannot reprocess single-use devices in-house unless it is itself registered with the FDA as a reprocessor. In practice, only FDA-registered third-party reprocessors may do this legally.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i9",
        question: "You store peel packs 2 high on smooth-edged wire shelving. Is this compliant?",
        options: [
          "Yes. Stacking 2 high on smooth-edged shelving is within accepted practice, though on-edge storage is preferred by AORN.",
          "No. Peel packs must be stored on solid shelving only; wire shelving risks puncturing the packaging material.",
          "No. Peel packs must always be stored individually in separate bins to prevent cross-contamination.",
          "No. Any stacking compresses the seal and is not recommended for peel packs."
        ],
        correctIndex: 0,
        explanation: "Stacking 2 high on smooth-edged shelving is within accepted practice. AORN recommends storing peel packs on edge when possible to avoid seal compression over time. Wire shelving with smooth edges is appropriate.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i10",
        question: "A surveyor asks what tool must be at every instrument inspection workstation. What do you answer?",
        options: [
          "A UV inspection light for detecting residual bioburden invisible under standard lighting.",
          "Lighted magnification — illuminated magnification equipment, not a separate lamp and handheld magnifier.",
          "An endoscope camera for viewing instrument lumens.",
          "A standard magnifying glass held under bright lighting."
        ],
        correctIndex: 1,
        explanation: "Lighted magnification must be available at assembly and inspection workstations. This means integrated illuminated magnification, not a separate desk lamp plus a handheld magnifier. Its absence is itself a finding.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i11",
        question: "An instrument has visible pitting but passes your function test. Can it remain in service?",
        options: [
          "No. Pitting creates cavities where bacteria can hide. The instrument cannot be reliably sterilized and must be removed.",
          "Yes. You may keep it if pitted area is polished smooth by your SPD team before the next cycle.",
          "Yes. Minor pitting is expected wear and does not affect sterilization as long as function is confirmed.",
          "Yes. Pitting on the outer surface does not affect sterilization because steam contacts interior surfaces during autoclaving."
        ],
        correctIndex: 0,
        explanation: "Pitting creates microscopic cavities that harbor bacteria and cannot be reached by sterilization. Functional performance does not equal sterility. Pitted instruments must be removed from service.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i12",
        question: "Chemical indicator tape on a sealed sterile package is frayed. The seal underneath appears intact. Is this a concern?",
        options: [
          "No. The indicator is only for visual confirmation of sterilant exposure and does not affect seal integrity.",
          "No. Frayed tape is common after normal handling and does not indicate package compromise.",
          "Yes. Frayed tape suggests rough handling and the package should be inspected carefully or reprocessed.",
          "No. If the indicator tape changed color and the underlying seal looks intact, the package is acceptable."
        ],
        correctIndex: 2,
        explanation: "Frayed indicator tape suggests the package may have been handled roughly. Inspect the package thoroughly, and consider reprocessing if any doubt exists about seal integrity.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i13",
        question: "A hemostat's joints are stiff during assembly inspection. What is the most likely cause?",
        options: [
          "Dried-on bioburden in the box lock area or inadequate instrument lubrication during reprocessing.",
          "The instrument was stored in the closed position, causing the hinge mechanism to set over time.",
          "Excessive autoclave temperatures caused metal expansion in the hinge joint.",
          "Normal wear from repeated sterilization cycles — a routine maintenance issue."
        ],
        correctIndex: 0,
        explanation: "Stiff joints are most commonly caused by dried bioburden accumulating in the box lock or by inadequate lubrication during reprocessing. This points to a cleaning or maintenance problem that must be addressed.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "i14",
        question: "You inspect a Kerrison rongeur: it closes normally but has a small pitted area on the inner jaw. What do you do?",
        options: [
          "Polish the pitted area smooth and return it to service before the next sterilization cycle.",
          "Remove it from service. Pitting creates crevices that harbor bacteria and cannot be reliably sterilized.",
          "Return it to service. Pitting on the inner jaw does not affect sterilization of the outer surfaces.",
          "Return it to service. Minor pitting on an otherwise functional instrument is within normal wear tolerance."
        ],
        correctIndex: 1,
        explanation: "Pitting creates microscopic surface irregularities where bacteria can hide even after sterilization. Unlike smooth patina, pitting compromises the instrument's sterility. Remove it regardless of functionality.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i15",
        question: "Three instruments from peel packs: A has a changed indicator and is open; B has a changed indicator but is closed; C has no indicator change and is open. Which can you use?",
        options: [
          "None. When any instrument in a lot fails, treat all instruments from that sterilizer load as compromised.",
          "A and B. Both have changed indicators, which is the primary verification of sterilant exposure.",
          "Only A. Only A meets both requirements: changed indicator AND open position.",
          "A and C. Both are in the required open position, ensuring sterilant reached all surfaces."
        ],
        correctIndex: 2,
        explanation: "Only Instrument A meets both criteria: the chemical indicator changed (sterilant exposure confirmed) AND the instrument is in the open position (all surfaces exposed). B fails on position; C fails on indicator. Both must be reprocessed.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i16",
        question: "A scrub tech opens a peel pack and the hemostat hinge feels sticky. No visible rust or damage. What do you do?",
        options: [
          "Work the hinge back and forth a few times. Stiffness after prolonged peel pack storage is normal and resolves quickly.",
          "Apply sterile lubricant at the point of use and proceed. Stiff joints are a lubrication issue, not sterility.",
          "Use it today and document the stiff joint for enhanced ultrasonic cleaning at the next reprocessing cycle.",
          "Remove it from service. A sticky hinge suggests residual bioburden in the box lock from incomplete decontamination."
        ],
        correctIndex: 3,
        explanation: "A sticky joint on a sterilized instrument suggests residual bioburden trapped in the box lock, meaning decontamination was incomplete. Remove it and return it to SPD. Do not lubricate at the point of use.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i17",
        question: "Instruments arrive from a German vendor without FDA clearance markings. The vendor says EU CE marking is equivalent. Can you use them on patients?",
        options: [
          "Yes. German instruments are exempt from FDA requirements under international trade agreements.",
          "Yes. EU CE marking is recognized as equivalent to FDA 510(k) clearance for surgical instruments.",
          "No. All instruments used on US patients must have FDA clearance regardless of country of manufacture.",
          "Only after your value analysis committee reviews and approves the vendor and instrument specifications."
        ],
        correctIndex: 2,
        explanation: "FDA clearance is required for all instruments used on patients in the United States regardless of country of origin. EU CE marking does not substitute for FDA regulatory clearance.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i18",
        question: "During assembly you find a flat, smooth circular water spot on a scalpel handle. Should you remove it from service?",
        options: [
          "Yes. Any mark or discoloration indicates a compromised surface that cannot be reliably sterilized.",
          "No. A flat, smooth water spot is a mineral deposit from rinse water and is not a defect when the surface is intact.",
          "Yes. Water spots indicate the rinse cycle was inadequate, leaving detergent residue on the instrument.",
          "Yes. Circular marks suggest localized corrosion beginning beneath the surface."
        ],
        correctIndex: 1,
        explanation: "Water spots are flat, smooth mineral deposits from rinse water — cosmetic, not structural. Unlike rust (orange/brown, rough), etching (frosted texture), or pitting (cavities), water spots do not compromise the instrument surface.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "i19",
        question: "A properly sealed peel pack with a changed indicator is stored paper side down on the shelf. Is this a concern?",
        options: [
          "No. Storage orientation is a facility preference and has no effect on sterility or seal integrity.",
          "No. The seal and changed indicator are intact — orientation does not change the compliance status.",
          "Yes. Peel packs should be stored paper side up so you can inspect the instrument and indicator without handling the pack.",
          "No. Paper side down actually protects the peel side from accidental punctures on the shelf surface."
        ],
        correctIndex: 2,
        explanation: "Peel packs should be stored paper side up so you can visually inspect the instrument and chemical indicator without picking up and manipulating the package, which reduces risk of inadvertent seal compromise.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "i20",
        question: "A tray from SPD contains single-use instruments marked for reuse alongside reusable instruments. What is the most serious concern?",
        options: [
          "The mixed load. Combining single-use and reusable instruments in one sterilization load compromises cycle validation.",
          "The in-house reprocessing of single-use instruments. Your facility cannot do this without FDA registration as a reprocessor.",
          "The sterilization parameters. Single-use instruments require different cycle settings than reusable instruments.",
          "The chemical residue risk. Reprocessing single-use items may release toxins not present in their original manufactured state."
        ],
        correctIndex: 1,
        explanation: "The most serious issue is in-house reprocessing of single-use instruments. Unless your facility is FDA-registered as a reprocessor, this is both a regulatory violation and a patient safety risk. The manufacturer's safety data applies only to the first use.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "i1", '\n    ],\n  },\n  {\n    id: "facilities"', new_instruments)

# ─── FACILITIES (f1-f20) ─────────────────────────────────────────────────────
new_facilities = '''    questions: [
      {
        id: "f1",
        question: "Your blanket warmer reads 128°F with only blankets inside and a current log. Is this compliant?",
        options: [
          "No. Your blanket warmer must display both current and maximum recorded temperatures for the shift.",
          "No. Your facility needs hourly blanket warmer logs, not just a single current reading.",
          "Yes. Temperature is within range, contents are blankets only, and your log is current.",
          "No. Your blanket warmer must stay below 120°F to prevent patient burn risk."
        ],
        correctIndex: 2,
        explanation: "This is compliant. Blanket warmers must not exceed 130°F (128°F is within range), only blankets are permitted (no fluids), and your temperature logs are maintained.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f2",
        question: "IV fluids are stored inside your blanket warmer at 125°F. Staff says it is for convenience. Is this acceptable?",
        options: [
          "No. You must never store fluids or solutions in a blanket warmer regardless of temperature.",
          "Yes. As long as the fluids are dated and your log is current, co-storage with blankets is permitted.",
          "Yes. 125°F is below the 130°F limit, so fluids are safe at this temperature.",
          "Yes. You may store fluids temporarily in a blanket warmer for up to 4 hours if the temperature stays below 130°F."
        ],
        correctIndex: 0,
        explanation: "You must never store fluids or solutions in a blanket warmer. Fluids belong in designated fluid warmers at ≤110°F. Temperature compliance does not change this rule.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f3",
        question: "Your fluid warmer reads 108°F. Fluids inside are dated and unexpired. Your temperature log is current. Compliant?",
        options: [
          "Yes. All fluid warmer requirements are met.",
          "No. Your fluid warmer needs continuous electronic monitoring, not manual logs.",
          "No. Fluid warmers must not exceed 100°F to protect IV solutions.",
          "No. You must rotate fluids every 24 hours in a fluid warmer regardless of their expiration date."
        ],
        correctIndex: 0,
        explanation: "This is compliant. Your fluid warmer is at 108°F (≤110°F), fluids are dated when placed and not expired, and your temperature logs are maintained.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f4",
        question: "Your supply room has 10 full and 4 partially full O2 cylinders stored together. What are the compliance issues?",
        options: [
          "Both. Your total of 14 exceeds the 12-cylinder limit AND full cylinders must be segregated from partially full ones.",
          "None. The 12-cylinder limit only applies to flammable gas, not medical oxygen.",
          "Only the total. Your 14 cylinders exceed the maximum; segregation is recommended but not required.",
          "Only the mixing. You must segregate full from partially full, but your total of 14 is within the 15-cylinder limit."
        ],
        correctIndex: 0,
        explanation: "Two violations: (1) your total of 14 cylinders exceeds the 12-cylinder maximum for non-hazardous rooms, and (2) you must segregate full cylinders from empty or partially full ones.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f5",
        question: "Your code cart is on a red outlet with current checks and laryngoscope blades in a separate compartment. Compliant?",
        options: [
          "No. Your code cart must be on a dedicated code cart outlet, not a standard red emergency outlet.",
          "No. Your laryngoscope blades must be stored completely separately from the crash cart in a dedicated airway kit.",
          "No. Your laryngoscope blades must be individually sealed in sterile packaging within the cart compartment.",
          "Yes. All code cart requirements are met: red outlet, current checks, and blades stored separately."
        ],
        correctIndex: 3,
        explanation: "Your code cart meets all requirements. It is on a red (emergency) outlet, checks are current, and laryngoscope blades are stored separately within the cart.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f6",
        question: "Equipment is stored 2 feet in front of an unlocked electrical panel. How many compliance issues are present?",
        options: [
          "One. The panel must be locked, but 2 feet of clearance meets the standard for non-emergency panels.",
          "Two. You need 3 feet of clearance AND panels must be locked.",
          "None. Two feet meets the minimum clearance and panels only need locking in patient care areas.",
          "One. Your clearance is insufficient. NFPA 70 requires 3 feet of working clearance in front of electrical panels."
        ],
        correctIndex: 3,
        explanation: "The clearance violation is definitive: NFPA 70 Article 110.26 requires at least 3 feet of working clearance in front of electrical panels. At 2 feet, this is a clear deficiency. Locking requirements vary by local code and state.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f7",
        question: "An emergency call light pull cord hangs 8 inches from the floor. Is this compliant?",
        options: [
          "No. Your call cords must touch the floor to ensure patients in any position can reach them.",
          "No. Your standard requires cords within 12 inches of the floor, so 8 inches actually exceeds the requirement.",
          "No. Your call cords must hang to within 6 inches of the floor. At 8 inches, a fallen patient may not reach it.",
          "Yes. At 8 inches, a patient on the floor could reasonably reach the cord."
        ],
        correctIndex: 2,
        explanation: "Emergency call light pull cords must hang to within 6 inches of the floor. At 8 inches, the cord is too high — a patient who has fallen may not be able to reach it.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f8",
        question: "Your medication refrigerator reads 40°F with daily temperature logs documented. Is this compliant?",
        options: [
          "No. Your medication fridge needs continuous digital monitoring, not manual daily logs.",
          "Yes. 40°F is within the 36-46°F range and your daily logs are current.",
          "No. Your medication refrigerator must stay at 35°F or below to maintain drug stability.",
          "No. The acceptable range is 33-38°F and your 40°F reading exceeds the upper limit."
        ],
        correctIndex: 1,
        explanation: "This is compliant. Your medication refrigerator is within the acceptable 36-46°F range and you are documenting daily temperature checks.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f9",
        question: "You clean a glucometer with PDI Sani-Cloth Prime wipes and allow a 1-minute dwell time. Is this correct?",
        options: [
          "Yes. PDI Sani-Cloth Prime requires a 1-minute dwell time for glucometer disinfection.",
          "No. PDI Sani-Cloth Prime requires a 2-minute dwell time for point-of-care testing devices.",
          "No. You must use only alcohol-based wipes for glucometers, not quaternary ammonium products.",
          "No. All glucometer cleaning requires at least a 4-minute dwell time regardless of the disinfectant."
        ],
        correctIndex: 0,
        explanation: "PDI Sani-Cloth Prime requires only a 1-minute dwell time for glucometer disinfection. The 4-minute dwell time applies to Yellow Top Bleach Wipes.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f10",
        question: "You clean a glucometer with Yellow Top Bleach Wipes. After 2 minutes you wipe it dry and begin using it. Is this adequate?",
        options: [
          "No. Yellow Top Bleach Wipes require a full 4-minute dwell time on glucometers.",
          "Yes. Two minutes of wet contact meets the standard when you maintain visible wetness throughout.",
          "No. Yellow Top Bleach Wipes require a 10-minute dwell on any blood-contacting device.",
          "Yes. Two minutes is sufficient for bleach-based disinfectants on non-critical devices."
        ],
        correctIndex: 0,
        explanation: "Yellow Top Bleach Wipes require a full 4-minute wet contact (dwell) time for glucometer disinfection. Wiping dry at 2 minutes is non-compliant.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f11",
        question: "Your ultrasound gel was opened and dated 25 days ago. Is it still acceptable for use?",
        options: [
          "No. Your opened ultrasound gel expires 14 days after opening.",
          "No. Your opened ultrasound gel expires 21 days after opening, making this bottle 4 days past expiration.",
          "No. You must discard opened ultrasound gel after 7 days per infection prevention guidelines.",
          "Yes. Ultrasound gel is good for 28 days after opening. Your gel is still within the acceptable window."
        ],
        correctIndex: 3,
        explanation: "Ultrasound gel expires 28 days after opening. At 25 days from the date you wrote on the bottle, your gel is still within its acceptable use window.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f12",
        question: "A call light cord is wrapped neatly around the bedrail to keep it out of the way. Is this acceptable?",
        options: [
          "Yes. Securing the cord to the rail keeps it within the patient's reach from the bed.",
          "Yes. Wrapping prevents tripping hazards and keeps the patient area tidy.",
          "Yes. As long as the call button is within the patient's reach from the bed, the method of securing it is acceptable.",
          "No. Your call cords must hang freely to within 6 inches of the floor and must never be wrapped around rails."
        ],
        correctIndex: 3,
        explanation: "Call cords must never be wrapped around rails, tied up, or placed on the floor. They must hang freely so patients can reach them from any position, including after a fall.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f13",
        question: "What is the maximum number of oxygen cylinders your facility may store in a non-hazardous room?",
        options: [
          "8 cylinders.",
          "10 cylinders.",
          "12 cylinders.",
          "15 cylinders."
        ],
        correctIndex: 2,
        explanation: "NFPA 99 limits nonflammable medical gas storage outside a designated hazardous room to 300 cubic feet. A standard E-cylinder holds approximately 22-24 cubic feet, making 12 cylinders the practical training standard.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "f14",
        question: "Your defibrillator is plugged into a standard white outlet next to an available red emergency outlet. Is this acceptable?",
        options: [
          "Yes. Defibrillators have internal batteries so the outlet color does not affect emergency readiness.",
          "Yes. Any functional outlet is acceptable as long as the defibrillator maintains a full charge.",
          "Yes. White outlets are acceptable when a red outlet is within 10 feet as backup.",
          "No. Your defibrillator must be plugged into an emergency (red) outlet to maintain power during a facility outage."
        ],
        correctIndex: 3,
        explanation: "Code carts and defibrillators must be plugged into emergency (red) outlets. During a power outage, standard white outlets lose power while red outlets stay on via backup generators.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f15",
        question: "A surveyor sees your blanket warmer at 131°F. Staff adjusts it to 129°F immediately. Your log shows 128-130°F for the past 5 readings. Is the current situation compliant?",
        options: [
          "Yes. A 1°F variance above the limit falls within acceptable calibration tolerance for warming equipment.",
          "No. Your warmer was observed at 131°F, exceeding the 130°F maximum. The immediate reading is the finding.",
          "Yes. Your immediate correction and your historical log showing consistent compliance resolve the issue.",
          "Yes. Immediate correction by staff demonstrates an effective monitoring and response system."
        ],
        correctIndex: 1,
        explanation: "Compliance is assessed at the moment of observation. Your warmer was at 131°F, exceeding the 130°F maximum. Historical readings within range do not erase the current finding.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f16",
        question: "Your fluid warmer reads 109°F. An IV bag has a placement date written 3 days ago but no separate expiration date. Manufacturer expiry is 6 months out. Compliant?",
        options: [
          "No. You must remove and replace fluids in warmers every 24 hours regardless of manufacturer expiration.",
          "No. Your facility must write both a placement date AND a warmer-specific expiration date on every fluid bag.",
          "No. Only the manufacturer expiration date matters; the placement date is optional documentation.",
          "Yes. Your fluid is dated when placed and within manufacturer expiration — both requirements are met."
        ],
        correctIndex: 3,
        explanation: "Your fluids must be dated when placed in the warmer and must not be expired. The placement date was written (3 days ago) and the manufacturer expiration is valid (6 months out). Both core requirements are satisfied.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f17",
        question: "Your supply room has 11 full O2 cylinders on one secured rack and 3 empty cylinders on a separate rack. Compliant?",
        options: [
          "No. The 12-cylinder limit only counts full cylinders; empty cylinders do not count toward the total.",
          "No. Empty cylinders must be stored in a separate designated room, not just on a separate rack.",
          "Yes. Your full and empty cylinders are properly segregated, and the 12-cylinder limit applies to each category independently.",
          "No. Your combined total of 14 cylinders exceeds the NFPA 99 limit for non-hazardous storage areas."
        ],
        correctIndex: 3,
        explanation: "NFPA 99 limits nonflammable medical gas storage in a non-hazardous area to 300 cubic feet, which equals approximately 12 E-cylinders total. The limit applies to all cylinders in the room — full, empty, or partial combined. Your total of 14 exceeds this limit.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f18",
        question: "Your code cart has current checks, is on a red outlet, with blades stored separately — but the wheels are unlocked and the cart is slowly rolling away. Is this a finding?",
        options: [
          "No. Your code cart meets all required standards for documentation, power source, and blade storage.",
          "No. Unlocked wheels are preferred so your cart can be quickly mobilized during a code event.",
          "Yes. Your code cart wheels should be locked to keep the cart at its designated location and immediately accessible.",
          "No. Wheel locking is a facility preference, not a regulatory requirement, as long as the cart stays plugged in."
        ],
        correctIndex: 2,
        explanation: "Code carts must be secured at their designated locations. Unlocked wheels allow the cart to drift, making it harder to find in an emergency. Secure your cart at its designated position.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "f19",
        question: "You clean a glucometer with Yellow Top Bleach Wipes, wait the full 4 minutes, but notice dried blood at the test strip port. You apply a second wipe there. Is the cleaning adequate?",
        options: [
          "Yes. You used the correct wipe with the correct dwell time and addressed the visible blood with a second wipe.",
          "No. You must remove visible blood mechanically before disinfection. Wipes alone may not penetrate dried blood.",
          "Yes. A 4-minute bleach dwell time is sufficient to disinfect through dried blood without additional cleaning.",
          "Yes. Applying a second wipe to the blood area provides double disinfection that compensates for any barrier."
        ],
        correctIndex: 1,
        explanation: "You must mechanically remove visible contamination before disinfection. Wipes may not penetrate dried blood to reach the surface beneath. The correct sequence is: clean first (remove visible soil), then disinfect with proper dwell time.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "f20",
        question: "Your OR has: blanket warmer at 129°F (blankets only), fluid warmer at 111°F (dated fluids), medication fridge at 40°F (daily logs), code cart on red outlet. How many findings?",
        options: [
          "One. Your fluid warmer at 111°F exceeds the 110°F maximum.",
          "One. Your medication refrigerator at 40°F is above the 38°F maximum for medication storage.",
          "Two. Your fluid warmer exceeds 110°F and your blanket warmer needs adjustment to maintain a safety margin.",
          "Zero. All equipment temperatures are within their respective acceptable ranges."
        ],
        correctIndex: 0,
        explanation: "One finding: your fluid warmer at 111°F exceeds the 110°F maximum. Your blanket warmer at 129°F is within the ≤130°F limit. Your medication fridge at 40°F is within 36-46°F. Your code cart is properly on a red outlet.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "f1", '\n    ],\n  },\n  {\n    id: "spd_decontam"', new_facilities)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 2 complete.")
