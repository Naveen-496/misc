const fs = require("fs");

fs.readFile("write.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
