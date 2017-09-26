var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var NamesSchema = new mongoose.Schema({
    name: {type: String, index: true, unique: true}
});


NamesSchema.plugin(timestamps);
module.exports = mongoose.model('names', NamesSchema);