// 🧩 PROBLEM–05: checkClassCapacity()

// Logic: Monitor classroom overcrowding based on room type limits.

function checkClassCapacity(studentCount, roomType) {

    // --- STEP 1: VALIDATION ---
    if (typeof studentCount !== 'number' || studentCount < 0 || typeof roomType !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: NORMALIZATION ---
    const type = roomType.toLowerCase();
    let limit = 0;

    // --- STEP 3: SET LIMITS ---
    if (type === "lab") {
        limit = 25;
    } else if (type === "classroom") {
        limit = 50;
    } else if (type === "auditorium") {
        limit = 200;
    } else {
        return "Invalid Input";
    }

    // --- STEP 4: CAPACITY CHECK ---
    return studentCount > limit ? "OVERCROWDED" : "SAFE";
}

// --- EXAMPLE USAGE ---
console.log(checkClassCapacity(30, "lab"));
console.log(checkClassCapacity(40, "CLASSROOM"));
console.log(checkClassCapacity(250, "auditorium"));