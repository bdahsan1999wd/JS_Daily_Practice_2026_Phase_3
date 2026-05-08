# 🎓 JS DAILY PRACTICE – DAY-128

📅 **Goal:** The Grand Modern Residency (Slab Formwork & Shuttering)
🎯 **Focus:** Prop Spacing • Formwork Area • Camber Logic • Shuttering Oil • Load Capacity

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Prop Spacing & Count Calculator

⚠️ **Function Name:** `calculatePropCount()`

"Props" are the vertical steel or bamboo supports that hold up the slab shuttering. If they are spaced too far apart, the slab will bend downwards.

| Input      | `slabArea` (sq.ft), `spacing` (ft). |
| :--------- | :---------------------------------- |
| **Output** | Return number (Total Props).        |

**Rules:**

- **Formula:** `slabArea / (spacing * spacing)`.
- Standard spacing for a 5-inch thick slab is **3 feet**.

| Challenge 📢 | Use `Math.ceil()` for the final count to ensure safety. If `spacing` is greater than 4 feet, return `"UNSAFE_SPACING"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePropCount(1800, 3)` ➔ `200`
- `calculatePropCount(1800, 5)` ➔ `"UNSAFE_SPACING"`

---

## 🧩 PROBLEM–02: 🪵 Shuttering Sheet "Plywood" Estimator

⚠️ **Function Name:** `calculatePlywoodSheets()`

The slab surface is made of plywood sheets. You need to calculate how many standard 8ft x 4ft sheets are required for the 1800 sq.ft floor.

| Input      | `totalArea` (sq.ft), `wastagePercent` (num). |
| :--------- | :------------------------------------------- |
| **Output** | Return number.                               |

**Rules:**

- **Sheet Area:** $8 \times 4 = 32$ sq.ft.
- **Formula:** `(totalArea / 32) * (1 + wastagePercent / 100)`.

| Challenge 📢 | Round the result up to the nearest whole number. If the `wastagePercent` is negative or greater than 20%, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePlywoodSheets(1800, 10)` ➔ `62` (56.25 + 10%)
- `calculatePlywoodSheets(1800, 25)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–03: 📐 Slab "Camber" Logic

⚠️ **Function Name:** `calculateSlabCamber()`

In long spans, engineers build the shuttering with a slight upward curve (Camber). When the concrete is poured and the props are removed, the slab settles into a perfectly flat position.

| Input      | `spanLengthFT` (num), `isCantilever` (bool). |
| :--------- | :------------------------------------------- |
| **Output** | Return number (Camber in Inches).            |

**Rules:**

- **Normal Beam/Slab:** Camber = `spanLengthFT / 50` (inches).
- **Cantilever (Balcony):** Camber = `spanLengthFT / 25` (inches).

| Challenge 📢 | Return the result rounded to 2 decimal places. If `spanLengthFT` is 0 or less, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSlabCamber(20, false)` ➔ `0.4`
- `calculateSlabCamber(5, true)` ➔ `0.2`

---

## 🧩 PROBLEM–04: 🛢️ Shuttering Oil Requirement

⚠️ **Function Name:** `calculateOilRequired()`

To prevent concrete from sticking to the plywood, "Shuttering Oil" is applied. This ensures a smooth finish after stripping.

| Input      | `shutteringArea` (sq.ft). |
| :--------- | :------------------------ |
| **Output** | Return number (Liters).   |

**Rules:**

- **Coverage:** 1 Liter covers approximately **250 sq.ft**.

| Challenge 📢 | If the area is over 1000 sq.ft, add a **10% extra** for the beam sides. Return the total liters rounded to 2 decimal places. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateOilRequired(500)` ➔ `2.0`
- `calculateOilRequired(1800)` ➔ `7.92` (1800 / 250 = 7.2 + 10%)

---

## 🧩 PROBLEM–05: ⚖️ Prop Load Capacity Audit

⚠️ **Function Name:** `checkPropLoadCapacity()`

Each prop has a maximum load it can carry. You need to ensure the weight of the wet concrete doesn't buckle the props.

| Input      | `slabThicknessInch` (num), `areaPerProp` (sq.ft), `propLimitLbs` (num). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return string.                                                          |

**Rules:**

- **Concrete Weight:** 150 lbs per cubic foot.
- **Load per Prop:** `(slabThicknessInch / 12) * areaPerProp * 150`.

| Challenge 📢 | If `Load per Prop` is $\le 90\%$ of `propLimitLbs`, return `"SAFE"`. Otherwise, return `"DANGER: INCREASE_PROPS"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPropLoadCapacity(5, 9, 1000)` ➔ `"SAFE"` (Load: 562.5 lbs)
- `checkPropLoadCapacity(12, 12, 1200)` ➔ `"DANGER: INCREASE_PROPS"` (Load: 1800 lbs)
