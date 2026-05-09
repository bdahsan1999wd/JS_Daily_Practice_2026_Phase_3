// 🧩 PROBLEM–02: checkColdJointRisk()

// Logic: A "Cold Joint" is a structural weakness. If the previous layer of concrete hardens before the next one is poured, they won't bond together. High temperatures accelerate setting, making the safety window much shorter.

function checkColdJointRisk(ambientTemp, timeSinceLastTruck) {

    // --- STEP 1: VALIDATION ---
    if (typeof ambientTemp !== 'number' || typeof timeSinceLastTruck !== 'number' || timeSinceLastTruck < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE MAX ALLOWED GAP ---
    let maxGap;
    if (ambientTemp > 35) {
        maxGap = 45; // Extreme heat
    } else if (ambientTemp >= 25 && ambientTemp <= 35) {
        maxGap = 60; // Moderate heat
    } else {
        maxGap = 90; // Cooler weather
    }

    // --- STEP 3: RISK ASSESSMENT ---
    return timeSinceLastTruck <= maxGap ? "SAFE" : "RISK: COLD_JOINT_LIKELY";
}

// --- EXAMPLE USAGE ---
console.log(checkColdJointRisk(38, 50));
console.log(checkColdJointRisk(20, 75));