// 🧩 PROBLEM–05: calculateMortarMaterials()

// Logic: Dry mortar volume is always higher than wet volume because water fills the gaps between sand particles. Sum of parts for a 1:4 mix is 5 (1 cement + 4 sand).

function calculateMortarMaterials(totalMortarCFT, ratioParts) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalMortarCFT !== 'number' || typeof ratioParts !== 'number') return "Invalid Input";
    if (totalMortarCFT <= 0 || ratioParts <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE DRY VOLUME ---
    const dryVolume = totalMortarCFT * 1.33;
    const sumOfParts = 1 + ratioParts;

    // --- STEP 3: MATERIAL CALCULATION ---
    const cementCFT = (dryVolume / sumOfParts) * 1;
    const sandCFT = (dryVolume / sumOfParts) * ratioParts;

    // Convert Cement CFT to Bags (1 bag = 1.25 CFT)
    const cementBags = cementCFT / 1.25;

    return {
        cementBags: Number(cementBags.toFixed(2)),
        sandCFT: Number(sandCFT.toFixed(2))
    };
}

// --- EXAMPLE USAGE ---
console.log(calculateMortarMaterials(100, 4));