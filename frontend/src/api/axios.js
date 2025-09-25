import axios from "axios";

// Make sure this matches your frontend .env
// VITE_API_URL=https://sih-o0u7.onrender.com/api
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://sih-o0u7.onrender.com/api",
  withCredentials: true, // needed if backend uses cookies/sessions
});

// Attach JWT token automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Debug: confirm base URL
console.log("API baseURL:", API.defaults.baseURL);

export default API;
