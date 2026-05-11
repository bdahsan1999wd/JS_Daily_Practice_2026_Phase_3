// 🧩 PROBLEM–04: shouldUseCuringCompound()

// Logic: In extreme environments (high wind or low humidity), water curing is ineffective. A curing compound acts as a membrane, sealing the moisture inside the concrete to prevent "Plastic Shrinkage."

function shouldUseCuringCompound(airTemp, humidity, windSpeed) {

    // --- STEP 1: VALIDATION ---
    if (typeof airTemp !== 'number' || typeof humidity !== 'number' || typeof windSpeed !== 'number') {
        return "Invalid Input";
    }
    if (humidity < 0 || humidity > 100) return "Invalid Input";

    // --- STEP 2: EVALUATE CONDITIONS ---
    // Rule 1: High heat and low humidity
    const isExtremeWeather = airTemp > 35 && humidity < 40;

    // Rule 2: High wind speed dries surface instantly
    const isWindy = windSpeed > 25;

    return isExtremeWeather || isWindy;
}

// --- EXAMPLE USAGE ---
console.log(shouldUseCuringCompound(38, 30, 10));
console.log(shouldUseCuringCompound(30, 50, 15));