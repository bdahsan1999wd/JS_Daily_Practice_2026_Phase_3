// 🧩 PROBLEM–05: checkBondingKey()

// Logic: Concrete is non-porous. Plaster needs a "Key" (rough surface) to hang on. If the hacking is insufficient, a bonding agent (chemical) is required to create a synthetic bond.

function checkBondingKey(hacksPerSqFt, hasBondingAgent) {

    // --- STEP 1: VALIDATION ---
    if (typeof hacksPerSqFt !== 'number' || typeof hasBondingAgent !== 'boolean') return "Invalid Input";

    // --- STEP 2: AUDIT LOGIC ---
    if (hacksPerSqFt >= 30) {
        return "EXCELLENT";
    } else if (hacksPerSqFt >= 20) {
        return hasBondingAgent ? "SAFE" : "UNSAFE: RE-HACK_REQUIRED";
    } else {
        return "UNSAFE: RE-HACK_REQUIRED";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkBondingKey(25, true));
console.log(checkBondingKey(25, false));