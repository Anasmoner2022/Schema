var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var payments = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  orderId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: {
      type: String,
      required: true
    },
    details: {
      cardBrand: {
        type: String,
        required: true
      },
      lastFour: {
        type: String,
        required: true
      },
      expirationMonth: {
        type: Number,
        required: true
      },
      expirationYear: {
        type: Number,
        required: true
      },
      cvvVerified: {
        type: Boolean,
        required: true
      },
      required: true
    },
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});
