# 🎓 JS DAILY PRACTICE – DAY-113

📅 **Goal:** High School Management System (Complex Logic & Filtering)
🎯 **Focus:** Nested Array Search • Cumulative Thresholds • Logic Sequencing • Multi-Key Sorting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧬 Student Science Fair Ranking

⚠️ **Function Name:** `getScienceFairRank()`

Rank projects in a Science Fair based on scores from three different judges.

| Input      | `projects` (Array of objects: `[{name, scores: [8, 9, 7]}, ...]`), `targetProject` (string). |
| :--------- | :------------------------------------------------------------------------------------------- |
| **Output** | Return number (Rank).                                                                        |

**Rules:**

- Total Score = Sum of all numbers in the `scores` array.
- Projects are ranked by Total Score (Highest first).

| Challenge 📢 | If two projects have the same total score, the one with the highest _single_ judge's score wins the tie. Find the rank of `targetProject`. If not found, return `"PROJECT_NOT_FOUND"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getScienceFairRank([{name: "A", scores: [5, 5, 5]}, {name: "B", scores: [10, 2, 3]}], "B")` ➔ `1` (B wins tie-break: 10 > 5)

---

## 🧩 PROBLEM–02: 🕒 Multi-Teacher Substitution Engine

⚠️ **Function Name:** `findBestSubstitute()`

Find the most suitable substitute teacher for an absent colleague.

| Input      | `teachers` (Array of objects: `[{name, dept, freeSlots, experience}], absentDept, slot`. |
| :--------- | :--------------------------------------------------------------------------------------- |
| **Output** | Return string (Teacher Name).                                                            |

**Rules:**

- A teacher is eligible ONLY if:
  1. Their `dept` matches the `absentDept`.
  2. The `slot` is present in their `freeSlots` array.

| Challenge 📢 | If multiple teachers are eligible, pick the one with the highest `experience`. If no one is eligible, return `"NO_SUBSTITUTE_AVAILABLE"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `findBestSubstitute([{n: "Z", dept: "Math", free: [9, 10], exp: 5}], "Math", 10)` ➔ `"Y"`

---

## 🧩 PROBLEM–03: 📑 Automated Course Prerequisite Checker

⚠️ **Function Name:** `checkEnrollmentEligibility()`

Determine if a student can enroll in an "Advanced Web Dev" course.

| Input      | `studentProfile` (Object: `{grades: {html, css, js}, attendance: number}`). |
| :--------- | :-------------------------------------------------------------------------- |
| **Output** | Return boolean or string.                                                   |

**Rules:**

- All three grades (`html`, `css`, `js`) must be **70 or higher**.
- `attendance` must be **80% or higher**.

| Challenge 📢 | If all grades are 90+ but attendance is between 70-79%, return `"PROBATIONARY_ENROLLMENT"`. If only the `js` grade is below 70 but everything else is perfect, return `"RE-TAKE_JS_EXAM"`. Otherwise, return `true` or `false`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkEnrollmentEligibility({grades: {html: 95, css: 95, js: 95}, attendance: 75})` ➔ `"PROBATIONARY_ENROLLMENT"`

---

## 🧩 PROBLEM–04: 💰 Hostel Mess Bill with Penalty

⚠️ **Function Name:** `calculateMessBill()`

Calculate the monthly mess bill for a hostel student based on meals consumed.

| Input      | `dailyMeals` (Array of numbers - meals per day), `baseRate` (number). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return number.                                                        |

**Rules:**

- Subtotal = (Total number of meals in the month) × `baseRate`.
- If the student missed meals for more than **5 consecutive days**, they get a **10% discount** on the subtotal.

| Challenge 📢 | If the student consumed more than 80 meals in a month, add a **$50 "Service Charge"**. Round the final bill to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateMessBill([3, 3, 3...], 10)` ➔ (Calculation based on meal count and rules)

---

## 🧩 PROBLEM–05: 🏆 Yearly Merit Point Auditor

⚠️ **Function Name:** `auditMeritPoints()`

The school board audits merit points to find students who deserve a "Leadership Medal".

| Input      | `records` (Array of objects: `[{activity: string, points: number, type: "Award" | "Penalty"}]`). |
| :--------- | :------------------------------------------------------------------------------ | -------------- |
| **Output** | Return string.                                                                  |

**Rules:**

- Total Points = Sum of `Award` points - Sum of `Penalty` points.
- Status: `>= 100` ➔ `"LEADERSHIP_CANDIDATE"`, `50-99` ➔ `"GOOD_STANDING"`, `< 0` ➔ `"DISCIPLINARY_ACTION"`.

| Challenge 📢 | If the student has even ONE penalty of `type: "Penalty"` where points are greater than **50**, they are disqualified; return `"DISQUALIFIED_BY_PENALTY"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `auditMeritPoints([{activity: "Sports", points: 120, type: "Award"}, {activity: "Late", points: 60, type: "Penalty"}])` ➔ `"DISQUALIFIED_BY_PENALTY"`
