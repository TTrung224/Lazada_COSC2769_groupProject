const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  name: { type: String, require: true },
  parentCategoryId: { type: mongoose.Schema.Types.ObjectId, default: null },
  attributes: {
    type: Array, default: []
  }
});

module.exports = {
  schema : categorySchema, 
  model : mongoose.model("category", categorySchema)
};