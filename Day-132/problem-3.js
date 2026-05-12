// 🧩 PROBLEM–03: calculateStairConcrete()

// Logic: Stair concrete has two parts:
// 1. The rectangular inclined waist slab.
// 2. The triangular steps sitting on top.
// Summing these gives the total volume per flight.

function calculateStairConcrete(waistLengthFT, widthFT, thicknessInch, stepCount, riserInch, treadInch) {

    // --- STEP 1: VALIDATION ---
    const inputs = [waistLengthFT, widthFT, thicknessInch, stepCount, riserInch, treadInch];
    if (inputs.some(val => typeof val !== 'number' || val <= 0)) {
        return "Invalid Input";
    }

    // --- STEP 2: WAIST SLAB VOLUME ---
    const waistVolume = waistLengthFT * widthFT * (thicknessInch / 12);

    // --- STEP 3: STEPS VOLUME (Triangular prism) ---
    // Area of triangle = 0.5 * base * height
    const stepArea = 0.5 * (riserInch / 12) * (treadInch / 12);
    const totalStepsVolume = stepArea * widthFT * stepCount;

    return Number((waistVolume + totalStepsVolume).toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateStairConcrete(10, 3.5, 6, 10, 6, 10));