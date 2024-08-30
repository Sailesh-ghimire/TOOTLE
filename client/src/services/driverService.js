import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchDriversService = async () => {
  const token = localStorage.getItem('authToken');
  const response = await axios.get(`${BASE_URL}/drivers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createDriverService = async data => {
  const token = localStorage.getItem('authToken');
  try {
    const response = await axios.post(`${BASE_URL}/drivers`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDriverService = async driverData => {
  const token = localStorage.getItem('authToken');
  const response = await axios.put(
    `${BASE_URL}/drivers/${driverData.id}`,
    driverData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteDriverService = async driverId => {
  const token = localStorage.getItem('authToken');
  const response = await axios.delete(`${BASE_URL}/drivers/${driverId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
