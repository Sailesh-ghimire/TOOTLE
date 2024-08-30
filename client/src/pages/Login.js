import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginHook } from '../hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { mutate: login, isLoading } = useLoginHook();

  const onSubmit = async data => {
    login(data); // Call the mutation
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button
            type='submit'
            className='bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            disabled={isLoading}
          >
            Login
          </button>
          <p className='mt-6 text-center text-gray-400'>
            <span>Don't have an account? </span>
            <a href='/register' className='text-blue-400 hover:underline'>
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
