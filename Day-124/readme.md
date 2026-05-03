# 🎓 JS DAILY PRACTICE – DAY-124

📅 **Goal:** The Grand Modern Residency (Column Starters & Leveling)
🎯 **Focus:** Starter Bar Lap Length • Vertical Plumb Check • Water Level Calibration • Column Orientation • Concrete Cover

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🔗 Rebar Lap Length Calculator

⚠️ **Function Name:** `calculateLapLength()`

When moving from the pile cap to the column, the steel bars must overlap (lap) to transfer the load safely.

| Input      | `barDiameterMM` (num), `concreteGradePSI` (num). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number (Total Lap Length in MM).          |

**Rules:**

- **Standard Lap Factor:** - If PSI $\ge 4000$: Factor is **40**.
  - If PSI $< 4000$: Factor is **50**.
- **Formula:** `barDiameterMM * Factor`.

| Challenge 📢 | In earthquake-resistant design, we add a **15% safety buffer** to the lap length. Return the final length rounded to the nearest integer. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateLapLength(20, 4000)` ➔ `920` (20 _ 40 _ 1.15)
- `calculateLapLength(16, 3000)` ➔ `920` (16 _ 50 _ 1.15)

---

## 🧩 PROBLEM–02: 📏 Vertical "Plumb" Deviation Audit

⚠️ **Function Name:** `checkColumnPlumb()`

Column starters must be perfectly vertical. We use a plumb bob to measure the deviation from the top to the bottom.

| Input      | `columnHeightFT` (num), `deviationInches` (num). |
| :--------- | :----------------------------------------------- |
| **Output** | Return string.                                   |

**Rules:**

- **Allowed Tolerance:** 1/8 inch for every 10 feet of height.

| Challenge 📢 | If the `deviationInches` is within tolerance, return `"PERFECT"`. If it exceeds tolerance but is less than 0.5 inches, return `"FIX_REQUIRED"`. If $\ge 0.5$ inches, return `"REJECTED"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkColumnPlumb(10, 0.1)` ➔ `"PERFECT"` (Tolerance is 0.125)
- `checkColumnPlumb(20, 0.4)` ➔ `"FIX_REQUIRED"` (Tolerance is 0.25)

---

## 🧩 PROBLEM–03: 💧 Water Level Calibration Sync

⚠️ **Function Name:** `syncFloorLevels()`

To ensure all columns are the same height, we use a water level pipe. You need to verify if two points are perfectly leveled.

| Input      | `pointALevel` (num), `pointBLevel` (num). |
| :--------- | :---------------------------------------- |
| **Output** | Return boolean.                           |

**Rules:**

- In construction, a difference of up to **2mm** is considered acceptable due to surface tension.

| Challenge 📢 | Return `true` if the absolute difference is $\le 2$, otherwise `false`. If any input is not a number, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `syncFloorLevels(100.5, 102.1)` ➔ `true` (Diff 1.6)
- `syncFloorLevels(100, 103)` ➔ `false` (Diff 3)

---

## 🧩 PROBLEM–04: 🔄 Column Orientation Validator

⚠️ **Function Name:** `validateColumnOrientation()`

For 1800 sq.ft modern buildings, rectangular columns must be oriented along the "Strong Axis" to resist wind and tremors.

| Input      | `column` (Object: `{id: num, width: num, depth: num, axis: string}`). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return string.                                                        |

**Rules:**

- **Axis:** Should be `"X"` if `width > depth`, and `"Y"` if `depth > width`.
- If `width == depth` (Square), any axis is `"VALID"`.

| Challenge 📢 | Check if the `axis` provided in the object matches the logic. Return `"MATCHED"` or `"MISALIGNED"`. If any property is missing or $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateColumnOrientation({id: 1, width: 20, depth: 12, axis: "X"})` ➔ `"MATCHED"`
- `validateColumnOrientation({id: 2, width: 12, depth: 20, axis: "X"})` ➔ `"MISALIGNED"`

---

## 🧩 PROBLEM–05: 🛡️ Concrete Clear Cover Audit

⚠️ **Function Name:** `checkConcreteCover()`

Clear cover is the distance between the rebar and the outer surface of the concrete. It protects the steel from rusting.

| Input      | `location` (string), `actualCoverMM` (num). |
| :--------- | :------------------------------------------ |
| **Output** | Return string.                              |

**Rules (Standard Minimums):**

- **Underground (Starters):** 75mm
- **Above Ground (Columns):** 40mm

| Challenge 📢 | If `actualCoverMM` is exactly the minimum, return `"OPTIMAL"`. If it's more than the minimum by up to 10mm, return `"SAFE"`. Otherwise, return `"DANGER"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkConcreteCover("Underground", 80)` ➔ `"SAFE"`
- `checkConcreteCover("Columns", 35)` ➔ `"DANGER"`
