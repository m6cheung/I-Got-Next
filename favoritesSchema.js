// schema
var mongoose = require('mongoose');

var favoritesSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  city: String,
  address: String,
  state: String,
  zip: String,
  phone: String,
  url: String
});

module.exports = mongoose.model('favorites', favoritesSchema);
