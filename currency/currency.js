    function convertCurrency() {
        const amountInput = document.getElementById("amount");
        const fromCurrency = document.getElementById("from-currency").value;
        const toCurrency = document.getElementById("to-currency").value;
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount)) {
            alert('Please enter a valid amount.');
            return;
        }

        // Define exchange rates in a two-dimensional object for simplicity
        const exchangeRates = {
            'USD': { 'USD': 1, 'EUR': 0.88, 'GBP': 0.75, 'JPY': 134, 'PKR' : 0.0036 },
            'EUR': { 'USD': 1.14, 'EUR': 1, 'GBP': 0.85, 'JPY': 152, 'PKR' : 0.0034 },
            'GBP': { 'USD': 1.33, 'EUR': 1.18, 'GBP': 1, 'JPY': 179, 'PKR' : 0.0028 },
            'JPY': { 'USD': 0.0075, 'EUR': 0.0066, 'GBP': 0.0056, 'JPY': 1, 'PKR' : 1.91 },
            'PKR': { 'USD': 287.81, 'EUR': 289.6, 'GBP': 353.21, 'JPY': 1.74, 'PKR' : 1 }
        };

        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = rate * amount;

        document.getElementById("converted-amount").innerText = "Converted Amount: " + convertedAmount.toFixed(2);
    }
