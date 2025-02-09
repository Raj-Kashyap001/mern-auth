import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
configDotenv();

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect database: " + error);
  }
})();

app.use(express.json());

app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);

app.listen(5000, () => {
  console.log("Server started at localhost:5000");
});
