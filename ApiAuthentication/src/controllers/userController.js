const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/index");
const user = require("../models/user");
const key = require("../models/key");

router.get("/all", async (req, res) => {
  try {
    const User = await user.find().lean().exec();

    res.status(201).send(User);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      success: false,
    });
  }
});

router.post("/getplan/:type", async (req, res) => {
  try {
    //assign api key to the user

    //with json-webtoken
    // ushould get uoser from current session and then form new user object
    let user = {
      name: "akshay",
      age: "23",
      plan: req.params.type,
    };

    let mykey = jwt.sign(user, SECRET);
    //store key to the database wrt that user
    const newKey = new key({ key: mykey });
    await newKey.save();

    return res.status(201).json({
      message: "you have succesfully got an key",
      key: newKey,
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
      success: false,
    });
  }
});

module.exports = router;
