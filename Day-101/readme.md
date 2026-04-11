# 🎓 JS DAILY PRACTICE – DAY-101

📅 **Goal:** High School Management System (Core Logic)
🎯 **Focus:** Admission Logic • ID Generation • Grading • Scheduling • Sections

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📝 Admission Eligibility Checker

⚠️ **Function Name:** `checkAdmissionEligibility()`

Verify if a new student is eligible for admission based on age and previous academic performance.

| Input      | `age` (number), `prevMarks` (number). |
| :--------- | :------------------------------------ |
| **Output** | Return boolean.                       |

**Rules:**

- The student must be between **10 and 15 years** old (inclusive).
- Previous school marks must be **50 or higher**.

| Challenge 📢 | If `age` or `prevMarks` is negative, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------- |

**Sample Input & Output:**

- `checkAdmissionEligibility(12, 65)` ➔ `true`
- `checkAdmissionEligibility(16, 80)` ➔ `false`

---

## 🧩 PROBLEM–02: 🆔 Dynamic Student ID Generator

⚠️ **Function Name:** `generateStudentID()`

Generate a unique ID for a student profile on the website.

| Input      | `year` (number), `classNum` (number), `roll` (number). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string.                                         |

**Rules:**

- The format must be: `[YEAR]-[CLASS]-[ROLL]` (e.g., `2026-9-05`).

| Challenge 📢 | If the `roll` number is less than 10, add a leading zero (Padding). For example: Roll 5 becomes `05`, but Roll 12 remains `12`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `generateStudentID(2026, 9, 5)` ➔ `"2026-9-05"`
- `generateStudentID(2026, 10, 15)` ➔ `"2026-10-15"`

---

## 🧩 PROBLEM–03: 📊 Subject Grade Point (GP)

⚠️ **Function Name:** `calculateSubjectGP()`

Determine the Grade Point (GP) for a single subject based on marks obtained.

| Input      | `marks` (number). |
| :--------- | :---------------- |
| **Output** | Return number.    |

**Rules:**

- 80-100 ➔ `5.0`
- 70-79 ➔ `4.0`
- 60-69 ➔ `3.5`
- 50-59 ➔ `3.0`
- 40-49 ➔ `2.0`
- 33-39 ➔ `1.0`

| Challenge 📢 | If marks are below 33, return `0.0`. If marks are greater than 100 or less than 0, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSubjectGP(85)` ➔ `5.0`
- `calculateSubjectGP(25)` ➔ `0.0`

---

## 🧩 PROBLEM–04: 🏠 House Allocation System

⚠️ **Function Name:** `assignStudentHouse()`

Allocate students to houses for sports or extra-curricular activities based on gender and skill.

| Input      | `gender` (string), `isAthlete` (boolean). |
| :--------- | :---------------------------------------- |
| **Output** | Return string.                            |

**Rules:**

- If `"Male"` ➔ `"Blue House"`
- If `"Female"` ➔ `"Red House"`

| Challenge 📢 | If `isAthlete` is `true`, append `"-PREMIUM"` to the house name (e.g., `"Blue House-PREMIUM"`). Gender validation must be case-insensitive. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `assignStudentHouse("male", true)` ➔ `"Blue House-PREMIUM"`
- `assignStudentHouse("Female", false)` ➔ `"Red House"`

---

## 🧩 PROBLEM–05: 🏫 Section & Waiting List Logic

⚠️ **Function Name:** `getSectionStatus()`

Assign a section based on the student's class roll number.

| Input      | `roll` (number). |
| :--------- | :--------------- |
| **Output** | Return string.   |

**Rules:**

- Roll 1-30 ➔ `"Section A"`
- Roll 31-60 ➔ `"Section B"`

| Challenge 📢 | If roll is greater than 60, return `"Waiting List"`. If roll is less than 1 or not a number, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSectionStatus(15)` ➔ `"Section A"`
- `getSectionStatus(75)` ➔ `"Waiting List"`
