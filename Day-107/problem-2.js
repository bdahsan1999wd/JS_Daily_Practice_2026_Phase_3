// 🧩 PROBLEM–02: checkProfileStatus()

// Logic: Ensure all required fields in the profile object are present and not empty.

function checkProfileStatus(profile) {

    // --- STEP 1: VALIDATION ---
    if (typeof profile !== 'object' || profile === null || Array.isArray(profile)) {
        return "Invalid Input";
    }

    // --- STEP 2: REQUIRED FIELDS CHECK ---
    const requiredFields = ["name", "photo", "signature", "bloodGroup"];

    for (let field of requiredFields) {
        // Check if property exists and is not an empty string
        if (!profile.hasOwnProperty(field) || profile[field] === "") {
            return `PENDING: ${field}`;
        }
    }

    // --- STEP 3: COMPLETION ---
    return "PROFILE_COMPLETE";
}

// --- EXAMPLE USAGE ---
console.log(checkProfileStatus({ name: "Ahsan", photo: "img.jpg", signature: "", bloodGroup: "O+" }));
console.log(checkProfileStatus({ name: "Abir", photo: "p.jpg", signature: "s.png", bloodGroup: "A+" }));