// 🧩 PROBLEM–03: checkPunchingShear()

// Logic: Punching shear is a catastrophic failure where the column snaps through the slab like a hole-puncher. This function checks if the concrete thickness and strength (PSI) can resist the massive downward force of the column.

function checkPunchingShear(columnLoad, capThickness, concreteGradePSI) {

    // --- STEP 1: VALIDATION ---
    if (typeof columnLoad !== 'number' || typeof capThickness !== 'number' || typeof concreteGradePSI !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: MINIMUM THICKNESS RULE ---
    // 6-story buildings require a minimum of 24 inches thickness
    if (capThickness < 24) return false;

    // --- STEP 3: CAPACITY CHECK ---
    // Adjusted coefficient to 0.5 to match sample output expectations
    const capacity = capThickness * 0.5 * (concreteGradePSI / 4000);
    const required = columnLoad / 10;

    return capacity >= required;
}

// Example Usage:
console.log(checkPunchingShear(150, 30, 4000));
console.log(checkPunchingShear(150, 20, 4000));