// 🧩 PROBLEM–02: generateNotice()

// Logic: Automates personalized communication by dynamically selecting pronouns based on gender and evaluating academic/attendance thresholds to append specific action requirements.

function generateNotice(student) {

    // --- STEP 1: VALIDATION ---
    // Check if the student object exists and contains required properties
    if (!student || typeof student.name !== 'string' || typeof student.avgMarks !== 'number') {
        return "Invalid Input";
    }

    const { name, gender, avgMarks, attendance } = student;

    // --- STEP 2: PRONOUN LOGIC ---
    // Assign "he" for male and "she" for female
    const pronoun = gender === "male" ? "he" : "she";

    // --- STEP 3: STATUS LOGIC ---
    // Check if marks are below 40 or attendance is below 75%
    let action = "Keep up the good work";

    if (avgMarks < 40 || attendance < 75) {
        action = "Action Required: Meeting with Principal";
    }

    // --- STEP 4: CONSTRUCT TEMPLATE STRING ---
    return `Dear Parent of ${name}, ${pronoun} has scored ${avgMarks}%. ${action}`;
}

// --- EXAMPLE USAGE ---
console.log(generateNotice({ name: "Ahsan", gender: "male", avgMarks: 35, attendance: 90 }));