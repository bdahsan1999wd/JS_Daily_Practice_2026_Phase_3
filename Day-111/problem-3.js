// 🧩 PROBLEM–03: getStudentRank()

// Logic: Determines a student's rank based on marks and attendance.
// Sorting Rule: Higher marks rank higher. If marks are equal, higher attendance wins.

function getStudentRank(students, studentName) {

    // --- STEP 1: VALIDATION ---
    // Ensure 'students' is an array and 'studentName' is a string
    if (!Array.isArray(students) || typeof studentName !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: SORTING (The Ranking Logic) ---
    // create a copy using [...students] to avoid mutating the original array
    const sorted = [...students].sort((a, b) => {
        // Primary Rule: Sort by Marks (m) in descending order
        if (b.m !== a.m) {
            return b.m - a.m;
        }
        // Secondary Rule (Tie-break): If marks are the same, sort by Attendance (a)
        return b.a - a.a;
    });

    // --- STEP 3: FIND STUDENT POSITION ---
    // Find the index of the student matching the provided name
    const index = sorted.findIndex(s => s.n === studentName);

    // --- STEP 4: RETURN RANK ---
    // If found, return index + 1 (because array index starts at 0). Otherwise, return error.
    return index !== -1 ? index + 1 : "STUDENT_NOT_FOUND";
}

// --- EXAMPLE USAGE ---
const classData = [
    { n: "X", m: 90, a: 80 }, // Student X
    { n: "Y", m: 90, a: 95 }, // Student Y (Higher attendance, should be Rank 1)
    { n: "Z", m: 85, a: 99 }  // Student Z (Lower marks, should be Rank 3)
];

console.log(getStudentRank(classData, "X"));
console.log(getStudentRank(classData, "Y"));
console.log(getStudentRank(classData, "Rahim"));