import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://shadi-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
