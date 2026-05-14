// 🧩 PROBLEM–04: estimateBricks()

// Logic: In construction, we estimate bricks based on volume. A standard 10" or 5" wall consumes roughly 12 bricks per cubic foot when accounting for mortar joints.

function estimateBricks(wallLengthFT, wallHeightFT, wallThicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof wallLengthFT !== 'number' || typeof wallHeightFT !== 'number' || typeof wallThicknessInch !== 'number') {
        return "Invalid Input";
    }
    if (wallLengthFT <= 0 || wallHeightFT <= 0 || wallThicknessInch <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE VOLUME ---
    const volumeCFT = wallLengthFT * wallHeightFT * (wallThicknessInch / 12);

    // --- STEP 3: BRICK COUNT WITH WASTAGE ---
    const baseBricks = volumeCFT * 12;
    const totalBricks = baseBricks * 1.07; // 7% wastage

    return Math.ceil(totalBricks);
}

// --- EXAMPLE USAGE ---
console.log(estimateBricks(10, 10, 5));