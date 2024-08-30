import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='flex items-center justify-center h-full bg-gray-50'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to the Admin Dashboard
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          Manage your drivers and explore the features of the dashboard.
        </p>
        <a
          href='/drivers'
          className='inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300'
        >
          View Drivers
        </a>
      </div>
    </div>
  );
};
export default HomePage;
