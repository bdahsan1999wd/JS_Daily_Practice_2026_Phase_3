// 🧩 PROBLEM–02: sanitizeFeedback()

// Logic: Replace restricted words case-insensitively and truncate the text if it exceeds 100 characters.

function sanitizeFeedback(feedbackText, restrictedWord) {

    // --- STEP 1: VALIDATION ---
    if (typeof feedbackText !== 'string' || typeof restrictedWord !== 'string' || restrictedWord.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: CASE-INSENSITIVE REPLACEMENT ---
    const regex = new RegExp(restrictedWord, 'gi');
    let sanitized = feedbackText.replace(regex, "CENSORED");

    // --- STEP 3: TRUNCATE CHALLENGE ---
    if (sanitized.length > 100) {
        return sanitized.substring(0, 100) + "...";
    }

    return sanitized;
}

// --- EXAMPLE USAGE ---
console.log(sanitizeFeedback("You are very lazy", "lazy"));
console.log(sanitizeFeedback("Excellent work on the project...", "bad"));