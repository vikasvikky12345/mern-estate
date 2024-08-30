const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const errorHandler = require("../utilis/errorHandler");
const jwt = require("jsonwebtoken");
const authController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(errorHandler(400, "User not found"));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, "Incorrect password"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECERET);

    const { password: hashedPassword, ...others } = user._doc;

    res
      .cookie("accesstoken", token, { httpOnly: true })
      .status(200)
      .json({ message: "Logged in successfully", others });
  } catch (error) {
    next(error);
  }
};

module.exports = { authController, signin };
