const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const authController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json("all fields are neccesary");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = authController;
