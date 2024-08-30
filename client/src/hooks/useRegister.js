import { useMutation } from '@tanstack/react-query';
import { registerAction } from '../actions/registerAction';

export const useRegisterHook = () => {
  return useMutation({
    mutationFn: registerAction,
    onSuccess: () => {
      // Optionally handle success (e.g., navigate to login or show a success message)
    },
    onError: error => {
      console.error('Error during registration:', error.message);
    },
  });
};
