// 🧩 PROBLEM–03: updateMeritPoints()

// Logic: Add or subtract points based on actions, ensuring the total never drops below zero.

function updateMeritPoints(currentPoints, action, amount) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentPoints !== 'number' || currentPoints < 0 ||
        typeof action !== 'string' || typeof amount !== 'number' || amount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: UPDATE LOGIC ---
    const lowerAction = action.toLowerCase();
    let updatedPoints = currentPoints;

    if (lowerAction === "award") {
        updatedPoints += amount;
    } else if (lowerAction === "penalty") {
        updatedPoints -= amount;
    } else {
        return currentPoints; // Return original if action is unknown
    }

    // --- STEP 3: PREVENT NEGATIVE POINTS ---
    return updatedPoints < 0 ? 0 : updatedPoints;
}

// --- EXAMPLE USAGE ---
console.log(updateMeritPoints(50, "award", 20));
console.log(updateMeritPoints(10, "penalty", 15));