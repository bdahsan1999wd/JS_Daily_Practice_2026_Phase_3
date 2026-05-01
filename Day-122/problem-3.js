// 🧩 PROBLEM–03: calculatePileConcrete()

// Logic: Piles are cylinders. This function uses the volume formula for a cylinder ($V = \pi r^2 h$). It handles unit conversion (inches to feet) and includes a "Wastage Factor" because liquid concrete often seeps into gaps in the surrounding soil.

function calculatePileConcrete(diameter, depth) {

    // --- STEP 1: VALIDATION ---
    if (typeof diameter !== 'number' || typeof depth !== 'number' || depth <= 0) {
        return "Invalid Input";
    }
    // Minimum diameter for load-bearing piles
    if (diameter < 18) return "Invalid Diameter";

    // --- STEP 2: VOLUME CALCULATION ---
    const radiusFeet = (diameter / 2) / 12;
    const baseVolume = Math.PI * Math.pow(radiusFeet, 2) * depth;

    // Add 15% wastage factor
    const totalVolume = baseVolume * 1.15;

    return Number(totalVolume.toFixed(2));
}

// Example Usage:
console.log(calculatePileConcrete(20, 50));
console.log(calculatePileConcrete(12, 50));