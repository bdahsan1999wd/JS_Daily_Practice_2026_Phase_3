// 🧩 PROBLEM–03: calculateSubPay()

// Logic: A payroll calculator that handles conditional multipliers and flat bonuses. It calculates a base rate, applies a 50% increase for weekends, and adds a seniority/volume bonus if the class count is high.

function calculateSubPay(subClasses, hourlyRate, isWeekend) {

    // --- STEP 1: VALIDATION ---
    if (typeof subClasses !== 'number' || typeof hourlyRate !== 'number' || typeof isWeekend !== 'boolean' || subClasses < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE HOURLY RATE ---
    // Apply 1.5x multiplier if the work was done on a weekend
    let effectiveRate = isWeekend ? hourlyRate * 1.5 : hourlyRate;

    // --- STEP 3: CALCULATE BASE PAY ---
    let totalPay = subClasses * effectiveRate;

    // --- STEP 4: APPLY BONUS ---
    // Challenge: Flat $100 bonus for high workload (more than 10 classes)
    if (subClasses > 10) {
        totalPay += 100;
    }

    // Round to 2 decimal places to handle currency math properly
    return Number(totalPay.toFixed(2));
}

// Example Usage:
console.log(calculateSubPay(2, 50, true));
console.log(calculateSubPay(12, 50, false));