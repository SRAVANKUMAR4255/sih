// services/api.js - API Service Layer
// Handles all backend communication using Axios
// SIH25033 - PM Internship Allocation Engine

import axios from 'axios';

// Base URL for backend API
const BASE_URL = 'http://localhost:8000';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// API Functions

/**
 * Register a new student
 * @param {Object} studentData - Student registration data
 * @returns {Promise} API response
 */
export const registerStudent = async (studentData) => {
  try {
    const response = await apiClient.post('/students/register', studentData);
    return response.data;
  } catch (error) {
    console.error('Error registering student:', error);
    throw error;
  }
};

/**
 * Get all available internships
 * @returns {Promise} List of internships
 */
export const getInternships = async () => {
  try {
    const response = await apiClient.get('/internships');
    return response.data;
  } catch (error) {
    console.error('Error fetching internships:', error);
    throw error;
  }
};

/**
 * Run the AI matching algorithm
 * @returns {Promise} Matching process response
 */
export const runMatching = async () => {
  try {
    const response = await apiClient.post('/match/run');
    return response.data;
  } catch (error) {
    console.error('Error running matching algorithm:', error);
    throw error;
  }
};

/**
 * Get allocation results
 * @returns {Promise} List of match results
 */
export const getResults = async () => {
  try {
    const response = await apiClient.get('/match/results');
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};

// Optional: Get all registered students (for admin/debugging)
export const getStudents = async () => {
  try {
    const response = await apiClient.get('/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Export the axios instance for custom requests if needed
export default apiClient;