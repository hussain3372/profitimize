function calculatePercentage() {
    const obtainedMarks = parseFloat(document.getElementById('obtained-marks').value);
    const totalMarks = parseFloat(document.getElementById('total-marks').value);
    const percentageResultElement = document.getElementById('percentage-result');

    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks === 0) {
        percentageResultElement.innerHTML = 'Please enter valid numbers for both obtained marks and total marks. Total marks must be greater than zero.';
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;
    percentageResultElement.innerHTML = `<p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>`;
}
