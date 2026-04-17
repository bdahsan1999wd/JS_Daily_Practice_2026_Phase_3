// 🧩 PROBLEM–01: getTeacherRating()

// Logic: Convert numeric ratings into descriptive ranks, with a special case for a perfect 5.0 score.

function getTeacherRating(rating) {

    // --- STEP 1: VALIDATION ---
    if (typeof rating !== 'number' || rating < 0 || rating > 5.0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATING CLASSIFICATION ---
    if (rating === 5.0) {
        return "GOLD_MEDAL_TEACHER";
    } else if (rating >= 4.5) {
        return "EXCELLENT";
    } else if (rating >= 3.5) {
        return "VERY_GOOD";
    } else if (rating >= 2.5) {
        return "AVERAGE";
    } else {
        return "REQUIRES_REVIEW";
    }
}

// --- EXAMPLE USAGE ---
console.log(getTeacherRating(5.0));
console.log(getTeacherRating(3.2));