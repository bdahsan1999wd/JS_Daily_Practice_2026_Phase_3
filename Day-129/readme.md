# 🎓 JS DAILY PRACTICE – DAY-129

📅 **Goal:** The Grand Modern Residency (Slab Reinforcement & Conduits)
🎯 **Focus:** Rebar Weight • Crank Bar Logic • Chair Spacer Count • Conduit Occupancy • Clear Cover

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: ⛓️ Slab Rebar Weight Calculator

⚠️ **Function Name:** `calculateSlabRebarWeight()`

Calculate the total weight of steel for the 1800 sq.ft slab. You will be provided with the total length of the 10mm and 12mm bars used.

| Input      | `length10mm` (meters), `length12mm` (meters). |
| :--------- | :-------------------------------------------- |
| **Output** | Return number (Total KG).                     |

**Rules:**

- **Unit Weight Formula:** $Weight (kg/m) = \frac{d^2}{162.2}$ (where $d$ is diameter in mm).
- 10mm weight ≈ 0.617 kg/m.
- 12mm weight ≈ 0.888 kg/m.

| Challenge 📢 | Add a **5% wastage factor** for cutting. Return the total weight rounded to 2 decimal places. If any input is negative, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateSlabRebarWeight(1000, 500)` ➔ `1114.05` ( (617 + 444) \* 1.05 )

---

## 🧩 PROBLEM–02: 📐 "Crank Bar" Length Logic

⚠️ **Function Name:** `calculateCrankLength()`

In slab reinforcement, some bars are bent (cranked) at a $45^\circ$ angle near the supports. This adds extra length to the bar.

| Input      | `slabThickness` (inch), `clearCover` (mm), `barLength` (ft). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return number (Total Length in Feet).                        |

**Rules:**

- **Extra Length per Crank:** $0.42 \times H$.
- **H (Vertical Height of Crank):** `slabThickness - (2 * clearCoverConvertedToInches)`.
- **Conversion:** 1 inch = 25.4 mm.

| Challenge 📢 | If the bar is cranked at **both ends**, add the extra length twice. Return the final length rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateCrankLength(5, 20, 15)` ➔ `15.24` (Example calculation based on two cranks)

---

## 🧩 PROBLEM–03: 🪑 "Chair Spacer" Density Checker

⚠️ **Function Name:** `calculateChairSpacers()`

"Chairs" are small steel supports used to maintain the gap between the top and bottom rebar layers. Without them, the reinforcement will collapse under the weight of workers walking on it.

| Input      | `slabAreaSqFt` (num), `spacingFT` (num). |
| :--------- | :--------------------------------------- |
| **Output** | Return number.                           |

**Rules:**

- **Formula:** `slabAreaSqFt / (spacingFT * spacingFT)`.
- Standard spacing is **1 chair per 1 square meter** (approx. 10.76 sq.ft).

| Challenge 📢 | If `spacingFT` creates a density lower than 1 chair per 12 sq.ft, return `"INSUFFICIENT_SUPPORT"`. Otherwise, return the total count rounded up. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateChairSpacers(1800, 3)` ➔ `200`
- `calculateChairSpacers(1800, 4)` ➔ `"INSUFFICIENT_SUPPORT"`

---

## 🧩 PROBLEM–04: 🔌 Electrical Conduit Occupancy

⚠️ **Function Name:** `checkConduitCapacity()`

Before casting, electrical pipes (conduits) are laid inside the slab. You must ensure you aren't stuffing too many wires into one pipe.

| Input      | `conduitDiameterMM` (num), `wireCount` (num), `wireDiameterMM` (num). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return string.                                                        |

**Rules:**

- **Max Occupancy:** Total cross-sectional area of wires must not exceed **40%** of the conduit's internal area.
- **Area Formula:** $\pi \times r^2$.

| Challenge 📢 | Return `"SAFE"` or `"OVERLOADED"`. If the wire count is 0, return `"EMPTY"`. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkConduitCapacity(25, 4, 5)` ➔ `"SAFE"` (Wires: 78.5, Limit: 196.3)

---

## 🧩 PROBLEM–05: 📏 Clear Cover "Steel Protection" Audit

⚠️ **Function Name:** `auditSlabCover()`

For an 1800 sq.ft modern building, the slab clear cover (the concrete layer protecting the steel) must be strictly maintained.

| Input      | `measuredCoverMM` (num). |
| :--------- | :----------------------- |
| **Output** | Return string.           |

**Rules:**

- **Standard:** 20mm.
- **Tolerance:** $\pm 3$mm.

| Challenge 📢 | If within range, return `"PASSED"`. If $< 17$, return `"DANGER: CORROSION_RISK"`. If $> 23$, return `"WARNING: STRUCTURAL_WEAKNESS"` (too much cover reduces the effective depth). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditSlabCover(19)` ➔ `"PASSED"`
- `auditSlabCover(25)` ➔ `"WARNING: STRUCTURAL_WEAKNESS"`
