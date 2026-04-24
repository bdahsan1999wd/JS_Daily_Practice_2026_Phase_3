// 🧩 PROBLEM–04: maskHealthData()

// Logic: This implements data masking for privacy compliance. Crucially, it uses the spread operator (...) to ensure immutability, meaning it creates a copy of the data rather than changing the original record.

function maskHealthData(healthRecord) {

    // --- STEP 1: VALIDATION ---
    if (typeof healthRecord !== 'object' || healthRecord === null) return "Invalid Input";

    // --- STEP 2: CREATE NEW OBJECT (Immutability) ---
    // We spread the original record and override sensitive keys
    const maskedRecord = {
        ...healthRecord,
        condition: "REDACTED", // Masking sensitive info
        notes: "HIDDEN",       // Masking sensitive info
        // Challenge: Default value assignment if a key is missing
        bloodGroup: healthRecord.bloodGroup || "Not Provided"
    };

    return maskedRecord;
}

// Example Usage:
console.log(maskHealthData({ studentName: "Ahsan", condition: "Allergy", notes: "Severe" }));