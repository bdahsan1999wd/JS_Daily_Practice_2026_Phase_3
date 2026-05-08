// 🧩 PROBLEM–02: calculatePlywoodSheets()

// Logic: Standard plywood sheets for shuttering are 8ft x 4ft (32 sq.ft). Since sheets are cut to fit edges and beam corners, a wastage factor is necessary to estimate the correct purchase quantity.

function calculatePlywoodSheets(totalArea, wastagePercent) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalArea !== 'number' || typeof wastagePercent !== 'number' || totalArea <= 0) {
        return "Invalid Input";
    }
    // Wastage shouldn't be negative or unrealistically high
    if (wastagePercent < 0 || wastagePercent > 20) return "Invalid Input";

    // --- STEP 2: CALCULATION ---
    const sheetArea = 32;
    const baseCount = totalArea / sheetArea;
    const totalWithWastage = baseCount * (1 + wastagePercent / 100);

    return Math.ceil(totalWithWastage);
}

// --- EXAMPLE USAGE ---
console.log(calculatePlywoodSheets(1800, 10));