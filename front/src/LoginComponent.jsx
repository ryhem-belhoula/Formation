// src/components/LoginComponent.jsx
import React, { useState } from 'react';
import axios from './axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent({ onLogin }) {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('password', password);

      const res = await axios.post('/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      onLogin(email);
      setMsg(res.data.message);
      localStorage.setItem('userEmail', res.data.email);
      navigate('/courses');

    } catch (error) {
      setMsg(error.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className="bg-purple-50 p-6 rounded-2xl shadow-md w-full max-w-md mx-auto my-4">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">Login</h2>
      <input
        className="w-full mb-3 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full mb-3 px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-purple-500 text-white py-2 px-4 rounded-xl w-full hover:bg-purple-600 transition"
      >
        Log In
      </button>
      {msg && <p className="text-center text-purple-700 mt-2">{msg}</p>}
        <p className="text-center text-purple-500 mt-4">
            Don't have an account? <a href="/signup" className="text-purple-700 underline">Sign Up</a>
        </p>
    </div>
  );
}
