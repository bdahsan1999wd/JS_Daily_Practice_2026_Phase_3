# 🎓 JS DAILY PRACTICE – DAY-105

📅 **Goal:** High School Management System (Extra-Curricular & Finance)
🎯 **Focus:** Array Membership • Event Logic • Merit Systems • Fee Calculation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏀 Club Membership Checker

⚠️ **Function Name:** `isClubMember()`

The school website needs to verify if a student is already registered in a specific club to prevent duplicate entries.

| Input      | `clubList` (Array of strings), `studentName` (string). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return boolean.                                        |

**Rules:**

- Return `true` if the `studentName` exists in the `clubList`.
- The search must be **case-insensitive**.

| Challenge 📢 | If the `clubList` is empty, return `false`. If the inputs are not the correct types, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isClubMember(["Ahsan", "Karim", "Abir"], "ahsan")` ➔ `true`
- `isClubMember(["Karim"], "Sabbir")` ➔ `false`

---

## 🧩 PROBLEM–02: 🎭 Annual Cultural Event Planner

⚠️ **Function Name:** `getEventAccess()`

Determine which events a student can attend based on their grade level during the Annual Cultural Week.

| Input      | `classLevel` (number), `hasPaidFee` (boolean). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- If `hasPaidFee` is `false`, return `"PAYMENT_REQUIRED"`.
- Grade 6-8 ➔ `"Junior Gala"`
- Grade 9-10 ➔ `"Senior Night"`
- Grade 11-12 ➔ `"Grand Ball"`

| Challenge 📢 | If the student is in Grade 12 AND `hasPaidFee` is `true`, return `"Grand Ball & Farewell Dinner"`. |
| :----------- | :------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getEventAccess(10, true)` ➔ `"Senior Night"`
- `getEventAccess(12, true)` ➔ `"Grand Ball & Farewell Dinner"`

---

## 🧩 PROBLEM–03: 🌟 Merit Point System

⚠️ **Function Name:** `updateMeritPoints()`

Update a student's total merit points based on their behavior (Awards vs. Penalties).

| Input      | `currentPoints` (number), `action` (string), `amount` (number). |
| :--------- | :-------------------------------------------------------------- |
| **Output** | Return number.                                                  |

**Rules:**

- If `action` is `"award"`, add `amount` to `currentPoints`.
- If `action` is `"penalty"`, subtract `amount` from `currentPoints`.

| Challenge 📢 | Merit points can never go below `0`. If a penalty makes the points negative, return `0`. If the `action` is neither `"award"` nor `"penalty"`, return `currentPoints`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `updateMeritPoints(50, "award", 20)` ➔ `70`
- `updateMeritPoints(10, "penalty", 15)` ➔ `0`

---

## 🧩 PROBLEM–04: 🎫 Sports Day Raffle Eligibility

⚠️ **Function Name:** `canParticipateInRaffle()`

Check if a student is eligible for the Sports Day prize raffle.

| Input      | `age` (number), `houseName` (string), `hasSportsGear` (boolean). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return boolean.                                                  |

**Rules:**

- A student is eligible if they are at least **12 years old** AND have their **sports gear**.

| Challenge 📢 | If the student is in the `"Green House"`, they get a "Special House" bypass and are eligible even if they are under 12 (but they still need their gear). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canParticipateInRaffle(10, "Green House", true)` ➔ `true`
- `canParticipateInRaffle(10, "Blue House", true)` ➔ `false`

---

## 🧩 PROBLEM–05: 💸 Tuition Fee Discount Logic

⚠️ **Function Name:** `calculateFinalTuition()`

Calculate the final tuition fee after applying siblings' discounts.

| Input      | `baseFee` (number), `siblingCount` (number). |
| :--------- | :------------------------------------------- |
| **Output** | Return number.                               |

**Rules:**

- If a student has **1 sibling** in the school, they get a **15% discount**.
- If they have **2 or more siblings**, they get a **25% discount**.

| Challenge 📢 | If `siblingCount` is 0, they pay the full `baseFee`. Return the final amount rounded to the nearest whole number. |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFinalTuition(5000, 1)` ➔ `4250`
- `calculateFinalTuition(5000, 3)` ➔ `3750`
