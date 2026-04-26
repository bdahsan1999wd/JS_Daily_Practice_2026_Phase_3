// 🧩 PROBLEM–04: auditMaterialStock()

// Logic: This function audits construction materials by filtering out items that do not meet specific quality standards (Steel grade or Concrete PSI) or have invalid quantities. It returns an object summarizing the accepted inventory and the count of rejected items.

function auditMaterialStock(deliveryBatch, requiredSteelGrade) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(deliveryBatch) || typeof requiredSteelGrade !== 'number') {
        return "Invalid Input";
    }

    const acceptedItems = [];
    let rejectedCount = 0;

    // --- STEP 2: AUDIT LOOP ---
    deliveryBatch.forEach(batch => {
        let isValid = true;

        // Condition 1: Quantity must be positive
        if (batch.qty <= 0) isValid = false;

        // Condition 2: Steel Grade check
        if (isValid && batch.item === "Steel" && batch.grade < requiredSteelGrade) {
            isValid = false;
        }

        // Condition 3: Concrete PSI check (Must be >= 3500)
        if (isValid && batch.item === "Concrete" && batch.psi < 3500) {
            isValid = false;
        }

        // --- STEP 3: RECORD RESULTS ---
        if (isValid) {
            acceptedItems.push(batch);
        } else {
            rejectedCount++;
        }
    });

    return { acceptedItems, rejectedCount };
}

// Example Usage:
const materials = [{ item: "Steel", grade: 60, qty: 10 }, { item: "Steel", grade: 75, qty: 5 }];
console.log(auditMaterialStock(materials, 72.5));