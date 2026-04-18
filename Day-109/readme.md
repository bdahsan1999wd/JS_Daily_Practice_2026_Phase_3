# 🎓 JS DAILY PRACTICE – DAY-109

📅 **Goal:** High School Management System (Safety & Governance)
🎯 **Focus:** Logic Gates • Array Inclusion • Resource Optimization • String Formatting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧪 Science Lab Safety Protocol

⚠️ **Function Name:** `checkLabSafety()`

Before starting a chemistry experiment, the system must check if the student has the required safety gear.

| Input      | `hasGoggles` (boolean), `hasLabCoat` (boolean), `hasGloves` (boolean). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return string.                                                         |

**Rules:**

- If all three are `true`, return `"READY_FOR_EXPERIMENT"`.
- If any of them is `false`, return `"SAFETY_VIOLATION: [GEAR_NAME]_MISSING"`.

| Challenge 📢 | If multiple items are missing, list only the first one found in the order: Goggles, then Lab Coat, then Gloves. |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkLabSafety(true, false, true)` ➔ `"SAFETY_VIOLATION: LABCOAT_MISSING"`
- `checkLabSafety(true, true, true)` ➔ `"READY_FOR_EXPERIMENT"`

---

## 🧩 PROBLEM–02: 🗳️ Student Council Election Validator

⚠️ **Function Name:** `validateCandidate()`

Determine if a student can run for the Student Council President position.

| Input      | `grade` (number), `currentGPA` (number), `hasCleanRecord` (boolean). |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return boolean.                                                      |

**Rules:**

- Candidate must be in **Grade 11 or 12**.
- Must have a `currentGPA` of **3.5 or higher**.
- Must have a `hasCleanRecord: true`.

| Challenge 📢 | If the candidate is in Grade 12 and has a GPA of **4.8 or higher**, they are eligible even if `hasCleanRecord` is `false` (as a "Legacy Exception"). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateCandidate(11, 3.8, true)` ➔ `true`
- `validateCandidate(12, 4.9, false)` ➔ `true`

---

## 🧩 PROBLEM–03: 💡 Smart Classroom Energy Saver

⚠️ **Function Name:** `getClassroomLightStatus()`

The school website manages smart lighting to save electricity based on natural light and occupancy.

| Input      | `isOccupied` (boolean), `naturalLightLevel` (number 0-100). |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return string.                                              |

**Rules:**

- If `isOccupied` is `false`, return `"LIGHTS_OFF"`.
- If `isOccupied` is `true` AND `naturalLightLevel < 30`, return `"MAX_BRIGHTNESS"`.
- If `isOccupied` is `true` AND `naturalLightLevel` is between 30 and 70, return `"DIM_LIGHTS"`.

| Challenge 📢 | If `isOccupied` is `true` but `naturalLightLevel > 70`, return `"LIGHTS_OFF: NATURAL_LIGHT_SUFFICIENT"`. |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getClassroomLightStatus(true, 20)` ➔ `"MAX_BRIGHTNESS"`
- `getClassroomLightStatus(true, 80)` ➔ `"LIGHTS_OFF: NATURAL_LIGHT_SUFFICIENT"`

---

## 🧩 PROBLEM–04: 📑 Course Enrollment Capacity

⚠️ **Function Name:** `getEnrollmentStatus()`

Check if a student can join a specific elective course based on the current list of enrolled students.

| Input      | `enrolledList` (Array of strings), `maxCapacity` (number). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return string.                                             |

**Rules:**

- If the length of `enrolledList` is less than `maxCapacity`, return `"SPACE_AVAILABLE"`.
- If the length is equal to `maxCapacity`, return `"COURSE_FULL"`.

| Challenge 📢 | If the length is exactly 1 seat away from `maxCapacity`, return `"LAST_SEAT_REMAINING"`. If `maxCapacity` is not a positive number, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getEnrollmentStatus(["Ahsan", "Abir"], 3)` ➔ `"LAST_SEAT_REMAINING"`
- `getEnrollmentStatus(["Ahsan", "Abir", "Karim"], 3)` ➔ `"COURSE_FULL"`

---

## 🧩 PROBLEM–05: 🏆 Best Student Award Logic

⚠️ **Function Name:** `isTopStudentCandidate()`

The system selects candidates for the "Student of the Year" award.

| Input      | `attendance` (number), `extracurricularCount` (number), `averageGrade` (number). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                                  |

**Rules:**

- `attendance` must be **95% or higher**.
- `extracurricularCount` must be at least **3**.
- `averageGrade` must be **90 or higher**.

| Challenge 📢 | If `averageGrade` is **98 or higher**, the student is eligible as long as their `attendance` is at least 90%, ignoring the extracurricular count. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `isTopStudentCandidate(96, 4, 92)` ➔ `true`
- `isTopStudentCandidate(91, 1, 99)` ➔ `true`
