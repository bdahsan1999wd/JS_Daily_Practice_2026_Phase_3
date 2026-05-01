// 🧩 PROBLEM–05: calculateTruckTrips()

// Logic: When soil is dug up, it loosens and occupies more space—this is known as the "Bulking Factor." This function increases the volume by 25%, then divides it by the truck capacity to determine the total number of logistics trips needed, always rounding up since you can't have a partial truck trip.

function calculateTruckTrips(totalVolume, truckCapacity) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalVolume !== 'number' || typeof truckCapacity !== 'number' ||
        totalVolume <= 0 || truckCapacity <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: VOLUME EXPANSION (Bulking Factor) ---
    const expandedVolume = totalVolume * 1.25;

    // --- STEP 3: TRIP CALCULATION ---
    // Use Math.ceil because even a partially full truck counts as one trip
    const trips = Math.ceil(expandedVolume / truckCapacity);

    return trips;
}

// Example Usage:
console.log(calculateTruckTrips(1000, 250));
console.log(calculateTruckTrips(1000, 300));