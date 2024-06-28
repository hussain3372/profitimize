function calculateLength() {
    const lengthInput = document.getElementById('length-input').value;
    const unitFrom = document.getElementById('unit-from').value;
    const unitTo = document.getElementById('unit-to').value;

    if (lengthInput === '' || unitFrom === '' || unitTo === '') {
        alert('Please fill in all fields');
        return;
    }

    const length = parseFloat(lengthInput);
    let convertedLength;

    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        feet: 3.28084,
        miles: 0.000621371,
        inches: 39.3701,
        centimeters: 100,
        millimeters: 1000,
        micrometers: 1e+6,
        nanometers: 1e+9,
        yards: 1.09361,
        'nautical miles': 0.000539957,
        'light years': 1.057e-16,
        'astronomical units': 6.68459e-12,
        parsecs: 3.24078e-17,
        angstroms: 1e+10,
        furlongs: 0.00497096,
        fathoms: 0.546807,
        rods: 0.198839,
        chains: 0.0497097,
        leagues: 0.000207124,
        picometers: 1e+12
    };

    // Convert the input length to meters
    const lengthInMeters = length / conversionRates[unitFrom];
    // Convert the length from meters to the target unit
    convertedLength = lengthInMeters * conversionRates[unitTo];

    document.getElementById('converted-length').innerHTML = `Converted Length: ${convertedLength.toFixed(2)} ${unitTo}`;
}
