// 🧩 PROBLEM–03: checkVentilation()

// Logic: This function ensures every room has enough window space for natural light and air. It iterates through an array of rooms, calculates if the window area is at least 15% of the room's floor area, and returns a list of room names that fail this health standard.

function checkVentilation(rooms) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(rooms)) return "Invalid Input";

    // --- STEP 2: FILTERING LOGIC ---
    const failingRooms = [];

    for (const room of rooms) {
        // Validate object properties
        if (typeof room.area !== 'number' || typeof room.windowArea !== 'number' || !room.name) {
            return "Invalid Input";
        }

        // Logic: Window must be >= 15% of floor area
        if (room.windowArea < room.area * 0.15) {
            failingRooms.push(room.name);
        }
    }

    // --- STEP 3: RETURN ARRAY ---
    return failingRooms;
}

// Example Usage:
const roomsList = [{ name: "Master", area: 300, windowArea: 50 }, { name: "Kitchen", area: 100, windowArea: 10 }];

console.log(checkVentilation(roomsList));