// 🧩 PROBLEM–04: checkThermalGradient()

// Logic: As concrete sets, it creates heat (exothermic reaction). If the core is too hot (over 70°C), it can cause chemical instability. If the gradient (difference) is too high, the concrete will expand internally while the surface shrinks, causing cracks.

function checkThermalGradient(coreTemp, surfaceTemp) {

    // --- STEP 1: VALIDATION ---
    if (typeof coreTemp !== 'number' || typeof surfaceTemp !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: CORE TEMPERATURE RULE ---
    // Risk of Delayed Ettringite Formation (DEF)
    if (coreTemp > 70) return false;

    // --- STEP 3: GRADIENT RULE ---
    const diff = Math.abs(coreTemp - surfaceTemp);
    return diff <= 19;
}

// --- EXAMPLE USAGE ---
console.log(checkThermalGradient(50, 35));
console.log(checkThermalGradient(72, 60));