// 🧩 PROBLEM–02: isEligibleForFreeLunch()

// Logic: Check eligibility based on income threshold ($1500) or mandatory special status approval.

function isEligibleForFreeLunch(familyIncome, hasSpecialStatus) {

    // --- STEP 1: VALIDATION ---
    if (typeof familyIncome !== 'number' || familyIncome < 0 || typeof hasSpecialStatus !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: ELIGIBILITY LOGIC ---
    if (hasSpecialStatus === true || familyIncome < 1500) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(isEligibleForFreeLunch(2000, true));
console.log(isEligibleForFreeLunch(1800, false));