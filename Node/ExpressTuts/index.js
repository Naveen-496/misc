const express = require('express');

const app = express();

const members = require('./Members');

const logger = (req,res,next) => {
 console.log('logger');
 console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
   next();
}

app.use(logger);


app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/user', (req, res) => {
  const name = req.query.name;
  res.send('Hello,' + name);
});

const port = process.env.port || 5000;

app.listen(port, console.log(`server started om port: ${port}`));