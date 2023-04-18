const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/user.routes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb://127.0.0.1:27017/react-starter-test";
mongoose.connect(uri).then(
  () => {
    console.log("Connection is Successful");
  },
  (err) => {
    console.error("Connection to mongodb is error", err?.message);
  }
);

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
