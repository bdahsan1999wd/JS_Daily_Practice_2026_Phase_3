# 🎓 JS DAILY PRACTICE – DAY-120

📅 **Goal:** The Grand Modern Residency (Material Grade & Mix Design)
🎯 **Focus:** Concrete PSI • Steel Tensile Strength • Water-Cement Ratio • Batch Volume • Quality Variance

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧪 Concrete Mix Strength (PSI) Auditor

⚠️ **Function Name:** `validateConcreteStrength()`

For a 6-story building, the concrete strength (PSI) must meet the design requirements for different structural elements.

| Input      | `element` (string), `measuredPSI` (number). |
| :--------- | :------------------------------------------ |
| **Output** | Return string.                              |

**Rules (Required Minimums):**

- **Foundation:** 4000 PSI
- **Columns:** 3500 PSI
- **Slabs/Beams:** 3000 PSI

| Challenge 📢 | If the `measuredPSI` meets the requirement for the `element`, return `"PASS"`. If it's below but within 10% of the requirement, return `"RE-TEST"`. Otherwise, return `"FAIL"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `validateConcreteStrength("Foundation", 3900)` ➔ `"RE-TEST"` (10% of 4000 is 400; 3600-3999 is re-test range)
- `validateConcreteStrength("Columns", 3600)` ➔ `"PASS"`

---

## 🧩 PROBLEM–02: 🦾 Steel Tensile Strength "Yield" Logic

⚠️ **Function Name:** `checkSteelYield()`

High-strength de-formed bars (Grade 72.5) are used for modern buildings. The actual yield strength should be within a specific tolerance.

| Input      | `grade` (number), `actualYield` (number). |
| :--------- | :---------------------------------------- |
| **Output** | Return boolean.                           |

**Rules:**

- The `actualYield` must be at least **1.1 times** the specified `grade` to ensure safety.

| Challenge 📢 | Return `true` if it passes the safety factor, otherwise `false`. If `grade` is not 60 or 72.5, return `"Invalid Grade"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkSteelYield(72.5, 80)` ➔ `true` (72.5 \* 1.1 = 79.75)
- `checkSteelYield(60, 62)` ➔ `false` (60 \* 1.1 = 66)

---

## 🧩 PROBLEM–03: 💧 Water-Cement Ratio Efficiency

⚠️ **Function Name:** `calculateWCRatio()`

The strength of concrete depends heavily on the water-to-cement ratio. Too much water weakens the concrete; too little makes it unworkable.

| Input      | `waterWeight` (kg), `cementWeight` (kg). |
| :--------- | :--------------------------------------- |
| **Output** | Return string.                           |

**Rules:**

- **Ratio:** `waterWeight / cementWeight`.
- **Ideal Range:** 0.40 to 0.55.

| Challenge 📢 | Return `"OPTIMAL"` if within range. If below 0.40, return `"TOO_DRY"`. If above 0.55, return `"TOO_WET"`. Round the calculated ratio to 2 decimal places in your internal logic. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWCRatio(22.5, 50)` ➔ `"OPTIMAL"` (Ratio: 0.45)
- `calculateWCRatio(30, 50)` ➔ `"TOO_WET"` (Ratio: 0.60)

---

## 🧩 PROBLEM–04: 🧱 Concrete Batch Volume Calculator

⚠️ **Function Name:** `calculateBatchVolume()`

When mixing concrete at the site, you need to know how much volume (Cubic Feet) one batch will produce.

| Input      | `cementBags` (number), `ratio` (Object: `{c: 1, s: num, a: num}`). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return number.                                                     |

**Rules:**

- **Formula:** 1 bag of cement (50kg) is approximately **1.25 cubic feet**.
- **Total Dry Volume:** `1.25 * cementBags * (ratio.c + ratio.s + ratio.a)`.
- **Wet Volume:** `Dry Volume * 0.67` (Concrete shrinks when water is added).

| Challenge 📢 | Return the total **Wet Volume** rounded to 2 decimal places. If any ratio value is missing or $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBatchVolume(10, {c: 1, s: 1.5, a: 3})` ➔ `46.06` (1.25 _ 10 _ 5.5 \* 0.67)

---

## 🧩 PROBLEM–05: 📉 Batch Consistency Variance Tracker

⚠️ **Function Name:** `trackQualityVariance()`

To maintain the quality of the building, the strength of different batches should be consistent.

| Input      | `batchStrengths` (Array of numbers). |
| :--------- | :----------------------------------- |
| **Output** | Return string.                       |

**Rules:**

- **Standard Deviation-ish Check:** Find the difference between the maximum and minimum strength in the array.

| Challenge 📢 | If the difference (variance) is $\le 500$ PSI, return `"STABLE"`. If it's $> 500$, return `"INCONSISTENT"`. If the array has fewer than 3 samples, return `"NEED_MORE_SAMPLES"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `trackQualityVariance([3500, 3600, 3450])` ➔ `"STABLE"` (Diff: 150)
- `trackQualityVariance([3200, 3800, 3400])` ➔ `"INCONSISTENT"` (Diff: 600)
