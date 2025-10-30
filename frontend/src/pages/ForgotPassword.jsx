


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

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setErrorMessage("Please enter your email.");
      return;
    }

    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("📩 OTP sent successfully! Check your email.", {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
        setTimeout(() => navigate("/otp"), 1500);
      } else {
        toast.error(data.message || "Failed to send OTP.", {
          position: "top-center",
          theme: "colored",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again later.", {
        position: "top-center",
        theme: "colored",
      });
    }
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

            {errorMessage && <div className="forgot-message error-message">{errorMessage}</div>}
          </form>

          <button className="go-back" onClick={() => navigate("/login")}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
