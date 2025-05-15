// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';
import CoursesComponent from './CoursesComponent';
import { useUser } from './context/UserContext';
import ManageCourses from './ManageCourses';
import ShowBooks from './ShowBooks';

function App() {
  const { userEmail, setUserEmail } = useUser();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6">
        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-6 drop-shadow-sm">
          🎀 Welcome to RiriEduct 💖
        </h1>

        <nav className="flex justify-center gap-4 mb-8">
          {!userEmail && (
            <>
              <a
                href="/signup"
                className="px-4 py-2 rounded-full bg-pink-300 text-white font-medium hover:bg-pink-400 shadow-md transition"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="px-4 py-2 rounded-full bg-purple-300 text-white font-medium hover:bg-purple-400 shadow-md transition"
              >
                Log In
              </a>
            </>
          )}

          {userEmail && (
            <>
              <a
                href="/"
                className="px-4 py-2 rounded-full bg-green-300 text-white font-medium hover:bg-green-400 shadow-md transition"
              >
                Courses
              </a>
              <a
                href="/books"
                className="px-4 py-2 rounded-full bg-green-300 text-white font-medium hover:bg-green-400 shadow-md transition"
              >
                Books
              </a>
              <a
                href="/admin"
                className="px-4 py-2 rounded-full bg-green-300 text-white font-medium hover:bg-green-400 shadow-md transition"
              >
                Manage Courses
              </a>
              <button
                onClick={() => {
                  setUserEmail(null);
                  localStorage.removeItem('userEmail');
                }}
                className="px-4 py-2 rounded-full bg-red-300 text-white font-medium hover:bg-red-400 shadow-md transition"
              >
                Log Out
              </button>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={userEmail ? <Navigate to="/courses" /> :<SignupComponent />} />
          <Route path="/login" element={userEmail ? <Navigate to="/courses" />:<LoginComponent onLogin={setUserEmail} />} />
          <Route
            path="/courses"
            element={
              userEmail ? (
                <CoursesComponent userEmail={userEmail} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin"
            element={
              userEmail ? (
                <ManageCourses />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/books"
            element={
              userEmail ? (
                <ShowBooks />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
