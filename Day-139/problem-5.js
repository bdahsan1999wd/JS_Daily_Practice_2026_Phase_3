// 🧩 PROBLEM–05: calculateSealantTubes()

// Logic: Sealant consumption depends on volume. Silicon acts as both a waterproof barrier and an acoustic insulator.

function calculateSealantTubes(totalGapLengthFT, gapWidthInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalGapLengthFT !== 'number' || typeof gapWidthInch !== 'number') return "Invalid Input";
    if (totalGapLengthFT <= 0 || gapWidthInch <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE VOLUME (Cubic Inches) ---
    // Volume = Length(inch) * Width(inch) * Depth(0.5 inch)
    const volumeIn3 = (totalGapLengthFT * 12) * gapWidthInch * 0.5;

    // --- STEP 3: CALCULATE TUBES WITH WASTAGE ---
    const tubesNeeded = (volumeIn3 / 20) * 1.15; // 15% wastage

    return Math.ceil(tubesNeeded);
}

// --- EXAMPLE USAGE ---
console.log(calculateSealantTubes(50, 0.25));