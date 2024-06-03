import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://priyanshu:qwerty1234%40@bitblog.s7rwmfh.mongodb.net/bitblog?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});

app.use("/api/user", userRoutes);
