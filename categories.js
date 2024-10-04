var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categories = new Schema({
  name(unique): {
    type: String,
    required: true
  },
  discription: {
    type: String
  },
  parentCategory: {
    type: Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    required: true
  },
  updateAt: {
    type: Date,
    required: true
  }
});
