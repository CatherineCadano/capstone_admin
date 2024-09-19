// src/components/Admin.js

import React, { useState } from 'react';
import './Admin.css';
import logo from '../assets/eventlogo.png'; // Adjust this path based on your file structure

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Simulated password check (replace this with your actual logic)
    if (password !== 'correctPassword') {
      setError('Incorrect password.');
      return;
    }

    console.log('Admin signed up:', { email, password });
    setSuccess('Sign-up successful!');
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="small-logo" /> {/* Logo at the top left */}
      <div className="form-container">
        <h2>Admin</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && (
          <p style={{ color: 'red' }}>
            {error}
            {error === 'Incorrect password.' && ' Try <a href="/forgot-password">Forgot Password?</a>'}
          </p>
        )}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        {/* Additional Links */}
        <div className="additional-links">
          <p>
            Already have an account?
          </p>
          <p><a href="/login">Create New Account</a></p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
