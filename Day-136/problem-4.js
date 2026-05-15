// 🧩 PROBLEM–04: canPullWire()

// Logic: Every bend adds friction. Too many bends will damage the wire insulation during pulling, potentially causing short circuits later.

function canPullWire(totalBends, conduitLengthFT) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBends !== 'number' || typeof conduitLengthFT !== 'number') return "Invalid Input";
    if (totalBends < 0 || conduitLengthFT <= 0) return "Invalid Input";

    // --- STEP 2: DETERMINE DEGREE LIMIT ---
    const degreeLimit = conduitLengthFT > 50 ? 270 : 360;

    // --- STEP 3: CALCULATE TOTAL DEGREES ---
    const totalDegrees = totalBends * 90;

    return totalDegrees <= degreeLimit;
}

// --- EXAMPLE USAGE ---
console.log(canPullWire(4, 30));
console.log(canPullWire(4, 60));