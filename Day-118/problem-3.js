// 🧩 PROBLEM–03: calculateLightPoints()

// Logic: Lighting requirements change based on the room's function. This function uses a lookup logic to determine the "points per 100 sq.ft" based on the roomType. It then scales that to the room's total area and rounds up to ensure no dark corners are left.

function calculateLightPoints(area, roomType) {

    // --- STEP 1: VALIDATION ---
    if (typeof area !== 'number' || area <= 0 || typeof roomType !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE REQUIREMENTS ---
    const requirements = {
        "Bedroom": 2,
        "Kitchen": 4,
        "Drawing": 3
    };

    const pointsPer100 = requirements[roomType];

    // Check if roomType exists in our list
    if (pointsPer100 === undefined) return "Invalid Input";

    // --- STEP 3: CALCULATION ---
    // Formula: (area / 100) * pointsPer100
    const totalPoints = (area / 100) * pointsPer100;

    return Math.ceil(totalPoints);
}

// Example Usage:
console.log(calculateLightPoints(250, "Bedroom"));
console.log(calculateLightPoints(150, "Kitchen"));