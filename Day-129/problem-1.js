// 🧩 PROBLEM–01: calculateSlabRebarWeight()

// Logic: Steel bars are bought by weight (KG). 10mm bars are typically used for main/distribution reinforcement, and 12mm for beams or extra top bars. Standard unit weights are used to convert length to mass.

function calculateSlabRebarWeight(length10mm, length12mm) {

    // --- STEP 1: VALIDATION ---
    if (typeof length10mm !== 'number' || typeof length12mm !== 'number' || length10mm < 0 || length12mm < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE WEIGHTS (KG/M) ---
    // Standard Formula: (D^2 / 162.2)
    const weight10mm = length10mm * 0.617;
    const weight12mm = length12mm * 0.888;

    // --- STEP 3: APPLY WASTAGE FACTOR ---
    // Adding 5% for overlaps and cutting scraps
    const totalWeight = (weight10mm + weight12mm) * 1.05;

    return Number(totalWeight.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateSlabRebarWeight(1000, 500));