

const { log } = require('console');
const path = require('path');

// Base file name || acyual file name
console.log(path.basename(__filename));

// Directory name || entire working directory without filename
console.log(path.dirname(__filename));

// extension name || extension of the filename
console.log(path.extname(__filename));

// parse method will give us an object
console.log(path.parse(__filename));

// we can access any property from the path onject
console.log(path.parse(__filename).base);

// concatenate the paths like ../test/index.html
console.log(path.join(__dirname, 'test', 'index.html'));
