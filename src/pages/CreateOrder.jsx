import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const loginUser = (data) => authApi.post("/auth/login", data);
export const registerUser = (data) => authApi.post("/auth/register", data);

export default authApi;