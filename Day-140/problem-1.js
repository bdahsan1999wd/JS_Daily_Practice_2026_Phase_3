// 🧩 PROBLEM–01: calculateScreedVolume()

// Logic: Screed acts as a leveling bed for tiles. We calculate the volume based on the room's footprint and thickness, then convert it to dry material. Since cement and sand particles interlock, the dry volume is significantly higher than the finished wet volume.

function calculateScreedVolume(roomAreaSqFt, averageThicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof roomAreaSqFt !== 'number' || typeof averageThicknessInch !== 'number' || roomAreaSqFt <= 0) {
        return "Invalid Input";
    }

    // Safety: Screed thinner than 1 inch is prone to cracking
    if (averageThicknessInch < 1) return "TOO_THIN_FOR_STRENGTH";

    // --- STEP 2: VOLUME CALCULATIONS ---
    // Wet Volume in Cubic Feet
    const wetVolume = roomAreaSqFt * (averageThicknessInch / 12);

    // Dry Volume (Factor 1.33 accounts for shrinkage when water is added)
    const dryVolume = wetVolume * 1.33;

    // --- STEP 3: MATERIAL BREAKDOWN ---
    // For 1:4 mix, total parts = 5. Cement is 1/5th.
    const cementCFT = (dryVolume / 5) * 1;

    // Conversion: 1 Bag of cement = 1.25 CFT
    const cementBags = cementCFT / 1.25;

    return Math.ceil(cementBags);
}

// --- EXAMPLE USAGE ---
// For a 500 sq.ft room with a 2-inch screed:
console.log(calculateScreedVolume(500, 2));