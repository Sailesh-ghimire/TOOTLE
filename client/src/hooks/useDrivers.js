import { useQuery } from '@tanstack/react-query';
import {
  createDriverAction,
  deleteDriverAction,
  fetchDriversAction,
  updateDriverAction,
} from '../actions/driverAction';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDrivers = () => {
  return useQuery({
    queryKey: ['drivers'],
    queryFn: fetchDriversAction,

    onError: error => {
      console.error('Error fetching drivers:', error.message);
    },
  });
};

// Custom hook for creating a new driver
export const useCreateDriver = () => {
  return useMutation({
    mutationFn: createDriverAction,
    onSuccess: data => {
      console.log('Driver created successfully:', data);
    },
    onError: error => {
      console.error(error.message);
    },
  });
};

// hooks.js

// Hook to handle driver update
export const useUpdateDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDriverAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']); // Refresh driver data after update
      console.log('Driver updated successfully');
    },
    onError: error => {
      console.error('Error updating driver:', error.message);
    },
  });
};

// Hook to handle driver deletion
export const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDriverAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']); // Refresh driver data after delete
      console.log('Driver deleted successfully');
    },
    onError: error => {
      console.error('Error deleting driver:', error.message);
    },
  });
};
