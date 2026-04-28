// 🧩 PROBLEM–05: checkFloorLoad()

// Logic: This function assesses the structural safety of a floor. It estimates the weight of people (using an average of 70kg) plus furniture, then calculates the "Load Intensity" per square foot. If the load exceeds the 50kg/sq.ft threshold, it suggests structural reinforcement.

function checkFloorLoad(floorData) {

    // --- STEP 1: VALIDATION ---
    // Check if input is an object and not null
    if (typeof floorData !== 'object' || floorData === null) return "Invalid Input";

    const { peopleCount, furnitureWeight, area } = floorData;

    // Check if all necessary properties are present and are valid numbers
    if (typeof peopleCount !== 'number' || typeof furnitureWeight !== 'number' || typeof area !== 'number') {
        return "Invalid Input";
    }
    if (area <= 0) return "Invalid Input";

    // --- STEP 2: LOAD CALCULATION ---
    // Avg person weight = 70kg
    const estimatedLoad = (peopleCount * 70) + furnitureWeight;
    const intensity = estimatedLoad / area;

    // --- STEP 3: SAFETY CHECK ---
    if (intensity <= 50) {
        return "SAFE";
    } else {
        return "REINFORCE_BEAMS";
    }
}

// Example Usage:
console.log(checkFloorLoad({ peopleCount: 10, furnitureWeight: 500, area: 1000 }));
console.log(checkFloorLoad({ peopleCount: 100, furnitureWeight: 5000, area: 100 }));