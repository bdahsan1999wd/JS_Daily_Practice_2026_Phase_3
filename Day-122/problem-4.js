// 🧩 PROBLEM–04: validatePileRebar()

// Logic: The "Cage" is the skeleton of the pile. This function enforces safety codes by checking that a minimum number of bars (6) are present and that the density of bars is sufficient for the diameter of the pile.

function validatePileRebar(pileDiameter, barCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof pileDiameter !== 'number' || typeof barCount !== 'number' ||
        pileDiameter <= 0 || barCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RULE CHECKING ---
    // Rule 1: Minimum 6 bars for piles > 18 inches
    const meetsMinBars = barCount >= 6;

    // Rule 2: 1 bar per 4 inches of diameter
    const requiredByRatio = pileDiameter / 4;
    const meetsRatio = barCount >= requiredByRatio;

    // --- STEP 3: FINAL VERIFICATION ---
    return meetsMinBars && meetsRatio;
}

// Example Usage:
console.log(validatePileRebar(24, 6));
console.log(validatePileRebar(32, 6));