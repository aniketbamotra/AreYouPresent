const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId },
    class: { type: mongoose.Schema.Types.ObjectId },
    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
exports.Attendance = Attendance;
