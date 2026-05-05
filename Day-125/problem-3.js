// 🧩 PROBLEM–03: calculateSlabConcrete()

// Logic: To calculate the concrete volume of the ground slab, we convert the thickness to feet and multiply it by the area. A 5% wastage factor is added to account for uneven soil levels or leakage.

function calculateSlabConcrete(areaSqFt, thicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof areaSqFt !== 'number' || typeof thicknessInch !== 'number' || areaSqFt <= 0 || thicknessInch <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONVERT UNITS & CALCULATE VOLUME ---
    const thicknessInFeet = thicknessInch / 12;
    const baseVolume = areaSqFt * thicknessInFeet;

    // --- STEP 3: APPLY WASTAGE FACTOR ---
    const totalVolume = baseVolume * 1.05; // 5% extra

    // Return final volume rounded to 2 decimal places
    return Number(totalVolume.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateSlabConcrete(1800, 5));