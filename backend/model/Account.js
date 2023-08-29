const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  fullName: { type: String, require: true  },
  email: { type: String, unique: true, require: true },
  phone: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  address: { type: String },
  type: { type: String, enum: ['seller', 'admin', 'customer'], require: true},
  sellerStatus: { type: String, enum: ['pending', 'accepted', 'rejected']},
});
module.exports = mongoose.model("account", accountSchema);