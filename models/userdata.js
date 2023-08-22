const mongoose = require("mongoose");

const userdataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamp: true,
  }
);

const Userdata = mongoose.model("Userdata", userdataSchema);
module.exports = Userdata;
