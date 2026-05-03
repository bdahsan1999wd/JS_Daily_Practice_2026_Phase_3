// 🧩 PROBLEM–04: validateColumnOrientation()

// Logic: Rectangular columns resist forces better along their "Strong Axis." This function ensures the column's physical placement (width vs depth) matches the engineer's plan (X or Y axis) to resist wind and quakes.

function validateColumnOrientation(column) {

    // --- STEP 1: VALIDATION ---
    // Checking if input is a valid object and properties exist
    if (!column || typeof column !== 'object' || Array.isArray(column)) return "Invalid Input";

    const { width, depth, axis } = column;
    if (typeof width !== 'number' || typeof depth !== 'number' || typeof axis !== 'string' || width <= 0 || depth <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE CORRECT AXIS ---
    let expectedAxis;
    if (width > depth) {
        expectedAxis = "X";
    } else if (depth > width) {
        expectedAxis = "Y";
    } else {
        // Square columns are balanced, so any axis provided is valid
        return "MATCHED";
    }

    // --- STEP 3: COMPARE WITH PROVIDED DATA ---
    return axis.toUpperCase() === expectedAxis ? "MATCHED" : "MISALIGNED";
}

// --- EXAMPLE USAGE ---
console.log(validateColumnOrientation({ id: 1, width: 20, depth: 12, axis: "X" }));
console.log(validateColumnOrientation({ id: 2, width: 12, depth: 20, axis: "X" }));