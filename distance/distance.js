function calculateDistance() {
    const speed = document.getElementById('speed').value;
    const time = document.getElementById('time').value;

    if (speed && time && time > 0) {
        const distance = speed * time;
        document.getElementById('distance-result').innerText = `Distance: ${distance.toFixed(2)} km`;
    } else {
        document.getElementById('distance-result').innerText = 'Please enter valid speed and time.';
    }
}
