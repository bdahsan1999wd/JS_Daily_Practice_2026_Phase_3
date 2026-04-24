// 🧩 PROBLEM–01: normalizeStudentNames()

// Logic: This function cleans up user-inputted strings. It first filters out non-string values, trims whitespace, and then uses a chain of methods to convert the text into "Title Case" (first letter uppercase, others lowercase). Finally, it removes any empty strings to ensure only valid names remain.

function normalizeStudentNames(namesArray) {

    // --- STEP 1: VALIDATION ---
    // Ensure the input is specifically an array
    if (!Array.isArray(namesArray)) return "Invalid Input";

    // --- STEP 2: CLEAN AND MAP ---
    return namesArray
        .map(name => {
            // Check if the current element is a string to avoid errors
            if (typeof name !== 'string') return "";

            // Remove leading and trailing spaces
            const trimmed = name.trim();
            if (trimmed === "") return "";

            // Title Case Transformation:
            // 1. Convert everything to lowercase
            // 2. Split by space to handle multiple names (e.g., "ahsan habib")
            // 3. Capitalize the first letter of each part
            return trimmed
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        })
        // --- STEP 3: CHALLENGE FILTER ---
        // Ensure empty strings (resulting from spaces-only input) are excluded
        .filter(name => name !== "");
}

// Example Usage:
console.log(normalizeStudentNames(["  abir", "KARIM  ", "  "]));