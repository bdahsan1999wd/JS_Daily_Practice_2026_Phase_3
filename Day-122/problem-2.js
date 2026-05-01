// 🧩 PROBLEM–02: checkPileGroupCapacity()

// Logic: Piles in a group interact with each other, reducing their individual effectiveness slightly (Efficiency). This function calculates the effective group strength and categorizes the result to help engineers decide if more piles are needed for a specific column

function checkPileGroupCapacity(singlePileCapacity, numberOfPiles, efficiency) {

    // --- STEP 1: VALIDATION ---
    if (typeof singlePileCapacity !== 'number' || typeof numberOfPiles !== 'number' || typeof efficiency !== 'number' ||
        singlePileCapacity <= 0 || numberOfPiles <= 0) {
        return "Invalid Input";
    }

    // Efficiency must be between 0 and 1
    if (efficiency < 0 || efficiency > 1) return "Invalid Input";

    // --- STEP 2: CAPACITY CALCULATION ---
    const groupCapacity = singlePileCapacity * numberOfPiles * efficiency;

    // --- STEP 3: CATEGORIZATION ---
    if (groupCapacity >= 120) {
        return "STRONG";
    } else if (groupCapacity >= 80) {
        return "STABLE";
    } else {
        return "REINFORCE";
    }
}

// Example Usage:
console.log(checkPileGroupCapacity(40, 3, 0.85));
console.log(checkPileGroupCapacity(50, 4, 0.9));