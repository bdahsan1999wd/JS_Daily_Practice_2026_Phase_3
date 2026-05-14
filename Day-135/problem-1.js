// 🧩 PROBLEM–01: validateBondPattern()

// Logic: English Bond uses alternating Header and Stretcher rows. A Queen Closer is essential in Header rows to break the vertical continuity of joints, which is the secret to high-strength masonry.

function validateBondPattern(rowNumber, isQueenCloserPresent) {
    
    if (typeof rowNumber !== 'number' || rowNumber <= 0 || typeof isQueenCloserPresent !== 'boolean') {
        return "Invalid Input";
    }

    const isOddRow = rowNumber % 2 !== 0;

    if (isOddRow) {
        // Odd rows are Headers and REQUIRE a Queen Closer
        return isQueenCloserPresent ? "STABLE_BOND" : "VERTICAL_JOINT_RISK";
    } else {
        // Even rows are Stretchers
        return "STABLE_BOND";
    }
}

// --- EXAMPLE USAGE ---
console.log(validateBondPattern(1, true));
console.log(validateBondPattern(3, false));