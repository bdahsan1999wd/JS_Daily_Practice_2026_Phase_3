// 🧩 PROBLEM–02: calculateTileRequirement()

// Logic: This function uses a switch statement to determine wastage based on the complexity of the tile pattern. Intricate patterns like Herringbone require significantly more cutting, resulting in more discarded scraps at the wall edges.

function calculateTileRequirement(netAreaSqFt, patternType) {

    // --- STEP 1: VALIDATION ---
    if (typeof netAreaSqFt !== 'number' || netAreaSqFt <= 0) return "Invalid Input";

    let wastagePercentage;

    // --- STEP 2: PATTERN SELECTION ---
    switch (patternType) {
        case "Standard":
            wastagePercentage = 0.08; // 8%
            break;
        case "Diagonal":
        case "Diamond":
            wastagePercentage = 0.15; // 15%
            break;
        case "Herringbone":
            wastagePercentage = 0.22; // 22%
            break;
        default:
            wastagePercentage = 0.10; // Default 10%
    }

    // --- STEP 3: TOTAL CALCULATION ---
    const totalTilesNeeded = netAreaSqFt * (1 + wastagePercentage);

    return Math.ceil(totalTilesNeeded);
}

// --- EXAMPLE USAGE ---
console.log(calculateTileRequirement(1800, "Diagonal"));
console.log(calculateTileRequirement(1000, "Unknown"));