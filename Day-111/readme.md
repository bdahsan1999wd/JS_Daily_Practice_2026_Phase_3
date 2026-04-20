# 🎓 JS DAILY PRACTICE – DAY-111

📅 **Goal:** High School Management System (Advanced Analytics)
🎯 **Focus:** Data Sorting • Nested Object Logic • Academic Tie-Breakers • Enrollment Overload

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📊 Smart GPA & Fail Analysis

⚠️ **Function Name:** `analyzeAcademicResult()`

Calculate a student's final GPA from an array of subjects, but with a strict "Fail" policy used in schools.

| Input      | `subjects` (Array of objects: `[{subject: "Math", marks: 85}, ...]`). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return number or string.                                              |

**Rules:**

- Grading: 80-100 (5.0), 70-79 (4.0), 60-69 (3.5), 50-59 (3.0), 33-49 (2.0), <33 (0.0).
- Final GPA = Average of all subjects.

| Challenge 📢 | If a student scores less than 33 in ANY subject, the final GPA must be `0.0` (indicates overall fail). If valid, round GPA to 2 decimal places. If the array is empty, return `"NO_DATA"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `analyzeAcademicResult([{s: "Math", marks: 80}, {s: "Physics", marks: 30}])` ➔ `0.0`
- `analyzeAcademicResult([{s: "Math", marks: 85}, {s: "Physics", marks: 75}])` ➔ `4.5`

---

## 🧩 PROBLEM–02: 🕒 Teacher Slot Conflict & Overload

⚠️ **Function Name:** `assignTeacherShift()`

The admin panel needs to check if a teacher can be assigned to a new 1-hour slot without conflicting with their current schedule.

| Input      | `currentSchedule` (Array of numbers), `newSlot` (number), `maxHours` (number). |
| :--------- | :----------------------------------------------------------------------------- |
| **Output** | Return boolean or string.                                                      |

**Rules:**

- `currentSchedule` contains hours like `[9, 11, 14]` (24h format).
- A teacher cannot take more classes than `maxHours`.

| Challenge 📢 | If `newSlot` is already in `currentSchedule`, return `"CONFLICT"`. If the teacher has already reached `maxHours`, return `"OVERLOADED"`. If the slot is after 5 PM (17:00), return `"LATE_SHIFT_DENIED"`. Otherwise, return `true`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `assignTeacherShift([9, 10], 11, 2)` ➔ `"OVERLOADED"`
- `assignTeacherShift([9], 9, 5)` ➔ `"CONFLICT"`

---

## 🧩 PROBLEM–03: 🏆 Merit List Ranking (Tie-Breaker)

⚠️ **Function Name:** `getStudentRank()`

Find the position of a specific student in a class list. If marks are tied, the one with higher attendance wins.

| Input      | `students` (Array of objects), `studentName` (string). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return number (Rank).                                  |

**Rules:**

- `students` = `[{name: "A", marks: 95, attendance: 90}, {name: "B", marks: 95, attendance: 98}]`.
- Sort students primarily by `marks` (descending) and secondarily by `attendance` (descending).

| Challenge 📢 | Find and return the rank (1, 2, 3...) of the given `studentName`. If the student doesn't exist, return `"STUDENT_NOT_FOUND"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getStudentRank([{n: "X", m: 90, a: 80}, {n: "Y", m: 90, a: 95}], "X")` ➔ `2`

---

## 🧩 PROBLEM–04: 💳 Multi-Tier Tuition Fee Calculator

⚠️ **Function Name:** `calculateFinalFees()`

Calculate school fees based on the base amount, siblings' discount, and financial aid.

| Input      | `baseFee` (number), `siblings` (number), `aidPct` (number). |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return number.                                              |

**Rules:**

- Sibling discount: 1 sibling = 15%, 2+ siblings = 25%.
- Financial aid (`aidPct`) is applied to the remaining balance _after_ the sibling discount.

| Challenge 📢 | If the final calculated fee is greater than $10,000, apply an additional 5% "Loyalty Discount". Return the final amount rounded to the nearest integer. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateFinalFees(12000, 1, 10)` ➔ `8721` (12000 - 15% = 10200; 10200 - 10% = 9180; 9180 - 5% = 8721)

---

## 🧩 PROBLEM–05: 🧪 Special Lab Eligibility (Nested Logic)

⚠️ **Function Name:** `isLabEligible()`

Determine if a student can access the advanced robotics lab.

| Input      | `profile` (Object: `{grade, gpa, behaviorScore, completedBasics}`). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return string or boolean.                                           |

**Rules:**

- Grade must be 10, 11, or 12.
- GPA must be 4.0 or higher.
- `completedBasics` must be `true`.

| Challenge 📢 | If all conditions are met but `behaviorScore` is below 70, return `"PROBATIONARY_ACCESS"`. If `completedBasics` is `false` but they have a GPA of 5.0, return `"PREREQUISITE_WAIVER_REQUIRED"`. Otherwise, return `true` or `false`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isLabEligible({grade: 11, gpa: 4.5, behaviorScore: 65, completedBasics: true})` ➔ `"PROBATIONARY_ACCESS"`
- `isLabEligible({grade: 12, gpa: 5.0, behaviorScore: 90, completedBasics: false})` ➔ `"PREREQUISITE_WAIVER_REQUIRED"`
