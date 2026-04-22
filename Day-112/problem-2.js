// 🧩 PROBLEM–02: getTeacherEfficiency()

// Logic: Evaluates a teacher's performance based on student success and course progress.
// Metrics: Pass Rate = (Passed Students / Total Students) * 100, Syllabus Completion Percentage.

function getTeacherEfficiency(totalStudents, passedStudents, syllabusPct) {

    // --- STEP 1: VALIDATION ---
    // 1. Ensure all inputs are numbers
    // 2. Total students must be greater than 0 (to avoid division by zero)
    // 3. Passed students cannot be negative or more than the total
    // 4. Syllabus percentage must be between 0 and 100
    if (
        typeof totalStudents !== 'number' ||
        typeof passedStudents !== 'number' ||
        typeof syllabusPct !== 'number' ||
        totalStudents <= 0 ||
        passedStudents < 0 ||
        passedStudents > totalStudents ||
        syllabusPct < 0 ||
        syllabusPct > 100
    ) {
        return "Invalid Input";
    }

    // Calculate the percentage of students who passed
    const passRate = (passedStudents / totalStudents) * 100;

    // --- STEP 2: EFFICIENCY LOGIC ---

    // Rule 1: High Priority Failure
    // If either the pass rate or the syllabus completion is below 50%
    if (passRate < 50 || syllabusPct < 50) {
        return "URGENT_REVIEW_REQUIRED";
    }

    // Rule 2: Excellent Performance
    // Requires near-perfect results (>90% pass) AND full syllabus completion (100%)
    else if (passRate > 90 && syllabusPct === 100) {
        return "EXCELLENT";
    }

    // Rule 3: Satisfactory Performance
    // Pass rate between 70% and 90% AND syllabus coverage above 80%
    else if (passRate >= 70 && passRate <= 90 && syllabusPct > 80) {
        return "SATISFACTORY";
    }

    // Rule 4: Default Case
    // Any scenario that doesn't fit the specific categories above
    else {
        return "MODERATE";
    }
}

// --- EXAMPLE USAGE ---
console.log(getTeacherEfficiency(50, 48, 100));
console.log(getTeacherEfficiency(50, 20, 40));
console.log(getTeacherEfficiency(50, 30, 90));
console.log(getTeacherEfficiency(10, 15, 100));