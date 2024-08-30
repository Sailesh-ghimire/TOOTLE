// DriversTable.js
import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useDeleteDriver, useDrivers } from '../hooks/useDrivers';
import UpdateDriver from '../components/updateDriver';

const DriversTable = () => {
  // Fetch drivers data
  const { data: drivers, isLoading, isError } = useDrivers();

  // Mutation hooks for update and delete
  // const { mutate: updateDriver } = useUpdateDriver();
  const { mutate: deleteDriver } = useDeleteDriver();

  const [selectedDriver, setSelectedDriver] = useState(null);

  // Define columns
  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'phone_number',
      header: 'Phone Number',
    },
    {
      accessorKey: 'vehicle_number',
      header: 'Vehicle Number',
    },
    {
      accessorKey: 'vehicle_model',
      header: 'Vehicle Model',
    },
    {
      accessorKey: 'license_number',
      header: 'License Number',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className='flex space-x-2'>
          <button
            className='bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600'
            onClick={() => handleUpdate(row.original)}
          >
            Update
          </button>
          <button
            className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
            onClick={() => handleDelete(row.original.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleUpdate = driver => {
    setSelectedDriver(driver); // Set the selected driver to open the update form
  };

  // Handle delete
  const handleDelete = driverId => {
    deleteDriver(driverId, {
      onSuccess: () => {
        console.log('Driver deleted successfully');
      },
    });
  };

  const table = useReactTable({
    data: drivers || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading drivers...</p>;
  if (isError) return <p>Error loading drivers.</p>;

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full leading-normal'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='hover:bg-gray-200'>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className='px-5 py-5 border-b border-gray-200 bg-white text-sm'
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDriver && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <UpdateDriver
            driver={selectedDriver}
            onClose={() => setSelectedDriver(null)} // Close the form on completion
          />
        </div>
      )}
    </div>
  );
};

export default DriversTable;
