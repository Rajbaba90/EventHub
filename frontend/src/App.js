import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} / >
      </Routes>
    </Router>
  );
}
export default App;