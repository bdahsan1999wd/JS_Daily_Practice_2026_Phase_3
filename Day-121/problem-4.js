// 🧩 PROBLEM–04: verifyExcavationSafety()

// Logic: Different soil types have different cohesive strengths. This function implements a lookup logic to determine if a trench is deep enough to require structural shoring (reinforcement) to prevent cave-ins, ensuring the safety of the workers inside the pit.

function verifyExcavationSafety(depth, soilType) {

    // --- STEP 1: VALIDATION ---
    if (typeof depth !== 'number' || depth <= 0) return "Invalid Input";

    // --- STEP 2: SAFETY LIMITS ---
    const safetyLimits = {
        "Sandy": 5,
        "Clay": 8,
        "Rocky": 15
    };

    const limit = safetyLimits[soilType];

    // Check for valid soil type
    if (limit === undefined) {
        return "Invalid Soil Type";
    }

    // --- STEP 3: COMPARISON ---
    return depth > limit ? "SHORING_REQUIRED" : "SAFE_TO_DIG";
}

// Example Usage:
console.log(verifyExcavationSafety(7, "Sandy"));
console.log(verifyExcavationSafety(7, "Clay"));