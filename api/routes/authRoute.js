const express = require("express");
const { authController, signin } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController);
router.post("/signin", signin);

module.exports = router;
