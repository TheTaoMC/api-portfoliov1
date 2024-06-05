const express = require('express');
const { createContact, getContacts } = require('../controllers/contactController');
const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getContacts);

module.exports = router;
