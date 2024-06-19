const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const aboutmeRoutes = require("./routes/aboutmeRoutes");
const app = express();

const allowedOrigins = ["http://localhost:3000", "https://thetaomc.xyz"];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Accept,Authorization",
};

/* const corsOptions = {
  origin: ["http://localhost:3002", "https://thetaomc.xyz"], // อนุญาตให้เรียกใช้จาก origin นี้
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Accept",
}; */

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
app.use("/api", aboutmeRoutes);

// รองรับ preflight requests
app.options("*", cors(corsOptions));

const PORT = process.env.PORT || 3003;

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
