import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export const authService = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
};

export const wellnessService = {
  logMood: (data) => api.post('/wellness/mood', data),
  getMoods: () => api.get('/wellness/mood'),
};

export const taskService = {
  getTasks: () => api.get('/tasks'),
  createTask: (data) => api.post('/tasks', data),
  toggleTask: (id) => api.put(`/tasks/${id}`),
};

export const aiService = {
  sendMessage: (message) => api.post('/ai/chat', { message }),
};

export default api;
