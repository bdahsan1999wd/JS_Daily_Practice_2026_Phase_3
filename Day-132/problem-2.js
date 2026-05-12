// 🧩 PROBLEM–02: calculateWaistSlabLength()

// Logic: The waist slab length is the hypotenuse of the triangle formed by the horizontal run and vertical height of one flight. We add "Development Length" (Ld) to ensure the rebar is properly anchored into the floor and landing beams.

function calculateWaistSlabLength(horizontalRunFT, flightHeightFT) {

    // --- STEP 1: VALIDATION ---
    if (typeof horizontalRunFT !== 'number' || typeof flightHeightFT !== 'number') return "Invalid Input";
    if (horizontalRunFT <= 0 || flightHeightFT <= 0) return "Invalid Input";

    // --- STEP 2: PYTHAGOREAN THEOREM ---
    const inclinedLength = Math.sqrt(Math.pow(horizontalRunFT, 2) + Math.pow(flightHeightFT, 2));

    // --- STEP 3: ADD ANCHORAGE/DEVELOPMENT LENGTH ---
    const totalLength = inclinedLength + 1.5;

    return Number(totalLength.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateWaistSlabLength(8, 5));