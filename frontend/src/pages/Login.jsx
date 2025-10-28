
//------ final code
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Remove scroll for login page only
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll
    return () => {
      document.body.style.overflow = "auto"; // restore scroll on unmount
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setMessage("Please enter your username and password.");
      return;
    }
    setMessage("Login successful !!");
  };

  return (
    <>
      <Navbar type="register" />
      <div className="login-container">
        <div className="auth-box">
          <h2>Welcome!</h2>
          <p>Sign in to Campus Event Hub</p>

          <form onSubmit={handleSubmit}>
            <label>User name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="auth-options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn full-width-btn">
              Login
            </button>

            {message && <div className="auth-message">{message}</div>}
          </form>

          <p>
            Don’t have an Account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
