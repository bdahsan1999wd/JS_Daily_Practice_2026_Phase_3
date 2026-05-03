// 🧩 PROBLEM–02: validateCapRebar()

// Logic: This function checks the "Clear Spacing" between reinforcing bars. If bars are too close, the liquid concrete (and the stones inside it) can't flow through, creating hollow pockets. If they are too far apart, the cap won't be strong enough to hold the load.

function validateCapRebar(capWidthInches, barDiameterInches, numberOfBars) {

    // --- STEP 1: VALIDATION ---
    if (typeof capWidthInches !== 'number' || typeof barDiameterInches !== 'number' || typeof numberOfBars !== 'number' ||
        numberOfBars <= 1) {
        return "Invalid Input";
    }

    // --- STEP 2: CLEAR SPACING CALCULATION ---
    // Total space occupied by steel subtracted from width, then divided by gaps
    const totalSteelWidth = numberOfBars * barDiameterInches;
    const clearSpacing = (capWidthInches - totalSteelWidth) / (numberOfBars - 1);
    const roundedSpacing = Number(clearSpacing.toFixed(2));

    // --- STEP 3: RANGE CHECK ---
    if (roundedSpacing < 3) {
        return "TOO_CONGESTED";
    } else if (roundedSpacing > 8) {
        return "INSUFFICIENT_STEEL";
    } else {
        return "SAFE";
    }
}

// Example Usage:
console.log(validateCapRebar(60, 1, 10));
console.log(validateCapRebar(60, 1, 25));