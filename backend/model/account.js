import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  token: { type: String },
  type: { type: String, enum: ['student', 'lecturer', 'technician'], require: true}, // (lecturer / student / technician)
});

export default model("account", accountSchema);
