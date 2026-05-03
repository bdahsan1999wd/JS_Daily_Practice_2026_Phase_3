// 🧩 PROBLEM–01: calculatePileCapDimensions()

// Logic: This function calculates the size of the concrete block (Pile Cap) based on the diameter of the piles and how many are in the group. It ensures the piles are far enough apart to work effectively and that there is enough concrete "edge" to prevent the piles from breaking through the sides.

function calculatePileCapDimensions(pileDiameter, pileCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof pileDiameter !== 'number' || typeof pileCount !== 'number' || pileDiameter <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE SPACING & EDGE ---
    const spacing = pileDiameter * 3;
    const edgeDistance = pileDiameter * 1.5;
    let lengthInches, widthInches;

    // --- STEP 3: DIMENSION LOGIC ---
    if (pileCount === 4) {
        // Square layout
        lengthInches = spacing + (edgeDistance * 2);
        widthInches = lengthInches;
    } else if (pileCount === 2) {
        // Rectangular layout
        lengthInches = spacing + (edgeDistance * 2);
        widthInches = (edgeDistance * 2);
    } else {
        return "Unsupported Pile Count";
    }

    // Convert to Feet and return object
    return {
        length: lengthInches / 12,
        width: widthInches / 12
    };
}

// Example Usage:
console.log(calculatePileCapDimensions(20, 4));
console.log(calculatePileCapDimensions(20, 2));