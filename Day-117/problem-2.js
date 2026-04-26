// 🧩 PROBLEM–02: calculateFAR()

// Logic: Floor Area Ratio (FAR) is a critical metric for density. This function calculates the ratio by dividing the total building area by the land area. It enforces a strict upper limit of 3.75 to ensure the building doesn't over-utilize the plot.

function calculateFAR(totalFloorArea, plotArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalFloorArea !== 'number' || typeof plotArea !== 'number' || plotArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    // Formula: FAR = Total Floor Area / Plot Area
    const farValue = totalFloorArea / plotArea;

    // --- STEP 3: THRESHOLD CHECK ---
    const MAX_ALLOWED_FAR = 3.75;

    if (farValue > MAX_ALLOWED_FAR) {
        return "EXCEEDS_LIMIT";
    }

    return Number(farValue.toFixed(2));
}

// Example Usage:
console.log(calculateFAR(6000, 1800));
console.log(calculateFAR(8000, 1800));