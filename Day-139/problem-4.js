// 🧩 PROBLEM–04: calculateGlassWeight()

// Logic: Glass is heavy. Calculating the "Dead Load" helps in choosing the right aluminum profile (1.2mm vs 1.5mm) for the frame.

function calculateGlassWeight(areaSqFt, thicknessMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof areaSqFt !== 'number' || typeof thicknessMM !== 'number') return "Invalid Input";

    // Rule: Standard glass check
    const standardSizes = [5, 6, 8];
    if (!standardSizes.includes(thicknessMM)) return "Non-Standard Glass";

    // --- STEP 2: CONVERSION & CALCULATION ---
    const areaSqM = areaSqFt * 0.0929;
    const weight = areaSqM * thicknessMM * 2.5;

    return Number(weight.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateGlassWeight(10, 6));