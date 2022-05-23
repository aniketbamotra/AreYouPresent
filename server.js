const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { studentRouter } = require("./routes/studentRouter");
const { classRouter } = require("./routes/classRouter");
const { authRouter } = require("./routes/authRouter");
const { attendanceRouter } = require("./routes/attendanceRouter");

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/students", studentRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/class", classRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Server Online!",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Online!");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

//   APIs
// create new student in Student
// create new student in Attendance
// create new class in Class
// add teacher in class
