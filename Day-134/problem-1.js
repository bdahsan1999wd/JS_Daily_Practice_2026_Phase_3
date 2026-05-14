// 🧩 PROBLEM–01: auditHackingDensity()

// Logic: Hacking (or chipping) creates a mechanical bond between the smooth concrete and the mortar. Insufficient hacking leads to cracks at the column-wall junctions.

function auditHackingDensity(surfaceAreaSqFt, totalHacks) {

    // --- STEP 1: VALIDATION ---
    if (typeof surfaceAreaSqFt !== 'number' || typeof totalHacks !== 'number') return "Invalid Input";
    if (surfaceAreaSqFt <= 0 || totalHacks < 0) return "Invalid Input";

    // --- STEP 2: CALCULATE DENSITY ---
    const density = totalHacks / surfaceAreaSqFt;

    // --- STEP 3: AUDIT ---
    if (density >= 30) {
        return "READY_FOR_MASONRY";
    } else if (density >= 20) {
        const neededHacks = (surfaceAreaSqFt * 30) - totalHacks;
        return `INCOMPLETE: ${neededHacks}`;
    } else {
        return "REJECTED: RE-HACK_REQUIRED";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditHackingDensity(10, 350));
console.log(auditHackingDensity(10, 250));