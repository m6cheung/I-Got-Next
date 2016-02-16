var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var yelpCall = require('./yelpRequest');
var mongoose = require('mongoose');
var db = require('../favoritesSchema');
app.use(bodyParser.json());

app.use('/favorites', express.static(__dirname.split('/').slice(0,-1).join('/') + '/favorites'));
app.use('/fullList', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/fullList'));
app.use('/node_modules', express.static(__dirname.split('/').slice(0,-1).join('/') +  '/node_modules'));
app.use('/', express.static(__dirname.split('/').slice(0,-1).join('/')));

//MONGODB
mongoose.connect('mongodb://localhost/iGotNext');
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
  console.log('IM IN THE POST FOR /FAVORITES', req.body);
  db.collection.insert({
    name: req.body.name,
    city: req.body.city,
    address: req.body.address,
    state: req.body.state,
    zip: req.body.zip,
    phone: req.body.phone
  }, function(err, newCourt) {
    if(err) {
      return res.send(404);
    } else {
      res.send(201, newCourt);
    }
  })
});

app.get('/favorites', function(req, res) {
  db.find({},{
    name:true, 
    city: true,
    address: true,
    state: true,
    zip: true,
    phone: true,
    _id:false
  }, function(error, allItems) {
    if(error) {
      return res.send(404);
    } else {
      console.log('THIS IS ALL ITEMS', allItems);
      res.send(200, allItems);
    }
  });
});

var port = 3000;
app.listen(3000, function(){
  console.log("server listening on....", port);
});

