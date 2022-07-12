const cors = require("cors");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

const connectDB = require("./src/config/db");
const Usercontroller = require("./src/controllers/userController")

app.use(cors());

app.use(bodyParser.json());

app.use("/check", (req, res) => {
  res.send("hello user");
});

app.use("/user",Usercontroller)

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
  connectDB();
});
