# 🎓 JS DAILY PRACTICE – DAY-110

📅 **Goal:** High School Management System (Digital Learning & Finance)
🎯 **Focus:** File Validation • String Sanitization • Calculation Logic • Status Mapping

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📤 Assignment File Validator

⚠️ **Function Name:** `validateAssignmentUpload()`

The student portal only accepts specific file formats and sizes for homework submissions.

| Input      | `fileName` (string), `fileSizeMB` (number). |
| :--------- | :------------------------------------------ |
| **Output** | Return string.                              |

**Rules:**

- Valid extensions: `.pdf`, `.docx`, `.png`.
- Maximum size allowed: **5MB**.

| Challenge 📢 | If the file is valid, return `"UPLOAD_SUCCESS"`. If the size is too large, return `"FILE_TOO_LARGE"`. If the format is wrong, return `"UNSUPPORTED_FORMAT"`. Case-sensitivity for extension should be ignored. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateAssignmentUpload("homework.PDF", 3)` ➔ `"UPLOAD_SUCCESS"`
- `validateAssignmentUpload("image.jpeg", 2)` ➔ `"UNSUPPORTED_FORMAT"`

---

## 🧩 PROBLEM–02: 💬 Teacher Feedback Sanitizer

⚠️ **Function Name:** `sanitizeFeedback()`

To keep the portal professional, certain words in teacher feedback need to be automatically censored.

| Input      | `feedbackText` (string), `restrictedWord` (string). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string.                                      |

**Rules:**

- Replace every occurrence of the `restrictedWord` with the word `"CENSORED"`.
- The replacement must be case-insensitive.

| Challenge 📢 | If the `feedbackText` is longer than 100 characters, truncate it at 100 characters and add `"..."` at the end after performing the replacement. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `sanitizeFeedback("You are very lazy", "lazy")` ➔ `"You are very CENSORED"`
- `sanitizeFeedback("Excellent work on the project...", "bad")` ➔ `"Excellent work on the project..."`

---

## 🧩 PROBLEM–03: 🥪 School Cafe Digital Wallet

⚠️ **Function Name:** `processCafeTransaction()`

Students can pay for lunch using their digital ID cards. Check if they have enough balance.

| Input      | `currentBalance` (number), `itemPrice` (number), `isLunchHour` (boolean). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return number or string.                                                  |

**Rules:**

- If `currentBalance >= itemPrice`, subtract the price and return the new balance.
- If balance is insufficient, return `"INSUFFICIENT_FUNDS"`.

| Challenge 📢 | If `isLunchHour` is `true`, the student gets a **10% discount** on the `itemPrice` before the transaction is processed. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `processCafeTransaction(100, 50, true)` ➔ `55` (10% of 50 is 5; 100 - 45 = 55)
- `processCafeTransaction(30, 40, false)` ➔ `"INSUFFICIENT_FUNDS"`

---

## 🧩 PROBLEM–04: 📚 Grade Improvement Eligibility

⚠️ **Function Name:** `canRetakeExam()`

The school allows students to retake an exam to improve their grade under specific conditions.

| Input      | `originalScore` (number), `attendancePct` (number), `hasFinalExam` (boolean). |
| :--------- | :---------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                               |

**Rules:**

- A student can retake if their `originalScore` is less than **40**.
- Their `attendancePct` must be at least **80%**.
- It must NOT be a `finalExam` (`hasFinalExam: false`).

| Challenge 📢 | If the student has an `attendancePct` of **100%**, they can retake even if their `originalScore` is up to **50**. |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canRetakeExam(35, 85, false)` ➔ `true`
- `canRetakeExam(45, 100, false)` ➔ `true`

---

## 🧩 PROBLEM–05: 🏆 Student Ranking Status

⚠️ **Function Name:** `getRankingBadge()`

Based on their class rank, students receive a digital badge on their dashboard.

| Input      | `classRank` (number), `totalStudents` (number). |
| :--------- | :---------------------------------------------- |
| **Output** | Return string.                                  |

**Rules:**

- Rank 1 ➔ `"VALEDICTORIAN"`
- Top 10% (but not Rank 1) ➔ `"HONOR_ROLL"`
- Top 25% (but not in top 10%) ➔ `"MERIT_LIST"`

| Challenge 📢 | If the rank is in the bottom 10% of the class, return `"ACADEMIC_PROBATION"`. For everyone else, return `"STABLE"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getRankingBadge(1, 100)` ➔ `"VALEDICTORIAN"`
- `getRankingBadge(5, 100)` ➔ `"HONOR_ROLL"`
