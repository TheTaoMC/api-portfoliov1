const express = require("express");
const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

router.post("/contacts", createContact);
router.get("/contacts", getContacts);
router.delete("/contacts/:id", deleteContact);

module.exports = router;
