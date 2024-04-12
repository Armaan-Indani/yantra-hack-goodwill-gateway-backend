const express = require("express");
const LoginController = require("../controllers/loginController");

const login = express.Router();

// login.post("/", LoginController);
login.post("/reciever", LoginController.reciever);
login.post("/donor", LoginController.donor);

module.exports = login;
