// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api'; // Your API utility to handle registration

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle registration
  const handleRegister = async () => {
    setError(''); // Clear previous error message

    // Validate form data
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Prepare data for API call
    const registrationData = {
      email,
      password,
    };

    try {
      const response = await registerUser(registrationData);
      console.log('Registration successful:', response.data);

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred during registration.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="bg-white p-12 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create an Account</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Register
        </button>

        <div className="mt-6 text-center text-gray-600">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
