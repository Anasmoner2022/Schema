var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shippingCost = new Schema({
  adminId: {
    type: Schema.Types.ObjectId
  },
  cost: {
    type: Number
  }
});
