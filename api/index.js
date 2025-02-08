import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
configDotenv();

const app = express();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API!",
  });
});

app.listen(5000, () => {
  console.log("Server started at localhost:5000");
});
