// 🧩 PROBLEM–02: predictConcreteStrength()

// Logic: Concrete is a living material that gains strength over time. Standard engineering milestones (3, 7, 14, 28 days) are used to predict if the mix will eventually reach its 100% design strength.

function predictConcreteStrength(designStrengthPSI, daysPassed) {
    // --- STEP 1: VALIDATION ---
    if (typeof designStrengthPSI !== 'number' || typeof daysPassed !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: STRENGTH PROJECTION LOGIC ---
    let percentage;
    switch (daysPassed) {
        case 3: percentage = 0.40; break;
        case 7: percentage = 0.65; break;
        case 14: percentage = 0.90; break;
        case 28: percentage = 0.99; break;
        default:
            return "Check on Milestone Days";
    }

    // --- STEP 3: CALCULATION ---
    return Math.round(designStrengthPSI * percentage);
}

// --- EXAMPLE USAGE ---
console.log(predictConcreteStrength(4000, 7));
console.log(predictConcreteStrength(3500, 10));