# 🎓 JS DAILY PRACTICE – DAY-107

📅 **Goal:** High School Management System (Admin & Logistics)
🎯 **Focus:** String Manipulation • Object Mapping • Logic Branching • Basic Math

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 👨‍🏫 Teacher Rating System

⚠️ **Function Name:** `getTeacherRating()`

The school website allows senior students to rate teachers. Convert the numeric score into a descriptive rank.

| Input      | `rating` (number). |
| :--------- | :----------------- |
| **Output** | Return string.     |

**Rules:**

- 4.5 - 5.0 ➔ `"EXCELLENT"`
- 3.5 - 4.4 ➔ `"VERY_GOOD"`
- 2.5 - 3.4 ➔ `"AVERAGE"`
- Below 2.5 ➔ `"REQUIRES_REVIEW"`

| Challenge 📢 | If the rating is exactly 5.0, return `"GOLD_MEDAL_TEACHER"`. If the rating is greater than 5 or less than 0, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTeacherRating(5.0)` ➔ `"GOLD_MEDAL_TEACHER"`
- `getTeacherRating(3.2)` ➔ `"AVERAGE"`

---

## 🧩 PROBLEM–02: 🪪 Student Profile Completeness

⚠️ **Function Name:** `checkProfileStatus()`

Check if a student's online profile is complete before they can register for exams.

| Input      | `profile` (Object: `{name, photo, signature, bloodGroup}`). |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return string.                                              |

**Rules:**

- All four properties must be present and should not be empty strings.
- If all are present, return `"PROFILE_COMPLETE"`.

| Challenge 📢 | If any field is missing or empty, return `"PENDING: [FIELD_NAME]"`. If multiple fields are missing, return the name of the first missing field found. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkProfileStatus({name: "Ahsan", photo: "img.jpg", signature: "", bloodGroup: "O+"})` ➔ `"PENDING: signature"`
- `checkProfileStatus({name: "Abir", photo: "p.jpg", signature: "s.png", bloodGroup: "A+"})` ➔ `"PROFILE_COMPLETE"`

---

## 🧩 PROBLEM–03: 🏠 Hostel Room Allocation

⚠️ **Function Name:** `allocateHostelRoom()`

Assign hostel rooms to students based on their distance from school and their grade.

| Input      | `distance` (number), `grade` (number). |
| :--------- | :------------------------------------- |
| **Output** | Return string.                         |

**Rules:**

- Students living more than **50km** away are eligible.
- Grade 11-12 ➔ `"North Wing (Senior)"`
- Grade 6-10 ➔ `"South Wing (Junior)"`

| Challenge 📢 | If the student lives within 50km, return `"NOT_ELIGIBLE_FOR_HOSTEL"`. If distance is negative, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `allocateHostelRoom(65, 12)` ➔ `"North Wing (Senior)"`
- `allocateHostelRoom(20, 9)` ➔ `"NOT_ELIGIBLE_FOR_HOSTEL"`

---

## 🧩 PROBLEM–04: 📅 Exam Date Conflict Checker

⚠️ **Function Name:** `isExamConflict()`

The exam controller needs to ensure two exams aren't scheduled for the same group on the same day.

| Input      | `exam1Date` (string), `exam2Date` (string). |
| :--------- | :------------------------------------------ |
| **Output** | Return boolean.                             |

**Rules:**

- Dates are strings in `"YYYY-MM-DD"` format.
- Return `true` if the dates are identical, `false` otherwise.

| Challenge 📢 | If either date string is empty or not a string, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `isExamConflict("2026-05-15", "2026-05-15")` ➔ `true`
- `isExamConflict("2026-05-15", "2026-05-16")` ➔ `false`

---

## 🧩 PROBLEM–05: 🏆 Sports Award Logic

⚠️ **Function Name:** `getSportsAward()`

Calculate what kind of trophy a student gets based on their position in the annual sports meet.

| Input      | `position` (number), `isNewRecord` (boolean). |
| :--------- | :-------------------------------------------- |
| **Output** | Return string.                                |

**Rules:**

- Position 1 ➔ `"GOLD"`
- Position 2 ➔ `"SILVER"`
- Position 3 ➔ `"BRONZE"`
- Any other position ➔ `"PARTICIPATION_CERTIFICATE"`

| Challenge 📢 | If `isNewRecord` is `true`, append `" + RECORD_BREAKER_BONUS"` to the trophy name (e.g., `"GOLD + RECORD_BREAKER_BONUS"`). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSportsAward(1, true)` ➔ `"GOLD + RECORD_BREAKER_BONUS"`
- `getSportsAward(5, false)` ➔ `"PARTICIPATION_CERTIFICATE"`
