// 🧩 PROBLEM–02: checkColumnPlumb()

// Logic: "Plumb" measures the verticality of a column. A tilted column creates "Eccentric Loading," which pushes the weight to one side and can cause the structure to buckle. Tolerance allows for minor manual errors.

function checkColumnPlumb(columnHeightFT, deviationInches) {

    // --- STEP 1: VALIDATION ---
    if (typeof columnHeightFT !== 'number' || typeof deviationInches !== 'number' || columnHeightFT <= 0 || deviationInches < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ALLOWED TOLERANCE ---
    // Standard rule: 1/8 (0.125) inch for every 10 feet of height
    const allowedTolerance = (columnHeightFT / 10) * 0.125;

    // --- STEP 3: AUDIT RESULTS ---
    if (deviationInches <= allowedTolerance) {
        return "PERFECT";
    } else if (deviationInches < 0.5) {
        // Needs manual pulling or adjustment before casting concrete
        return "FIX_REQUIRED";
    } else {
        // Deviation is too high, unsafe for a 6-story building
        return "REJECTED";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkColumnPlumb(10, 0.1));
console.log(checkColumnPlumb(20, 0.4));