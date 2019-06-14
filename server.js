const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');

//create the express App
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create middleware to handle the serving of the App
app.use('/', serveStatic(path.join(__dirname, '/build')));


app.post('/api/apply', function(req, res){
  console.log(req.body);
  res.json(req.body)
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
})

//create default port to serve the app
//replace process.env.PORT for actual server
const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started on port ' + port);
