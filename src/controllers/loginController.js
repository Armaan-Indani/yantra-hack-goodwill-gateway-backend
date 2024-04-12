const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Donor = require("../models/donorModel");
const Receiver = require("../models/receiverModel");

const DonorLoginController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields mandatory");
    }
    email = email.trim();
    email = email.toLowerCase();

    const donor = await Donor.findOne({ email });

    if (!donor) {
      throw new Error("Donor not found");
    }

    if (donor && (await bcrypt.compare(password, donor.password))) {
      const accesstoken = jwt.sign(
        {
          donor: {
            name: donor.name,
            email: donor.email,
            contact: donor.contact,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );

      res.status(200);
      res.json({ accesstoken });
    } else {
      res.status(401);
      throw new Error("Email or password is not valid");
    }
  } catch (e) {
    res.json({ error: e.message });
  }
};

const ReceiverLoginController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields mandatory");
    }
    email = email.trim();
    email = email.toLowerCase();

    const receiver = await Receiver.findOne({ email });

    if (!receiver) {
      throw new Error("Receiver not found");
    }

    if (receiver && (await bcrypt.compare(password, receiver.password))) {
      const accesstoken = jwt.sign(
        {
          receiver: {
            name: receiver.name,
            email: receiver.email,
            contact: receiver.contact,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );

      res.status(200);
      res.json({ accesstoken });
    } else {
      res.status(401);
      throw new Error("Email or password is not valid");
    }
  } catch (e) {
    res.json({ error: e.message });
  }
};
