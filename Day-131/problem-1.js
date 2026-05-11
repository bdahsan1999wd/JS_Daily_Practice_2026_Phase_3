// 🧩 PROBLEM–01: checkCuringPonding()

// Logic: "Ponding" keeps the slab submerged in water to ensure continuous hydration. On sunny days, evaporation is high, so we maintain a deeper water level to prevent the concrete surface from drying out and cracking.

function checkCuringPonding(measuredDepthInch, isSunny) {

    // --- STEP 1: VALIDATION ---
    if (typeof measuredDepthInch !== 'number' || typeof isSunny !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE MINIMUM REQUIREMENT ---
    const minRequired = isSunny ? 3 : 2;

    // --- STEP 3: AUDIT DEPTH ---
    if (measuredDepthInch >= minRequired) {
        return "STABLE";
    } else if (measuredDepthInch > 0) {
        return "REFILL_REQUIRED";
    } else {
        return "CRITICAL: DRY_SLAB";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkCuringPonding(2.5, true));
console.log(checkCuringPonding(2.5, false));