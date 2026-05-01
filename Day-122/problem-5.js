// 🧩 PROBLEM–05: auditPileIntegrity()

// Logic: After a pile is cast, a Pile Integrity Test (PIT) uses sound waves to "see" the pile underground. This function evaluates if the concrete quality is high (based on wave speed) and if the reported depth matches the design, flagging any suspicious inconsistencies.

function auditPileIntegrity(waveVelocity, designDepth, actualDepthReported) {

    // --- STEP 1: VALIDATION ---
    if (typeof waveVelocity !== 'number' || typeof designDepth !== 'number' ||
        typeof actualDepthReported !== 'number' || designDepth <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONCRETE QUALITY CHECK ---
    if (waveVelocity < 3000) {
        return "LOW_QUALITY_CONCRETE";
    }

    // --- STEP 3: DEPTH VARIANCE AUDIT ---
    const difference = Math.abs(designDepth - actualDepthReported);
    const percentDiff = (difference / designDepth) * 100;

    if (percentDiff <= 2) {
        return "HEALTHY";
    } else if (percentDiff <= 5) {
        return "SUSPECTED";
    } else {
        return "DEFECTIVE";
    }
}

// Example Usage:
console.log(auditPileIntegrity(3500, 50, 49.5));
console.log(auditPileIntegrity(3500, 50, 47));