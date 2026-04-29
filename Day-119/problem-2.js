// 🧩 PROBLEM–02: checkStirrupSpacing()

// Logic: In seismic design, columns must be "ductile" (able to bend without breaking). This function checks if the stirrups (reinforcing rings) are close enough to hold the vertical bars together during a shake. It uses the "rule of minimums" between a fraction of the column width and a 4-inch cap.

function checkStirrupSpacing(columnWidth, currentSpacing) {

    // --- STEP 1: VALIDATION ---
    if (typeof columnWidth !== 'number' || typeof currentSpacing !== 'number' || columnWidth <= 0 || currentSpacing <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE LIMITS ---
    // Rule: Min of (Width / 4) or 4 inches
    const maxAllowed = Math.min(columnWidth / 4, 4);

    // --- STEP 3: AUDIT ---
    if (currentSpacing <= maxAllowed) {
        return "OPTIMAL";
    } else {
        return `ADJUST: ${maxAllowed}`;
    }
}

// Example Usage:
console.log(checkStirrupSpacing(16, 3.5));
console.log(checkStirrupSpacing(20, 6));