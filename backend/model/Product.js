const mongoose = require("mongoose");
const categorySchema = require("../model/Category").schema
const productSchema = new mongoose.Schema({
  name : {type: String, require: true},
  img : {type: String, require: true},
  price : {type: Number, require: true},
  category : {type: categorySchema, require: true}
}, {timestamps : true});

module.exports = mongoose.model("product", productSchema);