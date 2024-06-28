function calculateSpeed() {
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;

    if (distance && time && time > 0) {
        const speed = distance / time;
        document.getElementById('speed-result').innerText = `Speed: ${speed.toFixed(2)} km/h`;
    } else {
        document.getElementById('speed-result').innerText = 'Please enter valid distance and time.';
    }
}
