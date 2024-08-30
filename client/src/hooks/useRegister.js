import { useMutation } from '@tanstack/react-query';
import { registerAction } from '../actions/registerAction';

export const useRegisterHook = () => {
  return useMutation({
    mutationFn: registerAction,
    onSuccess: () => {},
    onError: error => {
      console.error('Error during registration:', error.message);
    },
  });
};
