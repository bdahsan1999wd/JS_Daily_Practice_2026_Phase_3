// 🧩 PROBLEM–05: validateVoucher()

// Logic: Validate specific voucher prefixes and lengths, then apply discounts for qualified purchases.

function validateVoucher(voucherCode, purchaseAmount) {

    // --- STEP 1: VALIDATION ---
    if (typeof voucherCode !== 'string' || typeof purchaseAmount !== 'number' || purchaseAmount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: VOUCHER FORMAT CHECK ---
    const isValidFormat = voucherCode.startsWith("SCH") && voucherCode.length === 6;
    if (!isValidFormat) {
        return "INVALID_VOUCHER";
    }

    // --- STEP 3: PURCHASE AMOUNT CHECK ---
    if (purchaseAmount < 100) {
        return "AMOUNT_TOO_LOW";
    }

    // --- STEP 4: APPLY 10% DISCOUNT ---
    const discountedPrice = purchaseAmount - (purchaseAmount * 0.10);
    return discountedPrice;
}

// --- EXAMPLE USAGE ---
console.log(validateVoucher("SCH123", 200));
console.log(validateVoucher("OFF123", 200));
console.log(validateVoucher("SCH999", 50));