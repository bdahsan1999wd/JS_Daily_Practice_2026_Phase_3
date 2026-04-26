// 🧩 PROBLEM–05: getMilestoneBudget()

// Logic: This function distributes a total budget into three specific project phases based on fixed percentages. It handles mathematical rounding to ensure clean numbers and returns a formatted summary string.

function getMilestoneBudget(totalBudget) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBudget !== 'number' || totalBudget < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ALLOCATION ---
    // Percentages: Foundation (20%), Structure (45%), Finishing (35%)
    const fnd = Math.round(totalBudget * 0.20);
    const str = Math.round(totalBudget * 0.45);
    const fin = Math.round(totalBudget * 0.35);

    // --- STEP 3: FORMATTING ---
    return `Fnd: ${fnd} | Str: ${str} | Fin: ${fin}`;
}

// Example Usage:
console.log(getMilestoneBudget(1000000));