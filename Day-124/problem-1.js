// 🧩 PROBLEM–01: calculateLapLength()

// Logic: Lap length is the overlap provided between two reinforcement bars to transfer structural loads smoothly. For seismic resistance, an extra 15% buffer is added to ensure the joint doesn't slip during a tremor or earthquake.

function calculateLapLength(barDiameterMM, concreteGradePSI) {

    // --- STEP 1: VALIDATION ---
    // Diameter and PSI must be positive numbers
    if (typeof barDiameterMM !== 'number' || typeof concreteGradePSI !== 'number' || barDiameterMM <= 0 || concreteGradePSI <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE FACTOR ---
    // Higher grade concrete (4000+ PSI) has better grip, so it needs less overlap
    let factor = concreteGradePSI >= 4000 ? 40 : 50;

    // --- STEP 3: CALCULATION WITH SAFETY BUFFER ---
    // Applying the 15% safety buffer for earthquake-resistant design
    let totalLength = (barDiameterMM * factor) * 1.15;

    // Returning the final length rounded to the nearest integer
    return Math.round(totalLength);
}

// --- EXAMPLE USAGE ---
console.log(calculateLapLength(20, 4000));
console.log(calculateLapLength(16, 3000));