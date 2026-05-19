// 🧩 PROBLEM–02: calculateSillSlope()

// Logic: The window sill acts as a water shed. A minimum 10% slope ensures that gravity pulls rainwater away from the frame and the interior wall.

function calculateSillSlope(sillWidthInch, outerDropInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof sillWidthInch !== 'number' || typeof outerDropInch !== 'number' || sillWidthInch <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE SLOPE ---
    const slope = outerDropInch / sillWidthInch;

    return slope >= 0.10;
}

// --- EXAMPLE USAGE ---
console.log(calculateSillSlope(6, 0.75));
console.log(calculateSillSlope(10, 0.5));