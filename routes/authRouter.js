const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/userModel.js");

const authRouter = express.Router();
const OTP = "645889";

// http://localhost:5000/api/auth/register
authRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ phone: req.body.phone });
      if (user && req.body.otp === OTP) {
        res.status(200).json({ status: "Success", message: user });
      } else {
        if (req.body.otp === OTP) {
          const newUser = User({
            name: req.body.name,
            phone: req.body.phone,
          });
          console.log(newUser);
          await newUser.save();
          res.status(200).json({ status: "Success", message: newUser });
        } else {
          res
            .status(404)
            .json({ status: "Failed", message: "Invalid Request!" });
        }
      }
    } catch (err) {
      res.status(500).json({ status: "Error", message: err.message });
    }
  })
);

authRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ phone: req.body.phone });
      if (user && req.body.otp === OTP) {
        res.status(200).json({ status: "Success", message: user });
      } else {
        res.status(404).json({ status: "Failed", message: "Invalid Request!" });
      }
    } catch (err) {
      res.status(500).json({ status: "Error", message: err.message });
    }
  })
);

exports.authRouter = authRouter;
