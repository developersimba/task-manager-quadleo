// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api'; // Your API utility to handle login

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    setError(''); // Clear previous error message

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Prepare data for API call
    const loginData = { email, password };

    try {
      const response = await loginUser(loginData);
      console.log('Login successful:', response.data.token);
      localStorage.setItem("token",response.data.token)
      // Redirect to dashboard or another page after successful login
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred while logging in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        
        {/* Display Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Login
        </button>

        

        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
