import React, { useState } from 'react';
import { useUpdateDriver } from '../hooks/useDrivers';

const UpdateDriver = ({ driver, onClose }) => {
  // Local state to hold the form data
  const [vehicleNumber, setVehicleNumber] = useState(
    driver.vehicle_number || ''
  );
  const [vehicleModel, setVehicleModel] = useState(driver.vehicle_model || '');

  // Hook for updating driver data
  const { mutate: updateDriver, isLoading } = useUpdateDriver();

  const handleSubmit = e => {
    e.preventDefault();

    // Prepare the data payload
    const updatedData = {
      vehicle_number: vehicleNumber,
      vehicle_model: vehicleModel,
    };

    // Call the hook to perform the update
    updateDriver(
      { id: driver.id, ...updatedData },
      {
        onSuccess: () => {
          console.log('Driver updated successfully');
          onClose(); // Close the update form after success
        },
        onError: error => {
          console.error('Error updating driver:', error.message);
        },
      }
    );
  };

  return (
    <div className='p-6 bg-white shadow-md rounded'>
      <h2 className='text-lg font-bold mb-4'>Update Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Vehicle Number</label>
          <input
            type='text'
            value={vehicleNumber}
            onChange={e => setVehicleNumber(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Vehicle Model</label>
          <input
            type='text'
            value={vehicleModel}
            onChange={e => setVehicleModel(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Driver'}
        </button>
      </form>
    </div>
  );
};

export default UpdateDriver;
