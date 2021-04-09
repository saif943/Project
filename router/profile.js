const express = require("express");
const router = express.Router();
const {
  Profil,
  deleteProfil,
  GetProfil,
  GetAll,
} = require("../controllers/profile");
const isAuth = require("../middlewares/auth_jwt");

router.post("/Profile", isAuth, Profil);
router.delete("/Profile/:id", isAuth, deleteProfil);
router.get("/Profile/:id", GetProfil);
router.get("/Profile/", GetAll);
module.exports = router;
