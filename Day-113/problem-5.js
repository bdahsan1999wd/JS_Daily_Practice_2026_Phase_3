// 🧩 PROBLEM–05: auditMeritPoints()

// Logic: Aggregate award and penalty points while scanning for critical disqualification criteria (individual penalties over 50 points).

function auditMeritPoints(records) {
    
    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(records)) {
        return "Invalid Input";
    }

    let netPoints = 0;

    // --- STEP 2: AUDIT LOGIC ---
    for (let record of records) {
        const { type, points } = record;

        // Challenge: Disqualified if ANY single penalty is > 50
        if (type === "Penalty" && points > 50) {
            return "DISQUALIFIED_BY_PENALTY";
        }

        // Add or Subtract points based on type
        if (type === "Award") {
            netPoints += points;
        } else if (type === "Penalty") {
            netPoints -= points;
        }
    }

    // --- STEP 3: STATUS MAPPING ---
    if (netPoints >= 100) return "LEADERSHIP_CANDIDATE";
    if (netPoints >= 50) return "GOOD_STANDING";
    if (netPoints < 0) return "DISCIPLINARY_ACTION";

    return "STABLE";
}

// --- EXAMPLE USAGE ---
const history = [
    { activity: "Sports", points: 120, type: "Award" },
    { activity: "Late", points: 60, type: "Penalty" }
];
console.log(auditMeritPoints(history));