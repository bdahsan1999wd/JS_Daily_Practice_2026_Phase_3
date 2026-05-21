# 🎓 JS DAILY PRACTICE – DAY-141

📅 **Goal:** The Grand Modern Residency (Interior Wall Putty & Priming)
🎯 **Focus:** Putty Coverage • Sanding Grit Logic • Layer Setting Time • Primer Dilution • Surface Reflection (LRV)

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧴 Putty Bag Estimator

⚠️ **Function Name:** `calculatePuttyBags()`

Wall putty is applied in two thin coats (Base coat and Finishing coat).

| Input      | `wallAreaSqFt` (num), `isDoubleCoat` (bool). |
| :--------- | :------------------------------------------- |
| **Output** | Return number (Total 40KG Bags).             |

**Rules:**

- **Single Coat Coverage:** 10 sq.ft per 1 KG.
- **Double Coat Coverage:** 6 sq.ft per 1 KG (due to overlapping layers).
- **Bag Size:** 40 KG.

| Challenge 📢 | Calculate the total KG needed, then return the number of bags rounded up (`Math.ceil`). If `wallAreaSqFt` is $> 5000$, return `"COMMERCIAL_SCALE_DETECTED"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePuttyBags(1200, true)` ➔ `5` (1200/6 = 200 KG. 200/40 = 5)
- `calculatePuttyBags(6000, false)` ➔ `"COMMERCIAL_SCALE_DETECTED"`

---

## 🧩 PROBLEM–02: ⏳ Putty Setting & Sanding Window

⚠️ **Function Name:** `getSandingSchedule()`

You cannot sand putty while it's still damp, and if you wait too long (weeks), it becomes too hard to sand smoothly.

| Input      | `hoursSinceApplication` (num), `humidity` (num). |
| :--------- | :----------------------------------------------- |
| **Output** | Return string.                                   |

**Rules:**

- **Standard Dry Time:** 6 to 24 hours.
- **High Humidity:** If `humidity` $> 70\%$, add **4 hours** to the minimum dry time.

| Challenge 📢 | If `hoursSinceApplication` is less than the required dry time, return `"WAITING"`. If between required dry time and 72 hours, return `"READY_FOR_SANDING"`. If $> 72$ hours, return `"HARD_SANDING_REQUIRED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSandingSchedule(5, 40)` ➔ `"WAITING"`
- `getSandingSchedule(10, 80)` ➔ `"READY_FOR_SANDING"` (Min dry time was 6+4=10)

---

## 🧩 PROBLEM–03: 📐 Sandpaper "Grit" Selection

⚠️ **Function Name:** `selectSandingGrit()`

To get that mirror-like finish, painters use different sandpaper grits.

| Input      | `layerType` (string: "Plaster", "BaseCoat", "FinalCoat"). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return number (Grit Value).                               |

**Rules:**

- **Plaster Surface:** 80 grit.
- **Base Coat Putty:** 120 grit.
- **Final Coat Putty:** 220 grit.

| Challenge 📢 | Use a **switch statement**. If an invalid `layerType` is provided, return `"Invalid Layer"`. |
| :----------- | :------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `selectSandingGrit("FinalCoat")` ➔ `220`
- `selectSandingGrit("Wood")` ➔ `"Invalid Layer"`

---

## 🧩 PROBLEM–04: 💧 Primer Dilution Calculator

⚠️ **Function Name:** `calculatePrimerMix()`

Primer is essential to ensure the paint sticks to the putty. It is usually diluted with water.

| Input      | `primerLiters` (num), `dilutionRatio` (string e.g., "1:0.5"). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return number (Total Mixed Volume in Liters).                 |

**Rules:**

- Extract the water part from the ratio string (the part after the colon).
- **Water Volume:** `primerLiters * waterPart`.
- **Total Volume:** `primerLiters + Water Volume`.

| Challenge 📢 | Return the total volume rounded to 1 decimal place. If the ratio string does not start with "1:", return `"Invalid Ratio"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePrimerMix(10, "1:0.5")` ➔ `15.0`
- `calculatePrimerMix(10, "2:1")` ➔ `"Invalid Ratio"`

---

## 🧩 PROBLEM–05: 💡 Light Reflectance Value (LRV) Audit

⚠️ **Function Name:** `auditWallBrightness()`

In a modern home, LRV measures how much light a wall reflects. Dark walls (low LRV) need more lamps, while light walls (high LRV) save energy.

| Input      | `colorLRV` (num). |
| :--------- | :---------------- |
| **Output** | Return string.    |

**Rules:**

- **LRV 0–40:** "DARK_ACCENT" (Needs high-wattage lighting).
- **LRV 41–70:** "BALANCED_TONE".
- **LRV 71–100:** "ENERGY_EFFICIENT" (Ideal for small rooms).

| Challenge 📢 | If `colorLRV` is not between 0 and 100, return `"Invalid LRV"`. For the "ENERGY_EFFICIENT" range, if the value is $> 90$, return `"SURFACE_GLARE_WARNING"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditWallBrightness(75)` ➔ `"ENERGY_EFFICIENT"`
- `auditWallBrightness(95)` ➔ `"SURFACE_GLARE_WARNING"`
