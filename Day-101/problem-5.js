// 🧩 PROBLEM–05: getSectionStatus()

// Logic: Assigns a section (A or B) based on the roll number range or places the student on a waiting list if the roll exceeds 60.

function getSectionStatus(roll) {

    // --- STEP 1: VALIDATION ---
    // Roll must be a positive number
    if (typeof roll !== 'number' || roll < 1) {
        return "Invalid Input";
    }

    // --- STEP 2: SECTION ASSIGNMENT ---
    // Roll 1 to 30 goes to Section A, 31 to 60 goes to Section B
    if (roll <= 30) {
        return "Section A";
    } else if (roll <= 60) {
        return "Section B";
    } else {
        // --- STEP 3: WAITING LIST ---
        // If roll is greater than 60, they are put on the waiting list
        return "Waiting List";
    }
}

// --- EXAMPLE USAGE ---
console.log(getSectionStatus(15));
console.log(getSectionStatus(45));
console.log(getSectionStatus(75));
console.log(getSectionStatus(0));