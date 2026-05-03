# 🎓 JS DAILY PRACTICE – DAY-123

📅 **Goal:** The Grand Modern Residency (Pile Cap & Grade Beam Logic)
🎯 **Focus:** Pile Cap Sizing • Reinforcement Spacing • Shear Strength • Beam Alignment • Concrete Pouring

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📐 Pile Cap Dimension Estimator

⚠️ **Function Name:** `calculatePileCapDimensions()`

The size of a pile cap depends on the spacing between piles. To prevent structural failure, piles should be spaced at least 3 times their diameter.

| Input      | `pileDiameter` (inches), `pileCount` (num). |
| :--------- | :------------------------------------------ |
| **Output** | Return Object: `{length: num, width: num}`. |

**Rules:**

- **Spacing:** `pileDiameter * 3`.
- **Edge Distance:** `pileDiameter * 1.5` (distance from the center of the outer pile to the edge of the cap).
- **For a 4-pile group (square):** - `Side = Spacing + (Edge Distance * 2)`.
- **For a 2-pile group (rectangular):**
  - `Length = Spacing + (Edge Distance * 2)`.
  - `Width = (Edge Distance * 2)`.

| Challenge 📢 | Return dimensions in **Feet** (divide by 12). If `pileCount` is not 2 or 4, return `"Unsupported Pile Count"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePileCapDimensions(20, 4)` ➔ `{length: 10, width: 10}` (Spacing 60, Edges 30+30 = 120 inch = 10 ft)

---

## 🧩 PROBLEM–02: 🔗 Rebar "Mesh" Spacing Logic

⚠️ **Function Name:** `validateCapRebar()`

Pile caps use a heavy mesh of steel. The gap between bars must be small enough to hold the concrete but large enough for the aggregate (stones) to pass through.

| Input      | `capWidthInches` (num), `barDiameterInches` (num), `numberOfBars` (num). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return string.                                                           |

**Rules:**

- **Clear Spacing:** `(capWidthInches - (numberOfBars * barDiameterInches)) / (numberOfBars - 1)`.
- **Safety Standard:** Spacing must be between **3 inches and 8 inches**.

| Challenge 📢 | If spacing is within range, return `"SAFE"`. If $< 3$, return `"TOO_CONGESTED"`. If $> 8$, return `"INSUFFICIENT_STEEL"`. Round spacing to 2 decimal places in your logic. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateCapRebar(60, 1, 10)` ➔ `"SAFE"` (Spacing: 5.56 inches)
- `validateCapRebar(60, 1, 25)` ➔ `"TOO_CONGESTED"` (Spacing: 3.21 - Wait, calculation depends on exact math)

---

## 🧩 PROBLEM–03: ⚖️ Punching Shear Capacity

⚠️ **Function Name:** `checkPunchingShear()`

Punching shear is when the column tries to "punch" through the pile cap. The cap must be thick enough to resist this.

| Input      | `columnLoad` (tons), `capThickness` (inches), `concreteGradePSI` (num). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return boolean.                                                         |

**Rules:**

- **Capacity Formula:** `capThickness * 0.15 * (concreteGradePSI / 4000)`.
- **Check:** `Capacity >= columnLoad / 10`. (Simplified engineering logic).

| Challenge 📢 | Return `true` if the thickness is sufficient to prevent punching, otherwise `false`. If `capThickness` is less than 24 inches, return `false` immediately (Minimum for 6-story). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPunchingShear(150, 30, 4000)` ➔ `true`
- `checkPunchingShear(150, 20, 4000)` ➔ `false`

---

## 🧩 PROBLEM–04: 🏗️ Grade Beam Alignment Audit

⚠️ **Function Name:** `auditBeamAlignment()`

Grade beams connect pile caps together to prevent the building from spreading apart during an earthquake.

| Input      | `plannedLength` (ft), `actualLength` (ft). |
| :--------- | :----------------------------------------- |
| **Output** | Return string.                             |

**Rules:**

- **Tolerance:** Modern engineering allows a maximum deviation of **0.5%** or **1 inch**, whichever is SMALLER.

| Challenge 📢 | Return `"ALIGNED"` if it meets the tolerance. Otherwise, return `"MISALIGNED: [diffInches]"` where `diffInches` is the absolute difference in inches. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditBeamAlignment(100, 100.1)` ➔ `"MISALIGNED: 1.2"`
- `auditBeamAlignment(10, 10.01)` ➔ `"ALIGNED"`

---

## 🧩 PROBLEM–05: 🧊 Massive Pour Curing Tracker

⚠️ **Function Name:** `trackCuringTemperature()`

When you pour a massive pile cap, the chemical reaction (hydration) generates heat. If the center gets too hot compared to the surface, the concrete will crack.

| Input      | `coreTemp` (°C), `surfaceTemp` (°C). |
| :--------- | :----------------------------------- |
| **Output** | Return string.                       |

**Rules:**

- **Maximum Core Temp:** 70°C.
- **Max Temp Difference:** 20°C.

| Challenge 📢 | Return `"CRITICAL"` if core $> 70$ OR difference $> 20$. Return `"MONITOR"` if difference is between 15 and 20. Otherwise, return `"NORMAL"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `trackCuringTemperature(65, 40)` ➔ `"CRITICAL"` (Diff is 25)
- `trackCuringTemperature(55, 42)` ➔ `"NORMAL"` (Diff is 13)
