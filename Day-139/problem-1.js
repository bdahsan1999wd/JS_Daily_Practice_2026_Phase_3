// 🧩 PROBLEM–01: checkFrameGap()

// Logic: Masonry expands and contracts with temperature. A perimeter gap filled with flexible sealant prevents the frame from buckling.

function checkFrameGap(openingWidthMM, frameWidthMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof openingWidthMM !== 'number' || typeof frameWidthMM !== 'number') return "Invalid Input";
    if (openingWidthMM <= frameWidthMM) return "Invalid Input";

    // --- STEP 2: CALCULATE GAP ---
    const totalGap = openingWidthMM - frameWidthMM;
    const gapPerSide = totalGap / 2;

    // --- STEP 3: AUDIT ---
    if (gapPerSide >= 5 && gapPerSide <= 10) {
        return "IDEAL";
    } else if (gapPerSide < 5) {
        return "TOO_TIGHT";
    } else {
        return "EXCESSIVE_GAP";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkFrameGap(1220, 1205));
console.log(checkFrameGap(1220, 1215));