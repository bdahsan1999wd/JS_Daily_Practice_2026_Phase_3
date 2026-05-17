// 🧩 PROBLEM–04: isWallSquare()

// Logic: The 3-4-5 rule is based on the Pythagorean theorem. It ensures that corners are at exactly 90 degrees, which is crucial for tile layout and furniture placement.

function isWallSquare(sideA, sideB, hypotenuse) {

    // --- STEP 1: VALIDATION ---
    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof hypotenuse !== 'number') return "Invalid Input";

    // --- STEP 2: PYTHAGOREAN CHECK ---
    const sumOfSquares = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    const hypotenuseSquare = Math.pow(hypotenuse, 2);

    // --- STEP 3: TOLERANCE CHECK ---
    const difference = Math.abs(sumOfSquares - hypotenuseSquare);

    return difference <= 0.5;
}

// --- EXAMPLE USAGE ---
console.log(isWallSquare(3, 4, 5));
console.log(isWallSquare(3, 4, 5.2));