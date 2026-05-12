// 🧩 PROBLEM–05: validateStairRebar()

// Logic: In stair reinforcement, the tension bars must cross at the junctions. If bars follow the corner without crossing, the tension will push the concrete outward, causing a "Bursting" failure.

function validateStairRebar(mainBarDiaMM, isCrossed) {

    // --- STEP 1: VALIDATION ---
    if (typeof mainBarDiaMM !== 'number' || typeof isCrossed !== 'boolean') return "Invalid Input";

    // --- STEP 2: REBAR STRENGTH CHECK ---
    if (mainBarDiaMM < 12) {
        return "WEAK_REINFORCEMENT";
    }

    // --- STEP 3: KINK/CROSS LOGIC ---
    if (!isCrossed) {
        return "DANGER: BURST_RISK";
    }

    return "STRUCTURALLY_SOUND";
}

// --- EXAMPLE USAGE ---
console.log(validateStairRebar(12, true));
console.log(validateStairRebar(12, false));