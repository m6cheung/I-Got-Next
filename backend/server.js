var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var yelpCall = require('./yelpRequest');
app.use(bodyParser.json());

app.use('/favorites', express.static(__dirname.split('/').slice(0,-1).join('/') + '/favorites'));
app.use('/fullList', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/fullList'));
app.use('/node_modules', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/node_modules'));
app.use('/', express.static(__dirname.split('/').slice(0,-1).join('/')));

//MONGODB 
var temp = [];
//ROUTES
app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
    res.sendFile(__dirname.split('/').slice(0,-1).join('/') + '/index.html');
  });

app.get('/courts', function(req, res) {
  console.log('IM IN THE GET FOR /COURTS');
  yelpCall(req.query, function(err, response, body) {
    body = JSON.parse(body);
    res.send(200, body.businesses);
  });
});

app.post('/courts', function(req, res) {
  console.log('IM IN THE POST FOR /FAVORITES', req);
  res.send(201);

});

var port = 3000;
app.listen(3000, function(){
  console.log("server listening on....", port);
});

