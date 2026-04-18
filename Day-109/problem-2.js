// 🧩 PROBLEM–02: validateCandidate()

// Logic: Check council eligibility based on grade/GPA, with a legacy exception for top Grade 12 scorers.

function validateCandidate(grade, currentGPA, hasCleanRecord) {

    // --- STEP 1: VALIDATION ---
    if (typeof grade !== 'number' || typeof currentGPA !== 'number' || typeof hasCleanRecord !== 'boolean' || currentGPA < 0 || currentGPA > 5.0) {
        return "Invalid Input";
    }

    // --- STEP 2: LEGACY EXCEPTION (GRADE 12 + HIGH GPA) ---
    if (grade === 12 && currentGPA >= 4.8) {
        return true;
    }

    // --- STEP 3: STANDARD ELIGIBILITY ---
    if ((grade === 11 || grade === 12) && currentGPA >= 3.5 && hasCleanRecord) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(validateCandidate(11, 3.8, true));
console.log(validateCandidate(12, 4.9, false));