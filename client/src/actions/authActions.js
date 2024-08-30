import { loginService } from '../services/authService';

// action.js

// action.js
export const loginAction = async data => {
  try {
    const response = await loginService(data);
    if (response) {
      console.log('action response:', response);

      return response;
      // Return the response if successful
    } else {
      throw new Error('Login failed: No token received'); // Explicitly throw an error if no token
    }
  } catch (error) {
    throw new Error(error.message || 'An error occurred during login'); // Pass the error message
  }
};
