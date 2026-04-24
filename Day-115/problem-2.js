// 🧩 PROBLEM–02: auditLibraryInventory()

// Logic: This function identifies discrepancies between two datasets. By mapping the physicalCount to an array of IDs, we can efficiently check which items from the database were not found during the physical audit.

function auditLibraryInventory(database, physicalCount) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(database) || !Array.isArray(physicalCount)) return "Invalid Input";

    // --- STEP 2: EXTRACT PHYSICAL IDs ---
    // Create a list of IDs currently in stock for quick comparison
    const physicalIds = physicalCount.map(item => item.id);

    // --- STEP 3: FILTER MISSING BOOKS ---
    // Check every book in the database against our physical ID list
    const missingBooks = database
        .filter(dbItem => !physicalIds.includes(dbItem.id))
        // Challenge: Map to title, supporting inconsistent keys like 'title' or 't'
        .map(dbItem => dbItem.title || dbItem.t);

    return missingBooks;
}

// Example Usage:
console.log(auditLibraryInventory([{ id: 101, t: "Math" }, { id: 102, t: "Eng" }], [{ id: 101, t: "Math" }]));