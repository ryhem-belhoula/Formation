// src/components/ManageCourses.jsx
import React, { useState, useEffect } from 'react';
import axios from './axiosInstance';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios.get('/courses')
      .then(res => setCourses(res.data))
      .catch(err => setMsg('Error loading courses.'));
  };

  const handleAdd = () => {
    if (!title || !description) {
      setMsg('Please fill in all fields.');
      return;
    }

    axios.post('/courses', { title, description })
      .then(() => {
        fetchCourses();
        setTitle('');
        setDescription('');
        setMsg('Course added successfully! 💖');
      })
      .catch(err => {
        setMsg('Error adding course.');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/courses/${id}`)
      .then(() => {
        fetchCourses();
        setMsg('Course deleted 💔');
      })
      .catch(err => {
        setMsg('Error deleting course.');
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-50 rounded-2xl shadow-lg border border-purple-100 mt-10">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-6">🎓 Manage Courses</h2>

      {msg && <p className="text-center text-pink-600 mb-4 font-medium">{msg}</p>}

      <div className="bg-white p-4 rounded-xl mb-6 shadow-sm">
        <h3 className="text-xl text-pink-600 font-semibold mb-2">➕ Add New Course</h3>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-2 border border-pink-200 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 mb-2 border border-pink-200 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium transition w-full flex items-center justify-center gap-2"
        >
          <FaPlus /> Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm relative"
          >
            <h4 className="text-lg font-semibold text-purple-700">{course.title}</h4>
            <p className="text-sm text-purple-500">{course.description}</p>
            <button
              onClick={() => handleDelete(course.id)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              title="Delete Course"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
