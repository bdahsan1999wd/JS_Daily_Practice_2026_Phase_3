// 🧩 PROBLEM–04: checkHeadroom()

// Logic: Headroom is the vertical distance between a step and the slab above. A minimum of 7 feet (84 inches) is standard for safety and comfort.

function checkHeadroom(verticalGapInches) {

    // --- STEP 1: VALIDATION ---
    if (typeof verticalGapInches !== 'number' || verticalGapInches <= 0) return "Invalid Input";

    // --- STEP 2: SAFETY AUDIT ---
    if (verticalGapInches >= 84) {
        return "SAFE";
    } else if (verticalGapInches >= 80) {
        return "CAUTION: LOW_HEADROOM";
    } else {
        return "CRITICAL: RECONSTRUCT";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkHeadroom(85));
console.log(checkHeadroom(78));