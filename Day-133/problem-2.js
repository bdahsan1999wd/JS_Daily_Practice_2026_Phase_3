// 🧩 PROBLEM–02: checkSunshadeSteel()

// Logic: In a cantilever, the tension is at the TOP. Putting rebar at the bottom is a fatal engineering error. Also, longer projections need to be anchored deep into the main slab (Backspan) to prevent the sunshade from rotating out.

function checkSunshadeSteel(projectionFT, mainBarPosition) {

    // --- STEP 1: VALIDATION ---
    if (typeof projectionFT !== 'number' || typeof mainBarPosition !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: SAFETY CHECK (CRITICAL) ---
    // Standard rebar position for cantilevers must be TOP
    if (mainBarPosition.toUpperCase() === "BOTTOM") {
        return "DANGER: COLLAPSE_RISK";
    }

    // --- STEP 3: PROJECTION CHECK ---
    if (projectionFT > 2.5) {
        return "SECURE_WITH_BACKSPAN";
    } else {
        return "SECURE";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkSunshadeSteel(2.0, "BOTTOM"));
console.log(checkSunshadeSteel(3.0, "TOP"));