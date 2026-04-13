// 🧩 PROBLEM–01: checkUniformStock()

// Logic: Process uniform orders and trigger a low stock warning if the remaining count is below 10.

function checkUniformStock(stockCount, requestCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof stockCount !== 'number' || stockCount < 0 || typeof requestCount !== 'number' || requestCount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: STOCK CHECK ---
    if (stockCount < requestCount) {
        return "INSUFFICIENT_STOCK";
    }

    // --- STEP 3: ORDER PROCESSING & WARNING ---
    const remainingStock = stockCount - requestCount;
    if (remainingStock < 10) {
        return "ORDER_PROCESSED: LOW_STOCK_WARNING";
    }

    return "ORDER_PROCESSED";
}

// --- EXAMPLE USAGE ---
console.log(checkUniformStock(50, 45));
console.log(checkUniformStock(20, 25));