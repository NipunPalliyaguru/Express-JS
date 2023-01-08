const mongoose = require('mongoose');
var studentSchema= mongoose.Schema({
    studentID:Number,
    fname:String,
    lname:String,
    dob:String,
    dep:String
  });
  
  var StudentModel= mongoose.model("Student",studentSchema);
  

  module.exports= StudentModel;