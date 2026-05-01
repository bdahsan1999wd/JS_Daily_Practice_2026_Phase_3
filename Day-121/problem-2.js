// 🧩 PROBLEM–02: checkLaborEfficiency()

// Logic: Productivity is measured by output per man-hour. This function divides the total work done by the total resource hours used. It then compares this against the industry standard of 15 cft/hour to determine if the team is performing efficiently.

function checkLaborEfficiency(totalVolume, laborCount, hoursWorked) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalVolume !== 'number' || typeof laborCount !== 'number' || typeof hoursWorked !== 'number' ||
        totalVolume <= 0 || laborCount <= 0 || hoursWorked <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PRODUCTIVITY CALCULATION ---
    const actualProductivity = totalVolume / (laborCount * hoursWorked);

    // --- STEP 3: CATEGORIZATION ---
    if (actualProductivity >= 15) {
        return "HIGH";
    } else if (actualProductivity >= 10) {
        return "AVERAGE";
    } else {
        return "LOW_PRODUCTIVITY";
    }
}

// Example Usage:
console.log(checkLaborEfficiency(1200, 10, 8));
console.log(checkLaborEfficiency(600, 10, 8));