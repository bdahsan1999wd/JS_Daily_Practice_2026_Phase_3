// 🧩 PROBLEM–01: analyzeAcademicResult()

function analyzeAcademicResult(subjects) {
    // Validation
    if (!Array.isArray(subjects)) return "Invalid Input";
    if (subjects.length === 0) return "NO_DATA";

    let totalPoints = 0;

    for (let item of subjects) {
        let marks = item.marks;
        if (typeof marks !== 'number' || marks < 0 || marks > 100) return "Invalid Input";

        // Strict Fail Policy
        if (marks < 33) return 0.0;

        // Grading Logic
        if (marks >= 80) totalPoints += 5.0;
        else if (marks >= 70) totalPoints += 4.0;
        else if (marks >= 60) totalPoints += 3.5;
        else if (marks >= 50) totalPoints += 3.0;
        else if (marks >= 33) totalPoints += 2.0;
    }

    const gpa = totalPoints / subjects.length;
    return Number(gpa.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(analyzeAcademicResult([{ s: "Math", marks: 80 }, { s: "Physics", marks: 30 }]));
console.log(analyzeAcademicResult([{ s: "Math", marks: 85 }, { s: "Physics", marks: 75 }]));