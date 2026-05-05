// 🧩 PROBLEM–05: canRemoveShuttering()

// Logic: Removing column shuttering (stripping) too early is dangerous. Concrete needs at least 24 hours to gain self-supporting strength. Cold weather slows the chemical reaction (hydration), requiring an extra 12 hours.

function canRemoveShuttering(hoursSincePour, avgTemperature) {

    // --- STEP 1: VALIDATION ---
    if (typeof hoursSincePour !== 'number' || typeof avgTemperature !== 'number') {
        return "Invalid Input";
    }
    if (hoursSincePour < 0) return "Invalid Input";

    // --- STEP 2: DETERMINE REQUIRED TIME ---
    let requiredTime = 24;

    // Cold weather rule: Below 15°C concrete sets slower
    if (avgTemperature < 15) {
        requiredTime += 12; // Total 36 hours
    }

    // --- STEP 3: DECISION ---
    return hoursSincePour >= requiredTime;
}

// --- EXAMPLE USAGE ---
console.log(canRemoveShuttering(30, 25));
console.log(canRemoveShuttering(30, 10));