# 🎓 JS DAILY PRACTICE – DAY-117

📅 **Goal:** The Grand Modern Residency (Legal Compliance & Space Planning)
🎯 **Focus:** Setback Auditing • Floor Area Ratio (FAR) • Space Efficiency • Ventilation Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: ⚖️ RAJUK Setback Policy Auditor

⚠️ **Function Name:** `auditSetbackCompliance()`

Every building in a modern city must leave a minimum distance from the boundary. Let's verify if your design meets the legal requirements.

| Input      | `actualSetbacks` (Object: `{front: num, back: num, sides: num}`). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return string.                                                    |

**Rules:**

- **Required Minimums:** Front: 1.5m, Back: 1.0m, Sides: 1.0m.
- Compare the `actualSetbacks` against these minimums.

| Challenge 📢 | If all sides meet the requirement, return `"COMPLIANT"`. If any side fails, return `"NON-COMPLIANT: [List of failed sides]"`. (e.g., `"NON-COMPLIANT: front, sides"`). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditSetbackCompliance({front: 1.2, back: 1.1, sides: 1.0})` ➔ `"NON-COMPLIANT: front"`

---

## 🧩 PROBLEM–02: 📏 FAR (Floor Area Ratio) Calculator

⚠️ **Function Name:** `calculateFAR()`

FAR determines how many floors you can build based on your plot size and road width.

| Input      | `totalFloorArea` (number), `plotArea` (number). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number (FAR Value).                      |

**Rules:**

- **Formula:** `FAR = Total Floor Area (all floors combined) / Plot Area`.
- Total Floor Area for your 6-story building would be `FloorArea * 6`.

| Challenge 📢 | For your 1800 sq.ft plot, the maximum allowed FAR is **3.75**. If the calculated FAR exceeds this, return `"EXCEEDS_LIMIT"`. Otherwise, return the FAR value rounded to 2 decimal places. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFAR(6000, 1800)` ➔ `3.33`
- `calculateFAR(8000, 1800)` ➔ `"EXCEEDS_LIMIT"`

---

## 🧩 PROBLEM–03: 💨 Natural Ventilation "Airflow" Logic

⚠️ **Function Name:** `checkVentilation()`

A modern luxury building must have proper airflow. Each room's window area must be at least 15% of the room's floor area.

| Input      | `rooms` (Array of objects: `[{name: "Bed1", area: 200, windowArea: 25}]`). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return Array of Strings.                                                   |

**Rules:**

- Check if `windowArea >= (area * 0.15)`.

| Challenge 📢 | Return an array of room names that DO NOT have enough ventilation. If all rooms are fine, return an empty array. If the input is not an array, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkVentilation([{name: "Master", area: 300, windowArea: 50}, {name: "Kitchen", area: 100, windowArea: 10}])` ➔ `["Kitchen"]`

---

## 🧩 PROBLEM–04: 🚪 Space Optimization "Wastage" Tracker

⚠️ **Function Name:** `calculateSpaceEfficiency()`

In modern architecture, "Corridor/Circulation" space should be minimal to maximize the living area.

| Input      | `totalArea` (number), `usableArea` (number). |
| :--------- | :------------------------------------------- |
| **Output** | Return string.                               |

**Rules:**

- **Efficiency %:** `(usableArea / totalArea) * 100`.

| Challenge 📢 | If efficiency is 85% or higher, return `"OPTIMIZED"`. If it's between 70% and 84%, return `"SUB-OPTIMAL"`. If below 70%, return `"POOR_DESIGN"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSpaceEfficiency(1200, 1050)` ➔ `"OPTIMIZED"` (87.5%)

---

## 🧩 PROBLEM–05: 📐 Vertical Clearance (Staircase) Logic

⚠️ **Function Name:** `validateStaircase()`

For safety and comfort, the staircase "Riser" and "Tread" must follow specific ratios.

| Input      | `riser` (num), `tread` (num). |
| :--------- | :---------------------------- |
| **Output** | Return string.                |

**Rules:**

- **Riser:** Height of one step (Standard: 6 to 7 inches).
- **Tread:** Width of one step (Standard: 10 to 12 inches).
- **Safety Formula:** `(2 * riser) + tread` should be between **24 and 25 inches**.

| Challenge 📢 | Return `"SAFE"` if it meets the formula and standard ranges. If the riser is too high (>7), return `"TOO_STEEP"`. Otherwise, return `"UNSAFE"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateStaircase(7, 10)` ➔ `"SAFE"` (2\*7 + 10 = 24)
- `validateStaircase(8, 10)` ➔ `"TOO_STEEP"`
