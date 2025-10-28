
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import './Auth.css';

// const Signup = () => {
//   const navigate = useNavigate();
  
//   // State for form fields
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState('Student');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       setMessage('Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password, role, college: 'AKGEC' }) // Add your college here
//       });

//       const data = await res.json();

//       if (res.ok) {
//         console.log('Signup success:', data);
//         setMessage('Signup successful!');
//         navigate('/login'); // Redirect to login page
//       } else {
//         setMessage(data.error || 'Signup failed.');
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('Server error. Try again later.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="auth-container">
//         <div className="auth-box">
//           <h2>Sign up to</h2>
//           <p>Campus Event Hub</p>
//           <form onSubmit={handleSubmit}>
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

//             <label>User name</label>
//             <input type="text" placeholder="Enter your user name" value={name} onChange={(e) => setName(e.target.value)} />

//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

//             <label>Confirm Password</label>
//             <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

//             <label>Your Role</label>
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option>Student</option>
//               <option>Organizer</option>
//             </select>

//             <button type="submit" className="btn">Register</button>
//           </form>
//           {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}
//           <p>Already have an Account? <Link to="/login">Sign In</Link></p>
//         </div>
//       </div>
//     </>
//   );
// };

//  export default Signup;

// privous code 

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import './Auth.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     role: '',
//   });

//   const [message, setMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setMessage('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, username, password, confirmPassword, role } = formData;
//     if (!email || !username || !password || !confirmPassword || !role) {
//       setMessage('Please fill all fields');
//       return;
//     }
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//       return;
//     }
//     setMessage('Registration successful !!');
//   };

//   return (
//     <>
//       <Navbar type="login" />
//       <div className="signup-container">
//         <div className="auth-box">
//           <h2>Welcome!</h2>
//           <p>Sign up to Campus Event Hub</p>

//           <form onSubmit={handleSubmit}>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <label>User name</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your user name"
//               value={formData.username}
//               onChange={handleChange}
//             />

//             <label>Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               <span
//                 className="password-icon"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             <label>Confirm Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showConfirm ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               <span
//                 className="password-icon"
//                 onClick={() => setShowConfirm(!showConfirm)}
//               >
//                 {showConfirm ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>

//             <label>Your Role</label>
//             <select name="role" value={formData.role} onChange={handleChange}>
//               <option value="">Select Role</option>
//               <option value="Student">Student</option>
//               <option value="Organizer">Organizer</option>
//             </select>

//             <button type="submit" className="btn full-width-btn">
//               Register
//             </button>

//             {message && <p className="auth-message">{message}</p>}
//           </form>

//           <p>
//             Already have an Account? <Link to="/login">Sign In</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

// new code of marger booth code 



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword, role } = formData;

    // Validation
    if (!email || !username || !password || !confirmPassword || !role) {
      setMessage('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Send data to backend
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: username,
          email,
          password,
          role,
          college: 'AKGEC',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Signup successful!');
        console.log('Signup success:', data);
        setTimeout(() => navigate('/login'), 1500); // redirect after success
      } else {
        setMessage(data.error || 'Signup failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error. Try again later.');
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
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>User name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your user name"
              value={formData.username}
              onChange={handleChange}
            />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="password-icon"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <label>Your Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Organizer">Organizer</option>
            </select>

            <button type="submit" className="btn full-width-btn">
              Register
            </button>

            {message && <p className="auth-message">{message}</p>}
          </form>

          <p>
            Already have an Account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
