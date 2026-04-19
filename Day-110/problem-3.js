// 🧩 PROBLEM–03: processCafeTransaction()

// Logic: Apply lunch hour discount (10%) and verify balance before processing the payment.

function processCafeTransaction(currentBalance, itemPrice, isLunchHour) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentBalance !== 'number' || typeof itemPrice !== 'number' ||
        typeof isLunchHour !== 'boolean' || currentBalance < 0 || itemPrice < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY DISCOUNT ---
    let finalPrice = itemPrice;
    if (isLunchHour) {
        finalPrice = itemPrice * 0.90; // 10% discount
    }

    // --- STEP 3: TRANSACTION LOGIC ---
    if (currentBalance >= finalPrice) {
        return Number((currentBalance - finalPrice).toFixed(2));
    } else {
        return "INSUFFICIENT_FUNDS";
    }
}

// --- EXAMPLE USAGE ---
console.log(processCafeTransaction(100, 50, true));
console.log(processCafeTransaction(30, 40, false));