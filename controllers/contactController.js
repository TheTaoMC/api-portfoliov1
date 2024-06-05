const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // เช็คค่าที่ได้รับมาว่าไม่เป็น null หรือ undefined
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
