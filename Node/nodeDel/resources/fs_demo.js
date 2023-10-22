
const fs = require('fs');
const path = require('path');

// create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, function(err){
//   if(err) throw err;
//   console.log("Folder created...");
// });

// // create and write to a file

// fs.writeFile(path.join(__dirname, 'test', 'newFile.txt'), 'Hello, New file created.', 
//                           err => {
//                             if(err) throw err;
//                             console.log("Content written to new file");
//                           });

// // appen to the file some text
// fs.appendFile(path.join(__dirname, 'test', 'newFile.txt'), 
//                              ' I love Node.js', function(err){
//                               if(err) throw err;
//                               console.log('New text appended successfully...');
//                              });


// read from a file

fs.readFile(path.join(__dirname, 'test', 'newFile.txt'), 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
});

// rename a file

fs.rename(path.join(__dirname, 'test', 'newFile.txt'), path.join(__dirname, 'test', 'file.txt'), (err) =>{
  if(err) throw err;
  console.log('File renamed successfully...');
})