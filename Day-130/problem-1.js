// 🧩 PROBLEM–01: calculatePourDuration()

// Logic: A concrete pump's efficiency isn't constant. We must account for switching transit mixers (trucks), cleaning pipes, and repositioning the pump boom. This function calculates the practical duration of the pour.

function calculatePourDuration(totalVolumeCFT, pumpCapacityCMH) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalVolumeCFT !== 'number' || typeof pumpCapacityCMH !== 'number' || totalVolumeCFT <= 0 || pumpCapacityCMH <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONVERT CFT TO CM ---
    // Conversion: 1 Cubic Meter (CM) = 35.31 Cubic Feet (CFT)
    const totalVolumeCM = totalVolumeCFT / 35.31;

    // --- STEP 3: CALCULATE THEORETICAL TIME ---
    const theoreticalHours = totalVolumeCM / pumpCapacityCMH;

    // --- STEP 4: APPLY 20% EFFICIENCY LOSS ---
    // Total Time = Theoretical Time * 1.20
    const practicalHours = theoreticalHours * 1.20;

    return Number(practicalHours.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculatePourDuration(2500, 25));