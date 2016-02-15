var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/favorites', express.static( __dirname + '/client'));
app.use('/fullList', express.static( __dirname + '/services'));
app.use('/', express.static( __dirname + '/getList'));