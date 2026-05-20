// 🧩 PROBLEM–05: needsExpansionJoint()

// Logic: Large tiled surfaces are "living" structures—they expand in the heat and contract in the cold. Expansion joints act as "shock absorbers" made of flexible silicone to prevent the tiles from "tenting" or cracking.

function needsExpansionJoint(continuousLengthFT, isOutdoor) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof continuousLengthFT !== 'number' || typeof isOutdoor !== 'boolean' || continuousLengthFT <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CRITICAL THRESHOLD ---
    if (continuousLengthFT > 50) {
        return "MANDATORY_DOUBLE_JOINT";
    }

    // --- STEP 3: STANDARD LIMITS ---
    const limit = isOutdoor ? 15 : 25;

    return continuousLengthFT > limit;
}

// --- EXAMPLE USAGE ---
console.log(needsExpansionJoint(20, true));
console.log(needsExpansionJoint(55, false));