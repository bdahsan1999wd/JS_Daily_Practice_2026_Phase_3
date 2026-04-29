// 🧩 PROBLEM–04: calculateBatchVolume()

// Logic: Concrete mix design usually follows a ratio (Cement:Sand:Aggregate). This function calculates the total "Dry Volume" based on the number of cement bags and then applies a shrinkage factor (0.67) to find the actual "Wet Volume" that will be poured into the forms.

function calculateBatchVolume(cementBags, ratio) {

    // --- STEP 1: VALIDATION ---
    if (typeof cementBags !== 'number' || cementBags <= 0 || !ratio || typeof ratio !== 'object') {
        return "Invalid Input";
    }

    const { c, s, a } = ratio;
    if (typeof c !== 'number' || typeof s !== 'number' || typeof a !== 'number' || c <= 0 || s <= 0 || a <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: VOLUME CALCULATION ---
    // 1 bag = 1.25 cubic feet
    const dryVolume = 1.25 * cementBags * (c + s + a);

    // Wet Volume = Dry Volume * 0.67
    const wetVolume = dryVolume * 0.67;

    return Number(wetVolume.toFixed(2));
}

// Example Usage:
console.log(calculateBatchVolume(10, { c: 1, s: 1.5, a: 3 }));