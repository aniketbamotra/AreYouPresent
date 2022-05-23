const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("Auth", AuthSchema);
exports.Auth = Auth;
