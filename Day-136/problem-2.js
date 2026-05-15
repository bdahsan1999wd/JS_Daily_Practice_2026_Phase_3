// 🧩 PROBLEM–02: calculatePipeSlope()

// Logic: Drainage relies on a specific slope. If too flat, solids settle; if too steep, water outruns the solids. 1/4" per foot is the industry "Goldilocks" zone.

function calculatePipeSlope(pipeLengthFT, verticalDropInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof pipeLengthFT !== 'number' || typeof verticalDropInch !== 'number') return "Invalid Input";
    if (pipeLengthFT <= 0 || verticalDropInch < 0) return "Invalid Input";

    // --- STEP 2: CALCULATE SLOPE ---
    const slope = verticalDropInch / pipeLengthFT;

    // --- STEP 3: AUDIT ---
    if (slope === 0.25) {
        return "PERFECT";
    } else if (slope >= 0.20 && slope <= 0.30) {
        return "ACCEPTABLE";
    } else {
        return "ADJUST_SLOPE";
    }
}

// --- EXAMPLE USAGE ---
console.log(calculatePipeSlope(10, 2.5));
console.log(calculatePipeSlope(10, 1.5));