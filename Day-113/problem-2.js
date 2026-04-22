// 🧩 PROBLEM–02: findBestSubstitute()

// Logic: Filter teachers based on their department and availability for a specific time slot, then select the one with the most years of experience.

function findBestSubstitute(teachers, absentDept, slot) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(teachers) || typeof absentDept !== 'string' || typeof slot !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: FILTER ELIGIBLE TEACHERS ---
    // Must be in the same department and have the requested slot in their free list.
    const eligible = teachers.filter(t =>
        t.dept === absentDept && t.freeSlots.includes(slot)
    );

    // --- STEP 3: HANDLE EMPTY LIST ---
    if (eligible.length === 0) return "NO_SUBSTITUTE_AVAILABLE";

    // --- STEP 4: FIND HIGHEST EXPERIENCE ---
    // Use reduce to find the teacher with the max experience.
    const best = eligible.reduce((prev, current) =>
        (prev.experience > current.experience) ? prev : current
    );

    return best.name;
}

// --- EXAMPLE USAGE ---
const teachers = [
    { name: "Z", dept: "Math", freeSlots: [9, 10], experience: 5 },
    { name: "Y", dept: "Math", freeSlots: [10], experience: 12 }
];
console.log(findBestSubstitute(teachers, "Math", 10));