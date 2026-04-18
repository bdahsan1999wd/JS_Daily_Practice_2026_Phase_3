// 🧩 PROBLEM–04: isLeaveApproved()

// Logic: Handle staff leave requests based on exam schedules and emergency 1-day leave rules.

function isLeaveApproved(leaveBalance, daysRequested, isExamWeek) {

    // --- STEP 1: VALIDATION ---
    if (typeof leaveBalance !== 'number' || typeof daysRequested !== 'number' || typeof isExamWeek !== 'boolean' || leaveBalance < 0 || daysRequested <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: EXAM WEEK RESTRICTION ---
    if (isExamWeek) {
        return false;
    }

    // --- STEP 3: EMERGENCY & BALANCE LOGIC ---
    if (daysRequested === 1) {
        return true; // Emergency Personal Day
    }

    return daysRequested <= leaveBalance;
}

// --- EXAMPLE USAGE ---
console.log(isLeaveApproved(10, 5, true));
console.log(isLeaveApproved(0, 1, false));