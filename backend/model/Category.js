import { Schema, model } from "mongoose";

const categorySchema = new mongoose.Schema({
  isTop: { type: Boolean, default: true },
  name: { type: Boolean, require: true },
  parentCategoryId: { type: String, default: null },
  atributes: { type: [String], default: [] }
});

module.exports = mongoose.model("category", categorySchema);