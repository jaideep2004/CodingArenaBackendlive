const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false, // Initially set to false
  },
  
   otp: {
    type: Number,
  },
  orders:{
    
    type: [],
    ref: "Order",
}
  


 
});
const User = mongoose.model("user", UserScheme);

module.exports = User; 