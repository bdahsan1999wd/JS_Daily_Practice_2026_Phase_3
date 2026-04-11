// 🧩 PROBLEM–02: calculateLibraryFine()

// Logic: Calculate late fees based on days, with extra charges after 7 days and scholarship discounts.

function calculateLibraryFine(daysLate, isScholarshipStudent) {

    // --- STEP 1: VALIDATION ---
    if (typeof daysLate !== 'number' || daysLate < 0 || typeof isScholarshipStudent !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: BASE FINE CALCULATION ---
    let totalFine = 0;
    if (daysLate <= 7) {
        totalFine = daysLate * 5;
    } else {
        totalFine = (7 * 5) + ((daysLate - 7) * 10);
    }

    // --- STEP 3: APPLY DISCOUNT ---
    if (isScholarshipStudent) {
        totalFine = totalFine * 0.5;
    }

    return totalFine;
}

// --- EXAMPLE USAGE ---
console.log(calculateLibraryFine(5, false));
console.log(calculateLibraryFine(10, true));
console.log(calculateLibraryFine(-2, false));