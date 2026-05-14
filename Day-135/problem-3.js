// 🧩 PROBLEM–03: checkWallAlignment()

// Logic: A leaning wall is prone to buckling. This auditor checks if the vertical deviation is within the safety tolerance (1mm per 2ft).

function checkWallAlignment(wallHeightFT, deviationMM) {

    if (typeof wallHeightFT !== 'number' || typeof deviationMM !== 'number' || wallHeightFT <= 0 || deviationMM < 0) {
        return "Invalid Input";
    }

    const tolerance = wallHeightFT / 2;

    if (deviationMM <= tolerance) {
        return "PERFECT";
    } else if (deviationMM <= tolerance + 3) {
        return "MINOR_LEAN";
    } else {
        return "RECONSTRUCT";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkWallAlignment(10, 4));
console.log(checkWallAlignment(10, 9));