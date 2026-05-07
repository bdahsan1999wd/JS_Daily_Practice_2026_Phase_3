// 🧩 PROBLEM–03: checkBeamRebarRatio()

// Logic: The steel ratio (rho) ensures the beam is neither "Under-reinforced" (risking sudden collapse) nor "Over-reinforced" (risking brittle failure). This balance allows the beam to show cracks before failure, saving lives.

function checkBeamRebarRatio(steelArea, beamWidth, beamDepth) {

    // --- STEP 1: VALIDATION ---
    if (typeof steelArea !== 'number' || typeof beamWidth !== 'number' || typeof beamDepth !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE RATIO (ρ) ---
    const ratio = steelArea / (beamWidth * beamDepth);

    // --- STEP 3: AUDIT AGAINST STANDARDS ---
    if (ratio >= 0.0035 && ratio <= 0.02) {
        return "SAFE";
    } else if (ratio < 0.0035) {
        return "UNDER-REINFORCED";
    } else {
        return "OVER-REINFORCED";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkBeamRebarRatio(1.5, 10, 15));
console.log(checkBeamRebarRatio(4, 10, 15));