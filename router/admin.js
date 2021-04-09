const express = require("express");
const { Signupadmin, SignInadmin } = require("../controllers/admin");
const router = express.Router();
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");
const User = require("../models/User");

router.post("/signin", signinValidation(), validation, SignInadmin);
router.get("/current", isAuth, async (req, res) => {
  try {
    const user = await User.find({ _id: req.user._id }).populate("id_profile");

    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
