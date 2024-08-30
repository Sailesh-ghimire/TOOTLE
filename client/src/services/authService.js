import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log('BASE_URL:', BASE_URL);

export const loginService = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    console.log('service response:', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(
      error.response?.data?.message || 'An error occurred during login'
    );
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};
