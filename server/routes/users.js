//userroute
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

// /users
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const lowercaseUsername = username.toLowerCase();
  //TODO: BYTA TILL let username = username.toLowerCase()

  //TODO: BYT PLATS PÅ IF OCH IF ELSE?
  if (!lowercaseUsername || !password) {
    res.status(400).json("Username and password is required");
  } else if (await User.findOne({ username: lowercaseUsername })) {
    res.status(400).json("this user already exists");
    //TODO: FLYTTA UT DET HÄR TILL EN FUNKTION
  } else {
    const user = new User({ username: lowercaseUsername, password });
    await user.save();
    res.json({ username: lowercaseUsername });
  }
});

module.exports = router;
