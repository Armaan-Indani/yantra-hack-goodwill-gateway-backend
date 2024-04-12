const mongoose = require("mongoose");

const donorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    contact: {
      type: String,
      required: [true, "Please add contact information"],
    },
    location: {
      type: String,
      required: [true, "Please add the name"],
    },
    items: [
      {
        type: String,
        description: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
