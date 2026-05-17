# 🎓 JS DAILY PRACTICE – DAY-137

📅 **Goal:** The Grand Modern Residency (Internal Plastering & Surface Prep)
🎯 **Focus:** Plaster Volume • Sand Sieve Analysis • Cement-to-Sand Ratio • Curing Duration • Surface Roughness

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧊 Plaster Mortar Volume Calculator

⚠️ **Function Name:** `calculatePlasterVolume()`

You need to estimate the wet mortar required for a specific room. Internal plastering is usually 12mm (approx 0.5 inches) thick.

| Input      | `wallAreaSqFt` (num), `thicknessInch` (num). |
| :--------- | :------------------------------------------- |
| **Output** | Return number (Cubic Feet).                  |

**Rules:**

- **Volume:** `wallAreaSqFt * (thicknessInch / 12)`.
- **Dry Volume:** Multiply the wet volume by **1.33** (to account for shrinkage when mixing water).
- **Filling Factor:** Add **15% extra** for "filling" the joints between bricks and uneven surfaces.

| Challenge 📢 | Return the total Dry Volume rounded to 2 decimal places. If `thicknessInch` is $> 1$, return `"UNSAFE_THICKNESS"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePlasterVolume(200, 0.5)` ➔ `12.75` (8.33 _ 1.33 _ 1.15)
- `calculatePlasterVolume(200, 1.5)` ➔ `"UNSAFE_THICKNESS"`

---

## 🧩 PROBLEM–02: ⏳ Plaster "Curing" Tracker

⚠️ **Function Name:** `getPlasterStatus()`

Fresh plaster needs to be kept wet (cured) to reach its full strength. For the high-quality finish of your residency, a specific schedule is required.

| Input      | `daysSincePlaster` (num), `tempCelsius` (num). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- **Critical Phase:** Days 1 to 3.
- **Strength Phase:** Days 4 to 7.
- **Ready Phase:** Day 8+.
- If `tempCelsius` $> 35$, the plaster is at "HIGH_EVAPORATION_RISK".

| Challenge 📢 | If in the Critical Phase and temp is high, return `"CRITICAL_CURING_REQUIRED"`. If in Strength Phase, return `"CONTINUE_WATERING"`. If in Ready Phase, return `"READY_FOR_PUTTY"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getPlasterStatus(2, 38)` ➔ `"CRITICAL_CURING_REQUIRED"`
- `getPlasterStatus(5, 30)` ➔ `"CONTINUE_WATERING"`

---

## 🧩 PROBLEM–03: 🧱 Plaster Material Breakdown

⚠️ **Function Name:** `calculatePlasterMaterials()`

Internal plaster is usually a **1:6** mix (1 part Cement, 6 parts Sand).

| Input      | `dryVolumeCFT` (num). |
| :--------- | :-------------------- |
| **Output** | Return Object.        |

**Rules:**

- **Sum of Parts:** $1 + 6 = 7$.
- **Cement (Bags):** `(dryVolumeCFT / 7) / 1.25`.
- **Sand (CFT):** `(dryVolumeCFT / 7) * 6`.

| Challenge 📢 | Return an object: `{ cement: num, sand: num }`. Round cement to 2 decimal places and sand to the nearest whole number. If `dryVolumeCFT` is $\le 0$, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePlasterMaterials(50)` ➔ `{ cement: 5.71, sand: 43 }`

---

## 🧩 PROBLEM–04: 📐 Wall Squareness (Right Angle) Check

⚠️ **Function Name:** `isWallSquare()`

In a modern kitchen or bathroom, the walls must meet at a perfect 90° angle, or the tiles won't align. We use the **3-4-5 rule**.

| Input      | `sideA` (num), `sideB` (num), `hypotenuse` (num). |
| :--------- | :------------------------------------------------ |
| **Output** | Return boolean.                                   |

**Rules:**

- Check if $A^2 + B^2 = C^2$.

| Challenge 📢 | Because of minor plaster variations, allow a **tolerance of 0.5 units**. If the difference between $A^2+B^2$ and $C^2$ is $\le 0.5$, return `true`. Otherwise, return `false`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isWallSquare(3, 4, 5)` ➔ `true`
- `isWallSquare(3, 4, 5.2)` ➔ `false` (5.2² is 27.04; 25 vs 27.04 is too big a gap)

---

## 🧩 PROBLEM–05: 🧴 Surface "Key" Roughness Auditor

⚠️ **Function Name:** `checkBondingKey()`

Before plastering a concrete column, we check the "Key" (the hacking you did on Day-134). If the column is too smooth, the plaster will fall off.

| Input      | `hacksPerSqFt` (num), `hasBondingAgent` (bool). |
| :--------- | :---------------------------------------------- |
| **Output** | Return string.                                  |

**Rules:**

- **Ideal:** $\ge 30$ hacks/sq.ft.
- **Minimum:** 20 hacks/sq.ft.
- If hacks are $< 30$, `hasBondingAgent` (chemical glue) must be `true`.

| Challenge 📢 | If ideal, return `"EXCELLENT"`. If minimum is met with bonding agent, return `"SAFE"`. If hacks $< 20$, return `"UNSAFE: RE-HACK_REQUIRED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkBondingKey(25, true)` ➔ `"SAFE"`
- `checkBondingKey(25, false)` ➔ `"UNSAFE: RE-HACK_REQUIRED"`
