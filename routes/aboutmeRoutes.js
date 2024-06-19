const express = require("express");
const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/aboutMeController");
const router = express.Router();

router.post("/aboutme", createContact);
router.get("/aboutme", getContacts);
router.delete("/aboutme/:id", deleteContact);

module.exports = router;
