# 🎓 JS DAILY PRACTICE – DAY-139

📅 **Goal:** The Grand Modern Residency (Window Framing & Sills)
🎯 **Focus:** Frame Perimeter Gap • Sill Slope Logic • Fastener Spacing • Glass Weight • Sealant Volume

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📏 Window Frame "Perimeter Gap" Auditor

⚠️ **Function Name:** `checkFrameGap()`

Window frames should not touch the masonry directly; there must be a small gap for "expansion and contraction."

| Input      | `openingWidthMM` (num), `frameWidthMM` (num). |
| :--------- | :-------------------------------------------- |
| **Output** | Return string.                                |

**Rules:**

- **Total Gap:** `openingWidthMM - frameWidthMM`.
- **Gap per Side:** `Total Gap / 2`.
- **Tolerance:** Gap per side should be between **5mm and 10mm**.

| Challenge 📢 | If within tolerance, return `"IDEAL"`. If $< 5$, return `"TOO_TIGHT"`. If $> 10$, return `"EXCESSIVE_GAP"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkFrameGap(1220, 1205)` ➔ `"IDEAL"` (7.5mm per side)
- `checkFrameGap(1220, 1215)` ➔ `"TOO_TIGHT"` (2.5mm per side)

---

## 🧩 PROBLEM–02: 💧 Window Sill "Slope" Logic

⚠️ **Function Name:** `calculateSillSlope()`

The concrete sill at the bottom of the window must slope _downwards_ to the outside to prevent water pooling.

| Input      | `sillWidthInch` (num), `outerDropInch` (num). |
| :--------- | :-------------------------------------------- |
| **Output** | Return boolean.                               |

**Rules:**

- **Required Slope:** Minimum **10%** (0.10).
- **Formula:** `outerDropInch / sillWidthInch`.

| Challenge 📢 | Return `true` if the slope is $\ge 0.10$, otherwise `false`. If `sillWidthInch` is $\le 0$, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSillSlope(6, 0.75)` ➔ `true` (Slope: 0.125)
- `calculateSillSlope(10, 0.5)` ➔ `false` (Slope: 0.05)

---

## 🧩 PROBLEM–03: 🔩 Frame "Fastener" Spacing Logic

⚠️ **Function Name:** `calculateFasteners()`

Aluminum frames are held in place by "Rawl Plugs" and screws. If you don't use enough, the window will rattle during high winds.

| Input      | `framePerimeterFT` (num). |
| :--------- | :------------------------ |
| **Output** | Return number.            |

**Rules:**

- **Max Spacing:** 1 fastener every **1.5 feet**.
- **Fixed Requirement:** Must have at least **2 fasteners** per side regardless of length.

| Challenge 📢 | Calculate the number of fasteners needed based on perimeter. Then, compare it to a minimum of **8** (2 per side for a 4-sided window). Return whichever is **higher**, rounded up. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFasteners(10)` ➔ `8` (10/1.5 is ~7, but min is 8)
- `calculateFasteners(18)` ➔ `12` (18/1.5)

---

## 🧩 PROBLEM–04: ⚖️ Glass "Dead Load" Estimator

⚠️ **Function Name:** `calculateGlassWeight()`

Modern residencies use thick 5mm or 6mm tempered glass. The frame must be strong enough to support this weight.

| Input      | `areaSqFt` (num), `thicknessMM` (num). |
| :--------- | :------------------------------------- |
| **Output** | Return number (Weight in KG).          |

**Rules:**

- **Unit Weight:** 2.5 KG per square meter for every 1mm of thickness.
- **Conversion:** 1 Sq.Ft = 0.0929 Sq.Meters.

| Challenge 📢 | Return the total weight in KG rounded to 2 decimal places. If `thicknessMM` is not 5, 6, or 8, return `"Non-Standard Glass"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateGlassWeight(10, 6)` ➔ `13.93` (10 _ 0.0929 _ 6 \* 2.5)

---

## 🧩 PROBLEM–05: 🧴 Silicon Sealant Consumption

⚠️ **Function Name:** `calculateSealantTubes()`

Silicon is applied to the gap between the frame and the wall to make it 100% waterproof.

| Input      | `totalGapLengthFT` (num), `gapWidthInch` (num). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number (Total Tubes).                    |

**Rules:**

- **Volume needed (Cubic Inches):** `(totalGapLengthFT * 12) * gapWidthInch * 0.5` (assuming 0.5 inch depth).
- **Tube Capacity:** One standard silicon tube covers **20 cubic inches**.

| Challenge 📢 | Add a **15% wastage** factor. Return the number of tubes rounded up (`Math.ceil`). If any input is $\le 0$, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateSealantTubes(50, 0.25)` ➔ `5`
