const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/userController/signup");
const { login } = require("../controllers/userController/login");
const { contact } = require("../controllers/userController/contact");

// user Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/contact", contact);
module.exports = router;
