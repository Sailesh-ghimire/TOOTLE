import axios from 'axios';

const BASE_URL = `http://localhost:5000/api`;

export const fetchDriversService = async () => {
  const token = localStorage.getItem('authToken');
  const response = await axios.get(`${BASE_URL}/drivers`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include token in request headers
    },
  });
  return response.data;
};

// Service function to make the API call for creating a driver
export const createDriverService = async data => {
  const token = localStorage.getItem('authToken'); // Get the token from localStorage
  try {
    const response = await axios.post(`${BASE_URL}/drivers`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token for authenticated requests
      },
    });
    return response.data;
  } catch (error) {
    // Re-throw the error to be handled by the action
    throw error;
  }
};

export const updateDriverService = async driverData => {
  const token = localStorage.getItem('authToken'); // Get the stored token
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

// Service to delete a driver
export const deleteDriverService = async driverId => {
  const token = localStorage.getItem('authToken'); // Get the stored token
  const response = await axios.delete(`${BASE_URL}/drivers/${driverId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
