// 🧩 PROBLEM–03: calculateWaterVolume()

// Logic: To maintain a constant water level, we must replace the amount lost to evaporation. This ensures the chemical process of strength gain (hydration) is never interrupted.

function calculateWaterVolume(slabAreaSqFt, evaporationRate) {

    // --- STEP 1: VALIDATION ---
    if (typeof slabAreaSqFt !== 'number' || typeof evaporationRate !== 'number') {
        return "Invalid Input";
    }
    if (slabAreaSqFt <= 0 || evaporationRate < 0) return "Invalid Input";

    // --- STEP 2: CALCULATE VOLUME IN CUBIC FEET ---
    // Formula: Area * Height (Evaporation Rate converted to feet)
    const volumeCFT = slabAreaSqFt * (evaporationRate / 12);

    // --- STEP 3: CONVERT TO LITERS AND ADD LEAKAGE BUFFER ---
    // 1 CFT = 28.317 Liters | Adding 15% for boundary leaks
    const totalLiters = (volumeCFT * 28.317) * 1.15;

    return Number(totalLiters.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateWaterVolume(1800, 0.5));