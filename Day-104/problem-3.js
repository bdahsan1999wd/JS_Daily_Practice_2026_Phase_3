// 🧩 PROBLEM–03: calculateWeightedGrade()

// Logic: Calculate total score using weights (30/50/20) but fail the student if final exam is below 40.

function calculateWeightedGrade(midterm, final, project) {

    // --- STEP 1: VALIDATION ---
    if (typeof midterm !== 'number' || midterm < 0 || midterm > 100 ||
        typeof final !== 'number' || final < 0 || final > 100 ||
        typeof project !== 'number' || project < 0 || project > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: FINAL EXAM CHECK ---
    if (final < 40) {
        return "FAILED_IN_FINAL";
    }

    // --- STEP 3: WEIGHTED CALCULATION ---
    const totalScore = (midterm * 0.3) + (final * 0.5) + (project * 0.2);
    return totalScore;
}

// --- EXAMPLE USAGE ---
console.log(calculateWeightedGrade(80, 70, 90));
console.log(calculateWeightedGrade(80, 35, 90));