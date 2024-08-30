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

export const useUpdateDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDriverAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
      console.log('Driver updated successfully');
    },
    onError: error => {
      console.error('Error updating driver:', error.message);
    },
  });
};

export const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDriverAction,
    onSuccess: () => {
      queryClient.invalidateQueries(['drivers']);
      console.log('Driver deleted successfully');
    },
    onError: error => {
      console.error('Error deleting driver:', error.message);
    },
  });
};
