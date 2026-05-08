// 🧩 PROBLEM–05: checkPropLoadCapacity()

// Logic: Concrete is extremely heavy (150 lbs per cubic foot). This function ensures that the weight falling on a single prop does not exceed its structural safety limit. Safety Rule: Load must be <= 90% of the prop's maximum capacity.

function checkPropLoadCapacity(slabThicknessInch, areaPerProp, propLimitLbs) {

    // --- STEP 1: VALIDATION ---
    // All inputs must be positive numbers.
    if (
        typeof slabThicknessInch !== 'number' || slabThicknessInch <= 0 ||
        typeof areaPerProp !== 'number' || areaPerProp <= 0 ||
        typeof propLimitLbs !== 'number' || propLimitLbs <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE LOAD PER PROP ---
    // Formula: (Thickness in Feet) * (Area) * (Concrete Density)
    // divide thickness by 12 to convert Inches to Feet.
    let loadPerProp = (slabThicknessInch / 12) * areaPerProp * 150;

    // --- STEP 3: SAFETY AUDIT ---
    // Checking if the load is within 90% of the prop's limit.
    let safetyThreshold = propLimitLbs * 0.90;

    if (loadPerProp <= safetyThreshold) {
        return "SAFE";
    } else {
        return "DANGER: INCREASE_PROPS";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkPropLoadCapacity(5, 9, 1000));
console.log(checkPropLoadCapacity(12, 12, 1200));