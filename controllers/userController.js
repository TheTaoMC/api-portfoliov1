const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    console.log(req.body);

    // เช็คค่าที่ได้รับมาว่าไม่เป็น null หรือ undefined
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
