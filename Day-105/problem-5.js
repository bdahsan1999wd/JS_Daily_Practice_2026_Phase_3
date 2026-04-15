// 🧩 PROBLEM–05: calculateFinalTuition()

// Logic: Apply 15% or 25% discount based on sibling count and round the result.

function calculateFinalTuition(baseFee, siblingCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof baseFee !== 'number' || baseFee < 0 || typeof siblingCount !== 'number' || siblingCount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DISCOUNT CALCULATION ---
    let discountPercent = 0;

    if (siblingCount === 1) {
        discountPercent = 0.15;
    } else if (siblingCount >= 2) {
        discountPercent = 0.25;
    }

    // --- STEP 3: APPLY DISCOUNT & ROUND ---
    const finalAmount = baseFee * (1 - discountPercent);
    return Math.round(finalAmount);
}

// --- EXAMPLE USAGE ---
console.log(calculateFinalTuition(5000, 1));
console.log(calculateFinalTuition(5000, 3));