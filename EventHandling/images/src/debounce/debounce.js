const input = document.querySelector("input");

const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
});

function debounce(cb, delay = 1000) {
  let timeOut;

  return (...args) => {
    // whatever function call is scheduled will be cancelled 
    // and then a new function call will be scheduled after a delay
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let latestArgs = null;
  return (...args) => {
    if (shouldWait) {
      latestArgs = args;
      return;
    } else {
      cb(...args);
      shouldWait = true;

      setTimeout(timerFunc, delay);
    }
  };

  function timerFunc() {
    if (latestArgs) {
      cb(...latestArgs);
      latestArgs = null;
      shouldWait = true;
      setTimeout(timerFunc, delay);
    } else {
      shouldWait = false;
    }
  }
}
