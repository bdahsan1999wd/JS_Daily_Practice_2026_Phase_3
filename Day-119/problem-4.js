// 🧩 PROBLEM–04: calculateRebarPercentage()

// Logic: Balance is key in RC (Reinforced Concrete) design. Too little steel leads to "Under-reinforced" brittle failure; too much steel makes the concrete "Congested," making it impossible to pour correctly. This function calculates the ratio and ensures it falls within the code-mandated 1-4% range.

function calculateRebarPercentage(concreteArea, steelArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof concreteArea !== 'number' || typeof steelArea !== 'number' || concreteArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    const percentage = (steelArea / concreteArea) * 100;

    // --- STEP 3: CATEGORIZATION ---
    if (percentage >= 1 && percentage <= 4) {
        return "COMPLIANT";
    } else if (percentage < 1) {
        return "UNDER-REINFORCED";
    } else {
        return "CONGESTED";
    }
}

// Example Usage:
console.log(calculateRebarPercentage(400, 8));
console.log(calculateRebarPercentage(400, 20));