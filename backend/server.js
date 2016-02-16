var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/favorites', express.static(__dirname.split('/').slice(0,-1).join('/') + '/favorites'));
app.use('/fullList', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/fullList'));
app.use('/node_modules', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/node_modules'));
app.use('/', express.static(__dirname.split('/').slice(0,-1).join('/')));

//MONGODB 
var temp = [];
//ROUTES
d
app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
    res.sendFile(__dirname.split('/').slice(0,-1).join('/') + '/index.html');
  });

app.get('/courts', function(req, res) {
  temp.push(req.body);
  res.send(200);
})

var port = 3000;
app.listen(3000, function(){
  console.log("server listening on....", port);
});

