// 🧩 PROBLEM–02: calculateExternalPlaster()

// Logic: External walls use a double-layer plaster system (12mm rough coat + 8mm finishing coat = 20mm total). We calculate wet volume from the area and thickness, apply a dry shrinkage factor for outdoor mixes, then add wastage for mortar that falls during high-rise application.

function calculateExternalPlaster(exteriorAreaSqFt) {

    // --- STEP 1: VALIDATION ---
    if (typeof exteriorAreaSqFt !== 'number' || exteriorAreaSqFt <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE WET VOLUME ---
    // Total plaster thickness = 20mm ≈ 0.8 inches.
    // Divide by 12 to convert inches → feet, giving volume in cubic feet (CFT).
    const wetVolume = exteriorAreaSqFt * (0.8 / 12);

    // --- STEP 3: APPLY DRY VOLUME FACTOR ---
    // Outdoor mixes shrink more during drying; multiply by 1.35 to compensate.
    const dryVolume = wetVolume * 1.35;

    // --- STEP 4: ADD 10% WASTAGE ---
    // High-rise exterior work causes mortar to fall; add 10% extra material.
    const finalVolume = dryVolume * 1.10;

    // --- STEP 5: RETURN ROUNDED RESULT ---
    return parseFloat(finalVolume.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateExternalPlaster(1000));
console.log(calculateExternalPlaster(500));
console.log(calculateExternalPlaster(0));
console.log(calculateExternalPlaster("abc"));
