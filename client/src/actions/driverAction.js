import {
  createDriverService,
  deleteDriverService,
  fetchDriversService,
  updateDriverService,
} from '../services/driverService';

export const fetchDriversAction = async () => {
  try {
    const drivers = await fetchDriversService();
    return drivers;
  } catch (error) {
    throw new Error('Error fetching drivers: ' + error.message);
  }
};

export const createDriverAction = async driverData => {
  try {
    const newDriver = await createDriverService(driverData);
    return newDriver;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message;
    throw new Error(errorMessage);
  }
};

export const updateDriverAction = async driverData => {
  try {
    const updatedDriver = await updateDriverService(driverData);
    return updatedDriver;
  } catch (error) {
    throw new Error('Error updating driver: ' + error.message);
  }
};

export const deleteDriverAction = async driverId => {
  try {
    await deleteDriverService(driverId);
    return driverId;
  } catch (error) {
    throw new Error('Error deleting driver: ' + error.message);
  }
};
