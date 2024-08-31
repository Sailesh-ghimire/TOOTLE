import { loginService } from '../services/authService';

export const loginAction = async data => {
  try {
    const response = await loginService(data);
    if (response) {
      return response;
    } else {
      throw new Error('Login failed: No token received');
    }
  } catch (error) {
    throw new Error(error.message || 'An error occurred during login');
  }
};
