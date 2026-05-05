// 🧩 PROBLEM–02: calculateSolingBricks()

// Logic: Before casting the floor, a layer of bricks is laid flat (Soling).This function calculates the total number of bricks required based on the square footage, including an extra 10% if boundary edging is needed.

function calculateSolingBricks(areaSqFt, isEdgingRequired) {

    // --- STEP 1: VALIDATION ---
    if (typeof areaSqFt !== 'number' || typeof isEdgingRequired !== 'boolean') {
        return "Invalid Input";
    }
    if (areaSqFt < 100) return "Invalid Area";

    // --- STEP 2: CALCULATE BASE COUNT ---
    // Standard flat soling needs 3 bricks per sq.ft
    let totalBricks = areaSqFt * 3;

    // --- STEP 3: APPLY EDGING EXTRA ---
    if (isEdgingRequired) {
        totalBricks = totalBricks * 1.10; // Add 10% extra
    }

    // Return the count rounded up
    return Math.ceil(totalBricks);
}

// --- EXAMPLE USAGE ---
console.log(calculateSolingBricks(1800, false));
console.log(calculateSolingBricks(1800, true));