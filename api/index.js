import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://priyanshu:qwerty1234%40@bitblog.s7rwmfh.mongodb.net/bitblog?retryWrites=true&w=majority"
);

const app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
