// 🧩 PROBLEM–04: assignStudentHouse()

// Logic: Assigns a house based on gender (Male -> Blue, Female -> Red) and appends a "PREMIUM" status if the student is an athlete.

function assignStudentHouse(gender, isAthlete) {

    // --- STEP 1: VALIDATION ---
    // gender must be a string and isAthlete must be a boolean
    if (typeof gender !== 'string' || typeof isAthlete !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: GENDER NORMALIZATION ---
    // Converting to lowercase to handle inputs like "Male", "MALE", or "male"
    const lowerGender = gender.toLowerCase();
    let houseName = "";

    // --- STEP 3: HOUSE ALLOCATION ---
    if (lowerGender === "male") {
        houseName = "Blue House";
    } else if (lowerGender === "female") {
        houseName = "Red House";
    } else {
        return "Invalid Input"; // If gender is neither male nor female
    }

    // --- STEP 4: APPLY PREMIUM STATUS ---
    // If the student is an athlete, they get the PREMIUM tag
    if (isAthlete) {
        return `${houseName}-PREMIUM`;
    }

    return houseName;
}

// --- EXAMPLE USAGE ---
console.log(assignStudentHouse("male", true));
console.log(assignStudentHouse("Female", false));
console.log(assignStudentHouse("Other", true));