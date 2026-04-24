// 🧩 PROBLEM–04: calculateIncrement()

// Logic: Calculates a staff increment by summing different percentage bonuses based on tenure and performance. It includes a critical "Cap" logic to ensure the total bonus does not exceed budget regulations (10%).

function calculateIncrement(staff) {

    // --- STEP 1: VALIDATION ---
    if (!staff || typeof staff.baseSalary !== 'number' || typeof staff.years !== 'number') {
        return "Invalid Input";
    }

    const { baseSalary, years, deptPerf } = staff;
    let totalIncrementPct = 5; // Start with Base 5%

    // --- STEP 2: ADDITIONAL PERCENTAGES ---
    if (years > 10) totalIncrementPct += 2; // Seniority bonus
    if (deptPerf === "A") totalIncrementPct += 3; // Performance bonus

    // --- STEP 3: CAP CHALLENGE ---
    // Logical gate to ensure the percentage never exceeds 10%
    if (totalIncrementPct > 10) totalIncrementPct = 10;

    // --- STEP 4: RETURN INCREMENT AMOUNT ---
    return (baseSalary * totalIncrementPct) / 100;
}

// --- EXAMPLE USAGE ---
console.log(calculateIncrement({ baseSalary: 10000, years: 12, deptPerf: "A" }));