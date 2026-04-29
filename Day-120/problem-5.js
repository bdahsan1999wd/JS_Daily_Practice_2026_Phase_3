// 🧩 PROBLEM–05: trackQualityVariance()

// Logic: High variance in concrete strength indicates poor site management. This function finds the range (Max - Min) across multiple test samples. If the gap is too wide (> 500 PSI), the batching process is considered inconsistent and potentially dangerous.

function trackQualityVariance(batchStrengths) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(batchStrengths)) return "Invalid Input";

    // Challenge: Check for minimum sample size
    if (batchStrengths.length < 3) return "NEED_MORE_SAMPLES";

    // Validate that all items are numbers
    for (let val of batchStrengths) {
        if (typeof val !== 'number') return "Invalid Input";
    }

    // --- STEP 2: CALCULATE VARIANCE RANGE ---
    const maxStrength = Math.max(...batchStrengths);
    const minStrength = Math.min(...batchStrengths);
    const variance = maxStrength - minStrength;

    // --- STEP 3: RESULT ---
    if (variance <= 500) {
        return "STABLE";
    } else {
        return "INCONSISTENT";
    }
}

// Example Usage:
console.log(trackQualityVariance([3500, 3600, 3450]));
console.log(trackQualityVariance([3200, 3800, 3400]));