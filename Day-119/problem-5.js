// 🧩 PROBLEM–05: validateLateralDrift()

// Logic: "Drift" measures the relative displacement between floors. If a building sways too much, the windows will shatter and the non-structural walls will collapse. This function checks if the measured displacement exceeds the safety threshold of 0.5% of the story height.

function validateLateralDrift(storyHeight, lateralDisplacement) {

    // --- STEP 1: VALIDATION ---
    if (typeof storyHeight !== 'number' || typeof lateralDisplacement !== 'number' || storyHeight <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: LIMIT CALCULATION ---
    const allowedLimit = storyHeight * 0.005;

    // --- STEP 3: RETURN RESULT ---
    if (lateralDisplacement <= allowedLimit) {
        return "STABLE";
    } else {
        // Round the actual displacement to 3 decimal places for the warning
        return `UNSAFE: ${lateralDisplacement.toFixed(3)}`;
    }
}

// Example Usage:
console.log(validateLateralDrift(120, 0.4));
console.log(validateLateralDrift(120, 0.8));