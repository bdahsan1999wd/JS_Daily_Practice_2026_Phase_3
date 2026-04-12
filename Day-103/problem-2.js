// 🧩 PROBLEM–02: calculateSemesterGPA()

// Logic: Calculate average GPA from an array, returning 0.0 if any single subject is failed (0.0).

function calculateSemesterGPA(gpArray) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(gpArray) || gpArray.length === 0) {
        return "Invalid Input";
    }

    let totalGP = 0;
    for (let gp of gpArray) {
        if (typeof gp !== 'number' || gp < 0 || gp > 5.0) return "Invalid Input";

        // --- STEP 2: CHECK FOR FAIL CASE ---
        if (gp === 0.0) return 0.0;

        totalGP += gp;
    }

    // --- STEP 3: CALCULATE AVERAGE ---
    const average = totalGP / gpArray.length;
    return Number(average.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateSemesterGPA([4.0, 5.0, 3.5]));
console.log(calculateSemesterGPA([5.0, 0.0, 4.5]));