// 🧩 PROBLEM–03: allocateHostelRoom()

// Logic: Check distance eligibility (>50km) and assign wings based on student grade levels.

function allocateHostelRoom(distance, grade) {

    // --- STEP 1: VALIDATION ---
    if (typeof distance !== 'number' || distance < 0 || typeof grade !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: DISTANCE ELIGIBILITY ---
    if (distance <= 50) {
        return "NOT_ELIGIBLE_FOR_HOSTEL";
    }

    // --- STEP 3: WING ALLOCATION ---
    if (grade >= 11 && grade <= 12) {
        return "North Wing (Senior)";
    } else if (grade >= 6 && grade <= 10) {
        return "South Wing (Junior)";
    } else {
        return "Invalid Input"; // If grade is outside the school system range
    }
}

// --- EXAMPLE USAGE ---
console.log(allocateHostelRoom(65, 12));
console.log(allocateHostelRoom(20, 9));