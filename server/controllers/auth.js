import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../mongodb/models/user.js";
import * as dotenv from "dotenv"
dotenv.config()
/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
        name ,  
        userName,
        email,
        phone ,
        passWord , 
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(passWord, salt);

    const newUser = await  User.create({
        name,
        email,
        userName,
        phone,
        passWord: passwordHash,
        allItems:[]
    });
    console.log(newUser)
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    console.log(req.body)
    const { userName, passWord } = req.body;
    const user = await User.findOne({ userName: userName });
    console.log("found you")
    if (!user) return res.status(400).json({ msg: "User does not exist. " });
    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log(token)
    delete user.passWord;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};