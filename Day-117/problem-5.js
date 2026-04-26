// 🧩 PROBLEM–05: validateStaircase()

// Logic: This function uses "Blondel's Law" for staircase safety. It checks two things: first, that the riser height isn't too steep for a human leg, and second, that the combination of two risers and one tread fits a comfortable walking stride (24-25 inches).

function validateStaircase(riser, tread) {

    // --- STEP 1: VALIDATION ---
    if (typeof riser !== 'number' || typeof tread !== 'number' || riser <= 0 || tread <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SAFETY LOGIC ---
    // Rule 1: Riser check (Max 7 inches for safety)
    if (riser > 7) return "TOO_STEEP";

    // Rule 2: Formula check (2 * Riser + Tread)
    const safetyScore = (2 * riser) + tread;

    // --- STEP 3: RETURN RESULT ---
    if (safetyScore >= 24 && safetyScore <= 25) {
        return "SAFE";
    } else {
        return "UNSAFE";
    }
}

// Example Usage:
console.log(validateStaircase(7, 10));
console.log(validateStaircase(8, 10));
console.log(validateStaircase(6, 10));