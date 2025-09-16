import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/help.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checks if all the field are inputed
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    //password strength validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please use a different email.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user);

    res.status(201).json({
      token,
      success: true,
      message: "Account created successfully!",
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Account not found. Please check your email.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password. Please try again.",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Welcome back! You've successfully logged in.",
      token,
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
};

export const isAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please log in again.",
      });
    }
    res.json({
      success: true,
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Auth check error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error during authentication.",
    });
  }
};

export const logout = async (req, res) => {
  try {
    // If you're using token blacklisting, implement it here
    res.json({
      success: true,
      message: "You've been logged out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during logout.",
    });
  }
};
