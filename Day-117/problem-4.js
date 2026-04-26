// 🧩 PROBLEM–04: calculateSpaceEfficiency()

// Logic: Good design minimizes wasted space (like long hallways). This function calculates what percentage of the building is actually "usable." It then categorizes the design into three tiers: Optimized, Sub-optimal, or Poor.

function calculateSpaceEfficiency(totalArea, usableArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalArea !== 'number' || typeof usableArea !== 'number' || totalArea <= 0) {
        return "Invalid Input";
    }
    if (usableArea > totalArea) return "Invalid Input"; // Usable area cannot exceed total

    // --- STEP 2: PERCENTAGE CALCULATION ---
    const efficiency = (usableArea / totalArea) * 100;

    // --- STEP 3: CATEGORIZATION ---
    if (efficiency >= 85) {
        return "OPTIMIZED";
    } else if (efficiency >= 70) {
        return "SUB-OPTIMAL";
    } else {
        return "POOR_DESIGN";
    }
}

// Example Usage:
console.log(calculateSpaceEfficiency(1200, 1050));