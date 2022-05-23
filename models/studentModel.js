const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    roll_no: { type: Number, required: true, unique: true },
    class: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
exports.Student = Student;
