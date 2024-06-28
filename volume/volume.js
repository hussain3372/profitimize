function calculateVolume() {
    const shape = document.getElementById('shapes').value;
    const length = parseFloat(document.getElementById('length').value);
    const height = parseFloat(document.getElementById('height').value);

    let volume;

    switch (shape) {
        case 'Cube':
            if (isNaN(length)) {
                document.getElementById('result-volume').innerText = "Please enter a valid number for length.";
                return;
            }
            volume = Math.pow(length, 3);
            break;
        case 'Cylinder':
            if (isNaN(length) || isNaN(height)) {
                document.getElementById('result-volume').innerText = "Please enter valid numbers for radius and height.";
                return;
            }
            volume = Math.PI * Math.pow(length, 2) * height;
            break;
        case 'Sphere':
            if (isNaN(length)) {
                document.getElementById('result-volume').innerText = "Please enter a valid number for radius.";
                return;
            }
            volume = (4 / 3) * Math.PI * Math.pow(length, 3);
            break;
        case 'Cone':
            if (isNaN(length) || isNaN(height)) {
                document.getElementById('result-volume').innerText = "Please enter valid numbers for radius and height.";
                return;
            }
            volume = (1 / 3) * Math.PI * Math.pow(length, 2) * height;
            break;
        default:
            document.getElementById('result-volume').innerText = "Please select a shape.";
            return;
    }

    document.getElementById('result-volume').innerText = `The volume of the ${shape.toLowerCase()} is ${volume.toFixed(2)} cubic units.`;
}

function toggleInputs() {
    const shape = document.getElementById('shapes').value;
    const widthLabel = document.getElementById('width-label');
    const widthInput = document.getElementById('width');
    const heightLabel = document.getElementById('height-label');
    const heightInput = document.getElementById('height');

    switch (shape) {
        case 'Cube':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changevolume").innerHTML = "Cube"
            document.getElementById("changevolume1").innerHTML = "Cube"
            break;
        case 'Cylinder':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'block';
            heightInput.style.display = 'block';
            document.getElementById("changevolume").innerHTML = "Cylinder"
            document.getElementById("changevolume1").innerHTML = "Cylinder"
            break;
        case 'Cone':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'block';
            heightInput.style.display = 'block';
            document.getElementById("changevolume").innerHTML = "Cone"
            document.getElementById("changevolume1").innerHTML = "Cone"
            break;
        case 'Sphere':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changevolume").innerHTML = "Sphere"
            document.getElementById("changevolume1").innerHTML = "Sphere"
            break;
        default:
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changevolume").innerHTML = "Volume"
            document.getElementById("changevolume1").innerHTML = "Volume"
            break;
    }
}

// Set default shape to 'Cube' and hide unnecessary inputs on page load
window.onload = function() {
    document.getElementById('shapes').value = 'Cube';
    toggleInputs();
};
