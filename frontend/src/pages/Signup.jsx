
 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword, role } = formData;

    if (!email || !username || !password || !confirmPassword || !role) {
      toast.error("Please fill all fields", { position: "top-center" });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("🎉 Registration successful!", { position: "top-center", autoClose: 1500 });
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(data.message || "Signup failed. Try again.", { position: "top-center" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.", { position: "top-center" });
    }
  };

  return (
    <>
      <Navbar type="login" />
      <div className="signup-container">
        <div className="auth-box">
          <h2>Welcome!</h2>
          <p>Sign up to Campus Event Hub</p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />

            <label>User name</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span className="password-icon" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label>Your Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Organizer">Organizer</option>
            </select>

            <button type="submit" className="btn full-width-btn">Register</button>
          </form>

          <p>Already have an Account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
