// 🧩 PROBLEM–05: getRankingBadge()

// Logic: Assign badges based on class percentile and absolute rank.

function getRankingBadge(classRank, totalStudents) {

    // --- STEP 1: VALIDATION ---
    if (typeof classRank !== 'number' || typeof totalStudents !== 'number' ||
        classRank <= 0 || totalStudents <= 0 || classRank > totalStudents) {
        return "Invalid Input";
    }

    // --- STEP 2: PERCENTILE CALCULATION ---
    const percentile = (classRank / totalStudents) * 100;

    // --- STEP 3: RANKING LOGIC ---
    if (classRank === 1) {
        return "VALEDICTORIAN";
    } else if (percentile <= 10) {
        return "HONOR_ROLL";
    } else if (percentile <= 25) {
        return "MERIT_LIST";
    } else if (percentile >= 90) {
        return "ACADEMIC_PROBATION";
    } else {
        return "STABLE";
    }
}

// --- EXAMPLE USAGE ---
console.log(getRankingBadge(1, 100));
console.log(getRankingBadge(5, 100));
console.log(getRankingBadge(95, 100));