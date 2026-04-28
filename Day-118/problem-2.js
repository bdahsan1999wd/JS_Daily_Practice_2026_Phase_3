// 🧩 PROBLEM–02: calculateBalconyAllowance()

// Logic: This function balances outdoor and indoor space. It calculates the balcony's percentage relative to the room area. Modern luxury standards usually target a sweet spot between 10% and 20% to ensure the balcony is usable without sacrificing interior living space.

function calculateBalconyAllowance(roomArea, balconyArea) {

    // --- STEP 1: VALIDATION ---
    if (typeof roomArea !== 'number' || typeof balconyArea !== 'number' || roomArea <= 0 || balconyArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PERCENTAGE CALCULATION ---
    const percentage = (balconyArea / roomArea) * 100;

    // --- STEP 3: RANGE CHECK ---
    if (percentage < 10) {
        return "TOO_SMALL";
    } else if (percentage > 20) {
        return "TOO_LARGE";
    } else {
        return "PERFECT";
    }
}

// Example Usage:
console.log(calculateBalconyAllowance(200, 10));
console.log(calculateBalconyAllowance(200, 50));
console.log(calculateBalconyAllowance(200, 30));