// src/utils/api.js
import axios from 'axios';

const API_URL = 'https://yourapi.com'; // Replace with your real API

export const registerUser = (data) => axios.post(`https://reqres.in/api/register`, data);
export const loginUser = (data) => axios.post(`https://reqres.in/api/login`, data);
export const getTasks = (token) => axios.get(`https://jsonplaceholder.typicode.com/todos`, { headers: { Authorization: `Bearer ${token}` } });
export const addTask = (data, token) => axios.post(`https://jsonplaceholder.typicode.com/todos`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateTask = (id, data, token) => axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTask = (id, token) => axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const toggleTask = (id, token) => axios.patch(`${API_URL}/tasks/${id}/toggle`, {}, { headers: { Authorization: `Bearer ${token}` } });
