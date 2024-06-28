function calculateLoan() {
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTermYears = document.getElementById('loan-term-years').value;
    const loanTermMonths = document.getElementById('loan-term-months').value;
    const interestRate = document.getElementById('interest-rate').value;

    if (loanAmount === '' || loanTermYears === '' || loanTermMonths === '' || interestRate === '') {
        alert('Please fill in all fields');
        return;
    }

    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const totalMonths = parseFloat(loanTermYears) * 12 + parseFloat(loanTermMonths);

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, totalMonths);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthlyPayment)) {
        document.getElementById('monthly-payment').innerHTML = 'Monthly Payment: ' + monthlyPayment.toFixed(2);
        document.getElementById('total-payment').innerHTML = 'Total Payment: ' + (monthlyPayment * totalMonths).toFixed(2);
        document.getElementById('total-interest').innerHTML = 'Total Interest: ' + ((monthlyPayment * totalMonths) - principal).toFixed(2);
    } else {
        document.getElementById('monthly-payment').innerHTML = '';
        document.getElementById('total-payment').innerHTML = '';
        document.getElementById('total-interest').innerHTML = '';
        alert('Please check your numbers');
    }
}
