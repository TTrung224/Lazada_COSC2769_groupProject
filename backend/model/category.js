import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  isTop: { type: Boolean, default: true },
  name: { type: Boolean, require: true },
  parentCategoryId: { type: String, default: null },
  atributes: { type: [String], default: [] }
});

export default model("account", categorySchema);
