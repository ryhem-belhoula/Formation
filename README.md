# 💖 Ririeducat

A full-stack web application for students to sign up, browse courses & books, and manage their favorite courses — beautifully designed with a girl-friendly pastel theme 🌸.

---

## Features

### Frontend (React.js + Tailwind CSS)

- Beautiful pastel design
- Signup / Login (email-based, no JWT)
- Browse all available courses
- Enroll in a course
- Mark/unmark favorites 💖
- Browse books from the backend

### 🧠 Backend (FastAPI + PostgreSQL)

- User authentication and route protection
- CRUD for courses and books
- Favorites API (MongoDB/Redis-compatible ID logic)
- CORS and secure headers

---

## Tech Stack

| Layer       | Stack                        |
|-------------|------------------------------|
| Frontend    | React.js, Tailwind CSS, Axios |
| Backend     | FastAPI, SQLAlchemy           |
| Database    | PostgreSQL                    |
| Styling     | Tailwind CSS                  |
| Others      | React Icons, Context API      |

---

## Setup Instructions

### 1. Backend Setup (FastAPI)

```bash
# Clone the repo
git clone https://github.com/ryhem-belhoula/Formatin.git
cd Formation/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the API
uvicorn main:app --reload
![alt text](<Capture d'écran 2025-05-15 214814.png>) ![alt text](<Capture d'écran 2025-05-15 212022.png>) ![alt text](<Capture d'écran 2025-05-15 212040.png>) ![alt text](<Capture d'écran 2025-05-15 212055.png>) ![alt text](<Capture d'écran 2025-05-15 212122.png>) ![alt text](<Capture d'écran 2025-05-15 212139.png>) ![alt text](<Capture d'écran 2025-05-15 212212.png>) ![alt text](<Capture d'écran 2025-05-15 212515.png>) ![alt text](<Capture d'écran 2025-05-15 214534.png>)}
