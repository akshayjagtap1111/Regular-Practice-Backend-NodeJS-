const { DB} = require("./index");

const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    return await connect(DB);
  } catch (e) {
    console.log("error form connection :", e.message);
  }
};

module.exports = connectDB;