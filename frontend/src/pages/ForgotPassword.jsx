

// final code 

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(res.data.message || "OTP sent successfully!");
      setTimeout(() => navigate("/otp"), 1000);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to send OTP. Try again.");
    }
  };

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar showLogin={false} />
      <div className="forgot-container">
        <div className="forgot-card">
          <h1 className="forgot-title">Forgot Password?</h1>
          <h3 className="forgot-subtitle">Campus Event Hub</h3>

          <form onSubmit={handleSendOtp}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
              />
            </div>

            <button type="submit" className="send-btn">
              Send OTP
            </button>

            {message && <div className="forgot-message">{message}</div>}
          </form>

          <button className="go-back" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
