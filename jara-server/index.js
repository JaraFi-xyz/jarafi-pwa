require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/DBConnect");
const app = express();

app.use(
  cors({
    origin: ["*", "http://localhost:5173"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage 🏠");
});

app.use("/api/pin", require("./routes/pin"));

const PORT = process.env.PORT || 6000;

connectDB();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server 🆙 and 🏃‍♂️ on port ${PORT}`));
});
