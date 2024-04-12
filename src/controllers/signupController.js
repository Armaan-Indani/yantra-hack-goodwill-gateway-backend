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
    email = emai.toLowerCase();

    if (password.length < 7 || password.length > 20) {
      throw new Error("Password length must be 8 to 20 chars");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const donor = await Donor.create({
      name,
      email,
      phone,
      password: hashedPassword,
      location,
      items,
    });

    if (donor) {
      console.log(`Donor created for ${donor}`);
      res.status(201);
      res.json({ _id: donor.id, email: donor.email });
    } else {
      res.status(400);
      throw new Error("Mentor data is not valid");
    }
  };
} catch (e) {
  res.json({ error: e });
}
