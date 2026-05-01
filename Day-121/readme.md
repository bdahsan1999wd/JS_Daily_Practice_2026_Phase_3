# 🎓 JS DAILY PRACTICE – DAY-121

📅 **Goal:** The Grand Modern Residency (Excavation & Labor Management)
🎯 **Focus:** Excavation Volume • Labor Productivity • Daily Wage Audit • Depth Safety • Soil Disposal

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Foundation Excavation Volume

⚠️ **Function Name:** `calculateExcavationVolume()`

Before piling, you need to dig the earth. For your 1800 sq.ft plot, you need to calculate the total soil volume to be removed.

| Input      | `length` (ft), `width` (ft), `depth` (ft). |
| :--------- | :----------------------------------------- |
| **Output** | Return number (Cubic Feet).                |

**Rules:**

- **Formula:** `length * width * depth`.
- For safety, add a **10% extra volume** to account for "Sloping" (to prevent the soil from collapsing back into the hole).

| Challenge 📢 | If the `depth` is greater than 15 feet, it's considered a "Deep Foundation"; add a flat 500 cubic feet extra for equipment clearance. Return the total volume rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateExcavationVolume(40, 30, 10)` ➔ `13200` (12000 + 10%)
- `calculateExcavationVolume(40, 30, 20)` ➔ `26900` (24000 + 10% + 500)

---

## 🧩 PROBLEM–02: 👷 Labor Productivity Tracker

⚠️ **Function Name:** `checkLaborEfficiency()`

You have a team of laborers for earth-cutting. You need to know if they are meeting the daily target.

| Input      | `totalVolume` (cft), `laborCount` (num), `hoursWorked` (num). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return string.                                                |

**Rules:**

- Standard productivity for one laborer is **15 cubic feet (cft) per hour**.
- **Actual Productivity:** `totalVolume / (laborCount * hoursWorked)`.

| Challenge 📢 | If Actual Productivity is $\ge 15$, return `"HIGH"`. If between 10 and 14.9, return `"AVERAGE"`. If below 10, return `"LOW_PRODUCTIVITY"`. If any input is 0 or less, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkLaborEfficiency(1200, 10, 8)` ➔ `"HIGH"` (1200 / 80 = 15)
- `checkLaborEfficiency(600, 10, 8)` ➔ `"LOW_PRODUCTIVITY"` (600 / 80 = 7.5)

---

## 🧩 PROBLEM–03: 💰 Daily Wage & Overtime Auditor

⚠️ **Function Name:** `calculateDailyPayroll()`

Managing costs is vital for your 5 Crore budget. Laborers get a base wage and overtime for extra hours.

| Input      | `baseWage` (num), `hoursWorked` (num). |
| :--------- | :------------------------------------- |
| **Output** | Return number.                         |

**Rules:**

- **Standard Shift:** 8 hours.
- If `hoursWorked` $\le 8$, pay is `baseWage`.
- If `hoursWorked` $> 8$, every extra hour is paid at **1.5x** the hourly rate (`baseWage / 8`).

| Challenge 📢 | If total `hoursWorked` exceeds 12 hours, add a **$50 "Meal Allowance"** to the total. Return the total wage rounded to 2 decimal places. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDailyPayroll(800, 10)` ➔ `1100` (800 + 2 hours @ 150/hr)
- `calculateDailyPayroll(800, 13)` ➔ `1600` (800 + 5 hours @ 150/hr + 50 bonus)

---

## 🧩 PROBLEM–04: 🛡️ Excavation Depth Safety Check

⚠️ **Function Name:** `verifyExcavationSafety()`

Deep excavation is dangerous. Depending on the soil type, you must provide "Shoring" (wooden/steel supports).

| Input      | `depth` (ft), `soilType` (string: "Sandy", "Clay", "Rocky"). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return string.                                               |

**Rules:**

- **Sandy Soil:** Shoring required if `depth` $> 5$ ft.
- **Clay Soil:** Shoring required if `depth` $> 8$ ft.
- **Rocky Soil:** Shoring required if `depth` $> 15$ ft.

| Challenge 📢 | Return `"SHORING_REQUIRED"` or `"SAFE_TO_DIG"`. If the `soilType` is not one of the three listed, return `"Invalid Soil Type"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `verifyExcavationSafety(7, "Sandy")` ➔ `"SHORING_REQUIRED"`
- `verifyExcavationSafety(7, "Clay")` ➔ `"SAFE_TO_DIG"`

---

## 🧩 PROBLEM–05: 🚚 Soil Disposal Logistics

⚠️ **Function Name:** `calculateTruckTrips()`

The excavated soil must be moved off-site. You need to calculate how many trucks are needed.

| Input      | `totalVolume` (cft), `truckCapacity` (cft). |
| :--------- | :------------------------------------------ |
| **Output** | Return number (Total Trips).                |

**Rules:**

- Soil expands when excavated (Bulking Factor). Multiply `totalVolume` by **1.25**.

| Challenge 📢 | Calculate the number of trips: `(totalVolume * 1.25) / truckCapacity`. Use `Math.ceil()` for the final result. If any input is invalid, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTruckTrips(1000, 250)` ➔ `5` (1250 / 250)
- `calculateTruckTrips(1000, 300)` ➔ `5` (1250 / 300 = 4.16 → 5)
