function initializeCurrentDate() {
    const currentDateInput = document.getElementById('current-date');
    const now = new Date();
    currentDateInput.valueAsDate = now;
    updateClock();
}

function updateClock() {
    const now = new Date();
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.innerHTML = now.toLocaleTimeString();
    setTimeout(updateClock, 1000);
}

function calculateAge() {
    const dob = document.getElementById('dob').value;
    const currentDate = document.getElementById('current-date').value;

    if (!dob || !currentDate) {
        document.getElementById('age-result').innerHTML = 'Please enter both Date of Birth and Current Date.';
        return;
    }

    const birthDate = new Date(dob);
    const current = new Date(currentDate);
    const ageInMilliseconds = current - birthDate;

    if (ageInMilliseconds < 0) {
        document.getElementById('age-result').innerHTML = 'Current Date must be after Date of Birth.';
        return;
    }

    const millisecondsInAYear = 31556952000;
    const millisecondsInAMonth = 2629746000;
    const millisecondsInADay = 86400000;
    const millisecondsInAnHour = 3600000;
    const millisecondsInAMinute = 60000;
    const millisecondsInASecond = 1000;

    let remainingMilliseconds = ageInMilliseconds;

    const years = Math.floor(remainingMilliseconds / millisecondsInAYear);
    remainingMilliseconds %= millisecondsInAYear;

    const months = Math.floor(remainingMilliseconds / millisecondsInAMonth);
    remainingMilliseconds %= millisecondsInAMonth;

    const days = Math.floor(remainingMilliseconds / millisecondsInADay);
    remainingMilliseconds %= millisecondsInADay;

    const hours = Math.floor(remainingMilliseconds / millisecondsInAnHour);
    remainingMilliseconds %= millisecondsInAnHour;

    const minutes = Math.floor(remainingMilliseconds / millisecondsInAMinute);
    remainingMilliseconds %= millisecondsInAMinute;

    const seconds = Math.floor(remainingMilliseconds / millisecondsInASecond);

    document.getElementById('age-result').innerHTML = `
        <p><strong>Age:</strong></p>
        <p>${years} years, ${months} months, ${days} days</p>
        <p>${months + (years * 12)} months, ${days} days</p>
        <p>${Math.floor(ageInMilliseconds / millisecondsInADay)} days, ${hours} hours, ${minutes} minutes</p>
        <p>${Math.floor(ageInMilliseconds / millisecondsInAnHour)} hours, ${minutes} minutes, ${seconds} seconds</p>
    `;
}

// Initialize the clock and current date on page load
window.onload = initializeCurrentDate;
