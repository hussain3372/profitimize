function convertWeight() {
    const weight = document.getElementById('weight').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (weight && weight > 0) {
        let convertedWeight;
        if (fromUnit === toUnit) {
            convertedWeight = weight;
        } else if (fromUnit === 'kg' && toUnit === 'lbs') {
            convertedWeight = weight * 2.20462;
        } else if (fromUnit === 'lbs' && toUnit === 'kg') {
            convertedWeight = weight / 2.20462;
        } else if (fromUnit === 'kg' && toUnit === 'gram') {
            convertedWeight = weight * 1000;
        }  else if (fromUnit === 'gram' && toUnit === 'kg') {
            convertedWeight = weight / 1000;
        }  else if (fromUnit === 'lbs' && toUnit === 'gram') {
            convertedWeight = weight * 453.6;
        } else if (fromUnit === 'gram' && toUnit === 'lbs') {
            convertedWeight = weight / 453.6;
        } else if (fromUnit === 'kg' && toUnit === 'miligram') {
            convertedWeight = weight * 1000000;
        } else if (fromUnit === 'miligram' && toUnit === 'kg') {
            convertedWeight = weight / 1000000;
        } else if (fromUnit === 'gram' && toUnit === 'miligram') {
            convertedWeight = weight * 1000;
        } else if (fromUnit === 'miligram' && toUnit === 'gram') {
            convertedWeight = weight / 1000;
        } else if (fromUnit === 'carats' && toUnit === 'miligram') {
            convertedWeight = weight * 200;
        } else if (fromUnit === 'miligram' && toUnit === 'carats') {
            convertedWeight = weight / 200;
        } else if (fromUnit === 'gram' && toUnit === 'carats') {
            convertedWeight = weight * 5;
        } else if (fromUnit === 'carats' && toUnit === 'gram') {
            convertedWeight = weight / 5;
        } else if (fromUnit === 'kg' && toUnit === 'carats') {
            convertedWeight = weight * 5000;
        } else if (fromUnit === 'carats' && toUnit === 'kg') {
            convertedWeight = weight / 5000;
        } else if (fromUnit === 'lbs' && toUnit === 'carats') {
            convertedWeight = weight * 2267.96;
        } else if (fromUnit === 'carats' && toUnit === 'lbs') {
            convertedWeight = weight / 2267.96;
        }
        document.getElementById('weight-result').innerText = `Weight: ${convertedWeight.toFixed(3)} ${toUnit}`;
    } else {
        document.getElementById('weight-result').innerText = 'Please enter a valid weight.';
    }
}
