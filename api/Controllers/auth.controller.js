import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a user
export const register = async (req, res, next) => {
  try {
    const { email, password, username, country } = req.body;

    // Check for all required fields
    if (!email || !password || !username || !country) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).json({ message: "New User Created Successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
};

// Login a user
export const login = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    if (!password || (!email && !username)) {
      return res
        .status(400)
        .json({ message: "Please provide either email or username with password" });
    }

    let user;
    if (email) {
      user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email or Password is Wrong" });
      }
    } else {
      user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Username or Password is Wrong" });
      }
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ 
        message: email 
          ? "Email or Password is Wrong" 
          : "Username or Password is Wrong" 
      });
    }

    const token = jwt.sign(
      { userId: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY
    );

    const { password: userPassword, ...rest } = user._doc;

    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Logged in successfully", ...rest });
      
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
};

// Logout a user
export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
