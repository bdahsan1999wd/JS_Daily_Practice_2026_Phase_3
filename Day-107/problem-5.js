// 🧩 PROBLEM–05: getSportsAward()

// Logic: Assign trophies based on position and append a bonus tag for new records.

function getSportsAward(position, isNewRecord) {

    // --- STEP 1: VALIDATION ---
    if (typeof position !== 'number' || position < 1 || typeof isNewRecord !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: BASE AWARD ALLOCATION ---
    let award = "";
    if (position === 1) {
        award = "GOLD";
    } else if (position === 2) {
        award = "SILVER";
    } else if (position === 3) {
        award = "BRONZE";
    } else {
        award = "PARTICIPATION_CERTIFICATE";
    }

    // --- STEP 3: RECORD BREAKER CHALLENGE ---
    if (isNewRecord) {
        // According to the rules, even Participation can get a bonus if a record is broken
        return `${award} + RECORD_BREAKER_BONUS`;
    }

    return award;
}

// --- EXAMPLE USAGE ---
console.log(getSportsAward(1, true));
console.log(getSportsAward(5, false));