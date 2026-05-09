// 🧩 PROBLEM–03: calculateChairSpacers()

// Logic: Slab rebar has two layers (top and bottom). "Chairs" keep them separated so concrete can flow between them. Insufficient support leads to the steel sagging, which weakens the slab.

function calculateChairSpacers(slabAreaSqFt, spacingFT) {

    // --- STEP 1: VALIDATION ---
    if (typeof slabAreaSqFt !== 'number' || typeof spacingFT !== 'number' || slabAreaSqFt <= 0 || spacingFT <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DENSITY CHECK ---
    // Limit: 1 chair per 12 sq.ft. (Density = Area / (spacing * spacing))
    const densityArea = spacingFT * spacingFT;
    if (densityArea > 12) return "INSUFFICIENT_SUPPORT";

    // --- STEP 3: CALCULATION ---
    const totalChairs = slabAreaSqFt / densityArea;

    return Math.ceil(totalChairs);
}

// --- EXAMPLE USAGE ---
console.log(calculateChairSpacers(1800, 3));
console.log(calculateChairSpacers(1800, 4));