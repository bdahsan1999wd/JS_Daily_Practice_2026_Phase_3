# 🎓 JS DAILY PRACTICE – DAY-125

📅 **Goal:** The Grand Modern Residency (Budget Audit & Ground Slab)
🎯 **Focus:** Cost Variance • Soling Math • Slab Thickness • Reinforcement Density • Phase Wrap-up

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💰 Phase-1 Cost Variance Auditor

⚠️ **Function Name:** `auditPhaseCost()`

You allocated 20% of your 5 Crore budget for the Foundation and Ground level. Let's check if you are overspending.

| Input      | `totalBudget` (num), `actualSpent` (num). |
| :--------- | :---------------------------------------- |
| **Output** | Return string.                            |

**Rules:**

- **Target Allocation:** 20% of `totalBudget`.
- **Variance:** `actualSpent - Target Allocation`.

| Challenge 📢 | If `actualSpent` is within the 20% target, return `"UNDER_BUDGET"`. If it exceeds the target by up to 5%, return `"WARNING: [varianceAmount]"`. If it exceeds by more than 5%, return `"CRITICAL: [varianceAmount]"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditPhaseCost(50000000, 9000000)` ➔ `"UNDER_BUDGET"` (Target was 10M)
- `auditPhaseCost(50000000, 11000000)` ➔ `"CRITICAL: 1000000"`

---

## 🧩 PROBLEM–02: 🧱 Brick Soling "Count" Logic

⚠️ **Function Name:** `calculateSolingBricks()`

Before casting the ground slab, a layer of bricks (Soling) is laid flat. You need to calculate the total bricks needed for your 1800 sq.ft plot.

| Input      | `areaSqFt` (num), `isEdgingRequired` (bool). |
| :--------- | :------------------------------------------- |
| **Output** | Return number.                               |

**Rules:**

- **Standard Flat Soling:** 3 bricks per square foot.
- If `isEdgingRequired` is `true`, add an extra **10%** for the side boundaries.

| Challenge 📢 | Return the total brick count rounded up (`Math.ceil`). If `areaSqFt` is less than 100, return `"Invalid Area"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSolingBricks(1800, false)` ➔ `5400`
- `calculateSolingBricks(1800, true)` ➔ `5941`

---

## 🧩 PROBLEM–03: 🧊 Ground Slab Concrete Volume

⚠️ **Function Name:** `calculateSlabConcrete()`

The ground slab (Floor) usually has a thickness of 4 to 6 inches.

| Input      | `areaSqFt` (num), `thicknessInch` (num). |
| :--------- | :--------------------------------------- |
| **Output** | Return number (Cubic Feet).              |

**Rules:**

- **Thickness in Feet:** `thicknessInch / 12`.
- **Volume:** `areaSqFt * ThicknessInFeet`.

| Challenge 📢 | Add a **5% wastage factor** for uneven ground levels. Return the final volume rounded to 2 decimal places. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSlabConcrete(1800, 5)` ➔ `787.5` (1800 _ 0.4166 _ 1.05)

---

## 🧩 PROBLEM–04: ⛓️ Reinforcement "Density" Checker

⚠️ **Function Name:** `checkSlabSteelDensity()`

For a modern building, the weight of steel in a slab should be between 2kg to 3kg per square foot.

| Input      | `totalSteelKG` (num), `slabAreaSqFt` (num). |
| :--------- | :------------------------------------------ |
| **Output** | Return string.                              |

**Rules:**

- **Density:** `totalSteelKG / slabAreaSqFt`.

| Challenge 📢 | If density is between 2 and 3 (inclusive), return `"OPTIMAL"`. If $< 2$, return `"WEAK"`. If $> 3$, return `"OVER_REINFORCED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkSlabSteelDensity(4500, 1800)` ➔ `"OPTIMAL"` (Density: 2.5)
- `checkSlabSteelDensity(3000, 1800)` ➔ `"WEAK"` (Density: 1.66)

---

## 🧩 PROBLEM–05: 🏁 Phase-2 Completion Readiness

⚠️ **Function Name:** `isPhaseComplete()`

Before moving to the 1st Floor (Phase 3), we check if all critical underground tasks are finished.

| Input      | `checklist` (Object: `{piling: bool, pileCap: bool, gradeBeam: bool, soilBackfill: bool}`). |
| :--------- | :------------------------------------------------------------------------------------------ |
| **Output** | Return string.                                                                              |

**Rules:**

- All 4 properties must be `true` to proceed.

| Challenge 📢 | If all are true, return `"PHASE_COMPLETE_READY_FOR_LEVEL_1"`. If any are false, return `"PENDING: [list of false tasks]"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isPhaseComplete({piling: true, pileCap: true, gradeBeam: false, soilBackfill: true})` ➔ `"PENDING: gradeBeam"`
