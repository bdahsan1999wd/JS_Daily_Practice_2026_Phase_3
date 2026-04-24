// 🧩 PROBLEM–05: getFinalAssignmentScore()

// Logic: Implements a penalty-scaler for late work. It uses range-based logic to determine the deduction percentage and includes a boolean toggle to "halve" the penalty if a medical excuse is validated.

function getFinalAssignmentScore(originalScore, hoursLate, hasExcuse) {

    // --- STEP 1: VALIDATION ---
    if (typeof originalScore !== 'number' || typeof hoursLate !== 'number' || typeof hasExcuse !== 'boolean') {
        return "Invalid Input";
    }

    let deductionPct = 0;

    // --- STEP 2: DETERMINE PENALTY SCALE ---
    if (hoursLate > 0 && hoursLate <= 5) {
        deductionPct = 5;
    } else if (hoursLate > 5 && hoursLate <= 24) {
        deductionPct = 20;
    } else if (hoursLate > 24) {
        deductionPct = 50;
    }

    // --- STEP 3: MEDICAL EXCUSE CHALLENGE ---
    // If hasExcuse is true, cut the calculated penalty in half
    if (hasExcuse) {
        deductionPct = deductionPct / 2;
    }

    // --- STEP 4: FINAL CALCULATION ---
    const finalScore = originalScore - (originalScore * deductionPct / 100);
    return finalScore;
}

// --- EXAMPLE USAGE ---
console.log(getFinalAssignmentScore(100, 10, false));
console.log(getFinalAssignmentScore(100, 10, true));