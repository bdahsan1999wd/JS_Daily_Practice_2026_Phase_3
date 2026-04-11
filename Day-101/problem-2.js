// 🧩 PROBLEM–02: generateStudentID()

// Logic: Generate a formatted student ID string by combining the year, class, and a padded roll number.

function generateStudentID(year, classNum, roll) {

    // --- STEP 1: VALIDATION ---
    // year, classNum, and roll must be positive numbers
    if (typeof year !== 'number' || year < 0 || typeof classNum !== 'number' || classNum < 0 || typeof roll !== 'number' || roll < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY PADDING ---
    // If roll < 10, add a leading zero (e.g., 5 becomes "05") to maintain a consistent format
    let rollString = roll < 10 ? `0${roll}` : roll.toString();

    // --- STEP 3: GENERATE ID ---
    // Format: [YEAR]-[CLASS]-[ROLL]
    return `${year}-${classNum}-${rollString}`;
}

// --- EXAMPLE USAGE ---
console.log(generateStudentID(2026, 9, 5));
console.log(generateStudentID(2026, 10, 15));
console.log(generateStudentID(2025, -1, 5));