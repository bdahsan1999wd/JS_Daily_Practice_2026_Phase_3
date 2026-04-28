// 🧩 PROBLEM–04: checkDoorClearance()

// Logic: A safety function to ensure doors can open fully without obstruction. It calculates a safety buffer (10% extra) on top of the door width. If the available physical clearance in the design is less than this buffered width, the door is flagged as unsafe or obstructed.

function checkDoorClearance(doorWidth, availableClearance) {

    // --- STEP 1: VALIDATION ---
    if (typeof doorWidth !== 'number' || typeof availableClearance !== 'number') {
        return "Invalid Input";
    }
    if (doorWidth <= 0 || availableClearance <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CLEARANCE LOGIC ---
    // Rule: Clearance must be at least 1.1x the door width
    const requiredClearance = doorWidth * 1.1;

    return availableClearance >= requiredClearance;
}

// Example Usage:
console.log(checkDoorClearance(3.5, 4.0));
console.log(checkDoorClearance(3.5, 3.7));