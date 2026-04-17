// 🧩 PROBLEM–01: checkRenewalEligibility()

// Logic: Check for unpaid fines and unreturned books first, then verify expiration status for renewal eligibility.

function checkRenewalEligibility(isExpired, unpaidFines, booksBorrowed) {

    // --- STEP 1: VALIDATION ---
    if (typeof isExpired !== 'boolean' || typeof unpaidFines !== 'number' || typeof booksBorrowed !== 'number' || unpaidFines < 0 || booksBorrowed < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BLOCKING CONDITIONS ---
    if (unpaidFines > 0) {
        return "RENEWAL_BLOCKED: PAY_FINES";
    }
    if (booksBorrowed > 0) {
        return "RENEWAL_BLOCKED: RETURN_BOOKS";
    }

    // --- STEP 3: RENEWAL LOGIC ---
    if (!isExpired) {
        return "NO_RENEWAL_NEEDED";
    }

    return "ELIGIBLE_FOR_RENEWAL";
}

// --- EXAMPLE USAGE ---
console.log(checkRenewalEligibility(true, 0, 0));
console.log(checkRenewalEligibility(true, 50, 2));