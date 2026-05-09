// 🧩 PROBLEM–02: calculateCrankLength()

// Logic: Crank bars (bent-up bars) are designed to resist negative bending moments near supports. The 45-degree bend increases the total length of the bar slightly (0.42 * H).

function calculateCrankLength(slabThickness, clearCover, barLength) {

    // --- STEP 1: VALIDATION ---
    if (typeof slabThickness !== 'number' || typeof clearCover !== 'number' || typeof barLength !== 'number') {
        return "Invalid Input";
    }
    if (slabThickness <= 0 || clearCover < 0 || barLength <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE H (Vertical height of the bend) ---
    // Clear cover is in MM, so convert it to Inches (1 inch = 25.4 mm)
    const clearCoverInches = clearCover / 25.4;
    const h = slabThickness - (2 * clearCoverInches);

    // --- STEP 3: CALCULATE EXTRA LENGTH ---
    // Assuming double crank (bent at both ends)
    const extraLength = 0.42 * h * 2;

    // Convert extra length to feet (since barLength is in feet)
    const extraLengthFeet = extraLength / 12;
    const totalLength = barLength + extraLengthFeet;

    return Number(totalLength.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateCrankLength(5, 20, 15));