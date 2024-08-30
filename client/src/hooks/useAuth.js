import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useLoginHook = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginAction,
    onSuccess: data => {
      if (data.token) {
        console.log('hook response:', data);

        localStorage.setItem('authToken', data.token);
        toast.success('Login Successful!');
        navigate('/');
      }
    },
    onError: error => {
      console.error('Error during login:', error.message);
      toast.error(error.message || 'Invalid credentials, please try again.');
    },
  });
};
