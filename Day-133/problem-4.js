// 🧩 PROBLEM–04: checkOverturningFactor()

// Logic: A cantilever acts like a lever. The weight of the wall acting downwards must be significantly higher than the weight of the sunshade trying to pull it down. This provides a Factor of Safety (FoS).

function checkOverturningFactor(restrainingWeight, sunshadeWeight) {

    // --- STEP 1: VALIDATION ---
    if (typeof restrainingWeight !== 'number' || typeof sunshadeWeight !== 'number') {
        return "Invalid Input";
    }
    if (restrainingWeight <= 0 || sunshadeWeight <= 0) return "Invalid Input";

    // --- STEP 2: SAFETY FACTOR CALCULATION ---
    // Standard FoS requirement: Restraining weight >= 1.5 * Overturning weight
    return restrainingWeight >= (sunshadeWeight * 1.5);
}

// --- EXAMPLE USAGE ---
console.log(checkOverturningFactor(500, 300));
console.log(checkOverturningFactor(400, 300));