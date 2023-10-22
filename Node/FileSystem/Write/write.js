const fs = require("fs");

// writing to a file
fs.writeFile("write.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("successfully wrote to the file");
});

// creating a directory

// fs.mkdir("New Folder", (err) => {
//   if (err) throw err;
//   console.log("New Directory created successfully!");
// });

// deleting the folder

// fs.unlink("write.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully!");
// });

