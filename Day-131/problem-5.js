// 🧩 PROBLEM–05: auditSurfaceCracks()

// Logic: Surface cracks are common but their width tells us if they are aesthetic issues or structural failures. Hairline cracks are usually just shrinkage, but wide cracks indicate deep internal tension.

function auditSurfaceCracks(crackWidthMM) {

    // --- STEP 1: VALIDATION ---
    if (typeof crackWidthMM !== 'number' || crackWidthMM < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CATEGORIZATION ---
    if (crackWidthMM <= 0.1) {
        return "Hairline";
    } else if (crackWidthMM <= 0.3) {
        return "Minor";
    } else {
        // --- STEP 3: FORMATTING ---
        // Structural cracks are critical and returned in ALL CAPS
        return "STRUCTURAL";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditSurfaceCracks(0.05));
console.log(auditSurfaceCracks(0.4));