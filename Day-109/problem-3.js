// 🧩 PROBLEM–03: getClassroomLightStatus()

// Logic: Automate lighting based on occupancy and natural light intensity ranges.

function getClassroomLightStatus(isOccupied, naturalLightLevel) {

    // --- STEP 1: VALIDATION ---
    if (typeof isOccupied !== 'boolean' || typeof naturalLightLevel !== 'number' || naturalLightLevel < 0 || naturalLightLevel > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: VACANCY CHECK ---
    if (!isOccupied) {
        return "LIGHTS_OFF";
    }

    // --- STEP 3: OCCUPIED LOGIC ---
    if (naturalLightLevel > 70) {
        return "LIGHTS_OFF: NATURAL_LIGHT_SUFFICIENT";
    } else if (naturalLightLevel >= 30) {
        return "DIM_LIGHTS";
    } else {
        return "MAX_BRIGHTNESS";
    }
}

// --- EXAMPLE USAGE ---
console.log(getClassroomLightStatus(true, 20));
console.log(getClassroomLightStatus(true, 80));