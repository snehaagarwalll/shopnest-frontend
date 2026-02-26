# ShopNest – Order Frontend Module

This branch implements the Order Frontend module for ShopNest, built on top of the Identity module.

---

## 🚀 Features

- Create Order functionality
- View My Orders page
- Secure API calls using JWT authentication
- Axios integration with Order Service (Port 8081)
- Automatic Bearer token attachment via interceptor

---

## 📂 Relevant Files

src/
 ├── api/
 │   └── orderApi.js
 ├── pages/
 │   ├── CreateOrder.jsx
 │   └── Orders.jsx
 

---

## 🔐 Authentication Dependency

This module depends on the Identity Frontend module:
- JWT token is stored in localStorage
- Axios interceptor attaches Authorization header
- Protected routes ensure authenticated access

---

## 🔄 Order API Integration

Base URL:
http://localhost:8081/api

Endpoints Used:
- POST /orders → Create Order
- GET /orders/my → Fetch logged-in user orders

---

## 🧠 Flow

1. User logs in (Identity module).
2. JWT token stored in localStorage.
3. Order requests automatically include Bearer token.
4. Backend validates token and returns user-specific data.

---
