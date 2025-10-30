import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OtpVerification.css";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [message, setMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Countdown timer handling
  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerRef.current);
      setResendDisabled(false);
    }
  }, [countdown]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      setMessage("Please enter the OTP.");
      return;
    }

    setIsVerifying(true);
    setMessage("");

    // Simulate OTP verification delay
    setTimeout(() => {
      console.log("Verifying OTP:", otp);
      setIsVerifying(false);

      // Show toast only for successful verification
      toast.success("OTP Verified Successfully !!", {
        autoClose: 1000,
        className: "custom-toast",
        progressClassName: "custom-toast-progress",
        icon: false,
      });

      // Redirect after toast
      setTimeout(() => {
        navigate("/reset-password");
      }, 1200);
    }, 1000);
  };

  const handleResend = () => {
    if (resendDisabled) return;

    console.log("Resent OTP to registered email");
    setMessage("OTP resent. Check your email.");
    setResendDisabled(true);
    setCountdown(5);

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <Navbar type="register" />
      <div className="otp-container">
        <div className="otp-card">
          <h1 className="otp-title">OTP Verification</h1>
          <div className="otp-subtitle">Campus Event Hub</div>
          <p className="otp-instruction">
            Enter the code sent to your email ID :
          </p>

          <form className="otp-form" onSubmit={handleVerify}>
            <div className="otp-input-wrapper">
              <input
                type={showOtp ? "text" : "password"}
                placeholder="Please enter OTP here"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="otp-input"
              />
              <button
                type="button"
                className="otp-eye"
                onClick={() => setShowOtp((s) => !s)}
                aria-label={showOtp ? "Hide OTP" : "Show OTP"}
              >
                {showOtp ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <button
              type="submit"
              className={`otp-verify-btn ${isVerifying ? "pop" : ""}`}
            >
              {isVerifying ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          {/* Inline messages for resend/error only */}
          {message && <div className="otp-message">{message}</div>}

          <div className="otp-resend-row">
            <button
              className="otp-resend-btn"
              onClick={handleResend}
              disabled={resendDisabled}
            >
              {resendDisabled ? `Resend in ${countdown}s` : "Resend Code"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
