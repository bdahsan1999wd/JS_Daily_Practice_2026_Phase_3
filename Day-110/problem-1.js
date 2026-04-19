// 🧩 PROBLEM–01: validateAssignmentUpload()

// Logic: Check file extension (case-insensitive) and file size to ensure they meet school standards.

function validateAssignmentUpload(fileName, fileSizeMB) {

    // --- STEP 1: VALIDATION ---
    if (typeof fileName !== 'string' || typeof fileSizeMB !== 'number' || fileSizeMB <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: EXTRACT EXTENSION ---
    const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
    const validExtensions = [".pdf", ".docx", ".png"];

    // --- STEP 3: LOGIC CHECK ---
    if (!validExtensions.includes(extension)) {
        return "UNSUPPORTED_FORMAT";
    }

    if (fileSizeMB > 5) {
        return "FILE_TOO_LARGE";
    }

    return "UPLOAD_SUCCESS";
}

// --- EXAMPLE USAGE ---
console.log(validateAssignmentUpload("homework.PDF", 3));
console.log(validateAssignmentUpload("image.jpeg", 2));  