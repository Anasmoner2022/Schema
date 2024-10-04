var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cart = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  couponCodeId: {
    type: Schema.Types.ObjectId
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});
