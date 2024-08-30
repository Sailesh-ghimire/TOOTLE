// DriversPage.js
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
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Drivers</h2>
      <DriversTable data={data} />
    </div>
  );
};

export default DriversPage;
