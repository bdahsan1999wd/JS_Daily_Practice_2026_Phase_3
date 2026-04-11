// 🧩 PROBLEM–03: canGenerateAdmitCard()

// Logic: Validate exam eligibility based on attendance, fees, and discipline.

function canGenerateAdmitCard(attendancePct, isFeesPaid, hasDisciplinaryIssue) {

    // --- STEP 1: VALIDATION ---
    if (typeof attendancePct !== 'number' || attendancePct < 0 || attendancePct > 100 ||
        typeof isFeesPaid !== 'boolean' || typeof hasDisciplinaryIssue !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: ELIGIBILITY CHECK ---
    if (hasDisciplinaryIssue) return false;

    if (attendancePct >= 75 && isFeesPaid) {
        return true;
    } else if (attendancePct >= 60 && attendancePct < 75 && isFeesPaid) {
        // --- STEP 3: PROVISIONAL APPROVAL ---
        return "PROVISIONAL_APPROVAL";
    } else {
        return false;
    }
}

// --- EXAMPLE USAGE ---
console.log(canGenerateAdmitCard(80, true, false));
console.log(canGenerateAdmitCard(65, true, false));
console.log(canGenerateAdmitCard(80, true, true));