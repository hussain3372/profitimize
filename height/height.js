function convertHeight() {
    const heightInput = document.getElementById('height-input').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (heightInput && heightInput > 0) {
        let heightInCm;

        // Convert from input unit to centimeters
        switch (fromUnit) {
            case 'cm':
                heightInCm = parseFloat(heightInput);
                break;
            case 'm':
                heightInCm = parseFloat(heightInput) * 100;
                break;
            case 'in':
                heightInCm = parseFloat(heightInput) * 2.54;
                break;
            case 'ft':
                heightInCm = parseFloat(heightInput) * 30.48;
                break;
            default:
                heightInCm = parseFloat(heightInput);
        }

        // Convert from centimeters to output unit
        let convertedHeight;
        switch (toUnit) {
            case 'cm':
                convertedHeight = heightInCm;
                break;
            case 'm':
                convertedHeight = heightInCm / 100;
                break;
            case 'in':
                convertedHeight = heightInCm / 2.54;
                break;
            case 'ft':
                convertedHeight = heightInCm / 30.48;
                break;
            default:
                convertedHeight = heightInCm;
        }

        document.getElementById('height-result').innerText = `Height: ${convertedHeight.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById('height-result').innerText = 'Please enter a valid height.';
    }
}
