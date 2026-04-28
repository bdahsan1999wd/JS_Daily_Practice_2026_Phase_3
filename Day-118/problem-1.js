// 🧩 PROBLEM–01: validateRoomRatio()

// Logic: This function ensures rooms are shaped for functionality. It identifies the larger and smaller sides to calculate the aspect ratio. A ratio close to 1.0 means the room is square-like, while anything above 2.0 suggests the room is too narrow for comfortable furniture placement.

function validateRoomRatio(length, width) {

    // --- STEP 1: VALIDATION ---
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE RATIO ---
    // Always divide the larger side by the smaller side
    const maxSide = Math.max(length, width);
    const minSide = Math.min(length, width);
    const ratio = maxSide / minSide;

    // --- STEP 3: CATEGORIZATION ---
    if (ratio <= 1.5) {
        return "IDEAL";
    } else if (ratio <= 2.0) {
        return "ACCEPTABLE";
    } else {
        return "TOO_NARROW";
    }
}

// Example Usage:
console.log(validateRoomRatio(15, 10));
console.log(validateRoomRatio(10, 20));
console.log(validateRoomRatio(22, 10));