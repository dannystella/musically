const mongoose = require('mongoose');
const creds = require('./creds');


mongoose.connect(`mongodb://${creds.user}:${creds.password}@ds233970.mlab.com:33970/reventmusic`);

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  summary: String,
});

var artistSchema = mongoose.Schema({
  bandname: {type: String, unique: true},
  bandgenre: String,
  bandsummary: String,
})


let User = mongoose.model('User', userSchema);
let Artist = mongoose.model('Artist', artistSchema);

let helpers = {};

helpers.artistHelpers = {};
helpers.userHelpers = {};

helpers.artistHelpers.save = (schema) => {
  return Artist.create(schema, function(err) {
      if(err){
          if (err.code == 11000) {
              return ['Resource document already exists.'];
          }
          
          console.log(err);
      } else {
          console.log("success");
      }
  });
}

helpers.artistHelpers.grabAll = () => {
  return Artist.find({}).exec();
}

helpers.userHelpers.save = (schema) => {
  return User.create(schema, function(err) {
      if(err){
          if (err.code == 11000) { // unique index conflict
              return ['Resource document already exists.'];
          }
          
          console.log(err);
      } else {
          console.log("success");
      }
  });
}

module.exports = helpers;