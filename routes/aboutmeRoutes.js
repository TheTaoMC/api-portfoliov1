const express = require("express");
const {
  createAboutMe,
  getAboutMe,
  deleteAboutMe,
} = require("../controllers/aboutMeController");
const router = express.Router();

router.post("/aboutme", createAboutMe);
//router.get("/aboutme", getAboutMe);
//router.delete("/aboutme/:id", deleteAboutMe);

module.exports = router;
