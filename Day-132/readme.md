# 🎓 JS DAILY PRACTICE – DAY-132

📅 **Goal:** The Grand Modern Residency (Staircase Geometry & Reinforcement)
🎯 **Focus:** Waist Slab Thickness • Tread/Riser Count • Rebar Development Length • Headroom Clearance • Concrete Volume

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📐 Staircase Step & Landing Counter

⚠️ **Function Name:** `calculateStairSteps()`

You need to reach a floor height of 10 feet. The staircase has two flights with a "Mid-Landing" in between.

| Input      | `floorHeightFT` (num), `riserInch` (num).                |
| :--------- | :------------------------------------------------------- |
| **Output** | Return Object: `{totalSteps: num, stepsPerFlight: num}`. |

**Rules:**

- **Total Steps:** `(floorHeightFT * 12) / riserInch`.
- **Steps Per Flight:** `Total Steps / 2`.

| Challenge 📢 | If the `Total Steps` is an odd number, return `"REDESIGN: ODD_STEPS"`. If `riserInch` is not between 6 and 7, return `"Invalid Riser"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateStairSteps(10, 6)` ➔ `{totalSteps: 20, stepsPerFlight: 10}`
- `calculateStairSteps(10, 6.5)` ➔ `"REDESIGN: ODD_STEPS"` (18.46 steps)

---

## 🧩 PROBLEM–02: 📏 Waist Slab "Inclined" Length

⚠️ **Function Name:** `calculateWaistSlabLength()`

The "Waist Slab" is the structural inclined slab that supports the steps. To order the right amount of steel, you need its inclined length using the Pythagorean theorem.

| Input      | `horizontalRunFT` (num), `flightHeightFT` (num). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number (Feet).                            |

**Rules:**

- **Formula:** $\sqrt{Run^2 + Height^2}$.

| Challenge 📢 | Add **1.5 feet** extra for the "Development Length" (the steel that goes into the landing and the floor). Return the result rounded to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWaistSlabLength(8, 5)` ➔ `10.93` ($\sqrt{64+25} = 9.43 + 1.5$)

---

## 🧩 PROBLEM–03: 🏗️ Staircase Concrete Volume

⚠️ **Function Name:** `calculateStairConcrete()`

Calculate the concrete volume for one flight of stairs (Waist Slab + Steps).

| Input      | `waistLengthFT` (num), `widthFT` (num), `thicknessInch` (num), `stepCount` (num), `riserInch` (num), `treadInch` (num). |
| :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Output** | Return number (Cubic Feet).                                                                                             |

**Rules:**

- **Waist Volume:** `waistLengthFT * widthFT * (thicknessInch / 12)`.
- **Steps Volume:** `0.5 * (riserInch/12) * (treadInch/12) * widthFT * stepCount` (Triangle area formula).

| Challenge 📢 | Return the total volume (Waist + Steps) rounded to 2 decimal places. If any input is $\le 0$, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateStairConcrete(10, 3.5, 6, 10, 6, 10)` ➔ `24.79` (Example calculation)

---

## 🧩 PROBLEM–04: 🚶 Headroom Clearance Auditor

⚠️ **Function Name:** `checkHeadroom()`

A common mistake in modern buildings is low headroom, where tall people hit their heads on the upper flight while climbing.

| Input      | `verticalGapInches` (num). |
| :--------- | :------------------------- |
| **Output** | Return string.             |

**Rules:**

- **Minimum Safe Headroom:** 84 inches (7 feet).

| Challenge 📢 | If the gap is $\ge 84$, return `"SAFE"`. If between 80 and 83.9, return `"CAUTION: LOW_HEADROOM"`. If $< 80$, return `"CRITICAL: RECONSTRUCT"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkHeadroom(85)` ➔ `"SAFE"`
- `checkHeadroom(78)` ➔ `"CRITICAL: RECONSTRUCT"`

---

## 🧩 PROBLEM–05: ⛓️ Staircase Rebar "Kink" Logic

⚠️ **Function Name:** `validateStairRebar()`

In the junction where the waist slab meets the landing, the steel must be "crossed" (kinked) to prevent the concrete from "bursting" under tension.

| Input      | `mainBarDiaMM` (num), `isCrossed` (bool). |
| :--------- | :---------------------------------------- |
| **Output** | Return string.                            |

**Rules:**

- For your 6-story building, `mainBarDiaMM` must be at least **12mm**.
- `isCrossed` must be `true`.

| Challenge 📢 | If both conditions are met, return `"STRUCTURALLY_SOUND"`. If bars are $< 12$mm, return `"WEAK_REINFORCEMENT"`. If not crossed, return `"DANGER: BURST_RISK"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateStairRebar(12, true)` ➔ `"STRUCTURALLY_SOUND"`
- `validateStairRebar(12, false)` ➔ `"DANGER: BURST_RISK"`
