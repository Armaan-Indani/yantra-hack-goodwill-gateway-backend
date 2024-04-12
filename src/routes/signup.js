const express = require("express");
const SignUpController = require("../controllers/signupController");

const signup = express.Router();

signup.post("/donor", SignUpController.donor);
signup.post("/reciever", SignUpController.reciever);

module.exports = signup;
