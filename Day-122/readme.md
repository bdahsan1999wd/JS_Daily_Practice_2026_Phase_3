# 🎓 JS DAILY PRACTICE – DAY-122

📅 **Goal:** The Grand Modern Residency (Piling & Load Bearing Logic)
🎯 **Focus:** Pile Depth Calculation • Load Capacity • Concrete Volume • Reinforcement Check • Pile Integrity

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📏 Optimal Pile Depth Calculator

⚠️ **Function Name:** `calculatePileDepth()`

The depth of a pile depends on the load of the building and the soil's skin friction. For a 6-story building, we need to reach "Hard Soil."

| Input      | `totalBuildingLoad` (tons), `soilFriction` (tons/ft). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return number (Feet).                                 |

**Rules:**

- **Base Depth:** `totalBuildingLoad / soilFriction`.
- **Safety Factor:** Add **20%** extra depth for seismic stability.

| Challenge 📢 | If the calculated depth is less than 40 feet, set it to a minimum of **40 feet** (Standard for 6-story). Return the result rounded to the nearest integer. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePileDepth(150, 4)` ➔ `45` (150/4 = 37.5 + 20% = 45)
- `calculatePileDepth(100, 5)` ➔ `40` (Calculated 24, but minimum is 40)

---

## 🧩 PROBLEM–02: ⚖️ Pile Group Load Capacity

⚠️ **Function Name:** `checkPileGroupCapacity()`

Piles are usually placed in groups (e.g., 3 or 4 piles under one column). The group's capacity is not just the sum of individual piles.

| Input      | `singlePileCapacity` (tons), `numberOfPiles` (num), `efficiency` (0.0 to 1.0). |
| :--------- | :----------------------------------------------------------------------------- |
| **Output** | Return string.                                                                 |

**Rules:**

- **Group Capacity:** `singlePileCapacity * numberOfPiles * efficiency`.

| Challenge 📢 | If the Group Capacity is $\ge 120$ tons, return `"STRONG"`. If between 80 and 119.9, return `"STABLE"`. If below 80, return `"REINFORCE"`. If efficiency is not between 0 and 1, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPileGroupCapacity(40, 3, 0.85)` ➔ `"STABLE"` (102 tons)
- `checkPileGroupCapacity(50, 4, 0.9)` ➔ `"STRONG"` (180 tons)

---

## 🧩 PROBLEM–03: 🧊 Cast-in-Situ Concrete Volume

⚠️ **Function Name:** `calculatePileConcrete()`

Piles are circular holes filled with concrete. You need to calculate the volume for a single pile.

| Input      | `diameter` (inches), `depth` (ft). |
| :--------- | :--------------------------------- |
| **Output** | Return number (Cubic Feet).        |

**Rules:**

- **Radius (ft):** `(diameter / 2) / 12`.
- **Volume:** $\pi \times r^2 \times depth$. (Use `Math.PI`).
- **Wastage Factor:** Add **15%** for concrete lost in soil gaps.

| Challenge 📢 | Return the volume rounded to 2 decimal places. If diameter is less than 18 inches, return `"Invalid Diameter"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePileConcrete(20, 50)` ➔ `125.45`
- `calculatePileConcrete(12, 50)` ➔ `"Invalid Diameter"`

---

## 🧩 PROBLEM–04: 🛡️ Pile Reinforcement "Cage" Logic

⚠️ **Function Name:** `validatePileRebar()`

A pile cage must have enough main longitudinal bars to handle the bending moments during an earthquake.

| Input      | `pileDiameter` (inches), `barCount` (num). |
| :--------- | :----------------------------------------- |
| **Output** | Return boolean.                            |

**Rules:**

- For piles $> 18$ inches, the minimum number of bars is **6**.
- **Rule of Thumb:** You need at least 1 bar for every **4 inches** of diameter.

| Challenge 📢 | Return `true` if the `barCount` meets BOTH rules. Otherwise, return `false`. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validatePileRebar(24, 6)` ➔ `true` (Meets min 6 and 24/4 = 6)
- `validatePileRebar(32, 6)` ➔ `false` (Needs at least 32/4 = 8 bars)

---

## 🧩 PROBLEM–05: 🔍 Pile Integrity Test (PIT) Auditor

⚠️ **Function Name:** `auditPileIntegrity()`

After casting, we use sound waves to check if the pile has cracks or "necking" (narrowing).

| Input      | `waveVelocity` (m/s), `designDepth` (ft), `actualDepthReported` (ft). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return string.                                                        |

**Rules:**

- A pile is "HEALTHY" if the `actualDepthReported` is within **2%** of the `designDepth`.
- If the difference is between 2% and 5%, it is "SUSPECTED".
- If the difference is $> 5\%$, it is "DEFECTIVE".

| Challenge 📢 | Return the status in Uppercase. If `waveVelocity` is below 3000 m/s, return `"LOW_QUALITY_CONCRETE"`. |
| :----------- | :---------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditPileIntegrity(3500, 50, 49.5)` ➔ `"HEALTHY"` (1% difference)
- `auditPileIntegrity(3500, 50, 47)` ➔ `"DEFECTIVE"` (6% difference)
