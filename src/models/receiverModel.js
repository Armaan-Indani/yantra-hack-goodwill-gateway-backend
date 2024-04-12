const mongoose = require("mongoose");

const receiverSchema = mongoose.Schema(
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
    founder: {
      type: String,
      required: [false],
    },
    location: {
      type: String,
      required: [true, "Please add the location"],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
    needs: [{ type: String }],
    pendingRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "request",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Receiver = mongoose.model("Receiver", receiverSchema);

module.exports = Receiver;
