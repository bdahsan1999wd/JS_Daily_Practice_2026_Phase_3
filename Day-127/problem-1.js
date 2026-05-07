// 🧩 PROBLEM–01: calculateEffectiveSpan()

// Logic: The "Effective Span" is the actual length of the beam that resists bending. It is calculated by taking the clear distance between columns and adding either the beam's depth or the column's width (whichever is smaller).

function calculateEffectiveSpan(clearSpan, beamDepth, columnWidth) {

    // --- STEP 1: VALIDATION ---
    if (typeof clearSpan !== 'number' || typeof beamDepth !== 'number' || typeof columnWidth !== 'number') {
        return "Invalid Input";
    }
    if (clearSpan <= 0 || beamDepth <= 0 || columnWidth <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TWO POSSIBLE SPANS ---
    // Formula 1: Clear Span + Beam Depth (converted to feet)
    const spanByDepth = clearSpan + (beamDepth / 12);

    // Formula 2: Clear Span + Column Width (converted to feet)
    const spanByColumn = clearSpan + (columnWidth / 12);

    // --- STEP 3: PICK THE SMALLER VALUE ---
    const effectiveSpan = Math.min(spanByDepth, spanByColumn);

    return Number(effectiveSpan.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateEffectiveSpan(15, 18, 12));