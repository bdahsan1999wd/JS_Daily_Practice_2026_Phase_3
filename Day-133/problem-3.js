// 🧩 PROBLEM–03: calculateDripCourse()

// Logic: The "Drip Course" creates a break in surface tension. Without this, rainwater would run along the underside of the sunshade and soak the wall, causing dampness and fungus (Efflorescence).

function calculateDripCourse(sunshadeThicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof sunshadeThicknessInch !== 'number' || sunshadeThicknessInch <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    // Rule: 25% of thickness at the edge
    let grooveDepth = sunshadeThicknessInch * 0.25;

    // --- STEP 3: CAP AT 1 INCH ---
    // Engineering limit to avoid weakening the edge too much
    if (grooveDepth > 1) {
        grooveDepth = 1.0;
    }

    return grooveDepth;
}

// --- EXAMPLE USAGE ---
console.log(calculateDripCourse(3));
console.log(calculateDripCourse(6));