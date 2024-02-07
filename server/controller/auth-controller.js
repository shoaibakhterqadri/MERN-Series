const { response } = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        msg: "User is already exist",
      });
    }

    const user = await User.create({ username, email, phone, password });

    return res.status(200).json({
      msg: "Reggistered successfully",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log("Register Error " + error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(404).json({ msg: "User not Found" });
    }
    const user = await bcrypt.compare(password, userExists.password);
    if (user) {
      res.status(200).json({
        msg: "User successfully",
        token: await userExists.generateToken(),
        userId:userExists._id.toString(),
      });
    } else {
      return res.status(404).json({ msg: "Password is incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Internal server error" });
  }
};

module.exports = { login, register };
