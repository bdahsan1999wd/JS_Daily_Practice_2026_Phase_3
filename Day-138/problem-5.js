// 🧩 PROBLEM–05: auditExternalCuring()

// Logic: External plaster dries rapidly due to wind and sun exposure. We must ensure it is watered frequently enough to cure properly. High wind raises the minimum requirement. If watering is insufficient, we report the exact shortfall so the site team knows precisely how many more sessions are needed.

function auditExternalCuring(timesWateredPerDay, avgWindSpeedKMH) {

    // --- STEP 1: VALIDATION ---
    if (
        typeof timesWateredPerDay !== 'number' || timesWateredPerDay < 0 ||
        typeof avgWindSpeedKMH !== 'number' || avgWindSpeedKMH < 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE MINIMUM REQUIRED FREQUENCY ---
    // Base requirement: 3 times/day.
    // Wind factor: if wind speed exceeds 20 km/h, requirement rises to 5 times/day.
    const required = avgWindSpeedKMH > 20 ? 5 : 3;

    // --- STEP 3: CHECK AND RETURN RESULT ---
    // PASS        → actual watering meets or exceeds the requirement.
    // INSUFFICIENT→ actual watering falls short; report the exact shortfall.
    if (timesWateredPerDay >= required) {
        return "PASS";
    } else {
        const shortfall = required - timesWateredPerDay;
        return `INSUFFICIENT: ${shortfall}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(auditExternalCuring(4, 25));
console.log(auditExternalCuring(4, 15));
console.log(auditExternalCuring(2, 10));
console.log(auditExternalCuring(6, 30));