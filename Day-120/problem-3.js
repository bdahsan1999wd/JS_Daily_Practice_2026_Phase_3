// 🧩 PROBLEM–03: calculateWCRatio()

// Logic: The Water-Cement (W/C) ratio is the most important factor for concrete durability. This function calculates the ratio and categorizes it. If it's too dry, the concrete won't flow; if it's too wet, it will be weak and prone to cracking.

function calculateWCRatio(waterWeight, cementWeight) {

    // --- STEP 1: VALIDATION ---
    if (typeof waterWeight !== 'number' || typeof cementWeight !== 'number' || cementWeight <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATIO CALCULATION ---
    const ratio = Number((waterWeight / cementWeight).toFixed(2));

    // --- STEP 3: CATEGORIZATION ---
    if (ratio >= 0.40 && ratio <= 0.55) {
        return "OPTIMAL";
    } else if (ratio < 0.40) {
        return "TOO_DRY";
    } else {
        return "TOO_WET";
    }
}

// Example Usage:
console.log(calculateWCRatio(22.5, 50));
console.log(calculateWCRatio(30, 50));