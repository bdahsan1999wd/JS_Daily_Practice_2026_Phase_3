// 🧩 PROBLEM–03: selectSandingGrit()

// Logic: Using a switch statement to map specific construction layers to their industry-standard sandpaper grit values for optimal finish.

function selectSandingGrit(layerType) {

    // --- STEP 1: VALIDATION & SELECTION ---
    if (typeof layerType !== 'string') return "Invalid Input";

    switch (layerType) {
        case "Plaster":
            return 80;
        case "BaseCoat":
            return 120;
        case "FinalCoat":
            return 220;
        default:
            return "Invalid Layer";
    }
}

// --- EXAMPLE USAGE ---
console.log(selectSandingGrit("FinalCoat"));
console.log(selectSandingGrit("Wood"));