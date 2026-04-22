// 🧩 PROBLEM–04: calculateMessBill()

// Logic: Calculate the total bill by multiplying meals by the rate, tracking consecutive zeroes to apply a 10% discount, and adding a service charge for high consumption.

function calculateMessBill(dailyMeals, baseRate) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(dailyMeals) || typeof baseRate !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL MEALS AND CONSECUTIVE MISSES ---
    let totalMeals = 0;
    let consecutiveMissed = 0;
    let maxConsecutiveMissed = 0;

    for (let mealCount of dailyMeals) {
        totalMeals += mealCount;

        // If meal count is 0, increment consecutive counter
        if (mealCount === 0) {
            consecutiveMissed++;
            maxConsecutiveMissed = Math.max(maxConsecutiveMissed, consecutiveMissed);
        } else {
            consecutiveMissed = 0; // Reset counter
        }
    }

    // --- STEP 3: CALCULATE SUBTOTAL ---
    let subtotal = totalMeals * baseRate;

    // --- STEP 4: APPLY 10% DISCOUNT FOR 5+ CONSECUTIVE MISSES ---
    if (maxConsecutiveMissed > 5) {
        subtotal *= 0.90;
    }

    // --- STEP 5: ADD SERVICE CHARGE FOR 80+ MEALS ---
    if (totalMeals > 80) {
        subtotal += 50;
    }

    return Number(subtotal.toFixed(2));
}

// --- EXAMPLE USAGE ---
// 10 days of 3 meals, then 6 days of 0 meals (30 meals total)
const meals = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0];

 // 270 (300 - 10% discount)
console.log(calculateMessBill(meals, 10));