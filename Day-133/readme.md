# 🎓 JS DAILY PRACTICE – DAY-133

📅 **Goal:** The Grand Modern Residency (Sunshades & Lintels)
🎯 **Focus:** Cantilever Tension • Lintel Bearing • Drip Course Logic • Steel Placement • Projection Limits

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Lintel "Bearing" Length Auditor

⚠️ **Function Name:** `validateLintelBearing()`

A lintel must extend beyond the window opening onto the brick wall. This extension is called the "Bearing." If the bearing is too short, the wall will crack.

| Input      | `openingWidthInch` (num), `bearingLengthInch` (num). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return string.                                       |

**Rules:**

- **Minimum Bearing:** Should be **1/10th** of the `openingWidthInch` or **6 inches**, whichever is **greater**.

| Challenge 📢 | If the `bearingLengthInch` meets the rule, return `"SAFE"`. Otherwise, return `"INCREASE_BEARING_TO: [RequiredValue]"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateLintelBearing(48, 5)` ➔ `"INCREASE_BEARING_TO: 6"` (1/10th of 48 is 4.8. Max of 4.8 and 6 is 6)
- `validateLintelBearing(70, 8)` ➔ `"SAFE"` (1/10th is 7. Max of 7 and 6 is 7. 8 > 7)

---

## 🧩 PROBLEM–02: ⛓️ Sunshade "Top Steel" Validator

⚠️ **Function Name:** `checkSunshadeSteel()`

In a cantilever sunshade, the concrete tries to "curl" downwards, putting the top surface under tension. If you put the steel at the bottom (like a normal slab), the sunshade will snap and fall.

| Input      | `projectionFT` (num), `mainBarPosition` (string: "TOP", "BOTTOM"). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return string.                                                     |

**Rules:**

- **Safety Rule:** `mainBarPosition` MUST be `"TOP"`.
- **Structural Rule:** If `projectionFT` is $> 2.5$ feet, it is considered a "Deep Cantilever" and needs a "back-span" (the steel must extend into the main slab).

| Challenge 📢 | If position is `"BOTTOM"`, return `"DANGER: COLLAPSE_RISK"`. If `"TOP"` and projection $\le 2.5$, return `"SECURE"`. If `"TOP"` and projection $> 2.5$, return `"SECURE_WITH_BACKSPAN"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkSunshadeSteel(2.0, "BOTTOM")` ➔ `"DANGER: COLLAPSE_RISK"`
- `checkSunshadeSteel(3.0, "TOP")` ➔ `"SECURE_WITH_BACKSPAN"`

---

## 🧩 PROBLEM–03: 💧 Drip Course (Throating) Geometry

⚠️ **Function Name:** `calculateDripCourse()`

A "Drip Course" is a small groove under the edge of a sunshade that stops rainwater from crawling back to the wall and causing dampness.

| Input      | `sunshadeThicknessInch` (num). |
| :--------- | :----------------------------- |
| **Output** | Return number (Groove Depth).  |

**Rules:**

- The drip groove should be exactly **25%** of the sunshade thickness at the edge.
- Standard sunshade edge thickness is **3 inches**.

| Challenge 📢 | Return the groove depth in inches. If the calculated depth is $> 1$ inch, cap it at **1.0**. If thickness is $\le 0$, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDripCourse(3)` ➔ `0.75`
- `calculateDripCourse(6)` ➔ `1.0` (Calculated 1.5, capped at 1.0)

---

## 🧩 PROBLEM–04: ⚖️ Cantilever Overturning Safety

⚠️ **Function Name:** `checkOverturningFactor()`

A sunshade stays up because the weight of the wall/slab behind it (Restraining Moment) is heavier than the sunshade itself (Overturning Moment).

| Input      | `restrainingWeight` (kg), `sunshadeWeight` (kg). |
| :--------- | :----------------------------------------------- |
| **Output** | Return boolean.                                  |

**Rules:**

- **Safety Factor:** `restrainingWeight` must be at least **1.5 times** the `sunshadeWeight`.

| Challenge 📢 | Return `true` if the sunshade is stable, otherwise `false`. |
| :----------- | :---------------------------------------------------------- |

**Sample Input & Output:**

- `checkOverturningFactor(500, 300)` ➔ `true` (500 / 300 = 1.66)
- `checkOverturningFactor(400, 300)` ➔ `false` (400 / 300 = 1.33)

---

## 🧩 PROBLEM–05: 🧱 Lintel-Beam Integration Auditor

⚠️ **Function Name:** `shouldIntegrateWithBeam()`

In modern 6-story buildings, if the window top is very close to the floor beam, we don't cast a separate lintel; we just drop the beam down (Hidden/Dropped Lintel).

| Input      | `gapBetweenWindowAndBeamInch` (num). |
| :--------- | :----------------------------------- |
| **Output** | Return string.                       |

**Rules:**

- If the gap is $\le 6$ inches: `"INTEGRATE_WITH_BEAM"`.
- If the gap is $> 6$ inches: `"CAST_INDEPENDENT_LINTEL"`.

| Challenge 📢 | If the gap is 0 or negative, return `"FLUSH_DESIGN"`. |
| :----------- | :---------------------------------------------------- |

**Sample Input & Output:**

- `shouldIntegrateWithBeam(4)` ➔ `"INTEGRATE_WITH_BEAM"`
- `shouldIntegrateWithBeam(12)` ➔ `"CAST_INDEPENDENT_LINTEL"`
