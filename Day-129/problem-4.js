// 🧩 PROBLEM–04: checkConduitCapacity()

// Logic: Electrical wires generate heat. If a conduit is overstuffed, the heat can't dissipate, leading to insulation failure. Engineering standard: Only 40% of the pipe should be filled.

function checkConduitCapacity(conduitDiameterMM, wireCount, wireDiameterMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof conduitDiameterMM !== 'number' || typeof wireCount !== 'number' || typeof wireDiameterMM !== 'number') {
        return "Invalid Input";
    }
    if (wireCount === 0) return "EMPTY";
    if (conduitDiameterMM <= 0 || wireDiameterMM <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE AREAS (PI * R^2) ---
    const conduitRadius = conduitDiameterMM / 2;
    const conduitArea = Math.PI * Math.pow(conduitRadius, 2);

    const wireRadius = wireDiameterMM / 2;
    const totalWireArea = (Math.PI * Math.pow(wireRadius, 2)) * wireCount;

    // --- STEP 3: CAPACITY CHECK ---
    const maxAllowedArea = conduitArea * 0.40; // 40% Rule

    return totalWireArea <= maxAllowedArea ? "SAFE" : "OVERLOADED";
}

// --- EXAMPLE USAGE ---
console.log(checkConduitCapacity(25, 4, 5));