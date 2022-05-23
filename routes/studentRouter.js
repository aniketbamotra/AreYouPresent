const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Student } = require("../models/studentModel.js");
const { Attendance } = require("../models/attendanceModel.js");

const studentRouter = express.Router();

// localhost:5000/api/students/add/:classId
studentRouter.post(
  "/add/:classId",
  expressAsyncHandler(async (req, res) => {
    try {
      const student = new Student({
        name: req.body.name,
        roll_no: req.body.roll_no,
        class: req.body.class,
      });
      const newStudent = await student.save();
      res.send({
        name: newStudent.student,
        roll_no: newStudent.class,
        class: newStudent.date,
      });
    } catch (err) {
      console.log(err);
    }
  })
);

// localhost:5000/api/students/fetch/abcdef
studentRouter.get(
  "/fetch/:classId",
  expressAsyncHandler(async (req, res) => {
    try {
      const students = await Student.find({ class: req.params.classId });
      res.status(200).json({ message: "Success", data: students });
    } catch (error) {
      res.status(500).json({ message: "Error", data: error.message });
    }
  })
);

// localhost:5000/api/students/fetch/present
// body :{ classId: "", date: ""}
studentRouter.get(
  "/fetch/present",
  expressAsyncHandler(async (req, res) => {
    const classId = req.body.classId;
    const date = req.body.date;

    try {
      const students = await Attendance.find({ class: classId, date: date });
      res.status(200).json({ message: "Success", data: students });
    } catch (error) {
      res.status(500).json({ message: "Error", data: error.message });
    }
  })
);

exports.studentRouter = studentRouter;
