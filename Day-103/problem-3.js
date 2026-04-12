// 🧩 PROBLEM–03: isShiftConflict()

// Logic: Check if a new shift starts during an existing shift, excluding back-to-back timing.

function isShiftConflict(existingStart, existingEnd, newStart) {

    // --- STEP 1: VALIDATION ---
    if (typeof existingStart !== 'number' || typeof existingEnd !== 'number' || typeof newStart !== 'number' ||
        existingStart < 0 || existingEnd < 0 || newStart < 0 || existingStart >= existingEnd) {
        return "Invalid Input";
    }

    // --- STEP 2: CONFLICT LOGIC ---
    if (newStart >= existingStart && newStart < existingEnd) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(isShiftConflict(900, 1000, 930));
console.log(isShiftConflict(900, 1000, 1000));