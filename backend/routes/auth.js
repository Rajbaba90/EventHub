 

// routes/auth.js
const express = require('express');
const router = express.Router();

const {
  register,
  login,
  me,
  forgotPassword,
  verifyOTP,
  resetPassword
} = require('../controllers/authController');

const auth = require('../middleware/auth');
// AUTH ROUTES
// Register
router.post('/register', register);
// Login
router.post('/login', login);
// Profile
router.get('/me', auth, me);
// Forgot Password
router.post('/forgot-password', forgotPassword);
// Verify OTP
router.post('/verify-otp', verifyOTP);
// Reset Password
router.post('/reset-password', resetPassword);

module.exports = router;
