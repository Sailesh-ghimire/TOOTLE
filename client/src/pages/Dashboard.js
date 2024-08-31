import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>
            Logout
          </button>
        </header>
        <main className='bg-white p-4 rounded shadow-md'></main>
      </div>
    </div>
  );
};

export default Dashboard;
