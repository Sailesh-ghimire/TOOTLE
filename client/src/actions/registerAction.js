import { registerService } from '../services/registerService';

export const registerAction = async data => {
  try {
    const response = await registerService(data);
    return response; // Response should contain any relevant information or confirmation
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred during registration'
    );
  }
};
