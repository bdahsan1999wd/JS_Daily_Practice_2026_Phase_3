// 🧩 PROBLEM–02: validateDPC()

// Logic: Damp Proof Course (DPC) acts as a vertical barrier. Without a proper DPC and Bitumen coating, the walls will eventually suffer from dampness and paint peeling.

function validateDPC(thicknessMM, hasBitumenCoating) {

    // --- STEP 1: VALIDATION ---
    if (typeof thicknessMM !== 'number' || typeof hasBitumenCoating !== 'boolean') return "Invalid Input";

    // Immediate rejection if critically thin
    if (thicknessMM < 25) return false;

    // --- STEP 2: SAFETY CHECK ---
    const isThickEnough = thicknessMM >= 37.5;

    return isThickEnough && hasBitumenCoating;
}

// --- EXAMPLE USAGE ---
console.log(validateDPC(40, true));
console.log(validateDPC(40, false));