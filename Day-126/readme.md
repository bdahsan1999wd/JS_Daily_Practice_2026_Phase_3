# 🎓 JS DAILY PRACTICE – DAY-126

📅 **Goal:** The Grand Modern Residency (Vertical Expansion: Column Casting)
🎯 **Focus:** Shuttering Pressure • Concrete Volume • Verticality (Plumb) • Compaction Logic • Stripping Time

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Column Shuttering Pressure Auditor

⚠️ **Function Name:** `checkShutteringSafety()`

When pouring concrete into a tall column (e.g., 10 feet), the liquid concrete exerts "Hydrostatic Pressure" at the bottom. The wooden/steel shuttering must be strong enough.

| Input      | `columnHeight` (ft), `pourRate` (ft per hour). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- **Pressure Factor:** `columnHeight * 150` (lbs/sq.ft).
- If `pourRate` is $> 4$ ft/hr, the pressure increases by an additional **25%** due to the weight of fresh concrete.

| Challenge 📢 | If total pressure is $\le 1500$ lbs/sq.ft, return `"SAFE"`. If between 1501 and 2000, return `"REINFORCE_CLAMPS"`. If $> 2000$, return `"DANGEROUS_LIMIT"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkShutteringSafety(10, 3)` ➔ `"SAFE"` (1500 lbs)
- `checkShutteringSafety(12, 5)` ➔ `"DANGEROUS_LIMIT"` (1800 + 25% = 2250)

---

## 🧩 PROBLEM–02: 🧊 Vertical Column Concrete Volume

⚠️ **Function Name:** `calculateColumnConcrete()`

Calculate the volume of concrete needed for all columns on the 1st floor.

| Input      | `columnCount` (num), `dimensions` (Object: `{w: inch, d: inch, h: ft}`). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return number (Cubic Feet).                                              |

**Rules:**

- **Formula:** `(Width_ft * Depth_ft * Height_ft) * columnCount`.
- Convert inches to feet by dividing by 12.

| Challenge 📢 | Add a **3% wastage factor** for concrete stuck in the mixer or pump. Return the result rounded to 2 decimal places. If any dimension is missing or $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateColumnConcrete(12, {w: 12, d: 18, h: 10})` ➔ `185.4` (1.5 _ 1 _ 10 _ 12 _ 1.03)

---

## 🧩 PROBLEM–03: 📐 Column Verticality (Plumb) Tracker

⚠️ **Function Name:** `trackColumnVerticality()`

In a 6-story building, if a 1st-floor column is tilted, the error multiplies as you go up. We measure the "Offset" (deviation) at the top of the column.

| Input      | `heightFT` (num), `offsetInches` (num). |
| :--------- | :-------------------------------------- |
| **Output** | Return string.                          |

**Rules:**

- **Standard Tolerance:** Maximum **0.25 inches** (1/4 inch) for a 10ft column.
- **Ratio:** `0.025 inches of tilt per 1 foot of height`.

| Challenge 📢 | Calculate the `allowedOffset = heightFT * 0.025`. If `offsetInches <= allowedOffset`, return `"ACCEPTED"`. If not, return `"ADJUST_REQUIRED: [difference]"`. Round the difference to 3 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `trackColumnVerticality(10, 0.2)` ➔ `"ACCEPTED"` (Limit is 0.25)
- `trackColumnVerticality(12, 0.5)` ➔ `"ADJUST_REQUIRED: 0.2"` (Limit is 0.3)

---

## 🧩 PROBLEM–04: ⚡ Vibrator "Compaction" Timer

⚠️ **Function Name:** `getVibrationTime()`

To remove air bubbles (honeycombing) from the concrete, an electric vibrator is used. Under-vibration leaves holes; over-vibration causes the stones to sink to the bottom.

| Input      | `concreteSlump` (inches), `isHighGrade` (bool). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number (Seconds per layer).              |

**Rules:**

- **Base Time:** - If `concreteSlump` is 1-2 (dry): **15 seconds**.
  - If `concreteSlump` is 3-4 (medium): **10 seconds**.
  - If `concreteSlump` is $> 4$ (wet): **5 seconds**.
- If `isHighGrade` is `true` (Grade 72.5 / 4000 PSI), add **3 seconds** extra to ensure density.

| Challenge 📢 | Return the total seconds. If `concreteSlump` is less than 1, return `"Invalid Slump Value"`. |
| :----------- | :------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getVibrationTime(3.5, true)` ➔ `13`
- `getVibrationTime(5, false)` ➔ `5`

---

## 🧩 PROBLEM–05: 🕒 Shuttering "Stripping" Time Auditor

⚠️ **Function Name:** `canRemoveShuttering()`

The wooden frames (shuttering) should not be removed too early, or the column might collapse under its own weight.

| Input      | `hoursSincePour` (num), `avgTemperature` (°C). |
| :--------- | :--------------------------------------------- |
| **Output** | Return boolean.                                |

**Rules:**

- **Minimum Time:** Standard column shuttering removal is **24 hours**.
- **Temperature Rule:** If `avgTemperature` is below 15°C, the concrete sets slower; add **12 hours** to the minimum time.

| Challenge 📢 | Return `true` if it's safe to remove the shuttering, otherwise `false`. If `hoursSincePour` is less than 0, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `canRemoveShuttering(30, 25)` ➔ `true` (Meets 24h limit)
- `canRemoveShuttering(30, 10)` ➔ `false` (Needs 36h because it's cold)
