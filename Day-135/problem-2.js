// 🧩 PROBLEM–02: calculateTieBars()

// Logic: Tie bars ensure the wall behaves as one unit with the column. Spacing must be tight (seismic standard) to prevent wall toppling.

function calculateTieBars(wallHeightFT, spacingInch) {

    if (typeof wallHeightFT !== 'number' || typeof spacingInch !== 'number' || wallHeightFT <= 0 || spacingInch <= 0) {
        return "Invalid Input";
    }

    if (spacingInch > 15) {
        return "UNSAFE_ANCHORING";
    }

    const totalTies = (wallHeightFT * 12) / spacingInch;
    return Math.ceil(totalTies);
}

// --- EXAMPLE USAGE ---
console.log(calculateTieBars(10, 12));
console.log(calculateTieBars(10, 18));