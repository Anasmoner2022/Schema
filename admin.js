var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var administrator = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  passward: {
    type: String,
    required: true
  },
  typeId: {
    role: {
      type: String,
      required: true
    },
    permissions: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
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
