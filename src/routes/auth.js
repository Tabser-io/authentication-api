const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/signup", async (req, res) => {
  try {
    const { first_name, second_name, email, password } = req.body;

    if (!first_name) {
      res.status(400).send("first name input is missing");
    } else if (!second_name) {
      res.status(400).send("second name input is missing");
    } else if (!email) {
      res.status(400).send("email input is missing");
    } else if (!password) {
      res.status(400).send("password input is missing");
    }
  } catch (err) {
    res.status(400).send("error during sign up");
  }
});

router.get("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).send("email input is missing");
    } else if (!password) {
      res.status(400).send("passowrd input is missing");
    }
  } catch (err) {
    res.status(400).send("error during sign in");
  }
});

module.exports = router;
