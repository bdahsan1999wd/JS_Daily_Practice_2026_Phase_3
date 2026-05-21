// 🧩 PROBLEM–04: calculatePrimerMix()

// Logic: Validate the ratio string prefix, extract the water multiplier using string manipulation, and compute the total volume to one decimal place.

function calculatePrimerMix(primerLiters, dilutionRatio) {

    // --- STEP 1: VALIDATION ---
    if (typeof primerLiters !== 'number' || typeof dilutionRatio !== 'string' || primerLiters <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATIO LOGIC ---
    if (!dilutionRatio.startsWith("1:")) {
        return "Invalid Ratio";
    }

    // Extract value after "1:"
    const waterPart = parseFloat(dilutionRatio.split(":")[1]);

    if (isNaN(waterPart)) return "Invalid Input";

    // --- STEP 3: CALCULATION ---
    const totalVolume = primerLiters + (primerLiters * waterPart);

    return Number(totalVolume.toFixed(1));
}

// --- EXAMPLE USAGE ---
console.log(calculatePrimerMix(10, "1:0.5"));
console.log(calculatePrimerMix(10, "2:1"));