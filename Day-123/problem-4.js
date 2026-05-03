// 🧩 PROBLEM–04: auditBeamAlignment()

// Logic: Grade beams must be placed accurately to bridge the gaps between pile caps. This function compares the planned length to the actual built length and applies a strict tolerance (the smaller of 1 inch or 0.5% of length) to ensure structural alignment.

function auditBeamAlignment(plannedLength, actualLength) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof plannedLength !== 'number' || typeof actualLength !== 'number' || plannedLength <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOLERANCE ---
    const diffFeet = Math.abs(plannedLength - actualLength);
    const diffInches = Number((diffFeet * 12).toFixed(2));

    const percentTolerance = (plannedLength * 0.005) * 12; // 0.5% in inches
    const maxAllowedInches = Math.min(percentTolerance, 1); // 1 inch cap

    // --- STEP 3: AUDIT ---
    if (diffInches <= maxAllowedInches) {
        return "ALIGNED";
    } else {
        return `MISALIGNED: ${diffInches}`;
    }
}

// Example Usage:
console.log(auditBeamAlignment(100, 100.1));
console.log(auditBeamAlignment(10, 10.01));