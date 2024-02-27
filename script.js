// Requesting access to motion and orientation data
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  DeviceOrientationEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    })
    .catch(console.error);
} else {
  window.addEventListener('deviceorientation', handleOrientation);
}

// Function to handle device orientation changes
function handleOrientation(event) {
  var ball = document.getElementById('ball');
  var x = event.beta; // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  // Limiting the movement within certain range
  if (x > 45) x = 45;
  if (x < -45) x = -45;
  if (y > 45) y = 45;
  if (y < -45) y = -45;

  // Moving the ball according to the device orientation
  ball.style.left = 50 + (y / 45 * 50) + '%';
  ball.style.bottom = 50 + (x / 45 * 50) + '%';
}
