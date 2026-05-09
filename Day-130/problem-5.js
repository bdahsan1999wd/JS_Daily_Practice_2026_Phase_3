// 🧩 PROBLEM–05: auditConcreteYield()

// Logic: This function verifies if the volume of concrete ordered matches the actual volume required to fill the slab. Significant shortage suggests either the supplier under-delivered or there was excessive wastage.

function auditConcreteYield(orderedVolumeCM, actualAreaSqFt, thicknessInch) {

    // --- STEP 1: VALIDATION ---
    if (typeof orderedVolumeCM !== 'number' || typeof actualAreaSqFt !== 'number' || typeof thicknessInch !== 'number') {
        return "Invalid Input";
    }
    if (orderedVolumeCM <= 0 || actualAreaSqFt <= 0 || thicknessInch <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE THEORETICAL VOLUME (CM) ---
    const thicknessFT = thicknessInch / 12;
    const volumeCFT = actualAreaSqFt * thicknessFT;
    const calculatedVolumeCM = volumeCFT / 35.31;

    // --- STEP 3: CALCULATE VARIANCE ---
    const varianceCM = calculatedVolumeCM - orderedVolumeCM;

    // --- STEP 4: AUDIT (5% Tolerance) ---
    // If we need significantly more than we ordered, it's a shortage detection
    const percentShortage = (varianceCM / calculatedVolumeCM) * 100;

    if (percentShortage > 5) {
        return `SHORTAGE_DETECTED: ${varianceCM.toFixed(2)}`;
    } else {
        return "YIELD_NORMAL";
    }
}

// --- EXAMPLE USAGE ---
console.log(auditConcreteYield(10, 1800, 5));