// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthToken } from './services/authService';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('authToken');

  return token ? element : <Navigate to='/login' />;
};

export default ProtectedRoute;
