// 🧩 PROBLEM–01: calculateTeacherSalary()

// Logic: Calculate take-home pay by adding extra class pay and bonuses, then deducting 10% tax.

function calculateTeacherSalary(baseSalary, extraClasses) {

    // --- STEP 1: VALIDATION ---
    if (typeof baseSalary !== 'number' || baseSalary < 0 || typeof extraClasses !== 'number' || extraClasses < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE GROSS TOTAL ---
    let extraPay = extraClasses * 40;
    let totalBeforeTax = baseSalary + extraPay;

    // --- STEP 3: APPLY BONUS ---
    if (extraClasses > 20) {
        totalBeforeTax += 200;
    }

    // --- STEP 4: DEDUCT TAX (10%) ---
    const tax = totalBeforeTax * 0.10;
    const netSalary = totalBeforeTax - tax;

    return netSalary;
}

// --- EXAMPLE USAGE ---
console.log(calculateTeacherSalary(3000, 10));
console.log(calculateTeacherSalary(3000, 25));