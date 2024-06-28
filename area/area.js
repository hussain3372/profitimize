function calculateArea() {
    const shape = document.getElementById('shapes').value;
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    let area;

    switch (shape) {
        case 'Rectangle':
            if (isNaN(length) || isNaN(width)) {
                document.getElementById('result-area').innerText = "Please enter valid numbers for length and width.";
                return;
            }
            area = length * width;
            break;
        case 'Triangle':
            if (isNaN(length) || isNaN(height)) {
                document.getElementById('result-area').innerText = "Please enter valid numbers for base and height.";
                return;
            }
            area = 0.5 * length * height;
            break;
        case 'Circle':
            if (isNaN(length)) {
                document.getElementById('result-area').innerText = "Please enter a valid number for radius.";
                return;
            }
            area = Math.PI * Math.pow(length, 2);
            break;
        case 'Ellipse':
            if (isNaN(length) || isNaN(width)) {
                document.getElementById('result-area').innerText = "Please enter valid numbers for major and minor axes.";
                return;
            }
            area = Math.PI * length * width;
            break;
        case 'Sector':
            if (isNaN(length) || isNaN(height)) {
                document.getElementById('result-area').innerText = "Please enter valid numbers for radius and angle.";
                return;
            }
            area = 0.5 * Math.pow(length, 2) * (height * (Math.PI / 180));
            break;
        default:
            document.getElementById('result-area').innerText = "Please select a shape.";
            return;
    }

    document.getElementById('result-area').innerText = `The area of the ${shape.toLowerCase()} is ${area.toFixed(2)} square units.`;
}

function toggleInputs() {
    const shape = document.getElementById('shapes').value;
    const widthLabel = document.getElementById('width-label');
    const widthInput = document.getElementById('width');
    const heightLabel = document.getElementById('height-label');
    const heightInput = document.getElementById('height');

    switch (shape) {
        case 'Rectangle':
            widthLabel.style.display = 'block';
            widthInput.style.display = 'block';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changearea").innerHTML = "Rectangle";
            document.getElementById("changearea1").innerHTML = "Rectangle";
            break;
        case 'Triangle':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'block';
            heightInput.style.display = 'block';
            document.getElementById("changearea").innerHTML = "Triangle";
            document.getElementById("changearea1").innerHTML = "Triangle";
            break;
        case 'Circle':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changearea").innerHTML = "Circle";
            document.getElementById("changearea1").innerHTML = "Circle";
            break;
        case 'Ellipse':
            widthLabel.style.display = 'block';
            widthInput.style.display = 'block';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changearea").innerHTML = "Ellipse";
            document.getElementById("changearea1").innerHTML = "Ellipse";
            break;
        case 'Sector':
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'block';
            heightInput.style.display = 'block';
            document.getElementById("changearea").innerHTML = "Sector";
            document.getElementById("changearea1").innerHTML = "Sector";
            break;
        default:
            widthLabel.style.display = 'none';
            widthInput.style.display = 'none';
            heightLabel.style.display = 'none';
            heightInput.style.display = 'none';
            document.getElementById("changearea").innerHTML = "Area";
            document.getElementById("changearea1").innerHTML = "Area";
            break;
    }
}

// Set default shape to 'Rectangle' and hide unnecessary inputs on page load
window.onload = function() {
    document.getElementById('shapes').value = 'Rectangle';
    toggleInputs();
};
