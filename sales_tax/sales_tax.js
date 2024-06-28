function calculatesalestax() {
    var before = parseFloat(document.getElementById("before").value);
    var sales = parseFloat(document.getElementById("sales").value);

    if (isNaN(before) || isNaN(sales) || sales <= 0) {
        alert("Please enter valid numbers for Calculation");
        return;
    }

    const beforeTaxPrice = before;
    const salesTaxAmount = (before * sales) / 100;
    const afterTaxPrice = before + salesTaxAmount;

    document.getElementById("before-tax-price").innerText = `Before Tax Price: $${beforeTaxPrice.toFixed(2)}`;
    document.getElementById("sales-tax").innerText = `Sales Tax: $${salesTaxAmount.toFixed(2)}`;
    document.getElementById("after-tax-price").innerText = `After Tax Price: $${afterTaxPrice.toFixed(2)}`;
}
