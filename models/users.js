const mongoose = require("mongoose");

module.exports = mongoose.model("users", {
  email: {
    type: String,
    required: [true, "email is required"],
    select: false
  },
  avatar: {
    type: String
  },
  location: {
    type: String
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false
  },

  name: {
    type: String,
    required: [true, "name is required"]
  }
});
