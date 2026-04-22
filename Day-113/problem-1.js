// 🧩 PROBLEM–01: getScienceFairRank()

// Logic: Calculate total scores and highest individual judge scores for each project, then sort them using a multi-key approach (Total Score > Top Judge Score) to determine the rank of the target project.

function getScienceFairRank(projects, targetProject) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(projects) || typeof targetProject !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: DATA TRANSFORMATION ---
    // create a new array with calculated total and the highest single score for tie-breaking.
    const scoredProjects = projects.map(p => {
        const total = p.scores.reduce((a, b) => a + b, 0);
        const maxSingle = Math.max(...p.scores);
        return { name: p.name, total, maxSingle };
    });

    // --- STEP 3: MULTI-KEY SORTING ---
    // Sort descending by total. If totals are equal, sort descending by maxSingle.
    scoredProjects.sort((a, b) => {
        if (b.total !== a.total) return b.total - a.total;
        return b.maxSingle - a.maxSingle;
    });

    // --- STEP 4: FIND RANK ---
    const index = scoredProjects.findIndex(p => p.name === targetProject);

    // If index is -1, student doesn't exist. Otherwise, return index + 1 (since rank starts at 1).
    return index !== -1 ? index + 1 : "PROJECT_NOT_FOUND";
}

// --- EXAMPLE USAGE ---
console.log(getScienceFairRank([{ name: "A", scores: [5, 5, 5] }, { name: "B", scores: [10, 2, 3] }], "B"));