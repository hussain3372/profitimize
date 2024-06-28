function calculatesalary() {
    const salaryInput = document.getElementById("salary");
    const yearSelect = document.getElementById("year");
    
    const salary = parseFloat(salaryInput.value);
    const year = yearSelect.value;

    if (isNaN(salary)) {
        alert('Please enter a valid salary amount.');
        return;
    }

    const taxRates = {
        '2024': 0.35,
        '2023': 0.10,
        '2022': 0.20,
        '2021': 0.25,
        '2020': 0.15,
        '2019': 0.30,
        '2018': 0.45
    };

    if (!taxRates.hasOwnProperty(year)) {
        alert('Please select a year for which the tax rate is defined.');
        return;
    }

    const taxRate = taxRates[year];
    const monthlySalary = salary;
    const monthlyTax = monthlySalary * taxRate;
    const monthlySalaryAfterTax = monthlySalary - monthlyTax;
    const yearlySalary = salary * 12;
    const yearlyTax = monthlyTax * 12;

    document.getElementById("monthly-salary").innerText = "Your Amount: " + monthlySalary.toFixed(2);
    document.getElementById("monthly-tax").innerText = "Monthly Tax: " + monthlyTax.toFixed(2);
    document.getElementById("salary-after-tax").innerText = "Amount After Tax (Monthly): " + monthlySalaryAfterTax.toFixed(2);
    document.getElementById("yearly-salary-without-tax").innerText = "Yearly Amount Without Tax: " + yearlySalary.toFixed(2);
    document.getElementById("yearly-salary-with-tax").innerText = "Yearly Amount With Tax: " + (yearlySalary - yearlyTax).toFixed(2);
    document.getElementById("yearly-tax").innerText = "Yearly Tax: " + yearlyTax.toFixed(2);
    
}
