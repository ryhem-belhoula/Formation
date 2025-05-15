// src/components/SignupComponent.jsx
import React, { useState } from 'react';
import axios from './axiosInstance';

export default function SignupComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('/signup', { email, password });
      setMsg(res.data.message);
    } catch (error) {
      setMsg(error.response?.data?.detail || 'Signup failed');
    }
  };

  return (
    <div className="bg-pink-50 p-6 rounded-2xl shadow-md w-full max-w-md mx-auto my-4">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center">Create Account</h2>
      <input
        className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="bg-pink-500 text-white py-2 px-4 rounded-xl w-full hover:bg-pink-600 transition"
      >
        Sign Up
      </button>
      {msg && <p className="text-center text-pink-700 mt-2">{msg}</p>}
        <p className="text-center text-pink-500 mt-4">
            Already have an account? <a href="/login" className="text-pink-700 underline">Log In</a>
        </p>
    </div>
  );
}
