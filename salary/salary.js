function calculateSalary() {
    var salary = parseFloat(document.getElementById("salary").value);
    var hoursPerDay = parseFloat(document.getElementById("hour").value);
    var daysPerWeek = 5; // Assuming a 5-day work week

    if (isNaN(salary) || isNaN(hoursPerDay) || hoursPerDay <= 0) {
        alert("Please enter valid numbers for salary and hours per day.");
        return;
    }

    const monthlySalary = salary;
    const yearlySalary = salary * 12;
    const weeklySalaryInMonth = salary / 4;
    const dailySalary = salary / (4 * daysPerWeek);
    const hourlySalary = dailySalary / hoursPerDay;

    document.getElementById("yearly-salary").innerText = `Yearly Salary: $${yearlySalary.toFixed(2)}`;
    document.getElementById("monthly-salary").innerText = `Monthly Salary: $${monthlySalary.toFixed(2)}`;
    document.getElementById("weekly-salary-in-month").innerText = `Weekly Salary: $${weeklySalaryInMonth.toFixed(2)}`;
    document.getElementById("daily-salary").innerText = `Daily Salary: $${dailySalary.toFixed(2)}`;
    document.getElementById("hourly-salary").innerText = `Hourly Salary: $${hourlySalary.toFixed(2)}`;
}
