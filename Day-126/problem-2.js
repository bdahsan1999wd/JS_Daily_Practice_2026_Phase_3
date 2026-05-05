// 🧩 PROBLEM–02: calculateColumnConcrete()

// Logic: To calculate the concrete volume, we must convert inch dimensions to feet. A 3% wastage factor is included to account for concrete that remains in the pump, mixer, or accidental spills during vertical pouring.

function calculateColumnConcrete(columnCount, dimensions) {

    // --- STEP 1: VALIDATION ---
    if (typeof columnCount !== 'number' || !dimensions || typeof dimensions !== 'object') {
        return "Invalid Input";
    }
    const { w, d, h } = dimensions;
    if (!w || !d || !h || w <= 0 || d <= 0 || h <= 0 || columnCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONVERT UNITS & CALCULATE VOLUME ---
    // Converting Width and Depth from inches to feet
    const widthFt = w / 12;
    const depthFt = d / 12;
    const volumePerColumn = widthFt * depthFt * h;

    // --- STEP 3: TOTAL VOLUME WITH WASTAGE ---
    const totalVolume = (volumePerColumn * columnCount) * 1.03; // 3% extra

    // Returning result rounded to 2 decimal places
    return Number(totalVolume.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateColumnConcrete(12, { w: 12, d: 18, h: 10 }));