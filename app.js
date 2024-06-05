const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(express.json()); // ใช้ middleware express.json()

app.use("/api", userRoutes);
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 3001;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
