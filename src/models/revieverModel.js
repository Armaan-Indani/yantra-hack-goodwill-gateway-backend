const mongoose = require("mongoose");

const menteeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
  },
  {
    timestamps: true,
  }
);

const Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;
