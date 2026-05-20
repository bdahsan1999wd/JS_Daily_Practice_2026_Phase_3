// 🧩 PROBLEM–04: calculateGroutKG()

// Logic: Grout fills the voids between tiles. The volume depends on the perimeter of the tiles (length + width) and the width of the joint. Smaller tiles or wider joints significantly increase the amount of grout required.

function calculateGroutKG(tileLengthMM, tileWidthMM, jointWidthMM, totalAreaSqM) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof tileLengthMM !== 'number' || typeof tileWidthMM !== 'number' ||
        typeof jointWidthMM !== 'number' || typeof totalAreaSqM !== 'number') {
        return "Invalid Input";
    }

    if (jointWidthMM === 0) return 0;
    if (tileLengthMM <= 0 || tileWidthMM <= 0 || totalAreaSqM < 0) return "Invalid Input";

    // --- STEP 2: SIMPLIFIED CONSUMPTION FORMULA ---
    // Includes a depth factor of 1.5 for standard thickness
    const totalKG = ((tileLengthMM + tileWidthMM) / (tileLengthMM * tileWidthMM)) * jointWidthMM * 1.5 * totalAreaSqM;

    return Number(totalKG.toFixed(2));
}

// --- EXAMPLE USAGE ---
// Large 600x600mm tiles for a 100sqm area with 3mm joints:
console.log(calculateGroutKG(600, 600, 3, 100));
