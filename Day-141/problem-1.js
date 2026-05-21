// 🧩 PROBLEM–01: calculatePuttyBags()

// Logic: Determine the coverage factor based on coat type, calculate total KG needed for the area, check against commercial scale limits, and return total 40KG bags.

function calculatePuttyBags(wallAreaSqFt, isDoubleCoat) {

    // --- STEP 1: VALIDATION ---
    if (typeof wallAreaSqFt !== 'number' || typeof isDoubleCoat !== 'boolean' || wallAreaSqFt <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SCALE CHALLENGE ---
    if (wallAreaSqFt > 5000) {
        return "COMMERCIAL_SCALE_DETECTED";
    }

    // --- STEP 3: CALCULATION ---
    // Double coat uses 1kg for 6 sq.ft; Single uses 1kg for 10 sq.ft
    const coveragePerKg = isDoubleCoat ? 6 : 10;
    const totalKgNeeded = wallAreaSqFt / coveragePerKg;

    // --- STEP 4: BAG ROUNDING (40KG per bag) ---
    const totalBags = Math.ceil(totalKgNeeded / 40);

    return totalBags;
}

// --- EXAMPLE USAGE ---
console.log(calculatePuttyBags(1200, true));
console.log(calculatePuttyBags(6000, false));