# 🎓 JS DAILY PRACTICE – DAY-134

📅 **Goal:** The Grand Modern Residency (Masonry Prep & Floor Levels)
🎯 **Focus:** Column Hacking Density • DPC Moisture Barrier • FFL Calibration • Brick Count Logic • Mortar Ratio

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🔨 Column Hacking Density Auditor

⚠️ **Function Name:** `auditHackingDensity()`

Concrete columns are very smooth. To ensure the brick wall sticks to the column, we "hack" (chip) the surface.

| Input      | `surfaceAreaSqFt` (num), `totalHacks` (num). |
| :--------- | :------------------------------------------- |
| **Output** | Return string.                               |

**Rules:**

- **Required Density:** Minimum **30 hacks per square foot**.
- **Actual Density:** `totalHacks / surfaceAreaSqFt`.

| Challenge 📢 | If density is $\ge 30$, return `"READY_FOR_MASONRY"`. If between 20 and 29, return `"INCOMPLETE: [needed]"`, where `needed` is the extra hacks required to reach 30. If below 20, return `"REJECTED: RE-HACK_REQUIRED"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditHackingDensity(10, 350)` ➔ `"READY_FOR_MASONRY"`
- `auditHackingDensity(10, 250)` ➔ `"INCOMPLETE: 50"`

---

## 🧩 PROBLEM–02: 🛡️ Damp Proof Course (DPC) Efficiency

⚠️ **Function Name:** `validateDPC()`

The DPC is a thin layer of concrete/bitumen at the plinth level. It stops capillary action (moisture rising from the soil into your 5 Crore residency's walls).

| Input      | `thicknessMM` (num), `hasBitumenCoating` (bool). |
| :--------- | :----------------------------------------------- |
| **Output** | Return boolean.                                  |

**Rules:**

- **Standard Thickness:** Must be at least **37.5mm** (1.5 inches).
- **Waterproofing:** `hasBitumenCoating` must be `true` for a high-end building.

| Challenge 📢 | Return `true` if both conditions are met. If `thicknessMM` is less than 25mm, return `false` immediately. |
| :----------- | :-------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateDPC(40, true)` ➔ `true`
- `validateDPC(40, false)` ➔ `false`

---

## 🧩 PROBLEM–03: 📏 Finished Floor Level (FFL) Offset

⚠️ **Function Name:** `calculateSocketHeight()`

Electrical sockets are measured from the FFL. However, the structural slab is usually 2–3 inches lower than the final floor (due to tiles/sand).

| Input      | `targetHeightFromFFL` (inch), `floorFinishThickness` (inch). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return number (Height from Structural Slab).                 |

**Rules:**

- **Formula:** `targetHeightFromFFL + floorFinishThickness`.

| Challenge 📢 | In a modern "Smart Home" design, if the `targetHeightFromFFL` is exactly **12 inches** (low-profile sockets), subtract **0.5 inches** for tile adhesive. Return the result rounded to 1 decimal place. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSocketHeight(18, 2.5)` ➔ `20.5`
- `calculateSocketHeight(12, 3)` ➔ `14.5` (12 + 3 - 0.5)

---

## 🧩 PROBLEM–04: 🧱 Brick Wall "Volume-to-Count" Converter

⚠️ **Function Name:** `estimateBricks()`

Before the masonry starts, you need to order the bricks for a specific wall.

| Input      | `wallLengthFT` (num), `wallHeightFT` (num), `wallThicknessInch` (num). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return number (Total Bricks).                                          |

**Rules:**

- **Wall Volume (CFT):** `wallLengthFT * wallHeightFT * (wallThicknessInch / 12)`.
- **Brick Factor:** 12 bricks per 1 Cubic Foot (Standard 10" wall logic).

| Challenge 📢 | Add a **7% breakage allowance**. Return the total bricks rounded up (`Math.ceil`). If any input is $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `estimateBricks(10, 10, 5)` ➔ `536` (41.66 CFT _ 12 _ 1.07)

---

## 🧩 PROBLEM–05: 🧪 Masonry Mortar Mix Logic

⚠️ **Function Name:** `calculateMortarMaterials()`

For 1st-floor masonry, we use a 1:4 or 1:6 ratio (Cement:Sand).

| Input      | `totalMortarCFT` (num), `ratioParts` (num, e.g., 4 or 6). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return Object: `{cementBags: num, sandCFT: num}`.         |

**Rules:**

- **Dry Volume:** `totalMortarCFT * 1.33` (Mortar shrinks when wet).
- **Sum of Parts:** `1 + ratioParts`.
- **Cement (CFT):** `(Dry Volume / Sum) * 1`.
- **Sand (CFT):** `(Dry Volume / Sum) * ratioParts`.
- **Conversion:** 1 Cement Bag = 1.25 CFT.

| Challenge 📢 | Return the number of `cementBags` rounded to 2 decimal places and `sandCFT` rounded to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateMortarMaterials(100, 4)` ➔ `{cementBags: 21.28, sandCFT: 106.4}`
