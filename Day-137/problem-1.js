// 🧩 PROBLEM–01: calculatePlasterVolume()

// Logic: Plaster volume calculation involves converting area to volume, then adding a dry shrinkage factor and a filling factor for joints. Thickness over 1 inch is unsafe as it may sag or crack under its own weight.

function calculatePlasterVolume(wallAreaSqFt, thicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof wallAreaSqFt !== 'number' || typeof thicknessInch !== 'number') return "Invalid Input";
    if (wallAreaSqFt <= 0 || thicknessInch <= 0) return "Invalid Input";

    // Safety check for thickness
    if (thicknessInch > 1) return "UNSAFE_THICKNESS";

    // --- STEP 2: CALCULATE WET VOLUME ---
    const wetVolume = wallAreaSqFt * (thicknessInch / 12);

    // --- STEP 3: CONVERT TO DRY VOLUME & ADD FILLING FACTOR ---
    // Dry Volume = Wet Volume * 1.33 (Shrinkage) * 1.15 (Joint Filling)
    const dryVolume = wetVolume * 1.33 * 1.15;

    return Number(dryVolume.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculatePlasterVolume(200, 0.5));
console.log(calculatePlasterVolume(200, 1.5));