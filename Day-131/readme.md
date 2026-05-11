# 🎓 JS DAILY PRACTICE – DAY-131

📅 **Goal:** The Grand Modern Residency (Curing & Strength Gain)
🎯 **Focus:** Curing Ponding • Evaporation Rate • Strength Projection • Water Consumption • Crack Monitoring

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🌊 "Ponding" Water Depth Auditor

⚠️ **Function Name:** `checkCuringPonding()`

For slabs, we build small clay/sand boundaries (called "Aila") and fill them with water. This is called ponding.

| Input      | `measuredDepthInch` (num), `isSunny` (bool). |
| :--------- | :------------------------------------------- |
| **Output** | Return string.                               |

**Rules:**

- **Minimum Depth:** 2 inches.
- If `isSunny` is `true`, the minimum depth should be **3 inches** to account for faster evaporation.

| Challenge 📢 | If the depth is sufficient, return `"STABLE"`. If it's below the requirement but $> 0$, return `"REFILL_REQUIRED"`. If it's 0, return `"CRITICAL: DRY_SLAB"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkCuringPonding(2.5, true)` ➔ `"REFILL_REQUIRED"` (Needs 3)
- `checkCuringPonding(2.5, false)` ➔ `"STABLE"`

---

## 🧩 PROBLEM–02: 📉 Concrete Strength Projection

⚠️ **Function Name:** `predictConcreteStrength()`

Concrete doesn't reach 100% strength on Day 1. It follows a logarithmic growth curve.

| Input      | `designStrengthPSI` (num), `daysPassed` (num). |
| :--------- | :--------------------------------------------- |
| **Output** | Return number (Projected PSI).                 |

**Rules (Standard Growth):**

- **Day 3:** 40% of design strength.
- **Day 7:** 65% of design strength.
- **Day 14:** 90% of design strength.
- **Day 28:** 99% of design strength.

| Challenge 📢 | Return the projected PSI rounded to the nearest integer. If the `daysPassed` is not one of these specific milestones (3, 7, 14, 28), return `"Check on Milestone Days"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `predictConcreteStrength(4000, 7)` ➔ `2600`
- `predictConcreteStrength(3500, 10)` ➔ `"Check on Milestone Days"`

---

## 🧩 PROBLEM–03: 💧 Daily Curing Water Requirement

⚠️ **Function Name:** `calculateWaterVolume()`

Curing a large 1800 sq.ft slab requires a lot of water. You need to calculate the daily replenishment volume.

| Input      | `slabAreaSqFt` (num), `evaporationRate` (inch/day). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return number (Liters).                             |

**Rules:**

- **Volume in Cubic Feet:** `slabAreaSqFt * (evaporationRate / 12)`.
- **Conversion:** 1 Cubic Foot = 28.317 Liters.

| Challenge 📢 | Add **15% extra** for water lost through boundary leaks. Return the total liters rounded to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateWaterVolume(1800, 0.5)` ➔ `2442.34` ( (1800 _ 0.0416) _ 28.317 \* 1.15 )

---

## 🧩 PROBLEM–04: 🌡️ Evaporation Rate "Nomograph" Logic

⚠️ **Function Name:** `shouldUseCuringCompound()`

In very hot or windy weather, water evaporates faster than you can pour it. In such cases, a chemical "Curing Compound" (a plastic-like film) is used.

| Input      | `airTemp` (°C), `humidity` (%), `windSpeed` (km/h). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return boolean.                                     |

**Rules:**

- Use the compound (`true`) if:
  - `airTemp` $> 35$ AND `humidity` $< 40$.
  - OR `windSpeed` $> 25$ km/h.

| Challenge 📢 | Return `true` if chemical curing is recommended, otherwise `false`. If `humidity` is not between 0 and 100, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `shouldUseCuringCompound(38, 30, 10)` ➔ `true`
- `shouldUseCuringCompound(30, 50, 15)` ➔ `false`

---

## 🧩 PROBLEM–05: 🔍 Hairline Crack Auditor

⚠️ **Function Name:** `auditSurfaceCracks()`

During the first 24 hours, "Plastic Shrinkage" cracks might appear. You need to categorize them based on their width.

| Input      | `crackWidthMM` (num). |
| :--------- | :-------------------- |
| **Output** | Return string.        |

**Rules:**

- **Width $\le 0.1$mm:** "HAIRLINE" (Normal).
- **Width 0.11mm to 0.3mm:** "MINOR" (Seal with cement slurry).
- **Width $> 0.3$mm:** "STRUCTURAL" (Requires engineering review).

| Challenge 📢 | If the crack is "STRUCTURAL", return the string in ALL CAPS. Otherwise, return it in Capitalized case (e.g., "Hairline"). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `auditSurfaceCracks(0.05)` ➔ `"Hairline"`
- `auditSurfaceCracks(0.4)` ➔ `"STRUCTURAL"`
