const touchme = document.getElementById("touch-me");

touchme.addEventListener("touchstart", (e) => {

  [...e.changedTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.append(dot);
  });
  console.log("Touch started", e.touches[0].pageX, e.touches[0].pageY);
});

touchme.addEventListener("touchmove", (e) => {
  e.preventDefault();
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
  });

  console.log("Touch moved", e.target);
});

touchme.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);

    setTimeout(() => dot.remove(), 500);
  });
  console.log("Touch ended", e.target);
});
