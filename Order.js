const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  cart: [
    {
      id: Number,
      title: String,
      price: Number,
      image: String,
    },
  ],
  user: {
    
    type: String,
    ref: "User",
    required: true,
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order; // Export the Order model
