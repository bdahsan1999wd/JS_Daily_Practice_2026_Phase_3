// 🧩 PROBLEM–03: applySeismicPremium()

// Logic: This function calculates the total construction cost by applying premiums based on earthquake risk zones. It applies a base percentage increase, followed by an additional architectural fee if the design is marked as "Modern."

function applySeismicPremium(baseEstimate, zone, isModernDesign) {

    // --- STEP 1: VALIDATION ---
    // Minimum estimate check and valid zone check (1-4)
    if (typeof baseEstimate !== 'number' || baseEstimate < 1000000) return "Invalid Estimate";
    if (![1, 2, 3, 4].includes(zone)) return "Invalid Input";

    // --- STEP 2: ZONE PREMIUM LOGIC ---
    let multiplier = 1;
    if (zone === 2) multiplier = 1.10; // +10%
    else if (zone === 3) multiplier = 1.20; // +20%
    else if (zone === 4) multiplier = 1.35; // +35%

    let totalCost = baseEstimate * multiplier;

    // --- STEP 3: ARCHITECTURAL FEE ---
    // Challenge: Apply 5% fee AFTER the zone premium is applied
    if (isModernDesign === true) {
        totalCost = totalCost * 1.05;
    }

    return Number(totalCost.toFixed(2));
}

// Example Usage:
console.log(applySeismicPremium(50000000, 3, true));