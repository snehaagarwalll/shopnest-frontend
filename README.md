# ShopNest Central Frontend

This repository contains the frontend modules for ShopNest.

---


## 🧩 Modules Implemented


### 🔐 Identity Module

Handles authentication and authorization.

Features:

- User Registration

- User Login

- JWT-based authentication

- Token storage in localStorage

- Protected routes

- Axios interceptor for Bearer token attachment


Relevant Files:

- src/api/authApi.js

- src/context/AuthContext.jsx

- src/pages/Login.jsx

- src/pages/Register.jsx

- src/components/ProtectedRoute.jsx

---


### 📦 Order Module

Handles order creation and retrieval.

Features:

- Create Order functionality

- View My Orders page

- Axios integration with Order Service (Port 8081)

- Secure API calls using JWT authentication


Relevant Files:

- src/api/orderApi.js

- src/pages/CreateOrder.jsx

- src/pages/Orders.jsx

- src/pages/Home.jsx

---


## 🔄 Application Flow

1. User logs in via Identity module.

2. JWT token is stored in localStorage.

3. Order requests automatically include Bearer token.

4. Backend validates token and returns user-specific data.

---


## 🚀 Tech Stack

- React (Vite)

- Axios

- Tailwind CSS

- JWT Authentication

---


## 📌 Backend Services

- Identity Service → Port 8080

- Order Service → Port 8081