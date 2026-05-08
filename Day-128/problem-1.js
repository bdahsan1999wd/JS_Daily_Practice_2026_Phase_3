// 🧩 PROBLEM–01: calculatePropCount()

// Logic: Props are vertical supports that prevent the wet slab from sagging. Standard spacing is usually 3ft. If the spacing is too high, the formwork might collapse under the weight of wet concrete.

function calculatePropCount(slabArea, spacing) {

    // --- STEP 1: VALIDATION ---
    if (typeof slabArea !== 'number' || typeof spacing !== 'number' || slabArea <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: UNSAFE SPACING CHECK ---
    // If props are placed more than 4ft apart, the load distribution becomes unstable
    if (spacing > 4) return "UNSAFE_SPACING";

    // --- STEP 3: CALCULATION ---
    // The number of props is the area divided by the square of the spacing
    const totalProps = slabArea / (spacing * spacing);

    // Rounding up to ensure we don't have a fraction of a support
    return Math.ceil(totalProps);
}

// --- EXAMPLE USAGE ---
console.log(calculatePropCount(1800, 3));
console.log(calculatePropCount(1800, 5));