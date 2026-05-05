// 🧩 PROBLEM–01: auditPhaseCost()

// Logic: This function checks if the spending for the foundation phase is within the allocated 20% of the total budget. It calculates the variance and flags warnings or critical alerts based on how much the limit was exceeded.

function auditPhaseCost(totalBudget, actualSpent) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBudget !== 'number' || typeof actualSpent !== 'number' || totalBudget <= 0 || actualSpent < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ALLOCATION & VARIANCE ---
    const targetAllocation = totalBudget * 0.20;
    const variance = actualSpent - targetAllocation;

    // --- STEP 3: AUDIT LOGIC ---
    if (actualSpent <= targetAllocation) {
        return "UNDER_BUDGET";
    } else {
        const excessPercent = (variance / targetAllocation) * 100;

        if (excessPercent <= 5) {
            return `WARNING: ${variance}`;
        } else {
            return `CRITICAL: ${variance}`;
        }
    }
}

// --- EXAMPLE USAGE ---
console.log(auditPhaseCost(50000000, 9000000));
console.log(auditPhaseCost(50000000, 11000000));