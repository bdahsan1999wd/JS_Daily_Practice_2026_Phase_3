// 🧩 PROBLEM–01: isClubMember()

// Logic: Check if a student name exists in a club list using case-insensitive comparison.

function isClubMember(clubList, studentName) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(clubList) || typeof studentName !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: EMPTY CHECK ---
    if (clubList.length === 0) return false;

    // --- STEP 3: SEARCH LOGIC ---
    const lowerName = studentName.toLowerCase();

    // Check if any element in the array matches the lowercased name
    return clubList.some(member => typeof member === 'string' && member.toLowerCase() === lowerName);
}

// --- EXAMPLE USAGE ---
console.log(isClubMember(["Ahsan", "Karim", "Abir"], "ahsan"));
console.log(isClubMember(["Karim"], "Sabbir"));