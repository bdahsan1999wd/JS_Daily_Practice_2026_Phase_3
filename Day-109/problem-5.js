// 🧩 PROBLEM–05: isTopStudentCandidate()

// Logic: Evaluate "Student of the Year" criteria, allowing a GPA bypass for exceptionally high scores.

function isTopStudentCandidate(attendance, extracurricularCount, averageGrade) {

    // --- STEP 1: VALIDATION ---
    if (typeof attendance !== 'number' || typeof extracurricularCount !== 'number' || typeof averageGrade !== 'number' ||
        attendance < 0 || attendance > 100 || extracurricularCount < 0 || averageGrade < 0 || averageGrade > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: HIGH PERFORMANCE EXCEPTION ---
    if (averageGrade >= 98 && attendance >= 90) {
        return true;
    }

    // --- STEP 3: STANDARD CRITERIA ---
    if (attendance >= 95 && extracurricularCount >= 3 && averageGrade >= 90) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(isTopStudentCandidate(96, 4, 92));
console.log(isTopStudentCandidate(91, 1, 99));
console.log(isTopStudentCandidate(90, 4, 85));