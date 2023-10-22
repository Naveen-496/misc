
function debounce(fn, t) {
  let id;
  return function(...args) {
      clearTimeout(id);
     id = setTimeout(() => fn(...args), t);
  }
}

const time = debounce(console.log, 100);
time("Hello, World");
setTimeout(() => time("Again Hello, World"),20);
