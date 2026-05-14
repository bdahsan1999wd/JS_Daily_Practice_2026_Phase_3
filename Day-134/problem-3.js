// 🧩 PROBLEM–03: calculateSocketHeight()

// Logic: Electrical conduits are laid on the raw slab. We must add the floor finish thickness to the target height to ensure the socket ends up at the correct height after tiling.

function calculateSocketHeight(targetHeightFromFFL, floorFinishThickness) {

    // --- STEP 1: VALIDATION ---
    if (typeof targetHeightFromFFL !== 'number' || typeof floorFinishThickness !== 'number') return "Invalid Input";

    // --- STEP 2: BASE CALCULATION ---
    let totalHeight = targetHeightFromFFL + floorFinishThickness;

    // --- STEP 3: SMART HOME LOW-PROFILE LOGIC ---
    if (targetHeightFromFFL === 12) {
        totalHeight -= 0.5;
    }

    return Number(totalHeight.toFixed(1));
}

// --- EXAMPLE USAGE ---
console.log(calculateSocketHeight(18, 2.5));
console.log(calculateSocketHeight(12, 3));