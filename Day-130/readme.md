# 🎓 JS DAILY PRACTICE – DAY-130

📅 **Goal:** The Grand Modern Residency (The Great Concrete Pour)
🎯 **Focus:** Pump Flow Rate • Cold Joint Prevention • Slump Test Logic • Thermal Cracking • Yield Audit

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚀 Concrete Pump Flow Logic

⚠️ **Function Name:** `calculatePourDuration()`

You are using a concrete pump to lift the mix to the 1st floor. You need to estimate how long the continuous pour will take.

| Input      | `totalVolumeCFT` (num), `pumpCapacityCMH` (num). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number (Total Hours).                     |

**Rules:**

- **Conversion:** 1 Cubic Meter (CM) = 35.31 Cubic Feet (CFT).
- **Formula:** `(totalVolumeCFT / 35.31) / pumpCapacityCMH`.

| Challenge 📢 | Add a **20% "Efficiency Loss"** to the duration (for pipe cleaning and truck switching). Return the final hours rounded to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePourDuration(2500, 25)` ➔ `3.40` ( (2500/35.31)/25 \* 1.20 )

---

## 🧩 PROBLEM–02: ❄️ Cold Joint "Safety Window"

⚠️ **Function Name:** `checkColdJointRisk()`

A "Cold Joint" happens if new concrete is poured against concrete that has already started to set.

| Input      | `ambientTemp` (°C), `timeSinceLastTruck` (minutes). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string.                                      |

**Rules:**

- **Max Allowed Gap:** - If `ambientTemp` $> 35$°C: 45 minutes.
  - If `ambientTemp` is 25-35°C: 60 minutes.
  - If `ambientTemp` $< 25$°C: 90 minutes.

| Challenge 📢 | If the gap is within the limit, return `"SAFE"`. If it exceeds the limit, return `"RISK: COLD_JOINT_LIKELY"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkColdJointRisk(38, 50)` ➔ `"RISK: COLD_JOINT_LIKELY"`
- `checkColdJointRisk(20, 75)` ➔ `"SAFE"`

---

## 🧩 PROBLEM–03: 🧪 Slump Test "Workability" Auditor

⚠️ **Function Name:** `auditConcreteWorkability()`

Before pouring, every truck is tested for "Slump" (how much the concrete sags). This measures its water content and flow.

| Input      | `measuredSlumpMM` (num). |
| :--------- | :----------------------- |
| **Output** | Return string.           |

**Rules (Standard for Slabs):**

- **Target:** 100mm.
- **Tolerance:** $\pm 25$mm.

| Challenge 📢 | If within 75-125mm, return `"ACCEPTED"`. If $< 75$mm, return `"REJECT: TOO_DRY"`. If $> 125$mm, return `"REJECT: TOO_WET"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditConcreteWorkability(110)` ➔ `"ACCEPTED"`
- `auditConcreteWorkability(140)` ➔ `"REJECT: TOO_WET"`

---

## 🧩 PROBLEM–04: 🌡️ Thermal Cracking Prevention

⚠️ **Function Name:** `checkThermalGradient()`

During the first few hours of setting, the concrete's internal temperature rises. If the surface is much cooler than the core, it will crack.

| Input      | `coreTemp` (°C), `surfaceTemp` (°C). |
| :--------- | :----------------------------------- |
| **Output** | Return boolean.                      |

**Rules:**

- The temperature difference between the core and the surface must not exceed **19°C**.

| Challenge 📢 | Return `true` if safe, otherwise `false`. If `coreTemp` exceeds **70°C**, return `false` immediately regardless of the surface temp (delayed ettringite formation risk). |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkThermalGradient(50, 35)` ➔ `true` (Diff 15)
- `checkThermalGradient(72, 60)` ➔ `false` (Core over 70)

---

## 🧩 PROBLEM–05: 📊 Concrete Yield Auditor

⚠️ **Function Name:** `auditConcreteYield()`

Sometimes the concrete company sends less than they charge for. Let's audit the actual coverage.

| Input      | `orderedVolumeCM` (num), `actualAreaSqFt` (num), `thicknessInch` (num). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return string.                                                          |

**Rules:**

- **Calculated Volume (CM):** `(Area * (Thickness/12)) / 35.31`.
- **Variance:** `orderedVolumeCM - Calculated Volume`.

| Challenge 📢 | If the variance is $> 5\%$, return `"SHORTAGE_DETECTED: [Variance_CM]"`. Otherwise, return `"YIELD_NORMAL"`. Round the variance to 2 decimal places. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditConcreteYield(10, 1800, 5)` ➔ `"SHORTAGE_DETECTED: 11.24"` (Wait, this is an extreme example logic)
