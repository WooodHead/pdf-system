'use strict'

var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishTime: String,
  imgURL: String,
});

BookSchema.pre('save', function(next){
  next()
})

module.exports = mongoose.model('Book', BookSchema);
