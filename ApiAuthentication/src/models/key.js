const { Schema, model } = require("mongoose");

const KeySchema = new Schema(
  {
    key: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("keys", KeySchema);
