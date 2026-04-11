// 🧩 PROBLEM–04: checkScholarship()

// Logic: Determine scholarship type based on GPA and family income.

function checkScholarship(gpa, familyIncome) {

    // --- STEP 1: VALIDATION ---
    if (typeof gpa !== 'number' || gpa < 0 || gpa > 5.0 || typeof familyIncome !== 'number' || familyIncome < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SCHOLARSHIP LOGIC ---
    if (gpa === 5.0 && familyIncome < 200000) {
        return "FULL_SCHOLARSHIP";
    } else if (gpa >= 4.5 && familyIncome < 400000) {
        return "PARTIAL_SCHOLARSHIP";
    } else if (gpa < 4.0) {
        return "NOT_ELIGIBLE";
    } else {
        return "NOT_ELIGIBLE";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkScholarship(5.0, 150000));
console.log(checkScholarship(4.8, 300000));
console.log(checkScholarship(5.5, 100000));