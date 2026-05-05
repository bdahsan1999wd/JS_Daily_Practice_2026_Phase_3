// 🧩 PROBLEM–01: checkShutteringSafety()

// Logic: Tall columns face high hydrostatic pressure at the bottom during pouring. If the concrete is poured too fast (pourRate > 4), the weight of the fresh concrete increases the pressure significantly. This function ensures the shuttering supports don't burst.

function checkShutteringSafety(columnHeight, pourRate) {

    // --- STEP 1: VALIDATION ---
    if (typeof columnHeight !== 'number' || typeof pourRate !== 'number' || columnHeight <= 0 || pourRate <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE BASE PRESSURE ---
    let totalPressure = columnHeight * 150;

    // --- STEP 3: APPLY POUR RATE SURCHARGE ---
    // Fast pouring adds 25% extra pressure due to dynamic load
    if (pourRate > 4) {
        totalPressure *= 1.25;
    }

    // --- STEP 4: SAFETY AUDIT ---
    if (totalPressure <= 1500) {
        return "SAFE";
    } else if (totalPressure <= 2000) {
        return "REINFORCE_CLAMPS";
    } else {
        return "DANGEROUS_LIMIT";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkShutteringSafety(10, 3));
console.log(checkShutteringSafety(12, 5));