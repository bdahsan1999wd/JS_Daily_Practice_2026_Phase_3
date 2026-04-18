// 🧩 PROBLEM–04: getEnrollmentStatus()

// Logic: Monitor course capacity and identify the critical point when only one seat remains.

function getEnrollmentStatus(enrolledList, maxCapacity) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(enrolledList) || typeof maxCapacity !== 'number' || maxCapacity <= 0) {
        return "Invalid Input";
    }

    const currentCount = enrolledList.length;

    // --- STEP 2: CAPACITY LOGIC ---
    if (currentCount > maxCapacity) {
        return "Invalid Input"; // Current enrollment cannot exceed capacity
    }

    if (currentCount === maxCapacity) {
        return "COURSE_FULL";
    } else if (currentCount === maxCapacity - 1) {
        return "LAST_SEAT_REMAINING";
    } else {
        return "SPACE_AVAILABLE";
    }
}

// --- EXAMPLE USAGE ---
console.log(getEnrollmentStatus(["Ahsan", "Abir"], 3));
console.log(getEnrollmentStatus(["Ahsan", "Abir", "Karim"], 3));