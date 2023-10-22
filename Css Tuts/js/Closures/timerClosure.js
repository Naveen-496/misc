function makeCookies(doneMessage, n) {
  setTimeout(function () {
    console.log(doneMessage);
  }, n);
}

makeCookies("Cookies are done!", 2000);
