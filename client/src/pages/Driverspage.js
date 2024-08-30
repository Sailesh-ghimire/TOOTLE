import React from 'react';
import DriversTable from './DriversTable';
import { useDrivers } from '../hooks/useDrivers';

const DriversPage = () => {
  const { data, isLoading, isError } = useDrivers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading drivers.</div>;
  }

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h2 className='text-4xl font-bold text-gray-900 mb-6'>Drivers</h2>
      <DriversTable />
    </div>
  );
};

export default DriversPage;
