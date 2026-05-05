// 🧩 PROBLEM–03: trackColumnVerticality()

// Logic: Verticality (Plumb) is critical. A small tilt at the bottom floor can lead to major structural instability as the building grows taller. We use a ratio of 0.025 inches per foot to determine the "Allowed Offset."

function trackColumnVerticality(heightFT, offsetInches) {

    // --- STEP 1: VALIDATION ---
    if (typeof heightFT !== 'number' || typeof offsetInches !== 'number' || heightFT <= 0 || offsetInches < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ALLOWED LIMIT ---
    const allowedOffset = heightFT * 0.025;

    // --- STEP 3: AUDIT ---
    if (offsetInches <= allowedOffset) {
        return "ACCEPTED";
    } else {
        const diff = offsetInches - allowedOffset;
        // The column must be pulled back or adjusted using jacks
        return `ADJUST_REQUIRED: ${diff.toFixed(3)}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(trackColumnVerticality(10, 0.2));
console.log(trackColumnVerticality(12, 0.5));