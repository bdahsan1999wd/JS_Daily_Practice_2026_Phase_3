// 🧩 PROBLEM–04: validateEssayLength()

// Logic: Split text into words to check against minimum requirements and handle excessive length.

function validateEssayLength(essayText, minWords) {

    // --- STEP 1: VALIDATION ---
    if (typeof essayText !== 'string' || typeof minWords !== 'number' || minWords < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: WORD COUNT CALCULATION ---
    // trim() removes extra spaces, split(/\s+/) handles multiple spaces or newlines
    const words = essayText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // --- STEP 3: LENGTH RULES ---
    if (wordCount < minWords) {
        return "UNDER_LENGTH";
    } else if (wordCount > minWords * 2) {
        return "TOO_LONG: PLEASE_TRIM";
    } else {
        return "SUBMISSION_ACCEPTED";
    }
}

// --- EXAMPLE USAGE ---
console.log(validateEssayLength("I love programming with JS", 3));
console.log(validateEssayLength("Short text", 10));