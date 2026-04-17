// 🧩 PROBLEM–04: isExamConflict()

// Logic: Compare two date strings to detect if they occur on the same day.

function isExamConflict(exam1Date, exam2Date) {

    // --- STEP 1: VALIDATION ---
    if (typeof exam1Date !== 'string' || typeof exam2Date !== 'string' ||
        exam1Date.trim() === "" || exam2Date.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: CONFLICT LOGIC ---
    return exam1Date === exam2Date;
}

// --- EXAMPLE USAGE ---
console.log(isExamConflict("2026-05-15", "2026-05-15"));
console.log(isExamConflict("2026-05-15", "2026-05-16"));