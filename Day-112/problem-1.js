// 🧩 PROBLEM–01: calculateLibraryDebt()

// Logic: Calculates total library fines based on book categories and overdue days.
// Penalty: Applies a 20% "Bulk Penalty" if more than 3 books are overdue.
// Rates: Textbook = $10/day, Reference = $25/day, Fiction = $5/day.

function calculateLibraryDebt(books) {

    // --- STEP 1: INITIAL VALIDATION ---
    // Ensure the input is an array
    if (!Array.isArray(books)) {
        return "Invalid Input";
    }

    let totalFine = 0;
    let overdueCount = 0;

    // --- STEP 2: CALCULATE INDIVIDUAL FINES ---
    for (let book of books) {
        const { daysOverdue, category } = book;

        // Rule: Only process books with positive overdue days
        if (typeof daysOverdue === 'number' && daysOverdue > 0) {
            overdueCount++; // Count this book towards the Bulk Penalty

            let rate = 0;

            // Determine the daily rate based on category
            if (category === "Textbook") {
                rate = 10;
            } else if (category === "Reference") {
                rate = 25;
            } else if (category === "Fiction") {
                rate = 5;
            }

            // Add this book's fine to the running total
            totalFine += (daysOverdue * rate);
        }
    }

    // --- STEP 3: BULK PENALTY CHALLENGE ---
    // Rule: If more than 3 books are overdue (> 3), add a 20% penalty to the total
    if (overdueCount > 3) {
        totalFine *= 1.20; // Multiplying by 1.20 adds 20%
    }

    // --- STEP 4: FINAL FORMATTING ---
    // Return the total rounded to 2 decimal places as a Number
    return Number(totalFine.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateLibraryDebt([
    { title: "Math", daysOverdue: 2, category: "Textbook" },
    { title: "Physics", daysOverdue: 1, category: "Reference" }
]));

console.log(calculateLibraryDebt([
    { daysOverdue: 1, category: "Fiction" },
    { daysOverdue: 1, category: "Fiction" },
    { daysOverdue: 1, category: "Fiction" },
    { daysOverdue: 1, category: "Fiction" }
]));