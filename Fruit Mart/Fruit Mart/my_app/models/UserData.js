const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  wishlist: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      }
    }
  ],
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1, // Ensures quantity is at least 1
      }
    }
  ]
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;