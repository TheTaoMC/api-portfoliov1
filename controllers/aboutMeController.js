const AboutMe = require('../models/aboutMe');

exports.createAboutMe = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // เช็คค่าที่ได้รับมาว่าไม่เป็น null หรือ undefined
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "Name, email,Subject, and message are required" });
    }

    const aboutMe = await AboutMe.create({ name, email, subject, message });
    res.status(201).json(aboutMe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* exports.getAboutMe = async (req, res) => {
  try {
    const data = await AboutMe.findOne({ where: { id: 1 } });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */

/* exports.deleteAboutMe = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutMe = await AboutMe.findByPk(id);

    if (!aboutMe) {
      return res.status(404).json({ error: "AboutMe not found" });
    }

    await aboutMe.destroy();
    res.status(204).json(); // ส่งสถานะ 204 (No AboutMe) เมื่อการลบสำเร็จ
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; */