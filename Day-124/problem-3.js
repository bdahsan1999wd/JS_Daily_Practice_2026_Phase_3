// 🧩 PROBLEM–03: syncFloorLevels()

// Logic: Gravity keeps water at the same level in a transparent pipe. We use this to synchronize heights across different columns. A 2mm margin is allowed for surface tension and human error in marking.

function syncFloorLevels(pointALevel, pointBLevel) {

    // --- STEP 1: VALIDATION ---
    if (typeof pointALevel !== 'number' || typeof pointBLevel !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ABSOLUTE DIFFERENCE ---
    const difference = Math.abs(pointALevel - pointBLevel);

    // --- STEP 3: LEVEL SYNC CHECK ---
    // If difference is within 2mm, it's considered leveled
    return difference <= 2;
}

// --- EXAMPLE USAGE ---
console.log(syncFloorLevels(100.5, 102.1));
console.log(syncFloorLevels(100, 103));