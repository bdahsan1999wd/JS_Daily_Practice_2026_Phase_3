// 🧩 PROBLEM–03: calculatePlasterMaterials()

// Logic: For internal plastering, 1:6 (Cement:Sand) is the standard. We divide the total dry volume by the sum of parts to find individual quantities.

function calculatePlasterMaterials(dryVolumeCFT) {

    // --- STEP 1: VALIDATION ---
    if (typeof dryVolumeCFT !== 'number' || dryVolumeCFT <= 0) return "Invalid Input";

    // --- STEP 2: SUM OF PARTS ---
    const ratioSum = 1 + 6;

    // --- STEP 3: MATERIAL CALCULATION ---
    const cementCFT = dryVolumeCFT / ratioSum;
    const cementBags = cementCFT / 1.25; // 1 Bag = 1.25 CFT
    const sandCFT = (dryVolumeCFT / ratioSum) * 6;

    return {
        cement: Number(cementBags.toFixed(2)),
        sand: Math.round(sandCFT)
    };
}

// --- EXAMPLE USAGE ---
console.log(calculatePlasterMaterials(50));