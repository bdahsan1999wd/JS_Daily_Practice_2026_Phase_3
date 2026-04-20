// 🧩 PROBLEM–05: isLabEligible()

// Logic: Checks if a student is eligible to access the science lab.
// Factors: Grade level, GPA, behavior score, and completion of basic safety courses.

function isLabEligible(profile) {

    // --- STEP 1: VALIDATION ---
    // Ensure the input is an object and not null
    if (typeof profile !== 'object' || profile === null) {
        return "Invalid Input";
    }

    // Destructuring properties for easier access
    const { grade, gpa, behaviorScore, completedBasics } = profile;

    // --- STEP 2: PREREQUISITE WAIVER CHALLENGE ---
    // Rule: If they haven't finished basics but have a perfect GPA (5.0),
    // they don't fail immediately; instead, they need a specific waiver.
    if (!completedBasics && gpa === 5.0) {
        return "PREREQUISITE_WAIVER_REQUIRED";
    }

    // --- STEP 3: STANDARD ELIGIBILITY RULES ---
    // Eligibility Criteria: Grade 10-12 AND GPA of 4.0 or higher
    const isGradeValid = grade >= 10 && grade <= 12;
    const isGPAValid = gpa >= 4.0;

    // The student must meet basic requirements AND have completed the basics
    if (isGradeValid && isGPAValid && completedBasics) {

        // --- STEP 4: BEHAVIOR SCORE CHALLENGE ---
        // Even if eligible, if their behavior score is below 70,
        // they get limited "Probationary" access instead of full access.
        if (behaviorScore < 70) {
            return "PROBATIONARY_ACCESS";
        }

        // Fully eligible
        return true;
    }

    // --- STEP 5: DEFAULT REJECTION ---
    // If they don't meet the grade/GPA requirements or missed basics without a 5.0 GPA
    return false;
}

// --- EXAMPLE USAGE ---
console.log(isLabEligible({ grade: 11, gpa: 4.5, behaviorScore: 65, completedBasics: true }));
console.log(isLabEligible({ grade: 12, gpa: 5.0, behaviorScore: 90, completedBasics: false }));
console.log(isLabEligible({ grade: 10, gpa: 4.2, behaviorScore: 85, completedBasics: true }));
console.log(isLabEligible({ grade: 10, gpa: 3.5, behaviorScore: 90, completedBasics: true }));