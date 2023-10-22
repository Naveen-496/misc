// Get the zoomable image element
const zoomImage = document.getElementById("zoom-image");

// Set initial scale value and position
let currentScale = 1;
let maxScale = 10;
let initialX = 0;
let currentX = 0;
let isDragging = false;

// Variables for tracking double tap
let doubleTap = false;
let delay = 300;
let timeout;

// Add event listeners for touch events
zoomImage.addEventListener("touchstart", handleTouchStart, false);
zoomImage.addEventListener("touchmove", handleTouchMove, false);
zoomImage.addEventListener("touchend", handleTouchEnd, false);

// Handle touch start event
function handleTouchStart(event) {
  if (event.touches.length === 1 && currentScale > 1) {
    // Capture initial touch position and set dragging flag
    console.log(event.touches[0].clientX+ " and " + event.touches[0].clientX);
    initialX = event.touches[0].clientX - currentX;
    console.log(initialX);
    isDragging = true;
  }

  if (!doubleTap) {
    doubleTap = true;

    // Set a timeout to detect double tap
    timeout = setTimeout(function () {
      doubleTap = false;
    }, delay);
  } else {
    // Clear the timeout
    clearTimeout(timeout);
    doubleTap = false;

    // Zoom in or out based on the current scale value
    if (currentScale < maxScale) {
      currentScale = currentScale + 1;
      console.log(currentScale);
      zoomImage.style.transform = `scale(${currentScale})`;
      // currentScale = 2;
    } else {
      zoomImage.style.transform = "scale(1)";
      currentScale = 1;
    }
  }
}

// Handle touch move event
function handleTouchMove(event) {
  if (isDragging) {
    // Calculate the new position based on touch movement
    const touchX = event.touches[0].clientX;
    console.log(touchX);
    const deltaX = touchX - initialX;
  
    // Calculate the maximum pan range based on image dimensions
    const maxPanRange = (currentScale - 1) * 100;
    //* zoomImage.offsetWidth;
  
   // Limit the pan range within the visible area
    currentX = Math.min(0, Math.max(-maxPanRange, currentX + deltaX));
    if (currentX < -maxPanRange || currentX > 0) {
      currentX = Math.min(0, Math.max(-maxPanRange, currentX));
    }
   
  
    // Apply the transform to move the image horizontally
    zoomImage.style.transform = `scale(${currentScale}) translateX(${currentX}px)`;
  }
  
}

// Handle touch end event
function handleTouchEnd() {
  isDragging = false;
}
