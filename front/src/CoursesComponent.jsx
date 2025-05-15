// src/components/CoursesComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from './axiosInstance';
import { FaHeart } from 'react-icons/fa';

export default function CoursesComponent({ userEmail }) {
  const [courses, setCourses] = useState([]);
  const [msg, setMsg] = useState('');
  const [enrolled, setEnrolled] = useState({}); // tracks enrollment status per course

  useEffect(() => {
    if (!userEmail) {
      setMsg("Please log in to view courses.");
      return;
    }

    axios
      .get('/courses', {
        headers: {
          'X-User': userEmail,
        },
      })
      .then((res) => {
        setCourses(res.data);
        setMsg('');
      })
      .catch((err) => {
        setMsg(err.response?.data?.detail || 'Error fetching courses');
      });
  }, [userEmail]);

  const handleEnroll = (courseId) => {
    // Simulate enrollment
    setEnrolled((prev) => ({ ...prev, [courseId]: true }));
    setMsg('Successfully enrolled! 💫');
  };

  return (
    <div className="bg-pink-50 p-6 rounded-2xl shadow-xl w-full max-w-3xl mx-auto my-8 border border-pink-200">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">📚 Available Courses</h2>
      {msg && <p className="text-center text-pink-700 font-medium mb-6">{msg}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-5 rounded-xl border border-purple-100 shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{course.title}</h3>
            <p className="text-sm text-purple-500 mb-4">{course.description}</p>
            <div className='flex items-center justify-between gap-2'>
              <button
                onClick={() => handleEnroll(course.id)}
                disabled={enrolled[course.id]}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  enrolled[course.id]
                    ? 'bg-green-100 text-green-600 cursor-default'
                    : 'bg-pink-500 hover:bg-pink-600 text-white'
                }`}
              >
                {enrolled[course.id] ? (
                  <>
                    <FaHeart className="text-green-500" />
                    Enrolled
                  </>
                ) : (
                  <>
                    <FaHeart />
                    Enroll Now
                  </>
                )}
              </button>
              <button
                onClick={() => handleEnroll(course.id)}
                disabled={enrolled[course.id]}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  enrolled[course.id]
                    ? 'bg-green-100 text-green-600 cursor-default'
                    : 'bg-pink-500 hover:bg-pink-600 text-white'
                }`}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
