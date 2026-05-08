// 🧩 PROBLEM–03: calculateSlabCamber()

// Logic: To compensate for natural deflection (settling), we build the center of the slab slightly higher. Cantilevers (like balconies) are unsupported on one end, so they require twice the camber of a regular slab.

function calculateSlabCamber(spanLengthFT, isCantilever) {

    // --- STEP 1: VALIDATION ---
    if (typeof spanLengthFT !== 'number' || spanLengthFT <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE CAMBER ---
    let camber;
    if (isCantilever) {
        // Higher camber for cantilever due to high deflection risk
        camber = spanLengthFT / 25;
    } else {
        // Normal camber for standard span
        camber = spanLengthFT / 50;
    }

    return Number(camber.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateSlabCamber(20, false));
console.log(calculateSlabCamber(5, true));