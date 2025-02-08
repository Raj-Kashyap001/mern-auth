import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API!",
  });
});

app.listen(5000, () => {
  console.log("Server started at localhost:5000");
});
