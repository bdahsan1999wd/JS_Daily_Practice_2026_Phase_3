// 🧩 PROBLEM–02: verifyFoundationSafety()

// Logic: This function performs a safety audit on soil test results. It iterates through an array of test spots, calculates a stability score based on physical properties, and determines if the site is ready for construction or requires additional structural piling.

function verifyFoundationSafety(testSpots) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(testSpots) || testSpots.length === 0) return "Invalid Input";

    let safeCount = 0;

    // --- STEP 2: STABILITY CALCULATION ---
    for (const spot of testSpots) {
        // Ensure all required properties exist for the spot
        if (typeof spot.cohesion !== 'number' || typeof spot.friction !== 'number' || typeof spot.density !== 'number') {
            return "Invalid Input";
        }

        // Formula: (cohesion * 2.5) + (friction * 1.2) + (density * 10)
        const stabilityScore = (spot.cohesion * 2.5) + (spot.friction * 1.2) + (spot.density * 10);

        if (stabilityScore >= 100) {
            safeCount++;
        }
    }

    // --- STEP 3: SUMMARY GENERATION ---
    const totalSpots = testSpots.length;
    const status = (safeCount === totalSpots) ? "READY" : "NEEDS_PILING";

    return `TOTAL_SPOTS: ${totalSpots}, SAFE: ${safeCount}, STATUS: ${status}`;
}

// Example Usage:
console.log(verifyFoundationSafety([{ id: 1, cohesion: 20, friction: 30, density: 2 }, { id: 2, cohesion: 10, friction: 20, density: 1 }]));