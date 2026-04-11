// 🧩 PROBLEM–03: calculateSubjectGP()

// Logic: Convert numeric marks into Grade Point (GP) based on specific threshold ranges.

function calculateSubjectGP(marks) {

    // --- STEP 1: VALIDATION ---
    // Marks must be a number between 0 and 100
    if (typeof marks !== 'number' || marks < 0 || marks > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: GRADING RULES ---
    // Higher marks return a higher GP value
    if (marks >= 80) return 5.0;
    if (marks >= 70) return 4.0;
    if (marks >= 60) return 3.5;
    if (marks >= 50) return 3.0;
    if (marks >= 40) return 2.0;
    if (marks >= 33) return 1.0;

    // --- STEP 3: FAIL CASE ---
    // Marks below 33 result in 0.0 GP
    return 0.0;
}

// --- EXAMPLE USAGE ---
console.log(calculateSubjectGP(85));
console.log(calculateSubjectGP(25));
console.log(calculateSubjectGP(105));