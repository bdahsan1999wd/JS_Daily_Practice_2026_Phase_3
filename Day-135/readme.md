# 🎓 JS DAILY PRACTICE – DAY-135

📅 **Goal:** The Grand Modern Residency (Masonry & Stability)
🎯 **Focus:** Bond Pattern Logic • Opening Lintels • Wall-to-Column Anchoring • Vertical Alignment • Mortar Consistency

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧱 Brick "English Bond" Pattern Logic

⚠️ **Function Name:** `validateBondPattern()`

In high-strength masonry, "English Bond" (alternating rows of headers and stretchers) is preferred. To avoid a continuous vertical joint, we use a "Queen Closer" (half-width brick).

| Input      | `rowNumber` (num), `isQueenCloserPresent` (bool). |
| :--------- | :------------------------------------------------ |
| **Output** | Return string.                                    |

**Rules:**

- **Even Rows:** Should be "Stretchers" (lengthwise).
- **Odd Rows:** Should be "Headers" (widthwise).
- If the row is an **Odd Row**, `isQueenCloserPresent` must be `true` to break the joint.

| Challenge 📢 | If the pattern logic is correct, return `"STABLE_BOND"`. If an odd row is missing a closer, return `"VERTICAL_JOINT_RISK"`. If rowNumber is $\le 0$, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateBondPattern(1, true)` ➔ `"STABLE_BOND"`
- `validateBondPattern(3, false)` ➔ `"VERTICAL_JOINT_RISK"`

---

## 🧩 PROBLEM–02: 🔗 Wall-to-Column Tie Logic

⚠️ **Function Name:** `calculateTieBars()`

To prevent the wall from falling away from the column during an earthquake, we drill "Tie Bars" (rebar anchors) into the column every few inches.

| Input      | `wallHeightFT` (num), `spacingInch` (num). |
| :--------- | :----------------------------------------- |
| **Output** | Return number (Total Ties).                |

**Rules:**

- **Formula:** `(wallHeightFT * 12) / spacingInch`.
- Standard seismic spacing is **15 inches**.

| Challenge 📢 | In a 6-story building, for the bottom 3 floors, we reduce spacing to **12 inches**. If `spacingInch` is greater than 15, return `"UNSAFE_ANCHORING"`. Otherwise, return the total count rounded up. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTieBars(10, 12)` ➔ `10`
- `calculateTieBars(10, 18)` ➔ `"UNSAFE_ANCHORING"`

---

## 🧩 PROBLEM–03: 📐 Masonry "Plumb" Deviation Audit

⚠️ **Function Name:** `checkWallAlignment()`

As the bricklayer builds the wall, they must check verticality. An 8-foot wall should not lean more than a few millimeters.

| Input      | `wallHeightFT` (num), `deviationMM` (num). |
| :--------- | :----------------------------------------- |
| **Output** | Return string.                             |

**Rules:**

- **Allowed Tolerance:** 1mm for every 2 feet of height.

| Challenge 📢 | If `deviationMM` is within tolerance, return `"PERFECT"`. If it exceeds tolerance by up to 3mm, return `"MINOR_LEAN"`. If it exceeds by more than 3mm, return `"RECONSTRUCT"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkWallAlignment(10, 4)` ➔ `"PERFECT"` (Tolerance is 5mm)
- `checkWallAlignment(10, 9)` ➔ `"RECONSTRUCT"` (Tolerance 5mm + 3mm limit = 8mm)

---

## 🧩 PROBLEM–04: 🚪 Opening "Cracking" Prevention

⚠️ **Function Name:** `validateOpeningReinforcement()`

Openings (Windows/Doors) create weak points. To prevent diagonal "X" cracks at the corners, we place extra steel in the mortar joints.

| Input      | `openingAreaSqFt` (num), `hasCornerBars` (bool). |
| :--------- | :----------------------------------------------- |
| **Output** | Return boolean.                                  |

**Rules:**

- If `openingAreaSqFt` is $> 15$ sq.ft, `hasCornerBars` must be `true`.
- For smaller openings, corner bars are optional but recommended.

| Challenge 📢 | Return `true` if the opening is structurally safe, otherwise `false`. If `openingAreaSqFt` is $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateOpeningReinforcement(20, true)` ➔ `true`
- `validateOpeningReinforcement(20, false)` ➔ `false`

---

## 🧩 PROBLEM–05: 🧪 Mortar "Flow" & Setting Time

⚠️ **Function Name:** `canContinueMasonry()`

Mortar starts losing its strength if it sits too long before being used. This is critical in the humid climate of Bangladesh.

| Input      | `minutesSinceMix` (num), `isRetarderUsed` (bool). |
| :--------- | :------------------------------------------------ |
| **Output** | Return string.                                    |

**Rules:**

- **Standard Limit:** 90 minutes.
- If `isRetarderUsed` is `true`, the limit extends to **150 minutes**.

| Challenge 📢 | If within the limit, return `"PROCEED"`. If the time has expired, return `"DISCARD_MORTAR"`. If `minutesSinceMix` exceeds 300, return `"CRITICAL: MORTAR_HARDENED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canContinueMasonry(100, false)` ➔ `"DISCARD_MORTAR"`
- `canContinueMasonry(100, true)` ➔ `"PROCEED"`
