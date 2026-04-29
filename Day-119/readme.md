# 🎓 JS DAILY PRACTICE – DAY-119

📅 **Goal:** The Grand Modern Residency (Earthquake Resistance Core)
🎯 **Focus:** Shear Wall Ratio • Ductile Detailing • Torsional Irregularity • Column Rebar • Lateral Displacement

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🛡️ Shear Wall Area Ratio

⚠️ **Function Name:** `validateShearWallRatio()`

Shear walls are the backbone of earthquake resistance. In a high-risk zone, the total cross-sectional area of shear walls should be at least 1.5% of the total floor area.

| Input      | `totalFloorArea` (number), `shearWallArea` (number). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return string.                                       |

**Rules:**

- **Ratio:** `(shearWallArea / totalFloorArea) * 100`.

| Challenge 📢 | If the ratio is $\ge 1.5\%$, return `"SAFE"`. If it's between 1.0% and 1.49%, return `"MARGINAL"`. If below 1.0%, return `"VULNERABLE"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateShearWallRatio(1800, 30)` ➔ `"SAFE"` (1.66%)
- `validateShearWallRatio(1800, 15)` ➔ `"VULNERABLE"` (0.83%)

---

## 🧩 PROBLEM–02: 🔗 Ductile Detailing "Stirrup" Spacing

⚠️ **Function Name:** `checkStirrupSpacing()`

In earthquake-prone areas, the spacing between steel stirrups (rings) in columns must be closer near the joints to prevent "Brittle Failure."

| Input      | `columnWidth` (number), `currentSpacing` (number). |
| :--------- | :------------------------------------------------- |
| **Output** | Return string.                                     |

**Rules:**

- According to BNBC/ACI code, spacing must not exceed `columnWidth / 4` or **4 inches**, whichever is smaller.

| Challenge 📢 | Return `"OPTIMAL"` if the spacing meets the rule. Otherwise, return `"ADJUST: [MaxAllowed]"` where `MaxAllowed` is the smaller value of the two rules. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkStirrupSpacing(16, 3.5)` ➔ `"OPTIMAL"` (Min of 16/4=4 and 4 is 4. 3.5 < 4)
- `checkStirrupSpacing(20, 6)` ➔ `"ADJUST: 4"`

---

## 🧩 PROBLEM–03: ⚖️ Torsional Irregularity (Symmetry) Check

⚠️ **Function Name:** `checkBuildingSymmetry()`

If a building's "Center of Mass" and "Center of Rigidity" are too far apart, the building will twist (Torsion) during an earthquake.

| Input      | `centerOfMass` (number), `centerOfRigidity` (number), `buildingWidth` (number). |
| :--------- | :------------------------------------------------------------------------------ |
| **Output** | Return boolean.                                                                 |

**Rules:**

- The distance (Eccentricity) between the two centers should not exceed **15%** of the `buildingWidth`.

| Challenge 📢 | Return `true` if the design is symmetrical (Safe from torsion), otherwise `false`. If any input is non-numeric, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkBuildingSymmetry(45, 50, 100)` ➔ `true` (Distance 5 is 5% of 100)
- `checkBuildingSymmetry(30, 50, 100)` ➔ `false` (Distance 20 is 20% of 100)

---

## 🧩 PROBLEM–04: 🧱 Column Reinforcement Percentage

⚠️ **Function Name:** `calculateRebarPercentage()`

For a 6-story building, columns shouldn't be over-reinforced or under-reinforced. The steel area should be between 1% and 4% of the total concrete area.

| Input      | `concreteArea` (number), `steelArea` (number). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- **Percentage:** `(steelArea / concreteArea) * 100`.

| Challenge 📢 | If percentage is between 1 and 4 (inclusive), return `"COMPLIANT"`. If $< 1$, return `"UNDER-REINFORCED"`. If $> 4$, return `"CONGESTED"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateRebarPercentage(400, 8)` ➔ `"COMPLIANT"` (2%)
- `calculateRebarPercentage(400, 20)` ➔ `"CONGESTED"` (5%)

---

## 🧩 PROBLEM–05: ↔️ Lateral Drift "Shake" Limit

⚠️ **Function Name:** `validateLateralDrift()`

"Drift" is how much the top of the building moves compared to the bottom during an earthquake.

| Input      | `storyHeight` (number), `lateralDisplacement` (number). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return string.                                          |

**Rules:**

- The allowed drift is **0.005** times the `storyHeight`.

| Challenge 📢 | If the `lateralDisplacement` is within the limit, return `"STABLE"`. If it exceeds the limit, return `"UNSAFE: [DriftAmount]"`. Round `DriftAmount` to 3 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateLateralDrift(120, 0.4)` ➔ `"STABLE"` (Limit: 120 \* 0.005 = 0.6)
- `validateLateralDisplacement(120, 0.8)` ➔ `"UNSAFE: 0.800"`
