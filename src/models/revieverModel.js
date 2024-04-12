const mongoose = require("mongoose");

const recieverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    contact: {
      type: String,
      required: [true, "Please add contact information"],
    },
    founder: {
      type: String,
      required: [false],
    },
    location: {
      type: String,
      required: [true, "Please add the name"],
    },
    description: {
      type: String,
      required: [true, "Please add the name"],
    },
    needs: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Reciever = mongoose.model("Reciever", recieverSchema);

module.exports = Reciever;
