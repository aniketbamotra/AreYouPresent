const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Student } = require("../models/studentModel.js");
const { Attendance } = require("../models/attendanceModel.js");
const { Auth } = require("../models/authModel.js");

const authRouter = express.Router();

authRouter.post(
  "/signUp",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

exports.authRouter = authRouter;
