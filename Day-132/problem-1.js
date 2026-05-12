// 🧩 PROBLEM–01: calculateStairSteps()

// Logic: To maintain a comfortable climb, the riser height must be consistent. For structural symmetry in a two-flight stair, we divide the steps equally. An odd number of total steps would make the two flights unequal.

function calculateStairSteps(floorHeightFT, riserInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof floorHeightFT !== 'number' || typeof riserInch !== 'number') return "Invalid Input";
    if (riserInch < 6 || riserInch > 7) return "Invalid Riser";

    // --- STEP 2: CALCULATE STEPS ---
    const totalHeightInches = floorHeightFT * 12;
    const totalSteps = totalHeightInches / riserInch;

    // --- STEP 3: ODD/FRACTION CHECK ---
    // If steps aren't a whole even number, it needs a redesign for symmetry
    if (totalSteps % 2 !== 0) {
        return "REDESIGN: ODD_STEPS";
    }

    return {
        totalSteps: totalSteps,
        stepsPerFlight: totalSteps / 2
    };
}

// --- EXAMPLE USAGE ---
console.log(calculateStairSteps(10, 6));
console.log(calculateStairSteps(10, 6.5));