// 🧩 PROBLEM–01: checkAdmissionEligibility()

// Logic: Determine student eligibility based on age range (10-15) and minimum marks (50).

function checkAdmissionEligibility(age, prevMarks) {

    // --- STEP 1: VALIDATION ---
    // age and prevMarks must be positive numbers
    if (typeof age !== 'number' || age < 0 || typeof prevMarks !== 'number' || prevMarks < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ELIGIBILITY LOGIC ---
    // Student must be between 10-15 years old AND marks >= 50
    if (age >= 10 && age <= 15 && prevMarks >= 50) {
        return true;
    } else {
        return false;
    }
}

// --- EXAMPLE USAGE ---
console.log(checkAdmissionEligibility(12, 65));
console.log(checkAdmissionEligibility(16, 80));
console.log(checkAdmissionEligibility(-5, 50));