const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const sendRequest = express.Router();

sendRequest.use(validateToken);
sendRequest.post("/request");

module.exports = sendRequest;
