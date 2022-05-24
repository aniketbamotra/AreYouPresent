const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
exports.User = User;
