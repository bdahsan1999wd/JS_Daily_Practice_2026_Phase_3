// 🧩 PROBLEM–02: canSubstitute()

// Logic: Determine substitution eligibility based on department matching and workload limits.

function canSubstitute(deptMatch, currentPeriods) {

    // --- STEP 1: VALIDATION ---
    if (typeof deptMatch !== 'boolean' || typeof currentPeriods !== 'number' || currentPeriods < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ELIGIBILITY LOGIC ---
    if (deptMatch === true && currentPeriods < 6) {
        return true;
    } else if (deptMatch === false && currentPeriods <= 3) {
        // --- STEP 3: EMERGENCY CASE ---
        return "EMERGENCY_ONLY";
    } else {
        return false;
    }
}

// --- EXAMPLE USAGE ---
console.log(canSubstitute(true, 4));
console.log(canSubstitute(false, 2));