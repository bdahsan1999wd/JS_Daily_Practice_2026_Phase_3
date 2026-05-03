// 🧩 PROBLEM–05: trackCuringTemperature()

// Logic: Large concrete pours (Mass Concrete) create heat. If the inside is too hot while the outside is cool, the "Thermal Gradient" causes cracks. This tracker monitors both the absolute heat and the temperature difference to prevent permanent structural damage.

function trackCuringTemperature(coreTemp, surfaceTemp) {

    // --- STEP 1: VALIDATION ---
    if (typeof coreTemp !== 'number' || typeof surfaceTemp !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: TEMPERATURE LOGIC ---
    const tempDiff = Math.abs(coreTemp - surfaceTemp);

    // Rule 1: CRITICAL Check
    if (coreTemp > 70 || tempDiff > 20) {
        return "CRITICAL";
    }

    // Rule 2: MONITOR Check
    if (tempDiff >= 15 && tempDiff <= 20) {
        return "MONITOR";
    }

    // Default
    return "NORMAL";
}

// Example Usage:
console.log(trackCuringTemperature(65, 40));
console.log(trackCuringTemperature(55, 42));