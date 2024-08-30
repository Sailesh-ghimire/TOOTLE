import React, { useState } from 'react';
import { useUpdateDriver } from '../hooks/useDrivers';
import CloseIcon from '@mui/icons-material/Close';
const UpdateDriver = ({ driver, onClose }) => {
  const [vehicleNumber, setVehicleNumber] = useState(
    driver.vehicle_number || ''
  );
  const [vehicleModel, setVehicleModel] = useState(driver.vehicle_model || '');

  const { mutate: updateDriver, isLoading } = useUpdateDriver();

  const handleSubmit = e => {
    e.preventDefault();

    const updatedData = {
      vehicle_number: vehicleNumber,
      vehicle_model: vehicleModel,
    };

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
    // <div className='p-6 bg-white rounded-lg  w-full max-w-md'>
    <div>
      <div className='flex justify-between items-center mb-4 border-b border-gray-200 pb-4'>
        <h2 className='text-2xl font-semibold text-gray-900'>Update Driver</h2>
        <button
          className='text-gray-500 hover:text-gray-700'
          onClick={onClose}
          aria-label='Close'
        >
          <CloseIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Vehicle Number
          </label>
          <input
            type='text'
            value={vehicleNumber}
            onChange={e => setVehicleNumber(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Vehicle Model
          </label>
          <input
            type='text'
            value={vehicleModel}
            onChange={e => setVehicleModel(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50'
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Driver'}
        </button>
      </form>
    </div>
  );
};
export default UpdateDriver;
