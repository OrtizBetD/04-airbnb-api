const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("reviews", {
  reviews: [
    {
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
      }
    }
  ]
});
