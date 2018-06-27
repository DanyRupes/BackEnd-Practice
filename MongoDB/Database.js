var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myMongo")

var Schema = mongoose.Schema;
console.log("Connecting...")
mongoose.connection.once("open", function () {
    console.log("database connected")
   
  })
  var account = new Schema({
    "firstName" : String,
    "lastName" : String,
    "email" : String,
    "password":Number,
    place : String,
})
  var college = new Schema({
    "firstName" : String,
    "lastName" : String,
    "email" : String,
    "password":Number,
    "country" : String,
})
  var userAccount = mongoose.model("UserAccounts", account)
  var collegeDetails = mongoose.model("College_Details", college)
module.exports = {userAccount:userAccount,collegeDetails:collegeDetails};