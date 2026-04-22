// 🧩 PROBLEM–03: checkEnrollmentEligibility()

// Logic: Evaluate enrollment status by checking prerequisites through a sequence of conditions, prioritizing special "Probationary" and "Re-take" cases.

function checkEnrollmentEligibility(studentProfile) {
    
    // --- STEP 1: VALIDATION ---
    if (!studentProfile || typeof studentProfile.grades !== 'object' || typeof studentProfile.attendance !== 'number') {
        return "Invalid Input";
    }

    const { html, css, js } = studentProfile.grades;
    const att = studentProfile.attendance;

    // --- STEP 2: PROBATIONARY CASE (High Grades, Lower Attendance) ---
    if (html >= 90 && css >= 90 && js >= 90 && att >= 70 && att <= 79) {
        return "PROBATIONARY_ENROLLMENT";
    }

    // --- STEP 3: RE-TAKE JS CASE (Only JS failed, Attendance is Perfect) ---
    if (js < 70 && html >= 70 && css >= 70 && att >= 80) {
        return "RE-TAKE_JS_EXAM";
    }

    // --- STEP 4: GENERAL ELIGIBILITY ---
    // All grades >= 70 and attendance >= 80
    if (html >= 70 && css >= 70 && js >= 70 && att >= 80) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(checkEnrollmentEligibility({ grades: { html: 95, css: 95, js: 95 }, attendance: 75 }));