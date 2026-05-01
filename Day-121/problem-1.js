// 🧩 PROBLEM–01: calculateExcavationVolume()

// Logic: This function calculates the amount of earth to be removed for a foundation. It applies a 10% "Sloping" factor to account for safety angles. Additionally, for deep foundations (over 15ft), it adds a flat volume buffer to accommodate heavy machinery clearance.

function calculateExcavationVolume(length, width, depth) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof length !== 'number' || typeof width !== 'number' || typeof depth !== 'number' ||
        length <= 0 || width <= 0 || depth <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: VOLUME CALCULATION ---
    const baseVolume = length * width * depth;
    let totalVolume = baseVolume * 1.10; // Adding 10% for sloping

    // --- STEP 3: DEEP FOUNDATION CHALLENGE ---
    if (depth > 15) {
        totalVolume += 500; // Extra clearance for equipment
    }

    return Number(totalVolume.toFixed(2));
}

// Example Usage:
console.log(calculateExcavationVolume(40, 30, 10));
console.log(calculateExcavationVolume(40, 30, 20));