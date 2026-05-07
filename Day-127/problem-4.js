// 🧩 PROBLEM–04: calculateBeamWeight()

// Logic: Before any other load (like furniture or people) is added, a beam must support its own weight (Dead Load). This is calculated by multiplying its volume by the density of reinforced concrete (150 lbs/ft³).

function calculateBeamWeight(length, width, depth) {

    // --- STEP 1: VALIDATION ---
    if (typeof length !== 'number' || typeof width !== 'number' || typeof depth !== 'number') {
        return "Invalid Input";
    }
    if (length <= 0 || width <= 0 || depth <= 0) return "Invalid Input";

    // --- STEP 2: CALCULATE VOLUME IN CUBIC FEET ---
    const volume = length * (width / 12) * (depth / 12);

    // --- STEP 3: CALCULATE WEIGHT ---
    const weight = Math.round(volume * 150);

    // --- STEP 4: HEAVY BEAM FLAG ---
    if (weight > 5000) {
        return `${weight} - HEAVY_BEAM`;
    }
    return weight;
}

// --- EXAMPLE USAGE ---
console.log(calculateBeamWeight(20, 12, 18));
console.log(calculateBeamWeight(25, 12, 20));