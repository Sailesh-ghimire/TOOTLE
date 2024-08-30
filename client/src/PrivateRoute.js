// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthToken } from './services/authService';

// const ProtectedRoute = ({ element, ...rest }) => {
//   const token = localStorage.getItem('authToken');

//   return token ? element : <Navigate to='/login' />;
// };

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  return token ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
