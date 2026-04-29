// 🧩 PROBLEM–02: checkSteelYield()

// Logic: Steel must be stronger than its rated "Grade" to provide a safety buffer. This function ensures the actual yield strength tested in the lab is at least 110% of the specified grade. It also restricts input to common engineering grades (60 and 72.5).

function checkSteelYield(grade, actualYield) {

    // --- STEP 1: VALIDATION ---
    if (typeof grade !== 'number' || typeof actualYield !== 'number') {
        return "Invalid Input";
    }

    // Check for allowed grades
    if (grade !== 60 && grade !== 72.5) {
        return "Invalid Grade";
    }

    // --- STEP 2: SAFETY LOGIC ---
    // Rule: actualYield must be >= 1.1 * grade
    const safetyLimit = grade * 1.1;

    return actualYield >= safetyLimit;
}

// Example Usage:
console.log(checkSteelYield(72.5, 80));
console.log(checkSteelYield(60, 62));