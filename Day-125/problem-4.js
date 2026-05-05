// 🧩 PROBLEM–04: checkSlabSteelDensity()

// Logic: Steel density determines the structural strength of a slab. This function audits the weight of steel used per square foot to ensure it meets the optimal engineering standards (2kg to 3kg per sq.ft).

function checkSlabSteelDensity(totalSteelKG, slabAreaSqFt) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalSteelKG !== 'number' || typeof slabAreaSqFt !== 'number' || totalSteelKG <= 0 || slabAreaSqFt <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE DENSITY ---
    const density = totalSteelKG / slabAreaSqFt;

    // --- STEP 3: CATEGORIZATION ---
    if (density >= 2 && density <= 3) {
        return "OPTIMAL";
    } else if (density < 2) {
        return "WEAK";
    } else {
        return "OVER_REINFORCED";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkSlabSteelDensity(4500, 1800));
console.log(checkSlabSteelDensity(3000, 1800));