const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const users = require("../models/users");
module.exports = mongoose.model("reviews", {
  author: {
    type: objectId,
    ref: "users"
  },
  rating: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    required: [true, "content is required"]
  },
  house: {
    type: objectId,
    ref: "houses"
  }
});
