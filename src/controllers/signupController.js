const express = require("express");
const Donor = require("../models/donorModel");
const Receiver = require("../models/receiverModel");
const bcrypt = require("bcrypt");

const DonorSignUpConteroller = async (req, res) => {
  try {
    let { name, email, phone, password, location } = req.body;
    // let { name, email, phone, password, location, items } = req.body;
    if (!name || !email || !phone || !password || !location) {
      res.status(400);
      throw new Error("All fields needed");
    }

    const donorAvailable = await Donor.findOne({ email });

    if (donorAvailable) {
      res.status(400);
      throw new Error("Email is in use");
    }

    email = email.trim();
    email = email.toLowerCase();

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
      // items,
    });

    if (donor) {
      console.log(`Donor created for ${donor}`);
      res.status(201);
      res.json({ _id: donor.id, email: donor.email });
    } else {
      res.status(400);
      throw new Error("Donor data is not valid");
    }
  } catch (e) {
    res.status(400);
    res.json({ error: e.message });
  }
};

const ReceiverSignUpConteroller = async (req, res) => {
  try {
    let {
      name,
      email,
      phone,
      password,
      founder,
      location,
      description,
      needs,
    } = req.body;
    if (!name || !email || !phone || !password || !location || !description) {
      res.status(400);
      throw new Error("All fields needed");
    }

    const receiverAvailable = await Receiver.findOne({ email });

    if (receiverAvailable) {
      res.status(400);
      throw new Error("Email is in use");
    }

    email = email.trim();
    email = email.toLowerCase();

    if (password.length < 7 || password.length > 20) {
      throw new Error("Password length must be 8 to 20 chars");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const receiver = await Receiver.create({
      name,
      email,
      phone,
      password: hashedPassword,
      founder,
      location,
      description,
      needs,
    });

    if (receiver) {
      console.log(`Receiver created for ${receiver}`);
      res.status(201);
      res.json({ _id: receiver.id, email: receiver.email });
    } else {
      res.status(400);
      throw new Error("Receiver data is not valid");
    }
  } catch (e) {
    res.status(400);
    res.json({ error: e.message });
  }
};

exports.donor = DonorSignUpConteroller;
exports.reciever = ReceiverSignUpConteroller;
