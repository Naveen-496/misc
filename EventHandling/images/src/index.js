// Get the zoomable image element
const zoomImage = document.getElementById("zoom-image");

// Initialize variables for tracking touch positions and scale
let initialDistance = 0;
let currentScale = 1;

// Add event listeners for touch events
zoomImage.addEventListener("click", handleTouchStart, false);
zoomImage.addEventListener("doubleClick", handleTouchMove, false);

// Handle touch start event
function handleTouchStart(event) {
  console.log("zoom started");
  if (event.touches.length === 2) {
    // Calculate initial distance between two fingers
    initialDistance = getDistance(event.touches[0], event.touches[1]);
  }
}

// Handle touch move event
function handleTouchMove(event) {
  console.log("zooming the image");
  if (event.touches.length === 2) {
    // Calculate current distance between two fingers
    const currentDistance = getDistance(event.touches[0], event.touches[1]);

    // Calculate the scale factor based on the distance change
    const scaleFactor = currentDistance / initialDistance;

    // Update the scale of the image
    zoomImage.style.transform = `scale(${currentScale * scaleFactor})`;
  }
}

// Helper function to calculate distance between two touch points
function getDistance(touch1, touch2) {
  const dx = touch1.pageX - touch2.pageX;
  const dy = touch1.pageY - touch2.pageY;
  return Math.sqrt(dx * dx + dy * dy);
}
