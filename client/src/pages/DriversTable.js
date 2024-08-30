import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useDeleteDriver, useDrivers } from '../hooks/useDrivers';
import UpdateDriver from '../components/updateDriver';

const DriversTable = () => {
  const { data: drivers, isLoading, isError } = useDrivers();
  const { mutate: deleteDriver } = useDeleteDriver();

  const [selectedDriver, setSelectedDriver] = useState(null);
  const [updatingDriver, setUpdatingDriver] = useState(null);

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
            onClick={e => {
              e.stopPropagation();
              setUpdatingDriver(row.original);
            }}
          >
            Update
          </button>
          <button
            className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
            onClick={e => {
              e.stopPropagation();
              handleDelete(row.original.id);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleUpdate = driver => {
    setUpdatingDriver(driver);
  };

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
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='min-w-full'>
          <table className='min-w-full bg-white'>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className='border-b border-gray-300'>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className='px-6 py-3 bg-gray-500 text-white text-left text-xs font-semibold uppercase tracking-wider'
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
                <tr
                  key={row.id}
                  className='hover:bg-blue-50 transition-colors duration-200 cursor-pointer'
                  onClick={() => {}}
                >
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className='px-6 py-4 border-b border-gray-200 text-sm text-gray-700'
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {updatingDriver && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
            <UpdateDriver
              driver={updatingDriver}
              onClose={() => setUpdatingDriver(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DriversTable;
