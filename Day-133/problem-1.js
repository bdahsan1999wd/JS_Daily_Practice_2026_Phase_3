// 🧩 PROBLEM–01: validateLintelBearing()

// Logic: Lintel bearing ensures the weight above the opening is distributed safely onto the adjacent walls. A small bearing can cause the corners of the window or door frames to crack due to concentrated stress.

function validateLintelBearing(openingWidthInch, bearingLengthInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof openingWidthInch !== 'number' || typeof bearingLengthInch !== 'number') {
        return "Invalid Input";
    }
    if (openingWidthInch <= 0 || bearingLengthInch <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE MINIMUM REQUIRED BEARING ---
    // Rule: Greater of (1/10th of width) OR 6 inches
    const tenthOfWidth = openingWidthInch / 10;
    const minRequired = Math.max(tenthOfWidth, 6);

    // --- STEP 3: AUDIT ---
    if (bearingLengthInch >= minRequired) {
        return "SAFE";
    } else {
        return `INCREASE_BEARING_TO: ${minRequired}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(validateLintelBearing(48, 5));
console.log(validateLintelBearing(70, 8));