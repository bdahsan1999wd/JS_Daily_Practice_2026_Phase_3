// 🧩 PROBLEM–03: getAttendanceTrend()

// Logic: Analyzes a 4-week attendance array to determine student trends.
// Trends: Constant Improvement, Constant Decline, High Performer, or Fluctuating.

function getAttendanceTrend(weeklyStats) {

    // --- STEP 1: VALIDATION ---
    // Rule: Must be an array of exactly 4 elements
    if (!Array.isArray(weeklyStats) || weeklyStats.length !== 4) {
        return "Invalid Input";
    }

    // Rule: Every value must be a number between 0 and 100
    // Using .some() to check if even one value fails the requirement
    if (weeklyStats.some(val => typeof val !== 'number' || val < 0 || val > 100)) {
        return "Invalid Input";
    }

    // --- STEP 2: HIGH PERFORMER CHALLENGE ---
    // Rule: If attendance is above 90% in ALL 4 weeks
    const isHighPerformer = weeklyStats.every(val => val > 90);
    if (isHighPerformer) {
        return "HIGH_PERFORMER";
    }

    // --- STEP 3: TREND ANALYSIS ---
    // We assume both are true and try to prove them false by looking at the data
    let improving = true;
    let declining = true;

    for (let i = 1; i < weeklyStats.length; i++) {
        // Compare current week with previous week

        // If current is less than or equal to previous, it's not "Constant Improvement"
        if (weeklyStats[i] <= weeklyStats[i - 1]) {
            improving = false;
        }

        // If current is greater than or equal to previous, it's not "Constant Decline"
        if (weeklyStats[i] >= weeklyStats[i - 1]) {
            declining = false;
        }
    }

    // --- STEP 4: FINAL DECISION ---
    if (improving) {
        return "CONSTANT_IMPROVEMENT";
    }

    if (declining) {
        return "CONSTANT_DECLINE";
    }

    // If none of the specific trends match, it means the numbers went up and down
    return "FLUCTUATING";
}

// --- EXAMPLE USAGE ---
console.log(getAttendanceTrend([70, 75, 80, 85]));
console.log(getAttendanceTrend([92, 95, 91, 98]));
console.log(getAttendanceTrend([80, 70, 90, 85]));
console.log(getAttendanceTrend([100, 90, 80, 70]));