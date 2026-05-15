// 🧩 PROBLEM–01: checkChaseSafety()

// Logic: Cutting horizontal grooves (chases) weakens the load-bearing capacity of a wall more than vertical ones. We must limit the depth to maintain the wall's structural integrity.

function checkChaseSafety(wallThicknessInch, chaseDepthInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof wallThicknessInch !== 'number' || typeof chaseDepthInch !== 'number') return "Invalid Input";
    if (wallThicknessInch <= 0 || chaseDepthInch <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE HORIZONTAL LIMIT ---
    // Rule: Max depth = 1/6 of thickness
    const maxAllowed = Number((wallThicknessInch / 6).toFixed(2));

    // --- STEP 3: AUDIT ---
    if (chaseDepthInch <= maxAllowed) {
        return "SAFE";
    } else {
        return `REDUCE_DEPTH: ${maxAllowed}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(checkChaseSafety(5, 0.5));
console.log(checkChaseSafety(10, 2));