const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // อนุญาตให้เรียกใช้จาก origin นี้
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Accept",
};

/* const corsOptions = {
  origin: "*", // อนุญาตทุก Origin
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Accept",
}; */

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", contactRoutes);

// รองรับ preflight requests
app.options("*", cors(corsOptions));

const PORT = process.env.PORT || 3002;

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
