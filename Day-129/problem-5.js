// 🧩 PROBLEM–05: auditSlabCover()

// Logic: Clear cover protects steel from rusting. Too little cover allows moisture in (corrosion). Too much cover reduces the structural strength because the steel is closer to the center of the slab rather than the bottom edge.

function auditSlabCover(measuredCoverMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof measuredCoverMM !== 'number') return "Invalid Input";

    // --- STEP 2: AUDIT LOGIC ---
    // Standard: 20mm with +/- 3mm tolerance (17mm to 23mm)
    if (measuredCoverMM >= 17 && measuredCoverMM <= 23) {
        return "PASSED";
    } else if (measuredCoverMM < 17) {
        return "DANGER: CORROSION_RISK";
    } else {
        return "WARNING: STRUCTURAL_WEAKNESS";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditSlabCover(19));
console.log(auditSlabCover(25));