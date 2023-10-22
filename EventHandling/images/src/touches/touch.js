const touchme = document.getElementById("touch-me");
let clientX;
let clientY;
touchme.addEventListener("touchstart", (e) => {

  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
 
});

touchme.addEventListener("touchmove", (e) => {
 
});

touchme.addEventListener("touchend", (e) => {
 
  let deltaX;
  let deltaY;

  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;
  console.log("Distance moved horizontally : ", deltaX);
  console.log("Distance moved vertically : ", deltaY);
});
