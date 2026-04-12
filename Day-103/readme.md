# 🎓 JS DAILY PRACTICE – DAY-103

📅 **Goal:** High School Management System (Staff & Curriculum)
🎯 **Focus:** Salary Calculation • Subject Averaging • Shift Overlap • Course Coding

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💰 Teacher Salary Calculator

⚠️ **Function Name:** `calculateTeacherSalary()`

Calculate the monthly take-home pay for a teacher based on their base salary and extra classes.

| Input      | `baseSalary` (number), `extraClasses` (number). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number.                                  |

**Rules:**

- Each `extraClass` pays an additional **$40**.
- A mandatory **tax of 10%** is deducted from the (Base + Extra) total.

| Challenge 📢 | If the teacher has conducted more than 20 extra classes, give them an additional **$200 bonus** before calculating the tax. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTeacherSalary(3000, 10)` ➔ `3060` (Total 3400 - 340 Tax)
- `calculateTeacherSalary(3000, 25)` ➔ `3780` (Total 4200 - 420 Tax)

---

## 🧩 PROBLEM–02: 📉 Semester GPA Averager

⚠️ **Function Name:** `calculateSemesterGPA()`

Calculate the final GPA for a student from an array of subject grade points.

| Input      | `gpArray` (Array of numbers). |
| :--------- | :---------------------------- |
| **Output** | Return number or string.      |

**Rules:**

- Calculate the average of all numbers in the array.
- Round the result to **2 decimal places**.

| Challenge 📢 | If the student has any subject with a GPA of `0.0`, the final result must be `0.0` (indicating a "Fail" in the semester) regardless of the average. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSemesterGPA([4.0, 5.0, 3.5])` ➔ `4.17`
- `calculateSemesterGPA([5.0, 0.0, 4.5])` ➔ `0.0`

---

## 🧩 PROBLEM–03: 🕒 Class Shift Overlap Checker

⚠️ **Function Name:** `isShiftConflict()`

Check if a newly assigned teacher shift conflicts with an existing one.

| Input      | `existingStart` (number), `existingEnd` (number), `newStart` (number). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return boolean.                                                        |

**Rules:**

- Time is in 24-hour format (e.g., 900 for 9:00 AM, 1430 for 2:30 PM).
- A conflict exists if `newStart` is greater than or equal to `existingStart` AND strictly less than `existingEnd`.

| Challenge 📢 | If `newStart` is exactly equal to `existingEnd`, return `false` (this means the classes are back-to-back, which is allowed). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isShiftConflict(900, 1000, 930)` ➔ `true`
- `isShiftConflict(900, 1000, 1000)` ➔ `false`

---

## 🧩 PROBLEM–04: 📑 Subject Code Generator

⚠️ **Function Name:** `generateSubjectCode()`

Generate a standardized code for new subjects added to the school curriculum.

| Input      | `subjectName` (string), `classLevel` (number). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- The code format is: `[First 3 Letters of Subject]-[ClassLevel]`.
- The subject letters must be in **UPPERCASE**.

| Challenge 📢 | If the `subjectName` has fewer than 3 letters, pad it with the letter `"X"` at the end. (e.g., "IT" for Class 9 becomes `ITX-9`). |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateSubjectCode("Mathematics", 10)` ➔ `"MAT-10"`
- `generateSubjectCode("IT", 9)` ➔ `"ITX-9"`

---

## 🧩 PROBLEM–05: 🚪 Late Entry Permission

⚠️ **Function Name:** `canEnterClass()`

A portal logic to determine if a student is allowed to enter the digital classroom after the start time.

| Input      | `startTime` (number), `entryTime` (number), `hasPermit` (boolean). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return string.                                                     |

**Rules:**

- If `entryTime` is within **15 minutes** of `startTime`, return `"ALLOWED"`.
- If `entryTime` is more than 15 minutes late, return `"LATE: ACCESS_DENIED"`.

| Challenge 📢 | If the student is late but `hasPermit` is `true`, return `"ALLOWED_WITH_PERMIT"`. |
| :----------- | :-------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canEnterClass(900, 910, false)` ➔ `"ALLOWED"`
- `canEnterClass(900, 920, true)` ➔ `"ALLOWED_WITH_PERMIT"`
