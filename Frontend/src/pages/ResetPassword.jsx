import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match !!");
      return;
    }

    // ✅ Clear inline messages before showing toast
    setMessage("");

    // ✅ Toast for success only
    toast.success("Password successfully reset !!", {
      autoClose: 1000,
      className: "custom-toast",
      progressClassName: "custom-toast-progress",
      icon: false,
    });
  };

  return (
    <>
      <Navbar type="login" />
      <div className="reset-container">
        <div className="reset-card">
          <h2 className="reset-title">Reset Password</h2>
          <p className="reset-subtitle">Campus Event Hub</p>

          <form className="reset-form" onSubmit={handleSubmit}>
            <div className="reset-input-wrapper">
              <label>Password</label>
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="reset-input-wrapper">
              <label>Confirm Password</label>
              <div className="input-with-icon">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <button type="submit" className="reset-btn">
              Save Password
            </button>
          </form>

          {/* ✅ Inline message for errors only */}
          {message && <div className="reset-message">{message}</div>}
        </div>
      </div>
    </>
  );
}
