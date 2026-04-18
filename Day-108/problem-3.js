// 🧩 PROBLEM–03: applyGradingCurve()

// Logic: Adjust student scores based on class average performance, ensuring a maximum cap of 100.

function applyGradingCurve(actualScore, classAverage) {

    // --- STEP 1: VALIDATION ---
    if (typeof actualScore !== 'number' || typeof classAverage !== 'number' || actualScore < 0 || actualScore > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: CURVE APPLICATION ---
    let finalScore = actualScore;

    if (classAverage < 50) {
        finalScore += 5;
    } else if (classAverage > 80) {
        finalScore -= 2;
    }

    // --- STEP 3: CAP AT 100 ---
    return finalScore > 100 ? 100 : finalScore;
}

// --- EXAMPLE USAGE ---
console.log(applyGradingCurve(45, 40));
console.log(applyGradingCurve(98, 40));