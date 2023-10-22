
const url = require('url');

const myUrl = new URL('http://www.myWebsite.com/?id=100&status=200');

console.log(myUrl.href.toString());

// host (root domain)
console.log(myUrl.host);

// Pathname
console.log(myUrl.pathname);

// query parameter
console.log(myUrl.search);

//params object
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
