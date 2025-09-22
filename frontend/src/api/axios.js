import axios from "axios";

// Create axios instance
const API = axios.create({
    baseURL: "http://localhost:5000/api", // 🔹 change to your deployed backend URL later
});

// Add JWT token automatically to every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // JWT stored after login
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;