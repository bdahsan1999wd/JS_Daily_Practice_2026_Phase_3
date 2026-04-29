// 🧩 PROBLEM–03: checkBuildingSymmetry()

// Logic: This function checks for "Eccentricity." If the center of mass (where the weight is) is far from the center of rigidity (where the strength is), the building will spin like a top during a quake. We calculate the absolute distance between these points and ensure it stays within 15% of the total width.

function checkBuildingSymmetry(centerOfMass, centerOfRigidity, buildingWidth) {

    // --- STEP 1: VALIDATION ---
    if (typeof centerOfMass !== 'number' || typeof centerOfRigidity !== 'number' || typeof buildingWidth !== 'number') {
        return "Invalid Input";
    }
    if (buildingWidth <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE ECCENTRICITY ---
    const eccentricity = Math.abs(centerOfMass - centerOfRigidity);
    const allowance = buildingWidth * 0.15;

    // --- STEP 3: RETURN RESULT ---
    return eccentricity <= allowance;
}

// Example Usage:
console.log(checkBuildingSymmetry(45, 50, 100));
console.log(checkBuildingSymmetry(30, 50, 100));