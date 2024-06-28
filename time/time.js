function calculateTime() {
    const speed = document.getElementById('speed').value;
    const distance = document.getElementById('distance').value;

    if (speed && distance && speed > 0) {
        const time = distance / speed;
        document.getElementById('time-result').innerText = `Time: ${time.toFixed(2)} hours`;
    } else {
        document.getElementById('time-result').innerText = 'Please enter valid speed and distance.';
    }
}
