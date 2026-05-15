// 🧩 PROBLEM–03: estimateJunctionBoxes()

// Logic: Junction boxes act as distribution hubs for wires. Power sockets need independent boxes due to thicker wires and higher heat.

function estimateJunctionBoxes(lightPoints, fanPoints, socketPoints) {

    // --- STEP 1: VALIDATION ---
    if (typeof lightPoints !== 'number' || typeof fanPoints !== 'number' || typeof socketPoints !== 'number') {
        return "Invalid Input";
    }
    if (lightPoints < 0 || fanPoints < 0 || socketPoints < 0) return "Invalid Input";

    // --- STEP 2: CALCULATE BASE BOXES ---
    const lightFanBoxes = Math.ceil((lightPoints + fanPoints) / 3);
    const totalBaseBoxes = lightFanBoxes + socketPoints;

    // --- STEP 3: ADD 10% BUFFER ---
    const finalTotal = Math.round(totalBaseBoxes * 1.10);

    return finalTotal;
}

// --- EXAMPLE USAGE ---
console.log(estimateJunctionBoxes(10, 4, 5));