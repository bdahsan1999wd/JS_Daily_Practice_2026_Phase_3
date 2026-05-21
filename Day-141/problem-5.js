// 🧩 PROBLEM–05: auditWallBrightness()

// Logic: Categorize paint reflectance values and provide energy-efficiency feedback or glare warnings based on standard LRV thresholds.

function auditWallBrightness(colorLRV) {

    // --- STEP 1: RANGE VALIDATION ---
    if (typeof colorLRV !== 'number' || colorLRV < 0 || colorLRV > 100) {
        return "Invalid LRV";
    }

    // --- STEP 2: CATEGORIZATION ---
    if (colorLRV >= 0 && colorLRV <= 40) {
        return "DARK_ACCENT";
    } else if (colorLRV >= 41 && colorLRV <= 70) {
        return "BALANCED_TONE";
    } else {
        // Range 71 - 100 is Energy Efficient
        if (colorLRV > 90) {
            return "SURFACE_GLARE_WARNING";
        }
        return "ENERGY_EFFICIENT";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditWallBrightness(75));
console.log(auditWallBrightness(95));