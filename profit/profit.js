function calculateProfit() {
    const costPrice = parseFloat(document.getElementById('cost-price').value);
    const sellingPrice = parseFloat(document.getElementById('selling-price').value);
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;

    if (isNaN(costPrice) || isNaN(sellingPrice)) {
        alert('Please enter valid numbers for cost price and selling price.');
        return;
    }

    const grossProfit = sellingPrice - costPrice;
    const netProfit = grossProfit - expenses;
    const profitMargin = (netProfit / sellingPrice) * 100;

    document.getElementById('gross-profit').innerText = `Gross Profit: $${grossProfit.toFixed(2)}`;
    document.getElementById('net-profit').innerText = `Net Profit: $${netProfit.toFixed(2)}`;
    document.getElementById('profit-margin').innerText = `Profit Margin: ${profitMargin.toFixed(2)}%`;
}
