// 🧩 PROBLEM–04: generateTranscript()

// Logic: Generates a summary report for a student based on their scores.
// Metrics: Average, Highest Score, Lowest Score, and Final Status.
// Rule: Any score below 33 results in "FAILED_IN_SUBJECT" regardless of the average.

function generateTranscript(name, scores) {

    // --- STEP 1: VALIDATION ---
    // 1. Name must be a string.
    // 2. Scores must be an array and cannot be empty.
    if (typeof name !== 'string' || !Array.isArray(scores) || scores.length === 0) {
        return "Invalid Input";
    }

    // 3. Every score inside the array must be a valid number.
    if (scores.some(s => typeof s !== 'number')) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATIONS ---
    // Use .reduce() to sum up the scores for the average calculation
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    const average = total / scores.length;

    // Use the Spread Operator (...) with Math functions to find extremes
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    // --- STEP 3: STATUS LOGIC & CHALLENGE ---
    // Initial check: standard pass mark is 40
    let status = average >= 40 ? "PASSED" : "FAILED";

    // "Strict Subject Policy": If even ONE subject is below 33, change status
    if (scores.some(s => s < 33)) {
        status = "FAILED_IN_SUBJECT";
    }

    // --- STEP 4: RETURN SUMMARY OBJECT ---
    return {
        name: name,
        average: Number(average.toFixed(2)), // Keep 2 decimal places as a number
        highest: highest,
        lowest: lowest,
        status: status
    };
}

// --- EXAMPLE USAGE ---
console.table(generateTranscript("Ahsan", [80, 90, 25]));
console.log(generateTranscript("Karim", [45, 50, 60]));
console.log(generateTranscript("Rahim", [35, 38, 40]));