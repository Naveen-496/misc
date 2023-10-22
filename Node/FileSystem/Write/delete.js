const fs = require("fs");

fs.rmdir("NewFolder", (err) => {
  if (err) throw err;
  console.log("Folder deleted successfully!!");
});
