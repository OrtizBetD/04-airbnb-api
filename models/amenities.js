const mongoose = require("mongoose");

module.exports = mongoose.model("amenities", {
  amenities: [
    {
      name: {
        type: String,
        required: [true, "name is required"]
      },
      icon: {
        type: String,
        required: [true, "icon is required"]
      }
    }
  ]
});
