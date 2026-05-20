// 🧩 PROBLEM–03: checkFloorSlope()

// Logic: Water must flow effortlessly toward the drain to prevent stagnant puddles. This function audits the vertical drop against the horizontal distance to ensure the bathroom remains hygienic and dry.

function checkFloorSlope(distanceToDrainFT, levelDropMM) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof distanceToDrainFT !== 'number' || typeof levelDropMM !== 'number' || distanceToDrainFT <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: REQUIREMENT CHECK ---
    // Rule: 10mm drop per 4 feet
    const requiredDrop = (distanceToDrainFT / 4) * 10;

    // --- STEP 3: AUDIT ---
    if (levelDropMM === requiredDrop) {
        return "PERFECT";
    } else if (levelDropMM > requiredDrop) {
        return "FAST_DRAINAGE";
    } else {
        return "RISK_OF_PUDDLING";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkFloorSlope(8, 20));
console.log(checkFloorSlope(8, 15));