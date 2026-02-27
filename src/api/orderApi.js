import axios from "axios";

const orderApi = axios.create({
  baseURL: "http://localhost:8081/api/orders",
});

// Attach JWT automatically
orderApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createOrder = (data) => orderApi.post("", data);

export const getMyOrders = () => orderApi.get("/my");

export const updateOrderStatus = (orderId, status) =>
  orderApi.put(`/${orderId}/status?status=${status}`);

export const cancelOrder = (orderId) =>
  orderApi.put(`/${orderId}/cancel`);