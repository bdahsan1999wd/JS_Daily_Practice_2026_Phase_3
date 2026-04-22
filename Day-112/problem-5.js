// 🧩 PROBLEM–05: allocateBusSeats()

// Logic: Determines the number of buses required for a trip and calculates leftover seats.
// Math: Uses Ceiling division to ensure every registered student has a seat.

function allocateBusSeats(totalRegistered, busCapacity) {

    // --- STEP 1: VALIDATION ---
    // 1. Inputs must be numbers.
    // 2. Students cannot be negative.
    // 3. Capacity must be greater than 0 (to avoid division by zero).
    if (
        typeof totalRegistered !== 'number' ||
        typeof busCapacity !== 'number' ||
        totalRegistered < 0 ||
        busCapacity <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE CASE ---
    // If no students are registered, no buses are needed.
    if (totalRegistered === 0) {
        return "NO_BUSES_REQUIRED";
    }

    // --- STEP 3: CALCULATION ---

    // Buses Needed:
    // We use Math.ceil() because if there is a remainder (e.g., 3.33 buses),
    // we need a 4th bus for those extra students.
    const busesNeeded = Math.ceil(totalRegistered / busCapacity);

    // Empty Seats:
    // First, find the total capacity of all buses sent.
    // Then, subtract the students who actually registered.
    const totalSeatsAvailable = busesNeeded * busCapacity;
    const emptySeats = totalSeatsAvailable - totalRegistered;

    // --- STEP 4: OUTPUT ---
    // Return a formatted string with the results.
    return `Buses needed: ${busesNeeded}, Empty seats: ${emptySeats}`;
}

// --- EXAMPLE USAGE ---
console.log(allocateBusSeats(100, 30));
console.log(allocateBusSeats(0, 30));
console.log(allocateBusSeats(90, 30));