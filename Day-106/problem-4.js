// 🧩 PROBLEM–04: isBookAvailable()

// Logic: Search library inventory for a specific title (case-insensitive) and check stock levels.

function isBookAvailable(libraryInventory, bookTitle) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(libraryInventory) || typeof bookTitle !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC ---
    const searchTitle = bookTitle.toLowerCase();
    const book = libraryInventory.find(item => item.title && item.title.toLowerCase() === searchTitle);

    // --- STEP 3: AVAILABILITY CHECK ---
    if (!book) {
        return "NOT_IN_LIBRARY";
    } else if (book.copies > 0) {
        return "AVAILABLE";
    } else {
        return "OUT_OF_STOCK";
    }
}

// --- EXAMPLE USAGE ---
console.log(isBookAvailable([{ title: "Physics", copies: 2 }], "physics"));
console.log(isBookAvailable([{ title: "Math", copies: 0 }], "Math"));