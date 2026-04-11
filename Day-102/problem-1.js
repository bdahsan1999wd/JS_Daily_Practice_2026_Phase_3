// 🧩 PROBLEM–01: calculateAttendance()

// Logic: Calculate attendance percentage and round to 2 decimal places.

function calculateAttendance(totalClasses, attendedClasses) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalClasses !== 'number' || typeof attendedClasses !== 'number' ||
        totalClasses < 0 || attendedClasses < 0 || attendedClasses > totalClasses) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    if (totalClasses === 0) return 0;
    const percentage = (attendedClasses / totalClasses) * 100;

    // --- STEP 3: ROUNDING ---
    return Number(percentage.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateAttendance(100, 85));
console.log(calculateAttendance(45, 33));
console.log(calculateAttendance(50, 60));