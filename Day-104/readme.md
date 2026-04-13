# 🎓 JS DAILY PRACTICE – DAY-104

📅 **Goal:** High School Management System (Inventory & Welfare)
🎯 **Focus:** Logic Sequencing • Inventory Checks • Weighted Grading • Text Analysis

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 👕 Uniform Stock Manager

⚠️ **Function Name:** `checkUniformStock()`

The school store needs a function to check if enough uniforms are available for a new batch of students.

| Input      | `stockCount` (number), `requestCount` (number). |
| :--------- | :---------------------------------------------- |
| **Output** | Return string.                                  |

**Rules:**

- If `stockCount >= requestCount`, return `"ORDER_PROCESSED"`.
- If `stockCount < requestCount`, return `"INSUFFICIENT_STOCK"`.

| Challenge 📢 | If `stockCount` is less than 10 units after a successful order, return `"ORDER_PROCESSED: LOW_STOCK_WARNING"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkUniformStock(50, 45)` ➔ `"ORDER_PROCESSED: LOW_STOCK_WARNING"`
- `checkUniformStock(20, 25)` ➔ `"INSUFFICIENT_STOCK"`

---

## 🧩 PROBLEM–02: 🍲 Canteen Subsidy Eligibility

⚠️ **Function Name:** `isEligibleForFreeLunch()`

The school welfare board provides free lunch to students based on family income and special status.

| Input      | `familyIncome` (number), `hasSpecialStatus` (boolean). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return boolean.                                        |

**Rules:**

- A student is eligible if their `familyIncome` is less than **$1500** per month.

| Challenge 📢 | If the student `hasSpecialStatus` (e.g., orphan or refugee), they are eligible regardless of family income. Return `true` or `false`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `isEligibleForFreeLunch(2000, true)` ➔ `true`
- `isEligibleForFreeLunch(1800, false)` ➔ `false`

---

## 🧩 PROBLEM–03: 📝 Weighted Final Grade

⚠️ **Function Name:** `calculateWeightedGrade()`

Calculate the final score of a student where different exams have different weights.

| Input      | `midterm` (number), `final` (number), `project` (number). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return number.                                            |

**Rules:**

- **Midterm:** 30% weight.
- **Final Exam:** 50% weight.
- **Project:** 20% weight.

| Challenge 📢 | If the student scored below 40 in the `final` exam, they fail the entire course. Return `"FAILED_IN_FINAL"` instead of the calculated score. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWeightedGrade(80, 70, 90)` ➔ `77`
- `calculateWeightedGrade(80, 35, 90)` ➔ `"FAILED_IN_FINAL"`

---

## 🧩 PROBLEM–04: 📚 Essay Word Counter

⚠️ **Function Name:** `validateEssayLength()`

Students must submit essays that meet a specific word count requirement for their English assignment.

| Input      | `essayText` (string), `minWords` (number). |
| :--------- | :----------------------------------------- |
| **Output** | Return string.                             |

**Rules:**

- Split the `essayText` by spaces and count the number of words.
- If the count is greater than or equal to `minWords`, return `"SUBMISSION_ACCEPTED"`.

| Challenge 📢 | If the word count is more than **twice** the `minWords`, return `"TOO_LONG: PLEASE_TRIM"`. If it's below `minWords`, return `"UNDER_LENGTH"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateEssayLength("I love programming with JS", 3)` ➔ `"SUBMISSION_ACCEPTED"`
- `validateEssayLength("Short text", 10)` ➔ `"UNDER_LENGTH"`

---

## 🧩 PROBLEM–05: 🚌 Bus Route Finder

⚠️ **Function Name:** `getBusRoute()`

The school website helps parents find the correct bus route based on their distance from the school.

| Input      | `distanceKm` (number). |
| :--------- | :--------------------- |
| **Output** | Return string.         |

**Rules:**

- `0 - 5 km` ➔ `"Route Alpha"`
- `5.1 - 10 km` ➔ `"Route Beta"`
- `10.1 - 20 km` ➔ `"Route Gamma"`

| Challenge 📢 | If the distance is more than **20 km**, return `"OUTSIDE_SERVICE_AREA"`. If the input is negative, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getBusRoute(8)` ➔ `"Route Beta"`
- `getBusRoute(25)` ➔ `"OUTSIDE_SERVICE_AREA"`
