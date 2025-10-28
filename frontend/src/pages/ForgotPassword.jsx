import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();

    // ✅ If email empty → show inline message only
    if (email.trim() === "") {
      setErrorMessage("Please enter your email.");
      return;
    }

    // ✅ Clear inline error and show toast only
    setErrorMessage("");
    console.log("OTP sent to:", email);

    // ✅ Toast for success (closes in 1 second)
    toast.success("OTP sent successfully. Check your email!", {
      className: "custom-toast",
      progressClassName: "custom-toast-progress",
      icon: false,
      autoClose: 800, // toast disappears faster (1 sec)
    });

    // Redirect to OTP page after delay
    setTimeout(() => navigate("/otp"), 1200);
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
                  setErrorMessage("");
                }}
              />
            </div>

            <button type="submit" className="send-btn">
              Send OTP
            </button>

            {/* ✅ Inline message ONLY for error */}
            {errorMessage && (
              <div className="forgot-message error-message">
                {errorMessage}
              </div>
            )}
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
