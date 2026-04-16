// 🧩 PROBLEM–05: calculateExamTime()

// Logic: Calculate total duration in minutes by converting 24-hour format hours and minutes.

function calculateExamTime(startTime, endTime) {

    // --- STEP 1: VALIDATION ---
    if (typeof startTime !== 'number' || typeof endTime !== 'number' || endTime < startTime) {
        return "Invalid Input";
    }

    // --- STEP 2: EXTRACT HOURS AND MINUTES ---
    // Example: 1130 -> Hour: 11, Min: 30
    const startHour = Math.floor(startTime / 100);
    const startMin = startTime % 100;

    const endHour = Math.floor(endTime / 100);
    const endMin = endTime % 100;

    // --- STEP 3: CONVERT TO TOTAL MINUTES ---
    const totalStartMinutes = (startHour * 60) + startMin;
    const totalEndMinutes = (endHour * 60) + endMin;

    return totalEndMinutes - totalStartMinutes;
}

// --- EXAMPLE USAGE ---
console.log(calculateExamTime(900, 1130));
console.log(calculateExamTime(1300, 1400));
console.log(calculateExamTime(1000, 900));