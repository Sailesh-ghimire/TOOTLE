// PublicRoute.js
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  return token ? <Navigate to='/' /> : children;
};

export default PublicRoute;
