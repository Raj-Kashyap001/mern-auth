import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
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

app.use(express.json());

app.use(userRoutes);

app.listen(5000, () => {
  console.log("Server started at localhost:5000");
});
