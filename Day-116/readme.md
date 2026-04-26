# 🎓 JS DAILY PRACTICE – DAY-116

📅 **Goal:** The Grand Modern Residency (Planning & Soil Analysis)
🎯 **Focus:** Modular Validation • Unit Conversion • Object Nesting • Data Auditing

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📐 Structural "Buildable Area" Calculator

⚠️ **Function Name:** `calculateBuildableArea()`

Before construction, you must subtract "Setbacks" (mandatory open space) from your 1800 sq.ft plot according to local building codes.

| Input      | `plotTotalSqFt` (number), `setbacks` (Object: `{frontM: num, backM: num, sideM: num}`). |
| :--------- | :-------------------------------------------------------------------------------------- |
| **Output** | Return number (Total Buildable Sq. Ft).                                                 |

**Rules:**

- **Conversion:** 1 Meter = 3.28 Feet.
- **Formula:** Assuming a square plot: $Side = \sqrt{plotTotalSqFt}$.
- **Net Length:** $Side - (frontM + backM) \times 3.28$.
- **Net Width:** $Side - (sideM \times 2) \times 3.28$.
- **Buildable Area:** `Net Length * Net Width`.

| Challenge 📢 | If the resulting buildable area is less than 60% of the `plotTotalSqFt`, return `"INSUFFICIENT_SPACE"`. Return the result rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBuildableArea(1800, {frontM: 1.5, backM: 1, sideM: 1})` ➔ `1227.58`

---

## 🧩 PROBLEM–02: 🧪 Foundation Stability "Health Check"

⚠️ **Function Name:** `verifyFoundationSafety()`

To prevent earthquake damage, the soil must be audited. You will receive an array of test spot results.

| Input      | `testSpots` (Array of objects: `[{id: 1, cohesion: 20, friction: 30, density: 1.5}]`). |
| :--------- | :------------------------------------------------------------------------------------- |
| **Output** | Return string.                                                                         |

**Rules:**

- For each spot, calculate the **Stability Score**: `(cohesion * 2.5) + (friction * 1.2) + (density * 10)`.
- A spot is "SAFE" if the score is 100 or more.

| Challenge 📢 | Return a summary string: `"TOTAL_SPOTS: [total], SAFE: [safeCount], STATUS: [READY/NEEDS_PILING]"`. Status is `"READY"` only if ALL spots are safe. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `verifyFoundationSafety([{id:1, cohesion:20, friction:30, density:2}, {id:2, cohesion:10, friction:20, density:1}])` ➔ `"TOTAL_SPOTS: 2, SAFE: 1, STATUS: NEEDS_PILING"`

---

## 🧩 PROBLEM–03: 🏗️ Earthquake Zone Cost Premium

⚠️ **Function Name:** `applySeismicPremium()`

Construction costs increase based on the Seismic Zone of the location (e.g., Dhaka is Zone 3).

| Input      | `baseEstimate` (number), `zone` (number), `isModernDesign` (boolean). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return number (Final Cost).                                           |

**Rules:**

- **Zone 1:** +0% | **Zone 2:** +10% | **Zone 3:** +20% | **Zone 4:** +35%.
- If `isModernDesign` is `true`, add an additional **5%** "Architectural Fee" _after_ the zone premium is applied.

| Challenge 📢 | If the `baseEstimate` is less than 1,000,000, return `"Invalid Estimate"`. Round final result to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `applySeismicPremium(50000000, 3, true)` ➔ `63000000`

---

## 🧩 PROBLEM–04: 🛡️ Smart Material Procurement Audit

⚠️ **Function Name:** `auditMaterialStock()`

Audit the delivery batch to ensure high-grade steel and concrete meet safety standards.

| Input      | `deliveryBatch` (Array of objects), `requiredSteelGrade` (number). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return Object.                                                     |

**Rules:**

- Filter out items where the `item` is "Steel" but the `grade` is lower than `requiredSteelGrade`.
- Filter out items where the `item` is "Concrete" but the `psi` is lower than 3500.

| Challenge 📢 | Return a new object: `{acceptedItems: [], rejectedCount: num}`. If an item's `qty` is 0 or less, it should also be rejected. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditMaterialStock([{item: "Steel", grade: 60, qty: 10}, {item: "Steel", grade: 75, qty: 5}], 72.5)` ➔ `{acceptedItems: [{item: "Steel", grade: 75, qty: 5}], rejectedCount: 1}`

---

## 🧩 PROBLEM–05: 📊 Construction Milestone Budgeting

⚠️ **Function Name:** `getMilestoneBudget()`

Break down your total budget into construction milestones to track spending.

| Input      | `totalBudget` (number). |
| :--------- | :---------------------- |
| **Output** | Return string.          |

**Rules:**

- **Milestone 1 (Foundation):** 20%
- **Milestone 2 (Structure):** 45%
- **Milestone 3 (Finishing):** 35%

| Challenge 📢 | Return a formatted string: `"Fnd: [amount] | Str: [amount] | Fin: [amount]"`. If the budget is not a number or is negative, return `"Invalid Input"`. Use `Math.round()` for the amounts. |
| :----------- | :----------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getMilestoneBudget(1000000)` ➔ `"Fnd: 200000 | Str: 450000 | Fin: 350000"`
