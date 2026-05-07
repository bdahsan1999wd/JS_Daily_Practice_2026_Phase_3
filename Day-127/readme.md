# 🎓 JS DAILY PRACTICE – DAY-127

📅 **Goal:** The Grand Modern Residency (Beam Reinforcement & Load)
🎯 **Focus:** Effective Span Logic • Tension Steel Ratio • Stirrup Spacing • Hanger Bars • Beam Weight

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📏 Beam "Effective Span" Calculator

⚠️ **Function Name:** `calculateEffectiveSpan()`

In engineering, the "Effective Span" of a beam is not just the clear distance between columns; it includes a portion of the column support.

| Input      | `clearSpan` (ft), `beamDepth` (inch), `columnWidth` (inch). |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return number (Feet).                                       |

**Rules:**

- **Formula 1:** `clearSpan + (beamDepth / 12)`.
- **Formula 2:** `clearSpan + (columnWidth / 12)`.
- The **Effective Span** is the **smaller** of these two values.

| Challenge 📢 | Return the effective span rounded to 2 decimal places. If any input is $\le 0$, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateEffectiveSpan(15, 18, 12)` ➔ `16.0` (Min of 15+1.5=16.5 and 15+1=16.0)

---

## 🧩 PROBLEM–02: 🔗 Beam Stirrup "Seismic" Spacing

⚠️ **Function Name:** `calculateBeamStirrups()`

Near the column joints (the "Support Zone"), stirrups must be placed closer together to resist "Shear Force" during tremors.

| Input      | `beamDepth` (inch), `zone` (string: "Support", "Mid"). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return number (Inches).                                |

**Rules:**

- **Support Zone:** Spacing = `beamDepth / 4` or **4 inches** (whichever is smaller).
- **Mid Zone:** Spacing = `beamDepth / 2` or **8 inches** (whichever is smaller).

| Challenge 📢 | If the calculated spacing is less than 3 inches, return **3** (minimum practical gap). If `zone` is invalid, return `"Invalid Zone"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateBeamStirrups(20, "Support")` ➔ `4` (Min of 20/4=5 and 4)
- `calculateBeamStirrups(12, "Mid")` ➔ `6` (Min of 12/2=6 and 8)

---

## 🧩 PROBLEM–03: ⚖️ Tension Rebar Percentage Auditor

⚠️ **Function Name:** `checkBeamRebarRatio()`

Too much steel makes the beam "Brittle" (dangerous), while too little makes it "Weak."

| Input      | `steelArea` (sq. inch), `beamWidth` (inch), `beamDepth` (inch). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return string.                                                  |

**Rules:**

- **Ratio (ρ):** `steelArea / (beamWidth * beamDepth)`.
- **Min Ratio:** 0.0035 | **Max Ratio:** 0.02.

| Challenge 📢 | If within range, return `"SAFE"`. If $< 0.0035$, return `"UNDER-REINFORCED"`. If $> 0.02$, return `"OVER-REINFORCED"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkBeamRebarRatio(1.5, 10, 15)` ➔ `"SAFE"` (Ratio: 0.01)
- `checkBeamRebarRatio(4, 10, 15)` ➔ `"OVER-REINFORCED"` (Ratio: 0.026)

---

## 🧩 PROBLEM–04: 🏗️ Self-Weight "Dead Load" Estimator

⚠️ **Function Name:** `calculateBeamWeight()`

Before adding the slab, the beam must be able to carry its own weight. Reinforced concrete weighs **150 lbs per cubic foot**.

| Input      | `length` (ft), `width` (inch), `depth` (inch). |
| :--------- | :--------------------------------------------- |
| **Output** | Return number (Lbs).                           |

**Rules:**

- **Volume:** `length * (width/12) * (depth/12)`.
- **Weight:** `Volume * 150`.

| Challenge 📢 | Return the total weight rounded to the nearest integer. If the total weight exceeds **5000 lbs**, add a flag to the result: `"[Weight] - HEAVY_BEAM"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBeamWeight(20, 12, 18)` ➔ `4500`
- `calculateBeamWeight(25, 12, 20)` ➔ `"6250 - HEAVY_BEAM"`

---

## 🧩 PROBLEM–05: 🔩 Top Hanger Bar Validation

⚠️ **Function Name:** `validateHangerBars()`

Hanger bars are the top steel rods that hold the stirrups in place. Even if they aren't carrying load, they must meet minimum diameter rules.

| Input      | `mainBarDia` (mm), `hangerBarDia` (mm). |
| :--------- | :-------------------------------------- |
| **Output** | Return boolean.                         |

**Rules:**

- **Rule 1:** Hanger bars must be at least **12mm** in diameter.
- **Rule 2:** Hanger bars must be at least **50%** of the diameter of the bottom `mainBarDia`.

| Challenge 📢 | Return `true` if both rules are met, otherwise `false`. If any input is not a number, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateHangerBars(25, 16)` ➔ `true` (16 $\ge$ 12 and 16 $\ge$ 12.5)
- `validateHangerBars(25, 10)` ➔ `false` (Fails both rules)
