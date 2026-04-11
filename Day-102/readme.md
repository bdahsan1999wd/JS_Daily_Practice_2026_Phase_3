# 🎓 JS DAILY PRACTICE – DAY-102

📅 **Goal:** High School Management System (Operations)
🎯 **Focus:** Attendance Tracking • Library Fees • Exam Access • Multi-Subject Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📅 Attendance Percentage Calculator

⚠️ **Function Name:** `calculateAttendance()`

Track student presence to determine if they meet the school's minimum requirements.

| Input      | `totalClasses` (number), `attendedClasses` (number). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return number (Percentage).                          |

**Rules:**

- Calculate the attendance percentage: `(attendedClasses / totalClasses) * 100`.
- Round the result to **2 decimal places**.

| Challenge 📢 | If `attendedClasses` is greater than `totalClasses` or if either is negative, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateAttendance(100, 85)` ➔ `85`
- `calculateAttendance(45, 33)` ➔ `73.33`

---

## 🧩 PROBLEM–02: 📚 Library Late Fee System

⚠️ **Function Name:** `calculateLibraryFine()`

Automate the fine calculation for students who return library books late.

| Input      | `daysLate` (number), `isScholarshipStudent` (boolean). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return number (Total Fine).                            |

**Rules:**

- For the first 7 days: **$5 per day**.
- After 7 days: **$10 per day** for every additional day.
- Example: 10 days late = `(7 * 5) + (3 * 10) = 65`.

| Challenge 📢 | If the student has a scholarship (`isScholarshipStudent: true`), apply a **50% discount** to the total fine. Return the final amount. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateLibraryFine(5, false)` ➔ `25`
- `calculateLibraryFine(10, true)` ➔ `32.5`

---

## 🧩 PROBLEM–03: 🚫 Exam Admit Card Validator

⚠️ **Function Name:** `canGenerateAdmitCard()`

Determine if a student can download their exam admit card from the portal.

| Input      | `attendancePct` (number), `isFeesPaid` (boolean), `hasDisciplinaryIssue` (boolean). |
| :--------- | :---------------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                                     |

**Rules:**

- A student can get an admit card ONLY if:
  1. `attendancePct` is **75% or higher**.
  2. `isFeesPaid` is `true`.
  3. `hasDisciplinaryIssue` is `false`.

| Challenge 📢 | If `attendancePct` is between 60% and 74% and `isFeesPaid` is true, but they have no disciplinary issues, return `"PROVISIONAL_APPROVAL"`. Otherwise, return `true` or `false`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `canGenerateAdmitCard(80, true, false)` ➔ `true`
- `canGenerateAdmitCard(65, true, false)` ➔ `"PROVISIONAL_APPROVAL"`

---

## 🧩 PROBLEM–04: 🏅 Scholarship Eligibility Checker

⚠️ **Function Name:** `checkScholarship()`

Identify students eligible for financial aid based on their GPA and family income.

| Input      | `gpa` (number), `familyIncome` (number). |
| :--------- | :--------------------------------------- |
| **Output** | Return string.                           |

**Rules:**

- If `gpa === 5.0` AND `familyIncome < 200000` ➔ `"FULL_SCHOLARSHIP"`
- If `gpa >= 4.5` AND `familyIncome < 400000` ➔ `"PARTIAL_SCHOLARSHIP"`

| Challenge 📢 | If `gpa` is below 4.0, return `"NOT_ELIGIBLE"`. If any input is negative or GPA is above 5.0, return `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkScholarship(5.0, 150000)` ➔ `"FULL_SCHOLARSHIP"`
- `checkScholarship(4.8, 300000)` ➔ `"PARTIAL_SCHOLARSHIP"`

---

## 🧩 PROBLEM–05: 🏫 Teacher-Student Ratio Alert

⚠️ **Function Name:** `checkClassCapacity()`

Monitor if a classroom is overcrowded based on the school's safety guidelines.

| Input      | `studentCount` (number), `roomType` (string). |
| :--------- | :-------------------------------------------- |
| **Output** | Return string.                                |

**Rules:**

- `"Lab"`: Max 25 students.
- `"Classroom"`: Max 50 students.
- `"Auditorium"`: Max 200 students.

| Challenge 📢 | If the `studentCount` exceeds the limit for the given `roomType`, return `"OVERCROWDED"`. If it's within the limit, return `"SAFE"`. The `roomType` check must be case-insensitive. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkClassCapacity(30, "lab")` ➔ `"OVERCROWDED"`
- `checkClassCapacity(40, "CLASSROOM")` ➔ `"SAFE"`
