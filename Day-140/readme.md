# 🎓 JS DAILY PRACTICE – DAY-140

📅 **Goal:** The Grand Modern Residency (Floor Screeding & Tile Layout)
🎯 **Focus:** Screed Volume • Tile Wastage Logic • Leveling Slope • Grout Calculation • Expansion Joints

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧊 Floor Screed Concrete Volume

⚠️ **Function Name:** `calculateScreedVolume()`

Screed is the semi-dry layer of cement and sand (usually 1:4 ratio) laid over the structural slab to create a flat surface for tiles.

| Input      | `roomAreaSqFt` (num), `averageThicknessInch` (num). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return number (Total Bags of Cement).               |

**Rules:**

- **Wet Volume (CFT):** `roomAreaSqFt * (averageThicknessInch / 12)`.
- **Dry Volume:** `Wet Volume * 1.33`.
- **Cement Ratio:** `(Dry Volume / 5) * 1` (for a 1:4 mix).
- **Conversion:** 1 Bag = 1.25 CFT.

| Challenge 📢 | Return the total number of **Cement Bags** rounded up to the nearest whole number. If `averageThicknessInch` is $< 1$ inch, return `"TOO_THIN_FOR_STRENGTH"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateScreedVolume(500, 2)` ➔ `18`

---

## 🧩 PROBLEM–02: 📏 Tile Wastage & "Pattern" Auditor

⚠️ **Function Name:** `calculateTileRequirement()`

When laying tiles, especially in a "Diamond" or "Herringbone" pattern, you lose a lot of material to cutting at the edges.

| Input      | `netAreaSqFt` (num), `patternType` (string). |
| :--------- | :------------------------------------------- |
| **Output** | Return number (Total Tiles to Order).        |

**Rules:**

- **Standard Pattern:** 8% wastage.
- **Diagonal/Diamond Pattern:** 15% wastage.
- **Herringbone/Intricate Pattern:** 22% wastage.

| Challenge 📢 | Use a **switch statement** to handle the patterns. Return the final area (Net + Wastage) rounded up. If the pattern is unknown, default to **10%** wastage. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTileRequirement(1800, "Diagonal")` ➔ `2070`
- `calculateTileRequirement(1000, "Unknown")` ➔ `1100`

---

## 🧩 PROBLEM–03: 🚿 Bathroom Floor Slope Auditor

⚠️ **Function Name:** `checkFloorSlope()`

Bathroom floors must slope toward the drain (multi-trap). For your luxury residency, we use a subtle but effective slope.

| Input      | `distanceToDrainFT` (num), `levelDropMM` (num). |
| :--------- | :---------------------------------------------- |
| **Output** | Return string.                                  |

**Rules:**

- **Required Slope:** 10mm drop for every 4 feet of distance.

| Challenge 📢 | If the `levelDropMM` is exactly the requirement, return `"PERFECT"`. If it is higher (steeper), return `"FAST_DRAINAGE"`. If it is lower, return `"RISK_OF_PUDDLING"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkFloorSlope(8, 20)` ➔ `"PERFECT"`
- `checkFloorSlope(8, 15)` ➔ `"RISK_OF_PUDDLING"`

---

## 🧩 PROBLEM–04: 🧴 Tile Grout Quantity Estimator

⚠️ **Function Name:** `calculateGroutKG()`

Grout is the material used to fill the gaps between tiles.

| Input      | `tileLengthMM` (num), `tileWidthMM` (num), `jointWidthMM` (num), `totalAreaSqM` (num). |
| :--------- | :------------------------------------------------------------------------------------- |
| **Output** | Return number (KG).                                                                    |

**Rules:**

- **Simplified Formula:** `( (L + W) / (L * W) ) * jointWidth * 1.5 * totalAreaSqM`.
- Note: `1.5` is the depth factor for standard 8mm thick tiles.

| Challenge 📢 | Return the total KG rounded to 2 decimal places. If `jointWidthMM` is 0 (butt-joint), return **0**. |
| :----------- | :-------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateGroutKG(600, 600, 3, 100)` ➔ `1.5`

---

## 🧩 PROBLEM–05: 📐 Expansion Joint Threshold

⚠️ **Function Name:** `needsExpansionJoint()`

In large open halls (like your modern drawing room), a continuous floor can crack due to thermal expansion. We must insert a flexible joint.

| Input      | `continuousLengthFT` (num), `isOutdoor` (bool). |
| :--------- | :---------------------------------------------- |
| **Output** | Return boolean.                                 |

**Rules:**

- **Indoor Limit:** Every 25 feet.
- **Outdoor Limit:** Every 15 feet (due to direct sun).

| Challenge 📢 | Return `true` if an expansion joint is required, otherwise `false`. If `continuousLengthFT` exceeds **50 feet**, return `"MANDATORY_DOUBLE_JOINT"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `needsExpansionJoint(20, false)` ➔ `false`
- `needsExpansionJoint(20, true)` ➔ `true`
- `needsExpansionJoint(55, false)` ➔ `"MANDATORY_DOUBLE_JOINT"`
