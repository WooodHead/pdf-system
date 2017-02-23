'use strict'

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: {
    unique: true,
    type: String
  },
  password: String
});

UserSchema.pre('save', function(next) {
  next();
});

module.exports = mongoose.model('User', UserSchema);
