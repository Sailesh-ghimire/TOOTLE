// CreateDriverForm.js
import React, { useState } from 'react';
import { useCreateDriver } from '../hooks/useDrivers';
import { useForm } from 'react-hook-form';
import { driverSchema } from '../validation/driverSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

const CreateDriverForm = () => {
  const {
    mutate: createDriver,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useCreateDriver();

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(driverSchema),
  });

  const onSubmit = data => {
    createDriver(data, {
      onSuccess: () => {
        reset(); // Clear the form on success
        toast.success('Driver created successfully!');
      },
      onError: error => {
        const errorMessage =
          error?.message || 'An error occurred while creating the driver.';
        toast.error(`Error: ${errorMessage}`);
      },
    });
  };

  return (
    <div className='p-3 bg-white shadow-md rounded h-screen'>
      <h2 className='text-lg font-bold mb-4'>Create New Driver</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>Name</label>
          <input
            type='text'
            {...register('name')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            {...register('email')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>Phone Number</label>
          <input
            type='text'
            {...register('phone_number')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.phone_number && (
            <p className='text-red-500'>{errors.phone_number.message}</p>
          )}
        </div>

        {/* Vehicle Number Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>Vehicle Number</label>
          <input
            type='text'
            {...register('vehicle_number')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.vehicle_number && (
            <p className='text-red-500'>{errors.vehicle_number.message}</p>
          )}
        </div>

        {/* Vehicle Model Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>Vehicle Model</label>
          <input
            type='text'
            {...register('vehicle_model')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.vehicle_model && (
            <p className='text-red-500'>{errors.vehicle_model.message}</p>
          )}
        </div>

        {/* License Number Field */}
        <div className='mb-4'>
          <label className='block text-gray-700'>License Number</label>
          <input
            type='text'
            {...register('license_number')}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors.license_number && (
            <p className='text-red-500'>{errors.license_number.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Driver'}
        </button>
      </form>
    </div>
  );
};
export default CreateDriverForm;
