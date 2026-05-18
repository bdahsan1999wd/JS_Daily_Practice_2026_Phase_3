# 🎓 JS DAILY PRACTICE – DAY-138

📅 **Goal:** The Grand Modern Residency (External Plaster & Weatherproofing)
🎯 **Focus:** Scaffolding Safety • Double Layer Plaster • Waterproofing Additives • Groove Cutting • Surface Curing

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏗️ Scaffolding Load & Safety Audit

⚠️ **Function Name:** `checkScaffoldingSafety()`

External plastering requires heavy-duty scaffolding. Each "ledger" (horizontal bar) must support the weight of the workers and the mortar buckets.

| Input      | `workerCount` (num), `mortarBuckets` (num), `maxLoadCapKG` (num). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return string.                                                    |

**Rules:**

- **Estimated Load:** `(workerCount * 75) + (mortarBuckets * 25)`.
- **Required Safe Capacity:** The `maxLoadCapKG` must be at least **1.5 times** the Estimated Load to be considered safe.

| Challenge 📢 | Compare `maxLoadCapKG` against the **Required Safe Capacity** (`estimatedLoad * 1.5`): If `maxLoadCapKG` is **greater than or equal to** the Required Safe Capacity → return `"STABLE"`. If `maxLoadCapKG` is **less than** the Required Safe Capacity but **within 10%** below it (i.e., `maxLoadCapKG >= requiredSafeCapacity * 0.9`) → return `"WARNING: LOAD_LIMIT_NEAR"`. If `maxLoadCapKG` is **more than 10% below** the Required Safe Capacity → return `"DANGER: SCAFFOLD_OVERLOAD"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkScaffoldingSafety(2, 4, 400)` ➔ `"STABLE"`
  - Load: (2×75)+(4×25) = **250kg** | Required: 250×1.5 = **375kg** | 400 ≥ 375 ✅
- `checkScaffoldingSafety(3, 6, 400)` ➔ `"WARNING: LOAD_LIMIT_NEAR"`
  - Load: (3×75)+(6×25) = **375kg** | Required: 375×1.5 = **562.5kg** | 90% of 562.5 = **506.25** | 400 < 562.5 but...

---

## 🧩 PROBLEM–02: 🧱 Double-Layer Plaster Volume

⚠️ **Function Name:** `calculateExternalPlaster()`

External walls use a 2-layer system: a 12mm "Rough Coat" followed by an 8mm "Finishing Coat."

| Input      | `exteriorAreaSqFt` (num).  |
| :--------- | :------------------------- |
| **Output** | Return number (Total CFT). |

**Rules:**

- **Total Thickness:** 12mm + 8mm = **20mm** (≈ **0.8 inches**).
- **Wet Volume:** `exteriorAreaSqFt * (0.8 / 12)`.
- **Dry Volume Factor:** Multiply wet volume by **1.35** (higher shrinkage for outdoor mixes).

| Challenge 📢 | Add a **10% wastage** for falling mortar (very common in high-rise exteriors). Return the final volume rounded to **2 decimal places**. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateExternalPlaster(1000)` ➔ `99.0`
  - Wet: 1000 × (0.8/12) = 66.67 | Dry: 66.67 × 1.35 = 90.0 | +10% wastage: 90.0 × 1.1 = **99.0 CFT** ✅

---

## 🧩 PROBLEM–03: 🧪 Waterproofing Compound Ratio

⚠️ **Function Name:** `calculateWaterproofer()`

To prevent rainwater seepage, a liquid waterproofing compound is added to the cement.

| Input      | `cementBags` (num), `isMonsoonSeason` (bool). |
| :--------- | :-------------------------------------------- |
| **Output** | Return number (Total ML).                     |

**Rules:**

- **Standard Dose:** 200ml per bag of cement.
- **Monsoon Dose:** If `isMonsoonSeason` is `true`, increase the dose by **25%** (i.e., 250ml per bag).
- If `cementBags` is not a **positive integer**, return `"Invalid Input"`.

| Challenge 📢 | Return the total milliliters required. |
| :----------- | :------------------------------------- |

**Sample Input & Output:**

- `calculateWaterproofer(10, false)` ➔ `2000` → (10 × 200 = 2000ml) ✅
- `calculateWaterproofer(10, true)` ➔ `2500` → (10 × 250 = 2500ml) ✅
- `calculateWaterproofer(-3, false)` ➔ `"Invalid Input"` ✅

---

## 🧩 PROBLEM–04: 📐 Vertical Groove (Joint) Logic

⚠️ **Function Name:** `shouldCutGroove()`

To prevent cracks from spreading across the entire facade, we cut "grooves" (v-joints) at specific intervals.

| Input      | `wallWidthFT` (num), `wallHeightFT` (num). |
| :--------- | :----------------------------------------- |
| **Output** | Return boolean.                            |

**Rules:**

- **Width Rule:** Cut a groove if `wallWidthFT` is **greater than 15** feet.
- **Height Rule:** Cut a groove if `wallHeightFT` is an **exact multiple of 10** (i.e., at each floor level, approximately every 10 feet).

| Challenge 📢 | Return `true` if a groove is required based on **either** rule, otherwise `false`. |
| :----------- | :--------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `shouldCutGroove(20, 10)` ➔ `true` → width 20 > 15 ✅ (Width Rule triggers)
- `shouldCutGroove(12, 8)` ➔ `false` → width 12 ≤ 15, height 8 not a multiple of 10 ✅
- `shouldCutGroove(12, 20)` ➔ `true` → height 20 is a multiple of 10 ✅ (Height Rule triggers)

---

## 🧩 PROBLEM–05: 🧴 Surface "Curing" Grade

⚠️ **Function Name:** `auditExternalCuring()`

External plaster dries very fast due to wind and sun. You need to monitor the curing frequency.

| Input      | `timesWateredPerDay` (num), `avgWindSpeedKMH` (num). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return string.                                       |

**Rules:**

- **Base Requirement:** Minimum **3 times** per day.
- **Wind Factor:** If `avgWindSpeedKMH > 20`, the minimum required increases to **5 times** per day.

| Challenge 📢 | If `timesWateredPerDay` meets or exceeds the requirement → return `"PASS"`. If not → return `"INSUFFICIENT: [shortfall]"`, where `[shortfall]` is how many **more times** watering is needed (i.e., `required - timesWateredPerDay`). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `auditExternalCuring(4, 25)` ➔ `"INSUFFICIENT: 1"` → Wind > 20, required = 5 | shortfall = 5−4 = **1** ✅
- `auditExternalCuring(4, 15)` ➔ `"PASS"` → Wind ≤ 20, required = 3 | 4 ≥ 3 ✅
- `auditExternalCuring(2, 10)` ➔ `"INSUFFICIENT: 1"` → required = 3 | shortfall = 3−2 = **1** ✅
