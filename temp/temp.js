function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('from-unit').value;
    var toUnit = document.getElementById('to-unit').value;
    var result = document.getElementById('result-converted');

    // Conversion logic
    var convertedTemperature;

    switch (fromUnit) {
        case 'celsius':
            switch (toUnit) {
                case 'celsius':
                    convertedTemperature = temperature;
                    break;
                case 'fahrenheit':
                    convertedTemperature = (temperature * 9 / 5) + 32;
                    break;
                case 'kelvin':
                    convertedTemperature = temperature + 273.15;
                    break;
                case 'rankine':
                    convertedTemperature = (temperature + 273.15) * 9 / 5;
                    break;
                case 'reaumur':
                    convertedTemperature = temperature * 4 / 5;
                    break;
                default:
                    result.textContent = 'Invalid unit selected.';
                    return;
            }
            break;
        case 'fahrenheit':
            switch (toUnit) {
                case 'celsius':
                    convertedTemperature = (temperature - 32) * 5 / 9;
                    break;
                case 'fahrenheit':
                    convertedTemperature = temperature;
                    break;
                case 'kelvin':
                    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
                    break;
                case 'rankine':
                    convertedTemperature = temperature + 459.67;
                    break;
                case 'reaumur':
                    convertedTemperature = (temperature - 32) * 4 / 9;
                    break;
                default:
                    result.textContent = 'Invalid unit selected.';
                    return;
            }
            break;
        case 'kelvin':
            switch (toUnit) {
                case 'celsius':
                    convertedTemperature = temperature - 273.15;
                    break;
                case 'fahrenheit':
                    convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
                    break;
                case 'kelvin':
                    convertedTemperature = temperature;
                    break;
                case 'rankine':
                    convertedTemperature = temperature * 9 / 5;
                    break;
                case 'reaumur':
                    convertedTemperature = (temperature - 273.15) * 4 / 5;
                    break;
                default:
                    result.textContent = 'Invalid unit selected.';
                    return;
            }
            break;
        case 'rankine':
            switch (toUnit) {
                case 'celsius':
                    convertedTemperature = (temperature - 491.67) * 5 / 9;
                    break;
                case 'fahrenheit':
                    convertedTemperature = temperature - 459.67;
                    break;
                case 'kelvin':
                    convertedTemperature = temperature * 5 / 9;
                    break;
                case 'rankine':
                    convertedTemperature = temperature;
                    break;
                case 'reaumur':
                    convertedTemperature = (temperature - 491.67) * 4 / 9;
                    break;
                default:
                    result.textContent = 'Invalid unit selected.';
                    return;
            }
            break;
        case 'reaumur':
            switch (toUnit) {
                case 'celsius':
                    convertedTemperature = temperature * 5 / 4;
                    break;
                case 'fahrenheit':
                    convertedTemperature = temperature * 9 / 4 + 32;
                    break;
                case 'kelvin':
                    convertedTemperature = temperature * 5 / 4 + 273.15;
                    break;
                case 'rankine':
                    convertedTemperature = temperature * 9 / 4 + 491.67;
                    break;
                case 'reaumur':
                    convertedTemperature = temperature;
                    break;
                default:
                    result.textContent = 'Invalid unit selected.';
                    return;
            }
            break;
        default:
            result.textContent = 'Invalid unit selected.';
            return;
    }

    result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}