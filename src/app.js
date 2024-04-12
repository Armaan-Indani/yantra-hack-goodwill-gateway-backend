const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/connectToDB");
const dotenv = require("dotenv").config();

connectToDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/signup", signup);
// app.use("/login", login);
// app.use("/profile", profile);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
