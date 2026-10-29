import axios from 'axios';

// The backend address. Defaults to the fake data server (npm run mock).
// When the real backend is ready, set VITE_API_URL in a local .env file.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' },
});

// If a login token is saved, send it with every request.
// Member 1's real login will save it later.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// How members will use it in their own service files:
//
//   import api from './api';
//   export const getDrivers = () => api.get('/drivers').then((res) => res.data);