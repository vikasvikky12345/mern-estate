const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const errorHandler = require("../utilis/errorHandler");

const authController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(errorHandler(400, "all fileds are required"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
