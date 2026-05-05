// 🧩 PROBLEM–04: getVibrationTime()

// Logic: Vibration removes air pockets (honeycombing) but over-vibration causes segregation (stones sinking). Drier concrete (low slump) needs more vibration time than wetter concrete (high slump).

function getVibrationTime(concreteSlump, isHighGrade) {

    // --- STEP 1: VALIDATION ---
    if (typeof concreteSlump !== 'number') return "Invalid Input";
    if (concreteSlump < 1) return "Invalid Slump Value";

    // --- STEP 2: DETERMINE BASE TIME ---
    let baseTime;
    if (concreteSlump >= 1 && concreteSlump <= 2) {
        baseTime = 15;
    } else if (concreteSlump >= 3 && concreteSlump <= 4) {
        baseTime = 10;
    } else {
        baseTime = 5; // Slump > 4 (Wet)
    }

    // --- STEP 3: ADD GRADE BUFFER ---
    // High-grade concrete (4000 PSI+) is denser and needs slightly more time
    if (isHighGrade) {
        baseTime += 3;
    }

    return baseTime;
}

// --- EXAMPLE USAGE ---
console.log(getVibrationTime(3.5, true));
console.log(getVibrationTime(5, false));