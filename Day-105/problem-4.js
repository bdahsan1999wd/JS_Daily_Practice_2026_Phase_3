// 🧩 PROBLEM–04: canParticipateInRaffle()

// Logic: Check eligibility based on age and gear, with a special bypass for "Green House".

function canParticipateInRaffle(age, houseName, hasSportsGear) {

    // --- STEP 1: VALIDATION ---
    if (typeof age !== 'number' || age < 0 || typeof houseName !== 'string' || typeof hasSportsGear !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: SPORTS GEAR CHECK ---
    if (!hasSportsGear) return false;

    // --- STEP 3: ELIGIBILITY LOGIC ---
    const lowerHouse = houseName.toLowerCase();

    if (lowerHouse === "green house") {
        return true; // Special House Bypass
    } else {
        return age >= 12;
    }
}

// --- EXAMPLE USAGE ---
console.log(canParticipateInRaffle(10, "Green House", true));
console.log(canParticipateInRaffle(10, "Blue House", true));