# 🎓 JS DAILY PRACTICE – DAY-112

📅 **Goal:** High School Management System (Complex Data Processing)
🎯 **Focus:** Object Manipulation • Conditional Aggregation • Efficiency Math • Data Validation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📚 Multi-Item Library Fine Recovery

⚠️ **Function Name:** `calculateLibraryDebt()`

Calculate the total fine a student owes for multiple overdue books, each with different return dates.

| Input      | `books` (Array of objects: `[{title: "Math", daysOverdue: 5, category: "Textbook"}, ...]`). |
| :--------- | :------------------------------------------------------------------------------------------ |
| **Output** | Return number.                                                                              |

**Rules:**

- `"Textbook"` fine: $10 per day.
- `"Reference"` fine: $25 per day.
- `"Fiction"` fine: $5 per day.

| Challenge 📢 | If a student has more than 3 books overdue, apply a **20% "Bulk Penalty"** to the total fine. If the `daysOverdue` is 0 or negative for any book, ignore that book's fine. Return the total rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateLibraryDebt([{title: "A", daysOverdue: 2, category: "Textbook"}, {title: "B", daysOverdue: 1, category: "Reference"}])` ➔ `45`
- `calculateLibraryDebt([{d: 1, c: "Fiction"}, {d: 1, c: "Fiction"}, {d: 1, c: "Fiction"}, {d: 1, c: "Fiction"}])` ➔ `24` (20 + 20% penalty)

---

## 🧩 PROBLEM–02: 👨‍🏫 Teacher Efficiency Score

⚠️ **Function Name:** `getTeacherEfficiency()`

Evaluate a teacher's performance based on class pass rate and syllabus completion.

| Input      | `totalStudents` (number), `passedStudents` (number), `syllabusPct` (number). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return string.                                                               |

**Rules:**

- Pass Rate = `(passedStudents / totalStudents) * 100`.
- Efficiency is `"EXCELLENT"` if Pass Rate > 90% AND `syllabusPct` is 100%.
- Efficiency is `"SATISFACTORY"` if Pass Rate is 70%-90% AND `syllabusPct` > 80%.

| Challenge 📢 | If Pass Rate is below 50% OR `syllabusPct` is below 50%, return `"URGENT_REVIEW_REQUIRED"`. For any other case not mentioned, return `"MODERATE"`. Ensure inputs are logically sound (e.g., `passedStudents` cannot exceed `totalStudents`). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTeacherEfficiency(50, 48, 100)` ➔ `"EXCELLENT"`
- `getTeacherEfficiency(50, 20, 40)` ➔ `"URGENT_REVIEW_REQUIRED"`

---

## 🧩 PROBLEM–03: 📉 Monthly Attendance Trend

⚠️ **Function Name:** `getAttendanceTrend()`

Analyze a student's weekly attendance to find out if they are improving or declining.

| Input      | `weeklyStats` (Array of 4 numbers, e.g., `[80, 85, 90, 95]`). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return string.                                                |

**Rules:**

- If every week's percentage is higher than the previous week, return `"CONSTANT_IMPROVEMENT"`.
- If every week's percentage is lower than the previous week, return `"CONSTANT_DECLINE"`.

| Challenge 📢 | If the attendance is above 90% in all 4 weeks, return `"HIGH_PERFORMER"`. If none of the above conditions are met, return `"FLUCTUATING"`. The array must contain exactly 4 numbers between 0 and 100. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getAttendanceTrend([70, 75, 80, 85])` ➔ `"CONSTANT_IMPROVEMENT"`
- `getAttendanceTrend([92, 95, 91, 98])` ➔ `"HIGH_PERFORMER"`

---

## 🧩 PROBLEM–04: 📑 Automatic Transcript Generator

⚠️ **Function Name:** `generateTranscript()`

Create a summary object for a student's final report.

| Input      | `name` (string), `scores` (Array of numbers). |
| :--------- | :-------------------------------------------- |
| **Output** | Return Object.                                |

**Rules:**

- Calculate `{ average, highest, lowest }` from the `scores` array.
- Determine `status`: If `average >= 40` ➔ `"PASSED"`, else `"FAILED"`.

| Challenge 📢 | If the student has any score below 33, their `status` must be `"FAILED_IN_SUBJECT"` even if the average is high. Return the result as a clean object. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateTranscript("Ahsan", [80, 90, 25])` ➔ `{ name: "Ahsan", average: 65, highest: 90, lowest: 25, status: "FAILED_IN_SUBJECT" }`

---

## 🧩 PROBLEM–05: 🚌 School Bus Seat Optimizer

⚠️ **Function Name:** `allocateBusSeats()`

The school needs to decide how many buses to send for a field trip based on student registration.

| Input      | `totalRegistered` (number), `busCapacity` (number). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string.                                      |

**Rules:**

- Calculate how many buses are needed: `Math.ceil(totalRegistered / busCapacity)`.
- Calculate how many seats will be empty in the last bus.

| Challenge 📢 | Return a message: `"Buses needed: [X], Empty seats: [Y]"`. If `totalRegistered` is 0, return `"NO_BUSES_REQUIRED"`. If inputs are not positive numbers, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `allocateBusSeats(100, 30)` ➔ `"Buses needed: 4, Empty seats: 20"`
- `allocateBusSeats(0, 30)` ➔ `"NO_BUSES_REQUIRED"`
