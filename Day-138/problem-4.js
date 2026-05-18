// 🧩 PROBLEM–04: shouldCutGroove()

// Logic: To stop cracks from spreading across a large facade, v-joint grooves are cut at specific intervals. A groove is needed if the wall is too wide (over 15 ft), OR if the height sits exactly at a floor-level boundary (every 10 ft). Either condition alone is enough to trigger a cut.

function shouldCutGroove(wallWidthFT, wallHeightFT) {

    // --- STEP 1: VALIDATION ---
    if (
        typeof wallWidthFT !== 'number' || wallWidthFT <= 0 ||
        typeof wallHeightFT !== 'number' || wallHeightFT <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: WIDTH RULE ---
    // A groove is required if the wall width exceeds 15 feet.
    const widthRule = wallWidthFT > 15;

    // --- STEP 3: HEIGHT RULE ---
    // A groove is required at every floor boundary (exact multiples of 10 ft).
    const heightRule = wallHeightFT % 10 === 0;

    // --- STEP 4: RETURN RESULT ---
    // true if EITHER rule triggers; false only if both rules are inactive.
    return widthRule || heightRule;
}

// --- EXAMPLE USAGE ---
console.log(shouldCutGroove(20, 10));
console.log(shouldCutGroove(12, 8));
console.log(shouldCutGroove(12, 20));
console.log(shouldCutGroove(0, 10));