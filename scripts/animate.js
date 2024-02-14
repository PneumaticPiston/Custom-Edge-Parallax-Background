function animateHorizontalMovement(element, startX, endX, duration, easing = 'ease-in-out') {
    // Get the current left position of the element
    const currentLeft = parseInt(element.style.left) || 0;
  
    // Calculate the total distance to move
    const distance = endX - startX;
  
    // Calculate the movement per frame based on duration and FPS
    const framesPerSecond = 60;
    const movementPerFrame = distance / (duration * framesPerSecond);
  
    let startTime = null;
  
    // Animate the movement using requestAnimationFrame
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
  
      const progress = (timestamp - startTime) / (duration * 1000);
  
      // Determine the new left position using easing function
      const easedProgress = easing === 'ease-in-out'
        ? progress * progress * (3 - 2 * progress)
        : easing === 'ease-in'
          ? progress * progress
          : easing === 'ease-out'
            ? 1 - (1 - progress) * (1 - progress)
            : progress;
  
      const newLeft = currentLeft + easedProgress * distance;
  
      // Update the element's left position
      element.style.left = `${newLeft}px`;
  
      // If animation is not complete, request next frame
      if (easedProgress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    // Start the animation
    requestAnimationFrame(animate);
}