# 🎓 JS DAILY PRACTICE – DAY-115

📅 **Goal:** High School Management System (Data Integrity & Auditing)
🎯 **Focus:** Array Normalization • Logical Filtering • Cost Calculation • Data Masking

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🧹 Student Name Normalizer

⚠️ **Function Name:** `normalizeStudentNames()`

The school database has messy name entries with extra spaces and inconsistent capitalization. You need to clean them.

| Input      | `namesArray` (Array of strings). |
| :--------- | :------------------------------- |
| **Output** | Return Array of strings.         |

**Rules:**

- Remove leading and trailing whitespace from each name.
- Convert names to "Title Case" (e.g., `"  ahsan habib  "` ➔ `"Ahsan Habib"`).

| Challenge 📢 | If a name string is empty after trimming, do not include it in the final array. If the input is not an array, return `"Invalid Input"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `normalizeStudentNames(["  abir", "KARIM  ", "  "])` ➔ `["Abir", "Karim"]`

---

## 🧩 PROBLEM–02: 📚 Library "Missing Book" Auditor

⚠️ **Function Name:** `auditLibraryInventory()`

The library is doing a stock check. Compare the physical count with the digital database.

| Input      | `database` (Array of objects), `physicalCount` (Array of objects). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return Array of strings (Book Titles).                             |

**Rules:**

- `database` = `[{id: 1, title: "JS Guide"}, {id: 2, title: "CSS Pro"}]`.
- `physicalCount` = `[{id: 1, title: "JS Guide"}]`.

| Challenge 📢 | Return an array containing the titles of the books that are present in the `database` but MISSING from the `physicalCount`. Search by `id`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `auditLibraryInventory([{id: 101, t: "Math"}, {id: 102, t: "Eng"}], [{id: 101, t: "Math"}])` ➔ `["Eng"]`

---

## 🧩 PROBLEM–03: 👨‍🏫 Emergency Substitute Payroll

⚠️ **Function Name:** `calculateSubPay()`

Calculate the extra payment for a teacher who took emergency substitute classes.

| Input      | `subClasses` (number), `hourlyRate` (number), `isWeekend` (boolean). |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return number.                                                       |

**Rules:**

- Base Pay = `subClasses * hourlyRate`.
- If `isWeekend` is `true`, the `hourlyRate` increases by **50%** (1.5x).

| Challenge 📢 | If the teacher took more than **10 classes**, they get a flat **$100 bonus** on top of the total. Return the final amount rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSubPay(2, 50, true)` ➔ `150` (50 _ 1.5 = 75 per hour; 75 _ 2 = 150)
- `calculateSubPay(12, 50, false)` ➔ `700` (600 + 100 bonus)

---

## 🧩 PROBLEM–04: 🛡️ Student Health Record Privacy

⚠️ **Function Name:** `maskHealthData()`

For privacy reasons, the school portal must mask sensitive health data in public lists.

| Input      | `healthRecord` (Object: `{studentName, condition, bloodGroup, notes}`). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return Object.                                                          |

**Rules:**

- Replace the `condition` value with `"REDACTED"`.
- Replace the `notes` value with `"HIDDEN"`.

| Challenge 📢 | If the `bloodGroup` is missing in the object, add it with the value `"Not Provided"`. The function must return a NEW object without modifying the original. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `maskHealthData({studentName: "Ahsan", condition: "Allergy", notes: "Severe"})` ➔ `{studentName: "Ahsan", condition: "REDACTED", notes: "HIDDEN", bloodGroup: "Not Provided"}`

---

## 🧩 PROBLEM–05: 🎓 Graduation Eligibility Tracker

⚠️ **Function Name:** `checkGraduationStatus()`

Determine if a senior student is eligible to graduate based on multiple department clearances.

| Input      | `clearances` (Object: `{academic: bool, library: bool, accounts: bool, sports: bool}`). |
| :--------- | :-------------------------------------------------------------------------------------- |
| **Output** | Return string.                                                                          |

**Rules:**

- A student is eligible ONLY if ALL four clearances are `true`.

| Challenge 📢 | If eligible, return `"ELIGIBLE_FOR_GRADUATION"`. If not, return a list of the departments they need to clear: `"PENDING: [Dept1], [Dept2]..."`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkGraduationStatus({academic: true, library: false, accounts: true, sports: false})` ➔ `"PENDING: library, sports"`
