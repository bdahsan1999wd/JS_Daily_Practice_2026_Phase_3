// 🧩 PROBLEM–01: validateConcreteStrength()

// Logic: This function acts as a quality control auditor. It compares the measured strength of concrete (PSI) against the minimum required for specific building parts. It includes a "yellow flag" (RE-TEST) if the strength is slightly below the target (within 10%) but not low enough to be an immediate failure.

function validateConcreteStrength(element, measuredPSI) {

    // --- STEP 1: VALIDATION ---
    if (typeof element !== 'string' || typeof measuredPSI !== 'number' || measuredPSI <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE REQUIREMENTS ---
    const standards = {
        "Foundation": 4000,
        "Columns": 3500,
        "Slabs/Beams": 3000
    };

    const required = standards[element];
    if (!required) return "Invalid Input";

    // --- STEP 3: AUDIT LOGIC ---
    if (measuredPSI >= required) {
        return "PASS";
    }

    // Check if it's within 10% of the requirement
    const threshold = required - (required * 0.10);
    if (measuredPSI >= threshold) {
        return "RE-TEST";
    } else {
        return "FAIL";
    }
}

// Example Usage:
console.log(validateConcreteStrength("Foundation", 3900));
console.log(validateConcreteStrength("Columns", 3600));