// 🧩 PROBLEM–05: checkConcreteCover()

// Logic: Clear cover is the gap between rebar and the concrete's surface. It prevents "Carbonation" and rust. Underground steel needs more cover because it's in direct contact with soil moisture and salts.

function checkConcreteCover(location, actualCoverMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof location !== 'string' || typeof actualCoverMM !== 'number' || actualCoverMM <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SET STANDARDS ---
    let minRequired;
    if (location === "Underground") {
        minRequired = 75; // Standard for foundations/starters
    } else if (location === "Columns") {
        minRequired = 40; // Standard for above-ground columns
    } else {
        return "Invalid Input"; // Only handles specified zones
    }

    // --- STEP 3: AUDIT THE MEASUREMENT ---
    if (actualCoverMM === minRequired) {
        return "OPTIMAL";
    } else if (actualCoverMM > minRequired && actualCoverMM <= minRequired + 10) {
        // Safe to have a little extra, but not too much
        return "SAFE";
    } else {
        // Too low (rust danger) or too much (cracking risk)
        return "DANGER";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkConcreteCover("Underground", 80));
console.log(checkConcreteCover("Columns", 35));