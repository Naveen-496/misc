
const http = require('http');
const path = require('path');
const fs = require('fs');


const port = process.env.port || 3500;

const server = http.createServer( function(req, res){


  // if(req.url === '/'){

  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if(err) throw err;
  //     res.writeHead(200, {'Content-Type' : 'text/html'});
  //     res.end(data);
  //   })
    
  // }
  // else{
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
  //     try {
  //       res.writeHead(200, {'Content-Type' : 'text/html'});
  //       res.end(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  // }

 // Build the path
  let filepath = path.join(__dirname,
                            'public', 
                            req.url == '/' ? 'index.html' : req.url );

 // get the extension of the file
 let extname = path.extname(filepath);
    
 // initial content type
 let contentType = 'text/html';

 switch(extname){
  case '.js' :
    contentType = 'text/javaScript';
    break;

  case '.css' :
    contentType = 'text/css';
    break;

  case '.json' :
    contentType = 'application/json';
    break;

  case '.png' :
    contentType = 'image/png';
    break;

  case '.jpg' :
    contentType = 'image/jpeg';
    break;
 }

 // Read the file

 fs.readFile(filepath, (err, content) => {
  if(err){
    // some error

    if(err.code == 'ENOENT'){
         // page not found

         fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, {'Content-Type' : 'text/html'});
          res.end(content, 'utf8');
         })
    }
    else{
      // internal server error

      res.writeHead(500);
      res.end(`server error : ${err.code}`);
    }

  }
  else{
    //success
    res.writeHead(200, {'Content-Type' : contentType});
    res.end(content, 'utf8');
  }
 })
  
}); 

server.listen(port, () => console.log('server started on port ' + port));