// 🧩 PROBLEM–04: calculateOilRequired()

// Logic: Shuttering oil creates a barrier between the concrete and plywood. Without it, the concrete will tear the plywood when the formwork is removed. Large areas require extra oil for the vertical sides of the beams.

function calculateOilRequired(shutteringArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof shutteringArea !== 'number' || shutteringArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE CALCULATION ---
    // 1 Liter covers 250 sq.ft
    let liters = shutteringArea / 250;

    // --- STEP 3: EXTRA FOR LARGE AREAS ---
    // Adding 10% extra for beam drops and side surfaces if area > 1000
    if (shutteringArea > 1000) {
        liters = liters * 1.10;
    }

    return Number(liters.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateOilRequired(500));
console.log(calculateOilRequired(1800));