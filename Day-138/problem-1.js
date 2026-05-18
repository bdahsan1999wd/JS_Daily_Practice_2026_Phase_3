// 🧩 PROBLEM–01: checkScaffoldingSafety()

// Logic: External plastering requires heavy-duty scaffolding. Each ledger must support the combined weight of workers and mortar buckets. We calculate the estimated load, determine the required safe capacity (1.5×), then check if the actual max capacity is safe, near the limit, or dangerously overloaded.

function checkScaffoldingSafety(workerCount, mortarBuckets, maxLoadCapKG) {

    // --- STEP 1: VALIDATION ---
    if (
        typeof workerCount !== 'number' || typeof mortarBuckets !== 'number' ||
        typeof maxLoadCapKG !== 'number' ||
        workerCount < 0 || mortarBuckets < 0 || maxLoadCapKG <= 0
    ) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ESTIMATED LOAD ---
    // Each worker contributes 75kg, each mortar bucket contributes 25kg.
    const estimatedLoad = (workerCount * 75) + (mortarBuckets * 25);

    // --- STEP 3: CALCULATE REQUIRED SAFE CAPACITY ---
    // The scaffolding must support at least 1.5× the estimated load to be safe.
    const requiredSafeCapacity = estimatedLoad * 1.5;

    // --- STEP 4: COMPARE AND RETURN RESULT ---
    // STABLE   → maxLoadCapKG is at or above the required safe capacity.
    // WARNING  → maxLoadCapKG is below required, but within 10% of it (≥ 90%).
    // DANGER   → maxLoadCapKG falls more than 10% below the required capacity.
    if (maxLoadCapKG >= requiredSafeCapacity) {
        return "STABLE";
    } else if (maxLoadCapKG >= requiredSafeCapacity * 0.9) {
        return "WARNING: LOAD_LIMIT_NEAR";
    } else {
        return "DANGER: SCAFFOLD_OVERLOAD";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkScaffoldingSafety(2, 4, 400));
console.log(checkScaffoldingSafety(3, 6, 520));
console.log(checkScaffoldingSafety(4, 8, 300));
console.log(checkScaffoldingSafety(-1, 4, 400));