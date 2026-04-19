// 🧩 PROBLEM–04: canRetakeExam()

// Logic: Check retake eligibility based on score and attendance, excluding final exams unless attendance is perfect.

function canRetakeExam(originalScore, attendancePct, hasFinalExam) {

    // --- STEP 1: VALIDATION ---
    if (typeof originalScore !== 'number' || typeof attendancePct !== 'number' ||
        typeof hasFinalExam !== 'boolean' || attendancePct < 0 || attendancePct > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: FINAL EXAM EXCLUSION ---
    if (hasFinalExam) return false;

    // --- STEP 3: ELIGIBILITY LOGIC ---
    if (attendancePct === 100 && originalScore < 50) {
        return true;
    } else if (attendancePct >= 80 && originalScore < 40) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(canRetakeExam(35, 85, false));
console.log(canRetakeExam(45, 100, false));
console.log(canRetakeExam(35, 85, true));