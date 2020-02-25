const mongoose = require("mongoose");
require("./users");

module.exports = mongoose.model("reviews", {
  /*author: {
        name: {
          type: String,
          required: [true, "name is required"]
        },*/

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },

  /*  email: {
          type: String,
          required: [true, "email is required"]
        },
        avatar: {
          type: String
        },
        location: {
          type: String
        },
        password: {
          type: String,
          required: [true, "password is required"]
        }*/

  rating: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    required: [true, "content is required"]
  },

  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "houses"
  }
});
