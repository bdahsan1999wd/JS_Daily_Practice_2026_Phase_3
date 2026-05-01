// 🧩 PROBLEM–01: calculatePileDepth()

// Logic: This function determines how deep a pile needs to go based on the building's weight and the friction of the soil. It applies a 20% seismic safety buffer and enforces a minimum standard of 40 feet to ensure the building stays anchored during environmental shifts.

function calculatePileDepth(totalBuildingLoad, soilFriction) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBuildingLoad !== 'number' || typeof soilFriction !== 'number' ||
        totalBuildingLoad <= 0 || soilFriction <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DEPTH CALCULATION ---
    let depth = totalBuildingLoad / soilFriction;
    depth = depth * 1.20; // Adding 20% seismic safety factor

    // --- STEP 3: MINIMUM DEPTH CHALLENGE ---
    // Enforce 40ft minimum for 6-story buildings
    if (depth < 40) {
        depth = 40;
    }

    return Math.round(depth);
}

// Example Usage:
console.log(calculatePileDepth(150, 4));
console.log(calculatePileDepth(100, 5));