# 🎓 JS DAILY PRACTICE – DAY-108

📅 **Goal:** High School Management System (Resource & Health)
🎯 **Focus:** Logic Sequencing • Date Math • Health Metrics • Staff Permissions

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📚 Library Membership Renewal

⚠️ **Function Name:** `checkRenewalEligibility()`

The school library requires students to renew their membership annually. Check if they are eligible based on their current status.

| Input      | `isExpired` (boolean), `unpaidFines` (number), `booksBorrowed` (number). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return string.                                                           |

**Rules:**

- If `unpaidFines` is greater than **0**, return `"RENEWAL_BLOCKED: PAY_FINES"`.
- If `booksBorrowed` is greater than **0**, return `"RENEWAL_BLOCKED: RETURN_BOOKS"`.

| Challenge 📢 | If the membership is NOT expired (`isExpired: false`) and there are no blocks, return `"NO_RENEWAL_NEEDED"`. Otherwise, if all conditions are clear, return `"ELIGIBLE_FOR_RENEWAL"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkRenewalEligibility(true, 0, 0)` ➔ `"ELIGIBLE_FOR_RENEWAL"`
- `checkRenewalEligibility(true, 50, 2)` ➔ `"RENEWAL_BLOCKED: PAY_FINES"`

---

## 🧩 PROBLEM–02: 🏥 BMI Health Screener

⚠️ **Function Name:** `getStudentHealthStatus()`

The school nurse records student height and weight to monitor health trends.

| Input      | `weightKg` (number), `heightM` (number). |
| :--------- | :--------------------------------------- |
| **Output** | Return string.                           |

**Rules:**

- Calculate BMI: `weightKg / (heightM * heightM)`.
- BMI < 18.5 ➔ `"UNDERWEIGHT"`
- BMI 18.5 - 24.9 ➔ `"HEALTHY"`
- BMI 25.0 - 29.9 ➔ `"OVERWEIGHT"`
- BMI 30+ ➔ `"OBESE"`

| Challenge 📢 | If the BMI is exactly in the "Healthy" range, append `": FIT"` to the string. If `heightM` is 0 or negative, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getStudentHealthStatus(60, 1.7)` ➔ `"HEALTHY: FIT"`
- `getStudentHealthStatus(40, 1.6)` ➔ `"UNDERWEIGHT"`

---

## 🧩 PROBLEM–03: 📈 Relative Grading Curve

⚠️ **Function Name:** `applyGradingCurve()`

To maintain fairness, the school sometimes applies a curve to exam scores.

| Input      | `actualScore` (number), `classAverage` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number.                                   |

**Rules:**

- If the `classAverage` is below **50**, add **5 points** to the `actualScore`.
- If the `classAverage` is above **80**, subtract **2 points** from the `actualScore`.

| Challenge 📢 | The final score cannot exceed **100**. If the addition takes it over 100, return `100`. Return the final score as a Number. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `applyGradingCurve(45, 40)` ➔ `50`
- `applyGradingCurve(98, 40)` ➔ `100`

---

## 🧩 PROBLEM–04: 🚪 Staff Leave Approval

⚠️ **Function Name:** `isLeaveApproved()`

Determine if a teacher's leave request is approved based on the remaining leave balance and school events.

| Input      | `leaveBalance` (number), `daysRequested` (number), `isExamWeek` (boolean). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                            |

**Rules:**

- If `isExamWeek` is `true`, leave is automatically denied (`false`).
- If `daysRequested` is less than or equal to `leaveBalance`, return `true`.

| Challenge 📢 | If `daysRequested` is exactly **1 day** and `isExamWeek` is `false`, always return `true` as an "Emergency Personal Day" regardless of balance (as long as balance is not negative). |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isLeaveApproved(10, 5, true)` ➔ `false`
- `isLeaveApproved(0, 1, false)` ➔ `true`

---

## 🧩 PROBLEM–05: 🧾 Voucher Discount Validator

⚠️ **Function Name:** `validateVoucher()`

The school shop offers discounts via vouchers. Validate the code format and usage.

| Input      | `voucherCode` (string), `purchaseAmount` (number). |
| :--------- | :------------------------------------------------- |
| **Output** | Return string or number.                           |

**Rules:**

- A valid `voucherCode` must start with `"SCH"` (case-sensitive) and be exactly **6 characters** long.
- If valid, return the `purchaseAmount` with a **10% discount**.

| Challenge 📢 | If the code is invalid, return `"INVALID_VOUCHER"`. If the `purchaseAmount` is less than **$100**, the voucher cannot be used; return `"AMOUNT_TOO_LOW"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateVoucher("SCH123", 200)` ➔ `180`
- `validateVoucher("OFF123", 200)` ➔ `"INVALID_VOUCHER"`
