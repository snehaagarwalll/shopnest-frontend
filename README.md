# ShopNest - Identity Frontend

This branch contains the authentication module for ShopNest Central Frontend.

## 🚀 Features Included

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Authentication Context (React Context API)
- Axios API Integration with Identity Service
- Tailwind CSS UI

## 🏗 Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Context API

## 📂 Folder Structure (Identity Only)
src/
├── api/
│ └── authApi.js
├── components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Login.jsx
│ └── Register.jsx
├── App.jsx
└── main.jsx

## 🔐 Authentication Flow

1. User registers or logs in.
2. JWT token is received from backend.
3. Token is stored in localStorage.
4. Protected routes verify authentication.
5. Axios attaches token to secured API requests.

