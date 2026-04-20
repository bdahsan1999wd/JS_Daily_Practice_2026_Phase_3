// 🧩 PROBLEM–02: assignTeacherShift()

// Logic: Checks if a teacher can be assigned to a new time slot.
// Constraints: Max working hours and shift timing (must be before 6 PM / 18:00).

function assignTeacherShift(currentSchedule, newSlot, maxHours) {

    // --- STEP 1: DATA VALIDATION ---
    // Schedule must be an array, and slot/hours must be numbers
    if (!Array.isArray(currentSchedule) || typeof newSlot !== 'number' || typeof maxHours !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: SHIFT TIMING CHECK ---
    // Rules: Teachers cannot start shifts later than 5 PM (17:00)
    if (newSlot > 17) {
        return "LATE_SHIFT_DENIED";
    }

    // --- STEP 3: SCHEDULE CONFLICT CHECK ---
    // Check if the teacher is already assigned to the requested slot
    if (currentSchedule.includes(newSlot)) {
        return "CONFLICT";
    }

    // --- STEP 4: WORKLOAD CAPACITY CHECK ---
    // Check if the teacher has already reached their maximum hours
    if (currentSchedule.length >= maxHours) {
        return "OVERLOADED";
    }

    // --- STEP 5: APPROVAL ---
    // If all checks pass, the shift assignment is successful
    return true;
}

// --- EXAMPLE USAGE ---
console.log(assignTeacherShift([9, 10], 11, 2));
console.log(assignTeacherShift([9], 9, 5));
console.log(assignTeacherShift([10], 18, 5));
console.log(assignTeacherShift([9, 10], 14, 5));