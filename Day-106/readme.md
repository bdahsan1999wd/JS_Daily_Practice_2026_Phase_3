# 🎓 JS DAILY PRACTICE – DAY-106

📅 **Goal:** High School Management System (Data Handling & Logic)
🎯 **Focus:** Array Analysis • Logic Gates • Donation Processing • Time Calculations

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📊 Exam Performance Classifier

⚠️ **Function Name:** `classifyPerformance()`

The school system needs to categorize student performance based on their average marks across all subjects.

| Input      | `avgMarks` (number). |
| :--------- | :------------------- |
| **Output** | Return string.       |

**Rules:**

- 90 - 100 ➔ `"EXCEPTIONAL"`
- 75 - 89 ➔ `"GOOD"`
- 50 - 74 ➔ `"AVERAGE"`
- Below 50 ➔ `"NEEDS_IMPROVEMENT"`

| Challenge 📢 | If the score is exactly 100, return `"PERFECT_SCORE"`. If the input is greater than 100 or less than 0, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `classifyPerformance(100)` ➔ `"PERFECT_SCORE"`
- `classifyPerformance(82)` ➔ `"GOOD"`

---

## 🧩 PROBLEM–02: 🔄 Teacher Substitute Finder

⚠️ **Function Name:** `canSubstitute()`

Determine if a teacher is eligible to substitute for another teacher’s class based on their department and current workload.

| Input      | `deptMatch` (boolean), `currentPeriods` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return boolean.                                   |

**Rules:**

- A teacher can substitute if they belong to the same department (`deptMatch: true`) AND their `currentPeriods` is less than **6**.

| Challenge 📢 | If it is an "Emergency Case" (where `deptMatch` is false but `currentPeriods` is 3 or less), return `"EMERGENCY_ONLY"`. Otherwise, return `true` or `false`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canSubstitute(true, 4)` ➔ `true`
- `canSubstitute(false, 2)` ➔ `"EMERGENCY_ONLY"`

---

## 🧩 PROBLEM–03: 🎓 Alumni Donation Tracker

⚠️ **Function Name:** `processDonation()`

The school website has a portal for alumni to donate to the library fund. Track their donor status.

| Input      | `donationAmount` (number). |
| :--------- | :------------------------- |
| **Output** | Return string.             |

**Rules:**

- `$1 - $499` ➔ `"SILVER_DONOR"`
- `$500 - $1999` ➔ `"GOLD_DONOR"`
- `$2000 and above` ➔ `"PLATINUM_DONOR"`

| Challenge 📢 | If the donation is `$5000` or more, append `": HALL_OF_FAME"` to the string (e.g., `"PLATINUM_DONOR: HALL_OF_FAME"`). |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `processDonation(600)` ➔ `"GOLD_DONOR"`
- `processDonation(5500)` ➔ `"PLATINUM_DONOR: HALL_OF_FAME"`

---

## 🧩 PROBLEM–04: 📚 Subject Book Availability

⚠️ **Function Name:** `isBookAvailable()`

Check if a specific textbook is available in the library database for a student to borrow.

| Input      | `libraryInventory` (Array of objects), `bookTitle` (string). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return string.                                               |

**Rules:**

- Search for an object where `title` matches `bookTitle` (case-insensitive).
- If found and `copies > 0`, return `"AVAILABLE"`.
- If found but `copies === 0`, return `"OUT_OF_STOCK"`.

| Challenge 📢 | If the book title is not found in the array at all, return `"NOT_IN_LIBRARY"`. |
| :----------- | :----------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isBookAvailable([{title: "Physics", copies: 2}], "physics")` ➔ `"AVAILABLE"`
- `isBookAvailable([{title: "Math", copies: 0}], "Math")` ➔ `"OUT_OF_STOCK"`

---

## 🧩 PROBLEM–05: 🕒 Exam Duration Calculator

⚠️ **Function Name:** `calculateExamTime()`

Calculate the total duration of an exam in minutes based on start and end times.

| Input      | `startTime` (number), `endTime` (number). |
| :--------- | :---------------------------------------- |
| **Output** | Return number.                            |

**Rules:**

- Times are in 24-hour format (e.g., `1000` for 10:00 AM, `1230` for 12:30 PM).
- Convert the difference into total minutes. (e.g., `1000` to `1200` is 120 minutes).

| Challenge 📢 | If the `endTime` is earlier than the `startTime`, return `"Invalid Input"`. Ensure the math handles the hour-to-minute conversion correctly (1 hour = 60 mins). |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateExamTime(900, 1130)` ➔ `150`
- `calculateExamTime(1300, 1400)` ➔ `60`
