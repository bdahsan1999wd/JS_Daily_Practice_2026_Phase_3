// 🧩 PROBLEM–03: calculateDailyPayroll()

// Logic: This function calculates a laborer's daily earnings based on an 8-hour shift. Hours worked beyond 8 are treated as overtime (OT) at a 1.5x premium. It also includes a "Meal Allowance" bonus if the shift becomes excessively long (over 12 hours).

function calculateDailyPayroll(baseWage, hoursWorked) {

    // --- STEP 1: VALIDATION ---
    if (typeof baseWage !== 'number' || typeof hoursWorked !== 'number' || baseWage <= 0 || hoursWorked <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: WAGE CALCULATION ---
    const hourlyRate = baseWage / 8;
    let totalWage = 0;

    if (hoursWorked <= 8) {
        totalWage = baseWage;
    } else {
        const overtimeHours = hoursWorked - 8;
        totalWage = baseWage + (overtimeHours * hourlyRate * 1.5);
    }

    // --- STEP 3: MEAL ALLOWANCE CHALLENGE ---
    if (hoursWorked > 12) {
        totalWage += 50;
    }

    return Number(totalWage.toFixed(2));
}

// Example Usage:
console.log(calculateDailyPayroll(800, 10));
console.log(calculateDailyPayroll(800, 13));