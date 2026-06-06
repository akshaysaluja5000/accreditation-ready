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

# ─── SPD DECONTAM (spd1-spd20) ───────────────────────────────────────────────
new_spd = '''    questions: [
      {
        id: "spd1",
        question: "A surveyor holds a tissue at the bottom of the decon room door. It pushes outward. What does this indicate?",
        options: [
          "Inconclusive. You should perform the tissue test at the top of the door frame for accurate measurement.",
          "A problem. Your room has positive pressure — contaminated air is escaping into clean areas.",
          "Correct negative pressure. Outward movement confirms air is cycling through the HEPA exhaust system.",
          "Correct negative pressure. Tissue movement in any direction confirms your ventilation is functioning."
        ],
        correctIndex: 1,
        explanation: "In negative pressure, air flows INTO the room (tissue pulls inward). If the tissue pushes outward, your decon room has positive pressure and contaminated air is escaping. This is a serious finding.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd2",
        question: "A decon room tech is wearing scrubs, gown, gloves, and eye protection but no mask. Is the PPE complete?",
        options: [
          "No. Your decon room requires all five: scrubs, gown, gloves, mask, AND eye protection.",
          "No. Your tech is also missing shoe covers, which are required in all wet decontamination environments.",
          "Yes. Masks are only required during manual scrubbing of lumened instruments where aerosol risk is highest.",
          "Yes. A mask is optional when eye protection is worn since goggles provide adequate splash and aerosol protection."
        ],
        correctIndex: 0,
        explanation: "Full PPE in the decontamination room requires all five elements: scrubs, fluid-resistant gown, gloves, mask, AND eye protection. Missing any single element is non-compliant.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd3",
        question: "Your Bowie-Dick test was run at 10 AM, after two loads had already been processed. Is this timing compliant?",
        options: [
          "Yes. As long as it is done daily, the timing does not matter since it validates overall daily performance.",
          "No. You must run the Bowie-Dick test twice daily — before the first load and again at the midpoint.",
          "Yes. You can run it at any point during the shift as long as all loads are held until results are reviewed.",
          "No. You must run the Bowie-Dick test before the first patient load of the day on every pre-vacuum sterilizer."
        ],
        correctIndex: 3,
        explanation: "Your Bowie-Dick test must be run daily BEFORE the first patient load on dynamic air-removal (pre-vacuum) sterilizers. Running it after two loads have already processed defeats its purpose of verifying proper air removal.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd4",
        question: "A surveyor asks how often biological indicators must be included in your sterilization loads. What do you say?",
        options: [
          "At minimum once daily, and in EVERY load containing implants.",
          "Only in loads containing implants or critical devices.",
          "In every sterilization load without exception.",
          "Weekly, in a designated test pack run separately from patient loads."
        ],
        correctIndex: 0,
        explanation: "Per AAMI ST79, biological indicators are required at minimum once per day the sterilizer is used AND in every implant load. An implant-containing load must never be released before the BI result is confirmed negative.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd5",
        question: "Your enzymatic solution has been in use for 3 hours. The IFU specifies a 4-hour change interval. Is it still compliant?",
        options: [
          "Yes. Your solution is within the manufacturer's specified change interval and remains compliant.",
          "No. Enzymatic solutions must be changed every 2 hours regardless of IFU to maintain cleaning efficacy.",
          "Yes. Enzymatic solutions remain effective up to 8 hours when the water temperature is maintained.",
          "No. After processing more than 5 instrument sets you must change the solution regardless of time."
        ],
        correctIndex: 0,
        explanation: "Your enzymatic detergent must be used per the manufacturer's IFU. At 3 hours into a 4-hour interval, your solution is still within compliant parameters.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd6",
        question: "A cleaning brush has slightly splayed bristles but is not visibly frayed. Should you keep using it?",
        options: [
          "No. Per AAMI ST79, you must replace all cleaning brushes after each individual use.",
          "Yes. Replace brushes only when bristles are missing or the wire core is exposed per the manufacturer's IFU.",
          "Yes. Splayed bristles provide broader surface contact for improved bioburden removal from channels.",
          "No. Splayed bristles mean the brush is compromised. Remove it from service and replace it immediately."
        ],
        correctIndex: 3,
        explanation: "Splayed bristles indicate a damaged cleaning brush that cannot adequately clean instrument lumens and crevices. Remove it from service immediately. Splayed bristles lose contact with channel surfaces, leaving bioburden behind.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd7",
        question: "Your instrument washer uses tap water filtered through a standard carbon filter for the final rinse. Is this acceptable?",
        options: [
          "No. Your final rinse must use treated water: RO, DI, or distilled per AAMI TIR34.",
          "No. Your final rinse must use sterile water, not just treated or filtered water.",
          "Yes. Filtered tap water meets the minimum standard when total dissolved solids are within municipal limits.",
          "Yes. Carbon filtration removes chlorine, making tap water suitable for the final rinse."
        ],
        correctIndex: 0,
        explanation: "Your final rinse water must meet AAMI TIR34 quality standards — reverse osmosis (RO), deionized (DI), or distilled water. Carbon-filtered tap water does not meet these specifications.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd8",
        question: "A rigid containerized instrument set weighs 28 lbs. Staff says it has always been processed at this weight. Acceptable?",
        options: [
          "Yes. Rigid containers can handle up to 30 lbs if the filter and gasket are rated for the weight.",
          "Yes. If your sterilizer validation was performed with sets at this weight, it qualifies as established practice.",
          "No. Your rigid containerized sets must not exceed 25 lbs regardless of past practice.",
          "No. Your rigid containerized sets must not exceed 20 lbs for ergonomic safety and adequate sterilant penetration."
        ],
        correctIndex: 2,
        explanation: "Rigid containerized instrument sets must not exceed 25 lbs. At 28 lbs, sterilant penetration may be compromised and safe handling is at risk. Past practice does not override the standard.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd9",
        question: "An instrument is released early from the sterilizer. You allow a 20-minute cool-down and document the early release. Compliant?",
        options: [
          "Yes. Your cool-down time and documentation satisfy the early release requirements per AAMI ST79.",
          "Yes. 20 minutes is sufficient when documented and when the BI shows a preliminary negative result.",
          "No. Early release requires a minimum 45-minute cool-down and supervisor sign-off.",
          "No. Early release requires a minimum 30-minute cool-down per AAMI ST79."
        ],
        correctIndex: 0,
        explanation: "Per AAMI ST79, there is no universal fixed cool-down time for early release. The cool-down must follow the sterilizer and device manufacturer's IFU, which may vary. Documentation of reason and patient identifier is required. Citing '30 minutes' as universal is a common misconception.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd10",
        question: "Your multi-use cleaning brushes were last run through the washer 2 days ago due to a staffing shortage. Acceptable?",
        options: [
          "No. You must run your multi-use cleaning brushes through the washer daily.",
          "Yes. Multi-use brushes only need weekly processing if you rinse and air-dry them between uses.",
          "No. You must process multi-use brushes after every individual use, not just daily.",
          "Yes. Every other day is reasonable during staffing challenges as long as brushes are rinsed after each use."
        ],
        correctIndex: 0,
        explanation: "Your multi-use cleaning brushes must be processed through the automated washer daily. Staffing challenges do not excuse skipping daily brush decontamination.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd11",
        question: "Instruments are slightly damp when you begin packaging them. Is this acceptable if the packaging material absorbs moisture?",
        options: [
          "No. You must thoroughly dry instruments before packaging regardless of packaging material type.",
          "Yes. Slight dampness aids sterilant penetration during the steam sterilization cycle.",
          "No. Damp instruments must be returned to the ultrasonic cleaner for an additional rinse and dry cycle.",
          "Yes. Some residual moisture is normal and modern packaging materials are designed to absorb it."
        ],
        correctIndex: 0,
        explanation: "You must thoroughly dry AND visually inspect instruments before packaging. Residual moisture creates wet packs after sterilization, which compromises sterility.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd12",
        question: "A double peel pack contains an unfolded inner pack and the process has been validated by the packaging manufacturer. Compliant?",
        options: [
          "Yes. An unfolded inner pack with manufacturer validation meets both double peel pack requirements.",
          "No. Double peel packing is never permitted because it impedes sterilant penetration.",
          "Yes. Double peel packing is always acceptable as long as the outer seal is intact.",
          "No. Double peel packing is only permitted for implantable devices, not general instrumentation."
        ],
        correctIndex: 0,
        explanation: "Double peel packing is allowed when: (1) the inner pack is NOT folded, and (2) the double-packing process has been validated by the manufacturer. Both conditions are met here.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd13",
        question: "Your automated washer quality testing was last documented 3 days ago. Is this a concern?",
        options: [
          "Yes. Your automated washers and disinfectors require daily quality testing documentation.",
          "No. Testing every few days is sufficient for automated equipment that has passed annual validation.",
          "Yes. Your automated washers require quality testing before and after every load.",
          "No. Automated washers self-monitor and only need manual testing when error codes appear."
        ],
        correctIndex: 0,
        explanation: "Your automated washers and disinfectors must have daily quality testing documented. A 3-day gap means any loads processed during that time cannot be verified as properly decontaminated.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd14",
        question: "A surveyor asks where you must place biological indicators inside a sterilization load. What is the correct answer?",
        options: [
          "At the most challenging location — the area hardest for sterilant to penetrate.",
          "At the top of the load for easy retrieval and timely incubation.",
          "Inside the largest and densest package in the load.",
          "In the geometric center of the load where sterilant concentration is most uniform."
        ],
        correctIndex: 0,
        explanation: "Your BIs must be placed at the most challenging location in the load — the area hardest for sterilant to penetrate. This validates that even the most difficult spots achieved sterilization.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "spd15",
        question: "A BI was placed in a load with a 3-hour manufacturer read time, but results were documented 5 hours after incubation started. Is this compliant?",
        options: [
          "No. You must read BI results within 1 hour of the manufacturer's timeframe; a 2-hour overage requires load recall.",
          "No. Your BI results must be read within the manufacturer's specified timeframe. Reading a 3-hour BI at 5 hours compromises the result's validity.",
          "Yes. A longer incubation period provides a more thorough read and increases confidence in a negative result.",
          "Yes. The BI was eventually read and documented. Delayed readings are acceptable as long as the result is negative."
        ],
        correctIndex: 1,
        explanation: "Your biological indicator results must be read within the manufacturer's specified timeframe. Reading a 3-hour BI at 5 hours means the result may not be accurate — false negatives are possible after the specified window closes.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "spd16",
        question: "A tech uses enzymatic detergent at double the manufacturer's concentration because stronger must be better. Is this acceptable?",
        options: [
          "No. Your enzymatic detergent must be used at the exact concentration in the IFU. Over-concentration can damage instruments and leave residue.",
          "Yes. Higher concentration ensures faster bioburden breakdown during the soak cycle.",
          "No. Your enzymatic concentration must be verified with test strips, and 2x would exceed the acceptable range.",
          "Yes. Doubling the concentration is acceptable for heavily soiled instruments from complex surgical cases."
        ],
        correctIndex: 0,
        explanation: "You must follow your enzymatic detergent IFU exactly, including concentration. Over-concentration does not improve cleaning — it can damage instrument surfaces, leave chemical residue, and invalidate the validated cleaning process.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd17",
        question: "An assembly workstation has a standard desk lamp and a regular magnifying glass but no lighted magnification unit. What is missing?",
        options: [
          "Lighted magnification. Your assembly station must have integrated lighted magnification, not a separate lamp and magnifier.",
          "Nothing. A desk lamp and magnifying glass together provide adequate illumination and magnification per minimum requirements.",
          "Nothing. Lighted magnification is only required for microsurgical instrument inspection, not general assembly.",
          "A UV inspection light. UV illumination is required to detect residual bioburden invisible under standard lighting."
        ],
        correctIndex: 0,
        explanation: "Your assembly and inspection stations require lighted magnification — integrated illuminated magnification equipment. A separate desk lamp plus a handheld magnifier does not meet the requirement for hands-free, consistent illuminated inspection.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd18",
        question: "A rigid instrument set weighing 24 lbs gets a new instrument added, bringing the total to 26 lbs. Prior processing at this weight was uneventful. Should you process it?",
        options: [
          "Yes. Prior successful processing validates the configuration for continued clinical use.",
          "No. Your set exceeds the 25 lb maximum. Remove the added instrument or split the set.",
          "Yes. The 25 lb limit applies to instruments only, not including the container and organizing tray.",
          "No. Any modification to a validated set requires a 3-load qualification test before patient use."
        ],
        correctIndex: 1,
        explanation: "Your rigid containerized sets must not exceed 25 lbs. At 26 lbs, sterilant penetration may be compromised and ergonomic safety is at risk. Past success does not validate exceeding the weight limit.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "spd19",
        question: "Your decon room ventilation shuts down during a power outage while instruments are being processed. What is the immediate concern?",
        options: [
          "Your automated washers need power — all instruments must be manually cleaned until power is restored.",
          "Chemical fumes from enzymatic detergents will accumulate, creating an occupational health hazard.",
          "Without negative pressure, contaminated air may escape into adjacent clean areas, creating a cross-contamination hazard.",
          "Instruments may not dry properly without ventilation, affecting the temperature regulation of cleaning solutions."
        ],
        correctIndex: 2,
        explanation: "Your decon room must maintain negative pressure to prevent contaminated air from escaping. Without ventilation, the room loses negative pressure and contaminated air can flow into clean areas. Stop processing until ventilation is restored.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "spd20",
        question: "Your SPD has daily Bowie-Dick tests, BIs in every load, daily washer testing, and ultrasonic fluid changes per IFU — but your water treatment PM is 14 months overdue (annual policy). What is the finding?",
        options: [
          "Nothing significant. Your sterilization testing is current; water treatment PM is a facilities department finding.",
          "Your water treatment PM is overdue, meaning you cannot verify that your final rinse water meets AAMI TIR34 standards.",
          "You should verify ultrasonic fluid change frequency independently; the water treatment PM gap is minor documentation.",
          "Water treatment systems only require PM every 18 months per AAMI guidelines, so 14 months is within range."
        ],
        correctIndex: 1,
        explanation: "Your water treatment system PM is overdue. Without current PM, you cannot verify your final rinse water quality meets AAMI TIR34 standards. This affects every instrument processed since the PM lapsed.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "spd1", '\n    ],\n  },\n  {\n    id: "or_sterile_field"', new_spd)

# ─── OR STERILE FIELD (or1-or20) ─────────────────────────────────────────────
new_or = '''    questions: [
      {
        id: "or1",
        question: "The circulator needs to hand a supply to the scrub tech. She walks around the field without reaching over it. Correct?",
        options: [
          "No. Only scrubbed team members may handle items near the sterile field under any circumstances.",
          "No. Your circulator must wear sterile gloves when presenting items directly to the scrub tech.",
          "No. Your circulator must place items on a designated transfer table rather than presenting them directly.",
          "Yes. Walking around and not reaching over the field is the correct technique for unsterile personnel."
        ],
        correctIndex: 3,
        explanation: "This is correct technique. Unsterile persons may present items to the sterile team as long as they maintain safe distance and never reach over the sterile field.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or2",
        question: "Your scrub nurse has a mask over mouth and nose, bouffant covering all hair, earrings removed, and no jewelry. Attire compliant?",
        options: [
          "No. Your scrub nurse must also complete a surgical hand scrub before entering the restricted OR.",
          "Yes. All surgical attire requirements are met.",
          "No. Shoe covers are also required in restricted OR areas.",
          "No. A bouffant cap does not adequately cover sideburns. A surgical hood is always required in restricted areas."
        ],
        correctIndex: 1,
        explanation: "All attire requirements are met: mask covers mouth AND nose, cap covers all hair, earrings removed, no jewelry. If sideburns or neckline hair were visible, a hood would be needed.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or3",
        question: "A surgeon enters the semi-restricted area wearing a cap but with sideburns visible. He will put his mask on before the OR. Is his attire compliant now?",
        options: [
          "Yes. Sideburns are only required to be covered when scrubbing in, not in semi-restricted areas.",
          "No. Your caps or hoods must cover ALL head and facial hair including sideburns in both semi-restricted and restricted areas.",
          "No. Sideburns must be shaved to fit under standard surgical caps before entering any perioperative area.",
          "Yes. Mask requirements are stricter in restricted areas, but hair coverage requirements are more relaxed in semi-restricted zones."
        ],
        correctIndex: 1,
        explanation: "Surgical caps or hoods must cover ALL head and facial hair — including sideburns and neckline — in both semi-restricted AND restricted areas. Visible sideburns require a hood or larger cap.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or4",
        question: "Skin prep was applied and looks wet and shiny. The surgeon asks to begin draping. Should draping proceed?",
        options: [
          "No. A second application is also required once the first dries to ensure adequate antimicrobial coverage.",
          "No. Your skin prep must be fully dry before draping to prevent fire risk with electrosurgery.",
          "Yes. Draping over wet prep is acceptable as long as correct technique was used and dwell time has started.",
          "Yes. The antiseptic begins working on contact, so draping can proceed immediately."
        ],
        correctIndex: 1,
        explanation: "Alcohol-based skin preps are flammable. Draping over wet prep can create pooled alcohol under drapes, which is a serious fire risk when electrosurgery is used. Wait for full dryness.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or5",
        question: "Your back table has syringes labeled 'Lidocaine 1%' and 'Marcaine 0.25%' — drug name and concentration only. Is the labeling complete?",
        options: [
          "No. Your labels must also include the patient's name and the administering provider's initials.",
          "No. Per labeling standards, your labels must include drug name, strength, AND expiration date or time.",
          "Yes. Both syringes are labeled with the required minimum: drug name and concentration.",
          "Yes. Your labels should also include the lot number from the original vial."
        ],
        correctIndex: 1,
        explanation: "Per JC labeling standards, all medications on and off the sterile field must be labeled with drug name, strength/concentration, AND expiration date/time. Drug name and concentration alone are insufficient.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or6",
        question: "Anesthesia equipment surfaces were wiped with approved disinfectant between patients. Machine, monitors, and cart all cleaned. Adequate?",
        options: [
          "No. Surface wipes are only adequate if you also replace disposable circuits and tubing between each patient.",
          "No. Anesthesia equipment requires full terminal cleaning with liquid disinfectant, not surface wipes.",
          "No. Anesthesia equipment only needs terminal cleaning at the end of the day, not between cases.",
          "Yes. All anesthesia equipment surfaces must be cleaned and disinfected between every patient."
        ],
        correctIndex: 3,
        explanation: "Anesthesia equipment surfaces must be cleaned and disinfected between EVERY patient, not just at end of day. This prevents cross-contamination between surgical patients.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or7",
        question: "A sterile team member briefly turns her back to the sterile field to ask the circulator a question. Is this a break in technique?",
        options: [
          "Yes. Sterile team members must face the sterile field at all times.",
          "No. A brief turn is acceptable for necessary communication as long as she does not leave the immediate area.",
          "No. A brief turn is only a break in technique if her hands drop below waist level.",
          "No. The back of the sterile gown is considered sterile down to the waist, so brief turns are acceptable."
        ],
        correctIndex: 0,
        explanation: "Sterile team members must face the sterile field at ALL times. Turning away, even briefly, increases contamination risk from the non-sterile back of the gown.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or8",
        question: "After a surgical hand scrub, a surgeon dries his hands with a clean cloth towel from the linen cart. Is this correct?",
        options: [
          "Yes. Any clean towel is acceptable after the surgical scrub since the antimicrobial agent has already been applied.",
          "Yes. Clean cloth towels are preferred over paper because they are more absorbent and produce less lint.",
          "No. Your hands and arms must be dried with a sterile towel after the surgical scrub.",
          "No. Hands must be air-dried to preserve the antimicrobial residue from the scrub agent."
        ],
        correctIndex: 2,
        explanation: "After the surgical scrub, hands and arms must be dried with a STERILE towel, not a clean cloth towel. Using a non-sterile towel breaks the aseptic chain before gowning and gloving.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or9",
        question: "Your OR has 8 people for a routine knee arthroscopy: surgeon, assistant, scrub tech, circulator, anesthesiologist, and 3 observers. Is traffic a concern?",
        options: [
          "No. Observers are never permitted in the OR during active procedures.",
          "No. Up to 10 personnel are permitted in a standard OR as long as everyone follows attire requirements.",
          "No. All personnel have a reason to be present and are properly attired.",
          "Yes. OR traffic must be minimized to only essential personnel. Three observers during a routine procedure may be excessive."
        ],
        correctIndex: 3,
        explanation: "OR traffic must be minimized with only essential personnel present. Three observers during a routine knee arthroscopy creates unnecessary traffic and increases airborne contamination risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or10",
        question: "A medicine cup on your back table contains clear fluid but has no label. Your scrub tech says everyone knows it's saline. Compliant?",
        options: [
          "Yes. Verbal identification by the scrub tech is an acceptable alternative to labeling for commonly used solutions.",
          "No. Only the circulator can verify and label solutions; the scrub tech cannot self-identify contents.",
          "No. ALL medications and solutions on your sterile field must be labeled with drug name and strength.",
          "Yes. Saline as the only clear fluid does not require labeling when its identity is obvious to the team."
        ],
        correctIndex: 2,
        explanation: "ALL medications and solutions on the sterile field must be labeled, including saline. Verbal identification is never acceptable — it creates medication error risk.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or11",
        question: "An aerosol-generating procedure is planned. Your staff have gowns, gloves, and masks but no eye protection. Is the PPE adequate?",
        options: [
          "No. Aerosol-generating procedures require a powered air-purifying respirator instead of a standard mask.",
          "No. Aerosol-generating procedures require gown, eye protection, gloves, AND mask. All four are required.",
          "Yes. Masks provide sufficient respiratory and splash protection for aerosol-generating procedures.",
          "Yes. Eye protection is only required when there is a risk of blood or body fluid splash, not for aerosols."
        ],
        correctIndex: 1,
        explanation: "Aerosol-generating procedures require full PPE: gown, eye protection, gloves, AND mask. All four elements are required — eye protection cannot be omitted.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or12",
        question: "Off-field medications on the anesthesia cart are in labeled syringes. A surveyor asks if off-field medications also need labels. What do you say?",
        options: [
          "No. Off-field medications only require labels when more than one medication is drawn up at the same time.",
          "Yes. Both on-field and off-field medications must be labeled.",
          "No. Off-field medications are under direct provider control and are exempt from labeling requirements.",
          "No. Off-field medications are exempt from labeling if they remain in their original manufacturer packaging."
        ],
        correctIndex: 1,
        explanation: "Medications both ON and OFF the sterile field must be labeled. This applies to all syringes, cups, basins, and containers used during procedures.",
        xpReward: 10,
        isSwipe: false,
      },
      {
        id: "or13",
        question: "A nurse wearing stud earrings fully covered by her surgical cap enters the restricted OR. Is this compliant?",
        options: [
          "Yes. Earrings that are completely covered by the surgical cap meet the 'covered' requirement.",
          "No. Only stud earrings smaller than 5mm may be worn under a surgical cap in restricted areas.",
          "No. All jewelry must be removed in restricted areas regardless of coverage.",
          "No. Only clip-on earrings are permitted; pierced earrings must always be removed in restricted areas."
        ],
        correctIndex: 0,
        explanation: "Earrings must be covered or removed in surgical/procedure areas. Stud earrings fully covered by the surgical cap meet the 'covered' requirement.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or14",
        question: "A surgeon's bouffant cap covers his scalp but sideburns and neckline hair are visible in the restricted OR. Compliant?",
        options: [
          "No. Your surgeon needs both a bouffant cap and a separate beard cover to address the sideburn exposure.",
          "No. Sideburns and neckline hair are only required to be covered during implant or joint replacement cases.",
          "No. Your surgical caps or hoods must cover ALL head and facial hair including sideburns and neckline in restricted areas.",
          "Yes. A bouffant cap covers the required scalp area; sideburns are considered minimal exposure."
        ],
        correctIndex: 2,
        explanation: "Caps or hoods must cover ALL head and facial hair, including sideburns and neckline. A bouffant cap that does not cover these areas is insufficient. Your surgeon needs a hood or larger cap.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or15",
        question: "Your circulator drops an item near the sterile field and bends down to pick it up, staying below back-table height. Is this acceptable?",
        options: [
          "No. Your unsterile personnel should never reach or bend near the sterile field. Another team member away from the field should retrieve the item.",
          "Yes. The item must only be left on the floor until the procedure is complete to avoid sterile field disruption.",
          "Yes. Staying below sterile field level prevents contamination since sterile zones begin at table height.",
          "Yes. As long as your circulator does not touch any sterile surfaces while bending, this technique is acceptable."
        ],
        correctIndex: 0,
        explanation: "Unsterile personnel must maintain safe distance from the sterile field and never reach or bend near it. Movement near the field creates air currents and contamination risk. Have personnel away from the field retrieve dropped items.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or16",
        question: "Skin prep was applied and excess pooled solution is visible under the drape at the patient's side. What is the specific risk?",
        options: [
          "Chemical burn risk. Prolonged alcohol-based prep contact under occlusive draping causes tissue damage.",
          "Fire hazard. Pooled alcohol-based prep under drapes near electrocautery creates a surgical fire risk.",
          "Strike-through. Excess prep solution wicking through drapes contaminates the sterile field.",
          "Seal failure. Pooled prep will compromise drape adhesion and create a break in the sterile barrier."
        ],
        correctIndex: 1,
        explanation: "Pooled alcohol-based skin prep under drapes is a serious fire hazard with electrosurgery. Your prep must be allowed to fully dry and any pooling addressed before draping.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or17",
        question: "Your back table has labeled syringes but one unlabeled medicine cup with clear fluid. Your scrub tech says 'it's just irrigation saline.' What is the finding?",
        options: [
          "No finding. Irrigation saline is a supply item exempt from sterile field labeling requirements.",
          "One finding. ALL solutions on your sterile field must be labeled with name and concentration, no exceptions.",
          "No finding. Your scrub tech verbally announces contents at case start, which is an acceptable alternative.",
          "No finding. Since the other syringes are labeled, the remaining cup can be identified by process of elimination."
        ],
        correctIndex: 1,
        explanation: "ALL medications and solutions on the sterile field must be labeled — including irrigation saline. Verbal identification is never acceptable. An unlabeled container of clear fluid is a medication error waiting to happen.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or18",
        question: "A sterile field was set up 3 hours ago. No contamination events occurred and a staff member has been present the entire time. Is the field sterile?",
        options: [
          "Yes. Neither JC nor AAMI ST79 specifies an absolute time limit. Continuous monitoring with no compromise events can maintain sterility per facility policy.",
          "No. AAMI standards require breaking down and re-establishing a sterile field if the case is delayed beyond 1 hour.",
          "No. AORN requires sterile fields to be used within 2 hours of setup.",
          "Yes. As long as the room's positive-pressure ventilation is functioning, the sterile field is maintained indefinitely."
        ],
        correctIndex: 0,
        explanation: "Neither JC nor AAMI ST79 specifies an absolute maximum time for a sterile field. The key requirements are continuous monitoring by qualified personnel, no contamination events, controlled room access, and compliance with facility policy.",
        xpReward: 20,
        isSwipe: false,
      },
      {
        id: "or19",
        question: "A surgeon's mask is pulled below his nose while he talks to the patient in the OR. Open sterile supplies are on the back table. Acceptable?",
        options: [
          "No. Your masks must fully cover both mouth AND nose whenever open sterile supplies are present in the restricted area.",
          "No. Your masks must be removed entirely during patient communication and replaced with a fresh mask before the case.",
          "Yes. The case has not started yet, so full mask coverage is not required until the incision is made.",
          "Yes. Mask coverage below the nose is acceptable during patient communication to improve verbal clarity."
        ],
        correctIndex: 0,
        explanation: "In restricted areas where open sterile supplies are present, masks must fully cover both mouth and nose — regardless of whether the procedure has started. The standard is based on the presence of open sterile supplies, not the procedure timeline.",
        xpReward: 15,
        isSwipe: false,
      },
      {
        id: "or20",
        question: "Your OR door opens and closes 12 times in 30 minutes during a knee arthroscopy. All personnel are properly attired. What is the concern?",
        options: [
          "Excessive door opening disrupts your OR's positive-pressure laminar airflow, raising airborne contamination risk near the surgical site.",
          "No concern. Door traffic is only a finding if personnel are improperly attired or enter without authorization.",
          "The concern is noise disruption. Frequent door openings distract the surgical team and increase procedural error risk.",
          "No concern. Your ventilation system compensates for door openings automatically."
        ],
        correctIndex: 0,
        explanation: "Each door opening disrupts your OR's positive-pressure environment and laminar airflow designed to direct contaminants away from the surgical site. Excessive traffic — even by properly attired personnel — increases airborne particle counts and infection risk.",
        xpReward: 20,
        isSwipe: false,
      },'''

content = replace_questions(content, "or1", '\n    ],\n  },\n  {\n    id: "universal_protocol"', new_or)

with open('shared/questions.ts', 'w') as f:
    f.write(content)

print("Batch 3 complete.")
