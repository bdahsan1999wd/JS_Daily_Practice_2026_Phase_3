// 🧩 PROBLEM–04: generateSubjectCode()

// Logic: Create a code using the first 3 letters of a subject (padded with 'X' if needed) and the class level.

function generateSubjectCode(subjectName, classLevel) {

    // --- STEP 1: VALIDATION ---
    if (typeof subjectName !== 'string' || subjectName.trim().length === 0 ||
        typeof classLevel !== 'number' || classLevel < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: EXTRACT & PAD SUBJECT NAME ---
    let cleanName = subjectName.trim().toUpperCase();
    let codePart = "";

    if (cleanName.length >= 3) {
        codePart = cleanName.substring(0, 3);
    } else {
        // Padded with 'X' at the end
        codePart = cleanName.padEnd(3, "X");
    }

    // --- STEP 3: FORMAT FINAL CODE ---
    return `${codePart}-${classLevel}`;
}

// --- EXAMPLE USAGE ---
console.log(generateSubjectCode("Mathematics", 10));
console.log(generateSubjectCode("IT", 9));