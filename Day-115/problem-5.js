// 🧩 PROBLEM–05: checkGraduationStatus()

// Logic: An eligibility tracker that uses object iteration. It loops through all clearance departments and collects the names of any department where the status is false.

function checkGraduationStatus(clearances) {

    // --- STEP 1: VALIDATION ---
    if (typeof clearances !== 'object' || clearances === null) return "Invalid Input";

    // --- STEP 2: TRACK PENDING DEPARTMENTS ---
    const pending = [];

    // Use a for...in loop to check every clearance key dynamically
    for (const dept in clearances) {
        // If any clearance is false, add that department name to our pending list
        if (clearances[dept] === false) {
            pending.push(dept);
        }
    }

    // --- STEP 3: FINAL OUTPUT ---
    // If the list is empty, all departments are cleared
    if (pending.length === 0) {
        return "ELIGIBLE_FOR_GRADUATION";
    } else {
        // Return a formatted string listing all issues
        return `PENDING: ${pending.join(', ')}`;
    }
}

// Example Usage:
console.log(checkGraduationStatus({ academic: true, library: false, accounts: true, sports: false }));