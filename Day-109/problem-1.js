// 🧩 PROBLEM–01: checkLabSafety()

// Logic: Verify safety gear in order; return success if all present, else name the first missing item.

function checkLabSafety(hasGoggles, hasLabCoat, hasGloves) {

    // --- STEP 1: VALIDATION ---
    if (typeof hasGoggles !== 'boolean' || typeof hasLabCoat !== 'boolean' || typeof hasGloves !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: SAFETY GEAR CHECK (ORDER MATTERS) ---
    if (!hasGoggles) {
        return "SAFETY_VIOLATION: GOGGLES_MISSING";
    }
    if (!hasLabCoat) {
        return "SAFETY_VIOLATION: LABCOAT_MISSING";
    }
    if (!hasGloves) {
        return "SAFETY_VIOLATION: GLOVES_MISSING";
    }

    // --- STEP 3: ALL CLEAR ---
    return "READY_FOR_EXPERIMENT";
}

// --- EXAMPLE USAGE ---
console.log(checkLabSafety(true, false, true));
console.log(checkLabSafety(true, true, true));