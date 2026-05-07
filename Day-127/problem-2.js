// 🧩 PROBLEM–02: calculateBeamStirrups()

// Logic: Stirrups (rings) hold the main bars together and resist shear force. In the "Support Zone" (near columns), shear force is highest, so they must be placed closer. In the "Mid Zone", the spacing can be wider.

function calculateBeamStirrups(beamDepth, zone) {

    // --- STEP 1: VALIDATION ---
    if (typeof beamDepth !== 'number' || beamDepth <= 0 || typeof zone !== 'string') {
        return "Invalid Input";
    }

    let spacing;

    // --- STEP 2: CALCULATE BASED ON ZONE ---
    if (zone === "Support") {
        // Rule: beamDepth / 4 or 4 inches (whichever is smaller)
        spacing = Math.min(beamDepth / 4, 4);
    } else if (zone === "Mid") {
        // Rule: beamDepth / 2 or 8 inches (whichever is smaller)
        spacing = Math.min(beamDepth / 2, 8);
    } else {
        return "Invalid Zone";
    }

    // --- STEP 3: APPLY MINIMUM PRACTICAL GAP ---
    // Engineering limit: stirrups shouldn't be closer than 3 inches for concrete flow
    return spacing < 3 ? 3 : spacing;
}

// --- EXAMPLE USAGE ---
console.log(calculateBeamStirrups(20, "Support"));
console.log(calculateBeamStirrups(12, "Mid"));