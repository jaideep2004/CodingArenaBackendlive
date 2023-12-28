const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image : {
    type: String, 
    required : true
  },
  pdf : {
    type: String, 
    required : true
  },
  video : {
    type: String, 
    required : true
  },
  price : {
    type : Number , 
    required : true 
  },
  
  students : {
    type: Number , 
    default : 0 
  },
  rating : {
    type : Number, 
    default : 4.9 , 
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Course = mongoose.model("Course", CourseSchema);

module.exports = Course; 