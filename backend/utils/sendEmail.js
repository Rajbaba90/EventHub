

// utils/sendEmail.js
require('dotenv').config(); // Make sure to load .env
const nodemailer = require("nodemailer");

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "rajpatel20250@gmail.com",  // Your Gmail
    pass: process.env.EMAIL_PASS || "jduinxufbjwaqqmg",        // Your 16-char App Password
  },
});

// Verify connection configuration
transporter.verify((err, success) => {
  if (err) console.log("❌ SMTP Error:", err);
  else console.log("✅ SMTP Server ready to send emails");
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Campus Event Hub" <${process.env.EMAIL_USER || "rajpatel20250@gmail.com"}>`,
      to,
      subject,
      text,
    });
    console.log("✅ Email sent successfully to:", to);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = sendEmail;
