var mongoose = require('mongoose');

var db = 'mongodb://mppmachine:749343S3v3n@ds149414.mlab.com:49414/mpponline'

mongoose.Promise = global.Promise;
mongoose.connect(db);

module.exports = {
  mongoose
};
