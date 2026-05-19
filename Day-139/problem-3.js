// 🧩 PROBLEM–03: calculateFasteners()

// Logic: Fasteners (screws/rawl plugs) counteract wind pressure. Even for small windows, we need at least 2 per side to prevent twisting.

function calculateFasteners(framePerimeterFT) {

    // --- STEP 1: VALIDATION ---
    if (typeof framePerimeterFT !== 'number' || framePerimeterFT <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE BASED ON SPACING ---
    const basedOnSpacing = Math.ceil(framePerimeterFT / 1.5);

    // --- STEP 3: COMPARE WITH MINIMUM (8) ---
    return Math.max(basedOnSpacing, 8);
}

// --- EXAMPLE USAGE ---
console.log(calculateFasteners(10));
console.log(calculateFasteners(18));