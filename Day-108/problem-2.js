// 🧩 PROBLEM–02: getStudentHealthStatus()

// Logic: Calculate BMI and categorize health status, adding a "FIT" tag for healthy individuals.

function getStudentHealthStatus(weightKg, heightM) {

    // --- STEP 1: VALIDATION ---
    if (typeof weightKg !== 'number' || typeof heightM !== 'number' || weightKg <= 0 || heightM <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BMI CALCULATION ---
    const bmi = weightKg / (heightM * heightM);

    // --- STEP 3: CATEGORIZATION ---
    if (bmi < 18.5) {
        return "UNDERWEIGHT";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "HEALTHY: FIT";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "OVERWEIGHT";
    } else {
        return "OBESE";
    }
}

// --- EXAMPLE USAGE ---
console.log(getStudentHealthStatus(60, 1.7));
console.log(getStudentHealthStatus(40, 1.6));