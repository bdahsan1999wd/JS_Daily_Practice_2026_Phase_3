// 🧩 PROBLEM–01: analyzeAcademicResult()

// Logic: Calculates the average GPA based on subject marks.
// Rule: If a student scores below 33 in any subject, they fail (GPA 0.0).

function analyzeAcademicResult(subjects) {

    // --- STEP 1: VALIDATION ---
    // Check if input is a valid array
    if (!Array.isArray(subjects)) {
        return "Invalid Input";
    }

    // Check if the array is empty
    if (subjects.length === 0) {
        return "NO_DATA";
    }

    let totalPoints = 0;

    // --- STEP 2: ITERATE THROUGH SUBJECTS ---
    for (let item of subjects) {
        let marks = item.marks;

        // Ensure marks are numbers and within the valid range (0-100)
        if (typeof marks !== 'number' || marks < 0 || marks > 100) {
            return "Invalid Input";
        }

        // --- STEP 3: STRICT FAIL POLICY ---
        // If any subject mark is below 33, the entire result is a Fail (0.0)
        if (marks < 33) {
            return 0.0;
        }

        // --- STEP 4: GRADING LOGIC ---
        // Assign points based on mark ranges
        if (marks >= 80) {
            totalPoints += 5.0; // Grade: A+
        } else if (marks >= 70) {
            totalPoints += 4.0; // Grade: A
        } else if (marks >= 60) {
            totalPoints += 3.5; // Grade: A-
        } else if (marks >= 50) {
            totalPoints += 3.0; // Grade: B
        } else if (marks >= 33) {
            totalPoints += 2.0; // Grade: D
        }
    }

    // --- STEP 5: GPA CALCULATION ---
    // Divide total points by the number of subjects to get the average
    const gpa = totalPoints / subjects.length;

    // Return the result formatted to 2 decimal places as a Number
    return Number(gpa.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(analyzeAcademicResult([{ s: "Math", marks: 80 }, { s: "Physics", marks: 30 }]));
console.log(analyzeAcademicResult([{ s: "Math", marks: 85 }, { s: "Physics", marks: 75 }]));