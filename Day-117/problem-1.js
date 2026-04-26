// 🧩 PROBLEM–01: auditSetbackCompliance()

// Logic: This function checks if a building design leaves enough open space from the boundary lines based on local regulations. It compares input values against specific minimums and builds a list of specific failures if any requirements are not met.

function auditSetbackCompliance(actualSetbacks) {

    // --- STEP 1: VALIDATION ---
    if (!actualSetbacks || typeof actualSetbacks !== 'object' || Array.isArray(actualSetbacks)) {
        return "Invalid Input";
    }

    const { front, back, sides } = actualSetbacks;
    if (typeof front !== 'number' || typeof back !== 'number' || typeof sides !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE LIMITS & AUDIT ---
    const minimums = { front: 1.5, back: 1.0, sides: 1.0 };
    let failedSides = [];

    if (front < minimums.front) failedSides.push("front");
    if (back < minimums.back) failedSides.push("back");
    if (sides < minimums.sides) failedSides.push("sides");

    // --- STEP 3: RETURN RESULT ---
    if (failedSides.length === 0) {
        return "COMPLIANT";
    } else {
        return `NON-COMPLIANT: ${failedSides.join(", ")}`;
    }
}

// Example Usage:
console.log(auditSetbackCompliance({ front: 1.2, back: 1.1, sides: 1.0 }));