const mongoose = require("mongoose");

const donorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email id"],
      unique: [true, "Email id already in use"],
    },
    phone: {
      type: String,
      required: [true, "Please add contact number"],
      unique: [true, "Phone number already in use"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      validate: {
        validator: function (str) {
          return str.length > 7;
        },
        message: "At least 8 charecters required",
      },
    },
    location: {
      type: String,
      required: [true, "Please add the name"],
    },
    // items: [
    //   {
    //     item: { type: String },
    //     description: { type: String },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
