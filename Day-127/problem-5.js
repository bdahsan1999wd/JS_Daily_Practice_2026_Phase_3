// 🧩 PROBLEM–05: validateHangerBars()

// Logic: Hanger bars (top bars) hold the stirrups in position during casting. Even if the design doesn't require top tension steel, these bars must be strong enough (min 12mm) to maintain the "cage" integrity of the beam.

function validateHangerBars(mainBarDia, hangerBarDia) {

    // --- STEP 1: VALIDATION ---
    if (typeof mainBarDia !== 'number' || typeof hangerBarDia !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: RULE CHECKING ---
    // Rule 1: Minimum 12mm diameter
    const isAtLeast12mm = hangerBarDia >= 12;

    // Rule 2: At least 50% of the main (bottom) bar diameter
    const isAtLeastHalfMain = hangerBarDia >= (mainBarDia * 0.5);

    // --- STEP 3: FINAL DECISION ---
    return isAtLeast12mm && isAtLeastHalfMain;
}

// --- EXAMPLE USAGE ---
console.log(validateHangerBars(25, 16));
console.log(validateHangerBars(25, 10));