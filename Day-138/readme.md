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
- **Safety Factor:** The `maxLoadCapKG` must be at least **1.5 times** the Estimated Load.

| Challenge 📢 | If safe, return `"STABLE"`. If the load is within 10% of the limit, return `"WARNING: LOAD_LIMIT_NEAR"`. If it exceeds the limit, return `"DANGER: SCAFFOLD_OVERLOAD"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkScaffoldingSafety(2, 4, 400)` ➔ `"STABLE"` (Load: 250kg. Limit: 250\*1.5 = 375. 400 > 375)
- `checkScaffoldingSafety(3, 6, 400)` ➔ `"WARNING: LOAD_LIMIT_NEAR"`

---

## 🧩 PROBLEM–02: 🧱 Double-Layer Plaster Volume

⚠️ **Function Name:** `calculateExternalPlaster()`

External walls use a 2-layer system: a 12mm "Rough Coat" followed by an 8mm "Finishing Coat."

| Input      | `exteriorAreaSqFt` (num).  |
| :--------- | :------------------------- |
| **Output** | Return number (Total CFT). |

**Rules:**

- **Total Thickness:** $12mm + 8mm = 20mm$ (approx **0.8 inches**).
- **Wet Volume:** `exteriorAreaSqFt * (0.8 / 12)`.
- **Dry Volume Factor:** Multiply by **1.35** (higher shrinkage for outdoor mixes).

| Challenge 📢 | Add a **10% wastage** for falling mortar (very common in high-rise exteriors). Return the final Dry Volume rounded to 2 decimal places. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateExternalPlaster(1000)` ➔ `99.0` ( (1000 _ 0.0666) _ 1.35 \* 1.1 )

---

## 🧩 PROBLEM–03: 🧪 Waterproofing Compound Ratio

⚠️ **Function Name:** `calculateWaterproofer()`

To prevent rainwater seepage, a liquid waterproofing compound is added to the cement.

| Input      | `cementBags` (num), `isMonsoonSeason` (bool). |
| :--------- | :-------------------------------------------- |
| **Output** | Return number (Total ML).                     |

**Rules:**

- **Standard Dose:** 200ml per 50kg bag of cement.
- **Heavy Dose:** If `isMonsoonSeason` is `true`, increase the dose by **25%**.

| Challenge 📢 | Return the total milliliters required. If `cementBags` is not a positive integer, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWaterproofer(10, false)` ➔ `2000`
- `calculateWaterproofer(10, true)` ➔ `2500`

---

## 🧩 PROBLEM–04: 📐 Vertical Groove (Joint) Logic

⚠️ **Function Name:** `shouldCutGroove()`

To prevent cracks from spreading across the entire 6-story facade, we cut "grooves" (v-joints) at specific intervals.

| Input      | `wallWidthFT` (num), `wallHeightFT` (num). |
| :--------- | :----------------------------------------- |
| **Output** | Return boolean.                            |

**Rules:**

- **Width Rule:** Cut a groove if width is $> 15$ feet.
- **Height Rule:** Cut a groove at every floor level (approx 10 feet).

| Challenge 📢 | Return `true` if a groove is required based on EITHER width or height rule, otherwise `false`. |
| :----------- | :--------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `shouldCutGroove(20, 10)` ➔ `true`
- `shouldCutGroove(12, 8)` ➔ `false`

---

## 🧩 PROBLEM–05: 🧴 Surface "Curing" Grade

⚠️ **Function Name:** `auditExternalCuring()`

External plaster dries very fast due to wind and sun. You need to monitor the curing frequency.

| Input      | `timesWateredPerDay` (num), `avgWindSpeedKMH` (num). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return string.                                       |

**Rules:**

- **Minimum Base:** 3 times per day.
- **Wind Factor:** If `avgWindSpeedKMH` $> 20$, the minimum required increases to **5 times** per day.

| Challenge 📢 | If `timesWateredPerDay` meets the requirement, return `"PASS"`. If not, return `"INSUFFICIENT: [needed]"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditExternalCuring(4, 25)` ➔ `"INSUFFICIENT: 1"`
- `auditExternalCuring(4, 15)` ➔ `"PASS"`
