const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // เช็คค่าที่ได้รับมาว่าไม่เป็น null หรือ undefined
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "Name, email,Subject, and message are required" });
    }

    const contact = await Contact.create({ name, email, subject, message });
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

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    await contact.destroy();
    res.status(204).json(); // ส่งสถานะ 204 (No Content) เมื่อการลบสำเร็จ
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
