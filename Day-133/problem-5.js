// 🧩 PROBLEM–05: shouldIntegrateWithBeam()

// Logic: If the gap between a window top and the floor beam is too small, a separate lintel creates a weak "joint" in the brickwork. It is better to extend the beam down (Hidden Lintel) for better structural integrity.

function shouldIntegrateWithBeam(gapBetweenWindowAndBeamInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof gapBetweenWindowAndBeamInch !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: FLUSH CHECK ---
    if (gapBetweenWindowAndBeamInch <= 0) {
        return "FLUSH_DESIGN";
    }

    // --- STEP 3: INTEGRATION AUDIT ---
    // If the gap is 6 inches or less, integrate with the beam
    if (gapBetweenWindowAndBeamInch <= 6) {
        return "INTEGRATE_WITH_BEAM";
    } else {
        return "CAST_INDEPENDENT_LINTEL";
    }
}

// --- EXAMPLE USAGE ---
console.log(shouldIntegrateWithBeam(4));
console.log(shouldIntegrateWithBeam(12));