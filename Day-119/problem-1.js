// 🧩 PROBLEM–01: validateShearWallRatio()

// Logic: This function evaluates the safety of a building's lateral load-resisting system. It calculates the percentage of the floor area occupied by shear walls. A higher percentage (1.5%+) ensures the building can withstand the "shear" forces exerted by an earthquake.

function validateShearWallRatio(totalFloorArea, shearWallArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalFloorArea !== 'number' || typeof shearWallArea !== 'number' || totalFloorArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATIO CALCULATION ---
    const ratio = (shearWallArea / totalFloorArea) * 100;

    // --- STEP 3: CATEGORIZATION ---
    if (ratio >= 1.5) {
        return "SAFE";
    } else if (ratio >= 1.0) {
        return "MARGINAL";
    } else {
        return "VULNERABLE";
    }
}

// Example Usage:
console.log(validateShearWallRatio(1800, 30));
console.log(validateShearWallRatio(1800, 15));