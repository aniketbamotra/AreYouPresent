const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Student } = require("../models/studentModel.js");
const { Attendance } = require("../models/attendanceModel.js");
const { Class } = require("../models/classModel.js");

const classRouter = express.Router();

// localhost:5000/api/class/:classId
classRouter.post(
  "/:classId",
  expressAsyncHandler(async (req, res) => {
    try {
      const addClass = new Class({
        name: req.body.name,
        class_teacher: req.body.class_teacher,
      });
      const addedClass = await addClass.save();
      res.send({
        name: addedClass.name,
        class_teacher: addedClass.class_teacher,
      });
    } catch (err) {
      console.log(err);
    }
  })
);

exports.classRouter = classRouter;
