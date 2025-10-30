

// controllers/authController.js
const bcrypt = require('bcryptjs'); 
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

//--------------------------
// REGISTER FUNCTION
//--------------------------
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role.toUpperCase(),
    });

    // Send welcome email
    await sendEmail(
      email,
      "Welcome to Campus Event Hub",
      `Hello ${name}, your account has been created successfully!`
    );

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

//--------------------------
// LOGIN FUNCTION (placeholder)
//--------------------------
exports.login = (req, res) => res.send("Login route working");

//--------------------------
// GET CURRENT USER FUNCTION (placeholder)
//--------------------------
exports.me = (req, res) => res.send("Me route working");

//--------------------------
// FORGOT PASSWORD (Send OTP)
//--------------------------
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000);
    user.resetOTP = otp;
    user.otpExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    await sendEmail(email, "Password Reset OTP", `Your OTP is: ${otp}`);
    res.status(200).json({ message: "OTP sent successfully to your email" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

//--------------------------
// VERIFY OTP (placeholder)
//--------------------------
exports.verifyOTP = (req, res) => res.send("Verify OTP route working");

//--------------------------
// RESET PASSWORD (placeholder)
//--------------------------
exports.resetPassword = (req, res) => res.send("Reset password route working");
