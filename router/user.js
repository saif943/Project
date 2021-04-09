const express = require("express");
const router = express.Router();
const { Signup, SignIn } = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");
const User = require("../models/User");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id }).populate(
      "id_profile"
    );

    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
