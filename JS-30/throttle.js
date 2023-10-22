
function throttled(fn, t) {
  let throttled = false;
  let nextArgs = undefined;
  
  return function(...args) {
      
      if(throttled) {
          nextArgs = args;
      }
      else {
          fn(...args);
          throttled = true;
          setTimeout(helper, t);
      }
  }
  
  function helper() {
      if(nextArgs) {
          fn(...nextArgs);
          throttled = true;
          nextArgs = undefined;
          setTimeout(helper, t);
      } else {
          throttled = false;
      }
  }
}


const throttle = throttled(console.log, 1000);
throttle("Hello"); // executes
throttle("Fine");  // cancels
throttle("Nice");  // executes