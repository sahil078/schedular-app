// src/api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getMentors = () => axios.get(`${API_BASE_URL}/mentors`);
export const getStudents = () => axios.get(`${API_BASE_URL}/students`);
export const getSessions = () => axios.get(`${API_BASE_URL}/sessions`);
export const scheduleSession = (sessionData) =>
  axios.post(`${API_BASE_URL}/schedule`, sessionData);
export const processPayment = (amount) =>
  axios.post(`${API_BASE_URL}/payment`, { amount });
