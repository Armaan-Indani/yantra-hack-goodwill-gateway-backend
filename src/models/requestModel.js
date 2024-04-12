const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    items: {
      type: String,
      required: [true, "Please enter all the fields"],
    },
    description: {
      type: String,
      required: [true, "Please enter all the fields"],
    },
    image_link: {
      type: String,
      required: [true, "Please enter all the fields"],
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
