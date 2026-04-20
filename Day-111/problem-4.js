// 🧩 PROBLEM–04: calculateFinalFees()

// Logic: Calculates the final school fee after applying multiple discounts.
// Order: Sibling Discount -> Financial Aid -> Loyalty Discount (if applicable).

function calculateFinalFees(baseFee, siblings, aidPct) {

    // --- STEP 1: VALIDATION ---
    // Ensure all inputs are numbers
    if (typeof baseFee !== 'number' || typeof siblings !== 'number' || typeof aidPct !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: SIBLING DISCOUNT CALCULATION ---
    // 1 sibling = 15% discount, 2 or more = 25% discount
    let sibDiscount = 0;
    if (siblings === 1) {
        sibDiscount = 0.15;
    } else if (siblings >= 2) {
        sibDiscount = 0.25;
    }

    // Apply the sibling discount to the base fee
    let feeAfterSib = baseFee * (1 - sibDiscount);

    // --- STEP 3: FINANCIAL AID CALCULATION ---
    // Convert aid percentage (e.g., 10) to a decimal (0.10) and subtract from fee
    let feeAfterAid = feeAfterSib * (1 - (aidPct / 100));

    // --- STEP 4: LOYALTY DISCOUNT ---
    // Rule: If the fee is still above 10,000 after previous discounts, apply extra 5% off
    if (feeAfterAid > 10000) {
        feeAfterAid = feeAfterAid * 0.95; // Multiply by 0.95 to reduce by 5%
    }

    // --- STEP 5: FINAL ROUNDING ---
    // Round to the nearest whole number for the final output
    return Math.round(feeAfterAid);
}

// --- EXAMPLE USAGE ---
console.log(calculateFinalFees(12000, 1, 10));
console.log(calculateFinalFees(20000, 2, 10));
console.log(calculateFinalFees("5000", 1, 0));