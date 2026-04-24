// 🧩 PROBLEM–03: calculateHonorsGPA()

// Logic: Iterates through an array of subjects to calculate a weighted Grade Point Average. It applies a base scale and adds a "Bonus" weight only for Honors-tier subjects where the student demonstrated proficiency (60+ marks).

function calculateHonorsGPA(subjects) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(subjects) || subjects.length === 0) return "Invalid Input";

    let totalGP = 0;

    for (let sub of subjects) {
        const marks = sub.marks || sub.m; // Flexibility for different property names
        let gp = 0;

        // --- STEP 2: BASE GP SCALE ---
        if (marks >= 80) gp = 5.0;
        else if (marks >= 70) gp = 4.0;
        else if (marks >= 60) gp = 3.5;
        else gp = 0.0;

        // --- STEP 3: HONORS BONUS CHALLENGE ---
        // Add 0.5 only if it's an Honors course and the student didn't fail (60+)
        if (sub.type === "Honors" && marks >= 60) {
            gp += 0.5;
        }

        totalGP += gp;
    }

    // --- STEP 4: FINAL CALCULATION ---
    const averageGPA = totalGP / subjects.length;
    return Number(averageGPA.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateHonorsGPA([{ m: 80, type: "Honors" }, { m: 80, type: "General" }]));