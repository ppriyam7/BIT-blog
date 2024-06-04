import { createRequire } from "module";
import User from "../models/user.model.js";
const require = createRequire(import.meta.url);
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newuser = new User({ username, email, password });
  await newuser.save();
  res.json({ message: "Sign-up successful" });
};
