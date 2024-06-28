function calculateBodyFat() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender) {
        alert("Please enter valid values and select a gender");
        return;
    }

    let bodyFatPercentage;
    if (gender === 'male') {
        bodyFatPercentage = 1.20 * (weight / ((height / 100) ** 2)) + 0.23 * age - 16.2;
    } else {
        bodyFatPercentage = 1.20 * (weight / ((height / 100) ** 2)) + 0.23 * age - 5.4;
    }

    const bodyFatMass = (bodyFatPercentage / 100) * weight;
    const leanMass = weight - bodyFatMass;
    const bodyFatCategory = getBodyFatCategory(bodyFatPercentage, gender);

    document.getElementById('result-body-fat').innerText = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
    document.getElementById('result-category').innerText = `Body Fat Category: ${bodyFatCategory}`;
    document.getElementById('result-fat-mass').innerText = `Body Fat Mass: ${bodyFatMass.toFixed(2)} kg`;
    document.getElementById('result-lean-mass').innerText = `Lean Body Mass: ${leanMass.toFixed(2)} kg`;
}

function getBodyFatCategory(bodyFatPercentage, gender) {
    const categories = gender === 'male' ? {
        essential: [2, 5],
        athletes: [6, 13],
        fitness: [14, 17],
        acceptable: [18, 24],
        obese: [25, 100]
    } : {
        essential: [10, 13],
        athletes: [14, 20],
        fitness: [21, 24],
        acceptable: [25, 31],
        obese: [32, 100]
    };

    if (bodyFatPercentage < categories.essential[0]) return 'Below Essential Fat';
    if (bodyFatPercentage <= categories.essential[1]) return 'Essential Fat';
    if (bodyFatPercentage <= categories.athletes[1]) return 'Athletes';
    if (bodyFatPercentage <= categories.fitness[1]) return 'Fitness';
    if (bodyFatPercentage <= categories.acceptable[1]) return 'Acceptable';
    return 'Obese';
}
