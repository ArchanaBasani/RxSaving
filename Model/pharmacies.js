var mongoose = require('mongoose');

var pharmacySchema = new mongoose.Schema({

}, {strict: false});
//model name "pharmacies" should be the collection name in mongoDB
module.exports = mongoose.model('pharmacies', pharmacySchema);