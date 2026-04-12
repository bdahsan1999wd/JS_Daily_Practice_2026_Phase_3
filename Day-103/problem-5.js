// 🧩 PROBLEM–05: canEnterClass()

// Logic: Determine entry status based on lateness (15 min threshold) and permit availability.

function canEnterClass(startTime, entryTime, hasPermit) {

    // --- STEP 1: VALIDATION ---
    if (typeof startTime !== 'number' || typeof entryTime !== 'number' || typeof hasPermit !== 'boolean' ||
        startTime < 0 || entryTime < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: LATENESS CALCULATION ---
    const minutesLate = entryTime - startTime;

    // --- STEP 3: ENTRY PERMISSION LOGIC ---
    if (minutesLate <= 15) {
        return "ALLOWED";
    } else if (hasPermit) {
        return "ALLOWED_WITH_PERMIT";
    } else {
        return "LATE: ACCESS_DENIED";
    }
}

// --- EXAMPLE USAGE ---
console.log(canEnterClass(900, 910, false));
console.log(canEnterClass(900, 920, true)); 
console.log(canEnterClass(900, 920, false));