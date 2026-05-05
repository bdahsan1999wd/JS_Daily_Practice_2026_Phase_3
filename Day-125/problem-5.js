// 🧩 PROBLEM–05: isPhaseComplete()

// Logic: This is a quality gate check. Before starting the first floor, we must ensure all foundational tasks (Piling, Caps, Beams, Backfilling) are done. It returns the specific tasks that are still pending.

function isPhaseComplete(checklist) {

    // --- STEP 1: VALIDATION ---
    if (!checklist || typeof checklist !== 'object' || Array.isArray(checklist)) {
        return "Invalid Input";
    }

    // --- STEP 2: TRACK PENDING TASKS ---
    let pendingTasks = [];
    const tasks = ['piling', 'pileCap', 'gradeBeam', 'soilBackfill'];

    for (let task of tasks) {
        // Check if the property exists and is false
        if (checklist[task] === false) {
            pendingTasks.push(task);
        }
    }

    // --- STEP 3: DECISION ---
    if (pendingTasks.length === 0) {
        return "PHASE_COMPLETE_READY_FOR_LEVEL_1";
    } else {
        return `PENDING: ${pendingTasks.join(', ')}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(isPhaseComplete({ piling: true, pileCap: true, gradeBeam: false, soilBackfill: true }));
console.log(isPhaseComplete({ piling: true, pileCap: true, gradeBeam: true, soilBackfill: true }));