# 🎓 JS DAILY PRACTICE – DAY-118

📅 **Goal:** The Grand Modern Residency (Architectural Layout & Optimization)
🎯 **Focus:** Room Ratio • Balcony Logic • Lighting Efficiency • Door Clearance • Floor Load

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📐 Ideal Room Aspect Ratio

⚠️ **Function Name:** `validateRoomRatio()`

In modern architecture, rooms should not be too "skinny." The ratio between the length and width should be balanced for better furniture placement.

| Input      | `length` (number), `width` (number). |
| :--------- | :----------------------------------- |
| **Output** | Return string.                       |

**Rules:**

- **Ratio:** `length / width` (always divide the larger side by the smaller side).
- **Ideal Ratio:** Between **1.0** (Square) and **1.5** (Rectangular).

| Challenge 📢 | If the ratio is $\le 1.5$, return `"IDEAL"`. If it's between 1.51 and 2.0, return `"ACCEPTABLE"`. If it's $> 2.0$, return `"TOO_NARROW"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateRoomRatio(15, 10)` ➔ `"IDEAL"` (Ratio 1.5)
- `validateRoomRatio(22, 10)` ➔ `"TOO_NARROW"` (Ratio 2.2)

---

## 🧩 PROBLEM–02: 🌅 Balcony-to-Room Area Logic

⚠️ **Function Name:** `calculateBalconyAllowance()`

Luxury modern buildings require spacious balconies. However, the balcony shouldn't be so large that it makes the room too small.

| Input      | `roomArea` (number), `balconyArea` (number). |
| :--------- | :------------------------------------------- |
| **Output** | Return string.                               |

**Rules:**

- A standard balcony should be between **10% and 20%** of the room's floor area.

| Challenge 📢 | If the balcony is $< 10\%$, return `"TOO_SMALL"`. If it is $> 20\%$, return `"TOO_LARGE"`. If it's within the range, return `"PERFECT"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBalconyAllowance(200, 30)` ➔ `"PERFECT"` (15%)
- `calculateBalconyAllowance(200, 50)` ➔ `"TOO_LARGE"` (25%)

---

## 🧩 PROBLEM–03: 💡 Artificial Lighting Efficiency

⚠️ **Function Name:** `calculateLightPoints()`

Modern interiors use LED lumens to determine how many light points a room needs based on its square footage.

| Input      | `area` (number), `roomType` (string: "Bedroom", "Kitchen", "Drawing"). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return number (Total Points).                                          |

**Rules (Points per 100 sq.ft):**

- **Bedroom:** 2 points.
- **Kitchen:** 4 points (needs more light for tasks).
- **Drawing:** 3 points.

| Challenge 📢 | Calculate total points: `(area / 100) * pointsPer100`. Use `Math.ceil()` for the final count. If the `roomType` is not in the list, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateLightPoints(250, "Bedroom")` ➔ `5`
- `calculateLightPoints(150, "Kitchen")` ➔ `6`

---

## 🧩 PROBLEM–04: 🚪 Door Swing Clearance Auditor

⚠️ **Function Name:** `checkDoorClearance()`

For safety, a door must have enough "Swing Area" so it doesn't hit furniture or walls.

| Input      | `doorWidth` (number), `availableClearance` (number). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return boolean.                                      |

**Rules:**

- A standard modern door width is **3.5 feet** (42 inches).
- The `availableClearance` must be at least **1.1x** the `doorWidth`.

| Challenge 📢 | Return `true` if clearance is sufficient, otherwise `false`. If any input is $\le 0$, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkDoorClearance(3.5, 4.0)` ➔ `true` (3.5 \* 1.1 = 3.85)

---

## 🧩 PROBLEM–05: ⚖️ Floor Load Distribution

⚠️ **Function Name:** `checkFloorLoad()`

As a 6-story building, each floor must handle "Live Load" (people/furniture) and "Dead Load" (concrete/walls).

| Input      | `floorData` (Object: `{peopleCount: num, furnitureWeight: num, area: num}`). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return string.                                                               |

**Rules:**

- **Estimated Load:** `(peopleCount * 70) + furnitureWeight` (70kg avg weight).
- **Load Intensity:** `Estimated Load / area`.

| Challenge 📢 | If the Intensity is $\le 50$ kg/sq.ft, return `"SAFE"`. If $> 50$, return `"REINFORCE_BEAMS"`. If any object property is missing, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkFloorLoad({peopleCount: 10, furnitureWeight: 500, area: 1000})` ➔ `"SAFE"` (1200/1000 = 1.2)
