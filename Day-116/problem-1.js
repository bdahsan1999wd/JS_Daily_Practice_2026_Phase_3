// 🧩 PROBLEM–01: calculateBuildableArea()

// Logic: This function calculates the net construction area by subtracting setbacks from a square plot. It converts meters to feet, calculates the available length and width, and then verifies if the resulting area meets the minimum 60% requirement of the total plot size.

function calculateBuildableArea(plotTotalSqFt, setbacks) {

    // --- STEP 1: VALIDATION ---
    // Ensure plot is a positive number and setbacks is a valid object
    if (typeof plotTotalSqFt !== 'number' || plotTotalSqFt <= 0 || !setbacks || typeof setbacks !== 'object') {
        return "Invalid Input";
    }

    const { frontM, backM, sideM } = setbacks;
    if (typeof frontM !== 'number' || typeof backM !== 'number' || typeof sideM !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: UNIT CONVERSION & DIMENSIONS ---
    const METER_TO_FEET = 3.28;
    const side = Math.sqrt(plotTotalSqFt); // Assuming a square plot to find the side length

    // Calculate net dimensions after subtracting setbacks (converted to feet)
    const netLength = side - (frontM + backM) * METER_TO_FEET;
    const netWidth = side - (sideM * 2) * METER_TO_FEET;

    // If setbacks are larger than the plot itself
    if (netLength <= 0 || netWidth <= 0) return "INSUFFICIENT_SPACE";

    const buildableArea = netLength * netWidth;

    // --- STEP 3: THRESHOLD CHECK ---
    // Challenge: If area is less than 60% of total plot, it's insufficient
    if (buildableArea < plotTotalSqFt * 0.6) {
        return "INSUFFICIENT_SPACE";
    }

    return Number(buildableArea.toFixed(2));
}

// Example Usage:
console.log(calculateBuildableArea(1800, { frontM: 1.5, backM: 1, sideM: 1 }));
console.log(calculateBuildableArea(1800, { frontM: 1, backM: .5, sideM: .5 }));