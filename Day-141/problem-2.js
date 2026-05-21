//🧩 PROBLEM–02: getSandingSchedule()

// Logic: Calculate dynamic minimum dry time based on humidity levels. Evaluate the elapsed time to determine if the putty is wet, ready, or over-hardened.

function getSandingSchedule(hoursSinceApplication, humidity) {

    // --- STEP 1: VALIDATION ---
    if (typeof hoursSinceApplication !== 'number' || typeof humidity !== 'number' || hoursSinceApplication < 0 || humidity < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE DYNAMIC DRY TIME ---
    let minDryTime = 6;
    if (humidity > 70) {
        minDryTime += 4; // High humidity adds 4 hours
    }

    // --- STEP 3: EVALUATE STATUS ---
    if (hoursSinceApplication < minDryTime) {
        return "WAITING";
    } else if (hoursSinceApplication >= minDryTime && hoursSinceApplication <= 72) {
        return "READY_FOR_SANDING";
    } else {
        return "HARD_SANDING_REQUIRED";
    }
}

// --- EXAMPLE USAGE ---
console.log(getSandingSchedule(5, 40));
console.log(getSandingSchedule(10, 80));