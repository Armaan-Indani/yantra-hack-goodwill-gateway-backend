const express = require("express");
const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorModel");
const Reciever = require("../models/recieverModel");
const bcrypt = require("bcrypt");

try {
  const DonorSignUpConteroller = async (req, res) => {
    let { name, email, phone, password, location, items } = req.body;
    if (!name || !email || !phone || !password || !location) {
      res.status(200);
      throw new Error("All fields needed");
    }

    const donorAvailable = await Donor.findOne({ email });

    if (donorAvailable) {
      res.status(400);
      throw new Error("Email is in use");
    }

    email = email.trim();
  };
} catch (e) {
  res.json({ error: e });
}

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });
