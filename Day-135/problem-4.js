// 🧩 PROBLEM–04: validateOpeningReinforcement()

// Logic: Stress concentrates at window/door corners. Larger openings must have rebar anchors (Corner Bars) to prevent diagonal tension cracks.

function validateOpeningReinforcement(openingAreaSqFt, hasCornerBars) {

    if (typeof openingAreaSqFt !== 'number' || openingAreaSqFt <= 0 || typeof hasCornerBars !== 'boolean') {
        return "Invalid Input";
    }

    if (openingAreaSqFt > 15) {
        return hasCornerBars; // Must be true for large openings
    }

    return true; // Optional for small openings
}

// --- EXAMPLE USAGE ---
console.log(validateOpeningReinforcement(20, true));
console.log(validateOpeningReinforcement(20, false));