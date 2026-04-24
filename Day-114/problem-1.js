// 🧩 PROBLEM–01: getSeatLocation()

// Logic: This function maps a 1D sequence (Roll Number) into a 2D coordinate system (Row and Column). We use Math.ceil to determine the row and the remainder operator (%) to find the column position within that row.

function getSeatLocation(rollNumber, columnsPerRow) {

    // --- STEP 1: VALIDATION ---
    // Ensure inputs are numbers and greater than 0
    if (typeof rollNumber !== 'number' || typeof columnsPerRow !== 'number' || rollNumber < 1 || columnsPerRow < 1) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ROW ---
    // Dividing roll by columns and rounding up gives the row number
    const row = Math.ceil(rollNumber / columnsPerRow);

    // --- STEP 3: CALCULATE COLUMN ---
    // If roll % columns is 0, it's the last seat in the row. Otherwise, use the remainder.
    const column = rollNumber % columnsPerRow === 0 ? columnsPerRow : rollNumber % columnsPerRow;

    return `Row: ${row}, Column: ${column}`;
}

// --- EXAMPLE USAGE ---
console.log(getSeatLocation(7, 5));
console.log(getSeatLocation(10, 5));