// src/components/ShowBooks.jsx
import React, { useEffect, useState } from 'react';
import axios from './axiosInstance';
import { FaBookOpen } from 'react-icons/fa';

export default function ShowBooks() {
  const [books, setBooks] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('/books')
      .then((res) => {
        setBooks(res.data);
        setMsg('');
      })
      .catch((err) => {
        setMsg('Error fetching books.');
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-purple-50 rounded-2xl shadow-lg border border-purple-100 mt-10">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-6">📚 Discover Our Books</h2>

      {msg && <p className="text-center text-pink-600 mb-4 font-medium">{msg}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaBookOpen className="text-purple-500 text-xl" />
              <h3 className="text-lg font-semibold text-pink-700">{book.title}</h3>
            </div>
            <p className="text-sm text-purple-500">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
