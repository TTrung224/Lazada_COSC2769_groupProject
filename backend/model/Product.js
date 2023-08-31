const mongoose = require("mongoose");
const categorySchema = require("../model/Category").schema
const productSchema = new mongoose.Schema({
  seller : {type: mongoose.Schema.Types.ObjectId, ref:'account', require: true},
  name : {type: String, require: true},
  imgName : {type: String, require: true},
  price : {type: Number, require: true},
  description : {type: String, require: true},
  category : {type: mongoose.Schema.Types.ObjectId, ref: 'category', require: true},
  attributes : Array
}, {timestamps : true});

module.exports = mongoose.model("product", productSchema);