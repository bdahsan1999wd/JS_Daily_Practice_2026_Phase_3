// 🧩 PROBLEM–05: getBusRoute()

// Logic: Map travel distance to specific bus routes or detect service area limits.

function getBusRoute(distanceKm) {

    // --- STEP 1: VALIDATION ---
    if (typeof distanceKm !== 'number' || distanceKm < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ROUTE MAPPING ---
    if (distanceKm >= 0 && distanceKm <= 5) {
        return "Route Alpha";
    } else if (distanceKm > 5 && distanceKm <= 10) {
        return "Route Beta";
    } else if (distanceKm > 10 && distanceKm <= 20) {
        return "Route Gamma";
    } else {
        // --- STEP 3: OUTSIDE RANGE ---
        return "OUTSIDE_SERVICE_AREA";
    }
}

// --- EXAMPLE USAGE ---
console.log(getBusRoute(8));
console.log(getBusRoute(25));