const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Student } = require("../models/studentModel.js");
const { Attendance } = require("../models/attendanceModel.js");

const attendanceRouter = express.Router();

// localhost:5000/api/attendance/present/:classId
attendanceRouter.post(
  "/present/:classId",
  expressAsyncHandler(async (req, res) => {
    try {
      const presentStudent = new Attendance({
        student: req.body.student,
        class: req.body.classId,
        date: req.body.date,
      });
      const pStudent = await presentStudent.save();
      res.send({
        student: pStudent.student,
        class: pStudent.class,
        date: pStudent.date,
      });
    } catch (err) {
      console.log(err);
    }
  })
);

exports.attendanceRouter = attendanceRouter;
