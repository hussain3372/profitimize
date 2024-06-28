function toggleInputMethod() {
    const method = document.getElementById('input-method').value;
    document.getElementById('ultrasound-input').style.display = 'none';
    document.getElementById('last-period-input').style.display = 'none';
    document.getElementById('due-date-input').style.display = 'none';

    if (method === 'ultrasound') {
        document.getElementById('ultrasound-input').style.display = 'block';
    } else if (method === 'last-period') {
        document.getElementById('last-period-input').style.display = 'block';
    } else if (method === 'due-date') {
        document.getElementById('due-date-input').style.display = 'block';
    }
}

function calculateDueDate() {
    const method = document.getElementById('input-method').value;
    const dueDateElement = document.getElementById('due-date-result');
    let dueDate;

    if (method === 'ultrasound') {
        const ultrasoundDate = document.getElementById('ultrasound-date').value;
        if (!ultrasoundDate) {
            dueDateElement.innerHTML = 'Please enter the ultrasound date.';
            return;
        }
        const ultrasound = new Date(ultrasoundDate);
        dueDate = new Date(ultrasound);
        dueDate.setDate(ultrasound.getDate() + 252); // Approx 36 weeks from ultrasound

    } else if (method === 'last-period') {
        const lastPeriodDate = document.getElementById('last-period-date').value;
        if (!lastPeriodDate) {
            dueDateElement.innerHTML = 'Please enter the first day of your last period.';
            return;
        }
        const lastPeriod = new Date(lastPeriodDate);
        dueDate = new Date(lastPeriod);
        dueDate.setDate(lastPeriod.getDate() + 280); // Average pregnancy duration is 280 days

    } else if (method === 'due-date') {
        const dueDateInput = document.getElementById('due-date').value;
        if (!dueDateInput) {
            dueDateElement.innerHTML = 'Please enter your due date.';
            return;
        }
        dueDate = new Date(dueDateInput);
    }

    const dueDateFormatted = dueDate.toDateString();
    const conceptionDate = new Date(dueDate);
    conceptionDate.setDate(dueDate.getDate() - 266); // Approx 266 days from due date

    const conceptionDateFormatted = conceptionDate.toDateString();
    const trimesters = {
        first: new Date(conceptionDate),
        second: new Date(conceptionDate),
        third: new Date(conceptionDate),
    };
    trimesters.first.setDate(conceptionDate.getDate() + 91); // End of the first trimester
    trimesters.second.setDate(conceptionDate.getDate() + 182); // End of the second trimester
    trimesters.third.setDate(conceptionDate.getDate() + 273); // End of the third trimester

    dueDateElement.innerHTML = `
        <p><strong>Estimated Due Date:</strong> ${dueDateFormatted}</p>
        <p><strong>Conception Date:</strong> ${conceptionDateFormatted}</p>
        <p><strong>End of First Trimester:</strong> ${trimesters.first.toDateString()}</p>
        <p><strong>End of Second Trimester:</strong> ${trimesters.second.toDateString()}</p>
        <p><strong>End of Third Trimester:</strong> ${trimesters.third.toDateString()}</p>
    `;
}
