// 🧩 PROBLEM–02: getPlasterStatus()

// Logic: Cement needs water for hydration. In high temperatures, water evaporates too quickly, leading to "Mapping Cracks." Curing is mandatory for at least 7 days for internal plaster.

function getPlasterStatus(daysSincePlaster, tempCelsius) {

    // --- STEP 1: VALIDATION ---
    if (typeof daysSincePlaster !== 'number' || typeof tempCelsius !== 'number') return "Invalid Input";

    // --- STEP 2: STATUS LOGIC ---
    if (daysSincePlaster >= 1 && daysSincePlaster <= 3) {
        return tempCelsius > 35 ? "CRITICAL_CURING_REQUIRED" : "STANDARD_CURING";
    } else if (daysSincePlaster >= 4 && daysSincePlaster <= 7) {
        return "CONTINUE_WATERING";
    } else if (daysSincePlaster >= 8) {
        return "READY_FOR_PUTTY";
    } else {
        return "FRESH_PLASTER";
    }
}

// --- EXAMPLE USAGE ---
console.log(getPlasterStatus(2, 38));
console.log(getPlasterStatus(5, 30));