const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    enterName: {
      type: String,
      required: true,
      trim: true,
    },
    enterEmail: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
     
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("register", userSchema);
