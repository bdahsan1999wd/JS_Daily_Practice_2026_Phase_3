// 🧩 PROBLEM–03: calculateWaterproofer()

// Logic: A liquid waterproofing compound is mixed into cement to prevent rain seepage. The dose is 200ml per bag normally, but increases by 25% during monsoon season. Only positive whole-number bag counts are valid.

function calculateWaterproofer(cementBags, isMonsoonSeason) {

    // --- STEP 1: VALIDATION ---
    // cementBags must be a positive integer; isMonsoonSeason must be boolean.
    if (
        typeof cementBags !== 'number' ||
        typeof isMonsoonSeason !== 'boolean' ||
        !Number.isInteger(cementBags) ||
        cementBags <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE DOSE PER BAG ---
    // Standard dose: 200ml. Monsoon dose: 200ml + 25% = 250ml per bag.
    const dosePerBag = isMonsoonSeason ? 250 : 200;

    // --- STEP 3: CALCULATE AND RETURN TOTAL ML ---
    return cementBags * dosePerBag;
}

// --- EXAMPLE USAGE ---
console.log(calculateWaterproofer(10, false));
console.log(calculateWaterproofer(10, true));
console.log(calculateWaterproofer(-3, false));
console.log(calculateWaterproofer(4.5, true));