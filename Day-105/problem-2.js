// 🧩 PROBLEM–02: getEventAccess()

// Logic: Determine event access based on grade level, with a special condition for Grade 12.

function getEventAccess(classLevel, hasPaidFee) {

    // --- STEP 1: VALIDATION ---
    if (typeof classLevel !== 'number' || classLevel < 6 || classLevel > 12 || typeof hasPaidFee !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: FEE CHECK ---
    if (!hasPaidFee) return "PAYMENT_REQUIRED";

    // --- STEP 3: ACCESS LOGIC ---
    if (classLevel === 12) {
        return "Grand Ball & Farewell Dinner";
    } else if (classLevel >= 11) {
        return "Grand Ball";
    } else if (classLevel >= 9) {
        return "Senior Night";
    } else if (classLevel >= 6) {
        return "Junior Gala";
    }
}

// --- EXAMPLE USAGE ---
console.log(getEventAccess(10, true));
console.log(getEventAccess(12, true));