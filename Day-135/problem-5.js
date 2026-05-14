// 🧩 PROBLEM–05: canContinueMasonry()

// Logic: Cement has an initial setting time. Using mortar after it begins to harden results in poor bond strength and brittle joints.

function canContinueMasonry(minutesSinceMix, isRetarderUsed) {

    if (typeof minutesSinceMix !== 'number' || minutesSinceMix < 0 || typeof isRetarderUsed !== 'boolean') {
        return "Invalid Input";
    }

    if (minutesSinceMix > 300) {
        return "CRITICAL: MORTAR_HARDENED";
    }

    const limit = isRetarderUsed ? 150 : 90;

    if (minutesSinceMix <= limit) {
        return "PROCEED";
    } else {
        return "DISCARD_MORTAR";
    }
}

// --- EXAMPLE USAGE ---
console.log(canContinueMasonry(100, false));
console.log(canContinueMasonry(100, true));