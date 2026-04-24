# 🎓 JS DAILY PRACTICE – DAY-114

📅 **Goal:** High School Management System (Admin Automation)
🎯 **Focus:** Index Mapping • String Templating • Object Transformation • Logical Filtering

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🪑 Exam Hall Seat Mapper

⚠️ **Function Name:** `getSeatLocation()`

The school exam hall is arranged in rows and columns. You need to find the exact seat coordinates for a student based on their roll number.

| Input      | `rollNumber` (number), `columnsPerRow` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return string.                                   |

**Rules:**

- Row starts from 1, Column starts from 1.
- Example: If `columnsPerRow` is 5, Roll 6 would be Row 2, Column 1.

| Challenge 📢 | Return the result in the format: `"Row: [X], Column: [Y]"`. If `rollNumber` or `columnsPerRow` is less than 1, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSeatLocation(7, 5)` ➔ `"Row: 2, Column: 2"`
- `getSeatLocation(10, 5)` ➔ `"Row: 2, Column: 5"`

---

## 🧩 PROBLEM–02: 📧 Automated Parent-Teacher Notice

⚠️ **Function Name:** `generateNotice()`

Create a personalized notice for parents regarding their child's academic status.

| Input      | `student` (Object: `{name, gender, avgMarks, attendance}`). |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return string.                                              |

**Rules:**

- Use "Mr./Ms." prefix for the parent (assume generic "Parent of [Name]").
- If `gender` is `"male"`, use pronouns "he/his". If `"female"`, use "she/her".

| Challenge 📢 | If `avgMarks < 40` OR `attendance < 75`, the notice must end with `"Action Required: Meeting with Principal"`. Otherwise, end with `"Keep up the good work"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `generateNotice({name: "Ahsan", gender: "male", avgMarks: 35, attendance: 90})` ➔ `"Dear Parent of Ahsan, he has scored 35%. Action Required: Meeting with Principal"`

---

## 🧩 PROBLEM–03: 📊 Advanced Weighted GPA (Honors)

⚠️ **Function Name:** `calculateHonorsGPA()`

In this high school, "Honors" subjects have a different weight than "General" subjects.

| Input      | `subjects` (Array of objects: `[{name, marks, type: "Honors" | "General"}]`). |
| :--------- | :----------------------------------------------------------- | -------------- |
| **Output** | Return number.                                               |

**Rules:**

- **General:** 80+ marks = 5.0, 70+ = 4.0, 60+ = 3.5, <60 = 0.0.
- **Honors:** Add an extra **0.5 bonus** to the GP if marks are 60 or above. (e.g., 80 in Honors = 5.5).

| Challenge 📢 | Calculate the final average GPA. If the student has an Honors subject but scored below 60, no bonus is added. Return the average rounded to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateHonorsGPA([{m: 80, type: "Honors"}, {m: 80, type: "General"}])` ➔ `5.25` (5.5 + 5.0 / 2)

---

## 🧩 PROBLEM–04: 💰 Staff Salary Increment Logic

⚠️ **Function Name:** `calculateIncrement()`

The school board decides increments based on years of service and department performance.

| Input      | `staff` (Object: `{baseSalary, years, deptPerf: "A" | "B" | "C"}`). |
| :--------- | :-------------------------------------------------- | --- | ------- |
| **Output** | Return number.                                      |

**Rules:**

- Base Increment: 5% of `baseSalary`.
- If `years > 10`, add an extra 2%.
- If `deptPerf` is `"A"`, add an extra 3%.

| Challenge 📢 | Total increment cannot exceed 10% of the `baseSalary`. Calculate and return only the **increment amount** (not the total salary). |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateIncrement({baseSalary: 10000, years: 12, deptPerf: "A"})` ➔ `1000` (Max 10% cap reached)

---

## 🧩 PROBLEM–05: 🕒 Late Submission Penalty Scaler

⚠️ **Function Name:** `getFinalAssignmentScore()`

Calculate the final score of an assignment based on how many hours late it was submitted.

| Input      | `originalScore` (number), `hoursLate` (number). |
| :--------- | :---------------------------------------------- |
| **Output** | Return number.                                  |

**Rules:**

- 1-5 hours late: 5% deduction.
- 6-24 hours late: 20% deduction.
- Above 24 hours: 50% deduction.

| Challenge 📢 | If the student has a "Medical Excuse" (this would be a 3rd parameter `hasExcuse` as boolean), the penalty is halved (e.g., 20% becomes 10%). Return the final score. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getFinalAssignmentScore(100, 10, false)` ➔ `80`
- `getFinalAssignmentScore(100, 10, true)` ➔ `90`
