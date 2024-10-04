var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var inventory = new Schema({
  productId: {
    type: String,
    required: true
  },
  adminId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  features: [{
    type: String,
    required: true
  }],
  categories: [{
    type: String,
    required: true
  }],
  skus: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});
