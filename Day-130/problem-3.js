// 🧩 PROBLEM–03: auditConcreteWorkability()

// Logic: The Slump Test measures how "liquid" the concrete is. Too much water (high slump) reduces strength; too little water (low slump) leads to "Honeycombing" because the concrete won't flow around the rebar.

function auditConcreteWorkability(measuredSlumpMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof measuredSlumpMM !== 'number' || measuredSlumpMM <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: AUDIT LOGIC (Target 100mm ± 25mm) ---
    if (measuredSlumpMM >= 75 && measuredSlumpMM <= 125) {
        return "ACCEPTED";
    } else if (measuredSlumpMM < 75) {
        return "REJECT: TOO_DRY";
    } else {
        return "REJECT: TOO_WET";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditConcreteWorkability(110));
console.log(auditConcreteWorkability(140));