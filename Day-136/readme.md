# 🎓 JS DAILY PRACTICE – DAY-136

📅 **Goal:** The Grand Modern Residency (MEP: Electrical & Plumbing Routing)
🎯 **Focus:** Wall Chase Depth • Pipe Slope Logic • Junction Box Count • Conduit Bending • Material Estimation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🪚 Wall "Chase" Depth Auditor

⚠️ **Function Name:** `checkChaseSafety()`

To hide pipes, we cut grooves (chases) into the brick walls. If the chase is too deep, the wall becomes structurally unstable.

| Input      | `wallThicknessInch` (num), `chaseDepthInch` (num). |
| :--------- | :------------------------------------------------- |
| **Output** | Return string.                                     |

**Rules:**

- **Vertical Chases:** Maximum depth is **1/3** of the wall thickness.
- **Horizontal Chases:** Maximum depth is **1/6** of the wall thickness.

| Challenge 📢 | Assuming the input is for a **Horizontal Chase** (the riskier type), return `"SAFE"` if it's within the limit. If not, return `"REDUCE_DEPTH: [maxAllowed]"`. If `wallThicknessInch` is 5 (common partition wall), the horizontal chase should never exceed 0.83 inches. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkChaseSafety(5, 0.5)` ➔ `"SAFE"`
- `checkChaseSafety(10, 2)` ➔ `"REDUCE_DEPTH: 1.67"`

---

## 🧩 PROBLEM–02: 🚽 Drainage Pipe Slope Logic

⚠️ **Function Name:** `calculatePipeSlope()`

Plumbing pipes rely on gravity. If the slope is too flat, waste gets stuck; if it's too steep, water flows too fast and leaves solids behind.

| Input      | `pipeLengthFT` (num), `verticalDropInch` (num). |
| :--------- | :---------------------------------------------- |
| **Output** | Return string.                                  |

**Rules:**

- **Ideal Slope:** 1/4 inch of drop per 1 foot of length (**2% slope**).
- **Formula:** `verticalDropInch / pipeLengthFT`.

| Challenge 📢 | If the calculated slope is exactly 0.25, return `"PERFECT"`. If between 0.20 and 0.30, return `"ACCEPTABLE"`. Otherwise, return `"ADJUST_SLOPE"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculatePipeSlope(10, 2.5)` ➔ `"PERFECT"`
- `calculatePipeSlope(10, 1.5)` ➔ `"ADJUST_SLOPE"`

---

## 🧩 PROBLEM–03: ⚡ Electrical Junction Box Estimator

⚠️ **Function Name:** `estimateJunctionBoxes()`

For the 1800 sq.ft floor, you need to calculate how many junction boxes are needed based on the number of electrical "points" (lights, fans, sockets).

| Input      | `lightPoints` (num), `fanPoints` (num), `socketPoints` (num). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return number.                                                |

**Rules:**

- Every 3 light/fan points need **1 junction box**.
- Every power socket (for AC/Fridge) needs **its own dedicated box**.

| Challenge 📢 | Calculate the total boxes. Use `Math.ceil()` for the light/fan calculation. Add a **10% spare buffer** to the final total. Return the result rounded to the nearest whole number. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `estimateJunctionBoxes(10, 4, 5)` ➔ `11` ( (14/3=5) + 5 = 10 + 10% = 11 )

---

## 🧩 PROBLEM–04: 🌀 Conduit Bend "Pull" Factor

⚠️ **Function Name:** `canPullWire()`

The more bends (elbows) a pipe has, the harder it is to pull electrical wires through it.

| Input      | `totalBends` (num), `conduitLengthFT` (num). |
| :--------- | :------------------------------------------- |
| **Output** | Return boolean.                              |

**Rules:**

- A single run of conduit should not have more than **360 degrees** of total bends (e.g., four 90° bends).
- If the `conduitLengthFT` is $> 50$ feet, the limit reduces to **270 degrees**.

| Challenge 📢 | Assuming every "bend" in the input is a standard **90-degree elbow**, return `true` if it's safe to pull the wire, otherwise `false`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `canPullWire(4, 30)` ➔ `true` (4 \* 90 = 360)
- `canPullWire(4, 60)` ➔ `false` (Exceeds 270 limit for long runs)

---

## 🧩 PROBLEM–05: 🚿 Material Cost: PPR vs PVC

⚠️ **Function Name:** `comparePipeCosts()`

In modern Bangladesh construction, PPR pipes (green) are used for hot/cold water, while PVC (white) is for waste. PPR is more expensive but lasts longer.

| Input      | `meterNeeded` (num), `pprPrice` (num), `pvcPrice` (num). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return string.                                           |

**Rules:**

- **Total PPR:** `meterNeeded * pprPrice`.
- **Total PVC:** `meterNeeded * pvcPrice`.

| Challenge 📢 | Return a string: `"PPR: [cost] | PVC: [cost] | DIFF: [difference]"`. If the `pprPrice`is more than 3x the`pvcPrice`, add a prefix `"PREMIUM_COST_ALERT"`. |
| :----------- | :----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `comparePipeCosts(100, 150, 40)` ➔ `"PREMIUM_COST_ALERT: PPR: 15000 | PVC: 4000 | DIFF: 11000"`
