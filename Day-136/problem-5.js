// 🧩 PROBLEM–05: comparePipeCosts()

// Logic: PPR is used for pressurized water supply, while PVC is for gravity-based waste. Keeping track of cost differences helps in budget management for "The Grand Modern Residency."

function comparePipeCosts(meterNeeded, pprPrice, pvcPrice) {

    // --- STEP 1: VALIDATION ---
    if (typeof meterNeeded !== 'number' || typeof pprPrice !== 'number' || typeof pvcPrice !== 'number') {
        return "Invalid Input";
    }
    if (meterNeeded <= 0 || pprPrice <= 0 || pvcPrice <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE COSTS ---
    const totalPPR = meterNeeded * pprPrice;
    const totalPVC = meterNeeded * pvcPrice;
    const difference = totalPPR - totalPVC;

    // --- STEP 3: GENERATE OUTPUT ---
    let result = `PPR: ${totalPPR} | PVC: ${totalPVC} | DIFF: ${difference}`;

    if (pprPrice > (pvcPrice * 3)) {
        result = "PREMIUM_COST_ALERT: " + result;
    }

    return result;
}

// --- EXAMPLE USAGE ---
console.log(comparePipeCosts(100, 150, 40));