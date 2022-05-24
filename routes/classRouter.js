const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Student } = require("../models/studentModel.js");
const { Attendance } = require("../models/attendanceModel.js");
const { Class } = require("../models/classModel.js");

const classRouter = express.Router();

// http://localhost:5000/api/class/new-class
classRouter.post(
  "/new-class",
  expressAsyncHandler(async (req, res) => {
    try {
      const newClass = new Class({
        name: req.body.name,
        class_teacher: req.body.class_teacher,
      });
      await newClass.save();
      res.status(200).json({ status: "Success", message: newClass });
    } catch (err) {
      res.status(500).json({ status: "Error", message: err.message });
    }
  })
);

exports.classRouter = classRouter;
