// 🧩 PROBLEM–01: classifyPerformance()

// Logic: Categorize student performance based on average marks with a special check for perfect scores.

function classifyPerformance(avgMarks) {

    // --- STEP 1: VALIDATION ---
    if (typeof avgMarks !== 'number' || avgMarks < 0 || avgMarks > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: PERFORMANCE CLASSIFICATION ---
    if (avgMarks === 100) {
        return "PERFECT_SCORE";
    } else if (avgMarks >= 90) {
        return "EXCEPTIONAL";
    } else if (avgMarks >= 75) {
        return "GOOD";
    } else if (avgMarks >= 50) {
        return "AVERAGE";
    } else {
        return "NEEDS_IMPROVEMENT";
    }
}

// --- EXAMPLE USAGE ---
console.log(classifyPerformance(100));
console.log(classifyPerformance(82));