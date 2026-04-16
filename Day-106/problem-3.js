// 🧩 PROBLEM–03: processDonation()

// Logic: Assign donor status based on amount, with a special "Hall of Fame" tag for high donors.

function processDonation(donationAmount) {

    // --- STEP 1: VALIDATION ---
    if (typeof donationAmount !== 'number' || donationAmount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ASSIGN STATUS ---
    let status = "";
    if (donationAmount >= 2000) {
        status = "PLATINUM_DONOR";
    } else if (donationAmount >= 500) {
        status = "GOLD_DONOR";
    } else {
        status = "SILVER_DONOR";
    }

    // --- STEP 3: HALL OF FAME CHALLENGE ---
    if (donationAmount >= 5000) {
        return `${status}: HALL_OF_FAME`;
    }

    return status;
}

// --- EXAMPLE USAGE ---
console.log(processDonation(600));
console.log(processDonation(5500));