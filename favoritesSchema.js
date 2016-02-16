// schema
var mongoose = require('mongoose');

var favoritesSchema = new mongoose.Schema({
  name: {type: String, unique: true}
});

module.exports = mongoose.model('favorites', favoritesSchema);
