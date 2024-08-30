import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../validation/registerSchema';
import { useRegisterHook } from '../hooks/useRegister';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { mutate: registerUser, isLoading, isError } = useRegisterHook();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      await registerUser(data);
      toast.success('Registration Successful!');
      navigate('/login');
    } catch (error) {
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <label
              className='block text-gray-300 text-sm font-medium mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              {...register('name')}
              className={`border ${
                errors.name ? 'border-red-600' : 'border-gray-600'
              } bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder='Enter your name'
            />
            {errors.name && (
              <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-300 text-sm font-medium mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              {...register('email')}
              className={`border ${
                errors.email ? 'border-red-600' : 'border-gray-600'
              } bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder='Enter your email'
            />
            {errors.email && (
              <p className='text-red-600 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-300 text-sm font-medium mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              {...register('password')}
              className={`border ${
                errors.password ? 'border-red-600' : 'border-gray-600'
              } bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder='Enter your password'
            />
            {errors.password && (
              <p className='text-red-600 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-300 text-sm font-medium mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              {...register('confirmPassword')}
              className={`border ${
                errors.confirmPassword ? 'border-red-600' : 'border-gray-600'
              } bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder='Confirm your password'
            />
            {errors.confirmPassword && (
              <p className='text-red-600 text-sm mt-1'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            disabled={isLoading}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
